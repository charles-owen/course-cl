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
/******/ 	var hotCurrentHash = "65d7f04a0eb4544f78c4";
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
/******/ 			_selfInvalidated: false,
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
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
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
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
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
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
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
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
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
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
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
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
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
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
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
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
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
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      var _iterator = _createForOfIteratorHelper(users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var user = _step.value;

          if (this.flags[user.id] === undefined) {
            this.$set(this.flags, user.id, false);
            this.users[user.id] = user;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
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

      var _iterator = _createForOfIteratorHelper(this.to),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
        _iterator.e(err);
      } finally {
        _iterator.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

      var _iterator = _createForOfIteratorHelper(this.users),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _user = _step.value;

          var _role = _user.role();

          if (roleCnt[_role] === undefined) {
            roleCnt[_role] = 1;
          } else {
            roleCnt[_role]++;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
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
 * Vue class for links to download submissions in bulk
 * @constructor SubmissionsLinksVue
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': ConsoleComponentBase,
  props: ['assignment'],
  data: function data() {
    return {
      links: [],
      from: '',
      to: ''
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
        var _iterator = _createForOfIteratorHelper(this.assignment.submissions),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var submission = _step.value;

            if (submission.bulk === true) {
              var bulk = {
                text: 'Bulk download of ' + submission.name,
                url: '/cl/course/submissions/' + this.assignment.tag + '/' + submission.tag,
                from: '',
                to: '',
                range: false,
                atLeast: _Members_Member__WEBPACK_IMPORTED_MODULE_0__["Member"].STAFF
              };
              this.links.push(bulk);
            } // Any additional submission links


            if (submission.links !== undefined) {
              var _iterator2 = _createForOfIteratorHelper(submission.links),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var link = _step2.value;
                  this.links.push(link);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    click: function click(link) {
      console.log(link);
      var url = this.root + link.url;

      if (link.from !== undefined && link.to !== undefined && (link.from.trim() !== '' || link.to.trim() !== '')) {
        url += '?fm=' + encodeURIComponent(link.from.trim()) + '&to=' + encodeURIComponent(link.to.trim());
      }

      window.location.href = url;
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
    console.log(this.submission);
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

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Not scoped */\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/EmailEditorComponent.vue?vue&type=style&index=0&id=2e54e74b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "form[data-v-2e54e74b] {\n  position: relative;\n}\ndiv.to[data-v-2e54e74b] {\n  margin: 1em 0;\n  font-style: italic;\n}\ndiv.to > div[data-v-2e54e74b] {\n  font-style: normal;\n  font-size: 0.85em;\n}\ndiv.to > div span.no-email[data-v-2e54e74b] {\n  color: red;\n  font-style: italic;\n}\ndiv.subject[data-v-2e54e74b] {\n  margin: 1em 0;\n}\ndiv.subject label[data-v-2e54e74b] {\n  font-style: italic;\n}\ndiv.subject input[type=text][data-v-2e54e74b] {\n  display: block;\n  margin: 0.2em 0 0 0;\n  font-style: normal;\n  width: 25em;\n}\ndiv.buttons input[data-v-2e54e74b] {\n  width: 6em;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/ExtensionsComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Not scoped */\ndiv.cl-extensions table td {\n  text-align: center;\n}\ndiv.cl-extensions table td > div > input {\n  text-align: center;\n}\ndiv.cl-extensions table td:nth-child(1),\ndiv.cl-extensions table td:nth-child(2),\ndiv.cl-extensions table td:nth-child(3) {\n  text-align: left;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/BulkUploadComponent.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-bulk-upload form {\n  margin-bottom: 1em;\n}\ndiv.cl-bulk-upload fieldset > div {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\ndiv.cl-bulk-upload fieldset > div > div {\n  padding-right: 1em;\n}\ndiv.cl-bulk-upload fieldset > div > div p {\n  margin: 0 0 0.5em 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child {\n  margin: 0;\n}\ndiv.cl-bulk-upload fieldset > div > div p:last-child input {\n  width: 6.5em;\n}\ndiv.cl-bulk-upload-dlg {\n  width: 400px;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/Members/MemberDropsComponent.vue?vue&type=style&index=0&id=2ffdc580&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div#drops-component[data-v-2ffdc580] {\n  padding: 1em;\n}\ndiv#drops-component th[data-v-2ffdc580]:first-child {\n  text-align: center;\n  vertical-align: bottom;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SectionComponent.vue?vue&type=style&index=0&id=c19494e2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.cl-section-component[data-v-c19494e2] {\n  white-space: nowrap;\n  vertical-align: top;\n  font-size: 0.95em;\n  color: white;\n  margin: 0;\n  padding: 1px 0 0 0;\n}\ndiv.cl-section-component > span[data-v-c19494e2] {\n  padding: 0 0.4em 0 0;\n}\ndiv.cl-section-component > span[data-v-c19494e2]:last-child {\n  padding: 0;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/SectionSelectors/SectionSelect.vue?vue&type=style&index=0&id=ad33d900&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "select[data-v-ad33d900] {\n  font-size: 0.95em;\n  background: white;\n  color: black;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\ndiv.cl-submissions-bulk p {\n  font-size: 0.9em;\n}\ndiv.cl-submissions-bulk input {\n  width: 5em;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&",
      function () {
        var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&");

              newContent = newContent.__esModule ? newContent.default : newContent;

              if (typeof newContent === 'string') {
                newContent = [[module.i, newContent, '']];
              }

              if (!isEqualLocals(oldLocals, newContent.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = newContent.locals;

              update(newContent);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

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
    { staticClass: "cl-submissions-bulk" },
    _vm._l(_vm.links, function(link) {
      return _vm.user.atLeast(link.atLeast)
        ? _c("p", { staticClass: "center" }, [
            _c(
              "a",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.click(link)
                  }
                }
              },
              [_vm._v(_vm._s(link.text))]
            ),
            _vm._v(" "),
            link.from !== undefined && !link.range
              ? _c(
                  "a",
                  {
                    attrs: { title: "Enable Range" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        link.range = true
                      }
                    }
                  },
                  [
                    _c("img", {
                      attrs: {
                        src: _vm.root + "/cl/img/range.png",
                        alt: "Enable Range",
                        width: "26",
                        height: "10"
                      }
                    })
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            link.range
              ? _c("span", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: link.from,
                        expression: "link.from"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: link.from },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(link, "from", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" to "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: link.to,
                        expression: "link.to"
                      }
                    ],
                    attrs: { type: "text" },
                    domProps: { value: link.to },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(link, "to", $event.target.value)
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            link.range
              ? _c("span", [
                  _c("br"),
                  _vm._v("Enter from/to range for user id.")
                ])
              : _vm._e()
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
                _c(
                  "a",
                  {
                    attrs: {
                      href: _vm.previewImg,
                      target: "_" + _vm.submission.tag
                    }
                  },
                  [_c("img", { attrs: { src: _vm.previewImg } })]
                )
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
/* empty/unused harmony star reexport *//* harmony import */ var _SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmissionsLinks.vue?vue&type=style&index=0&lang=css& */ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionsLinks.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/Console/SubmissionsLinks.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionsLinks_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/*! exports provided: TEXT_TYPES, IMG_TYPES, default */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJGZXRjaGVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU2VjdGlvbkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQ291cnNlRW1haWwudnVlPzdkMTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT85MTY5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT9jZWY3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP2ZhNmUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzgxYWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1NlY3Rpb25Db21wb25lbnQudnVlP2M2NzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3QudnVlPzUzY2YiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzc0N2MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzBlZTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZT9hN2E5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/NTQyNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzgxNjkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlPzVhYmQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/MWNiOSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/NzI0YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlPzAyNzciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/YjAzYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT8yYjYyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9hNzc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZT8zM2VmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT80ZTEzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWU/MTExYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT81MzQ5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlPzYwYjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT9jNzBhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT9hNmEzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT8xZDM4Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT84NmFkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/ZGU0ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWU/MmI2MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/NDU5NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/NzNiMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT85Zjc3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT8zNzYwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/YmNiMSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzE2OGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0V4dGVuc2lvbnNDb21wb25lbnQudnVlPzE4NWIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/NTQ1NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/YzQ4MSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU2VjdGlvbkNvbXBvbmVudC52dWU/NTA5NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdC52dWU/YTYxYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQXNzaWdubWVudHNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/M2QzNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQXNzaWdubWVudHNDb21wb25lbnQudnVlPzNiYmMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUNvbnNvbGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvQ291cnNlRW1haWwudnVlP2YyODAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0NvdXJzZUVtYWlsLnZ1ZT81ODc2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWU/NWI0NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/N2IzMiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlPzUzYzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT9kNmQzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/N2I1MyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/ODM4NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/ZDBjZiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT82NWRiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL0J1bGtVcGxvYWRDb21wb25lbnQudnVlPzI2ODgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvQnVsa1VwbG9hZENvbXBvbmVudC52dWU/YmU4NSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzExYTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP2Y2NzEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRHJvcHNDb21wb25lbnQudnVlPzRlMTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlPzIxNjMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT85OTYxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlPzNkNDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/YTlhNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT8xNDhlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNFZGl0b3JDb21wb25lbnQudnVlPzZmODEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT84Y2M1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT9mMmFmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/NTBjMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9QcmV2TmV4dE1lbWJlci52dWU/MzY2ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9TdHVkZW50c09ubHkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1NlY3Rpb25Db21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT9jY2I0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT82MjdmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZT9lZTE1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1Nwb29maW5nLnZ1ZT8xYTg5Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TcG9vZmluZy52dWU/OGM4ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT8zZTNiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlPzk2MjAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/NmZmOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT83MDY2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT82NGZmIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWU/NTM4OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNMaW5rcy52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzk1MDgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlP2M4NmYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlPzZhYzgiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3QudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT82ODhkIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT83MWZjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZT8zYjhjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/OThmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/NjUzMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/OTE4NCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlPzBkMTQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9hYTEwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9kYThhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/ZWNjYyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWU/MTU0NiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzFmZGIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzRlZTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/YmZlNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT9hZGZiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/YzUyNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/NzEwMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyJdLCJuYW1lcyI6WyJDb3Vyc2VDb25zb2xlIiwic2l0ZSIsIkNvbnNvbGUiLCJjb25zb2xlIiwiYXNzaWdubWVudExpbmtzIiwiYXNzaWdubWVudExpbmsiLCJwcm9wZXJ0eSIsIm5hbWUiLCJyb3V0ZSIsInB1c2giLCJ0aXRsZSIsInRhYmxlcyIsImFkZCIsIm9yZGVyIiwiYXBpIiwicGFnZSIsImNvbXBvbmVudHMiLCJhZGRPcHRpb24iLCJhdExlYXN0IiwiTWVtYmVyIiwiU1RBRkYiLCJzZWN0aW9uIiwicm91dGVzIiwiY29tcG9uZW50IiwiTWVtYmVyc0VkaXRvckNvbXBvbmVudCIsInByb3BzIiwibWFuYWdlbWVudCIsIkFzc2lnbm1lbnRzQ29tcG9uZW50IiwidGFnIiwiVEEiLCJTcG9vZmluZ1Z1ZSIsIkNvdXJzZUVtYWlsVnVlIiwiQURNSU4iLCJNZW1iZXJFZGl0b3JDb21wb25lbnQiLCJhZGRSb3V0ZXMiLCJFeHRlbnNpb25zQ29tcG9uZW50IiwiU3VibWlzc2lvbnNDb21wb25lbnQiLCJTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIiLCJhZGROYXYyIiwiU2VjdGlvbkNvbXBvbmVudCIsIlN1Ym1pc3Npb25zTGlua3NWdWUiLCJMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFkiLCJTdHVkZW50c09ubHkiLCJnZXQiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJzIiwiZ2V0SXRlbSIsInNldCIsInN0dWRlbnRzIiwic2V0SXRlbSIsIlNpdGUiLCJQcmV2TmV4dE1lbWJlclZ1ZSIsIk1lbWJlckZldGNoZXJDb21wb25lbnRWdWUiLCJTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnRWdWUiLCJNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSIsImNvdXJzZUNvbnNvbGUiLCJjb3Vyc2UiLCJqc29uIiwiTWVtYmVyc2hpcCIsImNhbGwiLCJyb2xlIiwidW5kZWZpbmVkIiwiaWQiLCJzZW1lc3RlciIsImNyZWF0ZWQiLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJzdG9yZSIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJHUkFERVIiLCJVTEEiLCJJTlNUUlVDVE9SIiwiZ2V0Um9sZXMiLCJyb2xlcyIsInByaW9yaXR5Iiwic2tpcCIsInVzZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUFxRjtBQUN6RyxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw2SUFBb0QsRUFBRTtBQUFBO0FBQzVFO0FBQ0EsZ0JBQWdCLHdGQUFNO0FBQ3RCLHlCQUF5QixpR0FBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVNLENBQWdCLHVQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7OztBQVFBLElBQUkxQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBRXhCO0FBQ0EsT0FBSzZCLElBQUwsR0FBWSxJQUFaO0FBQ0gsQ0FKRCIsImZpbGUiOiJjb3Vyc2Vjb25zb2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ291cnNlQ29uc29sZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDb3Vyc2VDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cbiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZV9uYW1lX1wiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjY1ZDdmMDRhMGViNDU0NGY3OGM0XCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGZvcih2YXIgY2h1bmtJZCBpbiBpbnN0YWxsZWRDaHVua3MpXG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkNvdXJzZUNvbnNvbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvaW5kZXguanNcIixcImNvbW1vblwiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50IGNsLWFzc2lnbm1lbnRzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgPHA+e3tzZWN0aW9uLm5hbWV9fTwvcD5cclxuICAgIDxkaXYgdi1mb3I9XCJjYXRlZ29yeSBpbiBzZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXNcIj5cclxuICAgICAgPGgyPnt7Y2F0ZWdvcnkubmFtZX19PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cImFzc2lnbm1lbnQgaW4gY2F0ZWdvcnkuYXNzaWdubWVudHNcIiA6a2V5PVwiYXNzaWdubWVudC50YWdcIj57e2Fzc2lnbm1lbnQubmFtZX19XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL2NvdXJzZS9leHRlbnNpb25zLycgKyBhc3NpZ25tZW50LnRhZ1wiPmV4dGVuc2lvbnM8L3JvdXRlci1saW5rPiZuYnNwO1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHYtaWY9J2Fzc2lnbm1lbnQuc3VibWlzc2lvbnMgIT09IHVuZGVmaW5lZCc+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvY291cnNlL3N1Ym1pc3Npb25zLycgKyBhc3NpZ25tZW50LnRhZ1wiPnN1Ym1pc3Npb25zPC9yb3V0ZXItbGluaz4mbmJzcDtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWZvcj1cImxpbmsgaW4gYXNzaWdubWVudExpbmtzXCIgIHYtaWY9XCJhc3NpZ25tZW50W2xpbmsucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiYgYXNzaWdubWVudFtsaW5rLnByb3BlcnR5XSAhPT0gZmFsc2VcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYXNzaWdubWVudExpbmsoYXNzaWdubWVudCwgbGluay5yb3V0ZSlcIj57e2xpbmsubmFtZX19PC9yb3V0ZXItbGluaz4mbmJzcDtcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHQvKipcclxuXHQgKiBWaWV3IGZvciBDb3Vyc2UgQXNzaWdubWVudHNcclxuXHQgKiAvY2wvY29uc29sZS9jb3Vyc2UvYXNzaWdubWVudHNcclxuXHQgKlxyXG5cdCAqIERpc3BsYXlzIGFsbCBhc3NpZ25tZW50cyB3aXRoIGxpbmtzIGZvciBvcHRpb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBBc3NpZ25tZW50c0NvbXBvbmVudFZ1ZVxyXG5cdCAqL1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c2VjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRhc3NpZ25tZW50TGlua3M6IHRoaXMuJHNpdGUuY29uc29sZS5jb3Vyc2UuYXNzaWdubWVudExpbmtzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQXNzaWdubWVudHMnKTtcclxuXHRcdFx0bGV0IG1lbWJlciA9IHRoaXMudXNlci5tZW1iZXI7XHJcblxyXG5cdFx0XHR0aGlzLnNlY3Rpb24gPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKG1lbWJlci5zZW1lc3RlciwgbWVtYmVyLnNlY3Rpb24pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXNzaWdubWVudExpbms6IGZ1bmN0aW9uIChhc3NpZ25tZW50LCByb3V0ZSkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucmVwbGFjZSgnOmFzc2lnbnRhZycsIGFzc2lnbm1lbnQudGFnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXIgdi1pZj1cIiFjb21wb3NpbmdcIj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCIgOmVuc3VyZT1cImVuc3VyZShmZXRjaGVyLnVzZXJzKVwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwiY2VudGVyXCI+PGlucHV0IHYtbW9kZWw9XCJhbGxcIiB0eXBlPVwiY2hlY2tib3hcIiBAY2hhbmdlPVwiYWxsQ2hhbmdlXCI+PC90aD5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlJvbGU8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCJ1c2VyIGluIGZldGNoZXIudXNlcnNcIiA6a2V5PVwidXNlci5pZFwiPlxyXG4gICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZsYWdzW3VzZXIuaWRdXCI+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgPnt7dXNlci51c2VySWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5uYW1lfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSA6aHJlZj1cIidtYWlsdG86JyArIHVzZXIuZW1haWxcIj57e3VzZXIuZW1haWx9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuICAgICAgPGVtYWlsLWVkaXRvciB2LWVsc2UgQGNhbmNlbD1cImNhbmNlbEVtYWlsXCIgQGRvbmU9XCJkb25lU2VuZGluZ1wiIDp0bz1cInRvVXNlcnNcIj48L2VtYWlsLWVkaXRvcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudCBmcm9tICdjb3Vyc2UtY2wvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcbiAgICBpbXBvcnQgRW1haWxFZGl0b3JDb21wb25lbnQgZnJvbSAnLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWUnO1xyXG4gICAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG5cclxuICAgIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgICdleHRlbmRzJzogQ29uc29sZUNvbXBvbmVudEJhc2UsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmxhZ3M6IHt9LFxyXG4gICAgICAgICAgICAgICAgdXNlcnM6IHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcG9zaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvVXNlcnM6IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAgICdlbWFpbEVkaXRvcic6IEVtYWlsRWRpdG9yQ29tcG9uZW50XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnOiBDb3Vyc2UgRW1haWwnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2VuZEVtYWlsKCk7XHJcblxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgYWxsQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpZCBpbiB0aGlzLmZsYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGFnc1tpZF0gPSB0aGlzLmFsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW5zdXJlKHVzZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHVzZXIgb2YgdXNlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZsYWdzW3VzZXIuaWRdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMuZmxhZ3MsIHVzZXIuaWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc1t1c2VyLmlkXSA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhZGRTZW5kRW1haWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRFbWFpbCA9IHRoaXMuYWRkTmF2MignU2VuZCBFbWFpbCcsIDMsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvVXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGlkIGluIHRoaXMuZmxhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mbGFnc1tpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9Vc2Vycy5wdXNoKHRoaXMudXNlcnNbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50b1VzZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnRvVXNlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnTm8gaW5kaWNhdGVkIG1lbWJlcnMhJywgJ011c3Qgc3BlY2lmeSBtZW1iZXJzIHRvIHNlbmQgZW1haWwgdG8uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVOYXYyKHRoaXMuc2VuZEVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsRW1haWwoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZW5kRW1haWwoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZG9uZVNlbmRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaWQgaW4gdGhpcy5mbGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxhZ3NbaWRdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRTZW5kRW1haWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgLyogTm90IHNjb3BlZCAqL1xyXG5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxmb3JtIHYtZWxzZSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgIDxtYXNrLXZ1ZSA6bWFzaz1cIm1hc2tcIj5TZW5kaW5nIEVtYWlsLi4uPC9tYXNrLXZ1ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b1wiPlRvXHJcbiAgICAgIDxkaXYgdi1mb3I9XCJ1c2VyIGluIGRpc3BsYXlUb1wiIDprZXk9XCJ1c2VyLmlkXCI+XHJcbiAgICAgICAge3t1c2VyLm5hbWV9fVxyXG4gICAgICAgICZsdDs8c3BhbiBjbGFzcz1cIm5vLWVtYWlsXCIgdi1pZj1cInVzZXIuZW1haWwgPT09IG51bGxcIj5ubyBlbWFpbDwvc3Bhbj48c3BhbiB2LWVsc2U+e3t1c2VyLmVtYWlsfX08L3NwYW4+Jmd0O1xyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiB2LWlmPVwidGhpcy50by5sZW5ndGggPiB0aGlzLmRpc3BsYXlUby5sZW5ndGhcIj4uLi48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInN1YmplY3RcIj48bGFiZWw+U3ViamVjdCA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic3ViamVjdFwiPjwvbGFiZWw+PC9kaXY+XHJcbiAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgPHAgY2xhc3M9XCJidXR0b25zXCI+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkNhbmNlbFwiIEBjbGljay5wcmV2ZW50PVwiY2FuY2VsXCI+XHJcbiAgICA8L3A+XHJcbiAgPC9mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBNYXNrVnVlID0gU2l0ZS5TaXRlLk1hc2tWdWU7XHJcblxyXG5cdGNvbnN0IE1BWF9ESVNQTEFZRUQgPSAxMDtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsndG8nXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkaXNwbGF5VG86IFtdLFxyXG5cdFx0XHRcdHN1YmplY3Q6ICcnLFxyXG5cdFx0XHRcdG1hc2s6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdG1hc2tWdWU6IE1hc2tWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcblx0XHRcdHRoaXMuZWRpdG9yID0gbmV3IHRoaXMuJHNpdGUuRWRpdG9yKGVsZW1lbnQsIHtcclxuXHRcdFx0XHR0YWI6IHRydWUsXHJcblx0XHRcdFx0YXV0b0luZGVudDogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuZGlzcGxheVRvID0gW107XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50by5sZW5ndGggJiYgaSA8IE1BWF9ESVNQTEFZRUQ7IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuZGlzcGxheVRvLnB1c2godGhpcy50b1tpXSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNhbmNlbCgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjYW5jZWwnKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLm1hc2spIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0LnRyaW0oKTtcclxuXHRcdFx0XHRpZiAoc3ViamVjdCA9PT0gJycpIHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgJ011c3QgcHJvdmlkZSBhIHN1YmplY3QnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGxldCBtZXNzYWdlID0gdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWU7XHJcblx0XHRcdFx0aWYgKG1lc3NhZ2UgPT09ICcnKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsICdNdXN0IHByb3ZpZGUgYSBtZXNzYWdlJyk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsZXQgdG8gPSBbXTtcclxuXHRcdFx0XHRmb3IgKGxldCB1c2VyIG9mIHRoaXMudG8pIHtcclxuXHRcdFx0XHRcdGlmICh1c2VyLmVtYWlsID09PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRvLnB1c2goe25hbWU6IHVzZXIubmFtZSwgZW1haWw6IHVzZXIuZW1haWx9KVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRvLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnZG9uZScpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdHRvOiB0byxcclxuXHRcdFx0XHRcdHN1YmplY3Q6IHN1YmplY3QsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBtZXNzYWdlXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLm1hc2sgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL2VtYWlsJywgcGFyYW1zKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMubWFzayA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgnZG9uZScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5tYXNrID0gZmFsc2U7XHJcblx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICBmb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGRpdi50byB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgID4gZGl2IHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDAuODVlbTtcclxuXHJcbiAgICAgIHNwYW4ubm8tZW1haWwge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuc3ViamVjdCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAuMmVtIDAgMCAwO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIHdpZHRoOiAyNWVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGl2LmJ1dHRvbnMge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtZXh0ZW5zaW9uc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuXHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlciA6ZmV0Y2hpbmc9XCJleHRlbnNpb25zID09PSBudWxsXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgdi1pZj1cImV4dGVuc2lvbnMhPT1udWxsXCIgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPkV4dGVuc2lvbjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZmV0Y2hlci51c2Vyc1wiPlxyXG4gICAgICAgICAgICAgIDx0ZCA+e3t1c2VyLnVzZXJJZH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e3t1c2VyLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7dXNlci5yb2xlTmFtZSgpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGF0cGlja3JcIj5cclxuICAgICAgICAgICAgICAgIDxmbGF0LXBpY2tyIHYtbW9kZWw9XCJleHRlbnNpb25zWyt1c2VyLm1lbWJlci5pZF1cIiA6Y29uZmlnPVwiZnBDb25maWdcIlxyXG4gICAgICAgICAgICAgICAgQG9uLWNoYW5nZT1cImNoYW5nZSgkZXZlbnQsIHVzZXIpXCIgZGF0YS1pbnB1dD48L2ZsYXQtcGlja3I+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGRhdGEtdG9nZ2xlIHRpdGxlPVwiVG9nZ2xlIENhbGVuZGFyXCI+PHNwYW4gY2xhc3M9XCJpY29ucy1jbCBpY29ucy1jbC1jYWxlbmRhclwiPjwvc3Bhbj48L2E+IDxhIGRhdGEtY2xlYXI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3gucG5nJ1wiIGFsdD1cImRlbGV0ZVwiIHRpdGxlPVwiRGVsZXRlXCI+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuICBpbXBvcnQgZmxhdFBpY2tyIGZyb20gJ3Z1ZS1mbGF0cGlja3ItY29tcG9uZW50JztcclxuICBpbXBvcnQgJ2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5jc3MnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuXHQgICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgICAgICBwcm9wczogWydhc3NpZ250YWcnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uczogbnVsbCxcclxuICAgICAgICAgICAgICAgIGZwQ29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiBcIm0tZC1ZIGg6aUtcIixcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SG91cjogMjMsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdE1pbnV0ZTogNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdtZW1iZXJzZmV0Y2hlcic6IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAnZmxhdFBpY2tyJzogZmxhdFBpY2tyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnOiAnICsgdGhpcy5hc3NpZ25tZW50LnNob3J0bmFtZSArICcgRXh0ZW5zaW9ucycpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFNpdGUuYXBpLmdldCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9tZXRhL2dldC9leHRlbnNpb25zLycgKyB0aGlzLmFzc2lnbnRhZywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ21lbWJlci1tZXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpZCBpbiBkYXRhLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IGRhdGEuYXR0cmlidXRlc1tpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGltZSA9PT0gbnVsbCB8fCB0aW1lID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRlbnNpb25zWytpZF0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVuc2lvbnNbK2lkXSA9IHRpbWUgKiAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgY2hhbmdlKGV2ZW50LCB1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gZXZlbnRbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHN0ciAhPT0gJycgPyAobmV3IERhdGUoc3RyKSkuZ2V0VGltZSgpIC8gMTAwMCA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB7dmFsdWU6IHRpbWV9O1xyXG4gICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdChgL2FwaS9jb3Vyc2UvbWVtYmVycy9tZXRhL3NldC8ke3VzZXIubWVtYmVyLmlkfS9leHRlbnNpb25zLyR7dGhpcy5hc3NpZ250YWd9YCwgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsZWFyKHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIFNpdGUuVnVlLnNldCh0aGlzLmV4dGVuc2lvbnMsICt1c2VyLm1lbWJlci5pZCwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC8qIE5vdCBzY29wZWQgKi9cclxuICBkaXYuY2wtZXh0ZW5zaW9ucyB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgID5kaXY+aW5wdXQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGQ6bnRoLWNoaWxkKDEpLCAgdGQ6bnRoLWNoaWxkKDIpLCAgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLWJ1bGstdXBsb2FkXCI+XHJcbiAgICA8aDIgaWQ9XCJidWxrXCI+QnVsayBjb3Vyc2UgbWVtYmVyc2hpcCB1cGxvYWRpbmc8L2gyPlxyXG4gICAgPHA+VGhpcyBvcHRpb24gYWNjZXB0cyBmaWxlcyBpbiBDU1YgZm9ybWF0IGFzIHByb2R1Y2VkIGJ5IGluc3RydWN0b3Igc3lzdGVtcy4gPC9wPlxyXG5cclxuICAgIDxmb3JtIGNsYXNzPVwiZnVsbFwiIEBzdWJtaXQucHJldmVudD1cImJ1bGtVcGxvYWQoKVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgPGxlZ2VuZD5CdWxrIFVwbG9hZCBGaWxlPC9sZWdlbmQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXY+RmlsZSB0byB1cGxvYWQ6IDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+PGlucHV0IG5hbWU9XCJidWxrZmlsZVwiIHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cImJ1bGtGaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIj48L3A+XHJcbiAgICAgICAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJQcmVzc1wiPiB0byB1cGxvYWQgdGhlIGZpbGUhPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IERpYWxvZyBmcm9tICdkaWFsb2ctY2wnO1xyXG4gICAgaW1wb3J0IE1lbWJlckRyb3BzQ29tcG9uZW50IGZyb20gJy4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlJztcclxuICAgIGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi8uLi9NZW1iZXJzL01lbWJlci5qcyc7XHJcbiAgICBsZXQgVnVlID0gU2l0ZS5WdWU7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgYnVsa0ZpbGVzOiBudWxsLFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBidWxrVXBsb2FkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5idWxrRmlsZXMgPT09IG51bGwgfHwgdGhpcy5idWxrRmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgZmlsZSA9IHRoaXMuYnVsa0ZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAvLyBDbG9zdXJlIHRvIGNhcHR1cmUgdGhlIGZpbGUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZTogZS50YXJnZXQucmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IG1lbWJlci5zZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvYnVsaycsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZHJvcHMgPSByZXNwb25zZS5nZXREYXRhKCdkcm9wcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkcm9wcyAhPT0gbnVsbCAmJiBkcm9wcy5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkcm9wc0ZvclZ1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHMuYXR0cmlidXRlcy5mb3JFYWNoKChkcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZHJvcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcnMuVXNlcihkcm9wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRyb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wc0ZvclZ1ZS5wdXNoKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEcm9wcGVkIENvdXJzZSBNZW1iZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnPGRpdiBpZD1cImRyb3BzXCI+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDbGFzczogJ2NsLWJ1bGstdXBsb2FkLWRsZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50czogJ0Ryb3AnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHNGb3JWdWUuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXIuZHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaCh1c2VyLm1lbWJlci5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvZHJvcHMnLCB7ZHJvcHM6IGlkc30pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5nbygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogKGRpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgVnVlIGluc2lkZSB0aGUgZGlhbG9nIGJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWw6ICcjZHJvcHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHM6IGRyb3BzRm9yVnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgPGRyb3BzIDpkcm9wcz1cImRyb3BzXCI+PC9kcm9wcz5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Ryb3BzJzogTWVtYmVyRHJvcHNDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuZ28oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgcmVhZGluZyBmaWxlXCIpO1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIHJlYWRlci5vbmFib3J0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBcIkZpbGUgcmVhZCBhYm9ydGVkXCIpO1xyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIC8vIFJlYWQgaW4gdGhlIGZpbGVcclxuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG4vLyBOb3RpY2U6IE5vdCBzY29wZWQhXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIGRpdi5jbC1idWxrLXVwbG9hZCB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGZpZWxkc2V0IHtcclxuXHJcbiAgICAgID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXYuY2wtYnVsay11cGxvYWQtZGxnIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgaWQ9XCJkcm9wcy1jb21wb25lbnRcIj5cclxuICAgIDxwPlRoZSBmb2xsb3dpbmcgdXNlcnMgYXJlIGluZGljYXRlZCBhcyBkcm9wcGVkIGZyb20gdGhlIHVwbG9hZGVkIGNvdXJzZVxyXG4gICAgcm9sZS4gU2VsZWN0IGFueSB5b3Ugd2lzaCB0byBmbGFnIGFzIGRyb3BwZWQgaW4gdGhlIHN5c3RlbS48L3A+XHJcbiAgICA8cD5Ecm9wcGluZyBhIHN0dWRlbnQgZG9lcyBub3QgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgc3lzdGVtLCBpdCBvbmx5XHJcbiAgICAgIGNoYW5nZXMgdGhlaXIgc3RhdHVzIHRvIDxlbT5kcm9wcGVkPC9lbT48L3A+XHJcbiAgICA8dGFibGU+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImFsbFwiIEBjaGFuZ2UucHJldmVudD1cImNoZWNrQWxsXCI+PC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5FbWFpbDwvdGg+XHJcbiAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Um9sZTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gZHJvcHNcIj5cclxuICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJ1c2VyLmRyb3BcIj48L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIudXNlcklkfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIubmFtZX19PC90ZD5cclxuICAgICAgICA8dGQ+e3t1c2VyLmVtYWlsfX08L3RkPlxyXG4gICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGFibGU+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZHJvcHM6IG51bGwsXHJcbiAgICAgICAgICAgIGFsbDogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgY2hlY2tBbGw6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5kcm9wcy5mb3JFYWNoKChkcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGRyb3AuZHJvcCA9IHRoaXMuYWxsO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgdGhpcy5kcm9wcyA9IHRoaXMuJHBhcmVudC5kcm9wcztcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5kaXYjZHJvcHMtY29tcG9uZW50IHtcclxuICBwYWRkaW5nOiAxZW07XHJcblxyXG4gIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtbWVtYmVyLWVkaXRvciBjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8cHJldi1uZXh0IDp1c2VyPVwiZWRpdHVzZXJcIj48L3ByZXYtbmV4dD5cclxuXHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGVyPVwiZmV0Y2hlclwiPjwvZmV0Y2hlcj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImNsLWNvbW1vblwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibmV3XCIgaWQ9XCJuZXdcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8bGVnZW5kPnt7bGVnZW5kfX08L2xlZ2VuZD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlVzZXIgSUQ8YnI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgOmRpc2FibGVkPVwiaWQhPT0nbmV3J1wiIHJlZj1cInVzZXJpZFwiIHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInVzZXJJZFwiIGNsYXNzPVwic2hvcnRcIiBzaXplPVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjMwXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX3RleHRcIj5OYW1lIDxzcGFuIGNsYXNzPVwic21hbGxcIj4obGFzdCwgZmlyc3QpPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCA6ZGlzYWJsZWQ9XCJmZXRjaGVkXCIgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibmFtZVwiIG1heGxlbmd0aD1cIjE1MFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV90ZXh0XCI+RW1haWw8YnI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgOmRpc2FibGVkPVwiZmV0Y2hlZFwiIHJlZj1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgdi1tb2RlbD1cImVtYWlsXCIgbWF4bGVuZ3RoPVwiMjU0XCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tc2V0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+PGVtPlJvbGU6PC9lbT48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIHYtZm9yPVwiKHJvbGVPYmosIGlkKSBpbiByb2xlc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInJvbGVcIiBuYW1lPVwicm9sZVwiIHR5cGU9XCJyYWRpb1wiIDp2YWx1ZT1cImlkXCI+IHt7cm9sZU9iai5uYW1lfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJyb290ICsgJy9jbC9jb25zb2xlL21hbmFnZW1lbnQvY291cnNlL21lbWJlcnMnXCIgdGFnPVwiYnV0dG9uXCI+Q2FuY2VsPC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPHAgdi1pZj1cImVkaXR1c2VyICE9PSBudWxsICYmIGlkIT09J25ldydcIiBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5XCI+VXNlciBmaWVsZHMgYXJlIG5vdCBlZGl0YWJsZSBpbiB0aGlzXHJcbiAgICAgICAgICBmb3JtLiBUbyBnbyB0aGUgPHJvdXRlci1saW5rIDp0bz1cInJvb3QgKyAnL2NsL2NvbnNvbGUvbWFuYWdlbWVudC91c2VyLycgKyBlZGl0dXNlci5pZFwiPnVzZXIgZWRpdG9yIHBhZ2UgZm9yIHt7bmFtZX19PC9yb3V0ZXItbGluaz4gdG8gZWRpdCB0aG9zZSBmaWVsZHMuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXIuanMnO1xyXG4gIGltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICcuL1ByZXZOZXh0TWVtYmVyLnZ1ZSc7XHJcblxyXG4gIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gICAgcHJvcHM6IFsnaWQnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWdlbmQ6IHRoaXMuaWQgPT09ICduZXcnID8gJ05ldyBNZW1iZXInIDogJ0VkaXQgTWVtYmVyJyxcclxuICAgICAgICByb2xlczogdGhpcy52aXNpYmxlUm9sZXMsXHJcblxyXG4gICAgICAgIGVkaXR1c2VyOiBudWxsLFxyXG4gICAgICAgIHVzZXJJZDogJycsXHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHJvbGU6ICdUJyxcclxuICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgICBzZXE6IDEsXHJcbiAgICAgICAgZmV0Y2hlZDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZXJJZChhZnRlciwgYmVmb3JlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaChhZnRlcik7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfSxcclxuICAgICAgJyRyb3V0ZScodG8sIGZyb20pIHtcclxuICAgICAgICB0aGlzLnRha2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiBTaXRlLlZ1ZXgubWFwU3RhdGUoe1xyXG4gICAgICBmZXRjaGVyOiBzdGF0ZSA9PiBzdGF0ZS5tZW1iZXJzLmZldGNoZXJcclxuXHJcbiAgICB9KSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgJ2ZldGNoZXInOiBGZXRjaGVyVnVlLFxyXG4gICAgICAncHJldk5leHQnOiBQcmV2TmV4dE1lbWJlclZ1ZVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgICAgbGV0IG1lbWJlciA9IG5ldyBNZW1iZXIoKTtcclxuICAgICAgbGV0IHJvbGVzID0gbWVtYmVyLmdldFJvbGVzKCk7XHJcbiAgICAgIHRoaXMudmlzaWJsZVJvbGVzID0ge307XHJcbiAgICAgIGZvciAobGV0IHJvbGUgaW4gcm9sZXMpIHtcclxuICAgICAgICBpZiAocm9sZXNbcm9sZV0uc2tpcCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlUm9sZXNbcm9sZV0gPSByb2xlc1tyb2xlXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnRha2UoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRha2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT09ICduZXcnKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQWRkIENvdXJzZSBNZW1iZXInKTtcclxuICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcmVmcy51c2VyaWQuc2VsZWN0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZWRpdHVzZXIgPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogQ291cnNlIE1lbWJlcicpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2dldCcsIHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdHVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcklkID0gdXNlci51c2VySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gdXNlci5uYW1lICE9PSBudWxsID8gdXNlci5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWFpbCA9IHVzZXIuZW1haWwgIT09IG51bGwgPyB1c2VyLmVtYWlsIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb2xlID0gdXNlci5yb2xlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLnVzZXJpZC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgbXNnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbWVtYmVycyd9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSxcclxuICAgICAgZmV0Y2godXNlcklkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgIT09ICduZXcnKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1c2VySWQgPSB1c2VySWQudHJpbSgpO1xyXG4gICAgICAgIGlmICh1c2VySWQgPT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VxKys7XHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KCcvYXBpL3VzZXJzJywge3VzZXJJZDogdXNlcklkLCBzZXE6IHRoaXMuc2VxfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHByb3RlY3RzIGZyb20gb3V0LW9mLW9yZGVyIHByb2Nlc3NpbmdcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiByZXN1bHRzIGZyb20gdGhlIHNlcnZlci4uLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IHJlc3BvbnNlLmdldERhdGEoJ3NlcScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgrc2VxLmlkICE9PSB0aGlzLnNlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmF0dHJpYnV0ZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2VyIGRvZXMgbm90IGV4aXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZW1haWwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VyID0gZGF0YS5hdHRyaWJ1dGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWUgIT09IG51bGwgPyB1c2VyLm5hbWUgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtYWlsID0gdXNlci5lbWFpbCAhPT0gbnVsbCA/IHVzZXIuZW1haWwgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgfSxcclxuICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICB1c2VySWQ6IHRoaXMudXNlcklkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICByb2xlOiB0aGlzLnJvbGUsXHJcbiAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgc2VjdGlvbjogbWVtYmVyLnNlY3Rpb25cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pZCAhPT0gJ25ldycpIHtcclxuICAgICAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLmlkID09PSAnbmV3JyA/ICdtZW1iZXJzL25ldycgOiAnbWVtYmVycy91cGRhdGUnO1xyXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKHBhdGgsIGRhdGEpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbWVtYmVycyd9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8c2xvdCA6dXNlcj1cInVzZXJcIj48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7U3R1ZGVudHNPbmx5fSBmcm9tICcuL1N0dWRlbnRzT25seSc7XHJcbiAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4uLy4uL01lbWJlcnMvTWVtYmVyJztcclxuXHJcbiAgY29uc3QgRmV0Y2hlclZ1ZSA9IFNpdGUuRmV0Y2hlclZ1ZTtcclxuXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWxsaW5rOiB7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgaWQodG8sIGZyb20pIHtcclxuICAgICAgICAgICAgICB0aGlzLmZldGNoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnZmV0Y2hlcic6IEZldGNoZXJWdWVcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgZmV0Y2goKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICBcdCAgbGV0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgXHQgIFx0aWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICBzZW1lc3RlcjogbWVtYmVyLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbjogbWVtYmVyLnNlY3Rpb25cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKFN0dWRlbnRzT25seS5nZXQoKSkge1xyXG4gICAgICAgICAgICAgIFx0cXVlcnkucm9sZSA9IE1lbWJlci5TVFVERU5UO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lbWJlcnMvZ2V0JywgcXVlcnkpXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLnVzZXJJZDtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZldGNoZWQnLCB0aGlzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKG1zZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mYWlsbGluayAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogU2l0ZS5yb290ICsgdGhpcy5mYWlsbGlua30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgY2wtbWVtYmVycy1lZGl0b3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cImZldGNoZXIuZmV0Y2hlZFwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInVzZXJzLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48L3RoPlxyXG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Vc2VyPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkVtYWlsPC90aD5cclxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNyZWF0ZWQ8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIgaW4gdXNlcnNcIj5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCJtYW5hZ2VtZW50XCIgY2xhc3M9XCJjbC1tZ210LW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwidG9Vc2VyKHVzZXIpXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL3BlbmNpbDE2LnBuZydcIiBhbHQ9XCJFZGl0XCIgdGl0bGU9XCJFZGl0XCI+PC9yb3V0ZXItbGluaz4mbmJzcDs8YSBAY2xpY2sucHJldmVudD1cImRlbGV0ZVVzZXIodXNlcilcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcveC5wbmcnXCIgYWx0PVwiRGVsZXRlXCIgdGl0bGU9XCJEZWxldGVcIj48L2E+PC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCJtYW5hZ2VtZW50XCI+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInRvVXNlcih1c2VyKVwiPnt7dXNlci51c2VySWR9fTwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB2LWlmPVwibWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ0b1VzZXIodXNlcilcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPHRkIHYtaWY9XCIhbWFuYWdlbWVudFwiPjxhIEBjbGljay5wcmV2ZW50PVwicHJlc2VudFVzZXIodXNlcilcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2luZm8xNi5wbmcnXCIgYWx0PVwiVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWaWV3XCI+PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCB2LWlmPVwiIW1hbmFnZW1lbnRcIj48YSBAY2xpY2sucHJldmVudD1cInByZXNlbnRVc2VyKHVzZXIpXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPnt7dXNlci51c2VySWR9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICA8dGQgdi1pZj1cIiFtYW5hZ2VtZW50XCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJwcmVzZW50VXNlcih1c2VyKVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj57e3VzZXIubmFtZX19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD48YSB2LWlmPVwidXNlci5lbWFpbCAhPT0gbnVsbFwiIDpocmVmPVwiJ21haWx0bzonICsgdXNlci5lbWFpbFwiPnt7dXNlci5lbWFpbH19PC9hPjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInNtYWxsXCI+e3t1c2VyLnJvbGVOYW1lKHRydWUpfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJzbWFsbFwiPnt7dGltZVJlbGF0aXZlVU5JWCh1c2VyLm1lbWJlci5jcmVhdGVkLCBudWxsLCAnTS1ERC1ZWVlZJyl9fTwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbnRlciBzbWFsbFwiPjxlbT57e3N0YXRzfX08L2VtPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5cclxuICAgICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uPC9wPlxyXG4gICAgICAgIDxidWxrLXVwbG9hZCB2LWlmPVwibWFuYWdlbWVudFwiPjwvYnVsay11cGxvYWQ+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxmZXRjaGVyIDpmZXRjaGVyPVwiZmV0Y2hlclwiPjwvZmV0Y2hlcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IEJ1bGtVcGxvYWRDb21wb25lbnQgZnJvbSAnLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG4gIGNvbnN0IEZldGNoZXJWdWUgPSBVc2Vycy5GZXRjaGVyVnVlO1xyXG4gIGNvbnN0IG1hcFN0YXRlID0gU2l0ZS5WdWV4Lm1hcFN0YXRlO1xyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJlc2VudGF0aW9uIGZvciBhbGwgbWVtYmVycyBmb3IgZWRpdGluZy92aWV3aW5nXHJcbiAgICpcclxuICAgKiBEaXNwbGF5cyBhbGwgbWVtYmVycyB3aXRoIGxpbmtzIGZvciBvcHRpb25zLlxyXG4gICAqIEBjb25zdHJ1Y3RvciBNZW1iZXJzRWRpdG9yQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgJ2V4dGVuZHMnOiBDb25zb2xlQ29tcG9uZW50QmFzZSxcclxuICAgIHByb3BzOiBbXHJcbiAgICAgICdtYW5hZ2VtZW50J1xyXG4gICAgXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b1VzZXI6IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb290ICsgJy9jbC9jb25zb2xlL21hbmFnZW1lbnQvY291cnNlL21lbWJlci8nICsgdXNlci5tZW1iZXIuaWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGF0czogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZmV0Y2hNb3JlKCkge1xyXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlVXNlcjogZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgICAgICBuZXcgRGlhbG9nLk1lc3NhZ2VCb3goJ0FyZSB5b3Ugc3VyZT8nLCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAnICsgdXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0tDQU5DRUwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ21lbWJlcnMvZGVsZXRlJywge2lkOiB1c2VyLm1lbWJlci5pZH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXNlbnRVc2VyOiBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgICAgIGxldCBjb250ZW50ID0gYDxkaXYgY2xhc3M9XCJjbC1kaWFsb2dcIj5cclxuPGRpdiBjbGFzcz1cInRhYnVsYXJcIj5cclxuPHA+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPlVzZXIgSUQ6IDwvc3Bhbj48c3Bhbj4ke3VzZXIudXNlcklkfTwvc3Bhbj48L3A+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5OYW1lOiA8L3NwYW4+PHNwYW4+JHt1c2VyLm5hbWV9PC9zcGFuPjwvcD5cclxuPHA+PHNwYW4gY2xhc3M9XCJsYWJlbFwiPkVtYWlsOiA8L3NwYW4+PHNwYW4+JHt1c2VyLmVtYWlsfTwvc3Bhbj48L3A+XHJcbjxwPjxzcGFuIGNsYXNzPVwibGFiZWxcIj5Sb2xlOiA8L3NwYW4+PHNwYW4+JHt1c2VyLnVzZXJSb2xlTmFtZSgpfTwvc3Bhbj48L3A+XHJcbjwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gICAgICAgIG5ldyBEaWFsb2coe1xyXG4gICAgICAgICAgY29udGVudDogY29udGVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjb21wdXRlU3RhdHMoKSB7XHJcbiAgICAgICAgbGV0IHJvbGVDbnQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIHRoaXMudXNlcnMpIHtcclxuICAgICAgICAgIGxldCByb2xlID0gdXNlci5yb2xlKCk7XHJcbiAgICAgICAgICBpZiAocm9sZUNudFtyb2xlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJvbGVDbnRbcm9sZV0gPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcm9sZUNudFtyb2xlXSsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMudXNlcnMubGVuZ3RoICsgJyBtZW1iZXJzJztcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuICAgICAgICBjb25zdCByb2xlcyA9IHVzZXIuZ2V0Um9sZXMoKTtcclxuICAgICAgICBmb3IgKGxldCByb2xlIGluIHJvbGVDbnQpIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSByb2xlc1tyb2xlXTtcclxuICAgICAgICAgIGNvbnN0IHJvbGVOYW1lID0gci5zaG9ydCAhPT0gdW5kZWZpbmVkID8gci5zaG9ydCA6IHIubmFtZTtcclxuICAgICAgICAgIHRoaXMuc3RhdHMgKz0gJyAvICcgKyByb2xlQ250W3JvbGVdICsgJyAnICsgcm9sZU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgdXNlcnM6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMudXNlcnMsXHJcbiAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG4gICAgfSksXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICB1c2VyczogZnVuY3Rpb24gKHRvLCBmbSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVN0YXRzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICdidWxrLXVwbG9hZCc6IEJ1bGtVcGxvYWRDb21wb25lbnQsXHJcbiAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIEFkZCB0aGUgJ0FkZCBNZW1iZXInIG9wdGlvbiB0byB0aGUgdGhlIG5hdjIgbmF2aWdhdGlvbiBiYXJcclxuICAgICAgaWYgKHRoaXMubWFuYWdlbWVudCkge1xyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50ID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgJ0FkZCBNZW1iZXInLCA1LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh0aGlzLiRzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUvbWFuYWdlbWVudC9jb3Vyc2UvbWVtYmVyL25ldycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG4gICAgICBsZXQgcXVlcnkgPSB7XHJcbiAgICAgICAgc2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcblxyXG4gICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoYDogJHttZW1iZXIuc2VtZXN0ZXJ9LyR7bWVtYmVyLnNlY3Rpb259IE1lbWJlcnNgKTtcclxuXHJcbiAgICAgIC8vIFdlIHJlc2V0IHRoZSB1c2VycyBzdGF0ZSBzaW5jZSB3ZSBtYXkgYWRkIHVzZXJzXHJcbiAgICAgIGlmICh0aGlzLm1hbmFnZW1lbnQpIHtcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXJzL3Jlc2V0Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcbiAgICAgIHRoaXMuY29tcHV0ZVN0YXRzKCk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMucmVtb3ZlTmF2Mih0aGlzLCB0aGlzLmFkZENvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxsYWJlbCBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIHJlZj1cInN0dWRlbnRzLW9ubHlcIiA+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJzdHVkZW50c1wiIEBjaGFuZ2U9XCJzdHVkZW50c09ubHlDaGFuZ2VkXCI+IFN0dWRlbnRzIE9ubHk8L2xhYmVsPlxyXG4gICAgICA8ZmV0Y2hlciA6ZmV0Y2hlcj1cImZldGNoZXJcIiA6ZmV0Y2hpbmc9XCJmZXRjaGluZ1wiPlxyXG4gICAgICAgIDxzbG90IDp1c2Vycz1cInVzZXJzXCIgOnN0dWRlbnRzPVwic3R1ZGVudHNcIj48L3Nsb3Q+XHJcbiAgICAgICAgPHAgdi1pZj1cInVzZXJzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5cclxuICAgICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uPC9wPlxyXG4gICAgICA8L2ZldGNoZXI+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHttYXBTdGF0ZX0gZnJvbSAndnVleCc7XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vLi4vTWVtYmVycy9NZW1iZXInXHJcbiAgICBpbXBvcnQge1N0dWRlbnRzT25seX0gZnJvbSAnLi9TdHVkZW50c09ubHknO1xyXG5cclxuICAgIGNvbnN0IEZldGNoZXJWdWUgPSBTaXRlLkZldGNoZXJWdWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNZW1iZXIgZmV0Y2hlciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cy5cclxuICAgICAqXHJcbiAgICAgKiBAY29uc3RydWN0b3IgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWVcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIC8vIElmIHRoZSBmZXRjaGluZyB2YWx1ZSBpdCB0cnVlLCB0aGUgdXNpbmcgY2xpZW50XHJcbiAgICAgICAgLy8gaXMgZmV0Y2hpbmcgbW9yZSB0aGFuIGp1c3QgdGhlIG1lbWJlcnNoaXAgYW5kIHdlIHdpbGxcclxuICAgICAgICAvLyB3YWl0IGZvciB0aGF0IGFzIHdlbGwuXHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZmV0Y2hpbmc6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN0dWRlbnRzRWxlbWVudDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGZldGNoTW9yZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL21vcmUnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIEFkZCBcIlN0dWRlbnRzIE9ubHlcIiB0byB0aGUgbWVudSBiYXJcclxuICAgICAgICAgICAgICogQG1lbWJlcm9mIE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBhZGRTdHVkZW50c09ubHkoKSB7XHJcbiAgICAgICAgICAgIFx0dGhpcy5zdHVkZW50cyA9IFN0dWRlbnRzT25seS5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ3N0dWRlbnRzLW9ubHknXTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgICAgICAgICAgZXh0cmEuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRzRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0dWRlbnRzT25seUNoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIFx0U3R1ZGVudHNPbmx5LnNldCh0aGlzLnN0dWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZWQ6IG1hcFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlcnMoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0dWRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGUoKSA9PT0gTWVtYmVyLlNUVURFTlRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLm1lbWJlcnMudXNlcnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoZXI6IHN0YXRlID0+IHN0YXRlLm1lbWJlcnMuZmV0Y2hlclxyXG5cclxuICAgICAgICB9KSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdmZXRjaGVyJzogRmV0Y2hlclZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICAgIHRoaXMuc3R1ZGVudHMgPSBTdHVkZW50c09ubHkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBtZW1iZXIuc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ21lbWJlcnMvcXVlcnknLCBxdWVyeSk7XHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdtZW1iZXJzL2ZldGNoJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3R1ZGVudHNPbmx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHVkZW50c0VsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnN0dWRlbnRzRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGxldCBleHRyYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgc3Bhbi5leHRyYScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3VzZXInXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZXI6IGZ1bmN0aW9uICh0bywgZm0pIHtcclxuICAgICAgICBsZXQgdXNlciA9IHRoaXMudXNlcjtcclxuICAgICAgICBsZXQgbGluayA9IHRoaXMubGluaztcclxuXHJcbiAgICAgICAgaWYgKHVzZXIgIT09IG51bGwgJiYgdXNlci5wcmV2ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJsZWZ0Jywge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxyb3V0ZXItbGluayB0aXRsZT1cIlByZXZpb3VzIE1lbWJlclwiIDp0bz1cImxpbmsgKyB1c2VyLnByZXYubWVtYmVyLmlkXCI+PGltZyA6c3JjPVwiaWNvblwiIGFsdD1cIlByZXZpb3VzIE1lbWJlclwiPjwvcm91dGVyLWxpbms+YCxcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLiRzaXRlLnJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9wcmV2aWNvbi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgIGxpbms6IGxpbmtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYybGVmdCcsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXIgIT09IG51bGwgJiYgdXNlci5uZXh0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJyaWdodCcsIHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IGA8cm91dGVyLWxpbmsgdGl0bGU9XCJOZXh0IE1lbWJlclwiIDp0bz1cImxpbmsgKyB1c2VyLm5leHQubWVtYmVyLmlkXCI+PGltZyA6c3JjPVwiaWNvblwiIGFsdD1cIk5leHQgTWVtYmVyXCI+PC9yb3V0ZXItbGluaz5gLFxyXG4gICAgICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGljb246IHRoaXMuJHNpdGUucm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL25leHRpY29uLnBuZycsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICAgICAgICAgICAgbGluazogbGlua1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHNldCh0aGlzLiRzaXRlLmNvbnNvbGUuY29tcG9uZW50cywgJ25hdjJyaWdodCcsIG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBwYXRoXHJcbiAgICAgIGNvbnN0IHBhdGggPSB0aGlzLiRyb3V0ZS5wYXRoO1xyXG5cclxuICAgICAgLy8gUmVtb3ZlIHRoZSBtZW1iZXIgSUQgZnJvbSB0aGUgZW5kXHJcbiAgICAgIGNvbnN0IHJlID0gLyheLiopXFwvKFswLTldKykkLztcclxuICAgICAgY29uc3QgbWF0Y2ggPSBwYXRoLm1hdGNoKHJlKTtcclxuICAgICAgaWYgKG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5saW5rID0gbWF0Y2hbMV0gKyAnLyc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYybGVmdCcsIG51bGwpO1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMsICduYXYycmlnaHQnLCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXNlY3Rpb24tY29tcG9uZW50XCI+PHNwYW4gdi1pZj1cIiFzaG9ydFwiPnt7Y291cnNlLm5hbWV9fSB7e2NvdXJzZS5kZXNjfX08L3NwYW4+PHNlY3Rpb24tc2VsZWN0Pjwvc2VjdGlvbi1zZWxlY3Q+PHNwYW4gY2xhc3M9XCJleHRyYVwiPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFNlY3Rpb25TZWxlY3QgZnJvbSAnLi4vU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc2hvcnQnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGNvdXJzZTogdGhpcy4kc3RvcmUuc3RhdGUuY291cnNlLmNvdXJzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAnc2VjdGlvbi1zZWxlY3QnOiBTZWN0aW9uU2VsZWN0XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuZGl2LmNsLXNlY3Rpb24tY29tcG9uZW50IHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICA+c3BhbiB7XHJcbiAgICBwYWRkaW5nOiAwIDAuNGVtIDAgMDtcclxuICB9XHJcblxyXG4gID5zcGFuOmxhc3QtY2hpbGQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxcHggMCAwIDA7XHJcbn1cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcblxyXG4gICAgICA8bWVtYmVyc2ZldGNoZXI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Qtc2NvcGU9XCJmZXRjaGVyXCI+XHJcbiAgICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICA8dGg+Um9sZTwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cInVzZXIxIGluIGZldGNoZXIudXNlcnNcIiB2LWlmPVwidXNlci5hdExlYXN0KHVzZXIxLnJvbGUoKSlcIj5cclxuICAgICAgICAgICAgICA8dGQ+PGEgQGNsaWNrLnByZXZlbnQ9XCJzZWxlY3QodXNlcjEpXCI+e3t1c2VyMS51c2VySWR9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD48YSBAY2xpY2sucHJldmVudD1cInNlbGVjdCh1c2VyMSlcIj57e3VzZXIxLm5hbWV9fTwvYT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIxLnJvbGVOYW1lKCl9fTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyc2ZldGNoZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudCBmcm9tICcuL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuXHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHQnbWVtYmVyc2ZldGNoZXInOiBNZW1iZXJzRmV0Y2hlckNvbXBvbmVudFxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuc2V0VGl0bGUoJzogTWVtYmVyIFNwb29maW5nJyk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzZWxlY3QodXNlcikge1xyXG5cdFx0XHRcdGxldCBwYXJhbXMgPSB7XHJcblx0XHRcdFx0ICB1c2VyOiB1c2VyLmlkLFxyXG4gICAgICAgICAgbWVtYmVyOiB1c2VyLm1lbWJlci5pZFxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdHRoaXMuJHNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvc3Bvb2YnLCBwYXJhbXMpXHJcblx0XHRcdFx0ICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0ICAgICAgICBcdHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucm9vdCArICcvJztcclxuXHRcdFx0XHQgICAgICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0ICAgICAgICB9XHJcblxyXG5cdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdCAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuXHRcdFx0XHQgICAgfSk7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJmZXRjaGVyIHYtb246ZmV0Y2hlZD1cImZldGNoZWRcIiA6aWQ9XCJtZW1iZXJpZFwiIDpmYWlsbGluaz1cInN1Ym1pc3Npb25zTGlua1wiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBzbG90LXNjb3BlPVwiZmV0Y2hlclwiPlxyXG4gICAgICAgICAgPHByZXYtbmV4dCA6dXNlcj1cImZldGNoZXIudXNlclwiPjwvcHJldi1uZXh0PlxyXG4gICAgICAgICAgPGRpdiAgdi1pZj1cImZldGNoZXIudXNlciAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgICA8c3VibWlzc2lvbnMgOnVzZXI9XCJmZXRjaGVyLnVzZXJcIiA6YXNzaWdudGFnPVwiYXNzaWdudGFnXCI+PC9zdWJtaXNzaW9ucz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvbWVtYmVyZmV0Y2hlcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50IGZyb20gJy4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZSc7XHJcblxyXG5cdGltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICcuL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlJztcclxuXHRpbXBvcnQgTWVtYmVyRmV0Y2hlckNvbXBvbmVudCBmcm9tICcuL01lbWJlcnMvTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWUnO1xyXG5cclxuICBjb25zdCBDb25zb2xlQ29tcG9uZW50QmFzZSA9IFNpdGUuQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJywgJ21lbWJlcmlkJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3VibWlzc2lvbnNMaW5rOiAnL2NsL2NvbnNvbGUvY291cnNlL3N1Ym1pc3Npb25zLycgKyB0aGlzLmFzc2lnbnRhZ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRtZW1iZXJmZXRjaGVyOiBNZW1iZXJGZXRjaGVyQ29tcG9uZW50LFxyXG5cdFx0XHRwcmV2TmV4dDogUHJldk5leHRNZW1iZXJWdWUsXHJcblx0XHRcdHN1Ym1pc3Npb25zOiBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnRcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJzogU3VibWlzc2lvbnMnKTtcclxuXHRcdFx0dGhpcy5hZGROYXYyTGluaygnRXhpdCcsIDQsICcvY2wvY29uc29sZS9jb3Vyc2Uvc3VibWlzc2lvbnMvJyArIHRoaXMuYXNzaWdudGFnKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGZldGNoZWQodXNlcikge1xyXG5cdFx0XHRcdGxldCBhc3NpZ25tZW50ID0gdXNlci5tZW1iZXIuZ2V0QXNzaWdubWVudCh0aGlzLiRzdG9yZSwgdGhpcy5hc3NpZ250YWcpO1xyXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiAnICsgdXNlci5uYW1lICsgJyAnICsgYXNzaWdubWVudC5zaG9ydG5hbWUgKyAnIFN1Ym1pc3Npb25zJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXYgdi1mb3I9XCJzdWJtaXNzaW9uIGluIHN1Ym1pc3Npb25zXCI+XHJcbiAgICAgIDxoMj57e3N1Ym1pc3Npb24ubmFtZX19PC9oMj5cclxuICAgICAgPHN1Ym1pc3Npb24tdnVlIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiPjwvc3VibWlzc2lvbi12dWU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFN1Ym1pc3Npb25WdWUgZnJvbSAnLi4vU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3VzZXInLCAnYXNzaWdudGFnJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXNzaWdubWVudDogbnVsbCxcclxuICAgICAgICBzdWJtaXNzaW9uczogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXNzaW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmV0Y2godGhpcy51c2VyKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2godGhpcy51c2VyKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGZldGNoKHVzZXIpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IHVzZXIubWVtYmVyLmdldFNlY3Rpb24odGhpcy4kc3RvcmUpO1xyXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IHVzZXIubWVtYmVyLmdldEFzc2lnbm1lbnQodGhpcy4kc3RvcmUsIHRoaXMuYXNzaWdudGFnKTtcclxuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50LnN1Ym1pc3Npb25zID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIFRoaXMgYXNzaWdubWVudCBoYXMgbm8gc3VibWlzc2lvbnNcclxuICAgICAgICAgIHRoaXMuc3VibWlzc2lvbnMgPSBbXTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldCgnL2FwaS9jb3Vyc2Uvc3VibWlzc2lvbi9zdWJtaXNzaW9ucy8nICtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaWdudGFnICsgJy8nICsgdXNlci5tZW1iZXIuaWQsIHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pc3Npb25zID0gcmVzcG9uc2UuZ2V0RGF0YUFsbCgnc3VibWlzc2lvbnMnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJtaXNzaW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9ucy5wdXNoKHN1Ym1pc3Npb25zW2ldLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9uc1tpXS51c2VyID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtZW1iZXJzZmV0Y2hlcj5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdC1zY29wZT1cImZldGNoZXJcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYSB1c2VyIHRvIHZpZXcgc3VibWlzc2lvbnMgZm9yIHRoYXQgdXNlci48L3A+XHJcbiAgICAgICAgICA8c3VibWlzc2lvbnMtbGlua3MgOmFzc2lnbm1lbnQ9XCJhc3NpZ25tZW50XCI+PC9zdWJtaXNzaW9ucy1saW5rcz5cclxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5Sb2xlPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwidXNlciBpbiBmZXRjaGVyLnVzZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJsaW5rICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIudXNlcklkfX08L3JvdXRlci1saW5rPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJsaW5rICsgdXNlci5tZW1iZXIuaWRcIj57e3VzZXIubmFtZX19PC9yb3V0ZXItbGluaz48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e3VzZXIucm9sZU5hbWUoKX19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9tZW1iZXJzZmV0Y2hlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50IGZyb20gJ2NvdXJzZS1jbC9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlJztcclxuICBpbXBvcnQgU3VibWlzc2lvbnNMaW5rc1Z1ZSBmcm9tICcuL1N1Ym1pc3Npb25zTGlua3MudnVlJztcclxuXHJcbiAgY29uc3QgQ29uc29sZUNvbXBvbmVudEJhc2UgPSBTaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogVnVlIGZvciBzdWJtaXNzaW9ucyBmb3IgYWxsIHN0dWRlbnRzLlxyXG4gICAqIFByb3ZpZGVzIGxpbmtzIHRvIGEgdmlldyBvZiBhbiBpbmRpdmlkdWFsIHN0dWRlbnQncyBzdWJtaXNzaW9ucy5cclxuICAgKiBAY29uc3RydWN0b3IgU3VibWlzc2lvbnNDb21wb25lbnRWdWVcclxuICAgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHQnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG5cdFx0cHJvcHM6IFsnYXNzaWdudGFnJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0bGluazogU2l0ZS5yb290ICsgJy9jbC9jb25zb2xlL2NvdXJzZS9zdWJtaXNzaW9ucy8nICsgdGhpcy5hc3NpZ250YWcgKyAnLycsXHJcblx0XHRcdFx0YXNzaWdubWVudDogbnVsbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcG9uZW50czoge1xyXG4gICAgICAgICAgJ21lbWJlcnNmZXRjaGVyJzogTWVtYmVyc0ZldGNoZXJDb21wb25lbnQsXHJcbiAgICAgICAgICAnc3VibWlzc2lvbnNMaW5rcyc6IFN1Ym1pc3Npb25zTGlua3NWdWVcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRjb25zdCBtZW1iZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXIubWVtYmVyO1xyXG5cdFx0XHRsZXQgcXVlcnkgPSB7XHJcblx0XHRcdFx0c2VtZXN0ZXI6IG1lbWJlci5zZW1lc3RlcixcclxuXHRcdFx0XHRzZWN0aW9uOiBtZW1iZXIuc2VjdGlvblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dGhpcy5zZWN0aW9uID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snY291cnNlL3NlY3Rpb24nXShtZW1iZXIuc2VtZXN0ZXIsIG1lbWJlci5zZWN0aW9uKTtcclxuXHRcdFx0dGhpcy5hc3NpZ25tZW50ID0gdGhpcy5zZWN0aW9uLmdldEFzc2lnbm1lbnQodGhpcy5hc3NpZ250YWcpO1xyXG5cclxuXHRcdFx0dGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyB0aGlzLmFzc2lnbm1lbnQuc2hvcnRuYW1lICsgJyBTdWJtaXNzaW9ucycpO1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNsLXN1Ym1pc3Npb25zLWJ1bGtcIj5cclxuICAgIDxwIHYtZm9yPVwibGluayBpbiBsaW5rc1wiIHYtaWY9XCJ1c2VyLmF0TGVhc3QobGluay5hdExlYXN0KVwiIGNsYXNzPVwiY2VudGVyXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJjbGljayhsaW5rKVwiPnt7bGluay50ZXh0fX08L2E+XHJcbiAgICAgIDxhIHYtaWY9XCJsaW5rLmZyb20gIT09IHVuZGVmaW5lZCAmJiAhbGluay5yYW5nZVwiIHRpdGxlPVwiRW5hYmxlIFJhbmdlXCIgQGNsaWNrLnByZXZlbnQ9XCJsaW5rLnJhbmdlID0gdHJ1ZVwiPlxyXG4gICAgICAgIDxpbWcgOnNyYz1cInJvb3QgKyAnL2NsL2ltZy9yYW5nZS5wbmcnXCIgYWx0PVwiRW5hYmxlIFJhbmdlXCIgd2lkdGg9XCIyNlwiIGhlaWdodD1cIjEwXCI+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHNwYW4gdi1pZj1cImxpbmsucmFuZ2VcIj48aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwibGluay5mcm9tXCI+IHRvIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJsaW5rLnRvXCI+PC9zcGFuPlxyXG4gICAgPHNwYW4gdi1pZj1cImxpbmsucmFuZ2VcIj48YnI+RW50ZXIgZnJvbS90byByYW5nZSBmb3IgdXNlciBpZC48L3NwYW4+XHJcbiAgICA8L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7TWVtYmVyfSBmcm9tICcuLi9NZW1iZXJzL01lbWJlcic7XHJcblxyXG4gIGNvbnN0IENvbnNvbGVDb21wb25lbnRCYXNlID0gU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVnVlIGNsYXNzIGZvciBsaW5rcyB0byBkb3dubG9hZCBzdWJtaXNzaW9ucyBpbiBidWxrXHJcbiAgICogQGNvbnN0cnVjdG9yIFN1Ym1pc3Npb25zTGlua3NWdWVcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAnZXh0ZW5kcyc6IENvbnNvbGVDb21wb25lbnRCYXNlLFxyXG4gICAgcHJvcHM6IFsnYXNzaWdubWVudCddLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpbmtzOiBbXSxcclxuICAgICAgICBmcm9tOiAnJyxcclxuICAgICAgICB0bzogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGFzc2lnbm1lbnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRha2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMudGFrZSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdGFrZSgpIHtcclxuICAgICAgICB0aGlzLmxpbmtzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgIT09IG51bGwgJiYgdGhpcy5hc3NpZ25tZW50LnN1Ym1pc3Npb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vIENvbGxlY3QgdXAgdGhlIHN1Ym1pc3Npb24gbGlua3NcclxuICAgICAgICAgIGZvciAobGV0IHN1Ym1pc3Npb24gb2YgdGhpcy5hc3NpZ25tZW50LnN1Ym1pc3Npb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChzdWJtaXNzaW9uLmJ1bGsgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBsZXQgYnVsayA9IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdCdWxrIGRvd25sb2FkIG9mICcgKyBzdWJtaXNzaW9uLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvY2wvY291cnNlL3N1Ym1pc3Npb25zLycgKyB0aGlzLmFzc2lnbm1lbnQudGFnICsgJy8nICsgc3VibWlzc2lvbi50YWcsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiAnJyxcclxuICAgICAgICAgICAgICAgIHRvOiAnJyxcclxuICAgICAgICAgICAgICAgIHJhbmdlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF0TGVhc3Q6IE1lbWJlci5TVEFGRlxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgdGhpcy5saW5rcy5wdXNoKGJ1bGspO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBbnkgYWRkaXRpb25hbCBzdWJtaXNzaW9uIGxpbmtzXHJcbiAgICAgICAgICAgIGlmIChzdWJtaXNzaW9uLmxpbmtzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBsaW5rIG9mIHN1Ym1pc3Npb24ubGlua3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjbGljayhsaW5rKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobGluayk7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm9vdCArIGxpbmsudXJsO1xyXG4gICAgICAgIGlmIChsaW5rLmZyb20gIT09IHVuZGVmaW5lZCAmJiBsaW5rLnRvICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChsaW5rLmZyb20udHJpbSgpICE9PSAnJyB8fCBsaW5rLnRvLnRyaW0oKSAhPT0gJycpKSB7XHJcbiAgICAgICAgICB1cmwgKz0gJz9mbT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxpbmsuZnJvbS50cmltKCkpICsgJyZ0bz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxpbmsudG8udHJpbSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICBkaXYuY2wtc3VibWlzc2lvbnMtYnVsayBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgfVxyXG5cclxuICBkaXYuY2wtc3VibWlzc2lvbnMtYnVsayBpbnB1dCB7XHJcbiAgICB3aWR0aDogNWVtO1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gPHNwYW4+XHJcbiAgPHNwYW4gdi1pZj1cImNvdXJzZS5zZWN0aW9ucy5sZW5ndGggPT09IDFcIj57e3NlbGVjdGVkfX08L3NwYW4+XHJcbiAgPHNlbGVjdCB2LWlmPVwiY291cnNlLnNlY3Rpb25zLmxlbmd0aCA+IDFcIiB2LW1vZGVsPVwic2VsZWN0ZWRcIiBAY2hhbmdlPVwiY2hhbmdlU2VjdGlvblwiPlxyXG4gICA8b3B0aW9uIHYtZm9yPVwic2VjdGlvbiBpbiBjb3Vyc2Uuc2VjdGlvbnNcIj57e3NlY3Rpb24uc2VtZXN0ZXJ9fS97e3NlY3Rpb24uaWR9fTwvb3B0aW9uPlxyXG4gIDwvc2VsZWN0PlxyXG5cclxuIDwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY291cnNlOiB0aGlzLiRzdG9yZS5zdGF0ZS5jb3Vyc2UuY291cnNlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IFwiRlMxOC83MzBcIixcclxuICAgICAgICAgICAgICAgIGNoYW5nZVNlY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuc2VsZWN0ZWQuc3BsaXQoJy8nKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW1lc3RlcjogZGF0YVswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogZGF0YVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3NlY3Rpb25zZWxlY3QnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSByZXNwb25zZS5nZXREYXRhKCd1c2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyL3NldCcsIHVzZXIuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdtZW1iZXJzL3Jlc2V0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkuZ28oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIudXNlci5tZW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBtZW1iZXIuc2VtZXN0ZXIgKyAnLycgKyBtZW1iZXIuc2VjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgc2VsZWN0IHtcclxuICAgZm9udC1zaXplOiAwLjk1ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1zdWJtaXNzaW9uXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLnN1Ym1pdFwiIGNsYXNzPVwiXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiFzdWJtaXNzaW9uLm9wZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuPC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInN0YWZmXCIgY2xhc3M9XCJjZW50ZXJib3ggcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Li4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uPC9lbT48L3A+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjb21wb25lbnQgdi1pZj1cInN1Ym1pc3Npb24ub3BlblwiIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN1Ym1pdHRlZCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6c3VibWlzc2lvbnM9XCJzdWJtaXNzaW9uc1wiPjwvc3VibWl0dGVkPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXCIgdi1odG1sPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsXCIgY2xhc3M9XCJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFRleHRWdWUgZnJvbSAnLi9TdWJtaXRUZXh0LnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0UHJvZ3JhbVZ1ZSBmcm9tICcuL1N1Ym1pdFByb2dyYW0udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRJbWFnZVZ1ZSBmcm9tICcuL1N1Ym1pdEltYWdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0VW5rbm93blZ1ZSBmcm9tICcuL1N1Ym1pdFVua25vd24udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXR0ZWRWdWUgZnJvbSAnLi9TdWJtaXR0ZWQudnVlJztcclxuICAgIGltcG9ydCB7VEVYVF9UWVBFU30gZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzdGFmZjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGVyOiAnc3VibWl0LXRleHQnLFxyXG4gICAgICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBzdWJtaXRUZXh0OiBTdWJtaXRUZXh0VnVlLFxyXG4gICAgICAgICAgc3VibWl0UHJvZ3JhbTogU3VibWl0UHJvZ3JhbVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdEltYWdlOiBTdWJtaXRJbWFnZVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFVua25vd246IFN1Ym1pdFVua25vd25WdWUsXHJcbiAgICAgICAgICBzdWJtaXR0ZWQ6IFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdHRoaXMuc3VibWlzc2lvbnMgPSB0aGlzLnN1Ym1pc3Npb24uc3VibWlzc2lvbnM7XHJcblxyXG4gICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcbiAgICAgICAgICB0aGlzLnN0YWZmID0gdXNlci5hdExlYXN0KE1lbWJlci5TVEFGRik7XHJcbiAgICAgICAgICBzd2l0Y2godGhpcy5zdWJtaXNzaW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdwcm9ncmFtJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXByb2dyYW0nO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC10ZXh0JztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LWltYWdlJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC11bmtub3duJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBuZXdTdWJtaXNzaW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG5cdFx0ZGF0YTogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGZpbGVzOiBudWxsLFxyXG5cdFx0XHRcdGFjdGlvbjogbnVsbCxcclxuXHRcdFx0XHRzdWJtaXR0aW5nOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Y29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHRcdFx0dGhpcy5hY3Rpb24gPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YDtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGxvYWQoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRsZXQganNvbiA9IGZyYW1lc1sndXBsb2FkX3RhcmdldF8nICsgdGhpcy5zdWJtaXNzaW9uLnRhZ10uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmlubmVySFRNTDtcclxuXHRcdFx0XHRsZXQgcmVzcG9uc2UgPSBuZXcgdGhpcy4kc2l0ZS5BUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcclxuXHJcblx0XHRcdFx0aWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0XHRcdFx0XHR0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJtaXQoKSB7XHJcblx0XHRcdFx0dGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gcmVmPVwiZm9ybVwiIGNsYXNzPVwiZmlsZVwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbWV0aG9kPVwicG9zdFwiXHJcbiAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCIgOnRhcmdldD1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIEBzdWJtaXQ9XCJzdWJtaXRcIj5cclxuICAgICAgPGxhYmVsPlN1Ym1pdDogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBAY2hhbmdlPVwiZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXCIvPjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBjbGFzcz1cInVwbG9hZFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgRmlsZVwiIC8+XHJcbiAgICAgIDxpZnJhbWUgcmVmPVwiaWZyYW1lXCIgQGxvYWQ9XCJsb2FkXCIgOm5hbWU9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBzcmM9XCJcIiBzdHlsZT1cIndpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyOjBweCBzb2xpZCAjZmZmO2Rpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGZpbGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgIGFjdGlvbjogbnVsbCxcclxuICAgICAgICAgICAgICBzdWJtaXR0aW5nOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy5hY3Rpb24gPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgbG9hZCgpIHtcclxuICAgICAgICAgICAgICBpZighdGhpcy5zdWJtaXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICBsZXQganNvbiA9IGZyYW1lc1sndXBsb2FkX3RhcmdldF8nICsgdGhpcy5zdWJtaXNzaW9uLnRhZ10uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuXHQgICAgICAgICAgICAgIHJlc3BvbnNlID0gbmV3IHRoaXMuJHNpdGUuQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XHJcblx0ICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiRXJyb3IgZHVyaW5nIHN1Ym1pc3Npb25cIik7XHJcbiAgICAgICAgICAgICAgXHRyZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmc1snZm9ybSddLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICA8ZGl2IHJlZj1cImVkaXRvclwiPjwvZGl2PlxyXG4gICAgICA8cD48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kcmVmc1snZWRpdG9yJ107XHJcbiAgICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyB0aGlzLiRzaXRlLkVkaXRvcihlbGVtZW50LCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLnN1Ym1pc3Npb24uaGVpZ2h0LFxyXG4gICAgICAgICAgICAgIGNsYXNzZXM6IFsneWVsbG93LXBhZCddXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBpZih0ZXh0ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCAnWW91IG11c3QgZW50ZXIgc29tZSB0ZXh0IHRvIHN1Ym1pdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQvcGxhaW4nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KGAvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IudGV4dGFyZWEudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PjxwPkhlbGxvPC9wPlxyXG4gICAgPHAgY2xhc3M9XCJzaG91dG91dFwiPlN1Ym1pc3Npb24gdHlwZSA8ZW0+e3tvcHRpb25zLnR5cGV9fTwvZW0+IGlzIG5vdCBzdXBwb3J0ZWQ8L3A+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnb3B0aW9ucyddXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLm1hbnVhbCAhPT0gdHJ1ZVwiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInN1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwibGFyZ2UgY2VudGVyXCI+Tm8gc3VibWlzc2lvbnMsIHlldC48L3A+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlN1Ym1pc3Npb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8dHIgdi1mb3I9XCJzdWJtaXR0ZWQgaW4gc3VibWlzc2lvbnNcIj5cclxuICAgICAgICAgICAgPHRkPjxzdWJtaXR0ZWQtaXRlbSA6dHlwZT1cInN1Ym1pc3Npb24udHlwZVwiIDphc3NpZ250YWc9XCJzdWJtaXNzaW9uLmFzc2lnblRhZ1wiIDp0YWc9XCJzdWJtaXNzaW9uLnRhZ1wiIDpzdWJtaXNzaW9uPVwic3VibWl0dGVkXCIgOmFuYWx5c2lzPVwic3VibWlzc2lvbi5hbmFseXNpc1wiIDp0ZWFtaW5nPVwic3VibWlzc2lvbi50ZWFtaW5nXCIgQHJlc3VsdD0nYW5hbHlzaXNSZXN1bHQnIHYtb246cHJldmlld19pbWc9XCJwcmV2aWV3X2ltZ1wiIHYtb246cHJldmlldz1cInByZXZpZXdlclwiPjwvc3VibWl0dGVkLWl0ZW0+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAndGV4dCdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvbjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAncHJvZ3JhbSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uczwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzPVwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgdi1pZj1cInByZXZpZXdUeHQgIT09IG51bGxcIj57e3ByZXZpZXdUeHR9fTwvcHJlPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIiB2LWh0bWw9XCJwcmV2aWV3VGltZVwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSBjbGFzcz1cImNsLWFuYWx5c2lzXCIgdi1pZj1cInJlc3VsdCAhPT0gbnVsbFwiPnt7cmVzdWx0fX08L3ByZT5cclxuICAgIDxkaXYgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIj5cclxuICAgICAgPGZpZ3VyZSB2LWlmPVwicHJldmlld0ltZyAhPT0gbnVsbFwiIGNsYXNzPVwiY2wtcHJldmlld1wiPjxhIDpocmVmPVwicHJldmlld0ltZ1wiIDp0YXJnZXQ9XCInXycgKyBzdWJtaXNzaW9uLnRhZ1wiPjxpbWcgOnNyYz1cInByZXZpZXdJbWdcIj48L2E+PC9maWd1cmU+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2wtcHJldmlldy10aW1lXCI+e3twcmV2aWV3VGltZX19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLmh0bWwgIT09IHVuZGVmaW5lZFwiIHYtaHRtbD1cInN1Ym1pc3Npb24uaHRtbFwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvKipcclxuICAgKiBDb21wb25lbnQgdGhhdCBkaXNwbGF5cyB0aGUgbGlzdCBvZiBzdWJtaXNzaW9ucy5cclxuICAgKiBAY29uc3RydWN0b3IgU3VibWl0dGVkVnVlXHJcbiAgICovXHJcbiAgaW1wb3J0IFN1Ym1pdHRlZEl0ZW1WdWUgZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nLCAnc3VibWlzc2lvbnMnXSxcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcmV2aWV3VHh0OiBudWxsLFxyXG4gICAgICAgIHByZXZpZXdJbWc6IG51bGwsXHJcbiAgICAgICAgcHJldmlld1RpbWU6IG51bGwsXHJcbiAgICAgICAgcmVzdWx0OiBudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHN1Ym1pdHRlZEl0ZW06IFN1Ym1pdHRlZEl0ZW1WdWVcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgaWYgKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgIHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHt0aGlzLnN1Ym1pc3Npb25zWzBdLmlkfWA7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uc1swXS5kYXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByZXZpZXdUeHQgPSB0aGlzLnN1Ym1pc3Npb24ucHJldmlldy50ZXh0O1xyXG4gICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3LmRhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc3VibWlzc2lvbnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgICBpZiAodGhpcy5zdWJtaXNzaW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3VibWlzc2lvbnNbMF0udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcHJldmlld2VyKHN1Ym1pc3Npb24pIHtcclxuICAgICAgICB0aGlzLnByZXZpZXdUeHQgPSBcIlxcblwiO1xyXG4gICAgICAgIHRoaXMucHJldmlld1RpbWUgPSAnJm5ic3A7JztcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgPT09IG51bGwgPyAnY291cnNlJyA6ICd0ZWFtJztcclxuICAgICAgICB0aGlzLiRzaXRlLmFwaS5nZXQoYC9hcGkvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL2dldC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ30vJHtzdWJtaXNzaW9uLmlkfWAsIHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pc3Npb24gPSByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9uJykuYXR0cmlidXRlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeHQgPSBzdWJtaXNzaW9uLnRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgoc3VibWlzc2lvbi5kYXRlKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXZpZXdfaW1nKHN1Ym1pc3Npb24pIHtcclxuICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgPT09IG51bGwgPyAnY291cnNlJyA6ICd0ZWFtJztcclxuICAgICAgICBpZiAoc3VibWlzc2lvbi50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcclxuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHtzdWJtaXNzaW9uLmlkfWA7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYW5hbHlzaXNSZXN1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImlzVGV4dCgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0VGV4dCgpXCI+e3tkaXNwbGF5KCl9fTwvYT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaXNJbWFnZSgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0XCI+e3tkaXNwbGF5KCl9fTwvYT48bWVudS12dWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiIEBvcGVuPVwic2VsZWN0XCI+PGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJzaG93QW5hbHlzaXMoaXRlbSlcIj48aW1nIDpzcmM9XCJpdGVtLmljb25cIiA6YWx0PVwiaXRlbS5tZW51XCI+IHt7aXRlbS5tZW51fX08L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21lbnUtdnVlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgIDxtZW51LXZ1ZSB2LW9uOm9wZW49XCJzZWxlY3RcIj48YT57e2Rpc3BsYXkoKX19PC9hPjxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiIGFsdD1cIk1lbnVcIj48L2E+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIDpocmVmPVwidG9Eb3dubG9hZFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmcnXCIgYWx0PVwiRG93bmxvYWRcIj4gRG93bmxvYWQ8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBAY2xpY2suc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiICB2LWZvcj1cIml0ZW0gaW4gYW5hbHlzaXNcIj48YSBAY2xpY2sucHJldmVudC5zdG9wPVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG4gIGNvbnN0IE1lbnVWdWUgPSBTaXRlLlNpdGUuTWVudVZ1ZTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IFRFWFRfVFlQRVMgPSBbJ3RleHQvcGxhaW4nLCAndGV4dC9odG1sJ11cclxuICBleHBvcnQgY29uc3QgSU1HX1RZUEVTID0gWydpbWFnZS9wbmcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9naWYnXTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydhc3NpZ250YWcnLCAndGFnJywgJ3N1Ym1pc3Npb24nLCAnYW5hbHlzaXMnLCAndGVhbWluZycsICd0eXBlJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFx0cm9vdDogU2l0ZS5yb290LFxyXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy50b0Rvd25sb2FkID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZG93bmxvYWQvJHt0aGlzLnN1Ym1pc3Npb24uaWR9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgaXNUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09ICdwcm9ncmFtJyAmJiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpc0ltYWdlKCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgIGxldCBkaXNwID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0aGlzLnN1Ym1pc3Npb24uZGF0ZSwgXCJsb25nXCIpO1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5uYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3AgKz0gJzogJyArIHRoaXMuc3VibWlzc2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9uLmJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBcdGRpc3AgKz0gJyBieSAnICsgdGhpcy5zdWJtaXNzaW9uLmJ5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZGlzcDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3X2ltZycsIHRoaXMuc3VibWlzc2lvbik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0FuYWx5c2lzKGFuYWx5c2lzKSB7XHJcblx0ICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9hbmFseXNpcy8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMudGFnfS8ke2FuYWx5c2lzLnRhZ30vJHt0aGlzLnN1Ym1pc3Npb24uaWR9YCwge30pXHJcbiAgICAgICAgICBcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgIFx0ICAgICAgICBcdGNvbnN0IGFuYWx5c2lzUmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbi1hbmFseXNpcycpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHR0aGlzLiRlbWl0KCdyZXN1bHQnLCBhbmFseXNpc1Jlc3VsdCk7XHJcbiAgICAgICAgICBcdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcdCAgICB9KVxyXG4gICAgICAgICAgXHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIFx0ICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTm90IHNjb3BlZCAqL1xcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZm9ybVtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuZGl2LnRvW2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LnRvID4gZGl2W2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxufVxcbmRpdi50byA+IGRpdiBzcGFuLm5vLWVtYWlsW2RhdGEtdi0yZTU0ZTc0Yl0ge1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LnN1YmplY3RbZGF0YS12LTJlNTRlNzRiXSB7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5kaXYuc3ViamVjdCBsYWJlbFtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuZGl2LnN1YmplY3QgaW5wdXRbdHlwZT10ZXh0XVtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwLjJlbSAwIDAgMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHdpZHRoOiAyNWVtO1xcbn1cXG5kaXYuYnV0dG9ucyBpbnB1dFtkYXRhLXYtMmU1NGU3NGJdIHtcXG4gIHdpZHRoOiA2ZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTm90IHNjb3BlZCAqL1xcbmRpdi5jbC1leHRlbnNpb25zIHRhYmxlIHRkIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuZGl2LmNsLWV4dGVuc2lvbnMgdGFibGUgdGQgPiBkaXYgPiBpbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmRpdi5jbC1leHRlbnNpb25zIHRhYmxlIHRkOm50aC1jaGlsZCgxKSxcXG5kaXYuY2wtZXh0ZW5zaW9ucyB0YWJsZSB0ZDpudGgtY2hpbGQoMiksXFxuZGl2LmNsLWV4dGVuc2lvbnMgdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWJ1bGstdXBsb2FkIGZvcm0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQgZmllbGRzZXQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHAge1xcbiAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcXG59XFxuZGl2LmNsLWJ1bGstdXBsb2FkIGZpZWxkc2V0ID4gZGl2ID4gZGl2IHA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW46IDA7XFxufVxcbmRpdi5jbC1idWxrLXVwbG9hZCBmaWVsZHNldCA+IGRpdiA+IGRpdiBwOmxhc3QtY2hpbGQgaW5wdXQge1xcbiAgd2lkdGg6IDYuNWVtO1xcbn1cXG5kaXYuY2wtYnVsay11cGxvYWQtZGxnIHtcXG4gIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYjZHJvcHMtY29tcG9uZW50W2RhdGEtdi0yZmZkYzU4MF0ge1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5kaXYjZHJvcHMtY29tcG9uZW50IHRoW2RhdGEtdi0yZmZkYzU4MF06Zmlyc3QtY2hpbGQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuY2wtc2VjdGlvbi1jb21wb25lbnRbZGF0YS12LWMxOTQ5NGUyXSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMXB4IDAgMCAwO1xcbn1cXG5kaXYuY2wtc2VjdGlvbi1jb21wb25lbnQgPiBzcGFuW2RhdGEtdi1jMTk0OTRlMl0ge1xcbiAgcGFkZGluZzogMCAwLjRlbSAwIDA7XFxufVxcbmRpdi5jbC1zZWN0aW9uLWNvbXBvbmVudCA+IHNwYW5bZGF0YS12LWMxOTQ5NGUyXTpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic2VsZWN0W2RhdGEtdi1hZDMzZDkwMF0ge1xcbiAgZm9udC1zaXplOiAwLjk1ZW07XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuY2wtc3VibWlzc2lvbnMtYnVsayBwIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcbmRpdi5jbC1zdWJtaXNzaW9ucy1idWxrIGlucHV0IHtcXG4gIHdpZHRoOiA1ZW07XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuXG4gICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50Ll9fZXNNb2R1bGUgPyBuZXdDb250ZW50LmRlZmF1bHQgOiBuZXdDb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IG5ld0NvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWFzc2lnbm1lbnRzXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2VjdGlvbi5uYW1lKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9uLmFzc2lnbm1lbnRzLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGNhdGVnb3J5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoY2F0ZWdvcnkubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKGNhdGVnb3J5LmFzc2lnbm1lbnRzLCBmdW5jdGlvbihhc3NpZ25tZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGFzc2lnbm1lbnQudGFnIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoYXNzaWdubWVudC5uYW1lKSArIFwiXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9jbC9jb25zb2xlL2NvdXJzZS9leHRlbnNpb25zL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImV4dGVuc2lvbnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudC5zdWJtaXNzaW9ucyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9jb3Vyc2Uvc3VibWlzc2lvbnMvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInN1Ym1pc3Npb25zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hc3NpZ25tZW50TGlua3MsIGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NpZ25tZW50W2xpbmsucHJvcGVydHldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudFtsaW5rLnByb3BlcnR5XSAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IF92bS5hc3NpZ25tZW50TGluayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsucm91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobGluay5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgIV92bS5jb21wb3NpbmdcbiAgICAgICAgICA/IF9jKFwibWVtYmVyc2ZldGNoZXJcIiwge1xuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZW5zdXJlOiBfdm0uZW5zdXJlKGZldGNoZXIudXNlcnMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmFsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmFsbCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5hbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5hbGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmFsbCA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmFsbCA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFsbCA9ICQkY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFsbENoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJSb2xlXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogdXNlci5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmxhZ3NbdXNlci5pZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmbGFnc1t1c2VyLmlkXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmZsYWdzW3VzZXIuaWRdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5mbGFnc1t1c2VyLmlkXSwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmZsYWdzW3VzZXIuaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmZsYWdzW3VzZXIuaWRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmxhZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRhLmNvbmNhdChbJCR2XSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZsYWdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mbGFncywgdXNlci5pZCwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIm1haWx0bzpcIiArIHVzZXIuZW1haWwgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci5lbWFpbCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgIDEyMTMxNzMwOTBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF9jKFwiZW1haWwtZWRpdG9yXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IF92bS50b1VzZXJzIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNhbmNlbDogX3ZtLmNhbmNlbEVtYWlsLCBkb25lOiBfdm0uZG9uZVNlbmRpbmcgfVxuICAgICAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtXCIsXG4gICAge1xuICAgICAgb246IHtcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJtYXNrLXZ1ZVwiLCB7IGF0dHJzOiB7IG1hc2s6IF92bS5tYXNrIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJTZW5kaW5nIEVtYWlsLi4uXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJUb1xcbiAgICBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5kaXNwbGF5VG8sIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogdXNlci5pZCB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKHVzZXIubmFtZSkgKyBcIlxcbiAgICAgIDxcIiksXG4gICAgICAgICAgICAgIHVzZXIuZW1haWwgPT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vLWVtYWlsXCIgfSwgW192bS5fdihcIm5vIGVtYWlsXCIpXSlcbiAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLmVtYWlsKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiPlxcbiAgICBcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICB0aGlzLnRvLmxlbmd0aCA+IHRoaXMuZGlzcGxheVRvLmxlbmd0aFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiLi4uXCIpXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YmplY3RcIiB9LCBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1YmplY3QgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3ViamVjdCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN1YmplY3RcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3ViamVjdCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5zdWJqZWN0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcImVkaXRvclwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTZW5kXCIgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgdmFsdWU6IFwiQ2FuY2VsXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGNsLWV4dGVuc2lvbnNcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgZmV0Y2hpbmc6IF92bS5leHRlbnNpb25zID09PSBudWxsIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF92bS5leHRlbnNpb25zICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVXNlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUm9sZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRXh0ZW5zaW9uXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChmZXRjaGVyLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSgpKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsYXRwaWNrclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmbGF0LXBpY2tyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IF92bS5mcENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtaW5wdXRcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib24tY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2UoJGV2ZW50LCB1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmV4dGVuc2lvbnNbK3VzZXIubWVtYmVyLmlkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICt1c2VyLm1lbWJlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJleHRlbnNpb25zWyt1c2VyLm1lbWJlci5pZF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVG9nZ2xlIENhbGVuZGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbnMtY2wgaWNvbnMtY2wtY2FsZW5kYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgXCJkYXRhLWNsZWFyXCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy94LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYnVsay11cGxvYWRcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCB7IGF0dHJzOiB7IGlkOiBcImJ1bGtcIiB9IH0sIFtcbiAgICAgIF92bS5fdihcIkJ1bGsgY291cnNlIG1lbWJlcnNoaXAgdXBsb2FkaW5nXCIpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlRoaXMgb3B0aW9uIGFjY2VwdHMgZmlsZXMgaW4gQ1NWIGZvcm1hdCBhcyBwcm9kdWNlZCBieSBpbnN0cnVjdG9yIHN5c3RlbXMuIFwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmdWxsXCIsXG4gICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIsIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLmJ1bGtVcGxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJmaWVsZHNldFwiLCBbXG4gICAgICAgICAgX2MoXCJsZWdlbmRcIiwgW192bS5fdihcIkJ1bGsgVXBsb2FkIEZpbGVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJGaWxlIHRvIHVwbG9hZDogXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJidWxrZmlsZVwiLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYnVsa0ZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiUHJlc3NcIiB9IH0pLFxuICAgICAgX3ZtLl92KFwiIHRvIHVwbG9hZCB0aGUgZmlsZSFcIilcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJkcm9wcy1jb21wb25lbnRcIiB9IH0sIFtcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIlRoZSBmb2xsb3dpbmcgdXNlcnMgYXJlIGluZGljYXRlZCBhcyBkcm9wcGVkIGZyb20gdGhlIHVwbG9hZGVkIGNvdXJzZVxcbiAgcm9sZS4gU2VsZWN0IGFueSB5b3Ugd2lzaCB0byBmbGFnIGFzIGRyb3BwZWQgaW4gdGhlIHN5c3RlbS5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBbXG4gICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFsbCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWxsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmFsbClcbiAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5hbGwsIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICAgIDogX3ZtLmFsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uYWxsLFxuICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmFsbCA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmFsbCA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWxsID0gJCRjXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0FsbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJSb2xlXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uZHJvcHMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdXNlci5kcm9wLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuZHJvcFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheSh1c2VyLmRyb3ApXG4gICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKHVzZXIuZHJvcCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICA6IHVzZXIuZHJvcFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSB1c2VyLmRyb3AsXG4gICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIF92bS4kc2V0KHVzZXIsIFwiZHJvcFwiLCAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRyb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KHVzZXIsIFwiZHJvcFwiLCAkJGMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyLmVtYWlsKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXSlcbiAgICAgICAgICBdKVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFxuICAgICAgICBcIkRyb3BwaW5nIGEgc3R1ZGVudCBkb2VzIG5vdCByZW1vdmUgdGhlbSBmcm9tIHRoZSBzeXN0ZW0sIGl0IG9ubHlcXG4gICAgY2hhbmdlcyB0aGVpciBzdGF0dXMgdG8gXCJcbiAgICAgICksXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCJkcm9wcGVkXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1tZW1iZXItZWRpdG9yIGNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwcmV2LW5leHRcIiwgeyBhdHRyczogeyB1c2VyOiBfdm0uZWRpdHVzZXIgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJmZXRjaGVyXCIsIHsgYXR0cnM6IHsgZmV0Y2hlcjogX3ZtLmZldGNoZXIgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsLWNvbW1vblwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJuZXdcIiwgaWQ6IFwibmV3XCIsIHZhbHVlOiBcIlwiIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZmllbGRzZXRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwibGVnZW5kXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZWdlbmQpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJVc2VyIElEXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXJJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICByZWY6IFwidXNlcmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5pZCAhPT0gXCJuZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIyMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoOiBcIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udXNlcklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXJJZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX3RleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5hbWUgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIobGFzdCwgZmlyc3QpXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZldGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aDogXCIxNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV90ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZldGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg6IFwiMjU0XCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkaW8tc2V0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJvbGVzLCBmdW5jdGlvbihyb2xlT2JqLCBpZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJvbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJvbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJyb2xlXCIsIHR5cGU6IFwicmFkaW9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBfdm0uX3EoX3ZtLnJvbGUsIGlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9sZSA9IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhyb2xlT2JqLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImJ1dHRvblwiLCBbX3ZtLl92KFwiU3VibWl0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0bzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL2NsL2NvbnNvbGUvbWFuYWdlbWVudC9jb3Vyc2UvbWVtYmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZWRpdHVzZXIgIT09IG51bGwgJiYgX3ZtLmlkICE9PSBcIm5ld1wiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJVc2VyIGZpZWxkcyBhcmUgbm90IGVkaXRhYmxlIGluIHRoaXNcXG4gICAgICAgIGZvcm0uIFRvIGdvIHRoZSBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvY2wvY29uc29sZS9tYW5hZ2VtZW50L3VzZXIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdHVzZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJ1c2VyIGVkaXRvciBwYWdlIGZvciBcIiArIF92bS5fcyhfdm0ubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiB0byBlZGl0IHRob3NlIGZpZWxkcy5cIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW19jKFwiZW1cIiwgW192bS5fdihcIlJvbGU6XCIpXSldKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW192bS5fdChcImRlZmF1bHRcIiwgbnVsbCwgeyB1c2VyOiBfdm0udXNlciB9KV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQgY2wtbWVtYmVycy1lZGl0b3JcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLmZldGNoZXIuZmV0Y2hlZFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0udXNlcnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtbWdtdC1vcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS50b1VzZXIodXNlcikgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvcGVuY2lsMTYucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkVkaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsKgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZVVzZXIodXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yb290ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy94LnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS50b1VzZXIodXNlcikgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIudXNlcklkKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBfdm0udG9Vc2VyKHVzZXIpIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5tYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmVzZW50VXNlcih1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2luZm8xNi5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIlZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5tYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImphdmFzY3JpcHQ6O1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmVzZW50VXNlcih1c2VyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModXNlci51c2VySWQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0ubWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OjtcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJlc2VudFVzZXIodXNlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZW1haWwgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgdXNlci5lbWFpbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIuZW1haWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3ModXNlci5yb2xlTmFtZSh0cnVlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZVJlbGF0aXZlVU5JWChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tZW1iZXIuY3JlYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNLURELVlZWVlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc3RhdHMpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IGNvbXAgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBUaGVyZSBhcmUgY3VycmVudGx5IG5vIG1lbWJlcnMgZW5yb2xsZWQgaW4gdGhpcyBzZWN0aW9uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5tYW5hZ2VtZW50ID8gX2MoXCJidWxrLXVwbG9hZFwiKSA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImZldGNoZXJcIiwgeyBhdHRyczogeyBmZXRjaGVyOiBfdm0uZmV0Y2hlciB9IH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJSb2xlXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkNyZWF0ZWRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyByZWY6IFwic3R1ZGVudHMtb25seVwiLCBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0dWRlbnRzLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0dWRlbnRzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICBjaGVja2VkOiBBcnJheS5pc0FycmF5KF92bS5zdHVkZW50cylcbiAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnN0dWRlbnRzLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgIDogX3ZtLnN0dWRlbnRzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uc3R1ZGVudHMsXG4gICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5zdHVkZW50cyA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnN0dWRlbnRzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc3R1ZGVudHMgPSAkJGNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF92bS5zdHVkZW50c09ubHlDaGFuZ2VkXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFN0dWRlbnRzIE9ubHlcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZldGNoZXJcIixcbiAgICAgICAgeyBhdHRyczogeyBmZXRjaGVyOiBfdm0uZmV0Y2hlciwgZmV0Y2hpbmc6IF92bS5mZXRjaGluZyB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIsIG51bGwsIHsgdXNlcnM6IF92bS51c2Vycywgc3R1ZGVudHM6IF92bS5zdHVkZW50cyB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS51c2Vycy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbWVtYmVycyBlbnJvbGxlZCBpbiB0aGlzIHNlY3Rpb24uXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjbC1zZWN0aW9uLWNvbXBvbmVudFwiIH0sXG4gICAgW1xuICAgICAgIV92bS5zaG9ydFxuICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb3Vyc2UubmFtZSkgKyBcIiBcIiArIF92bS5fcyhfdm0uY291cnNlLmRlc2MpKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcInNlY3Rpb24tc2VsZWN0XCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXh0cmFcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtZW1iZXJzZmV0Y2hlclwiLCB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihmZXRjaGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVzZXIuYXRMZWFzdCh1c2VyMS5yb2xlKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3QodXNlcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIxLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3QodXNlcjEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIxLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh1c2VyMS5yb2xlTmFtZSgpKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVsbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibWVtYmVyZmV0Y2hlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5tZW1iZXJpZCwgZmFpbGxpbms6IF92bS5zdWJtaXNzaW9uc0xpbmsgfSxcbiAgICAgICAgICBvbjogeyBmZXRjaGVkOiBfdm0uZmV0Y2hlZCB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZmV0Y2hlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInByZXYtbmV4dFwiLCB7IGF0dHJzOiB7IHVzZXI6IGZldGNoZXIudXNlciB9IH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIGZldGNoZXIudXNlciAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXNzaW9uc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGZldGNoZXIudXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbnRhZzogX3ZtLmFzc2lnbnRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLnN1Ym1pc3Npb25zLCBmdW5jdGlvbihzdWJtaXNzaW9uKSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoX3ZtLl9zKHN1Ym1pc3Npb24ubmFtZSkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN1Ym1pc3Npb24tdnVlXCIsIHsgYXR0cnM6IHsgc3VibWlzc2lvbjogc3VibWlzc2lvbiB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1lbWJlcnNmZXRjaGVyXCIsIHtcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZldGNoZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDbGljayBvbiBhIHVzZXIgdG8gdmlldyBzdWJtaXNzaW9ucyBmb3IgdGhhdCB1c2VyLlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXNzaW9ucy1saW5rc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFzc2lnbm1lbnQ6IF92bS5hc3NpZ25tZW50IH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJVc2VyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJvbGVcIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGZldGNoZXIudXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IF92bS5saW5rICsgdXNlci5tZW1iZXIuaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh1c2VyLnVzZXJJZCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogX3ZtLmxpbmsgKyB1c2VyLm1lbWJlci5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHVzZXIucm9sZU5hbWUoKSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjbC1zdWJtaXNzaW9ucy1idWxrXCIgfSxcbiAgICBfdm0uX2woX3ZtLmxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XG4gICAgICByZXR1cm4gX3ZtLnVzZXIuYXRMZWFzdChsaW5rLmF0TGVhc3QpXG4gICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbGljayhsaW5rKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobGluay50ZXh0KSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIGxpbmsuZnJvbSAhPT0gdW5kZWZpbmVkICYmICFsaW5rLnJhbmdlXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwiRW5hYmxlIFJhbmdlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluay5yYW5nZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL2NsL2ltZy9yYW5nZS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJFbmFibGUgUmFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgbGluay5yYW5nZVxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxpbmsuZnJvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGluay5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBsaW5rLmZyb20gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChsaW5rLCBcImZyb21cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIHRvIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbGluay50byxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGluay50b1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogbGluay50byB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGxpbmssIFwidG9cIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBsaW5rLnJhbmdlXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJFbnRlciBmcm9tL3RvIHJhbmdlIGZvciB1c2VyIGlkLlwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5jb3Vyc2Uuc2VjdGlvbnMubGVuZ3RoID09PSAxXG4gICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2VsZWN0ZWQpKV0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmNvdXJzZS5zZWN0aW9ucy5sZW5ndGggPiAxXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uY2hhbmdlU2VjdGlvblxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvdXJzZS5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwib3B0aW9uXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLnNlbWVzdGVyKSArIFwiL1wiICsgX3ZtLl9zKHNlY3Rpb24uaWQpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjbC1zdWJtaXNzaW9uXCIgfSxcbiAgICBbXG4gICAgICBfdm0uc3VibWlzc2lvbi5zdWJtaXRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5zdWJtaXNzaW9uLm9wZW5cbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IGNvbXAgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc3RhZmZcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5zdWJtaXR0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBuZXdfc3VibWlzc2lvbnM6IF92bS5uZXdTdWJtaXNzaW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24ub3BlblxuICAgICAgICAgICAgICAgID8gX2MoX3ZtLnN1Ym1pdHRlciwge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IG5ld19zdWJtaXNzaW9uczogX3ZtLm5ld1N1Ym1pc3Npb25zIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiwgc3VibWlzc2lvbnM6IF92bS5zdWJtaXNzaW9ucyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN1Ym1pc3Npb24uYWRkaXRpb25hbCkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiLi4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VibWl0OiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVwbG9hZCBGaWxlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgIHJlZjogXCJpZnJhbWVcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IFwiMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZywgc3JjOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgbG9hZDogX3ZtLmxvYWQgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgdGFyZ2V0OiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1Ym1pdDogXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5maWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBuYW1lOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVcGxvYWQgRmlsZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICByZWY6IFwiaWZyYW1lXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWcsIHNyYzogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5sb2FkIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcImRpdlwiLCB7IHJlZjogXCJlZGl0b3JcIiB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiU3VibWl0XCIgfSB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJIZWxsb1wiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic2hvdXRvdXRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJTdWJtaXNzaW9uIHR5cGUgXCIpLFxuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9ucy50eXBlKSldKSxcbiAgICAgIF92bS5fdihcIiBpcyBub3Qgc3VwcG9ydGVkXCIpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uc3VibWlzc2lvbi5tYW51YWwgIT09IHRydWVcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uc3VibWlzc2lvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFyZ2UgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBzdWJtaXNzaW9ucywgeWV0LlwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN1Ym1pc3Npb25zLCBmdW5jdGlvbihzdWJtaXR0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VibWl0dGVkLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5zdWJtaXNzaW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdudGFnOiBfdm0uc3VibWlzc2lvbi5hc3NpZ25UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBfdm0uc3VibWlzc2lvbi50YWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWlzc2lvbjogc3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuYWx5c2lzOiBfdm0uc3VibWlzc2lvbi5hbmFseXNpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtaW5nOiBfdm0uc3VibWlzc2lvbi50ZWFtaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBfdm0uYW5hbHlzaXNSZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld19pbWc6IF92bS5wcmV2aWV3X2ltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBfdm0ucHJldmlld2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcInRleHRcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiBkYXRlIHRvIGRpc3BsYXkgdGhlIHN1Ym1pc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiBmb3Igc3VibWlzc2lvbiBvcHRpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucHJldmlld1R4dCAhPT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcmV2aWV3VHh0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3IHllbGxvdy1wYWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnByZXZpZXdUeHQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5wcmV2aWV3VGltZSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnJlc3VsdCAhPT0gbnVsbFxuICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWFuYWx5c2lzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdCkpXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJldmlld0ltZyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXCJmaWd1cmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaHJlZjogX3ZtLnByZXZpZXdJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlld0ltZyB9IH0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3LXRpbWVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcmV2aWV3VGltZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc3VibWlzc2lvbi5odG1sICE9PSB1bmRlZmluZWRcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3VibWlzc2lvbi5odG1sKSB9IH0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtfYyhcInRoXCIsIFtfdm0uX3YoXCJTdWJtaXNzaW9uc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmlzVGV4dCgpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RUZXh0KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogX3ZtLmlzSW1hZ2UoKVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJtZW51LXZ1ZVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsIG9uOiB7IG9wZW46IF92bS5zZWxlY3QgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJNZW51XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBfdm0udG9Eb3dubG9hZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5hbHlzaXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dBbmFseXNpcyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pY29uLCBhbHQ6IGl0ZW0ubWVudSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVudSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXCJtZW51LXZ1ZVwiLCB7IG9uOiB7IG9wZW46IF92bS5zZWxlY3QgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiYVwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheSgpKSldKSxcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFuYWx5c2lzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dBbmFseXNpcyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pY29uLCBhbHQ6IGl0ZW0ubWVudSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVudSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZkZTE1Yjc5XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZTU0ZTc0YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjAxNDFmMDNlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmU1NGU3NGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmU1NGU3NGImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTEwMDVjODlcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4dGVuc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmY1NDM0OThcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZmZkYzU4MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjZjMzk3YWRkXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZmZGM1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZmZGM1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTU1NWJhMWRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzE5NDk0ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMzkwMGNkMGFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWQzM2Q5MDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5NjAxNjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXNzaWdubWVudHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ5OTYwMTY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5OTYwMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5OTYwMTY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5NjAxNjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDk5NjAxNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bc3NpZ25tZW50c0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5NjAxNjQmXCIiLCJpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG5pbXBvcnQgTWVtYmVyc0VkaXRvckNvbXBvbmVudCBmcm9tICcuL01lbWJlcnMvTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTWVtYmVyRWRpdG9yQ29tcG9uZW50IGZyb20gJy4vTWVtYmVycy9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFNlY3Rpb25Db21wb25lbnQgZnJvbSAnLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBBc3NpZ25tZW50c0NvbXBvbmVudCBmcm9tICcuL0Fzc2lnbm1lbnRzQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBFeHRlbnNpb25zQ29tcG9uZW50IGZyb20gJy4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgU3VibWlzc2lvbnNDb21wb25lbnQgZnJvbSAnLi9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyIGZyb20gJy4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZSc7XHJcbmltcG9ydCBDb3Vyc2VFbWFpbFZ1ZSBmcm9tICcuL0NvdXJzZUVtYWlsLnZ1ZSc7XHJcbmltcG9ydCBTcG9vZmluZ1Z1ZSBmcm9tICcuL1Nwb29maW5nLnZ1ZSc7XHJcblxyXG5pbXBvcnQgU3VibWlzc2lvbnNMaW5rc1Z1ZSBmcm9tICcuL1N1Ym1pc3Npb25zTGlua3MudnVlJztcclxuXHJcbi8qKlxyXG4gKiBDb3Vyc2UgY29uc29sZSBjb21wb25lbnRzXHJcbiAqIEBwYXJhbSBzaXRlIFRoZSBTaXRlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ291cnNlQ29uc29sZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGNvbnN0IENvbnNvbGUgPSBzaXRlLmNvbnNvbGU7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEFzc2lnbm1lbnQgbGlua3MgYXJlIGxpbmtlZCBhZGRlZCB0byB0aGUgYXNzaWdubWVudCBwYWdlIG5leHQgdG8gYW5cclxuICAgIC8vIGFzc2lnbm1lbnQgYnkgYSBzdWJzeXN0ZW0uIFRoaXMgaXMgaG93IFwicXVpelwiIGlzIGFkZGVkIHRvIHNlZSB0aGVcclxuICAgIC8vIHF1aXogc3VibWlzc2lvbnMgZm9yIGFuIGFzc2lnbm1lbnQuXHJcbiAgICAvL1xyXG4gICAgdGhpcy5hc3NpZ25tZW50TGlua3MgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFzc2lnbm1lbnRMaW5rID0gZnVuY3Rpb24ocHJvcGVydHksIG5hbWUsIHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50TGlua3MucHVzaCh7cHJvcGVydHk6IHByb3BlcnR5LCBuYW1lOiBuYW1lLCByb3V0ZTogcm91dGV9KTtcclxuICAgIH1cclxuXHJcbiAgICBDb25zb2xlLnRpdGxlID0gJ0NvdXJzZSBDb25zb2xlJztcclxuXHJcbiAgICBDb25zb2xlLnRhYmxlcy5hZGQoe1xyXG4gICAgICAgIHRpdGxlOiAnQ291cnNlJyxcclxuICAgICAgICBvcmRlcjogMjAsXHJcbiAgICAgICAgYXBpOiAnL2FwaS9jb3Vyc2UvdGFibGVzJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb25zdCBwYWdlID0ge3RpdGxlOiAnQ291cnNlJywgcm91dGU6ICcvY291cnNlJywgb3JkZXI6IDN9O1xyXG4gICAgY29uc3QgcGFnZSA9IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBNZW1iZXIuU1RBRkYsXHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdDb3Vyc2UnLCBvcmRlcjogNX0sXHJcbiAgICAgICAgdGl0bGU6ICdNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICByb3V0ZTogJy9jb3Vyc2UvbWVtYmVycycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9jb3Vyc2UvbWVtYmVycycsIGNvbXBvbmVudDogTWVtYmVyc0VkaXRvckNvbXBvbmVudCwgcHJvcHM6IHttYW5hZ2VtZW50OiBmYWxzZX19XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgQ29uc29sZS5jb21wb25lbnRzLmFkZE9wdGlvbih7XHJcbiAgICAgICAgYXRMZWFzdDogTWVtYmVyLlNUQUZGLFxyXG4gICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgc2VjdGlvbjoge3RpdGxlOiAnQ291cnNlJywgb3JkZXI6IDV9LFxyXG4gICAgICAgIHRpdGxlOiAnQXNzaWdubWVudHMnLFxyXG4gICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgIHJvdXRlOiAnL2NvdXJzZS9hc3NpZ25tZW50cycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9jb3Vyc2UvYXNzaWdubWVudHMnLCBjb21wb25lbnQ6IEFzc2lnbm1lbnRzQ29tcG9uZW50fVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuXHRDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuXHRcdGF0TGVhc3Q6IHt0YWc6ICdjb3Vyc2Utc3Bvb2ZpbmcnLCBkZWZhdWx0OiBNZW1iZXIuVEF9LFxyXG5cdFx0cGFnZTogcGFnZSxcclxuXHRcdHNlY3Rpb246IHt0aXRsZTogJ0NvdXJzZScsIG9yZGVyOiA1fSxcclxuXHRcdHRpdGxlOiAnTWVtYmVyIFNwb29maW5nJyxcclxuXHRcdG9yZGVyOiAzLFxyXG5cdFx0cm91dGU6ICcvY291cnNlL3Nwb29maW5nJyxcclxuXHRcdHJvdXRlczogW1xyXG5cdFx0XHR7cm91dGU6ICcvY291cnNlL3Nwb29maW5nJywgY29tcG9uZW50OiBTcG9vZmluZ1Z1ZX1cclxuXHRcdF1cclxuXHR9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBNZW1iZXIuVEEsXHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdDb3Vyc2UnLCBvcmRlcjogNX0sXHJcbiAgICAgICAgdGl0bGU6ICdFbWFpbCBNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICByb3V0ZTogJy9jb3Vyc2UvZW1haWwnLFxyXG4gICAgICAgIHJvdXRlczogW1xyXG4gICAgICAgICAgICB7cm91dGU6ICcvY291cnNlL2VtYWlsJywgY29tcG9uZW50OiBDb3Vyc2VFbWFpbFZ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcblxyXG5cdENvbnNvbGUuY29tcG9uZW50cy5hZGRPcHRpb24oe1xyXG4gICAgICAgIGF0TGVhc3Q6IE1lbWJlci5BRE1JTixcclxuICAgICAgICBwYWdlOiB7dGl0bGU6ICdNYW5hZ2VtZW50Jywgcm91dGU6ICcvbWFuYWdlbWVudCcsIG9yZGVyOiAxMH0sXHJcbiAgICAgICAgc2VjdGlvbjoge3RpdGxlOiAnQ291cnNlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdNZW1iZXJzJyxcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L2NvdXJzZS9tZW1iZXJzJyxcclxuICAgICAgICByb3V0ZXM6IFtcclxuICAgICAgICAgICAge3JvdXRlOiAnL21hbmFnZW1lbnQvY291cnNlL21lbWJlcnMnLCBuYW1lOiAnbWVtYmVycycsIGNvbXBvbmVudDogTWVtYmVyc0VkaXRvckNvbXBvbmVudCwgcHJvcHM6IHttYW5hZ2VtZW50OiB0cnVlfX0sXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L2NvdXJzZS9tZW1iZXIvOmlkJywgbmFtZTogJ21lbWJlcicsIGNvbXBvbmVudDogTWVtYmVyRWRpdG9yQ29tcG9uZW50LCBwcm9wczogdHJ1ZX1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBDb25zb2xlLmNvbXBvbmVudHMuYWRkUm91dGVzKFtcclxuICAgICAgICB7cm91dGU6ICcvY291cnNlL2V4dGVuc2lvbnMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogRXh0ZW5zaW9uc0NvbXBvbmVudCwgcHJvcHM6IHRydWV9LFxyXG4gICAgICAgIHtyb3V0ZTogJy9jb3Vyc2Uvc3VibWlzc2lvbnMvOmFzc2lnbnRhZycsIGNvbXBvbmVudDogU3VibWlzc2lvbnNDb21wb25lbnQsIHByb3BzOiB0cnVlfSxcclxuICAgICAgICB7cm91dGU6ICcvY291cnNlL3N1Ym1pc3Npb25zLzphc3NpZ250YWcvOm1lbWJlcmlkJywgbmFtZTogJ3N1Ym1pc3Npb25zJywgY29tcG9uZW50OiBTdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIsIHByb3BzOiB0cnVlfVxyXG4gICAgXSk7XHJcblxyXG5cclxuICAgIENvbnNvbGUuY29tcG9uZW50cy5hZGROYXYyKFNlY3Rpb25Db21wb25lbnQsIDEwKTtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gRXhwb3J0c1xyXG4gICAgLy9cclxuICAgIHRoaXMuU3VibWlzc2lvbnNMaW5rc1Z1ZSA9IFN1Ym1pc3Npb25zTGlua3NWdWU7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRlODBjYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlNGU4MGNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlNGU4MGNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlNGU4MGNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU0ZTgwY2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGU0ZTgwY2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9Db3Vyc2VFbWFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db3Vyc2VFbWFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ291cnNlRW1haWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvdXJzZUVtYWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTRlODBjYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTRlNzRiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlNTRlNzRiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmU1NGU3NGJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZTU0ZTc0YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZTU0ZTc0YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZTU0ZTc0YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlNTRlNzRiJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlNTRlNzRiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRW1haWxFZGl0b3JDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRW1haWxFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZTU0ZTc0YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtYWlsRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlNTRlNzRiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbWFpbEVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmU1NGU3NGImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4dGVuc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWNmZGEyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V4dGVuc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDdhY2ZkYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDdhY2ZkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDdhY2ZkYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V4dGVuc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3YWNmZGEyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ3YWNmZGEyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvRXh0ZW5zaW9uc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHRlbnNpb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXh0ZW5zaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDdhY2ZkYTImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1NjVjMzY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDU2NWMzNjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDU2NWMzNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDU2NWMzNjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1NjVjMzY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q1NjVjMzY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1bGtVcGxvYWRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CdWxrVXBsb2FkQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNTY1YzM2NiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmZmRjNTgwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmZmRjNTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmZmZGM1ODBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZmZkYzU4MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZmZkYzU4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZmZkYzU4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmZmRjNTgwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJmZmRjNTgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvTWVtYmVycy9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJEcm9wc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmZmRjNTgwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRHJvcHNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmZmZGM1ODAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckRyb3BzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmZkYzU4MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjBlYTUxOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZW1iZXJFZGl0b3JDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjBlYTUxOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjBlYTUxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjBlYTUxOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjBlYTUxOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZjBlYTUxOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckVkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjBlYTUxOSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE5YTU1YzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YTlhNTVjNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YTlhNTVjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YTlhNTVjNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE5YTU1YzYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGE5YTU1YzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhOWE1NWM2JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWMyMmE3OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U1YzIyYTc4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U1YzIyYTc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U1YzIyYTc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWMyMmE3OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlNWMyMmE3OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRWRpdG9yQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0VkaXRvckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTVjMjJhNzgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWFiNDRkMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2VhYjQ0ZDInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2VhYjQ0ZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2VhYjQ0ZDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWFiNDRkMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZWFiNDRkMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL01lbWJlcnMvTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW1iZXJzRmV0Y2hlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVtYmVyc0ZldGNoZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYWI0NGQyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzllYWRkOGQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzM5ZWFkZDhkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM5ZWFkZDhkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM5ZWFkZDhkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QcmV2TmV4dE1lbWJlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzllYWRkOGQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzllYWRkOGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9NZW1iZXJzL1ByZXZOZXh0TWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJldk5leHRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ByZXZOZXh0TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWVhZGQ4ZCZcIiIsImNvbnN0IExPQ0FMX1NUT1JBR0VfU1RVREVOVFNfT05MWSA9ICdjbF9zdHVkZW50c19vbmx5JztcclxuXHJcbi8qKlxyXG4gKiBJdGVtIGluIGxvY2FsIHN0b3JhZ2UgdGhhdCBtYWludGFpbnMgdGhlIHN0YXRlIG9mXHJcbiAqIFwic3R1ZGVudHMgb25seVwiIGluIHRoZSBjb25zb2xlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBTdHVkZW50c09ubHkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuU3R1ZGVudHNPbmx5LmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblx0bGV0IHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFkpO1xyXG5cdHJldHVybiBzID09PSAneWVzJztcclxufVxyXG5cclxuU3R1ZGVudHNPbmx5LnNldCA9IGZ1bmN0aW9uKHN0dWRlbnRzKSB7XHJcblx0Y29uc3QgbG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NUVURFTlRTX09OTFksIHN0dWRlbnRzID8gJ3llcycgOiAnbm8nKTtcclxuXHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMxOTQ5NGUyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzE5NDk0ZTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMTk0OTRlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMTk0OTRlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMTk0OTRlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzE5NDk0ZTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzE5NDk0ZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQ29uc29sZS9TZWN0aW9uQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YzE5NDk0ZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxOTQ5NGUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMTk0OTRlMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyODRjNGIwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nwb29maW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1Mjg0YzRiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1Mjg0YzRiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1Mjg0YzRiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyODRjNGIwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUyODRjNGIwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3Bvb2ZpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TcG9vZmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3Bvb2ZpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyODRjNGIwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjFlMTMyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzgwZjFlMTMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzgwZjFlMTMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzgwZjFlMTMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwZjFlMTMyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgwZjFlMTMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL0NvbnNvbGUvU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MGYxZTEzMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRkZDUwNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxZmRkZDUwNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZmRkZDUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZmRkZDUwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbnNBc3NpZ25tZW50TWVtYmVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZmRkZDUwNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxZmRkZDUwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0Fzc2lnbm1lbnRNZW1iZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWZkZGQ1MDYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTYzMmNlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXNzaW9uc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcRHJvcGJveFxcXFxDb3Vyc2VzXFxcXENTRTMyMFxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzk2MzJjZTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzk2MzJjZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzk2MzJjZTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTYzMmNlNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczOTYzMmNlNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOTYzMmNlNiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTY3NDRiNmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk2NzQ0YjZlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk2NzQ0YjZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk2NzQ0YjZlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05Njc0NGI2ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5Njc0NGI2ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9Db25zb2xlL1N1Ym1pc3Npb25zTGlua3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbnNMaW5rcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uc0xpbmtzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb25zTGlua3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2NzQ0YjZlJlwiIiwiXHJcbmltcG9ydCB7Q291cnNlQ29uc29sZX0gZnJvbSAnLi9Db3Vyc2VDb25zb2xlJztcclxuXHJcbmltcG9ydCBQcmV2TmV4dE1lbWJlclZ1ZSBmcm9tICcuL01lbWJlcnMvUHJldk5leHRNZW1iZXIudnVlJztcclxuaW1wb3J0IE1lbWJlckZldGNoZXJDb21wb25lbnRWdWUgZnJvbSAnLi9NZW1iZXJzL01lbWJlckZldGNoZXJDb21wb25lbnQudnVlJztcclxuaW1wb3J0IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSBmcm9tICcuL1N1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTWVtYmVyc0ZldGNoZXJDb21wb25lbnRWdWUgZnJvbSAnLi9NZW1iZXJzL01lbWJlcnNGZXRjaGVyQ29tcG9uZW50LnZ1ZSc7XHJcbmltcG9ydCBTdWJtaXNzaW9uc0xpbmtzVnVlIGZyb20gJy4vU3VibWlzc2lvbnNMaW5rcy52dWUnO1xyXG5cclxuU2l0ZS5QcmV2TmV4dE1lbWJlclZ1ZSA9IFByZXZOZXh0TWVtYmVyVnVlO1xyXG5TaXRlLk1lbWJlckZldGNoZXJDb21wb25lbnRWdWUgPSBNZW1iZXJGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5TaXRlLlN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZSA9IFN1Ym1pc3Npb25zQXNzaWdubWVudE1lbWJlckNvbXBvbmVudFZ1ZTtcclxuU2l0ZS5NZW1iZXJzRmV0Y2hlckNvbXBvbmVudFZ1ZSA9IE1lbWJlcnNGZXRjaGVyQ29tcG9uZW50VnVlO1xyXG5TaXRlLlN1Ym1pc3Npb25zTGlua3NWdWUgPSBTdWJtaXNzaW9uc0xpbmtzVnVlO1xyXG5cclxubGV0IGNvdXJzZUNvbnNvbGUgPSBuZXcgQ291cnNlQ29uc29sZShTaXRlLnNpdGUpO1xyXG5TaXRlLnNpdGUuY29uc29sZS5jb3Vyc2UgPSBjb3Vyc2VDb25zb2xlO1xyXG4iLCJpbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xyXG5cclxuLyoqXHJcbiAqIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IE1lbWJlciA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIE1lbWJlcnNoaXAuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgcm9sZSA9ICdHJztcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0ganNvbi5zZW1lc3RlcjtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0ganNvbi5jcmVhdGVkICE9PSB1bmRlZmluZWQgPyBqc29uLmNyZWF0ZWQgOiBudWxsO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IG51bGw7ICAgIC8vIFdoZW4gdXNlciB3YXMgY3JlYXRlZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVUxBID0gJ0wnOyAgICAgICAvLy88IFVuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50XHJcbk1lbWJlci5UQSA9ICdFJzsgICAgICAgIC8vLzwgVGVhY2hpbmcgYXNzaXN0YW50XHJcbk1lbWJlci5JTlNUUlVDVE9SID0gJ0knOyAgICAvLy88IENvdXJzZSBpbnN0cnVjdG9yXHJcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cclxuXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCByb2xlcyA9IHt9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tNZW1iZXIuRFJPUFBFRF0gPSB7bmFtZTogJ0Ryb3BwZWQnLCBwcmlvcml0eTogMn07XHJcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RVREVOVF0gPSB7bmFtZTogJ1N0dWRlbnQnLCBwcmlvcml0eTogNH07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RBRkZdID0ge25hbWU6ICdTdGFmZicsIHByaW9yaXR5OiA1LCBza2lwOiB0cnVlfTtcclxuXHRyb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG5cdHJvbGVzW01lbWJlci5VTEFdID0ge25hbWU6ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVUxBJywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdUQScsIHByaW9yaXR5OiA4fTtcclxuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA5fTtcclxuICAgIHJvbGVzW01lbWJlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDEwMH07XHJcblxyXG4gICAgcmV0dXJuIHJvbGVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWFkMzNkOTAwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYWQzM2Q5MDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhZDMzZDkwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhZDMzZDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhZDMzZDkwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VjdGlvblNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YWQzM2Q5MDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYWQzM2Q5MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlY3Rpb25TZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWQzM2Q5MDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWFkMzNkOTAwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWN0aW9uU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZDMzZDkwMCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNWY0NjYwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTVmNDY2MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMmI2MjBjMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMmI2MjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMmI2MjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyYjYyMGMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNhYTFlNTcwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNhYTFlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNhYTFlNTcwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYWExZTU3MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxMWQwYTk5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMTFkMGE5OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA2ZmQ0ODBlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2ZmQ0ODBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2ZmQ0ODBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNmZkNDgwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQyNGRhZDc3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQyNGRhZDc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQyNGRhZDc3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQyNGRhZDc3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MDY5NDNhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTA2OTQzYWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBIG1lbWJlcnNoaXAgYXNzb2NpYXRlZCB3aXRoIGEgdXNlci5cclxuICpcclxuICogVGhpcyBpcyBhIGJhc2Ugb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmhlcml0ZWQgYnlcclxuICogYWN0dWFsIG1lbWJlcnNoaXAgb2JqZWN0cy5cclxuICovXHJcblxyXG52YXIgTWVtYmVyc2hpcCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vLyBUaGUgVXNlciBvYmplY3QgZm9yIHRoaXMgbWVtYmVyc2hpcFxyXG4gICAgdGhpcy51c2VyID0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IHtNZW1iZXJzaGlwfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==