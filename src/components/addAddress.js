import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Modal, Form, Input } from "antd";

function CollectionsPage(props) {
  const [visible, setVisible] = useState(false);

  function CollectionCreateForm({ visible, onCreate, onCancel }) {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Add Address"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item name="home" label="Home">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="office" label="Office">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="pg" label="PG">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  const onCreate = (values) => {
    props.value(values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="link"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Add Address
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}

export default CollectionsPage;
