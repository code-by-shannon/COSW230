import { useState } from 'react'

export default function products(){
    const [products, setProducts] = useState([])

    fetch('/products.json')
    .then(response => response.json())
    .then(data => setProducts(data.products));

    const myProducts = 
    products.map((product) => {
    return (
    <>
        <p>{product.name}</p>
        <p>{product.description}</p>
    </>
    )
    })
    
    return(
        <>
            { myProducts }
        </>
    )
}