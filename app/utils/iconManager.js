// SVG markup for a file in /icons (a bare file name), a site path such as
// "/icons/home.svg", or a full URL (e.g. another size from the CDN). Package
// files have no fill; they get the same #212121 default as the site's own
// files so recoloring works the same way.
export async function getSvg(icon, color) {
  const res = await fetch(icon.includes("://") || icon.startsWith("/") ? icon : `/icons/${icon}`);
  if (!res.ok) throw new Error(`Could not load ${icon}`);
  let data = (await res.text()).trim();
  if (!/\bfill=/.test(data)) data = data.replace(/<path/g, '<path fill="#212121"');
  if (color) {
    return data.replace(/#212121/g, color);
  }
  return data;
}

// A Power Fx formula for an Image control's Image property.
export function svgToPowerApps(svgString) {
  const svg = svgString.replace(/\s*\n\s*/g, " ").replace(/"/g, "'");
  return `"data:image/svg+xml;utf8, " & EncodeUrl("${svg}")`;
}

export function svgToVue(svgString, componentName) {
  return `<template>
  ${svgString}
</template>
<script>
export default {
  name: '${componentName}'
}
</script>`;
}

// JSX needs camelCased attributes, and the component should forward props.
export function svgToReact(svgString, componentName) {
  const jsx = svgString
    .replace(/\s(fill|clip|stroke)-(rule|opacity|width|linecap|linejoin)=/g, (_, a, b) => ` ${a}${b[0].toUpperCase()}${b.slice(1)}=`)
    .replace("<svg ", "<svg {...props} ");
  return `export function ${componentName}(props) {
  return (
  ${jsx}
  )
}`;
}

export async function svgToHtml(svgString, alt) {
  const outputData = await svgToImage({
    svg: svgString,
    mimetype: "image/png",
    width: 500,
    height: 500,
  });
  return `<img src="${outputData}" alt="${alt}" />`;
}

export function svgToCss(svgString) {
  return `background-image: url("data:image/svg+xml,${encodeURIComponent(svgString)}");`;
}

export async function getIconSnippet(type, icon, componentName, color = "#000000") {
  if (!icon) return;
  switch (type) {
    case "svg":
      return await getSvg(icon, color);
    case "vue":
      return svgToVue(await getSvg(icon, color), componentName);
    case "react":
      return svgToReact(await getSvg(icon, color), componentName);
    case "html":
      return svgToHtml(await getSvg(icon, color), componentName);
    case "css":
      return svgToCss(await getSvg(icon, color));
    case "powerapps":
      return svgToPowerApps(await getSvg(icon, color));
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
