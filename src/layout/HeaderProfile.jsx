import React from "react";
import IconButton from "../reusables/IconButton";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const HeaderProfile = () => {
  const color = {
    color: "blueviolet",
  };
  const icons = [
    <QuestionAnswerOutlinedIcon sx={color} />,
    <NotificationsOutlinedIcon sx={color} />,
    <SettingsOutlinedIcon sx={color} />,
  ];
  return (
    <div className="profileWrapper">
      <div className="flagWrapper">
        <img src="./assets/flags/us.jpeg" className="flag" />
      </div>
      <div className="btnsWrapper">
        {icons.map((icon, i) => {
          return <IconButton icon={icon} key={i} />;
        })}
      </div>
      <div className="profileImgContainer">
        <img src="./assets/flags/profile.jpeg" className="flag" />
      </div>
    </div>
  );
};

export default HeaderProfile;
