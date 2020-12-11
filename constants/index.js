const title = "Fluent Icons - Free & Open Source Icons from Microsoft";
const description =
  "MIT open source SVG icons from Microsoft, over 2100 beautiful icoons. Solid and 2px stroke based sets.";
export const defaultHead = {
  title,
  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content:
        "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
    },
    {
      hid: "description",
      name: "description",
      content: description
    },
    { name: "keywords", content: "icons, svg icons, free icons, svg icons" },
    {
      property: "og:title",
      name: "og:title",
      content: title
    },
    {
      property: "og:type",
      name: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      name: "og:url",
      content: "https://fluenticons.co/"
    },
    {
      property: "og:description",
      name: "og:description",
      content: description
    },
    {
      property: "og:site_name",
      name: "og:site_name",
      content: "Fluent Icons"
    }
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
};
