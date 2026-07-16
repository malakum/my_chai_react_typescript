//import  {Chai}   from "./types.ts";
import { ChaiCard} from "./ChaiCard.tsx";


type ChaiType = {
  id: number;
  name: string;
  price: number;
};

const chai: ChaiType[] = [
  { id: 1, name: "Masala", price: 25 },
  { id: 2, name: "Ginger", price: 50 },
  { id: 3, name: "Lemon", price: 40 },
];

export function ChaiList() {
  return (
    <div>
      {chai.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>£{item.price}</p>
        </div>
      ))}
    </div>
  );
}