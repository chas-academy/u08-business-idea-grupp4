import Comment from "./Comment";
import PropTypes from "prop-types";

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
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default CommentList;
