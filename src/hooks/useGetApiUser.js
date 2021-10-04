import { useEffect, useState } from "react";
import axios from "axios";
import { useLoading } from "./useLoading";

export const useGetApiUser = () => {
  const [user, setUser] = useState([]);
  const { updateLoading } = useLoading();

  async function fetchData() {
    updateLoading(true);
    const response = await axios("https://randomuser.me/api");
    const userResults = response.data;
    setUser(userResults);
    updateLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { user };
};
