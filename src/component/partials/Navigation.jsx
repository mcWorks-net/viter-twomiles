import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMicrosoft } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { LiaToolsSolid } from "react-icons/lia";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdGroups2 } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

const Navigation = ({ menu, submenu }) => {
  const [settingDropdown, setSettingDropdown] = useState(false);
  const handleSettingDropdown = () => setSettingDropdown(!settingDropdown);

  return (
    <>
      <nav className="py-4 bg-tm-gradient max-h-full min-h-full h-[calc(100vh_-_66px)] lg:h-[70vh] overflow-y-auto custom__scroll">
        <ul>
          <li className="nav__link">
            <Link to="">
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li className="nav__link">
            <Link href="">
              <LiaToolsSolid />
              Tools
            </Link>
          </li>
          <li className="nav__link">
            <Link href="">
              <AiOutlineFieldTime />
              Time Entry
            </Link>
          </li>
          <li className="nav__link">
            <Link href="">
              <BsFillPersonLinesFill /> Staff
            </Link>
          </li>
          <li className="nav__link">
            <Link href="">
              <MdGroups2 />
              Client
            </Link>
          </li>
          <li
            className={menu === "settings" ? "nav__link active" : "nav__link"}
          >
            <button onClick={handleSettingDropdown}>
              <FiSettings />
              Settings
            </button>
            {settingDropdown && (
              <ul className="ml-9">
                <li>
                  <Link to="#" className="dropdown__link">
                    Access Level
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className={
                      submenu === "users"
                        ? "dropdown__link active"
                        : "dropdown__link"
                    }
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Activities
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Rates
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Engagements
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Offices
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown__link">
                    Entities
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
