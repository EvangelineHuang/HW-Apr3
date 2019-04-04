var w=500;
var h=500;
var svg=d3.select("#force1")
  .append("svg")
  .attr("width",w)
  .attr("height",h);
var dataset={
  nodes:[
    {href:"true.jpeg"},{href:"true-1.jpeg"},{href:"true-2.jpeg"},
    {href:"true-3.jpeg"},{href:"true-4.jpeg"},{href:"true-5.jpeg"},
    {href:"true-6.jpeg"},{href:"true-7.jpeg"},{href:"true-8.jpeg"},
    {href:"true-9.jpeg"},{href:"true-10.jpeg"},{href:"true-11.jpeg"}

  ],
  edges:[
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},{source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)},
    {source:Math.round(Math.random()*11),target:Math.round(Math.random()*11)}
  ]
}
var force=d3.forceSimulation(dataset.nodes)
            .force("charge",d3.forceManyBody().strength(-50))
            .force("link",d3.forceLink(dataset.edges).distance(100))
            .force("center",d3.forceCenter().x(w/2).y(h/2))
var edges=svg.selectAll("line")
             .data(dataset.edges)
             .enter()
             .append("line")
             .style("stroke","black")
var nodes=svg.selectAll("image")
             .data(dataset.nodes)
             .enter()
             .append("image")
             .attr("height",50)
             .attr("width",50)
             .attr("href",function(d){return d.href;})
force.on("tick",function(){
  edges.attr("x1",function(d){return d.source.x;})
       .attr("y1",function(d){return d.source.y;})
       .attr("x2",function(d){return d.target.x;})
       .attr("y2",function(d){return d.target.y;})
  nodes.attr("x",function(d){return d.x;})
       .attr("y",function(d){return d.y;})
})
////////////////////////////////////////////////
var svg=d3.select("#force2")
  .append("svg")
  .attr("width",w)
  .attr("height",h);
var colors=d3.scaleOrdinal(d3.schemeSet3 );
console.log(Math.random())
var data={
  nodes:[
    {size:Math.random()*15},{size:Math.random()*15},{size:Math.random()*15},
    {size:Math.random()*15},{size:Math.random()*15},{size:Math.random()*15},
    {size:Math.random()*15},{size:Math.random()*15},{size:Math.random()*15},
    {size:Math.random()*15},{size:Math.random()*15}

  ],
  edges:[
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)}
  ]
}
var force2=d3.forceSimulation(data.nodes)
            .force("charge",d3.forceManyBody())
            .force("link",d3.forceLink(data.edges).distance(80))
            .force("center",d3.forceCenter().x(w/2).y(h/2))
var edges2=svg.selectAll("line")
             .data(data.edges)
             .enter()
             .append("line")
             .style("stroke","black")
var nodes2=svg.selectAll("circle")
             .data(data.nodes)
             .enter()
             .append("circle")
             .attr("r",function(d){return d.size})
             .attr("fill",function(d,i){return colors(i);})
force2.on("tick",function(){
  edges2.attr("x1",function(d){return d.source.x;})
       .attr("y1",function(d){return d.source.y;})
       .attr("x2",function(d){return d.target.x;})
       .attr("y2",function(d){return d.target.y;})
  nodes2.attr("cx",function(d){return d.x;})
       .attr("cy",function(d){return d.y;})})
//////////////////////////////////////////////////
var svg=d3.select("#force3")
  .append("svg")
  .attr("width",w)
  .attr("height",h);
var color=d3.scaleOrdinal(d3.schemePaired )
var d={
  nodes:[
    {name:"Liam"},{name:"Isabella"},{name:"Mason"},
    {name:"Harper"},{name:"Evelyn"},{name:"Abigail"},
    {name:"Ethan"},{name:"Aiden"},{name:"Scarlett"},
    {name:"Scarlett"},{name:"Scarlett"}

  ],
  edges:[
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},{source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)},
    {source:Math.round(Math.random()*10),target:Math.round(Math.random()*10)}
  ]
}
var force3=d3.forceSimulation(d.nodes)
            .force("charge",d3.forceManyBody())
            .force("link",d3.forceLink(d.edges).distance(80))
            .force("center",d3.forceCenter().x(w/2).y(h/2))
var edges3=svg.selectAll("line")
             .data(d.edges)
             .enter()
             .append("line")
             .style("stroke","black")
var nodes3=svg.selectAll("text")
             .data(d.nodes)
             .enter()
             .append("text")

             .text(function(d){return d.name})
             .attr("stroke",function(d,i){return color(i);})
force3.on("tick",function(){
  edges3.attr("x1",function(d){return d.source.x;})
       .attr("y1",function(d){return d.source.y;})
       .attr("x2",function(d){return d.target.x;})
       .attr("y2",function(d){return d.target.y;})
  nodes3.attr("x",function(d){return d.x;})
       .attr("y",function(d){return d.y;})
})
