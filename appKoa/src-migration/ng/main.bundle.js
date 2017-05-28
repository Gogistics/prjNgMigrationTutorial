webpackJsonp([1,5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRANSLATION; });
var TRANSLATION = "\n<?xml version='1.0' encoding='utf-8'?>\n<xliff xmlns=\"urn:oasis:names:tc:xliff:document:1.2\" version=\"1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"a05c3a315a6ee3e6ad4733a1f72e8d16775810ca\" datatype=\"html\" approved=\"yes\">\n        <source>Hello i18n</source>\n        <target state=\"translated\">Bonjour i18n</target>\n        <note priority=\"1\" from=\"description\">an introduction header for this sample</note>\n      </trans-unit>\n      <trans-unit id=\"330f03dd7f1beb59f825b8a1e19aa3b4c363c135\" datatype=\"html\" approved=\"yes\">\n        <source>This is a sample of internationalization in Angular2.</source>\n        <target state=\"translated\">Ceci est un exemple d'internationalisation avec Angular2.</target>\n        <note priority=\"1\" from=\"description\">a paragraph explaining what this sample is</note>\n      </trans-unit>\n      <trans-unit id=\"2e9f59ccc95e6f62d9b746d04a12d892de43c7e6\" datatype=\"html\" approved=\"yes\">\n        <source>Attribute sample</source>\n        <target state=\"translated\">Exemple d'attribut</target>\n      </trans-unit>\n      <trans-unit id=\"533b2b9a76ee1335cb44c01f0bfd50d43e9400b0\" datatype=\"html\" approved=\"yes\">\n        <source>Your name</source>\n        <target state=\"translated\">Votre nom</target>\n        <note priority=\"1\" from=\"description\">a placeholder for field collecting the user's name</note>\n      </trans-unit>\n      <trans-unit id=\"3a64caf216dac5b830519cddbf59421c3a4730cf\" datatype=\"html\" approved=\"yes\">\n       <source>Multiple Element Sample</source>\n       <target state=\"translated\">Exemple avec plusier \u00E9l\u00E9ments</target>\n      </trans-unit>\n      <trans-unit id=\"a38f08018348aefa90b876185b02cd3baf2a5e8c\" datatype=\"html\" approved=\"yes\">\n        <source>\n          <x id=\"START_PARAGRAPH\" ctype=\"p\"/>Element 1<x id=\"CLOSE_PARAGRAPH\" ctype=\"p\"/>\n          <x id=\"START_PARAGRAPH\" ctype=\"p\"/>Element 2<x id=\"CLOSE_PARAGRAPH\" ctype=\"p\"/>\n        </source> \n        <target state=\"translated\">\n          <x id=\"START_PARAGRAPH\" ctype=\"p\"/>El\u00E9ment 1<x id=\"CLOSE_PARAGRAPH\" ctype=\"p\"/>\n          <x id=\"START_PARAGRAPH\" ctype=\"p\"/>El\u00E9ment 2<x id=\"CLOSE_PARAGRAPH\" ctype=\"p\"/>\n        </target>\n        <note priority=\"1\" from=\"description\">multiple element examples</note>\n      </trans-unit>\n      <trans-unit id=\"3782a1b759c918ef77cd145ef9ac974de4c3f18a\" datatype=\"html\" approved=\"yes\">\n        <source>Meaning Sample</source>\n        <target state=\"translated\">Exemple de sens</target>\n      </trans-unit>\n      <trans-unit id=\"cb34c494bf21eb1f8b8ceeccb1a71a5f8ebb1a5c\" datatype=\"html\" approved=\"yes\">\n        <source>Hello <x id=\"INTERPOLATION\"/></source>\n        <target state=\"translated\">Bonjour <x id=\"INTERPOLATION\"/></target>\n        <note priority=\"1\" from=\"description\">a message welcoming the user by name</note>\n        <note priority=\"1\" from=\"meaning\">user welcome</note>\n     </trans-unit>\n   </body>\n </file>\n</xliff>\n";
//# sourceMappingURL=messages.fr.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "/* basic styles of heatmap */\n.d3-heatmap {\n  width: 100%;\n  height: 400px;\n}\n\n.d3-heatmap rect.bordered {\n    stroke: #E6E6E6;\n    stroke-width:1px;   \n}\n\n.d3-heatmap text.mono {\n    font-size: 9pt;\n    font-family: Consolas, courier;\n    fill: #000;\n}\n\n.d3-heatmap text.axis-workweek {\n    fill: #000;\n}\n\n.d3-heatmap text.axis-worktime {\n    fill: #000;\n}\n\n/* Testing */\n.d3-heatmap .axis path,\n.d3-heatmap .axis line {\n  stroke: #999;\n}\n\n.d3-heatmap .axis text {\n  fill: #999;\n}\n\n/* d3-tip */\n.d3-tip {\n  line-height: 1;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.95);\n  color: #000;\n  border-radius: 4px;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 9px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(255, 255, 255, 0.95);\n  content: \"\\25BC\";\n  position: absolute;\n  text-align: center;\n}\n\n/* Style northward tooltips specifically */\n.d3-tip.n:after {\n  margin: -2px 0 0 0;\n  top: 100%;\n  left: 0;\n}\n\n/* styles based on Twitter Bootstrap: https://github.com/twitter/bootstrap/blob/master/less/tooltip.less */\n.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1020;\n  display: block;\n  padding: 5px;\n  font-size: 11px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  visibility: visible;\n}\n\n.tooltip.in {\n  opacity: 0.8;\n  filter: alpha(opacity=80);\n}\n\n.tooltip.top {\n  margin-top: -2px;\n}\n\n.tooltip.right {\n  margin-left: 2px;\n}\n\n.tooltip.bottom {\n  margin-top: 2px;\n}\n\n.tooltip.left {\n  margin-left: -2px;\n}\n\n.tooltip.top .arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-top: 5px solid #000000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n.tooltip.left .arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #000000;\n}\n\n.tooltip.bottom .arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #000000;\n  border-left: 5px solid transparent;\n}\n\n.tooltip.right .arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-right: 5px solid #000000;\n  border-bottom: 5px solid transparent;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #ffffff;\n  text-align: center;\n  text-decoration: none;\n  background-color: #000000;\n  border-radius: 4px;\n}\n\n.arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1010;\n  display: none;\n  padding: 5px;\n}\n\n.popover.top {\n  margin-top: -5px;\n}\n\n.popover.right {\n  margin-left: 5px;\n}\n\n.popover.bottom {\n  margin-top: 5px;\n}\n\n.popover.left {\n  margin-left: -5px;\n}\n\n.popover.top .arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-top: 5px solid #000000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n}\n\n.popover.right .arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-right: 5px solid #000000;\n  border-bottom: 5px solid transparent;\n}\n\n.popover.bottom .arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-right: 5px solid transparent;\n  border-bottom: 5px solid #000000;\n  border-left: 5px solid transparent;\n}\n\n.popover.left .arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #000000;\n}\n\n.popover-inner {\n  width: 280px;\n  padding: 3px;\n  overflow: hidden;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.8);\n  border-radius: 6px;\n  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);\n}\n\n.popover-title {\n  padding: 9px 15px;\n  line-height: 1;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #eee;\n  border-radius: 3px 3px 0 0;\n  margin: 0;\n}\n\n.popover-content {\n  padding: 14px;\n  background-color: #ffffff;\n  border-radius: 0 0 3px 3px;\n  background-clip: padding-box;\n}\n\n.popover-content p,\n.popover-content ul,\n.popover-content ol {\n  margin-bottom: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<meta name=\"title\" content=\"{{title}}\">\n<app-navbar></app-navbar>\n<app-heatmap *ngIf=\"heatMapData\" [data]=\"heatMapData\"></app-heatmap>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <h3 class=\"card-header\">Featured</h3>\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Special title treatment</h4>\n      <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n      <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n    </div>\n  </div>\n  <hr>\n  <div class=\"container\">\n    <h1 i18n=\"an introduction header for this sample\">Hello i18n</h1>\n    <p i18n=\"a paragraph explaining what this sample is\">This is a sample of internationalization in Angular2.</p>\n    <h2 i18n>Attribute sample</h2>\n    <input placeholder=\"Your name\" [(ngModel)]=\"name\" i18n-placeholder=\"a placeholder for field collecting the user's name\">\n    <h2 i18n>Multiple Element Sample</h2>\n    <!--i18n:multiple element examples-->\n    <p>Element 1</p>\n    <p>Element 2</p>\n    <!--/i18n-->\n    <h2 i18n>Meaning Sample</h2>\n    <p i18n=\"user welcome|a message welcoming the user by name\">Hello {{name}}</p>\n  </div>\n  <hr>\n</div>"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab1\">Tab 1</a></li>\n    <li><a data-toggle=\"tab\" href=\"#tab2\">Tab 2</a></li>\n    <li><a data-toggle=\"tab\" href=\"#tab3\">Tab 3</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div id=\"tab1\" class=\"tab-pane fade in active\">\n      <h3>Tab 1</h3>\n      <form class=\"form-inline\">\n        <div class=\"form-group\">\n          <input type=\"search\"\n            class=\"form-control\"\n            placeholder=\"Enter search string\"\n            #search> \n        </div>\n        <button class=\"btn btn-primary\"\n          (click)=\"doSearch(search.value)\">Search\n        </button>\n      </form>\n    </div>\n    <div id=\"tab2\" class=\"tab-pane fade\">\n      <h3>Tab 2</h3>\n      <p>Some content in menu 1.</p>\n    </div>\n    <div id=\"tab3\" class=\"tab-pane fade\">\n      <h3>Tab 3</h3>\n      <p>Some content in menu 2.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n    <li class=\"list-group-item list-group-item-success\">Dapibus ac facilisis in</li>\n    <li class=\"list-group-item list-group-item-info\">Cras sit amet nibh libero</li>\n    <li class=\"list-group-item list-group-item-warning\">Porta ac consectetur ac</li>\n    <li class=\"list-group-item list-group-item-danger\">Vestibulum at eros</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "<div class=\"d3-heatmap\" #heatmap></div>"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Lazy Load</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\n      <li><a data-toggle=\"tab\" href=\"#page1\">Page 1</a></li>\n      <li><a data-toggle=\"tab\" href=\"#page2\">Page 2</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"tab-content\">\n  <div id=\"home\" class=\"tab-pane fade in active\">\n    <div class=\"container\">\n      <app-content></app-content>\n    </div>\n  </div>\n  <div id=\"page1\" class=\"tab-pane fade\">\n    <div class=\"container\">\n      <h3>Page 1</h3>\n      <p>Some content in menu 1.</p>\n    </div>\n  </div>\n  <div id=\"page2\" class=\"tab-pane fade\">\n    <div class=\"container\">\n      <h3>Page 2</h3>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// d3.tip
var d3 = __webpack_require__(155);
d3.functor = function functor(v) {
  return typeof v === "function" ? v : function() {
    return v;
  };
};

