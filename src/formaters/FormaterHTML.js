import AbstractFormater from "./AbstractFormater.js";

/**
 * Classe que formata os dados das cidades em HTML.
 */
export default class FormaterHTML extends AbstractFormater {
    /**
     * Formata os dados das cidades em um documento HTML.
     *
     * @param {Array} cities - Lista de objetos contendo as cidades e seus dados.
     * @returns {string} - Documento HTML gerado com os nomes das cidades.
     */
    output(cities) {
        let html = `
            <!DOCTYPE HTML>
            <html>
                <head>
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                <title>Relatório de Nomes de Cidades</title>
                </head>
                <body>
                <h1>Relatório de Nomes de Cidades</h1>
                <ul>
            `;

        // Itera sobre as cidades e adiciona um item na lista HTML para cada cidade.
        for (let i = 0; i < cities.length; i++) {
            html += `     <li>${cities[i]["Nome"]}</li>\n`;
        }

        html += `
                </ul>
                </body>
            </html>`;

        return html; // Retorna o código HTML gerado.
    }
}
