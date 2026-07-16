//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx'
import { Counter } from './components/Counter.tsx'
import { OrderForm } from './components/OrderForm.tsx'
import { Card } from './components/Card.tsx'
import { ChaiList } from './components/ChaiList.tsx'
//import type{Chai} from '../types.ts'

function App() {
 // const [count, setCount] = useState(0)
 const menu = [ 
     {id :1 , name : "Masala", price :25},
     {id :2 , name :" Ginger" , price :50},
     {id :3 , name : "Lemon" , price :50},
     ];


  return (
    <>
      <div>
            <h1> Vite + React </h1>
             <ChaiCard name = "HeadPhone" price = {5000}
              />
             <ChaiCard name = "Iphone" price = {20000} />
          </div>
           <div>
          <Counter/>
          </div>
           <div>
             <ChaiList />
           </div>
          <div>
             <OrderForm 
              onSubmit ={(order) =>{
                console.log("Placed", order.name , order.cups);
                  }}
                />
          </div>
          <div> 
           <Card title = "Chai aur Typescript"
                 footer = "page1" />
            </div>
      
    </>
  )
}

export default App
