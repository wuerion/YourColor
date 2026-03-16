import React from "react";
import Card from "../Card";
function tonoDeRubio({ onNext, step, setStep }) {
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
        ¿Como es tu tono de rubio?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Rubio Cenizo / Platino (frio)"}
          name={"tonoDeCabello"}
          id={"rubioCenizo"}
          circle1={
            "bg-gradient-to-r from-[#E6E3DA] from-50% to-[#8F877C] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Rubio mate que tira hacia el gris, blanco o perla. No
            tiene reflejos amarillos intensos.
          </p>
        </Card>
        <Card
          title={"Rubio Dorado / Miel (calido)"}
          name={"tonoDeCabello"}
          id={"rubioDorado"}
          circle1={
            "bg-gradient-to-r from-[#F3D788] from-50% to-[#BE9D67] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Rubio vibrante y cálido. Brilla claramente en tonos
            amarillos, miel o trigo dorado.
          </p>
        </Card>
        <Card
          title={"Rubio Oscuro"}
          name={"tonoDeCabello"}
          id={"rubioOscuro"}
          circle1={
            "bg-gradient-to-r from-[#A3988B] from-50% to-[#786C5E] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Un rubio oscuro natural o beige. No es ni muy dorado ni
            muy gris, un tono intermedio equilibrado.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default tonoDeRubio;
