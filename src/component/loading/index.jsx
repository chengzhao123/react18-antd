import React from "react"
import { Spin } from 'antd'
export default function MyLoading() {
    return (
        <div className="routerSpin">
            <Spin tip="loading..." />
        </div>
    )
}