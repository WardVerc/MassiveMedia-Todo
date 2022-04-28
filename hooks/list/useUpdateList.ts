import { useState } from "react";

const useUpdateList = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateList = async (
    listId: number,
    title: string,
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
            updateList(listId: ${listId}, title: "${title}", description: "${description}") {
             listId
           }  
           }`,
      }),
    })
      .then((response) => response.json())
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  return { isLoading, error, updateList };
};

export default useUpdateList;
