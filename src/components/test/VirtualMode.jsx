import React, { useEffect, useState } from "react";

function VirtualMode({ setIsVisibleVirtualMode, data, apiUrl }) {
  const [selecctColorLeft, setSelecctColorLeft] = useState("#faf8f0");
  const [selecctNameLeft, setSelecctNameLeft] = useState("Selecciona un color");
  const [selecctColorRight, setSelecctColorRight] = useState("#faf8f0");
  const [selecctNameRight, setSelecctNameRight] = useState(
    "Selecciona un color",
  );
  const [acualtSelecctColor, setActualSelecctColor] = useState('')
  const [processImage, setProcessImage] = useState(null)
  const [userImage, setUserImage] = useState(null)

  const [isLoad, setIsLoad] = useState(false)
  const VITE_API_URL = apiUrl

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
    setActualSelecctColor(hsl)
  };

  const handleClickRight = (e, hsl, name) => {
    setSelecctColorRight(hsl);
    setSelecctNameRight(name);
    setActualSelecctColor(hsl)
  };


  useEffect(() => {
    const removeBg = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/api/removebg/process`, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({imageBase64: userImage }),
        })
        const blob = await response.blob()
        
        if(!response.ok) {
          const errorText = await response.json()
          console.log('El servidor diece: ', JSON.stringify(errorText))
          return;
        }

          const url = URL.createObjectURL(blob)
          setProcessImage(url)
          setIsLoad(true)
        } catch (error) {
          console.error("Error al conectar con la API: ", error)
        } 
      }
      removeBg()
      return () => {
        if (processImage) URL.revomeObjectURL(processImage)
      }
    }, [userImage])
      


  return (
    <section className="relative z-50 h-dvh">
      <div class="absolute w-full h-full bg-[#FAF8F0] overflow-hidden flex items-center justify-center -z-10">
        <div class="flex w-full h-full items-center justify-center space-x-[-40px]">
          <div class="w-32 md:w-80 h-full transform bg-[#FAF8F0] -skew-x-[15deg] shadow-[20px_0_10px_rgba(0,0,0,0.5)] z-[41] relative"></div>
          <div class="w-32 md:w-80 h-full bg-[#E0719B] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-40 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#BC4F90] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-30 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#A35589] transform -skew-x-[15deg] shadow-[20px_0_40px_rgba(0,0,0,0.6)] z-20 relative"></div>

          <div class="w-32 md:w-80 h-full bg-[#F0A5BC] transform -skew-x-[15deg] z-10 relative"></div>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-1 px-2 lg:px-0 py-8 gap-8 bg-[#FAF8F0]/25 lg:bg-[#FAF8F0]/0 backdrop-blur-[1px]">
        <div className="w-full flwx justify-start p-4">
          <button onClick={() => setIsVisibleVirtualMode(false)} title="atras">
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
          POBADOR VIRTUAL
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">

          <div className="w-full lg:w-fit">
            <p className="text-center text-lg my-1">Precaucion</p>
            <div className="flex lg:grid lg:grid-cols-1 gap-1 w-full">
              {data.paletteCaution.map((index, key) => (
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
            <div className={`w-full h-full lg:max-h-[600px]  `}>
              {isLoad ? (
                <img 
                  src={processImage}
                  alt="user image" 
                  className={`w-full h-full object-cover ` } 
                  style={{backgroundColor:(acualtSelecctColor)}} 
                />
                ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 relative group hover:cursor-pointer" title="Subir foto">
                   <input type="file" placeholder=" " accept=".jpg, .jpeg, .png, .webp" className="w-full h-full absolute opacity-0 border border-black" onChange={ (e) => {
             const file = e.target.files[0]
             const reader = new FileReader()
             reader.readAsDataURL(file)
             reader.onload = (event) => {
               setUserImage(event.target.result)
             }
             console.log(userImage)
           }}/>
           <div className="flex flex-col items-center group-hover:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path className="fill-gray-500" d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z"/></svg>
                   <p className="text-gray-500 group-hover:text-green-500 text-center bg-inherit">Subir imagen o arrastra aqui<br/><span className="text-xs">(.jpg, .pgn, .webp .avif)</span></p>
           </div>
                   <div className="w-full h-full border-8 border-dashed group-hover:border-[#F0A5BC] group-hover:bg-[#F0A5BC]/20 hidden group-hover:flex flex-col gap-2 justify-center items-center absolute">
                   <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                   <path className="fill-[#F0A5BC]" d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                   </svg>
                   </div>
                 </div>
               )}
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
          
          <div className="w-full lg:w-fit">
            <div className="flex lg:grid lg:grid-cols-1 gap-1 w-full">
              {/* {data.palette.map((index, key) => ( */}
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

export default VirtualMode;
