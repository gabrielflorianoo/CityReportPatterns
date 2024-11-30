import AbstractFormater from "../formaters/AbstractFormater.js";
import FormaterTXT from "../formaters/FormaterTXT.js";

export default class TXTAdapter extends AbstractFormater {
    constructor() {
        super();
        this._formater = new FormaterTXT(); // Instancia o formatador TXT.
    }

    /**
     * Retorna o relatorio de cidades em formato TXT.
     * @param {Array} cities - Lista de cidades.
     * @returns {String} - Relatorio em TXT.
     */
    output(cities) {
        return this._formater.output(cities); // Chama o metodo de saida do formatador TXT.
    }
}
