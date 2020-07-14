import React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Divider,
  message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import img1 from "../Asset 2xxxhdpi.png";
import img2 from "../Asset 4xxxhdpi.png";
import img3 from "../Asset 3xxxhdpi.png";
import img4 from "../Asset 6xxxhdpi.png";
import img5 from "../Asset 5xxxhdpi.png";
import "antd/dist/antd.css";
const { Text } = Typography;

function HomePage() {
  const onFinish = (values) => {
    const number = parseInt(values.username);
    axios
      .post("https://mekvahan.com/api/android_intern_task", {
        mobile: number,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data.status);
        if (res.data.status === true) {
          window.location = "/address";
        } else {
          message.error("Message from API:   " + res.data.status);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <Row justify="center" style={{ marginTop: 50 }}>
      <Col span={5}>
        <img src={img1} style={{ height: 480 }} alt=""></img>
      </Col>
      <Col span={8}>
        <Row justify="end">
          <a href="">
            <img src={img2} style={{ height: 20 }} alt=""></img>
          </a>
        </Row>
        <Row justify="center">
          <Col>
            <img src={img3} style={{ height: 50 }} alt=""></img>
          </Col>
          <Col style={{ marginTop: 10 }}>
            <Text type="danger" strong style={{ fontSize: 20 }}>
              MEKVAHAN
            </Text>
          </Col>
        </Row>

        <Row justify="center" style={{ marginTop: 25 }}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              type="number"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="10-digit Mobile number"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="">
                <Text type="warning">Forgot password ?</Text>
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: 250, backgroundColor: "red" }}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Row>
        <Row justify="center">
          <Text>
            Dont have an account?{" "}
            <Text type="danger" style={{ fontSize: 15 }}>
              <a href="">
                <strong>Sign Up now </strong>
              </a>
            </Text>
          </Text>
        </Row>
        <Row>
          <Col span={5}></Col>
          <Col span={3}>
            <Divider style={{ width: 250 }} plain>
              Or
            </Divider>
          </Col>
        </Row>
        <Row>
          <Col span={9}></Col>
          <Col>continue with</Col>
        </Row>
        <Row>
          <Col span={9}></Col>
          <Col>
            {" "}
            <a href="">
              <img src={img4} style={{ height: 40 }} alt=""></img>
            </a>
          </Col>
          <Col>
            {" "}
            <a href="">
              <img src={img5} style={{ height: 40 }} alt=""></img>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default HomePage;
