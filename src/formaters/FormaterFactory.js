import HTMLAdapter from "../adapters/HTMLAdapter.js";
import TXTAdapter from "../adapters/TXTAdapter.js";

// Classe base para criar formatadores.
export default class FormaterFactory {
    /**
     * Metodo abstrato para criar formatador. Deve ser implementado nas subclasses.
     */
    createFormater() {
        throw new Error("Should implement createFormater method...");
    }
}

// Fábrica para criar formatador HTML.
export class HTMLFormaterFactory extends FormaterFactory {
    /**
     * Cria e retorna o adaptador HTML.
     * @returns {HTMLAdapter} - Adaptador HTML.
     */
    createFormater() {
        return new HTMLAdapter();
    }
}

// Fábrica para criar formatador TXT.
export class TXTFormaterFactory extends FormaterFactory {
    /**
     * Cria e retorna o adaptador TXT.
     * @returns {TXTAdapter} - Adaptador TXT.
     */
    createFormater() {
        return new TXTAdapter();
    }
}
