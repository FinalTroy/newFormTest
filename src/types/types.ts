export interface IStore {
    form: {
        ClientIdentification?: {
            CompanyIdNr?: IStoreInput<string>;
            LegalFormId?: IStoreInput<number>;
            Country?: IStoreInput<number>;
        };
    };
    settings: {
        language: "cs" | "en";
        testMode: boolean;
    };
    step: number;
}

interface IStoreInput<T> {
    isValid: boolean;
    value: T | null;
}