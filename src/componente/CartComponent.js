import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IMAGE_BASE_URL } from '@/lib'; 
import { useRouter } from 'next/router'; 

export default function CardComponent({title,description,imgePath,id}) {
  const router =useRouter();

  const handlerClick = ()=>{
    router.push({
      pathname:`/movie/${id}`,
      query:{
        imgePath:imgePath,
        title:title,
        description:description
      }
    });
  
}

console.log(description)
  return (
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src={
        imgePath 
        ? IMAGE_BASE_URL+ imgePath 
        : "https://th.bing.com/th/id/OIP.F00dCf4bXxX0J-qEEf4qIQHaD6?w=319&h=180&c=7&r=0&o=5&pid=1.7"} />
      <Card.Body>
        <Card.Title>{title ? title :"UnKnow"}</Card.Title>
        <Card.Text> {description ? description :"Unknow"} </Card.Text>
        <Button onClick={handlerClick} variant="primary">View details</Button>
      </Card.Body>
    </Card>
     
    </div>
  )
}
