"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/AppLogo.js




const AppLogo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                    src: "/logo.jpeg",
                    alt: "logo",
                    height: 60,
                    width: 150
                })
            })
        })
    });
};
/* harmony default export */ const components_AppLogo = (AppLogo);

;// CONCATENATED MODULE: ./components/Footer.js





const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "text-blue-900 body-font",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-12 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pl-10 w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_AppLogo, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title-font font-bold text-gray-900 tracking-widest text-sm mb-3 ",
                                            children: "ADDRESS"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "list-none mb-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "3rd Floor"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "5/58,, WEA, Sarswati Marg"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Karol Bagh"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "New Delhi"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                            children: "CATEGORIES"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "list-none mb-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "First Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Second Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Third Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Fourth Link"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                            children: "CATEGORIES"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "list-none mb-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "First Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Second Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Third Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Fourth Link"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "lg:w-1/4 md:w-1/2 w-full px-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                            children: "CATEGORIES"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                            className: "list-none mb-10",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "First Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Second Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Third Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        className: "text-gray-600 hover:text-gray-800",
                                                        children: "Fourth Link"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-gray-100",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-gray-500 text-sm text-center sm:text-left",
                                children: [
                                    "\xa9 2022 Dotin India Technology Private Limited \u2014",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://accordify.co.in/",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-600 ml-1",
                                        target: "_blank",
                                        children: "@Accordify Websol"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "text-gray-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: "20",
                                                    height: "20",
                                                    x: "2",
                                                    y: "2",
                                                    rx: "5",
                                                    ry: "5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "ml-3 text-gray-500",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "currentColor",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "0",
                                            className: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                    cx: "4",
                                                    cy: "4",
                                                    r: "2",
                                                    stroke: "none"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: ./components/HomeTop.js







const HomeTop = ({ cart  })=>{
    const toggleCart = ()=>{
        if (ref.current.classList.contains("translate-x-full")) {
            ref.current.classList.remove("translate-x-full");
            ref.current.classList.add("mr-10");
            ref.current.classList.add("translate-x-0");
        } else {
            ref.current.classList.add("translate-x-full");
            ref.current.classList.remove("mr-10");
            ref.current.classList.remove("translate-x-0");
        }
    };
    const ref = (0,external_react_.useRef)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-between ",
            children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "text-gray-600 body-font shadow-md w-full px-6",
                style: {
                    backgroundColor: "#2455f4",
                    color: "white",
                    fontWeight: "bold"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center md:justify-between w-full ",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "px-12 py-2 bg-yellow-400 rounded-t-lg",
                            children: "Categories"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-1/2",
                            align: "center",
                            "align-items": "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    className: "w-11/12 p-2 rounded-l-lg",
                                    type: "text",
                                    placeholder: "Search the product"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "bg-yellow-400 rounded-r-lg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiOutlineSearch, {
                                        className: "h-1/2 my-2 mx-2 text-xl "
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: toggleCart,
                            className: "cart rounded-full p-3 bg-yellow-400",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFillCartFill, {
                                className: "text-lg"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            ref: ref,
                            className: "border-solid border-x border-y border-slate-500 sidebar absolute top-32 right-0 bg-white text-black transform transition-transform translate-x-full ",
                            children: [
                                Object.keys(cart).length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "float text-xl font-bold text-green py-2",
                                    children: "No items in the cart"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                                    children: Object.keys(cart).map((k)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-full cursor-pointer ",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex items-center p-4",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "block relative rounded overflow-hidden",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    // style={{ height: "40px" }}
                                                                    className: "h-[80px] w-[80px]",
                                                                    alt: "ecommerce",
                                                                    src: cart[k].imgId
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "mt-4 text-start ml-5",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: "text-gray-500 text-xs tracking-widest title-font mb-1",
                                                                        children: cart[k].name
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        className: "mt-1",
                                                                        children: [
                                                                            "\u20B9 ",
                                                                            cart[k].price
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "border-solid border-t border-slate-500 flex justify-evenly py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "border-solid border-x border-y p-2 border-black font-medium text-sm hover:text-white hover:bg-red-500 hover:border-red-500",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "CHECK OUT NOW"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "border-solid border-x border-y p-2 border-black font-medium text-sm hover:text-white hover:bg-red-500 hover:border-red-500",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                    href: "",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: "VIEW CART"
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, k);
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_HomeTop = (HomeTop);

;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
;// CONCATENATED MODULE: ./components/Navbar.js






const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            className: "text-gray-600 body-font shadow-md px-6",
            style: {
                backgroundColor: "#2455f4",
                color: "white",
                fontWeight: "bold"
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_AppLogo, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-red-600",
                                    children: "Products"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/about",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-red-600",
                                    children: "About Us"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "mr-5 hover:text-red-600",
                                    children: "Contact Us"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between align-center ",
                        style: {},
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex justify-center align-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "py-5",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_namespaceObject.AiFillLock, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "py-4 pl-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "hover:text-red-600",
                                                    children: "Sign Up "
                                                })
                                            }),
                                            "Or",
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "hover:text-red-600",
                                                    children: " Login "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex ",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "py-5 pl-4",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fi_namespaceObject.FiPhoneCall, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "py-4 pl-2",
                                        children: [
                                            "Call on:",
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "hover:text-red-600",
                                                    children: " 011- 42461009 "
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js







function MyApp({ Component , pageProps  }) {
    const { 0: cart , 1: setcart  } = (0,external_react_.useState)({});
    const { 0: subTotal , 1: setsubTotal  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        try {
            if (localStorage.getItem("cart")) {
                setcart(JSON.parse(localStorage.getItem("cart")));
            }
        } catch (error) {
            console.error(error);
            localStorage.clear();
        }
    }, []);
    const saveCart = (mycart)=>{
        localStorage.setItem("cart", mycart);
        let subT = 0;
        let keys = Object.keys(cart);
        for(let i = 0; keys.length; i++){
            subT += mycart[keys[i]].price * mycart[keys[i]].qty;
        }
        setsubTotal(subT);
    };
    const addToCart = (id, name, qty, price, imgId)=>{
        let myCart = cart;
        if (id in cart) {
            myCart[id].qty = cart[id].qty + qty;
        } else {
            myCart[id] = {
                qty: 1,
                price,
                name,
                imgId
            };
        }
        setcart(myCart);
        saveCart(myCart);
    };
    const removeFromCart = (id, qty)=>{
        let myCart = cart;
        if (id in cart) {
            myCart[id].qty = cart[id].qty - qty;
        }
        if (myCart[id]["qty"] <= 0) {
            delete myCart[id];
        }
        setcart(myCart);
        saveCart(myCart);
    };
    const clearCart = ()=>{
        setcart({});
        saveCart({});
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dotin India - Experience The Best"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Dotin India website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/logo.jpeg"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                cart: cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                clearCart: clearCart,
                subTotal: subTotal
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_HomeTop, {
                cart: cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                clearCart: clearCart,
                subTotal: subTotal
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                cart: cart,
                addToCart: addToCart,
                removeFromCart: removeFromCart,
                clearCart: clearCart,
                subTotal: subTotal,
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 4241:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/routing-items.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [895,664,675], () => (__webpack_exec__(8292)));
module.exports = __webpack_exports__;

})();