import React from "react";
import { spring, summer, autumn, winter } from "../data/seasons";

function ColorsPallet({ name, seasson, addClass }) {
  const seassonPallet = seasson;
  name = name.toLowerCase();
  const images = {
    primavera: "/springBg.webp",
    verano: "/summerBg.webp",
    otoño: "/autumnBg.webp",
    invierno: "/winterBg.webp",
  };

  return (
    <div className="group w-full">
      <div
        className={`relative flex flex-col min-w-[100px] before:w-full before:max-w-[400px] w-full max-w-[400px] h-[400px] lg:h-[500px] p-4 ${addClass} bg-cover bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/70 group-hover:before:-z-50 before:z-[1]`}
        style={{ backgroundImage: `url('${images[name]}')` }}
      >
        <div className="h-1/2 text-lg">
          <p
            className="text-center uppercase relative z-[2] text-lg font-bold text-transparent transition delay-150 group-hover:text-black/70"
            style={{
              backgroundImage: `url('${images[name]}')`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            {name}
          </p>
        </div>
        <div className="group-hover:grid grid-cols-3 items-center justify-items-center gap-1 w-full hidden">
          {seassonPallet.map((index, key) => (
            <div
              key={key}
              className="w-full h-[32px] rounded-lg flex items-center justify-center"
              style={{ backgroundColor: index.hsl }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonsColors() {
  return (
    // <section className=" flex flex-col gap-8 justify-evenly items-center p-4">
    <section className="flex flex-col justify-around items-center gap-16 py-4">
      <h2 className="text-center text-xl font-bold mt-16">
        Paletas de colores
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 h-1/2 w-full max-w-[1500px]">
        <ColorsPallet
          name="Primavera"
          seasson={spring}
          addClass={
            "rounded-lg before:rounded-lg lg:rounded-none lg:before:rounded-none lg:rounded-tl-lg lg:rounded-bl-lg lg:before:rounded-tl-lg lg:before:rounded-bl-lg"
          }
        />
        <ColorsPallet
          name="Verano"
          seasson={summer}
          addClass={
            "rounded-lg before:rounded-lg lg:rounded-none lg:before:rounded-none"
          }
        />
        <ColorsPallet
          name="Otoño"
          seasson={autumn}
          addClass={
            "rounded-lg before:rounded-lg lg:rounded-none lg:before:rounded-none"
          }
        />
        <ColorsPallet
          name="Invierno"
          seasson={winter}
          addClass={
            "rounded-lg before:rounded-lg lg:rounded-none lg:before:rounded-none lg:rounded-tr-lg lg:rounded-br-lg lg:before:rounded-tr-lg lg:before:rounded-br-lg"
          }
        />
      </div>
      <p className="text-lg font-bold max-w-[1000px]">
        Conocer tu colorimetría es una herramienta poderosa para mejorar tu
        estilo personal y sentirte más cómodo/a con lo que usas. Los colores no
        solo son una cuestión de estética, sino una forma de resaltar lo mejor
        de ti.
      </p>
    </section>
  );
}

export default SeasonsColors;