d3.tip = function() {
  var direction = d3_tip_direction,
      offset    = d3_tip_offset,
      html      = d3_tip_html,
      node      = initNode(),
      svg       = null,
      point     = null,
      target    = null

  function tip(vis) {
    svg = getSVGNode(vis)
    point = svg.createSVGPoint()
    document.body.appendChild(node)
  }

  // Public - show the tooltip on the screen
  //
  // Returns a tip
  tip.show = function() {
    var args = Array.prototype.slice.call(arguments)
    if(args[args.length - 1] instanceof SVGElement) target = args.pop()

    var content = html.apply(this, args),
        poffset = offset.apply(this, args),
        dir     = direction.apply(this, args),
        nodel   = getNodeEl(),
        i       = directions.length,
        coords,
        scrollTop  = document.documentElement.scrollTop || document.body.scrollTop,
        scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft

    nodel.html(content)
      .style('position', 'absolute')
      .style('opacity', 1)
      .style('pointer-events', 'all')

    while(i--) nodel.classed(directions[i], false)
    coords = direction_callbacks[dir].apply(this)
    nodel.classed(dir, true)
      .style('top', (coords.top +  poffset[0]) + scrollTop + 'px')
      .style('left', (coords.left + poffset[1]) + scrollLeft + 'px')

    return tip
  }

  // Public - hide the tooltip
  //
  // Returns a tip
  tip.hide = function() {
    var nodel = getNodeEl()
    nodel
      .style('opacity', 0)
      .style('pointer-events', 'none')
    return tip
  }

  // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  tip.attr = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().attr(n)
    } else {
      var args =  Array.prototype.slice.call(arguments)
      d3.selection.prototype.attr.apply(getNodeEl(), args)
    }

    return tip
  }

  // Public: Proxy style calls to the d3 tip container.  Sets or gets a style value.
  //
  // n - name of the property
  // v - value of the property
  //
  // Returns tip or style property value
  tip.style = function(n, v) {
    // debugger;
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().style(n)
    } else {
      var args = Array.prototype.slice.call(arguments);
      if (args.length === 1) {
        var styles = args[0];
        Object.keys(styles).forEach(function(key) {
          return d3.selection.prototype.style.apply(getNodeEl(), [key, styles[key]]);
        });
      }
    }

    return tip
  }

  // Public: Set or get the direction of the tooltip
  //
  // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
  //     sw(southwest), ne(northeast) or se(southeast)
  //
  // Returns tip or direction
  tip.direction = function(v) {
    if (!arguments.length) return direction
    direction = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function(v) {
    if (!arguments.length) return offset
    offset = v == null ? v : d3.functor(v)

    return tip
  }

  // Public: sets or gets the html value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns html value or tip
  tip.html = function(v) {
    if (!arguments.length) return html;
    html = (v === null) ? v : d3.functor(v);

    return tip;
  }

  // Public: destroys the tooltip and removes it from the DOM
  //
  // Returns a tip
  tip.destroy = function() {
    if(node) {
      getNodeEl().remove();
      node = null;
    }
    return tip;
  }

  function d3_tip_direction() { return 'n' }
  function d3_tip_offset() { return [0, 0] }
  function d3_tip_html() { return ' ' }

  var direction_callbacks = {
    n:  direction_n,
    s:  direction_s,
    e:  direction_e,
    w:  direction_w,
    nw: direction_nw,
    ne: direction_ne,
    sw: direction_sw,
    se: direction_se
  };

  var directions = Object.keys(direction_callbacks);

  function direction_n() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.n.y - node.offsetHeight,
      left: bbox.n.x - node.offsetWidth / 2
    }
  }

  function direction_s() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.s.y,
      left: bbox.s.x - node.offsetWidth / 2
    }
  }

  function direction_e() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.e.y - node.offsetHeight / 2,
      left: bbox.e.x
    }
  }

  function direction_w() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.w.y - node.offsetHeight / 2,
      left: bbox.w.x - node.offsetWidth
    }
  }

  function direction_nw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.nw.y - node.offsetHeight,
      left: bbox.nw.x - node.offsetWidth
    }
  }

  function direction_ne() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.ne.y - node.offsetHeight,
      left: bbox.ne.x
    }
  }

  function direction_sw() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.sw.y,
      left: bbox.sw.x - node.offsetWidth
    }
  }

  function direction_se() {
    var bbox = getScreenBBox()
    return {
      top:  bbox.se.y,
      left: bbox.e.x
    }
  }

  function initNode() {
    var node = d3.select(document.createElement('div'))
    node
      .style('position', 'absolute')
      .style('top', 0)
      .style('opacity', 0)
      .style('pointer-events', 'none')
      .style('box-sizing', 'border-box')

    return node.node()
  }

  function getSVGNode(el) {
    el = el.node()
    if(el.tagName.toLowerCase() === 'svg')
      return el

    return el.ownerSVGElement
  }

  function getNodeEl() {
    if(node === null) {
      node = initNode();
      // re-add node to DOM
      document.body.appendChild(node);
    };
    return d3.select(node);
  }

  // Private - gets the screen coordinates of a shape
  //
  // Given a shape on the screen, will return an SVGPoint for the directions
  // n(north), s(south), e(east), w(west), ne(northeast), se(southeast), nw(northwest),
  // sw(southwest).
  //
  //    +-+-+
  //    |   |
  //    +   +
  //    |   |
  //    +-+-+
  //
  // Returns an Object {n, s, e, w, nw, sw, ne, se}
  function getScreenBBox() {
    var targetel   = target || d3.event.target;

    while ('undefined' === typeof targetel.getScreenCTM && 'undefined' === targetel.parentNode) {
        targetel = targetel.parentNode;
    }

    var bbox       = {},
        matrix     = targetel.getScreenCTM(),
        tbbox      = targetel.getBBox(),
        width      = tbbox.width,
        height     = tbbox.height,
        x          = tbbox.x,
        y          = tbbox.y

    point.x = x
    point.y = y
    bbox.nw = point.matrixTransform(matrix)
    point.x += width
    bbox.ne = point.matrixTransform(matrix)
    point.y += height
    bbox.se = point.matrixTransform(matrix)
    point.x -= width
    bbox.sw = point.matrixTransform(matrix)
    point.y -= height / 2
    bbox.w  = point.matrixTransform(matrix)
    point.x += width
    bbox.e = point.matrixTransform(matrix)
    point.x -= width / 2
    point.y -= height / 2
    bbox.n = point.matrixTransform(matrix)
    point.y += height
    bbox.s = point.matrixTransform(matrix)

    return bbox
  }

  return tip
};

