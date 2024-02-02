import React, { Fragment } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Popover, Transition, Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import SearchInputBox from "../searchInput/SearchInputBox";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="pr-4 pt-3 pb-[1.7rem] flex justify-between items-center text-sm h-fit">
      <SearchInputBox
        placeholder="Search..."
        height={2.3}
        width={24}
        iconFontSize={20}
      />
      <div className="flex items-center gap-2 mr-2">
        {/* <div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100 rounded-full p-2",
                    "flex items-center hover:text-opacity-100 focus:outline-none active:bg-gray-100 p-2 rounded-full"
                  )}
                >
                  <span>
                    <IoIosNotificationsOutline fontSize={20} />
                  </span>
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
                  <Popover.Panel className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="flex flex-col text-sm pl-2 pr-2 pt-2 gap-1">
                      <strong>Notifications</strong>
                    </div>
                    <div className="flex flex-col text-sm p-2 gap-1 divide-y divide-gray-100">
                      <p>I'll notify you later</p>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div> */}

        <div>
          <Link className="text-black hover:no-underline font-semibold">Admin</Link>
        </div>

        <div>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center ">
                Profile
                <IoChevronDown
                  className=" ml-[2px] mt-1 h-4 w-4"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-10">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "" : "text-gray-900"
                        } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => navigate("/profile")}
                      >
                        {active ? (
                          <MdOutlineEdit
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <MdOutlineEditOff
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        Update Profile
                      </button>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "" : "text-gray-900"
                        } flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <TbLogout2
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <TbLogout
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
