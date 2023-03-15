export default {
    name: "works",
    title: "Works",
    type: "document",
    fields: [
      {
        name: "company",
        title: "Company",
        type: "string",
      },
      {
        name: "logo",
        title: "Logo",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "link",
        title: "Link",
        type: "string",
      },
      {
        name: "role",
        title: "Role",
        type: "string",
      },
      {
        name: "startDate",
        title: "startDate",
        type: "date",
        options: {
          dateFormat: "YYYY-MM",
          calendarTodayLabel: "Today",
        },
      },
  
      {
        name: "endDate",
        title: "endtDate",
        type: "date",
        options: {
          dateFormat: "YYYY-MM",
          calendarTodayLabel: "Today",
        },
      },
  
      {
        name: "workDone",
  
        title: "WorkDone",
        type: "array",
        of: [
          {
            name: "work",
            title: "Work",
            type: "string",
          },
        ],
      },
    ],
  };
  