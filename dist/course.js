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
return (window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["Course"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! users-cl/js/Vue/UserVueBase.vue */ "./vendor/cl/users/js/Vue/UserVueBase.vue");
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
/* harmony import */ var site_cl_js_Vue_Mask_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site-cl/js/Vue/Mask.vue */ "./vendor/cl/site/js/Vue/Mask.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  'extends': users_cl_js_Vue_UserVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: ['json'],
  data: function data() {
    return {
      editing: false,
      email: '',
      mask: false
    };
  },
  components: {
    maskVue: site_cl_js_Vue_Mask_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.setTitle('About ' + this.user.displayName());
    this.email = this.user.email;
  },
  methods: {
    edit: function edit() {
      this.editing = true;
    },
    cancel: function cancel() {
      this.editing = false;
    },
    submit: function submit() {
      var _this = this;

      if (!this.validEmail(this.email)) {
        new dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox('Invalid Email!', 'Must provide a valid email address.', dialog_cl__WEBPACK_IMPORTED_MODULE_1__["default"].MessageBox.OK, function () {});
        return;
      }

      this.mask = true;
      var params = {
        email: this.email
      };
      Site.api.post('/api/users/userupdate', params).then(function (response) {
        _this.mask = false;

        if (!response.hasError()) {
          var user = new Users.User(response.getData('user').attributes);

          _this.$store.commit('user/set', user);

          console.log(_this.$store.state.user.user);
          _this.editing = false;
        } else {
          Site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.mask = false;
        Site.toast(_this, error);
      });
    },
    validEmail: function validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
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
/* harmony import */ var site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/APIResponse */ "./vendor/cl/site/js/APIResponse.js");
//
//
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
      var response = new site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__["APIResponse"](JSON.parse(json));

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        Site.toast(this, "Submission successfully saved to the server");
      } else {
        Site.toast(this, response);
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
/* harmony import */ var site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/APIResponse */ "./vendor/cl/site/js/APIResponse.js");
//
//
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
        response = new site_cl_js_APIResponse__WEBPACK_IMPORTED_MODULE_0__["APIResponse"](JSON.parse(json));
      } catch (exception) {
        console.log(exception);
        console.log(json);
        Site.toast(this, "Error during submission");
        return;
      }

      if (!response.hasError()) {
        this.$refs['form'].reset();
        this.$emit('new_submissions', response.getData('submissions').attributes);
        Site.toast(this, "Submission successfully saved to the server");
      } else {
        Site.toast(this, response);
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
/* harmony import */ var site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/UI/Editor */ "./vendor/cl/site/js/UI/Editor.js");
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
    this.editor = new site_cl_js_UI_Editor__WEBPACK_IMPORTED_MODULE_0__["Editor"](element, {
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
      }).catch(function (error) {
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
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(this.submissions[0].date);
    }

    if (this.submission.preview !== undefined) {
      this.previewTxt = this.submission.preview.text;
      this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(this.submission.preview.date);
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
          _this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(_submission.date);
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    },
    preview_img: function preview_img(submission) {
      var service = this.submission.teaming === null ? 'course' : 'team';

      if (submission.type.substr(0, 6) === 'image/') {
        this.previewImg = "".concat(this.$site.root, "/cl/").concat(service, "/submission/view/").concat(submission.id);
        this.previewTime = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_1__["TimeFormatter"].relativeUNIX(submission.date);
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
/* harmony import */ var site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/TimeFormatter */ "./vendor/cl/site/js/TimeFormatter.js");
/* harmony import */ var site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site-cl/js/UI/Menu.vue */ "./vendor/cl/site/js/UI/Menu.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var TEXT_TYPES = ['text/plain', 'text/html'];
var IMG_TYPES = ['image/png', 'image/jpeg', 'image/gif'];
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['assigntag', 'tag', 'submission', 'analysis', 'teaming'],
  data: function data() {
    return {
      root: Site.root,
      toDownload: null
    };
  },
  components: {
    menuVue: site_cl_js_UI_Menu_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    var service = this.teaming !== null ? 'team' : 'course';
    this.toDownload = "".concat(this.$site.root, "/cl/").concat(service, "/submission/download/").concat(this.submission.id);
  },
  methods: {
    isText: function isText() {
      return TEXT_TYPES.indexOf(this.submission.type) >= 0;
    },
    isImage: function isImage() {
      return IMG_TYPES.indexOf(this.submission.type) >= 0;
    },
    display: function display() {
      var disp = site_cl_js_TimeFormatter__WEBPACK_IMPORTED_MODULE_0__["TimeFormatter"].absoluteUNIX(this.submission.date, "long");

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
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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

/**
 * General-purpose menu system Vue component.
 *
 * Supports simple menus where a click opens and closes a pull-down menu.
 * @example
 * // Include this component
 * import MenuVue from 'site-cl/js/UI/Menu.vue';
 * @example
 * // Add as a component to the Vue:
 * components: {
 *   menuVue: MenuVue
 * },
 * @example
 * // Use in the template
 * <menu-vue v-on:open="select"><a class="float-right"><img :src="root + '/vendor/cl/site/img/menubars.png'" alt="Menu"></a>
 *   <ul>
 *     <li><a>First option</a></li>
 *     <li><a>Second option</a></li>
 *   </ul>
 * </menu-vue>
 * @constructor MenuVue
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['addClass'],
  data: function data() {
    return {
      useClass: 'cl-menu'
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.addClass !== undefined) {
      this.useClass += ' ' + this.addClass;
    } //
    // Collect up the elements
    //


    var links = [];
    var uls = [];
    var open = false;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.$refs['menu'].children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;

        if (child.tagName === 'A') {
          links.push(child);
        } else if (child.tagName === 'UL') {
          uls.push(child);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    var closeListener = function closeListener(event) {
      // Did we click on something that is a child of
      // this menu div?
      var element = event.target;

      do {
        // We are okay with clicks on children of
        // the pop-up menu
        if (uls.indexOf(element) >= 0) {
          break;
        }

        if (element === _this.$refs['menu']) {
          return;
        }

        element = element.parentElement;
      } while (element !== null);

      closeAll();
    }; //
    // Close all menus
    //


    var closeAll = function closeAll() {
      // This timeout ensures the click on
      // the menu is processed before the menu
      // is hidden.
      setTimeout(function () {
        for (var _i = 0; _i < uls.length; _i++) {
          var ul = uls[_i];
          ul.style.display = 'none';
        }
      }, 200);
      open = false;
      document.removeEventListener('click', closeListener);
      document.removeEventListener('mousedown', closeListener);
    }; //
    // Click listeners on the links
    //


    for (var _i2 = 0; _i2 < links.length; _i2++) {
      var link = links[_i2];
      link.addEventListener('click', function (event) {
        event.preventDefault(); // We have clicked on a menu link

        if (!open) {
          // Open the menu!
          open = true;

          for (var _i3 = 0; _i3 < uls.length; _i3++) {
            var ul = uls[_i3];
            ul.style.display = 'block';
          }

          document.addEventListener('click', closeListener);
          document.addEventListener('mousedown', closeListener);

          _this.$emit('open');
        } else {
          // Close the menu
          closeAll();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//

/**
 * Masking Vue component.
 *
 * When enabled, a translucent mask with an optional message
 * is displayed and controls are disabled.
 *
 * Must be a child of an element with a position setting
 * in CSS. When mask is true, the interface is disabled by
 * an overlay mask.
 * @constructor MaskVue
 * @example
 * // Include this component
 * import MaskVue from 'site-cl/js/Vue/Mask.vue';
 * @example
 *      data: function() {
 *        return {
 *            mask: false
 *        }
 *     },
 *     components: {
 *      maskVue: MaskVue
 *     }
 * @example
 * <mask-vue :mask="mask">Sending Email...</mask-vue>
 * @example
 * this.mask = true;  // Enable the mask
 * this.mask = false; // Disable the mask
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['mask'],
  data: function data() {
    return {
      slotDelay: true,
      timer: null
    };
  },
  watch: {
    mask: function mask() {
      var _this = this;

      if (this.timer !== null) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.slotDelay = false;
      this.timer = setTimeout(function () {
        _this.slotDelay = true;
      }, 1000);
    }
  },
  computed: {
    maskClass: function maskClass() {
      return this.mask ? 'cl-mask mask' : 'cl-mask';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
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
  props: ['menu'],
  data: function data() {
    return {
      homeLink: Site.root + '/'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
  * Base component for pages.
  * @constructor PageVueBase
  */
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      /**
        * Site object
        * @memberof PageVueBase
        * @instance
        * @member {Site} site
        */
      site: Site,

      /**
        * Site root path (Site.root)
        * @memberof PageVueBase
        * @instance
        * @member {string} root
        */
      root: Site.root
    };
  },
  methods: {
    /**
      * Set the page title
      * @memberof PageVueBase
      * @instance
     * @param {string} title
     */
    setTitle: function setTitle(title) {
      this.$parent.setTitle(title);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: Fetcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return Fetcher; });
//
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
 * @file
 * Fetcher component displays "Fetching" and a "more" button.
 */

/**
 * Fetcher function used to update this object.
 * @constructor
 */
var Fetcher = function Fetcher() {
  this.more = false; // Indicates there is more to fetch

  this.fetching = false; // Set true while we are fetching

  this.fetched = false; // Set true when we have fetched something...

  this.start = function (single) {
    this.fetching = true;

    if (single !== true) {
      this.more = false;
    }
  };

  this.done = function (single) {
    this.fetching = false;

    if (single !== true) {
      this.fetched = true;
    }
  };

  this.reset = function () {
    this.more = false;
    this.fetching = false;
    this.fetched = false;
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    fetcher: {
      type: Object,
      'default': null
    },
    fetching: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    'fetcher.fetching': function fetcherFetching(to, from) {
      this.setFetching();
    },
    fetching: function fetching(to, from) {
      this.setFetching();
    }
  },
  data: function data() {
    return {
      showFetching: false,
      delayedFetching: false,
      timer: null
    };
  },
  mounted: function mounted() {
    this.setFetching();
  },
  methods: {
    fetchMore: function fetchMore() {
      this.$parent.fetchMore();
    },
    setFetching: function setFetching() {
      var _this = this;

      // Are we currently fetching?
      var showFetching = this.fetcher !== null && this.fetcher.fetching || this.fetching;

      if (showFetching && !this.showFetching) {
        // Fetching is becoming active
        this.timer = setTimeout(function () {
          _this.delayedFetching = true;
        }, 1000);
      } else if (!showFetching && this.showFetching) {
        clearTimeout(this.timer);
        this.time = null;
        this.delayedFetching = false;
      }

      this.showFetching = showFetching;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site-cl/js/Vue/PageVueBase.vue */ "./vendor/cl/site/js/Vue/PageVueBase.vue");
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
  'extends': site_cl_js_Vue_PageVueBase_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  computed: {
    user: function user() {
      return this.$store.state.user.user;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.cl-editor {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 5em;\n  height: 10em;\n  padding: 0;\n  overflow: hidden;\n  margin: 1em 0;\n}\n\ndiv.cl-editor textarea {\n  position: absolute;\n  box-sizing: border-box;\n  resize: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ntable tr td[data-v-fe3f98e8]:nth-child(2) {\n  min-width: 195px;\n}\nbutton[data-v-fe3f98e8] {\n  width: 7em;\n}\ninput[type=email][data-v-fe3f98e8] {\n  width: 175px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.fetching[data-v-43b26bcb] {\n  height: 28px;\n  margin: 1em 0;\n}\ndiv.fetching p[data-v-43b26bcb] {\n  text-align: center;\n  font-style: italic;\n  color: #c41425;\n  padding-top: 2px;\n}\n.more[data-v-43b26bcb] {\n  text-align: center;\n}\n.more button[data-v-43b26bcb] {\n  font-size: 0.8em;\n  height: 28px;\n  margin: 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& ***!
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
  return _c("div", { staticClass: "content" }, [
    _c(
      "div",
      { staticClass: "full" },
      [
        _c("mask-vue", { attrs: { mask: _vm.mask } }, [
          _vm._v("Communicating with server...")
        ]),
        _vm._v(" "),
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
          [
            _c("table", { staticClass: "small" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Name")]),
                _c("td", [_vm._v(_vm._s(_vm.user.name))]),
                _c("td", [_vm._v("As provided by the registrars office")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("User ID")]),
                _c("td", [_vm._v(_vm._s(_vm.user.userId))]),
                _c("td", [_vm._v("As provided by the registrars office")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Email")]),
                _vm._v(" "),
                !_vm.editing
                  ? _c("td", [_vm._v(_vm._s(_vm.user.email))])
                  : _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.email,
                            expression: "email"
                          }
                        ],
                        attrs: { type: "email", spellcheck: "false" },
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
                    ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v("You are allowed to change your email address")
                ])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Semester")]),
                _c("td", [_vm._v(_vm._s(_vm.user.member.semester))]),
                _c("td", [_vm._v(" ")])
              ]),
              _vm._v(" "),
              _c("tr", [
                _c("td", [_vm._v("Section")]),
                _c("td", [_vm._v(_vm._s(_vm.user.member.section))]),
                _c("td", [_vm._v(" ")])
              ])
            ]),
            _vm._v(" "),
            !_vm.editing
              ? _c("p", { staticClass: "center" }, [
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.edit($event)
                        }
                      }
                    },
                    [_vm._v("Edit")]
                  )
                ])
              : _c("p", { staticClass: "center" }, [
                  _c("button", { attrs: { type: "submit" } }, [
                    _vm._v("Submit")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.cancel($event)
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  )
                ])
          ]
        )
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
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v(" ")]),
      _c("th", [_vm._v(" ")])
    ])
  }
]
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
    _c(
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
                      ? _c("pre", { staticClass: "cl-preview yellow-pad" }, [
                          _vm._v(_vm._s(_vm.previewTxt))
                        ])
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
    ),
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
                    _vm.selectText()
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
                              src:
                                _vm.root + "/vendor/cl/site/img/download.png",
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
                                  _vm.showAnalysis(item)
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
                              _vm.showAnalysis(item)
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
                                  _vm.showAnalysis(item)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", { ref: "menu", class: _vm.useClass }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.maskClass }, [
    _vm.slotDelay ? _c("p", [_vm._t("default")], 2) : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.menu, function(item) {
            return _c("li", [
              _c(
                "a",
                {
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      item.click()
                    }
                  }
                },
                [_vm._v(_vm._s(item.name))]
              )
            ])
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _vm.delayedFetching
        ? _c("div", { staticClass: "fetching" }, [
            _c("p", [_vm._v("Fetching from server...")])
          ])
        : _vm._e(),
      _vm._v(" "),
      (_vm.fetcher === null || !_vm.fetcher.fetching) && !_vm.fetching
        ? _vm._t("default")
        : _vm._e(),
      _vm._v(" "),
      _vm.fetcher !== null && _vm.fetcher.more
        ? _c("p", { staticClass: "more" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.fetchMore($event)
                  }
                }
              },
              [_vm._v("MORE")]
            )
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e7a1855e", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("451ec1a4", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/course/index.js":
/*!***********************************!*\
  !*** ./vendor/cl/course/index.js ***!
  \***********************************/
/*! exports provided: SectionStatus, Member, Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony import */ var _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionStatus", function() { return _js_SectionStatus__WEBPACK_IMPORTED_MODULE_0__["SectionStatus"]; });

/* harmony import */ var _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Members/Member */ "./vendor/cl/course/js/Members/Member.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return _js_Members_Member__WEBPACK_IMPORTED_MODULE_1__["Member"]; });

/* harmony import */ var _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/CourseFactory */ "./vendor/cl/course/js/CourseFactory.js");
/**
 * @file
 */




 // Use the factory to create the Users object

var Course = _js_CourseFactory__WEBPACK_IMPORTED_MODULE_2__["CourseFactory"].create(Site.Site);


/***/ }),

/***/ "./vendor/cl/course/js/AboutMe/AboutMe.vue":
/*!*************************************************!*\
  !*** ./vendor/cl/course/js/AboutMe/AboutMe.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& */ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&");
/* harmony import */ var _AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=script&lang=js& */ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& */ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fe3f98e8",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('fe3f98e8', component.options)
    } else {
      api.reload('fe3f98e8', component.options)
    }
    module.hot.accept(/*! ./AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& */ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& */ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&");
(function () {
      api.rerender('fe3f98e8', {
        render: _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/course/js/AboutMe/AboutMe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=style&index=0&id=fe3f98e8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_style_index_0_id_fe3f98e8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/course/js/AboutMe/AboutMe.vue?vue&type=template&id=fe3f98e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutMe_vue_vue_type_template_id_fe3f98e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _Members_Member_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Members/Member.js */ "./vendor/cl/course/js/Members/Member.js");
/* harmony import */ var _State_StoreModuleCourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./State/StoreModuleCourse */ "./vendor/cl/course/js/State/StoreModuleCourse.js");
/* harmony import */ var users_cl_js_StoreModuleUsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! users-cl/js/StoreModuleUsers */ "./vendor/cl/users/js/StoreModuleUsers.js");
/* harmony import */ var _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SectionSelectors/SectionSelector */ "./vendor/cl/course/js/SectionSelectors/SectionSelector.js");
/* harmony import */ var _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Submission/Submission */ "./vendor/cl/course/js/Submission/Submission.js");
/* harmony import */ var _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorHelp/ErrorHelp */ "./vendor/cl/course/js/ErrorHelp/ErrorHelp.js");
/* harmony import */ var _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util/SpoofingRestore */ "./vendor/cl/course/js/Util/SpoofingRestore.js");
/* harmony import */ var _AboutMe_AboutMe_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutMe/AboutMe.vue */ "./vendor/cl/course/js/AboutMe/AboutMe.vue");
/* harmony import */ var site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! site-cl/js/Vue/PageVue */ "./vendor/cl/site/js/Vue/PageVue.js");
/* harmony import */ var site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! site-cl/js/Vue/PageNav.vue */ "./vendor/cl/site/js/Vue/PageNav.vue");
/**
 * @file
 * Factory to create the Course object.
 */











var CourseFactory = function CourseFactory() {};
/**
 * Factory method to create a Course object.
 *
 * This allows for injection of the store for testing purposes.
 * @param store Vuex store object
 * @returns {Course} object.
 */


CourseFactory.create = function (site) {
  var Course = function Course() {};

  console.log('CourseFactory'); //
  // Modify User to add the ability to instantiate
  // an appropriate Member object
  //

  Users.User.instantiateMember = function (data) {
    if (data.member !== null) {
      return new _Members_Member_js__WEBPACK_IMPORTED_MODULE_0__["Member"](data.member);
    } else {
      return null;
    }
  }; //
  // Install the course store modules
  //


  var store = site.store;

  if (store !== undefined) {
    store.registerModule('course', _State_StoreModuleCourse__WEBPACK_IMPORTED_MODULE_1__["StoreModuleCourse"]);
    store.registerModule('members', users_cl_js_StoreModuleUsers__WEBPACK_IMPORTED_MODULE_2__["StoreModuleUsers"].create('/api/course/members', function (user) {
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

    site_cl_js_Vue_PageVue__WEBPACK_IMPORTED_MODULE_8__["PageVue"].create('div.cl-course-aboutme', 'Example Vue', _AboutMe_AboutMe_vue__WEBPACK_IMPORTED_MODULE_7__["default"], site_cl_js_Vue_PageNav_vue__WEBPACK_IMPORTED_MODULE_9__["default"]);
  });
  site.start(function () {
    _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__["SectionSelector"].install(site);
    _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__["Submission"].install(site);
    _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__["ErrorHelp"].install(site);
    _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__["SpoofingRestore"].install(site);
  });
  return Course;
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
 * @file Member of a course
 * Attaches to a user Object
 */


var Member = function Member(json) {
  _users_js_Users_Membership_js__WEBPACK_IMPORTED_MODULE_0__["Membership"].call(this);
  var role = 'G';

  if (json !== undefined) {
    this.id = json.id;
    this.semester = json.semester;
    this.section = json.section;
    role = json.role;
  } else {
    this.id = 0; // System membership ID

    this.semester = null; // Semester code

    this.section = null; // Section Id

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
  roles[Member.TA] = {
    name: 'Teaching Assistant',
    priority: 7
  };
  roles[Member.INSTRUCTOR] = {
    name: 'Instructor',
    priority: 8
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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
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
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
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
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
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
 * @file
 * The section selector page /cl/sectionselector
 */

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
        }).catch(function (error) {
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
 * @file
 * Constants the represent SectionStatus possible values.
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
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
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
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
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
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    if (!module.hot.data) {
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
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
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
    }).catch(function (error) {
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

/***/ "./vendor/cl/site/js/APIResponse.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/APIResponse.js ***!
  \******************************************/
/*! exports provided: APIResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIResponse", function() { return APIResponse; });
/**
 * Response from the API in an easy-to-use format
 * @constructor
 */
var APIResponse = function APIResponse(json) {
  this.json = json;
  /**
   * Get data by type
   * @param type Name of the type, like 'token'
   * @returns {object} Object of data or null if not found
   */

  this.getData = function (type) {
    if (this.json.data !== undefined) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.json.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.type === type) {
            return item;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    return null;
  };
  /**
   * Get all instances of data by tye
   * @param type Name of the type, like 'token'
   * @returns {Array} Array of objects representing the data elements.
   */


  this.getDataAll = function (type) {
    if (this.json.data !== undefined) {
      var ret = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.json.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          if (item.type === type) {
            ret.push(item);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return ret;
    }

    return [];
  };
  /**
   * Does this response have an error?
   * @returns {boolean} True if there is an error
   */


  this.hasError = function () {
    return this.json.errors !== undefined && this.json.errors.length > 0;
  };
  /**
   * Return the error code if there is an error
   * @return {int} Error code
   */


  this.errorCode = function () {
    return this.json.errors[0].code;
  };
  /**
   * Return the error title if there is an error
   * @return {string} Error title
   */


  this.errorTitle = function () {
    return this.json.errors[0].title;
  };
}; //export default APIResponse;

/***/ }),

/***/ "./vendor/cl/site/js/TimeFormatter.js":
/*!********************************************!*\
  !*** ./vendor/cl/site/js/TimeFormatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatter", function() { return TimeFormatter; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/*
 * Utility functions to format times.
 */

/**
 * Utility functions to format times.
 * @constructor
 */

var TimeFormatter = function TimeFormatter() {};
/**
 * Convert a time to the format we display
 * Time is relative to a specified time (or current time)
 * @param {moment} time Time to convert (moment)
 * @param {moment} currentTime Current time (moment)
 * @param {string} format Moment format
 * @returns {string}
 */

TimeFormatter.relative = function (time, currentTime, format) {
  if (currentTime === undefined || currentTime === null) {
    currentTime = moment__WEBPACK_IMPORTED_MODULE_0___default.a.now();
  }

  var elapsed = currentTime.diff(time);

  if (elapsed < 60000) {
    return '<1 min ago';
  }

  if (elapsed < 3600000) {
    // Within an hour ago
    var mins = Math.floor(elapsed / 60000);
    return '' + mins + ' min ago';
  }
  /*
   * Determine if it was today
   */


  if (time.date() === currentTime.date() && time.month() === currentTime.month() && time.year() === currentTime.year()) {
    var hour = time.hour();
    var am = 'am';

    if (hour === 0) {
      hour = 12;
    } else if (hour === 12) {
      am = 'pm';
    } else if (hour > 12) {
      am = 'pm';
      hour -= 12;
    }

    var minute = time.minute();

    if (minute < 10) {
      minute = '0' + minute;
    }

    return "Today at " + hour + ':' + minute + am;
  }

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  }

  return time.format(format);
};
/**
 * Display a Unix time as an absolute time.
 * @param {int} time Unix time (seconds)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.absoluteUNIX = function (time, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);

  if (format === undefined) {
    format = 'M-DD-YYYY h:mm:ssa';
  } else if (format === 'short') {
    format = 'ddd, M-DD-YYYY h:mm:ssa';
  } else if (format === 'long') {
    format = 'dddd, M-DD-YYYY h:mm:ssa';
  }

  return t.format(format);
};
/**
 * Display a Unix time as a relative time.
 * @param {int} time Unix time (seconds)
 * @param {int} currentTime Current time as UNIX time (optional)
 * @param {string} format Moment format or 'long' or 'short' for days inclusion.
 */


TimeFormatter.relativeUNIX = function (time, currentTime, format) {
  var t = moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(time);
  var c = currentTime !== null ? moment__WEBPACK_IMPORTED_MODULE_0___default.a.unix(currentTime) : moment__WEBPACK_IMPORTED_MODULE_0___default()();
  return this.relative(t, c, format);
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/Editor.js":
/*!****************************************!*\
  !*** ./vendor/cl/site/js/UI/Editor.js ***!
  \****************************************/
/*! exports provided: Editor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_editor.scss */ "./vendor/cl/site/js/UI/_editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var resizer_cl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! resizer-cl */ "./packages/resizer-cl/src/app.modules.js");
/* harmony import */ var _EditorOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorOptions */ "./vendor/cl/site/js/UI/EditorOptions.js");
/*
 * Javascript support for the Editor
 */



/**
 * Javascript object in support of textarea-based editor
 *
 * If editor has the code style, line numbers are displayed.
 * Set member .tab to support smart tabs
 * Set member .autoIndent to support automatic indentation
 * @param {HTMLElement} element The element for the textarea we are turning into an editor
 * @param {Object} options Options to pass to the editor
 * @constructor
 */

var Editor = function Editor(element, options) {
  if (options !== undefined) {
    options = new _EditorOptions__WEBPACK_IMPORTED_MODULE_2__["EditorOptions"](options);
  } else {
    options = new _EditorOptions__WEBPACK_IMPORTED_MODULE_2__["EditorOptions"](JSON.parse(element.textContent));
  }

  element.classList.add('cl-editor');
  element.style.display = 'block';
  var resizer = new resizer_cl__WEBPACK_IMPORTED_MODULE_1__["default"](element, {
    resize: options.resize,
    handle: options.handle,
    grabSize: options.grabSize
  });
  var ta = document.createElement('textarea');
  this.textarea = ta;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options.classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cls = _step.value;
      ta.classList.add(cls);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  element.innerHTML = '';
  element.appendChild(ta);
  ta.value = options.value;

  if (options.name !== null) {
    ta.name = options.name;
  }

  if (options.code) {
    ta.classList.add('code');
  }

  if (options.height !== null) {
    element.style.height = options.height;
  }

  if (options.minHeight !== null) {
    element.style.minHeight = options.minHeight;
  }

  ta.spellcheck = options.spellcheck; // IE11 and some older browsers do not support
  // the insertText command. This determines if it
  // is available. This may be revised it the attempt to
  // use them fails.

  var insertTextSupported = document.queryCommandSupported("insertText");
  var deleteSupported = document.queryCommandSupported("delete"); // Set true after we auto-indent

  var justIndented = false;

  if (options.tab || options.autoIndent) {
    ta.addEventListener('keydown', function (event) {
      if (options.tab && event.which === 9) {
        // Tab character
        event.preventDefault();

        if (!event.shiftKey) {
          tabAtCaret();
          justIndented = true;
        } else {
          unTab();
          justIndented = false;
        }

        return false;
      }

      if (options.autoIndent) {
        if (event.which == 13) {
          // Return character
          event.preventDefault();
          justIndented = returnWithIndent();
          return false;
        } else if (justIndented && event.which == 8) {
          // Backspace after we just indented!
          if (unDent()) {
            event.preventDefault();
            return false;
          }
        } else {
          justIndented = false;
        }
      }

      return true;
    });
  }
  /*
   * This is the magic that syncs the background with the
   * line numbers in it.
   */


  ta.addEventListener('scroll', function (event) {
    var top = ta.scrollTop;
    var left = ta.scrollLeft;
    ta.style.backgroundPosition = -left + 'px ' + -top + 'px';
  });
  /*
   * Insert a tab at the current edit location in the textarea
   */

  function tabAtCaret() {
    var dSel = ta;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;

      if (startPos == endPos) {
        // Tabbing at the current location
        var before = dSel.value.substring(0, startPos);
        var split = before.split("\n");
        var lastLine = split[split.length - 1];
        var lastLen = lastLine.length;
        var toAdd = options.tabSize - lastLen % options.tabSize;
        var spaces = '';

        for (var i = 0; i < toAdd; i++) {
          spaces += ' ';
        }

        insertText(dSel, spaces);
        dSel.selectionStart = startPos + toAdd;
        dSel.selectionEnd = startPos + toAdd;
      } else {
        // Tabbing a selection
        var val = dSel.value;
        var split = val.split("\n");
        var linePos = 0; // Find the line the selection starts on

        for (var line = 0; line < split.length; line++) {
          var nextLinePos = linePos + split[line].length + 1;

          if (startPos >= linePos && startPos < nextLinePos) {
            break;
          }

          linePos = nextLinePos;
        }

        spaces = '';

        for (var i = 0; i < options.tabSize; i++) {
          spaces += ' ';
        }

        var insertions = 0; // Indent until we are done

        for (; line < split.length; line++) {
          dSel.selectionStart = linePos + insertions;
          dSel.selectionEnd = linePos + insertions;
          insertText(dSel, spaces);
          insertions += options.tabSize;
          nextLinePos = linePos + split[line].length + 1;

          if (endPos <= nextLinePos) {
            // We are done
            break;
          }

          linePos = nextLinePos;
        }

        dSel.selectionStart = startPos + options.tabSize;
        dSel.selectionEnd = endPos + insertions;
      }
    } else {
      dSel.value += " ";
      dSel.focus();
    }
  }
  /*
   * Handle the Shift-TAB combination (untabbing)
   */


  function unTab() {
    // Selection DOM object
    var dSel = ta;
    var startPos = dSel.selectionStart;
    var endPos = dSel.selectionEnd; // Untabbing a selection

    var val = dSel.value;
    var split = val.split("\n");
    var linePos = 0; // Find the line the selection starts on

    for (var line = 0; line < split.length; line++) {
      var nextLinePos = linePos + split[line].length + 1;

      if (startPos >= linePos && startPos < nextLinePos) {
        break;
      }

      linePos = nextLinePos;
    }

    var deletions = 0;
    var firstLine = true; // Undent until we are done

    for (; line < split.length; line++) {
      for (var spaces = 0; spaces < options.tabSize && spaces < split[line].length; spaces++) {
        if (split[line][spaces] != ' ') {
          break;
        }
      }

      if (spaces > 0) {
        dSel.selectionStart = linePos - deletions;
        dSel.selectionEnd = linePos - deletions + spaces;
        deleteText(dSel);
        deletions += spaces;
      }

      if (firstLine) {
        startPos -= spaces;

        if (startPos < linePos) {
          startPos = linePos;
        }

        firstLine = false;
      }

      nextLinePos = linePos + split[line].length + 1;

      if (endPos <= nextLinePos) {
        // We are done
        break;
      }

      linePos = nextLinePos;
    }

    dSel.selectionStart = startPos;
    dSel.selectionEnd = endPos - deletions;
  }
  /*
   * Insert a return character and enough spaces to indent
   * the text so as to match the previous line.
   */


  function returnWithIndent() {
    // Selection DOM object
    var dSel = ta; // How many spaces will be put before the first non-space?

    var space = 0;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;
      var scrollTop = dSel.scrollTop;
      var before = dSel.value.substring(0, startPos);
      var after = dSel.value.substring(endPos, dSel.value.length);
      var split = before.split("\n"); // What is the last line before the caret?

      var last = split[split.length - 1];

      for (var i = 0; i < last.length; i++) {
        if (last.charAt(i) != ' ') {
          break;
        }

        space++;
      } // Create the return


      var myValue = "\n";

      for (i = 0; i < space; i++) {
        myValue += ' ';
      }

      insertText(dSel, myValue);
      dSel.selectionStart = startPos + myValue.length;
      dSel.selectionEnd = startPos + myValue.length;
    } else {
      dSel.value += "\n";
      dSel.focus();
    }

    return space > 0;
  }
  /*
   * Remove the last tabSize spaces at the current location
   * @return true if was un-dented
   */


  function unDent() {
    // Selection DOM object
    var dSel = ta;

    if (dSel.selectionStart || dSel.selectionStart == '0') {
      var startPos = dSel.selectionStart;
      var endPos = dSel.selectionEnd;
      var scrollTop = dSel.scrollTop;
      var before = dSel.value.substring(0, startPos);
      var spaceStr = '';

      for (var i = 0; i < options.tabSize; i++) {
        spaceStr += ' ';
      }

      if (before.length >= options.tabSize && before.substr(before.length - options.tabSize, options.tabSize) === spaceStr) {
        dSel.selectionStart = before.length - options.tabSize;
        dSel.selectionEnd = before.length - 1;
        deleteText(dSel);
        dSel.selectionStart = before.length - options.tabSize;
        dSel.selectionEnd = dSel.selectionStart;
        return true;
      }
    }

    return false;
  }
  /*
   * Insert text in a textarea at the current selection.
   *
   * This is provided to allow for fallback to a non-undoable version
   * for Internet explorer and Firefox.
   * @param textarea Textarea we are modifying
   * @param text Text to insert
   */


  function insertText(textarea, text) {
    if (insertTextSupported) {
      if (!document.execCommand("insertText", false, text)) {
        insertTextSupported = false;
        insertText(textarea, text);
      }
    } else {
      // Backup version for Internet Explorer 11
      var pos = textarea.selectionStart;
      var scrollTop = textarea.scrollTop;
      var value = textarea.value;
      textarea.value = value.substring(0, pos) + text + value.substring(pos);
      textarea.focus();
      textarea.scrollTop = scrollTop;
    }
  }
  /*
   * Delete text in a textarea at the current selection.
   *
   * This is provided to allow for fallback to a non-undoable version
   * for Internet explorer and Firefox.
   * @param textarea
   */


  function deleteText(textarea) {
    if (deleteSupported) {
      if (!document.execCommand("delete")) {
        deleteSupported = false;
        deleteText(textarea);
      }
    } else {
      // Backup version for Internet Explorer 11
      // and Firefox
      var startPos = textarea.selectionStart;
      var endPos = textarea.selectionEnd;
      var scrollTop = textarea.scrollTop;
      var value = textarea.value;
      textarea.value = value.substring(0, startPos) + value.substring(endPos);
      textarea.focus();
      textarea.scrollTop = scrollTop;
    }
  }
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/EditorOptions.js":
/*!***********************************************!*\
  !*** ./vendor/cl/site/js/UI/EditorOptions.js ***!
  \***********************************************/
/*! exports provided: EditorOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorOptions", function() { return EditorOptions; });
/*
 * Various interface options we can select
 */

/**
 * Editor interface options.
 *
 * This is used by Editor to provide default values for the editor options.
 *
 * @param options User provided options that override the default values.
 * @constructor
 */
var EditorOptions = function EditorOptions(options) {
  options = options ? options : {}; /// Options: vertical, horizontal, both

  this.resize = 'vertical'; /// The resizing handle

  this.handle = 'bar'; /// Range for grabbing

  this.grabSize = 10; /// Is this for source code?

  this.code = false; /// Initial textarea value

  this.value = ''; /// Height value to use

  this.height = null; /// Name for the control

  this.name = null; /// Use handle the tab key?

  this.tab = false; /// Automatically indent code?

  this.autoIndent = false; /// Minimum height to set

  this.minHeight = null; /// Spellcheck the textarea?

  this.spellcheck = false; /// Size of a tab stop in characters.

  this.tabSize = 4; /// Classes to add to the textarea

  this.classes = [];

  for (var property in options) {
    if (options.hasOwnProperty(property)) {
      if (!this.hasOwnProperty(property)) {
        throw new Error("Invalid option " + property);
      }

      this[property] = options[property];
    }
  }
};

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue":
/*!***************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('d4b05102', component.options)
    } else {
      api.reload('d4b05102', component.options)
    }
    module.hot.accept(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=d4b05102& */ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
(function () {
      api.rerender('d4b05102', {
        render: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/UI/Menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&":
/*!**********************************************************************!*\
  !*** ./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Menu.vue?vue&type=template&id=d4b05102& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/UI/Menu.vue?vue&type=template&id=d4b05102&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_template_id_d4b05102___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/UI/_editor.scss":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/UI/_editor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("33597a9a", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss", function() {
     var newContent = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!./_editor.scss */ "./node_modules/css-loader/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./vendor/cl/site/js/UI/_editor.scss");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/site/js/Vue/Mask.vue":
/*!****************************************!*\
  !*** ./vendor/cl/site/js/Vue/Mask.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mask.vue?vue&type=template&id=78d04e00& */ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&");
/* harmony import */ var _Mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mask.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('78d04e00', component.options)
    } else {
      api.reload('78d04e00', component.options)
    }
    module.hot.accept(/*! ./Mask.vue?vue&type=template&id=78d04e00& */ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mask.vue?vue&type=template&id=78d04e00& */ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&");
(function () {
      api.rerender('78d04e00', {
        render: _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/Vue/Mask.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Mask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/Mask.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&":
/*!***********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Mask.vue?vue&type=template&id=78d04e00& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/Mask.vue?vue&type=template&id=78d04e00&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mask_vue_vue_type_template_id_78d04e00___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue":
/*!*******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony import */ var _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageNav.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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
    if (!module.hot.data) {
      api.createRecord('0dbf4cb0', component.options)
    } else {
      api.reload('0dbf4cb0', component.options)
    }
    module.hot.accept(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
(function () {
      api.rerender('0dbf4cb0', {
        render: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&":
/*!**************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageNav.vue?vue&type=template&id=0dbf4cb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageNav.vue?vue&type=template&id=0dbf4cb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageNav_vue_vue_type_template_id_0dbf4cb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVue.js":
/*!******************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVue.js ***!
  \******************************************/
/*! exports provided: PageVue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVue", function() { return PageVue; });
/**
 * Basic Vue-based site page starter
 *
 * How to use:
 * @code
 * site.ready(() => {
 *    PageVue.create('div.cl-grade-assignment', 'Assignment Grade', GradeAssignmentVue);
 *    PageVue.create('div.cl-grades', 'Grades', GradesVue);
 * });
 * @endcode
 *
 * @constructor PageVue
 */
var PageVue = function PageVue() {};
/**
 * Create a page in a given component, replacing the provided
 * selector. The selector is assumed to contain JSON data that is
 * then provided to the component in the json property.
 *
 * @param sel Selector for a div to replace with the view.
 * @param title Initial title to apply to the page
 * @param component Component to display (Vue)
 * @param nav Optional navigation component, like PageNav
 */

PageVue.create = function (sel, title, component, nav) {
  var element = document.querySelector(sel);

  if (element === null) {
    return;
  }

  var navtag = nav !== undefined ? '<page-nav :menu="menu"></page-nav>' : '';
  var template = "<div><site-header :title=\"title\">".concat(navtag, "</site-header>\n<page-vue :json=\"json\"></page-vue><site-footer></site-footer>\n</div>");
  var Header = Site.info.header.component();
  var Footer = Site.info.footer.component();
  var json = JSON.parse(element.textContent);
  var store = Site.store;
  var components = {
    'site-header': Header,
    'site-footer': Footer,
    'page-vue': component
  };

  if (nav !== undefined) {
    components['page-nav'] = nav;
  }

  var site = Site.Site;
  new Site.Vue({
    el: element,
    site: site,
    store: store,
    data: {
      title: title,
      json: json,
      menu: []
    },
    template: template,
    components: components,
    methods: {
      /**
       * Set the site title. This can be used from
       * the child Vue's using this.$parent.setTitle('')
       * @memberof PageVue
       * @instance
       * @param {string} title Title to set
       */
      setTitle: function setTitle(title) {
        this.title = title;
        document.title = Site.info.siteName + ' ' + title;
      },
      setMenu: function setMenu(menu) {
        this.menu = menu;
      }
    }
  });
};

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
    if (!module.hot.data) {
      api.createRecord('12bbaef8', component.options)
    } else {
      api.reload('12bbaef8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/site/js/Vue/PageVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/site/js/Vue/PageVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue ***!
  \***********************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony import */ var _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["Fetcher"]; });

/* harmony import */ var _FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "43b26bcb",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('43b26bcb', component.options)
    } else {
      api.reload('43b26bcb', component.options)
    }
    module.hot.accept(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
(function () {
      api.rerender('43b26bcb', {
        render: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "vendor/cl/users/js/Lib/FetcherVue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default, Fetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fetcher", function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["Fetcher"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader!../../../../../node_modules/sass-loader/lib/loader.js?sourceMap!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=style&index=0&id=43b26bcb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_lib_loader_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_style_index_0_id_43b26bcb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Lib/FetcherVue.vue?vue&type=template&id=43b26bcb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FetcherVue_vue_vue_type_template_id_43b26bcb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/users/js/StoreModuleUsers.js":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/StoreModuleUsers.js ***!
  \************************************************/
/*! exports provided: StoreModuleUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModuleUsers", function() { return StoreModuleUsers; });
/* harmony import */ var _Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lib/FetcherVue.vue */ "./vendor/cl/users/js/Lib/FetcherVue.vue");
/* harmony import */ var _Users_User_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users/User.js */ "./vendor/cl/users/js/Users/User.js");
/**
 * @file
 * Vuex store module that maintains a collection of system users.
 */


var LIMIT = 500;
var StoreModuleUsers = function StoreModuleUsers() {};
/**
 * Create a Vuex store module to store users.
 *
 * This will work for both Users and course Members, since they
 * use the same API.
 * @param api '/api/users' for '/api/course/members'
 * @param query Items to add to the query (semester and section for members).
 * @param toId Mapping from a user to the ID to use for the collection.
 * @returns {*}
 */

StoreModuleUsers.create = function (api, toId) {
  return {
    namespaced: true,
    state: {
      users: [],
      fetcher: new _Lib_FetcherVue_vue__WEBPACK_IMPORTED_MODULE_0__["Fetcher"](),
      // Indicates the fetching status
      query: {}
    },
    mutations: {
      add: function add(state, user) {
        state.users.push(user);
      },
      more: function more(state, value) {
        state.fetcher.more = value;
      },
      fetchStart: function fetchStart(state, value) {
        state.fetcher.start(value);
      },
      fetchDone: function fetchDone(state, value) {
        state.fetcher.done(value);
      },
      reset: function reset(state, value) {
        state.fetcher.reset();
        state.users = [];
      },
      query: function query(state, value) {
        state.query = value;
      },
      update: function update(state, user) {
        // If nothing is fetched, nothing need be updated
        if (!state.fetcher.fetched) {
          return;
        } // If the list is empty, we force a reload from the server


        if (state.users.length === 0) {
          state.fetcher.reset();
          state.users = [];
          return;
        } // Does the user exist right now?


        var i = 0;

        for (; i < state.users.length; i++) {
          if (toId(user) === toId(state.users[i])) {
            // We have found it, swap it in
            state.users[i] = user;

            if (state.fetcher.more) {
              // Since the name may have changed, the position in the
              // list could also change.
              if (_Users_User_js__WEBPACK_IMPORTED_MODULE_1__["User"].compare(user, state.users[state.users.length - 1]) >= 0) {
                // Probably off the end, force a reload
                state.fetcher.reset();
                state.users = [];
                return;
              }
            }

            state.users.sort(_Users_User_js__WEBPACK_IMPORTED_MODULE_1__["User"].compare);
            return;
          }
        } // If we did not find the user, it must still
        // be waiting to be fetched from the server.


        state.fetcher.more = true;
      },
      new: function _new(state, user) {
        // If nothing is fetched, nothing need be updated
        if (!state.fetcher.fetched) {
          return;
        } // If the list is empty, we are the one!


        if (state.users.length === 0) {
          state.users.push(user);
          return;
        }

        if (!state.fetcher.more) {
          // We have it all, so we can append, sort, and we are done
          state.users.push(user);
          state.users.sort(_Users_User_js__WEBPACK_IMPORTED_MODULE_1__["User"].compare);
          return;
        }

        if (_Users_User_js__WEBPACK_IMPORTED_MODULE_1__["User"].compare(user, state.users[state.users.length - 1]) >= 0) {
          // Probably off the end, force a reload
          state.fetcher.reset();
          state.users = [];
          return;
        }

        state.users.push(user);
        state.users.sort(_Users_User_js__WEBPACK_IMPORTED_MODULE_1__["User"].compare);
      },
      delete: function _delete(state, id) {
        for (var i = 0; i < state.users.length; i++) {
          if (toId(state.users[i]) === id) {
            state.users.splice(i, 1);
            break;
          }
        }
      }
    },
    actions: {
      // Initial fetch from API
      fetch: function fetch(_ref) {
        var dispatch = _ref.dispatch,
            state = _ref.state;

        if (state.fetcher.fetched) {
          return;
        }

        dispatch('more');
      },
      // Fetch more
      more: function more(_ref2) {
        var _this = this;

        var commit = _ref2.commit,
            state = _ref2.state;

        if (state.fetcher.fetched && !state.fetcher.more) {
          return;
        }

        commit('fetchStart');
        var q = {
          limit: LIMIT,
          offset: state.users.length
        };
        Object.assign(q, state.query);
        Site.api.get(api, q).then(function (response) {
          if (!response.hasError()) {
            var data = response.getData('users');

            if (data !== null) {
              var more = false;
              data.attributes.forEach(function (userObj) {
                if (userObj.more === 'yes') {
                  more = true;
                } else {
                  commit('add', new Users.User(userObj));
                }
              });
              commit('more', more);
              commit('fetchDone');
            }
          } else {
            console.log(response);
            Site.toast(_this, response);
          }
        }).catch(function (error) {
          console.log(error);
          Site.toast(_this, error);
        });
      },
      get: function get(_ref3, query) {
        var _this2 = this;

        var commit = _ref3.commit,
            state = _ref3.state;
        return new Promise(function (resolve, reject) {
          // // We may have the desired user loaded or we
          // // may have to go get them.
          // let prev = null;
          // for(let i=0; i<state.users.length; i++) {
          //     let user = state.users[i];
          //     if(toId(user) === id) {
          //         if((i+1) < state.users.length) {
          //             user.next = state.users[i+1];
          //         }
          //
          //         if(prev !== null) {
          //             user.prev = prev;
          //         }
          //
          //         resolve(user);
          //         return;
          //     }
          //
          //     prev = user;
          // }
          // Go get the user
          commit('fetchStart', true);
          query.prevnext = 1;
          Site.api.get(api, query).then(function (response) {
            if (!response.hasError()) {
              var data = response.getData('users');

              if (data !== null) {
                if (data.attributes.length < 1) {
                  reject('User does not exist');
                } else {
                  commit('fetchDone', true);
                  var user = new Users.User(data.attributes[0]);
                  var prev = response.getData('prev-user');

                  if (prev !== null) {
                    user.prev = new Users.User(prev.attributes);
                  }

                  var next = response.getData('next-user');

                  if (next !== null) {
                    user.next = new Users.User(next.attributes);
                  }

                  resolve(user);
                }
              }
            } else {
              console.log(response);
              Site.toast(_this2, response);
            }
          }).catch(function (error) {
            console.log(error);
            Site.toast(_this2, error);
          });
        });
      },
      update: function update(_ref4, payload) {
        var _this3 = this;

        var commit = _ref4.commit,
            state = _ref4.state;
        return new Promise(function (resolve, reject) {
          Site.api.post(api + '/update', payload).then(function (response) {
            if (!response.hasError()) {
              var data = response.getData('updated-user');
              var user = new Users.User(data.attributes); // Update user if we have it stored locally
              // and the name has not changed

              commit('update', user);
              resolve(user);
            } else {
              reject(response);
            }
          }).catch(function (error) {
            Site.toast(_this3, error);
          });
        });
      },
      new: function _new(_ref5, payload) {
        var _this4 = this;

        var commit = _ref5.commit,
            state = _ref5.state;
        return new Promise(function (resolve, reject) {
          Site.api.post(api + '/new', payload).then(function (response) {
            if (!response.hasError()) {
              var data = response.getData('new-user');
              var user = new Users.User(data.attributes);
              commit('new', user);
              resolve(user);
            } else {
              console.log('reject');
              reject(response);
            }
          }).catch(function (error) {
            Site.toast(_this4, error);
          });
        });
      },
      delete: function _delete(_ref6, payload) {
        var _this5 = this;

        var commit = _ref6.commit,
            state = _ref6.state;
        return new Promise(function (resolve, reject) {
          Site.api.post(api + '/delete', {
            id: payload.id
          }).then(function (response) {
            if (!response.hasError()) {
              commit('delete', payload.id);
              resolve();
            } else {
              console.log(response);
              Site.toast(_this5, response);
            }
          }).catch(function (error) {
            console.log(error);
            Site.toast(_this5, error);
          });
        });
      }
    }
  };
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



/***/ }),

/***/ "./vendor/cl/users/js/Users/User.js":
/*!******************************************!*\
  !*** ./vendor/cl/users/js/Users/User.js ***!
  \******************************************/
/*! exports provided: default, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * @file
 * Represents a user in the system
 */
var User = function User(json) {
  /// The user role - local so we can protect it with getter/setter
  var role = 'G'; // Installed membership

  var member = null;

  if (json !== undefined) {
    if (typeof json === 'string') {
      json = JSON.parse(json);
    }

    this.id = json.id;
    role = json.role;
    this.name = json.name;
    this.email = json.email;
    this.userId = json.user; // Installed membership

    member = User.instantiateMember(json);

    if (member !== null) {
      member.user = this;
    }
  } else {
    this.id = 0;
    role = 'G';
    this.name = '';
    this.email = '';
    this.userId = '';
  }

  Object.defineProperty(this, 'member', {
    get: function get() {
      return member;
    }
  });
  /**
   * Return the effective role for the user.
   * This is the user's role unless the user
   * has a membership, in which case it is the
   * membership role.
   *
   * @returns {string}
   */

  this.role = function () {
    if (member !== null) {
      return member.role();
    }

    return role;
  };

  this.setUserRole = function (_role) {
    role = _role;
  };

  this.userRole = function () {
    return role;
  };
  /**
   * Set the membership for this user
   * @param Membership member
   */


  this.setMember = function (_member) {
    member = _member;

    if (member !== null) {
      member.user = this;
    }
  };
};

User.GUEST = 'G';
User.USER = 'U';
User.STAFF = 'S';
User.ADMIN = 'A';

User.getUserRoles = function () {
  var roles = {};
  roles[User.GUEST] = {
    name: 'Guest',
    priority: 1
  };
  roles[User.USER] = {
    name: 'User',
    priority: 2
  };
  roles[User.STAFF] = {
    name: 'Staff',
    priority: 3
  };
  roles[User.ADMIN] = {
    name: 'Admin',
    priority: 4
  };
  return roles;
};

User.prototype.getUserRoles = function () {
  return User.getUserRoles();
};
/**
 * Get the roles for this user. Membership roles take priority
 * over roles for just a user who is not a member.
 */


User.prototype.getRoles = function () {
  var member = this.member;

  if (member !== null) {
    return member.getRoles();
  }

  return User.getUserRoles();
};

User.prototype.atLeast = function (atLeast) {
  var role = this.role();
  var roles = this.getRoles();

  if (roles.hasOwnProperty(atLeast)) {
    return roles[role].priority >= roles[atLeast].priority;
  } else {
    return false;
  }
};

User.prototype.getRolePriority = function (role) {
  var roles = this.getRoles();

  if (roles.hasOwnProperty(role)) {
    return roles[role].priority;
  }

  return 0;
};

User.prototype.displayName = function () {
  var comma = this.name.indexOf(',');

  if (comma < 0) {
    return this.name;
  }

  var last = this.name.substr(0, comma);
  var first = this.name.substr(comma + 1).trim();
  return first + ' ' + last;
};

User.prototype.userRoleName = function () {
  var roles = this.getUserRoles();
  var role = this.userRole();
  var r = roles[role];

  if (r !== undefined) {
    return roles[role].name;
  }

  return 'Invalid';
};

User.prototype.roleName = function () {
  var roles = this.getRoles();
  var role = this.role();
  return roles[role].name;
};

User.compare = function (a, b) {
  var an = a.name.toLowerCase();
  var bn = b.name.toLowerCase();

  if (an < bn) {
    return -1;
  }

  if (an > bn) {
    return 1;
  }

  return a.id - b.id;
};
/**
 * Instantiate a Membership object for the user.
 * This will be replaced by a plugin that adds
 * support for memberships.
 * @param data normally in the format the PHP JSON representation
 * @returns {null}
 */


User.instantiateMember = function (data) {
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue":
/*!************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserVueBase.vue?vue&type=script&lang=js& */ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
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
    if (!module.hot.data) {
      api.createRecord('c7e4e49e', component.options)
    } else {
      api.reload('c7e4e49e', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/users/js/Vue/UserVueBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserVueBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/users/js/Vue/UserVueBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserVueBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

},[["./vendor/cl/course/index.js","runtime","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3NpdGUvanMvVUkvTWVudS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9NYXNrLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvdXNlcnMvanMvVnVlL1VzZXJWdWVCYXNlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9fZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9BYm91dE1lL0Fib3V0TWUudnVlP2M1YzciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT84ZTgwIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/MmQ4YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/ODZhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlP2RlNGQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlPzJiNjAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlPzQ1OTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzczYjEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/OWY3NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/Mzc2MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT85ZjJhIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9NYXNrLnZ1ZT85YzQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZT9lNDQyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWU/ZTcyNSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/MGMxZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlPzdhMDAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9BYm91dE1lL0Fib3V0TWUudnVlP2JhZTYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9BYm91dE1lL0Fib3V0TWUudnVlP2E2ZjciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9BYm91dE1lL0Fib3V0TWUudnVlPzM3MmUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Db3Vyc2VGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvRXJyb3JIZWxwL0Vycm9ySGVscC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01lbWJlcnMvTWVtYmVyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQXNzaWdubWVudENhdGVnb3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0Fzc2lnbm1lbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL0NvdXJzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9TZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU3RhdHVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3RhdGUvU3RvcmVNb2R1bGVDb3Vyc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT85OGZiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZT82NTMzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT85MTg0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRJbWFnZS52dWU/MGQxNCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlP2FhMTAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlP2RhOGEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT9lY2NjIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZT8xNTQ2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/MWZkYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VW5rbm93bi52dWU/NGVlMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkLnZ1ZT9iZmU3Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlP2FkZmIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT9jNTI1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZT83MTAzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvVXRpbC9TcG9vZmluZ1Jlc3RvcmUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvQVBJUmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVGltZUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9FZGl0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvRWRpdG9yT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZT9iZDk2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1VJL01lbnUudnVlPzBhOTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVUkvX2VkaXRvci5zY3NzPzJhZWIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3NpdGUvanMvVnVlL01hc2sudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9NYXNrLnZ1ZT9mYzQ1Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9NYXNrLnZ1ZT85YWQ2Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlTmF2LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/ZDNhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZU5hdi52dWU/YTJmMyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWU/MTE4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWU/NzI2OCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvTGliL0ZldGNoZXJWdWUudnVlPzQ5N2IiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL3VzZXJzL2pzL0xpYi9GZXRjaGVyVnVlLnZ1ZT8yZjEyIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9TdG9yZU1vZHVsZVVzZXJzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9Vc2Vycy9Vc2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlP2I2ZTEiXSwibmFtZXMiOlsiQ291cnNlIiwiY3JlYXRlIiwiU2l0ZSIsIkNvdXJzZUZhY3RvcnkiLCJzaXRlIiwiY29uc29sZSIsImxvZyIsIlVzZXJzIiwiVXNlciIsImluc3RhbnRpYXRlTWVtYmVyIiwiZGF0YSIsIm1lbWJlciIsInN0b3JlIiwidW5kZWZpbmVkIiwicmVnaXN0ZXJNb2R1bGUiLCJ1c2VyIiwiaWQiLCJyZWFkeSIsImVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbW1pdCIsIkpTT04iLCJwYXJzZSIsInRleHRDb250ZW50IiwiUGFnZVZ1ZSIsInN0YXJ0IiwiU2VjdGlvblNlbGVjdG9yIiwiaW5zdGFsbCIsIlN1Ym1pc3Npb24iLCJFcnJvckhlbHAiLCJTcG9vZmluZ1Jlc3RvcmUiLCJlbGVtZW50Iiwib3B0aW9ucyIsImNvbnRlbnQiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJzdHlsZSIsImRpc3BsYXkiLCJmb3JtIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwidmFsdWUiLCJ1cmwiLCJyb290IiwiYXNzaWduIiwidGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsImVuY29kZVVSSSIsInRvVXBwZXJDYXNlIiwidHJpbSIsIndpbmRvdyIsIm9wZW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwiTWVtYmVyIiwianNvbiIsIk1lbWJlcnNoaXAiLCJjYWxsIiwicm9sZSIsInNlbWVzdGVyIiwic2VjdGlvbiIsInNldFJvbGUiLCJyb2xlXyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNvbnN0cnVjdG9yIiwiZ2V0U2VjdGlvbiIsImdldHRlcnMiLCJnZXRBc3NpZ25tZW50IiwiYXNzaWdudGFnIiwiR1VFU1QiLCJVU0VSIiwiRFJPUFBFRCIsIlNUVURFTlQiLCJTVEFGRiIsIkdSQURFUiIsIlRBIiwiSU5TVFJVQ1RPUiIsIkFETUlOIiwiZ2V0Um9sZXMiLCJyb2xlcyIsIm5hbWUiLCJwcmlvcml0eSIsInNraXAiLCJBc3NpZ25tZW50IiwicHJvcGVydHkiLCJBc3NpZ25tZW50Q2F0ZWdvcnkiLCJncmFkaW5nIiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50c0J5VGFnIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NpZ25tZW50cyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImFjY291bnQiLCJkZXNjIiwic2VjdGlvbnMiLCJzZWN0aW9uc0J5SWQiLCJzIiwiU2VjdGlvbiIsIlZ1ZSIsImluZm8iLCJiZWZvcmUiLCJhZnRlciIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaGVhZGVyIiwiY29tcG9uZW50IiwiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwiVnVlUm91dGVyIiwibW9kZSIsInJvdXRlcyIsImVsIiwidGl0bGUiLCJzZWxlY3QiLCJwYXJhbXMiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImxvY2F0aW9uIiwicmVkaXJlY3QiLCJjYXRjaCIsIm1vdW50ZWQiLCIkcm91dGUiLCJxdWVyeSIsInUiLCJjb21wb25lbnRzIiwiU2VjdGlvblN0YXR1cyIsIk5PVFZJU0lURUQiLCJWSVNJVEVEIiwiRE9ORSIsInRvU3RyaW5nIiwic3RhdHVzIiwiU3RvcmVNb2R1bGVDb3Vyc2UiLCJuYW1lc3BhY2VkIiwic3RhdGUiLCJjb3Vyc2UiLCJzdGFmZiIsIm11dGF0aW9ucyIsInNldCIsInNldFN0YWZmIiwiZCIsInNlY3Rpb25JZCIsImFzc2lnblRhZyIsInN1Ym1pc3Npb24iLCJzdWJtaXNzaW9uVnVlIiwiU3VibWlzc2lvblZ1ZSIsInAiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbmNsaWNrIiwicmVzdG9yZSIsIkFQSVJlc3BvbnNlIiwiZ2V0RGF0YSIsIml0ZW0iLCJnZXREYXRhQWxsIiwicmV0IiwiZXJyb3JzIiwiZXJyb3JDb2RlIiwiY29kZSIsImVycm9yVGl0bGUiLCJUaW1lRm9ybWF0dGVyIiwicmVsYXRpdmUiLCJ0aW1lIiwiY3VycmVudFRpbWUiLCJmb3JtYXQiLCJub3ciLCJlbGFwc2VkIiwiZGlmZiIsIm1pbnMiLCJNYXRoIiwiZmxvb3IiLCJkYXRlIiwibW9udGgiLCJ5ZWFyIiwiaG91ciIsImFtIiwibWludXRlIiwiYWJzb2x1dGVVTklYIiwidCIsInVuaXgiLCJyZWxhdGl2ZVVOSVgiLCJjIiwiRWRpdG9yIiwicmVzaXplciIsInJlc2l6ZSIsImhhbmRsZSIsImdyYWJTaXplIiwidGEiLCJ0ZXh0YXJlYSIsImNsYXNzZXMiLCJjbHMiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJzcGVsbGNoZWNrIiwiaW5zZXJ0VGV4dFN1cHBvcnRlZCIsInF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCIsImRlbGV0ZVN1cHBvcnRlZCIsImp1c3RJbmRlbnRlZCIsInRhYiIsImF1dG9JbmRlbnQiLCJ3aGljaCIsInNoaWZ0S2V5IiwidGFiQXRDYXJldCIsInVuVGFiIiwicmV0dXJuV2l0aEluZGVudCIsInVuRGVudCIsInRvcCIsInNjcm9sbFRvcCIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZFNlbCIsInNlbGVjdGlvblN0YXJ0Iiwic3RhcnRQb3MiLCJlbmRQb3MiLCJzZWxlY3Rpb25FbmQiLCJzdWJzdHJpbmciLCJzcGxpdCIsImxhc3RMaW5lIiwibGFzdExlbiIsInRvQWRkIiwidGFiU2l6ZSIsInNwYWNlcyIsImluc2VydFRleHQiLCJ2YWwiLCJsaW5lUG9zIiwibGluZSIsIm5leHRMaW5lUG9zIiwiaW5zZXJ0aW9ucyIsImZvY3VzIiwiZGVsZXRpb25zIiwiZmlyc3RMaW5lIiwiZGVsZXRlVGV4dCIsInNwYWNlIiwibGFzdCIsImNoYXJBdCIsIm15VmFsdWUiLCJzcGFjZVN0ciIsInN1YnN0ciIsInRleHQiLCJleGVjQ29tbWFuZCIsInBvcyIsIkVkaXRvck9wdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsIkVycm9yIiwic2VsIiwibmF2IiwicXVlcnlTZWxlY3RvciIsIm5hdnRhZyIsIm1lbnUiLCJtZXRob2RzIiwic2V0VGl0bGUiLCJzaXRlTmFtZSIsInNldE1lbnUiLCJMSU1JVCIsIlN0b3JlTW9kdWxlVXNlcnMiLCJ0b0lkIiwidXNlcnMiLCJmZXRjaGVyIiwibW9yZSIsImZldGNoU3RhcnQiLCJmZXRjaERvbmUiLCJkb25lIiwicmVzZXQiLCJ1cGRhdGUiLCJmZXRjaGVkIiwiY29tcGFyZSIsInNvcnQiLCJuZXciLCJkZWxldGUiLCJzcGxpY2UiLCJhY3Rpb25zIiwiZmV0Y2giLCJkaXNwYXRjaCIsInEiLCJsaW1pdCIsIm9mZnNldCIsImdldCIsImF0dHJpYnV0ZXMiLCJmb3JFYWNoIiwidXNlck9iaiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHJldm5leHQiLCJwcmV2IiwibmV4dCIsInBheWxvYWQiLCJlbWFpbCIsInVzZXJJZCIsImRlZmluZVByb3BlcnR5Iiwic2V0VXNlclJvbGUiLCJfcm9sZSIsInVzZXJSb2xlIiwic2V0TWVtYmVyIiwiX21lbWJlciIsImdldFVzZXJSb2xlcyIsImF0TGVhc3QiLCJnZXRSb2xlUHJpb3JpdHkiLCJkaXNwbGF5TmFtZSIsImNvbW1hIiwiaW5kZXhPZiIsImZpcnN0IiwidXNlclJvbGVOYW1lIiwiciIsInJvbGVOYW1lIiwiYSIsImIiLCJhbiIsInRvTG93ZXJDYXNlIiwiYm4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFDQTtBQUNBO0FBR0E7QUFDQSxvRkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxHQVRBO0FBVUE7QUFDQTtBQURBLEdBVkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0E7QUFFQTtBQUNBLEdBakJBO0FBa0JBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsb0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxVQVBB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPLHNCQUFzQjtBQUM3QjtBQUNBLHdCQUF3QixTQUFTLGlCQUFpQixFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFDQUFxQztBQUNyRSxtQ0FBbUMsbUJBQW1CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRCxnQ0FBZ0MsU0FBUyxpQkFBaUIsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywrQkFBK0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVDQUF1QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNkJBQTZCO0FBQ25FLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pELHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQix1REFBdUQ7QUFDekUsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQix1REFBdUQ7QUFDekUsZUFBZTtBQUNmLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLGtDQUFrQyxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4QkFBOEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hELDJCQUEyQixTQUFTLHNCQUFzQixFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQ0FBaUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQ0FBa0MsbUJBQW1CLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsdUJBQXVCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixNQUFNLG1CQUFtQixFQUFFO0FBQ3pEO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixTQUFTLHVCQUF1QixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUNBQW1DO0FBQ3ZEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTtBQUNBLHFCQUFxQixTQUFTLHFCQUFxQixFQUFFO0FBQ3JELDBCQUEwQixzQkFBc0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsa3JCQUFpWTtBQUN2Wiw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG1JQUFzRTtBQUN4RiwrQ0FBK0M7QUFDL0M7QUFDQSxHQUFHLElBQVU7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLGtyQkFBaVk7QUFDdFosc0JBQXNCLG1CQUFPLENBQUMsa3JCQUFpWTtBQUMvWix1REFBdUQsUUFBUztBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxtckJBQW9ZO0FBQzFaLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsbUlBQXNFO0FBQ3hGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsSUFBVTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsbXJCQUFvWTtBQUN6WixzQkFBc0IsbUJBQU8sQ0FBQyxtckJBQW9ZO0FBQ2xhLHVEQUF1RCxRQUFTO0FBQ2hFO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7Q0FJQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUcsK0RBQWEsQ0FBQ0MsTUFBZCxDQUFxQkMsSUFBSSxDQUFDQSxJQUExQixDQUFiOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBeUc7QUFDN0gsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0Isc0pBQTBELEVBQUU7QUFBQTtBQUNsRjtBQUNBLGdCQUFnQiw4RkFBTTtBQUN0Qix5QkFBeUIsdUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBd2MsQ0FBZ0IsNmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVcsQ0FDOUIsQ0FERDtBQUdBOzs7Ozs7Ozs7QUFPQUEsYUFBYSxDQUFDRixNQUFkLEdBQXVCLFVBQVNHLElBQVQsRUFBZTtBQUVsQyxNQUFJSixNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFXLENBQ3ZCLENBREQ7O0FBR0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFMa0MsQ0FPbEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FDLE9BQUssQ0FBQ0MsSUFBTixDQUFXQyxpQkFBWCxHQUErQixVQUFTQyxJQUFULEVBQWU7QUFDMUMsUUFBR0EsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLElBQW5CLEVBQXlCO0FBQ3JCLGFBQU8sSUFBSSx5REFBSixDQUFXRCxJQUFJLENBQUNDLE1BQWhCLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLElBQVA7QUFDSDtBQUNKLEdBTkQsQ0FYa0MsQ0FtQmxDO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHUixJQUFJLENBQUNRLEtBQWpCOztBQUNBLE1BQUdBLEtBQUssS0FBS0MsU0FBYixFQUF3QjtBQUNwQkQsU0FBSyxDQUFDRSxjQUFOLENBQXFCLFFBQXJCLEVBQStCLDBFQUEvQjtBQUNBRixTQUFLLENBQUNFLGNBQU4sQ0FBcUIsU0FBckIsRUFBZ0MsNkVBQWdCLENBQUNiLE1BQWpCLENBQzVCLHFCQUQ0QixFQUU1QixVQUFDYyxJQUFELEVBQVU7QUFBQyxhQUFPQSxJQUFJLENBQUNKLE1BQUwsQ0FBWUssRUFBbkI7QUFBd0IsS0FGUCxDQUFoQztBQUlIOztBQUVEWixNQUFJLENBQUNhLEtBQUwsQ0FBVyxZQUFNO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFFQSxRQUFJQyxFQUFKOztBQUNBLFFBQUksQ0FBQ0EsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBTixNQUFnRCxJQUFwRCxFQUEwRDtBQUN0RFIsV0FBSyxDQUFDUyxNQUFOLENBQWEsWUFBYixFQUEyQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEVBQUUsQ0FBQ00sV0FBZCxDQUEzQjtBQUNIOztBQUVELFFBQUtOLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFWLEVBQXVEO0FBQ25EUixXQUFLLENBQUNTLE1BQU4sQ0FBYSxpQkFBYixFQUFnQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLEVBQUUsQ0FBQ00sV0FBZCxDQUFoQztBQUNILEtBYlksQ0FlYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLENBQUNOLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQU4sTUFBOEMsSUFBbEQsRUFBd0Q7QUFDcERSLFdBQUssQ0FBQ1MsTUFBTixDQUFhLFVBQWIsRUFBeUJDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxFQUFFLENBQUNNLFdBQWQsQ0FBekI7QUFDSDs7QUFFSkMsSUFBQSw4REFBTyxDQUFDeEIsTUFBUixDQUFlLHVCQUFmLEVBQXdDLGFBQXhDLEVBQXVELDREQUF2RCxFQUFtRSxrRUFBbkU7QUFFQSxHQTFCRDtBQTRCQUcsTUFBSSxDQUFDc0IsS0FBTCxDQUFXLFlBQU07QUFDYkMsSUFBQSxpRkFBZSxDQUFDQyxPQUFoQixDQUF3QnhCLElBQXhCO0FBQ0F5QixJQUFBLGlFQUFVLENBQUNELE9BQVgsQ0FBbUJ4QixJQUFuQjtBQUNBMEIsSUFBQSw4REFBUyxDQUFDRixPQUFWLENBQWtCeEIsSUFBbEI7QUFDQTJCLElBQUEscUVBQWUsQ0FBQ0gsT0FBaEIsQ0FBd0J4QixJQUF4QjtBQUNILEdBTEQ7QUFPQSxTQUFPSixNQUFQO0FBQ0gsQ0FuRUQ7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBTyxJQUFNOEIsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBU0UsT0FBVCxFQUFrQjVCLElBQWxCLEVBQXdCO0FBRTdDLE1BQUk2QixPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQU1DLE9BQU8sR0FBR0YsT0FBTyxDQUFDUixXQUF4Qjs7QUFDQSxNQUFHVSxPQUFPLENBQUNDLE1BQVIsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkJGLFdBQU8sR0FBR1gsSUFBSSxDQUFDQyxLQUFMLENBQVdTLE9BQU8sQ0FBQ1IsV0FBbkIsQ0FBVjtBQUNBUSxXQUFPLENBQUNJLFNBQVIsR0FBb0IsRUFBcEI7QUFDSDs7QUFFREosU0FBTyxDQUFDSyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsY0FBeEI7QUFFQSxNQUFJQyxJQUFJLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQVIsU0FBTyxDQUFDUyxXQUFSLENBQW9CRixJQUFwQjtBQUVBLE1BQUlHLEtBQUssR0FBR3ZCLFFBQVEsQ0FBQ3FCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBRSxPQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiO0FBQ0FKLE1BQUksQ0FBQ0UsV0FBTCxDQUFpQkMsS0FBakI7QUFFQSxNQUFJRSxNQUFNLEdBQUd6QixRQUFRLENBQUNxQixhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQUksUUFBTSxDQUFDRCxJQUFQLEdBQWMsUUFBZDtBQUNBQyxRQUFNLENBQUNDLEtBQVAsR0FBZSxZQUFmO0FBQ0FOLE1BQUksQ0FBQ0UsV0FBTCxDQUFpQkcsTUFBakI7QUFFQSxNQUFJRSxHQUFHLEdBQUc1QyxJQUFJLENBQUM2QyxJQUFMLEdBQVksZUFBdEI7O0FBQ0EsTUFBR2QsT0FBTyxDQUFDZSxNQUFSLEtBQW1CbkMsU0FBdEIsRUFBaUM7QUFDN0JpQyxPQUFHLElBQUksTUFBTWIsT0FBTyxDQUFDZSxNQUFyQjs7QUFFQSxRQUFHZixPQUFPLENBQUNnQixHQUFSLEtBQWdCcEMsU0FBbkIsRUFBOEI7QUFDMUJpQyxTQUFHLElBQUksTUFBTWIsT0FBTyxDQUFDZ0IsR0FBckI7QUFDSDtBQUNKOztBQUVEVixNQUFJLENBQUNXLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUN2Q0EsU0FBSyxDQUFDQyxjQUFOO0FBRUEsUUFBTUMsS0FBSyxHQUFHQyxTQUFTLENBQUNaLEtBQUssQ0FBQ0csS0FBTixDQUFZVSxXQUFaLEdBQTBCQyxJQUExQixFQUFELENBQXZCO0FBQ0FDLFVBQU0sQ0FBQ0MsSUFBUCxXQUFlWixHQUFmLGdCQUF3Qk8sS0FBeEIsR0FBaUMsWUFBakMsRUFBK0MsdUNBQS9DO0FBQ0gsR0FMRDtBQU1ILENBdENNOztBQXdDUHZCLFNBQVMsQ0FBQ0YsT0FBVixHQUFvQixVQUFTeEIsSUFBVCxFQUFlO0FBQy9CLE1BQUl1RCxRQUFRLEdBQUd4QyxRQUFRLENBQUN5QyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBZjs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsUUFBUSxDQUFDeEIsTUFBeEIsRUFBZ0MwQixDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUkvQixTQUFKLENBQWM2QixRQUFRLENBQUNFLENBQUQsQ0FBdEIsRUFBMkJ6RCxJQUEzQjtBQUNIO0FBQ0osQ0FMRCxDOzs7Ozs7Ozs7Ozs7QUN6Q0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTs7QUFFQSxJQUFJMEQsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU0MsSUFBVCxFQUFlO0FBQ3hCQyxFQUFBLHdFQUFVLENBQUNDLElBQVgsQ0FBZ0IsSUFBaEI7QUFFQSxNQUFJQyxJQUFJLEdBQUcsR0FBWDs7QUFFQSxNQUFHSCxJQUFJLEtBQUtsRCxTQUFaLEVBQXVCO0FBQ25CLFNBQUtHLEVBQUwsR0FBVStDLElBQUksQ0FBQy9DLEVBQWY7QUFDQSxTQUFLbUQsUUFBTCxHQUFnQkosSUFBSSxDQUFDSSxRQUFyQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUwsSUFBSSxDQUFDSyxPQUFwQjtBQUNBRixRQUFJLEdBQUdILElBQUksQ0FBQ0csSUFBWjtBQUNILEdBTEQsTUFLTztBQUNILFNBQUtsRCxFQUFMLEdBQVUsQ0FBVixDQURHLENBQ2E7O0FBQ2hCLFNBQUttRCxRQUFMLEdBQWdCLElBQWhCLENBRkcsQ0FFcUI7O0FBQ3hCLFNBQUtDLE9BQUwsR0FBZSxJQUFmLENBSEcsQ0FHbUI7O0FBQ3RCRixRQUFJLEdBQUcsSUFBUCxDQUpHLENBSWdCO0FBQ3RCOztBQUVELE9BQUtBLElBQUwsR0FBWSxZQUFXO0FBQ25CLFdBQU9BLElBQVA7QUFDSCxHQUZEOztBQUlBLE9BQUtHLE9BQUwsR0FBZSxVQUFTQyxLQUFULEVBQWdCO0FBQzNCSixRQUFJLEdBQUdJLEtBQVA7QUFDSCxHQUZEO0FBR0gsQ0F4QkQ7O0FBMEJBUixNQUFNLENBQUNTLFNBQVAsR0FBbUJDLE1BQU0sQ0FBQ3ZFLE1BQVAsQ0FBYyx3RUFBVSxDQUFDc0UsU0FBekIsQ0FBbkI7QUFDQVQsTUFBTSxDQUFDUyxTQUFQLENBQWlCRSxXQUFqQixHQUErQlgsTUFBL0I7QUFFQTs7Ozs7O0FBS0FBLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQkcsVUFBakIsR0FBOEIsVUFBUzlELEtBQVQsRUFBZ0I7QUFDMUMsU0FBT0EsS0FBSyxDQUFDK0QsT0FBTixDQUFjLGdCQUFkLEVBQWdDLEtBQUtSLFFBQXJDLEVBQStDLEtBQUtDLE9BQXBELENBQVA7QUFDSCxDQUZEO0FBSUE7Ozs7Ozs7QUFLQU4sTUFBTSxDQUFDUyxTQUFQLENBQWlCSyxhQUFqQixHQUFpQyxVQUFTaEUsS0FBVCxFQUFnQmlFLFNBQWhCLEVBQTJCO0FBQ3hELE1BQU1ULE9BQU8sR0FBRyxLQUFLTSxVQUFMLENBQWdCOUQsS0FBaEIsQ0FBaEI7QUFDQSxTQUFPd0QsT0FBTyxDQUFDUSxhQUFSLENBQXNCQyxTQUF0QixDQUFQO0FBQ0gsQ0FIRCxDLENBTUE7QUFDQTs7O0FBQ0FmLE1BQU0sQ0FBQ2dCLEtBQVAsR0FBZSxHQUFmLEMsQ0FBd0I7O0FBQ3hCaEIsTUFBTSxDQUFDaUIsSUFBUCxHQUFjLEdBQWQsQyxDQUF3Qjs7QUFDeEJqQixNQUFNLENBQUNrQixPQUFQLEdBQWlCLEdBQWpCLEMsQ0FBd0I7O0FBQ3hCbEIsTUFBTSxDQUFDbUIsT0FBUCxHQUFpQixHQUFqQixDLENBQXdCOztBQUN4Qm5CLE1BQU0sQ0FBQ29CLEtBQVAsR0FBZSxHQUFmLEMsQ0FBd0I7O0FBQ3hCcEIsTUFBTSxDQUFDcUIsTUFBUCxHQUFnQixHQUFoQixDLENBQXdCOztBQUN4QnJCLE1BQU0sQ0FBQ3NCLEVBQVAsR0FBWSxHQUFaLEMsQ0FBd0I7O0FBQ3hCdEIsTUFBTSxDQUFDdUIsVUFBUCxHQUFvQixHQUFwQixDLENBQTRCOztBQUM1QnZCLE1BQU0sQ0FBQ3dCLEtBQVAsR0FBZSxHQUFmLEMsQ0FBd0I7O0FBRXhCeEIsTUFBTSxDQUFDUyxTQUFQLENBQWlCZ0IsUUFBakIsR0FBNEIsWUFBVztBQUNuQyxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBQSxPQUFLLENBQUMxQixNQUFNLENBQUNnQixLQUFSLENBQUwsR0FBc0I7QUFBQ1csUUFBSSxFQUFFLE9BQVA7QUFBZ0JDLFlBQVEsRUFBRTtBQUExQixHQUF0QjtBQUNBRixPQUFLLENBQUMxQixNQUFNLENBQUNrQixPQUFSLENBQUwsR0FBd0I7QUFBQ1MsUUFBSSxFQUFFLFNBQVA7QUFBa0JDLFlBQVEsRUFBRTtBQUE1QixHQUF4QjtBQUNBRixPQUFLLENBQUMxQixNQUFNLENBQUNpQixJQUFSLENBQUwsR0FBcUI7QUFBQ1UsUUFBSSxFQUFFLE1BQVA7QUFBZUMsWUFBUSxFQUFFLENBQXpCO0FBQTRCQyxRQUFJLEVBQUU7QUFBbEMsR0FBckI7QUFDQUgsT0FBSyxDQUFDMUIsTUFBTSxDQUFDbUIsT0FBUixDQUFMLEdBQXdCO0FBQUNRLFFBQUksRUFBRSxTQUFQO0FBQWtCQyxZQUFRLEVBQUU7QUFBNUIsR0FBeEI7QUFDQUYsT0FBSyxDQUFDMUIsTUFBTSxDQUFDb0IsS0FBUixDQUFMLEdBQXNCO0FBQUNPLFFBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFRLEVBQUUsQ0FBMUI7QUFBNkJDLFFBQUksRUFBRTtBQUFuQyxHQUF0QjtBQUNBSCxPQUFLLENBQUMxQixNQUFNLENBQUNxQixNQUFSLENBQUwsR0FBdUI7QUFBQ00sUUFBSSxFQUFFLFFBQVA7QUFBaUJDLFlBQVEsRUFBRTtBQUEzQixHQUF2QjtBQUNBRixPQUFLLENBQUMxQixNQUFNLENBQUNzQixFQUFSLENBQUwsR0FBbUI7QUFBQ0ssUUFBSSxFQUFFLG9CQUFQO0FBQTZCQyxZQUFRLEVBQUU7QUFBdkMsR0FBbkI7QUFDQUYsT0FBSyxDQUFDMUIsTUFBTSxDQUFDdUIsVUFBUixDQUFMLEdBQTJCO0FBQUNJLFFBQUksRUFBRSxZQUFQO0FBQXFCQyxZQUFRLEVBQUU7QUFBL0IsR0FBM0I7QUFDQUYsT0FBSyxDQUFDMUIsTUFBTSxDQUFDd0IsS0FBUixDQUFMLEdBQXNCO0FBQUNHLFFBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FBdEI7QUFFQSxTQUFPRixLQUFQO0FBQ0gsQ0FiRDs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFBQTtBQUFPLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNsRixJQUFULEVBQWU7QUFDckMsT0FBSSxJQUFJbUYsUUFBUixJQUFvQm5GLElBQXBCLEVBQTBCO0FBQ3RCLFNBQUttRixRQUFMLElBQWlCbkYsSUFBSSxDQUFDbUYsUUFBRCxDQUFyQjtBQUNIO0FBQ0osQ0FKTSxDOzs7Ozs7Ozs7Ozs7QUNEUDtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQUlDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBU3BGLElBQVQsRUFBZTtBQUMzQyxPQUFLdUMsR0FBTCxHQUFXdkMsSUFBSSxDQUFDdUMsR0FBaEI7QUFDQSxPQUFLd0MsSUFBTCxHQUFZL0UsSUFBSSxDQUFDK0UsSUFBakI7QUFDQSxPQUFLTSxPQUFMLEdBQWVyRixJQUFJLENBQUNxRixPQUFMLEtBQWlCbEYsU0FBakIsR0FBNkJILElBQUksQ0FBQ3FGLE9BQWxDLEdBQTRDLElBQTNEO0FBRUEsT0FBS0MsV0FBTCxHQUFtQixFQUFuQjtBQUNBLE9BQUtDLGdCQUFMLEdBQXdCLEVBQXhCO0FBTjJDO0FBQUE7QUFBQTs7QUFBQTtBQVEzQyx5QkFBa0J2RixJQUFJLENBQUNzRixXQUF2Qiw4SEFBb0M7QUFBQSxVQUE1QmhELE1BQTRCO0FBQ2hDLFVBQU1rRCxVQUFVLEdBQUcsSUFBSSxzREFBSixDQUFlbEQsTUFBZixDQUFuQjtBQUNBLFdBQUtnRCxXQUFMLENBQWlCRyxJQUFqQixDQUFzQkQsVUFBdEI7QUFDQSxXQUFLRCxnQkFBTCxDQUFzQkMsVUFBVSxDQUFDakQsR0FBakMsSUFBd0NpRCxVQUF4QztBQUNIO0FBWjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYzNDLE9BQUt0QixhQUFMLEdBQXFCLFVBQVMzQixHQUFULEVBQWM7QUFDL0IsUUFBTWlELFVBQVUsR0FBRyxLQUFLRCxnQkFBTCxDQUFzQmhELEdBQXRCLENBQW5CO0FBQ0EsV0FBT2lELFVBQVUsS0FBS3JGLFNBQWYsR0FBMkJxRixVQUEzQixHQUF3QyxJQUEvQztBQUNILEdBSEQ7QUFJSCxDQWxCTSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVMxRixJQUFULEVBQWU7QUFFdEMsT0FBSzJGLFVBQUwsR0FBa0IsRUFBbEI7QUFGc0M7QUFBQTtBQUFBOztBQUFBO0FBR3RDLHlCQUFvQjNGLElBQUksQ0FBQzJGLFVBQXpCLDhIQUFxQztBQUFBLFVBQTdCQyxRQUE2QjtBQUNqQyxXQUFLRCxVQUFMLENBQWdCRixJQUFoQixDQUFxQixJQUFJLHNFQUFKLENBQXVCRyxRQUF2QixDQUFyQjtBQUNIO0FBTHFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT3RDLE9BQUsxQixhQUFMLEdBQXFCLFVBQVMzQixHQUFULEVBQWM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDL0IsNEJBQW9CLEtBQUtvRCxVQUF6QixtSUFBcUM7QUFBQSxZQUE3QkMsUUFBNkI7QUFDakMsWUFBSUosVUFBVSxHQUFHSSxRQUFRLENBQUMxQixhQUFULENBQXVCM0IsR0FBdkIsQ0FBakI7O0FBQ0EsWUFBR2lELFVBQVUsS0FBSyxJQUFsQixFQUF3QjtBQUNwQixpQkFBT0EsVUFBUDtBQUNIO0FBQ0o7QUFOOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRL0IsV0FBTyxJQUFQO0FBQ0gsR0FURDtBQVdILENBbEJNLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBOzs7O0FBS0E7QUFFTyxJQUFNbEcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBU1UsSUFBVCxFQUFlO0FBRWpDLE9BQUs2RixPQUFMLEdBQWU3RixJQUFJLENBQUM2RixPQUFwQjtBQUNBLE9BQUtDLElBQUwsR0FBWTlGLElBQUksQ0FBQzhGLElBQWpCO0FBQ0EsT0FBS2YsSUFBTCxHQUFZL0UsSUFBSSxDQUFDK0UsSUFBakI7QUFDQSxPQUFLZ0IsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFOaUM7QUFBQTtBQUFBOztBQUFBO0FBUWpDLHlCQUFtQmhHLElBQUksQ0FBQytGLFFBQXhCLDhIQUFrQztBQUFBLFVBQTFCckMsT0FBMEI7QUFDOUIsVUFBTXVDLENBQUMsR0FBRyxJQUFJLGdEQUFKLENBQVl2QyxPQUFaLENBQVY7QUFDQSxXQUFLc0MsWUFBTCxDQUFrQnRDLE9BQU8sQ0FBQ3BELEVBQTFCLElBQWdDMkYsQ0FBaEM7QUFDQSxXQUFLRixRQUFMLENBQWNOLElBQWQsQ0FBbUJRLENBQW5CO0FBQ0g7QUFaZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFwQyxDQWJNLEM7Ozs7Ozs7Ozs7OztBQ1BQO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBU2xHLElBQVQsRUFBZTtBQUNsQyxPQUFLTSxFQUFMLEdBQVVOLElBQUksQ0FBQ00sRUFBZjtBQUNBLE9BQUttRCxRQUFMLEdBQWdCekQsSUFBSSxDQUFDeUQsUUFBckI7QUFDQSxPQUFLeEIsSUFBTCxHQUFZakMsSUFBSSxDQUFDaUMsSUFBakI7QUFDQSxPQUFLcUQsV0FBTCxHQUFtQixJQUFJLHdEQUFKLENBQWdCdEYsSUFBSSxDQUFDc0YsV0FBckIsQ0FBbkI7O0FBRUEsT0FBS3BCLGFBQUwsR0FBcUIsVUFBUzNCLEdBQVQsRUFBYztBQUMvQixXQUFPLEtBQUsrQyxXQUFMLENBQWlCcEIsYUFBakIsQ0FBK0IzQixHQUEvQixDQUFQO0FBQ0gsR0FGRDtBQUdILENBVE0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBOzs7OztBQUtBOzs7Ozs7QUFNTyxJQUFJdEIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFTSyxPQUFULEVBQWtCNUIsSUFBbEIsRUFBd0I7QUFDakQsTUFBSXlHLEdBQUcsR0FBR3pHLElBQUksQ0FBQ3lHLEdBQWY7QUFFQSxNQUFNQyxJQUFJLEdBQUd4RixJQUFJLENBQUNDLEtBQUwsQ0FBV1MsT0FBTyxDQUFDUixXQUFuQixDQUFiO0FBQ0EsTUFBTWlGLFFBQVEsR0FBR0ssSUFBSSxDQUFDTCxRQUF0QjtBQUNBLE1BQU1NLE1BQU0sR0FBR0QsSUFBSSxDQUFDQyxNQUFwQjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRSxLQUFuQjtBQUVBLE1BQUlDLFFBQVEscWVBQVo7QUFhQSxNQUFNQyxNQUFNLEdBQUc5RyxJQUFJLENBQUMwRyxJQUFMLENBQVVLLE1BQVYsQ0FBaUJDLFNBQWpCLEVBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUdqSCxJQUFJLENBQUMwRyxJQUFMLENBQVVRLE1BQVYsQ0FBaUJGLFNBQWpCLEVBQWY7QUFFQSxNQUFJRyxNQUFNLEdBQUcsSUFBSXJILElBQUksQ0FBQ3NILFNBQVQsQ0FBbUI7QUFDNUJDLFFBQUksRUFBRSxTQURzQjtBQUU1QkMsVUFBTSxFQUFFO0FBRm9CLEdBQW5CLENBQWI7QUFLQSxNQUFJYixHQUFKLENBQVE7QUFDSlUsVUFBTSxFQUFOQSxNQURJO0FBRUpJLE1BQUUsRUFBRTNGLE9BRkE7QUFHSnRCLFFBQUksRUFBRTtBQUNGa0gsV0FBSyxFQUFFLGtCQURMO0FBRUZiLFlBQU0sRUFBRUEsTUFGTjtBQUdGQyxXQUFLLEVBQUVBLEtBSEw7QUFJRlAsY0FBUSxFQUFFQSxRQUpSO0FBS0ZvQixZQUFNLEVBQUUsZ0JBQVN6RCxPQUFULEVBQWtCO0FBQUE7O0FBQ3RCLFlBQUkwRCxNQUFNLEdBQUc7QUFDVDNELGtCQUFRLEVBQUVDLE9BQU8sQ0FBQ0QsUUFEVDtBQUVUQyxpQkFBTyxFQUFFQSxPQUFPLENBQUNBO0FBRlIsU0FBYjtBQUlBbEUsWUFBSSxDQUFDNkgsR0FBTCxDQUFTQyxJQUFULENBQWMsbUNBQWQsRUFBbURGLE1BQW5ELEVBQ0tHLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsY0FBR0EsUUFBUSxDQUFDQyxRQUFULEVBQUgsRUFBd0I7QUFDcEJqSSxnQkFBSSxDQUFDa0ksS0FBTCxDQUFXLEtBQVgsRUFBaUJGLFFBQWpCO0FBQ0gsV0FGRCxNQUVPO0FBQ0h6RSxrQkFBTSxDQUFDNEUsUUFBUCxHQUFrQixLQUFJLENBQUNDLFFBQXZCO0FBQ0g7QUFFSixTQVJMLEVBU0tDLEtBVEwsQ0FTVyxVQUFDbEYsS0FBRCxFQUFXO0FBQ2RuRCxjQUFJLENBQUNrSSxLQUFMLENBQVcsS0FBWCxFQUFpQi9FLEtBQWpCO0FBQ0gsU0FYTDtBQVlIO0FBdEJDLEtBSEY7QUEyQkptRixXQUFPLEVBQUUsbUJBQVc7QUFDaEIsV0FBS0YsUUFBTCxHQUFnQixLQUFLRyxNQUFMLENBQVlDLEtBQVosQ0FBa0JDLENBQWxDOztBQUNBLFVBQUcsS0FBS0wsUUFBTCxLQUFrQnpILFNBQWxCLElBQStCLEtBQUt5SCxRQUFMLEtBQWtCLElBQXBELEVBQTBEO0FBQ3RELGFBQUtBLFFBQUwsR0FBZ0JwSSxJQUFJLENBQUM2QyxJQUFyQjtBQUNIO0FBQ0osS0FoQ0c7QUFpQ0prRSxZQUFRLEVBQUVBLFFBakNOO0FBa0NKMkIsY0FBVSxFQUFFO0FBQ1IscUJBQWUxQixNQURQO0FBRVIscUJBQWVHO0FBRlA7QUFsQ1IsR0FBUjtBQXVDSCxDQXBFTTs7QUFzRVAxRixlQUFlLENBQUNDLE9BQWhCLEdBQTBCLFVBQVN4QixJQUFULEVBQWU7QUFDckMsTUFBSWMsRUFBSjs7QUFDQSxNQUFJLENBQUNBLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUFOLE1BQTBELElBQTlELEVBQW9FO0FBQ2hFLFFBQUlPLGVBQUosQ0FBb0JULEVBQXBCLEVBQXdCZCxJQUF4QjtBQUNIO0FBQ0osQ0FMRCxDOzs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBOzs7O0FBS08sSUFBSXlJLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVyxDQUNyQyxDQURNLEMsQ0FHUDs7QUFDQUEsYUFBYSxDQUFDQyxVQUFkLEdBQTJCLEdBQTNCLEMsQ0FBZ0M7O0FBQ2hDRCxhQUFhLENBQUNFLE9BQWQsR0FBd0IsR0FBeEIsQyxDQUFpQzs7QUFDakNGLGFBQWEsQ0FBQ0csSUFBZCxHQUFxQixHQUFyQixDLENBQStCOztBQUUvQkgsYUFBYSxDQUFDSSxRQUFkLEdBQXlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDdEMsTUFBR0EsTUFBTSxLQUFLLElBQWQsRUFBb0I7QUFDaEIsV0FBTyxTQUFQO0FBQ0g7O0FBRUQsVUFBT0EsTUFBUDtBQUNJLFNBQUtMLGFBQWEsQ0FBQ0MsVUFBbkI7QUFDQTtBQUNJLGFBQU8saUJBQVA7O0FBRUosU0FBS0QsYUFBYSxDQUFDRSxPQUFuQjtBQUNJLGFBQU8sU0FBUDs7QUFFSixTQUFLRixhQUFhLENBQUNHLElBQW5CO0FBQ0ksYUFBTyxXQUFQO0FBVFI7QUFXSCxDQWhCRCxDOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFFTyxJQUFJRyxpQkFBaUIsR0FBRztBQUMzQkMsWUFBVSxFQUFFLElBRGU7QUFFM0JDLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUUsSUFETDtBQUVIQyxTQUFLLEVBQUU7QUFGSixHQUZvQjtBQU0zQkMsV0FBUyxFQUFFO0FBQ1BDLE9BRE8sZUFDSEosS0FERyxFQUNJM0ksSUFESixFQUNVO0FBQ2IySSxXQUFLLENBQUNDLE1BQU4sR0FBZSxJQUFJLHFEQUFKLENBQVc1SSxJQUFYLENBQWY7QUFDSCxLQUhNO0FBSVBnSixZQUpPLG9CQUlFTCxLQUpGLEVBSVMzSSxJQUpULEVBSWU7QUFDbEIsVUFBSTZJLEtBQUssR0FBRyxFQUFaO0FBRGtCO0FBQUE7QUFBQTs7QUFBQTtBQUVsQiw2QkFBYTdJLElBQWIsOEhBQW1CO0FBQUEsY0FBWGlKLENBQVc7QUFDZixjQUFJNUksSUFBSSxHQUFHLElBQUlSLEtBQUssQ0FBQ0MsSUFBVixDQUFlbUosQ0FBZixDQUFYO0FBQ0FKLGVBQUssQ0FBQ3hJLElBQUksQ0FBQ0osTUFBTCxDQUFZSyxFQUFiLENBQUwsR0FBd0JELElBQXhCO0FBQ0g7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPbEJzSSxXQUFLLENBQUNFLEtBQU4sR0FBY0EsS0FBZDtBQUNIO0FBWk0sR0FOZ0I7QUFvQjNCNUUsU0FBTyxFQUFFO0FBQ0xQLFdBQU8sRUFBRSxpQkFBQ2lGLEtBQUQ7QUFBQSxhQUFXLFVBQUNsRixRQUFELEVBQVd5RixTQUFYLEVBQXlCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3pDLGdDQUFtQlAsS0FBSyxDQUFDQyxNQUFOLENBQWE3QyxRQUFoQyxtSUFBMEM7QUFBQSxnQkFBbENyQyxPQUFrQzs7QUFDdEMsZ0JBQUdBLE9BQU8sQ0FBQ0QsUUFBUixLQUFxQkEsUUFBckIsSUFBaUNDLE9BQU8sQ0FBQ3BELEVBQVIsS0FBZTRJLFNBQW5ELEVBQThEO0FBQzFELHFCQUFPeEYsT0FBUDtBQUNIO0FBQ0o7QUFMd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPekMsZUFBTyxJQUFQO0FBQ0gsT0FSUTtBQUFBLEtBREo7QUFVTDhCLGNBQVUsRUFBRSxvQkFBQ21ELEtBQUQsRUFBUTFFLE9BQVI7QUFBQSxhQUFvQixVQUFDUixRQUFELEVBQVd5RixTQUFYLEVBQXNCQyxTQUF0QixFQUFvQztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNoRSxnQ0FBbUJSLEtBQUssQ0FBQ0MsTUFBTixDQUFhN0MsUUFBaEMsbUlBQTBDO0FBQUEsZ0JBQWxDckMsT0FBa0M7O0FBQ3RDLGdCQUFHQSxPQUFPLENBQUNELFFBQVIsS0FBcUJBLFFBQXJCLElBQWlDQyxPQUFPLENBQUNwRCxFQUFSLEtBQWU0SSxTQUFuRCxFQUE4RDtBQUMxRCxxQkFBT3hGLE9BQVA7QUFDSDtBQUNKO0FBTCtEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBT2hFLGVBQU8sSUFBUDtBQUNILE9BUlc7QUFBQSxLQVZQO0FBbUJMbUYsU0FBSyxFQUFFLGVBQUNGLEtBQUQ7QUFBQSxhQUFXLFVBQUNySSxFQUFELEVBQVE7QUFDdEIsWUFBSUQsSUFBSSxHQUFHc0ksS0FBSyxDQUFDRSxLQUFOLENBQVl2SSxFQUFaLENBQVg7QUFDQSxlQUFPRCxJQUFJLEtBQUtGLFNBQVQsR0FBcUJFLElBQXJCLEdBQTRCLElBQW5DO0FBQ0gsT0FITTtBQUFBO0FBbkJGO0FBcEJrQixDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNOUDtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1jLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNHLE9BQVQsRUFBa0I1QixJQUFsQixFQUF3QjtBQUU5QyxNQUFNMEosVUFBVSxHQUFHeEksSUFBSSxDQUFDQyxLQUFMLENBQVdTLE9BQU8sQ0FBQ1IsV0FBbkIsQ0FBbkI7QUFDQVEsU0FBTyxDQUFDSSxTQUFSLEdBQW9CLEVBQXBCO0FBRUEsTUFBSXhCLEtBQUssR0FBR1IsSUFBSSxDQUFDUSxLQUFqQjtBQUVBLE1BQUlSLElBQUksQ0FBQ3lHLEdBQVQsQ0FBYTtBQUNUYyxNQUFFLEVBQUUzRixPQURLO0FBRVRwQixTQUFLLEVBQUxBLEtBRlM7QUFHWlIsUUFBSSxFQUFKQSxJQUhZO0FBSVRNLFFBQUksRUFBRSxnQkFBVztBQUNiLGFBQU87QUFDSG9KLGtCQUFVLEVBQUVBO0FBRFQsT0FBUDtBQUdILEtBUlE7QUFTVGxCLGNBQVUsRUFBRTtBQUNSbUIsbUJBQWEsRUFBRSx1REFBYUM7QUFEcEIsS0FUSDtBQVlUL0MsWUFBUTtBQVpDLEdBQWI7QUFjSCxDQXJCTTs7QUF1QlBwRixVQUFVLENBQUNELE9BQVgsR0FBcUIsVUFBU3hCLElBQVQsRUFBZTtBQUNoQyxNQUFJdUQsUUFBUSxHQUFHeEMsUUFBUSxDQUFDeUMsZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWY7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNGLFFBQVEsQ0FBQ3hCLE1BQXhCLEVBQWdDMEIsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxRQUFJaEMsVUFBSixDQUFlOEIsUUFBUSxDQUFDRSxDQUFELENBQXZCLEVBQTRCekQsSUFBNUI7QUFDSDtBQUNKLENBTEQsQzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUF5RztBQUM3SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix1SUFBaUQsRUFBRTtBQUFBO0FBQ3pFO0FBQ0EsZ0JBQWdCLHFGQUFNO0FBQ3RCLHlCQUF5Qiw4RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBeUc7QUFDN0gsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IseUlBQWtELEVBQUU7QUFBQTtBQUMxRTtBQUNBLGdCQUFnQixzRkFBTTtBQUN0Qix5QkFBeUIsK0ZBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDs7O0FBRzVEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZJQUFvRCxFQUFFO0FBQUE7QUFDNUU7QUFDQSxnQkFBZ0Isd0ZBQU07QUFDdEIseUJBQXlCLGlHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXVNLENBQWdCLHVQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTNOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUF5RztBQUM3SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix1SUFBaUQsRUFBRTtBQUFBO0FBQ3pFO0FBQ0EsZ0JBQWdCLHFGQUFNO0FBQ3RCLHlCQUF5Qiw4RkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFvTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUMzQjtBQUNMOzs7QUFHNUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBeUc7QUFDN0gsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsNklBQW9ELEVBQUU7QUFBQTtBQUM1RTtBQUNBLGdCQUFnQix3RkFBTTtBQUN0Qix5QkFBeUIsaUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHFJQUFnRCxFQUFFO0FBQUE7QUFDeEU7QUFDQSxnQkFBZ0Isb0ZBQU07QUFDdEIseUJBQXlCLDZGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQW1NLENBQWdCLG1QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDM0I7QUFDTDs7O0FBRzVEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSx3RkFBTTtBQUNSLEVBQUUsaUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLDZJQUFvRCxFQUFFO0FBQUE7QUFDNUU7QUFDQSxnQkFBZ0Isd0ZBQU07QUFDdEIseUJBQXlCLGlHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFPLElBQU0yQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQVNDLE9BQVQsRUFBa0I1QixJQUFsQixFQUF3QjtBQUFBOztBQUVuRCxNQUFJNkosQ0FBQyxHQUFHOUksUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixHQUF2QixDQUFSO0FBQ0FSLFNBQU8sQ0FBQ1MsV0FBUixDQUFvQndILENBQXBCO0FBQ0FBLEdBQUMsQ0FBQ0MsU0FBRixDQUFZQyxHQUFaLENBQWdCLGlCQUFoQjtBQUVBLE1BQUl2SCxNQUFNLEdBQUd6QixRQUFRLENBQUNxQixhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUksUUFBTSxDQUFDcEIsV0FBUCxHQUFxQixTQUFyQjtBQUNBeUksR0FBQyxDQUFDeEgsV0FBRixDQUFjRyxNQUFkOztBQUVBQSxRQUFNLENBQUN3SCxPQUFQLEdBQWlCLFlBQU07QUFDbkJoSyxRQUFJLENBQUMySCxHQUFMLENBQVNDLElBQVQsQ0FBYywyQkFBZCxFQUEyQztBQUFDcUMsYUFBTyxFQUFFO0FBQVYsS0FBM0MsRUFDS3BDLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsVUFBSSxDQUFDQSxRQUFRLENBQUNDLFFBQVQsRUFBTCxFQUEwQjtBQUN0QjFFLGNBQU0sQ0FBQzRFLFFBQVAsR0FBa0JqSSxJQUFJLENBQUMyQyxJQUFMLEdBQVksR0FBOUI7QUFDSCxPQUZELE1BRU87QUFDSDdDLFlBQUksQ0FBQ2tJLEtBQUwsQ0FBVyxLQUFYLEVBQWlCRixRQUFqQjtBQUNIO0FBRUosS0FSTCxFQVNLSyxLQVRMLENBU1csVUFBQ2xGLEtBQUQsRUFBVztBQUNkbkQsVUFBSSxDQUFDa0ksS0FBTCxDQUFXLEtBQVgsRUFBaUIvRSxLQUFqQjtBQUNILEtBWEw7QUFZSCxHQWJELENBVm1ELENBeUJuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsQ0E3RE07O0FBK0RQdEIsZUFBZSxDQUFDSCxPQUFoQixHQUEwQixVQUFTeEIsSUFBVCxFQUFlO0FBQ3JDLE1BQUl1RCxRQUFRLEdBQUd4QyxRQUFRLENBQUN5QyxnQkFBVCxDQUEwQix5QkFBMUIsQ0FBZjs7QUFDQSxPQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQWFBLENBQUMsR0FBQ0YsUUFBUSxDQUFDeEIsTUFBeEIsRUFBZ0MwQixDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDLFFBQUk5QixlQUFKLENBQW9CNEIsUUFBUSxDQUFDRSxDQUFELENBQTVCLEVBQWlDekQsSUFBakM7QUFDSDtBQUNKLENBTEQsQzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTs7OztBQUlPLElBQU1rSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFTdkcsSUFBVCxFQUFlO0FBQ3RDLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUdBOzs7Ozs7QUFLQSxPQUFLd0csT0FBTCxHQUFlLFVBQVM1SCxJQUFULEVBQWU7QUFDMUIsUUFBSSxLQUFLb0IsSUFBTCxDQUFVckQsSUFBVixLQUFtQkcsU0FBdkIsRUFBa0M7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDOUIsNkJBQW1CLEtBQUtrRCxJQUFMLENBQVVyRCxJQUE3Qiw4SEFBbUM7QUFBQSxjQUF4QjhKLElBQXdCOztBQUMvQixjQUFJQSxJQUFJLENBQUM3SCxJQUFMLEtBQWNBLElBQWxCLEVBQXdCO0FBQ3BCLG1CQUFPNkgsSUFBUDtBQUNIO0FBQ0o7QUFMNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1qQzs7QUFFRCxXQUFPLElBQVA7QUFDSCxHQVZEO0FBWUg7Ozs7Ozs7QUFLQSxPQUFLQyxVQUFMLEdBQWtCLFVBQVM5SCxJQUFULEVBQWU7QUFDMUIsUUFBSSxLQUFLb0IsSUFBTCxDQUFVckQsSUFBVixLQUFtQkcsU0FBdkIsRUFBa0M7QUFDOUIsVUFBSTZKLEdBQUcsR0FBRyxFQUFWO0FBRDhCO0FBQUE7QUFBQTs7QUFBQTtBQUU5Qiw4QkFBbUIsS0FBSzNHLElBQUwsQ0FBVXJELElBQTdCLG1JQUFtQztBQUFBLGNBQXhCOEosSUFBd0I7O0FBQy9CLGNBQUlBLElBQUksQ0FBQzdILElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDcEIrSCxlQUFHLENBQUN2RSxJQUFKLENBQVNxRSxJQUFUO0FBQ0g7QUFDSjtBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVE5QixhQUFPRSxHQUFQO0FBQ0g7O0FBRUQsV0FBTyxFQUFQO0FBQ0gsR0FiSjtBQWdCQTs7Ozs7O0FBSUEsT0FBS3ZDLFFBQUwsR0FBZ0IsWUFBWTtBQUMzQixXQUFRLEtBQUtwRSxJQUFMLENBQVU0RyxNQUFWLEtBQXFCOUosU0FBckIsSUFBa0MsS0FBS2tELElBQUwsQ0FBVTRHLE1BQVYsQ0FBaUJ4SSxNQUFqQixHQUEwQixDQUFwRTtBQUNBLEdBRkQ7QUFJQTs7Ozs7O0FBSUcsT0FBS3lJLFNBQUwsR0FBaUIsWUFBVztBQUN4QixXQUFPLEtBQUs3RyxJQUFMLENBQVU0RyxNQUFWLENBQWlCLENBQWpCLEVBQW9CRSxJQUEzQjtBQUNILEdBRkQ7QUFJSDs7Ozs7O0FBSUEsT0FBS0MsVUFBTCxHQUFrQixZQUFXO0FBQ3RCLFdBQU8sS0FBSy9HLElBQUwsQ0FBVTRHLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IvQyxLQUEzQjtBQUNILEdBRko7QUFJQSxDQWxFTSxDLENBb0VQLDZCOzs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFFQTs7Ozs7QUFJTyxJQUFJbUQsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXLENBQ3JDLENBRE07QUFHUDs7Ozs7Ozs7O0FBUUFBLGFBQWEsQ0FBQ0MsUUFBZCxHQUF5QixVQUFTQyxJQUFULEVBQWVDLFdBQWYsRUFBNEJDLE1BQTVCLEVBQW9DO0FBQ3pELE1BQUdELFdBQVcsS0FBS3JLLFNBQWhCLElBQTZCcUssV0FBVyxLQUFLLElBQWhELEVBQXNEO0FBQ2xEQSxlQUFXLEdBQUcsNkNBQU0sQ0FBQ0UsR0FBUCxFQUFkO0FBQ0g7O0FBRUQsTUFBTUMsT0FBTyxHQUFHSCxXQUFXLENBQUNJLElBQVosQ0FBaUJMLElBQWpCLENBQWhCOztBQUVBLE1BQUdJLE9BQU8sR0FBRyxLQUFiLEVBQW9CO0FBQ2hCLFdBQU8sWUFBUDtBQUNIOztBQUVELE1BQUdBLE9BQU8sR0FBRyxPQUFiLEVBQXNCO0FBQ2xCO0FBQ0EsUUFBTUUsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osT0FBTyxHQUFHLEtBQXJCLENBQWI7QUFDQSxXQUFPLEtBQUtFLElBQUwsR0FBWSxVQUFuQjtBQUNIO0FBRUQ7Ozs7O0FBR0EsTUFBR04sSUFBSSxDQUFDUyxJQUFMLE9BQWdCUixXQUFXLENBQUNRLElBQVosRUFBaEIsSUFDQ1QsSUFBSSxDQUFDVSxLQUFMLE9BQWlCVCxXQUFXLENBQUNTLEtBQVosRUFEbEIsSUFFQ1YsSUFBSSxDQUFDVyxJQUFMLE9BQWdCVixXQUFXLENBQUNVLElBQVosRUFGcEIsRUFFd0M7QUFDcEMsUUFBSUMsSUFBSSxHQUFHWixJQUFJLENBQUNZLElBQUwsRUFBWDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxJQUFUOztBQUNBLFFBQUdELElBQUksS0FBSyxDQUFaLEVBQWU7QUFDWEEsVUFBSSxHQUFHLEVBQVA7QUFDSCxLQUZELE1BRU8sSUFBR0EsSUFBSSxLQUFLLEVBQVosRUFBZ0I7QUFDbkJDLFFBQUUsR0FBRyxJQUFMO0FBQ0gsS0FGTSxNQUVBLElBQUdELElBQUksR0FBRyxFQUFWLEVBQWM7QUFDakJDLFFBQUUsR0FBRyxJQUFMO0FBQ0FELFVBQUksSUFBSSxFQUFSO0FBQ0g7O0FBQ0QsUUFBSUUsTUFBTSxHQUFHZCxJQUFJLENBQUNjLE1BQUwsRUFBYjs7QUFDQSxRQUFHQSxNQUFNLEdBQUcsRUFBWixFQUFnQjtBQUNaQSxZQUFNLEdBQUcsTUFBTUEsTUFBZjtBQUNIOztBQUVELFdBQU8sY0FBY0YsSUFBZCxHQUFxQixHQUFyQixHQUEyQkUsTUFBM0IsR0FBb0NELEVBQTNDO0FBQ0g7O0FBRUQsTUFBR1gsTUFBTSxLQUFLdEssU0FBZCxFQUF5QjtBQUNyQnNLLFVBQU0sR0FBRyxvQkFBVDtBQUNIOztBQUVELFNBQU9GLElBQUksQ0FBQ0UsTUFBTCxDQUFZQSxNQUFaLENBQVA7QUFDSCxDQTlDRDtBQWdEQTs7Ozs7OztBQUtBSixhQUFhLENBQUNpQixZQUFkLEdBQTZCLFVBQVNmLElBQVQsRUFBZUUsTUFBZixFQUF1QjtBQUNoRCxNQUFJYyxDQUFDLEdBQUcsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZakIsSUFBWixDQUFSOztBQUNBLE1BQUdFLE1BQU0sS0FBS3RLLFNBQWQsRUFBeUI7QUFDckJzSyxVQUFNLEdBQUcsb0JBQVQ7QUFDSCxHQUZELE1BRU8sSUFBR0EsTUFBTSxLQUFLLE9BQWQsRUFBdUI7QUFDN0JBLFVBQU0sR0FBRyx5QkFBVDtBQUNBLEdBRk0sTUFFQSxJQUFHQSxNQUFNLEtBQUssTUFBZCxFQUFzQjtBQUM1QkEsVUFBTSxHQUFHLDBCQUFUO0FBQ0E7O0FBRUQsU0FBT2MsQ0FBQyxDQUFDZCxNQUFGLENBQVNBLE1BQVQsQ0FBUDtBQUNILENBWEQ7QUFhQTs7Ozs7Ozs7QUFNQUosYUFBYSxDQUFDb0IsWUFBZCxHQUE2QixVQUFTbEIsSUFBVCxFQUFlQyxXQUFmLEVBQTRCQyxNQUE1QixFQUFvQztBQUM3RCxNQUFJYyxDQUFDLEdBQUcsNkNBQU0sQ0FBQ0MsSUFBUCxDQUFZakIsSUFBWixDQUFSO0FBQ0EsTUFBSW1CLENBQUMsR0FBR2xCLFdBQVcsS0FBSyxJQUFoQixHQUF1Qiw2Q0FBTSxDQUFDZ0IsSUFBUCxDQUFZaEIsV0FBWixDQUF2QixHQUFrRCw2Q0FBTSxFQUFoRTtBQUVBLFNBQU8sS0FBS0YsUUFBTCxDQUFjaUIsQ0FBZCxFQUFpQkcsQ0FBakIsRUFBb0JqQixNQUFwQixDQUFQO0FBQ0gsQ0FMRCxDOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVVPLElBQUlrQixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFTckssT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDM0MsTUFBR0EsT0FBTyxLQUFLcEIsU0FBZixFQUEwQjtBQUN0Qm9CLFdBQU8sR0FBRyxJQUFJLDREQUFKLENBQWtCQSxPQUFsQixDQUFWO0FBQ0gsR0FGRCxNQUVPO0FBQ0hBLFdBQU8sR0FBRyxJQUFJLDREQUFKLENBQWtCWCxJQUFJLENBQUNDLEtBQUwsQ0FBV1MsT0FBTyxDQUFDUixXQUFuQixDQUFsQixDQUFWO0FBQ0g7O0FBRURRLFNBQU8sQ0FBQ2tJLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0FuSSxTQUFPLENBQUNLLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNBLE1BQU1nSyxPQUFPLEdBQUcsSUFBSSxrREFBSixDQUFZdEssT0FBWixFQUFxQjtBQUNsQ3VLLFVBQU0sRUFBRXRLLE9BQU8sQ0FBQ3NLLE1BRGtCO0FBRWxDQyxVQUFNLEVBQUV2SyxPQUFPLENBQUN1SyxNQUZrQjtBQUdsQ0MsWUFBUSxFQUFFeEssT0FBTyxDQUFDd0s7QUFIZ0IsR0FBckIsQ0FBaEI7QUFNQSxNQUFNQyxFQUFFLEdBQUd2TCxRQUFRLENBQUNxQixhQUFULENBQXVCLFVBQXZCLENBQVg7QUFDQSxPQUFLbUssUUFBTCxHQUFnQkQsRUFBaEI7QUFoQjJDO0FBQUE7QUFBQTs7QUFBQTtBQWlCM0MseUJBQWV6SyxPQUFPLENBQUMySyxPQUF2Qiw4SEFBZ0M7QUFBQSxVQUF4QkMsR0FBd0I7QUFDNUJILFFBQUUsQ0FBQ3hDLFNBQUgsQ0FBYUMsR0FBYixDQUFpQjBDLEdBQWpCO0FBQ0g7QUFuQjBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBcUIzQzdLLFNBQU8sQ0FBQ0ksU0FBUixHQUFvQixFQUFwQjtBQUNBSixTQUFPLENBQUNTLFdBQVIsQ0FBb0JpSyxFQUFwQjtBQUNBQSxJQUFFLENBQUM3SixLQUFILEdBQVdaLE9BQU8sQ0FBQ1ksS0FBbkI7O0FBQ0EsTUFBR1osT0FBTyxDQUFDd0QsSUFBUixLQUFpQixJQUFwQixFQUEwQjtBQUN0QmlILE1BQUUsQ0FBQ2pILElBQUgsR0FBVXhELE9BQU8sQ0FBQ3dELElBQWxCO0FBQ0g7O0FBRUQsTUFBR3hELE9BQU8sQ0FBQzRJLElBQVgsRUFBaUI7QUFDYjZCLE1BQUUsQ0FBQ3hDLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixNQUFqQjtBQUNIOztBQUVELE1BQUdsSSxPQUFPLENBQUM2SyxNQUFSLEtBQW1CLElBQXRCLEVBQTRCO0FBQ3hCOUssV0FBTyxDQUFDSyxLQUFSLENBQWN5SyxNQUFkLEdBQXVCN0ssT0FBTyxDQUFDNkssTUFBL0I7QUFDSDs7QUFFRCxNQUFHN0ssT0FBTyxDQUFDOEssU0FBUixLQUFzQixJQUF6QixFQUErQjtBQUMzQi9LLFdBQU8sQ0FBQ0ssS0FBUixDQUFjMEssU0FBZCxHQUEwQjlLLE9BQU8sQ0FBQzhLLFNBQWxDO0FBQ0g7O0FBRURMLElBQUUsQ0FBQ00sVUFBSCxHQUFnQi9LLE9BQU8sQ0FBQytLLFVBQXhCLENBeEMyQyxDQTBDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUc5TCxRQUFRLENBQUMrTCxxQkFBVCxDQUFnQyxZQUFoQyxDQUExQjtBQUNBLE1BQUlDLGVBQWUsR0FBR2hNLFFBQVEsQ0FBQytMLHFCQUFULENBQWdDLFFBQWhDLENBQXRCLENBL0MyQyxDQWlEM0M7O0FBQ0EsTUFBSUUsWUFBWSxHQUFHLEtBQW5COztBQUNBLE1BQUduTCxPQUFPLENBQUNvTCxHQUFSLElBQWVwTCxPQUFPLENBQUNxTCxVQUExQixFQUFzQztBQUNsQ1osTUFBRSxDQUFDeEosZ0JBQUgsQ0FBb0IsU0FBcEIsRUFBK0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ3RDLFVBQUdsQixPQUFPLENBQUNvTCxHQUFSLElBQWVsSyxLQUFLLENBQUNvSyxLQUFOLEtBQWdCLENBQWxDLEVBQXFDO0FBQUc7QUFDcENwSyxhQUFLLENBQUNDLGNBQU47O0FBRUEsWUFBRyxDQUFDRCxLQUFLLENBQUNxSyxRQUFWLEVBQW9CO0FBQ2hCQyxvQkFBVTtBQUNWTCxzQkFBWSxHQUFHLElBQWY7QUFDSCxTQUhELE1BR087QUFDSE0sZUFBSztBQUNMTixzQkFBWSxHQUFHLEtBQWY7QUFDSDs7QUFFRCxlQUFPLEtBQVA7QUFDSDs7QUFFRCxVQUFHbkwsT0FBTyxDQUFDcUwsVUFBWCxFQUF1QjtBQUNuQixZQUFHbkssS0FBSyxDQUFDb0ssS0FBTixJQUFlLEVBQWxCLEVBQXNCO0FBQU07QUFDeEJwSyxlQUFLLENBQUNDLGNBQU47QUFDQWdLLHNCQUFZLEdBQUdPLGdCQUFnQixFQUEvQjtBQUNBLGlCQUFPLEtBQVA7QUFDSCxTQUpELE1BSU8sSUFBR1AsWUFBWSxJQUFJakssS0FBSyxDQUFDb0ssS0FBTixJQUFlLENBQWxDLEVBQXFDO0FBQ3hDO0FBQ0EsY0FBR0ssTUFBTSxFQUFULEVBQWE7QUFDVHpLLGlCQUFLLENBQUNDLGNBQU47QUFDQSxtQkFBTyxLQUFQO0FBQ0g7QUFDSixTQU5NLE1BTUE7QUFDSGdLLHNCQUFZLEdBQUcsS0FBZjtBQUNIO0FBQ0o7O0FBR0QsYUFBTyxJQUFQO0FBQ0gsS0FqQ0Q7QUFrQ0g7QUFFRDs7Ozs7O0FBSUFWLElBQUUsQ0FBQ3hKLGdCQUFILENBQW9CLFFBQXBCLEVBQThCLFVBQUNDLEtBQUQsRUFBVztBQUNyQyxRQUFNMEssR0FBRyxHQUFHbkIsRUFBRSxDQUFDb0IsU0FBZjtBQUNBLFFBQU1DLElBQUksR0FBR3JCLEVBQUUsQ0FBQ3NCLFVBQWhCO0FBQ0F0QixNQUFFLENBQUNySyxLQUFILENBQVM0TCxrQkFBVCxHQUE4QixDQUFDRixJQUFELEdBQVEsS0FBUixHQUFnQixDQUFDRixHQUFqQixHQUF1QixJQUFyRDtBQUNILEdBSkQ7QUFNQTs7OztBQUdBLFdBQVNKLFVBQVQsR0FBc0I7QUFDbEIsUUFBTVMsSUFBSSxHQUFHeEIsRUFBYjs7QUFFQSxRQUFJd0IsSUFBSSxDQUFDQyxjQUFMLElBQXVCRCxJQUFJLENBQUNDLGNBQUwsSUFBdUIsR0FBbEQsRUFBdUQ7QUFDbkQ7QUFDQSxVQUFJQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0MsY0FBcEI7QUFDQSxVQUFJRSxNQUFNLEdBQUdILElBQUksQ0FBQ0ksWUFBbEI7O0FBQ0EsVUFBR0YsUUFBUSxJQUFJQyxNQUFmLEVBQXVCO0FBQ25CO0FBQ0EsWUFBSXRILE1BQU0sR0FBR21ILElBQUksQ0FBQ3JMLEtBQUwsQ0FBVzBMLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JILFFBQXhCLENBQWI7QUFDQSxZQUFJSSxLQUFLLEdBQUd6SCxNQUFNLENBQUN5SCxLQUFQLENBQWEsSUFBYixDQUFaO0FBQ0EsWUFBSUMsUUFBUSxHQUFHRCxLQUFLLENBQUNBLEtBQUssQ0FBQ3JNLE1BQU4sR0FBYSxDQUFkLENBQXBCO0FBQ0EsWUFBSXVNLE9BQU8sR0FBR0QsUUFBUSxDQUFDdE0sTUFBdkI7QUFDQSxZQUFJd00sS0FBSyxHQUFHMU0sT0FBTyxDQUFDMk0sT0FBUixHQUFtQkYsT0FBTyxHQUFHek0sT0FBTyxDQUFDMk0sT0FBakQ7QUFDQSxZQUFJQyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFJLElBQUloTCxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUM4SyxLQUFmLEVBQXNCOUssQ0FBQyxFQUF2QixFQUEyQjtBQUN2QmdMLGdCQUFNLElBQUksR0FBVjtBQUNIOztBQUVEQyxrQkFBVSxDQUFDWixJQUFELEVBQU9XLE1BQVAsQ0FBVjtBQUNBWCxZQUFJLENBQUNDLGNBQUwsR0FBc0JDLFFBQVEsR0FBR08sS0FBakM7QUFDQVQsWUFBSSxDQUFDSSxZQUFMLEdBQW9CRixRQUFRLEdBQUdPLEtBQS9CO0FBQ0gsT0FmRCxNQWVPO0FBQ0g7QUFDQSxZQUFJSSxHQUFHLEdBQUdiLElBQUksQ0FBQ3JMLEtBQWY7QUFDQSxZQUFJMkwsS0FBSyxHQUFHTyxHQUFHLENBQUNQLEtBQUosQ0FBVSxJQUFWLENBQVo7QUFDQSxZQUFJUSxPQUFPLEdBQUcsQ0FBZCxDQUpHLENBTUg7O0FBQ0EsYUFBSSxJQUFJQyxJQUFJLEdBQUMsQ0FBYixFQUFnQkEsSUFBSSxHQUFHVCxLQUFLLENBQUNyTSxNQUE3QixFQUFxQzhNLElBQUksRUFBekMsRUFBNkM7QUFDekMsY0FBSUMsV0FBVyxHQUFHRixPQUFPLEdBQUdSLEtBQUssQ0FBQ1MsSUFBRCxDQUFMLENBQVk5TSxNQUF0QixHQUErQixDQUFqRDs7QUFDQSxjQUFHaU0sUUFBUSxJQUFJWSxPQUFaLElBQXVCWixRQUFRLEdBQUdjLFdBQXJDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBQ0RGLGlCQUFPLEdBQUdFLFdBQVY7QUFDSDs7QUFFREwsY0FBTSxHQUFHLEVBQVQ7O0FBQ0EsYUFBSSxJQUFJaEwsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDNUIsT0FBTyxDQUFDMk0sT0FBdkIsRUFBZ0MvSyxDQUFDLEVBQWpDLEVBQXFDO0FBQ2pDZ0wsZ0JBQU0sSUFBSSxHQUFWO0FBQ0g7O0FBRUQsWUFBSU0sVUFBVSxHQUFHLENBQWpCLENBcEJHLENBc0JIOztBQUNBLGVBQU9GLElBQUksR0FBR1QsS0FBSyxDQUFDck0sTUFBcEIsRUFBNkI4TSxJQUFJLEVBQWpDLEVBQXFDO0FBQ2pDZixjQUFJLENBQUNDLGNBQUwsR0FBc0JhLE9BQU8sR0FBR0csVUFBaEM7QUFDQWpCLGNBQUksQ0FBQ0ksWUFBTCxHQUFvQlUsT0FBTyxHQUFHRyxVQUE5QjtBQUVBTCxvQkFBVSxDQUFDWixJQUFELEVBQU9XLE1BQVAsQ0FBVjtBQUNBTSxvQkFBVSxJQUFJbE4sT0FBTyxDQUFDMk0sT0FBdEI7QUFFQU0scUJBQVcsR0FBR0YsT0FBTyxHQUFHUixLQUFLLENBQUNTLElBQUQsQ0FBTCxDQUFZOU0sTUFBdEIsR0FBK0IsQ0FBN0M7O0FBQ0EsY0FBR2tNLE1BQU0sSUFBSWEsV0FBYixFQUEwQjtBQUN0QjtBQUNBO0FBQ0g7O0FBRURGLGlCQUFPLEdBQUdFLFdBQVY7QUFDSDs7QUFFRGhCLFlBQUksQ0FBQ0MsY0FBTCxHQUFzQkMsUUFBUSxHQUFHbk0sT0FBTyxDQUFDMk0sT0FBekM7QUFDQVYsWUFBSSxDQUFDSSxZQUFMLEdBQW9CRCxNQUFNLEdBQUdjLFVBQTdCO0FBQ0g7QUFFSixLQTlERCxNQThETztBQUNIakIsVUFBSSxDQUFDckwsS0FBTCxJQUFjLEdBQWQ7QUFDQXFMLFVBQUksQ0FBQ2tCLEtBQUw7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBR0EsV0FBUzFCLEtBQVQsR0FBaUI7QUFDYjtBQUNBLFFBQU1RLElBQUksR0FBR3hCLEVBQWI7QUFFQSxRQUFJMEIsUUFBUSxHQUFHRixJQUFJLENBQUNDLGNBQXBCO0FBQ0EsUUFBSUUsTUFBTSxHQUFHSCxJQUFJLENBQUNJLFlBQWxCLENBTGEsQ0FPYjs7QUFDQSxRQUFJUyxHQUFHLEdBQUdiLElBQUksQ0FBQ3JMLEtBQWY7QUFDQSxRQUFJMkwsS0FBSyxHQUFHTyxHQUFHLENBQUNQLEtBQUosQ0FBVSxJQUFWLENBQVo7QUFDQSxRQUFJUSxPQUFPLEdBQUcsQ0FBZCxDQVZhLENBWWI7O0FBQ0EsU0FBSSxJQUFJQyxJQUFJLEdBQUMsQ0FBYixFQUFnQkEsSUFBSSxHQUFHVCxLQUFLLENBQUNyTSxNQUE3QixFQUFxQzhNLElBQUksRUFBekMsRUFBNkM7QUFDekMsVUFBSUMsV0FBVyxHQUFHRixPQUFPLEdBQUdSLEtBQUssQ0FBQ1MsSUFBRCxDQUFMLENBQVk5TSxNQUF0QixHQUErQixDQUFqRDs7QUFDQSxVQUFHaU0sUUFBUSxJQUFJWSxPQUFaLElBQXVCWixRQUFRLEdBQUdjLFdBQXJDLEVBQWtEO0FBQzlDO0FBQ0g7O0FBQ0RGLGFBQU8sR0FBR0UsV0FBVjtBQUNIOztBQUVELFFBQUlHLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxJQUFoQixDQXRCYSxDQXdCYjs7QUFDQSxXQUFPTCxJQUFJLEdBQUdULEtBQUssQ0FBQ3JNLE1BQXBCLEVBQTZCOE0sSUFBSSxFQUFqQyxFQUFxQztBQUNqQyxXQUFJLElBQUlKLE1BQU0sR0FBQyxDQUFmLEVBQW1CQSxNQUFNLEdBQUc1TSxPQUFPLENBQUMyTSxPQUFqQixJQUE0QkMsTUFBTSxHQUFDTCxLQUFLLENBQUNTLElBQUQsQ0FBTCxDQUFZOU0sTUFBbEUsRUFBMEUwTSxNQUFNLEVBQWhGLEVBQW9GO0FBQ2hGLFlBQUdMLEtBQUssQ0FBQ1MsSUFBRCxDQUFMLENBQVlKLE1BQVosS0FBdUIsR0FBMUIsRUFBK0I7QUFDM0I7QUFDSDtBQUNKOztBQUVELFVBQUdBLE1BQU0sR0FBRyxDQUFaLEVBQWU7QUFDWFgsWUFBSSxDQUFDQyxjQUFMLEdBQXNCYSxPQUFPLEdBQUdLLFNBQWhDO0FBQ0FuQixZQUFJLENBQUNJLFlBQUwsR0FBb0JVLE9BQU8sR0FBR0ssU0FBVixHQUFzQlIsTUFBMUM7QUFDQVUsa0JBQVUsQ0FBQ3JCLElBQUQsQ0FBVjtBQUNBbUIsaUJBQVMsSUFBSVIsTUFBYjtBQUNIOztBQUVELFVBQUdTLFNBQUgsRUFBYztBQUNWbEIsZ0JBQVEsSUFBSVMsTUFBWjs7QUFDQSxZQUFHVCxRQUFRLEdBQUdZLE9BQWQsRUFBdUI7QUFDbkJaLGtCQUFRLEdBQUdZLE9BQVg7QUFDSDs7QUFDRE0saUJBQVMsR0FBRyxLQUFaO0FBQ0g7O0FBRURKLGlCQUFXLEdBQUdGLE9BQU8sR0FBR1IsS0FBSyxDQUFDUyxJQUFELENBQUwsQ0FBWTlNLE1BQXRCLEdBQStCLENBQTdDOztBQUNBLFVBQUdrTSxNQUFNLElBQUlhLFdBQWIsRUFBMEI7QUFDdEI7QUFDQTtBQUNIOztBQUVERixhQUFPLEdBQUdFLFdBQVY7QUFDSDs7QUFFRGhCLFFBQUksQ0FBQ0MsY0FBTCxHQUFzQkMsUUFBdEI7QUFDQUYsUUFBSSxDQUFDSSxZQUFMLEdBQW9CRCxNQUFNLEdBQUdnQixTQUE3QjtBQUVIO0FBRUQ7Ozs7OztBQUlBLFdBQVMxQixnQkFBVCxHQUE0QjtBQUN4QjtBQUNBLFFBQU1PLElBQUksR0FBR3hCLEVBQWIsQ0FGd0IsQ0FJeEI7O0FBQ0EsUUFBSThDLEtBQUssR0FBRyxDQUFaOztBQUVBLFFBQUl0QixJQUFJLENBQUNDLGNBQUwsSUFBdUJELElBQUksQ0FBQ0MsY0FBTCxJQUF1QixHQUFsRCxFQUF1RDtBQUNuRCxVQUFJQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0MsY0FBcEI7QUFDQSxVQUFJRSxNQUFNLEdBQUdILElBQUksQ0FBQ0ksWUFBbEI7QUFDQSxVQUFJUixTQUFTLEdBQUdJLElBQUksQ0FBQ0osU0FBckI7QUFDQSxVQUFJL0csTUFBTSxHQUFHbUgsSUFBSSxDQUFDckwsS0FBTCxDQUFXMEwsU0FBWCxDQUFxQixDQUFyQixFQUF3QkgsUUFBeEIsQ0FBYjtBQUNBLFVBQUlwSCxLQUFLLEdBQUdrSCxJQUFJLENBQUNyTCxLQUFMLENBQVcwTCxTQUFYLENBQXFCRixNQUFyQixFQUE0QkgsSUFBSSxDQUFDckwsS0FBTCxDQUFXVixNQUF2QyxDQUFaO0FBQ0EsVUFBSXFNLEtBQUssR0FBR3pILE1BQU0sQ0FBQ3lILEtBQVAsQ0FBYSxJQUFiLENBQVosQ0FObUQsQ0FRbkQ7O0FBQ0EsVUFBSWlCLElBQUksR0FBR2pCLEtBQUssQ0FBQ0EsS0FBSyxDQUFDck0sTUFBTixHQUFhLENBQWQsQ0FBaEI7O0FBRUEsV0FBSSxJQUFJMEIsQ0FBQyxHQUFDLENBQVYsRUFBYUEsQ0FBQyxHQUFDNEwsSUFBSSxDQUFDdE4sTUFBcEIsRUFBNEIwQixDQUFDLEVBQTdCLEVBQWlDO0FBQzdCLFlBQUc0TCxJQUFJLENBQUNDLE1BQUwsQ0FBWTdMLENBQVosS0FBa0IsR0FBckIsRUFBMEI7QUFDdEI7QUFDSDs7QUFFRDJMLGFBQUs7QUFDUixPQWpCa0QsQ0FtQm5EOzs7QUFDQSxVQUFJRyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxXQUFJOUwsQ0FBQyxHQUFDLENBQU4sRUFBU0EsQ0FBQyxHQUFDMkwsS0FBWCxFQUFrQjNMLENBQUMsRUFBbkIsRUFBdUI7QUFDbkI4TCxlQUFPLElBQUksR0FBWDtBQUNIOztBQUVEYixnQkFBVSxDQUFDWixJQUFELEVBQU95QixPQUFQLENBQVY7QUFDQXpCLFVBQUksQ0FBQ0MsY0FBTCxHQUFzQkMsUUFBUSxHQUFHdUIsT0FBTyxDQUFDeE4sTUFBekM7QUFDQStMLFVBQUksQ0FBQ0ksWUFBTCxHQUFvQkYsUUFBUSxHQUFHdUIsT0FBTyxDQUFDeE4sTUFBdkM7QUFDSCxLQTVCRCxNQTRCTztBQUNIK0wsVUFBSSxDQUFDckwsS0FBTCxJQUFjLElBQWQ7QUFDQXFMLFVBQUksQ0FBQ2tCLEtBQUw7QUFDSDs7QUFFRCxXQUFPSSxLQUFLLEdBQUcsQ0FBZjtBQUNIO0FBR0Q7Ozs7OztBQUlBLFdBQVM1QixNQUFULEdBQWtCO0FBQ2Q7QUFDQSxRQUFNTSxJQUFJLEdBQUd4QixFQUFiOztBQUdBLFFBQUl3QixJQUFJLENBQUNDLGNBQUwsSUFBdUJELElBQUksQ0FBQ0MsY0FBTCxJQUF1QixHQUFsRCxFQUF1RDtBQUNuRCxVQUFJQyxRQUFRLEdBQUdGLElBQUksQ0FBQ0MsY0FBcEI7QUFDQSxVQUFJRSxNQUFNLEdBQUdILElBQUksQ0FBQ0ksWUFBbEI7QUFDQSxVQUFJUixTQUFTLEdBQUdJLElBQUksQ0FBQ0osU0FBckI7QUFDQSxVQUFJL0csTUFBTSxHQUFHbUgsSUFBSSxDQUFDckwsS0FBTCxDQUFXMEwsU0FBWCxDQUFxQixDQUFyQixFQUF3QkgsUUFBeEIsQ0FBYjtBQUNBLFVBQUl3QixRQUFRLEdBQUcsRUFBZjs7QUFDQSxXQUFJLElBQUkvTCxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUM1QixPQUFPLENBQUMyTSxPQUF2QixFQUFnQy9LLENBQUMsRUFBakMsRUFBcUM7QUFDakMrTCxnQkFBUSxJQUFJLEdBQVo7QUFDSDs7QUFDRCxVQUFHN0ksTUFBTSxDQUFDNUUsTUFBUCxJQUFpQkYsT0FBTyxDQUFDMk0sT0FBekIsSUFDQzdILE1BQU0sQ0FBQzhJLE1BQVAsQ0FBYzlJLE1BQU0sQ0FBQzVFLE1BQVAsR0FBY0YsT0FBTyxDQUFDMk0sT0FBcEMsRUFBNkMzTSxPQUFPLENBQUMyTSxPQUFyRCxNQUFrRWdCLFFBRHRFLEVBQ2dGO0FBQzVFMUIsWUFBSSxDQUFDQyxjQUFMLEdBQXNCcEgsTUFBTSxDQUFDNUUsTUFBUCxHQUFnQkYsT0FBTyxDQUFDMk0sT0FBOUM7QUFDQVYsWUFBSSxDQUFDSSxZQUFMLEdBQW9CdkgsTUFBTSxDQUFDNUUsTUFBUCxHQUFnQixDQUFwQztBQUNBb04sa0JBQVUsQ0FBQ3JCLElBQUQsQ0FBVjtBQUNBQSxZQUFJLENBQUNDLGNBQUwsR0FBc0JwSCxNQUFNLENBQUM1RSxNQUFQLEdBQWdCRixPQUFPLENBQUMyTSxPQUE5QztBQUNBVixZQUFJLENBQUNJLFlBQUwsR0FBb0JKLElBQUksQ0FBQ0MsY0FBekI7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUVKOztBQUVELFdBQU8sS0FBUDtBQUNIO0FBR0Q7Ozs7Ozs7Ozs7QUFRQSxXQUFTVyxVQUFULENBQW9CbkMsUUFBcEIsRUFBOEJtRCxJQUE5QixFQUFvQztBQUNoQyxRQUFHN0MsbUJBQUgsRUFBd0I7QUFDcEIsVUFBRyxDQUFDOUwsUUFBUSxDQUFDNE8sV0FBVCxDQUFxQixZQUFyQixFQUFtQyxLQUFuQyxFQUEwQ0QsSUFBMUMsQ0FBSixFQUFxRDtBQUNqRDdDLDJCQUFtQixHQUFHLEtBQXRCO0FBQ0E2QixrQkFBVSxDQUFDbkMsUUFBRCxFQUFXbUQsSUFBWCxDQUFWO0FBQ0g7QUFDSixLQUxELE1BS087QUFDSDtBQUNBLFVBQU1FLEdBQUcsR0FBR3JELFFBQVEsQ0FBQ3dCLGNBQXJCO0FBQ0EsVUFBTUwsU0FBUyxHQUFHbkIsUUFBUSxDQUFDbUIsU0FBM0I7QUFDQSxVQUFNakwsS0FBSyxHQUFHOEosUUFBUSxDQUFDOUosS0FBdkI7QUFDQThKLGNBQVEsQ0FBQzlKLEtBQVQsR0FBaUJBLEtBQUssQ0FBQzBMLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJ5QixHQUFuQixJQUEwQkYsSUFBMUIsR0FBaUNqTixLQUFLLENBQUMwTCxTQUFOLENBQWdCeUIsR0FBaEIsQ0FBbEQ7QUFDQXJELGNBQVEsQ0FBQ3lDLEtBQVQ7QUFDQXpDLGNBQVEsQ0FBQ21CLFNBQVQsR0FBcUJBLFNBQXJCO0FBQ0g7QUFDSjtBQUVEOzs7Ozs7Ozs7QUFPQSxXQUFTeUIsVUFBVCxDQUFvQjVDLFFBQXBCLEVBQThCO0FBQzFCLFFBQUdRLGVBQUgsRUFBb0I7QUFDaEIsVUFBRyxDQUFDaE0sUUFBUSxDQUFDNE8sV0FBVCxDQUFxQixRQUFyQixDQUFKLEVBQW9DO0FBQ2hDNUMsdUJBQWUsR0FBRyxLQUFsQjtBQUNBb0Msa0JBQVUsQ0FBQzVDLFFBQUQsQ0FBVjtBQUNIO0FBQ0osS0FMRCxNQUtPO0FBQ0g7QUFDQTtBQUNBLFVBQU15QixRQUFRLEdBQUd6QixRQUFRLENBQUN3QixjQUExQjtBQUNBLFVBQU1FLE1BQU0sR0FBRzFCLFFBQVEsQ0FBQzJCLFlBQXhCO0FBQ0EsVUFBTVIsU0FBUyxHQUFHbkIsUUFBUSxDQUFDbUIsU0FBM0I7QUFDQSxVQUFNakwsS0FBSyxHQUFHOEosUUFBUSxDQUFDOUosS0FBdkI7QUFDQThKLGNBQVEsQ0FBQzlKLEtBQVQsR0FBaUJBLEtBQUssQ0FBQzBMLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJILFFBQW5CLElBQStCdkwsS0FBSyxDQUFDMEwsU0FBTixDQUFnQkYsTUFBaEIsQ0FBaEQ7QUFDQTFCLGNBQVEsQ0FBQ3lDLEtBQVQ7QUFDQXpDLGNBQVEsQ0FBQ21CLFNBQVQsR0FBcUJBLFNBQXJCO0FBQ0g7QUFDSjtBQUNKLENBaFhNLEM7Ozs7Ozs7Ozs7OztBQ2xCUDtBQUFBO0FBQUE7Ozs7QUFJQTs7Ozs7Ozs7QUFRTyxJQUFJbUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFTaE8sT0FBVCxFQUFrQjtBQUN6Q0EsU0FBTyxHQUFHQSxPQUFPLEdBQUdBLE9BQUgsR0FBYSxFQUE5QixDQUR5QyxDQUd6Qzs7QUFDQSxPQUFLc0ssTUFBTCxHQUFjLFVBQWQsQ0FKeUMsQ0FNekM7O0FBQ0EsT0FBS0MsTUFBTCxHQUFjLEtBQWQsQ0FQeUMsQ0FTekM7O0FBQ0EsT0FBS0MsUUFBTCxHQUFnQixFQUFoQixDQVZ5QyxDQVl6Qzs7QUFDQSxPQUFLNUIsSUFBTCxHQUFZLEtBQVosQ0FieUMsQ0FlekM7O0FBQ0EsT0FBS2hJLEtBQUwsR0FBYSxFQUFiLENBaEJ5QyxDQWtCekM7O0FBQ0EsT0FBS2lLLE1BQUwsR0FBYyxJQUFkLENBbkJ5QyxDQXFCekM7O0FBQ0EsT0FBS3JILElBQUwsR0FBWSxJQUFaLENBdEJ5QyxDQXdCekM7O0FBQ0EsT0FBSzRILEdBQUwsR0FBVyxLQUFYLENBekJ5QyxDQTJCekM7O0FBQ0EsT0FBS0MsVUFBTCxHQUFrQixLQUFsQixDQTVCeUMsQ0E4QnpDOztBQUNBLE9BQUtQLFNBQUwsR0FBaUIsSUFBakIsQ0EvQnlDLENBaUN6Qzs7QUFDQSxPQUFLQyxVQUFMLEdBQWtCLEtBQWxCLENBbEN5QyxDQW9DekM7O0FBQ0EsT0FBSzRCLE9BQUwsR0FBZSxDQUFmLENBckN5QyxDQXVDekM7O0FBQ0EsT0FBS2hDLE9BQUwsR0FBZSxFQUFmOztBQUVBLE9BQUksSUFBSS9HLFFBQVIsSUFBb0I1RCxPQUFwQixFQUE2QjtBQUN6QixRQUFHQSxPQUFPLENBQUNpTyxjQUFSLENBQXVCckssUUFBdkIsQ0FBSCxFQUFxQztBQUNqQyxVQUFHLENBQUMsS0FBS3FLLGNBQUwsQ0FBb0JySyxRQUFwQixDQUFKLEVBQW1DO0FBQy9CLGNBQU0sSUFBSXNLLEtBQUosQ0FBVSxvQkFBb0J0SyxRQUE5QixDQUFOO0FBQ0g7O0FBQ0QsV0FBS0EsUUFBTCxJQUFpQjVELE9BQU8sQ0FBQzRELFFBQUQsQ0FBeEI7QUFDSDtBQUNKO0FBR0osQ0FwRE0sQzs7Ozs7Ozs7Ozs7O0FDWlA7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGlIQUEyQyxFQUFFO0FBQUE7QUFDbkU7QUFDQSxnQkFBZ0IsK0VBQU07QUFDdEIseUJBQXlCLHdGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQThMLENBQWdCLDhPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsbVZBQTBMO0FBQ2hOLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsbUlBQXNFO0FBQ3hGLCtDQUErQztBQUMvQztBQUNBLEdBQUcsSUFBVTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsbVZBQTBMO0FBQy9NLHNCQUFzQixtQkFBTyxDQUFDLG1WQUEwTDtBQUN4Tix1REFBdUQsUUFBUztBQUNoRTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLGtIQUEyQyxFQUFFO0FBQUE7QUFDbkU7QUFDQSxnQkFBZ0IsK0VBQU07QUFDdEIseUJBQXlCLHdGQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQThMLENBQWdCLDhPQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUF5RztBQUM3SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQix3SEFBOEMsRUFBRTtBQUFBO0FBQ3RFO0FBQ0EsZ0JBQWdCLGtGQUFNO0FBQ3RCLHlCQUF5QiwyRkFBZTtBQUN4QyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNcEUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBVyxDQUNqQyxDQURNO0FBR1A7Ozs7Ozs7Ozs7O0FBVUFBLE9BQU8sQ0FBQ3hCLE1BQVIsR0FBaUIsVUFBU21RLEdBQVQsRUFBY3hJLEtBQWQsRUFBcUJSLFNBQXJCLEVBQWdDaUosR0FBaEMsRUFBcUM7QUFDbEQsTUFBTXJPLE9BQU8sR0FBR2IsUUFBUSxDQUFDbVAsYUFBVCxDQUF1QkYsR0FBdkIsQ0FBaEI7O0FBQ0EsTUFBR3BPLE9BQU8sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBRUQsTUFBSXVPLE1BQU0sR0FBR0YsR0FBRyxLQUFLeFAsU0FBUixHQUFvQixvQ0FBcEIsR0FBMkQsRUFBeEU7QUFDQSxNQUFJb0csUUFBUSxnREFBdUNzSixNQUF2Qyw0RkFBWjtBQUlBLE1BQU1ySixNQUFNLEdBQUdoSCxJQUFJLENBQUM0RyxJQUFMLENBQVVLLE1BQVYsQ0FBaUJDLFNBQWpCLEVBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUduSCxJQUFJLENBQUM0RyxJQUFMLENBQVVRLE1BQVYsQ0FBaUJGLFNBQWpCLEVBQWY7QUFFQSxNQUFNckQsSUFBSSxHQUFHekMsSUFBSSxDQUFDQyxLQUFMLENBQVdTLE9BQU8sQ0FBQ1IsV0FBbkIsQ0FBYjtBQUVBLE1BQU1aLEtBQUssR0FBR1YsSUFBSSxDQUFDVSxLQUFuQjtBQUVBLE1BQU1nSSxVQUFVLEdBQUc7QUFDWCxtQkFBZTFCLE1BREo7QUFFWCxtQkFBZUcsTUFGSjtBQUdYLGdCQUFZRDtBQUhELEdBQW5COztBQUtBLE1BQUdpSixHQUFHLEtBQUt4UCxTQUFYLEVBQXNCO0FBQ2xCK0gsY0FBVSxDQUFDLFVBQUQsQ0FBVixHQUF5QnlILEdBQXpCO0FBQ0g7O0FBRUQsTUFBSWpRLElBQUksR0FBR0YsSUFBSSxDQUFDQSxJQUFoQjtBQUVBLE1BQUlBLElBQUksQ0FBQzJHLEdBQVQsQ0FBYTtBQUNUYyxNQUFFLEVBQUUzRixPQURLO0FBRVQ1QixRQUFJLEVBQUpBLElBRlM7QUFHVFEsU0FBSyxFQUFMQSxLQUhTO0FBSVRGLFFBQUksRUFBRTtBQUNGa0gsV0FBSyxFQUFFQSxLQURMO0FBRUY3RCxVQUFJLEVBQUVBLElBRko7QUFHRnlNLFVBQUksRUFBRTtBQUhKLEtBSkc7QUFTVHZKLFlBQVEsRUFBRUEsUUFURDtBQVVUMkIsY0FBVSxFQUFFQSxVQVZIO0FBV1Q2SCxXQUFPLEVBQUU7QUFDTDs7Ozs7OztBQU9BQyxjQUFRLEVBQUUsa0JBQVM5SSxLQUFULEVBQWdCO0FBQ3RCLGFBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBekcsZ0JBQVEsQ0FBQ3lHLEtBQVQsR0FBaUIxSCxJQUFJLENBQUM0RyxJQUFMLENBQVU2SixRQUFWLEdBQXFCLEdBQXJCLEdBQTJCL0ksS0FBNUM7QUFDSCxPQVhJO0FBWUxnSixhQUFPLEVBQUUsaUJBQVNKLElBQVQsRUFBZTtBQUNwQixhQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSDtBQWRJO0FBWEEsR0FBYjtBQTRCSCxDQXpERCxDOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFDK0Q7QUFDTDs7O0FBRzFEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxJQUFVO0FBQ2QsWUFBWSxtQkFBTyxDQUFDLHdHQUF5RztBQUM3SCxjQUFjLG1CQUFPLENBQUMsK0NBQUs7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQSx3Q0FBcU0sQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBek47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLElBQVU7QUFDZCxZQUFZLG1CQUFPLENBQUMsd0dBQXlHO0FBQzdILGNBQWMsbUJBQU8sQ0FBQywrQ0FBSztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLHVKQUE2RCxFQUFFO0FBQUE7QUFDckY7QUFDQSxnQkFBZ0IsaUdBQU07QUFDdEIseUJBQXlCLDBHQUFlO0FBQ3hDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUE7QUFBQTtBQUFvTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4TjtBQUFBO0FBQUE7QUFBQTtBQUEyYyxDQUFnQixnY0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBS0E7QUFDQTtBQUVBLElBQU1LLEtBQUssR0FBRyxHQUFkO0FBRU8sSUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXLENBQ3hDLENBRE07QUFHUDs7Ozs7Ozs7Ozs7QUFVQUEsZ0JBQWdCLENBQUM3USxNQUFqQixHQUEwQixVQUFTOEgsR0FBVCxFQUFjZ0osSUFBZCxFQUFvQjtBQUMxQyxTQUFPO0FBQ0gzSCxjQUFVLEVBQUUsSUFEVDtBQUVIQyxTQUFLLEVBQUU7QUFDSDJILFdBQUssRUFBRSxFQURKO0FBRUhDLGFBQU8sRUFBRSxJQUFJLDJEQUFKLEVBRk47QUFFeUI7QUFDNUJ2SSxXQUFLLEVBQUU7QUFISixLQUZKO0FBT0hjLGFBQVMsRUFBRTtBQUNQVyxTQURPLGVBQ0hkLEtBREcsRUFDSXRJLElBREosRUFDVTtBQUNic0ksYUFBSyxDQUFDMkgsS0FBTixDQUFZN0ssSUFBWixDQUFpQnBGLElBQWpCO0FBQ0gsT0FITTtBQUlQbVEsVUFKTyxnQkFJRjdILEtBSkUsRUFJS3hHLEtBSkwsRUFJWTtBQUNmd0csYUFBSyxDQUFDNEgsT0FBTixDQUFjQyxJQUFkLEdBQXFCck8sS0FBckI7QUFDSCxPQU5NO0FBT1BzTyxnQkFQTyxzQkFPSTlILEtBUEosRUFPV3hHLEtBUFgsRUFPa0I7QUFDckJ3RyxhQUFLLENBQUM0SCxPQUFOLENBQWN2UCxLQUFkLENBQW9CbUIsS0FBcEI7QUFDSCxPQVRNO0FBVVB1TyxlQVZPLHFCQVVHL0gsS0FWSCxFQVVVeEcsS0FWVixFQVVpQjtBQUNwQndHLGFBQUssQ0FBQzRILE9BQU4sQ0FBY0ksSUFBZCxDQUFtQnhPLEtBQW5CO0FBQ0gsT0FaTTtBQWFQeU8sV0FiTyxpQkFhRGpJLEtBYkMsRUFhTXhHLEtBYk4sRUFhYTtBQUNoQndHLGFBQUssQ0FBQzRILE9BQU4sQ0FBY0ssS0FBZDtBQUNBakksYUFBSyxDQUFDMkgsS0FBTixHQUFjLEVBQWQ7QUFDSCxPQWhCTTtBQWlCUHRJLFdBakJPLGlCQWlCRFcsS0FqQkMsRUFpQk14RyxLQWpCTixFQWlCWTtBQUNmd0csYUFBSyxDQUFDWCxLQUFOLEdBQWM3RixLQUFkO0FBQ0gsT0FuQk07QUFvQlAwTyxZQXBCTyxrQkFvQkFsSSxLQXBCQSxFQW9CT3RJLElBcEJQLEVBb0JhO0FBQ2hCO0FBQ0EsWUFBRyxDQUFDc0ksS0FBSyxDQUFDNEgsT0FBTixDQUFjTyxPQUFsQixFQUEyQjtBQUN2QjtBQUNILFNBSmUsQ0FNaEI7OztBQUNBLFlBQUduSSxLQUFLLENBQUMySCxLQUFOLENBQVk3TyxNQUFaLEtBQXVCLENBQTFCLEVBQTZCO0FBQ3pCa0gsZUFBSyxDQUFDNEgsT0FBTixDQUFjSyxLQUFkO0FBQ0FqSSxlQUFLLENBQUMySCxLQUFOLEdBQWMsRUFBZDtBQUNBO0FBQ0gsU0FYZSxDQWFoQjs7O0FBQ0EsWUFBSW5OLENBQUMsR0FBQyxDQUFOOztBQUNBLGVBQU9BLENBQUMsR0FBQ3dGLEtBQUssQ0FBQzJILEtBQU4sQ0FBWTdPLE1BQXJCLEVBQTZCMEIsQ0FBQyxFQUE5QixFQUFrQztBQUM5QixjQUFHa04sSUFBSSxDQUFDaFEsSUFBRCxDQUFKLEtBQWVnUSxJQUFJLENBQUMxSCxLQUFLLENBQUMySCxLQUFOLENBQVluTixDQUFaLENBQUQsQ0FBdEIsRUFBd0M7QUFDcEM7QUFDQXdGLGlCQUFLLENBQUMySCxLQUFOLENBQVluTixDQUFaLElBQWlCOUMsSUFBakI7O0FBRUEsZ0JBQUdzSSxLQUFLLENBQUM0SCxPQUFOLENBQWNDLElBQWpCLEVBQXVCO0FBQ25CO0FBQ0E7QUFDQSxrQkFBRyxtREFBSSxDQUFDTyxPQUFMLENBQWExUSxJQUFiLEVBQW1Cc0ksS0FBSyxDQUFDMkgsS0FBTixDQUFZM0gsS0FBSyxDQUFDMkgsS0FBTixDQUFZN08sTUFBWixHQUFtQixDQUEvQixDQUFuQixLQUF5RCxDQUE1RCxFQUErRDtBQUMzRDtBQUNBa0gscUJBQUssQ0FBQzRILE9BQU4sQ0FBY0ssS0FBZDtBQUNBakkscUJBQUssQ0FBQzJILEtBQU4sR0FBYyxFQUFkO0FBQ0E7QUFDSDtBQUNKOztBQUdEM0gsaUJBQUssQ0FBQzJILEtBQU4sQ0FBWVUsSUFBWixDQUFpQixtREFBSSxDQUFDRCxPQUF0QjtBQUNBO0FBQ0g7QUFDSixTQW5DZSxDQXFDaEI7QUFDQTs7O0FBQ0FwSSxhQUFLLENBQUM0SCxPQUFOLENBQWNDLElBQWQsR0FBcUIsSUFBckI7QUFDSCxPQTVETTtBQTZEUFMsU0E3RE8sZ0JBNkRIdEksS0E3REcsRUE2REl0SSxJQTdESixFQTZEVTtBQUNiO0FBQ0EsWUFBRyxDQUFDc0ksS0FBSyxDQUFDNEgsT0FBTixDQUFjTyxPQUFsQixFQUEyQjtBQUN2QjtBQUNILFNBSlksQ0FNYjs7O0FBQ0EsWUFBR25JLEtBQUssQ0FBQzJILEtBQU4sQ0FBWTdPLE1BQVosS0FBdUIsQ0FBMUIsRUFBNkI7QUFDekJrSCxlQUFLLENBQUMySCxLQUFOLENBQVk3SyxJQUFaLENBQWlCcEYsSUFBakI7QUFDQTtBQUNIOztBQUVELFlBQUcsQ0FBQ3NJLEtBQUssQ0FBQzRILE9BQU4sQ0FBY0MsSUFBbEIsRUFBd0I7QUFDcEI7QUFDQTdILGVBQUssQ0FBQzJILEtBQU4sQ0FBWTdLLElBQVosQ0FBaUJwRixJQUFqQjtBQUNBc0ksZUFBSyxDQUFDMkgsS0FBTixDQUFZVSxJQUFaLENBQWlCLG1EQUFJLENBQUNELE9BQXRCO0FBQ0E7QUFDSDs7QUFFRCxZQUFHLG1EQUFJLENBQUNBLE9BQUwsQ0FBYTFRLElBQWIsRUFBbUJzSSxLQUFLLENBQUMySCxLQUFOLENBQVkzSCxLQUFLLENBQUMySCxLQUFOLENBQVk3TyxNQUFaLEdBQW1CLENBQS9CLENBQW5CLEtBQXlELENBQTVELEVBQStEO0FBQzNEO0FBQ0FrSCxlQUFLLENBQUM0SCxPQUFOLENBQWNLLEtBQWQ7QUFDQWpJLGVBQUssQ0FBQzJILEtBQU4sR0FBYyxFQUFkO0FBQ0E7QUFDSDs7QUFFRDNILGFBQUssQ0FBQzJILEtBQU4sQ0FBWTdLLElBQVosQ0FBaUJwRixJQUFqQjtBQUNBc0ksYUFBSyxDQUFDMkgsS0FBTixDQUFZVSxJQUFaLENBQWlCLG1EQUFJLENBQUNELE9BQXRCO0FBQ0gsT0F6Rk07QUEwRlBHLFlBMUZPLG1CQTBGQXZJLEtBMUZBLEVBMEZPckksRUExRlAsRUEwRlc7QUFDZCxhQUFLLElBQUk2QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHd0YsS0FBSyxDQUFDMkgsS0FBTixDQUFZN08sTUFBaEMsRUFBd0MwQixDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLGNBQUlrTixJQUFJLENBQUMxSCxLQUFLLENBQUMySCxLQUFOLENBQVluTixDQUFaLENBQUQsQ0FBSixLQUF5QjdDLEVBQTdCLEVBQWlDO0FBQzdCcUksaUJBQUssQ0FBQzJILEtBQU4sQ0FBWWEsTUFBWixDQUFtQmhPLENBQW5CLEVBQXNCLENBQXRCO0FBQ0E7QUFDSDtBQUNKO0FBQ0o7QUFqR00sS0FQUjtBQTBHSGlPLFdBQU8sRUFBRTtBQUNMO0FBQ0FDLFdBRkssdUJBRW9CO0FBQUEsWUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLFlBQVIzSSxLQUFRLFFBQVJBLEtBQVE7O0FBQ3JCLFlBQUdBLEtBQUssQ0FBQzRILE9BQU4sQ0FBY08sT0FBakIsRUFBMEI7QUFDdEI7QUFDSDs7QUFFRFEsZ0JBQVEsQ0FBQyxNQUFELENBQVI7QUFDSCxPQVJJO0FBU0w7QUFDQWQsVUFWSyx1QkFVaUI7QUFBQTs7QUFBQSxZQUFoQjdQLE1BQWdCLFNBQWhCQSxNQUFnQjtBQUFBLFlBQVJnSSxLQUFRLFNBQVJBLEtBQVE7O0FBQ2xCLFlBQUdBLEtBQUssQ0FBQzRILE9BQU4sQ0FBY08sT0FBZCxJQUF5QixDQUFDbkksS0FBSyxDQUFDNEgsT0FBTixDQUFjQyxJQUEzQyxFQUFpRDtBQUM3QztBQUNIOztBQUVEN1AsY0FBTSxDQUFDLFlBQUQsQ0FBTjtBQUNBLFlBQUk0USxDQUFDLEdBQUc7QUFBQ0MsZUFBSyxFQUFFckIsS0FBUjtBQUFlc0IsZ0JBQU0sRUFBRTlJLEtBQUssQ0FBQzJILEtBQU4sQ0FBWTdPO0FBQW5DLFNBQVI7QUFDQXFDLGNBQU0sQ0FBQ3hCLE1BQVAsQ0FBY2lQLENBQWQsRUFBaUI1SSxLQUFLLENBQUNYLEtBQXZCO0FBRUF4SSxZQUFJLENBQUM2SCxHQUFMLENBQVNxSyxHQUFULENBQWFySyxHQUFiLEVBQWtCa0ssQ0FBbEIsRUFDS2hLLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsY0FBRyxDQUFDQSxRQUFRLENBQUNDLFFBQVQsRUFBSixFQUF5QjtBQUNyQixnQkFBTXpILElBQUksR0FBR3dILFFBQVEsQ0FBQ3FDLE9BQVQsQ0FBaUIsT0FBakIsQ0FBYjs7QUFDQSxnQkFBRzdKLElBQUksS0FBSyxJQUFaLEVBQWtCO0FBQ2Qsa0JBQUl3USxJQUFJLEdBQUcsS0FBWDtBQUNBeFEsa0JBQUksQ0FBQzJSLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCLFVBQUNDLE9BQUQsRUFBYTtBQUNqQyxvQkFBR0EsT0FBTyxDQUFDckIsSUFBUixLQUFpQixLQUFwQixFQUEyQjtBQUN2QkEsc0JBQUksR0FBRyxJQUFQO0FBQ0gsaUJBRkQsTUFFTztBQUNIN1Asd0JBQU0sQ0FBQyxLQUFELEVBQVEsSUFBSWQsS0FBSyxDQUFDQyxJQUFWLENBQWUrUixPQUFmLENBQVIsQ0FBTjtBQUNIO0FBQ0osZUFORDtBQVFBbFIsb0JBQU0sQ0FBQyxNQUFELEVBQVM2UCxJQUFULENBQU47QUFDQTdQLG9CQUFNLENBQUMsV0FBRCxDQUFOO0FBQ0g7QUFHSixXQWpCRCxNQWlCTztBQUNIaEIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZNEgsUUFBWjtBQUNBaEksZ0JBQUksQ0FBQ2tJLEtBQUwsQ0FBVyxLQUFYLEVBQWlCRixRQUFqQjtBQUNIO0FBRUosU0F4QkwsRUF5QktLLEtBekJMLENBeUJXLFVBQUNsRixLQUFELEVBQVc7QUFDZGhELGlCQUFPLENBQUNDLEdBQVIsQ0FBWStDLEtBQVo7QUFDQW5ELGNBQUksQ0FBQ2tJLEtBQUwsQ0FBVyxLQUFYLEVBQWlCL0UsS0FBakI7QUFDSCxTQTVCTDtBQTZCSCxPQWhESTtBQWlETCtPLFNBakRLLHNCQWlEZ0IxSixLQWpEaEIsRUFpRHVCO0FBQUE7O0FBQUEsWUFBdkJySCxNQUF1QixTQUF2QkEsTUFBdUI7QUFBQSxZQUFmZ0ksS0FBZSxTQUFmQSxLQUFlO0FBQ3hCLGVBQU8sSUFBSW1KLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0FyUixnQkFBTSxDQUFDLFlBQUQsRUFBZSxJQUFmLENBQU47QUFDQXFILGVBQUssQ0FBQ2lLLFFBQU4sR0FBaUIsQ0FBakI7QUFFQXpTLGNBQUksQ0FBQzZILEdBQUwsQ0FBU3FLLEdBQVQsQ0FBYXJLLEdBQWIsRUFBa0JXLEtBQWxCLEVBQ0tULElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFDaEIsZ0JBQUcsQ0FBQ0EsUUFBUSxDQUFDQyxRQUFULEVBQUosRUFBeUI7QUFDckIsa0JBQU16SCxJQUFJLEdBQUd3SCxRQUFRLENBQUNxQyxPQUFULENBQWlCLE9BQWpCLENBQWI7O0FBQ0Esa0JBQUc3SixJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNkLG9CQUFHQSxJQUFJLENBQUMyUixVQUFMLENBQWdCbFEsTUFBaEIsR0FBeUIsQ0FBNUIsRUFBK0I7QUFDM0J1USx3QkFBTSxDQUFDLHFCQUFELENBQU47QUFDSCxpQkFGRCxNQUVPO0FBQ0hyUix3QkFBTSxDQUFDLFdBQUQsRUFBYyxJQUFkLENBQU47QUFDQSxzQkFBSU4sSUFBSSxHQUFHLElBQUlSLEtBQUssQ0FBQ0MsSUFBVixDQUFlRSxJQUFJLENBQUMyUixVQUFMLENBQWdCLENBQWhCLENBQWYsQ0FBWDtBQUVBLHNCQUFNTyxJQUFJLEdBQUcxSyxRQUFRLENBQUNxQyxPQUFULENBQWlCLFdBQWpCLENBQWI7O0FBQ0Esc0JBQUdxSSxJQUFJLEtBQUssSUFBWixFQUFrQjtBQUNkN1Isd0JBQUksQ0FBQzZSLElBQUwsR0FBWSxJQUFJclMsS0FBSyxDQUFDQyxJQUFWLENBQWVvUyxJQUFJLENBQUNQLFVBQXBCLENBQVo7QUFDSDs7QUFFRCxzQkFBTVEsSUFBSSxHQUFHM0ssUUFBUSxDQUFDcUMsT0FBVCxDQUFpQixXQUFqQixDQUFiOztBQUNBLHNCQUFHc0ksSUFBSSxLQUFLLElBQVosRUFBa0I7QUFDZDlSLHdCQUFJLENBQUM4UixJQUFMLEdBQVksSUFBSXRTLEtBQUssQ0FBQ0MsSUFBVixDQUFlcVMsSUFBSSxDQUFDUixVQUFwQixDQUFaO0FBQ0g7O0FBRURJLHlCQUFPLENBQUMxUixJQUFELENBQVA7QUFDSDtBQUNKO0FBRUosYUF2QkQsTUF1Qk87QUFDSFYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZNEgsUUFBWjtBQUNBaEksa0JBQUksQ0FBQ2tJLEtBQUwsQ0FBVyxNQUFYLEVBQWlCRixRQUFqQjtBQUNIO0FBRUosV0E5QkwsRUErQktLLEtBL0JMLENBK0JXLFVBQUNsRixLQUFELEVBQVc7QUFDZGhELG1CQUFPLENBQUNDLEdBQVIsQ0FBWStDLEtBQVo7QUFDQW5ELGdCQUFJLENBQUNrSSxLQUFMLENBQVcsTUFBWCxFQUFpQi9FLEtBQWpCO0FBQ0gsV0FsQ0w7QUFvQ0gsU0E5RE0sQ0FBUDtBQStESCxPQWpISTtBQWtITGtPLFlBbEhLLHlCQWtIbUJ1QixPQWxIbkIsRUFrSDRCO0FBQUE7O0FBQUEsWUFBekJ6UixNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxZQUFqQmdJLEtBQWlCLFNBQWpCQSxLQUFpQjtBQUM3QixlQUFPLElBQUltSixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDeFMsY0FBSSxDQUFDNkgsR0FBTCxDQUFTQyxJQUFULENBQWNELEdBQUcsR0FBRyxTQUFwQixFQUErQitLLE9BQS9CLEVBQ0s3SyxJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLGdCQUFHLENBQUNBLFFBQVEsQ0FBQ0MsUUFBVCxFQUFKLEVBQXlCO0FBQ3JCLGtCQUFJekgsSUFBSSxHQUFHd0gsUUFBUSxDQUFDcUMsT0FBVCxDQUFpQixjQUFqQixDQUFYO0FBQ0Esa0JBQUl4SixJQUFJLEdBQUcsSUFBSVIsS0FBSyxDQUFDQyxJQUFWLENBQWVFLElBQUksQ0FBQzJSLFVBQXBCLENBQVgsQ0FGcUIsQ0FJckI7QUFDQTs7QUFDQWhSLG9CQUFNLENBQUMsUUFBRCxFQUFXTixJQUFYLENBQU47QUFDQTBSLHFCQUFPLENBQUMxUixJQUFELENBQVA7QUFDSCxhQVJELE1BUU87QUFDSDJSLG9CQUFNLENBQUN4SyxRQUFELENBQU47QUFDSDtBQUVKLFdBZEwsRUFlS0ssS0FmTCxDQWVXLFVBQUNsRixLQUFELEVBQVc7QUFDZG5ELGdCQUFJLENBQUNrSSxLQUFMLENBQVcsTUFBWCxFQUFpQi9FLEtBQWpCO0FBQ0gsV0FqQkw7QUFrQkgsU0FuQk0sQ0FBUDtBQXFCSCxPQXhJSTtBQXlJTHNPLFNBeklLLHVCQXlJZ0JtQixPQXpJaEIsRUF5SXlCO0FBQUE7O0FBQUEsWUFBekJ6UixNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxZQUFqQmdJLEtBQWlCLFNBQWpCQSxLQUFpQjtBQUMxQixlQUFPLElBQUltSixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDeFMsY0FBSSxDQUFDNkgsR0FBTCxDQUFTQyxJQUFULENBQWNELEdBQUcsR0FBRyxNQUFwQixFQUE0QitLLE9BQTVCLEVBQ0s3SyxJQURMLENBQ1UsVUFBQ0MsUUFBRCxFQUFjO0FBQ2hCLGdCQUFHLENBQUNBLFFBQVEsQ0FBQ0MsUUFBVCxFQUFKLEVBQXlCO0FBQ3JCLGtCQUFJekgsSUFBSSxHQUFHd0gsUUFBUSxDQUFDcUMsT0FBVCxDQUFpQixVQUFqQixDQUFYO0FBQ0Esa0JBQUl4SixJQUFJLEdBQUcsSUFBSVIsS0FBSyxDQUFDQyxJQUFWLENBQWVFLElBQUksQ0FBQzJSLFVBQXBCLENBQVg7QUFFQWhSLG9CQUFNLENBQUMsS0FBRCxFQUFRTixJQUFSLENBQU47QUFDQTBSLHFCQUFPLENBQUMxUixJQUFELENBQVA7QUFDSCxhQU5ELE1BTU87QUFDSFYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQW9TLG9CQUFNLENBQUN4SyxRQUFELENBQU47QUFDSDtBQUVKLFdBYkwsRUFjS0ssS0FkTCxDQWNXLFVBQUNsRixLQUFELEVBQVc7QUFDZG5ELGdCQUFJLENBQUNrSSxLQUFMLENBQVcsTUFBWCxFQUFpQi9FLEtBQWpCO0FBQ0gsV0FoQkw7QUFpQkgsU0FsQk0sQ0FBUDtBQW9CSCxPQTlKSTtBQStKTHVPLFlBL0pLLDBCQStKbUJrQixPQS9KbkIsRUErSjRCO0FBQUE7O0FBQUEsWUFBekJ6UixNQUF5QixTQUF6QkEsTUFBeUI7QUFBQSxZQUFqQmdJLEtBQWlCLFNBQWpCQSxLQUFpQjtBQUM3QixlQUFPLElBQUltSixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDeFMsY0FBSSxDQUFDNkgsR0FBTCxDQUFTQyxJQUFULENBQWNELEdBQUcsR0FBRyxTQUFwQixFQUErQjtBQUFDL0csY0FBRSxFQUFFOFIsT0FBTyxDQUFDOVI7QUFBYixXQUEvQixFQUNLaUgsSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNoQixnQkFBSSxDQUFDQSxRQUFRLENBQUNDLFFBQVQsRUFBTCxFQUEwQjtBQUN0QjlHLG9CQUFNLENBQUMsUUFBRCxFQUFXeVIsT0FBTyxDQUFDOVIsRUFBbkIsQ0FBTjtBQUNBeVIscUJBQU87QUFDVixhQUhELE1BR087QUFDSHBTLHFCQUFPLENBQUNDLEdBQVIsQ0FBWTRILFFBQVo7QUFDQWhJLGtCQUFJLENBQUNrSSxLQUFMLENBQVcsTUFBWCxFQUFpQkYsUUFBakI7QUFDSDtBQUVKLFdBVkwsRUFXS0ssS0FYTCxDQVdXLFVBQUNsRixLQUFELEVBQVc7QUFDZGhELG1CQUFPLENBQUNDLEdBQVIsQ0FBWStDLEtBQVo7QUFDQW5ELGdCQUFJLENBQUNrSSxLQUFMLENBQVcsTUFBWCxFQUFpQi9FLEtBQWpCO0FBQ0gsV0FkTDtBQWdCSCxTQWpCTSxDQUFQO0FBa0JIO0FBbExJO0FBMUdOLEdBQVA7QUFnU0gsQ0FqU0QsQzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTs7Ozs7OztBQVFBLElBQUlXLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVc7QUFFeEI7QUFDQSxPQUFLakQsSUFBTCxHQUFZLElBQVo7QUFDSCxDQUpEOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTs7OztBQUtBLElBQUlQLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVN1RCxJQUFULEVBQWU7QUFFdEI7QUFDQSxNQUFJRyxJQUFJLEdBQUcsR0FBWCxDQUhzQixDQUt0Qjs7QUFDQSxNQUFJdkQsTUFBTSxHQUFHLElBQWI7O0FBRUEsTUFBR29ELElBQUksS0FBS2xELFNBQVosRUFBdUI7QUFDbkIsUUFBRyxPQUFPa0QsSUFBUCxLQUFpQixRQUFwQixFQUE4QjtBQUMxQkEsVUFBSSxHQUFHekMsSUFBSSxDQUFDQyxLQUFMLENBQVd3QyxJQUFYLENBQVA7QUFDSDs7QUFFRCxTQUFLL0MsRUFBTCxHQUFVK0MsSUFBSSxDQUFDL0MsRUFBZjtBQUNBa0QsUUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQVo7QUFDQSxTQUFLdUIsSUFBTCxHQUFZMUIsSUFBSSxDQUFDMEIsSUFBakI7QUFDQSxTQUFLc04sS0FBTCxHQUFhaFAsSUFBSSxDQUFDZ1AsS0FBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNqUCxJQUFJLENBQUNoRCxJQUFuQixDQVRtQixDQVduQjs7QUFDQUosVUFBTSxHQUFHSCxJQUFJLENBQUNDLGlCQUFMLENBQXVCc0QsSUFBdkIsQ0FBVDs7QUFDQSxRQUFHcEQsTUFBTSxLQUFLLElBQWQsRUFBb0I7QUFDaEJBLFlBQU0sQ0FBQ0ksSUFBUCxHQUFjLElBQWQ7QUFDSDtBQUVKLEdBakJELE1BaUJPO0FBQ0gsU0FBS0MsRUFBTCxHQUFVLENBQVY7QUFDQWtELFFBQUksR0FBRyxHQUFQO0FBQ0EsU0FBS3VCLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS3NOLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7QUFFRHhPLFFBQU0sQ0FBQ3lPLGNBQVAsQ0FBc0IsSUFBdEIsRUFBNEIsUUFBNUIsRUFBc0M7QUFDbENiLE9BRGtDLGlCQUM1QjtBQUFDLGFBQU96UixNQUFQO0FBQWM7QUFEYSxHQUF0QztBQUlBOzs7Ozs7Ozs7QUFRQSxPQUFLdUQsSUFBTCxHQUFZLFlBQVc7QUFDbkIsUUFBR3ZELE1BQU0sS0FBSyxJQUFkLEVBQW9CO0FBQ2hCLGFBQU9BLE1BQU0sQ0FBQ3VELElBQVAsRUFBUDtBQUNIOztBQUVELFdBQU9BLElBQVA7QUFDSCxHQU5EOztBQVFBLE9BQUtnUCxXQUFMLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDL0JqUCxRQUFJLEdBQUdpUCxLQUFQO0FBQ0gsR0FGRDs7QUFJQSxPQUFLQyxRQUFMLEdBQWdCLFlBQVc7QUFDdkIsV0FBT2xQLElBQVA7QUFDSCxHQUZEO0FBSUE7Ozs7OztBQUlBLE9BQUttUCxTQUFMLEdBQWlCLFVBQVNDLE9BQVQsRUFBa0I7QUFDL0IzUyxVQUFNLEdBQUcyUyxPQUFUOztBQUNBLFFBQUczUyxNQUFNLEtBQUssSUFBZCxFQUFvQjtBQUNoQkEsWUFBTSxDQUFDSSxJQUFQLEdBQWMsSUFBZDtBQUNIO0FBQ0osR0FMRDtBQU9ILENBeEVEOztBQTBFQVAsSUFBSSxDQUFDc0UsS0FBTCxHQUFhLEdBQWI7QUFDQXRFLElBQUksQ0FBQ3VFLElBQUwsR0FBWSxHQUFaO0FBQ0F2RSxJQUFJLENBQUMwRSxLQUFMLEdBQWEsR0FBYjtBQUNBMUUsSUFBSSxDQUFDOEUsS0FBTCxHQUFhLEdBQWI7O0FBR0E5RSxJQUFJLENBQUMrUyxZQUFMLEdBQW9CLFlBQVc7QUFDM0IsTUFBSS9OLEtBQUssR0FBRyxFQUFaO0FBQ0FBLE9BQUssQ0FBQ2hGLElBQUksQ0FBQ3NFLEtBQU4sQ0FBTCxHQUFvQjtBQUFDVyxRQUFJLEVBQUUsT0FBUDtBQUFnQkMsWUFBUSxFQUFFO0FBQTFCLEdBQXBCO0FBQ0FGLE9BQUssQ0FBQ2hGLElBQUksQ0FBQ3VFLElBQU4sQ0FBTCxHQUFtQjtBQUFDVSxRQUFJLEVBQUUsTUFBUDtBQUFlQyxZQUFRLEVBQUU7QUFBekIsR0FBbkI7QUFDQUYsT0FBSyxDQUFDaEYsSUFBSSxDQUFDMEUsS0FBTixDQUFMLEdBQW9CO0FBQUNPLFFBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FBcEI7QUFDQUYsT0FBSyxDQUFDaEYsSUFBSSxDQUFDOEUsS0FBTixDQUFMLEdBQW9CO0FBQUNHLFFBQUksRUFBRSxPQUFQO0FBQWdCQyxZQUFRLEVBQUU7QUFBMUIsR0FBcEI7QUFFQSxTQUFPRixLQUFQO0FBQ0gsQ0FSRDs7QUFVQWhGLElBQUksQ0FBQytELFNBQUwsQ0FBZWdQLFlBQWYsR0FBOEIsWUFBVztBQUNyQyxTQUFPL1MsSUFBSSxDQUFDK1MsWUFBTCxFQUFQO0FBQ0gsQ0FGRDtBQUlBOzs7Ozs7QUFJQS9TLElBQUksQ0FBQytELFNBQUwsQ0FBZWdCLFFBQWYsR0FBMEIsWUFBVztBQUNqQyxNQUFJNUUsTUFBTSxHQUFHLEtBQUtBLE1BQWxCOztBQUNBLE1BQUdBLE1BQU0sS0FBSyxJQUFkLEVBQW9CO0FBQ2hCLFdBQU9BLE1BQU0sQ0FBQzRFLFFBQVAsRUFBUDtBQUNIOztBQUVELFNBQU8vRSxJQUFJLENBQUMrUyxZQUFMLEVBQVA7QUFDSCxDQVBEOztBQVNBL1MsSUFBSSxDQUFDK0QsU0FBTCxDQUFlaVAsT0FBZixHQUF5QixVQUFTQSxPQUFULEVBQWtCO0FBQ3ZDLE1BQUl0UCxJQUFJLEdBQUcsS0FBS0EsSUFBTCxFQUFYO0FBQ0EsTUFBSXNCLEtBQUssR0FBRyxLQUFLRCxRQUFMLEVBQVo7O0FBQ0EsTUFBR0MsS0FBSyxDQUFDMEssY0FBTixDQUFxQnNELE9BQXJCLENBQUgsRUFBa0M7QUFDOUIsV0FBT2hPLEtBQUssQ0FBQ3RCLElBQUQsQ0FBTCxDQUFZd0IsUUFBWixJQUF3QkYsS0FBSyxDQUFDZ08sT0FBRCxDQUFMLENBQWU5TixRQUE5QztBQUNILEdBRkQsTUFFTztBQUNILFdBQU8sS0FBUDtBQUNIO0FBQ0osQ0FSRDs7QUFXQWxGLElBQUksQ0FBQytELFNBQUwsQ0FBZWtQLGVBQWYsR0FBaUMsVUFBU3ZQLElBQVQsRUFBZTtBQUM1QyxNQUFJc0IsS0FBSyxHQUFHLEtBQUtELFFBQUwsRUFBWjs7QUFDQSxNQUFHQyxLQUFLLENBQUMwSyxjQUFOLENBQXFCaE0sSUFBckIsQ0FBSCxFQUErQjtBQUMzQixXQUFPc0IsS0FBSyxDQUFDdEIsSUFBRCxDQUFMLENBQVl3QixRQUFuQjtBQUNIOztBQUVELFNBQU8sQ0FBUDtBQUNILENBUEQ7O0FBU0FsRixJQUFJLENBQUMrRCxTQUFMLENBQWVtUCxXQUFmLEdBQTZCLFlBQVc7QUFDcEMsTUFBSUMsS0FBSyxHQUFHLEtBQUtsTyxJQUFMLENBQVVtTyxPQUFWLENBQWtCLEdBQWxCLENBQVo7O0FBQ0EsTUFBR0QsS0FBSyxHQUFHLENBQVgsRUFBYztBQUNWLFdBQU8sS0FBS2xPLElBQVo7QUFDSDs7QUFFRCxNQUFJZ0ssSUFBSSxHQUFHLEtBQUtoSyxJQUFMLENBQVVvSyxNQUFWLENBQWlCLENBQWpCLEVBQW9COEQsS0FBcEIsQ0FBWDtBQUNBLE1BQUlFLEtBQUssR0FBRyxLQUFLcE8sSUFBTCxDQUFVb0ssTUFBVixDQUFpQjhELEtBQUssR0FBQyxDQUF2QixFQUEwQm5RLElBQTFCLEVBQVo7QUFFQSxTQUFPcVEsS0FBSyxHQUFHLEdBQVIsR0FBY3BFLElBQXJCO0FBQ0gsQ0FWRDs7QUFZQWpQLElBQUksQ0FBQytELFNBQUwsQ0FBZXVQLFlBQWYsR0FBOEIsWUFBVztBQUNyQyxNQUFNdE8sS0FBSyxHQUFHLEtBQUsrTixZQUFMLEVBQWQ7QUFDQSxNQUFJclAsSUFBSSxHQUFHLEtBQUtrUCxRQUFMLEVBQVg7QUFDQSxNQUFJVyxDQUFDLEdBQUd2TyxLQUFLLENBQUN0QixJQUFELENBQWI7O0FBQ0EsTUFBRzZQLENBQUMsS0FBS2xULFNBQVQsRUFBb0I7QUFDbkIsV0FBTzJFLEtBQUssQ0FBQ3RCLElBQUQsQ0FBTCxDQUFZdUIsSUFBbkI7QUFDQTs7QUFFRCxTQUFPLFNBQVA7QUFDSCxDQVREOztBQVdBakYsSUFBSSxDQUFDK0QsU0FBTCxDQUFleVAsUUFBZixHQUEwQixZQUFXO0FBQ2pDLE1BQU14TyxLQUFLLEdBQUcsS0FBS0QsUUFBTCxFQUFkO0FBQ0EsTUFBSXJCLElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQVg7QUFDQSxTQUFPc0IsS0FBSyxDQUFDdEIsSUFBRCxDQUFMLENBQVl1QixJQUFuQjtBQUNILENBSkQ7O0FBTUFqRixJQUFJLENBQUNpUixPQUFMLEdBQWUsVUFBU3dDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQzFCLE1BQUlDLEVBQUUsR0FBR0YsQ0FBQyxDQUFDeE8sSUFBRixDQUFPMk8sV0FBUCxFQUFUO0FBQ0EsTUFBSUMsRUFBRSxHQUFHSCxDQUFDLENBQUN6TyxJQUFGLENBQU8yTyxXQUFQLEVBQVQ7O0FBRUEsTUFBR0QsRUFBRSxHQUFHRSxFQUFSLEVBQVk7QUFDUixXQUFPLENBQUMsQ0FBUjtBQUNIOztBQUVELE1BQUdGLEVBQUUsR0FBR0UsRUFBUixFQUFZO0FBQ1IsV0FBTyxDQUFQO0FBQ0g7O0FBRUQsU0FBT0osQ0FBQyxDQUFDalQsRUFBRixHQUFPa1QsQ0FBQyxDQUFDbFQsRUFBaEI7QUFDSCxDQWJEO0FBZUE7Ozs7Ozs7OztBQU9BUixJQUFJLENBQUNDLGlCQUFMLEdBQXlCLFVBQVNDLElBQVQsRUFBZTtBQUNwQyxTQUFPLElBQVA7QUFDSCxDQUZEOztBQUllLCtEQUFBRixJQUFmOzs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQUE7QUFBQTtBQUFBO0FBQytEO0FBQ0w7OztBQUcxRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBeUc7QUFDN0gsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ2pDZjtBQUFBO0FBQUEsd0NBQXFNLENBQWdCLHFQQUFHLEVBQUMsQyIsImZpbGUiOiJjb3Vyc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb3Vyc2VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ291cnNlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmdWxsXCI+XHJcbiAgICAgIDxtYXNrLXZ1ZSA6bWFzaz1cIm1hc2tcIj5Db21tdW5pY2F0aW5nIHdpdGggc2VydmVyLi4uPC9tYXNrLXZ1ZT5cclxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxyXG4gICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgIDx0cj48dGg+Jm5ic3A7PC90aD48dGg+Jm5ic3A7PC90aD48dGg+Jm5ic3A7PC90aD48L3RyPlxyXG4gICAgICAgIDx0cj48dGQ+TmFtZTwvdGQ+PHRkPnt7dXNlci5uYW1lfX08L3RkPjx0ZD5BcyBwcm92aWRlZCBieSB0aGUgcmVnaXN0cmFycyBvZmZpY2U8L3RkPjwvdHI+XHJcbiAgICAgICAgPHRyPjx0ZD5Vc2VyIElEPC90ZD48dGQ+e3t1c2VyLnVzZXJJZH19PC90ZD48dGQ+QXMgcHJvdmlkZWQgYnkgdGhlIHJlZ2lzdHJhcnMgb2ZmaWNlPC90ZD48L3RyPlxyXG4gICAgICAgIDx0cj48dGQ+RW1haWw8L3RkPlxyXG4gICAgICAgICAgPHRkIHYtaWY9XCIhZWRpdGluZ1wiPnt7dXNlci5lbWFpbH19PC90ZD5cclxuICAgICAgICAgIDx0ZCB2LWVsc2U+PGlucHV0IHR5cGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJlbWFpbFwiIHNwZWxsY2hlY2s9XCJmYWxzZVwiPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+WW91IGFyZSBhbGxvd2VkIHRvIGNoYW5nZSB5b3VyIGVtYWlsIGFkZHJlc3M8L3RkPjwvdHI+XHJcbiAgICAgICAgPHRyPjx0ZD5TZW1lc3RlcjwvdGQ+PHRkPnt7dXNlci5tZW1iZXIuc2VtZXN0ZXJ9fTwvdGQ+PHRkPiZuYnNwOzwvdGQ+PC90cj5cclxuICAgICAgICA8dHI+PHRkPlNlY3Rpb248L3RkPjx0ZD57e3VzZXIubWVtYmVyLnNlY3Rpb259fTwvdGQ+PHRkPiZuYnNwOzwvdGQ+PC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCB2LWlmPVwiIWVkaXRpbmdcIiBjbGFzcz1cImNlbnRlclwiPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJlZGl0XCI+RWRpdDwvYnV0dG9uPjwvcD5cclxuICAgICAgICA8cCB2LWVsc2UgY2xhc3M9XCJjZW50ZXJcIj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gPGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPjwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBVc2VyVnVlQmFzZSBmcm9tICd1c2Vycy1jbC9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlJztcclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgaW1wb3J0IE1hc2tWdWUgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvTWFzay52dWUnO1xyXG5cclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0J2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuXHRcdHByb3BzOiBbJ2pzb24nXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGVkaXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgIG1hc2s6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0ICBjb21wb25lbnRzOiB7XHJcblx0XHQgIG1hc2tWdWU6IE1hc2tWdWVcclxuXHQgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuc2V0VGl0bGUoJ0Fib3V0ICcgKyB0aGlzLnVzZXIuZGlzcGxheU5hbWUoKSk7XHJcblxyXG5cdFx0XHR0aGlzLmVtYWlsID0gdGhpcy51c2VyLmVtYWlsO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZWRpdCgpIHtcclxuXHRcdFx0XHR0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBjYW5jZWwoKSB7XHJcblx0XHRcdFx0dGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Ym1pdCgpIHtcclxuXHRcdFx0XHQgIGlmKCF0aGlzLnZhbGlkRW1haWwodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KCdJbnZhbGlkIEVtYWlsIScsICdNdXN0IHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLicsXHJcbiAgICAgICAgICAgICAgRGlhbG9nLk1lc3NhZ2VCb3guT0ssICgpID0+IHtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm1hc2sgPSB0cnVlO1xyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFNpdGUuYXBpLnBvc3QoJy9hcGkvdXNlcnMvdXNlcnVwZGF0ZScsIHBhcmFtcylcclxuICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIFx0ICAgICAgdGhpcy5tYXNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICBcdGNvbnN0IHVzZXIgPSBuZXcgVXNlcnMuVXNlcihyZXNwb25zZS5nZXREYXRhKCd1c2VyJykuYXR0cmlidXRlcyk7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCd1c2VyL3NldCcsIHVzZXIpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdmFsaWRFbWFpbDogZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICAgICAgbGV0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbiAgICAgIH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIHRhYmxlIHtcclxuICAgIHRyIHtcclxuICAgICAgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE5NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1lbWFpbF0ge1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjbC1zdWJtaXNzaW9uXCI+XHJcbiAgICA8ZGl2IHYtaWY9XCJzdWJtaXNzaW9uLnN1Ym1pdFwiIGNsYXNzPVwiXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIiFzdWJtaXNzaW9uLm9wZW5cIj5cclxuICAgICAgICA8cCBjbGFzcz1cImNlbnRlcmJveCBjb21wIGNlbnRlclwiPlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuPC9wPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInN0YWZmXCIgY2xhc3M9XCJjZW50ZXJib3ggcHJpbWFyeVwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJcIj48ZW0+Li4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uPC9lbT48L3A+XHJcbiAgICAgICAgICA8Y29tcG9uZW50IDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxjb21wb25lbnQgdi1pZj1cInN1Ym1pc3Npb24ub3BlblwiIDpzdWJtaXNzaW9uPVwic3VibWlzc2lvblwiIDppcz1cInN1Ym1pdHRlclwiIHYtb246bmV3X3N1Ym1pc3Npb25zPVwibmV3U3VibWlzc2lvbnNcIj48L2NvbXBvbmVudD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN1Ym1pdHRlZCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6c3VibWlzc2lvbnM9XCJzdWJtaXNzaW9uc1wiPjwvc3VibWl0dGVkPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXCIgdi1odG1sPVwic3VibWlzc2lvbi5hZGRpdGlvbmFsXCIgY2xhc3M9XCJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge01lbWJlcn0gZnJvbSAnLi4vTWVtYmVycy9NZW1iZXInO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFRleHRWdWUgZnJvbSAnLi9TdWJtaXRUZXh0LnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0UHJvZ3JhbVZ1ZSBmcm9tICcuL1N1Ym1pdFByb2dyYW0udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXRJbWFnZVZ1ZSBmcm9tICcuL1N1Ym1pdEltYWdlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0VW5rbm93blZ1ZSBmcm9tICcuL1N1Ym1pdFVua25vd24udnVlJztcclxuICAgIGltcG9ydCBTdWJtaXR0ZWRWdWUgZnJvbSAnLi9TdWJtaXR0ZWQudnVlJztcclxuICAgIGltcG9ydCB7VEVYVF9UWVBFU30gZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBzdGFmZjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGVyOiAnc3VibWl0LXRleHQnLFxyXG4gICAgICAgICAgICAgIHN1Ym1pc3Npb25zOiBbXVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICBzdWJtaXRUZXh0OiBTdWJtaXRUZXh0VnVlLFxyXG4gICAgICAgICAgc3VibWl0UHJvZ3JhbTogU3VibWl0UHJvZ3JhbVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdEltYWdlOiBTdWJtaXRJbWFnZVZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFVua25vd246IFN1Ym1pdFVua25vd25WdWUsXHJcbiAgICAgICAgICBzdWJtaXR0ZWQ6IFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICBcdHRoaXMuc3VibWlzc2lvbnMgPSB0aGlzLnN1Ym1pc3Npb24uc3VibWlzc2lvbnM7XHJcblxyXG4gICAgICAgICAgbGV0IHVzZXIgPSB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXI7XHJcbiAgICAgICAgICB0aGlzLnN0YWZmID0gdXNlci5hdExlYXN0KE1lbWJlci5TVEFGRik7XHJcbiAgICAgICAgICBzd2l0Y2godGhpcy5zdWJtaXNzaW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgICBjYXNlICdwcm9ncmFtJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LXByb2dyYW0nO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgY2FzZSAndGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC10ZXh0JztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0ZXIgPSAnc3VibWl0LWltYWdlJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC11bmtub3duJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBuZXdTdWJtaXNzaW9ucyh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pc3Npb25zID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtBUElSZXNwb25zZX0gZnJvbSAnc2l0ZS1jbC9qcy9BUElSZXNwb25zZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmlsZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBsb2FkKCkge1xyXG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IG5ldyBBUElSZXNwb25zZShKU09OLnBhcnNlKGpzb24pKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtBUElSZXNwb25zZX0gZnJvbSAnc2l0ZS1jbC9qcy9BUElSZXNwb25zZSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgZmlsZXM6IG51bGwsXHJcbiAgICAgICAgICAgICAgYWN0aW9uOiBudWxsLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICB0aGlzLmFjdGlvbiA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvYXBpLyR7c3lzdGVtfS9zdWJtaXNzaW9uL3N1Ym1pdC8ke3RoaXMuc3VibWlzc2lvbi5hc3NpZ25UYWd9LyR7dGhpcy5zdWJtaXNzaW9uLnRhZ31gO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBsb2FkKCkge1xyXG4gICAgICAgICAgICAgIGlmKCF0aGlzLnN1Ym1pdHRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdGhpcy5zdWJtaXR0aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBqc29uID0gZnJhbWVzWyd1cGxvYWRfdGFyZ2V0XycgKyB0aGlzLnN1Ym1pc3Npb24udGFnXS5kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICAgICAgICB0cnkge1xyXG5cdCAgICAgICAgICAgICAgcmVzcG9uc2UgPSBuZXcgQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcbiAgICAgICAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcclxuICAgICAgICAgICAgICBcdGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhqc29uKTtcclxuXHQgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgXCJFcnJvciBkdXJpbmcgc3VibWlzc2lvblwiKTtcclxuICAgICAgICAgICAgICBcdHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRyZWZzWydmb3JtJ10ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnbmV3X3N1Ym1pc3Npb25zJywgcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbnMnKS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XHJcbiAgICAgIDxkaXYgcmVmPVwiZWRpdG9yXCI+PC9kaXY+XHJcbiAgICAgIDxwPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIj48L3A+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7RWRpdG9yfSBmcm9tICdzaXRlLWNsL2pzL1VJL0VkaXRvcic7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ2VkaXRvciddO1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgRWRpdG9yKGVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuc3VibWlzc2lvbi5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgY2xhc3NlczogWyd5ZWxsb3ctcGFkJ11cclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgIGlmKHRleHQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsICdZb3UgbXVzdCBlbnRlciBzb21lIHRleHQgdG8gc3VibWl0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9wbGFpbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLnBvc3QoYC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWAsIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci50ZXh0YXJlYS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8cCBjbGFzcz1cInNob3V0b3V0XCI+U3VibWlzc2lvbiB0eXBlIDxlbT57e29wdGlvbnMudHlwZX19PC9lbT4gaXMgbm90IHN1cHBvcnRlZDwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydvcHRpb25zJ11cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic3VibWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJsYXJnZSBjZW50ZXJcIj5ObyBzdWJtaXNzaW9ucywgeWV0LjwvcD5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGg+U3VibWlzc2lvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWZvcj1cInN1Ym1pdHRlZCBpbiBzdWJtaXNzaW9uc1wiPlxyXG4gICAgICAgICAgICA8dGQ+PHN1Ym1pdHRlZC1pdGVtIDphc3NpZ250YWc9XCJzdWJtaXNzaW9uLmFzc2lnblRhZ1wiIDp0YWc9XCJzdWJtaXNzaW9uLnRhZ1wiIDpzdWJtaXNzaW9uPVwic3VibWl0dGVkXCIgOmFuYWx5c2lzPVwic3VibWlzc2lvbi5hbmFseXNpc1wiIDp0ZWFtaW5nPVwic3VibWlzc2lvbi50ZWFtaW5nXCIgQHJlc3VsdD0nYW5hbHlzaXNSZXN1bHQnIHYtb246cHJldmlld19pbWc9XCJwcmV2aWV3X2ltZ1wiIHYtb246cHJldmlldz1cInByZXZpZXdlclwiPjwvc3VibWl0dGVkLWl0ZW0+PC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAndGV4dCdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvbjwvcD5cclxuICAgICAgICA8cCB2LWlmPVwic3VibWlzc2lvbi50eXBlID09PSAncHJvZ3JhbSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ2ltYWdlJ1wiIGNsYXNzPVwiY2VudGVyXCI+Q2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uczwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+XHJcbiAgICAgICAgICA8cHJlIGNsYXNzPVwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgdi1pZj1cInByZXZpZXdUeHQgIT09IG51bGxcIj57e3ByZXZpZXdUeHR9fTwvcHJlPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIiB2LWh0bWw9XCJwcmV2aWV3VGltZVwiPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSBjbGFzcz1cImNsLWFuYWx5c2lzXCIgdi1pZj1cInJlc3VsdCAhPT0gbnVsbFwiPnt7cmVzdWx0fX08L3ByZT5cclxuICAgIDxkaXYgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIj5cclxuICAgICAgPGZpZ3VyZSB2LWlmPVwicHJldmlld0ltZyAhPT0gbnVsbFwiIGNsYXNzPVwiY2wtcHJldmlld1wiPjxpbWcgOnNyYz1cInByZXZpZXdJbWdcIj48L2ZpZ3VyZT5cclxuICAgICAgPHAgY2xhc3M9XCJjbC1wcmV2aWV3LXRpbWVcIj57e3ByZXZpZXdUaW1lfX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICAvKipcclxuICAgICAqIENvbXBvbmVudCB0aGF0IGRpc3BsYXlzIHRoZSBsaXN0IG9mIHN1Ym1pc3Npb25zLlxyXG4gICAgICogQGNvbnN0cnVjdG9yIFN1Ym1pdHRlZFZ1ZVxyXG4gICAgICovXHJcbiAgaW1wb3J0IFN1Ym1pdHRlZEl0ZW1WdWUgZnJvbSAnLi9TdWJtaXR0ZWRJdGVtLnZ1ZSc7XHJcbiAgaW1wb3J0IHtUaW1lRm9ybWF0dGVyfSBmcm9tICdzaXRlLWNsL2pzL1RpbWVGb3JtYXR0ZXInO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nLCAnc3VibWlzc2lvbnMnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByZXZpZXdUeHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgcHJldmlld0ltZzogbnVsbCxcclxuICAgICAgICAgICAgICBwcmV2aWV3VGltZTogbnVsbCxcclxuICAgICAgICAgICAgICByZXN1bHQ6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgc3VibWl0dGVkSXRlbTogU3VibWl0dGVkSXRlbVZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uc1swXS5kYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBcdHRoaXMucHJldmlld1R4dCA9IHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3LnRleHQ7XHJcbiAgICAgICAgXHR0aGlzLnByZXZpZXdUaW1lID0gVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcuZGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgIHN1Ym1pc3Npb25zOiBmdW5jdGlvbigpIHtcclxuXHQgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3VibWlzc2lvbnNbMF0udHlwZS5zdWJzdHIoMCwgNikgPT09ICdpbWFnZS8nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgIHByZXZpZXdlcihzdWJtaXNzaW9uKSB7XHJcbiAgICAgICAgXHR0aGlzLnByZXZpZXdUeHQgPSBcIlxcblwiO1xyXG4gICAgICAgIFx0dGhpcy5wcmV2aWV3VGltZSA9ICcmbmJzcDsnO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgPT09IG51bGwgPyAnY291cnNlJyA6ICd0ZWFtJztcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9nZXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9LyR7c3VibWlzc2lvbi5pZH1gLCB7fSlcclxuICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbicpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3VHh0ID0gc3VibWlzc2lvbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1RpbWUgPSBUaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld19pbWcoc3VibWlzc2lvbikge1xyXG5cdCAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcblx0ICAgICAgICBpZihzdWJtaXNzaW9uLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICBcdHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHtzdWJtaXNzaW9uLmlkfWA7XHJcblx0ICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IFRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHN1Ym1pc3Npb24uZGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbmFseXNpc1Jlc3VsdChyZXN1bHQpIHtcclxuICAgICAgICBcdHRoaXMucmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJpc1RleHQoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFRleHQoKVwiPnt7ZGlzcGxheSgpfX08L2E+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cImlzSW1hZ2UoKVwiPlxyXG4gICAgICA8YSBAY2xpY2sucHJldmVudD1cInNlbGVjdFwiPnt7ZGlzcGxheSgpfX08L2E+PG1lbnUtdnVlIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBAb3Blbj1cInNlbGVjdFwiPjxhPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9tZW51YmFycy5wbmcnXCIgYWx0PVwiTWVudVwiPjwvYT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGEgOmhyZWY9XCJ0b0Rvd25sb2FkXCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL2Rvd25sb2FkLnBuZydcIiBhbHQ9XCJEb3dubG9hZFwiPiBEb3dubG9hZDwvYT48L2xpPlxyXG4gICAgICAgICAgPGxpIHYtZm9yPVwiaXRlbSBpbiBhbmFseXNpc1wiPjxhIEBjbGljay5wcmV2ZW50PVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICA8bWVudS12dWUgdi1vbjpvcGVuPVwic2VsZWN0XCI+PGE+e3tkaXNwbGF5KCl9fTwvYT48YSBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgQGNsaWNrLnN0b3A9XCJzaG93QW5hbHlzaXMoaXRlbSlcIiAgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQuc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiPjxpbWcgOnNyYz1cIml0ZW0uaWNvblwiIDphbHQ9XCJpdGVtLm1lbnVcIj4ge3tpdGVtLm1lbnV9fTwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbWVudS12dWU+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtUaW1lRm9ybWF0dGVyfSBmcm9tICdzaXRlLWNsL2pzL1RpbWVGb3JtYXR0ZXInO1xyXG4gIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG5cclxuICBleHBvcnQgY29uc3QgVEVYVF9UWVBFUyA9IFsndGV4dC9wbGFpbicsICd0ZXh0L2h0bWwnXVxyXG4gIGV4cG9ydCBjb25zdCBJTUdfVFlQRVMgPSBbJ2ltYWdlL3BuZycsICdpbWFnZS9qcGVnJywgJ2ltYWdlL2dpZiddO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2Fzc2lnbnRhZycsICd0YWcnLCAnc3VibWlzc2lvbicsICdhbmFseXNpcycsICd0ZWFtaW5nJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFx0cm9vdDogU2l0ZS5yb290LFxyXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy50b0Rvd25sb2FkID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZG93bmxvYWQvJHt0aGlzLnN1Ym1pc3Npb24uaWR9YDtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgaXNUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpc0ltYWdlKCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgIGxldCBkaXNwID0gVGltZUZvcm1hdHRlci5hYnNvbHV0ZVVOSVgodGhpcy5zdWJtaXNzaW9uLmRhdGUsIFwibG9uZ1wiKTtcclxuICAgICAgICAgICAgICBpZih0aGlzLnN1Ym1pc3Npb24ubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwICs9ICc6ICcgKyB0aGlzLnN1Ym1pc3Npb24ubmFtZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5ieSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgXHRkaXNwICs9ICcgYnkgJyArIHRoaXMuc3VibWlzc2lvbi5ieTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRpc3A7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VsZWN0VGV4dCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3JywgdGhpcy5zdWJtaXNzaW9uKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJldmlld19pbWcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNob3dBbmFseXNpcyhhbmFseXNpcykge1xyXG5cdCAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vYW5hbHlzaXMvJHt0aGlzLmFzc2lnbnRhZ30vJHt0aGlzLnRhZ30vJHthbmFseXNpcy50YWd9LyR7dGhpcy5zdWJtaXNzaW9uLmlkfWAsIHt9KVxyXG4gICAgICAgICAgXHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHRjb25zdCBhbmFseXNpc1Jlc3VsdCA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24tYW5hbHlzaXMnKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgXHQgICAgICAgIFx0dGhpcy4kZW1pdCgncmVzdWx0JywgYW5hbHlzaXNSZXN1bHQpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgIFx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHQgICAgfSlcclxuICAgICAgICAgIFx0ICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICBcdCAgICB9KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgcmVmPVwibWVudVwiIDpjbGFzcz1cInVzZUNsYXNzXCI+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmFsLXB1cnBvc2UgbWVudSBzeXN0ZW0gVnVlIGNvbXBvbmVudC5cclxuICAgICAqXHJcbiAgICAgKiBTdXBwb3J0cyBzaW1wbGUgbWVudXMgd2hlcmUgYSBjbGljayBvcGVucyBhbmQgY2xvc2VzIGEgcHVsbC1kb3duIG1lbnUuXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gSW5jbHVkZSB0aGlzIGNvbXBvbmVudFxyXG4gICAgICogaW1wb3J0IE1lbnVWdWUgZnJvbSAnc2l0ZS1jbC9qcy9VSS9NZW51LnZ1ZSc7XHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gQWRkIGFzIGEgY29tcG9uZW50IHRvIHRoZSBWdWU6XHJcbiAgICAgKiBjb21wb25lbnRzOiB7XHJcbiAgICAgKiAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAqIH0sXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gVXNlIGluIHRoZSB0ZW1wbGF0ZVxyXG4gICAgICogPG1lbnUtdnVlIHYtb246b3Blbj1cInNlbGVjdFwiPjxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiIGFsdD1cIk1lbnVcIj48L2E+XHJcbiAgICAgKiAgIDx1bD5cclxuICAgICAqICAgICA8bGk+PGE+Rmlyc3Qgb3B0aW9uPC9hPjwvbGk+XHJcbiAgICAgKiAgICAgPGxpPjxhPlNlY29uZCBvcHRpb248L2E+PC9saT5cclxuICAgICAqICAgPC91bD5cclxuICAgICAqIDwvbWVudS12dWU+XHJcbiAgICAgKiBAY29uc3RydWN0b3IgTWVudVZ1ZVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcdCAgcHJvcHM6IFsnYWRkQ2xhc3MnXSxcclxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFx0dXNlQ2xhc3M6ICdjbC1tZW51J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgXHQgIFx0ICBpZih0aGlzLmFkZENsYXNzICE9PSB1bmRlZmluZWQpIHtcclxuICAgIFx0ICBcdFx0ICB0aGlzLnVzZUNsYXNzICs9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIENvbGxlY3QgdXAgdGhlIGVsZW1lbnRzXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIGxldCBsaW5rcyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgdWxzID0gW107XHJcbiAgICAgICAgICAgIGxldCBvcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLiRyZWZzWydtZW51J10uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50YWdOYW1lID09PSAnQScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ1VMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVscy5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNsb3NlTGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIERpZCB3ZSBjbGljayBvbiBzb21ldGhpbmcgdGhhdCBpcyBhIGNoaWxkIG9mXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1lbnUgZGl2P1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIG9rYXkgd2l0aCBjbGlja3Mgb24gY2hpbGRyZW4gb2ZcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcG9wLXVwIG1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodWxzLmluZGV4T2YoZWxlbWVudCkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSB0aGlzLiRyZWZzWydtZW51J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGVsZW1lbnQgIT09IG51bGwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIENsb3NlIGFsbCBtZW51c1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBsZXQgY2xvc2VBbGwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHRpbWVvdXQgZW5zdXJlcyB0aGUgY2xpY2sgb25cclxuICAgICAgICAgICAgICAgIC8vIHRoZSBtZW51IGlzIHByb2Nlc3NlZCBiZWZvcmUgdGhlIG1lbnVcclxuICAgICAgICAgICAgICAgIC8vIGlzIGhpZGRlbi5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHVsIG9mIHVscykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgb3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gQ2xpY2sgbGlzdGVuZXJzIG9uIHRoZSBsaW5rc1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBjbGlja2VkIG9uIGEgbWVudSBsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gdGhlIG1lbnUhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB1bCBvZiB1bHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjbG9zZUxpc3RlbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSB0aGUgbWVudVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJtYXNrQ2xhc3NcIj48cCB2LWlmPVwic2xvdERlbGF5XCI+PHNsb3Q+PC9zbG90PjwvcD48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLyoqXHJcbiAgICogTWFza2luZyBWdWUgY29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogV2hlbiBlbmFibGVkLCBhIHRyYW5zbHVjZW50IG1hc2sgd2l0aCBhbiBvcHRpb25hbCBtZXNzYWdlXHJcbiAgICogaXMgZGlzcGxheWVkIGFuZCBjb250cm9scyBhcmUgZGlzYWJsZWQuXHJcbiAgICpcclxuICAgKiBNdXN0IGJlIGEgY2hpbGQgb2YgYW4gZWxlbWVudCB3aXRoIGEgcG9zaXRpb24gc2V0dGluZ1xyXG4gICAqIGluIENTUy4gV2hlbiBtYXNrIGlzIHRydWUsIHRoZSBpbnRlcmZhY2UgaXMgZGlzYWJsZWQgYnlcclxuICAgKiBhbiBvdmVybGF5IG1hc2suXHJcbiAgICogQGNvbnN0cnVjdG9yIE1hc2tWdWVcclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIEluY2x1ZGUgdGhpcyBjb21wb25lbnRcclxuICAgKiBpbXBvcnQgTWFza1Z1ZSBmcm9tICdzaXRlLWNsL2pzL1Z1ZS9NYXNrLnZ1ZSc7XHJcbiAgICogQGV4YW1wbGVcclxuICAgKiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAqICAgICAgICByZXR1cm4ge1xyXG4gICAqICAgICAgICAgICAgbWFzazogZmFsc2VcclxuICAgKiAgICAgICAgfVxyXG4gICAqICAgICB9LFxyXG4gICAqICAgICBjb21wb25lbnRzOiB7XHJcbiAgICogICAgICBtYXNrVnVlOiBNYXNrVnVlXHJcbiAgICogICAgIH1cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIDxtYXNrLXZ1ZSA6bWFzaz1cIm1hc2tcIj5TZW5kaW5nIEVtYWlsLi4uPC9tYXNrLXZ1ZT5cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIHRoaXMubWFzayA9IHRydWU7ICAvLyBFbmFibGUgdGhlIG1hc2tcclxuICAgKiB0aGlzLm1hc2sgPSBmYWxzZTsgLy8gRGlzYWJsZSB0aGUgbWFza1xyXG4gICAqL1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnbWFzayddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgXHRyZXR1cm4ge1xyXG4gICAgICBcdFx0c2xvdERlbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGltZXI6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdGNoOiB7XHJcbiAgICAgIFx0bWFzazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIFx0XHRpZih0aGlzLnRpbWVyICE9PSBudWxsKSB7XHJcbiAgICAgIFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgXHRcdFx0dGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zbG90RGVsYXkgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIFx0dGhpcy5zbG90RGVsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgICAgbWFza0NsYXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXNrID8gJ2NsLW1hc2sgbWFzaycgOiAnY2wtbWFzaydcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxuYXYgY2xhc3M9XCJjbC1uYXZcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bCBjbGFzcz1cImRpdmlkZXJzXCI+XHJcbiAgICAgICAgPGxpPjxhIDpocmVmPVwiaG9tZUxpbmtcIj48c3BhbiBjbGFzcz1cImhvbWVcIj5Ib21lPC9zcGFuPjwvYT48L2xpPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gbWVudVwiPjxhIEBjbGljay5wcmV2ZW50PVwiaXRlbS5jbGljaygpXCI+e3tpdGVtLm5hbWV9fTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnbWVudSddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6IFNpdGUucm9vdCArICcvJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8c2NyaXB0PlxyXG5cdC8qKlxyXG4gICAqIEJhc2UgY29tcG9uZW50IGZvciBwYWdlcy5cclxuICAgKiBAY29uc3RydWN0b3IgUGFnZVZ1ZUJhc2VcclxuICAgKi9cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICogU2l0ZSBvYmplY3RcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZUJhc2VcclxuICAgICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgKiBAbWVtYmVyIHtTaXRlfSBzaXRlXHJcbiAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgc2l0ZTogU2l0ZSxcclxuXHQgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgKiBTaXRlIHJvb3QgcGF0aCAoU2l0ZS5yb290KVxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXJvZiBQYWdlVnVlQmFzZVxyXG4gICAgICAgICAgICAgICAqIEBpbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30gcm9vdFxyXG4gICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgIHJvb3Q6IFNpdGUucm9vdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblx0ICAgICAgICAvKipcclxuICAgICAgICAgICAqIFNldCB0aGUgcGFnZSB0aXRsZVxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIFBhZ2VWdWVCYXNlXHJcbiAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZVxyXG5cdCAgICAgICAgICovXHJcbiAgICAgICAgICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSh0aXRsZSk7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZldGNoaW5nXCIgdi1pZj1cImRlbGF5ZWRGZXRjaGluZ1wiPlxyXG4gICAgICA8cD5GZXRjaGluZyBmcm9tIHNlcnZlci4uLjwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHNsb3Qgdi1pZj1cIihmZXRjaGVyID09PSBudWxsIHx8ICFmZXRjaGVyLmZldGNoaW5nKSAmJiAhZmV0Y2hpbmdcIj48L3Nsb3Q+XHJcbiAgICA8cCBjbGFzcz1cIm1vcmVcIiB2LWlmPVwiZmV0Y2hlciAhPT0gbnVsbCAmJiBmZXRjaGVyLm1vcmVcIj48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZmV0Y2hNb3JlXCI+TU9SRTwvYnV0dG9uPjwvcD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLyoqXHJcbiAgICogQGZpbGVcclxuICAgKiBGZXRjaGVyIGNvbXBvbmVudCBkaXNwbGF5cyBcIkZldGNoaW5nXCIgYW5kIGEgXCJtb3JlXCIgYnV0dG9uLlxyXG4gICAqL1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVyIGZ1bmN0aW9uIHVzZWQgdG8gdXBkYXRlIHRoaXMgb2JqZWN0LlxyXG4gICAqIEBjb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGV4cG9ydCBsZXQgRmV0Y2hlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLm1vcmUgPSBmYWxzZTsgICAgICAgLy8gSW5kaWNhdGVzIHRoZXJlIGlzIG1vcmUgdG8gZmV0Y2hcclxuICAgICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlOyAgLy8gU2V0IHRydWUgd2hpbGUgd2UgYXJlIGZldGNoaW5nXHJcbiAgICAgIHRoaXMuZmV0Y2hlZCA9IGZhbHNlOyAgIC8vIFNldCB0cnVlIHdoZW4gd2UgaGF2ZSBmZXRjaGVkIHNvbWV0aGluZy4uLlxyXG5cclxuICAgICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKHNpbmdsZSkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYoc2luZ2xlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5tb3JlID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZG9uZSA9IGZ1bmN0aW9uKHNpbmdsZSkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGlmKHNpbmdsZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuZmV0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHRoaXMubW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mZXRjaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5mZXRjaGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGZldGNoZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAnZGVmYXVsdCc6IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZldGNoaW5nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgJ2ZldGNoZXIuZmV0Y2hpbmcnOiBmdW5jdGlvbih0bywgZnJvbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmV0Y2hpbmcoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZldGNoaW5nOiBmdW5jdGlvbih0bywgZnJvbSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2V0RmV0Y2hpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgc2hvd0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICBkZWxheWVkRmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVyOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEZldGNoaW5nKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGZldGNoTW9yZSgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRwYXJlbnQuZmV0Y2hNb3JlKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2V0RmV0Y2hpbmcoKSB7XHJcbiAgICAgICAgICAgICAgLy8gQXJlIHdlIGN1cnJlbnRseSBmZXRjaGluZz9cclxuICAgICAgICAgICAgICBsZXQgc2hvd0ZldGNoaW5nID0gKHRoaXMuZmV0Y2hlciAhPT0gbnVsbCAmJiB0aGlzLmZldGNoZXIuZmV0Y2hpbmcpIHx8IHRoaXMuZmV0Y2hpbmc7XHJcbiAgICAgICAgICAgICAgaWYoc2hvd0ZldGNoaW5nICYmICF0aGlzLnNob3dGZXRjaGluZykge1xyXG4gICAgICAgICAgICAgICAgICAvLyBGZXRjaGluZyBpcyBiZWNvbWluZyBhY3RpdmVcclxuICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheWVkRmV0Y2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZighc2hvd0ZldGNoaW5nICYmIHRoaXMuc2hvd0ZldGNoaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheWVkRmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmV0Y2hpbmcgPSBzaG93RmV0Y2hpbmc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9O1xyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9zaXRlL3Nhc3MvbW9kdWxlcy9fY29sb3JzJztcclxuXHJcbmRpdi5mZXRjaGluZyB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbjogMWVtIDA7XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICRjb21wO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuPC9zdHlsZT4iLCI8IS0tXHJcbkBmaWxlXHJcbkJhc2UgY29tcG9uZW50IGZvciBwYWdlcyB0aGF0IGluY2x1ZGVzIHN1cHBvcnQgZm9yIHRoaXMudXNlclxyXG5cclxuUHJvdmlkZXM6XHJcbnNldFRpdGxlXHJcbnRoaXMucm9vdFxyXG4tLT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgUGFnZVZ1ZUJhc2UgZnJvbSAnc2l0ZS1jbC9qcy9WdWUvUGFnZVZ1ZUJhc2UudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgJ2V4dGVuZHMnOiBQYWdlVnVlQmFzZSxcclxuICAgICAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIFx0dXNlcigpIHtcclxuICAgICAgICBcdFx0cmV0dXJuICB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmNsLWVkaXRvciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiA1ZW07XFxuICBoZWlnaHQ6IDEwZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbjogMWVtIDA7XFxufVxcblxcbmRpdi5jbC1lZGl0b3IgdGV4dGFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50YWJsZSB0ciB0ZFtkYXRhLXYtZmUzZjk4ZThdOm50aC1jaGlsZCgyKSB7XFxuICBtaW4td2lkdGg6IDE5NXB4O1xcbn1cXG5idXR0b25bZGF0YS12LWZlM2Y5OGU4XSB7XFxuICB3aWR0aDogN2VtO1xcbn1cXG5pbnB1dFt0eXBlPWVtYWlsXVtkYXRhLXYtZmUzZjk4ZThdIHtcXG4gIHdpZHRoOiAxNzVweDtcXG59XFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYuZmV0Y2hpbmdbZGF0YS12LTQzYjI2YmNiXSB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW46IDFlbSAwO1xcbn1cXG5kaXYuZmV0Y2hpbmcgcFtkYXRhLXYtNDNiMjZiY2JdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiAjYzQxNDI1O1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG59XFxuLm1vcmVbZGF0YS12LTQzYjI2YmNiXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb3JlIGJ1dHRvbltkYXRhLXYtNDNiMjZiY2JdIHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hZlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYWYuanNcIixcblx0XCIuL2FmLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hZi5qc1wiLFxuXHRcIi4vYXJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLmpzXCIsXG5cdFwiLi9hci1kelwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItZHouanNcIixcblx0XCIuL2FyLWR6LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1kei5qc1wiLFxuXHRcIi4vYXIta3dcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWt3LmpzXCIsXG5cdFwiLi9hci1rdy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIta3cuanNcIixcblx0XCIuL2FyLWx5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1seS5qc1wiLFxuXHRcIi4vYXItbHkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLWx5LmpzXCIsXG5cdFwiLi9hci1tYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItbWEuanNcIixcblx0XCIuL2FyLW1hLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci1tYS5qc1wiLFxuXHRcIi4vYXItc2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXNhLmpzXCIsXG5cdFwiLi9hci1zYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXItc2EuanNcIixcblx0XCIuL2FyLXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hci10bi5qc1wiLFxuXHRcIi4vYXItdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2FyLXRuLmpzXCIsXG5cdFwiLi9hci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYXIuanNcIixcblx0XCIuL2F6XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9hei5qc1wiLFxuXHRcIi4vYXouanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2F6LmpzXCIsXG5cdFwiLi9iZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmUuanNcIixcblx0XCIuL2JlLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9iZS5qc1wiLFxuXHRcIi4vYmdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JnLmpzXCIsXG5cdFwiLi9iZy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYmcuanNcIixcblx0XCIuL2JtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibS5qc1wiLFxuXHRcIi4vYm0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JtLmpzXCIsXG5cdFwiLi9iblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm4uanNcIixcblx0XCIuL2JuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ibi5qc1wiLFxuXHRcIi4vYm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JvLmpzXCIsXG5cdFwiLi9iby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYm8uanNcIixcblx0XCIuL2JyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ici5qc1wiLFxuXHRcIi4vYnIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2JyLmpzXCIsXG5cdFwiLi9ic1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvYnMuanNcIixcblx0XCIuL2JzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9icy5qc1wiLFxuXHRcIi4vY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NhLmpzXCIsXG5cdFwiLi9jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY2EuanNcIixcblx0XCIuL2NzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jcy5qc1wiLFxuXHRcIi4vY3MuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2NzLmpzXCIsXG5cdFwiLi9jdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3YuanNcIixcblx0XCIuL2N2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9jdi5qc1wiLFxuXHRcIi4vY3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2N5LmpzXCIsXG5cdFwiLi9jeS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvY3kuanNcIixcblx0XCIuL2RhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kYS5qc1wiLFxuXHRcIi4vZGEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RhLmpzXCIsXG5cdFwiLi9kZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUuanNcIixcblx0XCIuL2RlLWF0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1hdC5qc1wiLFxuXHRcIi4vZGUtYXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLWF0LmpzXCIsXG5cdFwiLi9kZS1jaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZGUtY2guanNcIixcblx0XCIuL2RlLWNoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kZS1jaC5qc1wiLFxuXHRcIi4vZGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2RlLmpzXCIsXG5cdFwiLi9kdlwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZHYuanNcIixcblx0XCIuL2R2LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9kdi5qc1wiLFxuXHRcIi4vZWxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VsLmpzXCIsXG5cdFwiLi9lbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZWwuanNcIixcblx0XCIuL2VuLWF1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1hdS5qc1wiLFxuXHRcIi4vZW4tYXUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWF1LmpzXCIsXG5cdFwiLi9lbi1jYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tY2EuanNcIixcblx0XCIuL2VuLWNhLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1jYS5qc1wiLFxuXHRcIi4vZW4tZ2JcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWdiLmpzXCIsXG5cdFwiLi9lbi1nYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tZ2IuanNcIixcblx0XCIuL2VuLWllXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pZS5qc1wiLFxuXHRcIi4vZW4taWUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLWllLmpzXCIsXG5cdFwiLi9lbi1pbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4taWwuanNcIixcblx0XCIuL2VuLWlsLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lbi1pbC5qc1wiLFxuXHRcIi4vZW4tbnpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VuLW56LmpzXCIsXG5cdFwiLi9lbi1uei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZW4tbnouanNcIixcblx0XCIuL2VvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lby5qc1wiLFxuXHRcIi4vZW8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VvLmpzXCIsXG5cdFwiLi9lc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMuanNcIixcblx0XCIuL2VzLWRvXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy1kby5qc1wiLFxuXHRcIi4vZXMtZG8uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLWRvLmpzXCIsXG5cdFwiLi9lcy11c1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXMtdXMuanNcIixcblx0XCIuL2VzLXVzLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9lcy11cy5qc1wiLFxuXHRcIi4vZXMuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2VzLmpzXCIsXG5cdFwiLi9ldFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXQuanNcIixcblx0XCIuL2V0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ldC5qc1wiLFxuXHRcIi4vZXVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2V1LmpzXCIsXG5cdFwiLi9ldS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZXUuanNcIixcblx0XCIuL2ZhXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mYS5qc1wiLFxuXHRcIi4vZmEuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZhLmpzXCIsXG5cdFwiLi9maVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZmkuanNcIixcblx0XCIuL2ZpLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9maS5qc1wiLFxuXHRcIi4vZm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZvLmpzXCIsXG5cdFwiLi9mby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZm8uanNcIixcblx0XCIuL2ZyXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci5qc1wiLFxuXHRcIi4vZnItY2FcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNhLmpzXCIsXG5cdFwiLi9mci1jYS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnItY2EuanNcIixcblx0XCIuL2ZyLWNoXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9mci1jaC5qc1wiLFxuXHRcIi4vZnItY2guanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ZyLWNoLmpzXCIsXG5cdFwiLi9mci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZnIuanNcIixcblx0XCIuL2Z5XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9meS5qc1wiLFxuXHRcIi4vZnkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2Z5LmpzXCIsXG5cdFwiLi9nZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2QuanNcIixcblx0XCIuL2dkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nZC5qc1wiLFxuXHRcIi4vZ2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dsLmpzXCIsXG5cdFwiLi9nbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ2wuanNcIixcblx0XCIuL2dvbS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9nb20tbGF0bi5qc1wiLFxuXHRcIi4vZ29tLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2dvbS1sYXRuLmpzXCIsXG5cdFwiLi9ndVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvZ3UuanNcIixcblx0XCIuL2d1LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ndS5qc1wiLFxuXHRcIi4vaGVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hlLmpzXCIsXG5cdFwiLi9oZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaGUuanNcIixcblx0XCIuL2hpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oaS5qc1wiLFxuXHRcIi4vaGkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2hpLmpzXCIsXG5cdFwiLi9oclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHIuanNcIixcblx0XCIuL2hyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oci5qc1wiLFxuXHRcIi4vaHVcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h1LmpzXCIsXG5cdFwiLi9odS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaHUuanNcIixcblx0XCIuL2h5LWFtXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9oeS1hbS5qc1wiLFxuXHRcIi4vaHktYW0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2h5LWFtLmpzXCIsXG5cdFwiLi9pZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaWQuanNcIixcblx0XCIuL2lkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pZC5qc1wiLFxuXHRcIi4vaXNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2lzLmpzXCIsXG5cdFwiLi9pcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvaXMuanNcIixcblx0XCIuL2l0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9pdC5qc1wiLFxuXHRcIi4vaXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2l0LmpzXCIsXG5cdFwiLi9qYVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvamEuanNcIixcblx0XCIuL2phLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9qYS5qc1wiLFxuXHRcIi4vanZcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2p2LmpzXCIsXG5cdFwiLi9qdi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvanYuanNcIixcblx0XCIuL2thXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rYS5qc1wiLFxuXHRcIi4va2EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2thLmpzXCIsXG5cdFwiLi9ra1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva2suanNcIixcblx0XCIuL2trLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ray5qc1wiLFxuXHRcIi4va21cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2ttLmpzXCIsXG5cdFwiLi9rbS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva20uanNcIixcblx0XCIuL2tuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rbi5qc1wiLFxuXHRcIi4va24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2tuLmpzXCIsXG5cdFwiLi9rb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva28uanNcIixcblx0XCIuL2tvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9rby5qc1wiLFxuXHRcIi4va3lcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2t5LmpzXCIsXG5cdFwiLi9reS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUva3kuanNcIixcblx0XCIuL2xiXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sYi5qc1wiLFxuXHRcIi4vbGIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2xiLmpzXCIsXG5cdFwiLi9sb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbG8uanNcIixcblx0XCIuL2xvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sby5qc1wiLFxuXHRcIi4vbHRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x0LmpzXCIsXG5cdFwiLi9sdC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbHQuanNcIixcblx0XCIuL2x2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9sdi5qc1wiLFxuXHRcIi4vbHYuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL2x2LmpzXCIsXG5cdFwiLi9tZVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWUuanNcIixcblx0XCIuL21lLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tZS5qc1wiLFxuXHRcIi4vbWlcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21pLmpzXCIsXG5cdFwiLi9taS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWkuanNcIixcblx0XCIuL21rXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tay5qc1wiLFxuXHRcIi4vbWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21rLmpzXCIsXG5cdFwiLi9tbFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbWwuanNcIixcblx0XCIuL21sLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tbC5qc1wiLFxuXHRcIi4vbW5cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21uLmpzXCIsXG5cdFwiLi9tbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbW4uanNcIixcblx0XCIuL21yXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tci5qc1wiLFxuXHRcIi4vbXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21yLmpzXCIsXG5cdFwiLi9tc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL21zLW15XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tcy1teS5qc1wiLFxuXHRcIi4vbXMtbXkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL21zLW15LmpzXCIsXG5cdFwiLi9tcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXMuanNcIixcblx0XCIuL210XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9tdC5qc1wiLFxuXHRcIi4vbXQuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL210LmpzXCIsXG5cdFwiLi9teVwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbXkuanNcIixcblx0XCIuL215LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9teS5qc1wiLFxuXHRcIi4vbmJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25iLmpzXCIsXG5cdFwiLi9uYi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmIuanNcIixcblx0XCIuL25lXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9uZS5qc1wiLFxuXHRcIi4vbmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25lLmpzXCIsXG5cdFwiLi9ubFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25sLWJlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubC1iZS5qc1wiLFxuXHRcIi4vbmwtYmUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25sLWJlLmpzXCIsXG5cdFwiLi9ubC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvbmwuanNcIixcblx0XCIuL25uXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ubi5qc1wiLFxuXHRcIi4vbm4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL25uLmpzXCIsXG5cdFwiLi9wYS1pblwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGEtaW4uanNcIixcblx0XCIuL3BhLWluLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wYS1pbi5qc1wiLFxuXHRcIi4vcGxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3BsLmpzXCIsXG5cdFwiLi9wbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcGwuanNcIixcblx0XCIuL3B0XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcHQtYnJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3B0LWJyLmpzXCIsXG5cdFwiLi9wdC1ici5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcHQtYnIuanNcIixcblx0XCIuL3B0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9wdC5qc1wiLFxuXHRcIi4vcm9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3JvLmpzXCIsXG5cdFwiLi9yby5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvcm8uanNcIixcblx0XCIuL3J1XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qc1wiLFxuXHRcIi4vcnUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3J1LmpzXCIsXG5cdFwiLi9zZFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2QuanNcIixcblx0XCIuL3NkLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zZC5qc1wiLFxuXHRcIi4vc2VcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NlLmpzXCIsXG5cdFwiLi9zZS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2UuanNcIixcblx0XCIuL3NpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zaS5qc1wiLFxuXHRcIi4vc2kuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NpLmpzXCIsXG5cdFwiLi9za1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2suanNcIixcblx0XCIuL3NrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zay5qc1wiLFxuXHRcIi4vc2xcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NsLmpzXCIsXG5cdFwiLi9zbC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc2wuanNcIixcblx0XCIuL3NxXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zcS5qc1wiLFxuXHRcIi4vc3EuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NxLmpzXCIsXG5cdFwiLi9zclwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3IuanNcIixcblx0XCIuL3NyLWN5cmxcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLWN5cmwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NyLWN5cmwuanNcIixcblx0XCIuL3NyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zci5qc1wiLFxuXHRcIi4vc3NcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3NzLmpzXCIsXG5cdFwiLi9zcy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3MuanNcIixcblx0XCIuL3N2XCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdi5qc1wiLFxuXHRcIi4vc3YuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3N2LmpzXCIsXG5cdFwiLi9zd1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvc3cuanNcIixcblx0XCIuL3N3LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9zdy5qc1wiLFxuXHRcIi4vdGFcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RhLmpzXCIsXG5cdFwiLi90YS5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGEuanNcIixcblx0XCIuL3RlXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZS5qc1wiLFxuXHRcIi4vdGUuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RlLmpzXCIsXG5cdFwiLi90ZXRcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RldC5qc1wiLFxuXHRcIi4vdGV0LmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90ZXQuanNcIixcblx0XCIuL3RnXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90Zy5qc1wiLFxuXHRcIi4vdGcuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RnLmpzXCIsXG5cdFwiLi90aFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGguanNcIixcblx0XCIuL3RoLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90aC5qc1wiLFxuXHRcIi4vdGwtcGhcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsLXBoLmpzXCIsXG5cdFwiLi90bC1waC5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGwtcGguanNcIixcblx0XCIuL3RsaFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdGxoLmpzXCIsXG5cdFwiLi90bGguanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RsaC5qc1wiLFxuXHRcIi4vdHJcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3RyLmpzXCIsXG5cdFwiLi90ci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHIuanNcIixcblx0XCIuL3R6bFwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdHpsLmpzXCIsXG5cdFwiLi90emwuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bC5qc1wiLFxuXHRcIi4vdHptXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0uanNcIixcblx0XCIuL3R6bS1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS90em0tbGF0bi5qc1wiLFxuXHRcIi4vdHptLWxhdG4uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS1sYXRuLmpzXCIsXG5cdFwiLi90em0uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3R6bS5qc1wiLFxuXHRcIi4vdWctY25cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VnLWNuLmpzXCIsXG5cdFwiLi91Zy1jbi5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdWctY24uanNcIixcblx0XCIuL3VrXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ay5qc1wiLFxuXHRcIi4vdWsuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3VrLmpzXCIsXG5cdFwiLi91clwiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXIuanNcIixcblx0XCIuL3VyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ci5qc1wiLFxuXHRcIi4vdXpcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3V6LmpzXCIsXG5cdFwiLi91ei1sYXRuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei1sYXRuLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS91ei1sYXRuLmpzXCIsXG5cdFwiLi91ei5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvdXouanNcIixcblx0XCIuL3ZpXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS92aS5qc1wiLFxuXHRcIi4vdmkuanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3ZpLmpzXCIsXG5cdFwiLi94LXBzZXVkb1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveC1wc2V1ZG8uanNcIixcblx0XCIuL3gtcHNldWRvLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS94LXBzZXVkby5qc1wiLFxuXHRcIi4veW9cIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3lvLmpzXCIsXG5cdFwiLi95by5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUveW8uanNcIixcblx0XCIuL3poLWNuXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1jbi5qc1wiLFxuXHRcIi4vemgtY24uanNcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLWNuLmpzXCIsXG5cdFwiLi96aC1oa1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtaGsuanNcIixcblx0XCIuL3poLWhrLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS96aC1oay5qc1wiLFxuXHRcIi4vemgtdHdcIjogXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlL3poLXR3LmpzXCIsXG5cdFwiLi96aC10dy5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL21vbWVudC9sb2NhbGUvemgtdHcuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9tb21lbnQvbG9jYWxlIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmdWxsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJtYXNrLXZ1ZVwiLCB7IGF0dHJzOiB7IG1hc2s6IF92bS5tYXNrIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkNvbW11bmljYXRpbmcgd2l0aCBzZXJ2ZXIuLi5cIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJBcyBwcm92aWRlZCBieSB0aGUgcmVnaXN0cmFycyBvZmZpY2VcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiVXNlciBJRFwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIudXNlcklkKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJBcyBwcm92aWRlZCBieSB0aGUgcmVnaXN0cmFycyBvZmZpY2VcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uZWRpdGluZ1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSldKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBzcGVsbGNoZWNrOiBcImZhbHNlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWW91IGFyZSBhbGxvd2VkIHRvIGNoYW5nZSB5b3VyIGVtYWlsIGFkZHJlc3NcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2VtZXN0ZXJcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm1lbWJlci5zZW1lc3RlcikpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiU2VjdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubWVtYmVyLnNlY3Rpb24pKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIsKgXCIpXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICFfdm0uZWRpdGluZ1xuICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJidXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTdWJtaXRcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW5jZWwoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pLFxuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2wtc3VibWlzc2lvblwiIH0sXG4gICAgW1xuICAgICAgX3ZtLnN1Ym1pc3Npb24uc3VibWl0XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0uc3VibWlzc2lvbi5vcGVuXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBjb21wIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaGlzIGFzc2lnbm1lbnQgaXMgbm90IG9wZW4gZm9yIHN1Ym1pc3Npb25zLlwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YWZmXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJib3ggcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhfdm0uc3VibWl0dGVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgbmV3X3N1Ym1pc3Npb25zOiBfdm0ubmV3U3VibWlzc2lvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLm9wZW5cbiAgICAgICAgICAgICAgICA/IF9jKF92bS5zdWJtaXR0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBuZXdfc3VibWlzc2lvbnM6IF92bS5uZXdTdWJtaXNzaW9ucyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3VibWl0dGVkXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3VibWlzc2lvbjogX3ZtLnN1Ym1pc3Npb24sIHN1Ym1pc3Npb25zOiBfdm0uc3VibWlzc2lvbnMgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnN1Ym1pc3Npb24uYWRkaXRpb25hbCAhPT0gbnVsbFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdWJtaXNzaW9uLmFkZGl0aW9uYWwpIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIi4uLlN0YWZmIG9ubHkgZm9yIHN1Ym1pc3Npb24gdGVzdGluZy4uLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgdGFyZ2V0OiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1Ym1pdDogXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5maWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBuYW1lOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVcGxvYWQgRmlsZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICByZWY6IFwiaWZyYW1lXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWcsIHNyYzogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5sb2FkIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgcmVmOiBcImZvcm1cIixcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICAgIHRhcmdldDogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IHN1Ym1pdDogX3ZtLnN1Ym1pdCB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImxhYmVsXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJTdWJtaXQ6IFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZmlsZXMgPSAkZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidXBsb2FkXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgbmFtZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiVXBsb2FkIEZpbGVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlmcmFtZVwiLCB7XG4gICAgICAgICAgcmVmOiBcImlmcmFtZVwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIwXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgYm9yZGVyOiBcIjBweCBzb2xpZCAjZmZmXCIsXG4gICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRfdGFyZ2V0X1wiICsgX3ZtLnN1Ym1pc3Npb24udGFnLCBzcmM6IFwiXCIgfSxcbiAgICAgICAgICBvbjogeyBsb2FkOiBfdm0ubG9hZCB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7IG1ldGhvZDogXCJwb3N0XCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJkaXZcIiwgeyByZWY6IFwiZWRpdG9yXCIgfSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlN1Ym1pdFwiIH0gfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInNob3V0b3V0XCIgfSwgW1xuICAgICAgX3ZtLl92KFwiU3VibWlzc2lvbiB0eXBlIFwiKSxcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9wdGlvbnMudHlwZSkpXSksXG4gICAgICBfdm0uX3YoXCIgaXMgbm90IHN1cHBvcnRlZFwiKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1xuICAgICAgICBfdm0uc3VibWlzc2lvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhcmdlIGNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBzdWJtaXNzaW9ucywgeWV0LlwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3VibWlzc2lvbnMsIGZ1bmN0aW9uKHN1Ym1pdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3VibWl0dGVkLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5zdWJtaXNzaW9uLmFzc2lnblRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogX3ZtLnN1Ym1pc3Npb24udGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWlzc2lvbjogc3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzaXM6IF92bS5zdWJtaXNzaW9uLmFuYWx5c2lzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbWluZzogX3ZtLnN1Ym1pc3Npb24udGVhbWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogX3ZtLmFuYWx5c2lzUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld19pbWc6IF92bS5wcmV2aWV3X2ltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IF92bS5wcmV2aWV3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcmV2aWV3VHh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3LXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldmlld1RpbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnJlc3VsdCAhPT0gbnVsbFxuICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWFuYWx5c2lzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdCkpXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJldmlld0ltZyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXCJmaWd1cmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlld0ltZyB9IH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJldmlld1RpbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtfYyhcInRoXCIsIFtfdm0uX3YoXCJTdWJtaXNzaW9uc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmlzVGV4dCgpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdFRleHQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0uaXNJbWFnZSgpXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1lbnUtdnVlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLCBvbjogeyBvcGVuOiBfdm0uc2VsZWN0IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnRvRG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVudSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXCJtZW51LXZ1ZVwiLCB7IG9uOiB7IG9wZW46IF92bS5zZWxlY3QgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaWNvbiwgYWx0OiBpdGVtLm1lbnUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyByZWY6IFwibWVudVwiLCBjbGFzczogX3ZtLnVzZUNsYXNzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5tYXNrQ2xhc3MgfSwgW1xuICAgIF92bS5zbG90RGVsYXkgPyBfYyhcInBcIiwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubWVudSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5kZWxheWVkRmV0Y2hpbmdcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZldGNoaW5nXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJGZXRjaGluZyBmcm9tIHNlcnZlci4uLlwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAoX3ZtLmZldGNoZXIgPT09IG51bGwgfHwgIV92bS5mZXRjaGVyLmZldGNoaW5nKSAmJiAhX3ZtLmZldGNoaW5nXG4gICAgICAgID8gX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5mZXRjaGVyICE9PSBudWxsICYmIF92bS5mZXRjaGVyLm1vcmVcbiAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtb3JlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZldGNoTW9yZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiTU9SRVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImU3YTE4NTVlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlM2Y5OGU4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00M2IyNmJjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ1MWVjMWE0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQzYjI2YmNiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00M2IyNmJjYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKipcclxuICogQGZpbGVcclxuICovXHJcbmltcG9ydCB7U2VjdGlvblN0YXR1c30gZnJvbSAnLi9qcy9TZWN0aW9uU3RhdHVzJztcclxuaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4vanMvTWVtYmVycy9NZW1iZXInO1xyXG5cclxuZXhwb3J0IHtTZWN0aW9uU3RhdHVzfTtcclxuZXhwb3J0IHtNZW1iZXJ9O1xyXG5cclxuaW1wb3J0IHtDb3Vyc2VGYWN0b3J5fSBmcm9tICcuL2pzL0NvdXJzZUZhY3RvcnknO1xyXG5cclxuLy8gVXNlIHRoZSBmYWN0b3J5IHRvIGNyZWF0ZSB0aGUgVXNlcnMgb2JqZWN0XHJcbmxldCBDb3Vyc2UgPSBDb3Vyc2VGYWN0b3J5LmNyZWF0ZShTaXRlLlNpdGUpO1xyXG5leHBvcnQge0NvdXJzZX07XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWJvdXRNZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmUzZjk4ZTgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmUzZjk4ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmZTNmOThlOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZTNmOThlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZTNmOThlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWJvdXRNZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmUzZjk4ZTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmUzZjk4ZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQWJvdXRNZS9BYm91dE1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmUzZjk4ZTgmc2NvcGVkPXRydWUmXCIiLCIvKipcclxuICogQGZpbGVcclxuICogRmFjdG9yeSB0byBjcmVhdGUgdGhlIENvdXJzZSBvYmplY3QuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4vTWVtYmVycy9NZW1iZXIuanMnO1xyXG5cclxuaW1wb3J0IHtTdG9yZU1vZHVsZUNvdXJzZX0gZnJvbSAnLi9TdGF0ZS9TdG9yZU1vZHVsZUNvdXJzZSc7XHJcbmltcG9ydCB7U3RvcmVNb2R1bGVVc2Vyc30gZnJvbSAndXNlcnMtY2wvanMvU3RvcmVNb2R1bGVVc2Vycyc7XHJcbmltcG9ydCB7U2VjdGlvblNlbGVjdG9yfSBmcm9tICcuL1NlY3Rpb25TZWxlY3RvcnMvU2VjdGlvblNlbGVjdG9yJztcclxuaW1wb3J0IHtTdWJtaXNzaW9ufSBmcm9tICcuL1N1Ym1pc3Npb24vU3VibWlzc2lvbic7XHJcbmltcG9ydCB7RXJyb3JIZWxwfSBmcm9tICcuL0Vycm9ySGVscC9FcnJvckhlbHAnO1xyXG5pbXBvcnQge1Nwb29maW5nUmVzdG9yZX0gZnJvbSAnLi9VdGlsL1Nwb29maW5nUmVzdG9yZSc7XHJcbmltcG9ydCBBYm91dE1lVnVlIGZyb20gJy4vQWJvdXRNZS9BYm91dE1lLnZ1ZSc7XHJcbmltcG9ydCB7UGFnZVZ1ZX0gZnJvbSAnc2l0ZS1jbC9qcy9WdWUvUGFnZVZ1ZSc7XHJcbmltcG9ydCBQYWdlTmF2IGZyb20gJ3NpdGUtY2wvanMvVnVlL1BhZ2VOYXYudnVlJztcclxuXHJcbmxldCBDb3Vyc2VGYWN0b3J5ID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBDb3Vyc2Ugb2JqZWN0LlxyXG4gKlxyXG4gKiBUaGlzIGFsbG93cyBmb3IgaW5qZWN0aW9uIG9mIHRoZSBzdG9yZSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmUgb2JqZWN0XHJcbiAqIEByZXR1cm5zIHtDb3Vyc2V9IG9iamVjdC5cclxuICovXHJcbkNvdXJzZUZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIGxldCBDb3Vyc2UgPSBmdW5jdGlvbigpIHtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQ291cnNlRmFjdG9yeScpO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBNb2RpZnkgVXNlciB0byBhZGQgdGhlIGFiaWxpdHkgdG8gaW5zdGFudGlhdGVcclxuICAgIC8vIGFuIGFwcHJvcHJpYXRlIE1lbWJlciBvYmplY3RcclxuICAgIC8vXHJcbiAgICBVc2Vycy5Vc2VyLmluc3RhbnRpYXRlTWVtYmVyID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEubWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVtYmVyKGRhdGEubWVtYmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIC8vIEluc3RhbGwgdGhlIGNvdXJzZSBzdG9yZSBtb2R1bGVzXHJcbiAgICAvL1xyXG4gICAgbGV0IHN0b3JlID0gc2l0ZS5zdG9yZTtcclxuICAgIGlmKHN0b3JlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBzdG9yZS5yZWdpc3Rlck1vZHVsZSgnY291cnNlJywgU3RvcmVNb2R1bGVDb3Vyc2UpO1xyXG4gICAgICAgIHN0b3JlLnJlZ2lzdGVyTW9kdWxlKCdtZW1iZXJzJywgU3RvcmVNb2R1bGVVc2Vycy5jcmVhdGUoXHJcbiAgICAgICAgICAgICcvYXBpL2NvdXJzZS9tZW1iZXJzJyxcclxuICAgICAgICAgICAgKHVzZXIpID0+IHtyZXR1cm4gdXNlci5tZW1iZXIuaWQ7IH1cclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBzaXRlLnJlYWR5KCgpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIERldGVjdCB0aGUgcGFzc2VkIGluIGNvdXJzZSBkZWZpbml0aW9uIGluZm9ybWF0aW9uXHJcbiAgICAgICAgLy8gYW5kIGFkZCBpdCB0byB0aGUgc3RvcmUuXHJcbiAgICAgICAgLy9cclxuXHJcbiAgICAgICAgbGV0IGVuO1xyXG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtY291cnNlJykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnY291cnNlL3NldCcsIEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtY291cnNlLXN0YWZmJykpKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnY291cnNlL3NldFN0YWZmJywgSlNPTi5wYXJzZShlbi50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBXZSBoYXZlIG1vZGlmaWVkIHRoZSBVc2VyIG9iamVjdCBzbyB0aGF0IGl0IHdpbGwga25vd1xyXG4gICAgICAgIC8vIGhvdyB0byBhdHRhY2ggYSBtZW1iZXJzaGlwLiBUaGlzIG1lYW5zIHdlIG11c3QgcmVsb2FkXHJcbiAgICAgICAgLy8gdGhlIHVzZXIgaW5mb3JtYXRpb24gc28gaXQgY2FuIGNyZWF0ZSBhIG5ldyBvYmplY3RcclxuICAgICAgICAvL1xyXG4gICAgICAgIGlmKCAoZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2wtdXNlcicpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ3VzZXIvc2V0JywgSlNPTi5wYXJzZShlbi50ZXh0Q29udGVudCkpO1xyXG4gICAgICAgIH1cclxuXHJcblx0ICAgIFBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtY291cnNlLWFib3V0bWUnLCAnRXhhbXBsZSBWdWUnLCBBYm91dE1lVnVlLCBQYWdlTmF2KTtcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIHNpdGUuc3RhcnQoKCkgPT4ge1xyXG4gICAgICAgIFNlY3Rpb25TZWxlY3Rvci5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIFN1Ym1pc3Npb24uaW5zdGFsbChzaXRlKTtcclxuICAgICAgICBFcnJvckhlbHAuaW5zdGFsbChzaXRlKTtcclxuICAgICAgICBTcG9vZmluZ1Jlc3RvcmUuaW5zdGFsbChzaXRlKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIENvdXJzZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7Q291cnNlRmFjdG9yeX07XHJcblxyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBFcnJvckhlbHAgPSBmdW5jdGlvbihlbGVtZW50LCBzaXRlKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgaWYoY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgYnV0dG9uLnZhbHVlID0gXCJFcnJvciBIZWxwXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgbGV0IHVybCA9IFNpdGUucm9vdCArICcvY2wvZXJyb3JoZWxwJztcclxuICAgIGlmKG9wdGlvbnMuYXNzaWduICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy5hc3NpZ247XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMudGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMudGFnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZW5jb2RlVVJJKGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkudHJpbSgpKTtcclxuICAgICAgICB3aW5kb3cub3BlbihgJHt1cmx9P2U9JHtlcnJvcn1gLCBcIkVycm9yIEhlbHBcIiwgJ3dpZHRoPTYwMCwgaGVpZ2h0PTUwMCwgc2Nyb2xsYmFycz15ZXMnKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbkVycm9ySGVscC5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLWVycm9yLWhlbHAnKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3IEVycm9ySGVscChlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtNZW1iZXJzaGlwfSBmcm9tICcuLi8uLi8uLi91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzJztcclxuXHJcbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcbiAgICBNZW1iZXJzaGlwLmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSAnRyc7XHJcblxyXG4gICAgaWYoanNvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IGpzb24uc2VtZXN0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0ganNvbi5zZWN0aW9uO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVEEgPSAnRSc7ICAgICAgICAvLy88IFRlYWNoaW5nIGFzc2lzdGFudFxyXG5NZW1iZXIuSU5TVFJVQ1RPUiA9ICdJJzsgICAgLy8vPCBDb3Vyc2UgaW5zdHJ1Y3RvclxyXG5NZW1iZXIuQURNSU4gPSAnQSc7ICAgICAvLy88IEFkbWluXHJcblxyXG5NZW1iZXIucHJvdG90eXBlLmdldFJvbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcm9sZXMgPSB7fTtcclxuICAgIHJvbGVzW01lbWJlci5HVUVTVF0gPSB7bmFtZTogJ0d1ZXN0JywgcHJpb3JpdHk6IDF9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkRST1BQRURdID0ge25hbWU6ICdEcm9wcGVkJywgcHJpb3JpdHk6IDJ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlVTRVJdID0ge25hbWU6ICdVc2VyJywgcHJpb3JpdHk6IDMsIHNraXA6IHRydWV9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUVURFTlRdID0ge25hbWU6ICdTdHVkZW50JywgcHJpb3JpdHk6IDR9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlNUQUZGXSA9IHtuYW1lOiAnU3RhZmYnLCBwcmlvcml0eTogNSwgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50JywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLklOU1RSVUNUT1JdID0ge25hbWU6ICdJbnN0cnVjdG9yJywgcHJpb3JpdHk6IDh9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkFETUlOXSA9IHtuYW1lOiAnQWRtaW4nLCBwcmlvcml0eTogMTAwfTtcclxuXHJcbiAgICByZXR1cm4gcm9sZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge01lbWJlcn07XHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGZvcihsZXQgcHJvcGVydHkgaW4gZGF0YSkge1xyXG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBc3NpZ25tZW50fSBmcm9tICcuL0Fzc2lnbm1lbnQnO1xyXG5cclxuZXhwb3J0IGxldCBBc3NpZ25tZW50Q2F0ZWdvcnkgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5ncmFkaW5nID0gZGF0YS5ncmFkaW5nICE9PSB1bmRlZmluZWQgPyBkYXRhLmdyYWRpbmcgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBbXTtcclxuICAgIHRoaXMuYXNzaWdubWVudHNCeVRhZyA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgYXNzaWduIG9mIGRhdGEuYXNzaWdubWVudHMpIHtcclxuICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoYXNzaWduKTtcclxuICAgICAgICB0aGlzLmFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50c0J5VGFnW2Fzc2lnbm1lbnQudGFnXSA9IGFzc2lnbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IHRoaXMuYXNzaWdubWVudHNCeVRhZ1t0YWddO1xyXG4gICAgICAgIHJldHVybiBhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQgPyBhc3NpZ25tZW50IDogbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXNzaWdubWVudENhdGVnb3J5fSBmcm9tICcuL0Fzc2lnbm1lbnRDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudHMgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XHJcbiAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGRhdGEuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBBc3NpZ25tZW50Q2F0ZWdvcnkoY2F0ZWdvcnkpKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NpZ25tZW50ID0gY2F0ZWdvcnkuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgICAgICAgICBpZihhc3NpZ25tZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzaWdubWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEFic3RyYWN0aW9uIG9mIHRoZSBjdXJyZW50IGNvdXJzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7U2VjdGlvbn0gZnJvbSAnLi9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb3Vyc2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5hY2NvdW50ID0gZGF0YS5hY2NvdW50O1xyXG4gICAgdGhpcy5kZXNjID0gZGF0YS5kZXNjO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5zZWN0aW9uc0J5SWQgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IHNlY3Rpb24gb2YgZGF0YS5zZWN0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zQnlJZFtzZWN0aW9uLmlkXSA9IHM7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0Fzc2lnbm1lbnRzfSBmcm9tICcuL0Fzc2lnbm1lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLnNlbWVzdGVyID0gZGF0YS5zZW1lc3RlcjtcclxuICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBuZXcgQXNzaWdubWVudHMoZGF0YS5hc3NpZ25tZW50cyk7XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudHMuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBUaGUgc2VjdGlvbiBzZWxlY3RvciBwYWdlIC9jbC9zZWN0aW9uc2VsZWN0b3JcclxuICovXHJcblxyXG4vKipcclxuICogVGhlIHNlY3Rpb24gc2VsZWN0b3IgcGFnZSAvY2wvc2VjdGlvbnNlbGVjdG9yXHJcbiAqIEBwYXJhbSBlbGVtZW50IFBhZ2UgZWxlbWVudCAoI2NsLXNlY3Rpb24tc2VsZWN0b3IpXHJcbiAqIEBwYXJhbSBzaXRlIFNpdGUgb2JqZWN0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBTZWN0aW9uU2VsZWN0b3IgPSBmdW5jdGlvbihlbGVtZW50LCBzaXRlKSB7XHJcbiAgICBsZXQgVnVlID0gc2l0ZS5WdWU7XHJcblxyXG4gICAgY29uc3QgaW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IGluZm8uc2VjdGlvbnM7XHJcbiAgICBjb25zdCBiZWZvcmUgPSBpbmZvLmJlZm9yZTtcclxuICAgIGNvbnN0IGFmdGVyID0gaW5mby5hZnRlcjtcclxuXHJcbiAgICBsZXQgdGVtcGxhdGUgPSBgXHJcbjxkaXYgaWQ9XCJjbC1zZWN0aW9uLXNlbGVjdG9yXCI+XHJcbiAgPHNpdGUtaGVhZGVyIDp0aXRsZT1cInRpdGxlXCI+PC9zaXRlLWhlYWRlcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDxkaXYgdi1odG1sPVwiYmVmb3JlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcmJveCBjbC1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgPHAgdi1mb3I9XCJzZWN0aW9uIGluIHNlY3Rpb25zXCI+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cInNlbGVjdChzZWN0aW9uKVwiPnt7c2VjdGlvbi5jb3Vyc2V9fSB7e3NlY3Rpb24ubmljZX19IFNlY3Rpb24ge3tzZWN0aW9uLnNlY3Rpb259fTwvYnV0dG9uPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCIgdi1odG1sPVwiYWZ0ZXJcIj48L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgPHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+XHJcbjwvZGl2PmA7XHJcblxyXG4gICAgY29uc3QgSGVhZGVyID0gc2l0ZS5pbmZvLmhlYWRlci5jb21wb25lbnQoKTtcclxuICAgIGNvbnN0IEZvb3RlciA9IHNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgbGV0IHJvdXRlciA9IG5ldyBTaXRlLlZ1ZVJvdXRlcih7XHJcbiAgICAgICAgbW9kZTogJ2hpc3RvcnknLFxyXG4gICAgICAgIHJvdXRlczogW11cclxuICAgIH0pO1xyXG5cclxuICAgIG5ldyBWdWUoe1xyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBlbDogZWxlbWVudCxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU2VjdGlvbiBTZWxlY3RvcicsXHJcbiAgICAgICAgICAgIGJlZm9yZTogYmVmb3JlLFxyXG4gICAgICAgICAgICBhZnRlcjogYWZ0ZXIsXHJcbiAgICAgICAgICAgIHNlY3Rpb25zOiBzZWN0aW9ucyxcclxuICAgICAgICAgICAgc2VsZWN0OiBmdW5jdGlvbihzZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbWVzdGVyOiBzZWN0aW9uLnNlbWVzdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb24uc2VjdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9zZWN0aW9uc2VsZWN0JywgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMucmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVkaXJlY3QgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZGlyZWN0ID0gU2l0ZS5yb290O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlclxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblNlY3Rpb25TZWxlY3Rvci5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVuO1xyXG4gICAgaWYoIChlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbC1zZWN0aW9uLXNlbGVjdG9yJykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgbmV3IFNlY3Rpb25TZWxlY3Rvcihlbiwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIENvbnN0YW50cyB0aGUgcmVwcmVzZW50IFNlY3Rpb25TdGF0dXMgcG9zc2libGUgdmFsdWVzLlxyXG4gKi9cclxuXHJcbmV4cG9ydCBsZXQgU2VjdGlvblN0YXR1cyA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vLyBDb25zdGFudHMgbXVzdCBtYXRjaCB0aG9zZSBpbiBTZWN0aW9uU3RhdHVzLnBocFxyXG5TZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXHJcblNlY3Rpb25TdGF0dXMuVklTSVRFRCA9ICdWJztcdCAgICAvLy88ICVTZWN0aW9uIGhhcyBiZWVuIHZpc2l0ZWQsIGJ1dCBpcyBub3QgeWV0IGRvbmVcclxuU2VjdGlvblN0YXR1cy5ET05FID0gJ0QnO1x0XHQgICAgLy8vPCAlU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuXHJcblNlY3Rpb25TdGF0dXMudG9TdHJpbmcgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuICAgIGlmKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQ6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb3QgeWV0IHZpc2l0ZWQnO1xyXG5cclxuICAgICAgICBjYXNlIFNlY3Rpb25TdGF0dXMuVklTSVRFRDpcclxuICAgICAgICAgICAgcmV0dXJuICdWaXNpdGVkJztcclxuXHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLkRPTkU6XHJcbiAgICAgICAgICAgIHJldHVybiAnQ29tcGxldGVkJztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhlIFZ1ZXggc3RvcmUgbW9kdWxlIGZvciBjb3Vyc2VcclxuICovXHJcblxyXG5pbXBvcnQge0NvdXJzZX0gZnJvbSAnLi4vTW9kZWxzL0NvdXJzZSc7XHJcblxyXG5leHBvcnQgbGV0IFN0b3JlTW9kdWxlQ291cnNlID0ge1xyXG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgY291cnNlOiBudWxsLFxyXG4gICAgICAgIHN0YWZmOiBbXVxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIHNldChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3Vyc2UgPSBuZXcgQ291cnNlKGRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTdGFmZihzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhZmYgPSB7fTtcclxuICAgICAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXJzLlVzZXIoZCk7XHJcbiAgICAgICAgICAgICAgICBzdGFmZlt1c2VyLm1lbWJlci5pZF0gPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdGFmZiA9IHN0YWZmO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgc2VjdGlvbjogKHN0YXRlKSA9PiAoc2VtZXN0ZXIsIHNlY3Rpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2Ygc3RhdGUuY291cnNlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLnNlbWVzdGVyID09PSBzZW1lc3RlciAmJiBzZWN0aW9uLmlkID09PSBzZWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NpZ25tZW50OiAoc3RhdGUsIGdldHRlcnMpID0+IChzZW1lc3Rlciwgc2VjdGlvbklkLCBhc3NpZ25UYWcpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBzZWN0aW9uIG9mIHN0YXRlLmNvdXJzZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5zZW1lc3RlciA9PT0gc2VtZXN0ZXIgJiYgc2VjdGlvbi5pZCA9PT0gc2VjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhZmY6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gc3RhdGUuc3RhZmZbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gdW5kZWZpbmVkID8gdXNlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuL1N1Ym1pc3Npb24udnVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXNzaW9uID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG5cclxuICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc3RvcmUsXHJcblx0ICAgIHNpdGUsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5gXHJcbiAgICB9KVxyXG59XHJcblxyXG5TdWJtaXNzaW9uLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc3VibWlzc2lvbicpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgU3VibWlzc2lvbihlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE1ZjQ2NjAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWY0NjYwMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNWY0NjYwMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDJiNjIwYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMmI2MjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMmI2MjBjMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyYjYyMGMyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyYjYyMGMyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FhMWU1NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzExZDBhOTknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxMWQwYTk5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxMWQwYTk5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2ZmQ0ODBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2ZmQ0ODBlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNmZkNDgwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2ZmQ0ODBlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyNGRhZDc3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjRkYWQ3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUwNjk0M2FhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDY5NDNhYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDY5NDNhYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiIiwiXHJcbmV4cG9ydCBjb25zdCBTcG9vZmluZ1Jlc3RvcmUgPSBmdW5jdGlvbihlbGVtZW50LCBzaXRlKSB7XHJcblxyXG4gICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHApO1xyXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdjbC1ob21lLWNvbnRyb2wnKTtcclxuXHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAncmVzdG9yZSc7XHJcbiAgICBwLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2l0ZS5hcGkucG9zdCgnL2FwaS9jb3Vyc2UvbWVtYmVycy9zcG9vZicsIHtyZXN0b3JlOiB0cnVlfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBzaXRlLnJvb3QgKyAnLyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCBvcHRpb25zID0ge307XHJcbiAgICAvLyBjb25zdCBjb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgIC8vIGlmKGNvbnRlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgLy8gICAgIG9wdGlvbnMgPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAvLyBlbGVtZW50LmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgLy9cclxuICAgIC8vIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAvLyBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIC8vXHJcbiAgICAvLyBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIGJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIC8vIGJ1dHRvbi52YWx1ZSA9IFwiRXJyb3IgSGVscFwiO1xyXG4gICAgLy8gZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgLy9cclxuICAgIC8vIGxldCB1cmwgPSBTaXRlLnJvb3QgKyAnL2NsL2Vycm9yaGVscCc7XHJcbiAgICAvLyBpZihvcHRpb25zLmFzc2lnbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMuYXNzaWduO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZihvcHRpb25zLnRhZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAvLyAgICAgICAgIHVybCArPSAnLycgKyBvcHRpb25zLnRhZztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zdCBlcnJvciA9IGVuY29kZVVSSShpbnB1dC52YWx1ZS50b1VwcGVyQ2FzZSgpLnRyaW0oKSk7XHJcbiAgICAvLyAgICAgd2luZG93Lm9wZW4oYCR7dXJsfT9lPSR7ZXJyb3J9YCwgXCJFcnJvciBIZWxwXCIsICd3aWR0aD02MDAsIGhlaWdodD01MDAsIHNjcm9sbGJhcnM9eWVzJyk7XHJcbiAgICAvLyB9KVxyXG59XHJcblxyXG5TcG9vZmluZ1Jlc3RvcmUuaW5zdGFsbCA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jbC1zcG9vZmluZy1yZXN0b3JlJyk7XHJcbiAgICBmb3IobGV0IGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG5ldyBTcG9vZmluZ1Jlc3RvcmUoZWxlbWVudHNbaV0sIHNpdGUpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXNwb25zZSBmcm9tIHRoZSBBUEkgaW4gYW4gZWFzeS10by11c2UgZm9ybWF0XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFQSVJlc3BvbnNlID0gZnVuY3Rpb24oanNvbikge1xyXG4gICAgdGhpcy5qc29uID0ganNvbjtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGF0YSBieSB0eXBlXHJcbiAgICAgKiBAcGFyYW0gdHlwZSBOYW1lIG9mIHRoZSB0eXBlLCBsaWtlICd0b2tlbidcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IE9iamVjdCBvZiBkYXRhIG9yIG51bGwgaWYgbm90IGZvdW5kXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0RGF0YSA9IGZ1bmN0aW9uKHR5cGUpIHtcclxuICAgICAgICBpZiAodGhpcy5qc29uLmRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5qc29uLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgaW5zdGFuY2VzIG9mIGRhdGEgYnkgdHllXHJcblx0ICogQHBhcmFtIHR5cGUgTmFtZSBvZiB0aGUgdHlwZSwgbGlrZSAndG9rZW4nXHJcblx0ICogQHJldHVybnMge0FycmF5fSBBcnJheSBvZiBvYmplY3RzIHJlcHJlc2VudGluZyB0aGUgZGF0YSBlbGVtZW50cy5cclxuXHQgKi9cclxuXHR0aGlzLmdldERhdGFBbGwgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanNvbi5kYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV0IHJldCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5qc29uLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERvZXMgdGhpcyByZXNwb25zZSBoYXZlIGFuIGVycm9yP1xyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZXJlIGlzIGFuIGVycm9yXHJcblx0ICovXHJcblx0dGhpcy5oYXNFcnJvciA9IGZ1bmN0aW9uKCkgIHtcclxuXHRcdHJldHVybiAodGhpcy5qc29uLmVycm9ycyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuanNvbi5lcnJvcnMubGVuZ3RoID4gMCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGVycm9yIGNvZGUgaWYgdGhlcmUgaXMgYW4gZXJyb3JcclxuXHQgKiBAcmV0dXJuIHtpbnR9IEVycm9yIGNvZGVcclxuXHQgKi9cclxuICAgIHRoaXMuZXJyb3JDb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuanNvbi5lcnJvcnNbMF0uY29kZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSBlcnJvciB0aXRsZSBpZiB0aGVyZSBpcyBhbiBlcnJvclxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ30gRXJyb3IgdGl0bGVcclxuXHQgKi9cclxuXHR0aGlzLmVycm9yVGl0bGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5qc29uLmVycm9yc1swXS50aXRsZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgQVBJUmVzcG9uc2U7XHJcbiIsIi8qXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zIHRvIGZvcm1hdCB0aW1lcy5cclxuICovXHJcblxyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnMgdG8gZm9ybWF0IHRpbWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgVGltZUZvcm1hdHRlciA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBhIHRpbWUgdG8gdGhlIGZvcm1hdCB3ZSBkaXNwbGF5XHJcbiAqIFRpbWUgaXMgcmVsYXRpdmUgdG8gYSBzcGVjaWZpZWQgdGltZSAob3IgY3VycmVudCB0aW1lKVxyXG4gKiBAcGFyYW0ge21vbWVudH0gdGltZSBUaW1lIHRvIGNvbnZlcnQgKG1vbWVudClcclxuICogQHBhcmFtIHttb21lbnR9IGN1cnJlbnRUaW1lIEN1cnJlbnQgdGltZSAobW9tZW50KVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybWF0IE1vbWVudCBmb3JtYXRcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcblRpbWVGb3JtYXR0ZXIucmVsYXRpdmUgPSBmdW5jdGlvbih0aW1lLCBjdXJyZW50VGltZSwgZm9ybWF0KSB7XHJcbiAgICBpZihjdXJyZW50VGltZSA9PT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRUaW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgY3VycmVudFRpbWUgPSBtb21lbnQubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxhcHNlZCA9IGN1cnJlbnRUaW1lLmRpZmYodGltZSk7XHJcblxyXG4gICAgaWYoZWxhcHNlZCA8IDYwMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuICc8MSBtaW4gYWdvJztcclxuICAgIH1cclxuXHJcbiAgICBpZihlbGFwc2VkIDwgMzYwMDAwMCkge1xyXG4gICAgICAgIC8vIFdpdGhpbiBhbiBob3VyIGFnb1xyXG4gICAgICAgIGNvbnN0IG1pbnMgPSBNYXRoLmZsb29yKGVsYXBzZWQgLyA2MDAwMCk7XHJcbiAgICAgICAgcmV0dXJuICcnICsgbWlucyArICcgbWluIGFnbyc7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVybWluZSBpZiBpdCB3YXMgdG9kYXlcclxuICAgICAqL1xyXG4gICAgaWYodGltZS5kYXRlKCkgPT09IGN1cnJlbnRUaW1lLmRhdGUoKSAmJlxyXG4gICAgICAgIHRpbWUubW9udGgoKSA9PT0gY3VycmVudFRpbWUubW9udGgoKSAmJlxyXG4gICAgICAgIHRpbWUueWVhcigpID09PSBjdXJyZW50VGltZS55ZWFyKCkpIHtcclxuICAgICAgICBsZXQgaG91ciA9IHRpbWUuaG91cigpO1xyXG4gICAgICAgIGxldCBhbSA9ICdhbSc7XHJcbiAgICAgICAgaWYoaG91ciA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VyID0gMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgICAgICAgIGFtID0gJ3BtJ1xyXG4gICAgICAgIH0gZWxzZSBpZihob3VyID4gMTIpIHtcclxuICAgICAgICAgICAgYW0gPSAncG0nO1xyXG4gICAgICAgICAgICBob3VyIC09IDEyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbWludXRlID0gdGltZS5taW51dGUoKTtcclxuICAgICAgICBpZihtaW51dGUgPCAxMCkge1xyXG4gICAgICAgICAgICBtaW51dGUgPSAnMCcgKyBtaW51dGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gXCJUb2RheSBhdCBcIiArIGhvdXIgKyAnOicgKyBtaW51dGUgKyBhbTtcclxuICAgIH1cclxuXHJcbiAgICBpZihmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvcm1hdCA9ICdNLURELVlZWVkgaDptbTpzc2EnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aW1lLmZvcm1hdChmb3JtYXQpO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzcGxheSBhIFVuaXggdGltZSBhcyBhbiBhYnNvbHV0ZSB0aW1lLlxyXG4gKiBAcGFyYW0ge2ludH0gdGltZSBVbml4IHRpbWUgKHNlY29uZHMpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdCBvciAnbG9uZycgb3IgJ3Nob3J0JyBmb3IgZGF5cyBpbmNsdXNpb24uXHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCA9IGZ1bmN0aW9uKHRpbWUsIGZvcm1hdCkge1xyXG4gICAgbGV0IHQgPSBtb21lbnQudW5peCh0aW1lKTtcclxuICAgIGlmKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9ybWF0ID0gJ00tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnc2hvcnQnKSB7XHJcblx0ICAgIGZvcm1hdCA9ICdkZGQsIE0tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9IGVsc2UgaWYoZm9ybWF0ID09PSAnbG9uZycpIHtcclxuXHQgICAgZm9ybWF0ID0gJ2RkZGQsIE0tREQtWVlZWSBoOm1tOnNzYSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHQuZm9ybWF0KGZvcm1hdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEaXNwbGF5IGEgVW5peCB0aW1lIGFzIGEgcmVsYXRpdmUgdGltZS5cclxuICogQHBhcmFtIHtpbnR9IHRpbWUgVW5peCB0aW1lIChzZWNvbmRzKVxyXG4gKiBAcGFyYW0ge2ludH0gY3VycmVudFRpbWUgQ3VycmVudCB0aW1lIGFzIFVOSVggdGltZSAob3B0aW9uYWwpXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXQgTW9tZW50IGZvcm1hdCBvciAnbG9uZycgb3IgJ3Nob3J0JyBmb3IgZGF5cyBpbmNsdXNpb24uXHJcbiAqL1xyXG5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCA9IGZ1bmN0aW9uKHRpbWUsIGN1cnJlbnRUaW1lLCBmb3JtYXQpIHtcclxuICAgIGxldCB0ID0gbW9tZW50LnVuaXgodGltZSk7XHJcbiAgICBsZXQgYyA9IGN1cnJlbnRUaW1lICE9PSBudWxsID8gbW9tZW50LnVuaXgoY3VycmVudFRpbWUpIDogbW9tZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVsYXRpdmUodCwgYywgZm9ybWF0KTtcclxufVxyXG4iLCIvKlxyXG4gKiBKYXZhc2NyaXB0IHN1cHBvcnQgZm9yIHRoZSBFZGl0b3JcclxuICovXHJcblxyXG5pbXBvcnQgJy4vX2VkaXRvci5zY3NzJztcclxuaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVzaXplci1jbCc7XHJcbmltcG9ydCB7RWRpdG9yT3B0aW9uc30gZnJvbSAnLi9FZGl0b3JPcHRpb25zJztcclxuXHJcbi8qKlxyXG4gKiBKYXZhc2NyaXB0IG9iamVjdCBpbiBzdXBwb3J0IG9mIHRleHRhcmVhLWJhc2VkIGVkaXRvclxyXG4gKlxyXG4gKiBJZiBlZGl0b3IgaGFzIHRoZSBjb2RlIHN0eWxlLCBsaW5lIG51bWJlcnMgYXJlIGRpc3BsYXllZC5cclxuICogU2V0IG1lbWJlciAudGFiIHRvIHN1cHBvcnQgc21hcnQgdGFic1xyXG4gKiBTZXQgbWVtYmVyIC5hdXRvSW5kZW50IHRvIHN1cHBvcnQgYXV0b21hdGljIGluZGVudGF0aW9uXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgZm9yIHRoZSB0ZXh0YXJlYSB3ZSBhcmUgdHVybmluZyBpbnRvIGFuIGVkaXRvclxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHRvIHBhc3MgdG8gdGhlIGVkaXRvclxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgRWRpdG9yID0gZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgaWYob3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IG5ldyBFZGl0b3JPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBvcHRpb25zID0gbmV3IEVkaXRvck9wdGlvbnMoSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjbC1lZGl0b3InKTtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBjb25zdCByZXNpemVyID0gbmV3IFJlc2l6ZXIoZWxlbWVudCwge1xyXG4gICAgICAgcmVzaXplOiBvcHRpb25zLnJlc2l6ZSxcclxuICAgICAgIGhhbmRsZTogb3B0aW9ucy5oYW5kbGUsXHJcbiAgICAgICBncmFiU2l6ZTogb3B0aW9ucy5ncmFiU2l6ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGhpcy50ZXh0YXJlYSA9IHRhO1xyXG4gICAgZm9yKGxldCBjbHMgb2Ygb3B0aW9ucy5jbGFzc2VzKSB7XHJcbiAgICAgICAgdGEuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRhKTtcclxuICAgIHRhLnZhbHVlID0gb3B0aW9ucy52YWx1ZTtcclxuICAgIGlmKG9wdGlvbnMubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRhLm5hbWUgPSBvcHRpb25zLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYob3B0aW9ucy5jb2RlKSB7XHJcbiAgICAgICAgdGEuY2xhc3NMaXN0LmFkZCgnY29kZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG9wdGlvbnMuaGVpZ2h0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBpZihvcHRpb25zLm1pbkhlaWdodCAhPT0gbnVsbCkge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWluSGVpZ2h0ID0gb3B0aW9ucy5taW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGEuc3BlbGxjaGVjayA9IG9wdGlvbnMuc3BlbGxjaGVjaztcclxuXHJcbiAgICAvLyBJRTExIGFuZCBzb21lIG9sZGVyIGJyb3dzZXJzIGRvIG5vdCBzdXBwb3J0XHJcbiAgICAvLyB0aGUgaW5zZXJ0VGV4dCBjb21tYW5kLiBUaGlzIGRldGVybWluZXMgaWYgaXRcclxuICAgIC8vIGlzIGF2YWlsYWJsZS4gVGhpcyBtYXkgYmUgcmV2aXNlZCBpdCB0aGUgYXR0ZW1wdCB0b1xyXG4gICAgLy8gdXNlIHRoZW0gZmFpbHMuXHJcbiAgICBsZXQgaW5zZXJ0VGV4dFN1cHBvcnRlZCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCAoXCJpbnNlcnRUZXh0XCIpO1xyXG4gICAgbGV0IGRlbGV0ZVN1cHBvcnRlZCA9IGRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCAoXCJkZWxldGVcIik7XHJcblxyXG4gICAgLy8gU2V0IHRydWUgYWZ0ZXIgd2UgYXV0by1pbmRlbnRcclxuICAgIGxldCBqdXN0SW5kZW50ZWQgPSBmYWxzZTtcclxuICAgIGlmKG9wdGlvbnMudGFiIHx8IG9wdGlvbnMuYXV0b0luZGVudCkge1xyXG4gICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYob3B0aW9ucy50YWIgJiYgZXZlbnQud2hpY2ggPT09IDkpIHsgIC8vIFRhYiBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIWV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiQXRDYXJldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RJbmRlbnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuVGFiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdEluZGVudGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihvcHRpb25zLmF1dG9JbmRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LndoaWNoID09IDEzKSB7ICAgICAvLyBSZXR1cm4gY2hhcmFjdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0SW5kZW50ZWQgPSByZXR1cm5XaXRoSW5kZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGp1c3RJbmRlbnRlZCAmJiBldmVudC53aGljaCA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQmFja3NwYWNlIGFmdGVyIHdlIGp1c3QgaW5kZW50ZWQhXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodW5EZW50KCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdEluZGVudGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogVGhpcyBpcyB0aGUgbWFnaWMgdGhhdCBzeW5jcyB0aGUgYmFja2dyb3VuZCB3aXRoIHRoZVxyXG4gICAgICogbGluZSBudW1iZXJzIGluIGl0LlxyXG4gICAgICovXHJcbiAgICB0YS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0b3AgPSB0YS5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRhLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgdGEuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gLWxlZnQgKyAncHggJyArIC10b3AgKyAncHgnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLypcclxuICAgICAqIEluc2VydCBhIHRhYiBhdCB0aGUgY3VycmVudCBlZGl0IGxvY2F0aW9uIGluIHRoZSB0ZXh0YXJlYVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB0YWJBdENhcmV0KCkge1xyXG4gICAgICAgIGNvbnN0IGRTZWwgPSB0YTtcclxuXHJcbiAgICAgICAgaWYgKGRTZWwuc2VsZWN0aW9uU3RhcnQgfHwgZFNlbC5zZWxlY3Rpb25TdGFydCA9PSAnMCcpIHtcclxuICAgICAgICAgICAgLy9Gb3IgYnJvd3NlcnMgbGlrZSBGaXJlZm94IGFuZCBXZWJraXQgYmFzZWRcclxuICAgICAgICAgICAgdmFyIHN0YXJ0UG9zID0gZFNlbC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgdmFyIGVuZFBvcyA9IGRTZWwuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICBpZihzdGFydFBvcyA9PSBlbmRQb3MpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRhYmJpbmcgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb25cclxuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBkU2VsLnZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BsaXQgPSBiZWZvcmUuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdExpbmUgPSBzcGxpdFtzcGxpdC5sZW5ndGgtMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbGFzdExlbiA9IGxhc3RMaW5lLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciB0b0FkZCA9IG9wdGlvbnMudGFiU2l6ZSAtIChsYXN0TGVuICUgb3B0aW9ucy50YWJTaXplKTtcclxuICAgICAgICAgICAgICAgIHZhciBzcGFjZXMgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPHRvQWRkOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXMgKz0gJyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRleHQoZFNlbCwgc3BhY2VzKTtcclxuICAgICAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uU3RhcnQgPSBzdGFydFBvcyArIHRvQWRkO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBzdGFydFBvcyArIHRvQWRkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVGFiYmluZyBhIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IGRTZWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BsaXQgPSB2YWwuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGluZVBvcyA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRmluZCB0aGUgbGluZSB0aGUgc2VsZWN0aW9uIHN0YXJ0cyBvblxyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBsaW5lPTA7IGxpbmUgPCBzcGxpdC5sZW5ndGg7IGxpbmUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXh0TGluZVBvcyA9IGxpbmVQb3MgKyBzcGxpdFtsaW5lXS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN0YXJ0UG9zID49IGxpbmVQb3MgJiYgc3RhcnRQb3MgPCBuZXh0TGluZVBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVBvcyA9IG5leHRMaW5lUG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNwYWNlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8b3B0aW9ucy50YWJTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjZXMgKz0gJyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnNlcnRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJbmRlbnQgdW50aWwgd2UgYXJlIGRvbmVcclxuICAgICAgICAgICAgICAgIGZvciggOyBsaW5lIDwgc3BsaXQubGVuZ3RoOyAgbGluZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IGxpbmVQb3MgKyBpbnNlcnRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uRW5kID0gbGluZVBvcyArIGluc2VydGlvbnM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydFRleHQoZFNlbCwgc3BhY2VzKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnNlcnRpb25zICs9IG9wdGlvbnMudGFiU2l6ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dExpbmVQb3MgPSBsaW5lUG9zICsgc3BsaXRbbGluZV0ubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbmRQb3MgPD0gbmV4dExpbmVQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsaW5lUG9zID0gbmV4dExpbmVQb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zICsgb3B0aW9ucy50YWJTaXplO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBlbmRQb3MgKyBpbnNlcnRpb25zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRTZWwudmFsdWUgKz0gXCIgXCI7XHJcbiAgICAgICAgICAgIGRTZWwuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIEhhbmRsZSB0aGUgU2hpZnQtVEFCIGNvbWJpbmF0aW9uICh1bnRhYmJpbmcpXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVuVGFiKCkge1xyXG4gICAgICAgIC8vIFNlbGVjdGlvbiBET00gb2JqZWN0XHJcbiAgICAgICAgY29uc3QgZFNlbCA9IHRhO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnRQb3MgPSBkU2VsLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIHZhciBlbmRQb3MgPSBkU2VsLnNlbGVjdGlvbkVuZDtcclxuXHJcbiAgICAgICAgLy8gVW50YWJiaW5nIGEgc2VsZWN0aW9uXHJcbiAgICAgICAgdmFyIHZhbCA9IGRTZWwudmFsdWU7XHJcbiAgICAgICAgdmFyIHNwbGl0ID0gdmFsLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIHZhciBsaW5lUG9zID0gMDtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgbGluZSB0aGUgc2VsZWN0aW9uIHN0YXJ0cyBvblxyXG4gICAgICAgIGZvcih2YXIgbGluZT0wOyBsaW5lIDwgc3BsaXQubGVuZ3RoOyBsaW5lKyspIHtcclxuICAgICAgICAgICAgdmFyIG5leHRMaW5lUG9zID0gbGluZVBvcyArIHNwbGl0W2xpbmVdLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIGlmKHN0YXJ0UG9zID49IGxpbmVQb3MgJiYgc3RhcnRQb3MgPCBuZXh0TGluZVBvcykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGluZVBvcyA9IG5leHRMaW5lUG9zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRlbGV0aW9ucyA9IDA7XHJcbiAgICAgICAgdmFyIGZpcnN0TGluZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIFVuZGVudCB1bnRpbCB3ZSBhcmUgZG9uZVxyXG4gICAgICAgIGZvciggOyBsaW5lIDwgc3BsaXQubGVuZ3RoOyAgbGluZSsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgc3BhY2VzPTA7ICBzcGFjZXMgPCBvcHRpb25zLnRhYlNpemUgJiYgc3BhY2VzPHNwbGl0W2xpbmVdLmxlbmd0aDsgc3BhY2VzKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKHNwbGl0W2xpbmVdW3NwYWNlc10gIT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHNwYWNlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uU3RhcnQgPSBsaW5lUG9zIC0gZGVsZXRpb25zO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBsaW5lUG9zIC0gZGVsZXRpb25zICsgc3BhY2VzO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGV4dChkU2VsKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0aW9ucyArPSBzcGFjZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGZpcnN0TGluZSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRQb3MgLT0gc3BhY2VzO1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhcnRQb3MgPCBsaW5lUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRQb3MgPSBsaW5lUG9zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlyc3RMaW5lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHRMaW5lUG9zID0gbGluZVBvcyArIHNwbGl0W2xpbmVdLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIGlmKGVuZFBvcyA8PSBuZXh0TGluZVBvcykge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmVcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaW5lUG9zID0gbmV4dExpbmVQb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkU2VsLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3M7XHJcbiAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBlbmRQb3MgLSBkZWxldGlvbnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBJbnNlcnQgYSByZXR1cm4gY2hhcmFjdGVyIGFuZCBlbm91Z2ggc3BhY2VzIHRvIGluZGVudFxyXG4gICAgICogdGhlIHRleHQgc28gYXMgdG8gbWF0Y2ggdGhlIHByZXZpb3VzIGxpbmUuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJldHVybldpdGhJbmRlbnQoKSB7XHJcbiAgICAgICAgLy8gU2VsZWN0aW9uIERPTSBvYmplY3RcclxuICAgICAgICBjb25zdCBkU2VsID0gdGE7XHJcblxyXG4gICAgICAgIC8vIEhvdyBtYW55IHNwYWNlcyB3aWxsIGJlIHB1dCBiZWZvcmUgdGhlIGZpcnN0IG5vbi1zcGFjZT9cclxuICAgICAgICB2YXIgc3BhY2UgPSAwO1xyXG5cclxuICAgICAgICBpZiAoZFNlbC5zZWxlY3Rpb25TdGFydCB8fCBkU2VsLnNlbGVjdGlvblN0YXJ0ID09ICcwJykge1xyXG4gICAgICAgICAgICB2YXIgc3RhcnRQb3MgPSBkU2VsLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICB2YXIgZW5kUG9zID0gZFNlbC5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSBkU2VsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgdmFyIGJlZm9yZSA9IGRTZWwudmFsdWUuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgdmFyIGFmdGVyID0gZFNlbC52YWx1ZS5zdWJzdHJpbmcoZW5kUG9zLGRTZWwudmFsdWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgdmFyIHNwbGl0ID0gYmVmb3JlLnNwbGl0KFwiXFxuXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2hhdCBpcyB0aGUgbGFzdCBsaW5lIGJlZm9yZSB0aGUgY2FyZXQ/XHJcbiAgICAgICAgICAgIHZhciBsYXN0ID0gc3BsaXRbc3BsaXQubGVuZ3RoLTFdO1xyXG5cclxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8bGFzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYobGFzdC5jaGFyQXQoaSkgIT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhY2UrKztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSByZXR1cm5cclxuICAgICAgICAgICAgdmFyIG15VmFsdWUgPSBcIlxcblwiO1xyXG4gICAgICAgICAgICBmb3IoaT0wOyBpPHNwYWNlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIG15VmFsdWUgKz0gJyAnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnNlcnRUZXh0KGRTZWwsIG15VmFsdWUpO1xyXG4gICAgICAgICAgICBkU2VsLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnRQb3MgKyBteVZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBzdGFydFBvcyArIG15VmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRTZWwudmFsdWUgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgZFNlbC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNwYWNlID4gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLypcclxuICAgICAqIFJlbW92ZSB0aGUgbGFzdCB0YWJTaXplIHNwYWNlcyBhdCB0aGUgY3VycmVudCBsb2NhdGlvblxyXG4gICAgICogQHJldHVybiB0cnVlIGlmIHdhcyB1bi1kZW50ZWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gdW5EZW50KCkge1xyXG4gICAgICAgIC8vIFNlbGVjdGlvbiBET00gb2JqZWN0XHJcbiAgICAgICAgY29uc3QgZFNlbCA9IHRhO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGRTZWwuc2VsZWN0aW9uU3RhcnQgfHwgZFNlbC5zZWxlY3Rpb25TdGFydCA9PSAnMCcpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0UG9zID0gZFNlbC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgdmFyIGVuZFBvcyA9IGRTZWwuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gZFNlbC5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIHZhciBiZWZvcmUgPSBkU2VsLnZhbHVlLnN1YnN0cmluZygwLCBzdGFydFBvcyk7XHJcbiAgICAgICAgICAgIHZhciBzcGFjZVN0ciA9ICcnO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk9MDsgaTxvcHRpb25zLnRhYlNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VTdHIgKz0gJyAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGJlZm9yZS5sZW5ndGggPj0gb3B0aW9ucy50YWJTaXplICYmXHJcbiAgICAgICAgICAgICAgICBiZWZvcmUuc3Vic3RyKGJlZm9yZS5sZW5ndGgtb3B0aW9ucy50YWJTaXplLCBvcHRpb25zLnRhYlNpemUpID09PSBzcGFjZVN0cikge1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25TdGFydCA9IGJlZm9yZS5sZW5ndGggLSBvcHRpb25zLnRhYlNpemU7XHJcbiAgICAgICAgICAgICAgICBkU2VsLnNlbGVjdGlvbkVuZCA9IGJlZm9yZS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlVGV4dChkU2VsKTtcclxuICAgICAgICAgICAgICAgIGRTZWwuc2VsZWN0aW9uU3RhcnQgPSBiZWZvcmUubGVuZ3RoIC0gb3B0aW9ucy50YWJTaXplO1xyXG4gICAgICAgICAgICAgICAgZFNlbC5zZWxlY3Rpb25FbmQgPSBkU2VsLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBJbnNlcnQgdGV4dCBpbiBhIHRleHRhcmVhIGF0IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGlzIHByb3ZpZGVkIHRvIGFsbG93IGZvciBmYWxsYmFjayB0byBhIG5vbi11bmRvYWJsZSB2ZXJzaW9uXHJcbiAgICAgKiBmb3IgSW50ZXJuZXQgZXhwbG9yZXIgYW5kIEZpcmVmb3guXHJcbiAgICAgKiBAcGFyYW0gdGV4dGFyZWEgVGV4dGFyZWEgd2UgYXJlIG1vZGlmeWluZ1xyXG4gICAgICogQHBhcmFtIHRleHQgVGV4dCB0byBpbnNlcnRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5zZXJ0VGV4dCh0ZXh0YXJlYSwgdGV4dCkge1xyXG4gICAgICAgIGlmKGluc2VydFRleHRTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgaWYoIWRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0VGV4dFwiLCBmYWxzZSwgdGV4dCkpIHtcclxuICAgICAgICAgICAgICAgIGluc2VydFRleHRTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGluc2VydFRleHQodGV4dGFyZWEsIHRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQmFja3VwIHZlcnNpb24gZm9yIEludGVybmV0IEV4cGxvcmVyIDExXHJcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSB0ZXh0YXJlYS5zY3JvbGxUb3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGV4dGFyZWEudmFsdWU7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gdmFsdWUuc3Vic3RyaW5nKDAsIHBvcykgKyB0ZXh0ICsgdmFsdWUuc3Vic3RyaW5nKHBvcyk7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIERlbGV0ZSB0ZXh0IGluIGEgdGV4dGFyZWEgYXQgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAgICpcclxuICAgICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYWxsb3cgZm9yIGZhbGxiYWNrIHRvIGEgbm9uLXVuZG9hYmxlIHZlcnNpb25cclxuICAgICAqIGZvciBJbnRlcm5ldCBleHBsb3JlciBhbmQgRmlyZWZveC5cclxuICAgICAqIEBwYXJhbSB0ZXh0YXJlYVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWxldGVUZXh0KHRleHRhcmVhKSB7XHJcbiAgICAgICAgaWYoZGVsZXRlU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgIGlmKCFkb2N1bWVudC5leGVjQ29tbWFuZChcImRlbGV0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlU3VwcG9ydGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVUZXh0KHRleHRhcmVhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEJhY2t1cCB2ZXJzaW9uIGZvciBJbnRlcm5ldCBFeHBsb3JlciAxMVxyXG4gICAgICAgICAgICAvLyBhbmQgRmlyZWZveFxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICBjb25zdCBlbmRQb3MgPSB0ZXh0YXJlYS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRleHRhcmVhLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0ZXh0YXJlYS52YWx1ZTtcclxuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnRQb3MpICsgdmFsdWUuc3Vic3RyaW5nKGVuZFBvcyk7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLypcclxuICogVmFyaW91cyBpbnRlcmZhY2Ugb3B0aW9ucyB3ZSBjYW4gc2VsZWN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEVkaXRvciBpbnRlcmZhY2Ugb3B0aW9ucy5cclxuICpcclxuICogVGhpcyBpcyB1c2VkIGJ5IEVkaXRvciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgZWRpdG9yIG9wdGlvbnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBvcHRpb25zIFVzZXIgcHJvdmlkZWQgb3B0aW9ucyB0aGF0IG92ZXJyaWRlIHRoZSBkZWZhdWx0IHZhbHVlcy5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IEVkaXRvck9wdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7fTtcclxuXHJcbiAgICAvLy8gT3B0aW9uczogdmVydGljYWwsIGhvcml6b250YWwsIGJvdGhcclxuICAgIHRoaXMucmVzaXplID0gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICAvLy8gVGhlIHJlc2l6aW5nIGhhbmRsZVxyXG4gICAgdGhpcy5oYW5kbGUgPSAnYmFyJztcclxuXHJcbiAgICAvLy8gUmFuZ2UgZm9yIGdyYWJiaW5nXHJcbiAgICB0aGlzLmdyYWJTaXplID0gMTA7XHJcblxyXG4gICAgLy8vIElzIHRoaXMgZm9yIHNvdXJjZSBjb2RlP1xyXG4gICAgdGhpcy5jb2RlID0gZmFsc2U7XHJcblxyXG4gICAgLy8vIEluaXRpYWwgdGV4dGFyZWEgdmFsdWVcclxuICAgIHRoaXMudmFsdWUgPSAnJztcclxuXHJcbiAgICAvLy8gSGVpZ2h0IHZhbHVlIHRvIHVzZVxyXG4gICAgdGhpcy5oZWlnaHQgPSBudWxsO1xyXG5cclxuICAgIC8vLyBOYW1lIGZvciB0aGUgY29udHJvbFxyXG4gICAgdGhpcy5uYW1lID0gbnVsbDtcclxuXHJcbiAgICAvLy8gVXNlIGhhbmRsZSB0aGUgdGFiIGtleT9cclxuICAgIHRoaXMudGFiID0gZmFsc2U7XHJcblxyXG4gICAgLy8vIEF1dG9tYXRpY2FsbHkgaW5kZW50IGNvZGU/XHJcbiAgICB0aGlzLmF1dG9JbmRlbnQgPSBmYWxzZTtcclxuXHJcbiAgICAvLy8gTWluaW11bSBoZWlnaHQgdG8gc2V0XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IG51bGw7XHJcblxyXG4gICAgLy8vIFNwZWxsY2hlY2sgdGhlIHRleHRhcmVhP1xyXG4gICAgdGhpcy5zcGVsbGNoZWNrID0gZmFsc2U7XHJcblxyXG4gICAgLy8vIFNpemUgb2YgYSB0YWIgc3RvcCBpbiBjaGFyYWN0ZXJzLlxyXG4gICAgdGhpcy50YWJTaXplID0gNDtcclxuXHJcbiAgICAvLy8gQ2xhc3NlcyB0byBhZGQgdG8gdGhlIHRleHRhcmVhXHJcbiAgICB0aGlzLmNsYXNzZXMgPSBbXTtcclxuXHJcbiAgICBmb3IodmFyIHByb3BlcnR5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICBpZihvcHRpb25zLmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3B0aW9uIFwiICsgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gb3B0aW9uc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDRiMDUxMDImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDRiMDUxMDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDRiMDUxMDInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ0YjA1MTAyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q0YjA1MTAyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9VSS9NZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNGIwNTEwMiZcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuL19lZGl0b3Iuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzMzU5N2E5YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fZWRpdG9yLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi9fZWRpdG9yLnNjc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhkMDRlMDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hc2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMzVcXFxcd2ViLW5ld1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzhkMDRlMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzhkMDRlMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01hc2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDA0ZTAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4ZDA0ZTAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTWFzay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXNrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFzay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFzay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhkMDRlMDAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkYmY0Y2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QYWdlTmF2LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZGJmNGNiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZGJmNGNiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL3NpdGUvanMvVnVlL1BhZ2VOYXYudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGFnZU5hdi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VOYXYudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkYmY0Y2IwJlwiIiwiLyoqXHJcbiAqIEJhc2ljIFZ1ZS1iYXNlZCBzaXRlIHBhZ2Ugc3RhcnRlclxyXG4gKlxyXG4gKiBIb3cgdG8gdXNlOlxyXG4gKiBAY29kZVxyXG4gKiBzaXRlLnJlYWR5KCgpID0+IHtcclxuICogICAgUGFnZVZ1ZS5jcmVhdGUoJ2Rpdi5jbC1ncmFkZS1hc3NpZ25tZW50JywgJ0Fzc2lnbm1lbnQgR3JhZGUnLCBHcmFkZUFzc2lnbm1lbnRWdWUpO1xyXG4gKiAgICBQYWdlVnVlLmNyZWF0ZSgnZGl2LmNsLWdyYWRlcycsICdHcmFkZXMnLCBHcmFkZXNWdWUpO1xyXG4gKiB9KTtcclxuICogQGVuZGNvZGVcclxuICpcclxuICogQGNvbnN0cnVjdG9yIFBhZ2VWdWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBQYWdlVnVlID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBwYWdlIGluIGEgZ2l2ZW4gY29tcG9uZW50LCByZXBsYWNpbmcgdGhlIHByb3ZpZGVkXHJcbiAqIHNlbGVjdG9yLiBUaGUgc2VsZWN0b3IgaXMgYXNzdW1lZCB0byBjb250YWluIEpTT04gZGF0YSB0aGF0IGlzXHJcbiAqIHRoZW4gcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpbiB0aGUganNvbiBwcm9wZXJ0eS5cclxuICpcclxuICogQHBhcmFtIHNlbCBTZWxlY3RvciBmb3IgYSBkaXYgdG8gcmVwbGFjZSB3aXRoIHRoZSB2aWV3LlxyXG4gKiBAcGFyYW0gdGl0bGUgSW5pdGlhbCB0aXRsZSB0byBhcHBseSB0byB0aGUgcGFnZVxyXG4gKiBAcGFyYW0gY29tcG9uZW50IENvbXBvbmVudCB0byBkaXNwbGF5IChWdWUpXHJcbiAqIEBwYXJhbSBuYXYgT3B0aW9uYWwgbmF2aWdhdGlvbiBjb21wb25lbnQsIGxpa2UgUGFnZU5hdlxyXG4gKi9cclxuUGFnZVZ1ZS5jcmVhdGUgPSBmdW5jdGlvbihzZWwsIHRpdGxlLCBjb21wb25lbnQsIG5hdikge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKTtcclxuICAgIGlmKGVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5hdnRhZyA9IG5hdiAhPT0gdW5kZWZpbmVkID8gJzxwYWdlLW5hdiA6bWVudT1cIm1lbnVcIj48L3BhZ2UtbmF2PicgOiAnJztcclxuICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2PjxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPiR7bmF2dGFnfTwvc2l0ZS1oZWFkZXI+XHJcbjxwYWdlLXZ1ZSA6anNvbj1cImpzb25cIj48L3BhZ2UtdnVlPjxzaXRlLWZvb3Rlcj48L3NpdGUtZm9vdGVyPlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIGNvbnN0IEhlYWRlciA9IFNpdGUuaW5mby5oZWFkZXIuY29tcG9uZW50KCk7XHJcbiAgICBjb25zdCBGb290ZXIgPSBTaXRlLmluZm8uZm9vdGVyLmNvbXBvbmVudCgpO1xyXG5cclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gU2l0ZS5zdG9yZTtcclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ3BhZ2UtdnVlJzogY29tcG9uZW50XHJcbiAgICAgICAgfTtcclxuICAgIGlmKG5hdiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29tcG9uZW50c1sncGFnZS1uYXYnXSA9IG5hdjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2l0ZSA9IFNpdGUuU2l0ZTtcclxuXHJcbiAgICBuZXcgU2l0ZS5WdWUoe1xyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIHNpdGUsXHJcbiAgICAgICAgc3RvcmUsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGpzb246IGpzb24sXHJcbiAgICAgICAgICAgIG1lbnU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgKiBAbWVtYmVyb2YgUGFnZVZ1ZVxyXG4gICAgICAgICAgICAgKiBAaW5zdGFuY2VcclxuICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGl0bGU6IGZ1bmN0aW9uKHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHRpdGxlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXRNZW51OiBmdW5jdGlvbihtZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSBtZW51O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QYWdlVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzEyYmJhZWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzEyYmJhZWY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9zaXRlL2pzL1Z1ZS9QYWdlVnVlQmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QYWdlVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BhZ2VWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDNiMjZiY2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0M2IyNmJjYlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWItbmV3XFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0M2IyNmJjYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0M2IyNmJjYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDNiMjZiY2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDNiMjZiY2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC91c2Vycy9qcy9MaWIvRmV0Y2hlclZ1ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GZXRjaGVyVnVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmV0Y2hlclZ1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDNiMjZiY2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZldGNoZXJWdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzYjI2YmNiJnNjb3BlZD10cnVlJlwiIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIFZ1ZXggc3RvcmUgbW9kdWxlIHRoYXQgbWFpbnRhaW5zIGEgY29sbGVjdGlvbiBvZiBzeXN0ZW0gdXNlcnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtGZXRjaGVyfSBmcm9tICcuL0xpYi9GZXRjaGVyVnVlLnZ1ZSc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi9Vc2Vycy9Vc2VyLmpzJztcclxuXHJcbmNvbnN0IExJTUlUID0gNTAwO1xyXG5cclxuZXhwb3J0IGxldCBTdG9yZU1vZHVsZVVzZXJzID0gZnVuY3Rpb24oKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYSBWdWV4IHN0b3JlIG1vZHVsZSB0byBzdG9yZSB1c2Vycy5cclxuICpcclxuICogVGhpcyB3aWxsIHdvcmsgZm9yIGJvdGggVXNlcnMgYW5kIGNvdXJzZSBNZW1iZXJzLCBzaW5jZSB0aGV5XHJcbiAqIHVzZSB0aGUgc2FtZSBBUEkuXHJcbiAqIEBwYXJhbSBhcGkgJy9hcGkvdXNlcnMnIGZvciAnL2FwaS9jb3Vyc2UvbWVtYmVycydcclxuICogQHBhcmFtIHF1ZXJ5IEl0ZW1zIHRvIGFkZCB0byB0aGUgcXVlcnkgKHNlbWVzdGVyIGFuZCBzZWN0aW9uIGZvciBtZW1iZXJzKS5cclxuICogQHBhcmFtIHRvSWQgTWFwcGluZyBmcm9tIGEgdXNlciB0byB0aGUgSUQgdG8gdXNlIGZvciB0aGUgY29sbGVjdGlvbi5cclxuICogQHJldHVybnMgeyp9XHJcbiAqL1xyXG5TdG9yZU1vZHVsZVVzZXJzLmNyZWF0ZSA9IGZ1bmN0aW9uKGFwaSwgdG9JZCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lc3BhY2VkOiB0cnVlLFxyXG4gICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgZmV0Y2hlcjogbmV3IEZldGNoZXIoKSwgICAgIC8vIEluZGljYXRlcyB0aGUgZmV0Y2hpbmcgc3RhdHVzXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXV0YXRpb25zOiB7XHJcbiAgICAgICAgICAgIGFkZChzdGF0ZSwgdXNlcikge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9yZShzdGF0ZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmZldGNoZXIubW9yZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmZXRjaFN0YXJ0KHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZmV0Y2hlci5zdGFydCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZldGNoRG9uZShzdGF0ZSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmZldGNoZXIuZG9uZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc2V0KHN0YXRlLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuZmV0Y2hlci5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVlcnkoc3RhdGUsIHZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnF1ZXJ5ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZShzdGF0ZSwgdXNlcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyBpcyBmZXRjaGVkLCBub3RoaW5nIG5lZWQgYmUgdXBkYXRlZFxyXG4gICAgICAgICAgICAgICAgaWYoIXN0YXRlLmZldGNoZXIuZmV0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbGlzdCBpcyBlbXB0eSwgd2UgZm9yY2UgYSByZWxvYWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgICAgICBpZihzdGF0ZS51c2Vycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mZXRjaGVyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyB0aGUgdXNlciBleGlzdCByaWdodCBub3c/XHJcbiAgICAgICAgICAgICAgICBsZXQgaT0wO1xyXG4gICAgICAgICAgICAgICAgZm9yKCA7IGk8c3RhdGUudXNlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0b0lkKHVzZXIpID09PSB0b0lkKHN0YXRlLnVzZXJzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGZvdW5kIGl0LCBzd2FwIGl0IGluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJzW2ldID0gdXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0YXRlLmZldGNoZXIubW9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIG5hbWUgbWF5IGhhdmUgY2hhbmdlZCwgdGhlIHBvc2l0aW9uIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdCBjb3VsZCBhbHNvIGNoYW5nZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKFVzZXIuY29tcGFyZSh1c2VyLCBzdGF0ZS51c2Vyc1tzdGF0ZS51c2Vycy5sZW5ndGgtMV0pID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9iYWJseSBvZmYgdGhlIGVuZCwgZm9yY2UgYSByZWxvYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mZXRjaGVyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2Vycy5zb3J0KFVzZXIuY29tcGFyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZGlkIG5vdCBmaW5kIHRoZSB1c2VyLCBpdCBtdXN0IHN0aWxsXHJcbiAgICAgICAgICAgICAgICAvLyBiZSB3YWl0aW5nIHRvIGJlIGZldGNoZWQgZnJvbSB0aGUgc2VydmVyLlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuZmV0Y2hlci5tb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV3KHN0YXRlLCB1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBub3RoaW5nIGlzIGZldGNoZWQsIG5vdGhpbmcgbmVlZCBiZSB1cGRhdGVkXHJcbiAgICAgICAgICAgICAgICBpZighc3RhdGUuZmV0Y2hlci5mZXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBsaXN0IGlzIGVtcHR5LCB3ZSBhcmUgdGhlIG9uZSFcclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlLnVzZXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJzLnB1c2godXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCFzdGF0ZS5mZXRjaGVyLm1vcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGl0IGFsbCwgc28gd2UgY2FuIGFwcGVuZCwgc29ydCwgYW5kIHdlIGFyZSBkb25lXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS51c2Vycy5zb3J0KFVzZXIuY29tcGFyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKFVzZXIuY29tcGFyZSh1c2VyLCBzdGF0ZS51c2Vyc1tzdGF0ZS51c2Vycy5sZW5ndGgtMV0pID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBQcm9iYWJseSBvZmYgdGhlIGVuZCwgZm9yY2UgYSByZWxvYWRcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5mZXRjaGVyLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdGUudXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLnVzZXJzLnNvcnQoVXNlci5jb21wYXJlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGVsZXRlKHN0YXRlLCBpZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS51c2Vycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0lkKHN0YXRlLnVzZXJzW2ldKSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudXNlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGlvbnM6IHtcclxuICAgICAgICAgICAgLy8gSW5pdGlhbCBmZXRjaCBmcm9tIEFQSVxyXG4gICAgICAgICAgICBmZXRjaCh7ZGlzcGF0Y2gsIHN0YXRlfSkge1xyXG4gICAgICAgICAgICAgICAgaWYoc3RhdGUuZmV0Y2hlci5mZXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKCdtb3JlJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIEZldGNoIG1vcmVcclxuICAgICAgICAgICAgbW9yZSh7Y29tbWl0LCBzdGF0ZX0pIHtcclxuICAgICAgICAgICAgICAgIGlmKHN0YXRlLmZldGNoZXIuZmV0Y2hlZCAmJiAhc3RhdGUuZmV0Y2hlci5tb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbW1pdCgnZmV0Y2hTdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHEgPSB7bGltaXQ6IExJTUlULCBvZmZzZXQ6IHN0YXRlLnVzZXJzLmxlbmd0aH07XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHEsIHN0YXRlLnF1ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBTaXRlLmFwaS5nZXQoYXBpLCBxKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vcmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMuZm9yRWFjaCgodXNlck9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyT2JqLm1vcmUgPT09ICd5ZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnYWRkJywgbmV3IFVzZXJzLlVzZXIodXNlck9iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0KCdtb3JlJywgbW9yZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0KCdmZXRjaERvbmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldCh7Y29tbWl0LCBzdGF0ZX0sIHF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIFdlIG1heSBoYXZlIHRoZSBkZXNpcmVkIHVzZXIgbG9hZGVkIG9yIHdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gbWF5IGhhdmUgdG8gZ28gZ2V0IHRoZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHByZXYgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcihsZXQgaT0wOyBpPHN0YXRlLnVzZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCB1c2VyID0gc3RhdGUudXNlcnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKHRvSWQodXNlcikgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZigoaSsxKSA8IHN0YXRlLnVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHVzZXIubmV4dCA9IHN0YXRlLnVzZXJzW2krMV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHByZXYgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB1c2VyLnByZXYgPSBwcmV2O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJldiA9IHVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBHbyBnZXQgdGhlIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICBjb21taXQoJ2ZldGNoU3RhcnQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeS5wcmV2bmV4dCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFNpdGUuYXBpLmdldChhcGksIHF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmdldERhdGEoJ3VzZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmF0dHJpYnV0ZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCdVc2VyIGRvZXMgbm90IGV4aXN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnZmV0Y2hEb25lJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2Vycy5Vc2VyKGRhdGEuYXR0cmlidXRlc1swXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IHJlc3BvbnNlLmdldERhdGEoJ3ByZXYtdXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHJldiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucHJldiA9IG5ldyBVc2Vycy5Vc2VyKHByZXYuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IHJlc3BvbnNlLmdldERhdGEoJ25leHQtdXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV4dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubmV4dCA9IG5ldyBVc2Vycy5Vc2VyKG5leHQuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlKHtjb21taXQsIHN0YXRlfSwgcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KGFwaSArICcvdXBkYXRlJywgcGF5bG9hZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgndXBkYXRlZC11c2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcnMuVXNlcihkYXRhLmF0dHJpYnV0ZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdXNlciBpZiB3ZSBoYXZlIGl0IHN0b3JlZCBsb2NhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBuYW1lIGhhcyBub3QgY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgndXBkYXRlJywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmV3KHtjb21taXQsIHN0YXRlfSwgcGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KGFwaSArICcvbmV3JywgcGF5bG9hZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZ2V0RGF0YSgnbmV3LXVzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlciA9IG5ldyBVc2Vycy5Vc2VyKGRhdGEuYXR0cmlidXRlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1pdCgnbmV3JywgdXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRlbGV0ZSh7Y29tbWl0LCBzdGF0ZX0sIHBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS5hcGkucG9zdChhcGkgKyAnL2RlbGV0ZScsIHtpZDogcGF5bG9hZC5pZH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWl0KCdkZWxldGUnLCBwYXlsb2FkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogQGZpbGVcclxuICogQSBtZW1iZXJzaGlwIGFzc29jaWF0ZWQgd2l0aCBhIHVzZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBiYXNlIG9iamVjdCB0aGF0IHdpbGwgYmUgaW5oZXJpdGVkIGJ5XHJcbiAqIGFjdHVhbCBtZW1iZXJzaGlwIG9iamVjdHMuXHJcbiAqL1xyXG5cclxudmFyIE1lbWJlcnNoaXAgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLy8gVGhlIFVzZXIgb2JqZWN0IGZvciB0aGlzIG1lbWJlcnNoaXBcclxuICAgIHRoaXMudXNlciA9IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7TWVtYmVyc2hpcH07XHJcbiIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKiBSZXByZXNlbnRzIGEgdXNlciBpbiB0aGUgc3lzdGVtXHJcbiAqL1xyXG5cclxubGV0IFVzZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcblxyXG4gICAgLy8vIFRoZSB1c2VyIHJvbGUgLSBsb2NhbCBzbyB3ZSBjYW4gcHJvdGVjdCBpdCB3aXRoIGdldHRlci9zZXR0ZXJcclxuICAgIGxldCByb2xlID0gJ0cnO1xyXG5cclxuICAgIC8vIEluc3RhbGxlZCBtZW1iZXJzaGlwXHJcbiAgICBsZXQgbWVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBpZihqc29uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZih0eXBlb2YoanNvbikgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb24pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlkID0ganNvbi5pZDtcclxuICAgICAgICByb2xlID0ganNvbi5yb2xlO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IGpzb24ubmFtZTtcclxuICAgICAgICB0aGlzLmVtYWlsID0ganNvbi5lbWFpbDtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IGpzb24udXNlcjtcclxuXHJcbiAgICAgICAgLy8gSW5zdGFsbGVkIG1lbWJlcnNoaXBcclxuICAgICAgICBtZW1iZXIgPSBVc2VyLmluc3RhbnRpYXRlTWVtYmVyKGpzb24pO1xyXG4gICAgICAgIGlmKG1lbWJlciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBtZW1iZXIudXNlciA9IHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IDA7XHJcbiAgICAgICAgcm9sZSA9ICdHJztcclxuICAgICAgICB0aGlzLm5hbWUgPSAnJztcclxuICAgICAgICB0aGlzLmVtYWlsID0gJyc7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lbWJlcicsIHtcclxuICAgICAgICBnZXQoKSB7cmV0dXJuIG1lbWJlcn1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBlZmZlY3RpdmUgcm9sZSBmb3IgdGhlIHVzZXIuXHJcbiAgICAgKiBUaGlzIGlzIHRoZSB1c2VyJ3Mgcm9sZSB1bmxlc3MgdGhlIHVzZXJcclxuICAgICAqIGhhcyBhIG1lbWJlcnNoaXAsIGluIHdoaWNoIGNhc2UgaXQgaXMgdGhlXHJcbiAgICAgKiBtZW1iZXJzaGlwIHJvbGUuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5yb2xlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXIucm9sZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRVc2VyUm9sZSA9IGZ1bmN0aW9uKF9yb2xlKSB7XHJcbiAgICAgICAgcm9sZSA9IF9yb2xlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXNlclJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgbWVtYmVyc2hpcCBmb3IgdGhpcyB1c2VyXHJcbiAgICAgKiBAcGFyYW0gTWVtYmVyc2hpcCBtZW1iZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5zZXRNZW1iZXIgPSBmdW5jdGlvbihfbWVtYmVyKSB7XHJcbiAgICAgICAgbWVtYmVyID0gX21lbWJlcjtcclxuICAgICAgICBpZihtZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbWVtYmVyLnVzZXIgPSB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblVzZXIuR1VFU1QgPSAnRyc7XHJcblVzZXIuVVNFUiA9ICdVJztcclxuVXNlci5TVEFGRiA9ICdTJztcclxuVXNlci5BRE1JTiA9ICdBJztcclxuXHJcblxyXG5Vc2VyLmdldFVzZXJSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHJvbGVzID0ge307XHJcbiAgICByb2xlc1tVc2VyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tVc2VyLlVTRVJdID0ge25hbWU6ICdVc2VyJywgcHJpb3JpdHk6IDJ9O1xyXG4gICAgcm9sZXNbVXNlci5TVEFGRl0gPSB7bmFtZTogJ1N0YWZmJywgcHJpb3JpdHk6IDN9O1xyXG4gICAgcm9sZXNbVXNlci5BRE1JTl0gPSB7bmFtZTogJ0FkbWluJywgcHJpb3JpdHk6IDR9O1xyXG5cclxuICAgIHJldHVybiByb2xlcztcclxufVxyXG5cclxuVXNlci5wcm90b3R5cGUuZ2V0VXNlclJvbGVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gVXNlci5nZXRVc2VyUm9sZXMoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgcm9sZXMgZm9yIHRoaXMgdXNlci4gTWVtYmVyc2hpcCByb2xlcyB0YWtlIHByaW9yaXR5XHJcbiAqIG92ZXIgcm9sZXMgZm9yIGp1c3QgYSB1c2VyIHdobyBpcyBub3QgYSBtZW1iZXIuXHJcbiAqL1xyXG5Vc2VyLnByb3RvdHlwZS5nZXRSb2xlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG1lbWJlciA9IHRoaXMubWVtYmVyO1xyXG4gICAgaWYobWVtYmVyICE9PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lbWJlci5nZXRSb2xlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBVc2VyLmdldFVzZXJSb2xlcygpO1xyXG59XHJcblxyXG5Vc2VyLnByb3RvdHlwZS5hdExlYXN0ID0gZnVuY3Rpb24oYXRMZWFzdCkge1xyXG4gICAgbGV0IHJvbGUgPSB0aGlzLnJvbGUoKTtcclxuICAgIGxldCByb2xlcyA9IHRoaXMuZ2V0Um9sZXMoKTtcclxuICAgIGlmKHJvbGVzLmhhc093blByb3BlcnR5KGF0TGVhc3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvbGVzW3JvbGVdLnByaW9yaXR5ID49IHJvbGVzW2F0TGVhc3RdLnByaW9yaXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5Vc2VyLnByb3RvdHlwZS5nZXRSb2xlUHJpb3JpdHkgPSBmdW5jdGlvbihyb2xlKSB7XHJcbiAgICBsZXQgcm9sZXMgPSB0aGlzLmdldFJvbGVzKCk7XHJcbiAgICBpZihyb2xlcy5oYXNPd25Qcm9wZXJ0eShyb2xlKSkge1xyXG4gICAgICAgIHJldHVybiByb2xlc1tyb2xlXS5wcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5cclxuVXNlci5wcm90b3R5cGUuZGlzcGxheU5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBjb21tYSA9IHRoaXMubmFtZS5pbmRleE9mKCcsJyk7XHJcbiAgICBpZihjb21tYSA8IDApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXN0ID0gdGhpcy5uYW1lLnN1YnN0cigwLCBjb21tYSk7XHJcbiAgICBsZXQgZmlyc3QgPSB0aGlzLm5hbWUuc3Vic3RyKGNvbW1hKzEpLnRyaW0oKTtcclxuXHJcbiAgICByZXR1cm4gZmlyc3QgKyAnICcgKyBsYXN0O1xyXG59XHJcblxyXG5Vc2VyLnByb3RvdHlwZS51c2VyUm9sZU5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHJvbGVzID0gdGhpcy5nZXRVc2VyUm9sZXMoKTtcclxuICAgIGxldCByb2xlID0gdGhpcy51c2VyUm9sZSgpO1xyXG4gICAgbGV0IHIgPSByb2xlc1tyb2xlXTtcclxuICAgIGlmKHIgIT09IHVuZGVmaW5lZCkge1xyXG5cdCAgICByZXR1cm4gcm9sZXNbcm9sZV0ubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJ0ludmFsaWQnO1xyXG59XHJcblxyXG5Vc2VyLnByb3RvdHlwZS5yb2xlTmFtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgcm9sZXMgPSB0aGlzLmdldFJvbGVzKCk7XHJcbiAgICBsZXQgcm9sZSA9IHRoaXMucm9sZSgpO1xyXG4gICAgcmV0dXJuIHJvbGVzW3JvbGVdLm5hbWU7XHJcbn1cclxuXHJcblVzZXIuY29tcGFyZSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgIGxldCBhbiA9IGEubmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IGJuID0gYi5uYW1lLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYoYW4gPCBibikge1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpZihhbiA+IGJuKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGEuaWQgLSBiLmlkO1xyXG59XHJcblxyXG4vKipcclxuICogSW5zdGFudGlhdGUgYSBNZW1iZXJzaGlwIG9iamVjdCBmb3IgdGhlIHVzZXIuXHJcbiAqIFRoaXMgd2lsbCBiZSByZXBsYWNlZCBieSBhIHBsdWdpbiB0aGF0IGFkZHNcclxuICogc3VwcG9ydCBmb3IgbWVtYmVyc2hpcHMuXHJcbiAqIEBwYXJhbSBkYXRhIG5vcm1hbGx5IGluIHRoZSBmb3JtYXQgdGhlIFBIUCBKU09OIHJlcHJlc2VudGF0aW9uXHJcbiAqIEByZXR1cm5zIHtudWxsfVxyXG4gKi9cclxuVXNlci5pbnN0YW50aWF0ZU1lbWJlciA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xyXG5leHBvcnQge1VzZXJ9OyIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJWdWVCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYi1uZXdcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M3ZTRlNDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M3ZTRlNDllJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIFxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC91c2Vycy9qcy9WdWUvVXNlclZ1ZUJhc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlclZ1ZUJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyVnVlQmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9