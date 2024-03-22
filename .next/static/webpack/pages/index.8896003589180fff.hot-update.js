"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layout/header/Offcanvas.tsx":
/*!****************************************************!*\
  !*** ./src/components/layout/header/Offcanvas.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var public_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/images/logo.png */ \"./public/images/logo.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Offcanvas = (param)=>{\n    let { openNav, setOpenNav } = param;\n    _s();\n    const [openSubMenu, setOpenSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [openNestedMenu, setOpenNestedMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmenu = (submenu)=>{\n        if (submenu === openSubMenu) {\n            setOpenSubMenu(null);\n        } else {\n            setOpenSubMenu(submenu);\n        }\n    };\n    const handleNestedmenu = (nestmenu)=>{\n        if (nestmenu === openNestedMenu) {\n            setOpenNestedMenu(null);\n        } else {\n            setOpenNestedMenu(nestmenu);\n        }\n    };\n    const isNestedMenuOpen = (nestmenu)=>{\n        return nestmenu === openNestedMenu ? \" nav__dropdown-active\" : \" \";\n    };\n    const isNestedMenuButton = (nestmenu)=>{\n        return nestmenu === openNestedMenu ? \" navbar__item-active\" : \" \";\n    };\n    const isSubMenuOpen = (submenu)=>{\n        return submenu === openSubMenu ? \" nav__dropdown-active\" : \" \";\n    };\n    const isSubMenuButton = (submenu)=>{\n        return submenu === openSubMenu ? \" navbar__item-active\" : \" \";\n    };\n    // window resize\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResizeHeader = ()=>{\n            setOpenNav(false);\n            setOpenSubMenu(null);\n        };\n        window.addEventListener(\"resize\", handleResizeHeader);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResizeHeader);\n        };\n    }, []);\n    const closeNav = ()=>{\n        setOpenNav(false);\n        setOpenSubMenu(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"offcanvas-nav\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"offcanvas-menu\" + (openNav ? \" show-offcanvas-menu\" : \" \"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"offcanvas-menu__wrapper\",\n                \"data-lenis-prevent\": true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"offcanvas-menu__header nav-fade\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"logo\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: public_images_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                        alt: \"Image\",\n                                        title: \"Image\",\n                                        priority: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"aria-label\": \"close offcanvas menu\",\n                                className: \"close-offcanvas-menu\",\n                                onClick: closeNav,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-light fa-xmark-large\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"offcanvas-menu__list\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"navbar__menu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"navbar__item nav-fade\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"about-us\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"navbar__item nav-fade\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"about-us\",\n                                            children: \"Home\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"offcanvas-menu__options nav-fade\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"offcanvas__mobile-options d-flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"contact-us\",\n                                className: \"btn btn--secondary\",\n                                children: \"Let's Talk\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"offcanvas-menu__social social nav-fade\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"https://www.facebook.com/\",\n                                target: \"_blank\",\n                                \"aria-label\": \"share us on facebook\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-facebook-f\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 111,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"https://www.twitter.com/\",\n                                target: \"_blank\",\n                                \"aria-label\": \"share us on twitter\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-twitter\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"https://www.pinterest.com/\",\n                                target: \"_blank\",\n                                \"aria-label\": \"share us on pinterest\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-linkedin-in\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 125,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"https://www.instagram.com/\",\n                                target: \"_blank\",\n                                \"aria-label\": \"share us on instagram\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa-brands fa-instagram\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\shahab\\\\web\\\\shahab-portfolio\\\\src\\\\components\\\\layout\\\\header\\\\Offcanvas.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Offcanvas, \"mrwpRHdVADgfA7Xmc97rWq0rLdw=\");\n_c = Offcanvas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Offcanvas);\nvar _c;\n$RefreshReg$(_c, \"Offcanvas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL09mZmNhbnZhcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ0Y7QUFDYTtBQU8xQyxNQUFNTSxZQUFZO1FBQUMsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQWU7O0lBQ3JELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFDOUQsTUFBTSxDQUFDVSxnQkFBZ0JDLGtCQUFrQixHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFFcEUsTUFBTVksZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLFlBQVlMLGFBQWE7WUFDM0JDLGVBQWU7UUFDakIsT0FBTztZQUNMQSxlQUFlSTtRQUNqQjtJQUNGO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3hCLElBQUlBLGFBQWFMLGdCQUFnQjtZQUMvQkMsa0JBQWtCO1FBQ3BCLE9BQU87WUFDTEEsa0JBQWtCSTtRQUNwQjtJQUNGO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNEO1FBQ3hCLE9BQU9BLGFBQWFMLGlCQUFpQiwwQkFBMEI7SUFDakU7SUFFQSxNQUFNTyxxQkFBcUIsQ0FBQ0Y7UUFDMUIsT0FBT0EsYUFBYUwsaUJBQWlCLHlCQUF5QjtJQUNoRTtJQUVBLE1BQU1RLGdCQUFnQixDQUFDTDtRQUNyQixPQUFPQSxZQUFZTCxjQUFjLDBCQUEwQjtJQUM3RDtJQUVBLE1BQU1XLGtCQUFrQixDQUFDTjtRQUN2QixPQUFPQSxZQUFZTCxjQUFjLHlCQUF5QjtJQUM1RDtJQUVBLGdCQUFnQjtJQUNoQlAsZ0RBQVNBLENBQUM7UUFDUixNQUFNbUIscUJBQXFCO1lBQ3pCYixXQUFXO1lBQ1hFLGVBQWU7UUFDakI7UUFFQVksT0FBT0MsZ0JBQWdCLENBQUMsVUFBVUY7UUFFbEMsT0FBTztZQUNMQyxPQUFPRSxtQkFBbUIsQ0FBQyxVQUFVSDtRQUN2QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1JLFdBQVc7UUFDZmpCLFdBQVc7UUFDWEUsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFDQ0MsV0FBVyxtQkFBb0JwQixDQUFBQSxVQUFVLHlCQUF5QixHQUFFO3NCQUVwRSw0RUFBQ3FCO2dCQUFJRCxXQUFVO2dCQUEwQkUsb0JBQWtCOztrQ0FDekQsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUN2QixrREFBSUE7b0NBQUMwQixNQUFLOzhDQUNULDRFQUFDM0IsbURBQUtBO3dDQUFDNEIsS0FBSzFCLDhEQUFJQTt3Q0FBRTJCLEtBQUk7d0NBQVFDLE9BQU07d0NBQVFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3hELDhEQUFDQztnQ0FDQ0MsY0FBVztnQ0FDWFQsV0FBVTtnQ0FDVlUsU0FBU1o7MENBRVQsNEVBQUNhO29DQUFFWCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1k7O2tEQUNDLDhEQUFDQzt3Q0FBR2IsV0FBVTtrREFDWiw0RUFBQ3ZCLGtEQUFJQTs0Q0FBQzBCLE1BQUs7c0RBQVc7Ozs7Ozs7Ozs7O2tEQUV4Qiw4REFBQ1U7d0NBQUdiLFdBQVU7a0RBQ1osNEVBQUN2QixrREFBSUE7NENBQUMwQixNQUFLO3NEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzlCLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUN2QixrREFBSUE7Z0NBQUMwQixNQUFLO2dDQUFhSCxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLM0QsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ3ZCLGtEQUFJQTtnQ0FDSDBCLE1BQUs7Z0NBQ0xXLFFBQU87Z0NBQ1BMLGNBQVc7MENBRVgsNEVBQUNFO29DQUFFWCxXQUFVOzs7Ozs7Ozs7OzswQ0FFZiw4REFBQ3ZCLGtEQUFJQTtnQ0FDSDBCLE1BQUs7Z0NBQ0xXLFFBQU87Z0NBQ1BMLGNBQVc7MENBRVgsNEVBQUNFO29DQUFFWCxXQUFVOzs7Ozs7Ozs7OzswQ0FFZiw4REFBQ3ZCLGtEQUFJQTtnQ0FDSDBCLE1BQUs7Z0NBQ0xXLFFBQU87Z0NBQ1BMLGNBQVc7MENBRVgsNEVBQUNFO29DQUFFWCxXQUFVOzs7Ozs7Ozs7OzswQ0FFZiw4REFBQ3ZCLGtEQUFJQTtnQ0FDSDBCLE1BQUs7Z0NBQ0xXLFFBQU87Z0NBQ1BMLGNBQVc7MENBRVgsNEVBQUNFO29DQUFFWCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0FoSU1yQjtLQUFBQTtBQWtJTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL09mZmNhbnZhcy50c3g/Mzg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgbG9nbyBmcm9tIFwicHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICBvcGVuTmF2OiBib29sZWFuO1xyXG4gIHNldE9wZW5OYXY6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgT2ZmY2FudmFzID0gKHsgb3Blbk5hdiwgc2V0T3Blbk5hdiB9OiBIZWFkZXJQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtvcGVuU3ViTWVudSwgc2V0T3BlblN1Yk1lbnVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW29wZW5OZXN0ZWRNZW51LCBzZXRPcGVuTmVzdGVkTWVudV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWVudSA9IChzdWJtZW51OiBzdHJpbmcpID0+IHtcclxuICAgIGlmIChzdWJtZW51ID09PSBvcGVuU3ViTWVudSkge1xyXG4gICAgICBzZXRPcGVuU3ViTWVudShudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW5TdWJNZW51KHN1Ym1lbnUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5lc3RlZG1lbnUgPSAobmVzdG1lbnU6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKG5lc3RtZW51ID09PSBvcGVuTmVzdGVkTWVudSkge1xyXG4gICAgICBzZXRPcGVuTmVzdGVkTWVudShudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE9wZW5OZXN0ZWRNZW51KG5lc3RtZW51KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpc05lc3RlZE1lbnVPcGVuID0gKG5lc3RtZW51OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXN0bWVudSA9PT0gb3Blbk5lc3RlZE1lbnUgPyBcIiBuYXZfX2Ryb3Bkb3duLWFjdGl2ZVwiIDogXCIgXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNOZXN0ZWRNZW51QnV0dG9uID0gKG5lc3RtZW51OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBuZXN0bWVudSA9PT0gb3Blbk5lc3RlZE1lbnUgPyBcIiBuYXZiYXJfX2l0ZW0tYWN0aXZlXCIgOiBcIiBcIjtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1N1Yk1lbnVPcGVuID0gKHN1Ym1lbnU6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHN1Ym1lbnUgPT09IG9wZW5TdWJNZW51ID8gXCIgbmF2X19kcm9wZG93bi1hY3RpdmVcIiA6IFwiIFwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzU3ViTWVudUJ1dHRvbiA9IChzdWJtZW51OiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBzdWJtZW51ID09PSBvcGVuU3ViTWVudSA/IFwiIG5hdmJhcl9faXRlbS1hY3RpdmVcIiA6IFwiIFwiO1xyXG4gIH07XHJcblxyXG4gIC8vIHdpbmRvdyByZXNpemVcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplSGVhZGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICBzZXRPcGVuTmF2KGZhbHNlKTtcclxuICAgICAgc2V0T3BlblN1Yk1lbnUobnVsbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZUhlYWRlcik7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplSGVhZGVyKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbG9zZU5hdiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5OYXYoZmFsc2UpO1xyXG4gICAgc2V0T3BlblN1Yk1lbnUobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzLW5hdlwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcIm9mZmNhbnZhcy1tZW51XCIgKyAob3Blbk5hdiA/IFwiIHNob3ctb2ZmY2FudmFzLW1lbnVcIiA6IFwiIFwiKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzLW1lbnVfX3dyYXBwZXJcIiBkYXRhLWxlbmlzLXByZXZlbnQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmNhbnZhcy1tZW51X19oZWFkZXIgbmF2LWZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGFsdD1cIkltYWdlXCIgdGl0bGU9XCJJbWFnZVwiIHByaW9yaXR5IC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZSBvZmZjYW52YXMgbWVudVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2Utb2ZmY2FudmFzLW1lbnVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTmF2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEtbGlnaHQgZmEteG1hcmstbGFyZ2VcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmNhbnZhcy1tZW51X19saXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyX19tZW51XCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdmJhcl9faXRlbSBuYXYtZmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiYWJvdXQtdXNcIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZiYXJfX2l0ZW0gbmF2LWZhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImFib3V0LXVzXCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2ZmY2FudmFzLW1lbnVfX29wdGlvbnMgbmF2LWZhZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvZmZjYW52YXNfX21vYmlsZS1vcHRpb25zIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJjb250YWN0LXVzXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi0tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICBMZXQmYXBvcztzIFRhbGtcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9mZmNhbnZhcy1tZW51X19zb2NpYWwgc29jaWFsIG5hdi1mYWRlXCI+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIlxyXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNoYXJlIHVzIG9uIGZhY2Vib29rXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1mYWNlYm9vay1mXCI+PC9pPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hhcmUgdXMgb24gdHdpdHRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtdHdpdHRlclwiPjwvaT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5waW50ZXJlc3QuY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hhcmUgdXMgb24gcGludGVyZXN0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1saW5rZWRpbi1pblwiPjwvaT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2hhcmUgdXMgb24gaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1pbnN0YWdyYW1cIj48L2k+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPZmZjYW52YXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJMaW5rIiwibG9nbyIsIk9mZmNhbnZhcyIsIm9wZW5OYXYiLCJzZXRPcGVuTmF2Iiwib3BlblN1Yk1lbnUiLCJzZXRPcGVuU3ViTWVudSIsIm9wZW5OZXN0ZWRNZW51Iiwic2V0T3Blbk5lc3RlZE1lbnUiLCJoYW5kbGVTdWJtZW51Iiwic3VibWVudSIsImhhbmRsZU5lc3RlZG1lbnUiLCJuZXN0bWVudSIsImlzTmVzdGVkTWVudU9wZW4iLCJpc05lc3RlZE1lbnVCdXR0b24iLCJpc1N1Yk1lbnVPcGVuIiwiaXNTdWJNZW51QnV0dG9uIiwiaGFuZGxlUmVzaXplSGVhZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZU5hdiIsImRpdiIsImNsYXNzTmFtZSIsIm5hdiIsImRhdGEtbGVuaXMtcHJldmVudCIsImhyZWYiLCJzcmMiLCJhbHQiLCJ0aXRsZSIsInByaW9yaXR5IiwiYnV0dG9uIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJpIiwidWwiLCJsaSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layout/header/Offcanvas.tsx\n"));

/***/ })

});