import axios from "axios";
import { useCallback } from "react";
import { RobotStoreStructure } from "../../types/types";
const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const getRobots = useCallback(async (): Promise<RobotStoreStructure> => {
    const response = await axios.get(`${apiUrl}robots`);
    const result = response.data;
    return result;
  }, []);

  return { getRobots };
};

export default useApi;
