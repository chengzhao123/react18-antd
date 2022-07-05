import React, { useState } from "react"
import { Input, Button, Table, Modal, Form } from "antd"
export default function Page1(props) {
  const [modalVisble, setVisble] = useState(false)
  const [form] = Form.useForm()
  const [dataSource, setDataSource] = useState([])
  const columns = [
    { title: '姓名', dataIndex: 'name', align: 'center' },
    { title: '密码', dataIndex: 'password', align: 'center', render: (data, rowData) => {
      return (
        <div>******</div>
      )
    } },
    {
      title: '操作', dataIndex: '', align: 'center', width: 200 ,render: (e) => {
        return (
          <span>
            <Button style={{ marginRight: 10 }} onClick={() => handleEdit(e)}>编辑</Button>
            <Button type="danger">删除</Button>
          </span>
        )
      }
    }
  ]
  function handleEdit(e) {
    console.log(e)
  }
  function handleAdd() {
    form.resetFields()
    setVisble(true)
  }
  function handleOk() {
    form.validateFields().then(res => {
      res.key = new Date().getTime()
      setDataSource([...dataSource, res])
     setVisble(false)
    }, err => {
      console.log('then中的' + err)
    }).catch( err => {
      console.log('catch中的' + err)
    })
  }
  function handleCancel() {
    setVisble(false)
  }
  return (
    <div>
      <div>
        <Input placeholder="用户名" style={{ maxWidth: 200 }} />
        <Button type="primary" style={{ marginLeft: 20 }}>搜索</Button>
        <Button type="primary" style={{ marginLeft: 20 }} onClick={() => handleAdd()}>添加</Button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
      <Modal
        title="新增用户"
        visible={modalVisble}
        onOk={() => handleOk()}
        onCancel={() => handleCancel()}
      >
        <Form form={form} labelCol={{span: 4, offset: 0}}>
          <Form.Item label="用户名" name='name' rules={[{ required: true, message: '用户名必输' }]}>
            <Input autoComplete="off" />
          </Form.Item>
          <Form.Item label="密码" name='password' rules={[{ required: true, message: '密码必输' }]}>
            <Input.Password autoComplete="off" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}