import React, { FC, useContext, useEffect, useMemo, useState } from "react"
import { Steps } from "antd";
import _ from "lodash";
import { FormContext } from "../../context/Context";
import bloky from "../../data/bloky";

export const StepMenu: FC = () => {
    const { data, setData } = useContext(FormContext); // Data z Contextu
    const [activeBlok, setActiveBlok] = useState<string | null>(null); // nastaveni aktivniho bloku

    // Ukladani aktivniho nazvu bloku
    useEffect(() => {
        bloky.map((blok, index) => {
            if (index === data.step) return setActiveBlok(blok.key.toString())
        })
    }, [data.step])

    // Memoizovani progress baru na zmenu dat a bloku
    const progress = useMemo(() => {
        const fields = _.get(data, `form.${activeBlok}`, {})
        const fieldLength = Object.keys(fields).length
        let valid: number = 0
        for (const [key, value] of Object.entries(fields)) {
            if (_.get(value, 'isValid') === true) valid++
        }
        const num = (valid / fieldLength) * 100 // procentualni hodnota vyplnenych fieldu
        return !num ? 0 : num
    }, [data, activeBlok])

    return (
        <Steps direction="vertical" current={data.step} percent={progress}>
            {bloky.map((blok, index) => {
                return (<>
                    <Steps.Step title={blok.key} key={blok.key.toString()} />
                </>)
            })}
        </Steps>
    )
}