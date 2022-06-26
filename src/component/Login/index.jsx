/**
 * 登录界面
 */
import React from "react"
import { Button, Form, Input } from 'antd';
export default function Login() {
  const [form] = Form.useForm()
  function handleClick() {
    console.log(form.getFieldValue('name'), form.getFieldValue('password'))
    //TODO 校验密码是否正确
  }
  const nameValid = [{ required: true, message: '账号必输' }]
  const passwordValid = [{ required: true, message: '密码必输' }]
  return (
    <div className="loginForm">
      <p className="loginTitle">任务管理系统</p>
      <Form form={form} onFinish={handleClick} >
        <Form.Item label="账号" name='name' rules={nameValid}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name='password' rules={passwordValid}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" size="middle" block htmlType="submit">登录</Button>
      </Form>
    </div>
  )
}