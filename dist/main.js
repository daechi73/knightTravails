/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Logic/board.js":
/*!****************************!*\
  !*** ./src/Logic/board.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst square = (row, column) => {\n  return {\n    code: String.fromCharCode(column + 97) + `${8 - row}`,\n    knight: false,\n    row,\n    column,\n  };\n};\nconst chessBoard = () => {\n  const board = [];\n\n  const createBoard = () => {\n    for (let i = 0; i < 8; i++) {\n      const row = [];\n      for (let j = 0; j < 8; j++) {\n        row.push(square(i, j));\n      }\n      board.push(row);\n    }\n  };\n\n  const printBoard = () => {\n    board.forEach((row) => {\n      let print = \"\";\n      row.forEach((column) => {\n        print += `${column.code} `;\n      });\n      console.log(print);\n    });\n  };\n  createBoard();\n  return { printBoard, board };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chessBoard);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/board.js?");

/***/ }),

/***/ "./src/Logic/knight.js":
/*!*****************************!*\
  !*** ./src/Logic/knight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst knight = (currentPosition) => {\n  const moves = () => {\n    return [\n      [-2, 1],\n      [-1, 2],\n      [1, 2],\n      [2, 1],\n      [2, -1],\n      [1, -2],\n      [-1, -2],\n      [-2, -1],\n    ];\n  };\n\n  return {\n    name: \"k\",\n    currentPosition,\n    endPosition: null,\n    moves,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knight);\n// const newKnight = knight([0, 0]);\n//console.log(newKnight.possibleMoves())\n// newKnight.find([2, 1]);\n//console.log(newKnight.currentPosition);\n//console.log(newKnight.possibleMoves(newKnight.currentPosition));\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knight.js?");

/***/ }),

/***/ "./src/Logic/knightTravail.js":
/*!************************************!*\
  !*** ./src/Logic/knightTravail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/Logic/board.js\");\n/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight.js */ \"./src/Logic/knight.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ \"./src/Logic/utility.js\");\n/* harmony import */ var _Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Render/renderBoard.js */ \"./src/Render/renderBoard.js\");\n/* harmony import */ var _Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Render/messageBox.js */ \"./src/Render/messageBox.js\");\n\n\n\n\n\n\nconst knightTravail = () => {\n  // const newKnight = knight([2, 1]);\n  // const newBoard = chessBoard();\n  // chessBoard().printBoard();\n  //console.log(find([5, 5], newKnight.currentPosition, newKnight.moves()));\n  //renderBoard();\n\n  const start = () => {\n    const newKnight = (0,_knight_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const newBoard = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newBoard);\n    (0,_Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().addBox(`Place your Knight on the board`);\n    (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__.msgBoxEventListner)();\n    start(newKnight, newBoard);\n  };\n  return { start };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knightTravail);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knightTravail.js?");

/***/ }),

