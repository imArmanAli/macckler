import React ,{ useEffect, useState }  from "react";
import formLogo from '../../images/icon-wohngeld.png'
import formImageTwo from '../../images/tuev_500.png'
import Anderer from '../../images/Anderer.svg'
import Alter from '../../images/Alter.svg'
import Erbe from '../../images/erbe.svg'
import Umzug from '../../images/Umzug.svg'
import Marktsituation from '../../images/Marktsituation.svg'
import Scheidung from '../../images/Scheidung.svg'
import book from '../../images/book.png'
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
      <div className="bg">
     
     <p className="text_form2"> <svg class="tick" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Ihre Immobilienbewertung wird erstellt</p>
   </div>
      <div className="btn_container">
          
        <div className="col-sm-12">
            <div className="col-sm-6">
                <p className="formtitle">
               Wer soll die Immobilienbewertung erhalten?
                </p>
                <div class="form-check form-check-inline">
  <input
    class=" form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="inlineRadio1"
    value="option1"
    checked
  />
  <label class="lbl form-check-label" for="inlineRadio1">Herr</label>
</div>

<div class="form-check form-check-inline">
  <input
    class="form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="inlineRadio2"
    value="option2"
  />
  <label class="lbl form-check-label" for="inlineRadio2">Frau</label>
</div>
<div className="inputs">
    <div className="form-group">
    <input type="text" className="if" placeholder="Vorname" />
    </div>
    <div className="form-group">
    <input type="text" className="if" placeholder="Nachname" />
    </div>
    <div className="form-group">
    <input type="email" className="if" placeholder="E-Mail-Adresse" />
    </div>
    <div className="form-group">
    <input type="text" className="if" placeholder="Telefonnummer" />
    </div>
    <div class="form-check">
  <input class="ch form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="chlbl form-check-label" for="flexCheckChecked">
  Ich erkläre mich mit der Verarbeitung der gemachten Angaben zur Erstellung der 
  Immobilienbewertung sowie der Kontaktaufnahme durch die McMakler GmbH einverstanden.
  </label>
</div>

</div>
            </div>
            <div className="col-sm-12">
            <img
        src={book}
        alt="img"
        className="imageCover2"
      />
       <Button variant="danger" className="bb"onClick={next} >Bewertung erhalten
      <p class="tit"> kostenlos & unverbindlich ></p></Button>
      <p class="desc">
      Dieser Service ist kostenfrei. Mit Klick auf "Bewertung erhalten"
       bestätigen Sie die Kenntnisnahme unserer <a class="col" href="https://www.mcmakler.de/agb">AGBs </a> und 
       <a class="col" href="https://www.mcmakler.de/datenschutz">Datenschutzbestimmungen</a>
  </p>
 

           
            </div>
        </div>
      </div>
      <div className="btn_container_mobile">
       <div className="col-sm-12">

       <div className="col-sm-6">
                <p >
               Wer soll die Immobilienbewertung erhalten?
                </p>
                <div class="form-check form-check-inline">
  <input
    class=" form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="inlineRadio1"
    value="option1"
    checked
  />
  <label class=" form-check-label" for="inlineRadio1">Herr</label>
</div>

<div class="form-check form-check-inline">
  <input
    class="form-check-input"
    type="radio"
    name="inlineRadioOptions"
    id="inlineRadio2"
    value="option2"
  />
  <label class=" form-check-label" for="inlineRadio2">Frau</label>
</div>
<div className="inputs">
    <div className="form-group">
    <input type="text" className="if" placeholder="Vorname" />
    </div>
    <div className="form-group">
    <input type="text" className="if" placeholder="Nachname" />
    </div>
    <div className="form-group">
    <input type="email" className="if" placeholder="E-Mail-Adresse" />
    </div>
    <div className="form-group">
    <input type="text" className="if" placeholder="Telefonnummer" />
    </div>
    <div class="form-check">
  <input class="ch form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
  <label class="chlbl form-check-label" for="flexCheckChecked">
  Ich erkläre mich mit der Verarbeitung der gemachten Angaben zur Erstellung der 
  Immobilienbewertung sowie der Kontaktaufnahme durch die McMakler GmbH einverstanden.
  </label>
</div>

</div>
<Button variant="danger3" onClick={next} >Bewertung erhalten kostenlos & unverbindlich ></Button>
<br></br><p class="chlbl">
      Dieser Service ist kostenfrei. Mit Klick auf "Bewertung erhalten"
       bestätigen Sie die Kenntnisnahme unserer <a class="col" href="https://www.mcmakler.de/agb">AGBs </a> und 
       <a class="col" href="https://www.mcmakler.de/datenschutz">Datenschutzbestimmungen</a>
  </p>

            </div>

       </div>


      </div>

    

    </div>
    
  );
};

export default StepOne;