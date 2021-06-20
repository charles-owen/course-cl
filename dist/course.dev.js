/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







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
    submitText: _SubmitText_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    submitProgram: _SubmitProgram_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    submitImage: _SubmitImage_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    submitUnknown: _SubmitUnknown_vue__WEBPACK_IMPORTED_MODULE_4__.default,
    submitted: _Submitted_vue__WEBPACK_IMPORTED_MODULE_5__.default
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

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['options']
});

/***/ }),

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    submittedItem: _SubmittedItem_vue__WEBPACK_IMPORTED_MODULE_0__.default
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

/***/ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TEXT_TYPES": () => (/* binding */ TEXT_TYPES),
/* harmony export */   "IMG_TYPES": () => (/* binding */ IMG_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ "./vendor/cl/course/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/course/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Course": () => (/* binding */ Course)
/* harmony export */ });
/* harmony import */ var _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony import */ var _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/CourseFactory */ "./vendor/cl/course/js/CourseFactory.js");
/**
 * @file
 */


Site.SectionStatus = _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__.SectionStatus;
Site.Member = _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__.Member;
 // Use the factory to create the Users object

var Course = _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__.CourseFactory.create(Site.site);


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
  site.Course = course; //
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

  var StoreModuleUsers = site.StoreModuleUsers; //
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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionStatus": () => (/* binding */ SectionStatus)
/* harmony export */ });
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreModuleCourse": () => (/* binding */ StoreModuleCourse)
/* harmony export */ });
/* harmony import */ var _Models_Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Models/Course */ "./vendor/cl/course/js/Models/Course.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      submissionVue: _Submission_vue__WEBPACK_IMPORTED_MODULE_0__.default
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

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Submission.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitImage.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitProgram.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitText.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitUnknown.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Submitted.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "IMG_TYPES": () => (/* reexport safe */ _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.IMG_TYPES),
/* harmony export */   "TEXT_TYPES": () => (/* reexport safe */ _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.TEXT_TYPES)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmittedItem.vue?vue&type=script&lang=js& */ "./.yarn/$$virtual/babel-loader-virtual-8d78f42d43/0/cache/babel-loader-npm-8.2.2-b4e600c2c5-362bb71573.zip/node_modules/babel-loader/lib/index.js??clonedRuleSet-2[0].rules[0].use!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_yarn_$$virtual_babel_loader_virtual_8d78f42d43_0_cache_babel_loader_npm_8_2_2_b4e600c2c5_362bb71573_zip_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_0_rules_0_use_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Submission.vue?vue&type=template&id=15f46600& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!***************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!**************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitText.vue?vue&type=template&id=311d0a99& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!*************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./Submitted.vue?vue&type=template&id=424dad77& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");


/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!*****************************************************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_3f0c38bb2c_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");


/***/ }),

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
            return _vm.submit.apply(null, arguments)
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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

/***/ "./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./.yarn/$$virtual/vue-loader-virtual-3f0c38bb2c/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/index.js??vue-loader-options!./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
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
                    return _vm.select.apply(null, arguments)
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

/***/ "./vendor/cl/course/js/Submission/Submission.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/course/js/Submission/Submission.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submission.vue?vue&type=template&id=15f46600& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=template&id=15f46600&");
/* harmony import */ var _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submission.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submission.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Submission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__.render,
  _Submission_vue_vue_type_template_id_15f46600___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/Submission.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=template&id=02b620c2& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=template&id=02b620c2&");
/* harmony import */ var _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitImage.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitImage.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubmitImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitImage_vue_vue_type_template_id_02b620c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/SubmitImage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=template&id=3aa1e570& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=template&id=3aa1e570&");
/* harmony import */ var _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitProgram.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitProgram.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubmitProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitProgram_vue_vue_type_template_id_3aa1e570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/SubmitProgram.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=template&id=311d0a99& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=template&id=311d0a99&");
/* harmony import */ var _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitText.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitText.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubmitText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitText_vue_vue_type_template_id_311d0a99___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/SubmitText.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=template&id=06fd480e& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=template&id=06fd480e&");
/* harmony import */ var _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmitUnknown.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmitUnknown.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubmitUnknown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmitUnknown_vue_vue_type_template_id_06fd480e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/SubmitUnknown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/* harmony import */ var _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Submitted.vue?vue&type=template&id=424dad77& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=template&id=424dad77&");
/* harmony import */ var _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Submitted.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/Submitted.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Submitted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__.render,
  _Submitted_vue_vue_type_template_id_424dad77___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/Submitted.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/Submission/SubmittedItem.vue":
/*!**********************************************************!*\
  !*** ./vendor/cl/course/js/Submission/SubmittedItem.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IMG_TYPES": () => (/* reexport safe */ _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.IMG_TYPES),
