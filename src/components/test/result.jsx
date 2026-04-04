import React, { useState, useEffect } from "react";
import Comparison from "./comparison";
// import VITE_API_URL from
const VITE_API_URL = "https://yout-color-api.vercel.app/photos";

function GridColors({ data, count }) {
  return (
    <div
      className={`grid grid-cols-3 gap-1 border rounded p-1 justify-items-center w-full transition-all delay-200 `}
    >
      {data.slice(0, count).map((index, key) => (
        <div
          id={index.nombre}
          key={key}
          className=" w-full h-full flex flex-col justify-center items-center "
        >
          <p className="text-center text-sm lowercase lg:hidden">
            {index.nombre}
          </p>
          <div
            className={`bg-[${index.hsl}] w-[50px] h-[42px] lg:w-[50px] lg:h-[40px] rounded-lg flex items-center justify-center border `}
            title={index.nombre}
            style={{ backgroundColor: index.hsl }}
          ></div>
        </div>
      ))}
    </div>
  );
}

function result({ result, image }) {
  const [count, setCount] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  let resultEnglish = "";

  const seasonMap = {
    "Primavera Calida (Warm Spring)": "spring",
    "Primavera Brillante (Bright Spring)": "spring",
    "Primavera Clara (Light Spring)": "spring",
    "Primavera (General)": "spring",
    "Verano Claro (Light Summer)": "summer",
    "Verano Frio (Cool Summer)": "summer",
    "Verano Suave (Soft Summer)": "summer",
    "Verano (General)": "summer",
    "Otoño Oscuro (Dark Autumn)": "autumn",
    "Otoño Calido (Warm Autumn)": "autumn",
    "Otoño Suave (Soft Autumn)": "autumn",
    "Otoño (General)": "autumn",
    "Invierno Profundo (Deep Winter)": "winter",
    "Invierno Brillante (Bright Winter)": "winter",
    "Invierno Frio (Cool Winter)": "winter",
    "Invierno (General)": "winter",
  };

  console.log("URl utilizada:", VITE_API_URL);
  resultEnglish = seasonMap[result.name];

  useEffect(() => {
    async function handleSearch(text) {
      try {
        console.log(text);
        const response = await fetch(VITE_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: text }),
        });
        const result = await response.json();
        if (result.success) {
          setImages(result.data);
        }
      } catch (error) {
        console.error("Error al conectar con la API:", error);
      }
    }
    handleSearch(`outfit peaple ${resultEnglish} season`);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <section className="relative z-50 -mx-4 lg:h-dvh">
      <div class="absolute w-full h-full bg-[#FAF8F0] overflow-hidden flex items-center justify-center -z-10">
        <div class="flex w-full h-full items-center justify-center space-x-[-40px]">
          <div class="w-32 md:w-80 h-full transform bg-[#FAF8F0] -skew-x-[15deg] shadow-[20px_0_10px_rgba(0,0,0,0.5)] z-[41] relative"></div>
          <div class="w-32 md:w-80 h-full bg-[#E0719B] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-40 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#BC4F90] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-30 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#A35589] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-20 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#F0A5BC] transform -skew-x-[15deg] z-10 relative"></div>
        </div>
      </div>
      {!isVisible && (
        <div className="w-full h-full grid grid-cols-1 py-8 gap-8 bg-[#FAF8F0]/15 lg:bg-[#FAF8F0]/0 backdrop-blur-[1px] ">
          <div className="w-full flex justify-start px-4">
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              title="salir"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                xml:space="preserve"
                width="24"
                height="24"
              >
                <g>
                  <path d="M487.06,195.669l-82.752-82.752c-8.475-8.185-21.98-7.95-30.165,0.525c-7.985,8.267-7.985,21.374,0,29.641l82.752,82.752   c2.459,2.507,4.607,5.301,6.4,8.32c-0.32,0-0.576-0.171-0.896-0.171l0,0l-334.592,0.683c-11.782,0-21.333,9.551-21.333,21.333   c0,11.782,9.551,21.333,21.333,21.333l0,0l334.464-0.683c0.597,0,1.088-0.299,1.664-0.341c-1.892,3.609-4.292,6.928-7.125,9.856   l-82.752,82.752c-8.475,8.185-8.71,21.69-0.525,30.165c8.185,8.475,21.69,8.71,30.165,0.525c0.178-0.172,0.353-0.347,0.525-0.525   l82.752-82.752c33.313-33.323,33.313-87.339,0-120.661L487.06,195.669z" />
                  <path d="M149.374,469.333h-42.667c-35.346,0-64-28.654-64-64V106.667c0-35.346,28.654-64,64-64h42.667   c11.782,0,21.333-9.551,21.333-21.333S161.157,0,149.374,0h-42.667C47.827,0.071,0.112,47.786,0.041,106.667v298.667   C0.112,464.214,47.827,511.93,106.708,512h42.667c11.782,0,21.333-9.551,21.333-21.333   C170.708,478.885,161.157,469.333,149.374,469.333z" />
                </g>
              </svg>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-lg md:text-xl">Felicidades tu estacion es</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 16.175V4H13V16.175L18.6 10.575L20 12L12 20L4 12L5.4 10.575L11 16.175Z"
                fill="#1D1B20"
              />
            </svg>
            <h2 className="uppercase text-center font-semibold lg:text-xl xl:text-2xl">
              {result.name}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-16 lg:flex lg:flex-row justify-center lg:h-[420px]">
            {/* colores precaucion */}
            <div className="flex flex-col lg:col-start-1 lg:col-end-1 gap-2">
              <p className="text-center text-lg">
                Colores que restan luminosidad
              </p>
              <GridColors data={result.paletteCaution} count={count} />
            </div>
            {/* contenedor central imagenes */}
            {images.length > 0 ? (
              <div className="grid grid-cols-[1fr_1.5fr_1fr] row-start-1 gap-1 justify-items-center">
                <div className="flex flex-col justify-between w-full h-full items-center md:gap-4  ">
                  <div
                    id={images[0]?.id}
                    className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded "
                  >
                    <img
                      className="w-full h-full"
                      src={images[0]?.src}
                      alt={images[0]?.alt}
                      title={
                        "fotografo: " +
                        images[0]?.photographer_name +
                        " (pexels)"
                      }
                    />
                  </div>
                  <div
                    id={images[1]?.id}
                    className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded "
                  >
                    <img
                      className="w-full h-full"
                      src={images[1]?.src}
                      alt={images[1]?.alt}
                      title={
                        "fotografo: " +
                        images[1]?.photographer_name +
                        " (pexels)"
                      }
                    />
                  </div>
                </div>
                <div
                  id={images[2]?.id}
                  className="w-[130px] h-[206px] md:w-[180px] md:h-[400px] lg:w-full lg:h-full rounded "
                >
                  <img
                    className="w-full h-full"
                    src={images[2]?.src}
                    alt={images[2]?.alt}
                    title={
                      "fotografo: " + images[2]?.photographer_name + " (pexels)"
                    }
                  />
                </div>
                <div className="flex flex-col justify-between w-full h-full items-center md:gap-4  ">
                  <div
                    id={images[3]?.id}
                    className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded "
                  >
                    <img
                      className="w-full h-full"
                      src={images[3]?.src}
                      alt={images[3]?.alt}
                      title={
                        "fotografo: " +
                        images[3]?.photographer_name +
                        " (pexels)"
                      }
                    />
                  </div>
                  <div
                    id={images[4]?.id}
                    className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded "
                  >
                    <img
                      className="w-full h-full"
                      src={images[4]?.src}
                      alt={images[4]?.alt}
                      title={
                        "fotografo: " +
                        images[4]?.photographer_name +
                        " (pexels)"
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p
                className={`text-center ${loading ? "text-white animate-pulse" : "text-orange-500"}`}
              >
                {loading
                  ? "Cargando imágenes..."
                  : "Error al cargar las imágenes"}
              </p>
            )}

            {/* colores luminosidad */}
            <div className="flex flex-col lg:col-start-3 lg:col-end-3 gap-2 items-center">
              <p className="text-center text-lg">Colores que te favorecen</p>
              <GridColors data={result.palette} count={count} />
              <button
                onClick={() => setCount(count === 6 ? 21 : 6)}
                className="border px-2 w-fit rounded hover:bg-[#FAF8F0]/20 transition-all delay-150 hover:-translate-y-1"
              >
                {count === 6 ? "ver mas" : "ver menos"}
              </button>
            </div>
          </div>
          {/* insight, comparacion mode */}
          <div className="flex flex-col justify-center items-center gap-4 ">
            <p className="text-center text-base sm:text-lg min-w-[300px] max-w-[700px]">
              {result.textResult}
            </p>
            <button
              onClick={() => setIsVisible(true)}
              className="uppercase border py-2 px-4 w-fit text-center rounded hover:bg-[#FAF8F0]/20 transition-all delay-150 hover:-translate-y-1"
            >
              modo comparacion
            </button>
          </div>
        </div>
      )}
      {isVisible && (
        <Comparison setIsVisible={setIsVisible} data={result} image={image} />
      )}
    </section>
  );
}

export default result;
