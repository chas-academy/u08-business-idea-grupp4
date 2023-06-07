import React, { useState } from 'react';

const Comment = ({ comment, updateComment, deleteComment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(comment.content);
  const [score, setScore] = useState(0);


  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };
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
            onChange={(event)=> setUpdatedComment(event.target.value)}
          />
          <button onClick={handleUpdate}>Spara</button>
        </div>
      ) : (
        <div className="flex rounded-xl  bg-white border border-gray-200 rounded-lg shadow p-2 col-span-10">
          <br />     
          <p className=" px-5  py-3 text-black text-base">{comment.content}</p>
         <div className=' flex space-x-2 mx-40 ' >
          <button  className="  px-2  mt-3 py-1 mr-2 rounded-xl bg-black text-white   text-xs	" onClick={handleEdit}>Editar</button>
          <button  className="   px-2 mt-3 py-1 mr-2  rounded-xl bg-black text-white  text-xs	" onClick={handleDelete}>Delete</button>
       </div> 
       </div>
      )}
    </div>
  );
};

export default Comment;
