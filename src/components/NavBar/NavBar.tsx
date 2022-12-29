import React from "react";
import Logo from "../Logo/Logo";
import "../NavBar/NavBar.css";

import Candidates from "../../assets/candidates.svg";
import Briefcase from "../../assets/briefcase.svg";
import Globe from "../../assets/globe.svg";
import Mail from "../../assets/mail.svg";
import User from "../../assets/user.svg";
import NavigationIcon from "../NavigationIcon/NavigationIcon";

const navOptions = [
  {
    name: "Candidates",
    icon: Candidates,
  },
  {
    name: "Companies",
    icon: Globe,
  },
  {
    name: "Jobs",
    icon: Briefcase,
  },
  {
    name: "Notifications",
    icon: Mail,
  },
  {
    name: "User Name",
    icon: User,
  },
];

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="NavContainer">
      <Logo />
      <div className="nav-icons-wrapper">
        {navOptions.map((single) => (
          <NavigationIcon iconSrc={single.icon} iconText={single.name} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