/* harmony export */   "TEXT_TYPES": () => (/* reexport safe */ _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.TEXT_TYPES),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=template&id=506943aa& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=template&id=506943aa&");
/* harmony import */ var _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmittedItem.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/Submission/SubmittedItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./.yarn/$$virtual/vue-loader-virtual-dd0dc9bf34/0/cache/vue-loader-npm-15.9.7-c92cce348e-48c7785a24.zip/node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_yarn_$$virtual_vue_loader_virtual_dd0dc9bf34_0_cache_vue_loader_npm_15_9_7_c92cce348e_48c7785a24_zip_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SubmittedItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubmittedItem_vue_vue_type_template_id_506943aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "vendor/cl/course/js/Submission/SubmittedItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"Course": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcourselib"] = self["webpackChunkcourselib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./vendor/cl/course/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlIiwid2VicGFjazovL2NvdXJzZWxpYi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db3Vyc2UuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db3Vyc2VGYWN0b3J5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvRXJyb3JIZWxwL0Vycm9ySGVscC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQXNzaWdubWVudENhdGVnb3J5LmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnRzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0NvdXJzZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9TZWN0aW9uLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU3RhdHVzLmpzIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3RhdGUvU3RvcmVNb2R1bGVDb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24uanMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9VdGlsL1Nwb29maW5nUmVzdG9yZS5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/NTRjZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlPzFlNjAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlP2I2ZDIiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlPzJjODMiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzAyNDAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/ZjU1YiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/ZmYxMCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/MzgzYSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlP2ZkYjYiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlPzYwODQiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlPzI3YjAiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzQ4MTYiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/MWE2ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/Y2MyYiIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlIiwid2VicGFjazovL2NvdXJzZWxpYi8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWUiLCJ3ZWJwYWNrOi8vY291cnNlbGliL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvdXJzZWxpYi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jb3Vyc2VsaWIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIlNpdGUiLCJTZWN0aW9uU3RhdHVzIiwiTWVtYmVyIiwiQ291cnNlIiwiQ291cnNlRmFjdG9yeSIsInNpdGUiLCJjcmVhdGUiLCJjb3Vyc2UiLCJVc2VyIiwiaW5zdGFudGlhdGVNZW1iZXIiLCJkYXRhIiwibWVtYmVyIiwiU3RvcmVNb2R1bGVVc2VycyIsInN0b3JlIiwidW5kZWZpbmVkIiwicmVnaXN0ZXJNb2R1bGUiLCJTdG9yZU1vZHVsZUNvdXJzZSIsInVzZXIiLCJpZCIsInJlYWR5IiwiZW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29tbWl0IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJzdGFydCIsIlNlY3Rpb25TZWxlY3RvciIsIlN1Ym1pc3Npb24iLCJFcnJvckhlbHAiLCJTcG9vZmluZ1Jlc3RvcmUiLCJlbGVtZW50Iiwib3B0aW9ucyIsImNvbnRlbnQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwidmFsdWUiLCJ1cmwiLCJyb290IiwiYXNzaWduIiwidGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImVuY29kZVVSSSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIndpbmRvdyIsIm9wZW4iLCJpbnN0YWxsIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImpzb24iLCJNZW1iZXJzaGlwIiwicm9sZSIsInNlbWVzdGVyIiwic2VjdGlvbiIsImNyZWF0ZWQiLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJnZXR0ZXJzIiwiZ2V0QXNzaWdubWVudCIsImFzc2lnbnRhZyIsIkdVRVNUIiwiVVNFUiIsIkRST1BQRUQiLCJTVFVERU5UIiwiU1RBRkYiLCJHUkFERVIiLCJVTEEiLCJUQSIsIklOU1RSVUNUT1IiLCJBRE1JTiIsImdldFJvbGVzIiwicm9sZXMiLCJuYW1lIiwicHJpb3JpdHkiLCJza2lwIiwiQXNzaWdubWVudCIsInByb3BlcnR5IiwiQXNzaWdubWVudENhdGVnb3J5IiwiZ3JhZGluZyIsImFzc2lnbm1lbnRzIiwiYXNzaWdubWVudHNCeVRhZyIsImFzc2lnbm1lbnQiLCJwdXNoIiwiQXNzaWdubWVudHMiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnkiLCJhY2NvdW50IiwiZGVzYyIsInNlY3Rpb25zIiwic2VjdGlvbnNCeUlkIiwicyIsIlNlY3Rpb24iLCJWdWUiLCJpbmZvIiwiYmVmb3JlIiwiYWZ0ZXIiLCJ0ZW1wbGF0ZSIsIkhlYWRlciIsImhlYWRlciIsImNvbXBvbmVudCIsIkZvb3RlciIsImZvb3RlciIsInJvdXRlciIsIlZ1ZVJvdXRlciIsIm1vZGUiLCJyb3V0ZXMiLCJlbCIsInRpdGxlIiwic2VsZWN0IiwicGFyYW1zIiwiYXBpIiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsImhhc0Vycm9yIiwidG9hc3QiLCJsb2NhdGlvbiIsInJlZGlyZWN0IiwibW91bnRlZCIsIiRyb3V0ZSIsInF1ZXJ5IiwidSIsImNvbXBvbmVudHMiLCJOT1RWSVNJVEVEIiwiVklTSVRFRCIsIkRPTkUiLCJ0b1N0cmluZyIsInN0YXR1cyIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsInN0YWZmIiwibXV0YXRpb25zIiwic2V0Iiwic2V0U3RhZmYiLCJkIiwic2VjdGlvbklkIiwiYXNzaWduVGFnIiwic3VibWlzc2lvbiIsInN1Ym1pc3Npb25WdWUiLCJTdWJtaXNzaW9uVnVlIiwicCIsImNsYXNzTGlzdCIsImFkZCIsIm9uY2xpY2siLCJyZXN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiY291cnNlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtc3VibWlzc2lvblwiPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5zdWJtaXRcIiBjbGFzcz1cIlwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCIhc3VibWlzc2lvbi5vcGVuXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5UaGlzIGFzc2lnbm1lbnQgaXMgbm90IG9wZW4gZm9yIHN1Ym1pc3Npb25zLjwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzdGFmZlwiIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnlcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+PGVtPi4uLlN0YWZmIG9ubHkgZm9yIHN1Ym1pc3Npb24gdGVzdGluZy4uLjwvZW0+PC9wPlxyXG4gICAgICAgICAgPGNvbXBvbmVudCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y29tcG9uZW50IHYtaWY9XCJzdWJtaXNzaW9uLm9wZW5cIiA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdWJtaXR0ZWQgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCIgOnN1Ym1pc3Npb25zPVwic3VibWlzc2lvbnNcIj48L3N1Ym1pdHRlZD5cclxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uYWRkaXRpb25hbCAhPT0gbnVsbFwiIHYtaHRtbD1cInN1Ym1pc3Npb24uYWRkaXRpb25hbFwiIGNsYXNzPVwiXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4uL01lbWJlcnMvTWVtYmVyJztcclxuICAgIGltcG9ydCBTdWJtaXRUZXh0VnVlIGZyb20gJy4vU3VibWl0VGV4dC52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFByb2dyYW1WdWUgZnJvbSAnLi9TdWJtaXRQcm9ncmFtLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0SW1hZ2VWdWUgZnJvbSAnLi9TdWJtaXRJbWFnZS52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFVua25vd25WdWUgZnJvbSAnLi9TdWJtaXRVbmtub3duLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0dGVkVnVlIGZyb20gJy4vU3VibWl0dGVkLnZ1ZSc7XHJcbiAgICBpbXBvcnQge1RFWFRfVFlQRVN9IGZyb20gJy4vU3VibWl0dGVkSXRlbS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgc3RhZmY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRlcjogJ3N1Ym1pdC10ZXh0JyxcclxuICAgICAgICAgICAgICBzdWJtaXNzaW9uczogW11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgc3VibWl0VGV4dDogU3VibWl0VGV4dFZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFByb2dyYW06IFN1Ym1pdFByb2dyYW1WdWUsXHJcbiAgICAgICAgICBzdWJtaXRJbWFnZTogU3VibWl0SW1hZ2VWdWUsXHJcbiAgICAgICAgICBzdWJtaXRVbmtub3duOiBTdWJtaXRVbmtub3duVnVlLFxyXG4gICAgICAgICAgc3VibWl0dGVkOiBTdWJtaXR0ZWRWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgXHR0aGlzLnN1Ym1pc3Npb25zID0gdGhpcy5zdWJtaXNzaW9uLnN1Ym1pc3Npb25zO1xyXG5cclxuICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgdGhpcy5zdGFmZiA9IHVzZXIuYXRMZWFzdChNZW1iZXIuU1RBRkYpO1xyXG4gICAgICAgICAgc3dpdGNoKHRoaXMuc3VibWlzc2lvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAncHJvZ3JhbSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC1wcm9ncmFtJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtdGV4dCc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC1pbWFnZSc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtdW5rbm93bic7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbmV3U3VibWlzc2lvbnModmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9ucyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSByZWY9XCJmb3JtXCIgY2xhc3M9XCJmaWxlXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgIDphY3Rpb249XCJhY3Rpb25cIiA6dGFyZ2V0PVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgQHN1Ym1pdD1cInN1Ym1pdFwiPlxyXG4gICAgICA8bGFiZWw+U3VibWl0OiA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIEBjaGFuZ2U9XCJmaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIi8+PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwidXBsb2FkXCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCBGaWxlXCIgLz5cclxuICAgICAgPGlmcmFtZSByZWY9XCJpZnJhbWVcIiBAbG9hZD1cImxvYWRcIiA6bmFtZT1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIHNyYz1cIlwiIHN0eWxlPVwid2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6MHB4IHNvbGlkICNmZmY7ZGlzcGxheTpub25lXCI+PC9pZnJhbWU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmaWxlczogbnVsbCxcclxuXHRcdFx0XHRhY3Rpb246IG51bGwsXHJcblx0XHRcdFx0c3VibWl0dGluZzogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0XHRcdHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5zdWJtaXR0aW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0bGV0IGpzb24gPSBmcmFtZXNbJ3VwbG9hZF90YXJnZXRfJyArIHRoaXMuc3VibWlzc2lvbi50YWddLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5pbm5lckhUTUw7XHJcblx0XHRcdFx0bGV0IHJlc3BvbnNlID0gbmV3IHRoaXMuJHNpdGUuQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcblxyXG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kcmVmc1snZm9ybSddLnJlc2V0KCk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBmaWxlczogbnVsbCxcclxuICAgICAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgIHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGxvYWQoKSB7XHJcbiAgICAgICAgICAgICAgaWYoIXRoaXMuc3VibWl0dGluZykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IGpzb24gPSBmcmFtZXNbJ3VwbG9hZF90YXJnZXRfJyArIHRoaXMuc3VibWlzc2lvbi50YWddLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcblx0ICAgICAgICAgICAgICByZXNwb25zZSA9IG5ldyB0aGlzLiRzaXRlLkFQSVJlc3BvbnNlKEpTT04ucGFyc2UoanNvbikpO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhleGNlcHRpb24pO1xyXG5cdCAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIkVycm9yIGR1cmluZyBzdWJtaXNzaW9uXCIpO1xyXG4gICAgICAgICAgICAgIFx0cmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgPGRpdiByZWY9XCJlZGl0b3JcIj48L2Rpdj5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ2VkaXRvciddO1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgdGhpcy4kc2l0ZS5FZGl0b3IoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdWJtaXNzaW9uLmhlaWdodCxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3llbGxvdy1wYWQnXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgJ1lvdSBtdXN0IGVudGVyIHNvbWUgdGV4dCB0byBzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0L3BsYWluJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YCwgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj48cD5IZWxsbzwvcD5cclxuICAgIDxwIGNsYXNzPVwic2hvdXRvdXRcIj5TdWJtaXNzaW9uIHR5cGUgPGVtPnt7b3B0aW9ucy50eXBlfX08L2VtPiBpcyBub3Qgc3VwcG9ydGVkPC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ29wdGlvbnMnXVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5tYW51YWwgIT09IHRydWVcIj5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzdWJtaXNzaW9ucy5sZW5ndGggPT09IDBcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxhcmdlIGNlbnRlclwiPk5vIHN1Ym1pc3Npb25zLCB5ZXQuPC9wPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TdWJtaXNzaW9uczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwic3VibWl0dGVkIGluIHN1Ym1pc3Npb25zXCI+XHJcbiAgICAgICAgICAgIDx0ZD48c3VibWl0dGVkLWl0ZW0gOnR5cGU9XCJzdWJtaXNzaW9uLnR5cGVcIiA6YXNzaWdudGFnPVwic3VibWlzc2lvbi5hc3NpZ25UYWdcIiA6dGFnPVwic3VibWlzc2lvbi50YWdcIiA6c3VibWlzc2lvbj1cInN1Ym1pdHRlZFwiIDphbmFseXNpcz1cInN1Ym1pc3Npb24uYW5hbHlzaXNcIiA6dGVhbWluZz1cInN1Ym1pc3Npb24udGVhbWluZ1wiIEByZXN1bHQ9J2FuYWx5c2lzUmVzdWx0JyB2LW9uOnByZXZpZXdfaW1nPVwicHJldmlld19pbWdcIiB2LW9uOnByZXZpZXc9XCJwcmV2aWV3ZXJcIj48L3N1Ym1pdHRlZC1pdGVtPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ3RleHQnXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiBkYXRlIHRvIGRpc3BsYXkgdGhlIHN1Ym1pc3Npb248L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ3Byb2dyYW0nXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiBmb3Igc3VibWlzc2lvbiBvcHRpb25zPC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJzdWJtaXNzaW9uLnR5cGUgPT09ICdpbWFnZSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIHRvIHZpZXcgYW5kIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwicHJldmlld1R4dCAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgPHByZSBjbGFzcz1cImNsLXByZXZpZXcgeWVsbG93LXBhZFwiIHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+e3twcmV2aWV3VHh0fX08L3ByZT5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2wtcHJldmlldy10aW1lXCIgdi1odG1sPVwicHJldmlld1RpbWVcIj48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwcmUgY2xhc3M9XCJjbC1hbmFseXNpc1wiIHYtaWY9XCJyZXN1bHQgIT09IG51bGxcIj57e3Jlc3VsdH19PC9wcmU+XHJcbiAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3SW1nICE9PSBudWxsXCI+XHJcbiAgICAgIDxmaWd1cmUgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIiBjbGFzcz1cImNsLXByZXZpZXdcIj48YSA6aHJlZj1cInByZXZpZXdJbWdcIiA6dGFyZ2V0PVwiJ18nICsgc3VibWlzc2lvbi50YWdcIj48aW1nIDpzcmM9XCJwcmV2aWV3SW1nXCI+PC9hPjwvZmlndXJlPlxyXG4gICAgICA8cCBjbGFzcz1cImNsLXByZXZpZXctdGltZVwiPnt7cHJldmlld1RpbWV9fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5odG1sICE9PSB1bmRlZmluZWRcIiB2LWh0bWw9XCJzdWJtaXNzaW9uLmh0bWxcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLyoqXHJcbiAgICogQ29tcG9uZW50IHRoYXQgZGlzcGxheXMgdGhlIGxpc3Qgb2Ygc3VibWlzc2lvbnMuXHJcbiAgICogQGNvbnN0cnVjdG9yIFN1Ym1pdHRlZFZ1ZVxyXG4gICAqL1xyXG4gIGltcG9ydCBTdWJtaXR0ZWRJdGVtVnVlIGZyb20gJy4vU3VibWl0dGVkSXRlbS52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydzdWJtaXNzaW9uJywgJ3N1Ym1pc3Npb25zJ10sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJldmlld1R4dDogbnVsbCxcclxuICAgICAgICBwcmV2aWV3SW1nOiBudWxsLFxyXG4gICAgICAgIHByZXZpZXdUaW1lOiBudWxsLFxyXG4gICAgICAgIHJlc3VsdDogbnVsbFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBzdWJtaXR0ZWRJdGVtOiBTdWJtaXR0ZWRJdGVtVnVlXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdWJtaXNzaW9uKTtcclxuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdWJtaXNzaW9uc1swXS50eXBlLnN1YnN0cigwLCA2KSA9PT0gJ2ltYWdlLycpIHtcclxuICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHRoaXMuc3VibWlzc2lvbnNbMF0uZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnN1Ym1pc3Npb24ucHJldmlldyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gdGhpcy5zdWJtaXNzaW9uLnByZXZpZXcudGV4dDtcclxuICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh0aGlzLnN1Ym1pc3Npb24ucHJldmlldy5kYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHN1Ym1pc3Npb25zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3RoaXMuc3VibWlzc2lvbnNbMF0uaWR9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHByZXZpZXdlcihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gXCJcXG5cIjtcclxuICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gJyZuYnNwOyc7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcbiAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9nZXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9LyR7c3VibWlzc2lvbi5pZH1gLCB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbicpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gc3VibWlzc2lvbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBwcmV2aWV3X2ltZyhzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcbiAgICAgICAgaWYgKHN1Ym1pc3Npb24udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7c3VibWlzc2lvbi5pZH1gO1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgoc3VibWlzc2lvbi5kYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFuYWx5c2lzUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJpc1RleHQoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFRleHQoKVwiPnt7ZGlzcGxheSgpfX08L2E+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImlzSW1hZ2UoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFwiPnt7ZGlzcGxheSgpfX08L2E+PG1lbnUtdnVlIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBAb3Blbj1cInNlbGVjdFwiPjxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgOmhyZWY9XCJ0b0Rvd25sb2FkXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZydcIiBhbHQ9XCJEb3dubG9hZFwiPiBEb3dubG9hZDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBhbmFseXNpc1wiPjxhIEBjbGljay5wcmV2ZW50PVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICA8bWVudS12dWUgdi1vbjpvcGVuPVwic2VsZWN0XCI+PGE+e3tkaXNwbGF5KCl9fTwvYT48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgQGNsaWNrLnN0b3A9XCJzaG93QW5hbHlzaXMoaXRlbSlcIiAgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQuc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiPjxpbWcgOnNyYz1cIml0ZW0uaWNvblwiIDphbHQ9XCJpdGVtLm1lbnVcIj4ge3tpdGVtLm1lbnV9fTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbWVudS12dWU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vICBpbXBvcnQgTWVudVZ1ZSBmcm9tICdzaXRlLWNsL2pzL1VJL01lbnUudnVlJztcclxuICBjb25zdCBNZW51VnVlID0gU2l0ZS5TaXRlLk1lbnVWdWU7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBURVhUX1RZUEVTID0gWyd0ZXh0L3BsYWluJywgJ3RleHQvaHRtbCddXHJcbiAgZXhwb3J0IGNvbnN0IElNR19UWVBFUyA9IFsnaW1hZ2UvcG5nJywgJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvZ2lmJ107XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnYXNzaWdudGFnJywgJ3RhZycsICdzdWJtaXNzaW9uJywgJ2FuYWx5c2lzJywgJ3RlYW1pbmcnLCAndHlwZSddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBcdHJvb3Q6IFNpdGUucm9vdCxcclxuICAgICAgICAgICAgdG9Eb3dubG9hZDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBtZW51VnVlOiBNZW51VnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMudGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgIHRoaXMudG9Eb3dubG9hZCA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL2Rvd25sb2FkLyR7dGhpcy5zdWJtaXNzaW9uLmlkfWA7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGlzVGV4dCgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlICE9PSAncHJvZ3JhbScgJiYgVEVYVF9UWVBFUy5pbmRleE9mKHRoaXMuc3VibWlzc2lvbi50eXBlKSA+PSAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXNJbWFnZSgpIHtcclxuXHQgICAgICAgICAgcmV0dXJuIElNR19UWVBFUy5pbmRleE9mKHRoaXMuc3VibWlzc2lvbi50eXBlKSA+PSAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGlzcGxheSgpIHtcclxuICAgICAgICAgICAgICBsZXQgZGlzcCA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodGhpcy5zdWJtaXNzaW9uLmRhdGUsIFwibG9uZ1wiKTtcclxuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24ubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwICs9ICc6ICcgKyB0aGlzLnN1Ym1pc3Npb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5ieSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgXHRkaXNwICs9ICcgYnkgJyArIHRoaXMuc3VibWlzc2lvbi5ieTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRpc3A7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0VGV4dCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3JywgdGhpcy5zdWJtaXNzaW9uKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlld19pbWcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dBbmFseXNpcyhhbmFseXNpcykge1xyXG5cdCAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vYW5hbHlzaXMvJHt0aGlzLmFzc2lnbnRhZ30vJHt0aGlzLnRhZ30vJHthbmFseXNpcy50YWd9LyR7dGhpcy5zdWJtaXNzaW9uLmlkfWAsIHt9KVxyXG4gICAgICAgICAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHRjb25zdCBhbmFseXNpc1Jlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24tYW5hbHlzaXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgXHQgICAgICAgIFx0dGhpcy4kZW1pdCgncmVzdWx0JywgYW5hbHlzaXNSZXN1bHQpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgIFx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHQgICAgfSlcclxuICAgICAgICAgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICBcdCAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqL1xyXG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJy4vanMvU2VjdGlvblN0YXR1cyc7XHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL2pzL01lbWJlcnMvTWVtYmVyJztcclxuXHJcblNpdGUuU2VjdGlvblN0YXR1cyA9IFNlY3Rpb25TdGF0dXM7XHJcblNpdGUuTWVtYmVyID0gTWVtYmVyO1xyXG5cclxuaW1wb3J0IHtDb3Vyc2VGYWN0b3J5fSBmcm9tICcuL2pzL0NvdXJzZUZhY3RvcnknO1xyXG5cclxuLy8gVXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgVXNlcnMgb2JqZWN0XHJcbmxldCBDb3Vyc2UgPSBDb3Vyc2VGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xyXG5leHBvcnQge0NvdXJzZX07XHJcbiIsIi8qKlxyXG4gKiBDb3Vyc2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBTaXRlLkNvdXJzZSBpcyBhbiBpbnN0YW5jZSBvZiB0aGlzIG9iamVjdC5cclxuICpcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ291cnNlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7Q291cnNlfSBmcm9tICcuL0NvdXJzZSc7XHJcbmltcG9ydCB7TWVtYmVyfSBmcm9tICcuL01lbWJlcnMvTWVtYmVyJztcclxuXHJcbmltcG9ydCB7U3RvcmVNb2R1bGVDb3Vyc2V9IGZyb20gJy4vU3RhdGUvU3RvcmVNb2R1bGVDb3Vyc2UnO1xyXG5pbXBvcnQge1NlY3Rpb25TZWxlY3Rvcn0gZnJvbSAnLi9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3Rvcic7XHJcbmltcG9ydCB7U3VibWlzc2lvbn0gZnJvbSAnLi9TdWJtaXNzaW9uL1N1Ym1pc3Npb24nO1xyXG5pbXBvcnQge0Vycm9ySGVscH0gZnJvbSAnLi9FcnJvckhlbHAvRXJyb3JIZWxwJztcclxuaW1wb3J0IHtTcG9vZmluZ1Jlc3RvcmV9IGZyb20gJy4vVXRpbC9TcG9vZmluZ1Jlc3RvcmUnO1xyXG5pbXBvcnQge1NlY3Rpb25TdGF0dXN9IGZyb20gJy4vU2VjdGlvblN0YXR1cyc7XHJcblxyXG4vKipcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvdXJzZSBvYmplY3QuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvdXJzZUZhY3RvcnkgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIENvdXJzZSBvYmplY3QuXHJcbiAqXHJcbiAqIFRoaXMgYWxsb3dzIGZvciBpbmplY3Rpb24gb2YgdGhlIHN0b3JlIGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxyXG4gKiBAcGFyYW0gc2l0ZSBUaGUgU2l0ZSBvYmplY3RcclxuICogQHJldHVybiB7Q291cnNlfSBvYmplY3QuXHJcbiAqL1xyXG5Db3Vyc2VGYWN0b3J5LmNyZWF0ZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcbiAgICBsZXQgY291cnNlID0gbmV3IENvdXJzZSgpO1xyXG5cclxuICAgIHNpdGUuQ291cnNlID0gY291cnNlO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb2RpZnkgVXNlciB0byBhZGQgdGhlIGFiaWxpdHkgdG8gaW5zdGFudGlhdGVcclxuICAgIC8vIGFuIGFwcHJvcHJpYXRlIE1lbWJlciBvYmplY3RcclxuICAgIC8vXHJcbiAgICBTaXRlLlVzZXIuaW5zdGFudGlhdGVNZW1iZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5tZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZW1iZXIoZGF0YS5tZW1iZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdG9yZU1vZHVsZVVzZXJzID0gc2l0ZS5TdG9yZU1vZHVsZVVzZXJzO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBJbnN0YWxsIHRoZSBjb3Vyc2Ugc3RvcmUgbW9kdWxlc1xyXG4gICAgLy9cclxuICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XHJcbiAgICBpZihzdG9yZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ2NvdXJzZScsIFN0b3JlTW9kdWxlQ291cnNlKTtcclxuICAgICAgICBzdG9yZS5yZWdpc3Rlck1vZHVsZSgnbWVtYmVycycsIFN0b3JlTW9kdWxlVXNlcnMuY3JlYXRlKFxyXG4gICAgICAgICAgICAnL2FwaS9jb3Vyc2UvbWVtYmVycycsXHJcbiAgICAgICAgICAgICh1c2VyKSA9PiB7cmV0dXJuIHVzZXIubWVtYmVyLmlkOyB9XHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l0ZS5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBEZXRlY3QgdGhlIHBhc3NlZCBpbiBjb3Vyc2UgZGVmaW5pdGlvbiBpbmZvcm1hdGlvblxyXG4gICAgICAgIC8vIGFuZCBhZGQgaXQgdG8gdGhlIHN0b3JlLlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGxldCBlbjtcclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLWNvdXJzZScpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2NvdXJzZS9zZXQnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLWNvdXJzZS1zdGFmZicpKSkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2NvdXJzZS9zZXRTdGFmZicsIEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgaGF2ZSBtb2RpZmllZCB0aGUgVXNlciBvYmplY3Qgc28gdGhhdCBpdCB3aWxsIGtub3dcclxuICAgICAgICAvLyBob3cgdG8gYXR0YWNoIGEgbWVtYmVyc2hpcC4gVGhpcyBtZWFucyB3ZSBtdXN0IHJlbG9hZFxyXG4gICAgICAgIC8vIHRoZSB1c2VyIGluZm9ybWF0aW9uIHNvIGl0IGNhbiBjcmVhdGUgYSBuZXcgb2JqZWN0XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXVzZXInKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCd1c2VyL3NldCcsIEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgc2l0ZS5zdGFydCgoKSA9PiB7XHJcbiAgICAgICAgU2VjdGlvblNlbGVjdG9yLmluc3RhbGwoc2l0ZSk7XHJcbiAgICAgICAgU3VibWlzc2lvbi5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIEVycm9ySGVscC5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIFNwb29maW5nUmVzdG9yZS5pbnN0YWxsKHNpdGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBzaXRlLlNlY3Rpb25TdGF0dXMgPSBTZWN0aW9uU3RhdHVzO1xyXG4gICAgc2l0ZS5NZW1iZXIgPSBNZW1iZXI7XHJcblxyXG4gICAgcmV0dXJuIGNvdXJzZTtcclxufVxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IEVycm9ySGVscCA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG4gICAgY29uc3QgY29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICBpZihjb250ZW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBvcHRpb25zID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChmb3JtKTtcclxuXHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBidXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBidXR0b24udmFsdWUgPSBcIkVycm9yIEhlbHBcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBsZXQgdXJsID0gU2l0ZS5yb290ICsgJy9jbC9lcnJvcmhlbHAnO1xyXG4gICAgaWYob3B0aW9ucy5hc3NpZ24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHVybCArPSAnLycgKyBvcHRpb25zLmFzc2lnbjtcclxuXHJcbiAgICAgICAgaWYob3B0aW9ucy50YWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy50YWc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBlbmNvZGVVUkkoaW5wdXQudmFsdWUudG9VcHBlckNhc2UoKS50cmltKCkpO1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKGAke3VybH0/ZT0ke2Vycm9yfWAsIFwiRXJyb3IgSGVscFwiLCAnd2lkdGg9NjAwLCBoZWlnaHQ9NTAwLCBzY3JvbGxiYXJzPXllcycpO1xyXG4gICAgfSlcclxufVxyXG5cclxuRXJyb3JIZWxwLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtZXJyb3ItaGVscCcpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgRXJyb3JIZWxwKGVsZW1lbnRzW2ldLCBzaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge01lbWJlcnNoaXB9IGZyb20gJy4uLy4uLy4uL3VzZXJzL2pzL1VzZXJzL01lbWJlcnNoaXAuanMnO1xyXG5cclxuLyoqXHJcbiAqIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxubGV0IE1lbWJlciA9IGZ1bmN0aW9uKGpzb24pIHtcclxuICAgIE1lbWJlcnNoaXAuY2FsbCh0aGlzKTtcclxuXHJcbiAgICBsZXQgcm9sZSA9ICdHJztcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICB0aGlzLnNlbWVzdGVyID0ganNvbi5zZW1lc3RlcjtcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBqc29uLnNlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0ganNvbi5jcmVhdGVkICE9PSB1bmRlZmluZWQgPyBqc29uLmNyZWF0ZWQgOiBudWxsO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IG51bGw7ICAgIC8vIFdoZW4gdXNlciB3YXMgY3JlYXRlZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVUxBID0gJ0wnOyAgICAgICAvLy88IFVuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50XHJcbk1lbWJlci5UQSA9ICdFJzsgICAgICAgIC8vLzwgVGVhY2hpbmcgYXNzaXN0YW50XHJcbk1lbWJlci5JTlNUUlVDVE9SID0gJ0knOyAgICAvLy88IENvdXJzZSBpbnN0cnVjdG9yXHJcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cclxuXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCByb2xlcyA9IHt9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tNZW1iZXIuRFJPUFBFRF0gPSB7bmFtZTogJ0Ryb3BwZWQnLCBwcmlvcml0eTogMn07XHJcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RVREVOVF0gPSB7bmFtZTogJ1N0dWRlbnQnLCBwcmlvcml0eTogNH07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RBRkZdID0ge25hbWU6ICdTdGFmZicsIHByaW9yaXR5OiA1LCBza2lwOiB0cnVlfTtcclxuXHRyb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG5cdHJvbGVzW01lbWJlci5VTEFdID0ge25hbWU6ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVUxBJywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50Jywgc2hvcnQ6ICdUQScsIHByaW9yaXR5OiA4fTtcclxuICAgIHJvbGVzW01lbWJlci5JTlNUUlVDVE9SXSA9IHtuYW1lOiAnSW5zdHJ1Y3RvcicsIHByaW9yaXR5OiA5fTtcclxuICAgIHJvbGVzW01lbWJlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDEwMH07XHJcblxyXG4gICAgcmV0dXJuIHJvbGVzO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuXHJcblxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnQgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBmb3IobGV0IHByb3BlcnR5IGluIGRhdGEpIHtcclxuICAgICAgICB0aGlzW3Byb3BlcnR5XSA9IGRhdGFbcHJvcGVydHldO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7QXNzaWdubWVudH0gZnJvbSAnLi9Bc3NpZ25tZW50JztcclxuXHJcbmV4cG9ydCBsZXQgQXNzaWdubWVudENhdGVnb3J5ID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy50YWcgPSBkYXRhLnRhZztcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuZ3JhZGluZyA9IGRhdGEuZ3JhZGluZyAhPT0gdW5kZWZpbmVkID8gZGF0YS5ncmFkaW5nIDogbnVsbDtcclxuXHJcbiAgICB0aGlzLmFzc2lnbm1lbnRzID0gW107XHJcbiAgICB0aGlzLmFzc2lnbm1lbnRzQnlUYWcgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGFzc2lnbiBvZiBkYXRhLmFzc2lnbm1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KGFzc2lnbik7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xyXG4gICAgICAgIHRoaXMuYXNzaWdubWVudHNCeVRhZ1thc3NpZ25tZW50LnRhZ10gPSBhc3NpZ25tZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnQgPSB0aGlzLmFzc2lnbm1lbnRzQnlUYWdbdGFnXTtcclxuICAgICAgICByZXR1cm4gYXNzaWdubWVudCAhPT0gdW5kZWZpbmVkID8gYXNzaWdubWVudCA6IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0Fzc2lnbm1lbnRDYXRlZ29yeX0gZnJvbSAnLi9Bc3NpZ25tZW50Q2F0ZWdvcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFzc2lnbm1lbnRzID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgZm9yKGxldCBjYXRlZ29yeSBvZiBkYXRhLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChuZXcgQXNzaWdubWVudENhdGVnb3J5KGNhdGVnb3J5KSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEFzc2lnbm1lbnQgPSBmdW5jdGlvbih0YWcpIHtcclxuICAgICAgICBmb3IobGV0IGNhdGVnb3J5IG9mIHRoaXMuY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBsZXQgYXNzaWdubWVudCA9IGNhdGVnb3J5LmdldEFzc2lnbm1lbnQodGFnKTtcclxuICAgICAgICAgICAgaWYoYXNzaWdubWVudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2lnbm1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBBYnN0cmFjdGlvbiBvZiB0aGUgY3VycmVudCBjb3Vyc2VcclxuICovXHJcblxyXG5pbXBvcnQge1NlY3Rpb259IGZyb20gJy4vU2VjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQ291cnNlID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cclxuICAgIHRoaXMuYWNjb3VudCA9IGRhdGEuYWNjb3VudDtcclxuICAgIHRoaXMuZGVzYyA9IGRhdGEuZGVzYztcclxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcclxuICAgIHRoaXMuc2VjdGlvbnNCeUlkID0gW107XHJcblxyXG4gICAgZm9yKGxldCBzZWN0aW9uIG9mIGRhdGEuc2VjdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBzID0gbmV3IFNlY3Rpb24oc2VjdGlvbik7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uc0J5SWRbc2VjdGlvbi5pZF0gPSBzO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzKTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtBc3NpZ25tZW50c30gZnJvbSAnLi9Bc3NpZ25tZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xyXG4gICAgdGhpcy5zZW1lc3RlciA9IGRhdGEuc2VtZXN0ZXI7XHJcbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGU7XHJcbiAgICB0aGlzLmFzc2lnbm1lbnRzID0gbmV3IEFzc2lnbm1lbnRzKGRhdGEuYXNzaWdubWVudHMpO1xyXG5cclxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnRzLmdldEFzc2lnbm1lbnQodGFnKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhlIHNlY3Rpb24gc2VsZWN0b3IgcGFnZSAvY2wvc2VjdGlvbnNlbGVjdG9yXHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhZ2UgZWxlbWVudCAoI2NsLXNlY3Rpb24tc2VsZWN0b3IpXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBTZWN0aW9uU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzaXRlKSB7XHJcbiAgICBsZXQgVnVlID0gc2l0ZS5WdWU7XHJcblxyXG4gICAgY29uc3QgaW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGluZm8uc2VjdGlvbnM7XHJcbiAgICBjb25zdCBiZWZvcmUgPSBpbmZvLmJlZm9yZTtcclxuICAgIGNvbnN0IGFmdGVyID0gaW5mby5hZnRlcjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgXHJcbjxkaXYgaWQ9XCJjbC1zZWN0aW9uLXNlbGVjdG9yXCI+XHJcbiAgPHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+PC9zaXRlLWhlYWRlcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgdi1odG1sPVwiYmVmb3JlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcmJveCBjbC1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgPHAgdi1mb3I9XCJzZWN0aW9uIGluIHNlY3Rpb25zXCI+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInNlbGVjdChzZWN0aW9uKVwiPnt7c2VjdGlvbi5jb3Vyc2V9fSB7e3NlY3Rpb24ubmljZX19IFNlY3Rpb24ge3tzZWN0aW9uLnNlY3Rpb259fTwvYnV0dG9uPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCIgdi1odG1sPVwiYWZ0ZXJcIj48L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgPHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgIGNvbnN0IEZvb3RlciA9IHNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgbGV0IHJvdXRlciA9IG5ldyBTaXRlLlZ1ZVJvdXRlcih7XHJcbiAgICAgICAgbW9kZTogJ2hpc3RvcnknLFxyXG4gICAgICAgIHJvdXRlczogW11cclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBWdWUoe1xyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBlbDogZWxlbWVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2VjdGlvbiBTZWxlY3RvcicsXHJcbiAgICAgICAgICAgIGJlZm9yZTogYmVmb3JlLFxyXG4gICAgICAgICAgICBhZnRlcjogYWZ0ZXIsXHJcbiAgICAgICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBzZWN0aW9uLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24uc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9zZWN0aW9uc2VsZWN0JywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVkaXJlY3QgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0ID0gU2l0ZS5yb290O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlclxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblNlY3Rpb25TZWxlY3Rvci5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVuO1xyXG4gICAgaWYoIChlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1zZWN0aW9uLXNlbGVjdG9yJykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgbmV3IFNlY3Rpb25TZWxlY3Rvcihlbiwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIENvbnN0YW50cyB0aGF0IHJlcHJlc2VudCBTZWN0aW9uU3RhdHVzIHBvc3NpYmxlIHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFNlY3Rpb25TdGF0dXMgPSBmdW5jdGlvbigpIHtcclxufVxyXG5cclxuLy8gQ29uc3RhbnRzIG11c3QgbWF0Y2ggdGhvc2UgaW4gU2VjdGlvblN0YXR1cy5waHBcclxuU2VjdGlvblN0YXR1cy5OT1RWSVNJVEVEID0gJ04nO1x0Ly8vPCAlU2VjdGlvbiBoYXMgbm90IGJlZW4gdmlzaXRlZCBieSB0aGUgdXNlclxyXG5TZWN0aW9uU3RhdHVzLlZJU0lURUQgPSAnVic7XHQgICAgLy8vPCAlU2VjdGlvbiBoYXMgYmVlbiB2aXNpdGVkLCBidXQgaXMgbm90IHlldCBkb25lXHJcblNlY3Rpb25TdGF0dXMuRE9ORSA9ICdEJztcdFx0ICAgIC8vLzwgJVNlY3Rpb24gaXMgY29tcGxldGVkXHJcblxyXG5TZWN0aW9uU3RhdHVzLnRvU3RyaW5nID0gZnVuY3Rpb24oc3RhdHVzKSB7XHJcbiAgICBpZihzdGF0dXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaChzdGF0dXMpe1xyXG4gICAgICAgIGNhc2UgU2VjdGlvblN0YXR1cy5OT1RWSVNJVEVEOlxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnTm90IHlldCB2aXNpdGVkJztcclxuXHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLlZJU0lURUQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnVmlzaXRlZCc7XHJcblxyXG4gICAgICAgIGNhc2UgU2VjdGlvblN0YXR1cy5ET05FOlxyXG4gICAgICAgICAgICByZXR1cm4gJ0NvbXBsZXRlZCc7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoZSBWdWV4IHN0b3JlIG1vZHVsZSBmb3IgY291cnNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtDb3Vyc2V9IGZyb20gJy4uL01vZGVscy9Db3Vyc2UnO1xyXG5cclxuZXhwb3J0IGxldCBTdG9yZU1vZHVsZUNvdXJzZSA9IHtcclxuICAgIG5hbWVzcGFjZWQ6IHRydWUsXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICAgIGNvdXJzZTogbnVsbCxcclxuICAgICAgICBzdGFmZjogW11cclxuICAgIH0sXHJcbiAgICBtdXRhdGlvbnM6IHtcclxuICAgICAgICBzZXQoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgc3RhdGUuY291cnNlID0gbmV3IENvdXJzZShkYXRhKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0U3RhZmYoc3RhdGUsIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHN0YWZmID0ge307XHJcbiAgICAgICAgICAgIGZvcihsZXQgZCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBTaXRlLlVzZXIoZCk7XHJcbiAgICAgICAgICAgICAgICBzdGFmZlt1c2VyLm1lbWJlci5pZF0gPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdGFmZiA9IHN0YWZmO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgc2VjdGlvbjogKHN0YXRlKSA9PiAoc2VtZXN0ZXIsIHNlY3Rpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2Ygc3RhdGUuY291cnNlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLnNlbWVzdGVyID09PSBzZW1lc3RlciAmJiBzZWN0aW9uLmlkID09PSBzZWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NpZ25tZW50OiAoc3RhdGUsIGdldHRlcnMpID0+IChzZW1lc3Rlciwgc2VjdGlvbklkLCBhc3NpZ25UYWcpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBzZWN0aW9uIG9mIHN0YXRlLmNvdXJzZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5zZW1lc3RlciA9PT0gc2VtZXN0ZXIgJiYgc2VjdGlvbi5pZCA9PT0gc2VjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhZmY6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gc3RhdGUuc3RhZmZbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gdW5kZWZpbmVkID8gdXNlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuL1N1Ym1pc3Npb24udnVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXNzaW9uID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG5cclxuICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc3RvcmUsXHJcblx0ICAgIHNpdGUsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5gXHJcbiAgICB9KVxyXG59XHJcblxyXG5TdWJtaXNzaW9uLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc3VibWlzc2lvbicpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgU3VibWlzc2lvbihlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IFNwb29maW5nUmVzdG9yZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NsLWhvbWUtY29udHJvbCcpO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdyZXN0b3JlJztcclxuICAgIHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3Nwb29mJywge3Jlc3RvcmU6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHNpdGUucm9vdCArICcvJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgLy8gaWYoY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIC8vXHJcbiAgICAvLyBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgLy9cclxuICAgIC8vIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgLy8gYnV0dG9uLnZhbHVlID0gXCJFcnJvciBIZWxwXCI7XHJcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IHVybCA9IFNpdGUucm9vdCArICcvY2wvZXJyb3JoZWxwJztcclxuICAgIC8vIGlmKG9wdGlvbnMuYXNzaWduICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy5hc3NpZ247XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmKG9wdGlvbnMudGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMudGFnO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnN0IGVycm9yID0gZW5jb2RlVVJJKGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkudHJpbSgpKTtcclxuICAgIC8vICAgICB3aW5kb3cub3BlbihgJHt1cmx9P2U9JHtlcnJvcn1gLCBcIkVycm9yIEhlbHBcIiwgJ3dpZHRoPTYwMCwgaGVpZ2h0PTUwMCwgc2Nyb2xsYmFycz15ZXMnKTtcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcblNwb29maW5nUmVzdG9yZS5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXNwb29maW5nLXJlc3RvcmUnKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3IFNwb29maW5nUmVzdG9yZShlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgbWVtYmVyc2hpcCBhc3NvY2lhdGVkIHdpdGggYSB1c2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluaGVyaXRlZCBieVxyXG4gKiBhY3R1YWwgbWVtYmVyc2hpcCBvYmplY3RzLlxyXG4gKi9cclxuXHJcbnZhciBNZW1iZXJzaGlwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8vIFRoZSBVc2VyIG9iamVjdCBmb3IgdGhpcyBtZW1iZXJzaGlwXHJcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge01lbWJlcnNoaXB9O1xyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LTM2MmJiNzE1NzMuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LTM2MmJiNzE1NzMuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS0zNjJiYjcxNTczLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS00OGM3Nzg1YTI0LnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS0zNjJiYjcxNTczLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS00OGM3Nzg1YTI0LnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LTM2MmJiNzE1NzMuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LTM2MmJiNzE1NzMuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvYmFiZWwtbG9hZGVyLXZpcnR1YWwtOGQ3OGY0MmQ0My8wL2NhY2hlL2JhYmVsLWxvYWRlci1ucG0tOC4yLjItYjRlNjAwYzJjNS0zNjJiYjcxNTczLnppcC9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yWzBdLnJ1bGVzWzBdLnVzZSEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS00OGM3Nzg1YTI0LnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC9iYWJlbC1sb2FkZXItdmlydHVhbC04ZDc4ZjQyZDQzLzAvY2FjaGUvYmFiZWwtbG9hZGVyLW5wbS04LjIuMi1iNGU2MDBjMmM1LTM2MmJiNzE1NzMuemlwL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTJbMF0ucnVsZXNbMF0udXNlIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL2JhYmVsLWxvYWRlci12aXJ0dWFsLThkNzhmNDJkNDMvMC9jYWNoZS9iYWJlbC1sb2FkZXItbnBtLTguMi4yLWI0ZTYwMGMyYzUtMzYyYmI3MTU3My56aXAvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMlswXS5ydWxlc1swXS51c2UhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXN1Ym1pc3Npb25cIiB9LFxuICAgIFtcbiAgICAgIF92bS5zdWJtaXNzaW9uLnN1Ym1pdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAhX3ZtLnN1Ym1pc3Npb24ub3BlblxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVGhpcyBhc3NpZ25tZW50IGlzIG5vdCBvcGVuIGZvciBzdWJtaXNzaW9ucy5cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zdGFmZlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IHByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoX3ZtLnN1Ym1pdHRlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IG5ld19zdWJtaXNzaW9uczogX3ZtLm5ld1N1Ym1pc3Npb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi5vcGVuXG4gICAgICAgICAgICAgICAgPyBfYyhfdm0uc3VibWl0dGVyLCB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgbmV3X3N1Ym1pc3Npb25zOiBfdm0ubmV3U3VibWlzc2lvbnMgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInN1Ym1pdHRlZFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uLCBzdWJtaXNzaW9uczogX3ZtLnN1Ym1pc3Npb25zIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zdWJtaXNzaW9uLmFkZGl0aW9uYWwgIT09IG51bGxcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc3VibWlzc2lvbi5hZGRpdGlvbmFsKSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoXCIuLi5TdGFmZiBvbmx5IGZvciBzdWJtaXNzaW9uIHRlc3RpbmcuLi5cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICAgIHRhcmdldDogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnN1Ym1pdCB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJTdWJtaXQ6IFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgbmFtZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiVXBsb2FkIEZpbGVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlmcmFtZVwiLCB7XG4gICAgICAgICAgcmVmOiBcImlmcmFtZVwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnLCBzcmM6IFwiXCIgfSxcbiAgICAgICAgICBvbjogeyBsb2FkOiBfdm0ubG9hZCB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VibWl0OiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVwbG9hZCBGaWxlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgIHJlZjogXCJpZnJhbWVcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IFwiMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZywgc3JjOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgbG9hZDogX3ZtLmxvYWQgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICBhdHRyczogeyBtZXRob2Q6IFwicG9zdFwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdC5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW19jKFwiZGl2XCIsIHsgcmVmOiBcImVkaXRvclwiIH0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJTdWJtaXRcIiB9IH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcInBcIiwgW192bS5fdihcIkhlbGxvXCIpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzaG91dG91dFwiIH0sIFtcbiAgICAgIF92bS5fdihcIlN1Ym1pc3Npb24gdHlwZSBcIiksXG4gICAgICBfYyhcImVtXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vcHRpb25zLnR5cGUpKV0pLFxuICAgICAgX3ZtLl92KFwiIGlzIG5vdCBzdXBwb3J0ZWRcIilcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5zdWJtaXNzaW9uLm1hbnVhbCAhPT0gdHJ1ZVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5zdWJtaXNzaW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsYXJnZSBjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIHN1Ym1pc3Npb25zLCB5ZXQuXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3VibWlzc2lvbnMsIGZ1bmN0aW9uKHN1Ym1pdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXR0ZWQtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLnN1Ym1pc3Npb24udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5zdWJtaXNzaW9uLmFzc2lnblRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IF92bS5zdWJtaXNzaW9uLnRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBzdWJtaXR0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzaXM6IF92bS5zdWJtaXNzaW9uLmFuYWx5c2lzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1pbmc6IF92bS5zdWJtaXNzaW9uLnRlYW1pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IF92bS5hbmFseXNpc1Jlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3X2ltZzogX3ZtLnByZXZpZXdfaW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IF92bS5wcmV2aWV3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcInByb2dyYW1cIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDbGljayBvbiBhbnkgc3VibWlzc2lvbiB0byB2aWV3IGFuZCBmb3Igc3VibWlzc2lvbiBvcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5wcmV2aWV3VHh0ICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXcgeWVsbG93LXBhZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucHJldmlld1R4dCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3LXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnByZXZpZXdUaW1lKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucmVzdWx0ICE9PSBudWxsXG4gICAgICA/IF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtYW5hbHlzaXNcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmVzdWx0KSldKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5wcmV2aWV3SW1nICE9PSBudWxsXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfdm0ucHJldmlld0ltZyAhPT0gbnVsbFxuICAgICAgICAgICAgPyBfYyhcImZpZ3VyZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXdcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmOiBfdm0ucHJldmlld0ltZyxcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS5wcmV2aWV3SW1nIH0gfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLXByZXZpZXctdGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByZXZpZXdUaW1lKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5zdWJtaXNzaW9uLmh0bWwgIT09IHVuZGVmaW5lZFxuICAgICAgPyBfYyhcImRpdlwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdWJtaXNzaW9uLmh0bWwpIH0gfSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW19jKFwidGhcIiwgW192bS5fdihcIlN1Ym1pc3Npb25zXCIpXSldKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uaXNUZXh0KClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdFRleHQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0uaXNJbWFnZSgpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcIm1lbnUtdnVlXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiwgb246IHsgb3BlbjogX3ZtLnNlbGVjdCB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXG4gICAgICAgICAgICBfYyhcIm1lbnUtdnVlXCIsIHsgb246IHsgb3BlbjogX3ZtLnNlbGVjdCB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV0pLFxuICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5yb290ICsgXCIvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTWVudVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnRvRG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uYW5hbHlzaXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcQ291cnNlTGliXFxcXGNvbXBsZXRlXFxcXC55YXJuXFxcXGNhY2hlXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy1kZWRlZmI4NzI4LnppcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNWY0NjYwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNWY0NjYwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTVmNDY2MDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS00OGM3Nzg1YTI0LnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPbmVEcml2ZVxcXFxQcm9qZWN0c1xcXFxDb3Vyc2VMaWJcXFxcY29tcGxldGVcXFxcLnlhcm5cXFxcY2FjaGVcXFxcdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LWRlZGVmYjg3MjguemlwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyYjYyMGMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyYjYyMGMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDJiNjIwYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhYTFlNTcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcQ291cnNlTGliXFxcXGNvbXBsZXRlXFxcXC55YXJuXFxcXGNhY2hlXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy1kZWRlZmI4NzI4LnppcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYWExZTU3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FhMWU1NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8ueWFybi8kJHZpcnR1YWwvdnVlLWxvYWRlci12aXJ0dWFsLWRkMGRjOWJmMzQvMC9jYWNoZS92dWUtbG9hZGVyLW5wbS0xNS45LjctYzkyY2NlMzQ4ZS00OGM3Nzg1YTI0LnppcC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPbmVEcml2ZVxcXFxQcm9qZWN0c1xcXFxDb3Vyc2VMaWJcXFxcY29tcGxldGVcXFxcLnlhcm5cXFxcY2FjaGVcXFxcdnVlLWhvdC1yZWxvYWQtYXBpLW5wbS0yLjMuNC01NDlhZTI2MzM3LWRlZGVmYjg3MjguemlwXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxMWQwYTk5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxMWQwYTk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMTFkMGE5OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy55YXJuLyQkdmlydHVhbC92dWUtbG9hZGVyLXZpcnR1YWwtZGQwZGM5YmYzNC8wL2NhY2hlL3Z1ZS1sb2FkZXItbnBtLTE1LjkuNy1jOTJjY2UzNDhlLTQ4Yzc3ODVhMjQuemlwL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXE9uZURyaXZlXFxcXFByb2plY3RzXFxcXENvdXJzZUxpYlxcXFxjb21wbGV0ZVxcXFwueWFyblxcXFxjYWNoZVxcXFx2dWUtaG90LXJlbG9hZC1hcGktbnBtLTIuMy40LTU0OWFlMjYzMzctZGVkZWZiODcyOC56aXBcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZmZDQ4MGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZmZDQ4MGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2ZmQ0ODBlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcQ291cnNlTGliXFxcXGNvbXBsZXRlXFxcXC55YXJuXFxcXGNhY2hlXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy1kZWRlZmI4NzI4LnppcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MjRkYWQ3NycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjRkYWQ3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLnlhcm4vJCR2aXJ0dWFsL3Z1ZS1sb2FkZXItdmlydHVhbC1kZDBkYzliZjM0LzAvY2FjaGUvdnVlLWxvYWRlci1ucG0tMTUuOS43LWM5MmNjZTM0OGUtNDhjNzc4NWEyNC56aXAvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcQ291cnNlTGliXFxcXGNvbXBsZXRlXFxcXC55YXJuXFxcXGNhY2hlXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaS1ucG0tMi4zLjQtNTQ5YWUyNjMzNy1kZWRlZmI4NzI4LnppcFxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MDY5NDNhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MDY5NDNhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTA2OTQzYWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJDb3Vyc2VcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3Vyc2VsaWJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY291cnNlbGliXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi92ZW5kb3IvY2wvY291cnNlL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9