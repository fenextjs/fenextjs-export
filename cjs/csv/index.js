"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FenextExportCsvFile = void 0;
function converterLine(obj) {
    return Object.values(obj)
        .map((e) => {
        if (Array.isArray(e)) {
            return `${e.join("|")}`;
        }
        if (`${e}`.indexOf(",") > -1) {
            return `"${e}"`;
        }
        return `${e}`;
    })
        .join(",");
}
const converterCsv = (items) => {
    const header = Object.keys(items[0]);
    const lines = items.map(converterLine).join("\r\n");
    return header + "\r\n" + lines;
};
const FenextExportCsvFile = (items, fileName) => {
    const csv = converterCsv(items);
    const exportedFilenmae = `${fileName}.csv`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const n = navigator;
    if (n.msSaveBlob) {
        // IE 10+
        n.msSaveBlob(blob, exportedFilenmae);
    }
    else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
            // feature detection
            // Browsers that support HTML5 download attribute
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};
exports.FenextExportCsvFile = FenextExportCsvFile;
//# sourceMappingURL=index.js.map