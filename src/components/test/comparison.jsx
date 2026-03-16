import React, { useState } from "react";

function comparison({ setIsVisible, data, image }) {
  const [selecctColorLeft, setSelecctColorLeft] = useState("#faf8f0");
  const [selecctNameLeft, setSelecctNameLeft] = useState("Selecciona un color");
  const [selecctColorRight, setSelecctColorRight] = useState("#faf8f0");
  const [selecctNameRight, setSelecctNameRight] = useState(
    "Selecciona un color",
  );

  const images = {
    muyClara: {
      component: "/tonoDePiel/muyClara.webp",
      alt: "Mujer con piel muy clara",
    },
    clara: {
      component: "/tonoDePiel/clara.webp",
      alt: "Mujer con piel clara",
    },
    media: {
      component: "/tonoDePiel/media.webp",
      alt: "Mujer con piel media/morena",
    },
    oscura: {
      component: "/tonoDePiel/oscura.webp",
      alt: "Mujer con piel oscura",
    },
  };

  function calculateColor(hslColor) {
    let lightness;

    if (typeof hslColor === "string") {
      if (hslColor.includes("hsl")) {
        const match = hslColor.match(
          /hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/,
        );
        lightness = match ? parseInt(match[3]) : 50;
      } else if (hslColor.includes(",")) {
        const parts = hslColor.split(",");
        lightness = parseInt(parts[2]) || 50;
      } else {
        return "#000000";
      }
    }

    return lightness > 50 ? "#000000" : "#ffffff";
  }

  const handleClickLeft = (e, hsl, name) => {
    setSelecctColorLeft(hsl);
    setSelecctNameLeft(name);
  };

  const handleClickRight = (e, hsl, name) => {
    setSelecctColorRight(hsl);
    setSelecctNameRight(name);
  };

  return (
    <section className="relative z-50 h-dvh w-dvw">
      <div class="absolute w-full h-full bg-[#FAF8F0] overflow-hidden flex items-center justify-center -z-10">
        <div class="flex w-full h-full items-center justify-center space-x-[-40px]">
          <div class="w-32 md:w-80 h-full transform bg-[#FAF8F0] -skew-x-[15deg] shadow-[20px_0_10px_rgba(0,0,0,0.5)] z-[41] relative"></div>
          <div class="w-32 md:w-80 h-full bg-[#E0719B] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-40 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#BC4F90] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-30 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#A35589] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-20 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#F0A5BC] transform -skew-x-[15deg] z-10 relative"></div>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 px-2 lg:px-0 py-8 gap-8 bg-[#FAF8F0]/15 lg:bg-[#FAF8F0]/0 backdrop-blur-[1px] ">
        <div className="w-full flwx justify-start p-4">
          <button onClick={() => setIsVisible(false)} title="atras">
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
        </div>
        <h2 className="text-xl lg:text-4xl text-center font-bold">
          MODO COMPARACION
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          {/* color palette top */}
          <div className="w-full lg:w-fit">
            <p className="text-center text-lg my-1">Precaucion</p>
            <div className="flex lg:grid lg:grid-cols-1 gap-1 w-full ">
              {data.paletteCaution.slice(0, 6).map((index, key) => (
                <div
                  id={index.nombre}
                  key={key}
                  className="w-full h-full flex flex-col justify-center items-center"
                >
                  <div
                    className="w-full h-[42px] md:w-1/2 lg:w-[80px] lg:h-[80px] rounded-lg flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.40)] hover:cursor-pointer"
                    title={index.nombre}
                    style={{ backgroundColor: index.hsl }}
                    onClick={(e) => {
                      handleClickLeft(e, index.hsl, index.nombre);
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          {/* image center*/}
          <div className="w-full h-full max-h-[600px] lg:w-fit grid grid-cols-[80px_2fr_80px] md:grid-cols-[200px_2fr_200px] lg:grid-cols-[200px_400px_200px] justify-items-stretch shadow-[2px_2px_2px_rgba(0,0,0,0.40)] rounded-lg">
            {/* top color */}
            <div className="h-full w-full lg:min-w-[200px] lg:max-w-[260px]">
              <div
                className="w-full h-full flex justify-center items-center rounded-tr-none rounded-tl-lg rounded-bl-lg"
                style={{ backgroundColor: selecctColorLeft }}
              >
                <p
                  className="text-base lg:text-2xl text-nowrap uppercase font-bold -rotate-90"
                  style={{ color: calculateColor(selecctColorLeft) }}
                >
                  {selecctNameLeft}
                </p>
              </div>
            </div>
            {/* image */}
            <div className="w-full h-full lg:max-h-[600px] ">
              <img
                src={images[image] ? images[image].component : ""}
                alt={images[image] ? images[image].alt : ""}
                className="w-full h-full"
              />
            </div>
            {/* bottom color */}
            <div className="h-full w-full lg:min-w-[200px] lg:max-w-[260px]">
              <div
                className="w-full h-full flex justify-center items-center rounded-bl-none rounded-tr-lg rounded-br-lg"
                style={{ backgroundColor: selecctColorRight }}
              >
                <p
                  className="text-base lg:text-2xl text-nowrap uppercase font-bold rotate-90"
                  style={{ color: calculateColor(selecctColorRight) }}
                >
                  {selecctNameRight}
                </p>
              </div>
            </div>
          </div>
          {/* color palette bottom */}
          <div className="w-full lg:w-fit">
            <div className="flex lg:grid lg:grid-cols-1 gap-1 w-full">
              {data.palette.slice(0, 6).map((index, key) => (
                <div
                  id={index.nombre}
                  key={key}
                  className="w-full h-full flex flex-col justify-center items-center"
                >
                  <div
                    className="w-full h-[42px] md:w-1/2 lg:w-[80px] lg:h-[80px] rounded-lg flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.40)] hover:cursor-pointer"
                    title={index.nombre}
                    style={{ backgroundColor: index.hsl }}
                    onClick={(e) => {
                      handleClickRight(e, index.hsl, index.nombre);
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <p className="text-center text-lg my-1">Favorecen</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default comparison;
