(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CourseConsole"] = factory();
	else
		root["CourseConsole"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "34f5a91608497189d179";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"CourseConsole": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/course/js/Console/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * View for Course Assignments
 * /cl/console/course/assignments
 *
 * Displays all assignments with links for options.
  * @constructor AssignmentsComponentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      section: null,
      assignmentLinks: this.$site.console.course.assignmentLinks
    };
  },
  created: function created() {
    this.$parent.setTitle(': Assignments');
    var member = this.user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
  },
  methods: {
    assignmentLink: function assignmentLink(assignment, route) {
      return this.$site.root + '/cl/console' + route.replace(':assigntag', assignment.tag);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
/* harmony import */ var _EmailEditorComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailEditorComponent.vue */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  data: function data() {
    return {
      all: false,
      flags: {},
      users: {},
      composing: false,
      toUsers: []
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'emailEditor': _EmailEditorComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var member = this.$store.state.user.user.member;
    this.setTitle(': Course Email');
    this.addSendEmail();
  },
  methods: {
    allChange: function allChange() {
      for (var id in this.flags) {
        this.flags[id] = this.all;
      }
    },
    ensure: function ensure(users) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var user = _step.value;

          if (this.flags[user.id] === undefined) {
            this.$set(this.flags, user.id, false);
            this.users[user.id] = user;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    addSendEmail: function addSendEmail() {
      var _this = this;

      this.sendEmail = this.addNav2('Send Email', 3, function () {
        _this.toUsers = [];

        for (var id in _this.flags) {
          if (_this.flags[id]) {
            _this.toUsers.push(_this.users[id]);
          }
        }

        console.log(_this.toUsers);

        if (_this.toUsers.length === 0) {
          new dialog_cl__WEBPACK_IMPORTED_MODULE_2__["default"].MessageBox('No indicated members!', 'Must specify members to send email to.', dialog_cl__WEBPACK_IMPORTED_MODULE_2__["default"].MessageBox.OK, function () {});
          return;
        }

        _this.removeNav2(_this.sendEmail);

        _this.composing = true;
      });
    },
    cancelEmail: function cancelEmail() {
      this.composing = false;
      this.addSendEmail();
    },
    doneSending: function doneSending() {
      this.composing = false;
      this.all = false;

      for (var id in this.flags) {
        this.flags[id] = false;
      }

      this.addSendEmail();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var MaskVue = Site.Site.MaskVue;
var MAX_DISPLAYED = 10;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['to'],
  data: function data() {
    return {
      displayTo: [],
      subject: '',
      mask: false
    };
  },
  components: {
    maskVue: MaskVue
  },
  mounted: function mounted() {
    var element = this.$refs['editor'];
    this.editor = new this.$site.Editor(element, {
      tab: true,
      autoIndent: true
    });
    this.displayTo = [];

    for (var i = 0; i < this.to.length && i < MAX_DISPLAYED; i++) {
      this.displayTo.push(this.to[i]);
    }
  },
  methods: {
    cancel: function cancel() {
      this.$emit('cancel');
    },
    submit: function submit() {
      var _this = this;

      if (this.mask) {
        return;
      }

      var subject = this.subject.trim();

      if (subject === '') {
        this.$site.toast(this, 'Must provide a subject');
        return;
      }

      var message = this.editor.textarea.value;

      if (message === '') {
        this.$site.toast(this, 'Must provide a message');
        return;
      }

      var to = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.to[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var user = _step.value;

          if (user.email === null) {
            continue;
          }

          to.push({
            name: user.name,
            email: user.email
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (to.length === 0) {
        this.$emit('done');
        return;
      }

      var params = {
        to: to,
        subject: subject,
        message: message
      };
      this.mask = true;
      this.$site.api.post('/api/course/email', params).then(function (response) {
        _this.mask = false;

        if (!response.hasError()) {
          _this.$emit('done');
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.mask = false;

        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      assignment: null,
      date: null,
      extensions: null,
      fpConfig: {
        enableTime: true,
        dateFormat: "m-d-Y h:iK",
        defaultHour: 23,
        defaultMinute: 55,
        wrap: true
      }
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'flatPickr': vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  mounted: function mounted() {
    var _this = this;

    var member = this.$store.state.user.user.member;
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.setTitle(': ' + this.assignment.shortname + ' Extensions');
    var query = {
      semester: member.semester,
      section: member.section
    };
    Site.api.get('/api/course/members/meta/get/extensions/' + this.assigntag, query).then(function (response) {
      if (!response.hasError()) {
        var data = response.getData('member-meta');

        if (data !== null) {
          _this.extensions = [];

          for (var id in data.attributes) {
            var time = data.attributes[id];

            if (time === null || time === undefined) {
              _this.extensions[+id] = '';
            } else {
              _this.extensions[+id] = time * 1000;
            }
          }
        }
      } else {
        Site.toast(_this, response);
      }
    })["catch"](function (error) {
      console.log(error);
      Site.toast(_this, error);
    });
  },
  methods: {
    change: function change(event, user) {
      var _this2 = this;

      var str = event[0];
      var time = str !== '' ? new Date(str).getTime() / 1000 : null;
      var query = {
        value: time
      };
      Site.api.post("/api/course/members/meta/set/".concat(user.member.id, "/extensions/").concat(this.assigntag), query).then(function (response) {
        if (!response.hasError()) {} else {
          Site.toast(_this2, response);
        }
      })["catch"](function (error) {
        console.log(error);
        Site.toast(_this2, error);
      });
    },
    clear: function clear(user) {
      Site.Vue.set(this.extensions, +user.member.id, '');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _MemberDropsComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberDropsComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue");
/* harmony import */ var _Members_Member_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Members/Member.js */ "./vendor/cl/course/js/Members/Member.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Vue = Site.Vue;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      bulkFiles: null
    };
  },
  methods: {
    bulkUpload: function bulkUpload() {
      var _this = this;

      if (this.bulkFiles === null || this.bulkFiles.length < 1) {
        return;
      }

      var file = this.bulkFiles[0];
      var reader = new FileReader(); // Closure to capture the file information.

      reader.onload = function (e) {
        var member = _this.$store.state.user.user.member;
        var data = {
          file: e.target.result,
          semester: member.semester,
          section: member.section
        };
        Site.api.post('/api/course/members/bulk', data).then(function (response) {
          if (!response.hasError()) {
            var drops = response.getData('drops');

            if (drops !== null && drops.attributes.length > 0) {
              var dropsForVue = [];
              drops.attributes.forEach(function (drop) {
                console.log(drop);
                var user = new Users.User(drop);
                user.drop = false;
                dropsForVue.push(user);
              });
              new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
                title: 'Dropped Course Members',
                content: '<div id="drops"></div>',
                addClass: 'cl-bulk-upload-dlg',
                buttons: [{
                  contents: 'Drop',
                  focus: true,
                  click: function click(dialog) {
                    dialog.close();
                    var ids = [];
                    dropsForVue.forEach(function (user) {
                      if (user.drop) {
                        ids.push(user.member.id);
                      }
                    });

                    if (ids.length > 0) {
                      Site.api.post('/api/course/members/drops', {
                        drops: ids
                      }).then(function (response) {
                        if (!response.hasError()) {
                          window.history.go();
                        } else {
                          console.log(response);
                          Site.toast(_this, response);
                        }
                      })["catch"](function (error) {
                        console.log(error);
                        Site.toast(_this, error);
                      });
                    } else {
                      window.history.go();
                    }
                  }
                }, {
                  contents: 'Cancel',
                  focus: true,
                  click: function click(dialog) {
                    dialog.close();
                  }
                }]
              }); // Create a Vue inside the dialog box

              new Vue({
                el: '#drops',
                data: function data() {
                  return {
                    drops: dropsForVue
                  };
                },
                template: "<drops :drops=\"drops\"></drops>",
                components: {
                  'drops': _MemberDropsComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
                }
              });
            } else {
              window.history.go();
            }
          } else {
            console.log(response);
            Site.toast(_this, response);
          }
        })["catch"](function (error) {
          console.log(error);
          Site.toast(_this, error);
        });
      };

      reader.onerror = function (e) {
        Site.toast(this, "Error reading file");
      };

      reader.onabort = function (e) {
        Site.toast(this, "File read aborted");
      }; // Read in the file


      reader.readAsText(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      drops: null,
      all: false
    };
  },
  methods: {
    checkAll: function checkAll(event) {
      var _this = this;

      this.drops.forEach(function (drop) {
        drop.drop = _this.all;
      });
    }
  },
  mounted: function mounted() {
    this.drops = this.$parent.drops;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_Member_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Members/Member.js */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrevNextMember.vue */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var FetcherVue = Site.FetcherVue;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['id'],
  data: function data() {
    return {
      legend: this.id === 'new' ? 'New Member' : 'Edit Member',
      roles: this.visibleRoles,
      edituser: null,
      userId: '',
      name: '',
      email: '',
      role: 'T',
      timer: null,
      seq: 1,
      fetched: false
    };
  },
  watch: {
    userId: function userId(after, before) {
      var _this = this;

      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this.fetch(after);
      }, 300);
    },
    '$route': function $route(to, from) {
      this.take();
    }
  },
  computed: Site.Vuex.mapState({
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  components: {
    'fetcher': FetcherVue,
    'prevNext': _PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  beforeCreate: function beforeCreate() {
    var member = new _Members_Member_js__WEBPACK_IMPORTED_MODULE_0__["Member"]();
    var roles = member.getRoles();
    this.visibleRoles = {};

    for (var role in roles) {
      if (roles[role].skip !== true) {
        this.visibleRoles[role] = roles[role];
      }
    }
  },
  mounted: function mounted() {
    this.take();
  },
  methods: {
    take: function take() {
      var _this2 = this;

      if (this.id === 'new') {
        this.$parent.setTitle(': Add Course Member');
        this.$nextTick(function () {
          _this2.$refs.userid.select();
        });
        this.edituser = null;
      } else {
        this.$parent.setTitle(': Course Member');
        var member = this.$store.state.user.user.member;
        var query = {
          id: this.id,
          semester: member.semester,
          section: member.section
        };
        this.$store.dispatch('members/get', query).then(function (user) {
          _this2.edituser = user;
          _this2.userId = user.userId;
          _this2.name = user.name !== null ? user.name : '';
          _this2.email = user.email !== null ? user.email : '';
          _this2.role = user.role();
          _this2.fetched = true;

          _this2.$nextTick(function () {
            _this2.$refs.userid.select();
          });
        })["catch"](function (msg) {
          _this2.$site.toast(_this2, msg);

          setTimeout(function () {
            _this2.$router.push({
              name: 'members'
            });
          }, 3000);
        });
      }
    },
    fetch: function fetch(userId) {
      var _this3 = this;

      if (this.id !== 'new') {
        return;
      }

      userId = userId.trim();

      if (userId === '') {
        this.fetched = false;
        return;
      }

      this.seq++;
      this.$site.api.get('/api/users', {
        userId: userId,
        seq: this.seq
      }).then(function (response) {
        if (!response.hasError()) {
          // This protects from out-of-order processing
          // of results from the server...
          var seq = response.getData('seq');

          if (+seq.id !== _this3.seq) {
            return;
          }

          var data = response.getData('users');

          if (data !== null) {
            if (data.attributes.length < 1) {
              // User does not exist
              _this3.fetched = false; //this.name = '';
              //this.email = '';
            } else {
              _this3.fetched = true;
              var user = data.attributes[0];
              _this3.name = user.name !== null ? user.name : '';
              _this3.email = user.email !== null ? user.email : '';
            }
          }
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        console.log(error);

        _this3.$site.toast(_this3, error);
      });
    },
    submit: function submit() {
      var _this4 = this;

      var member = this.$store.state.user.user.member;
      var data = {
        userId: this.userId,
        name: this.name,
        email: this.email,
        role: this.role,
        semester: member.semester,
        section: member.section
      };

      if (this.id !== 'new') {
        data.id = this.id;
      }

      var path = this.id === 'new' ? 'members/new' : 'members/update';
      this.$store.dispatch(path, data).then(function () {
        _this4.$router.push({
          name: 'members'
        });
      })["catch"](function (response) {
        console.log(response);

        _this4.$site.toast(_this4, response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
//
//
//
//
//
//


var FetcherVue = Site.FetcherVue;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    id: {
      "default": 0
    },
    faillink: {
      "default": null
    }
  },
  data: function data() {
    return {
      user: null
    };
  },
  watch: {
    id: function id(to, from) {
      this.fetch();
    }
  },
  mounted: function mounted() {
    this.fetch();
  },
  components: {
    'fetcher': FetcherVue
  },
  methods: {
    fetch: function fetch() {
      var _this = this;

      var member = this.$store.state.user.user.member;
      var query = {
        id: this.id,
        semester: member.semester,
        section: member.section
      };

      if (_StudentsOnly__WEBPACK_IMPORTED_MODULE_0__["StudentsOnly"].get()) {
        query.role = _Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"].STUDENT;
      }

      this.$store.dispatch('members/get', query).then(function (user) {
        _this.user = user;
        _this.userId = user.userId;

        _this.$emit('fetched', _this.user);
      })["catch"](function (msg) {
        Site.toast(_this, msg);

        if (_this.faillink !== null) {
          setTimeout(function () {
            _this.$router.push({
              path: Site.root + _this.faillink
            });
          }, 3000);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var _BulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulkUploadComponent.vue */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var FetcherVue = Users.FetcherVue;
var mapState = Site.Vuex.mapState;
var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * Presentation for all members for editing/viewing
 *
 * Displays all members with links for options.
 * @constructor MembersEditorComponent
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['management'],
  data: function data() {
    return {
      toUser: function toUser(user) {
        return this.root + '/cl/console/management/course/member/' + user.member.id;
      },
      stats: ''
    };
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$store.dispatch('members/more');
    },
    deleteUser: function deleteUser(user) {
      var _this = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Are you sure?', 'Are you sure you want to delete ' + user.name, dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
        _this.$store.dispatch('members/delete', {
          id: user.member.id
        });
      });
    },
    presentUser: function presentUser(user) {
      var content = "<div class=\"cl-dialog\">\n<div class=\"tabular\">\n<p><span class=\"label\">User ID: </span><span>".concat(user.userId, "</span></p>\n<p><span class=\"label\">Name: </span><span>").concat(user.name, "</span></p>\n<p><span class=\"label\">Email: </span><span>").concat(user.email, "</span></p>\n<p><span class=\"label\">Role: </span><span>").concat(user.userRoleName(), "</span></p>\n</div>\n</div>");
      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"]({
        content: content
      });
    },
    computeStats: function computeStats() {
      var roleCnt = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _user = _step.value;

          var _role = _user.role();

          if (roleCnt[_role] === undefined) {
            roleCnt[_role] = 1;
          } else {
            roleCnt[_role]++;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.stats = this.users.length + ' members';
      var user = this.$store.state.user.user;
      var roles = user.getRoles();

      for (var role in roleCnt) {
        var r = roles[role];
        var roleName = r["short"] !== undefined ? r["short"] : r.name;
        this.stats += ' / ' + roleCnt[role] + ' ' + roleName;
      }
    }
  },
  computed: mapState({
    users: function users(state) {
      return state.members.users;
    },
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  watch: {
    users: function users(to, fm) {
      this.computeStats();
    }
  },
  components: {
    'bulk-upload': _BulkUploadComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'fetcher': FetcherVue
  },
  mounted: function mounted() {
    var _this2 = this;

    // Add the 'Add Member' option to the the nav2 navigation bar
    if (this.management) {
      this.addComponent = this.$site.console.components.addNav2Link(this, 'Add Member', 5, function () {
        _this2.$router.push(_this2.$site.root + '/cl/console/management/course/member/new');
      });
    }

    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.$store.commit('members/query', query);
    this.$parent.setTitle(": ".concat(member.semester, "/").concat(member.section, " Members")); // We reset the users state since we may add users

    if (this.management) {
      this.$store.commit('users/reset');
    }

    this.$store.dispatch('members/fetch');
    this.computeStats();
  },
  beforeDestroy: function beforeDestroy() {
    this.$site.console.components.removeNav2(this, this.addComponent);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentsOnly */ "./vendor/cl/course/js/Console/Members/StudentsOnly.js");
//
//
//
//
//
//
//
//
//
//
//



var FetcherVue = Site.FetcherVue;
/**
 * Member fetcher component that can be used by views.
 *
 * @constructor MembersFetcherComponentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  // If the fetching value it true, the using client
  // is fetching more than just the membership and we will
  // wait for that as well.
  props: {
    fetching: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      students: false,
      studentsElement: null
    };
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$store.dispatch('members/more');
    },

    /**
     * Add "Students Only" to the menu bar
     * @memberof MembersFetcherComponentVue
     */
    addStudentsOnly: function addStudentsOnly() {
      this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].get();
      var element = this.$refs['students-only'];
      element.parentNode.removeChild(element);
      var extra = document.querySelector('div.cl-section-component span.extra');
      extra.appendChild(element);
      element.style.display = 'inline-block';
      this.studentsElement = element;
    },
    studentsOnlyChanged: function studentsOnlyChanged() {
      _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].set(this.students);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    users: function users(state) {
      if (this.students) {
        return state.members.users.filter(function (user) {
          return user.role() === _Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"].STUDENT;
        });
      } else {
        return state.members.users;
      }
    },
    fetcher: function fetcher(state) {
      return state.members.fetcher;
    }
  }),
  components: {
    'fetcher': FetcherVue
  },
  mounted: function mounted() {
    var _this = this;

    this.students = _StudentsOnly__WEBPACK_IMPORTED_MODULE_2__["StudentsOnly"].get();
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.$store.commit('members/query', query);
    this.$store.dispatch('members/fetch');
    setTimeout(function () {
      _this.addStudentsOnly();
    }, 100);
  },
  beforeDestroy: function beforeDestroy() {
    this.studentsElement.parentNode.removeChild(this.studentsElement);
    var extras = document.querySelectorAll('div.cl-section-component span.extra');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  data: function data() {
    return {
      link: ''
    };
  },
  watch: {
    user: function user(to, fm) {
      var user = this.user;
      var link = this.link;

      if (user !== null && user.prev !== undefined) {
        this.$set(this.$site.console.components, 'nav2left', {
          template: "<router-link title=\"Previous Member\" :to=\"link + user.prev.member.id\"><img :src=\"icon\" alt=\"Previous Member\"></router-link>",
          data: function data() {
            return {
              icon: this.$site.root + '/vendor/cl/site/img/previcon.png',
              user: user,
              link: link
            };
          }
        });
      } else {
        this.$set(this.$site.console.components, 'nav2left', null);
      }

      if (user !== null && user.next !== undefined) {
        this.$set(this.$site.console.components, 'nav2right', {
          template: "<router-link title=\"Next Member\" :to=\"link + user.next.member.id\"><img :src=\"icon\" alt=\"Next Member\"></router-link>",
          data: function data() {
            return {
              icon: this.$site.root + '/vendor/cl/site/img/nexticon.png',
              user: user,
              link: link
            };
          }
        });
      } else {
        this.$set(this.$site.console.components, 'nav2right', null);
      }
    }
  },
  mounted: function mounted() {
    // Determine the path
    var path = this.$route.path; // Remove the member ID from the end

    var re = /(^.*)\/([0-9]+)$/;
    var match = path.match(re);

    if (match !== null) {
      this.link = match[1] + '/';
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$set(this.$site.console.components, 'nav2left', null);
    this.$set(this.$site.console.components, 'nav2right', null);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionSelectors_SectionSelect_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SectionSelectors/SectionSelect.vue */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue");
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['short'],
  data: function data() {
    return {
      course: this.$store.state.course.course
    };
  },
  components: {
    'section-select': _SectionSelectors_SectionSelect_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  components: {
    'membersfetcher': _Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.setTitle(': Member Spoofing');
  },
  methods: {
    select: function select(user) {
      var _this = this;

      var params = {
        user: user.id,
        member: user.member.id
      };
      this.$site.api.post('/api/course/members/spoof', params).then(function (response) {
        if (!response.hasError()) {
          window.location = _this.root + '/';
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue");
/* harmony import */ var _Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members/PrevNextMember.vue */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue");
/* harmony import */ var _Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Members/MemberFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag', 'memberid'],
  data: function data() {
    return {
      submissionsLink: '/cl/console/course/submissions/' + this.assigntag
    };
  },
  components: {
    memberfetcher: _Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    prevNext: _Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    submissions: _SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Submissions');
    this.addNav2Link('Exit', 4, '/cl/console/course/submissions/' + this.assigntag);
  },
  methods: {
    fetched: function fetched(user) {
      var assignment = user.member.getAssignment(this.$store, this.assigntag);
      this.$parent.setTitle(': ' + user.name + ' ' + assignment.shortname + ' Submissions');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submission_Submission_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Submission/Submission.vue */ "./vendor/cl/course/js/Submission/Submission.vue");
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user', 'assigntag'],
  data: function data() {
    return {
      assignment: null,
      submissions: []
    };
  },
  watch: {
    user: function user() {
      this.submissions = [];
      this.fetch(this.user);
    }
  },
  components: {
    submissionVue: _Submission_Submission_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.fetch(this.user);
  },
  methods: {
    fetch: function fetch(user) {
      var _this = this;

      var section = user.member.getSection(this.$store);
      this.assignment = user.member.getAssignment(this.$store, this.assigntag);

      if (this.assignment.submissions === undefined) {
        // This assignment has no submissions
        this.submissions = [];
        return;
      }

      this.$site.api.get('/api/course/submission/submissions/' + this.assigntag + '/' + user.member.id, {}).then(function (response) {
        if (!response.hasError()) {
          var submissions = response.getDataAll('submissions');
          _this.submissions = [];

          for (var i = 0; i < submissions.length; i++) {
            _this.submissions.push(submissions[i].attributes);

            _this.submissions[i].user = user;
          }
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! course-cl/js/Console/Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
/* harmony import */ var _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsLinks.vue */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var ConsoleComponentBase = Site.ConsoleComponentBase;
/**
 * Vue for submissions for all students.
 * Provides links to a view of an individual student's submissions.
 * @constructor SubmissionsComponentVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assigntag'],
  data: function data() {
    return {
      link: Site.root + '/cl/console/course/submissions/' + this.assigntag + '/',
      assignment: null
    };
  },
  components: {
    'membersfetcher': course_cl_js_Console_Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'submissionsLinks': _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var member = this.$store.state.user.user.member;
    var query = {
      semester: member.semester,
      section: member.section
    };
    this.section = this.$store.getters['course/section'](member.semester, member.section);
    this.assignment = this.section.getAssignment(this.assigntag);
    this.$parent.setTitle(': ' + this.assignment.shortname + ' Submissions');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
//
//
//
//
//
//

var ConsoleComponentBase = Site.ConsoleComponentBase;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assignment'],
  data: function data() {
    return {
      links: []
    };
  },
  watch: {
    assignment: function assignment() {
      this.take();
    }
  },
  mounted: function mounted() {
    this.take();
  },
  methods: {
    take: function take() {
      this.links = [];

      if (this.assignment !== null && this.assignment.submissions !== undefined) {
        // Collect up the submission links
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.assignment.submissions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var submission = _step.value;

            if (submission.bulk === true) {
              var bulk = {
                text: 'Bulk download of ' + submission.name,
                url: '/cl/course/submissions/' + this.assignment.tag + '/' + submission.tag,
                atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF
              };
              this.links.push(bulk);
            } // Any additional submission links


            if (submission.links !== undefined) {
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = submission.links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var link = _step2.value;
                  this.links.push(link);
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    return {
      course: this.$store.state.course.course,
      selected: "FS18/730",
      changeSection: function changeSection() {
        var data = _this.selected.split('/');

        var params = {
          semester: data[0],
          section: data[1]
        };
        Site.api.post('/api/course/members/sectionselect', params).then(function (response) {
          if (!response.hasError()) {
            var user = response.getData('user');

            _this.$store.commit('user/set', user.attributes);

            _this.$store.commit('members/reset');

            window.history.go();
          } else {
            Site.toast(_this, response);
          }
        })["catch"](function (error) {
          Site.toast(_this, error);
        });
      }
    };
  },
  mounted: function mounted() {
    var member = this.$store.state.user.user.member;
    this.selected = member.semester + '/' + member.section;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue */ "./vendor/cl/course/js/Submission/SubmitText.vue");
/* harmony import */ var _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitProgram.vue */ "./vendor/cl/course/js/Submission/SubmitProgram.vue");
/* harmony import */ var _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitImage.vue */ "./vendor/cl/course/js/Submission/SubmitImage.vue");
/* harmony import */ var _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitUnknown.vue */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue");
/* harmony import */ var _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submitted.vue */ "./vendor/cl/course/js/Submission/Submitted.vue");
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      staff: false,
      submitter: 'submit-text',
      submissions: []
    };
  },
  components: {
    submitText: _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    submitProgram: _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    submitImage: _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    submitUnknown: _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    submitted: _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {
    this.submissions = this.submission.submissions;
    var user = this.$store.state.user.user;
    this.staff = user.atLeast(_Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF);

    switch (this.submission.type) {
      case 'program':
        this.submitter = 'submit-program';
        break;

      case 'text':
        this.submitter = 'submit-text';
        break;

      case 'image':
        this.submitter = 'submit-image';
        break;

      default:
        this.submitter = 'submit-unknown';
        break;
    }
  },
  methods: {
    newSubmissions: function newSubmissions(value) {
      this.submissions = value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      files: null,
      action: null,
      submitting: false
    };
  },
  mounted: function mounted() {
    var system = this.submission.teaming !== null ? 'team' : 'course';
    this.action = "".concat(this.$site.root, "/cl/api/").concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag);
  },
  methods: {
    load: function load() {
      if (!this.submitting) {
        return;
      }

      this.submitting = false;
      var json = frames['upload_target_' + this.submission.tag].document.getElementsByTagName("body")[0].innerHTML;
      var response = new this.$site.APIResponse(JSON.parse(json));

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        this.$site.toast(this, "Submission successfully saved to the server");
      } else {
        this.$site.toast(this, response);
      }
    },
    submit: function submit() {
      this.submitting = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  data: function data() {
    return {
      files: null,
      action: null,
      submitting: false
    };
  },
  mounted: function mounted() {
    var system = this.submission.teaming !== null ? 'team' : 'course';
    this.action = "".concat(this.$site.root, "/cl/api/").concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag);
  },
  methods: {
    load: function load() {
      if (!this.submitting) {
        return;
      }

      this.submitting = false;
      var json = frames['upload_target_' + this.submission.tag].document.getElementsByTagName("body")[0].innerHTML;
      var response;

      try {
        response = new this.$site.APIResponse(JSON.parse(json));
      } catch (exception) {
        console.log(exception);
        this.$site.toast(this, "Error during submission");
        return;
      }

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        this.$site.toast(this, "Submission successfully saved to the server");
      } else {
        this.$site.toast(this, response);
      }
    },
    submit: function submit() {
      this.submitting = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission'],
  mounted: function mounted() {
    var element = this.$refs['editor'];
    this.editor = new this.$site.Editor(element, {
      height: this.submission.height,
      classes: ['yellow-pad']
    });
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var text = this.editor.textarea.value.trim();

      if (text === '') {
        Site.toast(this, 'You must enter some text to submit');
        return;
      }

      var params = {
        type: 'text/plain',
        text: text
      };
      var system = this.submission.teaming !== null ? 'team' : 'course';
      this.$site.api.post("/api/".concat(system, "/submission/submit/").concat(this.submission.assignTag, "/").concat(this.submission.tag), params).then(function (response) {
        if (!response.hasError()) {
          _this.editor.textarea.value = '';

          _this.$emit('new_submissions', response.getData('submissions').attributes);

          _this.$site.toast(_this, "Submission successfully saved to the server");
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['options']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Component that displays the list of submissions.
 * @constructor SubmittedVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['submission', 'submissions'],
  data: function data() {
    return {
      previewTxt: null,
      previewImg: null,
      previewTime: null,
      result: null
    };
  },
  components: {
    submittedItem: _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var service = this.submission.teaming !== null ? 'team' : 'course';

    if (this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
      this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(this.submissions[0].id);
      this.previewTime = this.$site.TimeFormatter.relativeUNIX(this.submissions[0].date);
    }

    if (this.submission.preview !== undefined) {
      this.previewTxt = this.submission.preview.text;
      this.previewTime = this.$site.TimeFormatter.relativeUNIX(this.submission.preview.date);
    }
  },
  watch: {
    submissions: function submissions() {
      var service = this.submission.teaming !== null ? 'team' : 'course';

      if (this.submissions.length > 0 && this.submissions[0].type.substr(0, 6) === 'image/') {
        this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(this.submissions[0].id);
      } else {
        this.previewImg = null;
      }
    }
  },
  methods: {
    previewer: function previewer(submission) {
      var _this = this;

      this.previewTxt = "\n";
      this.previewTime = '&nbsp;';
      var service = this.submission.teaming === null ? 'course' : 'team';
      this.$site.api.get("/api/".concat(service, "/submission/get/").concat(this.submission.assignTag, "/").concat(this.submission.tag, "/").concat(submission.id), {}).then(function (response) {
        if (!response.hasError()) {
          var _submission = response.getData('submission').attributes;
          _this.previewTxt = _submission.text;
          _this.previewTime = _this.$site.TimeFormatter.relativeUNIX(_submission.date);
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    },
    preview_img: function preview_img(submission) {
      var service = this.submission.teaming === null ? 'course' : 'team';

      if (submission.type.substr(0, 6) === 'image/') {
        this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(submission.id);
        this.previewTime = this.$site.TimeFormatter.relativeUNIX(submission.date);
      } else {
        this.previewImg = null;
      }
    },
    analysisResult: function analysisResult(result) {
      this.result = result;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: TEXT_TYPES, IMG_TYPES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return TEXT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return IMG_TYPES; });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//  import MenuVue from 'site-cl/js/UI/Menu.vue';
var MenuVue = Site.Site.MenuVue;
var TEXT_TYPES = ['text/plain', 'text/html'];
var IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'tag', 'submission', 'analysis', 'teaming', 'type'],
  data: function data() {
    return {
      root: Site.root,
      toDownload: null
    };
  },
  components: {
    menuVue: MenuVue
  },
  mounted: function mounted() {
    var service = this.teaming !== null ? 'team' : 'course';
    this.toDownload = "".concat(this.$site.root, "/cl/").concat(service, "/submission/download/").concat(this.submission.id);
  },
  methods: {
    isText: function isText() {
      return this.type !== 'program' && TEXT_TYPES.indexOf(this.submission.type) >= 0;
    },
    isImage: function isImage() {
      return IMG_TYPES.indexOf(this.submission.type) >= 0;
    },
    display: function display() {
      var disp = this.$site.TimeFormatter.absoluteUNIX(this.submission.date, "long");

      if (this.submission.name !== null) {
        disp += ': ' + this.submission.name;
      }

      if (this.submission.by !== undefined) {
        disp += ' by ' + this.submission.by;
      }

      return disp;
    },
    selectText: function selectText() {
      this.$emit('preview', this.submission);
    },
    select: function select() {
      this.$emit('preview_img', this.submission);
    },
    showAnalysis: function showAnalysis(analysis) {
      var _this = this;

      var service = this.teaming !== null ? 'team' : 'course';
      this.$site.api.get("/api/".concat(service, "/submission/analysis/").concat(this.assigntag, "/").concat(this.tag, "/").concat(analysis.tag, "/").concat(this.submission.id), {}).then(function (response) {
        if (!response.hasError()) {
          var analysisResult = response.getData('submission-analysis').attributes;

          _this.$emit('result', analysisResult);
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* Not scoped */\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "form[data-v-2e54e74b] {\n  position: relative;\n}\ndiv.to[data-v-2e54e74b] {\n  margin: 1em 0;\n  font-style: italic;\n}\ndiv.to > div[data-v-2e54e74b] {\n    font-style: normal;\n    font-size: 0.85em;\n}\ndiv.to > div span.no-email[data-v-2e54e74b] {\n      color: red;\n      font-style: italic;\n}\ndiv.subject[data-v-2e54e74b] {\n  margin: 1em 0;\n}\ndiv.subject label[data-v-2e54e74b] {\n    font-style: italic;\n}\ndiv.subject input[type=text][data-v-2e54e74b] {\n    display: block;\n    margin: 0.2em 0 0 0;\n    font-style: normal;\n    width: 25em;\n}\ndiv.buttons input[data-v-2e54e74b] {\n  width: 6em;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* Not scoped */\ndiv.cl-extensions table td {\n  text-align: center;\n}\ndiv.cl-extensions table td > div > input {\n    text-align: center;\n}\ndiv.cl-extensions table td:nth-child(1), div.cl-extensions table td:nth-child(2), div.cl-extensions table td:nth-child(3) {\n  text-align: left;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.cl-bulk-upload form {\n  margin-bottom: 1em;\n}\ndiv.cl-bulk-upload fieldset > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.cl-bulk-upload fieldset > div > div {\n    padding-right: 1em;\n}\ndiv.cl-bulk-upload fieldset > div > div p {\n      margin: 0 0 0.5em 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child {\n      margin: 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child input {\n        width: 6.5em;\n}\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div#drops-component[data-v-2ffdc580] {\n  padding: 1em;\n}\ndiv#drops-component th[data-v-2ffdc580]:first-child {\n    text-align: center;\n    vertical-align: bottom;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.cl-section-component[data-v-c19494e2] {\n  white-space: nowrap;\n  vertical-align: top;\n  font-size: 0.95em;\n  color: white;\n  margin: 0;\n  padding: 1px 0 0 0;\n}\ndiv.cl-section-component > span[data-v-c19494e2]:first-child {\n    padding: 0 14px 0 0;\n}\ndiv.cl-section-component > span[data-v-c19494e2]:last-child {\n    padding: 0;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "select[data-v-ad33d900] {\n  font-size: 0.95em;\n  background: white;\n  color: black;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-assignments" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("p", [_vm._v(_vm._s(_vm.section.name))]),
        _vm._v(" "),
        _vm._l(_vm.section.assignments.categories, function(category) {
          return _c("div", [
            _c("h2", [_vm._v(_vm._s(category.name))]),
            _vm._v(" "),
            _c(
              "ul",
              _vm._l(category.assignments, function(assignment) {
                return _c("li", { key: assignment.tag }, [
                  _vm._v(_vm._s(assignment.name) + "\n        "),
                  _c(
                    "span",
                    { staticClass: "small" },
                    [
                      _c(
                        "span",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to:
                                  _vm.root +
                                  "/cl/console/course/extensions/" +
                                  assignment.tag
                              }
                            },
                            [_vm._v("extensions")]
                          ),
                          _vm._v(" \n          ")
                        ],
                        1
                      ),
                      _vm._v(" "),
                      assignment.submissions !== undefined
                        ? _c(
                            "span",
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to:
                                      _vm.root +
                                      "/cl/console/course/submissions/" +
                                      assignment.tag
                                  }
                                },
                                [_vm._v("submissions")]
                              ),
                              _vm._v(" \n          ")
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.assignmentLinks, function(link) {
                        return assignment[link.property] !== undefined &&
                          assignment[link.property] !== false
                          ? _c(
                              "span",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: _vm.assignmentLink(
                                        assignment,
                                        link.route
                                      )
                                    }
                                  },
                                  [_vm._v(_vm._s(link.name))]
                                ),
                                _vm._v(" \n          ")
                              ],
                              1
                            )
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ])
              }),
              0
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        !_vm.composing
          ? _c("membersfetcher", {
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(fetcher) {
                      return [
                        _c(
                          "table",
                          {
                            staticClass: "small",
                            attrs: { ensure: _vm.ensure(fetcher.users) }
                          },
                          [
                            _c("tr", [
                              _c("th", { staticClass: "center" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.all,
                                      expression: "all"
                                    }
                                  ],
                                  attrs: { type: "checkbox" },
                                  domProps: {
                                    checked: Array.isArray(_vm.all)
                                      ? _vm._i(_vm.all, null) > -1
                                      : _vm.all
                                  },
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$a = _vm.all,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              (_vm.all = $$a.concat([$$v]))
                                          } else {
                                            $$i > -1 &&
                                              (_vm.all = $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1)))
                                          }
                                        } else {
                                          _vm.all = $$c
                                        }
                                      },
                                      _vm.allChange
                                    ]
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("th", [_vm._v("User")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Name")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Email")]),
                              _vm._v(" "),
                              _c("th", [_vm._v("Role")])
                            ]),
                            _vm._v(" "),
                            _vm._l(fetcher.users, function(user) {
                              return _c("tr", { key: user.id }, [
                                _c("td", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.flags[user.id],
                                        expression: "flags[user.id]"
                                      }
                                    ],
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: Array.isArray(_vm.flags[user.id])
                                        ? _vm._i(_vm.flags[user.id], null) > -1
                                        : _vm.flags[user.id]
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = _vm.flags[user.id],
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = null,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                _vm.flags,
                                                user.id,
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                _vm.flags,
                                                user.id,
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(_vm.flags, user.id, $$c)
                                        }
                                      }
                                    }
                                  })
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(user.userId))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(user.name))]),
                                _vm._v(" "),
                                _c("td", [
                                  _c(
                                    "a",
                                    { attrs: { href: "mailto:" + user.email } },
                                    [_vm._v(_vm._s(user.email))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(user.roleName()))])
                              ])
                            })
                          ],
                          2
                        )
                      ]
                    }
                  }
                ],
                null,
                false,
                1213173090
              )
            })
          : _c("email-editor", {
              attrs: { to: _vm.toUsers },
              on: { cancel: _vm.cancelEmail, done: _vm.doneSending }
            })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c("mask-vue", { attrs: { mask: _vm.mask } }, [
        _vm._v("Sending Email...")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "to" },
        [
          _vm._v("To\n    "),
          _vm._l(_vm.displayTo, function(user) {
            return _c("div", { key: user.id }, [
              _vm._v("\n      " + _vm._s(user.name) + "\n      <"),
              user.email === null
                ? _c("span", { staticClass: "no-email" }, [_vm._v("no email")])
                : _c("span", [_vm._v(_vm._s(user.email))]),
              _vm._v(">\n    ")
            ])
          }),
          _vm._v(" "),
          this.to.length > this.displayTo.length
            ? _c("div", [_vm._v("...")])
            : _vm._e()
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "subject" }, [
        _c("label", [
          _vm._v("Subject "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.subject,
                expression: "subject"
              }
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.subject },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.subject = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { ref: "editor" }),
      _vm._v(" "),
      _c("p", { staticClass: "buttons" }, [
        _c("input", { attrs: { type: "submit", value: "Send" } }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "button", value: "Cancel" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.cancel($event)
            }
          }
        })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-extensions" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
          attrs: { fetching: _vm.extensions === null },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _vm.extensions !== null
                    ? _c(
                        "table",
                        { staticClass: "small" },
                        [
                          _c("tr", [
                            _c("th", [_vm._v("User")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Role")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Extension")])
                          ]),
                          _vm._v(" "),
                          _vm._l(fetcher.users, function(user) {
                            return _c("tr", [
                              _c("td", [_vm._v(_vm._s(user.userId))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user.roleName()))]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "flatpickr" },
                                  [
                                    _c("flat-pickr", {
                                      attrs: {
                                        config: _vm.fpConfig,
                                        "data-input": ""
                                      },
                                      on: {
                                        "on-change": function($event) {
                                          return _vm.change($event, user)
                                        }
                                      },
                                      model: {
                                        value: _vm.extensions[+user.member.id],
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.extensions,
                                            +user.member.id,
                                            $$v
                                          )
                                        },
                                        expression:
                                          "extensions[+user.member.id]"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          "data-toggle": "",
                                          title: "Toggle Calendar"
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass:
                                            "icons-cl icons-cl-calendar"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("a", { attrs: { "data-clear": "" } }, [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            _vm.root +
                                            "/vendor/cl/site/img/x.png",
                                          alt: "delete",
                                          title: "Delete"
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                )
                              ])
                            ])
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-bulk-upload" }, [
    _c("h2", { attrs: { id: "bulk" } }, [
      _vm._v("Bulk course membership uploading")
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "This option accepts files in CSV format as produced by instructor systems. "
      )
    ]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "full",
        attrs: { method: "post", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.bulkUpload()
          }
        }
      },
      [
        _c("fieldset", [
          _c("legend", [_vm._v("Bulk Upload File")]),
          _vm._v(" "),
          _c("div", [
            _c("div", [_vm._v("File to upload: ")]),
            _vm._v(" "),
            _c("div", [
              _c("p", [
                _c("input", {
                  attrs: { name: "bulkfile", type: "file" },
                  on: {
                    change: function($event) {
                      _vm.bulkFiles = $event.target.files
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", { attrs: { type: "submit", value: "Press" } }),
      _vm._v(" to upload the file!")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "drops-component" } }, [
    _c("p", [
      _vm._v(
        "The following users are indicated as dropped from the uploaded course\n  role. Select any you wish to flag as dropped in the system."
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c(
      "table",
      [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.all,
                  expression: "all"
                }
              ],
              attrs: { type: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.all)
                  ? _vm._i(_vm.all, null) > -1
                  : _vm.all
              },
              on: {
                change: [
                  function($event) {
                    var $$a = _vm.all,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.all = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.all = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.all = $$c
                    }
                  },
                  function($event) {
                    $event.preventDefault()
                    return _vm.checkAll($event)
                  }
                ]
              }
            })
          ]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("User")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Role")])
        ]),
        _vm._v(" "),
        _vm._l(_vm.drops, function(user) {
          return _c("tr", [
            _c("td", [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: user.drop,
                    expression: "user.drop"
                  }
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(user.drop)
                    ? _vm._i(user.drop, null) > -1
                    : user.drop
                },
                on: {
                  change: function($event) {
                    var $$a = user.drop,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && _vm.$set(user, "drop", $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          _vm.$set(
                            user,
                            "drop",
                            $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                          )
                      }
                    } else {
                      _vm.$set(user, "drop", $$c)
                    }
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.userId))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.email))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(user.roleName()))])
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "Dropping a student does not remove them from the system, it only\n    changes their status to "
      ),
      _c("em", [_vm._v("dropped")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cl-member-editor content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("prev-next", { attrs: { user: _vm.edituser } }),
        _vm._v(" "),
        _c("fetcher", { attrs: { fetcher: _vm.fetcher } }),
        _vm._v(" "),
        _c("div", [
          _c(
            "form",
            {
              staticClass: "cl-common",
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("input", {
                attrs: { type: "hidden", name: "new", id: "new", value: "" }
              }),
              _vm._v(" "),
              _c("fieldset", [
                _c("legend", [_vm._v(_vm._s(_vm.legend))]),
                _vm._v(" "),
                _c("p", [
                  _c("label", [
                    _vm._v("User ID"),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userId,
                          expression: "userId"
                        }
                      ],
                      ref: "userid",
                      staticClass: "short",
                      attrs: {
                        disabled: _vm.id !== "new",
                        type: "text",
                        size: "20",
                        maxlength: "30"
                      },
                      domProps: { value: _vm.userId },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.userId = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("label", { staticClass: "form_text" }, [
                    _vm._v("Name "),
                    _c("span", { staticClass: "small" }, [
                      _vm._v("(last, first)")
                    ]),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.name,
                          expression: "name"
                        }
                      ],
                      attrs: {
                        disabled: _vm.fetched,
                        type: "text",
                        maxlength: "150"
                      },
                      domProps: { value: _vm.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.name = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("label", { staticClass: "form_text" }, [
                    _vm._v("Email"),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.email,
                          expression: "email"
                        }
                      ],
                      ref: "email",
                      attrs: {
                        disabled: _vm.fetched,
                        type: "email",
                        maxlength: "254"
                      },
                      domProps: { value: _vm.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.email = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "radio-set" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "options" },
                    _vm._l(_vm.roles, function(roleObj, id) {
                      return _c("label", [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.role,
                              expression: "role"
                            }
                          ],
                          attrs: { name: "role", type: "radio" },
                          domProps: {
                            value: id,
                            checked: _vm._q(_vm.role, id)
                          },
                          on: {
                            change: function($event) {
                              _vm.role = id
                            }
                          }
                        }),
                        _vm._v(" " + _vm._s(roleObj.name))
                      ])
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "center" },
                  [
                    _c("button", [_vm._v("Submit")]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to:
                            _vm.root + "/cl/console/management/course/members",
                          tag: "button"
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _vm.edituser !== null && _vm.id !== "new"
            ? _c(
                "p",
                { staticClass: "centerbox primary" },
                [
                  _vm._v(
                    "User fields are not editable in this\n        form. To go the "
                  ),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to:
                          _vm.root +
                          "/cl/console/management/user/" +
                          _vm.edituser.id
                      }
                    },
                    [_vm._v("user editor page for " + _vm._s(_vm.name))]
                  ),
                  _vm._v(" to edit those fields.")
                ],
                1
              )
            : _vm._e()
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "label" }, [_c("em", [_vm._v("Role:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default", null, { user: _vm.user })], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content cl-members-editor" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _vm.fetcher.fetched
          ? _c(
              "div",
              [
                _vm.users.length > 0
                  ? _c("div", [
                      _c(
                        "table",
                        { staticClass: "small" },
                        [
                          _vm._m(0),
                          _vm._v(" "),
                          _vm._l(_vm.users, function(user) {
                            return _c("tr", [
                              _vm.management
                                ? _c(
                                    "td",
                                    { staticClass: "cl-mgmt-options" },
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: _vm.toUser(user) } },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                _vm.root +
                                                "/vendor/cl/site/img/pencil16.png",
                                              alt: "Edit",
                                              title: "Edit"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "a",
                                        {
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.deleteUser(user)
                                            }
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                _vm.root +
                                                "/vendor/cl/site/img/x.png",
                                              alt: "Delete",
                                              title: "Delete"
                                            }
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.management
                                ? _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: _vm.toUser(user) } },
                                        [_vm._v(_vm._s(user.userId))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.management
                                ? _c(
                                    "td",
                                    [
                                      _c(
                                        "router-link",
                                        { attrs: { to: _vm.toUser(user) } },
                                        [_vm._v(_vm._s(user.name))]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.management
                                ? _c("td", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.presentUser(user)
                                          }
                                        }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              _vm.root +
                                              "/vendor/cl/site/img/info16.png",
                                            alt: "View",
                                            title: "View"
                                          }
                                        })
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.management
                                ? _c("td", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.presentUser(user)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(user.userId))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.management
                                ? _c("td", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.presentUser(user)
                                          }
                                        }
                                      },
                                      [_vm._v(_vm._s(user.name))]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("td", [
                                user.email !== null
                                  ? _c(
                                      "a",
                                      {
                                        attrs: { href: "mailto:" + user.email }
                                      },
                                      [_vm._v(_vm._s(user.email))]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "small" }, [
                                _vm._v(_vm._s(user.roleName(true)))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "small" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.timeRelativeUNIX(
                                      user.member.created,
                                      null,
                                      "M-DD-YYYY"
                                    )
                                  )
                                )
                              ])
                            ])
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "center small" }, [
                        _c("em", [_vm._v(_vm._s(_vm.stats))])
                      ])
                    ])
                  : _c("p", { staticClass: "centerbox comp center" }, [
                      _vm._v(
                        "\n        There are currently no members enrolled in this section."
                      )
                    ]),
                _vm._v(" "),
                _vm.management ? _c("bulk-upload") : _vm._e()
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _c("fetcher", { attrs: { fetcher: _vm.fetcher } })
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { attrs: { scope: "col" } }),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("User")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("Email")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("Role")]),
      _vm._v(" "),
      _c("th", { attrs: { scope: "col" } }, [_vm._v("Created")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("label", { ref: "students-only", staticStyle: { display: "none" } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.students,
              expression: "students"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.students)
              ? _vm._i(_vm.students, null) > -1
              : _vm.students
          },
          on: {
            change: [
              function($event) {
                var $$a = _vm.students,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.students = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.students = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.students = $$c
                }
              },
              _vm.studentsOnlyChanged
            ]
          }
        }),
        _vm._v(" Students Only")
      ]),
      _vm._v(" "),
      _c(
        "fetcher",
        { attrs: { fetcher: _vm.fetcher, fetching: _vm.fetching } },
        [
          _vm._t("default", null, { users: _vm.users, students: _vm.students }),
          _vm._v(" "),
          _vm.users.length == 0
            ? _c("p", { staticClass: "centerbox comp center" }, [
                _vm._v(
                  "\n        There are currently no members enrolled in this section."
                )
              ])
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cl-section-component" },
    [
      !_vm.short
        ? _c("span", [
            _vm._v(_vm._s(_vm.course.name) + " " + _vm._s(_vm.course.desc))
          ])
        : _vm._e(),
      _c("section-select"),
      _c("span", { staticClass: "extra" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c("tr", [
                        _c("th", [_vm._v("User")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")])
                      ]),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user1) {
                        return _vm.user.atLeast(user1.role())
                          ? _c("tr", [
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.select(user1)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(user1.userId))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.select(user1)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(user1.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(user1.roleName()))])
                            ])
                          : _vm._e()
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("memberfetcher", {
          attrs: { id: _vm.memberid, faillink: _vm.submissionsLink },
          on: { fetched: _vm.fetched },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("prev-next", { attrs: { user: fetcher.user } }),
                  _vm._v(" "),
                  fetcher.user !== null
                    ? _c(
                        "div",
                        [
                          _c("submissions", {
                            attrs: {
                              user: fetcher.user,
                              assigntag: _vm.assigntag
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.submissions, function(submission) {
      return _c(
        "div",
        [
          _c("h2", [_vm._v(_vm._s(submission.name))]),
          _vm._v(" "),
          _c("submission-vue", { attrs: { submission: submission } })
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("membersfetcher", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(fetcher) {
                return [
                  _c("p", { staticClass: "center" }, [
                    _vm._v("Click on a user to view submissions for that user.")
                  ]),
                  _vm._v(" "),
                  _c("submissions-links", {
                    attrs: { assignment: _vm.assignment }
                  }),
                  _vm._v(" "),
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _c("tr", [
                        _c("th", [_vm._v("User")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")])
                      ]),
                      _vm._v(" "),
                      _vm._l(fetcher.users, function(user) {
                        return _c("tr", [
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: _vm.link + user.member.id } },
                                [_vm._v(_vm._s(user.userId))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _c(
                                "router-link",
                                { attrs: { to: _vm.link + user.member.id } },
                                [_vm._v(_vm._s(user.name))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.roleName()))])
                        ])
                      })
                    ],
                    2
                  )
                ]
              }
            }
          ])
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.links, function(link) {
      return _vm.user.atLeast(link.atLeast)
        ? _c("p", { staticClass: "center" }, [
            _c("a", { attrs: { href: _vm.root + link.url } }, [
              _vm._v(_vm._s(link.text))
            ])
          ])
        : _vm._e()
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.course.sections.length === 1
      ? _c("span", [_vm._v(_vm._s(_vm.selected))])
      : _vm._e(),
    _vm._v(" "),
    _vm.course.sections.length > 1
      ? _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.selected,
                expression: "selected"
              }
            ],
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.selected = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.changeSection
              ]
            }
          },
          _vm._l(_vm.course.sections, function(section) {
            return _c("option", [
              _vm._v(_vm._s(section.semester) + "/" + _vm._s(section.id))
            ])
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "cl-submission" },
    [
      _vm.submission.submit
        ? _c(
            "div",
            {},
            [
              !_vm.submission.open
                ? _c("div", [
                    _c("p", { staticClass: "centerbox comp center" }, [
                      _vm._v("This assignment is not open for submissions.")
                    ]),
                    _vm._v(" "),
                    _vm.staff
                      ? _c(
                          "div",
                          { staticClass: "centerbox primary" },
                          [
                            _vm._m(0),
                            _vm._v(" "),
                            _c(_vm.submitter, {
                              tag: "component",
                              attrs: { submission: _vm.submission },
                              on: { new_submissions: _vm.newSubmissions }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.submission.open
                ? _c(_vm.submitter, {
                    tag: "component",
                    attrs: { submission: _vm.submission },
                    on: { new_submissions: _vm.newSubmissions }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("submitted", {
        attrs: { submission: _vm.submission, submissions: _vm.submissions }
      }),
      _vm._v(" "),
      _vm.submission.additional !== null
        ? _c("div", {
            domProps: { innerHTML: _vm._s(_vm.submission.additional) }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "center" }, [
      _c("em", [_vm._v("...Staff only for submission testing...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        ref: "form",
        staticClass: "file",
        attrs: {
          enctype: "multipart/form-data",
          method: "post",
          action: _vm.action,
          target: "upload_target_" + _vm.submission.tag
        },
        on: { submit: _vm.submit }
      },
      [
        _c("label", [
          _vm._v("Submit: "),
          _c("input", {
            attrs: { type: "file", name: "file" },
            on: {
              change: function($event) {
                _vm.files = $event.target.files
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload",
          attrs: { type: "submit", name: "submit", value: "Upload File" }
        }),
        _vm._v(" "),
        _c("iframe", {
          ref: "iframe",
          staticStyle: {
            width: "0",
            height: "0",
            border: "0px solid #fff",
            display: "none"
          },
          attrs: { name: "upload_target_" + _vm.submission.tag, src: "" },
          on: { load: _vm.load }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        ref: "form",
        staticClass: "file",
        attrs: {
          enctype: "multipart/form-data",
          method: "post",
          action: _vm.action,
          target: "upload_target_" + _vm.submission.tag
        },
        on: { submit: _vm.submit }
      },
      [
        _c("label", [
          _vm._v("Submit: "),
          _c("input", {
            attrs: { type: "file", name: "file" },
            on: {
              change: function($event) {
                _vm.files = $event.target.files
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "upload",
          attrs: { type: "submit", name: "submit", value: "Upload File" }
        }),
        _vm._v(" "),
        _c("iframe", {
          ref: "iframe",
          staticStyle: {
            width: "0",
            height: "0",
            border: "0px solid #fff",
            display: "none"
          },
          attrs: { name: "upload_target_" + _vm.submission.tag, src: "" },
          on: { load: _vm.load }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        attrs: { method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [_c("div", { ref: "editor" }), _vm._v(" "), _vm._m(0)]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("input", { attrs: { type: "submit", value: "Submit" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", [_vm._v("Hello")]),
    _vm._v(" "),
    _c("p", { staticClass: "shoutout" }, [
      _vm._v("Submission type "),
      _c("em", [_vm._v(_vm._s(_vm.options.type))]),
      _vm._v(" is not supported")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.submission.manual !== true
      ? _c(
          "div",
          [
            _vm.submissions.length === 0
              ? [
                  _c("p", { staticClass: "large center" }, [
                    _vm._v("No submissions, yet.")
                  ])
                ]
              : [
                  _c(
                    "table",
                    { staticClass: "small" },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._l(_vm.submissions, function(submitted) {
                        return _c("tr", [
                          _c(
                            "td",
                            [
                              _c("submitted-item", {
                                attrs: {
                                  type: _vm.submission.type,
                                  assigntag: _vm.submission.assignTag,
                                  tag: _vm.submission.tag,
                                  submission: submitted,
                                  analysis: _vm.submission.analysis,
                                  teaming: _vm.submission.teaming
                                },
                                on: {
                                  result: _vm.analysisResult,
                                  preview_img: _vm.preview_img,
                                  preview: _vm.previewer
                                }
                              })
                            ],
                            1
                          )
                        ])
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.submission.type === "text"
                    ? _c("p", { staticClass: "center" }, [
                        _vm._v(
                          "Click on any submission date to display the submission"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.submission.type === "program"
                    ? _c("p", { staticClass: "center" }, [
                        _vm._v("Click on any submission for submission options")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.submission.type === "image"
                    ? _c("p", { staticClass: "center" }, [
                        _vm._v(
                          "Click on any submission to view and for submission options"
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.previewTxt !== null
                    ? _c("div", [
                        _vm.previewTxt !== null
                          ? _c(
                              "pre",
                              { staticClass: "cl-preview yellow-pad" },
                              [_vm._v(_vm._s(_vm.previewTxt))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "cl-preview-time",
                          domProps: { innerHTML: _vm._s(_vm.previewTime) }
                        })
                      ])
                    : _vm._e()
                ]
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.result !== null
      ? _c("pre", { staticClass: "cl-analysis" }, [_vm._v(_vm._s(_vm.result))])
      : _vm._e(),
    _vm._v(" "),
    _vm.previewImg !== null
      ? _c("div", [
          _vm.previewImg !== null
            ? _c("figure", { staticClass: "cl-preview" }, [
                _c("img", { attrs: { src: _vm.previewImg } })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("p", { staticClass: "cl-preview-time" }, [
            _vm._v(_vm._s(_vm.previewTime))
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.submission.html !== undefined
      ? _c("div", { domProps: { innerHTML: _vm._s(_vm.submission.html) } })
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [_c("th", [_vm._v("Submissions")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.isText()
        ? [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.selectText()
                  }
                }
              },
              [_vm._v(_vm._s(_vm.display()))]
            )
          ]
        : _vm.isImage()
        ? [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.select($event)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.display()))]
            ),
            _c(
              "menu-vue",
              { staticClass: "float-right", on: { open: _vm.select } },
              [
                _c("a", [
                  _c("img", {
                    attrs: {
                      src: _vm.root + "/vendor/cl/site/img/menubars.png",
                      alt: "Menu"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  [
                    _c("li", [
                      _c("a", { attrs: { href: _vm.toDownload } }, [
                        _c("img", {
                          attrs: {
                            src: _vm.root + "/vendor/cl/site/img/download.png",
                            alt: "Download"
                          }
                        }),
                        _vm._v(" Download")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.analysis, function(item) {
                      return _c("li", [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showAnalysis(item)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: item.icon, alt: item.menu }
                            }),
                            _vm._v(" " + _vm._s(item.menu))
                          ]
                        )
                      ])
                    })
                  ],
                  2
                )
              ]
            )
          ]
        : [
            _c("menu-vue", { on: { open: _vm.select } }, [
              _c("a", [_vm._v(_vm._s(_vm.display()))]),
              _c("a", { staticClass: "float-right" }, [
                _c("img", {
                  attrs: {
                    src: _vm.root + "/vendor/cl/site/img/menubars.png",
                    alt: "Menu"
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "ul",
                [
                  _c("li", [
                    _c("a", { attrs: { href: _vm.toDownload } }, [
                      _c("img", {
                        attrs: {
                          src: _vm.root + "/vendor/cl/site/img/download.png",
                          alt: "Download"
                        }
                      }),
                      _vm._v(" Download")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.analysis, function(item) {
                    return _c(
                      "li",
                      {
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.showAnalysis(item)
                          }
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                return _vm.showAnalysis(item)
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: { src: item.icon, alt: item.menu }
                            }),
                            _vm._v(" " + _vm._s(item.menu))
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6de15b79", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0141f03e", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("11005c89", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f543498", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6c397add", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5555ba1d", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3900cd0a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/course/js/Console/AssignmentsComponent.vue":
/*!**************************************************************!*\
  !*** ./vendor/cl/course/js/Console/AssignmentsComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentsComponent.vue?vue&type=template&id=49960164& */ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&");
/* harmony import */ var _AssignmentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignmentsComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignmentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('49960164')) {
      api.createRecord('49960164', component.options)
    } else {
      api.reload('49960164', component.options)
    }
    module.hot.accept(/*! ./AssignmentsComponent.vue?vue&type=template&id=49960164& */ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentsComponent.vue?vue&type=template&id=49960164& */ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&");
(function () {
      api.rerender('49960164', {
        render: _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/AssignmentsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&":
/*!*********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentsComponent.vue?vue&type=template&id=49960164& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/AssignmentsComponent.vue?vue&type=template&id=49960164&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentsComponent_vue_vue_type_template_id_49960164___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/CourseConsole.js":
/*!******************************************************!*\
  !*** ./vendor/cl/course/js/Console/CourseConsole.js ***!
  \******************************************************/
/*! exports provided: CourseConsole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseConsole", function() { return CourseConsole; });
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _Members_MembersEditorComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members/MembersEditorComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue");
/* harmony import */ var _Members_MemberEditorComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Members/MemberEditorComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue");
/* harmony import */ var _SectionComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionComponent.vue */ "./vendor/cl/course/js/Console/SectionComponent.vue");
/* harmony import */ var _AssignmentsComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssignmentsComponent.vue */ "./vendor/cl/course/js/Console/AssignmentsComponent.vue");
/* harmony import */ var _ExtensionsComponent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExtensionsComponent.vue */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue");
/* harmony import */ var _SubmissionsComponent_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmissionsComponent.vue */ "./vendor/cl/course/js/Console/SubmissionsComponent.vue");
/* harmony import */ var _SubmissionsAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubmissionsAssignmentMember.vue */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue");
/* harmony import */ var _CourseEmail_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CourseEmail.vue */ "./vendor/cl/course/js/Console/CourseEmail.vue");
/* harmony import */ var _Spoofing_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Spoofing.vue */ "./vendor/cl/course/js/Console/Spoofing.vue");
/* harmony import */ var _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SubmissionsLinks.vue */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue");











/**
 * Course console components
 * @param site The Site object
 * @constructor
 */

var CourseConsole = function CourseConsole(site) {
  var Console = site.console; //
  // Assignment links are linked added to the assignment page next to an
  // assignment by a subsystem. This is how "quiz" is added to see the
  // quiz submissions for an assignment.
  //

  this.assignmentLinks = [];

  this.assignmentLink = function (property, name, route) {
    this.assignmentLinks.push({
      property: property,
      name: name,
      route: route
    });
  };

  Console.title = 'Course Console';
  Console.tables.add({
    title: 'Course',
    order: 20,
    api: '/api/course/tables'
  }); //const page = {title: 'Course', route: '/course', order: 3};

  var page = {
    title: 'Main',
    route: '',
    order: 1
  };
  Console.components.addOption({
    atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Members',
    order: 1,
    route: '/course/members',
    routes: [{
      route: '/course/members',
      component: _Members_MembersEditorComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      props: {
        management: false
      }
    }]
  });
  Console.components.addOption({
    atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Assignments',
    order: 2,
    route: '/course/assignments',
    routes: [{
      route: '/course/assignments',
      component: _AssignmentsComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    }]
  });
  Console.components.addOption({
    atLeast: {
      tag: 'course-spoofing',
      "default": _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA
    },
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Member Spoofing',
    order: 3,
    route: '/course/spoofing',
    routes: [{
      route: '/course/spoofing',
      component: _Spoofing_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
    }]
  });
  Console.components.addOption({
    atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].TA,
    page: page,
    section: {
      title: 'Course',
      order: 5
    },
    title: 'Email Members',
    order: 4,
    route: '/course/email',
    routes: [{
      route: '/course/email',
      component: _CourseEmail_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
    }]
  });
  Console.components.addOption({
    atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].ADMIN,
    page: {
      title: 'Management',
      route: '/management',
      order: 10
    },
    section: {
      title: 'Course Management',
      order: 1
    },
    title: 'Members',
    order: 1,
    route: '/management/course/members',
    routes: [{
      route: '/management/course/members',
      name: 'members',
      component: _Members_MembersEditorComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      props: {
        management: true
      }
    }, {
      route: '/management/course/member/:id',
      name: 'member',
      component: _Members_MemberEditorComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
      props: true
    }]
  });
  Console.components.addRoutes([{
    route: '/course/extensions/:assigntag',
    component: _ExtensionsComponent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    props: true
  }, {
    route: '/course/submissions/:assigntag',
    component: _SubmissionsComponent_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    props: true
  }, {
    route: '/course/submissions/:assigntag/:memberid',
    name: 'submissions',
    component: _SubmissionsAssignmentMember_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    props: true
  }]);
  Console.components.addNav2(_SectionComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"], 10); //
  // Exports
  //

  this.SubmissionsLinksVue = _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_10__["default"];
};

/***/ }),

/***/ "./vendor/cl/course/js/Console/CourseEmail.vue":
/*!*****************************************************!*\
  !*** ./vendor/cl/course/js/Console/CourseEmail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseEmail.vue?vue&type=template&id=4e4e80cc& */ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&");
/* harmony import */ var _CourseEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseEmail.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CourseEmail.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CourseEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4e4e80cc')) {
      api.createRecord('4e4e80cc', component.options)
    } else {
      api.reload('4e4e80cc', component.options)
    }
    module.hot.accept(/*! ./CourseEmail.vue?vue&type=template&id=4e4e80cc& */ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseEmail.vue?vue&type=template&id=4e4e80cc& */ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&");
(function () {
      api.rerender('4e4e80cc', {
        render: _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/CourseEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&":
/*!************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseEmail.vue?vue&type=template&id=4e4e80cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/CourseEmail.vue?vue&type=template&id=4e4e80cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseEmail_vue_vue_type_template_id_4e4e80cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/EmailEditorComponent.vue":
/*!**************************************************************!*\
  !*** ./vendor/cl/course/js/Console/EmailEditorComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&");
/* harmony import */ var _EmailEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailEditorComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmailEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e54e74b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2e54e74b')) {
      api.createRecord('2e54e74b', component.options)
    } else {
      api.reload('2e54e74b', component.options)
    }
    module.hot.accept(/*! ./EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& */ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&");
(function () {
      api.rerender('2e54e74b', {
        render: _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/EmailEditorComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_style_index_0_id_2e54e74b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=template&id=2e54e74b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailEditorComponent_vue_vue_type_template_id_2e54e74b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/ExtensionsComponent.vue":
/*!*************************************************************!*\
  !*** ./vendor/cl/course/js/Console/ExtensionsComponent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionsComponent.vue?vue&type=template&id=47acfda2& */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&");
/* harmony import */ var _ExtensionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExtensionsComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExtensionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('47acfda2')) {
      api.createRecord('47acfda2', component.options)
    } else {
      api.reload('47acfda2', component.options)
    }
    module.hot.accept(/*! ./ExtensionsComponent.vue?vue&type=template&id=47acfda2& */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionsComponent.vue?vue&type=template&id=47acfda2& */ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&");
(function () {
      api.rerender('47acfda2', {
        render: _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/ExtensionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&":
/*!********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ExtensionsComponent.vue?vue&type=template&id=47acfda2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=template&id=47acfda2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExtensionsComponent_vue_vue_type_template_id_47acfda2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue":
/*!*********************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulkUploadComponent.vue?vue&type=template&id=d565c366& */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&");
/* harmony import */ var _BulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BulkUploadComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('d565c366')) {
      api.createRecord('d565c366', component.options)
    } else {
      api.reload('d565c366', component.options)
    }
    module.hot.accept(/*! ./BulkUploadComponent.vue?vue&type=template&id=d565c366& */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BulkUploadComponent.vue?vue&type=template&id=d565c366& */ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&");
(function () {
      api.rerender('d565c366', {
        render: _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/BulkUploadComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&":
/*!****************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BulkUploadComponent.vue?vue&type=template&id=d565c366& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=template&id=d565c366&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BulkUploadComponent_vue_vue_type_template_id_d565c366___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue":
/*!**********************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&");
/* harmony import */ var _MemberDropsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberDropsComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MemberDropsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ffdc580",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2ffdc580')) {
      api.createRecord('2ffdc580', component.options)
    } else {
      api.reload('2ffdc580', component.options)
    }
    module.hot.accept(/*! ./MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& */ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&");
(function () {
      api.rerender('2ffdc580', {
        render: _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MemberDropsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/resolve-url-loader!../../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_style_index_0_id_2ffdc580_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=template&id=2ffdc580&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberDropsComponent_vue_vue_type_template_id_2ffdc580_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue":
/*!***********************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberEditorComponent.vue?vue&type=template&id=2f0ea519& */ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&");
/* harmony import */ var _MemberEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberEditorComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MemberEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('2f0ea519')) {
      api.createRecord('2f0ea519', component.options)
    } else {
      api.reload('2f0ea519', component.options)
    }
    module.hot.accept(/*! ./MemberEditorComponent.vue?vue&type=template&id=2f0ea519& */ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberEditorComponent.vue?vue&type=template&id=2f0ea519& */ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&");
(function () {
      api.rerender('2f0ea519', {
        render: _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MemberEditorComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberEditorComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&":
/*!******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberEditorComponent.vue?vue&type=template&id=2f0ea519& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberEditorComponent.vue?vue&type=template&id=2f0ea519&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberEditorComponent_vue_vue_type_template_id_2f0ea519___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue":
/*!************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
/* harmony import */ var _MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4a9a55c6')) {
      api.createRecord('4a9a55c6', component.options)
    } else {
      api.reload('4a9a55c6', component.options)
    }
    module.hot.accept(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
(function () {
      api.rerender('4a9a55c6', {
        render: _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue?vue&type=template&id=4a9a55c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MemberFetcherComponent_vue_vue_type_template_id_4a9a55c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue":
/*!************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersEditorComponent.vue?vue&type=template&id=e5c22a78& */ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&");
/* harmony import */ var _MembersEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersEditorComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MembersEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('e5c22a78')) {
      api.createRecord('e5c22a78', component.options)
    } else {
      api.reload('e5c22a78', component.options)
    }
    module.hot.accept(/*! ./MembersEditorComponent.vue?vue&type=template&id=e5c22a78& */ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersEditorComponent.vue?vue&type=template&id=e5c22a78& */ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&");
(function () {
      api.rerender('e5c22a78', {
        render: _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MembersEditorComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersEditorComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersEditorComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersEditorComponent.vue?vue&type=template&id=e5c22a78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersEditorComponent.vue?vue&type=template&id=e5c22a78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersEditorComponent_vue_vue_type_template_id_e5c22a78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue":
/*!*************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony import */ var _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3eab44d2')) {
      api.createRecord('3eab44d2', component.options)
    } else {
      api.reload('3eab44d2', component.options)
    }
    module.hot.accept(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
(function () {
      api.rerender('3eab44d2', {
        render: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&":
/*!********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MembersFetcherComponent.vue?vue&type=template&id=3eab44d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue?vue&type=template&id=3eab44d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembersFetcherComponent_vue_vue_type_template_id_3eab44d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue":
/*!****************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
/* harmony import */ var _PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('39eadd8d')) {
      api.createRecord('39eadd8d', component.options)
    } else {
      api.reload('39eadd8d', component.options)
    }
    module.hot.accept(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
(function () {
      api.rerender('39eadd8d', {
        render: _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Members/PrevNextMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrevNextMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&":
/*!***********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./PrevNextMember.vue?vue&type=template&id=39eadd8d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/PrevNextMember.vue?vue&type=template&id=39eadd8d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrevNextMember_vue_vue_type_template_id_39eadd8d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Members/StudentsOnly.js":
/*!*************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Members/StudentsOnly.js ***!
  \*************************************************************/
/*! exports provided: StudentsOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsOnly", function() { return StudentsOnly; });
var LOCAL_STORAGE_STUDENTS_ONLY = 'cl_students_only';
/**
 * Item in local storage that maintains the state of
 * "students only" in the console.
 * @constructor
 */

var StudentsOnly = function StudentsOnly() {};

StudentsOnly.get = function () {
  var localStorage = window.localStorage;
  var s = localStorage.getItem(LOCAL_STORAGE_STUDENTS_ONLY);
  return s === 'yes';
};

StudentsOnly.set = function (students) {
  var localStorage = window.localStorage;
  localStorage.setItem(LOCAL_STORAGE_STUDENTS_ONLY, students ? 'yes' : 'no');
};

/***/ }),

/***/ "./vendor/cl/course/js/Console/SectionComponent.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Console/SectionComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& */ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&");
/* harmony import */ var _SectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& */ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c19494e2",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c19494e2')) {
      api.createRecord('c19494e2', component.options)
    } else {
      api.reload('c19494e2', component.options)
    }
    module.hot.accept(/*! ./SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& */ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& */ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&");
(function () {
      api.rerender('c19494e2', {
        render: _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/SectionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_style_index_0_id_c19494e2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=template&id=c19494e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionComponent_vue_vue_type_template_id_c19494e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/Spoofing.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/course/js/Console/Spoofing.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spoofing.vue?vue&type=template&id=5284c4b0& */ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&");
/* harmony import */ var _Spoofing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spoofing.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Spoofing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5284c4b0')) {
      api.createRecord('5284c4b0', component.options)
    } else {
      api.reload('5284c4b0', component.options)
    }
    module.hot.accept(/*! ./Spoofing.vue?vue&type=template&id=5284c4b0& */ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spoofing.vue?vue&type=template&id=5284c4b0& */ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&");
(function () {
      api.rerender('5284c4b0', {
        render: _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/Spoofing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoofing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spoofing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoofing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Spoofing.vue?vue&type=template&id=5284c4b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Spoofing.vue?vue&type=template&id=5284c4b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Spoofing_vue_vue_type_template_id_5284c4b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue":
/*!*********************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&");
/* harmony import */ var _SubmissionsAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsAssignmentMember.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('80f1e132')) {
      api.createRecord('80f1e132', component.options)
    } else {
      api.reload('80f1e132', component.options)
    }
    module.hot.accept(/*! ./SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&");
(function () {
      api.rerender('80f1e132', {
        render: _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMember.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMember_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&":
/*!****************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMember.vue?vue&type=template&id=80f1e132&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMember_vue_vue_type_template_id_80f1e132___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue":
/*!******************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('1fddd506')) {
      api.createRecord('1fddd506', component.options)
    } else {
      api.reload('1fddd506', component.options)
    }
    module.hot.accept(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
(function () {
      api.rerender('1fddd506', {
        render: _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&":
/*!*************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue?vue&type=template&id=1fddd506&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsAssignmentMemberComponent_vue_vue_type_template_id_1fddd506___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsComponent.vue":
/*!**************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsComponent.vue?vue&type=template&id=39632ce6& */ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&");
/* harmony import */ var _SubmissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('39632ce6')) {
      api.createRecord('39632ce6', component.options)
    } else {
      api.reload('39632ce6', component.options)
    }
    module.hot.accept(/*! ./SubmissionsComponent.vue?vue&type=template&id=39632ce6& */ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsComponent.vue?vue&type=template&id=39632ce6& */ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&");
(function () {
      api.rerender('39632ce6', {
        render: _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&":
/*!*********************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsComponent.vue?vue&type=template&id=39632ce6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsComponent.vue?vue&type=template&id=39632ce6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsComponent_vue_vue_type_template_id_39632ce6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
/* harmony import */ var _SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('96744b6e')) {
      api.createRecord('96744b6e', component.options)
    } else {
      api.reload('96744b6e', component.options)
    }
    module.hot.accept(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
(function () {
      api.rerender('96744b6e', {
        render: _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Console/SubmissionsLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=template&id=96744b6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=template&id=96744b6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_template_id_96744b6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Console/index.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/Console/index.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseConsole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseConsole */ "./vendor/cl/course/js/Console/CourseConsole.js");
/* harmony import */ var _Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members/PrevNextMember.vue */ "./vendor/cl/course/js/Console/Members/PrevNextMember.vue");
/* harmony import */ var _Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Members/MemberFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MemberFetcherComponent.vue");
/* harmony import */ var _SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmissionsAssignmentMemberComponent.vue */ "./vendor/cl/course/js/Console/SubmissionsAssignmentMemberComponent.vue");
/* harmony import */ var _Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Members/MembersFetcherComponent.vue */ "./vendor/cl/course/js/Console/Members/MembersFetcherComponent.vue");
/* harmony import */ var _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmissionsLinks.vue */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue");






Site.PrevNextMemberVue = _Members_PrevNextMember_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
Site.MemberFetcherComponentVue = _Members_MemberFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"];
Site.SubmissionsAssignmentMemberComponentVue = _SubmissionsAssignmentMemberComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"];
Site.MembersFetcherComponentVue = _Members_MembersFetcherComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"];
Site.SubmissionsLinksVue = _SubmissionsLinks_vue__WEBPACK_IMPORTED_MODULE_5__["default"];
var courseConsole = new _CourseConsole__WEBPACK_IMPORTED_MODULE_0__["CourseConsole"](Site.site);
Site.site.console.course = courseConsole;

/***/ }),

/***/ "./vendor/cl/course/js/Members/Member.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Members/Member.js ***!
  \***********************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");

/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */

var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    this.created = json.created !== undefined ? json.created : null;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

    this.created = null; // When user was created

    role = null; // Membership role
  }

  this.role = function () {
    return role;
  };

  this.setRole = function (role_) {
    role = role_;
  };
};

Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].prototype);
Member.prototype.constructor = Member;
/**
 * Get the course section for a member
 * @param store Vuex store
 * @returns {*}
 */

Member.prototype.getSection = function (store) {
  return store.getters['course/section'](this.semester, this.section);
};
/**
 * Get an assignment for a member
 * @param store Vuex store
 * @param assigntag Assignment tag
 */


Member.prototype.getAssignment = function (store, assigntag) {
  var section = this.getSection(store);
  return section.getAssignment(assigntag);
}; // The possible member roles
// Must match values in Member.php


Member.GUEST = 'G'; ///< Guest user visiting the site

Member.USER = 'U'; ///< Standard user from User, don't use for Member

Member.DROPPED = 'D'; ///< User has dropped the course

Member.STUDENT = 'T'; ///< Enrolled student in course

Member.STAFF = 'S'; ///< Any course staff

Member.GRADER = 'R'; ///< Graders

Member.ULA = 'L'; ///< Undergraduate Learning Assistant

Member.TA = 'E'; ///< Teaching assistant

Member.INSTRUCTOR = 'I'; ///< Course instructor

Member.ADMIN = 'A'; ///< Admin

Member.prototype.getRoles = function () {
  var roles = {};
  roles[Member.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[Member.DROPPED] = {
    name: 'Dropped',
    priority: 2
  };
  roles[Member.USER] = {
    name: 'User',
    priority: 3,
    skip: true
  };
  roles[Member.STUDENT] = {
    name: 'Student',
    priority: 4
  };
  roles[Member.STAFF] = {
    name: 'Staff',
    priority: 5,
    skip: true
  };
  roles[Member.GRADER] = {
    name: 'Grader',
    priority: 6
  };
  roles[Member.ULA] = {
    name: 'Undergraduate Learning Assistant',
    "short": 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    "short": 'TA',
    priority: 8
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 9
  };
  roles[Member.ADMIN] = {
    name: 'Admin',
    priority: 100
  };
  return roles;
};



/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue":
/*!****************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelect.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&");
/* harmony import */ var _SectionSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionSelect.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SectionSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad33d900",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('ad33d900')) {
      api.createRecord('ad33d900', component.options)
    } else {
      api.reload('ad33d900', component.options)
    }
    module.hot.accept(/*! ./SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& */ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&");
(function () {
      api.rerender('ad33d900', {
        render: _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/SectionSelectors/SectionSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_style_index_0_id_ad33d900_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=template&id=ad33d900&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SectionSelect_vue_vue_type_template_id_ad33d900_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
/* harmony import */ var _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submission.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('15f46600')) {
      api.createRecord('15f46600', component.options)
    } else {
      api.reload('15f46600', component.options)
    }
    module.hot.accept(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
(function () {
      api.rerender('15f46600', {
        render: _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/Submission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submission.vue?vue&type=template&id=15f46600& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue":
/*!********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
/* harmony import */ var _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('02b620c2')) {
      api.createRecord('02b620c2', component.options)
    } else {
      api.reload('02b620c2', component.options)
    }
    module.hot.accept(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
(function () {
      api.rerender('02b620c2', {
        render: _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
/* harmony import */ var _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('3aa1e570')) {
      api.createRecord('3aa1e570', component.options)
    } else {
      api.reload('3aa1e570', component.options)
    }
    module.hot.accept(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
(function () {
      api.rerender('3aa1e570', {
        render: _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitProgram.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitProgram.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
/* harmony import */ var _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('311d0a99')) {
      api.createRecord('311d0a99', component.options)
    } else {
      api.reload('311d0a99', component.options)
    }
    module.hot.accept(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
(function () {
      api.rerender('311d0a99', {
        render: _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitText.vue?vue&type=template&id=311d0a99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
/* harmony import */ var _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('06fd480e')) {
      api.createRecord('06fd480e', component.options)
    } else {
      api.reload('06fd480e', component.options)
    }
    module.hot.accept(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
(function () {
      api.rerender('06fd480e', {
        render: _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmitUnknown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitUnknown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
/* harmony import */ var _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submitted.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('424dad77')) {
      api.createRecord('424dad77', component.options)
    } else {
      api.reload('424dad77', component.options)
    }
    module.hot.accept(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
(function () {
      api.rerender('424dad77', {
        render: _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/Submitted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submitted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Submitted.vue?vue&type=template&id=424dad77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue ***!
  \**********************************************************/
/*! exports provided: default, TEXT_TYPES, IMG_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
/* harmony import */ var _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["TEXT_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["IMG_TYPES"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('506943aa')) {
      api.createRecord('506943aa', component.options)
    } else {
      api.reload('506943aa', component.options)
    }
    module.hot.accept(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
(function () {
      api.rerender('506943aa', {
        render: _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/course/js/Submission/SubmittedItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default, TEXT_TYPES, IMG_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmittedItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEXT_TYPES", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["TEXT_TYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IMG_TYPES", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["IMG_TYPES"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/users/js/Users/Membership.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Users/Membership.js ***!
  \************************************************/
/*! exports provided: Membership */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Membership", function() { return Membership; });
/**
 * @file
 * A membership associated with a user.
 *
 * This is a base object that will be inherited by
 * actual membership objects.
 */
var Membership = function Membership() {
  /// The User object for this membership
  this.user = null;
};



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU2VjdGlvbkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQ291cnNlRW1haWwudnVlPzdkMTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT85MTY5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT9jZWY3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP2ZhNmUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzgxYWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1NlY3Rpb25Db21wb25lbnQudnVlP2M2NzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3QudnVlPzUzY2YiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZT9hN2E5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/NTQyNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzgxNjkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlPzVhYmQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/MWNiOSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/NzI0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlPzAyNzciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/YjAzYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT8yYjYyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9hNzc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZT8zM2VmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT80ZTEzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWU/MTExYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT81MzQ5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlPzYwYjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT9jNzBhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT9hNmEzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT8xZDM4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT84NmFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/ZGU0ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWU/MmI2MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/NDU5NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/NzNiMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT85Zjc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT8zNzYwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/YmNiMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzE2OGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlPzE4NWIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/NTQ1NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/YzQ4MSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU2VjdGlvbkNvbXBvbmVudC52dWU/NTA5NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdC52dWU/YTYxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQXNzaWdubWVudHNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/M2QzNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQXNzaWdubWVudHNDb21wb25lbnQudnVlPzNiYmMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUNvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQ291cnNlRW1haWwudnVlP2YyODAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZT81ODc2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/NWI0NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/N2IzMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzUzYzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT9kNmQzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/N2I1MyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/ODM4NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/ZDBjZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT82NWRiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL0J1bGtVcGxvYWRDb21wb25lbnQudnVlPzI2ODgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/YmU4NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzExYTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP2Y2NzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzRlMTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlPzIxNjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT85OTYxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlPzNkNDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/YTlhNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT8xNDhlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlPzZmODEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT84Y2M1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9mMmFmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/NTBjMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/MzY2ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9TdHVkZW50c09ubHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1NlY3Rpb25Db21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT9jY2I0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT82MjdmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT9lZTE1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1Nwb29maW5nLnZ1ZT8xYTg5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWU/OGM4ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT8zZTNiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlPzk2MjAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/NmZmOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT83MDY2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT82NGZmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWU/NTM4OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzk1MDgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzZhYzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3QudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT82ODhkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT83MWZjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT8zYjhjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/OThmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/NjUzMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/OTE4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlPzBkMTQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9hYTEwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9kYThhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/ZWNjYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/MTU0NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzFmZGIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzRlZTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/YmZlNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT9hZGZiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/YzUyNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/NzEwMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyJdLCJuYW1lcyI6WyJDb3Vyc2VDb25zb2xlIiwic2l0ZSIsIkNvbnNvbGUiLCJjb25zb2xlIiwiYXNzaWdubWVudExpbmtzIiwiYXNzaWdubWVudExpbmsiLCJwcm9wZXJ0eSIsIm5hbWUiLCJyb3V0ZSIsInB1c2giLCJ0aXRsZSIsInRhYmxlcyIsImFkZCIsIm9yZGVyIiwiYXBpIiwicGFnZSIsImNvbXBvbmVudHMiLCJhZGRPcHRpb24iLCJhdExlYXN0IiwiTWVtYmVyIiwiU1RBRkYiLCJzZWN0aW9uIiwicm91dGVzIiwiY29tcG9uZW50IiwiTWVtYmVyc0VkaXRvckNvbXBvbmVudCIsInByb3BzIiwibWFuYWdlbWVudCIsIkFzc2lnbm1lbnRzQ29tcG9uZW50IiwidGFnIiwiVEEiLCJTcG9vZmluZ1Z1ZSIsIkNvdXJzZUVtYWlsVnVlIiwiQURNSU4iLCJNZW1iZXJFZGl0b3JDb21wb25lbnQiLCJhZGRSb3V0ZXMiLCJFeHRlbnNpb25zQ29tcG9uZW50IiwiU3VibWlzc2lvbnNDb21wb25lbnQiLCJTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIiLCJhZGROYXYyIiwiU2VjdGlvbkNvbXBvbmVudCIsIlN1Ym1pc3Npb25zTGlua3NWdWUiLCJMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFkiLCJTdHVkZW50c09ubHkiLCJnZXQiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJzIiwiZ2V0SXRlbSIsInNldCIsInN0dWRlbnRzIiwic2V0SXRlbSIsIlNpdGUiLCJQcmV2TmV4dE1lbWJlclZ1ZSIsIk1lbWJlckZldGNoZXJDb21wb25lbnRWdWUiLCJTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnRWdWUiLCJNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSIsImNvdXJzZUNvbnNvbGUiLCJjb3Vyc2UiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwidW5kZWZpbmVkIiwiaWQiLCJzZW1lc3RlciIsImNyZWF0ZWQiLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJzdG9yZSIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJHUkFERVIiLCJVTEEiLCJJTlNUUlVDVE9SIiwiZ2V0Um9sZXMiLCJyb2xlcyIsInByaW9yaXR5Iiwic2tpcCIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxrQkFBa0IsOEJBQThCO1FBQ2hEO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLG9CQUFvQiwyQkFBMkI7UUFDL0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0EsbUJBQW1CLGNBQWM7UUFDakM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQixLQUFLO1FBQ3JCO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLFlBQVk7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQSxjQUFjLDRCQUE0QjtRQUMxQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7O1FBRUo7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7UUFDQSxlQUFlLDRCQUE0QjtRQUMzQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBLGVBQWUsNEJBQTRCO1FBQzNDO1FB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QixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXFHO0FBQ3pILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZJQUFvRCxFQUFFO0FBQUE7QUFDNUU7QUFDQSxnQkFBZ0Isd0ZBQU07QUFDdEIseUJBQXlCLGlHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBOzs7Ozs7O0FBUUEsSUFBSTFCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFFeEI7QUFDQSxPQUFLNkIsSUFBTCxHQUFZLElBQVo7QUFDSCxDQUpEIiwiZmlsZSI6ImNvdXJzZWNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3Vyc2VDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvdXJzZUNvbnNvbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMzRmNWE5MTYwODQ5NzE4OWQxNzlcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkNvdXJzZUNvbnNvbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvaW5kZXguanNcIixcImNvbW1vblwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWFzc2lnbm1lbnRzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgPHA+e3tzZWN0aW9uLm5hbWV9fTwvcD5cclxuICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgPGgyPnt7Y2F0ZWdvcnkubmFtZX19PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIiA6a2V5PVwiYXNzaWdubWVudC50YWdcIj57e2Fzc2lnbm1lbnQubmFtZX19XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2NvdXJzZS9leHRlbnNpb25zLycgKyBhc3NpZ25tZW50LnRhZ1wiPmV4dGVuc2lvbnM8L3JvdXRlci1saW5rPiZuYnNwO1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9J2Fzc2lnbm1lbnQuc3VibWlzc2lvbnMgIT09IHVuZGVmaW5lZCc+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvY291cnNlL3N1Ym1pc3Npb25zLycgKyBhc3NpZ25tZW50LnRhZ1wiPnN1Ym1pc3Npb25zPC9yb3V0ZXItbGluaz4mbmJzcDtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWZvcj1cImxpbmsgaW4gYXNzaWdubWVudExpbmtzXCIgIHYtaWY9XCJhc3NpZ25tZW50W2xpbmsucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgYXNzaWdubWVudFtsaW5rLnByb3BlcnR5XSAhPT0gZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYXNzaWdubWVudExpbmsoYXNzaWdubWVudCwgbGluay5yb3V0ZSlcIj57e2xpbmsubmFtZX19PC9yb3V0ZXItbGluaz4mbmJzcDtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBWaWV3IGZvciBDb3Vyc2UgQXNzaWdubWVudHNcclxuXHQgKiAvY2wvY29uc29sZS9jb3Vyc2UvYXNzaWdubWVudHNcclxuXHQgKlxyXG5cdCAqIERpc3BsYXlzIGFsbCBhc3NpZ25tZW50cyB3aXRoIGxpbmtzIGZvciBvcHRpb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBBc3NpZ25tZW50c0NvbXBvbmVudFZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2VjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRhc3NpZ25tZW50TGlua3M6IHRoaXMuJHNpdGUuY29uc29sZS5jb3Vyc2UuYXNzaWdubWVudExpbmtzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQXNzaWdubWVudHMnKTtcclxuXHRcdFx0bGV0IG1lbWJlciA9IHRoaXMudXNlci5tZW1iZXI7XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXNzaWdubWVudExpbms6IGZ1bmN0aW9uIChhc3NpZ25tZW50LCByb3V0ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucmVwbGFjZSgnOmFzc2lnbnRhZycsIGFzc2lnbm1lbnQudGFnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXIgdi1pZj1cIiFjb21wb3NpbmdcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCIgOmVuc3VyZT1cImVuc3VyZShmZXRjaGVyLnVzZXJzKVwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+PGlucHV0IHYtbW9kZWw9XCJhbGxcIiB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwiYWxsQ2hhbmdlXCI+PC90aD5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6a2V5PVwidXNlci5pZFwiPlxyXG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZsYWdzW3VzZXIuaWRdXCI+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgPnt7dXNlci51c2VySWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cIidtYWlsdG86JyArIHVzZXIuZW1haWxcIj57e3VzZXIuZW1haWx9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuICAgICAgPGVtYWlsLWVkaXRvciB2LWVsc2UgQGNhbmNlbD1cImNhbmNlbEVtYWlsXCIgQGRvbmU9XCJkb25lU2VuZGluZ1wiIDp0bz1cInRvVXNlcnNcIj48L2VtYWlsLWVkaXRvcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudCBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcbiAgICBpbXBvcnQgRW1haWxFZGl0b3JDb21wb25lbnQgZnJvbSAnLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWUnO1xyXG4gICAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuICAgIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmxhZ3M6IHt9LFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcG9zaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvVXNlcnM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICdlbWFpbEVkaXRvcic6IEVtYWlsRWRpdG9yQ29tcG9uZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnOiBDb3Vyc2UgRW1haWwnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2VuZEVtYWlsKCk7XHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYWxsQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpZCBpbiB0aGlzLmZsYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFnc1tpZF0gPSB0aGlzLmFsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5zdXJlKHVzZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZsYWdzW3VzZXIuaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZmxhZ3MsIHVzZXIuaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc1t1c2VyLmlkXSA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRTZW5kRW1haWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRFbWFpbCA9IHRoaXMuYWRkTmF2MignU2VuZCBFbWFpbCcsIDMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvVXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGlkIGluIHRoaXMuZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mbGFnc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9Vc2Vycy5wdXNoKHRoaXMudXNlcnNbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50b1VzZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRvVXNlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTm8gaW5kaWNhdGVkIG1lbWJlcnMhJywgJ011c3Qgc3BlY2lmeSBtZW1iZXJzIHRvIHNlbmQgZW1haWwgdG8uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVOYXYyKHRoaXMuc2VuZEVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsRW1haWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZW5kRW1haWwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9uZVNlbmRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaWQgaW4gdGhpcy5mbGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZ3NbaWRdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZW5kRW1haWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgLyogTm90IHNjb3BlZCAqL1xyXG5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxmb3JtIHYtZWxzZSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgIDxtYXNrLXZ1ZSA6bWFzaz1cIm1hc2tcIj5TZW5kaW5nIEVtYWlsLi4uPC9tYXNrLXZ1ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b1wiPlRvXHJcbiAgICAgIDxkaXYgdi1mb3I9XCJ1c2VyIGluIGRpc3BsYXlUb1wiIDprZXk9XCJ1c2VyLmlkXCI+XHJcbiAgICAgICAge3t1c2VyLm5hbWV9fVxyXG4gICAgICAgICZsdDs8c3BhbiBjbGFzcz1cIm5vLWVtYWlsXCIgdi1pZj1cInVzZXIuZW1haWwgPT09IG51bGxcIj5ubyBlbWFpbDwvc3Bhbj48c3BhbiB2LWVsc2U+e3t1c2VyLmVtYWlsfX08L3NwYW4+Jmd0O1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWlmPVwidGhpcy50by5sZW5ndGggPiB0aGlzLmRpc3BsYXlUby5sZW5ndGhcIj4uLi48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1YmplY3RcIj48bGFiZWw+U3ViamVjdCA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic3ViamVjdFwiPjwvbGFiZWw+PC9kaXY+XHJcbiAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJidXR0b25zXCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiIEBjbGljay5wcmV2ZW50PVwiY2FuY2VsXCI+XHJcbiAgICA8L3A+XHJcbiAgPC9mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBNYXNrVnVlID0gU2l0ZS5TaXRlLk1hc2tWdWU7XHJcblxyXG5cdGNvbnN0IE1BWF9ESVNQTEFZRUQgPSAxMDtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsndG8nXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkaXNwbGF5VG86IFtdLFxyXG5cdFx0XHRcdHN1YmplY3Q6ICcnLFxyXG5cdFx0XHRcdG1hc2s6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1hc2tWdWU6IE1hc2tWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcblx0XHRcdHRoaXMuZWRpdG9yID0gbmV3IHRoaXMuJHNpdGUuRWRpdG9yKGVsZW1lbnQsIHtcclxuXHRcdFx0XHR0YWI6IHRydWUsXHJcblx0XHRcdFx0YXV0b0luZGVudDogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuZGlzcGxheVRvID0gW107XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50by5sZW5ndGggJiYgaSA8IE1BWF9ESVNQTEFZRUQ7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuZGlzcGxheVRvLnB1c2godGhpcy50b1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNhbmNlbCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjYW5jZWwnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1hc2spIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0LnRyaW0oKTtcclxuXHRcdFx0XHRpZiAoc3ViamVjdCA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgJ011c3QgcHJvdmlkZSBhIHN1YmplY3QnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWU7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2UgPT09ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsICdNdXN0IHByb3ZpZGUgYSBtZXNzYWdlJyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgdG8gPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCB1c2VyIG9mIHRoaXMudG8pIHtcclxuXHRcdFx0XHRcdGlmICh1c2VyLmVtYWlsID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRvLnB1c2goe25hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWx9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRvLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZG9uZScpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdHRvOiB0byxcclxuXHRcdFx0XHRcdHN1YmplY3Q6IHN1YmplY3QsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm1hc2sgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL2VtYWlsJywgcGFyYW1zKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWFzayA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnZG9uZScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXNrID0gZmFsc2U7XHJcblx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICBmb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGRpdi50byB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcclxuXHJcbiAgICAgIHNwYW4ubm8tZW1haWwge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuc3ViamVjdCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAuMmVtIDAgMCAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmJ1dHRvbnMge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZXh0ZW5zaW9uc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuXHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlciA6ZmV0Y2hpbmc9XCJleHRlbnNpb25zID09PSBudWxsXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgdi1pZj1cImV4dGVuc2lvbnMhPT1udWxsXCIgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkV4dGVuc2lvbjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZmV0Y2hlci51c2Vyc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZCA+e3t1c2VyLnVzZXJJZH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGF0cGlja3JcIj5cclxuICAgICAgICAgICAgICAgIDxmbGF0LXBpY2tyIHYtbW9kZWw9XCJleHRlbnNpb25zWyt1c2VyLm1lbWJlci5pZF1cIiA6Y29uZmlnPVwiZnBDb25maWdcIlxyXG4gICAgICAgICAgICAgICAgQG9uLWNoYW5nZT1cImNoYW5nZSgkZXZlbnQsIHVzZXIpXCIgZGF0YS1pbnB1dD48L2ZsYXQtcGlja3I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlIHRpdGxlPVwiVG9nZ2xlIENhbGVuZGFyXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1jYWxlbmRhclwiPjwvc3Bhbj48L2E+IDxhIGRhdGEtY2xlYXI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cImRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuICBpbXBvcnQgZmxhdFBpY2tyIGZyb20gJ3Z1ZS1mbGF0cGlja3ItY29tcG9uZW50JztcclxuICBpbXBvcnQgJ2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3MnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHQgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZwQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBcIm0tZC1ZIGg6aUtcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SG91cjogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1pbnV0ZTogNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdtZW1iZXJzZmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAnZmxhdFBpY2tyJzogZmxhdFBpY2tyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnOiAnICsgdGhpcy5hc3NpZ25tZW50LnNob3J0bmFtZSArICcgRXh0ZW5zaW9ucycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFNpdGUuYXBpLmdldCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9tZXRhL2dldC9leHRlbnNpb25zLycgKyB0aGlzLmFzc2lnbnRhZywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ21lbWJlci1tZXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZCBpbiBkYXRhLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IGRhdGEuYXR0cmlidXRlc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGltZSA9PT0gbnVsbCB8fCB0aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zWytpZF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNbK2lkXSA9IHRpbWUgKiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2hhbmdlKGV2ZW50LCB1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gZXZlbnRbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHN0ciAhPT0gJycgPyAobmV3IERhdGUoc3RyKSkuZ2V0VGltZSgpIC8gMTAwMCA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7dmFsdWU6IHRpbWV9O1xyXG4gICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdChgL2FwaS9jb3Vyc2UvbWVtYmVycy9tZXRhL3NldC8ke3VzZXIubWVtYmVyLmlkfS9leHRlbnNpb25zLyR7dGhpcy5hc3NpZ250YWd9YCwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIFNpdGUuVnVlLnNldCh0aGlzLmV4dGVuc2lvbnMsICt1c2VyLm1lbWJlci5pZCwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC8qIE5vdCBzY29wZWQgKi9cclxuICBkaXYuY2wtZXh0ZW5zaW9ucyB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgID5kaXY+aW5wdXQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDEpLCAgdGQ6bnRoLWNoaWxkKDIpLCAgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWJ1bGstdXBsb2FkXCI+XHJcbiAgICA8aDIgaWQ9XCJidWxrXCI+QnVsayBjb3Vyc2UgbWVtYmVyc2hpcCB1cGxvYWRpbmc8L2gyPlxyXG4gICAgPHA+VGhpcyBvcHRpb24gYWNjZXB0cyBmaWxlcyBpbiBDU1YgZm9ybWF0IGFzIHByb2R1Y2VkIGJ5IGluc3RydWN0b3Igc3lzdGVtcy4gPC9wPlxyXG5cclxuICAgIDxmb3JtIGNsYXNzPVwiZnVsbFwiIEBzdWJtaXQucHJldmVudD1cImJ1bGtVcGxvYWQoKVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgPGxlZ2VuZD5CdWxrIFVwbG9hZCBGaWxlPC9sZWdlbmQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+RmlsZSB0byB1cGxvYWQ6IDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+PGlucHV0IG5hbWU9XCJidWxrZmlsZVwiIHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cImJ1bGtGaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQcmVzc1wiPiB0byB1cGxvYWQgdGhlIGZpbGUhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG4gICAgaW1wb3J0IE1lbWJlckRyb3BzQ29tcG9uZW50IGZyb20gJy4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlJztcclxuICAgIGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi8uLi9NZW1iZXJzL01lbWJlci5qcyc7XHJcbiAgICBsZXQgVnVlID0gU2l0ZS5WdWU7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgYnVsa0ZpbGVzOiBudWxsLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBidWxrVXBsb2FkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5idWxrRmlsZXMgPT09IG51bGwgfHwgdGhpcy5idWxrRmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuYnVsa0ZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZTogZS50YXJnZXQucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvYnVsaycsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHJvcHMgPSByZXNwb25zZS5nZXREYXRhKCdkcm9wcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkcm9wcyAhPT0gbnVsbCAmJiBkcm9wcy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkcm9wc0ZvclZ1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHMuYXR0cmlidXRlcy5mb3JFYWNoKChkcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcnMuVXNlcihkcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRyb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wc0ZvclZ1ZS5wdXNoKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEcm9wcGVkIENvdXJzZSBNZW1iZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGRpdiBpZD1cImRyb3BzXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzczogJ2NsLWJ1bGstdXBsb2FkLWRsZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50czogJ0Ryb3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHNGb3JWdWUuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXIuZHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaCh1c2VyLm1lbWJlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvZHJvcHMnLCB7ZHJvcHM6IGlkc30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcjZHJvcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHM6IGRyb3BzRm9yVnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgPGRyb3BzIDpkcm9wcz1cImRyb3BzXCI+PC9kcm9wcz5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Ryb3BzJzogTWVtYmVyRHJvcHNDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuZ28oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgcmVhZGluZyBmaWxlXCIpO1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBcIkZpbGUgcmVhZCBhYm9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIC8vIFJlYWQgaW4gdGhlIGZpbGVcclxuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG4vLyBOb3RpY2U6IE5vdCBzY29wZWQhXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIGRpdi5jbC1idWxrLXVwbG9hZCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkc2V0IHtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuY2wtYnVsay11cGxvYWQtZGxnIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJkcm9wcy1jb21wb25lbnRcIj5cclxuICAgIDxwPlRoZSBmb2xsb3dpbmcgdXNlcnMgYXJlIGluZGljYXRlZCBhcyBkcm9wcGVkIGZyb20gdGhlIHVwbG9hZGVkIGNvdXJzZVxyXG4gICAgcm9sZS4gU2VsZWN0IGFueSB5b3Ugd2lzaCB0byBmbGFnIGFzIGRyb3BwZWQgaW4gdGhlIHN5c3RlbS48L3A+XHJcbiAgICA8cD5Ecm9wcGluZyBhIHN0dWRlbnQgZG9lcyBub3QgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgc3lzdGVtLCBpdCBvbmx5XHJcbiAgICAgIGNoYW5nZXMgdGhlaXIgc3RhdHVzIHRvIDxlbT5kcm9wcGVkPC9lbT48L3A+XHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImFsbFwiIEBjaGFuZ2UucHJldmVudD1cImNoZWNrQWxsXCI+PC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5FbWFpbDwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Um9sZTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZHJvcHNcIj5cclxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJ1c2VyLmRyb3BcIj48L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIudXNlcklkfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cclxuICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGFibGU+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJvcHM6IG51bGwsXHJcbiAgICAgICAgICAgIGFsbDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgY2hlY2tBbGw6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcm9wcy5mb3JFYWNoKChkcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRyb3AuZHJvcCA9IHRoaXMuYWxsO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgdGhpcy5kcm9wcyA9IHRoaXMuJHBhcmVudC5kcm9wcztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5kaXYjZHJvcHMtY29tcG9uZW50IHtcclxuICBwYWRkaW5nOiAxZW07XHJcblxyXG4gIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtbWVtYmVyLWVkaXRvciBjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8cHJldi1uZXh0IDp1c2VyPVwiZWRpdHVzZXJcIj48L3ByZXYtbmV4dD5cclxuXHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGVyPVwiZmV0Y2hlclwiPjwvZmV0Y2hlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImNsLWNvbW1vblwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibmV3XCIgaWQ9XCJuZXdcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8bGVnZW5kPnt7bGVnZW5kfX08L2xlZ2VuZD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgSUQ8YnI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgOmRpc2FibGVkPVwiaWQhPT0nbmV3J1wiIHJlZj1cInVzZXJpZFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInVzZXJJZFwiIGNsYXNzPVwic2hvcnRcIiBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjMwXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX3RleHRcIj5OYW1lIDxzcGFuIGNsYXNzPVwic21hbGxcIj4obGFzdCwgZmlyc3QpPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCA6ZGlzYWJsZWQ9XCJmZXRjaGVkXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIG1heGxlbmd0aD1cIjE1MFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV90ZXh0XCI+RW1haWw8YnI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgOmRpc2FibGVkPVwiZmV0Y2hlZFwiIHJlZj1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdi1tb2RlbD1cImVtYWlsXCIgbWF4bGVuZ3RoPVwiMjU0XCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tc2V0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+PGVtPlJvbGU6PC9lbT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtZm9yPVwiKHJvbGVPYmosIGlkKSBpbiByb2xlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInJvbGVcIiBuYW1lPVwicm9sZVwiIHR5cGU9XCJyYWRpb1wiIDp2YWx1ZT1cImlkXCI+IHt7cm9sZU9iai5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL21hbmFnZW1lbnQvY291cnNlL21lbWJlcnMnXCIgdGFnPVwiYnV0dG9uXCI+Q2FuY2VsPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgdi1pZj1cImVkaXR1c2VyICE9PSBudWxsICYmIGlkIT09J25ldydcIiBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5XCI+VXNlciBmaWVsZHMgYXJlIG5vdCBlZGl0YWJsZSBpbiB0aGlzXHJcbiAgICAgICAgICBmb3JtLiBUbyBnbyB0aGUgPHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvbWFuYWdlbWVudC91c2VyLycgKyBlZGl0dXNlci5pZFwiPnVzZXIgZWRpdG9yIHBhZ2UgZm9yIHt7bmFtZX19PC9yb3V0ZXItbGluaz4gdG8gZWRpdCB0aG9zZSBmaWVsZHMuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXIuanMnO1xyXG4gIGltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICcuL1ByZXZOZXh0TWVtYmVyLnZ1ZSc7XHJcblxyXG4gIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gICAgcHJvcHM6IFsnaWQnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWdlbmQ6IHRoaXMuaWQgPT09ICduZXcnID8gJ05ldyBNZW1iZXInIDogJ0VkaXQgTWVtYmVyJyxcclxuICAgICAgICByb2xlczogdGhpcy52aXNpYmxlUm9sZXMsXHJcblxyXG4gICAgICAgIGVkaXR1c2VyOiBudWxsLFxyXG4gICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdUJyxcclxuICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgICBzZXE6IDEsXHJcbiAgICAgICAgZmV0Y2hlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZXJJZChhZnRlciwgYmVmb3JlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaChhZnRlcik7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfSxcclxuICAgICAgJyRyb3V0ZScodG8sIGZyb20pIHtcclxuICAgICAgICB0aGlzLnRha2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiBTaXRlLlZ1ZXgubWFwU3RhdGUoe1xyXG4gICAgICBmZXRjaGVyOiBzdGF0ZSA9PiBzdGF0ZS5tZW1iZXJzLmZldGNoZXJcclxuXHJcbiAgICB9KSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgJ2ZldGNoZXInOiBGZXRjaGVyVnVlLFxyXG4gICAgICAncHJldk5leHQnOiBQcmV2TmV4dE1lbWJlclZ1ZVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgICAgbGV0IG1lbWJlciA9IG5ldyBNZW1iZXIoKTtcclxuICAgICAgbGV0IHJvbGVzID0gbWVtYmVyLmdldFJvbGVzKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZVJvbGVzID0ge307XHJcbiAgICAgIGZvciAobGV0IHJvbGUgaW4gcm9sZXMpIHtcclxuICAgICAgICBpZiAocm9sZXNbcm9sZV0uc2tpcCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlUm9sZXNbcm9sZV0gPSByb2xlc1tyb2xlXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnRha2UoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICduZXcnKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQWRkIENvdXJzZSBNZW1iZXInKTtcclxuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy51c2VyaWQuc2VsZWN0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZWRpdHVzZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQ291cnNlIE1lbWJlcicpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2dldCcsIHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdHVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdXNlci5uYW1lICE9PSBudWxsID8gdXNlci5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IHVzZXIuZW1haWwgIT09IG51bGwgPyB1c2VyLmVtYWlsIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlID0gdXNlci5yb2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVzZXJpZC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbWVtYmVycyd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuICAgICAgZmV0Y2godXNlcklkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgIT09ICduZXcnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VySWQgPSB1c2VySWQudHJpbSgpO1xyXG4gICAgICAgIGlmICh1c2VySWQgPT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VxKys7XHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL3VzZXJzJywge3VzZXJJZDogdXNlcklkLCBzZXE6IHRoaXMuc2VxfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHByb3RlY3RzIGZyb20gb3V0LW9mLW9yZGVyIHByb2Nlc3NpbmdcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiByZXN1bHRzIGZyb20gdGhlIHNlcnZlci4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IHJlc3BvbnNlLmdldERhdGEoJ3NlcScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgrc2VxLmlkICE9PSB0aGlzLnNlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmF0dHJpYnV0ZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2VyIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZGF0YS5hdHRyaWJ1dGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWUgIT09IG51bGwgPyB1c2VyLm5hbWUgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gdXNlci5lbWFpbCAhPT0gbnVsbCA/IHVzZXIuZW1haWwgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICByb2xlOiB0aGlzLnJvbGUsXHJcbiAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgc2VjdGlvbjogbWVtYmVyLnNlY3Rpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZCAhPT0gJ25ldycpIHtcclxuICAgICAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLmlkID09PSAnbmV3JyA/ICdtZW1iZXJzL25ldycgOiAnbWVtYmVycy91cGRhdGUnO1xyXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKHBhdGgsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbWVtYmVycyd9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2xvdCA6dXNlcj1cInVzZXJcIj48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7U3R1ZGVudHNPbmx5fSBmcm9tICcuL1N0dWRlbnRzT25seSc7XHJcbiAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4uLy4uL01lbWJlcnMvTWVtYmVyJztcclxuXHJcbiAgY29uc3QgRmV0Y2hlclZ1ZSA9IFNpdGUuRmV0Y2hlclZ1ZTtcclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWxsaW5rOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgaWQodG8sIGZyb20pIHtcclxuICAgICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnZmV0Y2hlcic6IEZldGNoZXJWdWVcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZmV0Y2goKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICBcdCAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgXHQgIFx0aWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogbWVtYmVyLnNlY3Rpb25cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKFN0dWRlbnRzT25seS5nZXQoKSkge1xyXG4gICAgICAgICAgICAgIFx0cXVlcnkucm9sZSA9IE1lbWJlci5TVFVERU5UO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lbWJlcnMvZ2V0JywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLnVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZldGNoZWQnLCB0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mYWlsbGluayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogU2l0ZS5yb290ICsgdGhpcy5mYWlsbGlua30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtbWVtYmVycy1lZGl0b3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIuZmV0Y2hlZFwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInVzZXJzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCJtYW5hZ2VtZW50XCIgY2xhc3M9XCJjbC1tZ210LW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwidG9Vc2VyKHVzZXIpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9yb3V0ZXItbGluaz4mbmJzcDs8YSBAY2xpY2sucHJldmVudD1cImRlbGV0ZVVzZXIodXNlcilcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiRGVsZXRlXCIgdGl0bGU9XCJEZWxldGVcIj48L2E+PC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCJtYW5hZ2VtZW50XCI+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInRvVXNlcih1c2VyKVwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB2LWlmPVwibWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ0b1VzZXIodXNlcilcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCIhbWFuYWdlbWVudFwiPjxhIEBjbGljay5wcmV2ZW50PVwicHJlc2VudFVzZXIodXNlcilcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2luZm8xNi5wbmcnXCIgYWx0PVwiVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3XCI+PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB2LWlmPVwiIW1hbmFnZW1lbnRcIj48YSBAY2xpY2sucHJldmVudD1cInByZXNlbnRVc2VyKHVzZXIpXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPnt7dXNlci51c2VySWR9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICA8dGQgdi1pZj1cIiFtYW5hZ2VtZW50XCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJwcmVzZW50VXNlcih1c2VyKVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj57e3VzZXIubmFtZX19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48YSB2LWlmPVwidXNlci5lbWFpbCAhPT0gbnVsbFwiIDpocmVmPVwiJ21haWx0bzonICsgdXNlci5lbWFpbFwiPnt7dXNlci5lbWFpbH19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInNtYWxsXCI+e3t1c2VyLnJvbGVOYW1lKHRydWUpfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJzbWFsbFwiPnt7dGltZVJlbGF0aXZlVU5JWCh1c2VyLm1lbWJlci5jcmVhdGVkLCBudWxsLCAnTS1ERC1ZWVlZJyl9fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbFwiPjxlbT57e3N0YXRzfX08L2VtPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5cclxuICAgICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uPC9wPlxyXG4gICAgICAgIDxidWxrLXVwbG9hZCB2LWlmPVwibWFuYWdlbWVudFwiPjwvYnVsay11cGxvYWQ+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGVyPVwiZmV0Y2hlclwiPjwvZmV0Y2hlcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IEJ1bGtVcGxvYWRDb21wb25lbnQgZnJvbSAnLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4gIGNvbnN0IEZldGNoZXJWdWUgPSBVc2Vycy5GZXRjaGVyVnVlO1xyXG4gIGNvbnN0IG1hcFN0YXRlID0gU2l0ZS5WdWV4Lm1hcFN0YXRlO1xyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJlc2VudGF0aW9uIGZvciBhbGwgbWVtYmVycyBmb3IgZWRpdGluZy92aWV3aW5nXHJcbiAgICpcclxuICAgKiBEaXNwbGF5cyBhbGwgbWVtYmVycyB3aXRoIGxpbmtzIGZvciBvcHRpb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBNZW1iZXJzRWRpdG9yQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgIHByb3BzOiBbXHJcbiAgICAgICdtYW5hZ2VtZW50J1xyXG4gICAgXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b1VzZXI6IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb290ICsgJy9jbC9jb25zb2xlL21hbmFnZW1lbnQvY291cnNlL21lbWJlci8nICsgdXNlci5tZW1iZXIuaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0czogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZmV0Y2hNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlVXNlcjogZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ0FyZSB5b3Ugc3VyZT8nLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnICsgdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lbWJlcnMvZGVsZXRlJywge2lkOiB1c2VyLm1lbWJlci5pZH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXNlbnRVc2VyOiBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJjbC1kaWFsb2dcIj5cclxuPGRpdiBjbGFzcz1cInRhYnVsYXJcIj5cclxuPHA+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPlVzZXIgSUQ6IDwvc3Bhbj48c3Bhbj4ke3VzZXIudXNlcklkfTwvc3Bhbj48L3A+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5OYW1lOiA8L3NwYW4+PHNwYW4+JHt1c2VyLm5hbWV9PC9zcGFuPjwvcD5cclxuPHA+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPkVtYWlsOiA8L3NwYW4+PHNwYW4+JHt1c2VyLmVtYWlsfTwvc3Bhbj48L3A+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5Sb2xlOiA8L3NwYW4+PHNwYW4+JHt1c2VyLnVzZXJSb2xlTmFtZSgpfTwvc3Bhbj48L3A+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gICAgICAgIG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgY29udGVudDogY29udGVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wdXRlU3RhdHMoKSB7XHJcbiAgICAgICAgbGV0IHJvbGVDbnQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIHRoaXMudXNlcnMpIHtcclxuICAgICAgICAgIGxldCByb2xlID0gdXNlci5yb2xlKCk7XHJcbiAgICAgICAgICBpZiAocm9sZUNudFtyb2xlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvbGVDbnRbcm9sZV0gPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm9sZUNudFtyb2xlXSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMudXNlcnMubGVuZ3RoICsgJyBtZW1iZXJzJztcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICBjb25zdCByb2xlcyA9IHVzZXIuZ2V0Um9sZXMoKTtcclxuICAgICAgICBmb3IgKGxldCByb2xlIGluIHJvbGVDbnQpIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSByb2xlc1tyb2xlXTtcclxuICAgICAgICAgIGNvbnN0IHJvbGVOYW1lID0gci5zaG9ydCAhPT0gdW5kZWZpbmVkID8gci5zaG9ydCA6IHIubmFtZTtcclxuICAgICAgICAgIHRoaXMuc3RhdHMgKz0gJyAvICcgKyByb2xlQ250W3JvbGVdICsgJyAnICsgcm9sZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgdXNlcnM6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMudXNlcnMsXHJcbiAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG4gICAgfSksXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VyczogZnVuY3Rpb24gKHRvLCBmbSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVN0YXRzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICdidWxrLXVwbG9hZCc6IEJ1bGtVcGxvYWRDb21wb25lbnQsXHJcbiAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIEFkZCB0aGUgJ0FkZCBNZW1iZXInIG9wdGlvbiB0byB0aGUgdGhlIG5hdjIgbmF2aWdhdGlvbiBiYXJcclxuICAgICAgaWYgKHRoaXMubWFuYWdlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50ID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgJ0FkZCBNZW1iZXInLCA1LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUvbWFuYWdlbWVudC9jb3Vyc2UvbWVtYmVyL25ldycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG4gICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcblxyXG4gICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoYDogJHttZW1iZXIuc2VtZXN0ZXJ9LyR7bWVtYmVyLnNlY3Rpb259IE1lbWJlcnNgKTtcclxuXHJcbiAgICAgIC8vIFdlIHJlc2V0IHRoZSB1c2VycyBzdGF0ZSBzaW5jZSB3ZSBtYXkgYWRkIHVzZXJzXHJcbiAgICAgIGlmICh0aGlzLm1hbmFnZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJzL3Jlc2V0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZVN0YXRzKCk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCB0aGlzLmFkZENvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIHJlZj1cInN0dWRlbnRzLW9ubHlcIiA+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJzdHVkZW50c1wiIEBjaGFuZ2U9XCJzdHVkZW50c09ubHlDaGFuZ2VkXCI+IFN0dWRlbnRzIE9ubHk8L2xhYmVsPlxyXG4gICAgICA8ZmV0Y2hlciA6ZmV0Y2hlcj1cImZldGNoZXJcIiA6ZmV0Y2hpbmc9XCJmZXRjaGluZ1wiPlxyXG4gICAgICAgIDxzbG90IDp1c2Vycz1cInVzZXJzXCIgOnN0dWRlbnRzPVwic3R1ZGVudHNcIj48L3Nsb3Q+XHJcbiAgICAgICAgPHAgdi1pZj1cInVzZXJzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5cclxuICAgICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uPC9wPlxyXG4gICAgICA8L2ZldGNoZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCc7XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXInXHJcbiAgICBpbXBvcnQge1N0dWRlbnRzT25seX0gZnJvbSAnLi9TdHVkZW50c09ubHknO1xyXG5cclxuICAgIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW1iZXIgZmV0Y2hlciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cy5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIC8vIElmIHRoZSBmZXRjaGluZyB2YWx1ZSBpdCB0cnVlLCB0aGUgdXNpbmcgY2xpZW50XHJcbiAgICAgICAgLy8gaXMgZmV0Y2hpbmcgbW9yZSB0aGFuIGp1c3QgdGhlIG1lbWJlcnNoaXAgYW5kIHdlIHdpbGxcclxuICAgICAgICAvLyB3YWl0IGZvciB0aGF0IGFzIHdlbGwuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzRWxlbWVudDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoTW9yZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFkZCBcIlN0dWRlbnRzIE9ubHlcIiB0byB0aGUgbWVudSBiYXJcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhZGRTdHVkZW50c09ubHkoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5zdHVkZW50cyA9IFN0dWRlbnRzT25seS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ3N0dWRlbnRzLW9ubHknXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgICAgICAgICAgZXh0cmEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0dWRlbnRzT25seUNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIFx0U3R1ZGVudHNPbmx5LnNldCh0aGlzLnN0dWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnMoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dWRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGUoKSA9PT0gTWVtYmVyLlNUVURFTlRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBTdHVkZW50c09ubHkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R1ZGVudHNPbmx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50c0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnN0dWRlbnRzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCBleHRyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3VzZXInXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZXI6IGZ1bmN0aW9uICh0bywgZm0pIHtcclxuICAgICAgICBsZXQgdXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICBsZXQgbGluayA9IHRoaXMubGluaztcclxuXHJcbiAgICAgICAgaWYgKHVzZXIgIT09IG51bGwgJiYgdXNlci5wcmV2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJsZWZ0Jywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxyb3V0ZXItbGluayB0aXRsZT1cIlByZXZpb3VzIE1lbWJlclwiIDp0bz1cImxpbmsgKyB1c2VyLnByZXYubWVtYmVyLmlkXCI+PGltZyA6c3JjPVwiaWNvblwiIGFsdD1cIlByZXZpb3VzIE1lbWJlclwiPjwvcm91dGVyLWxpbms+YCxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLiRzaXRlLnJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9wcmV2aWNvbi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgIGxpbms6IGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYybGVmdCcsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXIgIT09IG51bGwgJiYgdXNlci5uZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJyaWdodCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8cm91dGVyLWxpbmsgdGl0bGU9XCJOZXh0IE1lbWJlclwiIDp0bz1cImxpbmsgKyB1c2VyLm5leHQubWVtYmVyLmlkXCI+PGltZyA6c3JjPVwiaWNvblwiIGFsdD1cIk5leHQgTWVtYmVyXCI+PC9yb3V0ZXItbGluaz5gLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuJHNpdGUucm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL25leHRpY29uLnBuZycsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgbGluazogbGlua1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJyaWdodCcsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwYXRoXHJcbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLiRyb3V0ZS5wYXRoO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSBtZW1iZXIgSUQgZnJvbSB0aGUgZW5kXHJcbiAgICAgIGNvbnN0IHJlID0gLyheLiopXFwvKFswLTldKykkLztcclxuICAgICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKHJlKTtcclxuICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gbWF0Y2hbMV0gKyAnLyc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYybGVmdCcsIG51bGwpO1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYycmlnaHQnLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXNlY3Rpb24tY29tcG9uZW50XCI+PHNwYW4gdi1pZj1cIiFzaG9ydFwiPnt7Y291cnNlLm5hbWV9fSB7e2NvdXJzZS5kZXNjfX08L3NwYW4+PHNlY3Rpb24tc2VsZWN0Pjwvc2VjdGlvbi1zZWxlY3Q+PHNwYW4gY2xhc3M9XCJleHRyYVwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFNlY3Rpb25TZWxlY3QgZnJvbSAnLi4vU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc2hvcnQnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdXJzZTogdGhpcy4kc3RvcmUuc3RhdGUuY291cnNlLmNvdXJzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnc2VjdGlvbi1zZWxlY3QnOiBTZWN0aW9uU2VsZWN0XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuZGl2LmNsLXNlY3Rpb24tY29tcG9uZW50IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICA+c3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHggMCAwO1xyXG4gIH1cclxuXHJcbiAgPnNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDAuOTVlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcclxufVxyXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuXHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlcjEgaW4gZmV0Y2hlci51c2Vyc1wiIHYtaWY9XCJ1c2VyLmF0TGVhc3QodXNlcjEucm9sZSgpKVwiPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSBAY2xpY2sucHJldmVudD1cInNlbGVjdCh1c2VyMSlcIj57e3VzZXIxLnVzZXJJZH19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0KHVzZXIxKVwiPnt7dXNlcjEubmFtZX19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlcjEucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJy4vTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdCdtZW1iZXJzZmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5zZXRUaXRsZSgnOiBNZW1iZXIgU3Bvb2ZpbmcnKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHNlbGVjdCh1c2VyKSB7XHJcblx0XHRcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHQgIHVzZXI6IHVzZXIuaWQsXHJcbiAgICAgICAgICBtZW1iZXI6IHVzZXIubWVtYmVyLmlkXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0dGhpcy4kc2l0ZS5hcGkucG9zdCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9zcG9vZicsIHBhcmFtcylcclxuXHRcdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgICAgIFx0d2luZG93LmxvY2F0aW9uID0gdGhpcy5yb290ICsgJy8nO1xyXG5cdFx0XHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdFx0ICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgICAgIH1cclxuXHJcblx0XHRcdFx0ICAgIH0pXHJcblx0XHRcdFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0ICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHRcdCAgICB9KTtcclxuICAgICAgfVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlcmZldGNoZXIgdi1vbjpmZXRjaGVkPVwiZmV0Y2hlZFwiIDppZD1cIm1lbWJlcmlkXCIgOmZhaWxsaW5rPVwic3VibWlzc2lvbnNMaW5rXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8cHJldi1uZXh0IDp1c2VyPVwiZmV0Y2hlci51c2VyXCI+PC9wcmV2LW5leHQ+XHJcbiAgICAgICAgICA8ZGl2ICB2LWlmPVwiZmV0Y2hlci51c2VyICE9PSBudWxsXCI+XHJcbiAgICAgICAgICAgIDxzdWJtaXNzaW9ucyA6dXNlcj1cImZldGNoZXIudXNlclwiIDphc3NpZ250YWc9XCJhc3NpZ250YWdcIj48L3N1Ym1pc3Npb25zPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJmZXRjaGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQgZnJvbSAnLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlJztcclxuXHJcblx0aW1wb3J0IFByZXZOZXh0TWVtYmVyVnVlIGZyb20gJy4vTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWUnO1xyXG5cdGltcG9ydCBNZW1iZXJGZXRjaGVyQ29tcG9uZW50IGZyb20gJy4vTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnLCAnbWVtYmVyaWQnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdWJtaXNzaW9uc0xpbms6ICcvY2wvY29uc29sZS9jb3Vyc2Uvc3VibWlzc2lvbnMvJyArIHRoaXMuYXNzaWdudGFnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1lbWJlcmZldGNoZXI6IE1lbWJlckZldGNoZXJDb21wb25lbnQsXHJcblx0XHRcdHByZXZOZXh0OiBQcmV2TmV4dE1lbWJlclZ1ZSxcclxuXHRcdFx0c3VibWlzc2lvbnM6IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiBTdWJtaXNzaW9ucycpO1xyXG5cdFx0XHR0aGlzLmFkZE5hdjJMaW5rKCdFeGl0JywgNCwgJy9jbC9jb25zb2xlL2NvdXJzZS9zdWJtaXNzaW9ucy8nICsgdGhpcy5hc3NpZ250YWcpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZmV0Y2hlZCh1c2VyKSB7XHJcblx0XHRcdFx0bGV0IGFzc2lnbm1lbnQgPSB1c2VyLm1lbWJlci5nZXRBc3NpZ25tZW50KHRoaXMuJHN0b3JlLCB0aGlzLmFzc2lnbnRhZyk7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB1c2VyLm5hbWUgKyAnICcgKyBhc3NpZ25tZW50LnNob3J0bmFtZSArICcgU3VibWlzc2lvbnMnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWZvcj1cInN1Ym1pc3Npb24gaW4gc3VibWlzc2lvbnNcIj5cclxuICAgICAgPGgyPnt7c3VibWlzc2lvbi5uYW1lfX08L2gyPlxyXG4gICAgICA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuLi9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsndXNlcicsICdhc3NpZ250YWcnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhc3NpZ25tZW50OiBudWxsLFxyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdXNlcigpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5mZXRjaCh0aGlzLnVzZXIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBzdWJtaXNzaW9uVnVlOiBTdWJtaXNzaW9uVnVlXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5mZXRjaCh0aGlzLnVzZXIpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZmV0Y2godXNlcikge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gdXNlci5tZW1iZXIuZ2V0U2VjdGlvbih0aGlzLiRzdG9yZSk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdXNlci5tZW1iZXIuZ2V0QXNzaWdubWVudCh0aGlzLiRzdG9yZSwgdGhpcy5hc3NpZ250YWcpO1xyXG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQuc3VibWlzc2lvbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy8gVGhpcyBhc3NpZ25tZW50IGhhcyBubyBzdWJtaXNzaW9uc1xyXG4gICAgICAgICAgdGhpcy5zdWJtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL2NvdXJzZS9zdWJtaXNzaW9uL3N1Ym1pc3Npb25zLycgK1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3NpZ250YWcgKyAnLycgKyB1c2VyLm1lbWJlci5pZCwge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvbnMgPSByZXNwb25zZS5nZXREYXRhQWxsKCdzdWJtaXNzaW9ucycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWlzc2lvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Ym1pc3Npb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zLnB1c2goc3VibWlzc2lvbnNbaV0uYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zW2ldLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPG1lbWJlcnNmZXRjaGVyPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhIHVzZXIgdG8gdmlldyBzdWJtaXNzaW9ucyBmb3IgdGhhdCB1c2VyLjwvcD5cclxuICAgICAgICAgIDxzdWJtaXNzaW9ucy1saW5rcyA6YXNzaWdubWVudD1cImFzc2lnbm1lbnRcIj48L3N1Ym1pc3Npb25zLWxpbmtzPlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cclxuICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIj5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+PHJvdXRlci1saW5rIDp0bz1cImxpbmsgKyB1c2VyLm1lbWJlci5pZFwiPnt7dXNlci5uYW1lfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L21lbWJlcnNmZXRjaGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgTWVtYmVyc0ZldGNoZXJDb21wb25lbnQgZnJvbSAnY291cnNlLWNsL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWUnO1xyXG4gIGltcG9ydCBTdWJtaXNzaW9uc0xpbmtzVnVlIGZyb20gJy4vU3VibWlzc2lvbnNMaW5rcy52dWUnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBWdWUgZm9yIHN1Ym1pc3Npb25zIGZvciBhbGwgc3R1ZGVudHMuXHJcbiAgICogUHJvdmlkZXMgbGlua3MgdG8gYSB2aWV3IG9mIGFuIGluZGl2aWR1YWwgc3R1ZGVudCdzIHN1Ym1pc3Npb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBTdWJtaXNzaW9uc0NvbXBvbmVudFZ1ZVxyXG4gICAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRwcm9wczogWydhc3NpZ250YWcnXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsaW5rOiBTaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUvY291cnNlL3N1Ym1pc3Npb25zLycgKyB0aGlzLmFzc2lnbnRhZyArICcvJyxcclxuXHRcdFx0XHRhc3NpZ25tZW50OiBudWxsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnbWVtYmVyc2ZldGNoZXInOiBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudCxcclxuICAgICAgICAgICdzdWJtaXNzaW9uc0xpbmtzJzogU3VibWlzc2lvbnNMaW5rc1Z1ZVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcblx0XHRcdGxldCBxdWVyeSA9IHtcclxuXHRcdFx0XHRzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG5cdFx0XHRcdHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0XHR0aGlzLmFzc2lnbm1lbnQgPSB0aGlzLnNlY3Rpb24uZ2V0QXNzaWdubWVudCh0aGlzLmFzc2lnbnRhZyk7XHJcblxyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogJyArIHRoaXMuYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFN1Ym1pc3Npb25zJyk7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHAgdi1mb3I9XCJsaW5rIGluIGxpbmtzXCIgdi1pZj1cInVzZXIuYXRMZWFzdChsaW5rLmF0TGVhc3QpXCIgY2xhc3M9XCJjZW50ZXJcIj48YSA6aHJlZj1cInJvb3QgKyBsaW5rLnVybFwiPnt7bGluay50ZXh0fX08L2E+PC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICBwcm9wczogWydhc3NpZ25tZW50J10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlua3M6IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBhc3NpZ25tZW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50YWtlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnRha2UoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRha2UoKSB7XHJcbiAgICAgICAgdGhpcy5saW5rcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50ICE9PSBudWxsICYmIHRoaXMuYXNzaWdubWVudC5zdWJtaXNzaW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvLyBDb2xsZWN0IHVwIHRoZSBzdWJtaXNzaW9uIGxpbmtzXHJcbiAgICAgICAgICBmb3IgKGxldCBzdWJtaXNzaW9uIG9mIHRoaXMuYXNzaWdubWVudC5zdWJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICBpZihzdWJtaXNzaW9uLmJ1bGsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBsZXQgYnVsayA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdCdWxrIGRvd25sb2FkIG9mICcgKyBzdWJtaXNzaW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2wvY291cnNlL3N1Ym1pc3Npb25zLycgKyB0aGlzLmFzc2lnbm1lbnQudGFnICsgJy8nICsgc3VibWlzc2lvbi50YWcsXHJcbiAgICAgICAgICAgICAgICBhdExlYXN0OiBNZW1iZXIuU1RBRkZcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChidWxrKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQW55IGFkZGl0aW9uYWwgc3VibWlzc2lvbiBsaW5rc1xyXG4gICAgICAgICAgICBpZiAoc3VibWlzc2lvbi5saW5rcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgbGluayBvZiBzdWJtaXNzaW9uLmxpbmtzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtzLnB1c2gobGluayk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiA8c3Bhbj5cclxuICA8c3BhbiB2LWlmPVwiY291cnNlLnNlY3Rpb25zLmxlbmd0aCA9PT0gMVwiPnt7c2VsZWN0ZWR9fTwvc3Bhbj5cclxuICA8c2VsZWN0IHYtaWY9XCJjb3Vyc2Uuc2VjdGlvbnMubGVuZ3RoID4gMVwiIHYtbW9kZWw9XCJzZWxlY3RlZFwiIEBjaGFuZ2U9XCJjaGFuZ2VTZWN0aW9uXCI+XHJcbiAgIDxvcHRpb24gdi1mb3I9XCJzZWN0aW9uIGluIGNvdXJzZS5zZWN0aW9uc1wiPnt7c2VjdGlvbi5zZW1lc3Rlcn19L3t7c2VjdGlvbi5pZH19PC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcblxyXG4gPC9zcGFuPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjb3Vyc2U6IHRoaXMuJHN0b3JlLnN0YXRlLmNvdXJzZS5jb3Vyc2UsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogXCJGUzE4LzczMFwiLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlU2VjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5zZWxlY3RlZC5zcGxpdCgnLycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBkYXRhWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uOiBkYXRhWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvc2VjdGlvbnNlbGVjdCcsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXIvc2V0JywgdXNlci5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcmVzZXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVtYmVyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyLm1lbWJlcjtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG1lbWJlci5zZW1lc3RlciArICcvJyArIG1lbWJlci5zZWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBzZWxlY3Qge1xyXG4gICBmb250LXNpemU6IDAuOTVlbTtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXN1Ym1pc3Npb25cIj5cclxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uc3VibWl0XCIgY2xhc3M9XCJcIj5cclxuICAgICAgPGRpdiB2LWlmPVwiIXN1Ym1pc3Npb24ub3BlblwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY2VudGVyYm94IGNvbXAgY2VudGVyXCI+VGhpcyBhc3NpZ25tZW50IGlzIG5vdCBvcGVuIGZvciBzdWJtaXNzaW9ucy48L3A+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwic3RhZmZcIiBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlclwiPjxlbT4uLi5TdGFmZiBvbmx5IGZvciBzdWJtaXNzaW9uIHRlc3RpbmcuLi48L2VtPjwvcD5cclxuICAgICAgICAgIDxjb21wb25lbnQgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCIgOmlzPVwic3VibWl0dGVyXCIgdi1vbjpuZXdfc3VibWlzc2lvbnM9XCJuZXdTdWJtaXNzaW9uc1wiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGNvbXBvbmVudCB2LWlmPVwic3VibWlzc2lvbi5vcGVuXCIgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCIgOmlzPVwic3VibWl0dGVyXCIgdi1vbjpuZXdfc3VibWlzc2lvbnM9XCJuZXdTdWJtaXNzaW9uc1wiPjwvY29tcG9uZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3VibWl0dGVkIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDpzdWJtaXNzaW9ucz1cInN1Ym1pc3Npb25zXCI+PC9zdWJtaXR0ZWQ+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLmFkZGl0aW9uYWwgIT09IG51bGxcIiB2LWh0bWw9XCJzdWJtaXNzaW9uLmFkZGl0aW9uYWxcIiBjbGFzcz1cIlwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi9NZW1iZXJzL01lbWJlcic7XHJcbiAgICBpbXBvcnQgU3VibWl0VGV4dFZ1ZSBmcm9tICcuL1N1Ym1pdFRleHQudnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRQcm9ncmFtVnVlIGZyb20gJy4vU3VibWl0UHJvZ3JhbS52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdEltYWdlVnVlIGZyb20gJy4vU3VibWl0SW1hZ2UudnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRVbmtub3duVnVlIGZyb20gJy4vU3VibWl0VW5rbm93bi52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdHRlZFZ1ZSBmcm9tICcuL1N1Ym1pdHRlZC52dWUnO1xyXG4gICAgaW1wb3J0IHtURVhUX1RZUEVTfSBmcm9tICcuL1N1Ym1pdHRlZEl0ZW0udnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHN0YWZmOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWJtaXR0ZXI6ICdzdWJtaXQtdGV4dCcsXHJcbiAgICAgICAgICAgICAgc3VibWlzc2lvbnM6IFtdXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIHN1Ym1pdFRleHQ6IFN1Ym1pdFRleHRWdWUsXHJcbiAgICAgICAgICBzdWJtaXRQcm9ncmFtOiBTdWJtaXRQcm9ncmFtVnVlLFxyXG4gICAgICAgICAgc3VibWl0SW1hZ2U6IFN1Ym1pdEltYWdlVnVlLFxyXG4gICAgICAgICAgc3VibWl0VW5rbm93bjogU3VibWl0VW5rbm93blZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdHRlZDogU3VibWl0dGVkVnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIFx0dGhpcy5zdWJtaXNzaW9ucyA9IHRoaXMuc3VibWlzc2lvbi5zdWJtaXNzaW9ucztcclxuXHJcbiAgICAgICAgICBsZXQgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICAgIHRoaXMuc3RhZmYgPSB1c2VyLmF0TGVhc3QoTWVtYmVyLlNUQUZGKTtcclxuICAgICAgICAgIHN3aXRjaCh0aGlzLnN1Ym1pc3Npb24udHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ3Byb2dyYW0nOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtcHJvZ3JhbSc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXRleHQnO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtaW1hZ2UnO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXVua25vd24nO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIG5ld1N1Ym1pc3Npb25zKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWlzc2lvbnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gcmVmPVwiZm9ybVwiIGNsYXNzPVwiZmlsZVwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCIgOnRhcmdldD1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIEBzdWJtaXQ9XCJzdWJtaXRcIj5cclxuICAgICAgPGxhYmVsPlN1Ym1pdDogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBAY2hhbmdlPVwiZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXCIvPjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInVwbG9hZFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgRmlsZVwiIC8+XHJcbiAgICAgIDxpZnJhbWUgcmVmPVwiaWZyYW1lXCIgQGxvYWQ9XCJsb2FkXCIgOm5hbWU9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBzcmM9XCJcIiBzdHlsZT1cIndpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyOjBweCBzb2xpZCAjZmZmO2Rpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZmlsZXM6IG51bGwsXHJcblx0XHRcdFx0YWN0aW9uOiBudWxsLFxyXG5cdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdFx0XHR0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0bG9hZCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuc3VibWl0dGluZykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG5cdFx0XHRcdGxldCByZXNwb25zZSA9IG5ldyB0aGlzLiRzaXRlLkFQSVJlc3BvbnNlKEpTT04ucGFyc2UoanNvbikpO1xyXG5cclxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Ym1pdCgpIHtcclxuXHRcdFx0XHR0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSByZWY9XCJmb3JtXCIgY2xhc3M9XCJmaWxlXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgIDphY3Rpb249XCJhY3Rpb25cIiA6dGFyZ2V0PVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgQHN1Ym1pdD1cInN1Ym1pdFwiPlxyXG4gICAgICA8bGFiZWw+U3VibWl0OiA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIEBjaGFuZ2U9XCJmaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIi8+PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwidXBsb2FkXCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCBGaWxlXCIgLz5cclxuICAgICAgPGlmcmFtZSByZWY9XCJpZnJhbWVcIiBAbG9hZD1cImxvYWRcIiA6bmFtZT1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIHNyYz1cIlwiIHN0eWxlPVwid2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6MHB4IHNvbGlkICNmZmY7ZGlzcGxheTpub25lXCI+PC9pZnJhbWU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmlsZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICB0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBsb2FkKCkge1xyXG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICAgICAgICB0cnkge1xyXG5cdCAgICAgICAgICAgICAgcmVzcG9uc2UgPSBuZXcgdGhpcy4kc2l0ZS5BUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcclxuICAgICAgICAgICAgICB9IGNhdGNoKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgIFx0Y29uc29sZS5sb2coZXhjZXB0aW9uKTtcclxuXHQgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJFcnJvciBkdXJpbmcgc3VibWlzc2lvblwiKTtcclxuICAgICAgICAgICAgICBcdHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRyZWZzWydlZGl0b3InXTtcclxuICAgICAgICAgIHRoaXMuZWRpdG9yID0gbmV3IHRoaXMuJHNpdGUuRWRpdG9yKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3VibWlzc2lvbi5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogWyd5ZWxsb3ctcGFkJ11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmKHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsICdZb3UgbXVzdCBlbnRlciBzb21lIHRleHQgdG8gc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9wbGFpbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWAsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+PHA+SGVsbG88L3A+XHJcbiAgICA8cCBjbGFzcz1cInNob3V0b3V0XCI+U3VibWlzc2lvbiB0eXBlIDxlbT57e29wdGlvbnMudHlwZX19PC9lbT4gaXMgbm90IHN1cHBvcnRlZDwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydvcHRpb25zJ11cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24ubWFudWFsICE9PSB0cnVlXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3VibWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsYXJnZSBjZW50ZXJcIj5ObyBzdWJtaXNzaW9ucywgeWV0LjwvcD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3VibWlzc2lvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cInN1Ym1pdHRlZCBpbiBzdWJtaXNzaW9uc1wiPlxyXG4gICAgICAgICAgICA8dGQ+PHN1Ym1pdHRlZC1pdGVtIDp0eXBlPVwic3VibWlzc2lvbi50eXBlXCIgOmFzc2lnbnRhZz1cInN1Ym1pc3Npb24uYXNzaWduVGFnXCIgOnRhZz1cInN1Ym1pc3Npb24udGFnXCIgOnN1Ym1pc3Npb249XCJzdWJtaXR0ZWRcIiA6YW5hbHlzaXM9XCJzdWJtaXNzaW9uLmFuYWx5c2lzXCIgOnRlYW1pbmc9XCJzdWJtaXNzaW9uLnRlYW1pbmdcIiBAcmVzdWx0PSdhbmFseXNpc1Jlc3VsdCcgdi1vbjpwcmV2aWV3X2ltZz1cInByZXZpZXdfaW1nXCIgdi1vbjpwcmV2aWV3PVwicHJldmlld2VyXCI+PC9zdWJtaXR0ZWQtaXRlbT48L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxwIHYtaWY9XCJzdWJtaXNzaW9uLnR5cGUgPT09ICd0ZXh0J1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZGF0ZSB0byBkaXNwbGF5IHRoZSBzdWJtaXNzaW9uPC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJzdWJtaXNzaW9uLnR5cGUgPT09ICdwcm9ncmFtJ1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZm9yIHN1Ym1pc3Npb24gb3B0aW9uczwvcD5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAnaW1hZ2UnXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiB0byB2aWV3IGFuZCBmb3Igc3VibWlzc2lvbiBvcHRpb25zPC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInByZXZpZXdUeHQgIT09IG51bGxcIj5cclxuICAgICAgICAgIDxwcmUgY2xhc3M9XCJjbC1wcmV2aWV3IHllbGxvdy1wYWRcIiB2LWlmPVwicHJldmlld1R4dCAhPT0gbnVsbFwiPnt7cHJldmlld1R4dH19PC9wcmU+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNsLXByZXZpZXctdGltZVwiIHYtaHRtbD1cInByZXZpZXdUaW1lXCI+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cHJlIGNsYXNzPVwiY2wtYW5hbHlzaXNcIiB2LWlmPVwicmVzdWx0ICE9PSBudWxsXCI+e3tyZXN1bHR9fTwvcHJlPlxyXG4gICAgPGRpdiB2LWlmPVwicHJldmlld0ltZyAhPT0gbnVsbFwiPlxyXG4gICAgICA8ZmlndXJlIHYtaWY9XCJwcmV2aWV3SW1nICE9PSBudWxsXCIgY2xhc3M9XCJjbC1wcmV2aWV3XCI+PGltZyA6c3JjPVwicHJldmlld0ltZ1wiPjwvZmlndXJlPlxyXG4gICAgICA8cCBjbGFzcz1cImNsLXByZXZpZXctdGltZVwiPnt7cHJldmlld1RpbWV9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5odG1sICE9PSB1bmRlZmluZWRcIiB2LWh0bWw9XCJzdWJtaXNzaW9uLmh0bWxcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLyoqXHJcbiAgICogQ29tcG9uZW50IHRoYXQgZGlzcGxheXMgdGhlIGxpc3Qgb2Ygc3VibWlzc2lvbnMuXHJcbiAgICogQGNvbnN0cnVjdG9yIFN1Ym1pdHRlZFZ1ZVxyXG4gICAqL1xyXG4gIGltcG9ydCBTdWJtaXR0ZWRJdGVtVnVlIGZyb20gJy4vU3VibWl0dGVkSXRlbS52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydzdWJtaXNzaW9uJywgJ3N1Ym1pc3Npb25zJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJldmlld1R4dDogbnVsbCxcclxuICAgICAgICBwcmV2aWV3SW1nOiBudWxsLFxyXG4gICAgICAgIHByZXZpZXdUaW1lOiBudWxsLFxyXG4gICAgICAgIHJlc3VsdDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBzdWJtaXR0ZWRJdGVtOiBTdWJtaXR0ZWRJdGVtVnVlXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdWJtaXNzaW9uc1swXS50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcclxuICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHRoaXMuc3VibWlzc2lvbnNbMF0uZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb24ucHJldmlldyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gdGhpcy5zdWJtaXNzaW9uLnByZXZpZXcudGV4dDtcclxuICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh0aGlzLnN1Ym1pc3Npb24ucHJldmlldy5kYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHN1Ym1pc3Npb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3RoaXMuc3VibWlzc2lvbnNbMF0uaWR9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHByZXZpZXdlcihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gXCJcXG5cIjtcclxuICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gJyZuYnNwOyc7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9nZXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9LyR7c3VibWlzc2lvbi5pZH1gLCB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbicpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gc3VibWlzc2lvbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBwcmV2aWV3X2ltZyhzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcbiAgICAgICAgaWYgKHN1Ym1pc3Npb24udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7c3VibWlzc2lvbi5pZH1gO1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgoc3VibWlzc2lvbi5kYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFuYWx5c2lzUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImlzVGV4dCgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0VGV4dCgpXCI+e3tkaXNwbGF5KCl9fTwvYT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaXNJbWFnZSgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0XCI+e3tkaXNwbGF5KCl9fTwvYT48bWVudS12dWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiIEBvcGVuPVwic2VsZWN0XCI+PGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJzaG93QW5hbHlzaXMoaXRlbSlcIj48aW1nIDpzcmM9XCJpdGVtLmljb25cIiA6YWx0PVwiaXRlbS5tZW51XCI+IHt7aXRlbS5tZW51fX08L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21lbnUtdnVlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgIDxtZW51LXZ1ZSB2LW9uOm9wZW49XCJzZWxlY3RcIj48YT57e2Rpc3BsYXkoKX19PC9hPjxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiIGFsdD1cIk1lbnVcIj48L2E+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIDpocmVmPVwidG9Eb3dubG9hZFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmcnXCIgYWx0PVwiRG93bmxvYWRcIj4gRG93bmxvYWQ8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBAY2xpY2suc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiICB2LWZvcj1cIml0ZW0gaW4gYW5hbHlzaXNcIj48YSBAY2xpY2sucHJldmVudC5zdG9wPVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG4gIGNvbnN0IE1lbnVWdWUgPSBTaXRlLlNpdGUuTWVudVZ1ZTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IFRFWFRfVFlQRVMgPSBbJ3RleHQvcGxhaW4nLCAndGV4dC9odG1sJ11cclxuICBleHBvcnQgY29uc3QgSU1HX1RZUEVTID0gWydpbWFnZS9wbmcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9naWYnXTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydhc3NpZ250YWcnLCAndGFnJywgJ3N1Ym1pc3Npb24nLCAnYW5hbHlzaXMnLCAndGVhbWluZycsICd0eXBlJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFx0cm9vdDogU2l0ZS5yb290LFxyXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy50b0Rvd25sb2FkID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZG93bmxvYWQvJHt0aGlzLnN1Ym1pc3Npb24uaWR9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgaXNUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09ICdwcm9ncmFtJyAmJiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpc0ltYWdlKCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgIGxldCBkaXNwID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0aGlzLnN1Ym1pc3Npb24uZGF0ZSwgXCJsb25nXCIpO1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5uYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3AgKz0gJzogJyArIHRoaXMuc3VibWlzc2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9uLmJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBcdGRpc3AgKz0gJyBieSAnICsgdGhpcy5zdWJtaXNzaW9uLmJ5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZGlzcDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3X2ltZycsIHRoaXMuc3VibWlzc2lvbik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0FuYWx5c2lzKGFuYWx5c2lzKSB7XHJcblx0ICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9hbmFseXNpcy8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMudGFnfS8ke2FuYWx5c2lzLnRhZ30vJHt0aGlzLnN1Ym1pc3Npb24uaWR9YCwge30pXHJcbiAgICAgICAgICBcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgIFx0ICAgICAgICBcdGNvbnN0IGFuYWx5c2lzUmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbi1hbmFseXNpcycpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHR0aGlzLiRlbWl0KCdyZXN1bHQnLCBhbmFseXNpc1Jlc3VsdCk7XHJcbiAgICAgICAgICBcdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcdCAgICB9KVxyXG4gICAgICAgICAgXHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIFx0ICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5vdCBzY29wZWQgKi9cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJmb3JtW2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5kaXYudG9bZGF0YS12LTJlNTRlNzRiXSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYudG8gPiBkaXZbZGF0YS12LTJlNTRlNzRiXSB7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcbmRpdi50byA+IGRpdiBzcGFuLm5vLWVtYWlsW2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuc3ViamVjdFtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcbmRpdi5zdWJqZWN0IGxhYmVsW2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmRpdi5zdWJqZWN0IGlucHV0W3R5cGU9dGV4dF1bZGF0YS12LTJlNTRlNzRiXSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDAuMmVtIDAgMCAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHdpZHRoOiAyNWVtO1xcbn1cXG5kaXYuYnV0dG9ucyBpbnB1dFtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIE5vdCBzY29wZWQgKi9cXG5kaXYuY2wtZXh0ZW5zaW9ucyB0YWJsZSB0ZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1leHRlbnNpb25zIHRhYmxlIHRkID4gZGl2ID4gaW5wdXQge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1leHRlbnNpb25zIHRhYmxlIHRkOm50aC1jaGlsZCgxKSwgZGl2LmNsLWV4dGVuc2lvbnMgdGFibGUgdGQ6bnRoLWNoaWxkKDIpLCBkaXYuY2wtZXh0ZW5zaW9ucyB0YWJsZSB0ZDpudGgtY2hpbGQoMykge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWJ1bGstdXBsb2FkIGZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYgcCB7XFxuICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHA6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luOiAwO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYgPiBkaXYgcDpsYXN0LWNoaWxkIGlucHV0IHtcXG4gICAgICAgIHdpZHRoOiA2LjVlbTtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkLWRsZyB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdiNkcm9wcy1jb21wb25lbnRbZGF0YS12LTJmZmRjNTgwXSB7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbmRpdiNkcm9wcy1jb21wb25lbnQgdGhbZGF0YS12LTJmZmRjNTgwXTpmaXJzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLXNlY3Rpb24tY29tcG9uZW50W2RhdGEtdi1jMTk0OTRlMl0ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBmb250LXNpemU6IDAuOTVlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuZGl2LmNsLXNlY3Rpb24tY29tcG9uZW50ID4gc3BhbltkYXRhLXYtYzE5NDk0ZTJdOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZzogMCAxNHB4IDAgMDtcXG59XFxuZGl2LmNsLXNlY3Rpb24tY29tcG9uZW50ID4gc3BhbltkYXRhLXYtYzE5NDk0ZTJdOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJzZWxlY3RbZGF0YS12LWFkMzNkOTAwXSB7XFxuICBmb250LXNpemU6IDAuOTVlbTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtYXNzaWdubWVudHNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zZWN0aW9uLm5hbWUpKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnNlY3Rpb24uYXNzaWdubWVudHMuY2F0ZWdvcmllcywgZnVuY3Rpb24oY2F0ZWdvcnkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhjYXRlZ29yeS5uYW1lKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICBfdm0uX2woY2F0ZWdvcnkuYXNzaWdubWVudHMsIGZ1bmN0aW9uKGFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogYXNzaWdubWVudC50YWcgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhc3NpZ25tZW50Lm5hbWUpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2NsL2NvbnNvbGUvY291cnNlL2V4dGVuc2lvbnMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZXh0ZW5zaW9uc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LnN1Ym1pc3Npb25zICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2NvdXJzZS9zdWJtaXNzaW9ucy9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwic3VibWlzc2lvbnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFzc2lnbm1lbnRMaW5rcywgZnVuY3Rpb24obGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2lnbm1lbnRbbGluay5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50W2xpbmsucHJvcGVydHldICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogX3ZtLmFzc2lnbm1lbnRMaW5rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluay5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhsaW5rLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcXG4gICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICAhX3ZtLmNvbXBvc2luZ1xuICAgICAgICAgID8gX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbnN1cmU6IF92bS5lbnN1cmUoZmV0Y2hlci51c2VycykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uYWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0uYWxsLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYWxsID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYWxsID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWxsID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWxsQ2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiB1c2VyLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mbGFnc1t1c2VyLmlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZsYWdzW3VzZXIuaWRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uZmxhZ3NbdXNlci5pZF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmZsYWdzW3VzZXIuaWRdLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZmxhZ3NbdXNlci5pZF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uZmxhZ3NbdXNlci5pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mbGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmxhZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZsYWdzLCB1c2VyLmlkLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgdXNlci5lbWFpbCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLmVtYWlsKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgMTIxMzE3MzA5MFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX2MoXCJlbWFpbC1lZGl0b3JcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0bzogX3ZtLnRvVXNlcnMgfSxcbiAgICAgICAgICAgICAgb246IHsgY2FuY2VsOiBfdm0uY2FuY2VsRW1haWwsIGRvbmU6IF92bS5kb25lU2VuZGluZyB9XG4gICAgICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcIm1hc2stdnVlXCIsIHsgYXR0cnM6IHsgbWFzazogX3ZtLm1hc2sgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlNlbmRpbmcgRW1haWwuLi5cIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIlRvXFxuICAgIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmRpc3BsYXlUbywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiB1c2VyLmlkIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3ModXNlci5uYW1lKSArIFwiXFxuICAgICAgPFwiKSxcbiAgICAgICAgICAgICAgdXNlci5lbWFpbCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibm8tZW1haWxcIiB9LCBbX3ZtLl92KFwibm8gZW1haWxcIildKVxuICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCI+XFxuICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIHRoaXMudG8ubGVuZ3RoID4gdGhpcy5kaXNwbGF5VG8ubGVuZ3RoXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIuLi5cIildKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ViamVjdFwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3ViamVjdCBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdWJqZWN0LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3ViamVjdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdWJqZWN0IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnN1YmplY3QgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwiZWRpdG9yXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlNlbmRcIiB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB2YWx1ZTogXCJDYW5jZWxcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIHJldHVybiBfdm0uY2FuY2VsKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtZXh0ZW5zaW9uc1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBmZXRjaGluZzogX3ZtLmV4dGVuc2lvbnMgPT09IG51bGwgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX3ZtLmV4dGVuc2lvbnMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJFeHRlbnNpb25cIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKCkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxhdHBpY2tyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZsYXQtcGlja3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogX3ZtLmZwQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pbnB1dFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvbi1jaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZSgkZXZlbnQsIHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZXh0ZW5zaW9uc1srdXNlci5tZW1iZXIuaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3VzZXIubWVtYmVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImV4dGVuc2lvbnNbK3VzZXIubWVtYmVyLmlkXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJUb2dnbGUgQ2FsZW5kYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29ucy1jbCBpY29ucy1jbC1jYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBcImRhdGEtY2xlYXJcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1idWxrLXVwbG9hZFwiIH0sIFtcbiAgICBfYyhcImgyXCIsIHsgYXR0cnM6IHsgaWQ6IFwiYnVsa1wiIH0gfSwgW1xuICAgICAgX3ZtLl92KFwiQnVsayBjb3Vyc2UgbWVtYmVyc2hpcCB1cGxvYWRpbmdcIilcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhpcyBvcHRpb24gYWNjZXB0cyBmaWxlcyBpbiBDU1YgZm9ybWF0IGFzIHByb2R1Y2VkIGJ5IGluc3RydWN0b3Igc3lzdGVtcy4gXCJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZ1bGxcIixcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiwgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uYnVsa1VwbG9hZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImZpZWxkc2V0XCIsIFtcbiAgICAgICAgICBfYyhcImxlZ2VuZFwiLCBbX3ZtLl92KFwiQnVsayBVcGxvYWQgRmlsZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkZpbGUgdG8gdXBsb2FkOiBcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImJ1bGtmaWxlXCIsIHR5cGU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5idWxrRmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJQcmVzc1wiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgdG8gdXBsb2FkIHRoZSBmaWxlIVwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImRyb3BzLWNvbXBvbmVudFwiIH0gfSwgW1xuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhlIGZvbGxvd2luZyB1c2VycyBhcmUgaW5kaWNhdGVkIGFzIGRyb3BwZWQgZnJvbSB0aGUgdXBsb2FkZWQgY291cnNlXFxuICByb2xlLiBTZWxlY3QgYW55IHlvdSB3aXNoIHRvIGZsYWcgYXMgZHJvcHBlZCBpbiB0aGUgc3lzdGVtLlwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwidGFibGVcIixcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWxsLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhbGxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uYWxsKVxuICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmFsbCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgOiBfdm0uYWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uYWxsID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChfdm0uYWxsID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5hbGwgPSAkJGNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrQWxsKCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlJvbGVcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5kcm9wcywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB1c2VyLmRyb3AsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5kcm9wXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KHVzZXIuZHJvcClcbiAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2kodXNlci5kcm9wLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgIDogdXNlci5kcm9wXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IHVzZXIuZHJvcCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgX3ZtLiRzZXQodXNlciwgXCJkcm9wXCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQodXNlciwgXCJkcm9wXCIsICQkYylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiRHJvcHBpbmcgYSBzdHVkZW50IGRvZXMgbm90IHJlbW92ZSB0aGVtIGZyb20gdGhlIHN5c3RlbSwgaXQgb25seVxcbiAgICBjaGFuZ2VzIHRoZWlyIHN0YXR1cyB0byBcIlxuICAgICAgKSxcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcImRyb3BwZWRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW1lbWJlci1lZGl0b3IgY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInByZXYtbmV4dFwiLCB7IGF0dHJzOiB7IHVzZXI6IF92bS5lZGl0dXNlciB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImZldGNoZXJcIiwgeyBhdHRyczogeyBmZXRjaGVyOiBfdm0uZmV0Y2hlciB9IH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtY29tbW9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIm5ld1wiLCBpZDogXCJuZXdcIiwgdmFsdWU6IFwiXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmaWVsZHNldFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJsZWdlbmRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmxlZ2VuZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlVzZXIgSURcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlcklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJ1c2VyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmlkICE9PSBcIm5ld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjIwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IFwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS51c2VySWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcklkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fdGV4dFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTmFtZSBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIihsYXN0LCBmaXJzdClcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmV0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiBcIjE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm5hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmV0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCIyNTRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRpby1zZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3B0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucm9sZXMsIGZ1bmN0aW9uKHJvbGVPYmosIGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicm9sZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInJvbGVcIiwgdHlwZTogXCJyYWRpb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0ucm9sZSwgaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb2xlID0gaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKHJvbGVPYmoubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIFtfdm0uX3YoXCJTdWJtaXRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICsgXCIvY2wvY29uc29sZS9tYW5hZ2VtZW50L2NvdXJzZS9tZW1iZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5lZGl0dXNlciAhPT0gbnVsbCAmJiBfdm0uaWQgIT09IFwibmV3XCJcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJwXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlVzZXIgZmllbGRzIGFyZSBub3QgZWRpdGFibGUgaW4gdGhpc1xcbiAgICAgICAgZm9ybS4gVG8gZ28gdGhlIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL21hbmFnZW1lbnQvdXNlci9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0dXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInVzZXIgZWRpdG9yIHBhZ2UgZm9yIFwiICsgX3ZtLl9zKF92bS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHRvIGVkaXQgdGhvc2UgZmllbGRzLlwiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX2MoXCJlbVwiLCBbX3ZtLl92KFwiUm9sZTpcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiLCBudWxsLCB7IHVzZXI6IF92bS51c2VyIH0pXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBjbC1tZW1iZXJzLWVkaXRvclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uZmV0Y2hlci5mZXRjaGVkXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS51c2Vycy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1tZ210LW9wdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLnRvVXNlcih1c2VyKSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9wZW5jaWwxNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVkaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiwqBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVsZXRlVXNlcih1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJvb3QgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLnRvVXNlcih1c2VyKSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS50b1VzZXIodXNlcikgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLm1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXNlbnRVc2VyKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvaW5mbzE2LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiVmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLm1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDo7XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXNlbnRVc2VyKHVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5tYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmVzZW50VXNlcih1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5lbWFpbCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJtYWlsdG86XCIgKyB1c2VyLmVtYWlsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh1c2VyLnJvbGVOYW1lKHRydWUpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50aW1lUmVsYXRpdmVVTklYKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1lbWJlci5jcmVhdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk0tREQtWVlZWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgc21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zdGF0cykpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLm1hbmFnZW1lbnQgPyBfYyhcImJ1bGstdXBsb2FkXCIpIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZmV0Y2hlclwiLCB7IGF0dHJzOiB7IGZldGNoZXI6IF92bS5mZXRjaGVyIH0gfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkVtYWlsXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlJvbGVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiQ3JlYXRlZFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IHJlZjogXCJzdHVkZW50cy1vbmx5XCIsIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3R1ZGVudHMsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3R1ZGVudHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnN0dWRlbnRzKVxuICAgICAgICAgICAgICA/IF92bS5faShfdm0uc3R1ZGVudHMsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgOiBfdm0uc3R1ZGVudHNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5zdHVkZW50cyxcbiAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnN0dWRlbnRzID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgIChfdm0uc3R1ZGVudHMgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zdHVkZW50cyA9ICQkY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLnN0dWRlbnRzT25seUNoYW5nZWRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgU3R1ZGVudHMgT25seVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZmV0Y2hlclwiLFxuICAgICAgICB7IGF0dHJzOiB7IGZldGNoZXI6IF92bS5mZXRjaGVyLCBmZXRjaGluZzogX3ZtLmZldGNoaW5nIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdChcImRlZmF1bHRcIiwgbnVsbCwgeyB1c2VyczogX3ZtLnVzZXJzLCBzdHVkZW50czogX3ZtLnN0dWRlbnRzIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnVzZXJzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgVGhlcmUgYXJlIGN1cnJlbnRseSBubyBtZW1iZXJzIGVucm9sbGVkIGluIHRoaXMgc2VjdGlvbi5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXNlY3Rpb24tY29tcG9uZW50XCIgfSxcbiAgICBbXG4gICAgICAhX3ZtLnNob3J0XG4gICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvdXJzZS5uYW1lKSArIFwiIFwiICsgX3ZtLl9zKF92bS5jb3Vyc2UuZGVzYykpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFwic2VjdGlvbi1zZWxlY3RcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJleHRyYVwiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXNlci5hdExlYXN0KHVzZXIxLnJvbGUoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdCh1c2VyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlcjEudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdCh1c2VyMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlcjEubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIxLnJvbGVOYW1lKCkpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJmZXRjaGVyXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBpZDogX3ZtLm1lbWJlcmlkLCBmYWlsbGluazogX3ZtLnN1Ym1pc3Npb25zTGluayB9LFxuICAgICAgICAgIG9uOiB7IGZldGNoZWQ6IF92bS5mZXRjaGVkIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicHJldi1uZXh0XCIsIHsgYXR0cnM6IHsgdXNlcjogZmV0Y2hlci51c2VyIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgZmV0Y2hlci51c2VyICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pc3Npb25zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogZmV0Y2hlci51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uYXNzaWdudGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIF92bS5fbChfdm0uc3VibWlzc2lvbnMsIGZ1bmN0aW9uKHN1Ym1pc3Npb24pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3Moc3VibWlzc2lvbi5uYW1lKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3VibWlzc2lvbi12dWVcIiwgeyBhdHRyczogeyBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uIH0gfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVyc2ZldGNoZXJcIiwge1xuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNsaWNrIG9uIGEgdXNlciB0byB2aWV3IHN1Ym1pc3Npb25zIGZvciB0aGF0IHVzZXIuXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pc3Npb25zLWxpbmtzXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYXNzaWdubWVudDogX3ZtLmFzc2lnbm1lbnQgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woZmV0Y2hlci51c2VycywgZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0ubGluayArIHVzZXIubWVtYmVyLmlkIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLmxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICByZXR1cm4gX3ZtLnVzZXIuYXRMZWFzdChsaW5rLmF0TGVhc3QpXG4gICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnJvb3QgKyBsaW5rLnVybCB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhsaW5rLnRleHQpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5jb3Vyc2Uuc2VjdGlvbnMubGVuZ3RoID09PSAxXG4gICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2VsZWN0ZWQpKV0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmNvdXJzZS5zZWN0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uY2hhbmdlU2VjdGlvblxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvdXJzZS5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLnNlbWVzdGVyKSArIFwiL1wiICsgX3ZtLl9zKHNlY3Rpb24uaWQpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjbC1zdWJtaXNzaW9uXCIgfSxcbiAgICBbXG4gICAgICBfdm0uc3VibWlzc2lvbi5zdWJtaXRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5zdWJtaXNzaW9uLm9wZW5cbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IGNvbXAgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc3RhZmZcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5zdWJtaXR0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBuZXdfc3VibWlzc2lvbnM6IF92bS5uZXdTdWJtaXNzaW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24ub3BlblxuICAgICAgICAgICAgICAgID8gX2MoX3ZtLnN1Ym1pdHRlciwge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IG5ld19zdWJtaXNzaW9uczogX3ZtLm5ld1N1Ym1pc3Npb25zIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiwgc3VibWlzc2lvbnM6IF92bS5zdWJtaXNzaW9ucyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN1Ym1pc3Npb24uYWRkaXRpb25hbCkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiLi4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VibWl0OiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVwbG9hZCBGaWxlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgIHJlZjogXCJpZnJhbWVcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IFwiMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZywgc3JjOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgbG9hZDogX3ZtLmxvYWQgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgdGFyZ2V0OiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1Ym1pdDogXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5maWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBuYW1lOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVcGxvYWQgRmlsZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICByZWY6IFwiaWZyYW1lXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWcsIHNyYzogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5sb2FkIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcImRpdlwiLCB7IHJlZjogXCJlZGl0b3JcIiB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiU3VibWl0XCIgfSB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJIZWxsb1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic2hvdXRvdXRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJTdWJtaXNzaW9uIHR5cGUgXCIpLFxuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9ucy50eXBlKSldKSxcbiAgICAgIF92bS5fdihcIiBpcyBub3Qgc3VwcG9ydGVkXCIpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uc3VibWlzc2lvbi5tYW51YWwgIT09IHRydWVcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uc3VibWlzc2lvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFyZ2UgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBzdWJtaXNzaW9ucywgeWV0LlwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN1Ym1pc3Npb25zLCBmdW5jdGlvbihzdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VibWl0dGVkLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5zdWJtaXNzaW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uc3VibWlzc2lvbi5hc3NpZ25UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBfdm0uc3VibWlzc2lvbi50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWlzc2lvbjogc3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2lzOiBfdm0uc3VibWlzc2lvbi5hbmFseXNpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtaW5nOiBfdm0uc3VibWlzc2lvbi50ZWFtaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBfdm0uYW5hbHlzaXNSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld19pbWc6IF92bS5wcmV2aWV3X2ltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBfdm0ucHJldmlld2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiBkYXRlIHRvIGRpc3BsYXkgdGhlIHN1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiBmb3Igc3VibWlzc2lvbiBvcHRpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucHJldmlld1R4dCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmV2aWV3VHh0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3IHllbGxvdy1wYWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnByZXZpZXdUeHQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wcmV2aWV3VGltZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnJlc3VsdCAhPT0gbnVsbFxuICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWFuYWx5c2lzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdCkpXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJldmlld0ltZyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXCJmaWd1cmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlld0ltZyB9IH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJldmlld1RpbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnN1Ym1pc3Npb24uaHRtbCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN1Ym1pc3Npb24uaHRtbCkgfSB9KVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3VibWlzc2lvbnNcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5pc1RleHQoKVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0VGV4dCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheSgpKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5pc0ltYWdlKClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheSgpKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibWVudS12dWVcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLCBvbjogeyBvcGVuOiBfdm0uc2VsZWN0IH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTWVudVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnRvRG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEb3dubG9hZFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFuYWx5c2lzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaWNvbiwgYWx0OiBpdGVtLm1lbnUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLm1lbnUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICA6IFtcbiAgICAgICAgICAgIF9jKFwibWVudS12dWVcIiwgeyBvbjogeyBvcGVuOiBfdm0uc2VsZWN0IH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcImFcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXSksXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogXCJNZW51XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0udG9Eb3dubG9hZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiRG93bmxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEb3dubG9hZFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dBbmFseXNpcyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaWNvbiwgYWx0OiBpdGVtLm1lbnUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLm1lbnUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2ZGUxNWI3OVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmU1NGU3NGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMTQxZjAzZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlNTRlNzRiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlNTRlNzRiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjExMDA1Yzg5XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjJmNTQzNDk4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZmZGM1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2YzM5N2FkZFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmZmRjNTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmZmRjNTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTk0OTRlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU1NTViYTFkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTk0OTRlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZDMzZDkwMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM5MDBjZDBhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZDMzZDkwMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXNzaWdubWVudHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5OTYwMTY0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXNzaWdubWVudHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ5OTYwMTY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5OTYwMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5OTYwMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5NjAxNjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDk5NjAxNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5NjAxNjQmXCIiLCJpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG5pbXBvcnQgTWVtYmVyc0VkaXRvckNvbXBvbmVudCBmcm9tICcuL01lbWJlcnMvTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTWVtYmVyRWRpdG9yQ29tcG9uZW50IGZyb20gJy4vTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFNlY3Rpb25Db21wb25lbnQgZnJvbSAnLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBBc3NpZ25tZW50c0NvbXBvbmVudCBmcm9tICcuL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBFeHRlbnNpb25zQ29tcG9uZW50IGZyb20gJy4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgU3VibWlzc2lvbnNDb21wb25lbnQgZnJvbSAnLi9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyIGZyb20gJy4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZSc7XHJcbmltcG9ydCBDb3Vyc2VFbWFpbFZ1ZSBmcm9tICcuL0NvdXJzZUVtYWlsLnZ1ZSc7XHJcbmltcG9ydCBTcG9vZmluZ1Z1ZSBmcm9tICcuL1Nwb29maW5nLnZ1ZSc7XHJcblxyXG5pbXBvcnQgU3VibWlzc2lvbnNMaW5rc1Z1ZSBmcm9tICcuL1N1Ym1pc3Npb25zTGlua3MudnVlJztcclxuXHJcbi8qKlxyXG4gKiBDb3Vyc2UgY29uc29sZSBjb21wb25lbnRzXHJcbiAqIEBwYXJhbSBzaXRlIFRoZSBTaXRlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ291cnNlQ29uc29sZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGNvbnN0IENvbnNvbGUgPSBzaXRlLmNvbnNvbGU7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEFzc2lnbm1lbnQgbGlua3MgYXJlIGxpbmtlZCBhZGRlZCB0byB0aGUgYXNzaWdubWVudCBwYWdlIG5leHQgdG8gYW5cclxuICAgIC8vIGFzc2lnbm1lbnQgYnkgYSBzdWJzeXN0ZW0uIFRoaXMgaXMgaG93IFwicXVpelwiIGlzIGFkZGVkIHRvIHNlZSB0aGVcclxuICAgIC8vIHF1aXogc3VibWlzc2lvbnMgZm9yIGFuIGFzc2lnbm1lbnQuXHJcbiAgICAvL1xyXG4gICAgdGhpcy5hc3NpZ25tZW50TGlua3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFzc2lnbm1lbnRMaW5rID0gZnVuY3Rpb24ocHJvcGVydHksIG5hbWUsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50TGlua3MucHVzaCh7cHJvcGVydHk6IHByb3BlcnR5LCBuYW1lOiBuYW1lLCByb3V0ZTogcm91dGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBDb25zb2xlLnRpdGxlID0gJ0NvdXJzZSBDb25zb2xlJztcclxuXHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnQ291cnNlJyxcclxuICAgICAgICBvcmRlcjogMjAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9jb3Vyc2UvdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb25zdCBwYWdlID0ge3RpdGxlOiAnQ291cnNlJywgcm91dGU6ICcvY291cnNlJywgb3JkZXI6IDN9O1xyXG4gICAgY29uc3QgcGFnZSA9IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBNZW1iZXIuU1RBRkYsXHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdDb3Vyc2UnLCBvcmRlcjogNX0sXHJcbiAgICAgICAgdGl0bGU6ICdNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICByb3V0ZTogJy9jb3Vyc2UvbWVtYmVycycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9jb3Vyc2UvbWVtYmVycycsIGNvbXBvbmVudDogTWVtYmVyc0VkaXRvckNvbXBvbmVudCwgcHJvcHM6IHttYW5hZ2VtZW50OiBmYWxzZX19XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogTWVtYmVyLlNUQUZGLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgc2VjdGlvbjoge3RpdGxlOiAnQ291cnNlJywgb3JkZXI6IDV9LFxyXG4gICAgICAgIHRpdGxlOiAnQXNzaWdubWVudHMnLFxyXG4gICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgIHJvdXRlOiAnL2NvdXJzZS9hc3NpZ25tZW50cycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9jb3Vyc2UvYXNzaWdubWVudHMnLCBjb21wb25lbnQ6IEFzc2lnbm1lbnRzQ29tcG9uZW50fVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuXHRDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuXHRcdGF0TGVhc3Q6IHt0YWc6ICdjb3Vyc2Utc3Bvb2ZpbmcnLCBkZWZhdWx0OiBNZW1iZXIuVEF9LFxyXG5cdFx0cGFnZTogcGFnZSxcclxuXHRcdHNlY3Rpb246IHt0aXRsZTogJ0NvdXJzZScsIG9yZGVyOiA1fSxcclxuXHRcdHRpdGxlOiAnTWVtYmVyIFNwb29maW5nJyxcclxuXHRcdG9yZGVyOiAzLFxyXG5cdFx0cm91dGU6ICcvY291cnNlL3Nwb29maW5nJyxcclxuXHRcdHJvdXRlczogW1xyXG5cdFx0XHR7cm91dGU6ICcvY291cnNlL3Nwb29maW5nJywgY29tcG9uZW50OiBTcG9vZmluZ1Z1ZX1cclxuXHRcdF1cclxuXHR9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBNZW1iZXIuVEEsXHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdDb3Vyc2UnLCBvcmRlcjogNX0sXHJcbiAgICAgICAgdGl0bGU6ICdFbWFpbCBNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICByb3V0ZTogJy9jb3Vyc2UvZW1haWwnLFxyXG4gICAgICAgIHJvdXRlczogW1xyXG4gICAgICAgICAgICB7cm91dGU6ICcvY291cnNlL2VtYWlsJywgY29tcG9uZW50OiBDb3Vyc2VFbWFpbFZ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IE1lbWJlci5BRE1JTixcclxuICAgICAgICBwYWdlOiB7dGl0bGU6ICdNYW5hZ2VtZW50Jywgcm91dGU6ICcvbWFuYWdlbWVudCcsIG9yZGVyOiAxMH0sXHJcbiAgICAgICAgc2VjdGlvbjoge3RpdGxlOiAnQ291cnNlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L2NvdXJzZS9tZW1iZXJzJyxcclxuICAgICAgICByb3V0ZXM6IFtcclxuICAgICAgICAgICAge3JvdXRlOiAnL21hbmFnZW1lbnQvY291cnNlL21lbWJlcnMnLCBuYW1lOiAnbWVtYmVycycsIGNvbXBvbmVudDogTWVtYmVyc0VkaXRvckNvbXBvbmVudCwgcHJvcHM6IHttYW5hZ2VtZW50OiB0cnVlfX0sXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L2NvdXJzZS9tZW1iZXIvOmlkJywgbmFtZTogJ21lbWJlcicsIGNvbXBvbmVudDogTWVtYmVyRWRpdG9yQ29tcG9uZW50LCBwcm9wczogdHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGVzKFtcclxuICAgICAgICB7cm91dGU6ICcvY291cnNlL2V4dGVuc2lvbnMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogRXh0ZW5zaW9uc0NvbXBvbmVudCwgcHJvcHM6IHRydWV9LFxyXG4gICAgICAgIHtyb3V0ZTogJy9jb3Vyc2Uvc3VibWlzc2lvbnMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogU3VibWlzc2lvbnNDb21wb25lbnQsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvY291cnNlL3N1Ym1pc3Npb25zLzphc3NpZ250YWcvOm1lbWJlcmlkJywgbmFtZTogJ3N1Ym1pc3Npb25zJywgY29tcG9uZW50OiBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIsIHByb3BzOiB0cnVlfVxyXG4gICAgXSk7XHJcblxyXG5cclxuICAgIENvbnNvbGUuY29tcG9uZW50cy5hZGROYXYyKFNlY3Rpb25Db21wb25lbnQsIDEwKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRXhwb3J0c1xyXG4gICAgLy9cclxuICAgIHRoaXMuU3VibWlzc2lvbnNMaW5rc1Z1ZSA9IFN1Ym1pc3Npb25zTGlua3NWdWU7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRlODBjYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGU0ZTgwY2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGU0ZTgwY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGU0ZTgwY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRlODBjYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZTRlODBjYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNGU4MGNjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmU1NGU3NGImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmU1NGU3NGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZTU0ZTc0YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmU1NGU3NGInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmU1NGU3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmU1NGU3NGInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZTU0ZTc0YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZTU0ZTc0YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmU1NGU3NGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZTU0ZTc0YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTRlNzRiJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00N2FjZmRhMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDdhY2ZkYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDdhY2ZkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDdhY2ZkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V4dGVuc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWNmZGEyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3YWNmZGEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDdhY2ZkYTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1NjVjMzY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNTY1YzM2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNTY1YzM2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNTY1YzM2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDU2NWMzNjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZDU2NWMzNjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL0J1bGtVcGxvYWRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVsa1VwbG9hZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1NjVjMzY2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZmZGM1ODAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZmZGM1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyZmZkYzU4MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmZmZGM1ODAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmZmZGM1ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmZmZGM1ODAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmZkYzU4MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZmZkYzU4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZmZkYzU4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmZmRjNTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZmZGM1ODAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbWJlckVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYwZWE1MTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjBlYTUxOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjBlYTUxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjBlYTUxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjBlYTUxOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZjBlYTUxOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjBlYTUxOSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE5YTU1YzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhOWE1NWM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhOWE1NWM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhOWE1NWM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTlhNTVjNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YTlhNTVjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE5YTU1YzYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1YzIyYTc4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlNWMyMmE3OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlNWMyMmE3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlNWMyMmE3OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTVjMjJhNzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTVjMjJhNzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1YzIyYTc4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2VhYjQ0ZDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2VhYjQ0ZDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2VhYjQ0ZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2VhYjQ0ZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWFiNDRkMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZWFiNDRkMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWI0NGQyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzllYWRkOGQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzllYWRkOGQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzllYWRkOGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzllYWRkOGQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWVhZGQ4ZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOWVhZGQ4ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZWFkZDhkJlwiIiwiY29uc3QgTE9DQUxfU1RPUkFHRV9TVFVERU5UU19PTkxZID0gJ2NsX3N0dWRlbnRzX29ubHknO1xyXG5cclxuLyoqXHJcbiAqIEl0ZW0gaW4gbG9jYWwgc3RvcmFnZSB0aGF0IG1haW50YWlucyB0aGUgc3RhdGUgb2ZcclxuICogXCJzdHVkZW50cyBvbmx5XCIgaW4gdGhlIGNvbnNvbGUuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0dWRlbnRzT25seSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRsZXQgcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSk7XHJcblx0cmV0dXJuIHMgPT09ICd5ZXMnO1xyXG59XHJcblxyXG5TdHVkZW50c09ubHkuc2V0ID0gZnVuY3Rpb24oc3R1ZGVudHMpIHtcclxuXHRjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSwgc3R1ZGVudHMgPyAneWVzJyA6ICdubycpO1xyXG5cclxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzE5NDk0ZTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzE5NDk0ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMTk0OTRlMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzE5NDk0ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzE5NDk0ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzE5NDk0ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxOTQ5NGUyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MxOTQ5NGUyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU2VjdGlvbkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMTk0OTRlMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzE5NDk0ZTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nwb29maW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Mjg0YzRiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TcG9vZmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nwb29maW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1Mjg0YzRiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1Mjg0YzRiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1Mjg0YzRiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyODRjNGIwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUyODRjNGIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3Bvb2ZpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9vZmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyODRjNGIwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjFlMTMyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODBmMWUxMzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODBmMWUxMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODBmMWUxMzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODBmMWUxMzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODBmMWUxMzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjFlMTMyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGRkNTA2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWZkZGQ1MDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWZkZGQ1MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWZkZGQ1MDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZkZGQ1MDYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWZkZGQ1MDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmZGRkNTA2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzk2MzJjZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWlzc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzk2MzJjZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzk2MzJjZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzk2MzJjZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTYzMmNlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOTYzMmNlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTYzMmNlNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTY3NDRiNmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk2NzQ0YjZlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk2NzQ0YjZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk2NzQ0YjZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05Njc0NGI2ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5Njc0NGI2ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2NzQ0YjZlJlwiIiwiXHJcbmltcG9ydCB7Q291cnNlQ29uc29sZX0gZnJvbSAnLi9Db3Vyc2VDb25zb2xlJztcclxuXHJcbmltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICcuL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlJztcclxuaW1wb3J0IE1lbWJlckZldGNoZXJDb21wb25lbnRWdWUgZnJvbSAnLi9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSBmcm9tICcuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgZnJvbSAnLi9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBTdWJtaXNzaW9uc0xpbmtzVnVlIGZyb20gJy4vU3VibWlzc2lvbnNMaW5rcy52dWUnO1xyXG5cclxuU2l0ZS5QcmV2TmV4dE1lbWJlclZ1ZSA9IFByZXZOZXh0TWVtYmVyVnVlO1xyXG5TaXRlLk1lbWJlckZldGNoZXJDb21wb25lbnRWdWUgPSBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5TaXRlLlN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSA9IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZTtcclxuU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5TaXRlLlN1Ym1pc3Npb25zTGlua3NWdWUgPSBTdWJtaXNzaW9uc0xpbmtzVnVlO1xyXG5cclxubGV0IGNvdXJzZUNvbnNvbGUgPSBuZXcgQ291cnNlQ29uc29sZShTaXRlLnNpdGUpO1xyXG5TaXRlLnNpdGUuY29uc29sZS5jb3Vyc2UgPSBjb3Vyc2VDb25zb2xlO1xyXG5cclxuIiwiaW1wb3J0IHtNZW1iZXJzaGlwfSBmcm9tICcuLi8uLi8uLi91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBNZW1iZXIgb2YgYSBjb3Vyc2VcclxuICogQXR0YWNoZXMgdG8gYSB1c2VyIE9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcbiAgICBNZW1iZXJzaGlwLmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSAnRyc7XHJcblxyXG4gICAgaWYoanNvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IGpzb24uc2VtZXN0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0ganNvbi5zZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IGpzb24uY3JlYXRlZCAhPT0gdW5kZWZpbmVkID8ganNvbi5jcmVhdGVkIDogbnVsbDtcclxuICAgICAgICByb2xlID0ganNvbi5yb2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlkID0gMDsgICAgLy8gU3lzdGVtIG1lbWJlcnNoaXAgSURcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0gbnVsbDsgICAvLyBTZW1lc3RlciBjb2RlXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0gbnVsbDsgIC8vIFNlY3Rpb24gSWRcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBudWxsOyAgICAvLyBXaGVuIHVzZXIgd2FzIGNyZWF0ZWRcclxuICAgICAgICByb2xlID0gbnVsbDsgICAgICAgLy8gTWVtYmVyc2hpcCByb2xlXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yb2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRSb2xlID0gZnVuY3Rpb24ocm9sZV8pIHtcclxuICAgICAgICByb2xlID0gcm9sZV87XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbWJlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lbWJlcnNoaXAucHJvdG90eXBlKTtcclxuTWVtYmVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE1lbWJlcjtcclxuXHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvdXJzZSBzZWN0aW9uIGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcmV0dXJucyB7Kn1cclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICByZXR1cm4gc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXSh0aGlzLnNlbWVzdGVyLCB0aGlzLnNlY3Rpb24pO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IGFuIGFzc2lnbm1lbnQgZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEBwYXJhbSBhc3NpZ250YWcgQXNzaWdubWVudCB0YWdcclxuICovXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHN0b3JlLCBhc3NpZ250YWcpIHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24oc3RvcmUpO1xyXG4gICAgcmV0dXJuIHNlY3Rpb24uZ2V0QXNzaWdubWVudChhc3NpZ250YWcpO1xyXG59XHJcblxyXG5cclxuLy8gVGhlIHBvc3NpYmxlIG1lbWJlciByb2xlc1xyXG4vLyBNdXN0IG1hdGNoIHZhbHVlcyBpbiBNZW1iZXIucGhwXHJcbk1lbWJlci5HVUVTVCA9ICdHJzsgICAgIC8vLzwgR3Vlc3QgdXNlciB2aXNpdGluZyB0aGUgc2l0ZVxyXG5NZW1iZXIuVVNFUiA9ICdVJzsgICAgICAvLy88IFN0YW5kYXJkIHVzZXIgZnJvbSBVc2VyLCBkb24ndCB1c2UgZm9yIE1lbWJlclxyXG5NZW1iZXIuRFJPUFBFRCA9ICdEJzsgICAvLy88IFVzZXIgaGFzIGRyb3BwZWQgdGhlIGNvdXJzZVxyXG5NZW1iZXIuU1RVREVOVCA9ICdUJzsgICAvLy88IEVucm9sbGVkIHN0dWRlbnQgaW4gY291cnNlXHJcbk1lbWJlci5TVEFGRiA9ICdTJzsgICAgIC8vLzwgQW55IGNvdXJzZSBzdGFmZlxyXG5NZW1iZXIuR1JBREVSID0gJ1InOyAgICAvLy88IEdyYWRlcnNcclxuTWVtYmVyLlVMQSA9ICdMJzsgICAgICAgLy8vPCBVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudFxyXG5NZW1iZXIuVEEgPSAnRSc7ICAgICAgICAvLy88IFRlYWNoaW5nIGFzc2lzdGFudFxyXG5NZW1iZXIuSU5TVFJVQ1RPUiA9ICdJJzsgICAgLy8vPCBDb3Vyc2UgaW5zdHJ1Y3RvclxyXG5NZW1iZXIuQURNSU4gPSAnQSc7ICAgICAvLy88IEFkbWluXHJcblxyXG5NZW1iZXIucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcm9sZXMgPSB7fTtcclxuICAgIHJvbGVzW01lbWJlci5HVUVTVF0gPSB7bmFtZTogJ0d1ZXN0JywgcHJpb3JpdHk6IDF9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkRST1BQRURdID0ge25hbWU6ICdEcm9wcGVkJywgcHJpb3JpdHk6IDJ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlVTRVJdID0ge25hbWU6ICdVc2VyJywgcHJpb3JpdHk6IDMsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUVURFTlRdID0ge25hbWU6ICdTdHVkZW50JywgcHJpb3JpdHk6IDR9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUQUZGXSA9IHtuYW1lOiAnU3RhZmYnLCBwcmlvcml0eTogNSwgc2tpcDogdHJ1ZX07XHJcblx0cm9sZXNbTWVtYmVyLkdSQURFUl0gPSB7bmFtZTogJ0dyYWRlcicsIHByaW9yaXR5OiA2fTtcclxuXHRyb2xlc1tNZW1iZXIuVUxBXSA9IHtuYW1lOiAnVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1VMQScsIHByaW9yaXR5OiA3fTtcclxuICAgIHJvbGVzW01lbWJlci5UQV0gPSB7bmFtZTogJ1RlYWNoaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVEEnLCBwcmlvcml0eTogOH07XHJcbiAgICByb2xlc1tNZW1iZXIuSU5TVFJVQ1RPUl0gPSB7bmFtZTogJ0luc3RydWN0b3InLCBwcmlvcml0eTogOX07XHJcbiAgICByb2xlc1tNZW1iZXIuQURNSU5dID0ge25hbWU6ICdBZG1pbicsIHByaW9yaXR5OiAxMDB9O1xyXG5cclxuICAgIHJldHVybiByb2xlcztcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7TWVtYmVyfTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZDMzZDkwMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hZDMzZDkwMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImFkMzNkOTAwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhZDMzZDkwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZDMzZDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZDMzZDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWQzM2Q5MDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWQzM2Q5MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWQzM2Q5MDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZDMzZDkwMCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE1ZjQ2NjAwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNWY0NjYwMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDJiNjIwYzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJiNjIwYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJiNjIwYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMmI2MjBjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNhYTFlNTcwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNhYTFlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNhYTFlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYWExZTU3MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzExZDBhOTknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxMWQwYTk5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNmZkNDgwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNmZkNDgwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNmZkNDgwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDZmZDQ4MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyNGRhZDc3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyNGRhZDc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyNGRhZDc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQyNGRhZDc3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUwNjk0M2FhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDY5NDNhYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgbWVtYmVyc2hpcCBhc3NvY2lhdGVkIHdpdGggYSB1c2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluaGVyaXRlZCBieVxyXG4gKiBhY3R1YWwgbWVtYmVyc2hpcCBvYmplY3RzLlxyXG4gKi9cclxuXHJcbnZhciBNZW1iZXJzaGlwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8vIFRoZSBVc2VyIG9iamVjdCBmb3IgdGhpcyBtZW1iZXJzaGlwXHJcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge01lbWJlcnNoaXB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9