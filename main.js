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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"node\": () => (/* binding */ node),\n/* harmony export */   \"possibleMoves\": () => (/* binding */ possibleMoves)\n/* harmony export */ });\n//find utility\nconst node = (value) => {\n  return { value, preNode: null, nextMoves: null };\n};\n\nconst treeOfAllTheMoves = (root) => {\n  return { root };\n};\n\nconst movesToNode = (possibleMove, preNode) => {\n  const newNode = node(possibleMove);\n  if (preNode) newNode.preNode = preNode;\n  return newNode;\n};\n//x cant be < 0, > 7 ; y cant be < 0 , > 7\nconst possibleMoves = (node, moves) => {\n  const possibleMoves = [];\n  const [x, y] = node.value;\n  moves.forEach((move) => {\n    const updatedMove = [];\n    const updatedX = x + move[0];\n    const updatedY = y + move[1];\n    //console.log(`[${updatedX}, ${updatedY}]`);\n    if (updatedX >= 0 && updatedX <= 7) updatedMove.push(updatedX);\n    if (updatedY >= 0 && updatedY <= 7) updatedMove.push(updatedY);\n\n    if (updatedMove[1] != null && updatedMove[0] != null) {\n      //console.log(updatedMove);\n      possibleMoves.push(movesToNode(updatedMove, node));\n    }\n  });\n  return possibleMoves;\n};\n\nconst checkBatch = (destination, possibleMoves) => {\n  for (let i = 0; i < possibleMoves.length; i++) {\n    if (\n      JSON.stringify(possibleMoves[i].value) === JSON.stringify(destination)\n    ) {\n      return { found: true, destinationFound: possibleMoves[i] };\n    }\n  }\n  return false;\n};\nconst movesMade = (node) => {\n  const moves = [node.value];\n  while (node.preNode != null) {\n    moves.unshift(node.preNode.value);\n    node = node.preNode;\n  }\n  return { moves, numberOfMoves: moves.length - 1 };\n};\n\nconst find = (destination, position, moves) => {\n  let queue = [];\n  const treeOfAll = treeOfAllTheMoves(node(position));\n  queue.push(treeOfAll.root);\n  let temp = queue[0];\n  while (JSON.stringify(destination) != JSON.stringify(temp.value)) {\n    temp.nextMoves = possibleMoves(temp, moves);\n    queue = queue.concat(temp.nextMoves);\n    const checked = checkBatch(destination, temp.nextMoves);\n    if (checked) return movesMade(checked.destinationFound); // checks nextmoves if match destinationpossibleMovesHolder\n    console.log(queue);\n    queue.shift();\n    temp = queue[0];\n  }\n  return movesMade(temp);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/find.js?");

/***/ }),

/***/ "./src/Logic/knight.js":
/*!*****************************!*\
  !*** ./src/Logic/knight.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst knight = (currentPosition) => {\n  const moves = () => {\n    return [\n      [-2, 1],\n      [-1, 2],\n      [1, 2],\n      [2, 1],\n      [2, -1],\n      [1, -2],\n      [-1, -2],\n      [-2, -1],\n    ];\n  };\n\n  return {\n    name: \"k\",\n    currentPosition,\n    endPosition: null,\n    moves,\n    movesMade: null,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knight);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knight.js?");

/***/ }),

