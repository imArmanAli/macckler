import React, { Component } from "react";
import "../landing-page/landingpage.css"
import Header from "../header/header"
import MultiStepForm from "../form/MultiStepForm"
import house from "../../images/house.svg"
import building from "../../images/bulding.svg"
import shop from "../../images/shop.svg"
import tree from "../../images/tree-1.svg"


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
    
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
  render() {
    return (
        <>
      { this.state.showComponent ?  <div>
   <Header />
   <div className="site_wrapper">
    <div className="wrraper_header">
     
    </div>
   <MultiStepForm />
   </div>
   </div> :
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>
            McMakler &gt;&gt; Ihr Immobilienmakler für den Immobilienverkauf
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1"
          />
        </head>
        <body>
          <div className="content">
            <section className="header">
              <div className="logo container">
                <a href="#">
                  <img
                    alt="McMakler logo"
                    src="https://a.storyblok.com/f/88871/x/3a265be27d/mcmakler-logo-borders-small.svg"
                    className="header-image"
                  />
                </a>
              </div>
            </section>

            <section className="content2 d">
              <div className="d-container container">
                <div className="right-image d-image im">
                  <img
                    loading="eager"
                    title=""
                    alt="Hero Image"
                    src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/4096x2662/3746330c8e/hero.jpg"
                    fieldtype="asset"
                  />
                </div>
                <h1 class="h-1 col-tl-6 title ">
                  Immobilien verkauft man mit McMakler
                </h1>
                <div class="t2 col-tl-6 title2">
                  <p>
                    <span class="">
                      Jetzt Ihre Immobilie kostenlos bewerten lassen
                    </span>
                  </p>
                </div>
                <div class="col-tl-8 col-sm-12">
                  <div class="row widget">
                    <div class="wrapper col-sm-12 col-tl-3">
                      <button class="btn"  onClick={this._onButtonClick}>
                        <div class="btn-content">
                          <a class="im">
                            <img
                              loading="eager"
                              src={house}
                              class="btn-icon"
                              id="1844198"
                              name=""
                              fieldtype="asset"
                            />
                          </a>
                          <span class="btnlabel">Haus</span>
                        </div>
                      </button>
                    </div>
                    <div class="wrapper col-sm-12 col-tl-3">
                      <button class="btn"  onClick={this._onButtonClick}>
                        <div class="btn-content">
                          <a class="im">
                            <img
                              loading="eager"
                              src={building}
                              class="btn-icon"
                              id="1844198"
                              name=""
                              fieldtype="asset"
                            />
                          </a>
                          <span class="btnlabel">Wohnung</span>
                        </div>
                      </button>
                    </div>
                    <div class="wrapper col-sm-12 col-tl-3">
                      <button class="btn"  onClick={this._onButtonClick}>
                        <div class="btn-content">
                          <a class="im">
                            <img
                              loading="eager"
                              src={shop}
                              class="btn-icon"
                              id="1844198"
                              name=""
                              fieldtype="asset"
                            />
                          </a>
                          <span class="btnlabel">Gewerbe</span>
                        </div>
                      </button>
                    </div>
                    <div class="wrapper col-sm-12 col-tl-3">
                      <button class="btn"  onClick={this._onButtonClick}>
                        <div class="btn-content">
                          <a class="im">
                            <img
                              loading="eager"
                              src={tree}
                              class="btn-icon"
                              id="1844198"
                              name=""
                              fieldtype="asset"
                            />
                          </a>
                          <span class="btnlabel">Grundstück</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="rating">
<ul className="row">
    <li class="col-sm-6">
        <a href="https://www.tuev-saar.de/zertifikat/sc44211/" target="_blank" rel="noopener noreferrer">
<img class="col-sm-12"
src="https://a.storyblok.com/f/88871/x/2f9c25042f/sc44211_pru__fzeichen_mcmakler_tu__v_gepru__ftes_onlineportal_2020_zw.svg" 
alt="TÜV Siegel" title="TÜV geprüftes Onlineportal"/>
</a>
    </li>
    <li class="col-sm-6"> <a href="https://de.trustpilot.com/review/mcmakler.de?utm_medium=Trustbox&amp;utm_source=EmailNewsletter2"
    target="_blank" rel="noopener noreferrer" class="row col-sm-12">
        <img src="https://a.storyblok.com/f/88871/x/ab7514a6fc/trustpilot_logo_dark.svg"alt="TrustPilot Logo"/>
        <img className="lim"
        src="/stars@2x.png" alt="TrustPilot Stars"/>
    </a>

    </li>
   
</ul>
</div> */}

                <div class="rat">
                  <div class="rating">
                    <ul class="row">
                      <li class="col-sm-6">
                        <a
                          href="https://www.tuev-saar.de/zertifikat/sc44211/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            class="col-sm-12"
                            src="https://a.storyblok.com/f/88871/x/2f9c25042f/sc44211_pru__fzeichen_mcmakler_tu__v_gepru__ftes_onlineportal_2020_zw.svg"
                            alt="TÜV Siegel"
                            title="TÜV geprüftes Onlineportal"
                          />
                        </a>
                      </li>
                     
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="content2">
              <h2 class="h-2 container title3 t-align-center ">
                Drei gute Gründe für McMakler
              </h2>
              <ul>
                <li className="li-data">
                  <div className="lidiv">
                    <div className="container pos row">
                      <div className="imgs col-sm-12 col-tl-4 offset-tl-1">
                        <div class="row col-sm-12 s-img">
                          <img
                            title=""
                            alt="Reason to go with McMakler"
                            src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/4096x2662/a27a9c18ef/reason1.jpg"
                            class="col-sm-12 image o-fit-cover"
                            fieldtype="asset"
                          />
                        </div>
                      </div>
                      <div class="cards col-tl-8 offset-tl-4">
                        <div class="card-text">
                          <h3 class="h-3">1. Wir wissen einfach wie.</h3>
                          <div class="txt">
                            <p>
                              Von der 2-Zimmer-Wohnung bis zum Mehrfamilienhaus:
                              Wir wissen einfach, wie man Immobilien verkauft.
                              Dabei setzen wir auf die Erfahrung und den
                              Wissenstransfer unserer festangestellten Makler.
                              Zusätzlich erhält bei uns jeder neue Kollege/jede
                              neue Kollegin im Rahmen der McAcademy die gleiche
                              fachliche Ausbildung. Dabei fördern wir das
                              gemeinsame Know-how, die Feedback-Kultur, sowie
                              die Liebe zum Beruf. Ja wirklich.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="left">
                  <div class="lidiv">
                    <div class="container pos row">
                      <div class="imgs col-sm-12 col-tl-4 offset-tl-8">
                        <div class="row col-sm-12 s-img">
                          <img
                            title=""
                            alt="Reason to go with McMakler"
                            src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/4096x2662/6b5ca46a1e/reason2.jpg"
                            class="col-sm-12 image o-fit-cover"
                            fieldtype="asset"
                          />
                        </div>
                      </div>
                      <div class="cards col-tl-8 offset-tl-1">
                        <div class="card-text">
                          <h3 class="h-3">
                            2. Unsere Technologie - Ihr Vorsprung.
                          </h3>
                          <div class="txt">
                            <p>
                              Wir schätzen nicht, wir bewerten. Mit Sachverstand
                              und der Hilfe unserer Bewertungsalgorithmen, die
                              uns jeden Tag noch ein bisschen besser machen.
                              Denn nur durch die genauen Daten sind wir in der
                              Lage, den Marktwert ihrer Immobilie so präzise zu
                              bestimmen. Unsere Devise: Nur mit einem wirklich
                              realistischen Angebotspreis finden wir schneller
                              den passenden Käufer und bringen Sie damit
                              effizienter ans Ziel. Klingt gut, oder?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="right">
                  <div class="lidiv">
                    <div class="container pos row">
                      <div class="imgs col-sm-12 col-tl-4 offset-tl-1">
                        <div class="row col-sm-12 s-img">
                          <img
                            title=""
                            alt="Reason to go with McMakler"
                            src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/4096x2662/2261bbdb77/reason3.jpg"
                            class="col-sm-12 image o-fit-cover"
                            fieldtype="asset"
                          />
                        </div>
                      </div>
                      <div class="cards col-tl-8 offset-tl-4">
                        <div class="card-text">
                          <h3 class="h-3">3. Wir überzeugen beim Verkauf.</h3>
                          <div class="txt">
                            <p>
                              Wir analysieren den potenziellen Käuferkreis und
                              wissen, wie wir ihre Interessenten ansprechen.
                              Dabei überzeugen wir auf ganzer Linie - von der
                              ersten Kontaktaufnahme, über ein eindrucksvolles
                              Digital-Exposé bis hin zur gebührenden
                              Objektpräsentation durch unsere Verkaufsexperten
                              vor Ort. Denn Service schreiben wir groß!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <section class="content3">
              <ul class="container cardss">
                <li class="col-tl-4 col-sm-12">
                  <div class="sli">
                    <p class="title">400+</p>
                    <hr />
                    <p class="subTitle">Makler vor Ort</p>
                  </div>
                </li>
                <li class="col-tl-4 col-sm-12">
                  <div class="sli">
                    <p class="title">100+</p>
                    <hr />
                    <p class="subTitle">Standorte & Ballungsgebiete</p>
                  </div>
                </li>
                <li class="col-tl-4 col-sm-12">
                  <div class="sli">
                    <p class="title">300+</p>
                    <hr />
                    <p class="subTitle">Experten im Berliner Hauptsitz</p>
                  </div>
                </li>
              </ul>
            </section>
            <section class="content4">
              <h2 class="h-2">Das sagen unsere Kunden</h2>
              <ul class="raters container">
                <li class="col-tl-4 raterli">
                  <div class="rater">
                    <div class="imgs">
                      <div class="rater-image">
                        <img
                          title=""
                          alt="McMakler Customers"
                          src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/2275x1353/a240204c66/customer1.jpg"
                          fieldtype="asset"
                        />
                      </div>
                    </div>
                    <div>
                      <h3>5 Sterne an McMakler</h3>
                      <div class="imgs">
                        <img
                          title=""
                          alt="Trustpilot 5 stars"
                          class="rater-rating"
                          src="https://a.storyblok.com/f/88871/x/51f89e5604/5stars.svg"
                          fieldtype="asset"
                        />
                      </div>
                      <div class="cmnt">
                        <p>
                          »Von der Erstberatung bis zur Kaufabwicklung, also bis
                          zum Notartermin, war es eine ganz runde Sache. Super
                          Verkaufsstrategie, super schnelle Abwicklung und ein
                          top Verhandlungsergebnis.«
                        </p>
                        <p class="rater-cmnter">Herr und Frau Runge</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="col-tl-4 raterli">
                  <div class="rater">
                    <div class="imgs">
                      <div class="rater-image">
                        <img
                          title=""
                          alt="McMakler Customers"
                          src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/2275x1353/39e65498c3/customer2.jpg"
                          fieldtype="asset"
                        />
                      </div>
                    </div>
                    <div>
                      <h3>Fachlich kompetent und angenehm!</h3>
                      <div class="imgs">
                        <img
                          title=""
                          alt="Trustpilot 5 stars"
                          class="rater-rating"
                          src="https://a.storyblok.com/f/88871/x/51f89e5604/5stars.svg"
                          fieldtype="asset"
                        />
                      </div>
                      <div class="cmnt">
                        <p>
                          »Die Gespräche waren gut, der Umgang miteinander war
                          gut und der Verkauf ist auch in enorm kurzer Zeit
                          passiert, was wir so nicht erwartet hätten.«
                        </p>
                        <p class="rater-cmnter">Herr Grüner</p>
                      </div>
                    </div>
                  </div>
                </li>

                <li class="col-tl-4 raterli">
                  <div class="rater">
                    <div class="imgs">
                      <div class="rater-image">
                        <img
                          title=""
                          alt="McMakler Customers"
                          src="https://img2.storyblok.com/filters:quality(75):format(jpeg)/f/88871/2275x1353/5f0e6e09c2/customer3.jpg"
                          fieldtype="asset"
                        />
                      </div>
                    </div>
                    <div>
                      <h3>Top Service</h3>
                      <div class="imgs">
                        <img
                          title=""
                          alt="Trustpilot 5 stars"
                          class="rater-rating"
                          src="https://a.storyblok.com/f/88871/x/51f89e5604/5stars.svg"
                          fieldtype="asset"
                        />
                      </div>
                      <div class="cmnt">
                        <p>
                          »Ich fand es wunderbar, dass meine Wohnung innerhalb
                          von 4 Wochen verkauft wurde, ich eine gute Beratung
                          hatte und mit dem Verkaufspreis auch sehr zufrieden
                          bin. «
                        </p>
                        <p class="rater-cmnter">Frau Hahn-Wienhold</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul class="brand">
                <li>
                  <img
                    src="https://a.storyblok.com/f/88871/x/c7520b91c4/trustpilot_logo.svg"
                    alt="TrustPilot Logo"
                  />
                </li>
            
                
              </ul>
            </section>
          </div>
          <div class="footer">
            <div class="foot">
              <div class="container flinks">
                <div>
                  <ul>
                    <li>
                      <a href="/agb" target="">
                        AGB
                      </a>
                    </li>
                    <li>
                      <a href="/datenschutz" target="">
                        Datenschutz
                      </a>
                    </li>
                    <li>
                      <a href="/impressum" target="">
                        Impressum
                      </a>
                    </li>
                    <li>
                      <a href="#">Cookie Einstellungen</a>
                    </li>
                  </ul>
                </div>
                <div class="copyright">© 2021 McMakler GmbH</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    }
    </>
    );
  }
}

export default LandingPage;