/***/ "./src/Logic/utility.js":
/*!******************************!*\
  !*** ./src/Logic/utility.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"msgBoxEventListner\": () => (/* binding */ msgBoxEventListner),\n/* harmony export */   \"pickDestination\": () => (/* binding */ pickDestination),\n/* harmony export */   \"start\": () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _Render_messageBox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/messageBox.js */ \"./src/Render/messageBox.js\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ \"./src/Logic/knight.js\");\n/* harmony import */ var _Render_renderKnight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Render/renderKnight.js */ \"./src/Render/renderKnight.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.js */ \"./src/Logic/board.js\");\n\n\n\n\n\n//find utility\nconst node = (value) => {\n  return { value, preNode: null, nextMoves: null };\n};\n\nconst treeOfAllTheMoves = (root) => {\n  return { root };\n};\n\nconst movesToNode = (possibleMove, preNode) => {\n  const newNode = node(possibleMove);\n  if (preNode) newNode.preNode = preNode;\n  return newNode;\n};\n//x cant be < 0, > 7 ; y cant be < 0 , > 7\nconst possibleMoves = (node, moves) => {\n  const possibleMoves = [];\n  const [x, y] = node.value;\n  moves.forEach((move) => {\n    const updatedMove = [];\n    const updatedX = x + move[0];\n    const updatedY = y + move[1];\n    if (updatedX >= 0 && updatedX <= 7) updatedMove.push(updatedX);\n    if (updatedY >= 0 && updatedY <= 7) updatedMove.push(updatedY);\n    if (updatedMove[1]) {\n      possibleMoves.push(movesToNode(updatedMove, node));\n    }\n  });\n  return possibleMoves;\n};\n\nconst checkBatch = (destination, possibleMoves) => {\n  for (let i = 0; i < possibleMoves.length; i++) {\n    if (\n      JSON.stringify(possibleMoves[i].value) === JSON.stringify(destination)\n    ) {\n      return { found: true, destinationFound: possibleMoves[i] };\n    }\n  }\n  return false;\n};\nconst preMoves = (node) => {\n  const steps = [node.value];\n  while (node.preNode != null) {\n    steps.unshift(node.preNode.value);\n    node = node.preNode;\n  }\n  return { steps, numberOfMoves: steps.length - 1 };\n};\nconst find = (destination, position, moves) => {\n  let queue = [];\n  const treeOfAll = treeOfAllTheMoves(node(position));\n  queue.push(treeOfAll.root);\n  let temp = queue[0];\n  while (JSON.stringify(destination) != JSON.stringify(temp.value)) {\n    temp.nextMoves = possibleMoves(temp, moves);\n    queue = queue.concat(temp.nextMoves);\n    const checked = checkBatch(destination, temp.nextMoves);\n    if (checked) return preMoves(checked.destinationFound); // checks nextmoves if match destinationpossibleMovesHolder\n    queue.shift();\n    temp = queue[0];\n  }\n  return preMoves(temp);\n};\n\n//Game Utility\nconst placeKnight = (position, chessBox, knight, board) => {\n  knight.currentPosition = codeToCoordinate(position, board);\n  //console.log(knight.currentPosition);\n  //console.log(newKnight.currentPosition);\n  //console.log(find([5, 5], newKnight.currentPosition, newKnight.moves()));\n  (0,_Render_renderKnight_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(chessBox);\n};\n\nconst start = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  let position;\n  boardUI.addEventListener(\n    \"click\",\n    (e) => {\n      //console.log(e);\n      e.stopPropagation();\n      placeKnight(e.target.textContent, e.target, knight, board);\n      (0,_Render_messageBox_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().addBox(\"Pick an end destination\");\n      pickDestination(knight, board);\n    },\n    { once: true }\n  );\n};\nconst pickDestination = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  boardUI.addEventListener(\n    \"click\",\n    function (e) {\n      knight.endPosition = codeToCoordinate(e.target.textContent, board);\n      e.target.innerHTML += `<div class=\"destination\">E</div>`;\n      console.log(\n        find(knight.endPosition, knight.currentPosition, knight.moves())\n      );\n    },\n    { once: true }\n  );\n};\n\nconst codeToCoordinate = (code, board) => {\n  for (const row of board.board) {\n    for (const column of row) {\n      if (column.code === code) {\n        //console.log(`[${column.column},${column.row}]`);\n        const coord = [];\n        coord.push(column.column);\n        coord.push(column.row);\n        return coord;\n      }\n    }\n  }\n};\n//render utility\nconst msgBoxEventListner = () => {\n  const msgBox = document.querySelector(\".messageBox\");\n  if (msgBox) {\n    window.addEventListener(\"click\", (e) => {\n      (0,_Render_messageBox_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().deleteBox();\n      //console.log(e);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/utility.js?");

/***/ }),

/***/ "./src/Render/messageBox.js":
/*!**********************************!*\
  !*** ./src/Render/messageBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst messageBox = () => {\n  const msgBoxContainer = document.createElement(\"div\");\n  const box = document.createElement(\"div\");\n  msgBoxContainer.classList.add(\"msgBoxContainer\");\n  box.classList.add(\"messageBox\");\n  msgBoxContainer.appendChild(box);\n  const addBox = (message) => {\n    document.body.appendChild(msgBoxContainer);\n    box.textContent = message;\n    document.querySelector(\".container-main\").style.backgroundColor =\n      \"rgba(0, 0, 0, 0.7)\";\n  };\n  const deleteBox = () => {\n    const msgBoxContainer = document.querySelector(\".msgBoxContainer\");\n    if (msgBoxContainer) {\n      msgBoxContainer.remove();\n      document.querySelector(\".container-main\").style.backgroundColor =\n        \"rgba(0, 0, 0, 0)\";\n    }\n  };\n  return { addBox, deleteBox };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messageBox);\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/messageBox.js?");

/***/ }),

/***/ "./src/Render/renderBoard.js":
/*!***********************************!*\
  !*** ./src/Render/renderBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Logic_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/board */ \"./src/Logic/board.js\");\n\n\nconst renderBoard = (aChessBoard) => {\n  const board = document.createElement(\"div\");\n  board.classList.add(\"chessBoard\");\n  document.querySelector(\".container-main\").appendChild(board);\n  aChessBoard.board.forEach((row) => {\n    const rows = document.createElement(\"div\");\n    rows.classList.add(\"row\");\n    row.forEach((column) => {\n      const c = document.createElement(\"div\");\n      c.classList.add(\"column\");\n      c.textContent = column.code;\n      rows.appendChild(c);\n    });\n    board.appendChild(rows);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderBoard.js?");

/***/ }),

/***/ "./src/Render/renderKnight.js":
/*!************************************!*\
  !*** ./src/Render/renderKnight.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderKnight = (chessBox) => {\n  chessBox.innerHTML += `<div class=\"knight\">k</div>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderKnight);\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderKnight.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logic_knightTravail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic/knightTravail */ \"./src/Logic/knightTravail.js\");\n\n\n(0,_Logic_knightTravail__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().start();\n\n\n//# sourceURL=webpack://weatherapi/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;