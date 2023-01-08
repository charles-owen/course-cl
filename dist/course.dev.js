"use strict";
(self["webpackChunkcse335"] = self["webpackChunkcse335"] || []).push([["Course"],{

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Members_Member__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue */ "./vendor/cl/course/js/Submission/SubmitText.vue");
/* harmony import */ var _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmitProgram.vue */ "./vendor/cl/course/js/Submission/SubmitProgram.vue");
/* harmony import */ var _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubmitImage.vue */ "./vendor/cl/course/js/Submission/SubmitImage.vue");
/* harmony import */ var _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmitUnknown.vue */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue");
/* harmony import */ var _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Submitted.vue */ "./vendor/cl/course/js/Submission/Submitted.vue");
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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
    this.staff = user.atLeast(_Members_Member__WEBPACK_IMPORTED_MODULE_0__.Member.STAFF);
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['submission'],
  emits: ['new_submissions'],
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['submission'],
  emits: ['new_submissions'],
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
        console.log(json);
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['submission'],
  emits: ['new_submissions'],
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['options']
});

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue */ "./vendor/cl/course/js/Submission/SubmittedItem.vue");
/**
 * Component that displays the list of submissions.
 * @constructor SubmittedVue
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMG_TYPES": () => (/* binding */ IMG_TYPES),
/* harmony export */   "TEXT_TYPES": () => (/* binding */ TEXT_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//  import MenuVue from 'site-cl/js/UI/Menu.vue';
var MenuVue = Site.Site.MenuVue;
var TEXT_TYPES = ['text/plain', 'text/html'];
var IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['assigntag', 'tag', 'submission', 'analysis', 'teaming', 'type'],
  emits: ['preview', 'preview_img', 'result'],
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

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "cl-submission"
};
var _hoisted_2 = {
  key: 0,
  "class": ""
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "centerbox comp center"
}, "This assignment is not open for submissions.", -1 /* HOISTED */);
var _hoisted_5 = {
  key: 0,
  "class": "centerbox primary"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, "...Staff only for submission testing...")], -1 /* HOISTED */);
var _hoisted_7 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_submitted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("submitted");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.submission.submit ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [!$props.submission.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [_hoisted_4, _ctx.staff ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [_hoisted_6, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.submitter), {
    submission: $props.submission,
    onNew_submissions: $options.newSubmissions
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["submission", "onNew_submissions"]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.submission.open ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(_ctx.submitter), {
    key: 1,
    submission: $props.submission,
    onNew_submissions: $options.newSubmissions
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, ["submission", "onNew_submissions"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_submitted, {
    submission: $props.submission,
    submissions: _ctx.submissions
  }, null, 8 /* PROPS */, ["submission", "submissions"]), $props.submission.additional !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    innerHTML: $props.submission.additional,
    "class": ""
  }, null, 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["action", "target"];
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "upload",
  type: "submit",
  name: "submit",
  value: "Upload File"
}, null, -1 /* HOISTED */);
var _hoisted_3 = ["name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    ref: "form",
    "class": "file",
    enctype: "multipart/form-data",
    method: "post",
    action: _ctx.action,
    target: 'upload_target_' + $props.submission.tag,
    onSubmit: _cache[2] || (_cache[2] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submit: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    name: "file",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.files = $event.target.files;
    })
  }, null, 32 /* HYDRATE_EVENTS */)]), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    ref: "iframe",
    onLoad: _cache[1] || (_cache[1] = function () {
      return $options.load && $options.load.apply($options, arguments);
    }),
    name: 'upload_target_' + $props.submission.tag,
    src: "",
    style: {
      "width": "0",
      "height": "0",
      "border": "0px solid #fff",
      "display": "none"
    }
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["action", "target"];
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  "class": "upload",
  type: "submit",
  name: "submit",
  value: "Upload File"
}, null, -1 /* HOISTED */);
var _hoisted_3 = ["name"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    ref: "form",
    "class": "file",
    enctype: "multipart/form-data",
    method: "post",
    action: _ctx.action,
    target: 'upload_target_' + $props.submission.tag,
    onSubmit: _cache[2] || (_cache[2] = function () {
      return $options.submit && $options.submit.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submit: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    name: "file",
    onChange: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.files = $event.target.files;
    })
  }, null, 32 /* HYDRATE_EVENTS */)]), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("iframe", {
    ref: "iframe",
    onLoad: _cache[1] || (_cache[1] = function () {
      return $options.load && $options.load.apply($options, arguments);
    }),
    name: 'upload_target_' + $props.submission.tag,
    src: "",
    style: {
      "width": "0",
      "height": "0",
      "border": "0px solid #fff",
      "display": "none"
    }
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3)], 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  ref: "editor"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "submit",
  value: "Submit"
})], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    method: "post",
    onSubmit: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.submit && $options.submit.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, null, 512 /* NEED_PATCH */), _hoisted_2], 32 /* HYDRATE_EVENTS */)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Hello", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "shoutout"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Submission type "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("em", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.options.type), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" is not supported")])]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0
};
var _hoisted_2 = {
  key: 0,
  "class": "large center"
};
var _hoisted_3 = {
  "class": "small"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Submissions")], -1 /* HOISTED */);
var _hoisted_5 = {
  key: 0,
  "class": "center"
};
var _hoisted_6 = {
  key: 1,
  "class": "center"
};
var _hoisted_7 = {
  key: 2,
  "class": "center"
};
var _hoisted_8 = {
  key: 3
};
var _hoisted_9 = {
  key: 0,
  "class": "cl-preview yellow-pad"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  key: 1,
  "class": "cl-analysis"
};
var _hoisted_12 = {
  key: 2
};
var _hoisted_13 = {
  key: 0,
  "class": "cl-preview"
};
var _hoisted_14 = ["href", "target"];
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  "class": "cl-preview-time"
};
var _hoisted_17 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_submitted_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("submitted-item");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$props.submission.manual !== true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.submissions.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_2, "No submissions, yet.")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_3, [_hoisted_4, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.submissions, function (submitted) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_submitted_item, {
      type: $props.submission.type,
      assigntag: $props.submission.assignTag,
      tag: $props.submission.tag,
      submission: submitted,
      analysis: $props.submission.analysis,
      teaming: $props.submission.teaming,
      onResult: $options.analysisResult,
      onPreview_img: $options.preview_img,
      onPreview: $options.previewer
    }, null, 8 /* PROPS */, ["type", "assigntag", "tag", "submission", "analysis", "teaming", "onResult", "onPreview_img", "onPreview"])])]);
  }), 256 /* UNKEYED_FRAGMENT */))]), $props.submission.type === 'text' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_5, "Click on any submission date to display the submission")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.submission.type === 'program' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_6, "Click on any submission for submission options")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.submission.type === 'image' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_7, "Click on any submission to view and for submission options")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.previewTxt !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [_ctx.previewTxt !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("pre", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.previewTxt), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "cl-preview-time",
    innerHTML: _ctx.previewTime
  }, null, 8 /* PROPS */, _hoisted_10)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.result !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("pre", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.result), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.previewImg !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [_ctx.previewImg !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("figure", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: _ctx.previewImg,
    target: '_' + $props.submission.tag
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: _ctx.previewImg
  }, null, 8 /* PROPS */, _hoisted_15)], 8 /* PROPS */, _hoisted_14)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.previewTime), 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.submission.html !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 3,
    innerHTML: $props.submission.html
  }, null, 8 /* PROPS */, _hoisted_17)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

/***/ }),

/***/ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./.yarn/cache/vue-npm-3.2.45-06b4b60efe-df60ca80cb.zip/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["src"];
var _hoisted_2 = ["href"];
var _hoisted_3 = ["src"];
var _hoisted_4 = ["onClick"];
var _hoisted_5 = ["src", "alt"];
var _hoisted_6 = {
  "class": "float-right"
};
var _hoisted_7 = ["src"];
var _hoisted_8 = ["href"];
var _hoisted_9 = ["src"];
var _hoisted_10 = ["onClick"];
var _hoisted_11 = ["onClick"];
var _hoisted_12 = ["src", "alt"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_menu_vue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("menu-vue");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [$options.isText() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      return $options.selectText();
    }, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display()), 1 /* TEXT */)) : $options.isImage() ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.select && $options.select.apply($options, arguments);
    }, ["prevent"]))
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_menu_vue, {
    "class": "float-right",
    onOpen: $options.select
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.root + '/vendor/cl/site/img/menubars.png',
        alt: "Menu"
      }, null, 8 /* PROPS */, _hoisted_1)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: _ctx.toDownload
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.root + '/vendor/cl/site/img/download.png',
        alt: "Download"
      }, null, 8 /* PROPS */, _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Download")], 8 /* PROPS */, _hoisted_2)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.analysis, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.showAnalysis(item);
          }, ["prevent"])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.icon,
          alt: item.menu
        }, null, 8 /* PROPS */, _hoisted_5), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.menu), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_4)]);
      }), 256 /* UNKEYED_FRAGMENT */))])];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOpen"])], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_menu_vue, {
    key: 2,
    onOpen: $options.select
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.display()), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.root + '/vendor/cl/site/img/menubars.png',
        alt: "Menu"
      }, null, 8 /* PROPS */, _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: _ctx.toDownload
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: _ctx.root + '/vendor/cl/site/img/download.png',
        alt: "Download"
      }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Download")], 8 /* PROPS */, _hoisted_8)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.analysis, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.showAnalysis(item);
          }, ["stop"])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.showAnalysis(item);
          }, ["prevent", "stop"])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: item.icon,
          alt: item.menu
        }, null, 8 /* PROPS */, _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.menu), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_11)], 8 /* PROPS */, _hoisted_10);
      }), 256 /* UNKEYED_FRAGMENT */))])];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onOpen"]))]);
}

/***/ }),

/***/ "./vendor/cl/course/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/course/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony import */ var _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/CourseFactory */ "./vendor/cl/course/js/CourseFactory.js");
/**
 * @file
 */


Site.SectionStatus = _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__.SectionStatus;
Site.Member = _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__.Member;

if (!Site.Course) {
  // Use the factory to create the Course object
  var Course = _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__.CourseFactory.create(Site);
  Site.Course = Course;
}

/***/ }),

/***/ "./vendor/cl/course/js/Course.js":
/*!***************************************!*\
  !*** ./vendor/cl/course/js/Course.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseFactory": () => (/* binding */ CourseFactory)
