import React, { use, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Image } from 'react-bootstrap';
export default function product() {
    const[data,setData] = useState([]);
    const [data1,setData1] =useState("");
    const [filterData,setFilterData] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(a=>
        {
            setData(a);
            setFilterData(a);
        });
    },[]);

    const search = (e)=>{
        return e.filter((data2)=>data2.title.toLowerCase().includes(data1.toLowerCase()));
    }
    const columns =[
        {
            name: 'ID',
            selector:row =>row.id,
        },
        {
            name: 'Name',
            selector: row =>row.title,
        },
        {
            name: 'Price',
            selector: row =>row.price,
        },
        {
            name: 'Category',
            selector: row =>row.category,
        },
        {
            name: 'Image',
            selector: row => <img src={row.image} width="50" height="50" thumbnail />,
        
        },

    ];
    return (
    <div className='container h-50'>
      <DataTable
            columns={columns}
            data={search(data)}
            fixedHeader
            pagination
		    dense
            highlightOnHover
            subHeader
            subHeaderComponent={
                <form class="d-flex float-end" role="search" >
                    <input class="form-control me-2 float-end" type='text' onChange={(e)=>setData1(e.target.value)} ></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            }
        />
    </div>
  )
}
