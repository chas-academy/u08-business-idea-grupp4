import Login from "../components/Login";
import IntroText from "../components/IntroText";
import Example from "../components/Example";
import Info from "../components/Info";

const LandingPage = () => {
  return (
    <>
    <div className="flex items-center flex-col sm:flex-row sm:justify-center">
        <Login></Login>
         <IntroText></IntroText>
        
      </div>
      <Example></Example>
      <Info></Info>
    </>
  );
};

export default LandingPage;
