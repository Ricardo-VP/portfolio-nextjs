import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nprogress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => nprogress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

      <footer className="bg-dark text-light text-center">
        <div className="container p-4">
          <h1>&copy; Ricardo Vaca</h1>
          <p>2021 - {new Date().getFullYear()}</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
