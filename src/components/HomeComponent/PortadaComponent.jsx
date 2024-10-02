import { Button } from "@headlessui/react";

export default function Portada({img,title,Description}) {
  return (
    <div className="mx-auto max-w-full my-1 sm:py-2 lg:px-8">
      <div
        className="relative isolate overflow-hidden bg-gray-900 px-2 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
        style={{
          backgroundImage: `url(${img})`, // Aquí se usa la imagen desde las props
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-40 lg:text-left">
          <h2 className="capitalize text-4xl font-bold tracking-tight text-gray-200 sm:text-7xl">
            {title} {/* Título desde las props */}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">{Description}</p>
        </div>
      </div>
    </div>
  );
}

