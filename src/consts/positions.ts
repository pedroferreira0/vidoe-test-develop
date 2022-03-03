export const Positions = {
  header: {
    height: ["auto", "auto", "40px"],
    top: ["8px", "8px", "unset"],
    bottom: [8, "unset", 0],
    right: [40, 40, "unset"],
    left: ["unset", "unset", 0],
    padding: ["2", "2", "0"],
  },
  footer: {
    display: ["unset", "unset", "none"],
    height: [64, 72],
    width: ["100vw", "40vw"],
  },
  widget: {
    display: ["unset", "unset", "none"],
    right: [0],
    bottom: [80],
    maxH: ["60vh", "calc(100% - 80px)"],
    width: ["100%", "100%"],
    maxW: ["100%", "375px"],
    minW: ["unset", 450],
    maxInnerHeight: ["calc(80vh - 150px)", `calc(100vh - 100px)`],
  },
  live: {
    height: ["100%", "100%", "calc(100% - 40px)"],
    width: ["100vw"],
  },
};
