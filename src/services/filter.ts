interface Filter {
  id: number;
  name: string;
  filterBy: string;
}

const filter: Filter[] = [
  { id: 1, name: "Today", filterBy: "today" },
  { id: 2, name: "Week", filterBy: "this_week" },
  { id: 3, name: "Month", filterBy: "this_month" },
  // { id: 4, name: "Year", filterBy: "this_year" },
];

export default filter;
