const iconsFolder = "./static/icons/material/";
const fs = require("fs");
let filledIcons = [];
let outlinedIcons = [];

const categoryMapping = {
  'Action': ['action', 'do', 'perform', 'execute', 'act', 'move'],
  'Alert': ['alert', 'warning', 'alarm', 'notify', 'danger', 'caution'],
  'Avatars': ['avatar', 'user', 'person', 'profile', 'account', 'character'],
  'Communication': ['communication', 'message', 'chat', 'talk', 'call', 'mail'],
  'Content': ['content', 'text', 'image', 'video', 'audio', 'media'],
  'Device': ['device', 'phone', 'tablet', 'laptop', 'computer', 'watch'],
  'Editor': ['editor', 'write', 'edit', 'text', 'format', 'style'],
  'File': ['file', 'document', 'folder', 'paper', 'pdf', 'excel', 'word'],
  'Hardware': ['hardware', 'computer', 'laptop', 'phone', 'tablet', 'keyboard', 'mouse'],
  'Image': ['image', 'photo', 'picture', 'gallery', 'camera', 'edit'],
  'Maps': ['map', 'location', 'place', 'direction', 'navigation', 'gps'],
  'Navigation': ['navigation', 'menu', 'sidebar', 'drawer', 'up', 'down', 'left', 'right'],
  'Notification': ['notification', 'alert', 'message', 'alarm', 'bell', 'reminder'],
  'Places': ['place', 'location', 'map', 'area', 'spot', 'site'],
  'Social': ['social', 'friend', 'group', 'people', 'community', 'share'],
  'Toggle': ['toggle', 'switch', 'change', 'on', 'off', 'enable', 'disable'],
};

fs.readdirSync(iconsFolder).forEach((file) => {
  let type = file.includes("outline") === true ? "outlined" : "filled";
  let iconName = pascalize(file.slice(0, -4).split("-outline")[0]);

  let category = Object.keys(categoryMapping).find(category => 
    categoryMapping[category].some(keyword => iconName.toLowerCase().includes(keyword))
  );
  category = category || 'Uncategorized';

  let iconData = {
    name: iconName,
    componentName: `MaterialIcon${capitalizeString(type)}${iconName}`,
    svgFileName: file,
    category: category,
  };

  if (type === "filled") {
    filledIcons.push(iconData);
  } else {
    outlinedIcons.push(iconData);
  }

  let ComponentName = `${pascalize(
    file.slice(0, -4).split("-outline")[0]
  )}.vue`;
  let content = `<template>
  ${readFile(`./static/icons/material/${file}`, "utf8")}
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIcon${capitalizeString(type)}${iconName}',
  mixins: [icon]
};
</script>`;
  content = content
    .replaceAll("<svg", '<svg width="24" height="24" fill="none"')
    .replaceAll("<path", '<path :fill="fill" :fill-opacity="opacity"');
  content = [
    content.split('viewBox="0 0 24 24">')[0],
    'viewBox="0 0 24 24">',
    `<linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient>`,
    content.split('viewBox="0 0 24 24">')[1],
  ].join('');
  if (type === "filled") {
    createFile(
      `./components/MaterialIcon/Filled/${ComponentName}`,
      iconName,
      content
    );
  } else {
    createFile(
      `./components/MaterialIcon/Outlined/${ComponentName}`,
      iconName,
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
