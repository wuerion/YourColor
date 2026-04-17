import React from "react";
import Card from "../Card";
function tonoDeBlanco({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(4);
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
        ¿Como es tu tono de gris / blanco?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Plata / Blanco Nieve (frio)"}
          name={"tonoDeCabello"}
          id={"plata"}
          circle1={
            "bg-gradient-to-r from-[#FFFFFF] from-50% to-[#C0C0C0] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Canas blancas brillantes o gris acero. Se ve limpio,
            metálico y frío.
          </p>
        </Card>
        <Card
          title={"Crema / Perla (calido)"}
          name={"tonoDeCabello"}
          id={"crema"}
          circle1={
            "bg-gradient-to-r from-[#F4F1EA] from-50% to-[#D1CBB1] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Canas suaves que tienden a un tono beige, marfil o
            amarillento, no totalmente blanco.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default tonoDeBlanco;
