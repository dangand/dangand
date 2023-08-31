import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { PROFILE } from "@/constants/endpoint";
import {
  AUTH_PAGE,
  DASHBOARD_ROUTE,
  LANDING_PAGE_ROUTE,
  PATH,
} from "@/constants/path";
import { API } from "@/services";
import UserStore from "@/store/UserStore";
import cookie from "js-cookie";

interface Props {
  children: React.ReactElement;
}

const PrivateLayout = ({ children }: Props) => {
  const router = useRouter();
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = cookie.get("dangand_access_token");

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const res = await API.get(PROFILE);
        setUser(res.data.data);
        setLoading(false);
        // router.push(PATH.DASHBOARD.LIST_INVITATION);
      } catch (e: any) {
        if (
          e.response?.data.statusCode === 401 ||
          e.response?.data.statusCode === 403
        ) {
          setUser(null);
          console.log(e);
          cookie.remove("dangand_access_token");
          router.push({
            pathname: PATH.AUTH.LOGIN,
            query: { reason: "unauthorize" },
          });
          setLoading(false);
        } else {
          setUser(null);
          console.error(e.message || "Error");
          router.push({
            pathname: PATH.AUTH.LOGIN,
            query: { returnUrl: router.asPath },
          });
          setLoading(false);
        }
      }
    };

    if (DASHBOARD_ROUTE.includes(router.pathname) && token) {
      fetchProfile();
    } else if (!token && DASHBOARD_ROUTE.includes(router.pathname)) {
      router.push({
        pathname: PATH.AUTH.LOGIN,
        query: { returnUrl: router.asPath },
      });
    } else if (
      token &&
      (LANDING_PAGE_ROUTE.includes(router.pathname) ||
        AUTH_PAGE.includes(router.pathname))
    ) {
      router.push(PATH.DASHBOARD.LIST_INVITATION);
    }
    setLoading(false);
  }, [router, token]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateLayout;
