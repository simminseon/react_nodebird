import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useSelector } from "react-redux";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const menuItems = [
  {
    key: "home",
    label: (
      <Link href="/">
        <a>노드버드</a>
      </Link>
    ),
  },
  {
    key: "profile",
    label: (
      <Link href="/profile">
        <a>프로필</a>
      </Link>
    ),
  },
  {
    key: "search",
    label: <SearchInput enterButton />,
  },
  {
    key: "signup",
    label: (
      <Link href="/signup">
        <a>회원가입</a>
      </Link>
    ),
  },
];

const AppLayout = ({ children }) => {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn); 이렇게도 가능
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Menu mode="horizontal" items={menuItems}></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.github.com/simminseon/react_nodebird"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
