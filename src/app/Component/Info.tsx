import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import tesla from "../../../public/tesla.svg";
import tata from "../../../public/tata-logo.svg";
import toyota from "../../../public/toyota.svg";
import bmw from "../../../public/bmw.svg";
import Image from "next/image";
import {
  Carousel,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Info() {

  useEffect(()=>{
    Aos.init({duration: 2000})
},[])

  return (
    <div>
      <div className="info md:p-20 p-2">
        <div data-aos="fade-up" data-aos-duration="3000" className="flex justify-center flex-col md:px-24 px-11 md:py-16 py-8 max-w-[500px] tracking-[3px] bg-black text-white rounded-[50px]">
          <h5 className="pb-12">WHY VOLTAIC</h5>
          <h1 className="text-2xl mb-12 leading-[28px]">
            A different approach, using a new method of manufacturing.
          </h1>
          <p className="leading-[30px] mb-10">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make <span className="md:block hidden">changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.</span> 
          </p>
          <Button
            variant="text"
            className="border-[1px] border-white w-[160px] flex items-center text-white gap-2 hover:bg-white hover:text-black"
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

      <div>
        <div className="grid md:grid-cols-2 grid-cols-1 py-32 md:py-0">
          <div data-aos="fade-right">
            <picture>
              <source media="(min-width: 998px)" srcSet="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_490,h_760,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg" />
            <img
              className="w-full"
              src="https://static.wixstatic.com/media/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg/v1/fill/w_320,h_240,al_r,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_3a4f054db4424af1b034f96ddd7b691a~mv2.jpg"
              alt=""
            />
            </picture>
          </div>
          <div className="flex justify-center flex-col md:px-24 px-11 tracking-[3px]" data-aos="fade-left">
            <h1 className="text-3xl mb-12 leading-[60px]">Voltaic In Numbers</h1>
            {/*  */}
            <div className="flex gap-7 ">
              <div className="w-44">
                <h2 className="text-3xl pb-4">200</h2>
                <div className="h-[1px] bg-blue-gray-800 w-[100%] mb-4 relative">
                  <motion.div
                    initial={{ x: 150 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 22 }}
                    className="absolute h-[3px] bottom-0 bg-black w-[30px]"
                  ></motion.div>
                </div>
                <p>EMPLOYEES</p>
              </div>
              <div className="w-44">
                <h2 className="text-3xl pb-4">5</h2>
                <div className="h-[1px] bg-blue-gray-800 w-[100%] mb-4 relative">
                  <motion.div
                    initial={{ x: 150 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 22 }}
                    className="absolute h-[3px] bottom-0 bg-black w-[30px]"
                  ></motion.div>
                </div>
                <p>CORE TEAMS</p>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-7 mt-7">
              <div className="w-44">
                <h2 className="text-3xl pb-4">200M$</h2>
                <div className="h-[1px] bg-blue-gray-800 w-[100%] mb-4 relative">
                  <motion.div
                    initial={{ x: 150 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 22 }}
                    className="absolute h-[3px] bottom-0 bg-black w-[30px]"
                  ></motion.div>
                </div>
                <p>CAPITAL</p>
              </div>
              <div className="w-44">
                <h2 className="text-3xl pb-4">326</h2>
                <div className="h-[1px] bg-blue-gray-800 w-[100%] mb-4 relative">
                  <motion.div
                    initial={{ x: 150 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 22 }}
                    className="absolute h-[3px] bottom-0 bg-black w-[30px]"
                  ></motion.div>
                </div>
                <p>PARTNERS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="bg-black text-white grid md:grid-cols-2 grid-cols-1 md:p-10 px-4 md:py-16 py-20">
        <div className="flex gap-10 p-9" data-aos="fade-right">
          <div className="w-3 bg-blue-gray-700 relative">
            <motion.div
              initial={{ y: 270 }}
              animate={{ y: 0 }}
              transition={{ duration: 10 }}
              className="absolute w-[3px] h-14 bg-white"
            ></motion.div>
          </div>
          <div className="tracking-[3px]">
            <h5 className="text-[17px] pb-11">INDUSTRY</h5>
            <h3 className="text-2xl pb-11">Our Partners</h3>
            <p className="pb-24">
              Click here to add your own content and customize the text. This is
              a great place to tell a story about your company and let your
              users know a little more about the company's history, the team's
              background, or any other information you'd like to share. Just
              click "Edit Text" to get started.
            </p>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center" data-aos="fade-left">
          <div className="flex justify-center items-center gap-28">
            <div>
              <Image
                src={tesla}
                alt=""
                width={80}
                height={80}
                className="pb-7"
              />
              <p>TESLA</p>
            </div>
            <div>
              <Image
                src={tata}
                alt=""
                width={80}
                height={80}
                className="pb-10"
              />
              <p>TATA</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-28 mt-24">
            <div>
              <Image src={bmw} alt="" width={80} height={80} className="pb-7" />
              <p>BMW</p>
            </div>
            <div>
              <Image
                src={toyota}
                alt=""
                width={80}
                height={80}
                className="pb-10"
              />
              <p>TOYOTA</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full h-[1px] bg-white"></div>
      {/*  */}

      <div className="bg-black p-14 grid md:grid-cols-2 grid-cols-1 gap-24">
        <div className="flex gap-10 md:p-9 text-white" data-aos="fade-right">
          <div className="w-3 bg-blue-gray-700 relative">
            <motion.div
              initial={{ y: 270 }}
              animate={{ y: 0 }}
              transition={{ duration: 10 }}
              className="absolute w-[3px] h-14 bg-white"
            ></motion.div>
          </div>
          <div className="tracking-[3px]">
            <h5 className="text-[17px] pb-11">INDUSTRY</h5>
            <h3 className="text-2xl pb-11">
              We’re looking for innovative talent to join our team. See all
              positions and submit your CV.
            </h3>
            <Button
              variant="text"
              className="border-[1px] border-white text-white w-[160px] flex items-center gap-2 hover:bg-white hover:text-black"
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

        <div className="" data-aos="fade-left">
          <Carousel
            className="rounded-xl border-[1px] border-white h-[550px] min-w-[290px] max-w-[400px]"
            autoplay={true}
            loop={true}
            transition={{
              type:"tween",
              duration:2
            }}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
               
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg> */}
              </IconButton>
            )}
          >
            <Card className="h-full w-full bg-black text-white">
              <Typography className="p-6 mt-10">ELECTRICAL ENGINEER</Typography>
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-9">
                  San Francisco, CA
                </Typography>
                <Typography>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Typography>
              </CardBody>
              <CardFooter className="pt-6">
                <Button
                  variant="text"
                  className="border-[1px] border-white text-white w-[160px] flex items-center gap-2 hover:bg-white hover:text-black"
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
              </CardFooter>
            </Card>
            <Card className="h-full w-full bg-black text-white">
              <Typography className="p-6 mt-10">DATA SCIENTIST</Typography>
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-9">
                  San Francisco, CA
                </Typography>
                <Typography>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </Typography>
              </CardBody>
              <CardFooter className="pt-6">
                <Button
                  variant="text"
                  className="border-[1px] border-white text-white w-[160px] flex items-center gap-2 hover:bg-white hover:text-black"
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
              </CardFooter>
            </Card>
            <Card className="h-full w-full bg-black text-white">
              <Typography className="p-6 mt-10">ARTIFICIAL INTELLIGENCE RESEARCHER</Typography>
              <CardBody>
                <Typography variant="h5" color="gray" className="mb-9">
                  San Francisco, CA
                </Typography>
                <Typography>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your
                </Typography>
              </CardBody>
              <CardFooter className="pt-6">
                <Button
                  variant="text"
                  className="border-[1px] border-white text-white w-[160px] flex items-center gap-2 hover:bg-white hover:text-black"
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
              </CardFooter>
            </Card>
          </Carousel>
        </div>

      </div>

      {/*  */}


    </div>
  );
}
