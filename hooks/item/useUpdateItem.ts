import { useState } from "react";

const useUpdateItem = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateItem = async (
    itemId: number,
    listId: number,
    description: string
  ) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
          updateItem(itemId: ${itemId}, listId: ${listId}, description: "${description}") {
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

  return { isLoading, error, updateItem };
};

export default useUpdateItem;
