import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Feed() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/post/posts/6480614809965b94395512a4"
        );

        if (isMounted) {
          setPost(response.data.post);
          console.log(post);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPost();

    return () => {
      isMounted = false;
    };
  }, []);

  if (window.localStorage.getItem("userID") === "") {
    navigate("/");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1>FEED</h1>
        {post ? (
          <div className="flex flex-col align-center justify-center border-2 border-black p-5 rounded-md ">
            <h2>{post.author}</h2>
            <div className="flex flex-row">
              {post.pictures && post.pictures.length > 0 ? (
                post.pictures.map((pictureId) => (
                  <img
                    key={pictureId}
                    src={`http://localhost:3001/post/get/${pictureId}`}
                    alt=""
                    className="w-24 h-24 m-1"
                  />
                ))
              ) : (
                <p>No pictures available</p>
              )}
            </div>
            <p>{post.description}</p>
            <p>Score: {post.reviewScore}</p>
            <p>Likes: {post.likes}</p>
            <p>{formatDate(post.createdAt)}</p>
          </div>
        ) : (
          <p>Loading post...</p>
        )}
      </div>
    </>
  );
}

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${day} ${month} ${year} at ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;

  return formattedDate;
}

export default Feed;
