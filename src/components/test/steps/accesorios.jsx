import React from "react";
import Card from "../Card";
function accesorios({ onNext, step, setStep }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <div className="w-full flex justify-between">
        <button
          onClick={() => {
            setStep(7);
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
        ¿Que tipo de accesorios te quedan mejor?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Calidos"}
          name={"accesorios"}
          id={"dorados"}
          circle1={"bg-[#FFD700]"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Frios"}
          name={"accesorios"}
          id={"plateados"}
          circle1={"bg-[#C0C0C0]"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Neutros / Ambos"}
          name={"accesorios"}
          id={"ambos"}
          circle1={"bg-[#FFD700]"}
          circle2={"bg-[#C0C0C0]"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}

export default accesorios;
