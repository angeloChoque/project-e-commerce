import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex justify-center mt-10 mb-36 md:my-0 ">
      <div className="container flex flex-col text-center md:my-10 ">
        <h1 className="text-4xl text-orange-600 underline">
          Project E-commerce
        </h1>
        <div className="mx-10 mt-8 max-w-4xl text-left md:mx-auto">
          <p className="text-justify text-lg">
            In this project, I simulate an e-commerce store that allows users to
            select and purchase one or more products simultaneously. The system
            includes a complete checkout experience, product options, and an
            attractive and functional interface. I use different component and
            style libraries to ensure that the page meets its goals efficiently,
            providing an intuitive and visually pleasing user experience.
          </p>
          <h2 className="text-2xl my-5 font-bold">Libraries:</h2>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>Shadcn</li>
            <li>Zustand</li>
            <li>React-Magic-Motion</li>
            <li>Tailwind</li>
            <li>Typescript</li>
            <li>sonner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
