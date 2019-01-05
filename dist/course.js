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
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var UserVueBase = Site.UserVueBase;
var MaskVue = Site.MaskVue;
/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': UserVueBase,
  props: ['json'],
  data: function data() {
    return {
      editing: false,
      email: '',
      mask: false
    };
  },
  components: {
    maskVue: MaskVue
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
        new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox('Invalid Email!', 'Must provide a valid email address.', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OK, function () {});
        return;
      }

      this.mask = true;
      var params = {
        email: this.email
      };
      this.$site.api.post('/api/users/userupdate', params).then(function (response) {
        _this.mask = false;

        if (!response.hasError()) {
          var user = new Users.User(response.getData('user').attributes);

          _this.$store.commit('user/set', user);

          _this.editing = false;
        } else {
          _this.$site.toast(_this, response);
        }
      }).catch(function (error) {
        _this.mask = false;

        _this.$site.toast(_this, error);
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
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      }).catch(function (error) {
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
    console.log(this.type);
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
      }).catch(function (error) {
        _this.$site.toast(_this, error);
      });
    }
  }
});

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
exports.push([module.i, "table tr td[data-v-fe3f98e8]:nth-child(2) {\n  min-width: 195px;\n}\nbutton[data-v-fe3f98e8] {\n  width: 7em;\n}\ninput[type=email][data-v-fe3f98e8] {\n  width: 175px;\n}\n\n", ""]);

