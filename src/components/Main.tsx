import { Layout, Steps } from "antd"
import React, { FC, useContext, useEffect, useMemo, useState } from "react"
import { FormContext } from "../context/Context"
import bloky from "../data/bloky"
import _ from 'lodash'
import { StepMenu } from "./Menu/StepMenu"

const { Sider, Content } = Layout
const { Step } = Steps
export const Main: FC = () => {
    const { data, setData } = useContext(FormContext); // Data z Contextu

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
                <StepMenu />
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