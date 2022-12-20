import React from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";
import { Button, Radio, Input } from "antd";
import "antd/dist/antd.css";
import "../views/login.css";
// import{passwordIcon}
// import"../public/static/iconfont"
// const passwordIcon : React.FC = () => {
//   return createFromIconfontCN({
//     scriptUrl:"http://at.alicdn.com/t/c/font_3746313_0u93nd58e0w.js"
//   })
// }

const Login: React.FC = () => {
  return (
    <div className="login">
      <p className="login-header">北京印刷学院设备管理系统</p>
      <div className="login_disc">
        <div
          style={{
            width: "100%",
            height: "5.5rem",
            backgroundColor: "#004a99",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0.8rem 0.8rem 0 0",
            justifyItems: "center",
          }}
        >
          <div className="login_logo"></div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "2rem",

              alignItems: "center",
            }}
          >
            <p
              style={{
                whiteSpace: "nowrap",
              }}
            >
              账号
            </p>

            <Input
              style={{
                width: "15rem",
                marginLeft: "1rem",
              }}
              placeholder="手机号/用户名"
              prefix={<UserOutlined />}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <p
              style={{
                whiteSpace: "nowrap",
              }}
            >
              密码
            </p>

            <Input.Password
              style={{
                width: "15rem",
                marginLeft: "1rem",
              }}
              placeholder="请输入密码"
              prefix={<span className="iconfont  icon-mima "></span>}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "1rem",
            }}
          >
            <Radio>记住密码</Radio>
            <p
              style={{
                marginLeft: "3rem",
              }}
            >
              忘记密码
            </p>
          </div>
          <div
            style={{
              marginTop: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "1rem",
              }}
            >
              <div>
                <Button type="primary">登录</Button>
              </div>
              <div
                style={{
                  marginLeft: "4rem",
                }}
              >
                <Button type="primary">注册</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
