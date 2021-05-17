import React ,{ useEffect, useState }  from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import house from '../../images/house.svg'
import two from '../../images/two.svg'
import three from '../../images/three.svg'
import four from '../../images/four.svg'
import five from '../../images/five.svg'
import twoHouse from '../../images/twoHouse.svg'
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
        <p className="text_form">Bitte wählen Sie die Art Ihres Hauses</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>


      <div className="btn_container">
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={house} />Ein­fa­mi­li­en­haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={twoHouse} />Rei­hen­haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={buildingline} />Dop­pel­haus­häl-<br></br>f­te</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={fourhouse} />Mehr­fa­mi­li­en­-<br></br>haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">&nbsp;<img  className="btn-img" src={fivehouse} />Wohn- und Ge­-<br></br>schäfts­haus</Button>
      </div>
      <div className="btn_container_mobile">
        <Button variant="primary" onClick={next} value="Weiter">Ein­fa­mi­li­en­haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">Rei­hen­haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">Dop­pel­haus­hälf­te</Button>
        <Button variant="primary" onClick={next} value="Weiter">Mehr­fa­mi­li­en­haus</Button>
        <Button variant="primary" onClick={next} value="Weiter">Wohn- und Ge­schäfts­haus</Button>
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