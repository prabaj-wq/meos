import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../utils/general";
import Battery from "../shared/Battery";
import "./taskbar.scss";

const Taskbar = () => {
  return (
    <div className="taskbar-linux">
      <div className="start-menu">
        <img src="/linux-logo.png" alt="Start" className="start-icon" />
      </div>
      <div className="taskbar-apps">
        {/* App icons */}
      </div>
      <div className="system-tray">
        <div className="tray-time">{new Date().toLocaleTimeString()}</div>
        <div className="tray-icons">
          {/* System tray icons */}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
