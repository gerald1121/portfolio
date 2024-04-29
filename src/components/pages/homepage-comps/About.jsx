import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <section
      name="About"
      className="relative w-full md:h-screen text-white h-unset"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg">
        <div className="pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40">
            About me
          </h2>
        </div>

        <p className="mb-4 py-6">
          Hey! I&apos;m based out of Oakland, CA, and I have 9+ years of full
          stack development, specializing in technologies including React.js,
          Typescript, Node.js, and Python.
        </p>

        <p>
          I helped building a few startups, developing new features for on-going
          project, maintaining & supporting products in enterprises, and
          I&apos;ve worked with a variety of technologies. I&apos;m always
          looking to learn more and improve my skills. I&apos;m passionate about
          creating clean, efficient code and solving problems. I&apos;m always
          looking for new opportunities to learn and grow.
        </p>
      </div>

      <ScrollLink
        to="Projects"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default About;