/***/ "./src/Logic/knightTravail.js":
/*!************************************!*\
  !*** ./src/Logic/knightTravail.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _board_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.js */ \"./src/Logic/board.js\");\n/* harmony import */ var _knight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight.js */ \"./src/Logic/knight.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ \"./src/Logic/utility.js\");\n/* harmony import */ var _Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Render/renderBoard.js */ \"./src/Render/renderBoard.js\");\n/* harmony import */ var _Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Render/messageBox.js */ \"./src/Render/messageBox.js\");\n\n\n\n\n\n\nconst knightTravail = () => {\n  const startUp = () => {\n    const newKnight = (0,_knight_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const newBoard = (0,_board_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_Render_renderBoard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newBoard);\n\n    (0,_Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__.messageBox)().addBox(`Place your Knight on the board`);\n    (0,_Render_messageBox_js__WEBPACK_IMPORTED_MODULE_4__.msgBoxEventListener)();\n    (0,_utility_js__WEBPACK_IMPORTED_MODULE_2__.startPositionListener)(newKnight, newBoard);\n  };\n  return { startUp };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knightTravail);\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/knightTravail.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moveKnight\": () => (/* binding */ moveKnight),\n/* harmony export */   \"startPositionListener\": () => (/* binding */ startPositionListener),\n/* harmony export */   \"startToFinish\": () => (/* binding */ startToFinish)\n/* harmony export */ });\n/* harmony import */ var _Render_messageBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Render/messageBox */ \"./src/Render/messageBox.js\");\n/* harmony import */ var _Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Render/renderPieces.js */ \"./src/Render/renderPieces.js\");\n/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find.js */ \"./src/Logic/find.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer */ \"./src/Logic/timer.js\");\n\n\n\n\n\n//**********************Game Utility************************88\n\nconst placeKnight = (position, chessBox, knight, board) => {\n  knight.currentPosition = codeToCoordinate(position, board);\n  (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__.renderKnight)(chessBox);\n};\n\nconst markStartPosition = (chessBox) => {\n  chessBox.style.backgroundColor = \"rgba(31, 16, 106, 0.80)\";\n};\nconst getSquareUI = (squareCode) => {\n  const squareUI = document.querySelector(`.${squareCode}`);\n  return squareUI;\n};\n\n//ui uses squareCodes; backside uses coordination\nconst coordinateToCode = (coord, board) => {\n  const [x, y] = coord;\n  for (const row of board.board) {\n    for (const column of row) {\n      if (column.column == x && column.row == y) {\n        return column.code;\n      }\n    }\n  }\n};\n\n//ui uses squareCodes; backside uses coordination\nconst codeToCoordinate = (code, board) => {\n  for (const row of board.board) {\n    for (const column of row) {\n      if (column.code === code) {\n        //console.log(`[${column.column},${column.row}]`);\n        const coord = [];\n        coord.push(column.column);\n        coord.push(column.row);\n        return coord;\n      }\n    }\n  }\n};\n\n//takes in knights.movesMade & chessboard;\n//renders each moves[position] to UI chessBoard\nconst showPath = (movesMade, board) => {\n  movesMade.moves.forEach((position, i) => {\n    if (i > 0) {\n      if (i === movesMade.moves.length - 1) {\n        //special rendering to destination square\n        // const endDiv = getSquareUI(\n        //   coordinateToCode(position, board)\n        // ).firstElementChild;\n        // //renderMoves(endDiv, i);\n        // markDestination(getSquareUI(coordinateToCode(position, board)));\n        return;\n      } else {\n        //renders to divs that are not starting and end destination\n        (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__.renderMoves)(getSquareUI(coordinateToCode(position, board)), i);\n      }\n    }\n  });\n};\n\n//gets new coordination [initial coordination + transition coordination]\nconst getSteps = (knightCoord, nextMoveCoord, axis) => {\n  let stepsTaken = [];\n  if (axis === \"x\") {\n    stepsTaken.push(nextMoveCoord[0] - knightCoord[0]);\n    stepsTaken.push(0);\n    nextMoveCoord.push(knightCoord[1]);\n    //console.log(\"nextMoveCoord \" + nextMoveCoord);\n\n    //console.log(\"next x \" + nextMoveCoord[0]);\n  }\n  if (axis === \"y\") {\n    stepsTaken.push(0);\n    stepsTaken.push(nextMoveCoord[1] - knightCoord[1]);\n    //console.log(\"next y \" + nextMoveCoord[1]);\n  }\n  return stepsTaken;\n};\n\n//moves Knight to each individual axis point from each movement coordination\nconst moveKnight = (coord, board, axis) => {\n  const knight = document.querySelector(\".knight\");\n  let [x, y] = coord;\n  let temp;\n  let stepsTaken;\n  let newPosition;\n  if (axis === \"x\") {\n    temp = [x];\n    stepsTaken = getSteps(\n      codeToCoordinate(knight.parentElement.id, board),\n      temp,\n      axis\n    );\n    newPosition = temp;\n  } else {\n    temp = [0, y];\n    stepsTaken = getSteps(\n      codeToCoordinate(knight.parentElement.id, board),\n      temp,\n      axis\n    );\n    newPosition = coord;\n  }\n  [x, y] = stepsTaken;\n  const xLength = x * 51.3;\n  const yLength = y * 51.3;\n\n  knight.style.transform = `translateX(${xLength}px) translateY(${yLength}px)`;\n\n  const deleteTimer = (0,_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(() => {\n    (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__.removeKnight)(knight.parentElement);\n  }, 400);\n  deleteTimer.start();\n\n  const renderTimer = (0,_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(() => {\n    const chessBox = getSquareUI(coordinateToCode(newPosition, board));\n    if (chessBox.firstElementChild) {\n      chessBox.removeChild(chessBox.firstElementChild);\n    }\n\n    // console.log(chessBox.firstElementChild);\n    (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__.renderKnight)(chessBox);\n  }, 400);\n  renderTimer.start();\n};\n\n//moves knight to starting point to finishing destination.\nconst startToFinish = (knight, board) => {\n  let count = 0;\n  knight.movesMade.moves.forEach((move, i) => {\n    //skips starting position\n    if (i === 0) {\n      return; //console.log(\"starting Position:\" + move);\n    }\n    //console.log(\"next Move  \" + move);\n    move.forEach((axis, innerI) => {\n      if (innerI === 0) setTimeout(() => moveKnight(move, board, \"x\"), count);\n      count += 400;\n      if (innerI === 1) setTimeout(() => moveKnight(move, board, \"y\"), count);\n      count += 430;\n    });\n  });\n};\n\nconst startPositionListener = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  boardUI.addEventListener(\n    \"click\",\n    (e) => {\n      //console.log(e.target);\n      placeKnight(e.target.textContent, e.target, knight, board);\n      markStartPosition(e.target);\n      addSystemMsg(\">  Knight Placed\");\n      (0,_Render_messageBox__WEBPACK_IMPORTED_MODULE_0__.messageBox)().addBox(\"Pick an end destination\");\n      //console.log(e.target.textContent);\n      pickDestinationListener(knight, board);\n    },\n    { once: true }\n  );\n};\nconst listAllMovesToMsg = (knight) => {\n  knight.movesMade.moves.forEach((move, i) => {\n    if (i === 0) {\n      addSystemMsg(`>  Starting Position: [${move}]`);\n      return;\n    }\n    if (i === knight.movesMade.moves.length - 1) {\n      addSystemMsg(`>  Destination: [${move}]`);\n      return;\n    }\n    addSystemMsg(`>  Next Move: [${move}]`);\n  });\n};\n//eventlistener that fires the starting of the simulations\nconst pickDestinationListener = (knight, board) => {\n  const boardUI = document.querySelector(\".chessBoard\");\n  (0,_Render_messageBox__WEBPACK_IMPORTED_MODULE_0__.messageBox)().addBox(\"Pick an end destination\");\n  boardUI.addEventListener(\n    \"click\",\n    function (e) {\n      knight.endPosition = codeToCoordinate(e.target.textContent, board);\n      (0,_Render_renderPieces_js__WEBPACK_IMPORTED_MODULE_1__.renderDestination)(e.target);\n      addSystemMsg(\">  Destination picked\");\n      //console.log(knight.endPosition);\n      knight.movesMade = (0,_find_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n        knight.endPosition,\n        knight.currentPosition,\n        knight.moves()\n      );\n      addSystemMsg(`>  Path Found in ${knight.movesMade.numberOfMoves} moves`);\n      listAllMovesToMsg(knight);\n      addSystemMsg(`>  `);\n      showPath(knight.movesMade, board, knight);\n      startToFinish(knight, board);\n    },\n    { once: true }\n  );\n};\n\nconst addSystemMsg = (msg) => {\n  const systemMsg = document.querySelector(\".systemMsg\");\n  systemMsg.innerHTML += `<div class=\"msg\">${msg}</div>`;\n};\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Logic/utility.js?");

