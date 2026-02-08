import React from "react";
import Card from "../Card";
function tonoDeBlanco({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
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
