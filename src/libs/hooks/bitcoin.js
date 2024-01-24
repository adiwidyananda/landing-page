import api from "@libs/utils/api";
import { useState, useEffect } from "react";

export const useBitcoin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const { data: res } = await api.get("/ticker");
      if (res) {
        const filteredCurrencies = ["AUD", "EUR", "GBP", "JPY", "USD"];
        const filteredArray = Object.entries(res)
          .filter(([currency]) => filteredCurrencies.includes(currency))
          .map(([currency, data]) => ({ ...data, label: currency }));
        setData(filteredArray);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
  };
};

export const useIDRtoBTC = (rupiah) => {
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async (value) => {
    try {
      setLoading(true);
      const { data: res } = await api.get(
        `/tobtc?currency=USD&value=${value / 15000}`
      );
      if (res) {
        setResult(res);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (rupiah) {
      getData(rupiah);
    } else {
      setResult(0);
    }
  }, [rupiah]);

  return {
    result,
    loading,
  };
};

export const useBTCtoIDR = (btc) => {
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const getData = async (value) => {
    try {
      setLoading(true);
      const { data: res } = await api.get(`/tobtc?currency=USD&value=1`);
      if (res) {
        setResult(Math.ceil((value * 15000) / res));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (btc) {
      getData(btc);
    } else {
      setResult(0);
    }
  }, [btc]);

  return {
    result,
    loading,
  };
};
