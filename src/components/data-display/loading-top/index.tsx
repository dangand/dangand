import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";

const LoadingTop: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname == "/auth/login" ||
      router.pathname == "/auth/register" ||
      router.pathname == "/auth/register/verification"
    ) {
      console.info("Join Dangand", ":auth");
    }
    const handleStart = () => {
      NProgress.configure({ showSpinner: false });
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };
    // const handleStart = () => setLoading(true);
    // const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <></>
    // <div
    //   className={`fixed top-0 left-0 w-full h-1 bg-primary transition-all duration-500 ${
    //     loading ? "opacity-100" : "opacity-0"
    //   }`}
    // />
  );
};

export default LoadingTop;
