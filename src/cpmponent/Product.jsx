import React from 'react'
import {useParams} from 'react-router-dom';

const Product = () => {
    const param = useParams()
    return (
        <div>
            <h1>product#{param.id}</h1>
        </div>
    )
}

export default Product
