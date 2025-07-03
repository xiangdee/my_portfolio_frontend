import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactMe() {
  return (
    <section className='p-10' id='contact'>
       <div>
            <h1 className='font-bold text-2xl'>Contact Me</h1>
          </div>
          <div className=' w-36'>
            <div className='spin-container-dark my-5 '>

            </div>
          </div>

          <div className='md:flex md:flex-row md:col-span-2 md:justify-between'>
                <div>
                    <div>
                        <h3 className='text-2xl'>Contact Information</h3>
                        <p>
                            Here you hvae more information on how to reach me
                        </p>
                    </div>

                    <div className='mt-5'>
                        <div className='contactContainer'>
                            <div className='iconContainer'>
                                    <FontAwesomeIcon icon={faPhone} size='lg' color='white'/>
                            </div>
                            <div>
                                <h6 className='text-lg md:text-xl'>Contact on phone</h6>
                                <p>+2349031290387</p>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className='contactContainer mt-5'>
                            <div className=' w-1/4'>
                            <div className='iconContainer'>
                                    <FontAwesomeIcon icon={faEnvelope} size='lg' color='white'/>
                            </div>
                            </div>
                            <div className=' w-3/4'>
                                <h6 className='text-lg md:text-xl'>Contact on Email</h6>
                                <p className='flex flex-wrap'>emmanuelfrancismicah@gmail.com</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>

                        <div className='contactContainer mt-5'>
                            <div className='iconContainer'>
                                    <FontAwesomeIcon icon={faLocation} size='sm' color='white'/>
                            </div>
                            <div>
                                <h6 className='text-lg md:text-xl'>My location</h6>
                                <p>Nigeria</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    {/* <h3>Contact Information</h3> */}
                </div>
          </div>
    </section>
  )
}