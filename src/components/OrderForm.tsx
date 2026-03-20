import { useState } from "react"

interface OrderFormProps {
        onSubmit(order:{name : string ; cups: number} ) :void
}

export function OrderForm ({onSubmit}: OrderFormProps) {
     const [name, setName] = useState<string>("Masala");
     const [cups, setCups] = useState<number>(1); 

     function handleSubmit (e: React.ChangeEvent<HTMLFormElement>) {
               e.preventDefault();
               onSubmit( { name , cups });
               }

        return (
               <section>
             <h2> {name} </h2>
              <div> {cups} </div>
              
           </section>
        // <form onSubmit={handleSubmit}>
        //       <label> ChaiName </label>
        //        <input 
        //         value ={name}
        //         onChange= {(e: React.ChangeEvent<HTMLInputElement>
        //         setName(e.target.value)}     />       
                
        //         <label> Cups </label>
        //        <input 
        //          type = "number"
        //         value ={cups}
        //         onChange= {(e: React.ChangeEvent<HTMLInputElement>
        //         setCups(Number(e.target.value)|| 0)}                
        //         />
        //        <button type = "submit"> Place Order </button>
        //      <div> OrderForm </div> </form>
            
            )
          
       }
