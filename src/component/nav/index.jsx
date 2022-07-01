import React from 'react'
import { Breadcrumb, Tag } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
export default function Nav(props) {
    return (
        <div className="navDiv">
            <Breadcrumb separator="">
                {/* {
                    props.navList.map(item => {
                        return (
                            <Breadcrumb.Item>
                                <Tag closable color="processing" closeIcon={<CloseCircleOutlined />}>{item}</Tag>
                            </Breadcrumb.Item>
                        )
                    })
                } */}
                <Breadcrumb.Item>
                    <Tag closable color="processing" closeIcon={<CloseCircleOutlined />}>首页</Tag>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Tag closable color="processing" closeIcon={<CloseCircleOutlined />}>用户列表</Tag>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div>Admin</div>
        </div>
    )
}