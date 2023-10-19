"use strict";
(() => {
var exports = {};
exports.id = 6198;
exports.ids = [6198];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 7603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const jwt = "e20b647c007e06e1a141b863cc7734d715ca3613cb41fed150721b2548848bc93321787c3bf816db9d404464a337cd1c31d6de1959d7ec8021bd474bd9f3458c7b7a50451e733028c6d805af176cfd83283fc55bf1493fa6b2bd0e34be3680c8b507ddce5cfb2b8054c6f78f32550f0a0a8d99d610aafe9faeb633074267dca8";
async function getServerSideProps() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://techsynergy-f44e44b93be8.herokuapp.com/api/projects/9?populate[]=*&populate[]=project_objectives&populate[]=eligibility_criteria.eligibility_requirements&populate[]=project_teches&populate[]=project_categories&populate[]=project_applications&populate[]=project_resources&populate[]=project_sub_categories&populate[]=companyLogo", {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    console.log(response, "response form axios");
    const staticData = {
        name: "Jesse",
        age: 5
    };
    return {
        props: {
            lessons: response.data,
            staticData
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7603));
module.exports = __webpack_exports__;

})();