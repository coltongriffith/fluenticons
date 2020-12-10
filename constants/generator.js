const fs = require("fs").promises;

const rawJson = require("./filled_icons.json");

let newJson = rawJson.map(item => {
  return {
    id: item.key,
    file: item.file_name,
    name: item.key.replace(/_/gi, " ")
  };
});

async function make() {
  try {
    await fs.writeFile(
      "new.json",
      JSON.stringify(newJson, null, 4)
    );
    console.log("saved file");
  } catch (err) {
    console.log(err);
  }
}

make();
