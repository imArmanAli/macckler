import React, { useEffect, useState } from "react";
import totalflat from "../../images/totalflat.svg";
import { Button, ButtonGroup } from "react-bootstrap";
import ProgressBar from "../progress-bar/ProgressBar";
import Slider from "../slider/Slider";
import formImageTwo from '../../images/tuev_500.png'


const StepTwo = ({ setForm, formData, navigation }) => {
  const { StepOne } = formData;

  const { previous, next } = navigation;
  const [value, setValue] = useState(12);

  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 7;

        return newValue;
      });
    }, 200);
  }, []);

  const myCallBack = (statefromchild) => {
    formData.StepSix = statefromchild;
  };

  return (
    <div className="form">
       <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">Wie groß ist die Wohnfläche des Hauses?</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>


      <div className="btn_container_slider">
        <div className="Row_MultiStep">
          <Slider
            left_text="<50 m²"
            right_text=">500 m²"
            value="250"
            min="50"
            max="500"
            unit="m²"
            text="Alternativ eintippen"
            callBackFromParent={myCallBack}
          />
           <img className="img_slider_sasas" src={totalflat} />
          
        </div>
        <Button variant="danger" onClick={next} >Weiter ></Button>
      </div>
      
      <div className="btn_container_slider_mobile_slider">
      <img className="img_slider_sasas" src={totalflat} />
          <Slider
            left_text="<50 m²"
            right_text=">500 m²"
            value="250"
            min="50"
            max="500"
            unit="m²"
            text="Alternativ eintippen"
            callBackFromParent={myCallBack}
          />
        <Button variant="danger" onClick={next} >Weiter ></Button>
      </div>
     
     

      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
    </div>
  );
};

export default StepTwo;
