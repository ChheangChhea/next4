/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'
import { BASE_URL,API_KEY,IMAGE_BASE_URL} from '@/lib';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function movie() {
    const router= useRouter();
    
    const [id,setId]=useState(router.query.id)
    const [movie,setMovie]=useState({ });
    const [loading ,setLoading]=useState(false)
    const[key,setKey] = useState(" ")
    useEffect(()=>{
        setLoading(true)
        fetch(`${BASE_URL}movie/${router.query.id}/videos?api_key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
          
      setMovie(data)
      
      setKey(data.results[0].key)
      setLoading(false);
    }).catch(err=>{
        console.log(err);
        setLoading(false);
    })
    if(loading){
        return  
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  
    console.log(key)
  return (
    <div> 
        <Card style={{ width:'800px'}}>
      <Card.Img variant="top" 
      src = { router.query.imgePath ? 
        IMAGE_BASE_URL +router.query.imgePath 
        : "https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?w=319&h=180&c=7&r=0&o=5&pid=1.7"
    } />
      <Card.Body>
        <Card.Title>{router.query.title ? router.query.title:"Unknow"}</Card.Title>
        <Card.Text> {router.query.description ? router.query.description: "No description"}</Card.Text>
        
      </Card.Body>
    </Card>
    <Button type="button"
              className="btn btn-primary float-right mt-4 mb-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" variant='dark'>Watch Trailer</Button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog  modal-dialog-centered modal-xl ">
                <div class="modal-content">
 <iframe style={{height: 500}} src={ `https://www.youtube.com/embed/`+key} frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
    </div>
  )
}
