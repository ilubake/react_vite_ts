import React from "react";
import { useNavigate } from 'react-router-dom';
import type { FormProps } from "antd";
import { Form, Input, Button } from "antd";
// import { Form, Input, Checkbox, Button } from "antd";
import "./index.scss";
const LogIn: React.FC = () => {
const navigate = useNavigate();
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const token:string='asdassssssssdwwwwwwwwwwwrwasd';
    sessionStorage.setItem('token',JSON.stringify(token));
    navigate('/layout')
    console.log("Success:", values);
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div id="login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{ username: "12332112", password: "12345" }}
        validateMessages={{
          required: "此项为必填项",
        }}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[
            { required: true, message: "请输入用户名" },
            () => ({
              validator(_, value) {
                if (
                  !value ||
                  (value.toString().length === 8 && /^\d+$/.test(value))
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("用户名必须为8位数字"));
              },
            }),
          ]}
        >
          <Input placeholder="" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            { required: true, message: "请输入密码" },
            () => ({
              validator(_, value) {
                if (
                  !value ||
                  (value==='12345')
                ) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("密码为12345,请修改"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="密码:12345" />
        </Form.Item>
        {/* <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            登入
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LogIn;
