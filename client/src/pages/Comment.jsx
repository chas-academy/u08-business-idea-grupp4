import React, { useState } from 'react';

const Comment = ({ comment, updateComment, deleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedCommentObj = {
      id: comment.id,
      content: updatedComment
    };
    updateComment(updatedCommentObj);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea
            value={updatedComment}
            onChange={(event) => setUpdatedComment(event.target.value)}
          />
          <button onClick={handleUpdate}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>{comment.content}</p>
          <button onClick={handleEdit}>Editar</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
