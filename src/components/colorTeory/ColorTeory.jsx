import React, { useState, useEffect } from "react";
import { spring, summer, autumn, winter } from "../../data/seasons";
import HeaderDesc from "./HeaderDesc";
import FristSecondThreeColors from "./FristSecondThreeColors";
import WarmCold from "./WarmCold";
import Complement from "./Complement";
import Combinations from "./Combinations";
import CombinationColors from "./CombinationColor";
import html2canvas from "html2canvas";
import { toPng } from "html-to-image";

function ColorTeory({ setIsVisibleColorTeory, nameSeasson }) {
  const [loader, setLoader] = useState(false)
  let colores = "";
  switch (nameSeasson) {
    case "Primavera Calida (Warm Spring)":
    case "Primavera Brillante (Bright Spring)":
    case "Primavera Clara (Light Spring)":
      colores = spring;
      break;
    case "Verano Claro (Light Summer)":
    case "Verano Frio (Cool Summer)":
    case "Verano Suave (Soft Summer)":
      colores = summer;
      break;
    case "Otoño Oscuro (Dark Autumn)":
    case "Otoño Calido (Warm Autumn)":
    case "Otoño Suave (Soft Autumn)":
      colores = autumn;
      break;
    case "Invierno Profundo (Deep Winter)":
    case "Invierno Brillante (Bright Winter)":
    case "Invierno Frio (True Winter)":
      colores = winter;
      break;
    default:
      colores = spring;
      break;
  }

  const [baseIndex, setBaseIndex] = useState(0);
  const base = colores && colores.length > 0 ? colores[baseIndex] : null;

  useEffect(() => {
    setBaseIndex(0);
  }, [nameSeasson]);

  const WHEEL_REF = [
    { h: 60, name: "Amarillo", cat: "primario" },
    { h: 45, name: "Amarillo Naranja", cat: "terciario" },
    { h: 30, name: "Naranja", cat: "secundario" },
    { h: 15, name: "Rojo Naranja", cat: "terciario" },
    { h: 0, name: "Rojo", cat: "primario" },
    { h: 330, name: "Rojo Violeta", cat: "terciario" },
    { h: 270, name: "Violeta", cat: "secundario" },
    { h: 255, name: "Azul Violeta", cat: "terciario" },
    { h: 240, name: "Azul", cat: "primario" },
    { h: 195, name: "Azul Verde", cat: "terciario" },
    { h: 120, name: "Verde", cat: "secundario" },
    { h: 90, name: "Amarillo Verde", cat: "terciario" },
  ];

  const hsl = (c) => c.hsl || `hsl(${c.h}, ${c.s}%, ${c.l}%)`;
  const norm = (h) => ((h % 360) + 360) % 360;
  const hueDist = (a, b) => {
    const d = Math.abs(norm(a) - norm(b)) % 360;
    return d > 180 ? 360 - d : d;
  };

  function nearest(colores, targetHue, exclude) {
    let best = null,
      bestD = Infinity;
    for (const c of colores) {
      if (exclude && exclude.includes(c)) continue;
      const d = hueDist(c.h, targetHue);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best || colores[0];
  }

  function polar(cx, cy, r, hueDeg) {
    const a = ((hueDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  }

  const stop = [];
  for (let i = 0; i <= 360; i += 10) {
    stop.push(`hsl(${i}, 70%, 62%) ${i}deg`);
  }

  let style = {
    background: `conic-gradient(from 0deg, ${stop.join(",")})`,
  };

  const size = 200,
    hole = 120;

  const cx = size / 2,
    cy = size / 2,
    r = (size - hole) / 2 + hole / 2 - 6;

  const pinSize = 22;

  function classifyWheel(colores) {
    return WHEEL_REF.map((ref) => ({ ...ref, color: nearest(colores, ref.h) }));
  }

  function generarConic(stops) {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("No se pudo crear el contexto 2D");
    const cx = size / 2,
      cy = size / 2,
      r = size / 2;

    for (let i = 0; i < stops.length - 1; i++) {
      const stop1 = stops[i].match(/^(.*)\s+(-?\d+(?:\.\d+)?)deg$/);
      const stop2 = stops[i + 1].match(/^(.*)\s+(-?\d+(?:\.\d+)?)deg$/);

      if (!stop1 || !stop2) {
        throw new Error(`Stop de gradiente invalido: ${stops[i]}`);
      }

      const [, color1, deg1] = stop1;
      const [, , deg2] = stop2;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(
        cx,
        cy,
        r,
        ((parseFloat(deg1) - 90) * Math.PI) / 180,
        ((parseFloat(deg2) - 90) * Math.PI) / 180,
      );
      ctx.closePath();
      ctx.fillStyle = color1;
      ctx.fill();
    }
    return canvas.toDataURL("image/png");
  }

  async function handleDownload() {
    const dataUrl = generarConic(stop);
    const ruleSecond = colores[Math.floor(colores.length / 2) || colores[0]];
    const ruleAccent = colores[colores.length - 1] || colores[0];
    const ruleDataUrl = generarConic([
      `${hsl(base)} 0deg`,
      `${hsl(ruleSecond)} 216deg`,
      `${hsl(ruleAccent)} 324deg`,
      `${hsl(ruleAccent)} 360deg`,
    ]);

    const canvas = await html2canvas(document.getElementById('card-content'), {
      scale: 2,
      backgroundColor: "#FAF8F0",
      onclone: (doc) => {
        const el = doc.getElementById("gradientCircle");
        if (!el) throw new Error("No se encontro gradientCircle en el clon");
        el.style.background = "none";
        el.style.backgroundImage = `url(${dataUrl})`;
        el.style.backgroundSize = "100% 100%";
        el.style.backgroundRepeat = "no-repeat";

        const rulePie = doc.getElementById("rulePie");
        if (!rulePie) throw new Error("No se encontro rulePie en el clon");
        rulePie.style.background = "none";
        rulePie.style.backgroundImage = `url(${ruleDataUrl})`;
        rulePie.style.backgroundSize = "100% 100%";
        rulePie.style.backgroundRepeat = "no-repeat";
      },
    });

    const link = document.createElement('a');
    link.download = 'captura.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    setTimeout(() => {
      setLoader(false)
    },3000)
  }

  return (
    <section className="flex justify-center  relative w-full bg-[#FAF8F0] ">
      {loader && 
        <div className="flex flex-col items-center justify-center h-screen w-screen  bg-[#FAF8F0] z-50 fixed top-0 left-0">
          <div className="loader"></div>
          <p className="font-k2d">Descargando...</p>
        </div>
      }
      <div className="w-full flex justify-between items-center p-4 absolute">
        <button onClick={() => setIsVisibleColorTeory(false)} title="atras">
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
        <button
          type="button"
          title="descargar"
          className="cursor-pointer"
          onClick={() => {handleDownload(); setLoader(true)}}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 1.5C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H14.25C13.8522 1.5 13.4706 1.65804 13.1893 1.93934C12.908 2.22064 12.75 2.60218 12.75 3V13.9395L16.719 9.969C16.8598 9.82817 17.0508 9.74905 17.25 9.74905C17.4492 9.74905 17.6402 9.82817 17.781 9.969C17.9218 10.1098 18.0009 10.3008 18.0009 10.5C18.0009 10.6992 17.9218 10.8902 17.781 11.031L12.531 16.281C12.4613 16.3508 12.3786 16.4063 12.2874 16.4441C12.1963 16.4819 12.0987 16.5013 12 16.5013C11.9013 16.5013 11.8037 16.4819 11.7125 16.4441C11.6214 16.4063 11.5387 16.3508 11.469 16.281L6.219 11.031C6.14927 10.9613 6.09395 10.8785 6.05621 10.7874C6.01848 10.6963 5.99905 10.5986 5.99905 10.5C5.99905 10.4014 6.01848 10.3037 6.05621 10.2126C6.09395 10.1215 6.14927 10.0387 6.219 9.969C6.28873 9.89927 6.37152 9.84395 6.46262 9.80622C6.55373 9.76848 6.65138 9.74905 6.75 9.74905C6.84862 9.74905 6.94627 9.76848 7.03738 9.80622C7.12848 9.84395 7.21127 9.89927 7.281 9.969L11.25 13.9395V3C11.25 2.20435 11.5661 1.44129 12.1287 0.87868C12.6913 0.316071 13.4544 0 14.25 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L6.75 0C6.94891 0 7.13968 0.0790176 7.28033 0.21967C7.42098 0.360322 7.5 0.551088 7.5 0.75C7.5 0.948912 7.42098 1.13968 7.28033 1.28033C7.13968 1.42098 6.94891 1.5 6.75 1.5H3Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
      <div
        className="w-full max-w-[1240px] p-4 pt-16 gap-16 flex flex-col"
        id="card-content"
      >
        <div className=" text-center mb-14">
          <h2 className="font-julius text-3xl md:text-5xl text-center ">
            YOURCOLOR
          </h2>
          <div className="h-2 w-full rounded my-4 bg-[linear-gradient(90deg,#e11d3f,#f2782f,#f4c531,#7bc142,#2fa3d6,#3552c9,#8b3fd1)]"></div>
          <h2 className="text-2xl whitespace-[-0.01em]">
            Teoría del Color {nameSeasson}
          </h2>
          <p className="text-lg mt-4">
            La teoríz del color es la guía para combinar de manera armoniosa y
            expresar sensaciones.
          </p>
        </div>
        {/* circle, [primary, secondary, third]colors  */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr_1.2fr] items-start  gap-4">
          {/* Circle colors */}
          <div>
            <HeaderDesc nameHead={"circleColor"} />
            <div className=" bg-white rounded-2xl border shadow-md flex flex-col items-center p-4">
              <div className="relative flex justify-center items-center w-80 h-80 max-w-full">
                <div
                  className="relative rounded-full flex justify-center items-center w-52 h-52 border"
                  style={style}
                  id="gradientCircle"
                >
                  <div className="absolute w-32 h-32 md:w-24 md:h-24 rounded-full shadow-inner bg-white"></div>
                  {colores.map((c, i) => {
                    const p = polar(cx, cy, r, c.h);
                    const style = {
                      position: "absolute",
                      left: `${p.x - pinSize / 2}px`,
                      top: `${p.y - pinSize / 2}px`,
                      backgroundColor: c.hsl || `hsl(${c.h}, ${c.s}%, ${c.l}%)`,
                    };
                    return (
                      <div
                        key={i}
                        className={`absolute border-2 transition-transform delay-[15ms] ease-linear border-white cursor-pointer hover:z-10 w-5 h-5 rounded-full hover:scale-125 ${i === baseIndex ? "border border-black scale-150 z-10" : ""}`}
                        style={style}
                        title={c.nombre}
                        onClick={() => {
                          setBaseIndex(i);
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <p>
                Tocá un color para usarlo como <b>base</b> en las combinaciones
                de abajo
              </p>
            </div>
          </div>

          <section className="flex flex-col gap-6">
            <FristSecondThreeColors
              nameHead={"primario"}
              state={classifyWheel(colores)}
              hsl={hsl}
            />
            <FristSecondThreeColors
              nameHead={"secundario"}
              state={classifyWheel(colores)}
              hsl={hsl}
            />
          </section>
          <FristSecondThreeColors
            nameHead={"terciario"}
            state={classifyWheel(colores)}
            hsl={hsl}
          />
        </section>
        {/* warm / cold */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WarmCold
            nameHead={"warmColor"}
            norm={norm}
            colores={colores}
            hsl={hsl}
          />
          <WarmCold
            nameHead={"coldColor"}
            norm={norm}
            colores={colores}
            hsl={hsl}
          />
        </section>
        {/* complementary / combinations */}
        <section className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-4">
          <Complement
            state={classifyWheel(colores)}
            nearest={nearest}
            hsl={hsl}
            colores={colores}
          />
          <Combinations
            colores={colores}
            base={base}
            nearest={nearest}
            hsl={hsl}
          />
        </section>
        {/* combinatios colors */}
        <section>
          <HeaderDesc nameHead={"guideColor"} />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <CombinationColors
              nameSection={"neutro"}
              colores={colores}
              hsl={hsl}
            />
            <CombinationColors nameSection={"monochromatic"} base={base} />
            <CombinationColors
              nameSection={"multichromatic"}
              colores={colores}
              hsl={hsl}
            />
            <CombinationColors
              nameSection={"rule"}
              colores={colores}
              hsl={hsl}
              base={base}
            />
          </div>
        </section>
        <div className="flex flex-col md:flex-row justify-around items-center border border-dashed border-gray-400 rounded-xl bg-white">
          <div className=" p-2  gap-2 md:p-4 sm:gap-4 md:w-[500px] lg:w-[700px] flex flex-col">
            <p className="text-base text-[#5a544c]">
              💡
              <b className="text-black">Recuerda:</b> no existen reglas
              estrictas, la teoría del color es una guía para que explores,
              experimentes y desarroles tu propio estilo.
            </p>
            <p className="text-base text-[#5a544c]">
              Si bien sugerimos el uso de esta paleta para realzar su belleza,
              sientase en completa libertad de sustituirlos por otros colores
              con los que se sienta mas identificado/a y comodo/a
            </p>
            <p className="text-base text-[#5a544c]">
              El objetivo de este test es inspirate, no limitarte. Te invitamos
              a adaptar, mezclar y eligir los colores que mejor resuenen con tu
              vision creativa y te hagan sentir seguro/a al crear
            </p>
            <b className="text-center text-lg ">Tu estilo, tu eleccion!</b>
          </div>
          <img src="/qr-code.png" alt="qr" className="h-64 bg-white m-8" />
          <div></div>
        </div>
      </div>
    
    <style>
  {`.loader {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #FAF8F0;
  
  animation: animloader 1.5s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: -64px -64px #E0719B,  -22px -30px,  22px -30px, 64px -30px;
  }
  33% {
    box-shadow: -64px -30px , -22px -64px #BC4F90,  22px -30px, 64px -30px;
  }
  66% {
    box-shadow: -64px -30px , -22px -30px, 22px -64px #A35589, 64px -30px;
  }
  100% {
    box-shadow: -64px -30px, -22px -30px, 22px -30px , 64px -64px #F0A5BC;
  }
}`}

</style>

    </section>
    
  );
}

export default ColorTeory;
