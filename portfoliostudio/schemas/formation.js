export default {
  name: "formation",
  title: "Formation",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "year", title: "Year", type: "date" },
    { name: "school", title: "School", type: "string" },
    { name: "place", title: "Place", type: "string" },
    { name: "options", title: "Options", type: "string" },
    {
      name: "notions",
      title: "Notions",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
