
d3.csv("../lib/data/totals_weeks.csv", d3.autoType).then(data => {

    console.log(data);
    const margin = { top: 30, right: 30, bottom: 40, left: 60 }
    width = 660 - margin.left - margin.right;
    height = 400 - margin.bottom - margin.top;


    const myGroups = [...new Set(data.map(d => d.week))]
    const myVars = [...new Set(data.map(d => d.level))]

    console.log("myGroups", myGroups)
    console.log("myVars", myVars)

    const xScale = d3.scaleBand()
        .domain(myGroups)
        .range([0, width])
        .padding(0.02);

    const yScale = d3.scaleBand()
        .domain(myVars)
        .range([height, 0])
        .padding(0.02);

    const xAxis = d3.axisBottom(xScale);

    const yAxis = d3.axisLeft(yScale);

    svg = d3.select("#d3-container")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.bottom + margin.top)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    svg
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("x", "50%")
        .attr("dy", "3em")
        .text("Weeks")
        .attr("font-size", "12")
        .attr("fill", "black")

    svg
        .append("g")
        .attr("class", "axis y-axis")
        .call(yAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("y", "50%") //in the middle of line
        .attr("dx", "-3em")
        .attr("writing-mode", "vertical-rl")
        .text("Confidence level")
        .attr("font-size", "12")
        .attr("fill", "black")

    // color scale

    const myColor = d3.scaleLinear()
        .range(["#A9D6E5"
            // , "#89C2D9"
            // , "#61A5C2"
            // , "#2C7DA0"
            // , "#2A6F97"
            // , "#23679A"
            , "#013A63"])
        //GREEN//.range(["#E8F8F5", "#0E6251"])
        //.range(["#C8E1E5", "#0e2629"])
        //.domain(d3.extent(data, d => +d.count.split(",").join("")))
        .domain(data.map(d => +d.count.split(",").join("")));
    console.log("color", myColor.domain())

    svg
        .selectAll()
        .data(data, function (d) { return d.week + ':' + d.level; })
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.week))
        .attr("y", d => yScale(d.level))
        .attr("width", xScale.bandwidth())
        .attr("height", yScale.bandwidth())
        .style("fill", d => myColor(+d.count.split(",").join("")))

})
