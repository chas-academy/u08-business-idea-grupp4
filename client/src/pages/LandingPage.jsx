import Login from "../components/Login";
import IntroText from "../components/IntroText";
import Example from "../components/Example";
import Info from "../components/Info";

const LandingPage = () => {
  return (
    <>
      <div className="flex items-center">
        <IntroText></IntroText>
        <Login></Login>
      </div>
      <Example></Example>
      <Info></Info>
    </>
  );
};

export default LandingPage;
