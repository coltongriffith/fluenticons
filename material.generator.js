const iconsFolder = "./static/icons/material/";
const fs = require("fs");
const axios = require("axios");
let filledIcons = [];
let outlinedIcons = [];

fs.readdirSync(iconsFolder).forEach((file) => {
  let type = file.includes("outline") === true ? "outlined" : "filled";
  let IconName = pascalize(file.slice(0, -4).split("-outline")[0]);
  if (type === "filled") {
    filledIcons.push({
      name: IconName,
      componentName: `MaterialIcon${capitalizeString(type)}${IconName}`,
      svgFileName: file,
    });
  } else {
    outlinedIcons.push({
      name: IconName,
      componentName: `MaterialIcon${capitalizeString(type)}${IconName}`,
      svgFileName: file,
    });
  }
  let ComponentName = `${pascalize(
    file.slice(0, -4).split("-outline")[0]
  )}.vue`;
  let content = `<template>
    ${readFile(`./static/icons/material/${file}`, "utf8")}
  </template>

  <script>
    export default {
      name: 'MaterialIcon${capitalizeString(type)}${IconName}',
  };
  </script>`;
  if (type === "filled") {
    createFile(
      `./components/MaterialIcon/Filled/${ComponentName}`,
      IconName,
      content
    );
  } else {
    createFile(
      `./components/MaterialIcon/Outlined/${ComponentName}`,
      IconName,
      content
    );
  }
});

createFile(
  "./assets/icons/material/filled.json",
  "filled.json",
  JSON.stringify(filledIcons, null, 2)
);
createFile(
  "./assets/icons/material/outlined.json",
  "outlined.json",
  JSON.stringify(outlinedIcons, null, 2)
);

// function to capitalize a string
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// function to get synonyms of a given word from datamuse.com
async function getSynonyms(word) {
  const { data } = await axios.get(
    `https://api.datamuse.com/words?rel_syn=${word}`
  );
  return data.map((item) => item.word);
}

// function to create and save a file on given path
function createFile(filePath, fileName, content) {
  fs.writeFile(filePath, content, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`${fileName} was saved!`);
  });
}

// function to read a file and return its contents as a string
function readFile(file) {
  return fs.readFileSync(file, "utf8");
}

function pascalize(string) {
  const words = string.split("-");
  const capitalized = words.map((word) => capitalize(word));
  return capitalized.join("");
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
