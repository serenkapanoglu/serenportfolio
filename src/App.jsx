import './App.css';
import Profile from './assets/myimage.png';
import Profile2 from './assets/morty.jpeg';
import Profile3 from './assets/logo-color.png';
import Project1 from './assets/Project1.png';
import Project2 from './assets/Project2.png';
import Project3 from './assets/Project3.png';
import Project4 from './assets/Project4.png';
import Image from './assets/html.png'
import Image2 from './assets/bootstrap.png'
import Image3 from './assets/css.png'
import Image4 from './assets/flask.jpeg'
import Image5 from './assets/python.webp'
import Image6 from './assets/jinja.png'
import Image7 from './assets/postgres.png'
import Image8 from './assets/sql.png'
import Image9 from './assets/ico.png'
import Image10 from './assets/ico.png'
import Image11 from './assets/node.png'
import Image12 from './assets/express.png'
import Image13 from './assets/jwt.svg'
import Image15 from './assets/javascript.png'
import  { skills }  from './assets/Data';
import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CiMail } from "react-icons/ci";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 70px;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;



const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #854CE6;
  border-radius:15px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 15px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const SuccessMessage = styled.div`
  background-color: #5cb85c;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
`;


function App() {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      form.current, 
       import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
          setTimeout(()=>{
            setShowSuccessMessage(false);
            form.current.reset();
          },2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

return (
<>
<header>
<div className='container m-auto px-4 py-6'>
<div className='flex justify-between items-center'>
<div>
{/*<h1 className='font-bold text-xl'>Seren Portfolio</h1> */}
<img src={Profile3} alt="Logo" 
className='w-20 h-20 rounded-full' />
</div>
<div>
<ul className='flex gap-4'>
<li>
<a href='#projects' className='text-gray-400 hover:text-white cursor-pointer'>Projects</a>
</li>
<li>
<a href='#tech' className='text-gray-400 hover:text-white cursor-pointer'>Technologies</a>
</li>
<li>
<a href='#aboutme' className='text-gray-400 hover:text-white cursor-pointer'>About Me</a>
</li>
<li>
<a href='#contactme' className='text-gray-400 hover:text-white cursor-pointer'>Contact Me</a>
</li>
</ul>
</div>
</div>
</div>
</header>

<main>
  {/*Intro-banner section */}
  <section>
  <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
  <div>
  <h2 className="font-bold text-4xl">Hello, I'm Gulseren Kapanoglu,</h2>
  <div>
  <h2 className="font-bold text-4xl mt-1 gradiant-text">full stack developer</h2>
  </div>
  <div>
  <p className="mt-4 text-gray-400">
  A passionate Full Stack Junior Web Developer with a degree in Computer Science and a software engineering bootcamp under my belt. 
  </p>
  <p className="mt-4 text-gray-400">Eager to learn and always up for a challenge, I bring a strong foundation in both front-end and back-end technologies.</p>
  <p className="mt-4 text-gray-400">💻 Actively seeking opportunities to contribute my skills, I'm dedicated to crafting clean and efficient code that delivers exceptional user experiences. Explore my portfolio and let's connect to discuss how I can bring your digital ideas to life!</p>
  <p className="mt-4 text-gray-400">📧 Open to exciting opportunities—let's collaborate!</p>

  

 <div className='flex flex-col sm:flex-row gap-10 mt-11'>
  <button onClick={() => window.open('https://drive.google.com/file/d/10fQqr2Yn6ay4jqQ7LQPpSSg9NyPp7zW-/view?usp=sharing', '_blank')} className="px-8 shadow-gray-500 shadow-md py-5 mt-10 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 mr-4">
    Download Resume
</button> 
  


  {/*<div className='flex flex-col sm:flex-row gap-10 mt-11'>
  <a href='https://www.linkedin.com/in/gulseren-kapanoglu/' target='_blank' rel='noopener noreferrer' className="px-8 shadow-gray-500 shadow-md py-5 mt-10 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 mr-4">
    Download Resume
</a> */}



  <button onClick={() => window.open('https://github.com/serenkapanoglu', '_blank')} className="px-8 shadow-gray-500 shadow-md py-5 mt-10 flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-10 py-6 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900 rounded-full">
    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207
        11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
        1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
        0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138
        3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921
        .43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
      </path>
    </svg>
    Github Profile
  </button>

  <button onClick={() => window.open('https://www.linkedin.com/in/gulseren-kapanoglu/', '_blank')} className="px-8  ml-4 shadow-md py-5 mt-10 flex gap-3 cursor-pointer group hover:bg-sky-600 relative bg-sky-700 rounded-full text-neutral-50 duration-500 font-bold flex justify-start gap-2 items-center p-2 pr-6 ">
  <svg
    class="w-8 h-8 fill-neutral-50"
    height="100"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 100 100"
    width="100"
    x="0"
    xmlns="http://www.w3.org/2000/svg"
    y="0"
  >
    <path
      d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"
    ></path>
  </svg>
  <span class="border-l-2 px-1">Linkedin Profile</span>
  <div
    class="group-hover:opacity-100 opacity-0 top-20 absolute z-20 inline-block px-3 py-3 text-sm font-medium text-white transition-opacity duration-500 bg-sky-600 rounded-lg shadow-sm before:w-3 before:h-3 before:rotate-45 before:-top-1 before:left-20 before:bg-sky-600 before:absolute"
  >
    See my profile!
  </div>
  </button>
</div>


  <div className="relative">
  <img src={Profile2}  className=" relative z-10 mt-10 ml-0 w-[250px] m-auto sm:w-[300px] rounded-full mt-14" />
  <h1 className='mt-10'>Look Morty, this girl is doing websites.</h1>
  <p>She's doing websites, Morty.</p>
  <p>Can you believe that?</p>
  
  </div>
  </div>
  </div>
  <div className="relative ">
  <div>
  <img src={Profile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
  </div>
  </div>
  </div>
  </section>

  {/* Projects Section */}
  <section id='projects'>
    <div className='container m-auto px-4 sm:py-12'>
  <h2 style={{ textAlign:'center', fontSize:'42px'}} className='text-2xl font-semibold'>Projects</h2>


  <div className='flex flex-col sm:flex-row gap-10 mt-11'>
<div style={{ border: '0.1px solid #854CE6', boxShadow:'rgba(23, 92, 230, 0.15) 0px 4px 24px;' }} className='border border rounded-md p-5'>
<img src={Project4} className='w-full h-auto'/>
<h3 className='text-2xl font-semibold mt-8'>Be A Barista At Home</h3>
<p className='text-gray-400 text-sm mt-2'>This project is a Flask-based web application that allows users to explore and interact with cocktail information retrieved from TheCocktailDB API. Users can search for cocktails by name, sign in or sign up, add drinks to their favorites, leave comments, and more.</p>
<p className='mt-3 text-sm text-gray-700'>Tech Stack</p>
<ul className='flex items-center  space-x-5 py-3 '>
  <li><img src={Image} alt='react icon' width={40} height={40}/>HTML</li>
  <li><img src={Image2} alt='react icon' width={40} height={40}/>Bootstrap</li>
  <li><img src={Image3} alt='react icon' width={40} height={40}/>CSS</li>
  <li><img src={Image4} alt='react icon' width={40} height={40}/>Flask</li>
  </ul>
  <ul className='flex items-center space-x-5 py-3'>
  <li><img src={Image5} alt='react icon' width={40} height={40}/>Python</li>
  <li><img src={Image6} alt='react icon' width={40} height={40}/>Jinja</li>
  <li><img src={Image7} alt='react icon' width={40} height={40}/>Postgresql</li>
  <li><img src={Image8} alt='react icon' width={40} height={40}/>SQLAlchemy</li>
</ul>

<div className='flex justify-evenly mt-12'>
<button onClick={() => window.open('https://be-a-barista-at-home.onrender.com/', '_blank')} className='flex-1 text-sm py-3 mr-3 py-3 bg-gradient-to-t from-purple-500 rounded-full to-blue-500 hover:from-purple-700 hover:to-blue-700'>
Live preview
</button>

<button onClick={() => window.open('https://github.com/serenkapanoglu/BeABaristaAtHome2', '_blank')} className='flex-1 text-sm py-3 py-3 border rounded-full hover:border-purple-500 hover:text-purple-500'>
Checkout github
</button>
</div>
</div>

<div style={{ border: '0.1px solid #854CE6', boxShadow:'rgba(23, 92, 230, 0.15) 0px 4px 24px;' }} className='border border rounded-md p-5'>
  <img src={Project3} className='w-full h-auto'/>
  <h3 className='text-2xl font-semibold mt-8'>Job Finder</h3>
  <p className='text-gray-400 text-sm mt-2'>The Job Finder App is a full-stack web application designed to streamline the job search process. Users can search and view different mock companies and jobs based on certain criteria, and 'apply' to those jobs with the click of a button.</p>
  <p className='mt-8 text-sm text-gray-700'>Tech Stack</p>
<ul className='flex items-center  space-x-5 py-3'>
  <li><img src={Image9} alt='react icon' width={40} height={40}/>React</li>
  <li><img src={Image2} alt='react icon' width={40} height={40}/>Bootstrap</li>
  <li><img src={Image7} alt='react icon' width={40} height={40}/>Postgresql</li>
  </ul>
  <ul className='flex items-center  space-x-5 py-3'>
  <li><img src={Image11} alt='react icon' width={40} height={40}/>NodeJS</li>
  <li><img src={Image12} alt='react icon' width={40} height={40}/>Express</li>
  <li><img src={Image13} alt='react icon' width={40} height={40}/>JWT</li>
  </ul>
  <div className='flex justify-evenly mt-12'>
<button onClick={() => window.open('https://jobfinder-n907.onrender.com/', '_blank')} className='flex-1 text-sm py-3 mr-3 bg-gradient-to-t from-purple-500 rounded-full to-blue-500 hover:from-purple-700 hover:to-blue-700'>
Live preview
</button>
<button onClick={() => window.open('https://github.com/serenkapanoglu/seren-job-searchh', '_blank')} className='flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>
Checkout github
</button>
</div>
</div>
  </div>
  <div className='flex flex-col sm:flex-row gap-10 mt-11'>
<div style={{ border: '0.1px solid #854CE6', boxShadow:'rgba(23, 92, 230, 0.15) 0px 4px 24px;' }} className='border border rounded-md p-5'>
<img src={Project1} className='w-full h-auto'/>
<h3 className='text-2xl font-semibold mt-8'>SerenNeDio?</h3>
<p className='text-gray-400 text-sm mt-2'>
Immerse yourself in a variety of JavaScript projects, from classic games like Memory, Meme Generator, Guess the Word and Connect Four to a dynamic Todo List and a weather app. Navigate through HTML, CSS, and Python quizzes in the Quiz section. Explore insightful articles on my homepage. Join me on this coding adventure! 🚀🌐</p>
<p className='mt-3 text-sm text-gray-700'>Tech Stack</p>
<ul className='flex items-center  space-x-5 py-3'>
  <li><img src={Image} alt='react icon' width={40} height={40}/>HTML</li>
  <li><img src={Image2} alt='react icon' width={40} height={40}/>Bootstrap</li>
  <li><img src={Image3} alt='react icon' width={40} height={40}/>CSS</li>
  </ul>
  <ul className='flex items-center  space-x-5 py-3'>
  <li><img src={Image15} alt='react icon' width={40} height={40}/>JavaScript</li>
  <li><img src={Image5} alt='react icon' width={40} height={40}/>Python</li>
  <li><img src={Image4} alt='react icon' width={40} height={40}/>Flask</li>
  </ul>
<div className='flex justify-evenly mt-12'>
<button onClick={() => window.open('https://javascript-collection.onrender.com/', '_blank')} className='flex-1 text-sm py-3 mr-3 py-3 bg-gradient-to-t from-purple-500 rounded-full to-blue-500 hover:from-purple-700 hover:to-blue-700'>
Live preview

</button>
<button onClick={() => window.open('https://github.com/serenkapanoglu/SerenNeDio', '_blank')} className='flex-1 text-sm py-3 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>
Checkout github

</button>
</div>
</div>


<div style={{ border: '0.1px solid #854CE6', boxShadow:'rgba(23, 92, 230, 0.15) 0px 4px 24px;' }} className='border border rounded-md p-5'>
  <img src={Project2} className='w-full h-auto'/>
  <h3 className='text-2xl font-semibold mt-8'>Jenny Made It</h3>
  <p className='text-gray-400 text-sm mt-2'>Jenny Made It is a jewelry ecommerce website built using React. This project allows users to explore and purchase various jewelry items with features such as filtering by metal type, adding items to the cart, and viewing order details. Users can filter jewelry items by metal type - Gold, Silver, and Rose. Users can add items to their shopping cart, view order details, and adjust the quantity of items. Users can see the item's details.</p>
  <p className='mt-5 text-sm text-gray-700'>Tech Stack</p>
<ul className='flex items-center  space-x-5 py-3'>
  <li><img src={Image9} alt='react icon' width={40} height={40}/>React</li>
  <li><img src={Image3} alt='react icon' width={40} height={40}/>CSS</li>
  </ul>
  <div className='flex justify-evenly mt-20 '>
<button onClick={() => window.open('https://jenny-made-it.vercel.app/', '_blank')} className='flex-1 text-sm py-3 mr-3 py-3 bg-gradient-to-t from-purple-500 rounded-full to-blue-500 hover:from-purple-700 hover:to-blue-700'>
Live preview

</button>
<button onClick={() => window.open('https://github.com/serenkapanoglu/Ecommerce-REACT', '_blank')} className='flex-1 text-sm py-3 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500'>
Checkout github

</button>
</div>
</div>
</div>
</div>
</section>

{/* Tech Section */}
  <section id="tech" className='mt-12'>
  <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
       
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  </section>
  

  <section className="py-8" id="aboutme">
          <div className="container m-auto px-4 sm:py-12">
          <h2 style={{ textAlign:'center', fontSize:'42px'}} className='text-2xl font-semibold'>About Me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
                <p>
                Started college at Ankara University, focusing on Computer Science.
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                Initiated an internship at Valensas, gaining experience in JavaScript and APIs.
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p>
                Became more interested in web development and decided to take a course. Obtained a Frontend Development certification from Neo's Software Inc., delving deeper into web development.
                  <a style = {{ color:'red'}}  href='https://drive.google.com/file/d/1D_EdXKZGKWmKUzRXsRsSq9nBI1OAV474/view?usp=sharing'> (Click to See the Certificate)</a>
                </p>
              </div>
              
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                Relocated to the United States.
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2022</h3>
                <p>
                Earned a Udemy certification in JavaScript, intensifying exploration of the language.
                <a style = {{ color:'red'}}  href='https://www.udemy.com/certificate/UC-b02a6a47-eccb-4839-91a9-8cc7c0d35442/'> (Click to See the Certificate)</a>
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                Enrolled in a full-stack software engineering bootcamp, enhancing coding skills.
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                Acquired a React Redux certification from Udemy.
                <a style = {{ color:'red'}}  href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-836766dc-8cbc-46e7-a674-f29b54f87901.pdf'> (Click to See the Certificate)</a>
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                Commenced an internship at Aonverse, refining TypeScript, React, and backend skills.
                </p>
              </div>
              <div className="pl-24 mt-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p>
                Graduated with honors from the bootcamp, accumulating 800+ hours of hands-on course material, completing 4 in-depth portfolio projects, and building 122 applications.
                <a style = {{ color:'red'}}  href='https://pdf.credential.net/6dnuhf9p_1707241781862.pdf'> (Click to See the Certificate)</a>
                </p>
              </div>
             
            </div>
          </div>
        </section>


        <section className="bg-dark_primary text-white" id='contactme'>
  {/* Contact Me Section */}
  <div>
  {showSuccessMessage && (
        <SuccessMessage>Email sent successfully!</SuccessMessage>
      )}
  <div className="md:container px-5 py-14 m-auto">
  <h2 style={{ textAlign:'center', fontSize:'42px'}} className='text-2xl font-semibold'>Contact Me</h2>
    <div className="flex gap-10 md:flex-row flex-col">
  <form className="flex-1 flex flex-col gap-5"
  ref={form}
   onSubmit={sendEmail}>

      <label className='mt-5'>Name</label>
      <input style={{ color:'black' }} className="border border-slate-600 p-3 rounded" type="text" name="user_name" />
      <label>Email</label>
      <input style={{ color:'black' }} className="border border-slate-600 p-3 rounded" type="email" name="user_email" />
      <label>Message</label>
      <textarea style={{ color:'black' }} className="border border-slate-600 p-3 rounded h-44" name="message" />
      <button style={{ color:'black', fontSize:'16px'}} className="btn self-start bg-white px-10 py-1 rounded hover:scale-105 duration-300">Send</button>
    </form>
    </div>
    </div>
    </div>
</section>

<hr></hr>
<footer style={{ textAlign: 'center' }} className='text-sm text-white mt-4'>
      <div><i>@Copyright | 2024</i></div>
      <div className='mt-2'><i>Designed by Gulseren Kapanoglu</i></div>
      <div className='flex items-center justify-center m-2'>
        <CiMail />
        <i className='ml-2'>kapanogluseren01@gmail.com</i>
      </div>
    </footer>
</main>




</>
)
}

export default App
