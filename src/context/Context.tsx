import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react'
import { IStore } from '../types/types';

export const FormContext = createContext<{
    data: IStore;
    setData?: Dispatch<SetStateAction<IStore>>;
}>({
    data: {
        form: {},
        settings: {
            language: "cs",
            testMode: true
        },
        step: 0
    }
});
export const FormProvider: FC = ({ children }) => {
    const [data, setData] = useState<IStore>({
        form: {
            ClientIdentification: {
                CompanyIdNr: {
                    isValid: true,
                    value: '0001'
                },
                LegalFormId: {
                    isValid: false,
                    value: null
                },
                Country: {
                    isValid: false,
                    value: null
                },
            },
        },
        settings: {
            language: "cs",
            testMode: true
        },
        step: 0
    })
    return (
        <FormContext.Provider value={{ data, setData }}>
            {children}
        </FormContext.Provider>
    )
}