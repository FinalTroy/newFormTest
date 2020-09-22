import { Layout, Steps } from "antd"
import React, { FC, useContext, useEffect, useMemo, useState } from "react"
import { FormContext } from "../context/Context"
import bloky from "../data/bloky"
import _ from 'lodash'

const { Sider, Content } = Layout
const { Step } = Steps
export const Main: FC = () => {
    const { data, setData } = useContext(FormContext); // Data z Contextu
    const [activeBlok, setActiveBlok] = useState<string | null>(null); // nastaveni aktivniho bloku
    // Ukladani aktivniho nazvu bloku
    useEffect(() => {        
        bloky.map((blok, index) => {
            if (index === data.step) return setActiveBlok(blok.key.toString())
        })
    },[data.step])
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
    return (<>
        <Layout>
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                paddingTop: '25px',
                paddingLeft: '10px'
            }} theme={'light'}>
                <Steps direction="vertical" current={data.step} percent={progress}>
                    {bloky.map((blok, index) => {
                        return (<>
                            <Step title={blok.key} key={blok.key.toString()} />
                        </>)
                    })}
                </Steps>
            </Sider>
        </Layout>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                {bloky.map((blok, index) => {
                    if (index === data.step) return <blok.component />
                        return <></>
                })}
            </Content>
        </Layout>
    </>
    )
}