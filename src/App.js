import "./App.css";
import Background from "./Components/Background";
//import DataFetch from './DataFetch';
//import CryptoFetch from "./CryptoFetch";
import Navbar from "./Components/Navbar";
import TableData from "./Components/TableData";

function App() {
  return (
    <>
      {/* <DataFetch/> */}
      {/* <CryptoFetch /> */}
      <Navbar />
      {/* TableData is inside the Backgrund Tag */}
      {/*  <Background /> */}
      <br />
      <br />
      <br />

      <TableData />
    </>
  );
}

export default App;
