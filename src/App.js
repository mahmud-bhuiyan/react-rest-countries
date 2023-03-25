// import logo from "./logo.svg";
import "./App.css";
import Countries from "./Components_2/Countries/Countries";
// import { useEffect, useState } from "react";

// import Countries from "./components/Countries/Countries";
// import Person from "./components/Person/Person";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      {/* --------------2--------------- */}
      {/* <Header></Header>
      <Countries></Countries>
      <Person></Person> */}
      {/* --------------1--------------- */}
      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting every country in the world</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   return (
//     <div className="country">
//       <h2>{props.name}</h2>
//       <h2>Population: {props.population}</h2>
//     </div>
//   );
// }

export default App;
