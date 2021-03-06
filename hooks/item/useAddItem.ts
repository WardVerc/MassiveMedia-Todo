import { useState } from "react";

export interface ItemType {
  itemId: number;
  description: string;
  done: boolean;
}

const useAddItem = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const addItem = async (listId: number, description: string) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
          addItem(listId: ${listId}, description: "${description}") {
           listId
           items{
             itemId
           }
         }
         }`,
      }),
    })
      .then((response) => response.json())
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  return { isLoading, error, addItem };
};

export default useAddItem;
