import { HTMLFormaterFactory } from "./FormaterFactory.js";
import { TXTFormaterFactory } from "./FormaterFactory.js";

// Agora podemos criar outros formatadores como por exemplo XML, json, etc

const factories = {
    txt: new TXTFormaterFactory(),
    html: new HTMLFormaterFactory(),
    // 'json': new JSONFormaterFactory()
};

/**
 * Retorna uma fábrica de formatadores com base no parâmetro recebido.
 *
 * @param {string} param - O parâmetro que define qual fábrica deve ser retornada.
 * @returns {AbstractFormater} - Uma fábrica de formatadores.
 * @throws {Error} - Caso o parâmetro seja inválido.
 */
export default function getFormaterFactory(param) {
    const factory = factories[param];
    if (!factory) {
        throw new Error("Estratégia inválida");
    }
    return factory.createFormater();
}