/* harmony default export */ __webpack_exports__["a"] = d3;

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = (function () {
    function Animations() {
        this.animations = {
            fadeInAnimation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInAnimation', [
                // route 'enter' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* transition */])(':enter', [
                    // styles at start of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 }),
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 }))
                ]),
            ]),
            slideInOutAnimation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('slideInOutAnimation', [
                // end state styles for route container (host)
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                    // the view covers the whole screen with a semi tranparent background
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                })),
                // route 'enter' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* transition */])(':enter', [
                    // styles at start of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                        // start with the content positioned off the right of the screen, 
                        // -400% is required instead of -100% because the negative position adds to the width of the element
                        right: '-400%',
                        // start with background opacity set to 0 (invisible)
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }),
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                        // transition the right position to 0 which slides the content into view
                        right: 0,
                        // transition the background opacity to 0.8 to fade it in
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }))
                ]),
                // route 'leave' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* transition */])(':leave', [
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
                        // transition the right position to -400% which slides the content out of view
                        right: '-400%',
                        // transition the background opacity to 0 to fade it out
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }))
                ])
            ])
        };
    }
    Animations.prototype.getAnimation = function (style) {
        return this.animations[style];
    };
    return Animations;
}());

//# sourceMappingURL=animations.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_migration_handler__ = __webpack_require__(90);





