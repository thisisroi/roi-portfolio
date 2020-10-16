import Link from "next/link";
import FadeIn from "react-fade-in";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center w-full px-5 py-4 mt-4 text-xs text-cgray">
        This{" "}
        <a
          href="https://github.com/thisisroi/roi-portfolio"
          target="_blank"
          className="px-2 py-1 mx-1 transition duration-150 rounded-md bg-softdark hover:opacity-75"
        >
          project
        </a>{" "}
        was developed by{" "}
        <a
          className="mx-1 text-blue-400 hover:text-blue-400 hover:underline"
          target="_blank"
          href="https://github.com/thisisroi"
        >
          Roi
        </a>{" "}
        with{" "}
        <a
          className="mx-1 text-blue-400 hover:text-blue-400 hover:underline"
          target="_blank"
          href="https://nextjs.org"
        >
          Next.js
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
