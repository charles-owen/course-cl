(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Course"] = factory();
	else
		root["Course"] = factory();
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
/******/ 		"Course": 0
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
/******/ 	deferredModules.push(["./vendor/cl/course/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./vendor/cl/course/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/course/index.js ***!
  \***********************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony import */ var _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony import */ var _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/CourseFactory */ "./vendor/cl/course/js/CourseFactory.js");
/**
 * @file
 */


Site.SectionStatus = _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__["SectionStatus"];
Site.Member = _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"];
 // Use the factory to create the Users object

var Course = _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__["CourseFactory"].create(Site.site);


/***/ }),

/***/ "./vendor/cl/course/js/Course.js":
/*!***************************************!*\
  !*** ./vendor/cl/course/js/Course.js ***!
  \***************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/**
 * Course object.
 *
 * Site.Course is an instance of this object.
 *
 * @constructor
 */
var Course = function Course() {};

/***/ }),

/***/ "./vendor/cl/course/js/CourseFactory.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/CourseFactory.js ***!
  \**********************************************/
/*! exports provided: CourseFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseFactory", function() { return CourseFactory; });
/* harmony import */ var _Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course */ "./vendor/cl/course/js/Course.js");
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _State_StoreModuleCourse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./State/StoreModuleCourse */ "./vendor/cl/course/js/State/StoreModuleCourse.js");
/* harmony import */ var _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionSelectors/SectionSelector */ "./vendor/cl/course/js/SectionSelectors/SectionSelector.js");
/* harmony import */ var _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Submission/Submission */ "./vendor/cl/course/js/Submission/Submission.js");
/* harmony import */ var _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorHelp/ErrorHelp */ "./vendor/cl/course/js/ErrorHelp/ErrorHelp.js");
/* harmony import */ var _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util/SpoofingRestore */ "./vendor/cl/course/js/Util/SpoofingRestore.js");
/* harmony import */ var _SectionStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");








/**
 * Factory to create the Course object.
 * @constructor
 */

var CourseFactory = function CourseFactory() {};
/**
 * Factory method to create a Course object.
 *
 * This allows for injection of the store for testing purposes.
 * @param site The Site object
 * @return {Course} object.
 */

CourseFactory.create = function (site) {
  var course = new _Course__WEBPACK_IMPORTED_MODULE_0__["Course"]();
  site.Course = course; //
  // Modify User to add the ability to instantiate
  // an appropriate Member object
  //

  Users.User.instantiateMember = function (data) {
    if (data.member !== null) {
      return new _Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"](data.member);
    } else {
      return null;
    }
  };

  var StoreModuleUsers = site.StoreModuleUsers; //
  // Install the course store modules
  //

  var store = site.store;

  if (store !== undefined) {
    store.registerModule('course', _State_StoreModuleCourse__WEBPACK_IMPORTED_MODULE_2__["StoreModuleCourse"]);
    store.registerModule('members', StoreModuleUsers.create('/api/course/members', function (user) {
      return user.member.id;
    }));
  }

  site.ready(function () {
    //
    // Detect the passed in course definition information
    // and add it to the store.
    //
    var en;

    if ((en = document.getElementById('cl-course')) !== null) {
      store.commit('course/set', JSON.parse(en.textContent));
    }

    if (en = document.getElementById('cl-course-staff')) {
      store.commit('course/setStaff', JSON.parse(en.textContent));
    } //
    // We have modified the User object so that it will know
    // how to attach a membership. This means we must reload
    // the user information so it can create a new object
    //


    if ((en = document.getElementById('cl-user')) !== null) {
      store.commit('user/set', JSON.parse(en.textContent));
    }
  });
  site.start(function () {
    _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__["SectionSelector"].install(site);
    _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__["Submission"].install(site);
    _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__["ErrorHelp"].install(site);
    _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__["SpoofingRestore"].install(site);
  });
  site.SectionStatus = _SectionStatus__WEBPACK_IMPORTED_MODULE_7__["SectionStatus"];
  return course;
};

/***/ }),

/***/ "./vendor/cl/course/js/ErrorHelp/ErrorHelp.js":
/*!****************************************************!*\
  !*** ./vendor/cl/course/js/ErrorHelp/ErrorHelp.js ***!
  \****************************************************/
/*! exports provided: ErrorHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHelp", function() { return ErrorHelp; });
var ErrorHelp = function ErrorHelp(element, site) {
  var options = {};
  var content = element.textContent;

  if (content.length > 0) {
    options = JSON.parse(element.textContent);
    element.innerHTML = '';
  }

  element.style.display = 'inline-block';
  var form = document.createElement('form');
  element.appendChild(form);
  var input = document.createElement('input');
  input.type = "text";
  form.appendChild(input);
  var button = document.createElement('input');
  button.type = "submit";
  button.value = "Error Help";
  form.appendChild(button);
  var url = Site.root + '/cl/errorhelp';

  if (options.assign !== undefined) {
    url += '/' + options.assign;

    if (options.tag !== undefined) {
      url += '/' + options.tag;
    }
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var error = encodeURI(input.value.toUpperCase().trim());
    window.open("".concat(url, "?e=").concat(error), "Error Help", 'width=600, height=500, scrollbars=yes');
  });
};

ErrorHelp.install = function (site) {
  var elements = document.querySelectorAll('div.cl-error-help');

  for (var i = 0; i < elements.length; i++) {
    new ErrorHelp(elements[i], site);
  }
};

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

/***/ "./vendor/cl/course/js/Models/Assignment.js":
/*!**************************************************!*\
  !*** ./vendor/cl/course/js/Models/Assignment.js ***!
  \**************************************************/
/*! exports provided: Assignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignment", function() { return Assignment; });
var Assignment = function Assignment(data) {
  for (var property in data) {
    this[property] = data[property];
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/AssignmentCategory.js":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Models/AssignmentCategory.js ***!
  \**********************************************************/
/*! exports provided: AssignmentCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentCategory", function() { return AssignmentCategory; });
/* harmony import */ var _Assignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignment */ "./vendor/cl/course/js/Models/Assignment.js");

var AssignmentCategory = function AssignmentCategory(data) {
  this.tag = data.tag;
  this.name = data.name;
  this.grading = data.grading !== undefined ? data.grading : null;
  this.assignments = [];
  this.assignmentsByTag = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data.assignments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var assign = _step.value;
      var assignment = new _Assignment__WEBPACK_IMPORTED_MODULE_0__["Assignment"](assign);
      this.assignments.push(assignment);
      this.assignmentsByTag[assignment.tag] = assignment;
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

  this.getAssignment = function (tag) {
    var assignment = this.assignmentsByTag[tag];
    return assignment !== undefined ? assignment : null;
  };
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/Assignments.js":
/*!***************************************************!*\
  !*** ./vendor/cl/course/js/Models/Assignments.js ***!
  \***************************************************/
/*! exports provided: Assignments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assignments", function() { return Assignments; });
/* harmony import */ var _AssignmentCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentCategory */ "./vendor/cl/course/js/Models/AssignmentCategory.js");

