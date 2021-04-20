import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post'

export const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths } = useSelector((state) => state.post);
  const [ text, setText ] = React.useState('');
  const onChangeText = React.useCallback((e) => {
    setText(e.target.value);
  }, [text]);
  const inpFileUploader = React.useRef();
  const onClickFileUploader = React.useCallback(() => {
    inpFileUploader.current.click();
    console.log(inpFileUploader.current)
  }, [inpFileUploader.current]);
  const onClickPost = () => {
    console.log('게시물 등록!')
  }
  const onSubmit = React.useCallback(() => {
    dispatch(addPost);
    setText('');
    inpFocus.current.focus();
  }, []);
  const inpFocus = React.useRef();

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea 
        value={text} 
        onChange={onChangeText} 
        maxLength={140} 
        placeholder="내용을 입력하세요"
        ref={inpFocus}
      />
      <div>
        <input type="file" multiple hidden ref={inpFileUploader} />
        <Button onClick={onClickFileUploader}>파일업로드</Button>
        <Button htmlType="submit" type="primary" style={{ float: 'right' }} onClick={onClickPost}>게시물 등록</Button>
      </div>
      {imagePaths.map((post) => (
        <div key={post} style={{ display: 'inline-block' }}>
          <img src={post} style={{ width: '200px' }} alt={post} />
          <Button>제거</Button>
        </div>
      ))}      
    </Form>
  );
}