import "../styles/index.scss";
import Navbar from "../components/Navbar";

function App({ Component, pageProps }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:h-screen lg:mx-auto">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
