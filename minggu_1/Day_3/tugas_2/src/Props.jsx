import React from "react";

function ProductCard(props) {
    return (
        <div style = {{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{props.productName}</h3>
           <p>Harga: Rp {props.price}</p>
            <p>Stok: {props.stock}</p>
            <p style={{ color: props.isAvailable ? "green" : "red" }}>
            {props.isAvailable ? "tersedia" : "habis"}
            </p>

            <button disabled={!props.isAvailable}>Beli</button>
        </div>
    )
}

export default ProductCard;