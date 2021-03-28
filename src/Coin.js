import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  border-bottom: 1px solid white;
  color: white;
  align-items: center;
  padding: 15px 0px;
  opacity: 0.8;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  margin-right: 10px;
`;

const Name = styled.div`
  width: 15%;
`;

const Symbol = styled.div`
  font-size: 20px;
  width: 100px;
  text-align: center;
`;

const Price = styled.div`
  width: 100px;
  text-align: center;
`;

const VolumeBox = styled.div`
  width: 15%;
`;

const Volume = styled.span``;

const RedPriceChange = styled.div`
  color: red;
  width: 120px;
  margin-left: 10px;
`;

const GreenPriceChange = styled.div`
  color: green;
  width: 120px;
  margin-left: 10px;
`;

const Marketcap = styled.div`
  margin-left: 20px;
  width: 20%;
`;

const Coin = ({
  name,
  symbol,
  image,
  marketcap,
  price,
  priceChange,
  volume,
}) => {
  return (
    <Container>
      <Logo src={image} />
      <Name>{name}</Name>
      <Symbol>{symbol}</Symbol>
      <Price>${price}</Price>
      <VolumeBox>
        <Volume>${volume.toLocaleString()}</Volume>
      </VolumeBox>
      <>
        {priceChange < 0 ? (
          <RedPriceChange>{priceChange.toFixed(2)}%</RedPriceChange>
        ) : (
          <GreenPriceChange>{priceChange.toFixed(2)}%</GreenPriceChange>
        )}
      </>
      <Marketcap>Mkt Cap : ${marketcap.toLocaleString()}</Marketcap>
    </Container>
  );
};

export default Coin;