window.migrationHandler = new __WEBPACK_IMPORTED_MODULE_4__app_migration_handler__["a" /* MigrationHandler */]();
if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app root!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // give everything a chance to get loaded before starting the animation to reduce choppiness
        setTimeout(function () {
            _this.generateData(); // chart
            _this.generateHeatMapData(); // heatmap
            // change the data periodically
            setInterval(function () { return _this.generateData(); }, 5000);
            setInterval(function () { return _this.generateHeatMapData(); }, 5000);
        }, 1000);
    };
    AppComponent.prototype.generateData = function () {
        this.chartData = [];
        for (var i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
            this.chartData.push([
                "Index " + i,
                Math.floor(Math.random() * 100)
            ]);
        }
    };
    AppComponent.prototype.generateHeatMapData = function () {
        this.heatMapData = [];
        // day
        for (var i = 1; i < 8; i++) {
            // hour
            for (var j = 1; j < 25; j++) {
                this.heatMapData.push({ day: i, hour: j, value: Math.round(Math.random() * 20) });
            }
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(166),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sub_components_navbar_navbar_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sub_components_content_content_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sub_components_heatmap_heatmap_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Services

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sub_components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sub_components_content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sub_components_heatmap_heatmap_component__["a" /* HeatmapComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sub_components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sub_components_content_content_component__["a" /* ContentComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sub_components_custom_list_custom_list_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sibling_sibling_module__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__i18n_messages_fr__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MigrationHandler; });





var MigrationHandler = (function () {
    function MigrationHandler() {
    }
    // bootstrap modules
    MigrationHandler.prototype.bootstrapNgComponent = function (module) {
        // CustomListModule is declared in app.module.ts
        // SiblingModule is 
        var moduleDict = {
            listElem: __WEBPACK_IMPORTED_MODULE_2__sub_components_custom_list_custom_list_module__["a" /* CustomListModule */],
            siblingElem: __WEBPACK_IMPORTED_MODULE_3__sibling_sibling_module__["a" /* SiblingModule */]
        };
        var selectedModule = moduleDict[module];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(selectedModule, { providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_68" /* TRANSLATIONS */], useValue: __WEBPACK_IMPORTED_MODULE_4__i18n_messages_fr__["a" /* TRANSLATION */] },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* TRANSLATIONS_FORMAT */], useValue: 'xlf' },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: 'fr' }
            ] });
    };
    return MigrationHandler;
}());

