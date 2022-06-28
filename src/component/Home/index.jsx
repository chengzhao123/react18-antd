import React, { useState } from "react"
import { Outlet } from 'react-router-dom'
import { Button } from "antd"
export default function Home() {
    const [count, setCount] = useState(0)
    const [counts, setCounts] = useState({
        count1: 1,
        count2: 2,
        count3: 3
    })
    function handleCount(status, type) {
        if (type === '1') {
            setCounts({ ...counts, count1: counts.count1 + Number(status) })
        } else if (type === '2') {
            setCounts({ ...counts, count2: counts.count2 + Number(status) })
        } else {
            setCounts({ ...counts, count3: counts.count3 + Number(status) })
        }
    }
    return (
        <div>
            <p>useState的简单用法</p>
            <Button onClick={() => setCount(count - 1)}>-</Button>
            <span>当前的count数值{count}</span>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <p>useState的复杂用法</p>
            <div>
                <Button onClick={() => handleCount('-1', '1')}>count1-</Button>
                <span>当前的count1数值{counts.count1}</span>
                <Button onClick={() => handleCount('1', '1')}>count1+</Button>
            </div>
            <div>
                <Button onClick={() => handleCount('-1', '2')}>count2-</Button>
                <span>当前的count2数值{counts.count2}</span>
                <Button onClick={() => handleCount('1', '2')}>count2+</Button>
            </div>
            <div>
                <Button onClick={() => handleCount('-1', '3')}>count3-</Button>
                <span>当前的count3数值{counts.count3}</span>
                <Button onClick={() => handleCount('1', '3')}>count3+</Button>
            </div>
            <Outlet />
        </div>
    )
}