import { RenderGuitarSpecs } from "./ProductsPage";
import { GetProducts } from '../productsApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export function Details() {
    const [guitars, setGuitars] = useState([]);
    const params = useParams();
    const id = Number(params.id);
    const targetGuitar = guitars.find(gtr => gtr.id === id );
    console.log(targetGuitar);

    useEffect( () => {
        async function loadGuitars() {
            const gear = await GetProducts();
            setGuitars(gear);
        }

        loadGuitars();


        

    }, [])

    console.log(guitars);
   

    return(
        <>
            <h1>Details Page</h1>  
        <div className = 'details-card'>
            
            <h2 className ='h2_details'>{targetGuitar?.title}</h2>
            <img className = 'photo' src={targetGuitar?.image} />
            <p className='p_details'>${targetGuitar?.price}</p>
            <p className='p_details'>{targetGuitar?.description}</p>
            <p className='p_details'>Overall User Rating: {targetGuitar?.rating.rate}</p>
            <p className='p_details'>Number Of Ratings: {targetGuitar?.rating.count}</p>
        </div>
        </>
        

    )
}

