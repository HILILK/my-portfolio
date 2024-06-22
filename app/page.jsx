"use client";
import React from 'react'
import '@/style/style.css'
import Image from "next/image";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import { Textarea } from "@material-tailwind/react";
// import { Typography } from "@material-tailwind/react";

export default function () {

  const LINKS = [
    {
      title: "Product",
      items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
      title: "Company",
      items: ["About us", "Careers", "Press", "News"],
    },
    {
      title: "Resource",
      items: ["Blog", "Newsletter", "Events", "Help center"],
    },
  ];

  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 hover:text-blue-700">
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#home" className="flex items-center hover:text-blue-700 font-light text-xs">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#about" className="flex items-center hover:text-blue-700 font-light text-xs">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#education" className="flex items-center hover:text-blue-700 font-light text-xs">
          Education
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#projects" className="flex items-center hover:text-blue-700 font-light text-xs">
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#contact" className="flex items-center hover:text-blue-700 font-sans font-light text-xs">
          Conact Me
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <main class="flex flex-col items-center">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none p-1 m-0 border-0 shadow-none bg1">
          <div className="flex justify-between text-blue-gray-900 p-0">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium">
              <img src="favicon.ico" className='h-20' />
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <IconButton
                variant="text"
                className="ml-auto h-8 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
          </MobileNav>
        </Navbar>

        <div className="w-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 3,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >

            <div className="w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden -z-50 p-5 lg:p-40" id="home">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="pink"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
              />
              <Image src='/image/background.jpg' fill={true} className="bg-img" />
              <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center">
                <div className="w-full flex justify-center lg:justify-start" id='home'>
                  <label className="text-lg text-center font-semibold text-blue-700">Hello, My Name is,</label>
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5">
                  <label className="text-4xl text-center lg:text-start font-bold lg:text-6xl">Hirusha Liyanage.</label>
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5">
                  {/* <TextGenerateEffect words={"I am a full-stack developer with 2+ years of experience, I have a strong foundation in front-end & back-end development. I am skilled in creating user-friendly and responsive applications."}/>  */}
                  <label className="text-lg text-center lg:text-start font-light text-gray-500 mt-3">

                  Welcome to my portfolio! I am a passionate software engineer with a keen interest <br className="hidden lg:block" /> in programming languages, web development, and computer hardware. With a strong 
                  <br className="hidden lg:block" /> foundation in PHP, JavaScript, HTML, CSS, React, and Next Js I specialize in creating 
                  <br className="hidden lg:block" /> dynamic and responsive web applications. My goal is to leverage my technical skills and creativity 
                  <br className="hidden lg:block" /> to build innovative solutions that make a difference. Explore my projects and get in touch to discuss 
                  <br className="hidden lg:block" /> how we can collaborate on exciting new ventures <a href="https://novascriptsolutions.com/" className="text-blue-700 hover:cursor-pointer font-bold">Learn More</a></label>
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-2">
                  <a href="https://github.com/hililk" className="p-2 rounded-2xl mt-5 bg-gradient-to-r from-indigo-500 to-purple-500  group transition duration-200 text-white hover:bg-transparent">
                    My Github Account
                  </a>
                </div>
              </div>
            </div>

            <div className="relative w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.05] overflow-hidden -z-50 bg-black p-5 lg:p-40" id="about">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="pink"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
              />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">

                <div className="w-full flex justify-center lg:justify-start" id='home'>
                  <label className="text-2xl text-center font-semibold text-white">About Me</label>
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5" id='home'>
                  <img src="/image/profile.jpg" className='h-52 rounded-3xl' />
                </div>

                <div className="w-full flex justify-center lg:justify-start mt-5">
                  {/* <TextGenerateEffect words={"I am a full-stack developer with 2+ years of experience, I have a strong foundation in front-end & back-end development. I am skilled in creating user-friendly and responsive applications."}/>  */}
                  <label className="text-lg text-center lg:text-start font-light text-gray-500 mt-3 lg:text-2xl">
                    Hello, I am Hirusha Liyanage of the Software Company Nova Script Solutions(NSS). <br /> So, I am a Full Stack Software enginner in the company. But mostly, I am doing<br />
                    UI/UX Designing.</label>

                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5">
                  {/* <TextGenerateEffect words={"I am a full-stack developer with 2+ years of experience, I have a strong foundation in front-end & back-end development. I am skilled in creating user-friendly and responsive applications."}/>  */}
                  <label className="text-lg text-center lg:text-start font-light text-gray-500 mt-3 lg:text-2xl">Here are some technologies I am working,</label>
                  <br />
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5 gap-16 lg:text-2xl">

                  <ul>
                    <li className='text-gray-600'># HTML</li>
                    <li className='text-gray-600'># CSS</li>
                    <li className='text-gray-600'># Javascript</li>
                    <li className='text-gray-600'># PHP</li>
                    <li className='text-gray-600'># MySQL</li>
                  </ul>
                  <ul>
                    <li className='text-gray-600'># Next.js</li>
                    <li className='text-gray-600'># Tailwind CSS</li>
                    <li className='text-gray-600'># React</li>
                    <li className='text-gray-600'># Java</li>
                    <li className='text-gray-600'># Node.js</li>
                  </ul>

                  <br />

                </div>
                <div className="w-full flex justify-center lg:justify-start mt-2">

                </div>
              </div>
            </div>


            <div className="relative w-full rounded-md flex flex-col md:items-center md:justify-center antialiased bg-grid-white/[0.05] overflow-hidden -z-50 bg-black p-5 lg:p-40" id="education">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="pink"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
              />
              <Image src='/image/background.jpg' fill={true} className="bg-img" />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
                <div className="w-full flex justify-center lg:justify-start" id='home'>
                  <label className="text-2xl text-center font-semibold text-white">Education</label>
                </div>
                <div className="w-full flex justify-center lg:justify-start mt-5">
                  {/* <TextGenerateEffect words={"I am a full-stack developer with 2+ years of experience, I have a strong foundation in front-end & back-end development. I am skilled in creating user-friendly and responsive applications."}/>  */}
                  <label className="text-lg text-center lg:text-start font-light text-gray-500 mt-3 lg:text-2xl">
                    PCJT Java Institute For Advanced Technology is the University where I started Programming <br /> and keep the first step for Software Enginering. It offers an BSC(Hons) Degree from the <br />
                    UK university birmingham city university. <a href="https://www.javainstitute.edu.lk/" className="text-blue-700 hover:cursor-pointer font-bold">Learn More</a></label>

                </div>
              </div>
            </div>



            <div className="relative w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.05] overflow-hidden -z-50 bg-black p-5 lg:p-40" id="projects">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="pink"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
              />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">

                <div className="w-full flex justify-center lg:justify-start">
                  <label className="text-2xl text-center font-semibold text-white">My Projects</label>
                </div>

                <div className='w-full lg:flex'>

                  <div className='w-full lg:w-1/2'>
                    <div className="w-full flex justify-center lg:justify-start mt-5 gap-10 mb-3">
                      <a href="#"><img src="/image/image1.png" className='lg:h-72 rounded-xl hover:bg-black hover:opacity-50' /></a>
                    </div>
                    <div className="w-full flex justify-center lg:justify-start mt-5 gap-10 mb-3">
                      <label className="w-full text-lg text-center lg:text-start font-light text-gray-500 mt-3 lg:text-xl">
                        Techland. <br /> This an ecommerce web application developed by me. This ecommerce web application sells electronic items.</label>
                    </div>
                  </div>

                  <div className='w-full lg:w-1/2'>
                    <div className="w-full flex justify-center lg:justify-start mt-5 gap-10 mb-3">
                      <a href="#"><img src="/image/image2.png" className='lg:h-72 rounded-xl hover:bg-black hover:opacity-50' /></a>
                    </div>
                    <div className="w-full flex justify-center lg:justify-start mt-5 gap-10 mb-3">
                      <label className="w-full text-lg text-center lg:text-start font-light text-gray-500 mt-3 lg:text-xl">
                        Newtech. <br /> This an ecommerce web application developed by me. This ecommerce web application sells electronic items.</label>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            <div className="relative w-full rounded-md flex flex-col md:items-center md:justify-center antialiased bg-grid-white/[0.05] overflow-hidden -z-50 bg-black p-5 lg:p-40" id="contact">
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="pink"
              />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-30"
                fill="white"
              />
              <Image src='/image/background.jpg' fill={true} className="bg-img" />
              <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center">
                <div className="w-full flex justify-center" >
                  <label className="text-2xl text-center font-semibold text-white">Contact Me</label>
                </div>


                <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input flex justify-center">
                  <div class="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <form class="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
                      <div class="flex flex-col gap-6 mb-1">
                        <h6
                          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                          Your Name
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px]">
                          <input placeholder="John Doe"
                            class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                          <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                        <h6
                          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                          Your Email
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px]">
                          <input placeholder="name@mail.com"
                            class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                          <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                        <h6
                          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
                          Message
                        </h6>
                        <div class="relative h-11 w-full min-w-[200px] mb-5">
                          <Textarea  type="textarea" placeholder="Your Message"
                            class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                          <label
                            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                      </div>
                      <button
                        class="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button">
                        Send
                      </button>
                    </form>
                  </div>

                </div>

              </div>
            </div>

          </motion.div>
        </div>

    <footer className="relative w-full pt-10 bg-black">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 flex justify-center">
          <img src="favicon.ico" className='h-40' />
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="white"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="https://www.facebook.com/profile.php?id=61555955936783" className="opacity-80 text-white transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="https://www.instagram.com/_hirusha_ashen_/" className="opacity-80 text-white transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography as="a" href="https://github.com/hililk" className="opacity-80 text-white transition-opacity hover:opacity-100">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>

      </main>

    </>
  )

}