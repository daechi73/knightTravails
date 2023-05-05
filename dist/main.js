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

/***/ "./src/Logic/find.js":
/*!***************************!*\
  !*** ./src/Logic/find.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//find utility\nconst node = (value) => {\n  return { value, preNode: null, nextMoves: null };\n};\n\nconst treeOfAllTheMoves = (root) => {\n  return { root };\n};\n\nconst movesToNode = (possibleMove, preNode) => {\n  const newNode = node(possibleMove);\n  if (preNode) newNode.preNode = preNode;\n  return newNode;\n};\n//x cant be < 0, > 7 ; y cant be < 0 , > 7\nconst possibleMoves = (node, moves) => {\n  const possibleMoves = [];\n  const [x, y] = node.value;\n  moves.forEach((move) => {\n    const updatedMove = [];\n    const updatedX = x + move[0];\n    const updatedY = y + move[1];\n    if (updatedX >= 0 && updatedX <= 7) updatedMove.push(updatedX);\n    if (updatedY >= 0 && updatedY <= 7) updatedMove.push(updatedY);\n    if (updatedMove[1]) {\n      possibleMoves.push(movesToNode(updatedMove, node));\n    }\n  });\n  return possibleMoves;\n};\n\nconst checkBatch = (destination, possibleMoves) => {\n  for (let i = 0; i < possibleMoves.length; i++) {\n    if (\n      JSON.stringify(possibleMoves[i].value) === JSON.stringify(destination)\n    ) {\n      return { found: true, destinationFound: possibleMoves[i] };\n    }\n  }\n  return false;\n};\nconst movesMade = (node) => {\n  const moves = [node.value];\n  while (node.preNode != null) {\n    moves.unshift(node.preNode.value);\n    node = node.preNode;\n  }\n  return { moves, numberOfMoves: moves.length - 1 };\n};\nconst find = (destination, position, moves) => {\n  let queue = [];\n  const treeOfAll = treeOfAllTheMoves(node(position));\n  queue.push(treeOfAll.root);\n  let temp = queue[0];\n  while (JSON.stringify(destination) != JSON.stringify(temp.value)) {\n    temp.nextMoves = possibleMoves(temp, moves);\n    queue = queue.concat(temp.nextMoves);\n    const checked = checkBatch(destination, temp.nextMoves);\n    if (checked) return movesMade(checked.destinationFound); // checks nextmoves if match destinationpossibleMovesHolder\n    queue.shift();\n    temp = queue[0];\n  }\n  return movesMade(temp);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/find.js?");

/***/ }),

/***/ "./src/Logic/knight.js":
/*!*****************************!*\
  !*** ./src/Logic/knight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst knight = (currentPosition) => {\n  const moves = () => {\n    return [\n      [-2, 1],\n      [-1, 2],\n      [1, 2],\n      [2, 1],\n      [2, -1],\n      [1, -2],\n      [-1, -2],\n      [-2, -1],\n    ];\n  };\n\n  return {\n    name: \"k\",\n    currentPosition,\n    endPosition: null,\n    moves,\n    movesMade: null,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knight);\n// const newKnight = knight([0, 0]);\n//console.log(newKnight.possibleMoves())\n// newKnight.find([2, 1]);\n//console.log(newKnight.currentPosition);\n//console.log(newKnight.possibleMoves(newKnight.currentPosition));\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knight.js?");

/***/ }),

/***/ "./src/Logic/knightTravail.js":
/*!************************************!*\
  !*** ./src/Logic/knightTravail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/Logic/board.js\");\n/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight.js */ \"./src/Logic/knight.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ \"./src/Logic/utility.js\");\n/* harmony import */ var _Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Render/renderBoard.js */ \"./src/Render/renderBoard.js\");\n/* harmony import */ var _Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Render/messageBox.js */ \"./src/Render/messageBox.js\");\n/* harmony import */ var _Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Render/renderPieces.js */ \"./src/Render/renderPieces.js\");\n\n\n\n\n\n\n\nconst knightTravail = () => {\n  // const newKnight = knight([2, 1]);\n  // const newBoard = chessBoard();\n  // chessBoard().printBoard();\n  //console.log(find([5, 5], newKnight.currentPosition, newKnight.moves()));\n  //renderBoard();\n\n  const startUp = () => {\n    const newKnight = (0,_knight_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const newBoard = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newBoard);\n\n    // messageBox().addBox(`Place your Knight on the board`);\n    // msgBoxEventListener();\n    // startPositionListener(newKnight, newBoard);\n\n    newKnight.movesMade = [\n      [2, 1],\n      // [2, 4],\n      // [3, 2],\n    ];\n    const cell = document.querySelector(\".a8\");\n    (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_5__.renderKnight)(cell);\n    const btn = document.querySelector(\".btn\");\n    btn.addEventListener(\"click\", () => {\n      //moveKnight([1, 2], newBoard);\n      (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__.startToFinish)(newKnight, newBoard);\n    });\n  };\n  return { startUp };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knightTravail);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knightTravail.js?");

/***/ }),

