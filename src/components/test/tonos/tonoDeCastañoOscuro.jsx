import React from "react";
import Card from "../Card";
function tonoDeCastañoOscuro({ onNext, step, setStep }) {
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
        ¿Como es tu tono de castaño oscuro?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Cafe Cenizo / Puro (frio)"}
          name={"tonoDeCabello"}
          id={"cafeCenizo"}
          circle1={
            "bg-gradient-to-r from-[#595450] from-50% to-[#3B3330] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Un tono café mate, como el café molido. No tiene
            reflejos rojos ni dorados, se ve neutro o apagado.
          </p>
        </Card>
        <Card
          title={"Chocolate / Caoba (calido)"}
          name={"tonoDeCabello"}
          id={"cafeChocolate"}
          circle1={
            "bg-gradient-to-r from-[#703923] from-50% to-[#4A2F26] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Marrón rico y brillante. Bajo la luz tiene destellos
            rojizos, madera o color chocolate con leche.
          </p>
        </Card>
      </div>
    </section>
  );
}
export default tonoDeCastañoOscuro;
