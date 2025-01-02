

export interface FenextExportCsvFileProps {
    items: object[], fileName: string
}

export const FenextExportCsvFile = ({ fileName, items }: FenextExportCsvFileProps) => {
    function converterLine(obj: object) {
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

    const converterCsv = (items: object[]) => {
        const header = Object.keys(items[0]);

        const lines = items.map(converterLine).join("\r\n");

        return header + "\r\n" + lines;
    };

    const csv = converterCsv(items);

    const exportedFilenmae = `${fileName}.csv`;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const n: any = navigator;

    if (n.msSaveBlob) {
        // IE 10+
        n.msSaveBlob(blob, exportedFilenmae);
    } else {
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
