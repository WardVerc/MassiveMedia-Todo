import { useEffect, useState } from "react";

const GET_ALL_LISTS = `{
  getAllLists {
    title,
    description
    listId
  items {
    itemId
    description
    done
  }
  }
}`;

export interface ListItem {
  itemId: number;
  description: string;
  done: boolean;
}

export interface ListType {
  listId: number;
  title: string;
  description: string;
  items: ListItem[];
}

const useGetAllLists = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lists, setLists] = useState<ListType[]>([]);

  const getLists = async () => {
    setError("");
    setLoading(true);
    await fetch("https://mm-todolist.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_ALL_LISTS }),
    })
      .then((response) => response.json())
      .then((data) => setLists(data.data.getAllLists))
      .catch((err) => setError(err.message));
    setLoading(false);
  };

  useEffect(() => {
    getLists();
  }, []);

  return { isLoading, error, lists, getLists };
};

export default useGetAllLists;
