import sys from "node:sys";

import CLIHandler from "./src/CLIHandler.js";
import getFormaterFactory from "./src/formaters/getFormaterFactory.js";
import CitiesReporter from "./src/CitiesReporter.js";
import FileReader from "./src/FileReader.js";
import { SortByName } from "./src/processors/Filter.js";

const { format, filename } = CLIHandler.parseArgs(process.argv);

const sortProcessor = new SortByName();

const citiesData = !filename
    ? FileReader.readJSON("data/cidades-2.json")
    : filename.endsWith(".json")
        ? FileReader.readJSON(filename)
        : FileReader.readCSV(filename);

const reporter = new CitiesReporter({
    formaterStrategy: getFormaterFactory(format),
});

let output = sortProcessor.process(citiesData);

output = reporter.report(output);

console.log(output);
