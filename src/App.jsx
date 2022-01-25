import { useEffect } from "react";
import { fetchArt, fetchArt2, fetchEmoji, fetchEmoji2, fetchGhibli, fetchGhibli2, fetchNeko, fetchNeko2, randomTen, randomTen2 } from "./services/promise-me";

export default function App() {
  useEffect(() => {
   randomTen2();
   randomTen2()

   fetchNeko()
   fetchNeko2()

   fetchEmoji()
   fetchEmoji2()

   fetchArt()
   fetchArt2()
  });

  return <h1>Hello World</h1>

}
