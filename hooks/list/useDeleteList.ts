import { useState } from "react";

const useDeleteList = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const deleteList = async (listId: number) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
            deleteList(listId: ${listId}) 
           }`,
      }),
    })
      .then((response) => response.json())
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  return { isLoading, error, deleteList };
};

export default useDeleteList;
