import AbstractFormater from "./AbstractFormater.js";

/**
 * Classe que formata os dados das cidades em formato de texto simples (TXT).
 */
export default class FormaterTXT extends AbstractFormater {
    /**
     * Formata os dados das cidades em um relatório no formato TXT.
     *
     * @param {Array} cities - Lista de objetos contendo as cidades e seus dados.
     * @returns {string} - Relatório gerado em formato de texto simples (TXT).
     */
    output(cities) {
        let txt = `Relatório de Nomes de Cidades
  =============================\n`;

        // Itera sobre as cidades e adiciona uma linha para cada cidade no relatório.
        for (let i = 0; i < cities.length; i++) {
            txt += `- ${cities[i]["Nome"]}\n`;
        }

        return txt; // Retorna o relatório em formato TXT.
    }
}
