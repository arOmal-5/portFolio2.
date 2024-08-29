import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="max-w-sm p-6 shadow-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* Work Experience Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Work Experience</h3>

        {/* Experience Item 1 */}
        <div className="flex items-start mt-4 gap-4">
          {/* Date */}
          <p className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">
            Feb 2024 - <br />
            Jun 2024
          </p>
          <div>
            {/* Company Name and Position */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              IHDC Building Systems Private Limited
            </h4>
            {/* Position */}
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Associate Front-end Developer
            </p>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="flex items-start mt-4 gap-4">
          {/* Date */}
          <p className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">
            Apr 2022 - <br />
            Jun 2023
          </p>
          <div>
            {/* Company Name and Position */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Hyundai Motor Limited India
            </h4>
            {/* Position */}
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Quality Controller
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
