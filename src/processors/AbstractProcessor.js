class AbstractProcessor {
    setNext(processor) {
        this.nextProcessor = processor;
        return processor;
    }

    process(data) {
        if (this.nextProcessor) {
            return this.nextProcessor.process(data);
        }
        return data;
    }
}

export default AbstractProcessor;