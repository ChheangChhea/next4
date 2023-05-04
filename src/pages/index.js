/* eslint-disable react/jsx-key */

import CardComponent from '@/componente/CartComponent'
import NavbarComponent from '@/componente/NavbarComponent'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Card, Navbar } from 'react-bootstrap'
// import movies from './movie'
import { API_KEY } from '@/lib'


export default function Home({movies}) {
  const data = movies ?.results || [];
  console.log(movies.results)
  
  return (
    <>
   <NavbarComponent/>
   <div className='container'>
    <h1>Home</h1>
  
    <div className='d-flex justify-content-evenly flex-wrap'>
    {data.length > 0 && 
       data.map((movie)=><CardComponent key =
        {movie.id} imgePath={movie.backdrop_path}
        title = {movie.title}
        description={movie.overview}
        id = {movie.id}
        />)}
    </div>
    </div>
    </>
  )
}
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  // const res = await fetch(${BASE_URL}movie/${id}/videos?api_key=${API_KEY})
 const res = await fetch(url)
 if(!res){
  console.log("Error");
 }
 const movies = await res.json();
if(!movies){
  console.log("Error")
  return {
    props : {
      movies: [],
    }
  }
}
  return{
    props : {
    movies,
  }
}
}
