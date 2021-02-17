export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "equi", title: "English", type: "string" },
    {
      name: "skilltype",
      title: "Skills Type",
      type: "string",
      options: {
        list: [
          { value: "hard", title: "Hard Skill" },
          { value: "soft", title: "Soft Skill" },
          { value: "others", title: "Others" },
        ],
      },
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { value: "software", title: "Software" },
          { value: "langage", title: "Langage" },
          { value: "speak", title: "Speak" },
          { value: "undefined", title: "Undefined" },
        ],
      },
    },
    {
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { value: "learning", title: "Learning" },
          { value: "basic", title: "Basiques" },
          { value: "intermediate", title: "Intermédiaires" },
          { value: "advanced", title: "Avancées" },
          { value: "expert", title: "Expert" },
        ],
      },
    },
  ],
};
