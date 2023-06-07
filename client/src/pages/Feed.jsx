import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">FEED</h1>
        {post ? (
          <div className="flex flex-col">
            <div className="relative">
              {post.pictures && post.pictures.length > 0 ? (
                <img
                  src={`http://localhost:3001/post/get/${post.pictures[0]}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <p>No pictures available</p>
              )}
              <h2 className="absolute top-2 left-2 text-white">
                {post.author}
              </h2>
            </div>
            <div className="bg-slate-200 p-2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row">
                  <button className="text-xs">Like</button>
                  <Link to="Post" className="mx-1 text-xs">
                    Post
                  </Link>
                  <button className="text-xs">Save</button>
                </div>
                <p className="text-xs">{post.reviewScore}</p>
              </div>
              <p>{post.description}</p>
              <p className="text-xs my-2">{post.likes} likes</p>
              <p className="text-xs">{formatDate(post.createdAt)}</p>
            </div>
          </div>
        ) : (
          <p>Loading post...</p>
        )}
      </div>
    </>
  );
}
/* const Feed = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Feeds</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {feedItems.map((item, index) => (
          <div key={index} className="bg-white rounded shadow flex flex-col">
            <img
              src={item.imageUrl}
              alt="Food"
              className="w-full h-64 object-cover rounded-t"
            />
            <div className="p-4 flex-grow">
              <div className="flex items-center mb-2">
                <span className="text-sm font-bold">{item.username}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-2">{item.likes} likes</span>
                <span className="mr-2">{item.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; */

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
