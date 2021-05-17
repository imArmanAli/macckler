import React ,{ useEffect, useState }  from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import asap from '../../images/asap.svg'
import monate16 from '../../images/asap-1.svg'
import monate126 from '../../images/asap-2.svg'
import monate12 from '../../images/asap-3.svg'
import Ich from '../../images/not-sure-1.svg'
import twoHouse from '../../images/not-sure.svg'
import fourhouse from '../../images/four-house.svg'
import fivehouse from '../../images/house-five.svg'
import buildingline from '../../images/buildingline.svg'
import { Button } from 'react-bootstrap';
import ProgressBar from "../progress-bar/ProgressBar";





const StepOne = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 12;

        return newValue;
      });
    }, 200);
  }, []);

  return (
    <div className="form">
       
      
      
      <div className="progress_bar_container">
        <div className="progress_align">
        <p className="text_form">Wann möchten Sie Ihre Immobilie verkaufen?</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>


      <div className="btn_container">
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={asap} />Schnellstmöglich</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={monate16} />1 - 6 Monate</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={monate126} />6 - 12 Monate</Button>
      </div>
      <div className="btn_container">
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={monate12} />12 Monate oder später</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={twoHouse} />Unsicher</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Ich} />Ich will nicht verkaufen</Button>
      </div>
      <div className="btn_container_mobile">
        <Button variant="primary" onClick={next} value="Weiter">Schnellstmöglich</Button>
        <Button variant="primary" onClick={next} value="Weiter">1 - 6 Monate</Button>
        <Button variant="primary" onClick={next} value="Weiter">6 - 12 Monate</Button>
        <Button variant="primary" onClick={next} value="Weiter">12 Monate oder später</Button>
        <Button variant="primary" onClick={next} value="Weiter">Unsicher</Button>
        <Button variant="primary" onClick={next} value="Weiter">Ich will nicht verkaufen</Button>
      </div>

    

      <img
        src={formImageTwo}
        alt="img"
        className="imageCover"
      />
    </div>
    
  );
};

export default StepOne;