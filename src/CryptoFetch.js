import React from "react";
import CryptoData from "./CryptoData.json";

const CryptoFetch = () => {
  const DisplayData = CryptoData.map((dataOfAPI) => {
    return (
      <tr>
        <td>{dataOfAPI.id}</td>
        <td>{dataOfAPI.symbol}</td>
        <td>{dataOfAPI.name}</td>
        <td>{dataOfAPI.price.toFixed(2)}</td> {/* Round of function */}
        <td>{dataOfAPI.rank}</td>
        <td>{dataOfAPI.marketcap}</td>
        <td>{dataOfAPI.price_7d_percentage_change}</td>
      </tr>
    );
  });
  return (
    <>
      <div className="container mt-10">
        <table class="table table table-borderless">
          <thead>
            <tr>
              <th>ID</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Price</th>
              <th>Rank</th>
              <th>Market Cap</th>
              <th>Price of 7 days % Changes</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>
      </div>
    </>
  );
};

export default CryptoFetch;