// exports


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
/* harmony import */ var _AboutMe_AboutMe_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AboutMe/AboutMe.vue */ "./vendor/cl/course/js/AboutMe/AboutMe.vue");
/* harmony import */ var _SectionStatus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SectionStatus */ "./vendor/cl/course/js/SectionStatus.js");









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

    site.PageVue.create('div.cl-course-aboutme', 'Example Vue', _AboutMe_AboutMe_vue__WEBPACK_IMPORTED_MODULE_7__["default"], site.PageNav);
  });
  site.start(function () {
    _SectionSelectors_SectionSelector__WEBPACK_IMPORTED_MODULE_3__["SectionSelector"].install(site);
    _Submission_Submission__WEBPACK_IMPORTED_MODULE_4__["Submission"].install(site);
    _ErrorHelp_ErrorHelp__WEBPACK_IMPORTED_MODULE_5__["ErrorHelp"].install(site);
    _Util_SpoofingRestore__WEBPACK_IMPORTED_MODULE_6__["SpoofingRestore"].install(site);
  });
  site.SectionStatus = _SectionStatus__WEBPACK_IMPORTED_MODULE_8__["SectionStatus"];
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
    short: 'ULA',
    priority: 7
  };
  roles[Member.TA] = {
    name: 'Teaching Assistant',
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

},[["./vendor/cl/course/index.js","runtime","common","vendor"]]]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXNzaW9uLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWRJdGVtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/YzVjNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/MmQ4YyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWU/ODZhZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlP2RlNGQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFByb2dyYW0udnVlPzJiNjAiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlPzQ1OTUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlPzczYjEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/OWY3NyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWU/Mzc2MCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/MGMxZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvQWJvdXRNZS9BYm91dE1lLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/YmFlNiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/YTZmNyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0Fib3V0TWUvQWJvdXRNZS52dWU/MzcyZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvdXJzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL0NvdXJzZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9FcnJvckhlbHAvRXJyb3JIZWxwLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTWVtYmVycy9NZW1iZXIuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQXNzaWdubWVudC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL01vZGVscy9Bc3NpZ25tZW50Q2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQXNzaWdubWVudHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9Nb2RlbHMvQ291cnNlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvTW9kZWxzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TZWN0aW9uU2VsZWN0b3JzL1NlY3Rpb25TZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1NlY3Rpb25TdGF0dXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdGF0ZS9TdG9yZU1vZHVsZUNvdXJzZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlPzk4ZmIiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pc3Npb24udnVlPzY1MzMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0SW1hZ2UudnVlPzkxODQiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZT8wZDE0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWU/YWExMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0UHJvZ3JhbS52dWU/ZGE4YSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0VGV4dC52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlP2VjY2MiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFRleHQudnVlPzE1NDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdFVua25vd24udnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT8xZmRiIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZT80ZWUwIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXR0ZWQudnVlP2JmZTciLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWU/YWRmYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlP2M1MjUiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZEl0ZW0udnVlPzcxMDMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvdXJzZS9qcy9VdGlsL1Nwb29maW5nUmVzdG9yZS5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvdXNlcnMvanMvVXNlcnMvTWVtYmVyc2hpcC5qcyJdLCJuYW1lcyI6WyJTaXRlIiwiU2VjdGlvblN0YXR1cyIsIk1lbWJlciIsIkNvdXJzZSIsIkNvdXJzZUZhY3RvcnkiLCJjcmVhdGUiLCJzaXRlIiwiY291cnNlIiwiVXNlcnMiLCJVc2VyIiwiaW5zdGFudGlhdGVNZW1iZXIiLCJkYXRhIiwibWVtYmVyIiwiU3RvcmVNb2R1bGVVc2VycyIsInN0b3JlIiwidW5kZWZpbmVkIiwicmVnaXN0ZXJNb2R1bGUiLCJTdG9yZU1vZHVsZUNvdXJzZSIsInVzZXIiLCJpZCIsInJlYWR5IiwiZW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29tbWl0IiwiSlNPTiIsInBhcnNlIiwidGV4dENvbnRlbnQiLCJQYWdlVnVlIiwiQWJvdXRNZVZ1ZSIsIlBhZ2VOYXYiLCJzdGFydCIsIlNlY3Rpb25TZWxlY3RvciIsImluc3RhbGwiLCJTdWJtaXNzaW9uIiwiRXJyb3JIZWxwIiwiU3Bvb2ZpbmdSZXN0b3JlIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJjb250ZW50IiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImlucHV0IiwidHlwZSIsImJ1dHRvbiIsInZhbHVlIiwidXJsIiwicm9vdCIsImFzc2lnbiIsInRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3IiLCJlbmNvZGVVUkkiLCJ0b1VwcGVyQ2FzZSIsInRyaW0iLCJ3aW5kb3ciLCJvcGVuIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImpzb24iLCJNZW1iZXJzaGlwIiwiY2FsbCIsInJvbGUiLCJzZW1lc3RlciIsInNlY3Rpb24iLCJzZXRSb2xlIiwicm9sZV8iLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjb25zdHJ1Y3RvciIsImdldFNlY3Rpb24iLCJnZXR0ZXJzIiwiZ2V0QXNzaWdubWVudCIsImFzc2lnbnRhZyIsIkdVRVNUIiwiVVNFUiIsIkRST1BQRUQiLCJTVFVERU5UIiwiU1RBRkYiLCJHUkFERVIiLCJVTEEiLCJUQSIsIklOU1RSVUNUT1IiLCJBRE1JTiIsImdldFJvbGVzIiwicm9sZXMiLCJuYW1lIiwicHJpb3JpdHkiLCJza2lwIiwic2hvcnQiLCJBc3NpZ25tZW50IiwicHJvcGVydHkiLCJBc3NpZ25tZW50Q2F0ZWdvcnkiLCJncmFkaW5nIiwiYXNzaWdubWVudHMiLCJhc3NpZ25tZW50c0J5VGFnIiwiYXNzaWdubWVudCIsInB1c2giLCJBc3NpZ25tZW50cyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeSIsImFjY291bnQiLCJkZXNjIiwic2VjdGlvbnMiLCJzZWN0aW9uc0J5SWQiLCJzIiwiU2VjdGlvbiIsIlZ1ZSIsImluZm8iLCJiZWZvcmUiLCJhZnRlciIsInRlbXBsYXRlIiwiSGVhZGVyIiwiaGVhZGVyIiwiY29tcG9uZW50IiwiRm9vdGVyIiwiZm9vdGVyIiwicm91dGVyIiwiVnVlUm91dGVyIiwibW9kZSIsInJvdXRlcyIsImVsIiwidGl0bGUiLCJzZWxlY3QiLCJwYXJhbXMiLCJhcGkiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiaGFzRXJyb3IiLCJ0b2FzdCIsImxvY2F0aW9uIiwicmVkaXJlY3QiLCJjYXRjaCIsIm1vdW50ZWQiLCIkcm91dGUiLCJxdWVyeSIsInUiLCJjb21wb25lbnRzIiwiTk9UVklTSVRFRCIsIlZJU0lURUQiLCJET05FIiwidG9TdHJpbmciLCJzdGF0dXMiLCJuYW1lc3BhY2VkIiwic3RhdGUiLCJzdGFmZiIsIm11dGF0aW9ucyIsInNldCIsInNldFN0YWZmIiwiZCIsInNlY3Rpb25JZCIsImFzc2lnblRhZyIsInN1Ym1pc3Npb24iLCJzdWJtaXNzaW9uVnVlIiwiU3VibWlzc2lvblZ1ZSIsInAiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbmNsaWNrIiwicmVzdG9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDY0E7QUFDQTtBQUNBO0FBRUE7QUFDQSx3QkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxHQVRBO0FBVUE7QUFDQTtBQURBLEdBVkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0E7QUFFQTtBQUNBLEdBakJBO0FBa0JBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFVBSkEsb0JBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxVQVBBLG9CQU9BO0FBQUE7O0FBQ0E7QUFDQSxrSUFDQSwrREFEQSxFQUNBLGFBQ0EsQ0FGQTtBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSwyREFDQSxJQURBLENBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUVBLE9BWEEsRUFZQSxLQVpBLENBWUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILENBN0RNOztBQStEUHRCLGVBQWUsQ0FBQ0gsT0FBaEIsR0FBMEIsVUFBUzNCLElBQVQsRUFBZTtBQUNyQyxNQUFJMEQsUUFBUSxHQUFHMUMsUUFBUSxDQUFDMkMsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQWY7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFhQSxDQUFDLEdBQUNGLFFBQVEsQ0FBQ3hCLE1BQXhCLEVBQWdDMEIsQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxRQUFJOUIsZUFBSixDQUFvQjRCLFFBQVEsQ0FBQ0UsQ0FBRCxDQUE1QixFQUFpQzVELElBQWpDO0FBQ0g7QUFDSixDQUxELEM7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7Ozs7Ozs7QUFRQSxJQUFJOEQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUV4QjtBQUNBLE9BQUtsRCxJQUFMLEdBQVksSUFBWjtBQUNILENBSkQiLCJmaWxlIjoiY291cnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQ291cnNlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvdXJzZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnVsbFwiPlxyXG4gICAgICA8bWFzay12dWUgOm1hc2s9XCJtYXNrXCI+Q29tbXVuaWNhdGluZyB3aXRoIHNlcnZlci4uLjwvbWFzay12dWU+XHJcbiAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwic21hbGxcIj5cclxuICAgICAgICA8dHI+PHRoPiZuYnNwOzwvdGg+PHRoPiZuYnNwOzwvdGg+PHRoPiZuYnNwOzwvdGg+PC90cj5cclxuICAgICAgICA8dHI+PHRkPk5hbWU8L3RkPjx0ZD57e3VzZXIubmFtZX19PC90ZD48dGQ+QXMgcHJvdmlkZWQgYnkgdGhlIHJlZ2lzdHJhcnMgb2ZmaWNlPC90ZD48L3RyPlxyXG4gICAgICAgIDx0cj48dGQ+VXNlciBJRDwvdGQ+PHRkPnt7dXNlci51c2VySWR9fTwvdGQ+PHRkPkFzIHByb3ZpZGVkIGJ5IHRoZSByZWdpc3RyYXJzIG9mZmljZTwvdGQ+PC90cj5cclxuICAgICAgICA8dHI+PHRkPkVtYWlsPC90ZD5cclxuICAgICAgICAgIDx0ZCB2LWlmPVwiIWVkaXRpbmdcIj57e3VzZXIuZW1haWx9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQgdi1lbHNlPjxpbnB1dCB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiZW1haWxcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj48L3RkPlxyXG4gICAgICAgICAgPHRkPllvdSBhcmUgYWxsb3dlZCB0byBjaGFuZ2UgeW91ciBlbWFpbCBhZGRyZXNzPC90ZD48L3RyPlxyXG4gICAgICAgIDx0cj48dGQ+U2VtZXN0ZXI8L3RkPjx0ZD57e3VzZXIubWVtYmVyLnNlbWVzdGVyfX08L3RkPjx0ZD4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgICAgPHRyPjx0ZD5TZWN0aW9uPC90ZD48dGQ+e3t1c2VyLm1lbWJlci5zZWN0aW9ufX08L3RkPjx0ZD4mbmJzcDs8L3RkPjwvdHI+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPHAgdi1pZj1cIiFlZGl0aW5nXCIgY2xhc3M9XCJjZW50ZXJcIj48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZWRpdFwiPkVkaXQ8L2J1dHRvbj48L3A+XHJcbiAgICAgICAgPHAgdi1lbHNlIGNsYXNzPVwiY2VudGVyXCI+PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+IDxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgRGlhbG9nIGZyb20gJ2RpYWxvZy1jbCc7XHJcbiAgY29uc3QgVXNlclZ1ZUJhc2UgPSBTaXRlLlVzZXJWdWVCYXNlO1xyXG4gIGNvbnN0IE1hc2tWdWUgPSBTaXRlLk1hc2tWdWU7XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdCdleHRlbmRzJzogVXNlclZ1ZUJhc2UsXHJcblx0XHRwcm9wczogWydqc29uJ10sXHJcblx0XHRkYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRlZGl0aW5nOiBmYWxzZSxcclxuICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICBtYXNrOiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdCAgY29tcG9uZW50czoge1xyXG5cdFx0ICBtYXNrVnVlOiBNYXNrVnVlXHJcblx0ICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLnNldFRpdGxlKCdBYm91dCAnICsgdGhpcy51c2VyLmRpc3BsYXlOYW1lKCkpO1xyXG5cclxuXHRcdFx0dGhpcy5lbWFpbCA9IHRoaXMudXNlci5lbWFpbDtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGVkaXQoKSB7XHJcblx0XHRcdFx0dGhpcy5lZGl0aW5nID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsKCkge1xyXG5cdFx0XHRcdHRoaXMuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBzdWJtaXQoKSB7XHJcblx0XHRcdFx0ICBpZighdGhpcy52YWxpZEVtYWlsKHRoaXMuZW1haWwpKSB7XHJcbiAgICAgICAgICAgIG5ldyBEaWFsb2cuTWVzc2FnZUJveCgnSW52YWxpZCBFbWFpbCEnLCAnTXVzdCBwcm92aWRlIGEgdmFsaWQgZW1haWwgYWRkcmVzcy4nLFxyXG4gICAgICAgICAgICAgIERpYWxvZy5NZXNzYWdlQm94Lk9LLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5tYXNrID0gdHJ1ZTtcclxuICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KCcvYXBpL3VzZXJzL3VzZXJ1cGRhdGUnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBcdCAgICAgIHRoaXMubWFzayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgXHRjb25zdCB1c2VyID0gbmV3IFVzZXJzLlVzZXIocmVzcG9uc2UuZ2V0RGF0YSgndXNlcicpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgndXNlci9zZXQnLCB1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBcdHRoaXMubWFzayA9IGZhbHNlO1xyXG5cdCAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbGlkRW1haWw6IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgICAgIGxldCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG4gICAgICB9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICB0YWJsZSB7XHJcbiAgICB0ciB7XHJcbiAgICAgIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxOTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDdlbTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9ZW1haWxdIHtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2wtc3VibWlzc2lvblwiPlxyXG4gICAgPGRpdiB2LWlmPVwic3VibWlzc2lvbi5zdWJtaXRcIiBjbGFzcz1cIlwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCIhc3VibWlzc2lvbi5vcGVuXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjZW50ZXJib3ggY29tcCBjZW50ZXJcIj5UaGlzIGFzc2lnbm1lbnQgaXMgbm90IG9wZW4gZm9yIHN1Ym1pc3Npb25zLjwvcD5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzdGFmZlwiIGNsYXNzPVwiY2VudGVyYm94IHByaW1hcnlcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VudGVyXCI+PGVtPi4uLlN0YWZmIG9ubHkgZm9yIHN1Ym1pc3Npb24gdGVzdGluZy4uLjwvZW0+PC9wPlxyXG4gICAgICAgICAgPGNvbXBvbmVudCA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y29tcG9uZW50IHYtaWY9XCJzdWJtaXNzaW9uLm9wZW5cIiA6c3VibWlzc2lvbj1cInN1Ym1pc3Npb25cIiA6aXM9XCJzdWJtaXR0ZXJcIiB2LW9uOm5ld19zdWJtaXNzaW9ucz1cIm5ld1N1Ym1pc3Npb25zXCI+PC9jb21wb25lbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzdWJtaXR0ZWQgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCIgOnN1Ym1pc3Npb25zPVwic3VibWlzc2lvbnNcIj48L3N1Ym1pdHRlZD5cclxuICAgIDxkaXYgdi1pZj1cInN1Ym1pc3Npb24uYWRkaXRpb25hbCAhPT0gbnVsbFwiIHYtaHRtbD1cInN1Ym1pc3Npb24uYWRkaXRpb25hbFwiIGNsYXNzPVwiXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtNZW1iZXJ9IGZyb20gJy4uL01lbWJlcnMvTWVtYmVyJztcclxuICAgIGltcG9ydCBTdWJtaXRUZXh0VnVlIGZyb20gJy4vU3VibWl0VGV4dC52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFByb2dyYW1WdWUgZnJvbSAnLi9TdWJtaXRQcm9ncmFtLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0SW1hZ2VWdWUgZnJvbSAnLi9TdWJtaXRJbWFnZS52dWUnO1xyXG4gICAgaW1wb3J0IFN1Ym1pdFVua25vd25WdWUgZnJvbSAnLi9TdWJtaXRVbmtub3duLnZ1ZSc7XHJcbiAgICBpbXBvcnQgU3VibWl0dGVkVnVlIGZyb20gJy4vU3VibWl0dGVkLnZ1ZSc7XHJcbiAgICBpbXBvcnQge1RFWFRfVFlQRVN9IGZyb20gJy4vU3VibWl0dGVkSXRlbS52dWUnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgc3RhZmY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Ym1pdHRlcjogJ3N1Ym1pdC10ZXh0JyxcclxuICAgICAgICAgICAgICBzdWJtaXNzaW9uczogW11cclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgc3VibWl0VGV4dDogU3VibWl0VGV4dFZ1ZSxcclxuICAgICAgICAgIHN1Ym1pdFByb2dyYW06IFN1Ym1pdFByb2dyYW1WdWUsXHJcbiAgICAgICAgICBzdWJtaXRJbWFnZTogU3VibWl0SW1hZ2VWdWUsXHJcbiAgICAgICAgICBzdWJtaXRVbmtub3duOiBTdWJtaXRVbmtub3duVnVlLFxyXG4gICAgICAgICAgc3VibWl0dGVkOiBTdWJtaXR0ZWRWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgXHR0aGlzLnN1Ym1pc3Npb25zID0gdGhpcy5zdWJtaXNzaW9uLnN1Ym1pc3Npb25zO1xyXG5cclxuICAgICAgICAgIGxldCB1c2VyID0gdGhpcy4kc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG4gICAgICAgICAgdGhpcy5zdGFmZiA9IHVzZXIuYXRMZWFzdChNZW1iZXIuU1RBRkYpO1xyXG4gICAgICAgICAgc3dpdGNoKHRoaXMuc3VibWlzc2lvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAncHJvZ3JhbSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC1wcm9ncmFtJztcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtdGV4dCc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0dGVyID0gJ3N1Ym1pdC1pbWFnZSc7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRlciA9ICdzdWJtaXQtdW5rbm93bic7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgbmV3U3VibWlzc2lvbnModmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJtaXNzaW9ucyA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8Zm9ybSByZWY9XCJmb3JtXCIgY2xhc3M9XCJmaWxlXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJwb3N0XCJcclxuICAgICAgICAgIDphY3Rpb249XCJhY3Rpb25cIiA6dGFyZ2V0PVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgQHN1Ym1pdD1cInN1Ym1pdFwiPlxyXG4gICAgICA8bGFiZWw+U3VibWl0OiA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIEBjaGFuZ2U9XCJmaWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcIi8+PC9sYWJlbD5cclxuICAgICAgPGlucHV0IGNsYXNzPVwidXBsb2FkXCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiB2YWx1ZT1cIlVwbG9hZCBGaWxlXCIgLz5cclxuICAgICAgPGlmcmFtZSByZWY9XCJpZnJhbWVcIiBAbG9hZD1cImxvYWRcIiA6bmFtZT1cIid1cGxvYWRfdGFyZ2V0XycgKyBzdWJtaXNzaW9uLnRhZ1wiIHNyYz1cIlwiIHN0eWxlPVwid2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6MHB4IHNvbGlkICNmZmY7ZGlzcGxheTpub25lXCI+PC9pZnJhbWU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiBbJ3N1Ym1pc3Npb24nXSxcclxuXHRcdGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRmaWxlczogbnVsbCxcclxuXHRcdFx0XHRhY3Rpb246IG51bGwsXHJcblx0XHRcdFx0c3VibWl0dGluZzogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdGNvbnN0IHN5c3RlbSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0XHRcdHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRsb2FkKCkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5zdWJtaXR0aW5nKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0bGV0IGpzb24gPSBmcmFtZXNbJ3VwbG9hZF90YXJnZXRfJyArIHRoaXMuc3VibWlzc2lvbi50YWddLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5pbm5lckhUTUw7XHJcblx0XHRcdFx0bGV0IHJlc3BvbnNlID0gbmV3IHRoaXMuJHNpdGUuQVBJUmVzcG9uc2UoSlNPTi5wYXJzZShqc29uKSk7XHJcblxyXG5cdFx0XHRcdGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG5cdFx0XHRcdFx0dGhpcy4kcmVmc1snZm9ybSddLnJlc2V0KCk7XHJcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGx5IHNhdmVkIHRvIHRoZSBzZXJ2ZXJcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0KCkge1xyXG5cdFx0XHRcdHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIHJlZj1cImZvcm1cIiBjbGFzcz1cImZpbGVcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgOmFjdGlvbj1cImFjdGlvblwiIDp0YXJnZXQ9XCIndXBsb2FkX3RhcmdldF8nICsgc3VibWlzc2lvbi50YWdcIiBAc3VibWl0PVwic3VibWl0XCI+XHJcbiAgICAgIDxsYWJlbD5TdWJtaXQ6IDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgQGNoYW5nZT1cImZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1wiLz48L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJ1cGxvYWRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cInN1Ym1pdFwiIHZhbHVlPVwiVXBsb2FkIEZpbGVcIiAvPlxyXG4gICAgICA8aWZyYW1lIHJlZj1cImlmcmFtZVwiIEBsb2FkPVwibG9hZFwiIDpuYW1lPVwiJ3VwbG9hZF90YXJnZXRfJyArIHN1Ym1pc3Npb24udGFnXCIgc3JjPVwiXCIgc3R5bGU9XCJ3aWR0aDowO2hlaWdodDowO2JvcmRlcjowcHggc29saWQgI2ZmZjtkaXNwbGF5Om5vbmVcIj48L2lmcmFtZT5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydzdWJtaXNzaW9uJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBmaWxlczogbnVsbCxcclxuICAgICAgICAgICAgICBhY3Rpb246IG51bGwsXHJcbiAgICAgICAgICAgICAgc3VibWl0dGluZzogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG5cdCAgICAgIHRoaXMuYWN0aW9uID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC9hcGkvJHtzeXN0ZW19L3N1Ym1pc3Npb24vc3VibWl0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfWA7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIGxvYWQoKSB7XHJcbiAgICAgICAgICAgICAgaWYoIXRoaXMuc3VibWl0dGluZykge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0aGlzLnN1Ym1pdHRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IGpzb24gPSBmcmFtZXNbJ3VwbG9hZF90YXJnZXRfJyArIHRoaXMuc3VibWlzc2lvbi50YWddLmRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgIHRyeSB7XHJcblx0ICAgICAgICAgICAgICByZXNwb25zZSA9IG5ldyB0aGlzLiRzaXRlLkFQSVJlc3BvbnNlKEpTT04ucGFyc2UoanNvbikpO1xyXG4gICAgICAgICAgICAgIH0gY2F0Y2goZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhleGNlcHRpb24pO1xyXG5cdCAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBcIkVycm9yIGR1cmluZyBzdWJtaXNzaW9uXCIpO1xyXG4gICAgICAgICAgICAgIFx0cmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnNbJ2Zvcm0nXS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCduZXdfc3VibWlzc2lvbnMnLCByZXNwb25zZS5nZXREYXRhKCdzdWJtaXNzaW9ucycpLmF0dHJpYnV0ZXMpO1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIFwiU3VibWlzc2lvbiBzdWNjZXNzZnVsbHkgc2F2ZWQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3VibWl0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cclxuICAgICAgPGRpdiByZWY9XCJlZGl0b3JcIj48L2Rpdj5cclxuICAgICAgPHA+PGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiPjwvcD5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgcHJvcHM6IFsnc3VibWlzc2lvbiddLFxyXG4gICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuJHJlZnNbJ2VkaXRvciddO1xyXG4gICAgICAgICAgdGhpcy5lZGl0b3IgPSBuZXcgdGhpcy4kc2l0ZS5FZGl0b3IoZWxlbWVudCwge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdWJtaXNzaW9uLmhlaWdodCxcclxuICAgICAgICAgICAgICBjbGFzc2VzOiBbJ3llbGxvdy1wYWQnXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYodGV4dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgJ1lvdSBtdXN0IGVudGVyIHNvbWUgdGV4dCB0byBzdWJtaXQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0L3BsYWluJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuICAgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkucG9zdChgL2FwaS8ke3N5c3RlbX0vc3VibWlzc2lvbi9zdWJtaXQvJHt0aGlzLnN1Ym1pc3Npb24uYXNzaWduVGFnfS8ke3RoaXMuc3VibWlzc2lvbi50YWd9YCwgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnRleHRhcmVhLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ25ld19zdWJtaXNzaW9ucycsIHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb25zJykuYXR0cmlidXRlcyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgXCJTdWJtaXNzaW9uIHN1Y2Nlc3NmdWxseSBzYXZlZCB0byB0aGUgc2VydmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxwIGNsYXNzPVwic2hvdXRvdXRcIj5TdWJtaXNzaW9uIHR5cGUgPGVtPnt7b3B0aW9ucy50eXBlfX08L2VtPiBpcyBub3Qgc3VwcG9ydGVkPC9wPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ29wdGlvbnMnXVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPHRlbXBsYXRlIHYtaWY9XCJzdWJtaXNzaW9ucy5sZW5ndGggPT09IDBcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImxhcmdlIGNlbnRlclwiPk5vIHN1Ym1pc3Npb25zLCB5ZXQuPC9wPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInNtYWxsXCI+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5TdWJtaXNzaW9uczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwic3VibWl0dGVkIGluIHN1Ym1pc3Npb25zXCI+XHJcbiAgICAgICAgICAgIDx0ZD48c3VibWl0dGVkLWl0ZW0gOnR5cGU9XCJzdWJtaXNzaW9uLnR5cGVcIiA6YXNzaWdudGFnPVwic3VibWlzc2lvbi5hc3NpZ25UYWdcIiA6dGFnPVwic3VibWlzc2lvbi50YWdcIiA6c3VibWlzc2lvbj1cInN1Ym1pdHRlZFwiIDphbmFseXNpcz1cInN1Ym1pc3Npb24uYW5hbHlzaXNcIiA6dGVhbWluZz1cInN1Ym1pc3Npb24udGVhbWluZ1wiIEByZXN1bHQ9J2FuYWx5c2lzUmVzdWx0JyB2LW9uOnByZXZpZXdfaW1nPVwicHJldmlld19pbWdcIiB2LW9uOnByZXZpZXc9XCJwcmV2aWV3ZXJcIj48L3N1Ym1pdHRlZC1pdGVtPjwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ3RleHQnXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiBkYXRlIHRvIGRpc3BsYXkgdGhlIHN1Ym1pc3Npb248L3A+XHJcbiAgICAgICAgPHAgdi1pZj1cInN1Ym1pc3Npb24udHlwZSA9PT0gJ3Byb2dyYW0nXCIgY2xhc3M9XCJjZW50ZXJcIj5DbGljayBvbiBhbnkgc3VibWlzc2lvbiBmb3Igc3VibWlzc2lvbiBvcHRpb25zPC9wPlxyXG4gICAgICAgIDxwIHYtaWY9XCJzdWJtaXNzaW9uLnR5cGUgPT09ICdpbWFnZSdcIiBjbGFzcz1cImNlbnRlclwiPkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIHRvIHZpZXcgYW5kIGZvciBzdWJtaXNzaW9uIG9wdGlvbnM8L3A+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwicHJldmlld1R4dCAhPT0gbnVsbFwiPlxyXG4gICAgICAgICAgPHByZSBjbGFzcz1cImNsLXByZXZpZXcgeWVsbG93LXBhZFwiIHYtaWY9XCJwcmV2aWV3VHh0ICE9PSBudWxsXCI+e3twcmV2aWV3VHh0fX08L3ByZT5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2wtcHJldmlldy10aW1lXCIgdi1odG1sPVwicHJldmlld1RpbWVcIj48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwcmUgY2xhc3M9XCJjbC1hbmFseXNpc1wiIHYtaWY9XCJyZXN1bHQgIT09IG51bGxcIj57e3Jlc3VsdH19PC9wcmU+XHJcbiAgICA8ZGl2IHYtaWY9XCJwcmV2aWV3SW1nICE9PSBudWxsXCI+XHJcbiAgICAgIDxmaWd1cmUgdi1pZj1cInByZXZpZXdJbWcgIT09IG51bGxcIiBjbGFzcz1cImNsLXByZXZpZXdcIj48aW1nIDpzcmM9XCJwcmV2aWV3SW1nXCI+PC9maWd1cmU+XHJcbiAgICAgIDxwIGNsYXNzPVwiY2wtcHJldmlldy10aW1lXCI+e3twcmV2aWV3VGltZX19PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21wb25lbnQgdGhhdCBkaXNwbGF5cyB0aGUgbGlzdCBvZiBzdWJtaXNzaW9ucy5cclxuICAgICAqIEBjb25zdHJ1Y3RvciBTdWJtaXR0ZWRWdWVcclxuICAgICAqL1xyXG4gIGltcG9ydCBTdWJtaXR0ZWRJdGVtVnVlIGZyb20gJy4vU3VibWl0dGVkSXRlbS52dWUnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ3N1Ym1pc3Npb24nLCAnc3VibWlzc2lvbnMnXSxcclxuICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHByZXZpZXdUeHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgcHJldmlld0ltZzogbnVsbCxcclxuICAgICAgICAgICAgICBwcmV2aWV3VGltZTogbnVsbCxcclxuICAgICAgICAgICAgICByZXN1bHQ6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgc3VibWl0dGVkSXRlbTogU3VibWl0dGVkSXRlbVZ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnN1Ym1pc3Npb24udGVhbWluZyAhPT0gbnVsbCA/ICd0ZWFtJyA6ICdjb3Vyc2UnO1xyXG4gICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdJbWcgPSBgJHt0aGlzLiRzaXRlLnJvb3R9L2NsLyR7c2VydmljZX0vc3VibWlzc2lvbi92aWV3LyR7dGhpcy5zdWJtaXNzaW9uc1swXS5pZH1gO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWCh0aGlzLnN1Ym1pc3Npb25zWzBdLmRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9uLnByZXZpZXcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIFx0dGhpcy5wcmV2aWV3VHh0ID0gdGhpcy5zdWJtaXNzaW9uLnByZXZpZXcudGV4dDtcclxuICAgICAgICBcdHRoaXMucHJldmlld1RpbWUgPSB0aGlzLiRzaXRlLlRpbWVGb3JtYXR0ZXIucmVsYXRpdmVVTklYKHRoaXMuc3VibWlzc2lvbi5wcmV2aWV3LmRhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgd2F0Y2g6IHtcclxuICAgICAgICBzdWJtaXNzaW9uczogZnVuY3Rpb24oKSB7XHJcblx0ICAgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zdWJtaXNzaW9uLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN1Ym1pc3Npb25zWzBdLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3SW1nID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vdmlldy8ke3RoaXMuc3VibWlzc2lvbnNbMF0uaWR9YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBwcmV2aWV3ZXIoc3VibWlzc2lvbikge1xyXG4gICAgICAgIFx0dGhpcy5wcmV2aWV3VHh0ID0gXCJcXG5cIjtcclxuICAgICAgICBcdHRoaXMucHJldmlld1RpbWUgPSAnJm5ic3A7JztcclxuICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcbiAgICAgICAgICAgIHRoaXMuJHNpdGUuYXBpLmdldChgL2FwaS8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZ2V0LyR7dGhpcy5zdWJtaXNzaW9uLmFzc2lnblRhZ30vJHt0aGlzLnN1Ym1pc3Npb24udGFnfS8ke3N1Ym1pc3Npb24uaWR9YCwge30pXHJcbiAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWlzc2lvbiA9IHJlc3BvbnNlLmdldERhdGEoJ3N1Ym1pc3Npb24nKS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlld1R4dCA9IHN1Ym1pc3Npb24udGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdUaW1lID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLnJlbGF0aXZlVU5JWChzdWJtaXNzaW9uLmRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmlld19pbWcoc3VibWlzc2lvbikge1xyXG5cdCAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc3VibWlzc2lvbi50ZWFtaW5nID09PSBudWxsID8gJ2NvdXJzZScgOiAndGVhbSc7XHJcblx0ICAgICAgICBpZihzdWJtaXNzaW9uLnR5cGUuc3Vic3RyKDAsIDYpID09PSAnaW1hZ2UvJykge1xyXG4gICAgICAgICAgICBcdHRoaXMucHJldmlld0ltZyA9IGAke3RoaXMuJHNpdGUucm9vdH0vY2wvJHtzZXJ2aWNlfS9zdWJtaXNzaW9uL3ZpZXcvJHtzdWJtaXNzaW9uLmlkfWA7XHJcblx0ICAgICAgICAgICAgdGhpcy5wcmV2aWV3VGltZSA9IHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgoc3VibWlzc2lvbi5kYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld0ltZyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFuYWx5c2lzUmVzdWx0KHJlc3VsdCkge1xyXG4gICAgICAgIFx0dGhpcy5yZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cImlzVGV4dCgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0VGV4dCgpXCI+e3tkaXNwbGF5KCl9fTwvYT5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1lbHNlLWlmPVwiaXNJbWFnZSgpXCI+XHJcbiAgICAgIDxhIEBjbGljay5wcmV2ZW50PVwic2VsZWN0XCI+e3tkaXNwbGF5KCl9fTwvYT48bWVudS12dWUgY2xhc3M9XCJmbG9hdC1yaWdodFwiIEBvcGVuPVwic2VsZWN0XCI+PGE+PGltZyA6c3JjPVwicm9vdCArICcvdmVuZG9yL2NsL3NpdGUvaW1nL21lbnViYXJzLnBuZydcIiBhbHQ9XCJNZW51XCI+PC9hPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48YSA6aHJlZj1cInRvRG93bmxvYWRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nJ1wiIGFsdD1cIkRvd25sb2FkXCI+IERvd25sb2FkPC9hPjwvbGk+XHJcbiAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIGFuYWx5c2lzXCI+PGEgQGNsaWNrLnByZXZlbnQ9XCJzaG93QW5hbHlzaXMoaXRlbSlcIj48aW1nIDpzcmM9XCJpdGVtLmljb25cIiA6YWx0PVwiaXRlbS5tZW51XCI+IHt7aXRlbS5tZW51fX08L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L21lbnUtdnVlPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgIDxtZW51LXZ1ZSB2LW9uOm9wZW49XCJzZWxlY3RcIj48YT57e2Rpc3BsYXkoKX19PC9hPjxhIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj48aW1nIDpzcmM9XCJyb290ICsgJy92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nJ1wiIGFsdD1cIk1lbnVcIj48L2E+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxhIDpocmVmPVwidG9Eb3dubG9hZFwiPjxpbWcgOnNyYz1cInJvb3QgKyAnL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmcnXCIgYWx0PVwiRG93bmxvYWRcIj4gRG93bmxvYWQ8L2E+PC9saT5cclxuICAgICAgICAgIDxsaSBAY2xpY2suc3RvcD1cInNob3dBbmFseXNpcyhpdGVtKVwiICB2LWZvcj1cIml0ZW0gaW4gYW5hbHlzaXNcIj48YSBAY2xpY2sucHJldmVudC5zdG9wPVwic2hvd0FuYWx5c2lzKGl0ZW0pXCI+PGltZyA6c3JjPVwiaXRlbS5pY29uXCIgOmFsdD1cIml0ZW0ubWVudVwiPiB7e2l0ZW0ubWVudX19PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9tZW51LXZ1ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gIGltcG9ydCBNZW51VnVlIGZyb20gJ3NpdGUtY2wvanMvVUkvTWVudS52dWUnO1xyXG4gIGNvbnN0IE1lbnVWdWUgPSBTaXRlLlNpdGUuTWVudVZ1ZTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IFRFWFRfVFlQRVMgPSBbJ3RleHQvcGxhaW4nLCAndGV4dC9odG1sJ11cclxuICBleHBvcnQgY29uc3QgSU1HX1RZUEVTID0gWydpbWFnZS9wbmcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9naWYnXTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICBwcm9wczogWydhc3NpZ250YWcnLCAndGFnJywgJ3N1Ym1pc3Npb24nLCAnYW5hbHlzaXMnLCAndGVhbWluZycsICd0eXBlJ10sXHJcbiAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFx0cm9vdDogU2l0ZS5yb290LFxyXG4gICAgICAgICAgICB0b0Rvd25sb2FkOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgIG1lbnVWdWU6IE1lbnVWdWVcclxuICAgICAgfSxcclxuICAgICAgbW91bnRlZCgpIHtcclxuXHQgICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy50ZWFtaW5nICE9PSBudWxsID8gJ3RlYW0nIDogJ2NvdXJzZSc7XHJcblx0ICAgICAgdGhpcy50b0Rvd25sb2FkID0gYCR7dGhpcy4kc2l0ZS5yb290fS9jbC8ke3NlcnZpY2V9L3N1Ym1pc3Npb24vZG93bmxvYWQvJHt0aGlzLnN1Ym1pc3Npb24uaWR9YDtcclxuXHJcblx0ICAgICAgY29uc29sZS5sb2codGhpcy50eXBlKTtcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgaXNUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09ICdwcm9ncmFtJyAmJiBURVhUX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpc0ltYWdlKCkge1xyXG5cdCAgICAgICAgICByZXR1cm4gSU1HX1RZUEVTLmluZGV4T2YodGhpcy5zdWJtaXNzaW9uLnR5cGUpID49IDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkaXNwbGF5KCkge1xyXG4gICAgICAgICAgICAgIGxldCBkaXNwID0gdGhpcy4kc2l0ZS5UaW1lRm9ybWF0dGVyLmFic29sdXRlVU5JWCh0aGlzLnN1Ym1pc3Npb24uZGF0ZSwgXCJsb25nXCIpO1xyXG4gICAgICAgICAgICAgIGlmKHRoaXMuc3VibWlzc2lvbi5uYW1lICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3AgKz0gJzogJyArIHRoaXMuc3VibWlzc2lvbi5uYW1lO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgaWYodGhpcy5zdWJtaXNzaW9uLmJ5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICBcdGRpc3AgKz0gJyBieSAnICsgdGhpcy5zdWJtaXNzaW9uLmJ5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZGlzcDtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZWxlY3RUZXh0KCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3ByZXZpZXcnLCB0aGlzLnN1Ym1pc3Npb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlbGVjdCgpIHtcclxuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdwcmV2aWV3X2ltZycsIHRoaXMuc3VibWlzc2lvbik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2hvd0FuYWx5c2lzKGFuYWx5c2lzKSB7XHJcblx0ICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnRlYW1pbmcgIT09IG51bGwgPyAndGVhbScgOiAnY291cnNlJztcclxuXHQgICAgICAgICAgdGhpcy4kc2l0ZS5hcGkuZ2V0KGAvYXBpLyR7c2VydmljZX0vc3VibWlzc2lvbi9hbmFseXNpcy8ke3RoaXMuYXNzaWdudGFnfS8ke3RoaXMudGFnfS8ke2FuYWx5c2lzLnRhZ30vJHt0aGlzLnN1Ym1pc3Npb24uaWR9YCwge30pXHJcbiAgICAgICAgICBcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIFx0ICAgICAgICBpZiAoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgIFx0ICAgICAgICBcdGNvbnN0IGFuYWx5c2lzUmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgnc3VibWlzc2lvbi1hbmFseXNpcycpLmF0dHJpYnV0ZXM7XHJcbiAgICAgICAgICBcdCAgICAgICAgXHR0aGlzLiRlbWl0KCdyZXN1bHQnLCBhbmFseXNpc1Jlc3VsdCk7XHJcbiAgICAgICAgICBcdCAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBcdCAgICB9KVxyXG4gICAgICAgICAgXHQgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgIFx0ICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICB9XHJcblxyXG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcInRhYmxlIHRyIHRkW2RhdGEtdi1mZTNmOThlOF06bnRoLWNoaWxkKDIpIHtcXG4gIG1pbi13aWR0aDogMTk1cHg7XFxufVxcbmJ1dHRvbltkYXRhLXYtZmUzZjk4ZThdIHtcXG4gIHdpZHRoOiA3ZW07XFxufVxcbmlucHV0W3R5cGU9ZW1haWxdW2RhdGEtdi1mZTNmOThlOF0ge1xcbiAgd2lkdGg6IDE3NXB4O1xcbn1cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bGxcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm1hc2stdnVlXCIsIHsgYXR0cnM6IHsgbWFzazogX3ZtLm1hc2sgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiQ29tbXVuaWNhdGluZyB3aXRoIHNlcnZlci4uLlwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkFzIHByb3ZpZGVkIGJ5IHRoZSByZWdpc3RyYXJzIG9mZmljZVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJVc2VyIElEXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci51c2VySWQpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIkFzIHByb3ZpZGVkIGJ5IHRoZSByZWdpc3RyYXJzIG9mZmljZVwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIV92bS5lZGl0aW5nXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuZW1haWwpKV0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIHNwZWxsY2hlY2s6IFwiZmFsc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJZb3UgYXJlIGFsbG93ZWQgdG8gY2hhbmdlIHlvdXIgZW1haWwgYWRkcmVzc1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTZW1lc3RlclwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIubWVtYmVyLnNlbWVzdGVyKSldKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJTZWN0aW9uXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5tZW1iZXIuc2VjdGlvbikpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiwqBcIildKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgIV92bS5lZGl0aW5nXG4gICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVkaXRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbmNlbCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiwqBcIildKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIsKgXCIpXSksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLCoFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjbC1zdWJtaXNzaW9uXCIgfSxcbiAgICBbXG4gICAgICBfdm0uc3VibWlzc2lvbi5zdWJtaXRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgIV92bS5zdWJtaXNzaW9uLm9wZW5cbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyYm94IGNvbXAgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRoaXMgYXNzaWdubWVudCBpcyBub3Qgb3BlbiBmb3Igc3VibWlzc2lvbnMuXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc3RhZmZcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcmJveCBwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKF92bS5zdWJtaXR0ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBuZXdfc3VibWlzc2lvbnM6IF92bS5uZXdTdWJtaXNzaW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24ub3BlblxuICAgICAgICAgICAgICAgID8gX2MoX3ZtLnN1Ym1pdHRlciwge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN1Ym1pc3Npb246IF92bS5zdWJtaXNzaW9uIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IG5ld19zdWJtaXNzaW9uczogX3ZtLm5ld1N1Ym1pc3Npb25zIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzdWJtaXR0ZWRcIiwge1xuICAgICAgICBhdHRyczogeyBzdWJtaXNzaW9uOiBfdm0uc3VibWlzc2lvbiwgc3VibWlzc2lvbnM6IF92bS5zdWJtaXNzaW9ucyB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc3VibWlzc2lvbi5hZGRpdGlvbmFsICE9PSBudWxsXG4gICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN1Ym1pc3Npb24uYWRkaXRpb25hbCkgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiLi4uU3RhZmYgb25seSBmb3Igc3VibWlzc2lvbiB0ZXN0aW5nLi4uXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHJlZjogXCJmb3JtXCIsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgICB0YXJnZXQ6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZ1xuICAgICAgICB9LFxuICAgICAgICBvbjogeyBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiU3VibWl0OiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmZpbGVzID0gJGV2ZW50LnRhcmdldC5maWxlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInVwbG9hZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIG5hbWU6IFwic3VibWl0XCIsIHZhbHVlOiBcIlVwbG9hZCBGaWxlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpZnJhbWVcIiwge1xuICAgICAgICAgIHJlZjogXCJpZnJhbWVcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IFwiMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvcmRlcjogXCIwcHggc29saWQgI2ZmZlwiLFxuICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwidXBsb2FkX3RhcmdldF9cIiArIF92bS5zdWJtaXNzaW9uLnRhZywgc3JjOiBcIlwiIH0sXG4gICAgICAgICAgb246IHsgbG9hZDogX3ZtLmxvYWQgfVxuICAgICAgICB9KVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZm9ybVwiLFxuICAgICAge1xuICAgICAgICByZWY6IFwiZm9ybVwiLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgICAgdGFyZ2V0OiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWdcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgc3VibWl0OiBfdm0uc3VibWl0IH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwibGFiZWxcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlN1Ym1pdDogXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5maWxlcyA9ICRldmVudC50YXJnZXQuZmlsZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1cGxvYWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBuYW1lOiBcInN1Ym1pdFwiLCB2YWx1ZTogXCJVcGxvYWQgRmlsZVwiIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaWZyYW1lXCIsIHtcbiAgICAgICAgICByZWY6IFwiaWZyYW1lXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiBcIjBcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIwXCIsXG4gICAgICAgICAgICBib3JkZXI6IFwiMHB4IHNvbGlkICNmZmZcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZF90YXJnZXRfXCIgKyBfdm0uc3VibWlzc2lvbi50YWcsIHNyYzogXCJcIiB9LFxuICAgICAgICAgIG9uOiB7IGxvYWQ6IF92bS5sb2FkIH1cbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcImRpdlwiLCB7IHJlZjogXCJlZGl0b3JcIiB9KSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgdmFsdWU6IFwiU3VibWl0XCIgfSB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic2hvdXRvdXRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCJTdWJtaXNzaW9uIHR5cGUgXCIpLFxuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9ucy50eXBlKSldKSxcbiAgICAgIF92bS5fdihcIiBpcyBub3Qgc3VwcG9ydGVkXCIpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbXG4gICAgICAgIF92bS5zdWJtaXNzaW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFyZ2UgY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIk5vIHN1Ym1pc3Npb25zLCB5ZXQuXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdWJtaXNzaW9ucywgZnVuY3Rpb24oc3VibWl0dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdWJtaXR0ZWQtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5zdWJtaXNzaW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ250YWc6IF92bS5zdWJtaXNzaW9uLmFzc2lnblRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogX3ZtLnN1Ym1pc3Npb24udGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWlzc2lvbjogc3VibWl0dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5hbHlzaXM6IF92bS5zdWJtaXNzaW9uLmFuYWx5c2lzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVhbWluZzogX3ZtLnN1Ym1pc3Npb24udGVhbWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogX3ZtLmFuYWx5c2lzUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlld19pbWc6IF92bS5wcmV2aWV3X2ltZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IF92bS5wcmV2aWV3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zdWJtaXNzaW9uLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIkNsaWNrIG9uIGFueSBzdWJtaXNzaW9uIGRhdGUgdG8gZGlzcGxheSB0aGUgc3VibWlzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pc3Npb24udHlwZSA9PT0gXCJwcm9ncmFtXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc3VibWlzc2lvbi50eXBlID09PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiQ2xpY2sgb24gYW55IHN1Ym1pc3Npb24gdG8gdmlldyBhbmQgZm9yIHN1Ym1pc3Npb24gb3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnByZXZpZXdUeHQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldyB5ZWxsb3ctcGFkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcmV2aWV3VHh0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3LXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldmlld1RpbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnJlc3VsdCAhPT0gbnVsbFxuICAgICAgPyBfYyhcInByZVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLWFuYWx5c2lzXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdCkpXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucHJldmlld0ltZyAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX3ZtLnByZXZpZXdJbWcgIT09IG51bGxcbiAgICAgICAgICAgID8gX2MoXCJmaWd1cmVcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1wcmV2aWV3XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0ucHJldmlld0ltZyB9IH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2wtcHJldmlldy10aW1lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJldmlld1RpbWUpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtfYyhcInRoXCIsIFtfdm0uX3YoXCJTdWJtaXNzaW9uc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLmlzVGV4dCgpXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdFRleHQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBfdm0uaXNJbWFnZSgpXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXkoKSkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1lbnUtdnVlXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLCBvbjogeyBvcGVuOiBfdm0uc2VsZWN0IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IFwiTWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLnRvRG93bmxvYWQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucm9vdCArIFwiL3ZlbmRvci9jbC9zaXRlL2ltZy9kb3dubG9hZC5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogXCJEb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvd25sb2FkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FuYWx5c2lzKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmljb24sIGFsdDogaXRlbS5tZW51IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVudSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXCJtZW51LXZ1ZVwiLCB7IG9uOiB7IG9wZW46IF92bS5zZWxlY3QgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJhXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5KCkpKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvbWVudWJhcnMucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIk1lbnVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS50b0Rvd25sb2FkIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLnJvb3QgKyBcIi92ZW5kb3IvY2wvc2l0ZS9pbWcvZG93bmxvYWQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBcIkRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRG93bmxvYWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmFseXNpcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93QW5hbHlzaXMoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaWNvbiwgYWx0OiBpdGVtLm1lbnUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5tZW51KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlM2Y5OGU4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZTdhMTg1NWVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmUzZjk4ZTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlM2Y5OGU4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qKlxyXG4gKiBAZmlsZVxyXG4gKi9cclxuaW1wb3J0IHtTZWN0aW9uU3RhdHVzfSBmcm9tICcuL2pzL1NlY3Rpb25TdGF0dXMnO1xyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9qcy9NZW1iZXJzL01lbWJlcic7XHJcblxyXG5TaXRlLlNlY3Rpb25TdGF0dXMgPSBTZWN0aW9uU3RhdHVzO1xyXG5TaXRlLk1lbWJlciA9IE1lbWJlcjtcclxuXHJcbmltcG9ydCB7Q291cnNlRmFjdG9yeX0gZnJvbSAnLi9qcy9Db3Vyc2VGYWN0b3J5JztcclxuXHJcbi8vIFVzZSB0aGUgZmFjdG9yeSB0byBjcmVhdGUgdGhlIFVzZXJzIG9iamVjdFxyXG5sZXQgQ291cnNlID0gQ291cnNlRmFjdG9yeS5jcmVhdGUoU2l0ZS5zaXRlKTtcclxuZXhwb3J0IHtDb3Vyc2V9O1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZlM2Y5OGU4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlM2Y5OGU4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZmUzZjk4ZThcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmZTNmOThlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmZTNmOThlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWJvdXRNZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmUzZjk4ZTgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmUzZjk4ZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvQWJvdXRNZS9BYm91dE1lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0TWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dE1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZTNmOThlOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXRNZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmUzZjk4ZTgmc2NvcGVkPXRydWUmXCIiLCIvKipcclxuICogQ291cnNlIG9iamVjdC5cclxuICpcclxuICogU2l0ZS5Db3Vyc2UgaXMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBvYmplY3QuXHJcbiAqXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IENvdXJzZSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0NvdXJzZX0gZnJvbSAnLi9Db3Vyc2UnO1xyXG5pbXBvcnQge01lbWJlcn0gZnJvbSAnLi9NZW1iZXJzL01lbWJlcic7XHJcblxyXG5pbXBvcnQge1N0b3JlTW9kdWxlQ291cnNlfSBmcm9tICcuL1N0YXRlL1N0b3JlTW9kdWxlQ291cnNlJztcclxuaW1wb3J0IHtTZWN0aW9uU2VsZWN0b3J9IGZyb20gJy4vU2VjdGlvblNlbGVjdG9ycy9TZWN0aW9uU2VsZWN0b3InO1xyXG5pbXBvcnQge1N1Ym1pc3Npb259IGZyb20gJy4vU3VibWlzc2lvbi9TdWJtaXNzaW9uJztcclxuaW1wb3J0IHtFcnJvckhlbHB9IGZyb20gJy4vRXJyb3JIZWxwL0Vycm9ySGVscCc7XHJcbmltcG9ydCB7U3Bvb2ZpbmdSZXN0b3JlfSBmcm9tICcuL1V0aWwvU3Bvb2ZpbmdSZXN0b3JlJztcclxuaW1wb3J0IEFib3V0TWVWdWUgZnJvbSAnLi9BYm91dE1lL0Fib3V0TWUudnVlJztcclxuXHJcbmltcG9ydCB7U2VjdGlvblN0YXR1c30gZnJvbSAnLi9TZWN0aW9uU3RhdHVzJztcclxuXHJcbi8qKlxyXG4gKiBGYWN0b3J5IHRvIGNyZWF0ZSB0aGUgQ291cnNlIG9iamVjdC5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ291cnNlRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vKipcclxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgQ291cnNlIG9iamVjdC5cclxuICpcclxuICogVGhpcyBhbGxvd3MgZm9yIGluamVjdGlvbiBvZiB0aGUgc3RvcmUgZm9yIHRlc3RpbmcgcHVycG9zZXMuXHJcbiAqIEBwYXJhbSBzaXRlIFRoZSBTaXRlIG9iamVjdFxyXG4gKiBAcmV0dXJuIHtDb3Vyc2V9IG9iamVjdC5cclxuICovXHJcbkNvdXJzZUZhY3RvcnkuY3JlYXRlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIGxldCBjb3Vyc2UgPSBuZXcgQ291cnNlKCk7XHJcblxyXG4gICAgc2l0ZS5Db3Vyc2UgPSBjb3Vyc2U7XHJcblxyXG4gICAgLy9cclxuICAgIC8vIE1vZGlmeSBVc2VyIHRvIGFkZCB0aGUgYWJpbGl0eSB0byBpbnN0YW50aWF0ZVxyXG4gICAgLy8gYW4gYXBwcm9wcmlhdGUgTWVtYmVyIG9iamVjdFxyXG4gICAgLy9cclxuICAgIFVzZXJzLlVzZXIuaW5zdGFudGlhdGVNZW1iZXIgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYoZGF0YS5tZW1iZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNZW1iZXIoZGF0YS5tZW1iZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBTdG9yZU1vZHVsZVVzZXJzID0gc2l0ZS5TdG9yZU1vZHVsZVVzZXJzO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBJbnN0YWxsIHRoZSBjb3Vyc2Ugc3RvcmUgbW9kdWxlc1xyXG4gICAgLy9cclxuICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XHJcbiAgICBpZihzdG9yZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ2NvdXJzZScsIFN0b3JlTW9kdWxlQ291cnNlKTtcclxuICAgICAgICBzdG9yZS5yZWdpc3Rlck1vZHVsZSgnbWVtYmVycycsIFN0b3JlTW9kdWxlVXNlcnMuY3JlYXRlKFxyXG4gICAgICAgICAgICAnL2FwaS9jb3Vyc2UvbWVtYmVycycsXHJcbiAgICAgICAgICAgICh1c2VyKSA9PiB7cmV0dXJuIHVzZXIubWVtYmVyLmlkOyB9XHJcbiAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2l0ZS5yZWFkeSgoKSA9PiB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBEZXRlY3QgdGhlIHBhc3NlZCBpbiBjb3Vyc2UgZGVmaW5pdGlvbiBpbmZvcm1hdGlvblxyXG4gICAgICAgIC8vIGFuZCBhZGQgaXQgdG8gdGhlIHN0b3JlLlxyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGxldCBlbjtcclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLWNvdXJzZScpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2NvdXJzZS9zZXQnLCBKU09OLnBhcnNlKGVuLnRleHRDb250ZW50KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLWNvdXJzZS1zdGFmZicpKSkge1xyXG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2NvdXJzZS9zZXRTdGFmZicsIEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gV2UgaGF2ZSBtb2RpZmllZCB0aGUgVXNlciBvYmplY3Qgc28gdGhhdCBpdCB3aWxsIGtub3dcclxuICAgICAgICAvLyBob3cgdG8gYXR0YWNoIGEgbWVtYmVyc2hpcC4gVGhpcyBtZWFucyB3ZSBtdXN0IHJlbG9hZFxyXG4gICAgICAgIC8vIHRoZSB1c2VyIGluZm9ybWF0aW9uIHNvIGl0IGNhbiBjcmVhdGUgYSBuZXcgb2JqZWN0XHJcbiAgICAgICAgLy9cclxuICAgICAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXVzZXInKSkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCd1c2VyL3NldCcsIEpTT04ucGFyc2UoZW4udGV4dENvbnRlbnQpKTtcclxuICAgICAgICB9XHJcblxyXG5cdCAgICBzaXRlLlBhZ2VWdWUuY3JlYXRlKCdkaXYuY2wtY291cnNlLWFib3V0bWUnLCAnRXhhbXBsZSBWdWUnLCBBYm91dE1lVnVlLCBzaXRlLlBhZ2VOYXYpO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgc2l0ZS5zdGFydCgoKSA9PiB7XHJcbiAgICAgICAgU2VjdGlvblNlbGVjdG9yLmluc3RhbGwoc2l0ZSk7XHJcbiAgICAgICAgU3VibWlzc2lvbi5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIEVycm9ySGVscC5pbnN0YWxsKHNpdGUpO1xyXG4gICAgICAgIFNwb29maW5nUmVzdG9yZS5pbnN0YWxsKHNpdGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICBzaXRlLlNlY3Rpb25TdGF0dXMgPSBTZWN0aW9uU3RhdHVzO1xyXG5cclxuICAgIHJldHVybiBjb3Vyc2U7XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBFcnJvckhlbHAgPSBmdW5jdGlvbihlbGVtZW50LCBzaXRlKSB7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgaWYoY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgYnV0dG9uLnZhbHVlID0gXCJFcnJvciBIZWxwXCI7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcblxyXG4gICAgbGV0IHVybCA9IFNpdGUucm9vdCArICcvY2wvZXJyb3JoZWxwJztcclxuICAgIGlmKG9wdGlvbnMuYXNzaWduICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy5hc3NpZ247XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMudGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMudGFnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZW5jb2RlVVJJKGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkudHJpbSgpKTtcclxuICAgICAgICB3aW5kb3cub3BlbihgJHt1cmx9P2U9JHtlcnJvcn1gLCBcIkVycm9yIEhlbHBcIiwgJ3dpZHRoPTYwMCwgaGVpZ2h0PTUwMCwgc2Nyb2xsYmFycz15ZXMnKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbkVycm9ySGVscC5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLWVycm9yLWhlbHAnKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3IEVycm9ySGVscChlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlIE1lbWJlciBvZiBhIGNvdXJzZVxyXG4gKiBBdHRhY2hlcyB0byBhIHVzZXIgT2JqZWN0XHJcbiAqL1xyXG5cclxuaW1wb3J0IHtNZW1iZXJzaGlwfSBmcm9tICcuLi8uLi8uLi91c2Vycy9qcy9Vc2Vycy9NZW1iZXJzaGlwLmpzJztcclxuXHJcbmxldCBNZW1iZXIgPSBmdW5jdGlvbihqc29uKSB7XHJcbiAgICBNZW1iZXJzaGlwLmNhbGwodGhpcyk7XHJcblxyXG4gICAgbGV0IHJvbGUgPSAnRyc7XHJcblxyXG4gICAgaWYoanNvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGpzb24uaWQ7XHJcbiAgICAgICAgdGhpcy5zZW1lc3RlciA9IGpzb24uc2VtZXN0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uID0ganNvbi5zZWN0aW9uO1xyXG4gICAgICAgIHJvbGUgPSBqc29uLnJvbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaWQgPSAwOyAgICAvLyBTeXN0ZW0gbWVtYmVyc2hpcCBJRFxyXG4gICAgICAgIHRoaXMuc2VtZXN0ZXIgPSBudWxsOyAgIC8vIFNlbWVzdGVyIGNvZGVcclxuICAgICAgICB0aGlzLnNlY3Rpb24gPSBudWxsOyAgLy8gU2VjdGlvbiBJZFxyXG4gICAgICAgIHJvbGUgPSBudWxsOyAgICAgICAvLyBNZW1iZXJzaGlwIHJvbGVcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvbGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm9sZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFJvbGUgPSBmdW5jdGlvbihyb2xlXykge1xyXG4gICAgICAgIHJvbGUgPSByb2xlXztcclxuICAgIH1cclxufVxyXG5cclxuTWVtYmVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoTWVtYmVyc2hpcC5wcm90b3R5cGUpO1xyXG5NZW1iZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWVtYmVyO1xyXG5cclxuLyoqXHJcbiAqIEdldCB0aGUgY291cnNlIHNlY3Rpb24gZm9yIGEgbWVtYmVyXHJcbiAqIEBwYXJhbSBzdG9yZSBWdWV4IHN0b3JlXHJcbiAqIEByZXR1cm5zIHsqfVxyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRTZWN0aW9uID0gZnVuY3Rpb24oc3RvcmUpIHtcclxuICAgIHJldHVybiBzdG9yZS5nZXR0ZXJzWydjb3Vyc2Uvc2VjdGlvbiddKHRoaXMuc2VtZXN0ZXIsIHRoaXMuc2VjdGlvbik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgYW4gYXNzaWdubWVudCBmb3IgYSBtZW1iZXJcclxuICogQHBhcmFtIHN0b3JlIFZ1ZXggc3RvcmVcclxuICogQHBhcmFtIGFzc2lnbnRhZyBBc3NpZ25tZW50IHRhZ1xyXG4gKi9cclxuTWVtYmVyLnByb3RvdHlwZS5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24oc3RvcmUsIGFzc2lnbnRhZykge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihzdG9yZSk7XHJcbiAgICByZXR1cm4gc2VjdGlvbi5nZXRBc3NpZ25tZW50KGFzc2lnbnRhZyk7XHJcbn1cclxuXHJcblxyXG4vLyBUaGUgcG9zc2libGUgbWVtYmVyIHJvbGVzXHJcbi8vIE11c3QgbWF0Y2ggdmFsdWVzIGluIE1lbWJlci5waHBcclxuTWVtYmVyLkdVRVNUID0gJ0cnOyAgICAgLy8vPCBHdWVzdCB1c2VyIHZpc2l0aW5nIHRoZSBzaXRlXHJcbk1lbWJlci5VU0VSID0gJ1UnOyAgICAgIC8vLzwgU3RhbmRhcmQgdXNlciBmcm9tIFVzZXIsIGRvbid0IHVzZSBmb3IgTWVtYmVyXHJcbk1lbWJlci5EUk9QUEVEID0gJ0QnOyAgIC8vLzwgVXNlciBoYXMgZHJvcHBlZCB0aGUgY291cnNlXHJcbk1lbWJlci5TVFVERU5UID0gJ1QnOyAgIC8vLzwgRW5yb2xsZWQgc3R1ZGVudCBpbiBjb3Vyc2VcclxuTWVtYmVyLlNUQUZGID0gJ1MnOyAgICAgLy8vPCBBbnkgY291cnNlIHN0YWZmXHJcbk1lbWJlci5HUkFERVIgPSAnUic7ICAgIC8vLzwgR3JhZGVyc1xyXG5NZW1iZXIuVUxBID0gJ0wnOyAgICAgICAvLy88IFVuZGVyZ3JhZHVhdGUgTGVhcm5pbmcgQXNzaXN0YW50XHJcbk1lbWJlci5UQSA9ICdFJzsgICAgICAgIC8vLzwgVGVhY2hpbmcgYXNzaXN0YW50XHJcbk1lbWJlci5JTlNUUlVDVE9SID0gJ0knOyAgICAvLy88IENvdXJzZSBpbnN0cnVjdG9yXHJcbk1lbWJlci5BRE1JTiA9ICdBJzsgICAgIC8vLzwgQWRtaW5cclxuXHJcbk1lbWJlci5wcm90b3R5cGUuZ2V0Um9sZXMgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCByb2xlcyA9IHt9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkdVRVNUXSA9IHtuYW1lOiAnR3Vlc3QnLCBwcmlvcml0eTogMX07XHJcbiAgICByb2xlc1tNZW1iZXIuRFJPUFBFRF0gPSB7bmFtZTogJ0Ryb3BwZWQnLCBwcmlvcml0eTogMn07XHJcbiAgICByb2xlc1tNZW1iZXIuVVNFUl0gPSB7bmFtZTogJ1VzZXInLCBwcmlvcml0eTogMywgc2tpcDogdHJ1ZX07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RVREVOVF0gPSB7bmFtZTogJ1N0dWRlbnQnLCBwcmlvcml0eTogNH07XHJcbiAgICByb2xlc1tNZW1iZXIuU1RBRkZdID0ge25hbWU6ICdTdGFmZicsIHByaW9yaXR5OiA1LCBza2lwOiB0cnVlfTtcclxuXHRyb2xlc1tNZW1iZXIuR1JBREVSXSA9IHtuYW1lOiAnR3JhZGVyJywgcHJpb3JpdHk6IDZ9O1xyXG5cdHJvbGVzW01lbWJlci5VTEFdID0ge25hbWU6ICdVbmRlcmdyYWR1YXRlIExlYXJuaW5nIEFzc2lzdGFudCcsIHNob3J0OiAnVUxBJywgcHJpb3JpdHk6IDd9O1xyXG4gICAgcm9sZXNbTWVtYmVyLlRBXSA9IHtuYW1lOiAnVGVhY2hpbmcgQXNzaXN0YW50JywgcHJpb3JpdHk6IDh9O1xyXG4gICAgcm9sZXNbTWVtYmVyLklOU1RSVUNUT1JdID0ge25hbWU6ICdJbnN0cnVjdG9yJywgcHJpb3JpdHk6IDl9O1xyXG4gICAgcm9sZXNbTWVtYmVyLkFETUlOXSA9IHtuYW1lOiAnQWRtaW4nLCBwcmlvcml0eTogMTAwfTtcclxuXHJcbiAgICByZXR1cm4gcm9sZXM7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge01lbWJlcn07XHJcblxyXG5cclxuXHJcbiIsIlxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudCA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGZvcihsZXQgcHJvcGVydHkgaW4gZGF0YSkge1xyXG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBc3NpZ25tZW50fSBmcm9tICcuL0Fzc2lnbm1lbnQnO1xyXG5cclxuZXhwb3J0IGxldCBBc3NpZ25tZW50Q2F0ZWdvcnkgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICB0aGlzLnRhZyA9IGRhdGEudGFnO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5ncmFkaW5nID0gZGF0YS5ncmFkaW5nICE9PSB1bmRlZmluZWQgPyBkYXRhLmdyYWRpbmcgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBbXTtcclxuICAgIHRoaXMuYXNzaWdubWVudHNCeVRhZyA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgYXNzaWduIG9mIGRhdGEuYXNzaWdubWVudHMpIHtcclxuICAgICAgICBjb25zdCBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoYXNzaWduKTtcclxuICAgICAgICB0aGlzLmFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25tZW50c0J5VGFnW2Fzc2lnbm1lbnQudGFnXSA9IGFzc2lnbm1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgY29uc3QgYXNzaWdubWVudCA9IHRoaXMuYXNzaWdubWVudHNCeVRhZ1t0YWddO1xyXG4gICAgICAgIHJldHVybiBhc3NpZ25tZW50ICE9PSB1bmRlZmluZWQgPyBhc3NpZ25tZW50IDogbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7QXNzaWdubWVudENhdGVnb3J5fSBmcm9tICcuL0Fzc2lnbm1lbnRDYXRlZ29yeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQXNzaWdubWVudHMgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XHJcbiAgICBmb3IobGV0IGNhdGVnb3J5IG9mIGRhdGEuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ldyBBc3NpZ25tZW50Q2F0ZWdvcnkoY2F0ZWdvcnkpKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QXNzaWdubWVudCA9IGZ1bmN0aW9uKHRhZykge1xyXG4gICAgICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhc3NpZ25tZW50ID0gY2F0ZWdvcnkuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgICAgICAgICBpZihhc3NpZ25tZW50ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzaWdubWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEFic3RyYWN0aW9uIG9mIHRoZSBjdXJyZW50IGNvdXJzZVxyXG4gKi9cclxuXHJcbmltcG9ydCB7U2VjdGlvbn0gZnJvbSAnLi9TZWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb3Vyc2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG4gICAgdGhpcy5hY2NvdW50ID0gZGF0YS5hY2NvdW50O1xyXG4gICAgdGhpcy5kZXNjID0gZGF0YS5kZXNjO1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG4gICAgdGhpcy5zZWN0aW9uc0J5SWQgPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IHNlY3Rpb24gb2YgZGF0YS5zZWN0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IHMgPSBuZXcgU2VjdGlvbihzZWN0aW9uKTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zQnlJZFtzZWN0aW9uLmlkXSA9IHM7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0Fzc2lnbm1lbnRzfSBmcm9tICcuL0Fzc2lnbm1lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcbiAgICB0aGlzLnNlbWVzdGVyID0gZGF0YS5zZW1lc3RlcjtcclxuICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcclxuICAgIHRoaXMuYXNzaWdubWVudHMgPSBuZXcgQXNzaWdubWVudHMoZGF0YS5hc3NpZ25tZW50cyk7XHJcblxyXG4gICAgdGhpcy5nZXRBc3NpZ25tZW50ID0gZnVuY3Rpb24odGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudHMuZ2V0QXNzaWdubWVudCh0YWcpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBUaGUgc2VjdGlvbiBzZWxlY3RvciBwYWdlIC9jbC9zZWN0aW9uc2VsZWN0b3JcclxuICogQHBhcmFtIGVsZW1lbnQgUGFnZSBlbGVtZW50ICgjY2wtc2VjdGlvbi1zZWxlY3RvcilcclxuICogQHBhcmFtIHNpdGUgU2l0ZSBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IFNlY3Rpb25TZWxlY3RvciA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcclxuICAgIGxldCBWdWUgPSBzaXRlLlZ1ZTtcclxuXHJcbiAgICBjb25zdCBpbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gaW5mby5zZWN0aW9ucztcclxuICAgIGNvbnN0IGJlZm9yZSA9IGluZm8uYmVmb3JlO1xyXG4gICAgY29uc3QgYWZ0ZXIgPSBpbmZvLmFmdGVyO1xyXG5cclxuICAgIGxldCB0ZW1wbGF0ZSA9IGBcclxuPGRpdiBpZD1cImNsLXNlY3Rpb24tc2VsZWN0b3JcIj5cclxuICA8c2l0ZS1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIj48L3NpdGUtaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPGRpdiB2LWh0bWw9XCJiZWZvcmVcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyYm94IGNsLXNlbGVjdG9yXCI+XHJcbiAgICAgICAgICA8cCB2LWZvcj1cInNlY3Rpb24gaW4gc2VjdGlvbnNcIj48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwic2VsZWN0KHNlY3Rpb24pXCI+e3tzZWN0aW9uLmNvdXJzZX19IHt7c2VjdGlvbi5uaWNlfX0gU2VjdGlvbiB7e3NlY3Rpb24uc2VjdGlvbn19PC9idXR0b24+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIiB2LWh0bWw9XCJhZnRlclwiPjwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICA8c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj5cclxuPC9kaXY+YDtcclxuXHJcbiAgICBjb25zdCBIZWFkZXIgPSBzaXRlLmluZm8uaGVhZGVyLmNvbXBvbmVudCgpO1xyXG4gICAgY29uc3QgRm9vdGVyID0gc2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICBsZXQgcm91dGVyID0gbmV3IFNpdGUuVnVlUm91dGVyKHtcclxuICAgICAgICBtb2RlOiAnaGlzdG9yeScsXHJcbiAgICAgICAgcm91dGVzOiBbXVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IFZ1ZSh7XHJcbiAgICAgICAgcm91dGVyLFxyXG4gICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTZWN0aW9uIFNlbGVjdG9yJyxcclxuICAgICAgICAgICAgYmVmb3JlOiBiZWZvcmUsXHJcbiAgICAgICAgICAgIGFmdGVyOiBhZnRlcixcclxuICAgICAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uKHNlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VtZXN0ZXI6IHNlY3Rpb24uc2VtZXN0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbi5zZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3NlY3Rpb25zZWxlY3QnLCBwYXJhbXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpdGUudG9hc3QodGhpcywgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdGhpcy5yZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0ID0gdGhpcy4kcm91dGUucXVlcnkudTtcclxuICAgICAgICAgICAgaWYodGhpcy5yZWRpcmVjdCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QgPSBTaXRlLnJvb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuU2VjdGlvblNlbGVjdG9yLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZW47XHJcbiAgICBpZiggKGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsLXNlY3Rpb24tc2VsZWN0b3InKSkgIT09IG51bGwpIHtcclxuICAgICAgICBuZXcgU2VjdGlvblNlbGVjdG9yKGVuLCBzaXRlKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogQ29uc3RhbnRzIHRoYXQgcmVwcmVzZW50IFNlY3Rpb25TdGF0dXMgcG9zc2libGUgdmFsdWVzLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgU2VjdGlvblN0YXR1cyA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG4vLyBDb25zdGFudHMgbXVzdCBtYXRjaCB0aG9zZSBpbiBTZWN0aW9uU3RhdHVzLnBocFxyXG5TZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQgPSAnTic7XHQvLy88ICVTZWN0aW9uIGhhcyBub3QgYmVlbiB2aXNpdGVkIGJ5IHRoZSB1c2VyXHJcblNlY3Rpb25TdGF0dXMuVklTSVRFRCA9ICdWJztcdCAgICAvLy88ICVTZWN0aW9uIGhhcyBiZWVuIHZpc2l0ZWQsIGJ1dCBpcyBub3QgeWV0IGRvbmVcclxuU2VjdGlvblN0YXR1cy5ET05FID0gJ0QnO1x0XHQgICAgLy8vPCAlU2VjdGlvbiBpcyBjb21wbGV0ZWRcclxuXHJcblNlY3Rpb25TdGF0dXMudG9TdHJpbmcgPSBmdW5jdGlvbihzdGF0dXMpIHtcclxuICAgIGlmKHN0YXR1cyA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoKHN0YXR1cyl7XHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLk5PVFZJU0lURUQ6XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuICdOb3QgeWV0IHZpc2l0ZWQnO1xyXG5cclxuICAgICAgICBjYXNlIFNlY3Rpb25TdGF0dXMuVklTSVRFRDpcclxuICAgICAgICAgICAgcmV0dXJuICdWaXNpdGVkJztcclxuXHJcbiAgICAgICAgY2FzZSBTZWN0aW9uU3RhdHVzLkRPTkU6XHJcbiAgICAgICAgICAgIHJldHVybiAnQ29tcGxldGVkJztcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogVGhlIFZ1ZXggc3RvcmUgbW9kdWxlIGZvciBjb3Vyc2VcclxuICovXHJcblxyXG5pbXBvcnQge0NvdXJzZX0gZnJvbSAnLi4vTW9kZWxzL0NvdXJzZSc7XHJcblxyXG5leHBvcnQgbGV0IFN0b3JlTW9kdWxlQ291cnNlID0ge1xyXG4gICAgbmFtZXNwYWNlZDogdHJ1ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgICAgY291cnNlOiBudWxsLFxyXG4gICAgICAgIHN0YWZmOiBbXVxyXG4gICAgfSxcclxuICAgIG11dGF0aW9uczoge1xyXG4gICAgICAgIHNldChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5jb3Vyc2UgPSBuZXcgQ291cnNlKGRhdGEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRTdGFmZihzdGF0ZSwgZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgc3RhZmYgPSB7fTtcclxuICAgICAgICAgICAgZm9yKGxldCBkIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXJzLlVzZXIoZCk7XHJcbiAgICAgICAgICAgICAgICBzdGFmZlt1c2VyLm1lbWJlci5pZF0gPSB1c2VyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdGF0ZS5zdGFmZiA9IHN0YWZmO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXR0ZXJzOiB7XHJcbiAgICAgICAgc2VjdGlvbjogKHN0YXRlKSA9PiAoc2VtZXN0ZXIsIHNlY3Rpb25JZCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IHNlY3Rpb24gb2Ygc3RhdGUuY291cnNlLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZihzZWN0aW9uLnNlbWVzdGVyID09PSBzZW1lc3RlciAmJiBzZWN0aW9uLmlkID09PSBzZWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NpZ25tZW50OiAoc3RhdGUsIGdldHRlcnMpID0+IChzZW1lc3Rlciwgc2VjdGlvbklkLCBhc3NpZ25UYWcpID0+IHtcclxuICAgICAgICAgICAgZm9yKGxldCBzZWN0aW9uIG9mIHN0YXRlLmNvdXJzZS5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYoc2VjdGlvbi5zZW1lc3RlciA9PT0gc2VtZXN0ZXIgJiYgc2VjdGlvbi5pZCA9PT0gc2VjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhZmY6IChzdGF0ZSkgPT4gKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gc3RhdGUuc3RhZmZbaWRdO1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gdW5kZWZpbmVkID8gdXNlciA6IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgU3VibWlzc2lvblZ1ZSBmcm9tICcuL1N1Ym1pc3Npb24udnVlJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJtaXNzaW9uID0gZnVuY3Rpb24oZWxlbWVudCwgc2l0ZSkge1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pc3Npb24gPSBKU09OLnBhcnNlKGVsZW1lbnQudGV4dENvbnRlbnQpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG5cclxuICAgIG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgc3RvcmUsXHJcblx0ICAgIHNpdGUsXHJcbiAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXNzaW9uOiBzdWJtaXNzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgc3VibWlzc2lvblZ1ZTogU3VibWlzc2lvblZ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8c3VibWlzc2lvbi12dWUgOnN1Ym1pc3Npb249XCJzdWJtaXNzaW9uXCI+PC9zdWJtaXNzaW9uLXZ1ZT5gXHJcbiAgICB9KVxyXG59XHJcblxyXG5TdWJtaXNzaW9uLmluc3RhbGwgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2wtc3VibWlzc2lvbicpO1xyXG4gICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBuZXcgU3VibWlzc2lvbihlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTVmNDY2MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTVmNDY2MDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pc3Npb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1ZjQ2NjAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE1ZjQ2NjAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWlzc2lvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXNzaW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWlzc2lvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVmNDY2MDAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXRJbWFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDJiNjIwYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDJiNjIwYzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMmI2MjBjMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdEltYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0SW1hZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdEltYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMmI2MjBjMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWExZTU3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0UHJvZ3JhbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FhMWU1NzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FhMWU1NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRQcm9ncmFtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFByb2dyYW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRQcm9ncmFtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWExZTU3MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMTFkMGE5OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMTFkMGE5OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0VGV4dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzExZDBhOTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzExZDBhOTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRUZXh0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFRleHQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTFkMGE5OSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNmZkNDgwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNmZkNDgwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0VW5rbm93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZmZDQ4MGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDZmZDQ4MGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb3Vyc2UvanMvU3VibWlzc2lvbi9TdWJtaXRVbmtub3duLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdFVua25vd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXRVbmtub3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNmZkNDgwZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxjaGFybFxcXFxEb2N1bWVudHNcXFxcQ2xhc3Nlc1xcXFxDU0UzMjBcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MjRkYWQ3NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU3VibWl0dGVkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjRkYWQ3NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0MjRkYWQ3NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvdXJzZS9qcy9TdWJtaXNzaW9uL1N1Ym1pdHRlZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Ym1pdHRlZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI0ZGFkNzcmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzIwXFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTA2OTQzYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTA2OTQzYWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1Ym1pdHRlZEl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwNjk0M2FhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUwNjk0M2FhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY291cnNlL2pzL1N1Ym1pc3Npb24vU3VibWl0dGVkSXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TdWJtaXR0ZWRJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3VibWl0dGVkSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA2OTQzYWEmXCIiLCJcclxuZXhwb3J0IGNvbnN0IFNwb29maW5nUmVzdG9yZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNpdGUpIHtcclxuXHJcbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XHJcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NsLWhvbWUtY29udHJvbCcpO1xyXG5cclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdyZXN0b3JlJztcclxuICAgIHAuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuXHJcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICBzaXRlLmFwaS5wb3N0KCcvYXBpL2NvdXJzZS9tZW1iZXJzL3Nwb29mJywge3Jlc3RvcmU6IHRydWV9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2UuaGFzRXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHNpdGUucm9vdCArICcvJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgU2l0ZS50b2FzdCh0aGlzLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBTaXRlLnRvYXN0KHRoaXMsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgIC8vIGNvbnN0IGNvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgLy8gaWYoY29udGVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgb3B0aW9ucyA9IEpTT04ucGFyc2UoZWxlbWVudC50ZXh0Q29udGVudCk7XHJcbiAgICAvLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgIC8vXHJcbiAgICAvLyBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIC8vIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIC8vIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgLy9cclxuICAgIC8vIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgLy8gYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgLy8gYnV0dG9uLnZhbHVlID0gXCJFcnJvciBIZWxwXCI7XHJcbiAgICAvLyBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IHVybCA9IFNpdGUucm9vdCArICcvY2wvZXJyb3JoZWxwJztcclxuICAgIC8vIGlmKG9wdGlvbnMuYXNzaWduICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICB1cmwgKz0gJy8nICsgb3B0aW9ucy5hc3NpZ247XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmKG9wdGlvbnMudGFnICE9PSB1bmRlZmluZWQpIHtcclxuICAgIC8vICAgICAgICAgdXJsICs9ICcvJyArIG9wdGlvbnMudGFnO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGNvbnN0IGVycm9yID0gZW5jb2RlVVJJKGlucHV0LnZhbHVlLnRvVXBwZXJDYXNlKCkudHJpbSgpKTtcclxuICAgIC8vICAgICB3aW5kb3cub3BlbihgJHt1cmx9P2U9JHtlcnJvcn1gLCBcIkVycm9yIEhlbHBcIiwgJ3dpZHRoPTYwMCwgaGVpZ2h0PTUwMCwgc2Nyb2xsYmFycz15ZXMnKTtcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcblNwb29maW5nUmVzdG9yZS5pbnN0YWxsID0gZnVuY3Rpb24oc2l0ZSkge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmNsLXNwb29maW5nLXJlc3RvcmUnKTtcclxuICAgIGZvcihsZXQgaT0wOyBpPGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbmV3IFNwb29maW5nUmVzdG9yZShlbGVtZW50c1tpXSwgc2l0ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBmaWxlXHJcbiAqIEEgbWVtYmVyc2hpcCBhc3NvY2lhdGVkIHdpdGggYSB1c2VyLlxyXG4gKlxyXG4gKiBUaGlzIGlzIGEgYmFzZSBvYmplY3QgdGhhdCB3aWxsIGJlIGluaGVyaXRlZCBieVxyXG4gKiBhY3R1YWwgbWVtYmVyc2hpcCBvYmplY3RzLlxyXG4gKi9cclxuXHJcbnZhciBNZW1iZXJzaGlwID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8vIFRoZSBVc2VyIG9iamVjdCBmb3IgdGhpcyBtZW1iZXJzaGlwXHJcbiAgICB0aGlzLnVzZXIgPSBudWxsO1xyXG59XHJcblxyXG5leHBvcnQge01lbWJlcnNoaXB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9