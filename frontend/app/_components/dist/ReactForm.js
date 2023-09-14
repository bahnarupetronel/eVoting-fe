"use strict";
exports.__esModule = true;
require("react-phone-number-input/style.css");
var react_phone_number_input_1 = require("react-phone-number-input");
var react_1 = require("react");
var ReactForm = function () {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    var _a = react_1.useState(), value = _a[0], setValue = _a[1];
    return (react_1["default"].createElement(react_phone_number_input_1["default"], { placeholder: "Enter phone number", value: value, onChange: function () { return setValue; } }));
};
exports["default"] = ReactForm;
