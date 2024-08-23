import React from "react";
import About from "./About"
import { Link } from "react-router-dom";
import { Contact } from "./Contact";
function Home() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
          <div className="inline-flex items-center">
            <img src="/logo.png" width={50} height={50} alt="logo" className="rounded-full" />
            <span className="ml-4 text-2xl font-bold">EduTrack</span>
          </div>
          <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
            <p className="text-xs font-medium md:text-sm p-1 px-2">
              EduTrack is a platform that creates tailored assessments for
              students based on their individual progress and learning needs,
              offering a more personalized evaluation experience. <br />
              <a href="/about" className="cursor-pointer font-bold">
                Learn More &rarr;
              </a>
            </p>
          </div>
          <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Personalized Learning, Tailored to Your Needs
          </h1>
          <p className="mt-8 max-w-3xl text-lg text-gray-700">
            At EduTrack, we understand the unique learning journey of each
            student. Our platform offers customized assessments designed to
            support individual progress, ensuring that every student receives
            the personalized attention they deserve to thrive academically.
          </p>

          <div className="mt-8">
            <Link
              to="/panal"
              className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-gray-200 p-4">
          <img
            className="aspect-[3/2] w-full rounded-lg bg-white object-cover lg:aspect-auto lg:h-[400px]"
            src="https://cdn.prometheanworld.com/wp-content/uploads/2023/03/18150319/GettyImages-1338740162-1296x550.jpg"
            alt=""
          />  
        </div>
      </div>
      <About/>
      <Contact/>
    </div>
  );
}

export default Home;
