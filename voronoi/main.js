d3.select(window).on("resize", callFunction);


callFunction();
function callFunction() {

    var tooltip = d3.select("body").append("div")
        .style("opacity", "0")
        .style("position", "absolute")

    var svgtest = d3.select("body").select("svg");

    if (!svgtest.empty()) {
        svgtest.remove();
    }

    var width = innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = innerHeight;

    var vertices = d3.range(100).map(function (d) { return [Math.random() * width, Math.random() * height]; });
    console.log(vertices);

    var voronoi = d3.voronoi().size([width, height]);
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)

    svg.append("g").attr("class", "polygons")
        .selectAll("path")
        .data(voronoi.polygons(vertices))
        .enter().append("path")
        .attr("d", function (d) { return "M" + d.join("L") + "Z"; })
        // .on("mousemove", function (d) {
        //     tooltip.style("opacity", "1")
        //         // .style("left", d3.event.pageX + "px") //tooltip one way
        //         // .style("top", d3.event.pageY + "px")
        //         .style("left", d[0][0] + "px") //tooltip different way
        //         .style("top", d[0][1] + "px")
        //     //  console.log(d) //number of corners
        //     console.log(d3.event)
        //     tooltip.html("Number of sides: " + d.length)


        // })
        .on("mousemove", function () { this.style.fill = "red"; }) // first parameter is the event your are listening for
        //without mouseout every polygon that was touche by mouse will stay red
        .on("mouseout", function () { this.style.fill = "yellow" })

    svg.append("g").attr("class", "dots")
        .selectAll("circle")
        .data(vertices)
        .enter().append("circle")
        .attr("cx", function (d) { return d[0]; })
        .attr("cy", function (d) { return d[1]; })
        .attr("r", "2.5")

    d3.select("g.polygons").select("path:nth-child(30)")
        .transition(1000).delay(1000)
        .style("fill", "red")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000).delay(1000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
    // .attr("transform", "translate(50,50)") //moves to 50 50 px

    d3.select("g.polygons").select("path:nth-child(30)").dispatch("mousemove")


    //we can make transitions go after one another

    d3.select("g.polygons").select("path:nth-child(60)")
        .transition(1000).delay(1000)
        .style("fill", "orange")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")

    d3.select("g.polygons").select("path:nth-child(50)")
        .transition(1000).delay(1000)
        .style("fill", "yellow")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")


    d3.select("g.polygons").select("path:nth-child(40)")
        .transition(1000).delay(1000)
        .style("fill", "green")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")

    d3.select("g.polygons").select("path:nth-child(70)")
        .transition(1000).delay(1000)
        .style("fill", "lightblue")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")

    d3.select("g.polygons").select("path:nth-child(80)")
        .transition(1000).delay(1000)
        .style("fill", "blue")
        .transition() //adds after the selection and before the thing you want to change
        .duration(3000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")

    d3.select("g.polygons").select("path:nth-child(90)")
        .transition(1000).delay(1000)
        .style("fill", "purple")
        .transition()
        .duration(3000)
        .style("fill", "red")
        .transition()
        .duration(3000)
        .style("fill", "orange")
        .transition()
        .duration(3000)
        .style("fill", "yellow")
        .transition()
        .duration(3000)
        .style("fill", "green")
        .transition()
        .duration(3000)
        .style("fill", "lightblue")
        .transition()
        .duration(3000)
        .style("fill", "blue")
        .transition()
        .duration(3000)
        .style("fill", "purple")
}