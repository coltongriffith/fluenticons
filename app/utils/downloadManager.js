import JSZip from "jszip";
import { saveAs } from "file-saver";
import site from "~/site.js";

export const downloadAsZip = async (filesArray, zipFileName = site.zipName) => {
  const zip = new JSZip();
  filesArray.forEach((file) => {
    zip.file(file.name, file.content);
  });
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, zipFileName + ".zip");
};
