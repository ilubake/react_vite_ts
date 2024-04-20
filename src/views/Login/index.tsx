import React,{useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import type { FormProps } from "antd";
import "./index.scss";
import { loginData } from "../../api/user/types";
import { useDispatch } from "react-redux";
import { useTypedSelector, AppDispatch } from "../../store/rootTypes";
import {
  selectInitialSlice,
  userLogin,
} from "../../store/slice/initialSlice/initialSlice";
import showMessage from "../../utils/showMessage";
const LogIn: React.FC = () => {
  const dispatch:AppDispatch = useDispatch();
  const {data,} = useTypedSelector(selectInitialSlice);
  const navigate = useNavigate();
  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };
    // 定义一个 useEffect 来观察 data 的变化
    useEffect(() => {

      if (data) {
        // 检测data 更新
        console.log('Fetched data:', data);
        if (data.token) {
          sessionStorage.setItem("token", JSON.stringify(data?.token));
          navigate("/layout");
          console.log("Success:",);
        }else{
          showMessage('xxx')
        }
      }
    }, [data,navigate]); // 只有当 data 变化时，这个 effect 才会重新运行
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("values", values);
    const reqParams = {
      userName: values.username,
      password: values.password,
    }as loginData;
    dispatch(userLogin(reqParams));
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
                if (value) {
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
