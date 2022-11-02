import React from "react";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  createFromIconfontCN
} from "@ant-design/icons";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import "./login.css";
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

        <div className="login_category">
          <p
            style={{
              marginRight: "2rem",
            }}
          >
            登录
          </p>
          <p>|</p>
          <p
            style={{
              marginLeft: "2rem",
            }}
          >
            注册
          </p>
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
           
            <Input placeholder="手机号/用户名" prefix={<UserOutlined />} />
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
              placeholder="请输入密码"
              prefix={<span className="iconfont  icon-mima "></span>}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <Button type="primary">登录</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
