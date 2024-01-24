import React, { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Popover, Transition } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Header() {
  return (
    <div className="h-14 px-4 bg-[#fff] flex justify-between items-center">
      <div className="relative">
        <CiSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none h-8 w-[28rem] border-gray-300 border rounded-sm px-3 pl-10"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <IoIosNotificationsOutline fontSize={20} />

        <div>
          <Link className="text-black hover:no-underline">Admin</Link>
        </div>
        <div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100",
                    "flex items-center hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                  )}
                >
                  <span>Profile</span>
                  <IoChevronDown
                    fontSize={15}
                    className="mt-[3px]"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 1-10 mt-2.5 w-28">
                    <div className="flex flex-col text-sm bg-gray-200 p-2 gap-1">
                      <Link to="">View Profile</Link>
                      <Link to="">Update</Link>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;