/* harmony export */ });
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
  var course = new _Course__WEBPACK_IMPORTED_MODULE_0__.Course();
  site.Course = course;

  //
  // Modify User to add the ability to instantiate
  // an appropriate Member object
  //
  Site.User.instantiateMember = function (data) {
    if (data.member !== null) {
      return new _Members_Member__WEBPACK_IMPORTED_MODULE_1__.Member(data.member);
    } else {
      return null;
    }
  };
  var StoreModuleUsers = site.StoreModuleUsers;

  //
  // Install the course store modules
  //
  var store = site.store;
  if (store !== undefined) {
    store.registerModule('course', _State_StoreModuleCourse__WEBPACK_IMPORTED_MODULE_2__.StoreModuleCourse);
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
    }

    //
    // We have modified the User object so that it will know
    // how to attach a membership. This means we must reload
    // the user information so it can create a new object
    //
    if ((en = document.getElementById('cl-user')) !== null) {
      store.commit('user/set', JSON.parse(en.textContent));
    }
  });
  site.start(function () {
    _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__.SectionSelector.install(site);
    _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__.Submission.install(site);
    _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__.ErrorHelp.install(site);
    _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__.SpoofingRestore.install(site);
  });
  site.SectionStatus = _SectionStatus__WEBPACK_IMPORTED_MODULE_7__.SectionStatus;
  site.Member = _Members_Member__WEBPACK_IMPORTED_MODULE_1__.Member;
  return course;
};

/***/ }),

/***/ "./vendor/cl/course/js/ErrorHelp/ErrorHelp.js":
/*!****************************************************!*\
  !*** ./vendor/cl/course/js/ErrorHelp/ErrorHelp.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHelp": () => (/* binding */ ErrorHelp)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Member": () => (/* binding */ Member)
/* harmony export */ });
/* harmony import */ var _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../users/js/Users/Membership.js */ "./vendor/cl/users/js/Users/Membership.js");


/**
 * Member of a course
 * Attaches to a user Object
 * @constructor
 */
var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__.Membership.call(this);
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
Member.prototype = Object.create(_users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__.Membership.prototype);
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
};

// The possible member roles
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Assignment": () => (/* binding */ Assignment)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentCategory": () => (/* binding */ AssignmentCategory)
/* harmony export */ });
/* harmony import */ var _Assignment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignment */ "./vendor/cl/course/js/Models/Assignment.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var AssignmentCategory = function AssignmentCategory(data) {
  this.tag = data.tag;
  this.name = data.name;
  this.grading = data.grading !== undefined ? data.grading : null;
  this.assignments = [];
  this.assignmentsByTag = [];
  var _iterator = _createForOfIteratorHelper(data.assignments),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var assign = _step.value;
      var assignment = new _Assignment__WEBPACK_IMPORTED_MODULE_0__.Assignment(assign);
      this.assignments.push(assignment);
      this.assignmentsByTag[assignment.tag] = assignment;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Assignments": () => (/* binding */ Assignments)
/* harmony export */ });
/* harmony import */ var _AssignmentCategory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentCategory */ "./vendor/cl/course/js/Models/AssignmentCategory.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var Assignments = function Assignments(data) {
  this.categories = [];
  var _iterator = _createForOfIteratorHelper(data.categories),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var category = _step.value;
      this.categories.push(new _AssignmentCategory__WEBPACK_IMPORTED_MODULE_0__.AssignmentCategory(category));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  this.getAssignment = function (tag) {
    var _iterator2 = _createForOfIteratorHelper(this.categories),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var category = _step2.value;
        var assignment = category.getAssignment(tag);
        if (assignment !== null) {
          return assignment;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return null;
  };
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/Course.js":
/*!**********************************************!*\
  !*** ./vendor/cl/course/js/Models/Course.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course)
/* harmony export */ });
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Section */ "./vendor/cl/course/js/Models/Section.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
  var _iterator = _createForOfIteratorHelper(data.sections),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var section = _step.value;
      var s = new _Section__WEBPACK_IMPORTED_MODULE_0__.Section(section);
      this.sectionsById[section.id] = s;
      this.sections.push(s);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/Models/Section.js":
/*!***********************************************!*\
  !*** ./vendor/cl/course/js/Models/Section.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _Assignments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assignments */ "./vendor/cl/course/js/Models/Assignments.js");

var Section = function Section(data) {
  this.id = data.id;
  this.semester = data.semester;
  this.type = data.type;
  this.assignments = new _Assignments__WEBPACK_IMPORTED_MODULE_0__.Assignments(data.assignments);
  this.getAssignment = function (tag) {
    return this.assignments.getAssignment(tag);
  };
};

/***/ }),

/***/ "./vendor/cl/course/js/SectionSelectors/SectionSelector.js":
/*!*****************************************************************!*\
  !*** ./vendor/cl/course/js/SectionSelectors/SectionSelector.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionSelector": () => (/* binding */ SectionSelector)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./.yarn/__virtual__/vue-router-virtual-86be67a67e/0/cache/vue-router-npm-4.1.6-ccab7109e1-c7f0156ac0.zip/node_modules/vue-router/dist/vue-router.mjs");


/**
 * The section selector page /cl/sectionselector
 * @param element Page element (#cl-section-selector)
 * @param site Site object
 * @constructor
 */
var SectionSelector = function SectionSelector(element, site) {
  var VueHelper = site.VueHelper;
  var info = JSON.parse(element.textContent);
  var sections = info.sections;
  var before = info.before;
  var after = info.after;
  var template = "\n<div id=\"cl-section-selector\">\n  <site-header :title=\"title\"></site-header>\n    <div class=\"content\">\n      <div v-html=\"before\"></div>\n        <div class=\"centerbox cl-selector\">\n          <p v-for=\"section in sections\"><button @click.prevent=\"select(section)\">{{section.course}} {{section.nice}} Section {{section.section}}</button></p>\n        </div>\n       <div class=\"left\" v-html=\"after\"></div>\n     </div>\n   <site-footer></site-footer>\n</div>";
  var Header = site.info.header.component();
  var Footer = site.info.footer.component();
  var Empty = {
    template: '<div></div>'
  };
  var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
    history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHistory)(),
    // '/:pathMatch(.*)'
    routes: [{
      path: '/:pathMatch(.*)',
      name: 'any',
      component: Empty
    }]
  });
  var app = VueHelper.createApp({
    data: function data() {
      return {
        title: 'Section Selector',
        before: before,
        after: after,
        sections: sections
      };
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
    },
    methods: {
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
    }
  });
  app.config.globalProperties.$site = site;
  app.use(router);
  router.isReady().then(function () {
    VueHelper.mount(app, element);
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionStatus": () => (/* binding */ SectionStatus)
/* harmony export */ });
/**
 * Constants that represent SectionStatus possible values.
 * @constructor
 */
var SectionStatus = function SectionStatus() {};

// Constants must match those in SectionStatus.php
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreModuleCourse": () => (/* binding */ StoreModuleCourse)
/* harmony export */ });
/* harmony import */ var _Models_Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Course */ "./vendor/cl/course/js/Models/Course.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
      state.course = new _Models_Course__WEBPACK_IMPORTED_MODULE_0__.Course(data);
    },
    setStaff: function setStaff(state, data) {
      var staff = {};
      var _iterator = _createForOfIteratorHelper(data),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          var user = new Site.User(d);
          staff[user.member.id] = user;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      state.staff = staff;
    }
  },
  getters: {
    section: function section(state) {
      return function (semester, sectionId) {
        var _iterator2 = _createForOfIteratorHelper(state.course.sections),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var section = _step2.value;
            if (section.semester === semester && section.id === sectionId) {
              return section;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return null;
      };
    },
    assignment: function assignment(state, getters) {
      return function (semester, sectionId, assignTag) {
        var _iterator3 = _createForOfIteratorHelper(state.course.sections),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var section = _step3.value;
            if (section.semester === semester && section.id === sectionId) {
              return section;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submission": () => (/* binding */ Submission)
/* harmony export */ });
/* harmony import */ var _Submission_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue */ "./vendor/cl/course/js/Submission/Submission.vue");


/**
 * Present the submissions to the user
 * @param element Element to install the submission Vue in
 * @param site Site object
 * @constructor
 */
var Submission = function Submission(element, site) {
  var VueHelper = site.VueHelper;
  var submission = JSON.parse(element.textContent);
  element.innerHTML = '';
  var store = site.store;
  var app = VueHelper.createApp({
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
  app.config.globalProperties.$site = site;
  app.use(store);
  VueHelper.mount(app, element);
};
Submission.install = function (site) {
  var elements = document.querySelectorAll('div.cl-submission');
  for (var i = 0; i < elements.length; i++) {
    new Submission(elements[i], site);
  }
};

/***/ }),

/***/ "./vendor/cl/course/js/Util/SpoofingRestore.js":
/*!*****************************************************!*\
  !*** ./vendor/cl/course/js/Util/SpoofingRestore.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpoofingRestore": () => (/* binding */ SpoofingRestore)
/* harmony export */ });
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
  };

  // let options = {};
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Membership": () => (/* binding */ Membership)
/* harmony export */ });
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


