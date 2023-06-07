import React, { useState } from 'react';

const Post = ({ addComment  }) => {
  const [comments, setComments] = useState([]);

 
  const updateComment = (updatedComment) => {
    const updatedComments = comments.map((comment) =>
      comment.id === updatedComment.id ? updatedComment : comment
    );
    setComments(updatedComments);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  return (
    <div >
    
     
    </div>
  );
};

export default Post;

