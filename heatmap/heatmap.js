
d3.csv("../lib/data/Age1.csv", d3.autoType).then(data => {

    console.log(data);
    const margin = { top: 30, right: 30, bottom: 40, left: 60 }
    width = 660 - margin.left - margin.right;
    height = 400 - margin.bottom - margin.top;

    // const myGroups = ["18 - 24", "25 - 39", "40 - 54", "55 - 64", "65 and above"]
    const myGroups = [...new Set(data.map(d => d.group))]
    const myVars = [...new Set(data.map(d => d.variable))]
    //["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"]

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
        .text("Age")
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
        .text("Variables")
        .attr("font-size", "12")
        .attr("fill", "black")

    // color scale

    var myColor = d3.scaleLinear()
        .range(["#F4D03F", "#F7DC6F", "#F9E79F", "#FCF3CF", "#D4E6F1", "#A9CCE3", "#7FB3D5", "#5499C7", "#2980B9", "#2471A3", "#1F618D", "#1A5276", "#154360"])
        //.range(["#E8F8F5", "#0E6251"])
        .domain(data.map(d => +d.value.split(",").join("")));
    console.log(myColor.domain())

    svg
        .selectAll()
        .data(data, function (d) { return d.group + ':' + d.variable; })
        .enter()
        .append("rect")
        .attr("x", d => xScale(d.group))
        .attr("y", d => yScale(d.variable))
        .attr("width", xScale.bandwidth())
        .attr("height", yScale.bandwidth())
        .style("fill", d => myColor(+d.value.split(",").join("")))

})