/***/ "./src/Logic/timer.js":
/*!****************************!*\
  !*** ./src/Logic/timer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (func, delay) => {\n  let handle = 0;\n  const start = (newDelay) => {\n    if (newDelay) {\n      delay = newDelay;\n    }\n    stop();\n    handle = setTimeout(func, delay);\n    return handle;\n  };\n  const stop = (newDelay) => {\n    if (handle) {\n      clearTimeout(handle);\n      handle = 0;\n    }\n    return handle;\n  };\n  return { start, stop };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/timer.js?");

/***/ }),

/***/ "./src/Logic/utility.js":
/*!******************************!*\
  !*** ./src/Logic/utility.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveKnight\": () => (/* binding */ moveKnight),\n/* harmony export */   \"startPositionListener\": () => (/* binding */ startPositionListener),\n/* harmony export */   \"startToFinish\": () => (/* binding */ startToFinish)\n/* harmony export */ });\n/* harmony import */ var _Render_messageBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/messageBox */ \"./src/Render/messageBox.js\");\n/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ \"./src/Logic/knight.js\");\n/* harmony import */ var _Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Render/renderPieces.js */ \"./src/Render/renderPieces.js\");\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.js */ \"./src/Logic/board.js\");\n/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find.js */ \"./src/Logic/find.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ \"./src/Logic/timer.js\");\n\n\n\n\n\n\n\n//Game Utility\nconst placeKnight = (position, chessBox, knight, board) => {\n  knight.currentPosition = codeToCoordinate(position, board);\n  (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__.renderKnight)(chessBox);\n};\n\n//takes in knights.movesMade & chessboard;\n//renders each moves[position] to UI chessBoard\nconst showPath = (movesMade, board) => {\n  console.log(movesMade);\n  movesMade.moves.forEach((position, i) => {\n    if (i > 0) {\n      if (i === movesMade.moves.length - 1) {\n        //special rendering to destination square\n        const endDiv = getSquareUI(\n          coordinateToCode(position, board)\n        ).firstElementChild;\n        (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__.renderMoves)(endDiv, i);\n      } else {\n        //renders to divs that are not starting and end destination\n        (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__.renderMoves)(getSquareUI(coordinateToCode(position, board)), i);\n      }\n    }\n  });\n};\n\nconst getSquareUI = (squareCode) => {\n  const squareUI = document.querySelector(`.${squareCode}`);\n  return squareUI;\n};\n\n//ui uses squareCodes; backside uses coordination\nconst coordinateToCode = (coord, board) => {\n  const [x, y] = coord;\n  for (const row of board.board) {\n    for (const column of row) {\n      if (column.column == x && column.row == y) {\n        return column.code;\n      }\n    }\n  }\n};\n\n//ui uses squareCodes; backside uses coordination\nconst codeToCoordinate = (code, board) => {\n  for (const row of board.board) {\n    for (const column of row) {\n      if (column.code === code) {\n        //console.log(`[${column.column},${column.row}]`);\n        const coord = [];\n        coord.push(column.column);\n        coord.push(column.row);\n        return coord;\n      }\n    }\n  }\n};\n//gets new coordination [initial coordination + transition coordination]\nconst newCoordinate = (knightCoord, moveCoord) => {\n  const newCoord = [];\n  knightCoord.forEach((axis, i) => {\n    newCoord.push(axis + moveCoord[i]);\n  });\n  return newCoord;\n};\n\n//moves Knight to each individual axis point from each movement coordination\nconst moveKnight = (coord, board, axis) => {\n  //console.log(coord + \" \" + axis);\n  console.log(coord);\n  let [x, y] = coord;\n  let temp;\n  if (axis === \"x\") {\n    temp = [x, 0];\n  } else {\n    temp = [0, y];\n  }\n  [x, y] = temp;\n  const xLength = x * 51.3;\n  const yLength = y * 51.3;\n  const knight = document.querySelector(\".knight\");\n  const newPosition = newCoordinate(\n    codeToCoordinate(knight.parentElement.id, board),\n    temp\n  );\n  knight.style.transform = `translateX(${xLength}px) translateY(${yLength}px)`;\n\n  // removeKnight(knight.parentElement);\n  // renderKnight(getSquareUI(coordinateToCode(newPosition, board)));\n\n  const deleteTimer = (0,_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(() => {\n    console.log(\"parent \" + knight.parentElement);\n    console.log(\"knight \" + knight);\n    (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__.removeKnight)(knight.parentElement);\n    console.log(\"working\");\n  }, 2000);\n\n  deleteTimer.start();\n\n  const renderTimer = (0,_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(() => {\n    (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_2__.renderKnight)(getSquareUI(coordinateToCode(newPosition, board)));\n    console.log(\"working2\");\n  }, 2000);\n  renderTimer.start();\n};\n\n//moves knight to starting point to finishing destination.\nconst startToFinish = (knight, board) => {\n  let count = 2000;\n  //console.log(knight.movesMade);\n  // ************ make sure to change this to knight.movesMade.moves after**********\n  knight.movesMade.forEach((move) => {\n    //moveKnight(move, board, \"x\");\n    move.forEach((axis, i) => {\n      if (i === 0) setTimeout(() => moveKnight(move, board, \"x\"), count);\n      count += 300;\n      if (i === 1) setTimeout(() => moveKnight(move, board, \"y\"), count);\n      count += 300;\n    });\n  });\n};\n\n//eventlistener that fires the starting of the simulations\nconst pickDestinationListener = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  (0,_Render_messageBox__WEBPACK_IMPORTED_MODULE_0__.messageBox)().addBox(\"Pick an end destination\");\n  boardUI.addEventListener(\n    \"click\",\n    function (e) {\n      knight.endPosition = codeToCoordinate(e.target.textContent, board);\n      e.target.innerHTML += `<div class=\"endContainer\"><div class=\"destination\">E</div></div>`;\n      knight.movesMade = (0,_find_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n        knight.endPosition,\n        knight.currentPosition,\n        knight.moves()\n      );\n\n      showPath(knight.movesMade, board, knight);\n    },\n    { once: true }\n  );\n};\n\nconst startPositionListener = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  boardUI.addEventListener(\n    \"click\",\n    (e) => {\n      placeKnight(e.target.textContent, e.target, knight, board);\n      (0,_Render_messageBox__WEBPACK_IMPORTED_MODULE_0__.messageBox)().addBox(\"Pick an end destination\");\n      //console.log(e.target.textContent);\n      pickDestinationListener(knight, board);\n    },\n    { once: true }\n  );\n};\n\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/utility.js?");

