import Login from "../components/Login";
import IntroText from "../components/IntroText";

const Home = () => {
  return (
    <div className="flex items-center flex-row mx-52 my-32">
      <div className="flex items-center flex-row">
        <IntroText></IntroText>
        <Login></Login>
      </div>
    </div>
  );
};

export default Home;
