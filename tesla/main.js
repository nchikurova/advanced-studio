d3.csv("../lib/data/Tesla_stock.csv", d3.autoType).

    then(data => {

        console.log(data);
        const width = 900;
        const height = 600;

        const margin = { top: 25, right: 20, bottom: 40, left: 40 };

        // tooltip = d3.select("body").append("div")
        //     .attr("class", "tooltip")
        //     .style("opacity", 0)
        //     .attr("position", "absolute");

        xScale = d3.scaleTime()
            .domain(d3.extent(data, d => d.date))
            .range([margin.left, width - margin.right])

        yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.close)])
            .range([height - margin.bottom, margin.top])

        const xAxis = (g, scale = xScale) => g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(scale).ticks(width / 80).tickSizeOuter(0))

        const yAxis = (g, scale = yScale) => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(scale).ticks(height / 40))
            .call(g => g.select(".domain").remove())

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
            .text("Date")
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
            .text("Price")
            .attr("font-size", "12")
            .attr("fill", "black")
        line = svg
            .selectAll("path")
            .data(data)
            .append("line")

        // .duration(5000)
        // .ease(d3.easeLinear)
        // .attrTween("stroke-dasharray", function () {
        //     const length = this.getTotalLength();
        //     return d3.interpolate(`0,${length}`, `${length},${length}`);
        // })



    })

