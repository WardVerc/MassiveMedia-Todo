import { useState } from "react";

const useMarkAsDone = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // markAsDone() gives a warning "can't perform a react state update on an unmounted component"
  // was happening when trying to catch errors
  const markAsDone = async (itemId: number, listId: number) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
            markItemAsDone(itemId: ${itemId}, listId: ${listId}) {
             listId
             items{
               itemId
               done
             }
           }  
           }`,
      }),
    }).then((response) => response.json());
    // .catch((err) => setError(err.message)); gives problems
    setLoading(false);
  };

  return { isLoading, error, markAsDone };
};

export default useMarkAsDone;
