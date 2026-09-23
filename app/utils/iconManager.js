export async function getSvg(icon, color) {
  const res = await fetch(`/icons/${icon}`);
  if (!res.ok) throw new Error(`Could not load ${icon}`);
  const data = await res.text();
  if (color) {
    return data.replace(/#212121/g, color);
  }
  return data;
}

export function svgToVue(svgString, iconName) {
  return `<template>
  ${svgString}
</template>
<script>
export default {
  name: '${iconName.replace(".svg", "")}'
}
</script>`;
}

export function svgToReact(svgString, iconName) {
  return `export function ${iconName.replace(".svg", "")}(props) {
  return (
  ${svgString}
  )
}`;
}

export async function svgToHtml(svgString, iconName) {
  const outputData = await svgToImage({
    svg: svgString,
    mimetype: "image/png",
    width: 500,
    height: 500,
  });
  return `<img src="${outputData}" alt=" ${iconName.replace(".svg", "")}" />`;
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

// Renders an SVG (string or element) to a raster image via canvas.
// Resolves to a data URL, or a Blob when outputFormat is "blob".
export function svgToImage({
  svg,
  mimetype = "image/png",
  quality = 1,
  width,
  height,
  outputFormat = "base64",
}) {
  return new Promise((resolve, reject) => {
    let svgNode = svg;
    if (typeof svg === "string") {
      const container = document.createElement("div");
      container.innerHTML = svg;
      svgNode = container.firstElementChild;
    }

    const svgXml = new XMLSerializer().serializeToString(svgNode);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width || image.naturalWidth;
      canvas.height = height || image.naturalHeight;
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      if (outputFormat === "blob") canvas.toBlob(resolve, mimetype, quality);
      else resolve(canvas.toDataURL(mimetype, quality));
    };
    image.onerror = () => reject(new Error("Could not render icon"));
    image.src =
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgXml)));
  });
}