/***/ }),

/***/ "./src/Render/messageBox.js":
/*!**********************************!*\
  !*** ./src/Render/messageBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messageBox\": () => (/* binding */ messageBox),\n/* harmony export */   \"msgBoxEventListener\": () => (/* binding */ msgBoxEventListener)\n/* harmony export */ });\nconst messageBox = () => {\n  const msgBoxContainer = document.createElement(\"div\");\n  const box = document.createElement(\"div\");\n  msgBoxContainer.classList.add(\"msgBoxContainer\");\n  box.classList.add(\"messageBox\");\n  msgBoxContainer.appendChild(box);\n\n  const addBox = (message) => {\n    document.body.appendChild(msgBoxContainer);\n    box.textContent = message;\n    document.querySelector(\".container-main\").style.backgroundColor =\n      \"rgba(0, 0, 0, 0.7)\";\n  };\n\n  const deleteBox = () => {\n    const msgBoxContainer = document.querySelector(\".msgBoxContainer\");\n    if (msgBoxContainer) {\n      msgBoxContainer.remove();\n      document.querySelector(\".container-main\").style.backgroundColor =\n        \"rgba(0, 0, 0, 0)\";\n    }\n  };\n  return { addBox, deleteBox };\n};\n\nconst msgBoxEventListener = () => {\n  const msgBox = document.querySelector(\".messageBox\");\n  if (msgBox) {\n    window.addEventListener(\"click\", (e) => {\n      messageBox().deleteBox();\n      //console.log(e);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/messageBox.js?");

/***/ }),

/***/ "./src/Render/renderBoard.js":
/*!***********************************!*\
  !*** ./src/Render/renderBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Logic_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/board */ \"./src/Logic/board.js\");\n\n\nconst renderBoard = (aChessBoard) => {\n  const board = document.createElement(\"div\");\n  board.classList.add(\"chessBoard\");\n  document.querySelector(\".container-main\").appendChild(board);\n  aChessBoard.board.forEach((row) => {\n    const rows = document.createElement(\"div\");\n    rows.classList.add(\"row\");\n    row.forEach((column) => {\n      const c = document.createElement(\"div\");\n      c.classList.add(\"column\");\n      c.classList.add(column.code);\n      c.id = column.code;\n      c.textContent = column.code;\n      rows.appendChild(c);\n    });\n    board.appendChild(rows);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderBoard.js?");

/***/ }),

/***/ "./src/Render/renderPieces.js":
/*!************************************!*\
  !*** ./src/Render/renderPieces.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeKnight\": () => (/* binding */ removeKnight),\n/* harmony export */   \"renderKnight\": () => (/* binding */ renderKnight),\n/* harmony export */   \"renderMoves\": () => (/* binding */ renderMoves)\n/* harmony export */ });\nconst renderKnight = (chessBox) => {\n  chessBox.innerHTML += `<div class=\"knight\">k</div>`;\n};\nconst removeKnight = (chessBox) => {\n  chessBox.removeChild(chessBox.firstElementChild);\n};\nconst renderMoves = (chessBox, i) => {\n  chessBox.innerHTML += `<div class=\"moves\">${i}</div>`;\n  chessBox.style.backgroundColor = \"rgb(196, 154, 40)\";\n};\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderPieces.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Logic_knightTravail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logic/knightTravail */ \"./src/Logic/knightTravail.js\");\n\n\n(0,_Logic_knightTravail__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().startUp();\n\n\n//# sourceURL=webpack://weatherapi/./src/index.js?");

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