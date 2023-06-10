

const feedItems = [
  {
    username: 'LuddeF',
    imageUrl: 'https://pagen.se/globalassets/recept/nya-format-pa-bilderna/street-food-tillbehor.jpg?w=734&h=462&mode=crop&resized=true',
    likes: 10,
    comments: 5,
  },
  {
    username: 'Amilia_W',
    imageUrl: 'https://www.visitstockholm.com/media/original_images/wang1.jpg',
    likes: 20,
    comments: 8,
  },
  {
    username: 'Hasse',
    imageUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg',
    likes: 10,
    comments: 5,
  },
  {
    username: 'BakerA',
    imageUrl: 'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    likes: 20,
    comments: 8,
  },
  {
    username: 'Jocelyn',
    imageUrl: 'https://i.guim.co.uk/img/media/b03e72fd79b4f0b104e17c5d62e9c223ec68e343/0_1344_3409_2045/master/3409.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ed4d7770ae847d5b2046cb3b281e7fad',
    likes: 10,
    comments: 5,
  },
  {
    username: 'Amilia_W',
    imageUrl: 'https://www.visitstockholm.com/media/original_images/wang1.jpg',
    likes: 20,
    comments: 8,
  },
  {
    username: 'LuddeF',
    imageUrl: 'https://pagen.se/globalassets/recept/nya-format-pa-bilderna/street-food-tillbehor.jpg?w=734&h=462&mode=crop&resized=true',
    likes: 10,
    comments: 5,
  },
  {
    username: 'Amilia_W',
    imageUrl: 'https://www.visitstockholm.com/media/original_images/wang1.jpg',
    likes: 20,
    comments: 8,
  },
  // Add more feed items as needed
];

const Feed = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Following feed</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1">
        {feedItems.map((item, index) => (
          <div key={index} className="bg-white rounded shadow flex flex-col">
            <img src={item.imageUrl} alt="Food" className="w-full h-64 object-cover rounded-t" />
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
};

export default Feed;