/*Reality-Guitar+Ropewalk*/
d3.select("#slider-1").on("input",function(){
    let i = parseInt(d3.select(this).property("value"));
    var o = (90 - 1.8*i)/100
    var p = (0 + 3*i)/100
    d3.select("#guitar-body")
        .attr("stroke-opacity",o)
        .attr("opacity",o);
  
    d3.selectAll("#strings_h").transition()
        .duration(400)
        .attr("stroke","black");
  
    d3.selectAll("#strings_v").transition()
        .duration(400)
        .attr("opacity",p);

    d3.select("#bridge")
        .attr("fill-opacity",(100 - 2*i)/100);
    

  d3.select("#stick")
        .attr("stroke-opacity",(100 - 2*i)/100);

    if(i==52){
        d3.select("#p2Reality")
          .style("color","black");
    }
  })


  