import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex justify-center my-10 md:my-0 ">
      <div className="container flex flex-col text-center md:my-10 ">
        <h1 className="text-4xl text-orange-600 underline">
          Project E-commerce
        </h1>
        <div className="mx-10 mt-8 max-w-4xl text-left md:mx-auto">
          <p className="text-justify text-lg">
            En este proyecto, simulo una tienda de comercio electrónico que
            permite a los usuarios seleccionar y comprar uno o varios productos
            de forma simultánea. El sistema incluye una experiencia completa de
            pago, opciones de productos y una interfaz atractiva y funcional.
            Utilizo diferentes librerías de componentes y estilos para asegurar
            que la página cumpla con sus objetivos de manera eficiente,
            ofreciendo una experiencia de usuario intuitiva y visualmente
            agradable.
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
