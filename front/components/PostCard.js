import React from 'react';
import PropTypes from 'prop-types';
import { Card, Popover, Button, List, Comment } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { PostImages } from './PostImages';
import { CommentForm } from './CommentForm';
import Avatar from 'antd/lib/avatar/avatar';

export const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const id = me?.id;
  const [ liked, setLiked ] = React.useState(false);
  const onToggleLike = React.useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const [ CommentFormOpened, setCommentFormOpened] = React.useState(false);
  const onToggleComment = React.useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked 
            ? <HeartTwoTone twoToneColor="#cb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover key="more" content={(
            <Button.Group>
              { id && post.User.id === id 
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) 
                : <Button>신고</Button>}
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {CommentFormOpened && 
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      }
      {/* <CommentFrom /> */}
      {/* <Comments /> */}
      
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}