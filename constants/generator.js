const fs = require("fs").promises;

const rawJson = require("./regular_icons.json");

let newJson = rawJson.map(item => {
  return {
    file_name: item.file_name,
    id: item.key,
    name: item.key.replace("_", " ")
  };
});

async function make() {
  try {
    await fs.writeFile(
      "cleaned_regular_icons.json",
      JSON.stringify(newJson, null, 4)
    );
    console.log("saved file");
  } catch (err) {
    console.log(err);
  }
}

make();