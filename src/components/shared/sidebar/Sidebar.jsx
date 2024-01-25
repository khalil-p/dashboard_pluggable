import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import classNames from "classnames";
import logo from "../../../assets/images/logo1.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/constants/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

import Submenu from "./Submenu";
const linkClases =
  "flex items-center gap-2 font-medium pl-3 py-2 hover:bg-neutral-400 hover:no-underline hover:text-[#fff] active:bg-netral-600 rounded-sm text-base";
function Sidebar() {
  return (
    <>
      <div className="bg-[#fff]  p-3 flex flex-col text-white z-[999] max-w-96 w-96 ">
        <div className="flex items-center justify-center px-1 pb-3">
          <img className="w-12" src={logo} alt="" />
        </div>
        <div className="flex-1 py-4 flex flex-col gap-0.5 overflow-scroll scrollbar ">
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
            pathname === item.path ? "text-white bg-neutral-700" : "text-black",
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
            subMenuOpen
              ? {
                  display: "block",
                }
              : {
                  display: "none",
                }
          }
          transition={{ type: "spring", duration: 0.5 }}
        >
          {item.hasSubMenu && <Submenu mainMenuName={item.label} />}
        </motion.div>
      </div>
    </>
  );
}

export default Sidebar;
