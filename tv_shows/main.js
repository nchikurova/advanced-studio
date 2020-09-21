d3.csv("../lib/data/tv_shows.csv", d3.autoType).then(data => {

    console.log(data);
    const width = 900;
    const height = 600;

    const margin = { top: 25, right: 20, bottom: 40, left: 40 };

    tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .attr("position", "absolute");

    xScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.Year))
        .range([0, width - margin.right])

    yScale = d3.scaleLinear()
        .domain(d3.extent(data, d => d.IMDb))
        .range([height - margin.bottom, margin.top])

    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"))

    const yAxis = d3.axisLeft(yScale);
    console.log(xScale)
    console.log(yScale)

    svg = d3.select("#d3-container")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
    svg
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(${margin.left},${height - margin.bottom})`)
        .call(xAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("x", "50%")
        .attr("dy", "3em")
        .text("Year")
        .attr("font-size", "12")
        .attr("fill", "black")

    svg
        .append("g")
        .attr("class", "axis y-axis")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(yAxis)
        .append("text")
        .attr("class", "axis-label")
        .attr("y", "50%") //in the middle of line
        .attr("dx", "-3em")
        .attr("writing-mode", "vertical-rl")
        .text("IMDb Rating")
        .attr("font-size", "12")
        .attr("fill", "black")


    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.Year))
        .attr("cy", d => yScale(d.IMDb))
        .attr("r", 4)
        .style("fill", "#69b3a2")

        .on('mouseover', function (d) {
            d3.select(this)
                .transition()
                .duration('50')
                .attr('opacity', '1')
                .attr("stroke", "black");

            tooltip.transition()
                .duration(50)
                .style("opacity", 1);

            tooltip.html("TV show: " + d.Title + '<br>' + "The year produced: " + d.Year + '</br>' + 'IMDb Rating: ' + d.IMDb)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            // .style("top", (d3.event.pageY -10)+"px")
            // .style("left",(d3.event.pageX +20)+"px")
        })


        //     // Marks the ones already viewed
        .on('mouseout', function (d) {
            d3.select(this).transition()
                .duration('50')
                .attr('opacity', '1')
                .attr('stroke', 'steelblue')

            tooltip.transition()
                .duration('50')
                .style("opacity", 0);
        });
})

