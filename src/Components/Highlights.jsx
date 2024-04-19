import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', {opacity: 1, y: 0 })
        gsap.to('.link', {opacity: 1, y: 0, duration: 1, stagger: 0.25})
    },[])


  return (
    <div>
        <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full items-end justify-between md:flex'>
                    <h1 id='title' className='section-heading'>Get the highlights.</h1>

                    <div className='flex flex-wrap items-end gap-5'>
                       <a href='https://www.apple.com/iphone-15-pro/'><p className='link'>Go to Official Website.
                        <img src={rightImg} alt="watch" className='ml-2' />
                        </p></a>
                        <a href="https://www.apple.com/apple-events/">
                        <p className='link'>Watch the event
                        <img src={rightImg} alt="right" className='ml-2' />
                        </p>
                        </a>
                    </div>
                </div>

                <VideoCarousel />
            </div>

        </section>
    </div>
  )
}

export default Highlights