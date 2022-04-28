import { useState } from "react";

const useDeleteItem = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteItem = async (itemId: number, listId: number) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
          deleteItem(itemId: ${itemId}, listId: ${listId}) {
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

  return { isLoading, error, deleteItem };
};

export default useDeleteItem;
