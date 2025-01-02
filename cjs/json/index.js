"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextExportJsonFile = void 0;
function FenextExportJsonFile({ fileName, jsonData, }) {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + ".json";
    link.click();
    URL.revokeObjectURL(url);
}
exports.FenextExportJsonFile = FenextExportJsonFile;
//# sourceMappingURL=index.js.map