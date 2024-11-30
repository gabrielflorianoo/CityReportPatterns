import AbstractFormater from "../formaters/AbstractFormater.js";
import FormaterHTML from "../formaters/FormaterHTML.js";

export default class HTMLAdapter extends AbstractFormater {
    constructor() {
        super();
        this._formater = new FormaterHTML(); // Instancia o formatador HTML.
    }

    /**
     * Retorna o relatorio de cidades em formato HTML.
     * @param {Array} cities - Lista de cidades.
     * @returns {String} - Relatorio em HTML.
     */
    output(cities) {
        return this._formater.output(cities); // Chama o metodo de saida do formatador HTML.
    }
}
