import React from 'react'
import Card from '../Card'

function TonoPiel({onNext}) {

  return (
    <section className='h-dvh flex flex-col justify-around items-center'>
      <h2 className='text-lg font-bold lg:text-2xl'>¿Cual es tu tono de piel?</h2>
<div className='grid grid-cols-2 lg:grid-cols-4 justify-around h-1/2 gap-4 w-full'>
    <Card title={'Muy Clara'} name={'tonoDePiel'} id={'muyClara'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
    <Card title={'Clara'} name={'tonoDePiel'} id={'clara'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
    <Card title={'Media'} name={'tonoDePiel'} id={'media'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
    <Card title={'Oscura'} name={'tonoDePiel'} id={'oscura'} circle1={'hidden'} circle2={'hidden'} circle3={'hidden'} contCircle={'hidden'} onNext={onNext}/>
</div>
    </section>
  )
}

export default TonoPiel