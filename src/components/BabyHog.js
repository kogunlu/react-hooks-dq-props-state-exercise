import React, { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog(props) {
  const [weightBaby, setWeight] = useState(200)
  const [babyHeight, setHeigth] = useState(200)

  let babyImg = normalBaby

  if(props.eyeColorBaby === 'blue'){
    babyImg = BlueBaby
  }else if(props.eyeColorBaby === 'sun'){
    babyImg = SunBaby
  }else if(props.eyeColorBaby === 'glowing'){
    babyImg = GlowingBaby
  }


  function handleChangeWeight(e) {
    
    if(e.target.name === '+'){
      setWeight(weightBaby => weightBaby + 100)
      setHeigth(babyHeight => babyHeight + 50)
    }else if(e.target.name === '-'){
      if(weightBaby >= 100){
        setWeight(weightBaby => weightBaby - 100)
        setHeigth(babyHeight => babyHeight - 50)
      }
    }
  }


  return (
    <li className="hogbabies">
      <h1>{props.name}</h1>
      <h3>Weight: {weightBaby} kg</h3>
      <h3>Hobby: {props.hobby}</h3>
      <h4>Eye Color: {props.eyeColorBaby}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={babyImg}
          style={{ height: `${babyHeight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
