# Projeto de Relatório de Cidades

Este projeto tem como objetivo gerar relatórios de cidades em diferentes formatos (HTML, TXT) a partir de arquivos JSON ou CSV. O projeto foi refatorado para aplicar padrões de projeto, princípios SOLID e melhorar a modularidade e escalabilidade.

## Mudanças Realizadas

### Padrões de Projeto Aplicados

1. **Padrão Criacional: Factory Pattern**
   - O padrão **Factory** foi utilizado para a criação de diferentes formatadores (HTML, TXT). A classe [`FormaterFactory`](./src/formaters/FormaterFactory.js) foi dividida em fábricas específicas (`HTMLFormaterFactory` e `TXTFormaterFactory`) para gerar instâncias dos formatadores adequados. Isso permite a adição de novos tipos de formatação no futuro sem precisar alterar o código existente, facilitando a extensão do sistema.
   
2. **Padrão Estrutural: Adapter Pattern**
   - O padrão **Adapter** foi implementado para adaptar os formatadores `FormaterHTML` e `FormaterTXT` a uma interface comum definida pela classe abstrata [`AbstractFormater`](./src/formaters/AbstractFormater.js). As classes [`HTMLAdapter`](./src/adapters/HTMLAdapter.js) e [`TXTAdapter`](./src/adapters/TXTAdapter.js) encapsulam o comportamento dos formatadores específicos, permitindo que o código cliente interaja com uma interface única para diferentes tipos de saída.
   
3. **Padrão Comportamental: Chain of Responsibility Pattern**
   - O padrão **Chain of Responsibility** foi utilizado para permitir o encadeamento de processadores de dados de forma flexível. A classe abstrata [`AbstractProcessor`](./src/processors/AbstractProcessor.js) define a estrutura base para processadores encadeáveis, como o [`SortByName`](./src/processors/Filter.js), que ordena os dados por nome. Novos processadores podem ser adicionados à cadeia sem alterar os processadores existentes, permitindo que a lógica de processamento seja configurada dinamicamente.

### Refatorações Realizadas

1. **Modularização e Separação de Responsabilidades**
   - O código foi refatorado para separar as responsabilidades em diferentes classes e pastas. A lógica de formatação foi movida para a pasta `formaters`, enquanto os adaptadores e fábricas foram organizados em `adapters` e `factories`, respectivamente. Isso segue o princípio da responsabilidade única (SRP) e facilita a manutenção e escalabilidade do código.

2. **Uso do Padrão de Projeto Factory para Criação de Formatadores**
   - Em vez de instanciar diretamente os formatadores `FormaterHTML` e `FormaterTXT` no código cliente, agora usamos fábricas para criar os adaptadores corretos. Isso reduz o acoplamento e facilita a adição de novos tipos de formatação no futuro.

3. **Leitura de Arquivos Genérica**
   - A classe [`FileReader`](./src/FileReader.js) agora é responsável por ler e parsear arquivos JSON e CSV de forma genérica, seguindo o princípio de reutilização de código. Ela abstrai a lógica de leitura de arquivos e permite que novos tipos de arquivo sejam adicionados facilmente no futuro.

### Princípios SOLID

- **S - Single Responsibility Principle (SRP)**
  - Cada classe foi projetada para ter uma única responsabilidade, como a leitura de arquivos ([`FileReader`](./src/FileReader.js)), a formatação dos dados ([`FormaterHTML`](./src/formaters/FormaterHTML.js), [`FormaterTXT`](./src/formaters/FormaterTXT.js)), e a criação das fábricas de formatadores ([`FormaterFactory`](./src/formaters/FormaterFactory.js)).

- **O - Open/Closed Principle (OCP)**
  - O código foi estruturado de forma que novas funcionalidades possam ser adicionadas sem modificar o código existente, como a adição de novos formatadores e novos tipos de arquivo de entrada.

- **L - Liskov Substitution Principle (LSP)**
  - A interface [`AbstractFormater`](./src/formaters/AbstractFormater.js) foi criada para garantir que qualquer formatação de saída (HTML, TXT) possa ser usada de forma intercambiável na classe [`CitiesReporter`](./src/CitiesReporter.js).

- **I - Interface Segregation Principle (ISP)**
  - As classes e interfaces foram projetadas para que o código cliente interaja apenas com o que é necessário, sem forçar a implementação de métodos não utilizados.

- **D - Dependency Inversion Principle (DIP)**
  - As dependências de implementação, como os formatadores e adaptadores, são passadas para a classe [`CitiesReporter`](./src/CitiesReporter.js) em vez de serem criadas internamente. Isso melhora a testabilidade e permite substituir as dependências facilmente.
