export default {
  props: ["type", "gradient"],
  data() {
    return {
      key: 0,
      fill: "currentColor",
      opacity: 1,
      angle: 0,
      start: "white",
      end: "black",
    };
  },
  watch: {
    type: function () {
      if (this.type === "single") this.fill = "currentColor";
    },
    gradient: {
      deep: true,
      handler: function () {
        this.fill = "";
        const { degree, points, type } = this.gradient;
        this.angle = degree;
        (this.start = `rgba(${points[0].red}, ${points[0].green}, ${points[0].blue}, ${points[0].alpha})`),
          (this.end = `rgba(${points[1].red}, ${points[1].green}, ${points[1].blue}, ${points[1].alpha})`);
        if (type === "linear") this.fill = "url(#g1)";
        else this.fill = "url(#g2)";
      },
    },
  },
};