const iconsFolder = "./static/icons/";
const fs = require("fs");
let filledIcons = [];
let outlinedIcons = [];

fs.readdirSync(iconsFolder).forEach(file => {
  let type = file.includes("filled") === true ? "filled" : "outlined";
  let IconName = pascalize(file.replace("ic_fluent_", "").split("_24")[0]);
  if (type === "filled") {
    filledIcons.push({
      name: IconName,
      componentName: `FluentIcon${capitalizeString(type)}${IconName}`,
      svgFileName: file
    });
  } else {
    outlinedIcons.push({
      name: IconName,
      componentName: `FluentIcon${capitalizeString(type)}${IconName}`,
      svgFileName: file
    });
  }
  let ComponentName = `${pascalize(
    file.replace("ic_fluent_", "").split("_24")[0]
  )}.vue`;
  let content = `<template>
    ${readFile(`./static/icons/${file}`, "utf8")}
  </template>

  <script setup>
  import { useIcon } from "../../../composables/useIcon.js"
  const props = defineProps(['type', 'gradient'])
  const { fill, opacity, angle, start, end } = useIcon(props)
  <\/script>`;
  if (type === "filled") {
    createFile(
      `../components/FluentIcon/Filled/${ComponentName}`,
      IconName,
      content
    );
  } else {
    createFile(
      `../components/FluentIcon/Outlined/${ComponentName}`,
      IconName,
      content
    );
  }
});

createFile(
  "./filled.json",
  "filled.json",
  JSON.stringify(filledIcons, null, 2)
);
createFile(
  "./outlined.json",
  "outlined.json",
  JSON.stringify(outlinedIcons, null, 2)
);

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function createFile(filePath, fileName, content) {
  fs.writeFile(filePath, content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${fileName} was saved!`);
  });
}

function readFile(file) {
  return fs.readFileSync(file, "utf8");
}

function pascalize(string) {
  const words = string.split("_");
  const capitalized = words.map(word => capitalize(word));
  return capitalized.join("");
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
