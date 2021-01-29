const DUMMY_DATA = [
  {
    sweet: "Gulab Jamun",
    value: 20,
  },
  {
    sweet: "Jalebi",
    value: 40,
  },
  {
    sweet: "Rasmalai",
    value: 30,
  },
  {
    sweet: "Kheer",
    value: 25,
  },

  {
    sweet: "Shrikhand",
    value: 15,
  },
  {
    sweet: "Ghevar",
    value: 20,
  },
  {
    sweet: "Gulab Jamun 1",
    value: 20,
  },
  {
    sweet: "Jalebi 1",
    value: 10,
  },
  {
    sweet: "Rasmalai 1",
    value: 30,
  },
  {
    sweet: "Kheer 1",
    value: 25,
  },

  {
    sweet: "Shrikhand 1",
    value: 15,
  },
  {
    sweet: "Ghevar 1",
    value: 20,
  },
];

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.sweet))
  .rangeRound([0, 650])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 50]).range([500, 0]);

const container = d3.select("svg").classed("container", true);

const bars = container
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", xScale.bandwidth())
  .attr("height", (data) => 500 - yScale(data.value))
  // .text((d) => `${data.region} ${data.value}`)
  .attr("x", (data) => xScale(data.sweet))
  .attr("y", (data) => yScale(data.value));

// setTimeout(() => {
//   bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
// }, 2000);
