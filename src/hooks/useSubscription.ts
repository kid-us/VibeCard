import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/services/request";

const useSubscription = () => {
  const [quota, setQuota] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/can-create-card`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        // console.log(response.data);
        setQuota(true);
      })
      .catch(() => {
        setQuota(false);
        // console.log(error);
      });
  }, []);

  return { quota };
};

export default useSubscription;
