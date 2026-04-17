import React, { useState } from "react";
import { calculateResult } from "../../logic/colorimetryEngie.js";
import { validateTestAnswers } from "../../logic/validateTest.js";

import SkinTone from "./steps/SkinTone.jsx";
import ReactionOfTheSun from "./steps/ReactionOfTheSun";
import VeinsColor from "./steps/VeinsColor.jsx";
import ColorDeCabello from "./steps/HairColor.jsx";
import BlackTone from "./tones/BlackTone.jsx";
import DarkBrownTone from "./tones/DarkBrownTone.jsx";
import LightBrownTone from "./tones/LightBrownTone.jsx";
import BlondTone from "./tones/BlondTone.jsx";
import RedheadTone from "./tones/RedheadTone.jsx";
import WhiteTone from "./tones/WhiteTone.jsx";
import EyeTone from "./steps/EyeColor.jsx";
import Gander from "./steps/Gander.jsx";
import FacoriteColors from "./steps/FavoriteColors.jsx";
import Accessories from "./steps/Accessories.jsx";
import Result from "./result";

function tonoCabello(x, onNext, step, setStep) {
  switch (x) {
    case "negro":
      return <BlackTone onNext={onNext} step={step} setStep={setStep} />;
    case "castañoOscuro":
      return <DarkBrownTone onNext={onNext} step={step} setStep={setStep} />;
    case "castañoClaro":
      return <LightBrownTone onNext={onNext} step={step} setStep={setStep} />;
    case "rubio":
      return <BlondTone onNext={onNext} step={step} setStep={setStep} />;
    case "pelirojo":
      return <RedheadTone onNext={onNext} step={step} setStep={setStep} />;
    case "grisOBlanco":
      return <WhiteTone onNext={onNext} step={step} setStep={setStep} />;
    default:
      return null;
  }
}

function ContainerTest({ apiUrl }) {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState({});
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [gander, setGander] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = (val) => {
    const stepKey = {
      1: "tono_piel",
      2: "reaction_sun",
      3: "vein_color",
      4: "color_cabello",
      5: "tono_pelo",
      6: "color_ojos",
      7: "ropa",
      8: "accessories",
      9: "gander",
    };

    const currentKey = stepKey[step];
    const newAnswers = { ...answer, [currentKey]: val };
    setAnswer(newAnswers);
    setImage(newAnswers.tono_piel);
    setGander(newAnswers.gander);
    setError(null); // Limpiar errores previos

    console.log(newAnswers);

    if (step === 9) {
      // Validar respuestas antes de calcular resultado
      const validation = validateTestAnswers(newAnswers);

      if (!validation.isValid) {
        setError(validation.message);
        console.error(error);
        return; // No avanzar si hay error
      }

      const calculatedResult = calculateResult(newAnswers);

      setResult(calculatedResult);
      if (!calculatedResult) {
        setError(
          "No se pudo determinar tu coloración. Por favor, intenta nuevamente.",
        );
        return;
      }
      setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div>
      {error && (
        <div
          style={{
            padding: "15px",
            margin: "20px 0",
            backgroundColor: "#ffebee",
            color: "#c62828",
            borderRadius: "4px",
            border: "1px solid #ef5350",
          }}
        >
          ⚠️ {error}
          <button
            onClick={() => {
              setStep(1);
              setAnswer({});
              setError(null);
              setResult(null);
            }}
            style={{
              marginLeft: "10px",
              padding: "5px 15px",
              cursor: "pointer",
              backgroundColor: "#c62828",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Reiniciar Test
          </button>
        </div>
      )}

      {step === 1 && <SkinTone onNext={handleNext} step={step} />}
      {step === 2 && (
        <ReactionOfTheSun onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 3 && (
        <VeinsColor onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 4 && (
        <ColorDeCabello onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 5 &&
        tonoCabello(answer.color_cabello, handleNext, step, setStep)}
      {step === 6 && (
        <EyeTone onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 7 && (
        <FacoriteColors onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 8 && (
        <Accessories onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 9 && (
        <Gander onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 10 && (
        <Result
          result={result}
          image={image}
          gander={gander}
          setStep={setStep}
          apiUrl={apiUrl}
        />
      )}
    </div>
  );
}

export default ContainerTest;
