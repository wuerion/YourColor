import React from 'react'
import HeaderDesc from './HeaderDesc'

function Complement({state, nearest, hsl, colores}) {
  return (
    <div>
    <HeaderDesc nameHead={'complementColor'}/>
    <div className="bg-white rounded-2xl border shadow-md p-4 gap-4 flex flex-col items-center h-max">
      {state.filter(x => x.cat === 'primario' || x.cat === 'secundario').map( (it, i) => {
        const partner = {
          backgroundColor: hsl(nearest(colores, it.h + 180, [it.color]))
        }
        return(
          <div className='flex items-center gap-4 ' key={i}>
            <div className='w-10 h-10 rounded-full' style={{backgroundColor: hsl(it.color)}}></div>
            <span className='text-[#5a544c]'>↔</span>
            <div className='w-10 h-10 rounded-full' style={partner} ></div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Complement