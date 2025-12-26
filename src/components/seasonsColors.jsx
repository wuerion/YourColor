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
    <div className="group ">
      <div
        className={`relative w-[280px] h-[500px] mx-auto p-4 ${addClass} bg-cover bg-center before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-black/70  group-hover:before:-z-50 before:z-[1]`}
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
        <div className="group-hover:grid grid-cols-3 items-center justify-items-center gap-1 h-1/2 hidden">
          {seassonPallet.map((index, key) => (
            <div
              key={key}
              className="w-full h-[32px] rounded-lg flex items-center justify-center"
              style={{ backgroundColor: index.hexa }}
            >
              {/* <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_280_42)">
                  <path
                    d="M8.00016 5.33331V7.99998M8.00016 10.6666H8.00683M14.6668 7.99998C14.6668 11.6819 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6819 1.3335 7.99998C1.3335 4.31808 4.31826 1.33331 8.00016 1.33331C11.6821 1.33331 14.6668 4.31808 14.6668 7.99998Z"
                    stroke="#1E1E1E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_42">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-center hidden group-[l]-hover:block">
                {index.nombre}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SeasonsColors() {
  return (
    <div className="h-screen flex flex-col gap-8 justify-evenly items-center p-4 border border-2-black ">
      <h2 className="text-center text-xl font-bold">Paletas de colores</h2>
      <div className="grid grid-cols-4  h-1/2">
        <ColorsPallet
          name="Primavera"
          seasson={spring}
          addClass={
            "rounded-tl-lg rounded-bl-lg before:rounded-tl-lg before:rounded-bl-lg"
          }
        />
        <ColorsPallet name="Verano" seasson={summer} />
        <ColorsPallet name="Otoño" seasson={autumn} />
        <ColorsPallet
          name="Invierno"
          seasson={winter}
          addClass={
            "rounded-tr-lg rounded-br-lg before:rounded-tr-lg before:rounded-br-lg"
          }
        />
      </div>
      <p className="text-lg font-bold max-w-[1000px]">
        Conocer tu colorimetría es una herramienta poderosa para mejorar tu
        estilo personal y sentirte más cómodo/a con lo que usas. Los colores no
        solo son una cuestión de estética, sino una forma de resaltar lo mejor
        de ti.
      </p>
    </div>
  );
}

export default SeasonsColors;
