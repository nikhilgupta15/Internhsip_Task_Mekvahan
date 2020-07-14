import React, { useState } from "react";
import { Layout, Menu, Col, Row, Button } from "antd";
import AddAddress from "./addAddress";
import img1 from "../Asset 7xxxhdpi.png";
import img2 from "../Asset 16xxxhdpi.png";
import img3 from "../Asset 8xxxhdpi.png";
import img4 from "../Asset 10xxxhdpi.png";
import img5 from "../Asset 9xxxhdpi.png";

const { Header, Content, Sider } = Layout;

function AddressPage() {
  let [home, sethome] = useState("");
  let [office, setOffice] = useState("");
  let [pg, setPg] = useState("");

  function handleValues(data) {
    sethome(data.home);
    setOffice(data.office);
    setPg(data.pg);
  }

  function showContent() {
    if (
      (home === "" && office === "" && pg === "") ||
      (home === undefined && office === undefined && pg === undefined)
    ) {
      return (
        <Content
          style={{
            marginTop: 20,
            overflow: "initial",
            textAlign: "center",
            backgroundColor: "white",
            position: "relative",
          }}
        >
          <img id="image" src={img2} style={{ height: 480 }} alt=""></img>
          <div
            style={{
              position: "absolute",
              top: 200,
              left: 550,
              transform: "translate(-50%, -50%)",
            }}
          >
            Looks like you don't have any saved addresses
          </div>
        </Content>
      );
    } else {
      return (
        <Content
          style={{
            marginTop: 20,
            overflow: "initial",
            textAlign: "center",
            backgroundColor: "white",
          }}
        >
          <Row>
            <Col
              span={10}
              style={{
                height: 200,
                marginLeft: 30,
                marginTop: 50,
                borderStyle: "solid",
                paddingTop: 25,
                borderWidth: 1,
              }}
            >
              <Row>
                <Col span={3}>
                  <img
                    src={img3}
                    style={{ height: 25, float: "right" }}
                    alt=""
                  ></img>
                </Col>
                <Col span={6}>
                  <span style={{ float: "left", fontSize: 20, marginLeft: 15 }}>
                    <strong>Home</strong>
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={18}>
                  <span
                    style={{
                      float: "left",
                      fontSize: 15,
                      marginLeft: 15,
                    }}
                  >
                    {home}
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={6}>
                  <Button
                    style={{ width: 100, float: "left", marginLeft: 15 }}
                    type="primary"
                    danger
                  >
                    Edit
                  </Button>
                </Col>
                <Col span={6}>
                  <Button
                    style={{
                      backgroundColor: "gray",
                      width: 100,
                      float: "right",
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              span={10}
              style={{
                height: 200,
                marginLeft: 30,
                marginTop: 50,
                borderStyle: "solid",
                paddingTop: 25,
                borderWidth: 1,
              }}
            >
              <Row>
                <Col span={3}>
                  <img
                    src={img4}
                    style={{ height: 25, float: "right" }}
                    alt=""
                  ></img>
                </Col>
                <Col span={6}>
                  <span style={{ float: "left", fontSize: 20, marginLeft: 15 }}>
                    <strong>Office</strong>
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={18}>
                  <span
                    style={{
                      float: "left",
                      fontSize: 15,
                      marginLeft: 15,
                    }}
                  >
                    {office}
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={6}>
                  <Button
                    style={{ width: 100, float: "left", marginLeft: 15 }}
                    type="primary"
                    danger
                  >
                    Edit
                  </Button>
                </Col>
                <Col span={6}>
                  <Button
                    style={{
                      backgroundColor: "gray",
                      width: 100,
                      float: "right",
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col
              span={10}
              style={{
                height: 200,
                marginLeft: 30,
                marginTop: 50,
                borderStyle: "solid",
                paddingTop: 25,
                borderWidth: 1,
              }}
            >
              <Row>
                <Col span={3}>
                  <img
                    src={img5}
                    style={{ height: 25, float: "right" }}
                    alt=""
                  ></img>
                </Col>
                <Col span={6}>
                  <span style={{ float: "left", fontSize: 20, marginLeft: 15 }}>
                    <strong>PG</strong>
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={18}>
                  <span
                    style={{
                      float: "left",
                      fontSize: 15,
                      marginLeft: 15,
                    }}
                  >
                    {pg}
                  </span>
                </Col>
              </Row>
              <Row style={{ marginTop: 20 }}>
                <Col span={3}></Col>
                <Col span={6}>
                  <Button
                    style={{ width: 100, float: "left", marginLeft: 15 }}
                    type="primary"
                    danger
                  >
                    Edit
                  </Button>
                </Col>
                <Col span={6}>
                  <Button
                    style={{
                      backgroundColor: "gray",
                      width: 100,
                      float: "right",
                    }}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      );
    }
  }

  return (
    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          backgroundColor: "white",
          marginTop: 15,
          marginLeft: 5,
          marginRight: 5,
        }}
      >
        <div style={{ marginBottom: 20, padding: 20 }}>
          <Row>
            <Col>
              <img src={img1} style={{ height: 50 }} alt=""></img>
            </Col>
            <Col style={{ marginLeft: 20, marginTop: 5 }}>
              <Row>
                <strong>Hi</strong>
              </Row>
              <Row>
                <strong>Mekvahan!</strong>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="logo" />
        <Menu mode="inline">
          <Menu.Item key="1">
            <span style={{ fontWeight: "bold" }}>My Profile</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span style={{ color: "red", fontWeight: "bold" }}>
              Manage Address
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <span style={{ fontWeight: "bold" }}>Change Password</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 250, marginTop: 15, marginRight: 5 }}>
        <Header style={{ padding: 0, backgroundColor: "white" }}>
          <Row>
            <Col style={{ marginLeft: 50 }}>
              <strong>My Addresses</strong>
            </Col>
            <Col style={{ marginLeft: 800 }}>
              <AddAddress value={handleValues}></AddAddress>
            </Col>
          </Row>
        </Header>
        {showContent()}
      </Layout>
    </Layout>
  );
}

export default AddressPage;