/***/ }),

/***/ "./src/Render/messageBox.js":
/*!**********************************!*\
  !*** ./src/Render/messageBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"messageBox\": () => (/* binding */ messageBox),\n/* harmony export */   \"msgBoxEventListener\": () => (/* binding */ msgBoxEventListener)\n/* harmony export */ });\nconst messageBox = () => {\n  const msgBoxContainer = document.createElement(\"div\");\n  const box = document.createElement(\"div\");\n  msgBoxContainer.classList.add(\"msgBoxContainer\");\n  box.classList.add(\"messageBox\");\n  msgBoxContainer.appendChild(box);\n\n  const addBox = (message) => {\n    document.body.appendChild(msgBoxContainer);\n    box.textContent = message;\n    //document.querySelector(\".container-main\").style.backgroundColor =\n    //(\"rgba(0, 0, 0, 0.7)\");\n  };\n\n  const deleteBox = () => {\n    const msgBoxContainer = document.querySelector(\".msgBoxContainer\");\n    if (msgBoxContainer) {\n      msgBoxContainer.remove();\n      document.querySelector(\".container-main\").style.backgroundColor =\n        \"rgba(0, 0, 0, 0)\";\n    }\n  };\n  return { addBox, deleteBox };\n};\n\nconst msgBoxEventListener = () => {\n  const msgBox = document.querySelector(\".messageBox\");\n  if (msgBox) {\n    window.addEventListener(\"click\", (e) => {\n      messageBox().deleteBox();\n      //console.log(e);\n    });\n  }\n};\n\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/messageBox.js?");

