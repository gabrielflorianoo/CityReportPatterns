import assert from 'assert';
import { describe, it } from 'node:test';
import CitiesReporter from './src/CitiesReporter.js';
import getFormaterFactory from './src/formaters/getFormaterFactory.js';

// Mocking para o FileReader, para que não precise ler arquivos reais durante os testes
const mockCities = [
    { Nome: 'São Paulo' },
    { Nome: 'Rio de Janeiro' },
    { Nome: 'Belo Horizonte' },
];

const mockFileReader = {
    readJSON: () => mockCities,
    readCSV: () => mockCities,
};

describe('CitiesReporter', () => {
    // Teste para verificar se o formato HTML gera a saída correta
    it('should generate HTML report correctly', () => {
        // Usando o adaptador HTML para formatar
        const reporter = new CitiesReporter({
            formaterStrategy: getFormaterFactory('html'),
        });

        const output = reporter.report(mockCities);

        assert(output.includes('<h1>Relatório de Nomes de Cidades</h1>'));
        assert(output.includes('<li>São Paulo</li>'));
        assert(output.includes('<li>Rio de Janeiro</li>'));
        assert(output.includes('<li>Belo Horizonte</li>'));
    });

    // Teste para verificar se o formato TXT gera a saída correta
    it('should generate TXT report correctly', () => {
        // Usando o adaptador TXT para formatar
        const reporter = new CitiesReporter({
            formaterStrategy: getFormaterFactory('txt'),
        });

        const output = reporter.report(mockCities);

        assert(output.includes('Relatório de Nomes de Cidades'));
        assert(output.includes('- São Paulo'));
        assert(output.includes('- Rio de Janeiro'));
        assert(output.includes('- Belo Horizonte'));
    });

    // Teste para verificar se a leitura de JSON está correta
    it('should correctly parse JSON files', () => {
        const cities = mockFileReader.readJSON();
        assert(Array.isArray(cities)); // Verifica se é um array
        assert.strictEqual(cities.length, 3); // Verifica se tem 3 cidades
        assert.strictEqual(cities[0].Nome, 'São Paulo'); // Verifica o nome da primeira cidade
    });

    // Teste para verificar se a leitura de CSV está correta
    it('should correctly parse CSV files', () => {
        const cities = mockFileReader.readCSV();
        assert(Array.isArray(cities)); // Verifica se é um array
        assert.strictEqual(cities.length, 3); // Verifica se tem 3 cidades
        assert.strictEqual(cities[0].Nome, 'São Paulo'); // Verifica o nome da primeira cidade
    });
});

