import React, { useState } from "react";
const PORT = 3000;

export default function Test() {
  const [images, setImages] = useState([]);

  // funcion para buscar
  async function handleSearch(text) {
    try {
      if (!text) return; //No buscar si el input esta vacio
      const response = await fetch("http://localhost:3000/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const result = await response.json();
      console.log("Datos recibidos:", response);
      if (result.success) {
        setImages(result.data);
        // setImages(result.response);
        console.log(result.response);
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }
  }

  return (
    <div className="h-screen">
      <input
        type="text"
        placeholder="Buscar imagenes..."
        onKeyDown={(e) => e.key === "Enter" && handleSearch(e.target.value)}
      />
      <div id={images.id}>
        <img src={images.src} alt={images.alt} />
        <p>{images.photographer_name}</p>
      </div>
      {/* {images.map((img) => (
        <div key={img.id} className="border border-black h-1/2">
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: "800px", borderRadius: "16px" }}
          />
          <p>{img.photograoher_name}</p>
        </div>
      ))} */}
    </div>
  );
}

// // funcion para obtener los datos
// async function searchImages(query) {
//   try {
//     // enviar las busqueda
//     const response = await fetch(`/api/search?=${query}`);

//     // verificacion si la respuest es coreacta
//     if (!response.ok) {
//       throw new Error("Error en la solicitud");
//     }

//     // obtener los datos en JSON
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function showResult(query) {
//   const data = await searchImages(query);

//   console.log(data.busqueda);
//   console.log(data.resultados);

//   data.resultados.forEach((image) => {
//     console.log(image.id);
//     console.log(image.image);
//     console.log(image.autor);
//     console.log(image.perfil_link);
//     console.log(image.link_original);
//     // console.log(image.id)
//   });
// }
