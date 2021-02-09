export default {
  name: "formation",
  title: "Formation",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "year", title: "Year", type: "datetime" },
    { name: "school", title: "School", type: "string" },
    { name: "place", title: "Place", type: "string" },
    { name: "options", title: "Options", type: "text" },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
