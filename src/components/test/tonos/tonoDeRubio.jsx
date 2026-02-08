import React from "react";
import Card from "../Card";
function tonoDeRubio({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
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
