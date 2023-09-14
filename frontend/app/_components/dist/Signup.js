"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Label_1 = require("./Form/Label");
var LabelPhone_1 = require("./Form/LabelPhone");
var SignUp = function () {
    var _a = react_1.useState({
        "first-name": String,
        "last-name": String,
        "address": String,
        "phone": String,
        "email": String,
        "password": String,
        "confirm-password": String
    }), res = _a[0], setResponse = _a[1];
    return (react_1["default"].createElement("div", { className: "bg-gray-50 flex flex-col justify-center min-h-screen" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center p-6 m-auto w-9/12 md:w-6/12 lg:w-6/12" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("a", { href: "/" },
                    react_1["default"].createElement("h3", { className: "text-4xl font-bold text-purple-600" }, "Logo"))),
            react_1["default"].createElement("div", { className: "w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg" },
                react_1["default"].createElement("form", { autoComplete: "off" },
                    react_1["default"].createElement(Label_1["default"], { title: "First Name", type: "text", htmlFor: "first-name", setResponse: setResponse }),
                    react_1["default"].createElement(Label_1["default"], { title: "Last Name", type: "text", htmlFor: "last-name", setResponse: setResponse }),
                    react_1["default"].createElement(Label_1["default"], { title: "Address", type: "text", htmlFor: "address", setResponse: setResponse }),
                    react_1["default"].createElement(LabelPhone_1["default"], { title: "Phone", htmlFor: "phone", output: "" }),
                    react_1["default"].createElement(Label_1["default"], { title: "Email", type: "text", htmlFor: "email", setResponse: setResponse }),
                    react_1["default"].createElement(Label_1["default"], { title: "Password", type: "password", htmlFor: "password", setResponse: setResponse }),
                    react_1["default"].createElement(Label_1["default"], { title: "Confirm Password", type: "password", htmlFor: "confirm-password", setResponse: setResponse }),
                    react_1["default"].createElement("div", { className: "flex items-center justify-end mt-2" },
                        react_1["default"].createElement("a", { className: "text-sm text-purple-600 hover:underline", href: "/login" }, "Already registered?"),
                        react_1["default"].createElement("button", { type: "submit", className: "inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-purple-700 border border-transparent rounded-md active:bg-gray-900 false" }, "Register")))))));
};
exports["default"] = SignUp;
