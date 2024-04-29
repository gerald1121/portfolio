const GeneralFooter = () => {
  return (
    <footer className="relative mt-auto flex flex-col items-center text-gray-300 mb-6 gap-2 md:flex-row md:justify-evenly">
      <div className="flex gap-x-4 md:order-last">
        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/gerald1121"
        >
          <i className="bx bxl-github"></i>
        </a>

        <a
          className="text-4xl hover:text-primary-color hover:animate-bounce"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/glloyd1121/"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <p className="md:order-2">
        • Copyright ©{new Date().getFullYear()} | All rights reserved •{" "}
      </p>
      <p>@Gerald Lloyd</p>
    </footer>
  );
};

export default GeneralFooter;