//# sourceMappingURL=migration-handler.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiService = (function () {
    function ApiService() {
    }
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ApiService);

//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiblingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SiblingComponent = (function () {
    function SiblingComponent() {
    }
    SiblingComponent.prototype.ngOnInit = function () { };
    return SiblingComponent;
}());
SiblingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-sibling',
        template: __webpack_require__(167),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [])
], SiblingComponent);

//# sourceMappingURL=sibling.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sibling_component__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiblingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SiblingModule = (function () {
    function SiblingModule() {
    }
    return SiblingModule;
}());
SiblingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__sibling_component__["a" /* SiblingComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__sibling_component__["a" /* SiblingComponent */]]
    })
], SiblingModule);

//# sourceMappingURL=sibling.module.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_animations__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var customAnimations = new __WEBPACK_IMPORTED_MODULE_1__app_animations__["a" /* Animations */]();

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () { };
    ContentComponent.prototype.doSearch = function (term) {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__(168),
        styles: [__webpack_require__(158)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('fadeInAnimation', [
                // route 'enter' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* transition */])(':enter', [
                    // styles at start of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }),
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* animate */])('.3s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1 }))
                ]),
            ])
        ],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_animations__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var customAnimations = new __WEBPACK_IMPORTED_MODULE_3__app_animations__["a" /* Animations */]();

