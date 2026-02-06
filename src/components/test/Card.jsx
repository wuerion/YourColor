import React from 'react'
export default function Card({title, name, id, circle1, circle2, circle3, image, contCircle, onNext, children}) {
  const images = {
      muyClara: {
        component: '/tonoDePiel/muyClara.webp',
        alt: 'Mujer con piel muy clara',
      },
      clara: {
        component: '/tonoDePiel/clara.webp',
        alt: 'Mujer con piel clara',
      },
      media: {
        component: '/tonoDePiel/media.webp',
        alt: 'Mujer con piel media/morena',
      },
      oscura: {
        component: '/tonoDePiel/oscura.webp',
        alt: 'Mujer con piel oscura',
      },
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p className='text-lg lg:text-xl'>{title}</p>
        <label title={title} className='overflow-hidden rounded-lg group relative hover:cursor-pointer w-full h-full '>
          <input type="radio" name={name} id={id} value={title} onClick={() => onNext(id)} className='hidden'/>
          {children}
          <div className={`flex gap-4 justify-center items-center w-full h-full ${contCircle} group-hover:scale-105`}>
            <div className={`${circle1} w-28 h-28 lg:w-36 lg:h-36 rounded-full shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}></div>
            <div className={`${circle2} w-28 h-28 lg:w-36 lg:h-36 rounded-full shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}></div>
            <div className={`${circle3} w-28 h-28 lg:w-36 lg:h-36 rounded-full shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)]`}></div>
          </div>
          <div className={`shadow-[inset_0_0_24px_8px_rgba(0,0,0,40%)] min-w-[100px] min-h-[200px] w-full h-full`}>
          <img src={images[id].component} alt={images[id].alt} className={`absolute -z-10 w-full h-full transition-all delay-75 group-hover:scale-105 ${image}`}/>
          </div>
        </label>
    </div>
  )
}
