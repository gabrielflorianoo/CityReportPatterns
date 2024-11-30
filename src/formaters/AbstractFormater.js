/**
 * Classe abstrata que define a interface para formatadores de dados.
 */
export default class AbstractFormater {
    /**
     * Método abstrato que deve ser implementado pelas subclasses.
     * O objetivo é formatar e retornar os dados das cidades de acordo com o formato específico (HTML, TXT, etc).
     *
     * @param {Array} cities - Lista de objetos contendo os dados das cidades.
     * @throws {Error} - Lança um erro caso a subclasse não implemente este método.
     */
    output(cities) {
        throw new Error("Should implement output method..."); // As subclasses devem implementar esse método para gerar a saída no formato desejado.
    }
}
