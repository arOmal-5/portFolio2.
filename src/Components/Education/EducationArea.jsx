import React from 'react';

const EducationArea = () => {
  return (
    <div className="max-w-sm p-6 shadow-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* Education Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>

        {/* Education Item 1 */}
        <div className="flex items-start mt-4 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">
            Jun 2024 - <br />
            Jun 2027
          </p>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Bachelor Of Computer Application (BCA)
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Indira Gandhi Open University
            </p>
          </div>
        </div>

        {/* Education Item 2 */}
        <div className="flex items-start mt-4 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">
            Jun 2023 - <br />
            Jan 2024
          </p>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              MERN Stack Development Course
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Luminar Technolab
            </p>
          </div>
        </div>

        {/* Education Item 3 */}
        <div className="flex items-start mt-4 gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">
            April 2018 - <br />
            Jun 2021
          </p>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Diploma in Mechanical Engineering
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              First class with distinction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationArea;
