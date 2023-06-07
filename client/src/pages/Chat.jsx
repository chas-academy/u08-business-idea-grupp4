import React, { useState } from 'react';
import Post from './Post';
import CommentList from './CommentList';



// eslint-disable-next-line react/prop-types
const Chat = () => {
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };
  const [score, setScore] = useState(0);

  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);


  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRating = (event) => {
    const selectedScore = parseInt(event.target.value);
    setScore(selectedScore);
  };




 
  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log('Comentario:', comment);
    console.log('Puntuación:', score);    const newComment = {
      id: Date.now(),
      comment: comment,
      rating: rating
    };
    setComments([...comments, newComment]);
    setComment('');
    setRating(0);
    addComment(newComment);
    setComment('');
    setScore(0);
  };

  const renderStarRating = (rating) => {
    const filledStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return filledStars + emptyStars;
  };

  const renderComments = () => {
    return comments.map((comment, index) => (
      <div key={index} className="comment">
        <p>{comment.comment}</p>
        <div className="rating">{renderStarRating(comment.rating)}</div>
      </div>
    ));
  };

 
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


  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);


  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div>
    <div className=' max-w-6xl	max-h-5x1 w-full  shadow-md  rounded-sm	m-10	bg-white'>
 <div className="flex items-center px-5 py-3">
 <img className="h-10 w-10 rounded-full" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg" alt="Profile Picture"/>                <span className='font-medium text-sm cursor-pointer'></span>
      <div className="ml-3 ">
        <span className="text-sm font-semibold antialiased block leading-tight">Jorge</span>
        <span className="text-gray-600 text-xs block">Sweden, Malmö</span>
        
      </div>
    </div>
    
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-x hover:bg-gray-100 dark:border-white-900 dark:bg-white-800 dark:hover:bg-white-700">
  
    <img className="w-full max-w-2xl	max-h-2x1 object-contain" src="https://img.koket.se/standard-mega/pannkaka-ny.jpg" alt=""/>
   
    <div className="flex flex-col justify-between p-2 mb-40   leading-normal">

        <p className="mb-2 text-1xl font-bold trackig-tight text-black-900 dark:text-black">This is a description</p>
        <span className="text-gray-600 text-xs block mb-5 ">Sweden, Malmö</span>
        <div className="flex items-center justify-between mx-1 mt-1 mb-3 ">
      
      
      <div className="flex mr-20 gap-4">
      <button onClick={handleLike}>
      {liked ? <span>&#10084;&#65039;</span> : <span>&#128420;</span>}
      </button>
      <span>{likes}</span>

      </div>
      
      <div className="flex  ">
  <button className="w-8 ml-60  h-6 text-yellow-400"><svg aria-hidden="true"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></button> </div>
  <p className="ml-0 text-sm font-bold text-gray-900 dark:text-dark">4.95</p>

</div>  
<hr className=' h-0.5 dark:bg-gray-700' /> 

   <div className="flex ">
   <div className="m-3 grid grid-cols-10 ">
  <div className="flex rounded-xl  bg-white border border-gray-200 rounded-lg shadow p-1 col-span-10">
  
   
  
    <div className="ml-2 p-3 w-full">
      <div className=" items-center justify-between">
      
      <form onSubmit={handleCommentSubmit}>
      <h2>Kommentar</h2>
      <br />
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Lägg till en kommentar..."
        required
      />
      <select value={rating} onChange={handleRatingChange}>
        <option value={0}>0</option>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button className="px-4 mt-3 py-2 ml-20 mr-10 rounded-xl bg-black text-white font-medium" type="submit">
        Post
      </button>
    </form>
    <div className="comments">{renderComments()}</div>
      </div>
      <div className="mt-4 text-sm">
      <div className=" items-center justify-between ">

      <CommentList
        comments={comments}
        updateComment={updateComment}
        deleteComment={deleteComment}
      />
     
    </div>
      <Post addComment={addComment} />
        </div>
      </div>
     </div>
    </div> 
   </div>
  </div>
 </a>
</div>



<div className=' max-w-6xl	max-h-5x1 w-full  shadow-md  rounded-sm	m-10	bg-white'>


   
<a href="#" className="flex flex-col items-between   bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-x hover:bg-gray-100 dark:border-white-900 dark:bg-white-800 dark:hover:bg-white-700">

<div className='px-10 p-5'> 
<p className="mb-9  text-2xl font-bold trackig-tight text-black-900 dark:text-black">Ingredients 📖</p>
<div className="flex items-center mb-4">
 
    <input id="default-checkbox" type="checkbox" value="" className=" text-blue-600 bg-gray-100 border-gray-300 w-5 h-5 rounded-full focus:ring-0 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-black dark:text-black-300">2 1/2 vetemjöl</label>
</div>

<div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:tex-black-300">1/" tsk salt</label>
</div>
  
<div className="flex items-center mb-5">
    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">6 dl mjölk</label>
</div>

<div className="flex items-center mb-5">
    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">3 ägg</label>
</div>
<div className="flex items-center mb-5">
    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">smör(till stekning)</label>
</div>

<div className="flex items-center mb-5">
    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">sylt, bär eller frunkt till servering </label>
</div>
  </div>

  <div className=' px-10 pt-6 pb-8	'>
  <p className="mb-9 px-2 text-2xl font-bold trackig-tight text-black-900 dark:text-black">To do</p>
<p className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">1.Blanda mjöl och salt i en bunke. Vispa i Hälften av mjölken och vispa till en slät smet. Vispa i resten av mjölken och äggen-</p>
 <br />
 <p className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">2.Stek tunna pannkakor i lite smör,för varje pannkaka, i en stek eller pannkakspanna.</p>
 <br />
 <p className="ml-2 text-sm font-medium text-gray-900 dark:text-black-300">3.Servera med sylt. bär eller frukt eööer med salta tillbehör som  Räksalsa med gurka och lime.</p>
  </div>

</a>

</div>
</div>

)
}

export default Chat;