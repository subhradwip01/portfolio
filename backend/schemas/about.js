export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "resumeLink",
      title: "Resume Link",
      type: "file",
    },
    {
      name: "profilePic",
      title: "Profile Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "socialHandle",
      title: "Social Handle",
      type: "array",
      of: [
        {
          name: "social",
          title: "Social",
          type: "document",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
