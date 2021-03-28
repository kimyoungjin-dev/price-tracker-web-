import { coinApi } from "api";
import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import styled from "styled-components";
import Form from "./Form";

const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const Title = styled.h1`
  color: white;
  font-size: 40px;
  text-align: center;
`;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");

  const getData = async () => {
    const data = await coinApi();
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(value.toLowerCase())
  );

  console.log(coins);

  return (
    <Container>
      <Title>Seach a Currentcy</Title>
      <Form value={value} setValue={setValue} />
      {filterCoins.map((v) => (
        <Coin
          key={v.id}
          name={v.name}
          symbol={v.symbol}
          image={v.image}
          marketcap={v.market_cap}
          price={v.current_price}
          priceChange={v.market_cap_change_24h}
          volume={v.total_volume}
        />
      ))}
    </Container>
  );
};

export default App;
