import React from "react";
import Card from "../Card";

export default function colorDeVenas({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(2);
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
        ¿De que color aparecen tus venas en las muñecas?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Azul o Morado"}
          name={"colorVenas"}
          id={"azulOMorado"}
          circle1={"bg-[#285EFF]"}
          circle2={"bg-[#C928FF]"}
          circle3={"hidden"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Verde"}
          name={"colorVenas"}
          id={"verde"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"bg-[#4BF04B]"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"No estoy seguro/a"}
          name={"colorVenas"}
          id={"neutro"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={
            "bg-gradient-to-r from-[#285EFF] from-50% to-[#C928FF] to-50% rotate-45"
          }
          image={"hidden"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}
