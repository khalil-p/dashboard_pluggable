import React from "react";
import { SUB_MENU_LIST } from "../../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const linkClases =
  "flex items-center gap-2 font-medium text-sm pl-3 py-2 mt-[0.125rem] mb-[0.125rem] hover:bg-white hover:rounded-xl hover:text-sky-500 hover:no-underline active:bg-netral-600 rounded-sm text-base border-left-2 border-gray-400";

function Submenu({ mainMenuName }) {
  console.log(mainMenuName);
  return (
    <div className="border-solid border-0 border-l border-gray-900 ml-5 pl-2">
      {SUB_MENU_LIST.map((item) => {
        return item.name === mainMenuName ? (
          <SubMenuList key={item.name} data={item.menus} />
        ) : undefined;
      })}
    </div>
  );
}
export default Submenu;

function SubMenuList({ data }) {
  console.log("SubMenuList Data:", data);

  const pathname = useLocation();

  return data.map((item) => (
    <Link
      key={item.key}
      to={item.path}
      className={classNames(
        pathname === item.path ? "text-primary bg-white" : "text-black",
        linkClases
      )}
    >
      {item.label}
    </Link>
  ));
}
