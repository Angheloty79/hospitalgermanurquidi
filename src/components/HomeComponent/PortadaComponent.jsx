import { Button } from "@headlessui/react";
import portada from "../../Imgs/Portada/P4.JPG";


export default function Portada({img,title,Description}) {
  return (
   
      <div className="mx-auto max-w-full  my-1 sm:py-2 lg:px-8">
        <div className=" relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0" style={{
              backgroundImage: `url(${portada})`,
              backgroundSize: "cover",
              backgroundPosition: "center", 
            }}>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-40 lg:text-left">
            <h2 className=" capitalize  text-4xl font-bold tracking-tight text-white sm:text-7xl">
             Atenvion a las 24 horas
            </h2>
          
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Button
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </Button>
              <Button href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>
         
        </div>
      </div>
   
  )
}

