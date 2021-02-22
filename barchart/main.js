const width = window.innerWidth * 0.7,
    height = window.innerHeight * 0.7,
    margin = { top: 20, bottom: 70, left: 70, right: 40 },
    radius = 8;

/** these variables allow us to access anything we manipulate in
* init() but need access to in draw().
* All these variables are empty before we assign something to them.*/
let svg;
let xScale;
let yScale;
let yAxis;
let xAxis;

// Aplication state
let state = {
    data: [],
    selectedCategory: null,
    selectedLevel: null,
    selecteState: null
};

// Load data

d3.csv("../lib/data/week_1_clean.csv", d => ({
    total: +d.total.split(",").join(""),
    wrent: +d.wrent.split(",").join(""),
    noconf: +d.noconf.split(",").join(""),
    slightconf: +d.slightconf.split(",").join(""),
    modconf: +d.modconf.split(",").join(""),
    highconf: +d.highconf.split(",").join(""),
    deferred: +d.deferred.split(",").join(""),
    didnottenure: +d.didnottenure.split(",").join(""),
    state: d.state,
    category: d.category,
    characteristics: d.characteristics,

})).then(raw_data => {
    console.log("raw_data", raw_data)
    state.data = raw_data;
    init();
});

//INITIALIZING FUNCTION
// this will be run one time when data finishes loading in

function init() {

    // grouppedByState = d3.groups(state.data, d => d.state)
    // console.log("groupped by state", grouppedByState)

    // grouppedByCategory = d3.groups(state.data, d => d.category)
    // console.log("groupped by category", grouppedByCategory)

    // grouppedByCharacteristics = d3.groups(state.data, d => d.characteristics)
    // console.log("groupped by characteristics", grouppedByCharacteristics)

    // newData = state.data.map(row => {
    //     const { total, noconf, ...numberColumns } = row;
    //     return row;
    // })
    // console.log("newdata", newData)
    // SCALES
    xScale = d3
        .scaleBand()
        .domain(([
            ...Array.from(new Set(state.data.filter(obj_ect => obj_ect.category === state.selectedCategory).map(d => d.characteristics)))
        ]))
        .range([margin.left, width - margin.right]);
    console.log("x domain", xScale.domain())

    yScale = d3
        .scaleLinear()
        .domain(d3.extent(state.data, d => d.total))
        .range([height - margin.bottom, margin.top]);
    console.log("y domain", yScale.domain())
    // AXES

    xAxis = d3.axisBottom(xScale)
    yAxis = d3.axisLeft(yScale);


    const selectState = d3.select("#dropdown1")
        .on("change", function () {
            console.log("new selected state is", this.value);

            state.selectedState = this.value;
            draw();
        });

    const selectCategory = d3.select("#dropdown2")
        .on("change", function () {
            console.log("new selected category is", this.value);

            state.selectedCategory = this.value;
            draw();
        });
    const selectLevel = d3.select("#dropdown3").on("change", function () {
        console.log("new selected level is", this.value);

        state.selectedLevel = this.value;
        draw();
    });
    selectState
        .selectAll("option")
        .data(([
            ...Array.from(new Set(state.data.map(d => d.state)))
        ])) // unique data values-- (hint: to do this programmatically take a look `Sets`)
        .join("option")
        .attr("value", d => d)
        .text(d => d);

    selectCategory
        .selectAll("option")
        //.data(["noconf","total","wrent"])
        .data([
            ...Array.from(new Set(state.data.map(d => d.category)))
        ]) // unique data values-- (hint: to do this programmatically take a look `Sets`)
        .join("option")
        .attr("value", d => d)
        .text(d => d);

    selectLevel
        .selectAll("option")
        .data(["None or slight confidence", "Moderate or high confidence"])

        // unique data values-- (hint: to do this programmatically take a look `Sets`)
        .join("option")
        .attr("value", d => d)
        .text(d => d);

    svg = d3
        .select("#d3-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)

    // add the xAxis
    svg
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("x", "50%")
        .attr("dy", "3em")
        .text("Category");

    // add the yAxis
    svg
        .append("g")
        .attr("class", "axis y-axis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("y", "50%") //in the middle of line
        .attr("dx", "-3em")
        .attr("writing-mode", "vertical-rl")
        .text("Count")

    div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    draw();
    // calls the draw function
}

/**
* DRAW FUNCTION
* we call this everytime there is an update to the data/state
* */
function draw() {
    // filter the data for the selectedParty
    let filteredDataState// = state.grouppedByState;
    // if there is a selectedType, filter the data before mapping it to our elements
    if (state.selectedState !== null) {
        filteredDataState = state.data.filter(d => d.state === state.selectedState);
    }

    let filteredDataCategory = state.grouppedByCategory;
    // if there is a selectedType, filter the data before mapping it to our elements
    if (state.selectedState !== "All") {
        filteredDataCategory = state.data.filter(d => d.state === state.selectedCategory);
    }

    let filteredDataLevel = state.grouppedByCategory;
    // if there is a selectedType, filter the data before mapping it to our elements
    if (state.selectedState !== "All") {
        filteredDataLevel = state.data.filter(d => d.state === state.selectedLevel);
    }
    // update the scale domain (now that our data has changed)
    yScale.domain([0, d3.max(filteredDataState, d => d)]);
    xScale.domain(d3.extent(filteredDataCategory, d => d));
    // re-draw our yAxix since our yScale is updated with the new data
    d3.select("g.y-axis")
        .transition()
        .duration(1000)
        .call(yAxis.scale(yScale));
    d3.select("g.x-axis")
        .transition()
        .duration(1000)
        .call(xAxis.scale(xScale));// this updates the yAxis' scale to be our newly updated one
    const rect = svg
        .selectAll(".rect")
        .data(grouppedByState) // use `d.name` as the `key` to match between HTML and data elements
        .join(
            enter =>
                // enter selections -- all data elements that don't have a `.dot` element attached to them yet
                enter
                    .append("rect")
                    .attr("class", "rect") // Note: this is important so we can identify it in future updates
                    .attr("stroke", "grey")
                    .attr("opacity", 0.8)
                    .attr("x", d => xScale(d.category))
                    .attr("y", d => yScale(d.total))
                    .attr("width", xScale.bandwidth())
                    .attr("height", d => height - margin.bottom - yScale(d.total))
                    .attr("fill", "purple")
                    .call(enter =>
                        enter
                        // .transition() // initialize transition
                        // //.delay(d => 50 * d.rating) // delay on each element
                        // .duration(1200) // duration 500ms
                        // .attr("cy", d => yScale(d.rating))
                    ),
            update =>
                update.call(update =>
                    // update selections -- all data elements that match with a `.dot` element
                    update
                        .transition()
                        .duration(250)
                ),
            exit =>
                exit.call(exit =>
                    //     // exit selections -- all the `.dot` element that no longer match to HTML elements
                    exit
                        .transition()
                        // .delay(d => 10 * d.rating)
                        // .duration(500)
                        // .attr("cy", height)
                        .remove()
                )
        );
}