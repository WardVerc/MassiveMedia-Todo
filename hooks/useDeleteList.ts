import { useState } from "react";

const useDeleteList = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // deleteList() gives a warning "can't perform a react state update on an unmounted component"
  // was happening when trying to catch errors
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
    }).then((response) => response.json());
    // .catch((err) => setError(err.message)); gives problems
    setLoading(false);
  };

  return { isLoading, error, deleteList };
};

export default useDeleteList;
