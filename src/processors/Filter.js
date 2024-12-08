import AbstractProcessor from './AbstractProcessor.js';

class SortByName extends AbstractProcessor {
    process(data) {
        const sorted = data.sort((a, b) => a.Nome.localeCompare(b.Nome));
        return super.process(sorted);
    }
}

// Pode adicionar mais filtros aqui
// Exemplo - filtrar por estado, filtrar por população, etc

export { SortByName };
