import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import classNames from "classnames";
import logo from "../../../assets/images/logo1.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/constants/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

import Submenu from "./Submenu";
const linkClases =
  "flex items-center gap-2 font-medium text-sm pl-3 py-2 hover:bg-white hover:no-underline hover:rounded-xl hover:text-sky-500 active:bg-netral-600 rounded-sm text-base";
function Sidebar() {
  return (
    <>
      <div className="p-3 flex flex-col text-white z-[999] min-w-[16rem] w-[16rem] ">
        <div className="flex items-center justify-center px-1 pb-3">
          <img className="w-12" src={logo} alt="" />
        </div>
        <div className="overflow-x-hidden  pr-4 flex-1 py-4 flex flex-col gap-0.5 overflow-scroll  overflow-y-auto">
          {DASHBOARD_SIDEBAR_LINKS.map((item) => (
            <SidebarLinks key={item.key} item={item} />
          ))}
        </div>
        <div className={classNames("text-red-500 cursor-pointer", linkClases)}>
          <span className="text-xl">
            <RiLogoutCircleLine />
          </span>
          Logout
        </div>
      </div>
    </>
  );
}

function SidebarLinks({ item }) {
  const { pathname } = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <>
      <div>
        <Link
          to={item.path}
          className={classNames(
            pathname === item.path ? "text-sky-500 bg-white rounded-xl" : "text-black",
            linkClases
          )}
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <span className="text-xl">{item.icon}</span>
          {item.label}
        </Link>
        <motion.div
          className="hidden"
          animate={
            { x: 100 } &&
            subMenuOpen
              ? {
                  display: "block",
                }
              : {
                  display: "none",
                }
          }

        >
          {item.hasSubMenu && <Submenu mainMenuName={item.label} />}
        </motion.div>
      </div>
    </>
  );
}

export default Sidebar;
