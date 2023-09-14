"use strict";
exports.__esModule = true;
/* eslint-disable react/no-unescaped-entities */
var react_1 = require("react");
var Login = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-col justify-center min-h-screen " },
        react_1["default"].createElement("div", { className: "p-6 m-auto bg-white rounded-md shadow-md w-9/12 md:w-6/12 lg:w-6/12" },
            react_1["default"].createElement("h1", { className: "text-3xl font-semibold text-center text-purple-700 underline" }, "Sign in"),
            react_1["default"].createElement("form", { className: "mt-6" },
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-semibold text-gray-800" }, "Email"),
                    react_1["default"].createElement("input", { type: "email", className: "block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" })),
                react_1["default"].createElement("div", { className: "mb-2" },
                    react_1["default"].createElement("label", { htmlFor: "password", className: "block text-sm font-semibold text-gray-800" }, "Password"),
                    react_1["default"].createElement("input", { type: "password", className: "block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" })),
                react_1["default"].createElement("a", { href: "/", className: "text-xs text-purple-600 hover:underline" }, "Forget Password?"),
                react_1["default"].createElement("div", { className: "mt-6" },
                    react_1["default"].createElement("button", { className: "w-full px-4 py-2  text-white transition-colors duration-200  bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" }, "Login"))),
            react_1["default"].createElement("p", { className: "mt-8 text-xs font-light text-center text-gray-700" },
                " ",
                "Don't have an account?",
                " ",
                react_1["default"].createElement("a", { href: "/signup", className: "font-medium text-purple-600 hover:underline" }, "Sign up")))));
};
exports["default"] = Login;
