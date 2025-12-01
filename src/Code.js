function doGet() {
  return HtmlService.createTemplateFromFile("Index")
    .evaluate()
    .setTitle("DocToMD")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
