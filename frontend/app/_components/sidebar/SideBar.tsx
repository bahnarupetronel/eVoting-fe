import "./sidebar.css";
import { useCookies } from "react-cookie";

function dropdown() {
  const submenu = document.querySelector("#submenu");
  submenu?.classList.toggle("hidden"); //.classList.toggle("hidden");
  const arrow = document.querySelector("#submenu");
  arrow?.classList.toggle("rotate-0"); //.classList.toggle("rotate-0");
}

function openSidebar() {
  //document.querySelector(".sidebar").classList.toggle("hidden");
  const sidebar = document.querySelector(".sidebar");
  sidebar?.classList.toggle("hidden"); //.classList.toggle("rotate-0");
}

const SideBar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  const name: any = null;
  setCookie("name", name, { path: "/" });
  return (
    <div className="bg-blue-600 bar-index">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onClick={() => {
          openSidebar();
        }}
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div className="sidebar hidden fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              e-Voting
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 "
              onClick={() => {
                openSidebar();
              }}
            ></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            History
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={() => {
            dropdown();
          }}
        >
          <i className="bi bi-chat-left-text-fill"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Chatbox
            </span>
            <span className="text-sm rotate-180" id="arrow">
              <i className="bi bi-chevron-down"></i>
            </span>
          </div>
        </div>
        <div
          className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
          id="submenu"
          onClick={openSidebar}
        >
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Personal
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
            Friends
          </h1>
        </div>
        {cookies.name === "null" ? (
          <a href="/login">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-box-arrow-in-left"></i>

              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Login
              </span>
            </div>
          </a>
        ) : (
          <a href="/logout">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Logout
              </span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default SideBar;
