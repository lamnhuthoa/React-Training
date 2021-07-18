import React from 'react'

export default function CardProduct(props) {
    let {product} = props

    return (
        <div className="card">
            <img src={product.img} alt="..."/>
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
            </div>
        </div>
    )
}
