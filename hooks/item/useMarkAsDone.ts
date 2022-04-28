import { useState } from "react";

const useMarkAsDone = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
             }
           }  
           }`,
      }),
    })
      .then((response) => response.json())
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  const markAsNotDone = async (itemId: number, listId: number) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        mutation { 
            markItemAsNotDone(itemId: ${itemId}, listId: ${listId}) {
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

  return { isLoading, error, markAsDone, markAsNotDone };
};

export default useMarkAsDone;
