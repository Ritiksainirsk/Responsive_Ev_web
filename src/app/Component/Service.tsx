import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Service() {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <div>
      <div className="h-[60vh] py-36 md:px-24 px-11 flex gap-9" data-aos="fade-down">
        <div className="w-[4px] h-[140px] bg-blue-gray-300 relative">
          <motion.div
            className="w-[4px] h-[50px] bg-black absolute top-0 left-0"
            initial={{
              translateY: "90px",
            }}
            animate={{ translateY: "0px" }}
            transition={{ delay: 1.5, duration: 3 }}
          ></motion.div>
        </div>
        <div className="tracking-[4px]">
          <h4>SERVICES</h4>
          <h1 className="md:text-[26px] text-[21px] md:mr-80 mt-10">
            We Deliver Exceptional Products and Services Around the World
          </h1>
        </div>
      </div>

      {/*  */}

      <div className="grid md:grid-cols-2 grid-cols-1 items-center place-content-between">
        <div data-aos="fade-right" className="flex justify-center flex-col md:px-24 px-11 tracking-[3px]">
          <h1 className="md:text-5xl text-4xl mb-12 leading-[60px]">AUTONOMOUS DRIVING</h1>
          <p className="leading-[30px] mb-10">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <Button
            variant="text"
            className="border-[1px] border-black w-[160px] flex items-center gap-2 hover:bg-black hover:text-white"
            data-aos="flip-down"
          >
            Read More
            <motion.span className="" whileHover={{ x: 10 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.span>
          </Button>
        </div>

        <div data-aos="fade-left">
          <picture>
            <source media="(min-width: 998px)" srcSet="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_490,h_680,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg" />
          <img
            className="w-full"
            src="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_320,h_256,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg"
            alt=""
          />
          </picture>
        </div>
      </div>

      {/*  */}

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div data-aos="fade-right">
          <picture>
            <source media="(min-width: 998px)" srcSet="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_490,h_680,al_r,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg" />
          <img
            className="w-full"
            src="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_320,h_252,al_r,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg"
            alt=""
          />
          </picture>
        </div>
        <div className="flex justify-center flex-col md:px-24 px-11 tracking-[3px] mb-28" data-aos="fade-left">
          <h1 className="md:text-5xl text-4xl mb-12 leading-[60px]">
            REAL-TIME INFORMATION
          </h1>
          <p className="leading-[30px] mb-10">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <Button
            variant="text"
            className="border-[1px] border-black w-[160px] flex items-center gap-2 hover:bg-black hover:text-white"
          >
            Read More
            <motion.span className="" whileHover={{ x: 10 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.span>
          </Button>
        </div>
      </div>

      {/*  */}

      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center flex-col md:px-24 px-11 tracking-[3px] mb-14" data-aos="fade-right">
          <h1 className="md:text-5xl text-4xl mb-12 leading-[60px]">PERCEPTION ENABLED</h1>
          <p className="leading-[30px] mb-10">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <Button
            variant="text"
            className="border-[1px] border-black w-[160px] flex items-center gap-2 hover:bg-black hover:text-white"
          >
            Read More
            <motion.span className="" whileHover={{ x: 10 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </motion.span>
          </Button>
        </div>

        <div data-aos="fade-left">
          <picture>
            <source media="(min-width: 998px)" srcSet="https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_490,h_680,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg" />
          <img
            className="w-full"
            src="https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_320,h_264,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg"
            alt=""
          />
          </picture>
        </div>
      </div>

    </div>
  );
}
