import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // not Navigate . needed is useNavigate

function Home() {
  const navigate = useNavigate();

  useEffect(() => { // arrow function +  dependency []
    //insdie arrow funciton ( function,return)
    const timer = setInterval(() => { // takes funciton/reference + timer in 1000 = 1 second
      console.log("tick");
    }, 1000);

    return () => { // this return is stored by react after first run due to [] empty dependency
      clearInterval(timer);
      console.log("timer reset or component unmounted.");
    };
  }, []);

  return (
    <div>
      <h2>Welcome Home</h2>
      <button onClick={() => navigate("/contact")}>Go to Contact</button>
    </div>
  );
}

export default Home;