/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Submission_vue_vue_type_template_id_15f46600__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600 */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600");
/* harmony import */ var _Submission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submission.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Submission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Submission_vue_vue_type_template_id_15f46600__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/Submission.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue":
/*!********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitImage_vue_vue_type_template_id_02b620c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2 */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2");
/* harmony import */ var _SubmitImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubmitImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubmitImage_vue_vue_type_template_id_02b620c2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/SubmitImage.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitProgram_vue_vue_type_template_id_3aa1e570__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570 */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570");
/* harmony import */ var _SubmitProgram_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubmitProgram_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubmitProgram_vue_vue_type_template_id_3aa1e570__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/SubmitProgram.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitText_vue_vue_type_template_id_311d0a99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99 */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99");
/* harmony import */ var _SubmitText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubmitText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubmitText_vue_vue_type_template_id_311d0a99__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/SubmitText.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmitUnknown_vue_vue_type_template_id_06fd480e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e");
/* harmony import */ var _SubmitUnknown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubmitUnknown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubmitUnknown_vue_vue_type_template_id_06fd480e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/SubmitUnknown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue":
/*!******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Submitted_vue_vue_type_template_id_424dad77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77 */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77");
/* harmony import */ var _Submitted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submitted.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Submitted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Submitted_vue_vue_type_template_id_424dad77__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/Submitted.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMG_TYPES": () => (/* reexport safe */ _SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.IMG_TYPES),
/* harmony export */   "TEXT_TYPES": () => (/* reexport safe */ _SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.TEXT_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmittedItem_vue_vue_type_template_id_506943aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa");
/* harmony import */ var _SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=script&lang=js */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js */ "./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_charlesowen_web_cse335_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SubmittedItem_vue_vue_type_template_id_506943aa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"vendor/cl/course/js/Submission/SubmittedItem.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submission_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Submission.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitImage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitImage.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitProgram_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitProgram_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitProgram.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitText.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitUnknown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitUnknown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitUnknown.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submitted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submitted_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Submitted.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMG_TYPES": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.IMG_TYPES),
/* harmony export */   "TEXT_TYPES": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.TEXT_TYPES),
/* harmony export */   "default": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmittedItem.vue?vue&type=script&lang=js */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submission_vue_vue_type_template_id_15f46600__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submission_vue_vue_type_template_id_15f46600__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Submission.vue?vue&type=template&id=15f46600 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitImage_vue_vue_type_template_id_02b620c2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitImage_vue_vue_type_template_id_02b620c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitImage.vue?vue&type=template&id=02b620c2 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570":
/*!****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitProgram_vue_vue_type_template_id_3aa1e570__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitProgram_vue_vue_type_template_id_3aa1e570__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitProgram.vue?vue&type=template&id=3aa1e570 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitText_vue_vue_type_template_id_311d0a99__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitText_vue_vue_type_template_id_311d0a99__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitText.vue?vue&type=template&id=311d0a99 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e":
/*!****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitUnknown_vue_vue_type_template_id_06fd480e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmitUnknown_vue_vue_type_template_id_06fd480e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmitUnknown.vue?vue&type=template&id=06fd480e */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77":
/*!************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submitted_vue_vue_type_template_id_424dad77__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_Submitted_vue_vue_type_template_id_424dad77__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./Submitted.vue?vue&type=template&id=424dad77 */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa":
/*!****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_template_id_506943aa__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _yarn_virtual_babel_loader_virtual_58a043f32a_0_cache_babel_loader_npm_9_1_0_6467162cbf_774758febd_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_yarn_virtual_vue_loader_virtual_efc584a4ba_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_yarn_virtual_vue_loader_virtual_a1a4b187c3_0_cache_vue_loader_npm_17_0_1_f552b82805_42cc8c8ff0_zip_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_9_use_0_SubmittedItem_vue_vue_type_template_id_506943aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!../../../../../.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./SubmittedItem.vue?vue&type=template&id=506943aa */ "./.yarn/__virtual__/babel-loader-virtual-58a043f32a/0/cache/babel-loader-npm-9.1.0-6467162cbf-774758febd.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use!./.yarn/__virtual__/vue-loader-virtual-efc584a4ba/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./.yarn/__virtual__/vue-loader-virtual-a1a4b187c3/0/cache/vue-loader-npm-17.0.1-f552b82805-42cc8c8ff0.zip/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[9].use[0]!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor","common"], () => (__webpack_exec__("./vendor/cl/course/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIyRDtBQUNWO0FBQ0w7O0FBRTNELENBQWdOO0FBQ2hOLGlDQUFpQyx5TkFBZSxDQUFDLGtGQUFNLGFBQWEsb0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QndEO0FBQ1Y7QUFDTDs7QUFFeEQsQ0FBZ047QUFDaE4saUNBQWlDLHlOQUFlLENBQUMsK0VBQU0sYUFBYSxpRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMkQ7QUFDVjtBQUNMOztBQUUzRCxDQUFnTjtBQUNoTixpQ0FBaUMseU5BQWUsQ0FBQyxrRkFBTSxhQUFhLG9GQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJ1RDtBQUNWO0FBQ0w7O0FBRXZELENBQWdOO0FBQ2hOLGlDQUFpQyx5TkFBZSxDQUFDLDhFQUFNLGFBQWEsZ0ZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCMkQ7QUFDVjtBQUNMOztBQUUzRCxDQUFnTjtBQUNoTixpQ0FBaUMseU5BQWUsQ0FBQyxrRkFBTSxhQUFhLG9GQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RCcWE7Ozs7Ozs7Ozs7Ozs7OztBQ0FDOzs7Ozs7Ozs7Ozs7Ozs7QUNBRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUg7Ozs7Ozs7Ozs7Ozs7OztBQ0FHOzs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2luZGV4LmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ291cnNlLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQ291cnNlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL0Vycm9ySGVscC9FcnJvckhlbHAuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9NZW1iZXJzL01lbWJlci5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9Bc3NpZ25tZW50LmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnRDYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9Bc3NpZ25tZW50cy5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdG9yLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblN0YXR1cy5qcyIsIndlYnBhY2s6Ly9jc2UzMzUvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N0YXRlL1N0b3JlTW9kdWxlQ291cnNlLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLmpzIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvVXRpbC9TcG9vZmluZ1Jlc3RvcmUuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlPzY1OWUiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT8xM2FkIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT8zNTI5Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT84M2Q3Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT84NmVjIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlPzYwZGIiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlP2RjNjYiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlPzczZDgiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT9kMTZhIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT9kODZlIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT9kZTNiIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT9mOTcxIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlPzkzNmMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlPzY2ODciLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlP2UxOTIiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT9hMDUxIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZT82ZGRiIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT9mYTNjIiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT82OWQ2Iiwid2VicGFjazovL2NzZTMzNS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlPzFiODMiLCJ3ZWJwYWNrOi8vY3NlMzM1Ly4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlP2IyZWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2wtc3VibWlzc2lvblwiPlxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uc3VibWl0XCIgY2xhc3M9XCJcIj5cbiAgICAgIDxkaXYgdi1pZj1cIiFzdWJtaXNzaW9uLm9wZW5cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5UaGlzIGFzc2lnbm1lbnQgaXMgbm90IG9wZW4gZm9yIHN1Ym1pc3Npb25zLjwvcD5cbiAgICAgICAgPGRpdiB2LWlmPVwic3RhZmZcIiBjbGFzcz1cImNlbnRlcmJveCBwcmltYXJ5XCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Li4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uPC9lbT48L3A+XG4gICAgICAgICAgPGNvbXBvbmVudCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Y29tcG9uZW50IHYtaWY9XCJzdWJtaXNzaW9uLm9wZW5cIiA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XG4gICAgPC9kaXY+XG4gICAgPHN1Ym1pdHRlZCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6c3VibWlzc2lvbnM9XCJzdWJtaXNzaW9uc1wiPjwvc3VibWl0dGVkPlxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uYWRkaXRpb25hbCAhPT0gbnVsbFwiIHYtaHRtbD1cInN1Ym1pc3Npb24uYWRkaXRpb25hbFwiIGNsYXNzPVwiXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xuICAgIGltcG9ydCBTdWJtaXRUZXh0VnVlIGZyb20gJy4vU3VibWl0VGV4dC52dWUnO1xuICAgIGltcG9ydCBTdWJtaXRQcm9ncmFtVnVlIGZyb20gJy4vU3VibWl0UHJvZ3JhbS52dWUnO1xuICAgIGltcG9ydCBTdWJtaXRJbWFnZVZ1ZSBmcm9tICcuL1N1Ym1pdEltYWdlLnZ1ZSc7XG4gICAgaW1wb3J0IFN1Ym1pdFVua25vd25WdWUgZnJvbSAnLi9TdWJtaXRVbmtub3duLnZ1ZSc7XG4gICAgaW1wb3J0IFN1Ym1pdHRlZFZ1ZSBmcm9tICcuL1N1Ym1pdHRlZC52dWUnO1xuICAgIGltcG9ydCB7VEVYVF9UWVBFU30gZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBzdGFmZjogZmFsc2UsXG4gICAgICAgICAgICAgIHN1Ym1pdHRlcjogJ3N1Ym1pdC10ZXh0JyxcbiAgICAgICAgICAgICAgc3VibWlzc2lvbnM6IFtdXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBzdWJtaXRUZXh0OiBTdWJtaXRUZXh0VnVlLFxuICAgICAgICAgIHN1Ym1pdFByb2dyYW06IFN1Ym1pdFByb2dyYW1WdWUsXG4gICAgICAgICAgc3VibWl0SW1hZ2U6IFN1Ym1pdEltYWdlVnVlLFxuICAgICAgICAgIHN1Ym1pdFVua25vd246IFN1Ym1pdFVua25vd25WdWUsXG4gICAgICAgICAgc3VibWl0dGVkOiBTdWJtaXR0ZWRWdWVcbiAgICAgIH0sXG4gICAgICBtb3VudGVkKCkge1xuICAgICAgXHR0aGlzLnN1Ym1pc3Npb25zID0gdGhpcy5zdWJtaXNzaW9uLnN1Ym1pc3Npb25zO1xuXG4gICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XG4gICAgICAgICAgdGhpcy5zdGFmZiA9IHVzZXIuYXRMZWFzdChNZW1iZXIuU1RBRkYpO1xuICAgICAgICAgIHN3aXRjaCh0aGlzLnN1Ym1pc3Npb24udHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdwcm9ncmFtJzpcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC1wcm9ncmFtJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXRleHQnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LWltYWdlJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtdW5rbm93bic7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBuZXdTdWJtaXNzaW9ucyh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9ucyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8Zm9ybSByZWY9XCJmb3JtXCIgY2xhc3M9XCJmaWxlXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICA6YWN0aW9uPVwiYWN0aW9uXCIgOnRhcmdldD1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIEBzdWJtaXQ9XCJzdWJtaXRcIj5cbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxuICAgICAgPGlucHV0IGNsYXNzPVwidXBsb2FkXCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCBGaWxlXCIgLz5cbiAgICAgIDxpZnJhbWUgcmVmPVwiaWZyYW1lXCIgQGxvYWQ9XCJsb2FkXCIgOm5hbWU9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBzcmM9XCJcIiBzdHlsZT1cIndpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyOjBweCBzb2xpZCAjZmZmO2Rpc3BsYXk6bm9uZVwiPjwvaWZyYW1lPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IFsnc3VibWlzc2lvbiddLFxuICAgIGVtaXRzOiBbJ25ld19zdWJtaXNzaW9ucyddLFxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZpbGVzOiBudWxsLFxuXHRcdFx0XHRhY3Rpb246IG51bGwsXG5cdFx0XHRcdHN1Ym1pdHRpbmc6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0Y29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcblx0XHRcdHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsb2FkKCkge1xuXHRcdFx0XHRpZiAoIXRoaXMuc3VibWl0dGluZykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xuXHRcdFx0XHRsZXQgcmVzcG9uc2UgPSBuZXcgdGhpcy4kc2l0ZS5BUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcblxuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcblx0XHRcdFx0XHR0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c3VibWl0KCkge1xuXHRcdFx0XHR0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZvcm0gcmVmPVwiZm9ybVwiIGNsYXNzPVwiZmlsZVwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XG4gICAgICA8bGFiZWw+U3VibWl0OiA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIEBjaGFuZ2U9XCJmaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIi8+PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBjbGFzcz1cInVwbG9hZFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwic3VibWl0XCIgdmFsdWU9XCJVcGxvYWQgRmlsZVwiIC8+XG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxuICAgIGVtaXRzOiBbJ25ld19zdWJtaXNzaW9ucyddLFxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZpbGVzOiBudWxsLFxuICAgICAgICAgICAgICBhY3Rpb246IG51bGwsXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vdW50ZWQoKSB7XG5cdCAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XG5cdCAgICAgIHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICAgIGxvYWQoKSB7XG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgcmVzcG9uc2UgPSBuZXcgdGhpcy4kc2l0ZS5BUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcbiAgICAgICAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqc29uKTtcbiAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhleGNlcHRpb24pO1xuXHQgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJFcnJvciBkdXJpbmcgc3VibWlzc2lvblwiKTtcbiAgICAgICAgICAgICAgXHRyZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XG4gICAgICA8cD48aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCI+PC9wPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcbiAgICBlbWl0czogWyduZXdfc3VibWlzc2lvbnMnXSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLiRyZWZzWydlZGl0b3InXTtcbiAgICAgICAgICB0aGlzLmVkaXRvciA9IG5ldyB0aGlzLiRzaXRlLkVkaXRvcihlbGVtZW50LCB7XG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdWJtaXNzaW9uLmhlaWdodCxcbiAgICAgICAgICAgICAgY2xhc3NlczogWyd5ZWxsb3ctcGFkJ11cbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIGlmKHRleHQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCAnWW91IG11c3QgZW50ZXIgc29tZSB0ZXh0IHRvIHN1Ym1pdCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9wbGFpbicsXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xuICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YCwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG5cdCAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+PHA+SGVsbG88L3A+XG4gICAgPHAgY2xhc3M9XCJzaG91dG91dFwiPlN1Ym1pc3Npb24gdHlwZSA8ZW0+e3tvcHRpb25zLnR5cGV9fTwvZW0+IGlzIG5vdCBzdXBwb3J0ZWQ8L3A+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgcHJvcHM6IFsnb3B0aW9ucyddXG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24ubWFudWFsICE9PSB0cnVlXCI+XG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInN1Ym1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICA8cCBjbGFzcz1cImxhcmdlIGNlbnRlclwiPk5vIHN1Ym1pc3Npb25zLCB5ZXQuPC9wPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlN1Ym1pc3Npb25zPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0ciB2LWZvcj1cInN1Ym1pdHRlZCBpbiBzdWJtaXNzaW9uc1wiPlxuICAgICAgICAgICAgPHRkPjxzdWJtaXR0ZWQtaXRlbSA6dHlwZT1cInN1Ym1pc3Npb24udHlwZVwiIDphc3NpZ250YWc9XCJzdWJtaXNzaW9uLmFzc2lnblRhZ1wiIDp0YWc9XCJzdWJtaXNzaW9uLnRhZ1wiIDpzdWJtaXNzaW9uPVwic3VibWl0dGVkXCIgOmFuYWx5c2lzPVwic3VibWlzc2lvbi5hbmFseXNpc1wiIDp0ZWFtaW5nPVwic3VibWlzc2lvbi50ZWFtaW5nXCIgQHJlc3VsdD0nYW5hbHlzaXNSZXN1bHQnIHYtb246cHJldmlld19pbWc9XCJwcmV2aWV3X2ltZ1wiIHYtb246cHJldmlldz1cInByZXZpZXdlclwiPjwvc3VibWl0dGVkLWl0ZW0+PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAndGV4dCdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvbjwvcD5cbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ3Byb2dyYW0nXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiBmb3Igc3VibWlzc2lvbiBvcHRpb25zPC9wPlxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAnaW1hZ2UnXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiB0byB2aWV3IGFuZCBmb3Igc3VibWlzc2lvbiBvcHRpb25zPC9wPlxuICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+XG4gICAgICAgICAgPHByZSBjbGFzcz1cImNsLXByZXZpZXcgeWVsbG93LXBhZFwiIHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+e3twcmV2aWV3VHh0fX08L3ByZT5cbiAgICAgICAgICA8cCBjbGFzcz1cImNsLXByZXZpZXctdGltZVwiIHYtaHRtbD1cInByZXZpZXdUaW1lXCI+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPHByZSBjbGFzcz1cImNsLWFuYWx5c2lzXCIgdi1pZj1cInJlc3VsdCAhPT0gbnVsbFwiPnt7cmVzdWx0fX08L3ByZT5cbiAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3SW1nICE9PSBudWxsXCI+XG4gICAgICA8ZmlndXJlIHYtaWY9XCJwcmV2aWV3SW1nICE9PSBudWxsXCIgY2xhc3M9XCJjbC1wcmV2aWV3XCI+PGEgOmhyZWY9XCJwcmV2aWV3SW1nXCIgOnRhcmdldD1cIidfJyArIHN1Ym1pc3Npb24udGFnXCI+PGltZyA6c3JjPVwicHJldmlld0ltZ1wiPjwvYT48L2ZpZ3VyZT5cbiAgICAgIDxwIGNsYXNzPVwiY2wtcHJldmlldy10aW1lXCI+e3twcmV2aWV3VGltZX19PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uaHRtbCAhPT0gdW5kZWZpbmVkXCIgdi1odG1sPVwic3VibWlzc2lvbi5odG1sXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgLyoqXG4gICAqIENvbXBvbmVudCB0aGF0IGRpc3BsYXlzIHRoZSBsaXN0IG9mIHN1Ym1pc3Npb25zLlxuICAgKiBAY29uc3RydWN0b3IgU3VibWl0dGVkVnVlXG4gICAqL1xuICBpbXBvcnQgU3VibWl0dGVkSXRlbVZ1ZSBmcm9tICcuL1N1Ym1pdHRlZEl0ZW0udnVlJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnc3VibWlzc2lvbicsICdzdWJtaXNzaW9ucyddLFxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZXZpZXdUeHQ6IG51bGwsXG4gICAgICAgIHByZXZpZXdJbWc6IG51bGwsXG4gICAgICAgIHByZXZpZXdUaW1lOiBudWxsLFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIHN1Ym1pdHRlZEl0ZW06IFN1Ym1pdHRlZEl0ZW1WdWVcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcbiAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdWJtaXNzaW9uc1swXS50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3RoaXMuc3VibWlzc2lvbnNbMF0uaWR9YDtcbiAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uc1swXS5kYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gdGhpcy5zdWJtaXNzaW9uLnByZXZpZXcudGV4dDtcbiAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcuZGF0ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgc3VibWlzc2lvbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XG4gICAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdWJtaXNzaW9uc1swXS50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHByZXZpZXdlcihzdWJtaXNzaW9uKSB7XG4gICAgICAgIHRoaXMucHJldmlld1R4dCA9IFwiXFxuXCI7XG4gICAgICAgIHRoaXMucHJldmlld1RpbWUgPSAnJm5ic3A7JztcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XG4gICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZ2V0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfS8ke3N1Ym1pc3Npb24uaWR9YCwge30pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvbiA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24nKS5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUeHQgPSBzdWJtaXNzaW9uLnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgcHJldmlld19pbWcoc3VibWlzc2lvbikge1xuICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgPT09IG51bGwgPyAnY291cnNlJyA6ICd0ZWFtJztcbiAgICAgICAgaWYgKHN1Ym1pc3Npb24udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3N1Ym1pc3Npb24uaWR9YDtcbiAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhbmFseXNpc1Jlc3VsdChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cblxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXNUZXh0KClcIj5cbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0VGV4dCgpXCI+e3tkaXNwbGF5KCl9fTwvYT5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJpc0ltYWdlKClcIj5cbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0XCI+e3tkaXNwbGF5KCl9fTwvYT48bWVudS12dWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiIEBvcGVuPVwic2VsZWN0XCI+PGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPjxhIDpocmVmPVwidG9Eb3dubG9hZFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmcnXCIgYWx0PVwiRG93bmxvYWRcIj4gRG93bmxvYWQ8L2E+PC9saT5cbiAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJzaG93QW5hbHlzaXMoaXRlbSlcIj48aW1nIDpzcmM9XCJpdGVtLmljb25cIiA6YWx0PVwiaXRlbS5tZW51XCI+IHt7aXRlbS5tZW51fX08L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbWVudS12dWU+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgPG1lbnUtdnVlIHYtb246b3Blbj1cInNlbGVjdFwiPjxhPnt7ZGlzcGxheSgpfX08L2E+PGEgY2xhc3M9XCJmbG9hdC1yaWdodFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XG4gICAgICAgICAgPGxpIEBjbGljay5zdG9wPVwic2hvd0FuYWx5c2lzKGl0ZW0pXCIgIHYtZm9yPVwiaXRlbSBpbiBhbmFseXNpc1wiPjxhIEBjbGljay5wcmV2ZW50LnN0b3A9XCJzaG93QW5hbHlzaXMoaXRlbSlcIj48aW1nIDpzcmM9XCJpdGVtLmljb25cIiA6YWx0PVwiaXRlbS5tZW51XCI+IHt7aXRlbS5tZW51fX08L2E+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbWVudS12dWU+XG4gICAgPC90ZW1wbGF0ZT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyAgaW1wb3J0IE1lbnVWdWUgZnJvbSAnc2l0ZS1jbC9qcy9VSS9NZW51LnZ1ZSc7XG4gIGNvbnN0IE1lbnVWdWUgPSBTaXRlLlNpdGUuTWVudVZ1ZTtcblxuICBleHBvcnQgY29uc3QgVEVYVF9UWVBFUyA9IFsndGV4dC9wbGFpbicsICd0ZXh0L2h0bWwnXVxuICBleHBvcnQgY29uc3QgSU1HX1RZUEVTID0gWydpbWFnZS9wbmcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9naWYnXTtcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICBwcm9wczogWydhc3NpZ250YWcnLCAndGFnJywgJ3N1Ym1pc3Npb24nLCAnYW5hbHlzaXMnLCAndGVhbWluZycsICd0eXBlJ10sXG4gICAgZW1pdHM6IFsncHJldmlldycsICdwcmV2aWV3X2ltZycsICdyZXN1bHQnXSxcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgXHRyb290OiBTaXRlLnJvb3QsXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBtZW51VnVlOiBNZW51VnVlXG4gICAgICB9LFxuICAgICAgbW91bnRlZCgpIHtcblx0ICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMudGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xuXHQgICAgICB0aGlzLnRvRG93bmxvYWQgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi9kb3dubG9hZC8ke3RoaXMuc3VibWlzc2lvbi5pZH1gO1xuICAgICAgfSxcbiAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBpc1RleHQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09ICdwcm9ncmFtJyAmJiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGlzSW1hZ2UoKSB7XG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRpc3BsYXkoKSB7XG4gICAgICAgICAgICAgIGxldCBkaXNwID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0aGlzLnN1Ym1pc3Npb24uZGF0ZSwgXCJsb25nXCIpO1xuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24ubmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgZGlzcCArPSAnOiAnICsgdGhpcy5zdWJtaXNzaW9uLm5hbWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24uYnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBcdGRpc3AgKz0gJyBieSAnICsgdGhpcy5zdWJtaXNzaW9uLmJ5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBkaXNwO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2VsZWN0VGV4dCgpIHtcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlldycsIHRoaXMuc3VibWlzc2lvbik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3QoKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXdfaW1nJywgdGhpcy5zdWJtaXNzaW9uKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNob3dBbmFseXNpcyhhbmFseXNpcykge1xuXHQgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMudGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9hbmFseXNpcy8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMudGFnfS8ke2FuYWx5c2lzLnRhZ30vJHt0aGlzLnN1Ym1pc3Npb24uaWR9YCwge30pXG4gICAgICAgICAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgXHQgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuICAgICAgICAgIFx0ICAgICAgICBcdGNvbnN0IGFuYWx5c2lzUmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbi1hbmFseXNpcycpLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgXHQgICAgICAgIFx0dGhpcy4kZW1pdCgncmVzdWx0JywgYW5hbHlzaXNSZXN1bHQpO1xuICAgICAgICAgIFx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgIFx0ICAgICAgICB9XG5cbiAgICAgICAgICBcdCAgICB9KVxuICAgICAgICAgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgIFx0ICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuXG4gIH1cblxuPC9zY3JpcHQ+IiwiLyoqXG4gKiBAZmlsZVxuICovXG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJy4vanMvU2VjdGlvblN0YXR1cyc7XG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9qcy9NZW1iZXJzL01lbWJlcic7XG5cblNpdGUuU2VjdGlvblN0YXR1cyA9IFNlY3Rpb25TdGF0dXM7XG5TaXRlLk1lbWJlciA9IE1lbWJlcjtcblxuaW1wb3J0IHtDb3Vyc2VGYWN0b3J5fSBmcm9tICcuL2pzL0NvdXJzZUZhY3RvcnknO1xuXG5pZighU2l0ZS5Db3Vyc2UpIHtcbiAgICAvLyBVc2UgdGhlIGZhY3RvcnkgdG8gY3JlYXRlIHRoZSBDb3Vyc2Ugb2JqZWN0XG4gICAgbGV0IENvdXJzZSA9IENvdXJzZUZhY3RvcnkuY3JlYXRlKFNpdGUpO1xuXG4gICAgU2l0ZS5Db3Vyc2UgPSBDb3Vyc2Vcbn1cblxuXG4iLCIvKipcbiAqIENvdXJzZSBvYmplY3QuXG4gKlxuICogU2l0ZS5Db3Vyc2UgaXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBvYmplY3QuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBDb3Vyc2UgPSBmdW5jdGlvbigpIHtcbn1cblxuIiwiaW1wb3J0IHtDb3Vyc2V9IGZyb20gJy4vQ291cnNlJztcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcnMvTWVtYmVyJztcblxuaW1wb3J0IHtTdG9yZU1vZHVsZUNvdXJzZX0gZnJvbSAnLi9TdGF0ZS9TdG9yZU1vZHVsZUNvdXJzZSc7XG5pbXBvcnQge1NlY3Rpb25TZWxlY3Rvcn0gZnJvbSAnLi9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3Rvcic7XG5pbXBvcnQge1N1Ym1pc3Npb259IGZyb20gJy4vU3VibWlzc2lvbi9TdWJtaXNzaW9uJztcbmltcG9ydCB7RXJyb3JIZWxwfSBmcm9tICcuL0Vycm9ySGVscC9FcnJvckhlbHAnO1xuaW1wb3J0IHtTcG9vZmluZ1Jlc3RvcmV9IGZyb20gJy4vVXRpbC9TcG9vZmluZ1Jlc3RvcmUnO1xuaW1wb3J0IHtTZWN0aW9uU3RhdHVzfSBmcm9tICcuL1NlY3Rpb25TdGF0dXMnO1xuXG4vKipcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIHRoZSBDb3Vyc2Ugb2JqZWN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBDb3Vyc2VGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgQ291cnNlIG9iamVjdC5cbiAqXG4gKiBUaGlzIGFsbG93cyBmb3IgaW5qZWN0aW9uIG9mIHRoZSBzdG9yZSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAqIEBwYXJhbSBzaXRlIFRoZSBTaXRlIG9iamVjdFxuICogQHJldHVybiB7Q291cnNlfSBvYmplY3QuXG4gKi9cbkNvdXJzZUZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xuXG4gICAgbGV0IGNvdXJzZSA9IG5ldyBDb3Vyc2UoKTtcblxuICAgIHNpdGUuQ291cnNlID0gY291cnNlO1xuXG4gICAgLy9cbiAgICAvLyBNb2RpZnkgVXNlciB0byBhZGQgdGhlIGFiaWxpdHkgdG8gaW5zdGFudGlhdGVcbiAgICAvLyBhbiBhcHByb3ByaWF0ZSBNZW1iZXIgb2JqZWN0XG4gICAgLy9cbiAgICBTaXRlLlVzZXIuaW5zdGFudGlhdGVNZW1iZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmKGRhdGEubWVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lbWJlcihkYXRhLm1lbWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFN0b3JlTW9kdWxlVXNlcnMgPSBzaXRlLlN0b3JlTW9kdWxlVXNlcnM7XG5cbiAgICAvL1xuICAgIC8vIEluc3RhbGwgdGhlIGNvdXJzZSBzdG9yZSBtb2R1bGVzXG4gICAgLy9cbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xuICAgIGlmKHN0b3JlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ2NvdXJzZScsIFN0b3JlTW9kdWxlQ291cnNlKTtcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ21lbWJlcnMnLCBTdG9yZU1vZHVsZVVzZXJzLmNyZWF0ZShcbiAgICAgICAgICAgICcvYXBpL2NvdXJzZS9tZW1iZXJzJyxcbiAgICAgICAgICAgICh1c2VyKSA9PiB7cmV0dXJuIHVzZXIubWVtYmVyLmlkOyB9XG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHNpdGUucmVhZHkoKCkgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyBEZXRlY3QgdGhlIHBhc3NlZCBpbiBjb3Vyc2UgZGVmaW5pdGlvbiBpbmZvcm1hdGlvblxuICAgICAgICAvLyBhbmQgYWRkIGl0IHRvIHRoZSBzdG9yZS5cbiAgICAgICAgLy9cblxuICAgICAgICBsZXQgZW47XG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtY291cnNlJykpICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2NvdXJzZS9zZXQnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLWNvdXJzZS1zdGFmZicpKSkge1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdjb3Vyc2Uvc2V0U3RhZmYnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvLyBXZSBoYXZlIG1vZGlmaWVkIHRoZSBVc2VyIG9iamVjdCBzbyB0aGF0IGl0IHdpbGwga25vd1xuICAgICAgICAvLyBob3cgdG8gYXR0YWNoIGEgbWVtYmVyc2hpcC4gVGhpcyBtZWFucyB3ZSBtdXN0IHJlbG9hZFxuICAgICAgICAvLyB0aGUgdXNlciBpbmZvcm1hdGlvbiBzbyBpdCBjYW4gY3JlYXRlIGEgbmV3IG9iamVjdFxuICAgICAgICAvL1xuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXVzZXInKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgndXNlci9zZXQnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XG4gICAgICAgIH1cblxuXG4gICAgfSlcblxuICAgIHNpdGUuc3RhcnQoKCkgPT4ge1xuICAgICAgICBTZWN0aW9uU2VsZWN0b3IuaW5zdGFsbChzaXRlKTtcbiAgICAgICAgU3VibWlzc2lvbi5pbnN0YWxsKHNpdGUpO1xuICAgICAgICBFcnJvckhlbHAuaW5zdGFsbChzaXRlKTtcbiAgICAgICAgU3Bvb2ZpbmdSZXN0b3JlLmluc3RhbGwoc2l0ZSk7XG4gICAgfSlcblxuICAgIHNpdGUuU2VjdGlvblN0YXR1cyA9IFNlY3Rpb25TdGF0dXM7XG4gICAgc2l0ZS5NZW1iZXIgPSBNZW1iZXI7XG5cbiAgICByZXR1cm4gY291cnNlO1xufVxuIiwiXG5leHBvcnQgY29uc3QgRXJyb3JIZWxwID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xuXG4gICAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgICBjb25zdCBjb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBpZihjb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgYnV0dG9uLnZhbHVlID0gXCJFcnJvciBIZWxwXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgbGV0IHVybCA9IFNpdGUucm9vdCArICcvY2wvZXJyb3JoZWxwJztcbiAgICBpZihvcHRpb25zLmFzc2lnbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHVybCArPSAnLycgKyBvcHRpb25zLmFzc2lnbjtcblxuICAgICAgICBpZihvcHRpb25zLnRhZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy50YWc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yID0gZW5jb2RlVVJJKGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkudHJpbSgpKTtcbiAgICAgICAgd2luZG93Lm9wZW4oYCR7dXJsfT9lPSR7ZXJyb3J9YCwgXCJFcnJvciBIZWxwXCIsICd3aWR0aD02MDAsIGhlaWdodD01MDAsIHNjcm9sbGJhcnM9eWVzJyk7XG4gICAgfSlcbn1cblxuRXJyb3JIZWxwLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLWVycm9yLWhlbHAnKTtcbiAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXcgRXJyb3JIZWxwKGVsZW1lbnRzW2ldLCBzaXRlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xuXG4vKipcbiAqIE1lbWJlciBvZiBhIGNvdXJzZVxuICogQXR0YWNoZXMgdG8gYSB1c2VyIE9iamVjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XG4gICAgTWVtYmVyc2hpcC5jYWxsKHRoaXMpO1xuXG4gICAgbGV0IHJvbGUgPSAnRyc7XG5cbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBqc29uLnNlbWVzdGVyO1xuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IGpzb24uY3JlYXRlZCAhPT0gdW5kZWZpbmVkID8ganNvbi5jcmVhdGVkIDogbnVsbDtcbiAgICAgICAgcm9sZSA9IGpzb24ucm9sZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlkID0gMDsgICAgLy8gU3lzdGVtIG1lbWJlcnNoaXAgSURcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IG51bGw7ICAgLy8gU2VtZXN0ZXIgY29kZVxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBudWxsOyAgICAvLyBXaGVuIHVzZXIgd2FzIGNyZWF0ZWRcbiAgICAgICAgcm9sZSA9IG51bGw7ICAgICAgIC8vIE1lbWJlcnNoaXAgcm9sZVxuICAgIH1cblxuICAgIHRoaXMucm9sZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9sZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xuICAgICAgICByb2xlID0gcm9sZV87XG4gICAgfVxufVxuXG5NZW1iZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNZW1iZXJzaGlwLnByb3RvdHlwZSk7XG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xuXG4vKipcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXG4gKiBAcGFyYW0gc3RvcmUgVnVleCBzdG9yZVxuICogQHJldHVybnMgeyp9XG4gKi9cbk1lbWJlci5wcm90b3R5cGUuZ2V0U2VjdGlvbiA9IGZ1bmN0aW9uKHN0b3JlKSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldHRlcnNbJ2NvdXJzZS9zZWN0aW9uJ10odGhpcy5zZW1lc3RlciwgdGhpcy5zZWN0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXG4gKiBAcGFyYW0gYXNzaWdudGFnIEFzc2lnbm1lbnQgdGFnXG4gKi9cbk1lbWJlci5wcm90b3R5cGUuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHN0b3JlLCBhc3NpZ250YWcpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHN0b3JlKTtcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XG59XG5cblxuLy8gVGhlIHBvc3NpYmxlIG1lbWJlciByb2xlc1xuLy8gTXVzdCBtYXRjaCB2YWx1ZXMgaW4gTWVtYmVyLnBocFxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXG5NZW1iZXIuVVNFUiA9ICdVJzsgICAgICAvLy88IFN0YW5kYXJkIHVzZXIgZnJvbSBVc2VyLCBkb24ndCB1c2UgZm9yIE1lbWJlclxuTWVtYmVyLkRST1BQRUQgPSAnRCc7ICAgLy8vPCBVc2VyIGhhcyBkcm9wcGVkIHRoZSBjb3Vyc2Vcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2Vcbk1lbWJlci5TVEFGRiA9ICdTJzsgICAgIC8vLzwgQW55IGNvdXJzZSBzdGFmZlxuTWVtYmVyLkdSQURFUiA9ICdSJzsgICAgLy8vPCBHcmFkZXJzXG5NZW1iZXIuVUxBID0gJ0wnOyAgICAgICAvLy88IFVuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50XG5NZW1iZXIuVEEgPSAnRSc7ICAgICAgICAvLy88IFRlYWNoaW5nIGFzc2lzdGFudFxuTWVtYmVyLklOU1RSVUNUT1IgPSAnSSc7ICAgIC8vLzwgQ291cnNlIGluc3RydWN0b3Jcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cblxuTWVtYmVyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCByb2xlcyA9IHt9O1xuICAgIHJvbGVzW01lbWJlci5HVUVTVF0gPSB7bmFtZTogJ0d1ZXN0JywgcHJpb3JpdHk6IDF9O1xuICAgIHJvbGVzW01lbWJlci5EUk9QUEVEXSA9IHtuYW1lOiAnRHJvcHBlZCcsIHByaW9yaXR5OiAyfTtcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XG4gICAgcm9sZXNbTWVtYmVyLlNUVURFTlRdID0ge25hbWU6ICdTdHVkZW50JywgcHJpb3JpdHk6IDR9O1xuICAgIHJvbGVzW01lbWJlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDUsIHNraXA6IHRydWV9O1xuXHRyb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xuXHRyb2xlc1tNZW1iZXIuVUxBXSA9IHtuYW1lOiAnVW5kZXJncmFkdWF0ZSBMZWFybmluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1VMQScsIHByaW9yaXR5OiA3fTtcbiAgICByb2xlc1tNZW1iZXIuVEFdID0ge25hbWU6ICdUZWFjaGluZyBBc3Npc3RhbnQnLCBzaG9ydDogJ1RBJywgcHJpb3JpdHk6IDh9O1xuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA5fTtcbiAgICByb2xlc1tNZW1iZXIuQURNSU5dID0ge25hbWU6ICdBZG1pbicsIHByaW9yaXR5OiAxMDB9O1xuXG4gICAgcmV0dXJuIHJvbGVzO1xufVxuXG5cbmV4cG9ydCB7TWVtYmVyfTtcblxuXG5cbiIsIlxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZm9yKGxldCBwcm9wZXJ0eSBpbiBkYXRhKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgfVxufVxuIiwiaW1wb3J0IHtBc3NpZ25tZW50fSBmcm9tICcuL0Fzc2lnbm1lbnQnO1xuXG5leHBvcnQgbGV0IEFzc2lnbm1lbnRDYXRlZ29yeSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLnRhZyA9IGRhdGEudGFnO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcbiAgICB0aGlzLmdyYWRpbmcgPSBkYXRhLmdyYWRpbmcgIT09IHVuZGVmaW5lZCA/IGRhdGEuZ3JhZGluZyA6IG51bGw7XG5cbiAgICB0aGlzLmFzc2lnbm1lbnRzID0gW107XG4gICAgdGhpcy5hc3NpZ25tZW50c0J5VGFnID0gW107XG5cbiAgICBmb3IobGV0IGFzc2lnbiBvZiBkYXRhLmFzc2lnbm1lbnRzKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSBuZXcgQXNzaWdubWVudChhc3NpZ24pO1xuICAgICAgICB0aGlzLmFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgIHRoaXMuYXNzaWdubWVudHNCeVRhZ1thc3NpZ25tZW50LnRhZ10gPSBhc3NpZ25tZW50O1xuICAgIH1cblxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gdGhpcy5hc3NpZ25tZW50c0J5VGFnW3RhZ107XG4gICAgICAgIHJldHVybiBhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQgPyBhc3NpZ25tZW50IDogbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHtBc3NpZ25tZW50Q2F0ZWdvcnl9IGZyb20gJy4vQXNzaWdubWVudENhdGVnb3J5JztcblxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRzID0gZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gICAgZm9yKGxldCBjYXRlZ29yeSBvZiBkYXRhLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3IEFzc2lnbm1lbnRDYXRlZ29yeShjYXRlZ29yeSkpXG4gICAgfVxuXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XG4gICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBsZXQgYXNzaWdubWVudCA9IGNhdGVnb3J5LmdldEFzc2lnbm1lbnQodGFnKTtcbiAgICAgICAgICAgIGlmKGFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufSIsIi8qKlxuICogQGZpbGVcbiAqIEFic3RyYWN0aW9uIG9mIHRoZSBjdXJyZW50IGNvdXJzZVxuICovXG5cbmltcG9ydCB7U2VjdGlvbn0gZnJvbSAnLi9TZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IENvdXJzZSA9IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHRoaXMuYWNjb3VudCA9IGRhdGEuYWNjb3VudDtcbiAgICB0aGlzLmRlc2MgPSBkYXRhLmRlc2M7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcbiAgICB0aGlzLnNlY3Rpb25zQnlJZCA9IFtdO1xuXG4gICAgZm9yKGxldCBzZWN0aW9uIG9mIGRhdGEuc2VjdGlvbnMpIHtcbiAgICAgICAgY29uc3QgcyA9IG5ldyBTZWN0aW9uKHNlY3Rpb24pO1xuICAgICAgICB0aGlzLnNlY3Rpb25zQnlJZFtzZWN0aW9uLmlkXSA9IHM7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzKTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7QXNzaWdubWVudHN9IGZyb20gJy4vQXNzaWdubWVudHMnO1xuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLnNlbWVzdGVyID0gZGF0YS5zZW1lc3RlcjtcbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGU7XG4gICAgdGhpcy5hc3NpZ25tZW50cyA9IG5ldyBBc3NpZ25tZW50cyhkYXRhLmFzc2lnbm1lbnRzKTtcblxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50cy5nZXRBc3NpZ25tZW50KHRhZyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3Rvcnl9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5cbi8qKlxuICogVGhlIHNlY3Rpb24gc2VsZWN0b3IgcGFnZSAvY2wvc2VjdGlvbnNlbGVjdG9yXG4gKiBAcGFyYW0gZWxlbWVudCBQYWdlIGVsZW1lbnQgKCNjbC1zZWN0aW9uLXNlbGVjdG9yKVxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgbGV0IFNlY3Rpb25TZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcbiAgICBjb25zdCBWdWVIZWxwZXIgPSBzaXRlLlZ1ZUhlbHBlclxuXG4gICAgY29uc3QgaW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBpbmZvLnNlY3Rpb25zO1xuICAgIGNvbnN0IGJlZm9yZSA9IGluZm8uYmVmb3JlO1xuICAgIGNvbnN0IGFmdGVyID0gaW5mby5hZnRlcjtcblxuICAgIGxldCB0ZW1wbGF0ZSA9IGBcbjxkaXYgaWQ9XCJjbC1zZWN0aW9uLXNlbGVjdG9yXCI+XG4gIDxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPjwvc2l0ZS1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDxkaXYgdi1odG1sPVwiYmVmb3JlXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJib3ggY2wtc2VsZWN0b3JcIj5cbiAgICAgICAgICA8cCB2LWZvcj1cInNlY3Rpb24gaW4gc2VjdGlvbnNcIj48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic2VsZWN0KHNlY3Rpb24pXCI+e3tzZWN0aW9uLmNvdXJzZX19IHt7c2VjdGlvbi5uaWNlfX0gU2VjdGlvbiB7e3NlY3Rpb24uc2VjdGlvbn19PC9idXR0b24+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiIHYtaHRtbD1cImFmdGVyXCI+PC9kaXY+XG4gICAgIDwvZGl2PlxuICAgPHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XG48L2Rpdj5gO1xuXG4gICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcbiAgICBjb25zdCBGb290ZXIgPSBzaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xuXG4gICAgY29uc3QgRW1wdHkgPSB7IHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nIH1cbiAgICBjb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgICAgICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KCksICAvLyAnLzpwYXRoTWF0Y2goLiopJ1xuICAgICAgICByb3V0ZXM6IFt7IHBhdGg6ICcvOnBhdGhNYXRjaCguKiknLCBuYW1lOiAnYW55JywgY29tcG9uZW50OiBFbXB0eSB9XSxcbiAgICB9KVxuXG4gICAgY29uc3QgYXBwID0gVnVlSGVscGVyLmNyZWF0ZUFwcCh7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VjdGlvbiBTZWxlY3RvcicsXG4gICAgICAgICAgICAgICAgYmVmb3JlOiBiZWZvcmUsXG4gICAgICAgICAgICAgICAgYWZ0ZXI6IGFmdGVyLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0ID0gdGhpcy4kcm91dGUucXVlcnkudTtcbiAgICAgICAgICAgIGlmKHRoaXMucmVkaXJlY3QgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnJlZGlyZWN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCA9IFNpdGUucm9vdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXG4gICAgICAgICAgICAnc2l0ZS1mb290ZXInOiBGb290ZXJcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXI6IHNlY3Rpb24uc2VtZXN0ZXIsXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24uc2VjdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3NlY3Rpb25zZWxlY3QnLCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UuaGFzRXJyb3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLnJlZGlyZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJHNpdGUgPSBzaXRlXG4gICAgYXBwLnVzZShyb3V0ZXIpXG5cbiAgICByb3V0ZXIuaXNSZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBWdWVIZWxwZXIubW91bnQoYXBwLCBlbGVtZW50KVxuICAgIH0pXG59XG5cblNlY3Rpb25TZWxlY3Rvci5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xuICAgIGxldCBlbjtcbiAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXNlY3Rpb24tc2VsZWN0b3InKSkgIT09IG51bGwpIHtcbiAgICAgICAgbmV3IFNlY3Rpb25TZWxlY3Rvcihlbiwgc2l0ZSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDb25zdGFudHMgdGhhdCByZXByZXNlbnQgU2VjdGlvblN0YXR1cyBwb3NzaWJsZSB2YWx1ZXMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGxldCBTZWN0aW9uU3RhdHVzID0gZnVuY3Rpb24oKSB7XG59XG5cbi8vIENvbnN0YW50cyBtdXN0IG1hdGNoIHRob3NlIGluIFNlY3Rpb25TdGF0dXMucGhwXG5TZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXG5TZWN0aW9uU3RhdHVzLlZJU0lURUQgPSAnVic7XHQgICAgLy8vPCAlU2VjdGlvbiBoYXMgYmVlbiB2aXNpdGVkLCBidXQgaXMgbm90IHlldCBkb25lXG5TZWN0aW9uU3RhdHVzLkRPTkUgPSAnRCc7XHRcdCAgICAvLy88ICVTZWN0aW9uIGlzIGNvbXBsZXRlZFxuXG5TZWN0aW9uU3RhdHVzLnRvU3RyaW5nID0gZnVuY3Rpb24oc3RhdHVzKSB7XG4gICAgaWYoc3RhdHVzID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgfVxuXG4gICAgc3dpdGNoKHN0YXR1cyl7XG4gICAgICAgIGNhc2UgU2VjdGlvblN0YXR1cy5OT1RWSVNJVEVEOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdOb3QgeWV0IHZpc2l0ZWQnO1xuXG4gICAgICAgIGNhc2UgU2VjdGlvblN0YXR1cy5WSVNJVEVEOlxuICAgICAgICAgICAgcmV0dXJuICdWaXNpdGVkJztcblxuICAgICAgICBjYXNlIFNlY3Rpb25TdGF0dXMuRE9ORTpcbiAgICAgICAgICAgIHJldHVybiAnQ29tcGxldGVkJztcbiAgICB9XG59XG4iLCIvKipcbiAqIFRoZSBWdWV4IHN0b3JlIG1vZHVsZSBmb3IgY291cnNlXG4gKi9cblxuaW1wb3J0IHtDb3Vyc2V9IGZyb20gJy4uL01vZGVscy9Db3Vyc2UnO1xuXG5leHBvcnQgbGV0IFN0b3JlTW9kdWxlQ291cnNlID0ge1xuICAgIG5hbWVzcGFjZWQ6IHRydWUsXG4gICAgc3RhdGU6IHtcbiAgICAgICAgY291cnNlOiBudWxsLFxuICAgICAgICBzdGFmZjogW11cbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgICBzZXQoc3RhdGUsIGRhdGEpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvdXJzZSA9IG5ldyBDb3Vyc2UoZGF0YSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0U3RhZmYoc3RhdGUsIGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBzdGFmZiA9IHt9O1xuICAgICAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBTaXRlLlVzZXIoZCk7XG4gICAgICAgICAgICAgICAgc3RhZmZbdXNlci5tZW1iZXIuaWRdID0gdXNlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RhdGUuc3RhZmYgPSBzdGFmZjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0dGVyczoge1xuICAgICAgICBzZWN0aW9uOiAoc3RhdGUpID0+IChzZW1lc3Rlciwgc2VjdGlvbklkKSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2Ygc3RhdGUuY291cnNlLnNlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5zZW1lc3RlciA9PT0gc2VtZXN0ZXIgJiYgc2VjdGlvbi5pZCA9PT0gc2VjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGFzc2lnbm1lbnQ6IChzdGF0ZSwgZ2V0dGVycykgPT4gKHNlbWVzdGVyLCBzZWN0aW9uSWQsIGFzc2lnblRhZykgPT4ge1xuICAgICAgICAgICAgZm9yKGxldCBzZWN0aW9uIG9mIHN0YXRlLmNvdXJzZS5zZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmKHNlY3Rpb24uc2VtZXN0ZXIgPT09IHNlbWVzdGVyICYmIHNlY3Rpb24uaWQgPT09IHNlY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzdGFmZjogKHN0YXRlKSA9PiAoaWQpID0+IHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gc3RhdGUuc3RhZmZbaWRdO1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IHVuZGVmaW5lZCA/IHVzZXIgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuL1N1Ym1pc3Npb24udnVlJztcblxuLyoqXG4gKiBQcmVzZW50IHRoZSBzdWJtaXNzaW9ucyB0byB0aGUgdXNlclxuICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB0byBpbnN0YWxsIHRoZSBzdWJtaXNzaW9uIFZ1ZSBpblxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgU3VibWlzc2lvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcbiAgICBjb25zdCBWdWVIZWxwZXIgPSBzaXRlLlZ1ZUhlbHBlclxuXG4gICAgY29uc3Qgc3VibWlzc2lvbiA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XG5cbiAgICBjb25zdCBhcHAgPSBWdWVIZWxwZXIuY3JlYXRlQXBwKHtcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN1Ym1pc3Npb246IHN1Ym1pc3Npb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZTogYDxzdWJtaXNzaW9uLXZ1ZSA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIj48L3N1Ym1pc3Npb24tdnVlPmBcbiAgICB9KVxuXG4gICAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRzaXRlID0gc2l0ZVxuICAgIGFwcC51c2Uoc3RvcmUpXG5cbiAgICBWdWVIZWxwZXIubW91bnQoYXBwLCBlbGVtZW50KVxufVxuXG5TdWJtaXNzaW9uLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXN1Ym1pc3Npb24nKTtcbiAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXcgU3VibWlzc2lvbihlbGVtZW50c1tpXSwgc2l0ZSk7XG4gICAgfVxufSIsIlxuZXhwb3J0IGNvbnN0IFNwb29maW5nUmVzdG9yZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcblxuICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnUCcpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdjbC1ob21lLWNvbnRyb2wnKTtcblxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAncmVzdG9yZSc7XG4gICAgcC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNpdGUuYXBpLnBvc3QoJy9hcGkvY291cnNlL21lbWJlcnMvc3Bvb2YnLCB7cmVzdG9yZTogdHJ1ZX0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gc2l0ZS5yb290ICsgJy8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxldCBvcHRpb25zID0ge307XG4gICAgLy8gY29uc3QgY29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgLy8gaWYoY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xuICAgIC8vICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIC8vXG4gICAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgLy8gZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAvL1xuICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIC8vXG4gICAgLy8gbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgLy8gYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIC8vIGJ1dHRvbi52YWx1ZSA9IFwiRXJyb3IgSGVscFwiO1xuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAvL1xuICAgIC8vIGxldCB1cmwgPSBTaXRlLnJvb3QgKyAnL2NsL2Vycm9yaGVscCc7XG4gICAgLy8gaWYob3B0aW9ucy5hc3NpZ24gIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy5hc3NpZ247XG4gICAgLy9cbiAgICAvLyAgICAgaWYob3B0aW9ucy50YWcgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMudGFnO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBlcnJvciA9IGVuY29kZVVSSShpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpLnRyaW0oKSk7XG4gICAgLy8gICAgIHdpbmRvdy5vcGVuKGAke3VybH0/ZT0ke2Vycm9yfWAsIFwiRXJyb3IgSGVscFwiLCAnd2lkdGg9NjAwLCBoZWlnaHQ9NTAwLCBzY3JvbGxiYXJzPXllcycpO1xuICAgIC8vIH0pXG59XG5cblNwb29maW5nUmVzdG9yZS5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1zcG9vZmluZy1yZXN0b3JlJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3IFNwb29maW5nUmVzdG9yZShlbGVtZW50c1tpXSwgc2l0ZSk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBAZmlsZVxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXG4gKlxuICogVGhpcyBpcyBhIGJhc2Ugb2JqZWN0IHRoYXQgd2lsbCBiZSBpbmhlcml0ZWQgYnlcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXG4gKi9cblxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vLyBUaGUgVXNlciBvYmplY3QgZm9yIHRoaXMgbWVtYmVyc2hpcFxuICAgIHRoaXMudXNlciA9IG51bGw7XG59XG5cbmV4cG9ydCB7TWVtYmVyc2hpcH07XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE1ZjQ2NjAwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMTVmNDY2MDAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcxNWY0NjYwMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMTVmNDY2MDAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjAyYjYyMGMyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDJiNjIwYzInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCcwMmI2MjBjMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzAyYjYyMGMyJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjNhYTFlNTcwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnM2FhMWU1NzAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczYWExZTU3MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzBcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignM2FhMWU1NzAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvVXNlcnMvY2hhcmxlc293ZW4vd2ViL2NzZTMzNS8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzExZDBhOTlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczMTFkMGE5OScsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzMxMWQwYTk5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczMTFkMGE5OScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9Vc2Vycy9jaGFybGVzb3dlbi93ZWIvY3NlMzM1Ly55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwNmZkNDgwZVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA2ZmQ0ODBlJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMDZmZDQ4MGUnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzA2ZmQ0ODBlJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDI0ZGFkNzdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0MjRkYWQ3NycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzQyNGRhZDc3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQyNGRhZDc3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL1VzZXJzL2NoYXJsZXNvd2VuL3dlYi9jc2UzMzUvLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjUwNjk0M2FhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNTA2OTQzYWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc1MDY5NDNhYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWFcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNTA2OTQzYWEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZWZjNTg0YTRiYS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1lZmM1ODRhNGJhLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1lZmM1ODRhNGJhLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzBcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL2JhYmVsLWxvYWRlci12aXJ0dWFsLTU4YTA0M2YzMmEvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTkuMS4wLTY0NjcxNjJjYmYtNzc0NzU4ZmViZC56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWVmYzU4NGE0YmEvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1hMWE0YjE4N2MzLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s5XS51c2VbMF0hLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZWZjNTg0YTRiYS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy9iYWJlbC1sb2FkZXItdmlydHVhbC01OGEwNDNmMzJhLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS05LjEuMC02NDY3MTYyY2JmLTc3NDc1OGZlYmQuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuL19fdmlydHVhbF9fL3Z1ZS1sb2FkZXItdmlydHVhbC1lZmM1ODRhNGJhLzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTcuMC4xLWY1NTJiODI4MDUtNDJjYzhjOGZmMC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtYTFhNGIxODdjMy8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbOV0udXNlWzBdIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3N1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vYmFiZWwtbG9hZGVyLXZpcnR1YWwtNThhMDQzZjMyYS8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOS4xLjAtNjQ2NzE2MmNiZi03NzQ3NThmZWJkLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi9fX3ZpcnR1YWxfXy92dWUtbG9hZGVyLXZpcnR1YWwtZWZjNTg0YTRiYS8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE3LjAuMS1mNTUyYjgyODA1LTQyY2M4YzhmZjAuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vX192aXJ0dWFsX18vdnVlLWxvYWRlci12aXJ0dWFsLWExYTRiMTg3YzMvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNy4wLjEtZjU1MmI4MjgwNS00MmNjOGM4ZmYwLnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzldLnVzZVswXSEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhXCIiXSwibmFtZXMiOlsiTWVtYmVyIiwiU3VibWl0VGV4dFZ1ZSIsIlN1Ym1pdFByb2dyYW1WdWUiLCJTdWJtaXRJbWFnZVZ1ZSIsIlN1Ym1pdFVua25vd25WdWUiLCJTdWJtaXR0ZWRWdWUiLCJURVhUX1RZUEVTIiwicHJvcHMiLCJkYXRhIiwic3RhZmYiLCJzdWJtaXR0ZXIiLCJzdWJtaXNzaW9ucyIsImNvbXBvbmVudHMiLCJzdWJtaXRUZXh0Iiwic3VibWl0UHJvZ3JhbSIsInN1Ym1pdEltYWdlIiwic3VibWl0VW5rbm93biIsInN1Ym1pdHRlZCIsIm1vdW50ZWQiLCJzdWJtaXNzaW9uIiwidXNlciIsIiRzdG9yZSIsInN0YXRlIiwiYXRMZWFzdCIsIlNUQUZGIiwidHlwZSIsIm1ldGhvZHMiLCJuZXdTdWJtaXNzaW9ucyIsInZhbHVlIiwiZW1pdHMiLCJmaWxlcyIsImFjdGlvbiIsInN1Ym1pdHRpbmciLCJzeXN0ZW0iLCJ0ZWFtaW5nIiwiJHNpdGUiLCJyb290IiwiYXNzaWduVGFnIiwidGFnIiwibG9hZCIsImpzb24iLCJmcmFtZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIiwicmVzcG9uc2UiLCJBUElSZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsImhhc0Vycm9yIiwiJHJlZnMiLCJyZXNldCIsIiRlbWl0IiwiZ2V0RGF0YSIsImF0dHJpYnV0ZXMiLCJ0b2FzdCIsInN1Ym1pdCIsImV4Y2VwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50IiwiZWRpdG9yIiwiRWRpdG9yIiwiaGVpZ2h0IiwiY2xhc3NlcyIsInRleHQiLCJ0ZXh0YXJlYSIsInRyaW0iLCJTaXRlIiwicGFyYW1zIiwiYXBpIiwicG9zdCIsInRoZW4iLCJlcnJvciIsIlN1Ym1pdHRlZEl0ZW1WdWUiLCJwcmV2aWV3VHh0IiwicHJldmlld0ltZyIsInByZXZpZXdUaW1lIiwicmVzdWx0Iiwic3VibWl0dGVkSXRlbSIsInNlcnZpY2UiLCJsZW5ndGgiLCJzdWJzdHIiLCJpZCIsIlRpbWVGb3JtYXR0ZXIiLCJyZWxhdGl2ZVVOSVgiLCJkYXRlIiwicHJldmlldyIsInVuZGVmaW5lZCIsIndhdGNoIiwicHJldmlld2VyIiwiZ2V0IiwicHJldmlld19pbWciLCJhbmFseXNpc1Jlc3VsdCIsIk1lbnVWdWUiLCJJTUdfVFlQRVMiLCJ0b0Rvd25sb2FkIiwibWVudVZ1ZSIsImlzVGV4dCIsImluZGV4T2YiLCJpc0ltYWdlIiwiZGlzcGxheSIsImRpc3AiLCJhYnNvbHV0ZVVOSVgiLCJuYW1lIiwiYnkiLCJzZWxlY3RUZXh0Iiwic2VsZWN0Iiwic2hvd0FuYWx5c2lzIiwiYW5hbHlzaXMiLCJhc3NpZ250YWciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCIkcHJvcHMiLCJfaG9pc3RlZF8yIiwib3BlbiIsIl9ob2lzdGVkXzQiLCJfY3R4IiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY3JlYXRlQmxvY2siLCJfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCJvbk5ld19zdWJtaXNzaW9ucyIsIiRvcHRpb25zIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9zdWJtaXR0ZWQiLCJhZGRpdGlvbmFsIiwicmVmIiwiZW5jdHlwZSIsIm1ldGhvZCIsInRhcmdldCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCIkZXZlbnQiLCJvbkxvYWQiLCJzcmMiLCJzdHlsZSIsIm1hbnVhbCIsIl9GcmFnbWVudCIsImtleSIsIl9ob2lzdGVkXzMiLCJfY29tcG9uZW50X3N1Ym1pdHRlZF9pdGVtIiwib25SZXN1bHQiLCJvblByZXZpZXdfaW1nIiwib25QcmV2aWV3IiwiX2hvaXN0ZWRfNyIsIl9ob2lzdGVkXzkiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEzIiwiaHJlZiIsIl9ob2lzdGVkXzE2IiwiaHRtbCIsIm9uQ2xpY2siLCJfY29tcG9uZW50X21lbnVfdnVlIiwib25PcGVuIiwiYWx0IiwiaXRlbSIsImljb24iLCJtZW51IiwiU2VjdGlvblN0YXR1cyIsIkNvdXJzZUZhY3RvcnkiLCJDb3Vyc2UiLCJjcmVhdGUiLCJTdG9yZU1vZHVsZUNvdXJzZSIsIlNlY3Rpb25TZWxlY3RvciIsIlN1Ym1pc3Npb24iLCJFcnJvckhlbHAiLCJTcG9vZmluZ1Jlc3RvcmUiLCJzaXRlIiwiY291cnNlIiwiVXNlciIsImluc3RhbnRpYXRlTWVtYmVyIiwibWVtYmVyIiwiU3RvcmVNb2R1bGVVc2VycyIsInN0b3JlIiwicmVnaXN0ZXJNb2R1bGUiLCJyZWFkeSIsImVuIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21taXQiLCJ0ZXh0Q29udGVudCIsInN0YXJ0IiwiaW5zdGFsbCIsIm9wdGlvbnMiLCJjb250ZW50IiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucHV0IiwiYnV0dG9uIiwidXJsIiwiYXNzaWduIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlbmNvZGVVUkkiLCJ0b1VwcGVyQ2FzZSIsIndpbmRvdyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJNZW1iZXJzaGlwIiwiY2FsbCIsInJvbGUiLCJzZW1lc3RlciIsInNlY3Rpb24iLCJjcmVhdGVkIiwic2V0Um9sZSIsInJvbGVfIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY29uc3RydWN0b3IiLCJnZXRTZWN0aW9uIiwiZ2V0dGVycyIsImdldEFzc2lnbm1lbnQiLCJHVUVTVCIsIlVTRVIiLCJEUk9QUEVEIiwiU1RVREVOVCIsIkdSQURFUiIsIlVMQSIsIlRBIiwiSU5TVFJVQ1RPUiIsIkFETUlOIiwiZ2V0Um9sZXMiLCJyb2xlcyIsInByaW9yaXR5Iiwic2tpcCIsIkFzc2lnbm1lbnQiLCJwcm9wZXJ0eSIsIkFzc2lnbm1lbnRDYXRlZ29yeSIsImdyYWRpbmciLCJhc3NpZ25tZW50cyIsImFzc2lnbm1lbnRzQnlUYWciLCJhc3NpZ25tZW50IiwicHVzaCIsIkFzc2lnbm1lbnRzIiwiY2F0ZWdvcmllcyIsImNhdGVnb3J5IiwiU2VjdGlvbiIsImFjY291bnQiLCJkZXNjIiwic2VjdGlvbnMiLCJzZWN0aW9uc0J5SWQiLCJzIiwiY3JlYXRlUm91dGVyIiwiY3JlYXRlV2ViSGlzdG9yeSIsIlZ1ZUhlbHBlciIsImluZm8iLCJiZWZvcmUiLCJhZnRlciIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaGVhZGVyIiwiY29tcG9uZW50IiwiRm9vdGVyIiwiZm9vdGVyIiwiRW1wdHkiLCJyb3V0ZXIiLCJoaXN0b3J5Iiwicm91dGVzIiwicGF0aCIsImFwcCIsImNyZWF0ZUFwcCIsInRpdGxlIiwicmVkaXJlY3QiLCIkcm91dGUiLCJxdWVyeSIsInUiLCJsb2NhdGlvbiIsImNvbmZpZyIsImdsb2JhbFByb3BlcnRpZXMiLCJ1c2UiLCJpc1JlYWR5IiwibW91bnQiLCJOT1RWSVNJVEVEIiwiVklTSVRFRCIsIkRPTkUiLCJ0b1N0cmluZyIsInN0YXR1cyIsIm5hbWVzcGFjZWQiLCJtdXRhdGlvbnMiLCJzZXQiLCJzZXRTdGFmZiIsImQiLCJzZWN0aW9uSWQiLCJTdWJtaXNzaW9uVnVlIiwic3VibWlzc2lvblZ1ZSIsInAiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbmNsaWNrIiwicmVzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=