import fs from "node:fs";

/**
 * Classe responsável por ler e parsear arquivos.
 */
export default class FileReader {
    /**
     * Lê e parsiona um arquivo JSON.
     * @param {string} filename - O caminho do arquivo JSON.
     * @returns {Object} - O conteúdo do arquivo parseado como objeto.
     */
    static readJSON(filename) {
        const content = fs.readFileSync(filename, "utf-8"); // Lê o conteúdo do arquivo JSON.
        return JSON.parse(content); // Parseia e retorna o conteúdo como objeto.
    }

    /**
     * Lê um arquivo CSV e retorna um array com os nomes das cidades.
     * @param {string} filename - O caminho do arquivo CSV.
     * @returns {Array} - Array de objetos contendo o nome das cidades.
     */
    static readCSV(filename) {
        const content = fs.readFileSync(filename, "utf-8"); // Lê o conteúdo do arquivo CSV.
        return content
            .split("\n") // Separa o conteúdo por linhas.
            .slice(1) // Ignora a primeira linha (cabeçalho).
            .map((line) => {
                const columns = line.split(","); // Divide cada linha em colunas.
                const Nome = columns[2]; // Obtém o valor da terceira coluna (Nome da cidade).
                if (Nome) {
                    return { Nome }; // Retorna um objeto com o nome da cidade se existir.
                }
            })
            .filter(Boolean); // Remove qualquer valor nulo ou indefinido.
    }
}
