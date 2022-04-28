import { useState } from "react";

const useCreateList = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createList = async (title: string, description: string) => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
      mutation { 
          createList(title: "${title}", description: "${description}") {
           listId
         }  
         }`,
      }),
    })
      .then((response) => response.json())
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  return { isLoading, error, createList };
};

export default useCreateList;
