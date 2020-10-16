import "../styles/index.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;
