"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextExportXlsxFile = void 0;
const XLSX = require("xlsx"); // eslint-disable-line
function converter(jsonData) {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");
    const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
    });
    return new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
}
function FenextExportXlsxFile(data, fileName) {
    const excelBlob = converter(data);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(excelBlob);
    link.download = fileName + ".xlsx";
    link.click();
}
exports.FenextExportXlsxFile = FenextExportXlsxFile;
//# sourceMappingURL=index.js.map