import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

const FormStyle = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NicknameEditForm = () => {
  return (
    <FormStyle>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormStyle>
  );
};

export default NicknameEditForm;
