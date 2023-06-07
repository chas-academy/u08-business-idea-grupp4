import { useState } from "react";
import PropTypes from "prop-types";

const Comment = ({ comment, updateComment, deleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedCommentObj = {
      id: comment.id,
      content: updatedComment,
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

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default Comment;
