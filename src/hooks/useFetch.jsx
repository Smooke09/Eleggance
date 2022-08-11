import React, { useState, useEffect } from "react";
import Api from "../api/api";

//Criar um hook personalizado quer consiga fazer as requisiçoes na API
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [insert, setInsert] = useState(false);

  //Fazer uma rota para puxar os produtos no all getALlProducts
  useEffect(() => {

    async function getItem() {
      const getItemAll = Api.get(`${url}`);
      const response = await getItemAll;
      setData(response.data);
      setInsert(true);
    }
    getItem();
  }, []);

  return { data, insert };
}
