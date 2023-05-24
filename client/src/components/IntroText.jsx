/* import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; */

const ComingSoon = () => {
  return (
    <article className="flex flex-col w-64 m-10">
      <h2 className="font-bold text-lg my-3">Coming Soon!</h2>
      <p>
        Tasteful is the number one recipe sharing platform for all food lovers.
      </p>
      <p className="text-sm my-3">Comming soon on:</p>
      <div className="flex items-center flex-row">
        <img
          src="../public/images/appstore.png"
          alt="app-store"
          className="w-32"
        />
        <img
          src="../public/images/googleplay.png"
          alt="google-play"
          className="w-32"
        />
      </div>
    </article>
  );
};

export default ComingSoon;
