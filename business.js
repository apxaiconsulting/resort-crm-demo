// Everything about the business lives here. To make this demo for a new client, edit this file only.
export const BUSINESS = {
  name: "Highland Cabins",          // shown on the login screen and browser tab
  shortName: "Highland",            // shown in the top bar
  builtBy: "Built by APX AI",       // shown in the demo banner; leave "" to hide
  currency: "₱",
  locale: "en-PH",

  // One entry per cabin or room. rate = usual price per night (weekday / Fri–Sun), commission = fixed per night.
  // Up to 4 colors are defined in index.html (--u1 … --u4).
  units: [
    { id: "lodge",  name: "Pine Lodge",    short: "PIN", pax: 10, rate: [9000, 11000], commission: 500 },
    { id: "ridge",  name: "Ridge House",   short: "RDG", pax: 6,  rate: [5500, 7000],  commission: 400 },
    { id: "fern",   name: "Fern Cottage",  short: "FRN", pax: 2,  rate: [3500, 4500],  commission: 200 },
    { id: "brook",  name: "Brook Cottage", short: "BRK", pax: 4,  rate: [4500, 5500],  commission: 300 },
  ],

  // Booking commissions are split evenly between these agents. Leave empty if there are none.
  agents: ["Carla", "Miguel"],

  // Expense categories, each with optional "for" choices.
  expenseCategories: {
    "Salaries": ["Housekeeping", "Caretaker", "Front desk"],
    "Electricity": [],
    "Water": [],
    "LPG": [],
    "Internet": [],
    "Supplies": ["Toiletries", "Linens", "Cleaning"],
    "Repairs": [],
    "Marketing": ["Facebook ads", "Booking site fees"],
    "Misc.": [],
  },
};
