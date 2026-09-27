// Everything about the business lives here. To make this demo for a new client, edit this file only.
export const BUSINESS = {
  name: "Highland Cabins",          // shown on the login screen and browser tab
  shortName: "Highland",            // shown in the top bar
  builtBy: "Built by APX Labs",       // shown in the demo banner; leave "" to hide
  currency: "$",
  locale: "en-US",

  // One entry per cabin or room. rate = usual price per night (weekday / Fri–Sun), commission = fixed per night.
  // Up to 4 colors are defined in index.html (--u1 … --u4).
  units: [
    { id: "lodge",  name: "Pine Lodge",    short: "PIN", pax: 10, rate: [320, 380], commission: 25 },
    { id: "ridge",  name: "Ridge House",   short: "RDG", pax: 6,  rate: [195, 240], commission: 15 },
    { id: "fern",   name: "Fern Cottage",  short: "FRN", pax: 2,  rate: [115, 145], commission: 8 },
    { id: "brook",  name: "Brook Cottage", short: "BRK", pax: 4,  rate: [150, 185], commission: 10 },
  ],

  // Booking commissions are split evenly between these agents. Leave empty if there are none.
  agents: ["Carla", "Miguel"],

  // Expense categories, each with optional "for" choices.
  expenseCategories: {
    "Salaries": ["Housekeeping", "Caretaker", "Front desk"],
    "Electricity": [],
    "Water": [],
    "Propane": [],
    "Internet": [],
    "Supplies": ["Toiletries", "Linens", "Cleaning"],
    "Repairs": [],
    "Marketing": ["Facebook ads", "Booking site fees"],
    "Misc.": [],
  },

  // Demo only: typical monthly costs used to generate sample expenses (category, for, amount, day of month).
  sampleMonthlyExpenses: [
    ["Salaries", "Housekeeping", 2400, 15], ["Salaries", "Caretaker", 2100, 15], ["Salaries", "Front desk", 2300, 15],
    ["Electricity", "", 480, 10], ["Water", "", 130, 10], ["Internet", "", 80, 5], ["Propane", "", 110, 20],
    ["Supplies", "Toiletries", 210, 8], ["Supplies", "Linens", 120, 8], ["Marketing", "Facebook ads", 250, 3],
  ],
};
