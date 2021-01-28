import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
  color: red
`;

const Signup = () => {
  const [ id, onChangeId ] = useInput('');
  const [ nickname, onChangeNickname ] = useInput('');
  const [ password, onChangePassword ] = useInput('');
  const [ passwordCheck, setPasswordCheck ] = React.useState('');
  const [ passwordError, setPasswordError ] = React.useState(false);

  const onChangePasswordCheck = React.useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password)
  }, [password, passwordCheck])

  const [ terms, setTerms ] = React.useState('');
  const [ termsError, setTermsError ] = React.useState(false);

  const onChangeCheck = React.useCallback((e) => {
    setTerms(e.target.checked);
    setTermsError(false)
  }, [terms, termsError]);

  const onSubmit = React.useCallback(() => {
    if(password !== passwordCheck) {
      setPasswordError(true);
    }
    if(!terms) {
      setTermsError(true)
    }
  }, [password, passwordCheck, terms])

  return (
    <>
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 체크</label>
          <br />
          <Input 
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
         {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={terms} onChange={onChangeCheck}>약관에 동의합니다.</Checkbox>
          {termsError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </div>
      </Form>
      </AppLayout>
    </>
  );
};

export default Signup;