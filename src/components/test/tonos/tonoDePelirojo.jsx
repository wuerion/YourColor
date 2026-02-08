import React from "react";
import Card from "../Card";
function tonoDePelirojo({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <h2 className="text-lg font-bold lg:text-2xl">
        ¿Como es tu tono de pelirojo?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Rojo intenso / Caoba (frio)"}
          name={"tonoDeCabello"}
          id={"caoba"}
          circle1={
            "bg-gradient-to-r from-[#912C36] from-50% to-[#521E23] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: Un rojo oscuro o tinte que tira hacia el violeta,
            borgoña o cereza. No tiene base naranja.
          </p>
        </Card>
        <Card
          title={"Cobrizo / Naranja (calido)"}
          name={"tonoDeCabello"}
          id={"cobrizo"}
          circle1={
            "bg-gradient-to-r from-[#FF8A58] from-50% to-[#9E4924] to-50% rotate-45"
          }
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        >
          <p className="text-base lg:text-lg max-w-[700px]">
            Descripción: El pelirrojo natural clásico o color zanahoria. Se ve
            anaranjado, vibrante y cálido.
          </p>
        </Card>
      </div>
    </section>
  );
}

export default tonoDePelirojo;
