const XLSX = require("xlsx"); // eslint-disable-line

function converter(jsonData: object[]) {
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

export function FenextExportXlsxFile(data: object[], fileName: string) {
    const excelBlob = converter(data);
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(excelBlob);
    link.download = fileName + ".xlsx";
    link.click();
}
