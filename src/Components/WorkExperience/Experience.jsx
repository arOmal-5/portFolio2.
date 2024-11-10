import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="max-w-sm p-6 shadow-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      {/* Work Experience Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Work Experience
        </h3>

        {/* Experience Item 1 */}
        <div className="flex items-start mt-4 gap-4">
          {/* Date and Logo */}
          <div className="flex flex-col items-center gap-2 w-32 flex-shrink-0">
            <img
               src="https://media.licdn.com/dms/image/v2/C4E0BAQE2OnMj2h5xfA/company-logo_200_200/company-logo_200_200/0/1631326044427?e=2147483647&v=beta&t=tTS_1ZHQfjC1OKmfBwVYNVIpfJI55YMUsU3Pk_ZwBJk"
              alt="Hyundai Logo"
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              Apr 2022 - <br />
              Jun 2023
            </p>
          </div>
          <div>
            {/* Company Name and Position */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Hyundai Motor Limited India
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Quality Controller
            </p>
          </div>
        </div>
        {/* Experience Item 2 */}
        <div className="flex items-start mt-4 gap-4">
          {/* Date and Logo */}
          <div className="flex flex-col items-center gap-2 w-32 flex-shrink-0">
            <img
              src="https://cloud-1de12d.b-cdn.net/media/iW=260&iH=254&oX=2&oY=0&cW=256&cH=254/456b0bb397d9128465a5e8b5a15b77f7/IHDCBlackRound.png"
              alt="IHDC Logo"
              className="w-12 h-12 object-contain"
            />
            <p className="text-sm text-gray-600 font-semibold dark:text-gray-400">
              Feb 2024 - <br />
              Jun 2024
            </p>
          </div>
          <div>
            {/* Company Name and Position */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              IHDC Building Systems Private Limited
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              Associate Front-end Developer
            </p>
          </div>
        </div>

        {/* Experience Item 3 */}
        <div className="flex items-start mt-4 gap-4">
          {/* Date and Logo */}
          <div className="flex flex-col items-center gap-2 w-32 flex-shrink-0">
            <img
              src="https://riod.in/wp-content/uploads/2023/03/RIOD-Logic_Logo_TM.png"
              alt="Riod Logic Logo"
              className="w-16 h-16 object-contain"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nov 2024 - <br />
            </p>
          </div>
          <div>
            {/* Company Name and Position */}
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              RIOD LOGIC AND RND SQUARE
            </h4>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
              MERN Stack Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
