import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hook/useFetchDetails';

const VideoPlay = ({ data, setPlayVideo, media_type }) => {

    const {data: videoData} = useFetchDetails(`/${media_type}/${data?.id}/videos`)

    return (
        <section className='flex justify-center items-center fixed bg-neutral-700 top-0 right-0 left-0 bottom-0 z-40 bg-opacity-50'>
            <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
                <button onClick={() => { setPlayVideo(false) }} className='absolute -top-6 -right-1 text-3xl z-50 text-'>
                    <IoClose />
                </button>

                <iframe src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`} frameborder="0" className='h-full w-full'></iframe>
            </div>
        </section>
    )
}

export default VideoPlay
