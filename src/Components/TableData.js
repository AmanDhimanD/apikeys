import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

/* function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]; */

/* "id": "btc-bitcoin",
        "symbol": "BTC",
        "name": "Bitcoin",
        "image": "https://static.coinpaper.io/images/coins/btc-bitcoin_small.png",
        "price": 8348.43002905,
        "rank": 1,
        "marketcap": 150175942288,
        "price_24h_percentage_change": 0,
        "price_7d_percentage_change": 3.07,
        "ticker_price_24h": [ */

function createData(
  
  id,
  symbol,
  name,
  image,
  price,
  rank,
  marketcap,
  price_24h_percentage_change,
  price_7d_percentage_change
) {
  return {
    id,
    symbol,
    name,
    image,
    price,
    rank,
    marketcap,
    price_24h_percentage_change,
    price_7d_percentage_change,
  };
}

// Raw data 
const rows = [
  createData(
    "btc-bitcoin",
    "BTC",
    "Bitcoin",
    "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    8348.43,
    1,
    150175942288,
    0,
    3.07
  ),
  createData(
    "BTC/USDT",
    "Binance",
    "Binance",
    "https://images.unsplash.com/photo-1624438253998-7bb8eca8a3f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    8355.19,
    2,
    1.7,
    199252313.64
  ),
  createData(
    "coinbase-pro",
    "Coinbase Pro",
    "Coinbase Pro",
    "https://images.unsplash.com/photo-1625726123977-d4ce5ddd816a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "NAN",
    51,
    0.35,
    23,
    12
  ),
];

export default function DenseTable() {
  return (
    <div style={{ width: "100%" }}>
      <TableContainer component={Paper} style={{ width: 1500, margin: "auto" }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              
              <TableCell>ID</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Rank</TableCell>
              <TableCell align="right">Market Cap</TableCell>
              <TableCell align="right">Price Diffrence of 24H in %</TableCell>
              <TableCell align="right">Price Diffrence of 7days in %</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.symbol}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  <img src={row.image} style={ {height:"50px"}} />
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.rank}</TableCell>
                <TableCell align="right">{row.marketcap}</TableCell>
                <TableCell align="right">
                  {row.price_24h_percentage_change}%
                </TableCell>
                <TableCell align="right">
                  {row.price_7d_percentage_change}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
