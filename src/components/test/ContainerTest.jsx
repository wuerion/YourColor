import React, { useState, useEffect } from "react";
import { calculateResult } from "../../logic/colorimetryEngie";

import TonoDePiel from "./steps/TonoPiel";
import ReactionOfTheSun from "./steps/reactionOfTheSun";
import ColorDeVenas from "./steps/colorDeVenas";
import ColorDeCabello from "./steps/ColorDeCabello";
import TonoDeNegro from "./tonos/TonoDeNegro";
import TonoDeCastañoOscuro from "./tonos/TonoDeCastañoOscuro";
import TonoDeCatañonoClaro from "./tonos/TonoDeCatañonoClaro";
import TonoDeRubio from "./tonos/TonoDeRubio";
import TonoDePelirojo from "./tonos/TonoDePelirojo";
import TonoDeBlanco from "./tonos/TonoDeBlanco";
import ColorOjos from "./steps/ColorOjos";
import Destellos from "./steps/destellos";
import ColoresPreferidos from "./steps/coloresPreferidos";
import Accesorios from "./steps/accesorios";

// function callApi(text) {
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     async function handleSearch(text) {
//       try {
//         const response = await fetch("http://localhost:3000/photos", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: text }),
//         });
//         const result = await response.json();
//         if (result.success) {
//           setImages(result.data);
//         }
//       } catch (error) {
//         console.log("Error al conectar con la API:", error);
//       }
//     }
//     handleSearch(text);
//   }, []);
// }
function tonoCabello(x, onNext) {
  switch (x) {
    case "negro":
      return <TonoDeNegro onNext={onNext} />;
      break;
    case "castañoOscuro":
      return <TonoDeCastañoOscuro onNext={onNext} />;
      break;
    case "castañoClaro":
      return <TonoDeCatañonoClaro onNext={onNext} />;
      break;
    case "rubio":
      return <TonoDeRubio onNext={onNext} />;
      break;
    case "pelirojo":
      return <TonoDePelirojo onNext={onNext} />;
      break;
    case "grisOBlanco":
      return <TonoDeBlanco onNext={onNext} />;
    default:
      return null;
  }
}

function ContainerTest() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState({});
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
    // console.log(newAnswers.tono_pelo); // Obtener el valor de tono_pelo
    setAnswer(newAnswers);

    if (step === 9) {
      const result = calculateResult(newAnswers);
      // mostrar la card del resultados
      console.log(answer);
      console.log("tu resultado es:", result);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div>
      {step === 1 && <TonoDePiel onNext={handleNext} />}
      {step === 2 && <ReactionOfTheSun onNext={handleNext} />}
      {step === 3 && <ColorDeVenas onNext={handleNext} />}
      {step === 4 && <ColorDeCabello onNext={handleNext} />}
      {step === 5 && tonoCabello(answer.color_cabello, handleNext)}
      {step === 6 && <ColorOjos onNext={handleNext} />}
      {step === 7 && <Destellos onNext={handleNext} />}
      {step === 8 && <ColoresPreferidos onNext={handleNext} />}
      {step === 9 && <Accesorios onNext={handleNext} />}
    </div>
  );
}

export default ContainerTest;