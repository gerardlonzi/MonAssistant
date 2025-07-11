import React from 'react'
import { LoaderCircle } from 'lucide-react'
import { Link } from 'react-router-dom';
import {clsx} from "clsx"

export default function LinkComponent({variant,to,content,className,onClick}) {
    let link;
    switch(variant){
        case "primary":
            link=(<Link to={to}
            class="relative inline-flex items-center justify-center w-full md:w-72 px-2 md:px-20 rounded-lg py-3 md:py-4 text-white sm:text-[#00275b] overflow-hidden tracking-tighter   outline outline-[#00275b] hover:text-white  group"
          >
            <span
              class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#00275b]  rounded-full group-hover:w-96 group-hover:h-56"
            ></span>
            <span class="absolute bottom-0 left-0 h-full -ml-2">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span
              class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
            ></span>
            <span class="relative text-base font-semibold">{content}</span>
          </Link>)
          break;
        case "secondary":
            link =  (<Link to={to}
            class="relative inline-flex items-center w-full md:w-72 justify-center px-2 md:px-20 rounded-lg py-3 md:py-4 overflow-hidden tracking-tighter bg-green-600 text-white   group"
          >
            <span
              class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-700  rounded-full group-hover:w-96 group-hover:h-56"
            ></span>
            <span class="absolute bottom-0 left-0 h-full -ml-2">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span class="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fill-opacity=".1"
                  fill-rule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span
              class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
            ></span>
            <span class="relative text-base font-semibold">{content}</span>
          </Link>)
          break;
          case "tercero":
          link= <Link to={to} onClick={onClick} className={`px-12 py-4 hover:bg-green-500 bg-green-400 font-bold text-black cursor-pointer rounded-full inline-block transition-all text-lg mt-10 ${className}`}>{content}</Link>;
          break;

          case "quatro":
            link= <Link onClick={onClick} className={`px-12 py-4  hover:bg-gray-100 font-bold  cursor-pointer rounded-full transition-all text-lg outline-2 ${className}`}>{content}</Link>;
            break;

          default:
            break;
    }
    
  return (
    
        link
    
)
}