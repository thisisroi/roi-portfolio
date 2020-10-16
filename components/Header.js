import Link from "next/link";
import FadeIn from "react-fade-in";

const Title = (props) => {
  return (
    <div>
      <FadeIn delay={150}>
        <div className="flex flex-wrap justify-center px-10 pb-10 mt-12 pt-14 lg:flex-no-wrap sm:flex-wrap">
          <div className="w-full max-w-sm">
            <img
              className="rounded-lg image-shadow"
              src={props.image}
              width="306"
            />
          </div>
          <div className="relative w-full max-w-sm py-5 lg:py-0">
            <FadeIn delay={250}>
              <h1 className="text-3xl font-semibold text-cyellow">
                {props.title}
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <h1 className="pb-3 text-sm font-semibold text-white opacity-75">
                {props.position}
              </h1>
            </FadeIn>
            <FadeIn delay={350}>
              <p className="text-sm font-light break-words text-cgray">
                {props.description}
              </p>
            </FadeIn>
            <div className="pt-16 lg:py-0">
              <div className="absolute bottom-0 flex items-center w-full">
                <Link href={props.contact}>
                  <a
                    target="_blank"
                    className="px-6 py-2 text-sm font-medium transition duration-150 bg-yellow-500 rounded-md hover:bg-yellow-400 text-cdark"
                  >
                    Contact
                  </a>
                </Link>
                {props.links.map((link, i) => (
                  <Link key={i} href={link.href}>
                    <a
                      target="_blank"
                      className="flex items-center justify-center px-1 py-3 ml-4 rounded-full text-softgray"
                    >
                      <i className={`${link.icon}`} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Title;