var CustomListComponent = (function () {
    function CustomListComponent(http) {
        this.http = http;
    }
    CustomListComponent.prototype.ngOnInit = function () {
        var resp = this.http.get('/api').map(function (res) { return res.json(); });
        console.log(resp);
    };
    return CustomListComponent;
}());
CustomListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-custom-list',
        template: __webpack_require__(169),
        styles: [__webpack_require__(159)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('slideInOutAnimation', [
                // end state styles for route container (host)
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                    // the view covers the whole screen with a semi tranparent background
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                })),
                // route 'enter' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["b" /* transition */])(':enter', [
                    // styles at start of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                        // start with the content positioned off the right of the screen, 
                        // -400% is required instead of -100% because the negative position adds to the width of the element
                        right: '-400%',
                        // start with background opacity set to 0 (invisible)
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }),
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                        // transition the right position to 0 which slides the content into view
                        right: 0,
                        // transition the background opacity to 0.8 to fade it in
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }))
                ]),
                // route 'leave' transition
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["b" /* transition */])(':leave', [
                    // animation and styles at end of transition
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* animate */])('.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({
                        // transition the right position to -400% which slides the content out of view
                        right: '-400%',
                        // transition the background opacity to 0 to fade it out
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CustomListComponent);

var _a;
//# sourceMappingURL=custom-list.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__custom_list_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CustomListModule = (function () {
    function CustomListModule() {
    }
    return CustomListModule;
}());
CustomListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__custom_list_component__["a" /* CustomListComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__custom_list_component__["a" /* CustomListComponent */]]
    })
], CustomListModule);

