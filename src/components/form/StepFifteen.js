import React ,{ useEffect, useState }  from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import Anderer from '../../images/Anderer.svg'
import Alter from '../../images/Alter.svg'
import Erbe from '../../images/erbe.svg'
import Umzug from '../../images/Umzug.svg'
import Marktsituation from '../../images/Marktsituation.svg'
import Scheidung from '../../images/Scheidung.svg'
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
        <p className="text_form">Aus welchem Grund möchten Sie die Immobilie verkaufen?</p>
          <ProgressBar
            color={"#085159"}
            width={"750px"}
            value={value}
            max={100}
          />
        </div>
      </div>


      <div className="btn_container">
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Alter} />Alter/ Rente</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Erbe} />Erbe</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Scheidung} />Scheidung</Button>
      </div>
      <div className="btn_container">
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Marktsituation} />Marktsituation</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Umzug} />Umzug</Button>
        <Button className="b" onClick={next} value="Weiter">&nbsp;<img  className="btn-img2" src={Anderer} />Anderer</Button>
      </div>
      <div className="btn_container_mobile">
        <Button variant="primary" onClick={next} value="Weiter">Alter/ Rente</Button>
        <Button variant="primary" onClick={next} value="Weiter">Erbe</Button>
        <Button variant="primary" onClick={next} value="Weiter">Scheidung</Button>
        <Button variant="primary" onClick={next} value="Weiter">Marktsituation</Button>
        <Button variant="primary" onClick={next} value="Weiter">Umzug</Button>
        <Button variant="primary" onClick={next} value="Weiter">Anderer</Button>
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