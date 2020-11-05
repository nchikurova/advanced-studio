// // instantiate the scrollama
// const scroller = scrollama();

// // setup the instance, pass callback functions
// scroller
//     .setup({
//         step: ".step",
//     })
//     .onStepEnter((response) => {
//         // { element, index, direction }
//     })
//     .onStepExit((response) => {
//         // { element, index, direction }
//     });

// // setup resize event
// window.addEventListener("resize", scroller.resize);

d3.csv("../lib/data/weekly_total.csv", d => ({
    ...d,
    count: +d.count.split(",").join("")

}))
    .then(data => {

        const width = window.innerWidth * 0.9,
            height = window.innerHeight / 2,
            paddingInner = 0.2,
            margin = { top: 40, bottom: 40, left: 60, right: 40 };

        console.log(data);

        /** SCALES */
        // reference for d3.scales: https://github.com/d3/d3-scale
        const xScale = d3
            .scaleBand()
            .domain(data.map(d => d.week))
            .range([margin.left, width - margin.right])
            .paddingInner(paddingInner);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([height - margin.bottom, margin.top]);


        // reference for d3.axis: https://github.com/d3/d3-axis
        const xAxis = d3.axisBottom(xScale).ticks(data.length);
        const yAxis = d3.axisLeft(yScale)
        /** MAIN CODE */
        const svg = d3
            .select("#d3-container")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // append rects
        const rect = svg
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("y", d => yScale(d.count))
            .attr("x", d => xScale(d.week))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - margin.bottom - yScale(d.count))
            .attr("fill", "#008080")

        // append text
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
            .text("Week");
        svg
            .append("g")
            .attr("class", "axis")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .call(xAxis);
        svg
            .append("g")
            .attr("class", "axis")
            .attr("transform", `translate(${margin.left},0)`)
            .call(yAxis);
        d3.select("#button").on("click", function () {
            rect
                .transition()
                .attr("x", 50)
                .attr("y", 50)
        });

        const svg1 = d3
            .select("#d3-container1")
            .append("svg")
            .attr("width", 6600)
            .attr("height", 600);
        svg1.append("circle")
            .attr("cx", 400)
            .attr("cy", 400)
            .attr("r", 150)
            .attr("fill", "pink")
        const svg2 = d3
            .select("#d3-container2")
            .append("svg")
            .attr("width", 600)
            .attr("height", 600);
        svg2.append("rect")
            .attr("x", 300)
            .attr("y", 300)
            .attr("width", 200)
            .attr("height", 400)
            .attr("fill", "lightgreen")
    });
