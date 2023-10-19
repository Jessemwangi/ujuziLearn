"use strict";
exports.id = 9058;
exports.ids = [9058];
exports.modules = {

/***/ 9058:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jv": () => (/* binding */ initializeLessons),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports lessonSlice, setLessons, setLoading */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8276);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_getData__WEBPACK_IMPORTED_MODULE_1__]);
_utils_getData__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    lessonsData: [],
    isLoading: false
};
const lessonSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "lesson",
    initialState,
    reducers: {
        setLessons: (state, action)=>{
            console.log(action.payload);
            state.lessonsData = action.payload;
        },
        setLoading: (state, action)=>{
            state.isLoading = action.payload;
        }
    }
});
const { setLessons , setLoading  } = lessonSlice.actions;
const initializeLessons = ()=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const lessons = await _utils_getData__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getAll */ .Z.getAll();
        dispatch(setLessons(lessons));
        dispatch(setLoading(false));
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lessonSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const jwt = "e20b647c007e06e1a141b863cc7734d715ca3613cb41fed150721b2548848bc93321787c3bf816db9d404464a337cd1c31d6de1959d7ec8021bd474bd9f3458c7b7a50451e733028c6d805af176cfd83283fc55bf1493fa6b2bd0e34be3680c8b507ddce5cfb2b8054c6f78f32550f0a0a8d99d610aafe9faeb633074267dca8";
const baseUrl = "https://techsynergy-f44e44b93be8.herokuapp.com/api/projects/9?populate[]=*&populate[]=project_objectives&populate[]=eligibility_criteria.eligibility_requirements&populate[]=project_teches&populate[]=project_categories&populate[]=project_applications&populate[]=project_resources&populate[]=project_sub_categories&populate[]=companyLogo";
const getAll = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(baseUrl, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    });
    return data;
};
const exported = {
    getAll
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exported);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;