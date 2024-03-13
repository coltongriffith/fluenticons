import axios from "axios";

export async function getSvg(icon, color) {
  const { data } = await axios.get(`/icons/${icon}`);
  if (color) {
    return data.replace(/#212121/g, color);
  }
  return data;
}

export async function svgToVue(svgString, iconName) {
  return `<template>
  ${svgString}
</template>
<script>
export default {
  name: '${iconName.replace(".svg", "")}'
}
</script>`;
}

export async function svgToReact(svgString, iconName) {
  return `export function ${iconName.replace(".svg", "")}(props) {
  return (
  ${svgString}
  )
}`;
}

export async function svgToHtml(svgString, iconName) {
  let imageDefaults = {
    svg: svgString,
    mimetype: "image/png",
    width: 500,
    height: 500,
    quality: 1,
    outputFormat: "base64"
  };
  return svgToImage(imageDefaults)
    .then(function (outputData) {
      return `<img src="${outputData}" alt=" ${iconName.replace(".svg", "")}" />`;
    })
    .catch(function (err) {
      console.log(err);
    });
}

export async function getIconSnippet(type, icon, color = "#000000") {
  if (!icon) return;
  switch (type) {
    case "svg":
      return await getSvg(icon, color);
    case "vue":
      return svgToVue(await getSvg(icon, color), icon);
    case "react":
      return svgToReact(await getSvg(icon, color), icon);
    case "html":
      return svgToHtml(await getSvg(icon, color), icon);
  }
}

export async function svgToImage(settings) {
  let _settings = {
    svg: null,
    // Usually all SVG have transparency, so PNG is the way to go by default
    mimetype: "image/png",
    quality: 1,
    width: "auto",
    height: "auto",
    outputFormat: "base64"
  };

  // Override default settings
  for (let key in settings) {
    _settings[key] = settings[key];
  }

  return new Promise(function (resolve) {
    let svgNode;

    // Create SVG Node if a plain string has been provided
    if (typeof _settings.svg == "string") {
      // Create a non-visible node to render the SVG string
      let SVGContainer = document.createElement("div");
      SVGContainer.style.display = "none";
      SVGContainer.innerHTML = _settings.svg;
      svgNode = SVGContainer.firstElementChild;
    } else {
      svgNode = _settings.svg;
    }

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    let svgXml = new XMLSerializer().serializeToString(svgNode);
    let svgBase64 = "data:image/svg+xml;base64," + btoa(svgXml);

    const image = new Image();

    image.onload = function () {
      let finalWidth, finalHeight;
      if (_settings.width === "auto" && _settings.height !== "auto") {
        finalWidth = (this.width / this.height) * _settings.height;
      } else if (_settings.width === "auto") {
        finalWidth = this.naturalWidth;
      } else {
        finalWidth = _settings.width;
      }
      if (_settings.height === "auto" && _settings.width !== "auto") {
        finalHeight = (this.height / this.width) * _settings.width;
      } else if (_settings.height === "auto") {
        finalHeight = this.naturalHeight;
      } else {
        finalHeight = _settings.height;
      }

      canvas.width = finalWidth;
      canvas.height = finalHeight;
      context.drawImage(this, 0, 0, finalWidth, finalHeight);

      if (_settings.outputFormat == "blob") {
        canvas.toBlob(
          function (blob) {
            resolve(blob);
          },
          _settings.mimetype,
          _settings.quality
        );
      } else {
        resolve(canvas.toDataURL(_settings.mimetype, _settings.quality));
      }
    };

    image.src = svgBase64;
  });
}
