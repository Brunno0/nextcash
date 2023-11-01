import { useEffect } from "react";
import { useRouter } from "next/router";

export const useProtectPage = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); 
    }
  }, []);
};
