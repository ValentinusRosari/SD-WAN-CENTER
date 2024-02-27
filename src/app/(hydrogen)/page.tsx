"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RedirectToLogin = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page
    router.push("/signin");
  }, []);

  return null;
};

export default RedirectToLogin;
