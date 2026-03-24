import React, { useEffect } from "react";

function UseEffectUnmount() { // arrow or normal function can be used here
  useEffect(() => { //  // arrow function +  dependency []
    //insdie arrow funciton ( function,return)
    // manual return so use ('{}') return logic different
    const timer = setInterval(() => { // takes funciton/reference + timer in 1000 = 1 second
      console.log("tick");
    }, 1000);

    return () => { // this return is stored by react after first run due to [] empty dependency
      clearInterval(timer);
      console.log("timmer reset or component unmounted.");
    };
  }, []);

return (
<div>
    <h1>Timer is running...</h1>
    <p>Check the consoleto see the 'tick'</p>
</div>
);
}
export default UseEffectUnmount;
