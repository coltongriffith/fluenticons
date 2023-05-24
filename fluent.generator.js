const iconsFolder = "./static/icons/fluent/";
const fs = require("fs");
let filledIcons = [];
let outlinedIcons = [];

const categoryMapping = {
  'Accessibility': ['access', 'wheelchair', 'braille', 'vision', 'hearing', 'assistive'],
  'Animals': ['dog', 'cat', 'lion', 'fish', 'bird', 'horse', 'insect'],
  'Arrows': ['up', 'down', 'left', 'right', 'next', 'previous', 'forward', 'backward', 'arrow'],
  'Audio': ['audio', 'music', 'sound', 'volume', 'mute', 'speaker'],
  'Business': ['business', 'office', 'work', 'job', 'career', 'company'],
  'Communication': ['communication', 'message', 'chat', 'talk', 'call', 'mail'],
  'Design': ['design', 'art', 'draw', 'paint', 'color', 'shape'],
  'Devices': ['device', 'phone', 'tablet', 'laptop', 'computer', 'watch'],
  'Emojis': ['emoji', 'smile', 'face', 'emotion', 'expression'],
  'Finance': ['finance', 'money', 'bank', 'payment', 'credit', 'dollar'],
  'Food and Drink': ['food', 'drink', 'eat', 'meal', 'fruit', 'vegetable', 'coffee', 'tea'],
  'Health': ['health', 'medical', 'doctor', 'hospital', 'medicine', 'wellness'],
  'Holidays': ['holiday', 'christmas', 'new year', 'easter', 'halloween', 'birthday'],
  'Home': ['home', 'house', 'room', 'kitchen', 'bathroom', 'bedroom'],
  'Maps and Locations': ['map', 'location', 'place', 'direction', 'navigation', 'gps'],
  'Nature': ['nature', 'tree', 'flower', 'plant', 'leaf', 'forest'],
  'People': ['people', 'person', 'user', 'man', 'woman', 'child'],
  'Science': ['science', 'lab', 'research', 'experiment', 'chemistry', 'biology'],
  'Sports': ['sport', 'game', 'play', 'ball', 'race', 'fitness'],
  'Technology': ['technology', 'tech', 'internet', 'web', 'code', 'software'],
  'Tools': ['tool', 'hammer', 'screwdriver', 'wrench', 'drill', 'saw'],
  'Transportation': ['transportation', 'car', 'bus', 'bike', 'plane', 'train'],
  'Weather': ['weather', 'sun', 'rain', 'snow', 'cloud', 'storm'],
};

fs.readdirSync(iconsFolder).forEach((file) => {
  let type = file.includes("filled") === true ? "filled" : "outlined";
  let iconName = pascalize(file.replace("ic_fluent_", "").split("_24")[0]);

  let category = Object.keys(categoryMapping).find(category => 
    categoryMapping[category].some(keyword => iconName.toLowerCase().includes(keyword))
  );
  category = category || 'Uncategorized';

  let iconData = {
    name: iconName,
    componentName: `FluentIcon${capitalizeString(type)}${iconName}`,
    svgFileName: file,
    category: category,
  };

  if (type === "filled") {
    filledIcons.push(iconData);
  } else {
    outlinedIcons.push(iconData);
  }

  let ComponentName = `${pascalize(
    file.replace("ic_fluent_", "").split("_24")[0]
  )}.vue`;
  let content = `<template>
    ${readFile(`./static/icons/fluent/${file}`, "utf8")}
  </template>

  <script>
    export default {
      name: 'FluentIcon${capitalizeString(type)}${iconName}',
  };
  </script>`;
  if (type === "filled") {
    createFile(
      `./components/FluentIcon/Filled/${ComponentName}`,
      iconName,
      content
    );
  } else {
    createFile(
      `./components/FluentIcon/Outlined/${ComponentName}`,
      iconName,
      content
    );
  }
});

createFile(
  "./assets/icons/fluent/filled.json",
  "filled.json",
  JSON.stringify(filledIcons, null, 2)
);
createFile(
  "./assets/icons/fluent/outlined.json",
  "outlined.json",
  JSON.stringify(outlinedIcons, null, 2)
);

// function to capitalize a string
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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
  const words = string.split("_");
  const capitalized = words.map((word) => capitalize(word));
  return capitalized.join("");
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
