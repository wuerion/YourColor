import React from "react";
import Card from "../Card";
function destellos({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <h2 className="text-lg font-bold lg:text-2xl">
        ¿Que tipo de destellos tienes?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 justify-around h-1/3 lg:h-1/2 gap-4 w-full lg:w-3/4">
        <Card
          title={"Dorados / Calidos"}
          name={"destellos"}
          id={"doradosOCalidos"}
          circle1={"hidden"}
          circle2={"hidden"}
          circle3={"hidden"}
          contCircle={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Plateados / Frios"}
          name={"destellos"}
          id={"plateadosOFrios"}
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

export default destellos;
