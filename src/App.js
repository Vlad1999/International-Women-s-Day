import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const changeStep = (step) => () => {
    setStep(step);
  };

  const [firstQuestion, setFirstQuestion] = useState("");

  function onChangeValue(event) {
    setFirstQuestion(event.target.value);
    console.log(event.target.value);
  }

  const [secondQuestion, setSecondQuestion] = useState("");

  function onChangeValue2(event) {
    setSecondQuestion(event.target.value);
    console.log(event.target.value);
  }

  const [thirdQuestion, setThirdQuestion] = useState("");

  function onChangeValue3(event) {
    setThirdQuestion(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="App">
      {step === 1 ? (
        <div className="container">
          <div className="wrapper">
            <h1 className="title">
              In the end you’ll see who’s fake, who’s true and who would risk it
              all for you. And trust me, there is someone, who’ll surprise you
              mostly…
            </h1>
            <button
              className="nextStepBtn"
              type="button"
              onClick={changeStep(2)}
            >
              Start
            </button>
          </div>
        </div>
      ) : step === 2 ? (
        <div className="container">
          <div className="wrapper">
            <h1 className="title">
              Uhm! Stop! Don’t Rush!
              <br />
              You need to answer the questions to continue!!! 😅😅😅
            </h1>
            <div className="formContainer">
              <form className="questionContainer" onChange={onChangeValue}>
                <p className="questionText">Who's Karo's favorite rapper?</p>
                <p>
                  <input
                    type="radio"
                    value="Eminem"
                    name="Eminem"
                    id="Eminem"
                    checked={firstQuestion === "Eminem"}
                  />{" "}
                  <label htmlFor="Eminem">Eminem</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="Gucci Mane"
                    name="Gucci Mane"
                    id="Gucci Mane"
                    checked={firstQuestion === "Gucci Mane"}
                  />{" "}
                  <label htmlFor="Gucci Mane">Gucci Mane</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="Pop Smoke"
                    name="Pop Smoke"
                    id="Pop Smoke"
                    checked={firstQuestion === "Pop Smoke"}
                  />{" "}
                  <label htmlFor="Pop Smoke">Pop Smoke</label>
                </p>
              </form>
              <form className="questionContainer" onChange={onChangeValue2}>
                <p className="questionText">Who's Karo's bestie?</p>
                <p>
                  <input
                    type="radio"
                    value="Nare"
                    name="Nare"
                    id="Nare"
                    checked={secondQuestion === "Nare"}
                  />{" "}
                  <label htmlFor="Nare">Nare</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="Lika"
                    name="Lika"
                    id="Lika"
                    checked={secondQuestion === "Lika"}
                  />{" "}
                  <label htmlFor="Lika">Lika</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="Ani"
                    name="Ani"
                    id="Ani"
                    checked={secondQuestion === "Ani"}
                  />{" "}
                  <label htmlFor="Ani">Ani</label>
                </p>
              </form>
              <form className="questionContainer" onChange={onChangeValue3}>
                <p className="questionText">In which year Karo was born?</p>
                <p>
                  <input
                    type="radio"
                    value="1998"
                    name="1998"
                    id="1998"
                    checked={thirdQuestion === "1998"}
                  />{" "}
                  <label htmlFor="1998">1998</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="2000"
                    name="2000"
                    id="2000"
                    checked={thirdQuestion === "2000"}
                  />{" "}
                  <label htmlFor="2000">2000</label>
                </p>
                <p>
                  <input
                    type="radio"
                    value="1999"
                    name="1999"
                    id="1999"
                    checked={thirdQuestion === "1999"}
                  />{" "}
                  <label htmlFor="1999">1999</label>
                </p>
              </form>
            </div>
            <button
              className="nextStepBtn"
              type="button"
              onClick={changeStep(3)}
              disabled={!(firstQuestion && secondQuestion && thirdQuestion)}
            >
              tap to see the surprise
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="wrapper">
            <h1 className="title">
              Now it’s time to see the surprise… <br /> <br /> I want to
              congratulate you on this beautiful day. You are irreplaceable in
              everything you do. You’ve always been an inspiration with your
              grace and warmth. I want you to feel the energy that spring and
              this beautiful day can give you and use that energy as a
              motivation for your bright and wonderful future. Be as cool as
              you’re now, I don’t see minuses in you and believe me there isn’t
              something that can make you better. Also I want to congratulate
              your mother wishing her the best and thank her that she gave this
              world as wonderful girl as you are… Happy International Women’s
              Day… <br /> Smile and enjoy your life… <br /> <br /> From Karapet…
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
