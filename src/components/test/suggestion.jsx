import React from 'react'

function suggestion() {
  return (
    <div className='relative w-1/2 flex justify-end'>
      <div className='group flex justify-end '>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_687_321)">
        <rect width="20" height="20" rx="10" fill=""/>
        <path d="M9.99935 13.3337V10.0003M9.99935 6.66699H10.0077M18.3327 10.0003C18.3327 14.6027 14.6017 18.3337 9.99935 18.3337C5.39698 18.3337 1.66602 14.6027 1.66602 10.0003C1.66602 5.39795 5.39698 1.66699 9.99935 1.66699C14.6017 1.66699 18.3327 5.39795 18.3327 10.0003Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_687_321">
        <rect width="20" height="20" rx="10" fill="white"/>
        </clipPath>
        </defs>
      </svg>

      <div className='rounded-xl bg-[#FAF8F0] p-2 w-[300px] gap-2 md:p-4 sm:gap-4 md:w-[500px] shadow-xl hidden flex-col absolute top-8 group-hover:flex '>
        <p>Esta seleccion de colores es la ideal para tu temporada. Sin enmargo, recuerda que esta es solo una recomendacion, no una regla estricta.</p>
        <p>Si bien sugerimos el uso de esta paleta para realzar su belleza, sientase en completa libertad de sustituirlos por otros colores con los que se sienta mas identificado/a y comodo/a</p>
        <p>El onjetivo de este test es inpirate, no limitarte. Te invitamos a adaptar, mezclar y eligir los colores que mejor resuenen con tu vision creativa y te hagan sentir seguro/a al crear</p>
        <p className='text-center text-lg'>Tu estilo, tu eleccion!</p>
      </div>
      </div>

    </div>
  )
}

export default suggestion