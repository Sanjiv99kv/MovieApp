import React, { useEffect, useState } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import axios from 'axios'
import useFetch from '../hook/useFetch';

const Home = () => {
  const trendingData = useSelector(state => state.movie.bannerData);
  const {data:nowPlaying} = useFetch("/movie/now_playing");
  const {data:topRatedData} = useFetch("/movie/top_rated");
  const {data:popularTvShowData} = useFetch("/tv/popular");
  const {data:onTheAirShowData} = useFetch("/tv/on_the_air");
  

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingData} heading={"Trending Show"} trending={true}/>
      <HorizontalScrollCard data={nowPlaying} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Shows"} media_type={"tv"}/>
      <HorizontalScrollCard data={onTheAirShowData} heading={"On The Air"} media_type={"tv"}/>
    </div>
  )
}

export default Home