/***/ }),

/***/ "./src/Render/renderBoard.js":
/*!***********************************!*\
  !*** ./src/Render/renderBoard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Logic_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Logic/board */ \"./src/Logic/board.js\");\n\n\nconst renderBoard = (aChessBoard) => {\n  const board = document.createElement(\"div\");\n  board.classList.add(\"chessBoard\");\n  document.querySelector(\".container-main\").appendChild(board);\n  aChessBoard.board.forEach((row, i) => {\n    const rows = document.createElement(\"div\");\n    rows.classList.add(\"row\");\n    rows.classList.add(`${8 - i}`);\n    row.forEach((column) => {\n      const c = document.createElement(\"div\");\n      c.classList.add(\"column\");\n      c.classList.add(column.code);\n      c.id = column.code;\n      c.textContent = column.code;\n      rows.appendChild(c);\n    });\n    board.appendChild(rows);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderBoard);\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderBoard.js?");

/***/ }),

/***/ "./src/Render/renderPieces.js":
/*!************************************!*\
  !*** ./src/Render/renderPieces.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeKnight\": () => (/* binding */ removeKnight),\n/* harmony export */   \"renderDestination\": () => (/* binding */ renderDestination),\n/* harmony export */   \"renderKnight\": () => (/* binding */ renderKnight),\n/* harmony export */   \"renderMoves\": () => (/* binding */ renderMoves)\n/* harmony export */ });\nconst renderKnight = (chessBox) => {\n  chessBox.innerHTML += `<div class=\"knight\">k</div>`;\n};\nconst removeKnight = (chessBox) => {\n  const knight = document.querySelector(\".column>.knight\");\n  chessBox.removeChild(knight);\n};\nconst renderMoves = (chessBox, i) => {\n  chessBox.innerHTML += `<div class=\"moves\">${i}</div>`;\n  chessBox.style.backgroundColor = \"rgba(77, 76, 76, 0.462)\";\n};\n\nconst renderDestination = (chessBox) => {\n  chessBox.innerHTML += `<div class=\"endContainer\"><div class=\"destination\">E</div></div>`;\n  chessBox.style.backgroundColor = \"rgba(31, 16, 106, 0.80)\";\n};\n\n\n\n//# sourceURL=webpack://weatherapi/./src/Render/renderPieces.js?");

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