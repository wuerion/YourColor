import React, { useState, useEffect } from "react";

function TestHome({ onStart }) {
  return (
    <section class=" relative z-50 lg:h-dvh" id="test">
      <div class="absolute w-full h-full  bg-[#FAF8F0] overflow-hidden flex items-center justify-center -z-10">
        <div class="flex w-full h-full items-center justify-center space-x-[-40px]">
          <div class="w-32 md:w-80 h-full transform bg-[#FAF8F0] -skew-x-[15deg] shadow-[20px_0_10px_rgba(0,0,0,0.5)] z-[41] relative"></div>
          <div class="w-32 md:w-80 h-full bg-[#E0719B] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-40 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#BC4F90] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-30 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#A35589] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-20 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#F0A5BC] transform -skew-x-[15deg] z-10 relative"></div>
        </div>
      </div>
      <div class=" w-full h-full z-50 p-2 flex flex-col gap-8 bg-[#FAF8F0]/25 lg:bg-[#FAF8F0]/0 backdrop-blur-[1px]">
        <div class="flex flex-col justify-center items-center gap-4 h-1/3">
          <h2 class="text-lg text-center font-bold my-8">
            Descubre tu estacion y Potencia tu imagen
          </h2>
          <p>
            Analiza tu piel, cabello y ojos con nuestro método profesional de
            colorimetría para encontrar los colores que más te favorecen
          </p>
          <p>
            ¿Qué analizamos?: Evaluamos <strong>Tinte, Valor y Croma</strong>{" "}
            para ubicarte en una de las 12 estaciones.
          </p>
        </div>
        <div class="h-1/2 flex flex-col lg:p-8 gap-8 lg:gap-4">
          <p class="text-neutral-500 text-2xl">CONSEJOS</p>

          <div class="bg-gradient-to-b from-[#E0719B] from-50% to-[#FAF8F0] to-50% rounded lg:rounded-tl-full lg:rounded-bl-full flex w-fit items-center lg:items-stretch  h-[250px] lg:h-24  shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
            <div class="p-2 rounded-full bg-[#E0719B] shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
              <div class="p-4 rounded-full bg-[#FAF8F0] w-fit">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5 25C37.5 28.3152 36.183 31.4946 33.8388 33.8388C31.4946 36.183 28.3152 37.5 25 37.5C21.6848 37.5 18.5054 36.183 16.1612 33.8388C13.817 31.4946 12.5 28.3152 12.5 25C12.5 21.6848 13.817 18.5054 16.1612 16.1612C18.5054 13.817 21.6848 12.5 25 12.5C28.3152 12.5 31.4946 13.817 33.8388 16.1612C36.183 18.5054 37.5 21.6848 37.5 25Z"
                    fill="black"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.9998 2.604C25.4142 2.604 25.8117 2.76862 26.1047 3.06165C26.3977 3.35468 26.5623 3.7521 26.5623 4.1665V6.24984C26.5623 6.66424 26.3977 7.06167 26.1047 7.35469C25.8117 7.64772 25.4142 7.81234 24.9998 7.81234C24.5854 7.81234 24.188 7.64772 23.895 7.35469C23.602 7.06167 23.4373 6.66424 23.4373 6.24984V4.1665C23.4373 3.7521 23.602 3.35468 23.895 3.06165C24.188 2.76862 24.5854 2.604 24.9998 2.604ZM9.16442 9.16442C9.45739 8.87182 9.85452 8.70746 10.2686 8.70746C10.6827 8.70746 11.0798 8.87182 11.3728 9.16442L12.1915 9.98109C12.4763 10.2756 12.6339 10.6703 12.6306 11.0799C12.6272 11.4896 12.4631 11.8816 12.1735 12.1714C11.8839 12.4613 11.4921 12.6258 11.0824 12.6295C10.6728 12.6333 10.278 12.476 9.98317 12.1915L9.16442 11.3728C8.87182 11.0798 8.70746 10.6827 8.70746 10.2686C8.70746 9.85452 8.87182 9.45739 9.16442 9.16442ZM40.8353 9.16442C41.1279 9.45739 41.2922 9.85452 41.2922 10.2686C41.2922 10.6827 41.1279 11.0798 40.8353 11.3728L40.0165 12.1915C39.7203 12.4675 39.3285 12.6178 38.9238 12.6106C38.519 12.6035 38.1327 12.4395 37.8465 12.1532C37.5602 11.8669 37.3962 11.4807 37.3891 11.0759C37.3819 10.6711 37.5322 10.2794 37.8082 9.98317L38.6269 9.16442C38.9199 8.87182 39.317 8.70746 39.7311 8.70746C40.1452 8.70746 40.5423 8.87182 40.8353 9.16442ZM2.604 24.9998C2.604 24.5854 2.76862 24.188 3.06165 23.895C3.35468 23.602 3.7521 23.4373 4.1665 23.4373H6.24984C6.66424 23.4373 7.06167 23.602 7.35469 23.895C7.64772 24.188 7.81234 24.5854 7.81234 24.9998C7.81234 25.4142 7.64772 25.8117 7.35469 26.1047C7.06167 26.3977 6.66424 26.5623 6.24984 26.5623H4.1665C3.7521 26.5623 3.35468 26.3977 3.06165 26.1047C2.76862 25.8117 2.604 25.4142 2.604 24.9998ZM42.1873 24.9998C42.1873 24.5854 42.352 24.188 42.645 23.895C42.938 23.602 43.3354 23.4373 43.7498 23.4373H45.8332C46.2476 23.4373 46.645 23.602 46.938 23.895C47.2311 24.188 47.3957 24.5854 47.3957 24.9998C47.3957 25.4142 47.2311 25.8117 46.938 26.1047C46.645 26.3977 46.2476 26.5623 45.8332 26.5623H43.7498C43.3354 26.5623 42.938 26.3977 42.645 26.1047C42.352 25.8117 42.1873 25.4142 42.1873 24.9998ZM37.8082 37.8082C38.1011 37.5156 38.4983 37.3512 38.9123 37.3512C39.3264 37.3512 39.7235 37.5156 40.0165 37.8082L40.8353 38.6269C40.9888 38.77 41.1119 38.9425 41.1973 39.1341C41.2827 39.3258 41.3286 39.5327 41.3323 39.7425C41.336 39.9523 41.2974 40.1607 41.2188 40.3553C41.1403 40.5498 41.0233 40.7265 40.8749 40.8749C40.7265 41.0233 40.5498 41.1403 40.3553 41.2188C40.1607 41.2974 39.9523 41.336 39.7425 41.3323C39.5327 41.3286 39.3258 41.2827 39.1341 41.1973C38.9425 41.1119 38.77 40.9888 38.6269 40.8353L37.8082 40.0165C37.5156 39.7235 37.3512 39.3264 37.3512 38.9123C37.3512 38.4983 37.5156 38.1011 37.8082 37.8082ZM12.1915 37.8082C12.4841 38.1011 12.6485 38.4983 12.6485 38.9123C12.6485 39.3264 12.4841 39.7235 12.1915 40.0165L11.3728 40.8353C11.2297 40.9888 11.0572 41.1119 10.8655 41.1973C10.6739 41.2827 10.467 41.3286 10.2572 41.3323C10.0474 41.336 9.83898 41.2974 9.64443 41.2188C9.44987 41.1403 9.27313 41.0233 9.12476 40.8749C8.97639 40.7265 8.85942 40.5498 8.78083 40.3553C8.70225 40.1607 8.66365 39.9523 8.66736 39.7425C8.67106 39.5327 8.71698 39.3258 8.80238 39.1341C8.88778 38.9425 9.01091 38.77 9.16442 38.6269L9.98109 37.8082C10.1262 37.663 10.2985 37.5478 10.4881 37.4692C10.6778 37.3906 10.881 37.3502 11.0863 37.3502C11.2916 37.3502 11.4948 37.3906 11.6845 37.4692C11.8741 37.5478 12.0464 37.663 12.1915 37.8082ZM24.9998 42.1873C25.4142 42.1873 25.8117 42.352 26.1047 42.645C26.3977 42.938 26.5623 43.3354 26.5623 43.7498V45.8332C26.5623 46.2476 26.3977 46.645 26.1047 46.938C25.8117 47.2311 25.4142 47.3957 24.9998 47.3957C24.5854 47.3957 24.188 47.2311 23.895 46.938C23.602 46.645 23.4373 46.2476 23.4373 45.8332V43.7498C23.4373 43.3354 23.602 42.938 23.895 42.645C24.188 42.352 24.5854 42.1873 24.9998 42.1873Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="flex flex-col h-full lg:w-fit px-2">
              <p class="h-1/2 flex items-center text-white text-lg">
                Luz Natural: Realiza el test cerca de una ventana.
              </p>
              <p class="h-1/2 flex items-center text-lg">
                La luz artificial cambia los tonos de tu piel.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-b from-[#BC4F90] from-50% to-[#FAF8F0] to-50% rounded lg:rounded-tl-full lg:rounded-bl-full lg:rounded-tr-lg lg:rounded-br-lg flex w-fit h-[240px] lg:h-24 items-center lg:items-stretch shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
            <div class="p-2 rounded-full bg-[#BC4F90] shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
              <div class="p-4 rounded-full bg-[#FAF8F0] w-fit">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.9829 37.8379V48C33.9829 48.8284 33.3113 49.5 32.4829 49.5H27.2876C26.4592 49.5 25.7876 48.8284 25.7876 48V37.8379H33.9829Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <rect
                    x="28.0864"
                    y="34.9087"
                    width="3.5977"
                    height="2.24675"
                    fill="#FAF8F0"
                    stroke="black"
                  ></rect>
                  <path
                    d="M31.3975 24.2163V34.2329H28.374V24.2153L29.8848 22.5073L31.3975 24.2163Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <path
                    d="M29.8857 22.2534C30.6647 22.2536 31.3973 22.9879 31.3975 24.0259C31.3975 25.064 30.6648 25.7992 29.8857 25.7993C29.1066 25.7993 28.374 25.0641 28.374 24.0259C28.3741 22.9878 29.1067 22.2534 29.8857 22.2534Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <path
                    d="M18.4653 18.0322V48C18.4652 48.8283 17.7937 49.5 16.9653 49.5H11.77C10.9417 49.5 10.2701 48.8283 10.27 48V18.0322H18.4653Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <line
                    x1="9.77002"
                    y1="21.9028"
                    x2="18.9654"
                    y2="21.9028"
                    stroke="black"
                  ></line>
                  <line
                    x1="9.77002"
                    y1="44.6299"
                    x2="18.9654"
                    y2="44.6299"
                    stroke="black"
                  ></line>
                  <path
                    d="M14.3682 0.5C21.2231 0.50013 26.7989 4.34268 27.9951 9.25586C28.2464 10.2883 27.676 11.366 26.6748 12.0322L19.5518 16.7715C18.9774 17.1536 18.3022 17.3574 17.6123 17.3574H11.123C10.4334 17.3574 9.75884 17.1534 9.18457 16.7715L2.06152 12.0322C1.06014 11.366 0.489867 10.2883 0.741211 9.25586C1.93756 4.34267 7.51315 0.5 14.3682 0.5Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <line
                    x1="17.1665"
                    y1="12.6621"
                    x2="17.1665"
                    y2="17.8569"
                    stroke="black"
                  ></line>
                  <line
                    x1="12.5688"
                    y1="12.6621"
                    x2="12.5688"
                    y2="17.8569"
                    stroke="black"
                  ></line>
                  <line
                    x1="14.8677"
                    y1="12.6621"
                    x2="14.8677"
                    y2="17.8569"
                    stroke="black"
                  ></line>
                  <path
                    d="M49.5 37.5132V46.0005C49.4998 47.9333 47.9329 49.5005 46 49.5005H44.8047C42.8718 49.5005 41.3048 47.9334 41.3047 46.0005V37.5132H49.5Z"
                    fill="#FAF8F0"
                    stroke="black"
                  ></path>
                  <path
                    d="M45.4028 15.1104C45.4439 15.1106 45.4771 15.1444 45.4771 15.1855V36.8379H45.3276V15.1855C45.3276 15.1443 45.3616 15.1104 45.4028 15.1104Z"
                    fill="#FAF8F0"
                    stroke="black"
                    stroke-width="0.574713"
                  ></path>
                  <line
                    x1="43.1035"
                    y1="15.7339"
                    x2="47.7012"
                    y2="15.7339"
                    stroke="black"
                  ></line>
                  <line
                    x1="42.8164"
                    y1="17.6816"
                    x2="47.9888"
                    y2="17.6816"
                    stroke="black"
                  ></line>
                  <line
                    x1="42.8164"
                    y1="19.6299"
                    x2="47.9888"
                    y2="19.6299"
                    stroke="black"
                  ></line>
                  <line
                    x1="43.1035"
                    y1="21.5781"
                    x2="47.7012"
                    y2="21.5781"
                    stroke="black"
                  ></line>
                  <line
                    x1="25.2876"
                    y1="43.3311"
                    x2="34.483"
                    y2="43.3311"
                    stroke="black"
                  ></line>
                </svg>
              </div>
            </div>
            <div class="flex flex-col h-full lg:w-fit px-2 rounded-lg ">
              <p class="h-1/2 flex items-center text-white text-base lg:text-lg">
                Sin maquillaje: necesitas ver tu tono de piel real y tus
                destellos naturales.
              </p>
              <p class="h-1/2 flex items-center text-base lg:text-lg">
                El maquillaje pude alterar tu tono de piel y destellos
                naturales.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-b from-[#894773] from-50% to-[#FAF8F0] to-50% rounded lg:rounded-tl-full lg:rounded-bl-full lg:rounded-br-lg lg:roudned-tr-lg flex w-fit h-[250px] lg:h-24 items-center lg:items-stretch shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
            <div class="p-2 rounded-full bg-[#894773] shadow-[2px_2px_4px_rgb(0,0,0,0.40)]">
              <div class="p-4 rounded-full bg-[#FAF8F0] w-fit">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="24.5"
                    fill="#FAF8F0"
                    stroke="black"
                  ></circle>
                  <circle
                    cx="24.5"
                    cy="24.5"
                    r="17"
                    fill="#FAF8F0"
                    stroke="black"
                  ></circle>
                  <mask id="path-3-inside-1_371_327" fill="white">
                    <path d="M50 48C50 49.1046 49.1046 50 48 50H2C0.895431 50 0 49.1046 0 48V42H15V43C15 44.1046 15.8954 45 17 45H32C33.1046 45 34 44.1046 34 43V42H50V48Z"></path>
                  </mask>
                  <path
                    d="M50 48C50 49.1046 49.1046 50 48 50H2C0.895431 50 0 49.1046 0 48V42H15V43C15 44.1046 15.8954 45 17 45H32C33.1046 45 34 44.1046 34 43V42H50V48Z"
                    fill="#FAF8F0"
                  ></path>
                  <path
                    d="M2 50L2 51H2V50ZM0 42V41H-1V42H0ZM15 42H16V41H15V42ZM15 43H14H15ZM17 45V46V45ZM32 45V46V45ZM34 42V41H33V42H34ZM50 42H51V41H50V42ZM50 48H49C49 48.5523 48.5523 49 48 49V50V51C49.6569 51 51 49.6569 51 48H50ZM48 50V49H2V50V51H48V50ZM2 50L2 49C1.44772 49 1 48.5523 1 48H0H-1C-1 49.6569 0.343147 51 2 51L2 50ZM0 48H1V42H0H-1V48H0ZM0 42V43H15V42V41H0V42ZM15 42H14V43H15H16V42H15ZM15 43H14C14 44.6569 15.3431 46 17 46V45V44C16.4477 44 16 43.5523 16 43H15ZM17 45V46H32V45V44H17V45ZM32 45V46C33.6569 46 35 44.6569 35 43H34H33C33 43.5523 32.5523 44 32 44V45ZM34 43H35V42H34H33V43H34ZM34 42V43H50V42V41H34V42ZM50 42H49V48H50H51V42H50Z"
                    fill="black"
                    mask="url(#path-3-inside-1_371_327)"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="flex flex-col h-full lg:w-fit  px-2 rounded-lg">
              <p class="h-1/2 flex items-center text-white text-base lg:text-lg">
                Espejo a la mano: Tendrás que observar detalles de tu iris y
                venas.
              </p>
              <p class="h-1/2 flex items-center text-base lg:text-lg">
                Un reflejo claro te ayudará a distinguir los patrones de tu iris
                y los reflejos sutiles de tu piel.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col lg:items-end justify- gap-2">
          <p className="text-center">
            Tiempo estimado: "Solo te tomará 2 minutos".
          </p>
          <button
            onClick={onStart}
            className="border-2 border-black py-2 px-2 rounded-lg font-bold text-lg hover:bg-[#FAF8F0]/50 hover:-translate-y-2 transition-all delay-150"
          >
            Comienza a explorar tu colorimetria hoy!
          </button>
        </div>
      </div>
    </section>
  );
}

const messages = [
  "Iniciando escáner de color...",
  "Calibrando matices de piel...",
  "Preparando paletas estacionales...",
  "Casi listo...",
];
function Loader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen  bg-[#FAF8F0] z-50 fixed top-0 left-0">
      <div className="loader"></div>

      <p className="mt-8 font-julius tracking-[0.2em] text-gray-500 uppercase text-xs animate-bounce">
        {messages[index]}
      </p>
    </div>
  );
}

export default function PageLoader() {
  const [step, setStep] = useState("home");
  const handleStart = () => {
    document.body.style.overflow = "hidden";
    setStep("loading");
    setTimeout(() => {
      document.body.style.overflow = "auto";
      window.location.href = "/test";
      setStep("test");
    }, 3500);
  };

  return (
    <div className="-mx-4" id="test">
      {step === "home" && <TestHome onStart={handleStart} />}
      {step === "loading" && <Loader />}
    </div>
  );
}
