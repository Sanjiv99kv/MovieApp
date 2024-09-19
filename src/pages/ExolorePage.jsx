import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card.jsx'

const ExolorePage = () => {
  const { explore } = useParams()
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState([])
  const [totalPageNo, setTotalPageNo] = useState(0)

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${explore}`, {
        params: {
          page: pageNo
        }
      })
      setData((prev) => {
        return [
          ...prev,
          ...response.data.results
        ]
      })
      setTotalPageNo(response.data.total_pages)
    } catch (error) {
      console.log(error);
    }
  }

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageNo((prev) => prev + 1);
    }
  }

  useEffect(() => {
    fetchData()
  }, [pageNo])

  useEffect(() => {
    setPageNo(1)
    setData([]);
    fetchData()
  }, [explore])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg font-semibold my-2 lg:text-xl'>Popular {explore} Shows</h3>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
          {data.map((exploreData, index) => {
            return (
              <Card data={exploreData} key={exploreData.id + "exploreSection"+index} media_type={explore} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExolorePage
