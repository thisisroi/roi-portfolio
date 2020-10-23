import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import config from "../config";

function Home() {
  return (
    <div>
      <div className="px-5 py-5">
        <Header
          image={config.about.image}
          name={config.about.name}
          job={config.about.job}
          description={config.about.description}
        />
      </div>
    </div>
  );
}

export default Home;
