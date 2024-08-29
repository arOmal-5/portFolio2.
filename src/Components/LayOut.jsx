import React from 'react';
import NavBar from './NavBar/NavBar';
import MainProfile from './MainProfile/MainProfile';
import Experience from './WorkExperience/Experience';
import ExpertArea from './ExpertArea/ExpertArea';
import Projects from './Projects/Projects';
import EducationArea from './Education/EducationArea';
import Services from './Services/Services';

const LayOut = () => {
  return (
    <>
      <NavBar />
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-full  mt-4 flex flex-col sm:flex-row gap-4 px-4">
          {/* Left Column - Main Profile and Education Area */}
          <div className="flex flex-col gap-4 w-full sm:w-1/3">
            <MainProfile />
            <EducationArea />
          </div>

          {/* Right Column - Experience, Expert Area, Projects, Services */}
          <div className="flex flex-col gap-4 w-full sm:w-2/3">
            {/* Top Row - Experience and Expert Area */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col w-full sm:w-1/2 gap-4">
                <Experience />
                <ExpertArea />
              </div>
              {/* Right Column - Projects */}
              <div className="w-full sm:w-1/2">
                <Projects />
              </div>
            </div>
            {/* Bottom Row - Services */}
            <Services />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
