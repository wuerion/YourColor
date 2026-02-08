import React from "react";
import Card from "../Card";
function colorDeOjos({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
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
