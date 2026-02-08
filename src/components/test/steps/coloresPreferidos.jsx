import React from "react";
import Card from "../Card";
function coloresPreferidos({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
      <h2 className="text-lg font-bold lg:text-2xl">
        ¿Que colores prefieres ussar?
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-around h-1/2 gap-4 w-full">
        <Card
          title={"Calidos"}
          name={"coloresPreferidos"}
          id={"coloresCalidos"}
          circle1={"bg-[#FF0000]"}
          circle2={"bg-[#FFA500]"}
          circle3={"bg-[#FFFF00]"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Frios"}
          name={"coloresPreferidos"}
          id={"coloresFrios"}
          circle1={"bg-[#0000FF]"}
          circle2={"bg-[#008000]"}
          circle3={"bg-[#EE82EE]"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
        <Card
          title={"Neutros"}
          name={"coloresPreferidos"}
          id={"coloresNeutros"}
          circle1={"bg-[#FFFFFF]"}
          circle2={"bg-[#000000]"}
          circle3={"bg-[#AAAAAA]"}
          contCircle={"block"}
          image={"hidden"}
          onNext={onNext}
        />
      </div>
    </section>
  );
}

export default coloresPreferidos;
