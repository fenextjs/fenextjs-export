export interface FenextExportJsonFileProps {
    jsonData: object[], fileName: string
}

export function FenextExportJsonFile({fileName,jsonData}:FenextExportJsonFileProps) {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName + ".json";
    link.click();

    URL.revokeObjectURL(url);
}
