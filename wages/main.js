const width = window.innerWidth * 0.9,
    height = window.innerHeight / 2,
    margin = { top: 30, bottom: 50, left: 80, right: 40 };
default_selection = "All";
radius = 2;

let svg;
let xScale;
let yScale;

let state = {
    data: [],
    selectedCountry: [],//"All",
};
formatDate = d3.timeFormat("%Y")

d3.csv("../lib/data/min_wages.csv", d => ({
    year: new Date(d.year),
    country: d.country,
    count: +d.count,
})).then(raw_data => {
    console.log("raw_data", raw_data)
    state.data = raw_data;
    init();
});

function init() {

    xScale = d3.scaleTime()
        .domain(d3.extent(state.data, d => d.year))
        .range([margin.left, width - margin.right])

    yScale = d3.scaleLinear()
        .domain([0, d3.max(state.data, d => d.count)])
        .range([height - margin.bottom, margin.top])

    const yAxis = d3.axisLeft(yScale)
    const xAxis = d3.axisBottom(xScale)

    const selectElement = d3.select("#dropdown").on("change", function () {
        console.log("new selected country is", this.value);
        //'this' === the selectElement
        // this.value holds the dropdown value a user just selected
        state.selectedCountry = this.value;
        draw(); //re-draw the graph based on this new selection
    });
    // add in dropdown options from the unique values in the data
    selectElement
        .selectAll("option")
        .data([
            ...Array.from(new Set(state.data.map(d => d.country))),
            default_selection,
        ]) // unique data values-- (hint: to do this programmatically take a look `Sets`)
        .join("option")
        .attr("value", d => d)
        .text(d => d);

    selectElement.property("value", default_selection);

    svg = d3
        .select("#d3-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    svg
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("x", "50%")
        .attr("dy", "3em")
        .attr("fill", "black")
        .attr("opacity", 1)
        .text("Year");

    svg
        .append("g")
        .attr("class", "axis") // .attr("class, "axis") - x axis shows up on the top
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("y", "50%") //in the middle of line
        .attr("dx", "-5em")
        .attr("fill", "black")
        .attr("writing-mode", "vertical-rl")
        .text("Minimum wages, $")

    div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    draw();
    // calls the draw function
}
function draw() {
    // filter the data for the selectedParty
    let filteredData = state.data; //[]
    // if there is a selectedType, filter the data before mapping it to our elements
    if (state.selectedCountry !== "All") {
        filteredData = state.data.filter(d => d.country === state.selectedCountry);
    };

    const areaFunc = d3
        .area()
        .x(d => xScale(d.year))
        .y1(d => yScale(d.count))
        .y0(yScale(0));

    const dot = svg
        .selectAll(".dot")
        .data(filteredData, d => d.country)//, d => d.count,) // use `d.name` as the `key` to match between HTML and data elements
        .join(
            enter =>
                // enter selections -- all data elements that don't have a `.dot` element attached to them yet
                enter
                    .append("circle")
                    .attr("class", "dot") // Note: this is important so we can identify it in future updates
                    .attr("stroke", "grey")
                    .attr("opacity", 0.8)
                    .attr("fill", "#336600")
                    .attr("r", radius)
                    .attr("cy", d => yScale(d.count)) // initial value - to be transitioned
                    .attr("cx", d => xScale(d.year))
                    .on("mouseover", function (d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", 1)
                        div.html("Minimum Wage in " + formatDate(d.year) + " " + d.country + " was $" + d.count)
                            .style("left", (d3.event.pageX) + "px")
                            .style("top", (d3.event.pageY - 28) + "px")
                    })
                    .on("mouseout", function (d) {
                        div.transition()
                            .duration(200)
                            .style("opacity", 0)
                    }),
            update => update,
            exit =>
                exit.call(exit =>
                    // exit selections -- all the `.dot` element that no longer match to HTML elements
                    exit
                        .transition()
                        .delay(500)
                        .duration(100)
                        .attr("cy", height - margin.bottom)
                        .remove()
                )
        )
        // the '.join()' function leaves us with the 'Enter' + 'Update' selections together.
        // Now we just need move them to the right place
        .call(
            selection =>
                selection
                    .transition() // initialize transition
                    .duration(1000) // duration 1000ms / 1s
                    .attr("cx", d => xScale(d.year)) // started from the bottom, now we're here
        );

    const line = svg
        .selectAll("path.trend")
        //.data(d3.groups(filteredData, d => d.country))
        .data([filteredData])
        .join(
            enter => enter
                .append("path")
                .attr("class", "trend")
                .attr("opacity", 0), // start them off as opacity 0 and fade them in
            update => update, // pass through the update selection
            exit => exit.remove()
        )
        .call(selection => selection
            .transition() // sets the transition on the 'Enter' + 'Update' selections together.
            .duration(800)
            .attr("opacity", 0.8)
            .attr("d", d => areaFunc(d))
        );
}

