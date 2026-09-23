import JSZip from "jszip";
import { saveAs } from "file-saver";

export const downloadAsZip = async (filesArray, zipFileName = "fluenticons") => {
  const zip = new JSZip();
  filesArray.forEach((file) => {
    zip.file(file.name, file.content);
  });
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, zipFileName + ".zip");
};
