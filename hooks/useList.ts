import { useState } from "react";

export interface CreateListType {
  listId: number;
}

const useList = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // createList() gives a warning "can't perform a react state update on an unmounted component"
  // was happening when trying to catch errors
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
    }).then((response) => response.json());
    // .catch((err) => setError(err.message)); gives problems
    setLoading(false);
  };

  return { isLoading, error, createList };
};

export default useList;
