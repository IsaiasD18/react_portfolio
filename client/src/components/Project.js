import React, { useState, useEffect } from 'react';
import Flexfit from '../images/flexfit.png';
import MixMate from '../images/mixmate.png';
import Jate from '../images/jate.jpeg';
import Notes from '../images/notes.jpeg';
import Scheduler from '../images/scheduler.jpeg';
import Password from '../images/password.jpeg';

function Project() {
  const [project, setProject] = useState([]);

  const projects = [
    {
      title: 'Flexfit',
      image: Flexfit,
      description: "The main purpose of the application is...",
      link: 'https://github.com/Reyesfrancisp/FlexFit_Fitness_App',
      deployed: 'https://reyesfrancisp.github.io/FlexFit_Fitness_App/'
    },
    {
      title: 'Jate',
      image: Jate,
      description: "The main purpose of the application is...",
      link: 'https://github.com/IsaiasD18/PWA',
      deployed: 'https://sleepy-dawn-64785-b6af0c0c9895.herokuapp.com/'
    },
    {
      title: 'Notes',
      image: Notes,
      description: 'The main purpose of the application is...',
      link: 'https://github.com/IsaiasD18/note_taker',
      deployed: 'https://github.com/IsaiasD18/note_taker'
    },
    {
      title: 'Work Day Schedules',
      image: Scheduler,
      description: 'The main purpose of the application is...',
      link: 'https://github.com/IsaiasD18/work_day_scheduler',
      deployed: 'https://isaiasd18.github.io/work_day_scheduler/'
    },
    {
      title: 'Password Generator',
      image: Password,
      description: 'The main purpose of the application is...',
      link: 'https://github.com/IsaiasD18/password_creator',
      deployed: 'https://isaiasd18.github.io/password_creator/ '
    },
    {
      title: 'MixMate',
      image: MixMate,
      description: 'ApplicThe main purpose of the application is...ation',
      link: 'https://github.com/ThomasSzentirmay/MixMate-App',
      deployed: 'https://mixmatecocktails-1b7d39db7409.herokuapp.com/'
    },
  ];

  useEffect(() => {
    setProject(projects);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl font-extrabold text-white mt-10">Projects</h1>
        <div className="mt-6 flex-grow mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.map(item => (
              <div key={item.title} className="bg-white overflow-hidden shadow rounded-lg">
                <img
                  className="h-48 w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className='px-4 py-4 flex flex-col'>
                  <h3 className="text-lg font-medium text-green-800">{item.title}</h3>
                  <p className="mt-1 text-sm text-yellow-500 truncate">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Learn more
                  </a>
                  <a
                    href={item.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Deployed App
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