//# sourceMappingURL=custom-list.module.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeatmapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeatmapComponent = (function () {
    function HeatmapComponent() {
        // default setting
        this.margin = { top: 50, bottom: 100, left: 30, right: 30 };
        this.buckets = 9;
        this.colors = ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"];
        this.days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        this.times = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12PM"];
    }
    HeatmapComponent.prototype.ngOnInit = function () {
        // this.createChart();
        // unnecessary for simple demo
        if (this.data) {
            this.createChart();
        }
    };
    HeatmapComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.data) {
            this.updateChart();
        }
    };
    HeatmapComponent.prototype.createChart = function () {
        // configure element
        var element = this.heatmapContainer.nativeElement; // get heatmap element
        this.width = 960 - this.margin.left - this.margin.right; // set width
        this.height = 430 - this.margin.top - this.margin.bottom; // set height
        this.gridSize = Math.floor(this.width / 24);
        this.legendElementWidth = this.gridSize * 2;
        // append svg
        var svg = __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].select(element).append('svg')
            .attr('id', 'heatmap')
            .attr('width', this.width + this.margin.left + this.margin.right)
            .attr('height', this.height + this.margin.top + this.margin.bottom)
            .append('g')
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")");
        var gridSize = this.gridSize;
        var dayLabels = svg.selectAll('.dayLabel')
            .data(this.days)
            .enter()
            .append('text')
            .text(function (d) { return d; })
            .attr('x', 0)
            .attr('y', function (d, i) { return i * gridSize + 40; })
            .style('text-anchor', 'end')
            .attr('transform', "translate(-6, " + this.gridSize + " / 1.5)")
            .attr('class', function (d, i) { return ((i >= 0 && i <= 4) ? 'dayLabel mono axis axis-workweek' : 'dayLabel mono axis'); });
        var timeLabels = svg.selectAll('.timeLabel')
            .data(this.times)
            .enter()
            .append('text')
            .text(function (d) { return d; })
            .attr('x', function (d, i) { return i * gridSize + 40; })
            .attr('y', 0)
            .style('text-anchor', 'middle')
            .attr('transform', "translate( " + this.gridSize + " / 2, -6)")
            .attr('class', function (d, i) { return ((i >= 7 && i <= 16) ? 'timeLabel mono axis axis-worktime' : 'timeLabel mono axis'); });
        var colorScale = __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].scaleQuantile()
            .domain([0, this.buckets - 1, __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].max(this.data, function (d) { return d.value; })])
            .range(this.colors);
        // tooltip
        var tool_tip = __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].tip()
            .attr("class", "d3-tip")
            .offset([5, 0])
            .html(function (d) { return "Day: " + d.day + ' ; Value: ' + d.value; });
        svg.call(tool_tip);
        // cards (rect. of map)
        var cards = svg.selectAll('.hour')
            .data(this.data, function (d) { return d.day + ':' + d.hour; });
        cards.append('title');
        cards.enter()
            .append('rect')
            .attr('x', function (d) { return (d.hour - 1) * gridSize + 20; })
            .attr('y', function (d) { return (d.day - 1) * gridSize + 18; })
            .attr('rx', 4)
            .attr('ry', 4)
            .attr('class', 'hour bordered')
            .attr('width', this.gridSize)
            .attr('height', this.gridSize)
            .style('fill', this.colors[0])
            .on('mouseover', tool_tip.show)
            .on('mouseout', tool_tip.hide)
            .transition()
            .duration(5000)
            .style('fill', function (d) { return colorScale(d.value); })
            .select('title')
            .text(function (d) { return d.value; });
        cards.exit().remove();
        var legendElementWidth = this.legendElementWidth, colors = this.colors;
        var legend = svg.selectAll('.legend')
            .data([0].concat(colorScale.quantiles()), function (d) { return d; });
        legend
            .enter()
            .append('g')
            .attr('class', 'legend')
            .append('rect')
            .attr('x', function (d, i) { return legendElementWidth * i; })
            .attr('y', this.height + 20)
            .attr('width', this.legendElementWidth)
            .attr('height', this.gridSize / 2)
            .style('fill', function (d, i) { return colors[i]; });
        svg.selectAll('.legend').append('text')
            .attr('class', 'mono')
            .text(function (d) { return '≥ ' + Math.round(d); })
            .attr('x', function (d, i) { return legendElementWidth * i; })
            .attr('y', this.height + this.gridSize + 15);
        legend.exit().remove();
    };
    HeatmapComponent.prototype.updateChart = function () {
        var colorScale = __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].scaleQuantile()
            .domain([0, this.buckets - 1, __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].max(this.data, function (d) { return d.value; })])
            .range(this.colors);
        __WEBPACK_IMPORTED_MODULE_1__d3_handler_js__["a" /* default */].select('svg#heatmap')
            .selectAll('.hour')
            .data(this.data, function (d) { return d.day + ':' + d.hour; })
            .transition()
            .duration(1000)
            .style('fill', function (d) { return colorScale(d.value); })
            .select('title')
            .text(function (d) { return d.value; });
    };
    return HeatmapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ViewChild */])('heatmap'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ElementRef */]) === "function" && _a || Object)
], HeatmapComponent.prototype, "heatmapContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(),
    __metadata("design:type", Object)
], HeatmapComponent.prototype, "data", void 0);
HeatmapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-heatmap',
        template: __webpack_require__(170),
        styles: [__webpack_require__(160)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], HeatmapComponent);

var _a;
//# sourceMappingURL=heatmap.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(171),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.bundle.js.map