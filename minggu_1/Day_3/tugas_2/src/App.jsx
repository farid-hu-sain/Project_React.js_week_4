import React from "react";
import ProductCard from "./Props";

function App() {
    return (
      <div>
          <ProductCard
            productName="Kulkas"
            price={5000000}
            stock={10}
            isAvailable={true}
          />

          <ProductCard
            productName="Laptop"
            Price={10}
            Stock={0}
            isAvailable={false}
          />
      </div>
    )
}

export default App
