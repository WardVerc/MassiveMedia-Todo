import { useEffect, useState } from "react";
import { ListType } from "../useGetAllLists";

const emptyList = {
  title: "",
  description: "",
  listId: 0,
  items: [],
};

const useGetList = (listId: number) => {
  const [list, setList] = useState<ListType>(emptyList);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getList = async (listId: number) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        { 
            getList(listId: ${listId}) {
             listId
             title
             description
             items {
               itemId
               description
               done
             }
           }  
           }`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setList(data.data.getList))
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  useEffect(() => {
    getList(listId);
  }, []);

  return { isLoading, error, getList, list };
};

export default useGetList;
