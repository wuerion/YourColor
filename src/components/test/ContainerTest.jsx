import React, { useState } from "react";
import { calculateResult } from "../../logic/colorimetryEngie.js";
import { validateTestAnswers } from "../../logic/validateTest.js";

import TonoDePiel from "./steps/TonoPiel";
import ReactionOfTheSun from "./steps/ReactionOfTheSun";
import ColorDeVenas from "./steps/colorDeVenas";
import ColorDeCabello from "./steps/colorDeCabello";
import TonoDeNegro from "./tonos/tonoDeNegro";
import TonoDeCastañoOscuro from "./tonos/tonoDeCastañoOscuro";
import TonoDeCatañonoClaro from "./tonos/tonoDeCastañoClaro";
import TonoDeRubio from "./tonos/tonoDeRubio";
import TonoDePelirojo from "./tonos/tonoDePelirojo";
import TonoDeBlanco from "./tonos/tonoDeBlanco";
import ColorOjos from "./steps/colorDeOjos";
import Destellos from "./steps/destellos";
import ColoresPreferidos from "./steps/coloresPreferidos";
import Accesorios from "./steps/accesorios";
import Result from "./result";

function tonoCabello(x, onNext, step, setStep) {
  switch (x) {
    case "negro":
      return <TonoDeNegro onNext={onNext} step={step} setStep={setStep} />;
    case "castañoOscuro":
      return (
        <TonoDeCastañoOscuro onNext={onNext} step={step} setStep={setStep} />
      );
    case "castañoClaro":
      return (
        <TonoDeCatañonoClaro onNext={onNext} step={step} setStep={setStep} />
      );
    case "rubio":
      return <TonoDeRubio onNext={onNext} step={step} setStep={setStep} />;
    case "pelirojo":
      return <TonoDePelirojo onNext={onNext} step={step} setStep={setStep} />;
    case "grisOBlanco":
      return <TonoDeBlanco onNext={onNext} step={step} setStep={setStep} />;
    default:
      return null;
  }
}

function ContainerTest() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState({});
  const [result, setResult] = useState(null);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleNext = (val) => {
    const stepKey = {
      1: "tono_piel",
      2: "reaction_sun",
      3: "vein_color",
      4: "color_cabello",
      5: "tono_pelo",
      6: "color_ojos",
      7: "destellos",
      8: "ropa",
      9: "accesorios",
    };

    const currentKey = stepKey[step];
    const newAnswers = { ...answer, [currentKey]: val };
    setAnswer(newAnswers);
    setImage(newAnswers.tono_piel);
    setError(null); // Limpiar errores previos

    if (step === 9) {
      // Validar respuestas antes de calcular resultado
      const validation = validateTestAnswers(newAnswers);

      if (!validation.isValid) {
        setError(validation.message);
        console.log(error);
        return; // No avanzar si hay error
      }

      const calculatedResult = calculateResult(newAnswers);
      console.log(calculatedResult);

      setResult(calculatedResult);
      if (!calculatedResult) {
        setError(
          "No se pudo determinar tu coloración. Por favor, intenta nuevamente.",
        );
        return;
      }
      console.log("Respuestas verificadas:", newAnswers);
      console.log("Resultado:", calculatedResult);
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

      {step === 1 && <TonoDePiel onNext={handleNext} step={step} />}
      {step === 2 && (
        <ReactionOfTheSun onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 3 && (
        <ColorDeVenas onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 4 && (
        <ColorDeCabello onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 5 &&
        tonoCabello(answer.color_cabello, handleNext, step, setStep)}
      {step === 6 && (
        <ColorOjos onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 7 && (
        <Destellos onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 8 && (
        <ColoresPreferidos onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 9 && (
        <Accesorios onNext={handleNext} step={step} setStep={setStep} />
      )}
      {step === 10 && (
        <Result result={result} image={image} setStep={setStep} />
      )}
    </div>
  );
}

export default ContainerTest;
