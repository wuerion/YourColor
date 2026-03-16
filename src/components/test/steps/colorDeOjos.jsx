import React from "react";
import Card from "../Card";
function colorDeOjos({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(5);
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
        ¿Cual es tu tono de piel?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-6 justify-around lg:h-1/4 gap-4 w-full">
        <Card
          title={"Azul Brillante"}
          name={"colorDeOjos"}
          id={"azulBrillante"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Azul Claro"}
          name={"colorDeOjos"}
          id={"azulClaro"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Marron Avellana"}
          name={"colorDeOjos"}
          id={"marronAvellana"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Marron Oscuro"}
          name={"colorDeOjos"}
          id={"marronAvellana"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Verde"}
          name={"colorDeOjos"}
          id={"verdeOjos"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Gris"}
          name={"colorDeOjos"}
          id={"gris"}
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

export default colorDeOjos;
