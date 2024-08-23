import React from 'react';
import Slider from 'react-slick';

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='container flex flex-col items-center justify-center mt-24 px-4 text-center'>
      <h1 className='text-4xl font-bold text-black mb-6'>About EduTrack</h1>
      <p className='max-w-2xl text-lg text-gray-700 mb-8'>
        EduTrack is a cutting-edge educational platform designed to provide personalized learning experiences tailored to each student's unique needs. Our mission is to empower learners by offering customized assessments, real-time progress tracking, and a rich repository of resources that cater to various learning styles.
      </p>

      <Slider {...settings} className='w-full max-w-3xl mb-24'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-black'>Personalized Learning</h2>
          <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg" className='w-56 mx-auto mt-5' alt="" />
          <p className='text-gray-700'>
            Tailor-made assessments and learning paths ensure that every student reaches their full potential.
          </p>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-black'>Real-Time Progress</h2>
          <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg" className='w-56 mx-auto mt-5' alt="" />
          <p className='text-gray-700'>
            Track your learning journey with real-time feedback and analytics, guiding you every step of the way.
          </p>
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-black'>Diverse Resources</h2>
          <img src="https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-diploma-education-day_23-2149241011.jpg" className='w-56 mx-auto mt-5' alt="" />
          <p className='text-gray-700'>
            Access a wide range of educational resources, from video tutorials to interactive quizzes.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default About;
