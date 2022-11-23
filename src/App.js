import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// function Coin() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);
//   const [coins, setCoins] = useState([]);
//   const [val, setVal] = useState(0);
//   const valChange = (e) => {
//     console.log("changed", e.target.value);
//     setVal(e.target.value);
//   };
//   const calc = (e) => {
//     if (val === 0) {
//       console.log("plz select");
//     } else {
//       console.log(usd / val);
//     }
//   };
//   const [usd, setUsd] = useState(0);
//   const usdInput = (e) => {
//     setUsd(e.target.value);
//   };
//   return (
//     <div>
//       <h1>The Coins! ({coins.length})</h1>
//       {loading ? <strong>Loading....</strong> : null}
//       <select onChange={valChange}>
//         <option value={0}>(Select)</option>
//         {coins.map((item) => (
//           <option
//             key={item.id}
//             value={item.quotes.USD.price}
//             data={item.symbol}
//           >
//             {item.name} ({item.symbol}) : {item.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//       <input onChange={usdInput} placeholder="USD"></input>
//       <button onClick={calc}>Calc</button>
//     </div>
//   );
// }

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
