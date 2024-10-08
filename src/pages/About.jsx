import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quae sunt vitae deserunt molestiae eos perspiciatis numquam similique minus ut delectus quis quia amet dolorem quaerat, animi culpa commodi aut totam. Rem, alias impedit!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quibusdam vitae nobis minus ipsam dolore impedit hic odit nihil. Assumenda rerum in praesentium, laudantium molestiae itaque accusantium beatae quae, perspiciatis adipisci quibusdam modi velit?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae expedita minus excepturi consequuntur rem, delectus corrupti possimus? At quia natus voluptate, autem eos porro?</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHHOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quae temporibus harum eos officia id? Amet unde dignissimos distinctio tempora?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quod iusto possimus aut ipsam praesentium, natus repellat magnam facilis, optio accusamus minima recusandae provident labore dicta ea culpa eos nulla!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste a quo, dolorem est cumque perspiciatis rem quia ducimus praesentium ad nostrum, expedita odio.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default About
