//this makes it easier to map routes and display data consistently
const routingData = [
  {
    title: "Insert",
    page: {
      pathname: "/add",
      state: {
        name: "",
        addr: "",
        phone: "",
        roll: "",
        type: "add",
      },
    },
  },
  {
    title: "Search",
    page: "/search",
  },
  {
    title: "Show All",
    page: "/show",
  },
];

export default routingData;
