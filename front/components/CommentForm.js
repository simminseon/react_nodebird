import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { useSelector } from 'react-redux';
import useInput from '../hooks/useInput';

export const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [ commentText, onchangeCommentText ] = useInput('');

  const onSubmitComment = React.useCallback(() => {
    console.log(post.id, commentText)
  }, [commentText])

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea value={commentText} onChange={onchangeCommentText} row={4} />
        <Button type="primary" htmlType="submit" style={{ position: 'absolute', bottom: -40, right: 0, zIndex: 10 }}>등록</Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  post : PropTypes.object.isRequired,
}