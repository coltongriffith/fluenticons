import * as JSZip from 'jszip';


var zip = new JSZip();
export const downloadAsZip = (filesArray, zipFileName = "fluenticons") => {
  filesArray.forEach(file => {
    zip.file(file.name, file.content);
  });
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, zipFileName + ".zip");
  });
};

