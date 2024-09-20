import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const BannerHome = () => {
    const bannerData = useSelector(state => state.movie.bannerData)
    const imageURL = useSelector(state => state.movie.imageURL)
    const [currentImage, setCurrentImage] = useState(0)
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(currentImage + 1)
        }
        else {
            setCurrentImage(0)
        }
    }

    const handlePrev = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        }
    }

    useEffect(() => {
        const slider_time = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext()
            }
            else {
                setCurrentImage(0)
            }
        }, 5000);

        return () => clearInterval(slider_time);
    })

    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {bannerData.map((data, index) => {
                    return (
                        <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all duration-200' style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            <div className='w-full h-full'>
                                <img src={imageURL + data.backdrop_path} alt="" className='h-full w-full object-cover' />
                            </div>

                            <div className='absolute top-0 h-full w-full hidden items-center justify-between px-4 group-hover:lg:flex'>
                                <button onClick={handlePrev} className='bg-white p-1 rounded-full text-2xl z-10 text-black'><FaAngleLeft /></button>
                                <button onClick={handleNext} className='bg-white p-1 rounded-full text-2xl z-10 text-black'><FaAngleRight /></button>
                            </div>

                            <div className='w-full h-full absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent'>
                            </div>

                            <div className='container mx-auto'>
                                <div className='absolute bottom-0 max-w-md px-4'>
                                    <h2 className='font-bold text-3xl lg:text-4xl drop-shadow-2xl text-white'>{data.title || data.name}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                    <div className='flex items-center gap-4'>
                                        <p>Rating: {Number(data.vote_average).toFixed(1)}</p>
                                        <span>|</span>
                                        <p>View : {Number(data.popularity).toFixed(0)}</p>
                                    </div>
                                    <button onClick={()=>{navigate(`/${data?.media_type}/${data?.id}`)}} className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>Play Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BannerHome
