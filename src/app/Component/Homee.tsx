import { url } from "inspector";
import React, { useEffect, useState } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Homee() {

  const [reload, setReload] = useState("")

  window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 650){
      setReload("block")
    }else{
      setReload("hidden")
    }
  })

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="hero h-[130vh] text-center flex items-center justify-center tracking-tight">
        <div className="md:px-48 px-4 md:mt-[-300px] mt-[-200px] herocontainer">
          <h1
            className="md:text-[50px] lg:text-[60px] text-[40px] tracking-[5px]"
            data-aos="fade-up"
            data-aos-duration="5000"
          >
            THE FUTURE OF MOBILITY IS HERE
          </h1>
          <p
            className="text-[26px] mt-6 text-gray-900"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            Discover the safest self-driving experience with Voltaic.
          </p>
        </div>
      </div>
{/*button*/} 
      <Link href={"/"} >
      <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" className={` ${reload} bottom-12 right-10 fixed z-20 bg-white rounded-full p-4 hover:bg-black shadow-md cursor-pointer shadow-gray-700 hover:text-white`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>
      </Link>
{/*button */}

      <div className="secondsec grid tracking-[3px]">
        <div className="md:p-16 pt-20 px-5 flex flex-col gap-12 items-start h-[100%] justify-center text-white bg-black">
          <motion.div
            data-aos="fade-right"
            className="secondSecCon"
            initial={{ opacity: 0, marginLeft: "-500px" }}
            animate={{ opacity: 1, marginLeft: "0px" }}
            transition={{ duration: 2 }}
          >
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3"></TimelineHeader>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader className="h-3">
                  <TimelineIcon />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="text-white"
                  >
                    VISION
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-16 pt-12">
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-white text-3xl"
                  >
                    We’re Changing the Way the World Thinks About Cars
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineIcon />
                <TimelineBody>
                  <Typography
                    variant="small"
                    color="gary"
                    className="font-normal text-white text-[16px]"
                  >
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me to
                    add your own content and make changes to the font. I’m a
                    great place for you to tell a story and let your users know
                    a little more about you.
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </div>
        <div className="imgbg">
          <picture>
            <source
              media="(min-width: 998px)"
              srcSet="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_588,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg"
            />
            <img
              className="w-[100%]"
              src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_320,h_332,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </>
  );
}


