import React from 'react';
import { Card, Avatar, Button } from 'antd';

const UserProfile = () => {
  const onLogOut = React.useCallback(() => {
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