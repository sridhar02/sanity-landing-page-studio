export default {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Homepage title",
      type: "string",
      description: "What's the title of the homepage hero?",
    },
    {
      name: "subtitle",
      title: "Homepage subtitle",
      type: "string",
      description: "What's the subtitle of the homepage hero?",
    },
    {
      name: "image",
      title: "Homepage image",
      type: "image",
    },
    {
      name: "cta",
      description: "What's URL for the homepage CTA?",
      title: "CTA",
      type: "slug",
      options: {
        maxLength: 200,
      },
      validation: (Rule) => [Rule.required().error("Field cannot be empty")],
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The story",
    },
    {
      name: "subheading",
      title: "Sub Heading",
      type: "string",
      description: "what is the story about?",
    },
    {
      name: "theteam",
      title: "The Title",
      type: "string",
    },
    {
      name: "teamImage",
      title: "Team image",
      type: "image",
    },
    {
      name: "teamTitle",
      title: "Team Title",
      type: "string",
    },
    {
      name: "teamSubTitle",
      title: "Team Sub Title",
      type: "string",
    },
    {
      name: "youtubeLink",
      title: "Team Youtube Link",
      type: "youtube",
    },
    {
      name: "locationTitle",
      title: "Location Title",
      type: "string",
    },
    {
      name: "locationDescription",
      title: "Location Description",
      type: "string",
    },
  ],
};
