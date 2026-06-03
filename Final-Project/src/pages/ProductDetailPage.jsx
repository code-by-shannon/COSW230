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
            <p>Details Page</p>  
            <h2>{targetGuitar?.title}</h2>
            <img className = 'photo' src={targetGuitar?.image} />
            <p>${targetGuitar?.price}</p>
            <p>{targetGuitar?.description}</p>
            <p>Overall User Rating: {targetGuitar?.rating.rate}</p>
            <p>Number Of Ratings: {targetGuitar?.rating.count}</p>
            
            
             
        </>

    )
}

