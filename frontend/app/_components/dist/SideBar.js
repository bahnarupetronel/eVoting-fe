"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../stylesheets/index.css");
require("../stylesheets/sidebar.css");
var react_cookie_1 = require("react-cookie");
function dropdown() {
    var submenu = document.querySelector("#submenu");
    submenu === null || submenu === void 0 ? void 0 : submenu.classList.toggle("hidden"); //.classList.toggle("hidden");
    var arrow = document.querySelector("#submenu");
    arrow === null || arrow === void 0 ? void 0 : arrow.classList.toggle("rotate-0"); //.classList.toggle("rotate-0");
}
function openSidebar() {
    //document.querySelector(".sidebar").classList.toggle("hidden");
    var sidebar = document.querySelector(".sidebar");
    sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle("hidden"); //.classList.toggle("rotate-0");
}
var SideBar = function () {
    var _a = react_cookie_1.useCookies(["name"]), cookies = _a[0], setCookie = _a[1], removeCookie = _a[2];
    var name = null;
    setCookie("name", name, { path: "/" });
    return (react_1["default"].createElement("div", { className: "bg-blue-600 bar-index" },
        react_1["default"].createElement("span", { className: "absolute text-white text-4xl top-5 left-4 cursor-pointer", onClick: function () {
                openSidebar();
            } },
            react_1["default"].createElement("i", { className: "bi bi-filter-left px-2 bg-gray-900 rounded-md" })),
        react_1["default"].createElement("div", { className: "sidebar hidden fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900" },
            react_1["default"].createElement("div", { className: "text-gray-100 text-xl" },
                react_1["default"].createElement("div", { className: "p-2.5 mt-1 flex items-center" },
                    react_1["default"].createElement("i", { className: "bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" }),
                    react_1["default"].createElement("h1", { className: "font-bold text-gray-200 text-[15px] ml-3" }, "e-Voting"),
                    react_1["default"].createElement("i", { className: "bi bi-x cursor-pointer ml-28 ", onClick: function () {
                            openSidebar();
                        } })),
                react_1["default"].createElement("div", { className: "my-2 bg-gray-600 h-[1px]" })),
            react_1["default"].createElement("div", { className: "p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white" },
                react_1["default"].createElement("i", { className: "bi bi-search text-sm" }),
                react_1["default"].createElement("input", { type: "text", placeholder: "Search", className: "text-[15px] ml-4 w-full bg-transparent focus:outline-none" })),
            react_1["default"].createElement("div", { className: "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" },
                react_1["default"].createElement("i", { className: "bi bi-house-door-fill" }),
                react_1["default"].createElement("span", { className: "text-[15px] ml-4 text-gray-200 font-bold" }, "Home")),
            react_1["default"].createElement("div", { className: "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" },
                react_1["default"].createElement("i", { className: "bi bi-bookmark-fill" }),
                react_1["default"].createElement("span", { className: "text-[15px] ml-4 text-gray-200 font-bold" }, "History")),
            react_1["default"].createElement("div", { className: "my-4 bg-gray-600 h-[1px]" }),
            react_1["default"].createElement("div", { className: "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white", onClick: function () {
                    dropdown();
                } },
                react_1["default"].createElement("i", { className: "bi bi-chat-left-text-fill" }),
                react_1["default"].createElement("div", { className: "flex justify-between w-full items-center" },
                    react_1["default"].createElement("span", { className: "text-[15px] ml-4 text-gray-200 font-bold" }, "Chatbox"),
                    react_1["default"].createElement("span", { className: "text-sm rotate-180", id: "arrow" },
                        react_1["default"].createElement("i", { className: "bi bi-chevron-down" })))),
            react_1["default"].createElement("div", { className: "text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold", id: "submenu", onClick: openSidebar },
                react_1["default"].createElement("h1", { className: "cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1" }, "Social"),
                react_1["default"].createElement("h1", { className: "cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1" }, "Personal"),
                react_1["default"].createElement("h1", { className: "cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1" }, "Friends")),
            cookies.name === "null" ? (react_1["default"].createElement("a", { href: "/login" },
                react_1["default"].createElement("div", { className: "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" },
                    react_1["default"].createElement("i", { className: "bi bi-box-arrow-in-left" }),
                    react_1["default"].createElement("span", { className: "text-[15px] ml-4 text-gray-200 font-bold" }, "Login")))) : (react_1["default"].createElement("a", { href: "/logout" },
                react_1["default"].createElement("div", { className: "p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" },
                    react_1["default"].createElement("i", { className: "bi bi-box-arrow-in-right" }),
                    react_1["default"].createElement("span", { className: "text-[15px] ml-4 text-gray-200 font-bold" }, "Logout")))))));
};
exports["default"] = SideBar;
