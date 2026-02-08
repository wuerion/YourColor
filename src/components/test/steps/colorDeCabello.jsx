import React from 'react'
import Card from '../Card'

function colorDeCabello({onNext}) {
  return (
    <section className='h-dvh flex flex-col justify-around items-center'>
          <h2 className='text-lg font-bold lg:text-2xl'>¿Cual es tu color de cabello?</h2>
    <div className='grid grid-cols-2 lg:grid-cols-6 justify-around h-1/2 gap-4 w-full'>
        <Card title={'Negro'} name={'colorDeCabello'} id={'negro'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
        <Card title={'Castaño Oscuro'} name={'colorDeCabello'} id={'castañoOscuro'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
        <Card title={'Castaño Claro / Medio'} name={'colorDeCabello'} id={'castañoClaro'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
        <Card title={'Rubio'} name={'colorDeCabello'} id={'rubio'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
        <Card title={'Pelirojo'} name={'colorDeCabello'} id={'pelirojo'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
        <Card title={'Gris / Blanco'} name={'colorDeCabello'} id={'grisOBlanco'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
    </div>
    </section>
  )
}

export default colorDeCabello