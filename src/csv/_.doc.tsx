export default {
    id: "fenext-export-csv-file",
    idStorybook: "function-fenext-export-csv-file",
    name: "FenextExportCsvFile",
    description:
        "La función FenextExportCsvFile permite exportar un conjunto de datos en formato CSV, generando y descargando automáticamente el archivo en el navegador del usuario.",
    props: [
        {
            id: "fileName",
            type: "string",
            require: true,
            default: "undefined",
            description:
                "Nombre del archivo CSV que se generará. No incluye la extensión, ya que se añade automáticamente.",
        },
        {
            id: "items",
            type: "object[]",
            require: true,
            default: "[]",
            description:
                "Lista de objetos que se convertirán en líneas del archivo CSV. Las claves del primer objeto se usarán como encabezados.",
        },
    ],
    useExample: [
        {
            text: "Básico",
            content: `FenextExportCsvFile({ 
    fileName: "export", 
    items: [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }] 
});`,
        },
        {
            text: "Con encabezados personalizados",
            content: `FenextExportCsvFile({ 
    fileName: "report", 
    items: [{ 'Employee Name': 'John', 'Age': 30 }, { 'Employee Name': 'Jane', 'Age': 25 }] 
});`,
        },
    ],
};
