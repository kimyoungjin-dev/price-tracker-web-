import axios from "axios";

const request = (path) => {
  return axios.get(
    `https://api.coingecko.com/api/v3${path}
  `,
    {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
        sparkline: false,
      },
    }
  );
};

const getAnything = async (path) => {
  try {
    const { data } = await request(path);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const coinApi = () => getAnything("/coins/markets?");
