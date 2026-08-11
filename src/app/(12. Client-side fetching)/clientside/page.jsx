"use client";
import { useEffect, useState } from "react";

const Contact = () => {
  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      console.log("Product", product);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center mt-8">Contact</h1>
      <ul>
        {product.map((item) => (
          <li className="p-2 border border-gray-700 rounded mb-2" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
