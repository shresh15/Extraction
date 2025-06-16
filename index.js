const fs = require("fs");
const pdfparse = require("pdf-parse");
const pdffile = fs.readFileSync("CS2.pdf");

pdfparse(pdffile).then(function (data) {
  console.log(data.numpages);
  console.log(data.info);
  console.log(data.text);
});

// // const fs = require("fs");
// // const PDFParser = require("pdf2json");

// // const pdfParser = new PDFParser();
// // pdfParser.on("pdfParser_dataError", (errData) =>
// //   console.error(errData.parserError)
// // );
// // pdfParser.on("pdfParser_dataReady", (pdfData) => {
// //   console.log(JSON.stringify(pdfData));
// // });

// // pdfParser.loadPDF("CS2.pdf");

// const fs = require("fs");
// const pdfjsLib = require("pdfjs-dist");

// const data = new Uint8Array(fs.readFileSync("CS2.pdf"));

// pdfjsLib.getDocument({ data }).promise.then((doc) => {
//   let text = "";
//   let pages = [];
//   for (let i = 1; i <= doc.numPages; i++) {
//     pages.push(
//       doc.getPage(i).then((page) => {
//         return page.getTextContent().then((content) => {
//           return content.items.map((item) => item.str).join(" ");
//         });
//       })
//     );
//   }
//   Promise.all(pages).then((pagesText) => {
//     text = pagesText.join("\n");
//     console.log(text);
//   });
// });
