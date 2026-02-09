"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CounterTs;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function CounterTs() {
    const [count, setCount] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [" Count: ", count] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setCount(count + 1), children: "Increment" })] }));
}
//# sourceMappingURL=Counter.js.map