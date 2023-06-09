import React, { useState, useEffect } from 'react'
import ImageData from '../data'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Home() {
  const [navlogin, setNavLogin] = useState(false)

  const userInfo = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log(navlogin, userInfo)
    if (navlogin) {
      navigate('/login?redirect=shipping')
    } else if (!navlogin & userInfo) {
      navigate('/shipping')
    }
  }, [navlogin])

  const purchaseHandler = (img) => {
    console.log(img)
    localStorage.setItem('image', JSON.stringify(img))
    if (!userInfo) {
      setNavLogin((prevState) => !prevState)
    }
  }

  return (
    <>
      <section className='bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
        <div className='container mx-auto'>
          <div className='mx-4 flex flex-wrap'>
            {ImageData.map((img) => (
              <div key={img.id} className='w-full px-4 md:w-1/2 xl:w-1/3'>
                <div className='mb-10 overflow-hidden rounded-lg bg-white'>
                  <img src={img.image} alt='image' className='w-full' />
                  <div className='p-8 text-center sm:p-9 md:p-7 xl:p-9'>
                    <h3>
                      <Link className='text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]'>
                        {img.model}
                      </Link>
                    </h3>
                    <p className='text-body-color mb-7 text-base leading-relaxed'>
                      {img.price}
                    </p>
                    <Link
                      onClick={() => purchaseHandler(img)}
                      className='text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white'
                    >
                      purchase
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
