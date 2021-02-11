export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "from", title: "From", type: "date" },
    { name: "to", title: "To", type: "date" },
    { name: "entreprise", title: "Entreprise", type: "string" },
    { name: "sujet", title: "Sujet", type: "string" },

    {
      name: "taches",
      title: "Taches",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
