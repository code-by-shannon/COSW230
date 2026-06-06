import React from 'react';
import { GetProducts } from '../productsApi';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';


export function RenderGuitarSpecs(){
    const [guitars, setGuitars] = useState([]);
   
    useEffect( () => {
        async function loadGuitars() {
            const gear = await GetProducts();
            setGuitars(gear);
        }

        loadGuitars();
    }, [])


    return (
        <>
          <h1>Welcome to our Products Page</h1>
      
          <div className='products-grid'>
          {guitars.map((gtr) => {
            return (
               <Link key={gtr.id} to={`/details/${gtr.id}`}>
                    <div className = 'guitar_div'>
                        <img className='photo' src={gtr.image} />
                        <p className = 'guitar_fig'>{gtr.title}</p>
                    </div>
                </Link> 

            );
          })}

            
          </div>

        </>
      );
}

