import { useState } from "react";

export interface CreateListType {
  listId: number;
}

const useList = () => {
  const [isLoading, setLoading] = useState(false);

  const createList = async (title: string, description: string) => {
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
      // TODO: error handling
      .then((response) => response.json())
      // Need to return something ?
      .then((data) => {
        return data.data.createList;
      });
    setLoading(false);
  };

  return { isLoading, createList };
};

export default useList;
