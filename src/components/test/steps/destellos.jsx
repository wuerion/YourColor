import React from "react";
import Card from "../Card";
function destellos({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(6);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bold"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M19,10.5H10.207l2.439-2.439a1.5,1.5,0,0,0-2.121-2.122L6.939,9.525a3.505,3.505,0,0,0,0,4.95l3.586,3.586a1.5,1.5,0,0,0,2.121-2.122L10.207,13.5H19a1.5,1.5,0,0,0,0-3Z" />
          </svg>
        </button>
        <p className="text-lg">Paso {step}</p>
      </div>
      <h2 className="text-lg font-bold lg:text-2xl">
        ¿Que tipo de destellos tienes?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-around h-1/3 lg:h-1/2 gap-4 w-full lg:w-3/4">
        <Card
          title={"Dorados / Calidos"}
          name={"destellos"}
          id={"doradosOCalidos"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Plateados / Frios"}
          name={"destellos"}
          id={"plateadosOFrios"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}

export default destellos;
