import React from 'react';
import { Card, Avatar, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../reducers';

const UserProfile = () => {
  const dispatch = useDispatch();ß
  const onLogOut = React.useCallback(() => {
    dispatch(logoutAction())
    setIsLoggedIn(false);
  })
  return (
    <Card 
      actions={[
        <div key="twit">짹짹<br />0</div>,
        <div key="followings">팔로잉<br />0</div>,
        <div key="followings">팔로워<br />0</div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>ZC</Avatar>}
        title="sunny"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;