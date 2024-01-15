"use client"
import { useEffect } from "react";

export default function ContactUs() {
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('https://fakestoreapi.com/products');
              const result = await response.json();
              console.log(result);
            } catch (error) {
              console.error('Error 1 fetching data:', error);
            }
        };
      
        fetchData();

        // const fetchData = async () => {
        //     try {
        //       const response = await fetch('https://fakestoreapi.com/productsw/71', {
        //         method: 'PUT',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ 
        //             title: 'test product 3',
        //             price: '13.5',
        //             description: 'lorem ipsum set',
        //             image: 'https://i.pravatar.cc',
        //             category: 'electronic'
        //         }),
        //       });
      
        //       if (!response.ok) {
        //         throw new Error('Failed to update data');
        //       }
      
        //       const result = await response.json();
        //       console.log(result, 'result');
        //     } catch (error) {
        //       console.log('Error updating data: 3', error);
        //       console.log(error.message , 'Failed to update data 1');
        //     }
        //   };
      
        //   fetchData();
      }, []);
  return (
    <main>
      
    </main>
  )
}