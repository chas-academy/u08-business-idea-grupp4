import { useState } from "react";
import CommentList from "../components/CommentList";
import Chat from "../components/Chat";

const Post = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const updateComment = (updatedComment) => {
    const updatedComments = comments.map((comment) =>
      comment.id === updatedComment.id ? updatedComment : comment
    );
    setComments(updatedComments);
  };

  const deleteComment = (commentId) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div>
      <h1>Aplicación de Comentarios</h1>
      <CommentList
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
      <Chat addComment={addComment} />
    </div>
  );
};

export default Post;
