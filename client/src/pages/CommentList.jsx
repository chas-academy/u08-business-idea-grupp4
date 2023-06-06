import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, updateComment, deleteComment }) => {
  return (
    <div>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
      ))}
    </div>
  );
};

export default CommentList;
