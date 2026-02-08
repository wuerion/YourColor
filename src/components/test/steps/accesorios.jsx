import React from "react";
import Card from "../Card";
function accesorios({ onNext }) {
  return (
    <section className="h-dvh flex flex-col justify-around items-center">
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
          circle2={"bg-[C0C0C0]"}
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
