import { randomTen, randomTen2 } from "./services/promise-me";

export default function App() {
  
  console.log(randomTen())
  console.log(randomTen2())
  return <h1>Hello World</h1>

  ;
}
