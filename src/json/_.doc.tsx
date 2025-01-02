export default {
    id: "fenext-export-json-file",
    idStorybook: "function-fenext-export-json-file",
    name: "FenextExportJsonFile",
    description:
        "La función FenextExportJsonFile permite exportar datos en formato JSON, generando y descargando automáticamente un archivo JSON en el navegador del usuario.",
    props: [
        {
            id: "fileName",
            type: "string",
            require: true,
            default: "undefined",
            description:
                "Nombre del archivo JSON que se generará. No incluye la extensión, ya que se añade automáticamente.",
        },
        {
            id: "jsonData",
            type: "object[]",
            require: true,
            default: "[]",
            description:
                "Datos en formato JSON que se exportarán al archivo. Se convierte automáticamente en una cadena JSON indentada.",
        },
    ],
    useExample: [
        {
            text: "Exportación básica",
            content: `FenextExportJsonFile({ 
    fileName: "data", 
    jsonData: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }] 
});`,
        },
        {
            text: "Exportación con datos complejos",
            content: `FenextExportJsonFile({ 
    fileName: "complex", 
    jsonData: [{ id: 1, info: { name: 'John', age: 30 } }, { id: 2, info: { name: 'Jane', age: 25 } }] 
});`,
        },
    ],
};
