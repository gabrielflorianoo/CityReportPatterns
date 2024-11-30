/**
 * Classe responsável por gerar o relatório de cidades.
 */
export default class CitiesReporter {
    constructor({ formaterStrategy }) {
        this._formaterStrategy = formaterStrategy; // Define a estratégia de formatação.
    }

    /**
     * Gera o relatório usando a estratégia de formatação fornecida.
     * @param {string} filename - O nome do arquivo de dados a ser processado.
     * @returns {string} - Relatório gerado com base nos dados do arquivo.
     */
    report(filename) {
        return this._formaterStrategy.output(filename); // Chama o método output da estratégia de formatação.
    }
}
