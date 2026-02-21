import React, { useState } from "react";
import Comparison from "./comparison";
// function callApi(text) {
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     async function handleSearch(text) {
//       try {
//         const response = await fetch("http://localhost:3000/photos", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ query: text }),
//         });
//         const result = await response.json();
//         if (result.success) {
//           setImages(result.data);
//         }
//       } catch (error) {
//         console.log("Error al conectar con la API:", error);
//       }
//     }
//     handleSearch(text);
//   }, []);
// }
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
            className={`bg-[${index.hexa}] w-[50px] h-[42px] lg:w-[50px] lg:h-[40px] rounded-lg flex items-center justify-center border `}
            title={index.nombre}
            style={{ backgroundColor: index.hexa }}
          ></div>
        </div>
      ))}
    </div>
  );
}

function result({ result }) {
  const [count, setCount] = useState(6);
  const [isVisible, setIsVisible] = useState(false);
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
            <div className="grid grid-cols-[1fr_1.5fr_1fr] row-start-1 gap-1 justify-items-center">
              <div className="flex flex-col justify-between w-full h-full items-center md:gap-4  ">
                <div className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded bg-violet-300"></div>
                <div className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded bg-violet-300"></div>
              </div>
              <div className="w-[130px] h-[206px] md:w-[180px] md:h-[400px] lg:w-full lg:h-full rounded bg-violet-300"></div>
              <div className="flex flex-col justify-between w-full h-full items-center md:gap-4  ">
                <div className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded bg-violet-300"></div>
                <div className="w-[90px] h-[90px] md:w-[140px] md:h-[140px] xl:w-[180px] xl:h-[180px] rounded bg-violet-300"></div>
              </div>
            </div>
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
      {isVisible && <Comparison setIsVisible={setIsVisible} />}
    </section>
  );
}

export default result;
