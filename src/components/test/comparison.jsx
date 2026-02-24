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

  function calculateColor(bgColor) {
    let r = parseInt(bgColor.substring(1, 3), 16);
    let g = parseInt(bgColor.substring(3, 5), 16);
    let b = parseInt(bgColor.substring(5, 7), 16);

    let dark = (r + g + b) / 3;

    return dark < 128 ? "#ffffff" : "#000000";
  }

  const handleClickLeft = (e, hexa, name) => {
    setSelecctColorLeft(hexa);
    setSelecctNameLeft(name);
  };

  const handleClickRight = (e, hexa, name) => {
    setSelecctColorRight(hexa);
    setSelecctNameRight(name);
  };

  function GridColors({
    data,
    rotated,
    position,
    selecctColor,
    selecctName,
    handleClick,
    colorText,
    rounded,
    text,
  }) {
    return (
      <div className={`flex flex-col ${position} w-full h-full gap-3`}>
        <p className="text-2xl block lg:hidden text-center">{text}</p>
        <div
          className={`flex lg:grid lg:grid-cols-1 lg:max-w-[200px] gap-x-1 lg:gap-y-2 p-1 justify-items-center w-full h-full transition-all delay-200 `}
        >
          <p className="text-lg text-center hidden lg:block">{text}</p>
          {data.slice(0, 6).map((index, key) => (
            <div
              id={index.nombre}
              key={key}
              className=" w-full h-full flex flex-col justify-center items-center"
            >
              <div
                className={`w-[45px] h-[42px] lg:w-[80px] lg:h-[80px] rounded-lg flex items-center justify-center shadow-[2px_2px_4px_rgba(0,0,0,0.40)] hover:cursor-pointer`}
                title={index.nombre}
                style={{ backgroundColor: index.hexa }}
                onClick={(e) => {
                  handleClick(e, index.hexa, index.nombre);
                }}
              ></div>
            </div>
          ))}
        </div>
        <div className="min-h-[100px] lg:h-full w-full min-w-[200px] lg:max-w-[260px]">
          <div
            className={`w-full h-full flex justify-center items-center shadow-[2px_2px_4px_rgba(0,0,0,0.40)] ${rounded}`}
            style={{ backgroundColor: selecctColor }}
          >
            <p
              className={`text-lg lg:text-2xl text-nowrap uppercase font-bold ${rotated}`}
              style={{ color: colorText }}
            >
              {selecctName}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative z-50 lg:h-dvh">
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
        <button
          onClick={() => setIsVisible(false)}
          className="fixed top-2 left-2"
        >
          atras
        </button>
        <h2 className="text-xl lg:text-4xl text-center font-bold">
          MODO COMPARACION
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
          <div className="h-full max-h-[600px]">
            <GridColors
              text={"Precaucion"}
              data={data.paletteCaution}
              rotated={"lg:-rotate-90"}
              position={"lg:flex-row"}
              rounded={
                "rounded-tl-lg rounded-tr-lg lg:rounded-tr-none lg:rounded-tl-lg lg:rounded-bl-lg"
              }
              selecctColor={selecctColorLeft}
              selecctName={selecctNameLeft}
              handleClick={handleClickLeft}
              colorText={calculateColor(selecctColorLeft)}
            />
          </div>
          <div className="h-full max-h-[600px] shadow-[2px_2px_2px_rgba(0,0,0,0.40)]">
            <img
              src={images[image] ? images[image].component : ""}
              alt={images[image] ? images[image].alt : ""}
              className="w-full h-full"
            />
          </div>
          <div className="h-full max-h-[600px]">
            <GridColors
              text={"Favorecen"}
              data={data.palette}
              rotated={"lg:-rotate-90"}
              position={"flex-col-reverse lg:flex-row-reverse"}
              rounded={
                "rounded-bl-lg rounded-br-lg lg:rounded-bl-none lg:rounded-tr-lg lg:rounded-br-lg"
              }
              selecctColor={selecctColorRight}
              selecctName={selecctNameRight}
              handleClick={handleClickRight}
              colorText={calculateColor(selecctColorRight)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default comparison;
