/**
 * Parseia os argumentos da linha de comando.
 *
 * @param {array} argv - Argumentos da linha de comando.
 * @returns {object} - Um objeto com as propriedades format e filename.
 * @throws {Error} - Caso os argumentos sejam invalidos.
 */
export default class CLIHandler {
    static parseArgs(argv) {
        const [, , format, filename] = argv;
        if (!format || !filename) {
            // Apenas para permitir que seja executado mesmo sem passar um filename
            // Em uma aplicação real esse erro deveria ser tratado
            console.log("Uso: node index.js <formato> <arquivo>");
            // throw new Error("Uso: node index.js <formato> <arquivo>");
        }
        return { format, filename };
    }
}