var Assignments = function Assignments(data) {
  this.categories = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var category = _step.value;
      this.categories.push(new _AssignmentCategory__WEBPACK_IMPORTED_MODULE_0__["AssignmentCategory"](category));
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

  this.getAssignment = function (tag) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = this.categories[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var category = _step2.value;
        var assignment = category.getAssignment(tag);

        if (assignment !== null) {
          return assignment;
        }
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

    return null;
  };
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/Course.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/Models/Course.js ***!
  \**********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./vendor/cl/course/js/Models/Section.js");
/**
 * @file
 * Abstraction of the current course
 */

var Course = function Course(data) {
  this.account = data.account;
  this.desc = data.desc;
  this.name = data.name;
  this.sections = [];
  this.sectionsById = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data.sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var section = _step.value;
      var s = new _Section__WEBPACK_IMPORTED_MODULE_0__["Section"](section);
      this.sectionsById[section.id] = s;
      this.sections.push(s);
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
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/Section.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Models/Section.js ***!
  \***********************************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var _Assignments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignments */ "./vendor/cl/course/js/Models/Assignments.js");

var Section = function Section(data) {
  this.id = data.id;
  this.semester = data.semester;
  this.type = data.type;
  this.assignments = new _Assignments__WEBPACK_IMPORTED_MODULE_0__["Assignments"](data.assignments);

  this.getAssignment = function (tag) {
    return this.assignments.getAssignment(tag);
  };
};

/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelector.js":
/*!*****************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelector.js ***!
  \*****************************************************************/
/*! exports provided: SectionSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSelector", function() { return SectionSelector; });
/**
 * The section selector page /cl/sectionselector
 * @param element Page element (#cl-section-selector)
 * @param site Site object
 * @constructor
 */
var SectionSelector = function SectionSelector(element, site) {
  var Vue = site.Vue;
  var info = JSON.parse(element.textContent);
  var sections = info.sections;
  var before = info.before;
  var after = info.after;
  var template = "\n<div id=\"cl-section-selector\">\n  <site-header :title=\"title\"></site-header>\n    <div class=\"content\">\n      <div v-html=\"before\"></div>\n        <div class=\"centerbox cl-selector\">\n          <p v-for=\"section in sections\"><button @click.prevent=\"select(section)\">{{section.course}} {{section.nice}} Section {{section.section}}</button></p>\n        </div>\n       <div class=\"left\" v-html=\"after\"></div>\n     </div>\n   <site-footer></site-footer>\n</div>";
  var Header = site.info.header.component();
  var Footer = site.info.footer.component();
  var router = new Site.VueRouter({
    mode: 'history',
    routes: []
  });
  new Vue({
    router: router,
    el: element,
    data: {
      title: 'Section Selector',
      before: before,
      after: after,
      sections: sections,
      select: function select(section) {
        var _this = this;

        var params = {
          semester: section.semester,
          section: section.section
        };
        Site.api.post('/api/course/members/sectionselect', params).then(function (response) {
          if (response.hasError()) {
            Site.toast(_this, response);
          } else {
            window.location = _this.redirect;
          }
        })["catch"](function (error) {
          Site.toast(_this, error);
        });
      }
    },
    mounted: function mounted() {
      this.redirect = this.$route.query.u;

      if (this.redirect === undefined || this.redirect === null) {
        this.redirect = Site.root;
      }
    },
    template: template,
    components: {
      'site-header': Header,
      'site-footer': Footer
    }
  });
};

SectionSelector.install = function (site) {
  var en;

  if ((en = document.getElementById('cl-section-selector')) !== null) {
    new SectionSelector(en, site);
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/SectionStatus.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/SectionStatus.js ***!
  \**********************************************/
/*! exports provided: SectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionStatus", function() { return SectionStatus; });
/**
 * Constants that represent SectionStatus possible values.
 * @constructor
 */
var SectionStatus = function SectionStatus() {}; // Constants must match those in SectionStatus.php

SectionStatus.NOTVISITED = 'N'; ///< %Section has not been visited by the user

SectionStatus.VISITED = 'V'; ///< %Section has been visited, but is not yet done

SectionStatus.DONE = 'D'; ///< %Section is completed

SectionStatus.toString = function (status) {
  if (status === null) {
    return 'Unknown';
  }

  switch (status) {
    case SectionStatus.NOTVISITED:
    default:
      return 'Not yet visited';

    case SectionStatus.VISITED:
      return 'Visited';

    case SectionStatus.DONE:
      return 'Completed';
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/State/StoreModuleCourse.js":
/*!********************************************************!*\
  !*** ./vendor/cl/course/js/State/StoreModuleCourse.js ***!
  \********************************************************/
/*! exports provided: StoreModuleCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModuleCourse", function() { return StoreModuleCourse; });
/* harmony import */ var _Models_Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Course */ "./vendor/cl/course/js/Models/Course.js");
/**
 * The Vuex store module for course
 */

var StoreModuleCourse = {
  namespaced: true,
  state: {
    course: null,
    staff: []
  },
  mutations: {
    set: function set(state, data) {
      state.course = new _Models_Course__WEBPACK_IMPORTED_MODULE_0__["Course"](data);
    },
    setStaff: function setStaff(state, data) {
      var staff = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;
          var user = new Users.User(d);
          staff[user.member.id] = user;
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

      state.staff = staff;
    }
  },
  getters: {
    section: function section(state) {
      return function (semester, sectionId) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = state.course.sections[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var section = _step2.value;

            if (section.semester === semester && section.id === sectionId) {
              return section;
            }
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

        return null;
      };
    },
    assignment: function assignment(state, getters) {
      return function (semester, sectionId, assignTag) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = state.course.sections[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var section = _step3.value;

            if (section.semester === semester && section.id === sectionId) {
              return section;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return null;
      };
    },
    staff: function staff(state) {
      return function (id) {
        var user = state.staff[id];
        return user !== undefined ? user : null;
      };
    }
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.js":
/*!******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.js ***!
  \******************************************************/
/*! exports provided: Submission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submission", function() { return Submission; });
/* harmony import */ var _Submission_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue */ "./vendor/cl/course/js/Submission/Submission.vue");

var Submission = function Submission(element, site) {
  var submission = JSON.parse(element.textContent);
  element.innerHTML = '';
  var store = site.store;
  new site.Vue({
    el: element,
    store: store,
    site: site,
    data: function data() {
      return {
        submission: submission
      };
    },
    components: {
      submissionVue: _Submission_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
    },
    template: "<submission-vue :submission=\"submission\"></submission-vue>"
  });
};

Submission.install = function (site) {
  var elements = document.querySelectorAll('div.cl-submission');

  for (var i = 0; i < elements.length; i++) {
    new Submission(elements[i], site);
  }
};

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

/***/ "./vendor/cl/course/js/Util/SpoofingRestore.js":
/*!*****************************************************!*\
  !*** ./vendor/cl/course/js/Util/SpoofingRestore.js ***!
  \*****************************************************/
/*! exports provided: SpoofingRestore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpoofingRestore", function() { return SpoofingRestore; });
var SpoofingRestore = function SpoofingRestore(element, site) {
  var _this = this;

  var p = document.createElement('P');
  element.appendChild(p);
  p.classList.add('cl-home-control');
  var button = document.createElement('button');
  button.textContent = 'restore';
  p.appendChild(button);

  button.onclick = function () {
    site.api.post('/api/course/members/spoof', {
      restore: true
    }).then(function (response) {
      if (!response.hasError()) {
        window.location = site.root + '/';
      } else {
        Site.toast(_this, response);
      }
    })["catch"](function (error) {
      Site.toast(_this, error);
    });
  }; // let options = {};
  // const content = element.textContent;
  // if(content.length > 0) {
  //     options = JSON.parse(element.textContent);
  //     element.innerHTML = '';
  // }
  //
  // element.style.display = 'inline-block';
  //
  // let form = document.createElement('form');
  // element.appendChild(form);
  //
  // let input = document.createElement('input');
  // input.type = "text";
  // form.appendChild(input);
  //
  // let button = document.createElement('input');
  // button.type = "submit";
  // button.value = "Error Help";
  // form.appendChild(button);
  //
  // let url = Site.root + '/cl/errorhelp';
  // if(options.assign !== undefined) {
  //     url += '/' + options.assign;
  //
  //     if(options.tag !== undefined) {
  //         url += '/' + options.tag;
  //     }
  // }
  //
  // form.addEventListener('submit', (event) => {
  //     event.preventDefault();
  //
  //     const error = encodeURI(input.value.toUpperCase().trim());
  //     window.open(`${url}?e=${error}`, "Error Help", 'width=600, height=500, scrollbars=yes');
  // })

};

SpoofingRestore.install = function (site) {
  var elements = document.querySelectorAll('div.cl-spoofing-restore');

  for (var i = 0; i < elements.length; i++) {
    new SpoofingRestore(elements[i], site);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT84NmFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/ZGU0ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWU/MmI2MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/NDU5NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/NzNiMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT85Zjc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT8zNzYwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db3Vyc2VGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvRXJyb3JIZWxwL0Vycm9ySGVscC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQXNzaWdubWVudENhdGVnb3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0NvdXJzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9TZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU3RhdHVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3RhdGUvU3RvcmVNb2R1bGVDb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT85OGZiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT82NTMzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT85MTg0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/MGQxNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlP2FhMTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlP2RhOGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT9lY2NjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT8xNTQ2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/MWZkYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/NGVlMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT9iZmU3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlP2FkZmIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT9jNTI1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT83MTAzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvVXRpbC9TcG9vZmluZ1Jlc3RvcmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMiXSwibmFtZXMiOlsiU2l0ZSIsIlNlY3Rpb25TdGF0dXMiLCJNZW1iZXIiLCJDb3Vyc2UiLCJDb3Vyc2VGYWN0b3J5IiwiY3JlYXRlIiwic2l0ZSIsImNvdXJzZSIsIlVzZXJzIiwiVXNlciIsImluc3RhbnRpYXRlTWVtYmVyIiwiZGF0YSIsIm1lbWJlciIsIlN0b3JlTW9kdWxlVXNlcnMiLCJzdG9yZSIsInVuZGVmaW5lZCIsInJlZ2lzdGVyTW9kdWxlIiwiU3RvcmVNb2R1bGVDb3Vyc2UiLCJ1c2VyIiwiaWQiLCJyZWFkeSIsImVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbW1pdCIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50Iiwic3RhcnQiLCJTZWN0aW9uU2VsZWN0b3IiLCJpbnN0YWxsIiwiU3VibWlzc2lvbiIsIkVycm9ySGVscCIsIlNwb29maW5nUmVzdG9yZSIsImVsZW1lbnQiLCJvcHRpb25zIiwiY29udGVudCIsImxlbmd0aCIsImlubmVySFRNTCIsInN0eWxlIiwiZGlzcGxheSIsImZvcm0iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJ2YWx1ZSIsInVybCIsInJvb3QiLCJhc3NpZ24iLCJ0YWciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVycm9yIiwiZW5jb2RlVVJJIiwidG9VcHBlckNhc2UiLCJ0cmltIiwid2luZG93Iiwib3BlbiIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwic2VtZXN0ZXIiLCJzZWN0aW9uIiwiY3JlYXRlZCIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJTVEFGRiIsIkdSQURFUiIsIlVMQSIsIlRBIiwiSU5TVFJVQ1RPUiIsIkFETUlOIiwiZ2V0Um9sZXMiLCJyb2xlcyIsIm5hbWUiLCJwcmlvcml0eSIsInNraXAiLCJBc3NpZ25tZW50IiwicHJvcGVydHkiLCJBc3NpZ25tZW50Q2F0ZWdvcnkiLCJncmFkaW5nIiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50c0J5VGFnIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NpZ25tZW50cyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImFjY291bnQiLCJkZXNjIiwic2VjdGlvbnMiLCJzZWN0aW9uc0J5SWQiLCJzIiwiU2VjdGlvbiIsIlZ1ZSIsImluZm8iLCJiZWZvcmUiLCJhZnRlciIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaGVhZGVyIiwiY29tcG9uZW50IiwiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwiVnVlUm91dGVyIiwibW9kZSIsInJvdXRlcyIsImVsIiwidGl0bGUiLCJzZWxlY3QiLCJwYXJhbXMiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImxvY2F0aW9uIiwicmVkaXJlY3QiLCJtb3VudGVkIiwiJHJvdXRlIiwicXVlcnkiLCJ1IiwiY29tcG9uZW50cyIsIk5PVFZJU0lURUQiLCJWSVNJVEVEIiwiRE9ORSIsInRvU3RyaW5nIiwic3RhdHVzIiwibmFtZXNwYWNlZCIsInN0YXRlIiwic3RhZmYiLCJtdXRhdGlvbnMiLCJzZXQiLCJzZXRTdGFmZiIsImQiLCJzZWN0aW9uSWQiLCJhc3NpZ25UYWciLCJzdWJtaXNzaW9uIiwic3VibWlzc2lvblZ1ZSIsIlN1Ym1pc3Npb25WdWUiLCJwIiwiY2xhc3NMaXN0IiwiYWRkIiwib25jbGljayIsInJlc3RvcmUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtR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QUNILENBN0RNOztBQStEUHRCLGVBQWUsQ0FBQ0gsT0FBaEIsR0FBMEIsVUFBU3hCLElBQVQsRUFBZTtBQUNyQyxNQUFJdUQsUUFBUSxHQUFHdkMsUUFBUSxDQUFDd0MsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWY7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNGLFFBQVEsQ0FBQ3hCLE1BQXhCLEVBQWdDMEIsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxRQUFJOUIsZUFBSixDQUFvQjRCLFFBQVEsQ0FBQ0UsQ0FBRCxDQUE1QixFQUFpQ3pELElBQWpDO0FBQ0g7QUFDSixDQUxELEM7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQSxJQUFJMkQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUV4QjtBQUNBLE9BQUsvQyxJQUFMLEdBQVksSUFBWjtBQUNILENBSkQiLCJmaWxlIjoiY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ291cnNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvdXJzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG4gXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gd2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl0gPSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIHdlYnBhY2tIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHRcdGlmIChwYXJlbnRIb3RVcGRhdGVDYWxsYmFjaykgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0fSA7XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCIzNGY1YTkxNjA4NDk3MTg5ZDE3OVwiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0LypnbG9iYWxzIGNodW5rSWQgKi9cbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ291cnNlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NsL2Rpc3QvXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vdmVuZG9yL2NsL2NvdXJzZS9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1zdWJtaXNzaW9uXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLnN1Ym1pdFwiIGNsYXNzPVwiXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiFzdWJtaXNzaW9uLm9wZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuPC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInN0YWZmXCIgY2xhc3M9XCJjZW50ZXJib3ggcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Li4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uPC9lbT48L3A+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjb21wb25lbnQgdi1pZj1cInN1Ym1pc3Npb24ub3BlblwiIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN1Ym1pdHRlZCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6c3VibWlzc2lvbnM9XCJzdWJtaXNzaW9uc1wiPjwvc3VibWl0dGVkPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXCIgdi1odG1sPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsXCIgY2xhc3M9XCJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFRleHRWdWUgZnJvbSAnLi9TdWJtaXRUZXh0LnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0UHJvZ3JhbVZ1ZSBmcm9tICcuL1N1Ym1pdFByb2dyYW0udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRJbWFnZVZ1ZSBmcm9tICcuL1N1Ym1pdEltYWdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0VW5rbm93blZ1ZSBmcm9tICcuL1N1Ym1pdFVua25vd24udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXR0ZWRWdWUgZnJvbSAnLi9TdWJtaXR0ZWQudnVlJztcclxuICAgIGltcG9ydCB7VEVYVF9UWVBFU30gZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzdGFmZjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGVyOiAnc3VibWl0LXRleHQnLFxyXG4gICAgICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBzdWJtaXRUZXh0OiBTdWJtaXRUZXh0VnVlLFxyXG4gICAgICAgICAgc3VibWl0UHJvZ3JhbTogU3VibWl0UHJvZ3JhbVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdEltYWdlOiBTdWJtaXRJbWFnZVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFVua25vd246IFN1Ym1pdFVua25vd25WdWUsXHJcbiAgICAgICAgICBzdWJtaXR0ZWQ6IFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdHRoaXMuc3VibWlzc2lvbnMgPSB0aGlzLnN1Ym1pc3Npb24uc3VibWlzc2lvbnM7XHJcblxyXG4gICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcbiAgICAgICAgICB0aGlzLnN0YWZmID0gdXNlci5hdExlYXN0KE1lbWJlci5TVEFGRik7XHJcbiAgICAgICAgICBzd2l0Y2godGhpcy5zdWJtaXNzaW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdwcm9ncmFtJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXByb2dyYW0nO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC10ZXh0JztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LWltYWdlJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC11bmtub3duJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBuZXdTdWJtaXNzaW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZpbGVzOiBudWxsLFxyXG5cdFx0XHRcdGFjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Y29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHRcdFx0dGhpcy5hY3Rpb24gPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YDtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGxvYWQoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRsZXQganNvbiA9IGZyYW1lc1sndXBsb2FkX3RhcmdldF8nICsgdGhpcy5zdWJtaXNzaW9uLnRhZ10uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmlubmVySFRNTDtcclxuXHRcdFx0XHRsZXQgcmVzcG9uc2UgPSBuZXcgdGhpcy4kc2l0ZS5BUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcclxuXHJcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXQoKSB7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gcmVmPVwiZm9ybVwiIGNsYXNzPVwiZmlsZVwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCIgOnRhcmdldD1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIEBzdWJtaXQ9XCJzdWJtaXRcIj5cclxuICAgICAgPGxhYmVsPlN1Ym1pdDogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBAY2hhbmdlPVwiZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXCIvPjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInVwbG9hZFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgRmlsZVwiIC8+XHJcbiAgICAgIDxpZnJhbWUgcmVmPVwiaWZyYW1lXCIgQGxvYWQ9XCJsb2FkXCIgOm5hbWU9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBzcmM9XCJcIiBzdHlsZT1cIndpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyOjBweCBzb2xpZCAjZmZmO2Rpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGZpbGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy5hY3Rpb24gPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgbG9hZCgpIHtcclxuICAgICAgICAgICAgICBpZighdGhpcy5zdWJtaXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICBsZXQganNvbiA9IGZyYW1lc1sndXBsb2FkX3RhcmdldF8nICsgdGhpcy5zdWJtaXNzaW9uLnRhZ10uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuXHQgICAgICAgICAgICAgIHJlc3BvbnNlID0gbmV3IHRoaXMuJHNpdGUuQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XHJcblx0ICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgZHVyaW5nIHN1Ym1pc3Npb25cIik7XHJcbiAgICAgICAgICAgICAgXHRyZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snZm9ybSddLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcbiAgICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyB0aGlzLiRzaXRlLkVkaXRvcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN1Ym1pc3Npb24uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFsneWVsbG93LXBhZCddXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZih0ZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCAnWW91IG11c3QgZW50ZXIgc29tZSB0ZXh0IHRvIHN1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQvcGxhaW4nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KGAvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PjxwPkhlbGxvPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJzaG91dG91dFwiPlN1Ym1pc3Npb24gdHlwZSA8ZW0+e3tvcHRpb25zLnR5cGV9fTwvZW0+IGlzIG5vdCBzdXBwb3J0ZWQ8L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnb3B0aW9ucyddXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLm1hbnVhbCAhPT0gdHJ1ZVwiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInN1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGFyZ2UgY2VudGVyXCI+Tm8gc3VibWlzc2lvbnMsIHlldC48L3A+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlN1Ym1pc3Npb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgdi1mb3I9XCJzdWJtaXR0ZWQgaW4gc3VibWlzc2lvbnNcIj5cclxuICAgICAgICAgICAgPHRkPjxzdWJtaXR0ZWQtaXRlbSA6dHlwZT1cInN1Ym1pc3Npb24udHlwZVwiIDphc3NpZ250YWc9XCJzdWJtaXNzaW9uLmFzc2lnblRhZ1wiIDp0YWc9XCJzdWJtaXNzaW9uLnRhZ1wiIDpzdWJtaXNzaW9uPVwic3VibWl0dGVkXCIgOmFuYWx5c2lzPVwic3VibWlzc2lvbi5hbmFseXNpc1wiIDp0ZWFtaW5nPVwic3VibWlzc2lvbi50ZWFtaW5nXCIgQHJlc3VsdD0nYW5hbHlzaXNSZXN1bHQnIHYtb246cHJldmlld19pbWc9XCJwcmV2aWV3X2ltZ1wiIHYtb246cHJldmlldz1cInByZXZpZXdlclwiPjwvc3VibWl0dGVkLWl0ZW0+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAndGV4dCdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvbjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAncHJvZ3JhbSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uczwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzPVwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgdi1pZj1cInByZXZpZXdUeHQgIT09IG51bGxcIj57e3ByZXZpZXdUeHR9fTwvcHJlPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIiB2LWh0bWw9XCJwcmV2aWV3VGltZVwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSBjbGFzcz1cImNsLWFuYWx5c2lzXCIgdi1pZj1cInJlc3VsdCAhPT0gbnVsbFwiPnt7cmVzdWx0fX08L3ByZT5cclxuICAgIDxkaXYgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIj5cclxuICAgICAgPGZpZ3VyZSB2LWlmPVwicHJldmlld0ltZyAhPT0gbnVsbFwiIGNsYXNzPVwiY2wtcHJldmlld1wiPjxpbWcgOnNyYz1cInByZXZpZXdJbWdcIj48L2ZpZ3VyZT5cclxuICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIj57e3ByZXZpZXdUaW1lfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uaHRtbCAhPT0gdW5kZWZpbmVkXCIgdi1odG1sPVwic3VibWlzc2lvbi5odG1sXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIC8qKlxyXG4gICAqIENvbXBvbmVudCB0aGF0IGRpc3BsYXlzIHRoZSBsaXN0IG9mIHN1Ym1pc3Npb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBTdWJtaXR0ZWRWdWVcclxuICAgKi9cclxuICBpbXBvcnQgU3VibWl0dGVkSXRlbVZ1ZSBmcm9tICcuL1N1Ym1pdHRlZEl0ZW0udnVlJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsnc3VibWlzc2lvbicsICdzdWJtaXNzaW9ucyddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXZpZXdUeHQ6IG51bGwsXHJcbiAgICAgICAgcHJldmlld0ltZzogbnVsbCxcclxuICAgICAgICBwcmV2aWV3VGltZTogbnVsbCxcclxuICAgICAgICByZXN1bHQ6IG51bGxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgc3VibWl0dGVkSXRlbTogU3VibWl0dGVkSXRlbVZ1ZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICBpZiAodGhpcy5zdWJtaXNzaW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3VibWlzc2lvbnNbMF0udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3RoaXMuc3VibWlzc2lvbnNbMF0uaWR9YDtcclxuICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh0aGlzLnN1Ym1pc3Npb25zWzBdLmRhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucHJldmlld1R4dCA9IHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3LnRleHQ7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcuZGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBzdWJtaXNzaW9uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdWJtaXNzaW9uc1swXS50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcclxuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHt0aGlzLnN1Ym1pc3Npb25zWzBdLmlkfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBwcmV2aWV3ZXIoc3VibWlzc2lvbikge1xyXG4gICAgICAgIHRoaXMucHJldmlld1R4dCA9IFwiXFxuXCI7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9ICcmbmJzcDsnO1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyA9PT0gbnVsbCA/ICdjb3Vyc2UnIDogJ3RlYW0nO1xyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZ2V0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfS8ke3N1Ym1pc3Npb24uaWR9YCwge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvbiA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24nKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R4dCA9IHN1Ym1pc3Npb24udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgcHJldmlld19pbWcoc3VibWlzc2lvbikge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyA9PT0gbnVsbCA/ICdjb3Vyc2UnIDogJ3RlYW0nO1xyXG4gICAgICAgIGlmIChzdWJtaXNzaW9uLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3N1Ym1pc3Npb24uaWR9YDtcclxuICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBhbmFseXNpc1Jlc3VsdChyZXN1bHQpIHtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJpc1RleHQoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFRleHQoKVwiPnt7ZGlzcGxheSgpfX08L2E+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImlzSW1hZ2UoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFwiPnt7ZGlzcGxheSgpfX08L2E+PG1lbnUtdnVlIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBAb3Blbj1cInNlbGVjdFwiPjxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgOmhyZWY9XCJ0b0Rvd25sb2FkXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZydcIiBhbHQ9XCJEb3dubG9hZFwiPiBEb3dubG9hZDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBhbmFseXNpc1wiPjxhIEBjbGljay5wcmV2ZW50PVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICA8bWVudS12dWUgdi1vbjpvcGVuPVwic2VsZWN0XCI+PGE+e3tkaXNwbGF5KCl9fTwvYT48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgQGNsaWNrLnN0b3A9XCJzaG93QW5hbHlzaXMoaXRlbSlcIiAgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQuc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiPjxpbWcgOnNyYz1cIml0ZW0uaWNvblwiIDphbHQ9XCJpdGVtLm1lbnVcIj4ge3tpdGVtLm1lbnV9fTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbWVudS12dWU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vICBpbXBvcnQgTWVudVZ1ZSBmcm9tICdzaXRlLWNsL2pzL1VJL01lbnUudnVlJztcclxuICBjb25zdCBNZW51VnVlID0gU2l0ZS5TaXRlLk1lbnVWdWU7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBURVhUX1RZUEVTID0gWyd0ZXh0L3BsYWluJywgJ3RleHQvaHRtbCddXHJcbiAgZXhwb3J0IGNvbnN0IElNR19UWVBFUyA9IFsnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvZ2lmJ107XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnYXNzaWdudGFnJywgJ3RhZycsICdzdWJtaXNzaW9uJywgJ2FuYWx5c2lzJywgJ3RlYW1pbmcnLCAndHlwZSddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBcdHJvb3Q6IFNpdGUucm9vdCxcclxuICAgICAgICAgICAgdG9Eb3dubG9hZDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBtZW51VnVlOiBNZW51VnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMudGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgIHRoaXMudG9Eb3dubG9hZCA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL2Rvd25sb2FkLyR7dGhpcy5zdWJtaXNzaW9uLmlkfWA7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGlzVGV4dCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlICE9PSAncHJvZ3JhbScgJiYgVEVYVF9UWVBFUy5pbmRleE9mKHRoaXMuc3VibWlzc2lvbi50eXBlKSA+PSAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXNJbWFnZSgpIHtcclxuXHQgICAgICAgICAgcmV0dXJuIElNR19UWVBFUy5pbmRleE9mKHRoaXMuc3VibWlzc2lvbi50eXBlKSA+PSAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGlzcGxheSgpIHtcclxuICAgICAgICAgICAgICBsZXQgZGlzcCA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodGhpcy5zdWJtaXNzaW9uLmRhdGUsIFwibG9uZ1wiKTtcclxuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24ubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwICs9ICc6ICcgKyB0aGlzLnN1Ym1pc3Npb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5ieSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgXHRkaXNwICs9ICcgYnkgJyArIHRoaXMuc3VibWlzc2lvbi5ieTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRpc3A7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0VGV4dCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3JywgdGhpcy5zdWJtaXNzaW9uKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlld19pbWcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dBbmFseXNpcyhhbmFseXNpcykge1xyXG5cdCAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vYW5hbHlzaXMvJHt0aGlzLmFzc2lnbnRhZ30vJHt0aGlzLnRhZ30vJHthbmFseXNpcy50YWd9LyR7dGhpcy5zdWJtaXNzaW9uLmlkfWAsIHt9KVxyXG4gICAgICAgICAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHRjb25zdCBhbmFseXNpc1Jlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24tYW5hbHlzaXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgXHQgICAgICAgIFx0dGhpcy4kZW1pdCgncmVzdWx0JywgYW5hbHlzaXNSZXN1bHQpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgIFx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHQgICAgfSlcclxuICAgICAgICAgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICBcdCAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtc3VibWlzc2lvblwiIH0sXG4gICAgW1xuICAgICAgX3ZtLnN1Ym1pc3Npb24uc3VibWl0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uc3VibWlzc2lvbi5vcGVuXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaGlzIGFzc2lnbm1lbnQgaXMgbm90IG9wZW4gZm9yIHN1Ym1pc3Npb25zLlwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWZmXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uc3VibWl0dGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgbmV3X3N1Ym1pc3Npb25zOiBfdm0ubmV3U3VibWlzc2lvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLm9wZW5cbiAgICAgICAgICAgICAgICA/IF9jKF92bS5zdWJtaXR0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBuZXdfc3VibWlzc2lvbnM6IF92bS5uZXdTdWJtaXNzaW9ucyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3VibWl0dGVkXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24sIHN1Ym1pc3Npb25zOiBfdm0uc3VibWlzc2lvbnMgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN1Ym1pc3Npb24uYWRkaXRpb25hbCAhPT0gbnVsbFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdWJtaXNzaW9uLmFkZGl0aW9uYWwpIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIi4uLlN0YWZmIG9ubHkgZm9yIHN1Ym1pc3Npb24gdGVzdGluZy4uLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgdGFyZ2V0OiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1Ym1pdDogXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5maWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBuYW1lOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVcGxvYWQgRmlsZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICByZWY6IFwiaWZyYW1lXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWcsIHNyYzogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5sb2FkIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICAgIHRhcmdldDogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnN1Ym1pdCB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJTdWJtaXQ6IFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgbmFtZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiVXBsb2FkIEZpbGVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlmcmFtZVwiLCB7XG4gICAgICAgICAgcmVmOiBcImlmcmFtZVwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnLCBzcmM6IFwiXCIgfSxcbiAgICAgICAgICBvbjogeyBsb2FkOiBfdm0ubG9hZCB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJkaXZcIiwgeyByZWY6IFwiZWRpdG9yXCIgfSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlN1Ym1pdFwiIH0gfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiSGVsbG9cIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInNob3V0b3V0XCIgfSwgW1xuICAgICAgX3ZtLl92KFwiU3VibWlzc2lvbiB0eXBlIFwiKSxcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9wdGlvbnMudHlwZSkpXSksXG4gICAgICBfdm0uX3YoXCIgaXMgbm90IHN1cHBvcnRlZFwiKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLnN1Ym1pc3Npb24ubWFudWFsICE9PSB0cnVlXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhcmdlIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTm8gc3VibWlzc2lvbnMsIHlldC5cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdWJtaXNzaW9ucywgZnVuY3Rpb24oc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN1Ym1pdHRlZC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBfdm0uc3VibWlzc2lvbi50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbnRhZzogX3ZtLnN1Ym1pc3Npb24uYXNzaWduVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogX3ZtLnN1Ym1pc3Npb24udGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pc3Npb246IHN1Ym1pdHRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNpczogX3ZtLnN1Ym1pc3Npb24uYW5hbHlzaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbWluZzogX3ZtLnN1Ym1pc3Npb24udGVhbWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogX3ZtLmFuYWx5c2lzUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdfaW1nOiBfdm0ucHJldmlld19pbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlldzogX3ZtLnByZXZpZXdlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZGF0ZSB0byBkaXNwbGF5IHRoZSBzdWJtaXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwicHJvZ3JhbVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIHRvIHZpZXcgYW5kIGZvciBzdWJtaXNzaW9uIG9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJldmlld1R4dCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wcmV2aWV3VHh0KSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXctdGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldmlld1RpbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5yZXN1bHQgIT09IG51bGxcbiAgICAgID8gX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1hbmFseXNpc1wiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZXN1bHQpKV0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5wcmV2aWV3SW1nICE9PSBudWxsXG4gICAgICAgICAgICA/IF9jKFwiZmlndXJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlld1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnByZXZpZXdJbWcgfSB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXctdGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByZXZpZXdUaW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5zdWJtaXNzaW9uLmh0bWwgIT09IHVuZGVmaW5lZFxuICAgICAgPyBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdWJtaXNzaW9uLmh0bWwpIH0gfSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW19jKFwidGhcIiwgW192bS5fdihcIlN1Ym1pc3Npb25zXCIpXSldKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uaXNUZXh0KClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFRleHQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0uaXNJbWFnZSgpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3QoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcIm1lbnUtdnVlXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiwgb246IHsgb3BlbjogX3ZtLnNlbGVjdCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcIm1lbnUtdnVlXCIsIHsgb246IHsgb3BlbjogX3ZtLnNlbGVjdCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV0pLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTWVudVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnRvRG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5hbHlzaXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKipcclxuICogQGZpbGVcclxuICovXHJcbmltcG9ydCB7U2VjdGlvblN0YXR1c30gZnJvbSAnLi9qcy9TZWN0aW9uU3RhdHVzJztcclxuaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4vanMvTWVtYmVycy9NZW1iZXInO1xyXG5cclxuU2l0ZS5TZWN0aW9uU3RhdHVzID0gU2VjdGlvblN0YXR1cztcclxuU2l0ZS5NZW1iZXIgPSBNZW1iZXI7XHJcblxyXG5pbXBvcnQge0NvdXJzZUZhY3Rvcnl9IGZyb20gJy4vanMvQ291cnNlRmFjdG9yeSc7XHJcblxyXG4vLyBVc2UgdGhlIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSBVc2VycyBvYmplY3RcclxubGV0IENvdXJzZSA9IENvdXJzZUZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XHJcbmV4cG9ydCB7Q291cnNlfTtcclxuIiwiLyoqXHJcbiAqIENvdXJzZSBvYmplY3QuXHJcbiAqXHJcbiAqIFNpdGUuQ291cnNlIGlzIGFuIGluc3RhbmNlIG9mIHRoaXMgb2JqZWN0LlxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb3Vyc2UgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtDb3Vyc2V9IGZyb20gJy4vQ291cnNlJztcclxuaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4vTWVtYmVycy9NZW1iZXInO1xyXG5cclxuaW1wb3J0IHtTdG9yZU1vZHVsZUNvdXJzZX0gZnJvbSAnLi9TdGF0ZS9TdG9yZU1vZHVsZUNvdXJzZSc7XHJcbmltcG9ydCB7U2VjdGlvblNlbGVjdG9yfSBmcm9tICcuL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdG9yJztcclxuaW1wb3J0IHtTdWJtaXNzaW9ufSBmcm9tICcuL1N1Ym1pc3Npb24vU3VibWlzc2lvbic7XHJcbmltcG9ydCB7RXJyb3JIZWxwfSBmcm9tICcuL0Vycm9ySGVscC9FcnJvckhlbHAnO1xyXG5pbXBvcnQge1Nwb29maW5nUmVzdG9yZX0gZnJvbSAnLi9VdGlsL1Nwb29maW5nUmVzdG9yZSc7XHJcblxyXG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJy4vU2VjdGlvblN0YXR1cyc7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvdXJzZSBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvdXJzZUZhY3RvcnkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIENvdXJzZSBvYmplY3QuXHJcbiAqXHJcbiAqIFRoaXMgYWxsb3dzIGZvciBpbmplY3Rpb24gb2YgdGhlIHN0b3JlIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxyXG4gKiBAcGFyYW0gc2l0ZSBUaGUgU2l0ZSBvYmplY3RcclxuICogQHJldHVybiB7Q291cnNlfSBvYmplY3QuXHJcbiAqL1xyXG5Db3Vyc2VGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICBsZXQgY291cnNlID0gbmV3IENvdXJzZSgpO1xyXG5cclxuICAgIHNpdGUuQ291cnNlID0gY291cnNlO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb2RpZnkgVXNlciB0byBhZGQgdGhlIGFiaWxpdHkgdG8gaW5zdGFudGlhdGVcclxuICAgIC8vIGFuIGFwcHJvcHJpYXRlIE1lbWJlciBvYmplY3RcclxuICAgIC8vXHJcbiAgICBVc2Vycy5Vc2VyLmluc3RhbnRpYXRlTWVtYmVyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEubWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVtYmVyKGRhdGEubWVtYmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgU3RvcmVNb2R1bGVVc2VycyA9IHNpdGUuU3RvcmVNb2R1bGVVc2VycztcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gSW5zdGFsbCB0aGUgY291cnNlIHN0b3JlIG1vZHVsZXNcclxuICAgIC8vXHJcbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG4gICAgaWYoc3RvcmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHN0b3JlLnJlZ2lzdGVyTW9kdWxlKCdjb3Vyc2UnLCBTdG9yZU1vZHVsZUNvdXJzZSk7XHJcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ21lbWJlcnMnLCBTdG9yZU1vZHVsZVVzZXJzLmNyZWF0ZShcclxuICAgICAgICAgICAgJy9hcGkvY291cnNlL21lbWJlcnMnLFxyXG4gICAgICAgICAgICAodXNlcikgPT4ge3JldHVybiB1c2VyLm1lbWJlci5pZDsgfVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNpdGUucmVhZHkoKCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gRGV0ZWN0IHRoZSBwYXNzZWQgaW4gY291cnNlIGRlZmluaXRpb24gaW5mb3JtYXRpb25cclxuICAgICAgICAvLyBhbmQgYWRkIGl0IHRvIHRoZSBzdG9yZS5cclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICBsZXQgZW47XHJcbiAgICAgICAgaWYoIChlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1jb3Vyc2UnKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdjb3Vyc2Uvc2V0JywgSlNPTi5wYXJzZShlbi50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIChlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1jb3Vyc2Utc3RhZmYnKSkpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdjb3Vyc2Uvc2V0U3RhZmYnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFdlIGhhdmUgbW9kaWZpZWQgdGhlIFVzZXIgb2JqZWN0IHNvIHRoYXQgaXQgd2lsbCBrbm93XHJcbiAgICAgICAgLy8gaG93IHRvIGF0dGFjaCBhIG1lbWJlcnNoaXAuIFRoaXMgbWVhbnMgd2UgbXVzdCByZWxvYWRcclxuICAgICAgICAvLyB0aGUgdXNlciBpbmZvcm1hdGlvbiBzbyBpdCBjYW4gY3JlYXRlIGEgbmV3IG9iamVjdFxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYoIChlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC11c2VyJykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXNlci9zZXQnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHNpdGUuc3RhcnQoKCkgPT4ge1xyXG4gICAgICAgIFNlY3Rpb25TZWxlY3Rvci5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIFN1Ym1pc3Npb24uaW5zdGFsbChzaXRlKTtcclxuICAgICAgICBFcnJvckhlbHAuaW5zdGFsbChzaXRlKTtcclxuICAgICAgICBTcG9vZmluZ1Jlc3RvcmUuaW5zdGFsbChzaXRlKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2l0ZS5TZWN0aW9uU3RhdHVzID0gU2VjdGlvblN0YXR1cztcclxuXHJcbiAgICByZXR1cm4gY291cnNlO1xyXG59XHJcbiIsIlxyXG5leHBvcnQgY29uc3QgRXJyb3JIZWxwID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIGlmKGNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIGJ1dHRvbi52YWx1ZSA9IFwiRXJyb3IgSGVscFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIGxldCB1cmwgPSBTaXRlLnJvb3QgKyAnL2NsL2Vycm9yaGVscCc7XHJcbiAgICBpZihvcHRpb25zLmFzc2lnbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMuYXNzaWduO1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnRhZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHVybCArPSAnLycgKyBvcHRpb25zLnRhZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvciA9IGVuY29kZVVSSShpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpLnRyaW0oKSk7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oYCR7dXJsfT9lPSR7ZXJyb3J9YCwgXCJFcnJvciBIZWxwXCIsICd3aWR0aD02MDAsIGhlaWdodD01MDAsIHNjcm9sbGJhcnM9eWVzJyk7XHJcbiAgICB9KVxyXG59XHJcblxyXG5FcnJvckhlbHAuaW5zdGFsbCA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1lcnJvci1oZWxwJyk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ldyBFcnJvckhlbHAoZWxlbWVudHNbaV0sIHNpdGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7TWVtYmVyc2hpcH0gZnJvbSAnLi4vLi4vLi4vdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyc7XHJcblxyXG4vKipcclxuICogTWVtYmVyIG9mIGEgY291cnNlXHJcbiAqIEF0dGFjaGVzIHRvIGEgdXNlciBPYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5sZXQgTWVtYmVyID0gZnVuY3Rpb24oanNvbikge1xyXG4gICAgTWVtYmVyc2hpcC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIGxldCByb2xlID0gJ0cnO1xyXG5cclxuICAgIGlmKGpzb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBqc29uLmlkO1xyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBqc29uLnNlbWVzdGVyO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IGpzb24uc2VjdGlvbjtcclxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBqc29uLmNyZWF0ZWQgIT09IHVuZGVmaW5lZCA/IGpzb24uY3JlYXRlZCA6IG51bGw7XHJcbiAgICAgICAgcm9sZSA9IGpzb24ucm9sZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7ICAgIC8vIFN5c3RlbSBtZW1iZXJzaGlwIElEXHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IG51bGw7ICAgLy8gU2VtZXN0ZXIgY29kZVxyXG4gICAgICAgIHRoaXMuc2VjdGlvbiA9IG51bGw7ICAvLyBTZWN0aW9uIElkXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbnVsbDsgICAgLy8gV2hlbiB1c2VyIHdhcyBjcmVhdGVkXHJcbiAgICAgICAgcm9sZSA9IG51bGw7ICAgICAgIC8vIE1lbWJlcnNoaXAgcm9sZVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiByb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Um9sZSA9IGZ1bmN0aW9uKHJvbGVfKSB7XHJcbiAgICAgICAgcm9sZSA9IHJvbGVfO1xyXG4gICAgfVxyXG59XHJcblxyXG5NZW1iZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNZW1iZXJzaGlwLnByb3RvdHlwZSk7XHJcbk1lbWJlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNZW1iZXI7XHJcblxyXG4vKipcclxuICogR2V0IHRoZSBjb3Vyc2Ugc2VjdGlvbiBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldFNlY3Rpb24gPSBmdW5jdGlvbihzdG9yZSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10odGhpcy5zZW1lc3RlciwgdGhpcy5zZWN0aW9uKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbiBhc3NpZ25tZW50IGZvciBhIG1lbWJlclxyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxyXG4gKiBAcGFyYW0gYXNzaWdudGFnIEFzc2lnbm1lbnQgdGFnXHJcbiAqL1xyXG5NZW1iZXIucHJvdG90eXBlLmdldEFzc2lnbm1lbnQgPSBmdW5jdGlvbihzdG9yZSwgYXNzaWdudGFnKSB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHN0b3JlKTtcclxuICAgIHJldHVybiBzZWN0aW9uLmdldEFzc2lnbm1lbnQoYXNzaWdudGFnKTtcclxufVxyXG5cclxuXHJcbi8vIFRoZSBwb3NzaWJsZSBtZW1iZXIgcm9sZXNcclxuLy8gTXVzdCBtYXRjaCB2YWx1ZXMgaW4gTWVtYmVyLnBocFxyXG5NZW1iZXIuR1VFU1QgPSAnRyc7ICAgICAvLy88IEd1ZXN0IHVzZXIgdmlzaXRpbmcgdGhlIHNpdGVcclxuTWVtYmVyLlVTRVIgPSAnVSc7ICAgICAgLy8vPCBTdGFuZGFyZCB1c2VyIGZyb20gVXNlciwgZG9uJ3QgdXNlIGZvciBNZW1iZXJcclxuTWVtYmVyLkRST1BQRUQgPSAnRCc7ICAgLy8vPCBVc2VyIGhhcyBkcm9wcGVkIHRoZSBjb3Vyc2VcclxuTWVtYmVyLlNUVURFTlQgPSAnVCc7ICAgLy8vPCBFbnJvbGxlZCBzdHVkZW50IGluIGNvdXJzZVxyXG5NZW1iZXIuU1RBRkYgPSAnUyc7ICAgICAvLy88IEFueSBjb3Vyc2Ugc3RhZmZcclxuTWVtYmVyLkdSQURFUiA9ICdSJzsgICAgLy8vPCBHcmFkZXJzXHJcbk1lbWJlci5VTEEgPSAnTCc7ICAgICAgIC8vLzwgVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnRcclxuTWVtYmVyLlRBID0gJ0UnOyAgICAgICAgLy8vPCBUZWFjaGluZyBhc3Npc3RhbnRcclxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3JcclxuTWVtYmVyLkFETUlOID0gJ0EnOyAgICAgLy8vPCBBZG1pblxyXG5cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tNZW1iZXIuR1VFU1RdID0ge25hbWU6ICdHdWVzdCcsIHByaW9yaXR5OiAxfTtcclxuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcclxuICAgIHJvbGVzW01lbWJlci5VU0VSXSA9IHtuYW1lOiAnVXNlcicsIHByaW9yaXR5OiAzLCBza2lwOiB0cnVlfTtcclxuICAgIHJvbGVzW01lbWJlci5TVFVERU5UXSA9IHtuYW1lOiAnU3R1ZGVudCcsIHByaW9yaXR5OiA0fTtcclxuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xyXG5cdHJvbGVzW01lbWJlci5HUkFERVJdID0ge25hbWU6ICdHcmFkZXInLCBwcmlvcml0eTogNn07XHJcblx0cm9sZXNbTWVtYmVyLlVMQV0gPSB7bmFtZTogJ1VuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdVTEEnLCBwcmlvcml0eTogN307XHJcbiAgICByb2xlc1tNZW1iZXIuVEFdID0ge25hbWU6ICdUZWFjaGluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1RBJywgcHJpb3JpdHk6IDh9O1xyXG4gICAgcm9sZXNbTWVtYmVyLklOU1RSVUNUT1JdID0ge25hbWU6ICdJbnN0cnVjdG9yJywgcHJpb3JpdHk6IDl9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkFETUlOXSA9IHtuYW1lOiAnQWRtaW4nLCBwcmlvcml0eTogMTAwfTtcclxuXHJcbiAgICByZXR1cm4gcm9sZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge01lbWJlcn07XHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGZvcihsZXQgcHJvcGVydHkgaW4gZGF0YSkge1xyXG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBc3NpZ25tZW50fSBmcm9tICcuL0Fzc2lnbm1lbnQnO1xyXG5cclxuZXhwb3J0IGxldCBBc3NpZ25tZW50Q2F0ZWdvcnkgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5ncmFkaW5nID0gZGF0YS5ncmFkaW5nICE9PSB1bmRlZmluZWQgPyBkYXRhLmdyYWRpbmcgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBbXTtcclxuICAgIHRoaXMuYXNzaWdubWVudHNCeVRhZyA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgYXNzaWduIG9mIGRhdGEuYXNzaWdubWVudHMpIHtcclxuICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoYXNzaWduKTtcclxuICAgICAgICB0aGlzLmFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50c0J5VGFnW2Fzc2lnbm1lbnQudGFnXSA9IGFzc2lnbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IHRoaXMuYXNzaWdubWVudHNCeVRhZ1t0YWddO1xyXG4gICAgICAgIHJldHVybiBhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQgPyBhc3NpZ25tZW50IDogbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXNzaWdubWVudENhdGVnb3J5fSBmcm9tICcuL0Fzc2lnbm1lbnRDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudHMgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XHJcbiAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGRhdGEuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBBc3NpZ25tZW50Q2F0ZWdvcnkoY2F0ZWdvcnkpKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NpZ25tZW50ID0gY2F0ZWdvcnkuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgICAgICAgICBpZihhc3NpZ25tZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzaWdubWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEFic3RyYWN0aW9uIG9mIHRoZSBjdXJyZW50IGNvdXJzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7U2VjdGlvbn0gZnJvbSAnLi9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb3Vyc2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5hY2NvdW50ID0gZGF0YS5hY2NvdW50O1xyXG4gICAgdGhpcy5kZXNjID0gZGF0YS5kZXNjO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5zZWN0aW9uc0J5SWQgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IHNlY3Rpb24gb2YgZGF0YS5zZWN0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zQnlJZFtzZWN0aW9uLmlkXSA9IHM7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0Fzc2lnbm1lbnRzfSBmcm9tICcuL0Fzc2lnbm1lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLnNlbWVzdGVyID0gZGF0YS5zZW1lc3RlcjtcclxuICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBuZXcgQXNzaWdubWVudHMoZGF0YS5hc3NpZ25tZW50cyk7XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudHMuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgc2VjdGlvbiBzZWxlY3RvciBwYWdlIC9jbC9zZWN0aW9uc2VsZWN0b3JcclxuICogQHBhcmFtIGVsZW1lbnQgUGFnZSBlbGVtZW50ICgjY2wtc2VjdGlvbi1zZWxlY3RvcilcclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFNlY3Rpb25TZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcclxuICAgIGxldCBWdWUgPSBzaXRlLlZ1ZTtcclxuXHJcbiAgICBjb25zdCBpbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gaW5mby5zZWN0aW9ucztcclxuICAgIGNvbnN0IGJlZm9yZSA9IGluZm8uYmVmb3JlO1xyXG4gICAgY29uc3QgYWZ0ZXIgPSBpbmZvLmFmdGVyO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGBcclxuPGRpdiBpZD1cImNsLXNlY3Rpb24tc2VsZWN0b3JcIj5cclxuICA8c2l0ZS1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIj48L3NpdGUtaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiB2LWh0bWw9XCJiZWZvcmVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyYm94IGNsLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICA8cCB2LWZvcj1cInNlY3Rpb24gaW4gc2VjdGlvbnNcIj48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic2VsZWN0KHNlY3Rpb24pXCI+e3tzZWN0aW9uLmNvdXJzZX19IHt7c2VjdGlvbi5uaWNlfX0gU2VjdGlvbiB7e3NlY3Rpb24uc2VjdGlvbn19PC9idXR0b24+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIiB2LWh0bWw9XCJhZnRlclwiPjwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICA8c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBIZWFkZXIgPSBzaXRlLmluZm8uaGVhZGVyLmNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgRm9vdGVyID0gc2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICBsZXQgcm91dGVyID0gbmV3IFNpdGUuVnVlUm91dGVyKHtcclxuICAgICAgICBtb2RlOiAnaGlzdG9yeScsXHJcbiAgICAgICAgcm91dGVzOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTZWN0aW9uIFNlbGVjdG9yJyxcclxuICAgICAgICAgICAgYmVmb3JlOiBiZWZvcmUsXHJcbiAgICAgICAgICAgIGFmdGVyOiBhZnRlcixcclxuICAgICAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKHNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXI6IHNlY3Rpb24uc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbi5zZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3NlY3Rpb25zZWxlY3QnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5yZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0ID0gdGhpcy4kcm91dGUucXVlcnkudTtcclxuICAgICAgICAgICAgaWYodGhpcy5yZWRpcmVjdCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QgPSBTaXRlLnJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuU2VjdGlvblNlbGVjdG9yLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZW47XHJcbiAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXNlY3Rpb24tc2VsZWN0b3InKSkgIT09IG51bGwpIHtcclxuICAgICAgICBuZXcgU2VjdGlvblNlbGVjdG9yKGVuLCBzaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQ29uc3RhbnRzIHRoYXQgcmVwcmVzZW50IFNlY3Rpb25TdGF0dXMgcG9zc2libGUgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgU2VjdGlvblN0YXR1cyA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vLyBDb25zdGFudHMgbXVzdCBtYXRjaCB0aG9zZSBpbiBTZWN0aW9uU3RhdHVzLnBocFxyXG5TZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXHJcblNlY3Rpb25TdGF0dXMuVklTSVRFRCA9ICdWJztcdCAgICAvLy88ICVTZWN0aW9uIGhhcyBiZWVuIHZpc2l0ZWQsIGJ1dCBpcyBub3QgeWV0IGRvbmVcclxuU2VjdGlvblN0YXR1cy5ET05FID0gJ0QnO1x0XHQgICAgLy8vPCAlU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuXHJcblNlY3Rpb25TdGF0dXMudG9TdHJpbmcgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuICAgIGlmKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQ6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb3QgeWV0IHZpc2l0ZWQnO1xyXG5cclxuICAgICAgICBjYXNlIFNlY3Rpb25TdGF0dXMuVklTSVRFRDpcclxuICAgICAgICAgICAgcmV0dXJuICdWaXNpdGVkJztcclxuXHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLkRPTkU6XHJcbiAgICAgICAgICAgIHJldHVybiAnQ29tcGxldGVkJztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhlIFZ1ZXggc3RvcmUgbW9kdWxlIGZvciBjb3Vyc2VcclxuICovXHJcblxyXG5pbXBvcnQge0NvdXJzZX0gZnJvbSAnLi4vTW9kZWxzL0NvdXJzZSc7XHJcblxyXG5leHBvcnQgbGV0IFN0b3JlTW9kdWxlQ291cnNlID0ge1xyXG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgY291cnNlOiBudWxsLFxyXG4gICAgICAgIHN0YWZmOiBbXVxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIHNldChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3Vyc2UgPSBuZXcgQ291cnNlKGRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTdGFmZihzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhZmYgPSB7fTtcclxuICAgICAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXJzLlVzZXIoZCk7XHJcbiAgICAgICAgICAgICAgICBzdGFmZlt1c2VyLm1lbWJlci5pZF0gPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdGFmZiA9IHN0YWZmO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgc2VjdGlvbjogKHN0YXRlKSA9PiAoc2VtZXN0ZXIsIHNlY3Rpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2Ygc3RhdGUuY291cnNlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLnNlbWVzdGVyID09PSBzZW1lc3RlciAmJiBzZWN0aW9uLmlkID09PSBzZWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NpZ25tZW50OiAoc3RhdGUsIGdldHRlcnMpID0+IChzZW1lc3Rlciwgc2VjdGlvbklkLCBhc3NpZ25UYWcpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBzZWN0aW9uIG9mIHN0YXRlLmNvdXJzZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5zZW1lc3RlciA9PT0gc2VtZXN0ZXIgJiYgc2VjdGlvbi5pZCA9PT0gc2VjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhZmY6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gc3RhdGUuc3RhZmZbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gdW5kZWZpbmVkID8gdXNlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuL1N1Ym1pc3Npb24udnVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXNzaW9uID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG5cclxuICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc3RvcmUsXHJcblx0ICAgIHNpdGUsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5gXHJcbiAgICB9KVxyXG59XHJcblxyXG5TdWJtaXNzaW9uLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc3VibWlzc2lvbicpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgU3VibWlzc2lvbihlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNWY0NjYwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTVmNDY2MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyYjYyMGMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJiNjIwYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYWExZTU3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FhMWU1NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxMWQwYTk5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMTFkMGE5OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZmZDQ4MGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2ZmQ0ODBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MjRkYWQ3NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjRkYWQ3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MDY5NDNhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTA2OTQzYWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIiIsIlxyXG5leHBvcnQgY29uc3QgU3Bvb2ZpbmdSZXN0b3JlID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwKTtcclxuICAgIHAuY2xhc3NMaXN0LmFkZCgnY2wtaG9tZS1jb250cm9sJyk7XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ3Jlc3RvcmUnO1xyXG4gICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xyXG5cclxuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvc3Bvb2YnLCB7cmVzdG9yZTogdHJ1ZX0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gc2l0ZS5yb290ICsgJy8nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsZXQgb3B0aW9ucyA9IHt9O1xyXG4gICAgLy8gY29uc3QgY29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAvLyBpZihjb250ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICBvcHRpb25zID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgLy9cclxuICAgIC8vIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIC8vXHJcbiAgICAvLyBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICAvLyBidXR0b24udmFsdWUgPSBcIkVycm9yIEhlbHBcIjtcclxuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIC8vXHJcbiAgICAvLyBsZXQgdXJsID0gU2l0ZS5yb290ICsgJy9jbC9lcnJvcmhlbHAnO1xyXG4gICAgLy8gaWYob3B0aW9ucy5hc3NpZ24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgIHVybCArPSAnLycgKyBvcHRpb25zLmFzc2lnbjtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYob3B0aW9ucy50YWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy50YWc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc3QgZXJyb3IgPSBlbmNvZGVVUkkoaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKS50cmltKCkpO1xyXG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGAke3VybH0/ZT0ke2Vycm9yfWAsIFwiRXJyb3IgSGVscFwiLCAnd2lkdGg9NjAwLCBoZWlnaHQ9NTAwLCBzY3JvbGxiYXJzPXllcycpO1xyXG4gICAgLy8gfSlcclxufVxyXG5cclxuU3Bvb2ZpbmdSZXN0b3JlLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc3Bvb2ZpbmctcmVzdG9yZScpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgU3Bvb2ZpbmdSZXN0b3JlKGVsZW1lbnRzW2ldLCBzaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBiYXNlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5oZXJpdGVkIGJ5XHJcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXHJcbiAqL1xyXG5cclxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy8gVGhlIFVzZXIgb2JqZWN0IGZvciB0aGlzIG1lbWJlcnNoaXBcclxuICAgIHRoaXMudXNlciA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVtYmVyc2hpcH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=