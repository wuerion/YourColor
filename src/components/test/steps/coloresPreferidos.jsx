import React from "react";
import Card from "../Card";
function coloresPreferidos({ onNext, step, setStep }) {
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
        ¿Que colores prefieres usar?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Calidos"}
          name={"coloresPreferidos"}
          id={"coloresCalidos"}
          circle1={"bg-[#FF0000] w-[60px] h-[60px]"}
          circle2={"bg-[#FFA500] w-[60px] h-[60px]"}
          circle3={"bg-[#FFFF00] w-[60px] h-[60px]"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Frios"}
          name={"coloresPreferidos"}
          id={"coloresFrios"}
          circle1={"bg-[#0000FF] w-[60px] h-[60px] "}
          circle2={"bg-[#008000] w-[60px] h-[60px] "}
          circle3={"bg-[#EE82EE] w-[60px] h-[60px] "}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Neutros"}
          name={"coloresPreferidos"}
          id={"coloresNeutros"}
          circle1={"bg-[#FFFFFF] w-[60px] h-[60px]"}
          circle2={"bg-[#000000] w-[60px] h-[60px]"}
          circle3={"bg-[#AAAAAA] w-[60px] h-[60px]"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}

export default coloresPreferidos;
