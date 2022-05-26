import Navbar from "./Navbar";

const Layout = ({ children }) => (
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

export default Layout;
