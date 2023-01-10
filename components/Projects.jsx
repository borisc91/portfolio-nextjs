import React from "react";
import YouTube from "react-youtube";



function Projects() {
  const opts = {
    height: "390",
    width: "640",
    origin: 'http://localhost:3000' ,
      host: 'https://www.youtube.com',
    playerVars: {
      autoplay: 0,
      origin: 'https://localhost:3000' ,
      host: 'https://www.youtube.com'
            
      
    },
  };

  const builtProjects = [
    {
      id: 1,
      title: "Drone eCommerce",
      description:
        "I created a drone web shop using useState, useReducer, useEffect, ContextApi, Firebase API Backend, Firebase REST API Authentication for loggin and Sass. Worked with session storage and local storage. It has a cart modal created with React Portals.",
      youtubeId: "uaSZCcoze8A",
      technologies: [
        "React",
        "Authentication",
        "ContextAPI",
        "Firebase REST Api",
        
        "Sass",
      ],
      projectCodeLink: "https://github.com/borisc91/Drone-eCommerce",
      projectLink: "https://ecommercedrone-boris.netlify.app/",
    },
    {
      id: 2,
      title: "Connect Four",
      description:
        "I built Connect Four game in React as a part of FrontEndMentor.io challenge. I built winning logic(4 in a row, column or diagonal), timer logic, and used Sass for design.",
      youtubeId: "s9xjSTK4mRk",
      technologies: ["React", "Sass"],
      projectCodeLink: "https://github.com/borisc91/ConnectFour",
      projectLink: "https://connectfour-borisc91.netlify.app/",
    },
    {
      id: 3,
      title: "To Do List(Drag-n-Drop)",
      description:
        "This is a basic To Do app with drag and drop feature. I also used Sass for styling and I added a few more options to clear finished items, and to see only active or only finished tasks.",
      youtubeId: "tw-7Vpesnr8",
      technologies: ["React", "Sass", "Context API"],
      projectCodeLink: "https://github.com/borisc91/To-Do",
      projectLink: "https://todo-borisc91.netlify.app/",
    },
    {
      id: 4,
      title: "Calculator",
      description:
        "This is calculator with basic options made in vanilla java script. This project was challenging back when I first started to code and it shows the thinking process. It's neccessary to know basic JS before getting into React. That's why I'm showing this project here.",
      youtubeId: "TdX6aLtFwls",
      technologies: ["Java Script"],
      projectCodeLink: "https://github.com/borisc91/calculator-vanilla-js",
      projectLink: "https://calculator-borisc91.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="w-full  p-2 mt-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full mt-14">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>

        {builtProjects.map((project, index) => {
            return (
        
             <div key={project.id} className="grid grid-cols-1 gap-y-20 lg:grid-cols-2   mt-14">
            <div className="mx-auto mt-6 flex flex-col justify-start h-full">
              <h3>{project.title}</h3>
              <div className="mb-4 mt-6">
                {project.technologies.map((buttonText, index) => {
                   
               return (
                   <button key={index} className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-2 py-0.5 mr-2 hover:scale-105 ease-in duration-300">
                    {buttonText}
                  </button> 
               );
               })}
              </div>
              <div className="my-2 w-[70%]">
                <p className="text-lg">{project.description}</p>
              </div>
              <div className="mt-4">
                <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={project.projectLink} className="bg-transparent hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] text-blue-700 font-semibold hover:text-white mr-2 py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                  See Live
                </a>
                <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={project.projectCodeLink}
                          
                         className="bg-transparent hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] text-blue-700 font-semibold hover:text-white mr-2 py-1 px-4 border border-blue-500 hover:border-transparent rounded">
                  Source Code
                </a>
              </div>
            </div>
            <div>
              <YouTube
                className="mt-11"
                videoId={project.youtubeId}
                opts={opts}
              />
            </div>
          </div> 
        );
        })}
      </div>
    </div>
  );
}

export default Projects;


