function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-page-tabs-page-module"], {
  /***/
  "./node_modules/highcharts/highcharts-more.js":
  /*!****************************************************!*\
    !*** ./node_modules/highcharts/highcharts-more.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsHighchartsMoreJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.1.0 (2020-05-05)
    (c) 2009-2018 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (c) {
      true && module.exports ? (c["default"] = c, module.exports = c) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (B) {
        c(B);
        c.Highcharts = B;
        return c;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (c) {
      function B(l, a, d, b) {
        l.hasOwnProperty(a) || (l[a] = b.apply(null, d));
      }

      c = c ? c._modules : {};
      B(c, "parts-more/Pane.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        function d(g, b, a) {
          return Math.sqrt(Math.pow(g - a[0], 2) + Math.pow(b - a[1], 2)) < a[2] / 2;
        }

        var b = a.addEvent,
            r = a.extend,
            t = a.merge,
            y = a.pick,
            c = a.splat,
            x = l.CenteredSeriesMixin;
        l.Chart.prototype.collectionsWithUpdate.push("pane");

        a = function () {
          function g(g, b) {
            this.options = this.chart = this.center = this.background = void 0;
            this.coll = "pane";
            this.defaultOptions = {
              center: ["50%", "50%"],
              size: "85%",
              innerSize: "0%",
              startAngle: 0
            };
            this.defaultBackgroundOptions = {
              shape: "circle",
              borderWidth: 1,
              borderColor: "#cccccc",
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [[0, "#ffffff"], [1, "#e6e6e6"]]
              },
              from: -Number.MAX_VALUE,
              innerRadius: 0,
              to: Number.MAX_VALUE,
              outerRadius: "105%"
            };
            this.init(g, b);
          }

          g.prototype.init = function (g, b) {
            this.chart = b;
            this.background = [];
            b.pane.push(this);
            this.setOptions(g);
          };

          g.prototype.setOptions = function (g) {
            this.options = t(this.defaultOptions, this.chart.angular ? {
              background: {}
            } : void 0, g);
          };

          g.prototype.render = function () {
            var g = this.options,
                b = this.options.background,
                a = this.chart.renderer;
            this.group || (this.group = a.g("pane-group").attr({
              zIndex: g.zIndex || 0
            }).add());
            this.updateCenter();
            if (b) for (b = c(b), g = Math.max(b.length, this.background.length || 0), a = 0; a < g; a++) {
              b[a] && this.axis ? this.renderBackground(t(this.defaultBackgroundOptions, b[a]), a) : this.background[a] && (this.background[a] = this.background[a].destroy(), this.background.splice(a, 1));
            }
          };

          g.prototype.renderBackground = function (g, b) {
            var a = "animate",
                k = {
              "class": "highcharts-pane " + (g.className || "")
            };
            this.chart.styledMode || r(k, {
              fill: g.backgroundColor,
              stroke: g.borderColor,
              "stroke-width": g.borderWidth
            });
            this.background[b] || (this.background[b] = this.chart.renderer.path().add(this.group), a = "attr");
            this.background[b][a]({
              d: this.axis.getPlotBandPath(g.from, g.to, g)
            }).attr(k);
          };

          g.prototype.updateCenter = function (g) {
            this.center = (g || this.axis || {}).center = x.getCenter.call(this);
          };

          g.prototype.update = function (g, b) {
            t(!0, this.options, g);
            t(!0, this.chart.options.pane, g);
            this.setOptions(this.options);
            this.render();
            this.chart.axes.forEach(function (g) {
              g.pane === this && (g.pane = null, g.update({}, b));
            }, this);
          };

          return g;
        }();

        l.Chart.prototype.getHoverPane = function (g) {
          var b = this,
              a;
          g && b.pane.forEach(function (m) {
            var k = g.chartX - b.plotLeft,
                u = g.chartY - b.plotTop;
            d(b.inverted ? u : k, b.inverted ? k : u, m.center) && (a = m);
          });
          return a;
        };

        b(l.Chart, "afterIsInsidePlot", function (g) {
          this.polar && (g.isInsidePlot = this.pane.some(function (b) {
            return d(g.x, g.y, b.center);
          }));
        });
        b(l.Pointer, "beforeGetHoverData", function (g) {
          var b = this.chart;
          b.polar && (b.hoverPane = b.getHoverPane(g), g.filter = function (a) {
            return a.visible && !(!g.shared && a.directTouch) && y(a.options.enableMouseTracking, !0) && (!b.hoverPane || a.xAxis.pane === b.hoverPane);
          });
        });
        b(l.Pointer, "afterGetHoverData", function (g) {
          var b = this.chart;
          g.hoverPoint && g.hoverPoint.plotX && g.hoverPoint.plotY && b.hoverPane && !d(g.hoverPoint.plotX, g.hoverPoint.plotY, b.hoverPane.center) && (g.hoverPoint = void 0);
        });
        l.Pane = a;
        return l.Pane;
      });
      B(c, "parts-more/HiddenAxis.js", [], function () {
        return function () {
          function l() {}

          l.init = function (a) {
            a.getOffset = function () {};

            a.redraw = function () {
              this.isDirty = !1;
            };

            a.render = function () {
              this.isDirty = !1;
            };

            a.createLabelCollector = function () {
              return function () {};
            };

            a.setScale = function () {};

            a.setCategories = function () {};

            a.setTitle = function () {};

            a.isHidden = !0;
          };

          return l;
        }();
      });
      B(c, "parts-more/RadialAxis.js", [c["parts/Axis.js"], c["parts/Tick.js"], c["parts-more/HiddenAxis.js"], c["parts/Utilities.js"]], function (l, a, d, b) {
        var r = b.addEvent,
            t = b.correctFloat,
            y = b.defined,
            c = b.extend,
            x = b.fireEvent,
            g = b.merge,
            u = b.pick,
            m = b.pInt,
            C = b.relativeLength,
            k = b.wrap;

        b = function () {
          function b() {}

          b.init = function (b) {
            var a = l.prototype;

            b.setOptions = function (e) {
              e = this.options = g(b.constructor.defaultOptions, this.defaultPolarOptions, e);
              e.plotBands || (e.plotBands = []);
              x(this, "afterSetOptions");
            };

            b.getOffset = function () {
              a.getOffset.call(this);
              this.chart.axisOffset[this.side] = 0;
            };

            b.getLinePath = function (e, h, f) {
              e = this.pane.center;
              var p = this.chart,
                  w = u(h, e[2] / 2 - this.offset);
              "undefined" === typeof f && (f = this.horiz ? 0 : this.center && -this.center[3] / 2);
              f && (w += f);
              this.isCircular || "undefined" !== typeof h ? (h = this.chart.renderer.symbols.arc(this.left + e[0], this.top + e[1], w, w, {
                start: this.startAngleRad,
                end: this.endAngleRad,
                open: !0,
                innerR: 0
              }), h.xBounds = [this.left + e[0]], h.yBounds = [this.top + e[1] - w]) : (h = this.postTranslate(this.angleRad, w), h = [["M", this.center[0] + p.plotLeft, this.center[1] + p.plotTop], ["L", h.x, h.y]]);
              return h;
            };

            b.setAxisTranslation = function () {
              a.setAxisTranslation.call(this);
              this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
            };

            b.beforeSetTickPositions = function () {
              this.autoConnect = this.isCircular && "undefined" === typeof u(this.userMax, this.options.max) && t(this.endAngleRad - this.startAngleRad) === t(2 * Math.PI);
              !this.isCircular && this.chart.inverted && this.max++;
              this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
            };

            b.setAxisSize = function () {
              a.setAxisSize.call(this);

              if (this.isRadial) {
                this.pane.updateCenter(this);
                var e = this.center = c([], this.pane.center);
                if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad;else {
                  var h = this.postTranslate(this.angleRad, e[3] / 2);
                  e[0] = h.x - this.chart.plotLeft;
                  e[1] = h.y - this.chart.plotTop;
                }
                this.len = this.width = this.height = (e[2] - e[3]) * u(this.sector, 1) / 2;
              }
            };

            b.getPosition = function (e, h) {
              e = this.translate(e);
              return this.postTranslate(this.isCircular ? e : this.angleRad, u(this.isCircular ? h : 0 > e ? 0 : e, this.center[2] / 2) - this.offset);
            };

            b.postTranslate = function (e, h) {
              var f = this.chart,
                  p = this.center;
              e = this.startAngleRad + e;
              return {
                x: f.plotLeft + p[0] + Math.cos(e) * h,
                y: f.plotTop + p[1] + Math.sin(e) * h
              };
            };

            b.getPlotBandPath = function (e, h, f) {
              var p = this.center,
                  w = this.startAngleRad,
                  v = p[2] / 2,
                  n = [u(f.outerRadius, "100%"), f.innerRadius, u(f.thickness, 10)],
                  g = Math.min(this.offset, 0),
                  b = /%$/;
              var a = this.isCircular;
              if ("polygon" === this.options.gridLineInterpolation) n = this.getPlotLinePath({
                value: e
              }).concat(this.getPlotLinePath({
                value: h,
                reverse: !0
              }));else {
                e = Math.max(e, this.min);
                h = Math.min(h, this.max);
                a || (n[0] = this.translate(e), n[1] = this.translate(h));
                n = n.map(function (f) {
                  b.test(f) && (f = m(f, 10) * v / 100);
                  return f;
                });
                if ("circle" !== f.shape && a) e = w + this.translate(e), h = w + this.translate(h);else {
                  e = -Math.PI / 2;
                  h = 1.5 * Math.PI;
                  var k = !0;
                }
                n[0] -= g;
                n[2] -= g;
                n = this.chart.renderer.symbols.arc(this.left + p[0], this.top + p[1], n[0], n[0], {
                  start: Math.min(e, h),
                  end: Math.max(e, h),
                  innerR: u(n[1], n[0] - n[2]),
                  open: k
                });
                a && (a = (h + e) / 2, g = this.left + p[0] + p[2] / 2 * Math.cos(a), n.xBounds = a > -Math.PI / 2 && a < Math.PI / 2 ? [g, this.chart.plotWidth] : [0, g], n.yBounds = [this.top + p[1] + p[2] / 2 * Math.sin(a)], n.yBounds[0] += a > -Math.PI && 0 > a || a > Math.PI ? -10 : 10);
              }
              return n;
            };

            b.getCrosshairPosition = function (e, h, f) {
              var p = e.value,
                  w = this.pane.center;

              if (this.isCircular) {
                if (y(p)) e.point && (v = e.point.shapeArgs || {}, v.start && (p = this.chart.inverted ? this.translate(e.point.rectPlotY, !0) : e.point.x));else {
                  var v = e.chartX || 0;
                  var n = e.chartY || 0;
                  p = this.translate(Math.atan2(n - f, v - h) - this.startAngleRad, !0);
                }
                e = this.getPosition(p);
                v = e.x;
                n = e.y;
              } else y(p) || (v = e.chartX, n = e.chartY), y(v) && y(n) && (f = w[1] + this.chart.plotTop, p = this.translate(Math.min(Math.sqrt(Math.pow(v - h, 2) + Math.pow(n - f, 2)), w[2] / 2) - w[3] / 2, !0));

              return [p, v || 0, n || 0];
            };

            b.getPlotLinePath = function (e) {
              var h = this,
                  f = h.pane.center,
                  p = h.chart,
                  w = p.inverted,
                  v = e.value,
                  n = e.reverse,
                  g = h.getPosition(v),
                  b = h.pane.options.background ? h.pane.options.background[0] || h.pane.options.background : {},
                  a = b.innerRadius || "0%",
                  k = b.outerRadius || "100%";
              b = f[0] + p.plotLeft;
              var m = f[1] + p.plotTop,
                  q = g.x,
                  d = g.y,
                  u = h.height;
              g = f[3] / 2;
              var A;
              e.isCrosshair && (d = this.getCrosshairPosition(e, b, m), v = d[0], q = d[1], d = d[2]);
              if (h.isCircular) v = Math.sqrt(Math.pow(q - b, 2) + Math.pow(d - m, 2)), n = "string" === typeof a ? C(a, 1) : a / v, p = "string" === typeof k ? C(k, 1) : k / v, f && g && (v = g / v, n < v && (n = v), p < v && (p = v)), f = [["M", b + n * (q - b), m - n * (m - d)], ["L", q - (1 - p) * (q - b), d + (1 - p) * (m - d)]];else if ((v = h.translate(v)) && (0 > v || v > u) && (v = 0), "circle" === h.options.gridLineInterpolation) f = h.getLinePath(0, v, g);else if (f = [], p[w ? "yAxis" : "xAxis"].forEach(function (f) {
                f.pane === h.pane && (A = f);
              }), A) for (b = A.tickPositions, A.autoConnect && (b = b.concat([b[0]])), n && (b = b.slice().reverse()), v && (v += g), q = 0; q < b.length; q++) {
                m = A.getPosition(b[q], v), f.push(q ? ["L", m.x, m.y] : ["M", m.x, m.y]);
              }
              return f;
            };

            b.getTitlePosition = function () {
              var e = this.center,
                  h = this.chart,
                  f = this.options.title;
              return {
                x: h.plotLeft + e[0] + (f.x || 0),
                y: h.plotTop + e[1] - {
                  high: .5,
                  middle: .25,
                  low: 0
                }[f.align] * e[2] + (f.y || 0)
              };
            };

            b.createLabelCollector = function () {
              var e = this;
              return function () {
                if (e.isRadial && e.tickPositions && !0 !== e.options.labels.allowOverlap) return e.tickPositions.map(function (h) {
                  return e.ticks[h] && e.ticks[h].label;
                }).filter(function (h) {
                  return !!h;
                });
              };
            };
          };

          b.compose = function (a, m) {
            r(a, "init", function (e) {
              var h = this.chart,
                  f = h.inverted,
                  p = h.angular,
                  w = h.polar,
                  v = this.isXAxis,
                  n = this.coll,
                  E = p && v,
                  k,
                  m = h.options;
              e = e.userOptions.pane || 0;
              e = this.pane = h.pane && h.pane[e];
              if ("colorAxis" === n) this.isRadial = !1;else {
                if (p) {
                  if (E ? d.init(this) : b.init(this), k = !v) this.defaultPolarOptions = b.defaultRadialGaugeOptions;
                } else w && (b.init(this), this.defaultPolarOptions = (k = this.horiz) ? b.defaultCircularOptions : g("xAxis" === n ? a.defaultOptions : a.defaultYAxisOptions, b.defaultRadialOptions), f && "yAxis" === n && (this.defaultPolarOptions.stackLabels = a.defaultYAxisOptions.stackLabels));

                p || w ? (this.isRadial = !0, m.chart.zoomType = null, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && h.labelCollectors.push(this.labelCollector)) : this.isRadial = !1;
                e && k && (e.axis = this);
                this.isCircular = k;
              }
            });
            r(a, "afterInit", function () {
              var e = this.chart,
                  h = this.options,
                  f = this.pane,
                  p = f && f.options;
              e.angular && this.isXAxis || !f || !e.angular && !e.polar || (this.angleRad = (h.angle || 0) * Math.PI / 180, this.startAngleRad = (p.startAngle - 90) * Math.PI / 180, this.endAngleRad = (u(p.endAngle, p.startAngle + 360) - 90) * Math.PI / 180, this.offset = h.offset || 0);
            });
            r(a, "autoLabelAlign", function (e) {
              this.isRadial && (e.align = void 0, e.preventDefault());
            });
            r(a, "destroy", function () {
              if (this.chart && this.chart.labelCollectors) {
                var e = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
                0 <= e && this.chart.labelCollectors.splice(e, 1);
              }
            });
            r(m, "afterGetPosition", function (e) {
              this.axis.getPosition && c(e.pos, this.axis.getPosition(this.pos));
            });
            r(m, "afterGetLabelPosition", function (e) {
              var h = this.axis,
                  f = this.label;

              if (f) {
                var p = f.getBBox(),
                    w = h.options.labels,
                    b = w.y,
                    n = 20,
                    g = w.align,
                    a = (h.translate(this.pos) + h.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
                    k = Math.round(a),
                    m = "end",
                    q = 0 > k ? k + 360 : k,
                    d = q,
                    A = 0,
                    r = 0,
                    t = null === w.y ? .3 * -p.height : 0;

                if (h.isRadial) {
                  var l = h.getPosition(this.pos, h.center[2] / 2 + C(u(w.distance, -25), h.center[2] / 2, -h.center[2] / 2));
                  "auto" === w.rotation ? f.attr({
                    rotation: a
                  }) : null === b && (b = h.chart.renderer.fontMetrics(f.styles && f.styles.fontSize).b - p.height / 2);
                  null === g && (h.isCircular ? (p.width > h.len * h.tickInterval / (h.max - h.min) && (n = 0), g = a > n && a < 180 - n ? "left" : a > 180 + n && a < 360 - n ? "right" : "center") : g = "center", f.attr({
                    align: g
                  }));

                  if ("auto" === g && 2 === h.tickPositions.length && h.isCircular) {
                    90 < q && 180 > q ? q = 180 - q : 270 < q && 360 >= q && (q = 540 - q);
                    180 < d && 360 >= d && (d = 360 - d);
                    if (h.pane.options.startAngle === k || h.pane.options.startAngle === k + 360 || h.pane.options.startAngle === k - 360) m = "start";
                    g = -90 <= k && 90 >= k || -360 <= k && -270 >= k || 270 <= k && 360 >= k ? "start" === m ? "right" : "left" : "start" === m ? "left" : "right";
                    70 < d && 110 > d && (g = "center");
                    15 > q || 180 <= q && 195 > q ? A = .3 * p.height : 15 <= q && 35 >= q ? A = "start" === m ? 0 : .75 * p.height : 195 <= q && 215 >= q ? A = "start" === m ? .75 * p.height : 0 : 35 < q && 90 >= q ? A = "start" === m ? .25 * -p.height : p.height : 215 < q && 270 >= q && (A = "start" === m ? p.height : .25 * -p.height);
                    15 > d ? r = "start" === m ? .15 * -p.height : .15 * p.height : 165 < d && 180 >= d && (r = "start" === m ? .15 * p.height : .15 * -p.height);
                    f.attr({
                      align: g
                    });
                    f.translate(r, A + t);
                  }

                  e.pos.x = l.x + w.x;
                  e.pos.y = l.y + b;
                }
              }
            });
            k(m.prototype, "getMarkPath", function (e, h, f, p, g, b, n) {
              var w = this.axis;
              w.isRadial ? (e = w.getPosition(this.pos, w.center[2] / 2 + p), h = ["M", h, f, "L", e.x, e.y]) : h = e.call(this, h, f, p, g, b, n);
              return h;
            });
          };

          b.defaultCircularOptions = {
            gridLineWidth: 1,
            labels: {
              align: null,
              distance: 15,
              x: 0,
              y: null,
              style: {
                textOverflow: "none"
              }
            },
            maxPadding: 0,
            minPadding: 0,
            showLastLabel: !1,
            tickLength: 0
          };
          b.defaultRadialGaugeOptions = {
            labels: {
              align: "center",
              x: 0,
              y: null
            },
            minorGridLineWidth: 0,
            minorTickInterval: "auto",
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickWidth: 1,
            tickLength: 10,
            tickPosition: "inside",
            tickWidth: 2,
            title: {
              rotation: 0
            },
            zIndex: 2
          };
          b.defaultRadialOptions = {
            gridLineInterpolation: "circle",
            gridLineWidth: 1,
            labels: {
              align: "right",
              x: -3,
              y: -2
            },
            showLastLabel: !1,
            title: {
              x: 4,
              text: null,
              rotation: 90
            }
          };
          return b;
        }();

        b.compose(l, a);
        return b;
      });
      B(c, "parts-more/AreaRangeSeries.js", [c["parts/Globals.js"], c["parts/Point.js"], c["parts/Utilities.js"]], function (l, a, d) {
        var b = d.defined,
            r = d.extend,
            t = d.isArray,
            y = d.isNumber,
            c = d.pick;
        d = d.seriesType;
        var x = l.seriesTypes,
            g = l.Series.prototype,
            u = a.prototype;
        d("arearange", "area", {
          lineWidth: 1,
          threshold: null,
          tooltip: {
            pointFormat: "<span style=\"color:{series.color}\">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
          },
          trackByArea: !0,
          dataLabels: {
            align: null,
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
          }
        }, {
          pointArrayMap: ["low", "high"],
          pointValKey: "low",
          deferTranslatePolar: !0,
          toYData: function toYData(g) {
            return [g.low, g.high];
          },
          highToXY: function highToXY(g) {
            var b = this.chart,
                a = this.xAxis.postTranslate(g.rectPlotX, this.yAxis.len - g.plotHigh);
            g.plotHighX = a.x - b.plotLeft;
            g.plotHigh = a.y - b.plotTop;
            g.plotLowX = g.plotX;
          },
          translate: function translate() {
            var g = this,
                b = g.yAxis,
                a = !!g.modifyValue;
            x.area.prototype.translate.apply(g);
            g.points.forEach(function (k) {
              var d = k.high,
                  q = k.plotY;
              k.isNull ? k.plotY = null : (k.plotLow = q, k.plotHigh = b.translate(a ? g.modifyValue(d, k) : d, 0, 1, 0, 1), a && (k.yBottom = k.plotHigh));
            });
            this.chart.polar && this.points.forEach(function (b) {
              g.highToXY(b);
              b.tooltipPos = [(b.plotHighX + b.plotLowX) / 2, (b.plotHigh + b.plotLow) / 2];
            });
          },
          getGraphPath: function getGraphPath(g) {
            var b = [],
                a = [],
                d,
                m = x.area.prototype.getGraphPath;
            var q = this.options;
            var e = this.chart.polar && !1 !== q.connectEnds,
                h = q.connectNulls,
                f = q.step;
            g = g || this.points;

            for (d = g.length; d--;) {
              var p = g[d];
              p.isNull || e || h || g[d + 1] && !g[d + 1].isNull || a.push({
                plotX: p.plotX,
                plotY: p.plotY,
                doCurve: !1
              });
              var w = {
                polarPlotY: p.polarPlotY,
                rectPlotX: p.rectPlotX,
                yBottom: p.yBottom,
                plotX: c(p.plotHighX, p.plotX),
                plotY: p.plotHigh,
                isNull: p.isNull
              };
              a.push(w);
              b.push(w);
              p.isNull || e || h || g[d - 1] && !g[d - 1].isNull || a.push({
                plotX: p.plotX,
                plotY: p.plotY,
                doCurve: !1
              });
            }

            g = m.call(this, g);
            f && (!0 === f && (f = "left"), q.step = {
              left: "right",
              center: "center",
              right: "left"
            }[f]);
            b = m.call(this, b);
            a = m.call(this, a);
            q.step = f;
            q = [].concat(g, b);
            !this.chart.polar && a[0] && "M" === a[0][0] && (a[0] = ["L", a[0][1], a[0][2]]);
            this.graphPath = q;
            this.areaPath = g.concat(a);
            q.isArea = !0;
            q.xMap = g.xMap;
            this.areaPath.xMap = g.xMap;
            return q;
          },
          drawDataLabels: function drawDataLabels() {
            var b = this.points,
                a = b.length,
                k,
                d = [],
                u = this.options.dataLabels,
                q,
                e = this.chart.inverted;
            if (t(u)) {
              if (1 < u.length) {
                var h = u[0];
                var f = u[1];
              } else h = u[0], f = {
                enabled: !1
              };
            } else h = r({}, u), h.x = u.xHigh, h.y = u.yHigh, f = r({}, u), f.x = u.xLow, f.y = u.yLow;

            if (h.enabled || this._hasPointLabels) {
              for (k = a; k--;) {
                if (q = b[k]) {
                  var p = h.inside ? q.plotHigh < q.plotLow : q.plotHigh > q.plotLow;
                  q.y = q.high;
                  q._plotY = q.plotY;
                  q.plotY = q.plotHigh;
                  d[k] = q.dataLabel;
                  q.dataLabel = q.dataLabelUpper;
                  q.below = p;
                  e ? h.align || (h.align = p ? "right" : "left") : h.verticalAlign || (h.verticalAlign = p ? "top" : "bottom");
                }
              }

              this.options.dataLabels = h;
              g.drawDataLabels && g.drawDataLabels.apply(this, arguments);

              for (k = a; k--;) {
                if (q = b[k]) q.dataLabelUpper = q.dataLabel, q.dataLabel = d[k], delete q.dataLabels, q.y = q.low, q.plotY = q._plotY;
              }
            }

            if (f.enabled || this._hasPointLabels) {
              for (k = a; k--;) {
                if (q = b[k]) p = f.inside ? q.plotHigh < q.plotLow : q.plotHigh > q.plotLow, q.below = !p, e ? f.align || (f.align = p ? "left" : "right") : f.verticalAlign || (f.verticalAlign = p ? "bottom" : "top");
              }

              this.options.dataLabels = f;
              g.drawDataLabels && g.drawDataLabels.apply(this, arguments);
            }

            if (h.enabled) for (k = a; k--;) {
              if (q = b[k]) q.dataLabels = [q.dataLabelUpper, q.dataLabel].filter(function (f) {
                return !!f;
              });
            }
            this.options.dataLabels = u;
          },
          alignDataLabel: function alignDataLabel() {
            x.column.prototype.alignDataLabel.apply(this, arguments);
          },
          drawPoints: function drawPoints() {
            var a = this.points.length,
                d;
            g.drawPoints.apply(this, arguments);

            for (d = 0; d < a;) {
              var k = this.points[d];
              k.origProps = {
                plotY: k.plotY,
                plotX: k.plotX,
                isInside: k.isInside,
                negative: k.negative,
                zone: k.zone,
                y: k.y
              };
              k.lowerGraphic = k.graphic;
              k.graphic = k.upperGraphic;
              k.plotY = k.plotHigh;
              b(k.plotHighX) && (k.plotX = k.plotHighX);
              k.y = k.high;
              k.negative = k.high < (this.options.threshold || 0);
              k.zone = this.zones.length && k.getZone();
              this.chart.polar || (k.isInside = k.isTopInside = "undefined" !== typeof k.plotY && 0 <= k.plotY && k.plotY <= this.yAxis.len && 0 <= k.plotX && k.plotX <= this.xAxis.len);
              d++;
            }

            g.drawPoints.apply(this, arguments);

            for (d = 0; d < a;) {
              k = this.points[d], k.upperGraphic = k.graphic, k.graphic = k.lowerGraphic, r(k, k.origProps), delete k.origProps, d++;
            }
          },
          setStackedPoints: l.noop
        }, {
          setState: function setState() {
            var g = this.state,
                a = this.series,
                d = a.chart.polar;
            b(this.plotHigh) || (this.plotHigh = a.yAxis.toPixels(this.high, !0));
            b(this.plotLow) || (this.plotLow = this.plotY = a.yAxis.toPixels(this.low, !0));
            a.stateMarkerGraphic && (a.lowerStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.upperStateMarkerGraphic);
            this.graphic = this.upperGraphic;
            this.plotY = this.plotHigh;
            d && (this.plotX = this.plotHighX);
            u.setState.apply(this, arguments);
            this.state = g;
            this.plotY = this.plotLow;
            this.graphic = this.lowerGraphic;
            d && (this.plotX = this.plotLowX);
            a.stateMarkerGraphic && (a.upperStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.lowerStateMarkerGraphic, a.lowerStateMarkerGraphic = void 0);
            u.setState.apply(this, arguments);
          },
          haloPath: function haloPath() {
            var g = this.series.chart.polar,
                b = [];
            this.plotY = this.plotLow;
            g && (this.plotX = this.plotLowX);
            this.isInside && (b = u.haloPath.apply(this, arguments));
            this.plotY = this.plotHigh;
            g && (this.plotX = this.plotHighX);
            this.isTopInside && (b = b.concat(u.haloPath.apply(this, arguments)));
            return b;
          },
          destroyElements: function destroyElements() {
            ["lowerGraphic", "upperGraphic"].forEach(function (g) {
              this[g] && (this[g] = this[g].destroy());
            }, this);
            this.graphic = null;
            return u.destroyElements.apply(this, arguments);
          },
          isValid: function isValid() {
            return y(this.low) && y(this.high);
          }
        });
        "";
      });
      B(c, "parts-more/AreaSplineRangeSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        a = a.seriesType;
        a("areasplinerange", "arearange", null, {
          getPointSpline: l.seriesTypes.spline.prototype.getPointSpline
        });
        "";
      });
      B(c, "parts-more/ColumnRangeSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        var d = a.clamp,
            b = a.merge,
            r = a.pick;
        a = a.seriesType;
        var t = l.defaultPlotOptions,
            y = l.noop,
            c = l.seriesTypes.column.prototype;
        a("columnrange", "arearange", b(t.column, t.arearange, {
          pointRange: null,
          marker: null,
          states: {
            hover: {
              halo: !1
            }
          }
        }), {
          translate: function translate() {
            var b = this,
                g = b.yAxis,
                a = b.xAxis,
                m = a.startAngleRad,
                t,
                k = b.chart,
                l = b.xAxis.isRadial,
                A = Math.max(k.chartWidth, k.chartHeight) + 999,
                q;
            c.translate.apply(b);
            b.points.forEach(function (e) {
              var h = e.shapeArgs,
                  f = b.options.minPointLength;
              e.plotHigh = q = d(g.translate(e.high, 0, 1, 0, 1), -A, A);
              e.plotLow = d(e.plotY, -A, A);
              var p = q;
              var w = r(e.rectPlotY, e.plotY) - q;
              Math.abs(w) < f ? (f -= w, w += f, p -= f / 2) : 0 > w && (w *= -1, p -= w);
              l ? (t = e.barX + m, e.shapeType = "arc", e.shapeArgs = b.polarArc(p + w, p, t, t + e.pointWidth)) : (h.height = w, h.y = p, e.tooltipPos = k.inverted ? [g.len + g.pos - k.plotLeft - p - w / 2, a.len + a.pos - k.plotTop - h.x - h.width / 2, w] : [a.left - k.plotLeft + h.x + h.width / 2, g.pos - k.plotTop + p + w / 2, w]);
            });
          },
          directTouch: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          drawGraph: y,
          getSymbol: y,
          crispCol: function crispCol() {
            return c.crispCol.apply(this, arguments);
          },
          drawPoints: function drawPoints() {
            return c.drawPoints.apply(this, arguments);
          },
          drawTracker: function drawTracker() {
            return c.drawTracker.apply(this, arguments);
          },
          getColumnMetrics: function getColumnMetrics() {
            return c.getColumnMetrics.apply(this, arguments);
          },
          pointAttribs: function pointAttribs() {
            return c.pointAttribs.apply(this, arguments);
          },
          animate: function animate() {
            return c.animate.apply(this, arguments);
          },
          polarArc: function polarArc() {
            return c.polarArc.apply(this, arguments);
          },
          translate3dPoints: function translate3dPoints() {
            return c.translate3dPoints.apply(this, arguments);
          },
          translate3dShapes: function translate3dShapes() {
            return c.translate3dShapes.apply(this, arguments);
          }
        }, {
          setState: c.pointClass.prototype.setState
        });
        "";
      });
      B(c, "parts-more/ColumnPyramidSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        var d = a.clamp,
            b = a.pick;
        a = a.seriesType;
        var r = l.seriesTypes.column.prototype;
        a("columnpyramid", "column", {}, {
          translate: function translate() {
            var a = this,
                l = a.chart,
                c = a.options,
                x = a.dense = 2 > a.closestPointRange * a.xAxis.transA;
            x = a.borderWidth = b(c.borderWidth, x ? 0 : 1);
            var g = a.yAxis,
                u = c.threshold,
                m = a.translatedThreshold = g.getThreshold(u),
                C = b(c.minPointLength, 5),
                k = a.getColumnMetrics(),
                z = k.width,
                A = a.barW = Math.max(z, 1 + 2 * x),
                q = a.pointXOffset = k.offset;
            l.inverted && (m -= .5);
            c.pointPadding && (A = Math.ceil(A));
            r.translate.apply(a);
            a.points.forEach(function (e) {
              var h = b(e.yBottom, m),
                  f = 999 + Math.abs(h),
                  p = d(e.plotY, -f, g.len + f);
              f = e.plotX + q;
              var w = A / 2,
                  v = Math.min(p, h);
              h = Math.max(p, h) - v;
              var n;
              e.barX = f;
              e.pointWidth = z;
              e.tooltipPos = l.inverted ? [g.len + g.pos - l.plotLeft - p, a.xAxis.len - f - w, h] : [f + w, p + g.pos - l.plotTop, h];
              p = u + (e.total || e.y);
              "percent" === c.stacking && (p = u + (0 > e.y) ? -100 : 100);
              p = g.toPixels(p, !0);
              var E = (n = l.plotHeight - p - (l.plotHeight - m)) ? w * (v - p) / n : 0;
              var k = n ? w * (v + h - p) / n : 0;
              n = f - E + w;
              E = f + E + w;
              var r = f + k + w;
              k = f - k + w;
              var H = v - C;
              var t = v + h;
              0 > e.y && (H = v, t = v + h + C);
              l.inverted && (r = l.plotWidth - v, n = p - (l.plotWidth - m), E = w * (p - r) / n, k = w * (p - (r - h)) / n, n = f + w + E, E = n - 2 * E, r = f - k + w, k = f + k + w, H = v, t = v + h - C, 0 > e.y && (t = v + h + C));
              e.shapeType = "path";
              e.shapeArgs = {
                x: n,
                y: H,
                width: E - n,
                height: h,
                d: [["M", n, H], ["L", E, H], ["L", r, t], ["L", k, t], ["Z"]]
              };
            });
          }
        });
        "";
      });
      B(c, "parts-more/GaugeSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        var d = a.clamp,
            b = a.isNumber,
            r = a.merge,
            t = a.pick,
            c = a.pInt;
        a = a.seriesType;
        var D = l.Series,
            x = l.TrackerMixin;
        a("gauge", "line", {
          dataLabels: {
            borderColor: "#cccccc",
            borderRadius: 3,
            borderWidth: 1,
            crop: !1,
            defer: !1,
            enabled: !0,
            verticalAlign: "top",
            y: 15,
            zIndex: 2
          },
          dial: {},
          pivot: {},
          tooltip: {
            headerFormat: ""
          },
          showInLegend: !1
        }, {
          angular: !0,
          directTouch: !0,
          drawGraph: l.noop,
          fixedBox: !0,
          forceDL: !0,
          noSharedTooltip: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          translate: function translate() {
            var g = this.yAxis,
                a = this.options,
                m = g.center;
            this.generatePoints();
            this.points.forEach(function (u) {
              var k = r(a.dial, u.dial),
                  l = c(t(k.radius, "80%")) * m[2] / 200,
                  A = c(t(k.baseLength, "70%")) * l / 100,
                  q = c(t(k.rearLength, "10%")) * l / 100,
                  e = k.baseWidth || 3,
                  h = k.topWidth || 1,
                  f = a.overshoot,
                  p = g.startAngleRad + g.translate(u.y, null, null, null, !0);
              if (b(f) || !1 === a.wrap) f = b(f) ? f / 180 * Math.PI : 0, p = d(p, g.startAngleRad - f, g.endAngleRad + f);
              p = 180 * p / Math.PI;
              u.shapeType = "path";
              u.shapeArgs = {
                d: k.path || [["M", -q, -e / 2], ["L", A, -e / 2], ["L", l, -h / 2], ["L", l, h / 2], ["L", A, e / 2], ["L", -q, e / 2], ["Z"]],
                translateX: m[0],
                translateY: m[1],
                rotation: p
              };
              u.plotX = m[0];
              u.plotY = m[1];
            });
          },
          drawPoints: function drawPoints() {
            var g = this,
                b = g.chart,
                a = g.yAxis.center,
                d = g.pivot,
                k = g.options,
                l = k.pivot,
                A = b.renderer;
            g.points.forEach(function (a) {
              var e = a.graphic,
                  h = a.shapeArgs,
                  f = h.d,
                  p = r(k.dial, a.dial);
              e ? (e.animate(h), h.d = f) : a.graphic = A[a.shapeType](h).attr({
                rotation: h.rotation,
                zIndex: 1
              }).addClass("highcharts-dial").add(g.group);
              if (!b.styledMode) a.graphic[e ? "animate" : "attr"]({
                stroke: p.borderColor || "none",
                "stroke-width": p.borderWidth || 0,
                fill: p.backgroundColor || "#000000"
              });
            });
            d ? d.animate({
              translateX: a[0],
              translateY: a[1]
            }) : (g.pivot = A.circle(0, 0, t(l.radius, 5)).attr({
              zIndex: 2
            }).addClass("highcharts-pivot").translate(a[0], a[1]).add(g.group), b.styledMode || g.pivot.attr({
              "stroke-width": l.borderWidth || 0,
              stroke: l.borderColor || "#cccccc",
              fill: l.backgroundColor || "#000000"
            }));
          },
          animate: function animate(a) {
            var b = this;
            a || b.points.forEach(function (a) {
              var g = a.graphic;
              g && (g.attr({
                rotation: 180 * b.yAxis.startAngleRad / Math.PI
              }), g.animate({
                rotation: a.shapeArgs.rotation
              }, b.options.animation));
            });
          },
          render: function render() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            D.prototype.render.call(this);
            this.group.clip(this.chart.clipRect);
          },
          setData: function setData(a, b) {
            D.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            t(b, !0) && this.chart.redraw();
          },
          hasData: function hasData() {
            return !!this.points.length;
          },
          drawTracker: x && x.drawTrackerPoint
        }, {
          setState: function setState(a) {
            this.state = a;
          }
        });
        "";
      });
      B(c, "parts-more/BoxPlotSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        var d = a.pick;
        a = a.seriesType;
        var b = l.noop,
            r = l.seriesTypes;
        a("boxplot", "column", {
          threshold: null,
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>"
          },
          whiskerLength: "50%",
          fillColor: "#ffffff",
          lineWidth: 1,
          medianWidth: 2,
          whiskerWidth: 2
        }, {
          pointArrayMap: ["low", "q1", "median", "q3", "high"],
          toYData: function toYData(a) {
            return [a.low, a.q1, a.median, a.q3, a.high];
          },
          pointValKey: "high",
          pointAttribs: function pointAttribs() {
            return {};
          },
          drawDataLabels: b,
          translate: function translate() {
            var a = this.yAxis,
                b = this.pointArrayMap;
            r.column.prototype.translate.apply(this);
            this.points.forEach(function (d) {
              b.forEach(function (b) {
                null !== d[b] && (d[b + "Plot"] = a.translate(d[b], 0, 1, 0, 1));
              });
              d.plotHigh = d.highPlot;
            });
          },
          drawPoints: function drawPoints() {
            var a = this,
                b = a.options,
                r = a.chart,
                l = r.renderer,
                g,
                u,
                m,
                c,
                k,
                z,
                A = 0,
                q,
                e,
                h,
                f,
                p = !1 !== a.doQuartiles,
                w,
                v = a.options.whiskerLength;
            a.points.forEach(function (n) {
              var E = n.graphic,
                  I = E ? "animate" : "attr",
                  L = n.shapeArgs,
                  H = {},
                  J = {},
                  t = {},
                  K = {},
                  G = n.color || a.color;
              "undefined" !== typeof n.plotY && (q = Math.round(L.width), e = Math.floor(L.x), h = e + q, f = Math.round(q / 2), g = Math.floor(p ? n.q1Plot : n.lowPlot), u = Math.floor(p ? n.q3Plot : n.lowPlot), m = Math.floor(n.highPlot), c = Math.floor(n.lowPlot), E || (n.graphic = E = l.g("point").add(a.group), n.stem = l.path().addClass("highcharts-boxplot-stem").add(E), v && (n.whiskers = l.path().addClass("highcharts-boxplot-whisker").add(E)), p && (n.box = l.path(void 0).addClass("highcharts-boxplot-box").add(E)), n.medianShape = l.path(void 0).addClass("highcharts-boxplot-median").add(E)), r.styledMode || (J.stroke = n.stemColor || b.stemColor || G, J["stroke-width"] = d(n.stemWidth, b.stemWidth, b.lineWidth), J.dashstyle = n.stemDashStyle || b.stemDashStyle || b.dashStyle, n.stem.attr(J), v && (t.stroke = n.whiskerColor || b.whiskerColor || G, t["stroke-width"] = d(n.whiskerWidth, b.whiskerWidth, b.lineWidth), t.dashstyle = n.whiskerDashStyle || b.whiskerDashStyle || b.dashStyle, n.whiskers.attr(t)), p && (H.fill = n.fillColor || b.fillColor || G, H.stroke = b.lineColor || G, H["stroke-width"] = b.lineWidth || 0, H.dashstyle = n.boxDashStyle || b.boxDashStyle || b.dashStyle, n.box.attr(H)), K.stroke = n.medianColor || b.medianColor || G, K["stroke-width"] = d(n.medianWidth, b.medianWidth, b.lineWidth), K.dashstyle = n.medianDashStyle || b.medianDashStyle || b.dashStyle, n.medianShape.attr(K)), z = n.stem.strokeWidth() % 2 / 2, A = e + f + z, E = [["M", A, u], ["L", A, m], ["M", A, g], ["L", A, c]], n.stem[I]({
                d: E
              }), p && (z = n.box.strokeWidth() % 2 / 2, g = Math.floor(g) + z, u = Math.floor(u) + z, e += z, h += z, E = [["M", e, u], ["L", e, g], ["L", h, g], ["L", h, u], ["L", e, u], ["Z"]], n.box[I]({
                d: E
              })), v && (z = n.whiskers.strokeWidth() % 2 / 2, m += z, c += z, w = /%$/.test(v) ? f * parseFloat(v) / 100 : v / 2, E = [["M", A - w, m], ["L", A + w, m], ["M", A - w, c], ["L", A + w, c]], n.whiskers[I]({
                d: E
              })), k = Math.round(n.medianPlot), z = n.medianShape.strokeWidth() % 2 / 2, k += z, E = [["M", e, k], ["L", h, k]], n.medianShape[I]({
                d: E
              }));
            });
          },
          setStackedPoints: b
        });
        "";
      });
      B(c, "parts-more/ErrorBarSeries.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (l, a) {
        a = a.seriesType;
        var d = l.noop,
            b = l.seriesTypes;
        a("errorbar", "boxplot", {
          color: "#000000",
          grouping: !1,
          linkedTo: ":previous",
          tooltip: {
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
          },
          whiskerWidth: null
        }, {
          type: "errorbar",
          pointArrayMap: ["low", "high"],
          toYData: function toYData(b) {
            return [b.low, b.high];
          },
          pointValKey: "high",
          doQuartiles: !1,
          drawDataLabels: b.arearange ? function () {
            var a = this.pointValKey;
            b.arearange.prototype.drawDataLabels.call(this);
            this.data.forEach(function (b) {
              b.y = b[a];
            });
          } : d,
          getColumnMetrics: function getColumnMetrics() {
            return this.linkedParent && this.linkedParent.columnMetrics || b.column.prototype.getColumnMetrics.call(this);
          }
        });
        "";
      });
      B(c, "parts-more/WaterfallSeries.js", [c["parts/Globals.js"], c["parts/Point.js"], c["parts/Utilities.js"], c["parts/Stacking.js"]], function (l, a, d, b) {
        var r = d.addEvent,
            c = d.arrayMax,
            y = d.arrayMin,
            D = d.correctFloat,
            x = d.isNumber,
            g = d.objectEach,
            u = d.pick;
        d = d.seriesType;
        var m = l.Axis,
            C = l.Chart,
            k = l.Series,
            z = l.seriesTypes;
        r(m, "afterInit", function () {
          this.isXAxis || (this.waterfallStacks = {
            changed: !1
          });
        });
        r(m, "afterBuildStacks", function () {
          this.waterfallStacks.changed = !1;
          delete this.waterfallStacks.alreadyChanged;
        });
        r(C, "beforeRedraw", function () {
          for (var b = this.axes, a = this.series, e = a.length; e--;) {
            a[e].options.stacking && (b.forEach(function (h) {
              h.isXAxis || (h.waterfallStacks.changed = !0);
            }), e = 0);
          }
        });
        r(m, "afterRender", function () {
          var b = this.options.stackLabels;
          b && b.enabled && this.waterfallStacks && this.renderWaterfallStackTotals();
        });

        m.prototype.renderWaterfallStackTotals = function () {
          var a = this.waterfallStacks,
              d = this.stacking && this.stacking.stackTotalGroup,
              e = new b(this, this.options.stackLabels, !1, 0, void 0);
          this.dummyStackItem = e;
          g(a, function (h) {
            g(h, function (f) {
              e.total = f.stackTotal;
              f.label && (e.label = f.label);
              b.prototype.render.call(e, d);
              f.label = e.label;
              delete e.label;
            });
          });
          e.total = null;
        };

        d("waterfall", "column", {
          dataLabels: {
            inside: !0
          },
          lineWidth: 1,
          lineColor: "#333333",
          dashStyle: "Dot",
          borderColor: "#333333",
          states: {
            hover: {
              lineWidthPlus: 0
            }
          }
        }, {
          pointValKey: "y",
          showLine: !0,
          generatePoints: function generatePoints() {
            var b;
            z.column.prototype.generatePoints.apply(this);
            var a = 0;

            for (b = this.points.length; a < b; a++) {
              var e = this.points[a];
              var h = this.processedYData[a];
              if (e.isIntermediateSum || e.isSum) e.y = D(h);
            }
          },
          translate: function translate() {
            var b = this.options,
                a = this.yAxis,
                e,
                h = u(b.minPointLength, 5),
                f = h / 2,
                p = b.threshold,
                g = b.stacking,
                v = a.waterfallStacks[this.stackKey];
            z.column.prototype.translate.apply(this);
            var n = e = p;
            var d = this.points;
            var k = 0;

            for (b = d.length; k < b; k++) {
              var r = d[k];
              var l = this.processedYData[k];
              var m = r.shapeArgs;
              var c = [0, l];
              var t = r.y;

              if (g) {
                if (v) {
                  c = v[k];

                  if ("overlap" === g) {
                    var G = c.stackState[c.stateIndex--];
                    G = 0 <= t ? G : G - t;
                    Object.hasOwnProperty.call(c, "absolutePos") && delete c.absolutePos;
                    Object.hasOwnProperty.call(c, "absoluteNeg") && delete c.absoluteNeg;
                  } else 0 <= t ? (G = c.threshold + c.posTotal, c.posTotal -= t) : (G = c.threshold + c.negTotal, c.negTotal -= t, G -= t), !c.posTotal && Object.hasOwnProperty.call(c, "absolutePos") && (c.posTotal = c.absolutePos, delete c.absolutePos), !c.negTotal && Object.hasOwnProperty.call(c, "absoluteNeg") && (c.negTotal = c.absoluteNeg, delete c.absoluteNeg);

                  r.isSum || (c.connectorThreshold = c.threshold + c.stackTotal);
                  a.reversed ? (l = 0 <= t ? G - t : G + t, t = G) : (l = G, t = G - t);
                  r.below = l <= u(p, 0);
                  m.y = a.translate(l, 0, 1, 0, 1);
                  m.height = Math.abs(m.y - a.translate(t, 0, 1, 0, 1));
                }

                if (t = a.dummyStackItem) t.x = k, t.label = v[k].label, t.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[k], this.stackedYPos[k]);
              } else G = Math.max(n, n + t) + c[0], m.y = a.translate(G, 0, 1, 0, 1), r.isSum ? (m.y = a.translate(c[1], 0, 1, 0, 1), m.height = Math.min(a.translate(c[0], 0, 1, 0, 1), a.len) - m.y) : r.isIntermediateSum ? (0 <= t ? (l = c[1] + e, t = e) : (l = e, t = c[1] + e), a.reversed && (l ^= t, t ^= l, l ^= t), m.y = a.translate(l, 0, 1, 0, 1), m.height = Math.abs(m.y - Math.min(a.translate(t, 0, 1, 0, 1), a.len)), e += c[1]) : (m.height = 0 < l ? a.translate(n, 0, 1, 0, 1) - m.y : a.translate(n, 0, 1, 0, 1) - a.translate(n - l, 0, 1, 0, 1), n += l, r.below = n < u(p, 0)), 0 > m.height && (m.y += m.height, m.height *= -1);

              r.plotY = m.y = Math.round(m.y) - this.borderWidth % 2 / 2;
              m.height = Math.max(Math.round(m.height), .001);
              r.yBottom = m.y + m.height;
              m.height <= h && !r.isNull ? (m.height = h, m.y -= f, r.plotY = m.y, r.minPointLengthOffset = 0 > r.y ? -f : f) : (r.isNull && (m.width = 0), r.minPointLengthOffset = 0);
              m = r.plotY + (r.negative ? m.height : 0);
              this.chart.inverted ? r.tooltipPos[0] = a.len - m : r.tooltipPos[1] = m;
            }
          },
          processData: function processData(a) {
            var b = this.options,
                e = this.yData,
                h = b.data,
                f = e.length,
                p = b.threshold || 0,
                g,
                v,
                n,
                d,
                m;

            for (m = v = g = n = d = 0; m < f; m++) {
              var r = e[m];
              var c = h && h[m] ? h[m] : {};
              "sum" === r || c.isSum ? e[m] = D(v) : "intermediateSum" === r || c.isIntermediateSum ? (e[m] = D(g), g = 0) : (v += r, g += r);
              n = Math.min(v, n);
              d = Math.max(v, d);
            }

            k.prototype.processData.call(this, a);
            b.stacking || (this.dataMin = n + p, this.dataMax = d);
          },
          toYData: function toYData(a) {
            return a.isSum ? "sum" : a.isIntermediateSum ? "intermediateSum" : a.y;
          },
          updateParallelArrays: function updateParallelArrays(a, b) {
            k.prototype.updateParallelArrays.call(this, a, b);
            if ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) this.yData[0] = null;
          },
          pointAttribs: function pointAttribs(a, b) {
            var e = this.options.upColor;
            e && !a.options.color && (a.color = 0 < a.y ? e : null);
            a = z.column.prototype.pointAttribs.call(this, a, b);
            delete a.dashstyle;
            return a;
          },
          getGraphPath: function getGraphPath() {
            return [["M", 0, 0]];
          },
          getCrispPath: function getCrispPath() {
            var a = this.data,
                b = this.yAxis,
                e = a.length,
                h = Math.round(this.graph.strokeWidth()) % 2 / 2,
                f = Math.round(this.borderWidth) % 2 / 2,
                p = this.xAxis.reversed,
                g = this.yAxis.reversed,
                v = this.options.stacking,
                n = [],
                d;

            for (d = 1; d < e; d++) {
              var k = a[d].shapeArgs;
              var m = a[d - 1];
              var r = a[d - 1].shapeArgs;
              var c = b.waterfallStacks[this.stackKey];
              var l = 0 < m.y ? -r.height : 0;
              c && r && k && (c = c[d - 1], v ? (c = c.connectorThreshold, l = Math.round(b.translate(c, 0, 1, 0, 1) + (g ? l : 0)) - h) : l = r.y + m.minPointLengthOffset + f - h, n.push(["M", (r.x || 0) + (p ? 0 : r.width || 0), l], ["L", (k.x || 0) + (p ? k.width || 0 : 0), l]));
              !v && n.length && r && (0 > m.y && !g || 0 < m.y && g) && (n[n.length - 2][2] += r.height, n[n.length - 1][2] += r.height);
            }

            return n;
          },
          drawGraph: function drawGraph() {
            k.prototype.drawGraph.call(this);
            this.graph.attr({
              d: this.getCrispPath()
            });
          },
          setStackedPoints: function setStackedPoints() {
            function a(f, h, a, b) {
              if (x) for (a; a < x; a++) {
                t.stackState[a] += b;
              } else t.stackState[0] = f, x = t.stackState.length;
              t.stackState.push(t.stackState[x - 1] + h);
            }

            var b = this.options,
                e = this.yAxis.waterfallStacks,
                h = b.threshold,
                f = h || 0,
                p = f,
                g = this.stackKey,
                v = this.xData,
                n = v.length,
                d,
                k,
                m;
            this.yAxis.stacking.usePercentage = !1;
            var r = k = m = f;

            if (this.visible || !this.chart.options.chart.ignoreHiddenSeries) {
              var c = e.changed;
              (d = e.alreadyChanged) && 0 > d.indexOf(g) && (c = !0);
              e[g] || (e[g] = {});
              d = e[g];

              for (var l = 0; l < n; l++) {
                var u = v[l];
                if (!d[u] || c) d[u] = {
                  negTotal: 0,
                  posTotal: 0,
                  stackTotal: 0,
                  threshold: 0,
                  stateIndex: 0,
                  stackState: [],
                  label: c && d[u] ? d[u].label : void 0
                };
                var t = d[u];
                var y = this.yData[l];
                0 <= y ? t.posTotal += y : t.negTotal += y;
                var C = b.data[l];
                u = t.absolutePos = t.posTotal;
                var z = t.absoluteNeg = t.negTotal;
                t.stackTotal = u + z;
                var x = t.stackState.length;
                C && C.isIntermediateSum ? (a(m, k, 0, m), m = k, k = h, f ^= p, p ^= f, f ^= p) : C && C.isSum ? (a(h, r, x), f = h) : (a(f, y, 0, r), C && (r += y, k += y));
                t.stateIndex++;
                t.threshold = f;
                f += t.stackTotal;
              }

              e.changed = !1;
              e.alreadyChanged || (e.alreadyChanged = []);
              e.alreadyChanged.push(g);
            }
          },
          getExtremes: function getExtremes() {
            var a = this.options.stacking;

            if (a) {
              var b = this.yAxis;
              b = b.waterfallStacks;
              var e = this.stackedYNeg = [];
              var h = this.stackedYPos = [];
              "overlap" === a ? g(b[this.stackKey], function (f) {
                e.push(y(f.stackState));
                h.push(c(f.stackState));
              }) : g(b[this.stackKey], function (f) {
                e.push(f.negTotal + f.threshold);
                h.push(f.posTotal + f.threshold);
              });
              return {
                dataMin: y(e),
                dataMax: c(h)
              };
            }

            return {
              dataMin: this.dataMin,
              dataMax: this.dataMax
            };
          }
        }, {
          getClassName: function getClassName() {
            var b = a.prototype.getClassName.call(this);
            this.isSum ? b += " highcharts-sum" : this.isIntermediateSum && (b += " highcharts-intermediate-sum");
            return b;
          },
          isValid: function isValid() {
            return x(this.y) || this.isSum || !!this.isIntermediateSum;
          }
        });
        "";
      });
      B(c, "parts-more/PolygonSeries.js", [c["parts/Globals.js"], c["mixins/legend-symbol.js"], c["parts/Utilities.js"]], function (c, a, d) {
        d = d.seriesType;
        var b = c.Series,
            r = c.seriesTypes;
        d("polygon", "scatter", {
          marker: {
            enabled: !1,
            states: {
              hover: {
                enabled: !1
              }
            }
          },
          stickyTracking: !1,
          tooltip: {
            followPointer: !0,
            pointFormat: ""
          },
          trackByArea: !0
        }, {
          type: "polygon",
          getGraphPath: function getGraphPath() {
            for (var a = b.prototype.getGraphPath.call(this), d = a.length + 1; d--;) {
              (d === a.length || "M" === a[d][0]) && 0 < d && a.splice(d, 0, ["Z"]);
            }

            return this.areaPath = a;
          },
          drawGraph: function drawGraph() {
            this.options.fillColor = this.color;
            r.area.prototype.drawGraph.call(this);
          },
          drawLegendSymbol: a.drawRectangle,
          drawTracker: b.prototype.drawTracker,
          setStackedPoints: c.noop
        });
        "";
      });
      B(c, "parts-more/BubbleLegend.js", [c["parts/Globals.js"], c["parts/Color.js"], c["parts/Legend.js"], c["parts/Utilities.js"]], function (c, a, d, b) {
        "";

        var r = a.parse;
        a = b.addEvent;
        var l = b.arrayMax,
            y = b.arrayMin,
            D = b.isNumber,
            x = b.merge,
            g = b.objectEach,
            u = b.pick,
            m = b.stableSort,
            C = b.wrap,
            k = c.Series,
            z = c.Chart,
            A = c.noop,
            q = c.setOptions;
        q({
          legend: {
            bubbleLegend: {
              borderColor: void 0,
              borderWidth: 2,
              className: void 0,
              color: void 0,
              connectorClassName: void 0,
              connectorColor: void 0,
              connectorDistance: 60,
              connectorWidth: 1,
              enabled: !1,
              labels: {
                className: void 0,
                allowOverlap: !1,
                format: "",
                formatter: void 0,
                align: "right",
                style: {
                  fontSize: 10,
                  color: void 0
                },
                x: 0,
                y: 0
              },
              maxSize: 60,
              minSize: 10,
              legendIndex: 0,
              ranges: {
                value: void 0,
                borderColor: void 0,
                color: void 0,
                connectorColor: void 0
              },
              sizeBy: "area",
              sizeByAbsoluteValue: !1,
              zIndex: 1,
              zThreshold: 0
            }
          }
        });

        q = function () {
          function a(a, f) {
            this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0;
            this.setState = A;
            this.init(a, f);
          }

          a.prototype.init = function (a, f) {
            this.options = a;
            this.visible = !0;
            this.chart = f.chart;
            this.legend = f;
          };

          a.prototype.addToLegend = function (a) {
            a.splice(this.options.legendIndex, 0, this);
          };

          a.prototype.drawLegendSymbol = function (a) {
            var f = this.chart,
                h = this.options,
                b = u(a.options.itemDistance, 20),
                e = h.ranges;
            var g = h.connectorDistance;
            this.fontMetrics = f.renderer.fontMetrics(h.labels.style.fontSize.toString() + "px");
            e && e.length && D(e[0].value) ? (m(e, function (f, a) {
              return a.value - f.value;
            }), this.ranges = e, this.setOptions(), this.render(), f = this.getMaxLabelSize(), e = this.ranges[0].radius, a = 2 * e, g = g - e + f.width, g = 0 < g ? g : 0, this.maxLabel = f, this.movementX = "left" === h.labels.align ? g : 0, this.legendItemWidth = a + g + b, this.legendItemHeight = a + this.fontMetrics.h / 2) : a.options.bubbleLegend.autoRanges = !0;
          };

          a.prototype.setOptions = function () {
            var a = this.ranges,
                f = this.options,
                b = this.chart.series[f.seriesIndex],
                e = this.legend.baseline,
                g = {
              "z-index": f.zIndex,
              "stroke-width": f.borderWidth
            },
                n = {
              "z-index": f.zIndex,
              "stroke-width": f.connectorWidth
            },
                d = this.getLabelStyles(),
                k = b.options.marker.fillOpacity,
                c = this.chart.styledMode;
            a.forEach(function (h, p) {
              c || (g.stroke = u(h.borderColor, f.borderColor, b.color), g.fill = u(h.color, f.color, 1 !== k ? r(b.color).setOpacity(k).get("rgba") : b.color), n.stroke = u(h.connectorColor, f.connectorColor, b.color));
              a[p].radius = this.getRangeRadius(h.value);
              a[p] = x(a[p], {
                center: a[0].radius - a[p].radius + e
              });
              c || x(!0, a[p], {
                bubbleStyle: x(!1, g),
                connectorStyle: x(!1, n),
                labelStyle: d
              });
            }, this);
          };

          a.prototype.getLabelStyles = function () {
            var a = this.options,
                f = {},
                b = "left" === a.labels.align,
                e = this.legend.options.rtl;
            g(a.labels.style, function (a, b) {
              "color" !== b && "fontSize" !== b && "z-index" !== b && (f[b] = a);
            });
            return x(!1, f, {
              "font-size": a.labels.style.fontSize,
              fill: u(a.labels.style.color, "#000000"),
              "z-index": a.zIndex,
              align: e || b ? "right" : "left"
            });
          };

          a.prototype.getRangeRadius = function (a) {
            var f = this.options;
            return this.chart.series[this.options.seriesIndex].getRadius.call(this, f.ranges[f.ranges.length - 1].value, f.ranges[0].value, f.minSize, f.maxSize, a);
          };

          a.prototype.render = function () {
            var a = this.chart.renderer,
                f = this.options.zThreshold;
            this.symbols || (this.symbols = {
              connectors: [],
              bubbleItems: [],
              labels: []
            });
            this.legendSymbol = a.g("bubble-legend");
            this.legendItem = a.g("bubble-legend-item");
            this.legendSymbol.translateX = 0;
            this.legendSymbol.translateY = 0;
            this.ranges.forEach(function (a) {
              a.value >= f && this.renderRange(a);
            }, this);
            this.legendSymbol.add(this.legendItem);
            this.legendItem.add(this.legendGroup);
            this.hideOverlappingLabels();
          };

          a.prototype.renderRange = function (a) {
            var f = this.options,
                b = f.labels,
                e = this.chart.renderer,
                h = this.symbols,
                g = h.labels,
                d = a.center,
                k = Math.abs(a.radius),
                c = f.connectorDistance || 0,
                m = b.align,
                r = b.style.fontSize;
            c = this.legend.options.rtl || "left" === m ? -c : c;
            b = f.connectorWidth;
            var l = this.ranges[0].radius || 0,
                u = d - k - f.borderWidth / 2 + b / 2;
            r = r / 2 - (this.fontMetrics.h - r) / 2;
            var t = e.styledMode;
            "center" === m && (c = 0, f.connectorDistance = 0, a.labelStyle.align = "center");
            m = u + f.labels.y;
            var q = l + c + f.labels.x;
            h.bubbleItems.push(e.circle(l, d + ((u % 1 ? 1 : .5) - (b % 2 ? 0 : .5)), k).attr(t ? {} : a.bubbleStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (f.className || "")).add(this.legendSymbol));
            h.connectors.push(e.path(e.crispLine([["M", l, u], ["L", l + c, u]], f.connectorWidth)).attr(t ? {} : a.connectorStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (f.connectorClassName || "")).add(this.legendSymbol));
            a = e.text(this.formatLabel(a), q, m + r).attr(t ? {} : a.labelStyle).addClass("highcharts-bubble-legend-labels " + (f.labels.className || "")).add(this.legendSymbol);
            g.push(a);
            a.placed = !0;
            a.alignAttr = {
              x: q,
              y: m + r
            };
          };

          a.prototype.getMaxLabelSize = function () {
            var a, f;
            this.symbols.labels.forEach(function (b) {
              f = b.getBBox(!0);
              a = a ? f.width > a.width ? f : a : f;
            });
            return a || {};
          };

          a.prototype.formatLabel = function (a) {
            var f = this.options,
                e = f.labels.formatter;
            f = f.labels.format;
            var h = this.chart.numberFormatter;
            return f ? b.format(f, a) : e ? e.call(a) : h(a.value, 1);
          };

          a.prototype.hideOverlappingLabels = function () {
            var a = this.chart,
                f = this.symbols;
            !this.options.labels.allowOverlap && f && (a.hideOverlappingLabels(f.labels), f.labels.forEach(function (a, b) {
              a.newOpacity ? a.newOpacity !== a.oldOpacity && f.connectors[b].show() : f.connectors[b].hide();
            }));
          };

          a.prototype.getRanges = function () {
            var a = this.legend.bubbleLegend,
                f = a.options.ranges,
                b,
                e = Number.MAX_VALUE,
                g = -Number.MAX_VALUE;
            a.chart.series.forEach(function (f) {
              f.isBubble && !f.ignoreSeries && (b = f.zData.filter(D), b.length && (e = u(f.options.zMin, Math.min(e, Math.max(y(b), !1 === f.options.displayNegative ? f.options.zThreshold : -Number.MAX_VALUE))), g = u(f.options.zMax, Math.max(g, l(b)))));
            });
            var n = e === g ? [{
              value: g
            }] : [{
              value: e
            }, {
              value: (e + g) / 2
            }, {
              value: g,
              autoRanges: !0
            }];
            f.length && f[0].radius && n.reverse();
            n.forEach(function (a, b) {
              f && f[b] && (n[b] = x(!1, f[b], a));
            });
            return n;
          };

          a.prototype.predictBubbleSizes = function () {
            var a = this.chart,
                f = this.fontMetrics,
                b = a.legend.options,
                e = "horizontal" === b.layout,
                g = e ? a.legend.lastLineHeight : 0,
                n = a.plotSizeX,
                d = a.plotSizeY,
                k = a.series[this.options.seriesIndex];
            a = Math.ceil(k.minPxSize);
            var c = Math.ceil(k.maxPxSize);
            k = k.options.maxSize;
            var m = Math.min(d, n);
            if (b.floating || !/%$/.test(k)) f = c;else if (k = parseFloat(k), f = (m + g - f.h / 2) * k / 100 / (k / 100 + 1), e && d - f >= n || !e && n - f >= d) f = c;
            return [a, Math.ceil(f)];
          };

          a.prototype.updateRanges = function (a, f) {
            var b = this.legend.options.bubbleLegend;
            b.minSize = a;
            b.maxSize = f;
            b.ranges = this.getRanges();
          };

          a.prototype.correctSizes = function () {
            var a = this.legend,
                f = this.chart.series[this.options.seriesIndex];
            1 < Math.abs(Math.ceil(f.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, f.maxPxSize), a.render());
          };

          return a;
        }();

        a(d, "afterGetAllItems", function (a) {
          var b = this.bubbleLegend,
              f = this.options,
              e = f.bubbleLegend,
              g = this.chart.getVisibleBubbleSeriesIndex();
          b && b.ranges && b.ranges.length && (e.ranges.length && (e.autoRanges = !!e.ranges[0].autoRanges), this.destroyItem(b));
          0 <= g && f.enabled && e.enabled && (e.seriesIndex = g, this.bubbleLegend = new c.BubbleLegend(e, this), this.bubbleLegend.addToLegend(a.allItems));
        });

        z.prototype.getVisibleBubbleSeriesIndex = function () {
          for (var a = this.series, b = 0; b < a.length;) {
            if (a[b] && a[b].isBubble && a[b].visible && a[b].zData.length) return b;
            b++;
          }

          return -1;
        };

        d.prototype.getLinesHeights = function () {
          var a = this.allItems,
              b = [],
              f = a.length,
              g,
              d = 0;

          for (g = 0; g < f; g++) {
            if (a[g].legendItemHeight && (a[g].itemHeight = a[g].legendItemHeight), a[g] === a[f - 1] || a[g + 1] && a[g]._legendItemPos[1] !== a[g + 1]._legendItemPos[1]) {
              b.push({
                height: 0
              });
              var v = b[b.length - 1];

              for (d; d <= g; d++) {
                a[d].itemHeight > v.height && (v.height = a[d].itemHeight);
              }

              v.step = g;
            }
          }

          return b;
        };

        d.prototype.retranslateItems = function (a) {
          var b,
              f,
              e,
              g = this.options.rtl,
              d = 0;
          this.allItems.forEach(function (h, p) {
            b = h.legendGroup.translateX;
            f = h._legendItemPos[1];
            if ((e = h.movementX) || g && h.ranges) e = g ? b - h.options.maxSize / 2 : b + e, h.legendGroup.attr({
              translateX: e
            });
            p > a[d].step && d++;
            h.legendGroup.attr({
              translateY: Math.round(f + a[d].height / 2)
            });
            h._legendItemPos[1] = f + a[d].height / 2;
          });
        };

        a(k, "legendItemClick", function () {
          var a = this.chart,
              b = this.visible,
              f = this.chart.legend;
          f && f.bubbleLegend && (this.visible = !b, this.ignoreSeries = b, a = 0 <= a.getVisibleBubbleSeriesIndex(), f.bubbleLegend.visible !== a && (f.update({
            bubbleLegend: {
              enabled: a
            }
          }), f.bubbleLegend.visible = a), this.visible = b);
        });
        C(z.prototype, "drawChartBox", function (a, b, f) {
          var e = this.legend,
              h = 0 <= this.getVisibleBubbleSeriesIndex();

          if (e && e.options.enabled && e.bubbleLegend && e.options.bubbleLegend.autoRanges && h) {
            var d = e.bubbleLegend.options;
            h = e.bubbleLegend.predictBubbleSizes();
            e.bubbleLegend.updateRanges(h[0], h[1]);
            d.placed || (e.group.placed = !1, e.allItems.forEach(function (a) {
              a.legendGroup.translateY = null;
            }));
            e.render();
            this.getMargins();
            this.axes.forEach(function (a) {
              a.visible && a.render();
              d.placed || (a.setScale(), a.updateNames(), g(a.ticks, function (a) {
                a.isNew = !0;
                a.isNewLabel = !0;
              }));
            });
            d.placed = !0;
            this.getMargins();
            a.call(this, b, f);
            e.bubbleLegend.correctSizes();
            e.retranslateItems(e.getLinesHeights());
          } else a.call(this, b, f), e && e.options.enabled && e.bubbleLegend && (e.render(), e.retranslateItems(e.getLinesHeights()));
        });
        c.BubbleLegend = q;
        return c.BubbleLegend;
      });
      B(c, "parts-more/BubbleSeries.js", [c["parts/Globals.js"], c["parts/Color.js"], c["parts/Point.js"], c["parts/Utilities.js"]], function (c, a, d, b) {
        var r = a.parse,
            l = b.arrayMax,
            y = b.arrayMin,
            D = b.clamp,
            x = b.extend,
            g = b.isNumber,
            u = b.pick,
            m = b.pInt;
        a = b.seriesType;
        b = c.Axis;
        var C = c.noop,
            k = c.Series,
            z = c.seriesTypes;
        a("bubble", "scatter", {
          dataLabels: {
            formatter: function formatter() {
              return this.point.z;
            },
            inside: !0,
            verticalAlign: "middle"
          },
          animationLimit: 250,
          marker: {
            lineColor: null,
            lineWidth: 1,
            fillOpacity: .5,
            radius: null,
            states: {
              hover: {
                radiusPlus: 0
              }
            },
            symbol: "circle"
          },
          minSize: 8,
          maxSize: "20%",
          softThreshold: !1,
          states: {
            hover: {
              halo: {
                size: 5
              }
            }
          },
          tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
          },
          turboThreshold: 0,
          zThreshold: 0,
          zoneAxis: "z"
        }, {
          pointArrayMap: ["y", "z"],
          parallelArrays: ["x", "y", "z"],
          trackerGroups: ["group", "dataLabelsGroup"],
          specialGroup: "group",
          bubblePadding: !0,
          zoneAxis: "z",
          directTouch: !0,
          isBubble: !0,
          pointAttribs: function pointAttribs(a, b) {
            var e = this.options.marker.fillOpacity;
            a = k.prototype.pointAttribs.call(this, a, b);
            1 !== e && (a.fill = r(a.fill).setOpacity(e).get("rgba"));
            return a;
          },
          getRadii: function getRadii(a, b, e) {
            var g = this.zData,
                f = this.yData,
                p = e.minPxSize,
                d = e.maxPxSize,
                v = [];
            var n = 0;

            for (e = g.length; n < e; n++) {
              var k = g[n];
              v.push(this.getRadius(a, b, p, d, k, f[n]));
            }

            this.radii = v;
          },
          getRadius: function getRadius(a, b, e, h, f, p) {
            var d = this.options,
                v = "width" !== d.sizeBy,
                n = d.zThreshold,
                k = b - a,
                c = .5;
            if (null === p || null === f) return null;

            if (g(f)) {
              d.sizeByAbsoluteValue && (f = Math.abs(f - n), k = Math.max(b - n, Math.abs(a - n)), a = 0);
              if (f < a) return e / 2 - 1;
              0 < k && (c = (f - a) / k);
            }

            v && 0 <= c && (c = Math.sqrt(c));
            return Math.ceil(e + c * (h - e)) / 2;
          },
          animate: function animate(a) {
            !a && this.points.length < this.options.animationLimit && this.points.forEach(function (a) {
              var b = a.graphic;

              if (b && b.width) {
                var g = {
                  x: b.x,
                  y: b.y,
                  width: b.width,
                  height: b.height
                };
                b.attr({
                  x: a.plotX,
                  y: a.plotY,
                  width: 1,
                  height: 1
                });
                b.animate(g, this.options.animation);
              }
            }, this);
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          translate: function translate() {
            var a,
                b = this.data,
                e = this.radii;
            z.scatter.prototype.translate.call(this);

            for (a = b.length; a--;) {
              var h = b[a];
              var f = e ? e[a] : 0;
              g(f) && f >= this.minPxSize / 2 ? (h.marker = x(h.marker, {
                radius: f,
                width: 2 * f,
                height: 2 * f
              }), h.dlBox = {
                x: h.plotX - f,
                y: h.plotY - f,
                width: 2 * f,
                height: 2 * f
              }) : h.shapeArgs = h.plotY = h.dlBox = void 0;
            }
          },
          alignDataLabel: z.column.prototype.alignDataLabel,
          buildKDTree: C,
          applyZones: C
        }, {
          haloPath: function haloPath(a) {
            return d.prototype.haloPath.call(this, 0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a);
          },
          ttBelow: !1
        });

        b.prototype.beforePadding = function () {
          var a = this,
              b = this.len,
              e = this.chart,
              h = 0,
              f = b,
              p = this.isXAxis,
              d = p ? "xData" : "yData",
              k = this.min,
              n = {},
              c = Math.min(e.plotWidth, e.plotHeight),
              r = Number.MAX_VALUE,
              t = -Number.MAX_VALUE,
              C = this.max - k,
              x = b / C,
              z = [];
          this.series.forEach(function (f) {
            var b = f.options;
            !f.bubblePadding || !f.visible && e.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, z.push(f), p && (["minSize", "maxSize"].forEach(function (a) {
              var f = b[a],
                  e = /%$/.test(f);
              f = m(f);
              n[a] = e ? c * f / 100 : f;
            }), f.minPxSize = n.minSize, f.maxPxSize = Math.max(n.maxSize, n.minSize), f = f.zData.filter(g), f.length && (r = u(b.zMin, D(y(f), !1 === b.displayNegative ? b.zThreshold : -Number.MAX_VALUE, r)), t = u(b.zMax, Math.max(t, l(f))))));
          });
          z.forEach(function (b) {
            var e = b[d],
                n = e.length;
            p && b.getRadii(r, t, b);
            if (0 < C) for (; n--;) {
              if (g(e[n]) && a.dataMin <= e[n] && e[n] <= a.max) {
                var v = b.radii ? b.radii[n] : 0;
                h = Math.min((e[n] - k) * x - v, h);
                f = Math.max((e[n] - k) * x + v, f);
              }
            }
          });
          z.length && 0 < C && !this.logarithmic && (f -= b, x *= (b + Math.max(0, h) - Math.min(f, b)) / b, [["min", "userMin", h], ["max", "userMax", f]].forEach(function (f) {
            "undefined" === typeof u(a.options[f[0]], a[f[1]]) && (a[f[0]] += f[2] / x);
          }));
        };

        "";
      });
      B(c, "modules/networkgraph/integrations.js", [c["parts/Globals.js"]], function (c) {
        c.networkgraphIntegrations = {
          verlet: {
            attractiveForceFunction: function attractiveForceFunction(a, d) {
              return (d - a) / a;
            },
            repulsiveForceFunction: function repulsiveForceFunction(a, d) {
              return (d - a) / a * (d > a ? 1 : 0);
            },
            barycenter: function barycenter() {
              var a = this.options.gravitationalConstant,
                  d = this.barycenter.xFactor,
                  b = this.barycenter.yFactor;
              d = (d - (this.box.left + this.box.width) / 2) * a;
              b = (b - (this.box.top + this.box.height) / 2) * a;
              this.nodes.forEach(function (a) {
                a.fixedPosition || (a.plotX -= d / a.mass / a.degree, a.plotY -= b / a.mass / a.degree);
              });
            },
            repulsive: function repulsive(a, d, b) {
              d = d * this.diffTemperature / a.mass / a.degree;
              a.fixedPosition || (a.plotX += b.x * d, a.plotY += b.y * d);
            },
            attractive: function attractive(a, d, b) {
              var c = a.getMass(),
                  l = -b.x * d * this.diffTemperature;
              d = -b.y * d * this.diffTemperature;
              a.fromNode.fixedPosition || (a.fromNode.plotX -= l * c.fromNode / a.fromNode.degree, a.fromNode.plotY -= d * c.fromNode / a.fromNode.degree);
              a.toNode.fixedPosition || (a.toNode.plotX += l * c.toNode / a.toNode.degree, a.toNode.plotY += d * c.toNode / a.toNode.degree);
            },
            integrate: function integrate(a, d) {
              var b = -a.options.friction,
                  c = a.options.maxSpeed,
                  l = (d.plotX + d.dispX - d.prevX) * b;
              b *= d.plotY + d.dispY - d.prevY;
              var y = Math.abs,
                  D = y(l) / (l || 1);
              y = y(b) / (b || 1);
              l = D * Math.min(c, Math.abs(l));
              b = y * Math.min(c, Math.abs(b));
              d.prevX = d.plotX + d.dispX;
              d.prevY = d.plotY + d.dispY;
              d.plotX += l;
              d.plotY += b;
              d.temperature = a.vectorLength({
                x: l,
                y: b
              });
            },
            getK: function getK(a) {
              return Math.pow(a.box.width * a.box.height / a.nodes.length, .5);
            }
          },
          euler: {
            attractiveForceFunction: function attractiveForceFunction(a, d) {
              return a * a / d;
            },
            repulsiveForceFunction: function repulsiveForceFunction(a, d) {
              return d * d / a;
            },
            barycenter: function barycenter() {
              var a = this.options.gravitationalConstant,
                  d = this.barycenter.xFactor,
                  b = this.barycenter.yFactor;
              this.nodes.forEach(function (c) {
                if (!c.fixedPosition) {
                  var l = c.getDegree();
                  l *= 1 + l / 2;
                  c.dispX += (d - c.plotX) * a * l / c.degree;
                  c.dispY += (b - c.plotY) * a * l / c.degree;
                }
              });
            },
            repulsive: function repulsive(a, d, b, c) {
              a.dispX += b.x / c * d / a.degree;
              a.dispY += b.y / c * d / a.degree;
            },
            attractive: function attractive(a, d, b, c) {
              var l = a.getMass(),
                  r = b.x / c * d;
              d *= b.y / c;
              a.fromNode.fixedPosition || (a.fromNode.dispX -= r * l.fromNode / a.fromNode.degree, a.fromNode.dispY -= d * l.fromNode / a.fromNode.degree);
              a.toNode.fixedPosition || (a.toNode.dispX += r * l.toNode / a.toNode.degree, a.toNode.dispY += d * l.toNode / a.toNode.degree);
            },
            integrate: function integrate(a, d) {
              d.dispX += d.dispX * a.options.friction;
              d.dispY += d.dispY * a.options.friction;
              var b = d.temperature = a.vectorLength({
                x: d.dispX,
                y: d.dispY
              });
              0 !== b && (d.plotX += d.dispX / b * Math.min(Math.abs(d.dispX), a.temperature), d.plotY += d.dispY / b * Math.min(Math.abs(d.dispY), a.temperature));
            },
            getK: function getK(a) {
              return Math.pow(a.box.width * a.box.height / a.nodes.length, .3);
            }
          }
        };
      });
      B(c, "modules/networkgraph/QuadTree.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (c, a) {
        a = a.extend;

        var d = c.QuadTreeNode = function (a) {
          this.box = a;
          this.boxSize = Math.min(a.width, a.height);
          this.nodes = [];
          this.body = this.isInternal = !1;
          this.isEmpty = !0;
        };

        a(d.prototype, {
          insert: function insert(a, c) {
            this.isInternal ? this.nodes[this.getBoxPosition(a)].insert(a, c - 1) : (this.isEmpty = !1, this.body ? c ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, c - 1), this.body = !0), this.nodes[this.getBoxPosition(a)].insert(a, c - 1)) : (c = new d({
              top: a.plotX,
              left: a.plotY,
              width: .1,
              height: .1
            }), c.body = a, c.isInternal = !1, this.nodes.push(c)) : (this.isInternal = !1, this.body = a));
          },
          updateMassAndCenter: function updateMassAndCenter() {
            var a = 0,
                d = 0,
                c = 0;
            this.isInternal ? (this.nodes.forEach(function (b) {
              b.isEmpty || (a += b.mass, d += b.plotX * b.mass, c += b.plotY * b.mass);
            }), d /= a, c /= a) : this.body && (a = this.body.mass, d = this.body.plotX, c = this.body.plotY);
            this.mass = a;
            this.plotX = d;
            this.plotY = c;
          },
          divideBox: function divideBox() {
            var a = this.box.width / 2,
                c = this.box.height / 2;
            this.nodes[0] = new d({
              left: this.box.left,
              top: this.box.top,
              width: a,
              height: c
            });
            this.nodes[1] = new d({
              left: this.box.left + a,
              top: this.box.top,
              width: a,
              height: c
            });
            this.nodes[2] = new d({
              left: this.box.left + a,
              top: this.box.top + c,
              width: a,
              height: c
            });
            this.nodes[3] = new d({
              left: this.box.left,
              top: this.box.top + c,
              width: a,
              height: c
            });
          },
          getBoxPosition: function getBoxPosition(a) {
            var b = a.plotY < this.box.top + this.box.height / 2;
            return a.plotX < this.box.left + this.box.width / 2 ? b ? 0 : 3 : b ? 1 : 2;
          }
        });

        c = c.QuadTree = function (a, c, l, y) {
          this.box = {
            left: a,
            top: c,
            width: l,
            height: y
          };
          this.maxDepth = 25;
          this.root = new d(this.box, "0");
          this.root.isInternal = !0;
          this.root.isRoot = !0;
          this.root.divideBox();
        };

        a(c.prototype, {
          insertNodes: function insertNodes(a) {
            a.forEach(function (a) {
              this.root.insert(a, this.maxDepth);
            }, this);
          },
          visitNodeRecursive: function visitNodeRecursive(a, d, c) {
            var b;
            a || (a = this.root);
            a === this.root && d && (b = d(a));
            !1 !== b && (a.nodes.forEach(function (a) {
              if (a.isInternal) {
                d && (b = d(a));
                if (!1 === b) return;
                this.visitNodeRecursive(a, d, c);
              } else a.body && d && d(a.body);

              c && c(a);
            }, this), a === this.root && c && c(a));
          },
          calculateMassAndCenter: function calculateMassAndCenter() {
            this.visitNodeRecursive(null, null, function (a) {
              a.updateMassAndCenter();
            });
          }
        });
      });
      B(c, "modules/networkgraph/layouts.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (c, a) {
        var d = a.addEvent,
            b = a.clamp,
            l = a.defined,
            t = a.extend,
            y = a.isFunction,
            D = a.pick,
            x = a.setAnimation;
        a = c.Chart;
        c.layouts = {
          "reingold-fruchterman": function reingoldFruchterman() {}
        };
        t(c.layouts["reingold-fruchterman"].prototype, {
          init: function init(a) {
            this.options = a;
            this.nodes = [];
            this.links = [];
            this.series = [];
            this.box = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            this.setInitialRendering(!0);
            this.integration = c.networkgraphIntegrations[a.integration];
            this.enableSimulation = a.enableSimulation;
            this.attractiveForce = D(a.attractiveForce, this.integration.attractiveForceFunction);
            this.repulsiveForce = D(a.repulsiveForce, this.integration.repulsiveForceFunction);
            this.approximation = a.approximation;
          },
          updateSimulation: function updateSimulation(a) {
            this.enableSimulation = D(a, this.options.enableSimulation);
          },
          start: function start() {
            var a = this.series,
                b = this.options;
            this.currentStep = 0;
            this.forces = a[0] && a[0].forces || [];
            this.chart = a[0] && a[0].chart;
            this.initialRendering && (this.initPositions(), a.forEach(function (a) {
              a.finishedAnimating = !0;
              a.render();
            }));
            this.setK();
            this.resetSimulation(b);
            this.enableSimulation && this.step();
          },
          step: function step() {
            var a = this,
                b = this.series;
            a.currentStep++;
            "barnes-hut" === a.approximation && (a.createQuadTree(), a.quadTree.calculateMassAndCenter());
            a.forces.forEach(function (b) {
              a[b + "Forces"](a.temperature);
            });
            a.applyLimits(a.temperature);
            a.temperature = a.coolDown(a.startTemperature, a.diffTemperature, a.currentStep);
            a.prevSystemTemperature = a.systemTemperature;
            a.systemTemperature = a.getSystemTemperature();
            a.enableSimulation && (b.forEach(function (a) {
              a.chart && a.render();
            }), a.maxIterations-- && isFinite(a.temperature) && !a.isStable() ? (a.simulation && c.win.cancelAnimationFrame(a.simulation), a.simulation = c.win.requestAnimationFrame(function () {
              a.step();
            })) : a.simulation = !1);
          },
          stop: function stop() {
            this.simulation && c.win.cancelAnimationFrame(this.simulation);
          },
          setArea: function setArea(a, b, d, c) {
            this.box = {
              left: a,
              top: b,
              width: d,
              height: c
            };
          },
          setK: function setK() {
            this.k = this.options.linkLength || this.integration.getK(this);
          },
          addElementsToCollection: function addElementsToCollection(a, b) {
            a.forEach(function (a) {
              -1 === b.indexOf(a) && b.push(a);
            });
          },
          removeElementFromCollection: function removeElementFromCollection(a, b) {
            a = b.indexOf(a);
            -1 !== a && b.splice(a, 1);
          },
          clear: function clear() {
            this.nodes.length = 0;
            this.links.length = 0;
            this.series.length = 0;
            this.resetSimulation();
          },
          resetSimulation: function resetSimulation() {
            this.forcedStop = !1;
            this.systemTemperature = 0;
            this.setMaxIterations();
            this.setTemperature();
            this.setDiffTemperature();
          },
          setMaxIterations: function setMaxIterations(a) {
            this.maxIterations = D(a, this.options.maxIterations);
          },
          setTemperature: function setTemperature() {
            this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
          },
          setDiffTemperature: function setDiffTemperature() {
            this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
          },
          setInitialRendering: function setInitialRendering(a) {
            this.initialRendering = a;
          },
          createQuadTree: function createQuadTree() {
            this.quadTree = new c.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
            this.quadTree.insertNodes(this.nodes);
          },
          initPositions: function initPositions() {
            var a = this.options.initialPositions;
            y(a) ? (a.call(this), this.nodes.forEach(function (a) {
              l(a.prevX) || (a.prevX = a.plotX);
              l(a.prevY) || (a.prevY = a.plotY);
              a.dispX = 0;
              a.dispY = 0;
            })) : "circle" === a ? this.setCircularPositions() : this.setRandomPositions();
          },
          setCircularPositions: function setCircularPositions() {
            function a(b) {
              b.linksFrom.forEach(function (b) {
                r[b.toNode.id] || (r[b.toNode.id] = !0, l.push(b.toNode), a(b.toNode));
              });
            }

            var b = this.box,
                d = this.nodes,
                c = 2 * Math.PI / (d.length + 1),
                k = d.filter(function (a) {
              return 0 === a.linksTo.length;
            }),
                l = [],
                r = {},
                q = this.options.initialPositionRadius;
            k.forEach(function (b) {
              l.push(b);
              a(b);
            });
            l.length ? d.forEach(function (a) {
              -1 === l.indexOf(a) && l.push(a);
            }) : l = d;
            l.forEach(function (a, h) {
              a.plotX = a.prevX = D(a.plotX, b.width / 2 + q * Math.cos(h * c));
              a.plotY = a.prevY = D(a.plotY, b.height / 2 + q * Math.sin(h * c));
              a.dispX = 0;
              a.dispY = 0;
            });
          },
          setRandomPositions: function setRandomPositions() {
            function a(a) {
              a = a * a / Math.PI;
              return a -= Math.floor(a);
            }

            var b = this.box,
                d = this.nodes,
                c = d.length + 1;
            d.forEach(function (g, d) {
              g.plotX = g.prevX = D(g.plotX, b.width * a(d));
              g.plotY = g.prevY = D(g.plotY, b.height * a(c + d));
              g.dispX = 0;
              g.dispY = 0;
            });
          },
          force: function force(a) {
            this.integration[a].apply(this, Array.prototype.slice.call(arguments, 1));
          },
          barycenterForces: function barycenterForces() {
            this.getBarycenter();
            this.force("barycenter");
          },
          getBarycenter: function getBarycenter() {
            var a = 0,
                b = 0,
                d = 0;
            this.nodes.forEach(function (g) {
              b += g.plotX * g.mass;
              d += g.plotY * g.mass;
              a += g.mass;
            });
            return this.barycenter = {
              x: b,
              y: d,
              xFactor: b / a,
              yFactor: d / a
            };
          },
          barnesHutApproximation: function barnesHutApproximation(a, b) {
            var g = this.getDistXY(a, b),
                d = this.vectorLength(g);
            if (a !== b && 0 !== d) if (b.isInternal) {
              if (b.boxSize / d < this.options.theta && 0 !== d) {
                var c = this.repulsiveForce(d, this.k);
                this.force("repulsive", a, c * b.mass, g, d);
                var l = !1;
              } else l = !0;
            } else c = this.repulsiveForce(d, this.k), this.force("repulsive", a, c * b.mass, g, d);
            return l;
          },
          repulsiveForces: function repulsiveForces() {
            var a = this;
            "barnes-hut" === a.approximation ? a.nodes.forEach(function (b) {
              a.quadTree.visitNodeRecursive(null, function (g) {
                return a.barnesHutApproximation(b, g);
              });
            }) : a.nodes.forEach(function (b) {
              a.nodes.forEach(function (g) {
                if (b !== g && !b.fixedPosition) {
                  var d = a.getDistXY(b, g);
                  var c = a.vectorLength(d);

                  if (0 !== c) {
                    var l = a.repulsiveForce(c, a.k);
                    a.force("repulsive", b, l * g.mass, d, c);
                  }
                }
              });
            });
          },
          attractiveForces: function attractiveForces() {
            var a = this,
                b,
                d,
                c;
            a.links.forEach(function (g) {
              g.fromNode && g.toNode && (b = a.getDistXY(g.fromNode, g.toNode), d = a.vectorLength(b), 0 !== d && (c = a.attractiveForce(d, a.k), a.force("attractive", g, c, b, d)));
            });
          },
          applyLimits: function applyLimits() {
            var a = this;
            a.nodes.forEach(function (b) {
              b.fixedPosition || (a.integration.integrate(a, b), a.applyLimitBox(b, a.box), b.dispX = 0, b.dispY = 0);
            });
          },
          applyLimitBox: function applyLimitBox(a, d) {
            var g = a.radius;
            a.plotX = b(a.plotX, d.left + g, d.width - g);
            a.plotY = b(a.plotY, d.top + g, d.height - g);
          },
          coolDown: function coolDown(a, b, d) {
            return a - b * d;
          },
          isStable: function isStable() {
            return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature;
          },
          getSystemTemperature: function getSystemTemperature() {
            return this.nodes.reduce(function (a, b) {
              return a + b.temperature;
            }, 0);
          },
          vectorLength: function vectorLength(a) {
            return Math.sqrt(a.x * a.x + a.y * a.y);
          },
          getDistR: function getDistR(a, b) {
            a = this.getDistXY(a, b);
            return this.vectorLength(a);
          },
          getDistXY: function getDistXY(a, b) {
            var d = a.plotX - b.plotX;
            a = a.plotY - b.plotY;
            return {
              x: d,
              y: a,
              absX: Math.abs(d),
              absY: Math.abs(a)
            };
          }
        });
        d(a, "predraw", function () {
          this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function (a) {
            a.stop();
          });
        });
        d(a, "render", function () {
          function a(a) {
            a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.enableSimulation && (a.beforeStep && a.beforeStep(), a.step(), d = !1, b = !0);
          }

          var b = !1;

          if (this.graphLayoutsLookup) {
            x(!1, this);

            for (this.graphLayoutsLookup.forEach(function (a) {
              a.start();
            }); !d;) {
              var d = !0;
              this.graphLayoutsLookup.forEach(a);
            }

            b && this.series.forEach(function (a) {
              a && a.layout && a.render();
            });
          }
        });
        d(a, "beforePrint", function () {
          this.graphLayoutsLookup.forEach(function (a) {
            a.updateSimulation(!1);
          });
          this.redraw();
        });
        d(a, "afterPrint", function () {
          this.graphLayoutsLookup.forEach(function (a) {
            a.updateSimulation();
          });
          this.redraw();
        });
      });
      B(c, "modules/networkgraph/draggable-nodes.js", [c["parts/Globals.js"], c["parts/Utilities.js"]], function (c, a) {
        var d = a.addEvent;
        a = c.Chart;
        c.dragNodesMixin = {
          onMouseDown: function onMouseDown(a, d) {
            d = this.chart.pointer.normalize(d);
            a.fixedPosition = {
              chartX: d.chartX,
              chartY: d.chartY,
              plotX: a.plotX,
              plotY: a.plotY
            };
            a.inDragMode = !0;
          },
          onMouseMove: function onMouseMove(a, d) {
            if (a.fixedPosition && a.inDragMode) {
              var b = this.chart,
                  c = b.pointer.normalize(d);
              d = a.fixedPosition.chartX - c.chartX;
              c = a.fixedPosition.chartY - c.chartY;
              if (5 < Math.abs(d) || 5 < Math.abs(c)) d = a.fixedPosition.plotX - d, c = a.fixedPosition.plotY - c, b.isInsidePlot(d, c) && (a.plotX = d, a.plotY = c, a.hasDragged = !0, this.redrawHalo(a), this.layout.simulation ? this.layout.resetSimulation() : (this.layout.setInitialRendering(!1), this.layout.enableSimulation ? this.layout.start() : this.layout.setMaxIterations(1), this.chart.redraw(), this.layout.setInitialRendering(!0)));
            }
          },
          onMouseUp: function onMouseUp(a, d) {
            a.fixedPosition && a.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw(), a.inDragMode = a.hasDragged = !1, this.options.fixedDraggable || delete a.fixedPosition);
          },
          redrawHalo: function redrawHalo(a) {
            a && this.halo && this.halo.attr({
              d: a.haloPath(this.options.states.hover.halo.size)
            });
          }
        };
        d(a, "load", function () {
          var a = this,
              c,
              l,
              y;
          a.container && (c = d(a.container, "mousedown", function (b) {
            var c = a.hoverPoint;
            c && c.series && c.series.hasDraggableNodes && c.series.options.draggable && (c.series.onMouseDown(c, b), l = d(a.container, "mousemove", function (a) {
              return c && c.series && c.series.onMouseMove(c, a);
            }), y = d(a.container.ownerDocument, "mouseup", function (a) {
              l();
              y();
              return c && c.series && c.series.onMouseUp(c, a);
            }));
          }));
          d(a, "destroy", function () {
            c();
          });
        });
      });
      B(c, "parts-more/PackedBubbleSeries.js", [c["parts/Globals.js"], c["parts/Color.js"], c["parts/Point.js"], c["parts/Utilities.js"]], function (c, a, d, b) {
        var l = a.parse,
            t = b.addEvent,
            y = b.clamp,
            D = b.defined,
            x = b.extend;
        a = b.extendClass;
        var g = b.fireEvent,
            u = b.isArray,
            m = b.isNumber,
            C = b.merge,
            k = b.pick;
        b = b.seriesType;
        var z = c.Series,
            A = c.Chart,
            q = c.layouts["reingold-fruchterman"],
            e = c.seriesTypes.bubble.prototype.pointClass,
            h = c.dragNodesMixin;
        c.networkgraphIntegrations.packedbubble = {
          repulsiveForceFunction: function repulsiveForceFunction(a, b, e, c) {
            return Math.min(a, (e.marker.radius + c.marker.radius) / 2);
          },
          barycenter: function barycenter() {
            var a = this,
                b = a.options.gravitationalConstant,
                e = a.box,
                c = a.nodes,
                h,
                d;
            c.forEach(function (f) {
              a.options.splitSeries && !f.isParentNode ? (h = f.series.parentNode.plotX, d = f.series.parentNode.plotY) : (h = e.width / 2, d = e.height / 2);
              f.fixedPosition || (f.plotX -= (f.plotX - h) * b / (f.mass * Math.sqrt(c.length)), f.plotY -= (f.plotY - d) * b / (f.mass * Math.sqrt(c.length)));
            });
          },
          repulsive: function repulsive(a, b, e, c) {
            var f = b * this.diffTemperature / a.mass / a.degree;
            b = e.x * f;
            e = e.y * f;
            a.fixedPosition || (a.plotX += b, a.plotY += e);
            c.fixedPosition || (c.plotX -= b, c.plotY -= e);
          },
          integrate: c.networkgraphIntegrations.verlet.integrate,
          getK: c.noop
        };
        c.layouts.packedbubble = a(q, {
          beforeStep: function beforeStep() {
            this.options.marker && this.series.forEach(function (a) {
              a && a.calculateParentRadius();
            });
          },
          setCircularPositions: function setCircularPositions() {
            var a = this,
                b = a.box,
                e = a.nodes,
                c = 2 * Math.PI / (e.length + 1),
                h,
                d,
                g = a.options.initialPositionRadius;
            e.forEach(function (f, e) {
              a.options.splitSeries && !f.isParentNode ? (h = f.series.parentNode.plotX, d = f.series.parentNode.plotY) : (h = b.width / 2, d = b.height / 2);
              f.plotX = f.prevX = k(f.plotX, h + g * Math.cos(f.index || e * c));
              f.plotY = f.prevY = k(f.plotY, d + g * Math.sin(f.index || e * c));
              f.dispX = 0;
              f.dispY = 0;
            });
          },
          repulsiveForces: function repulsiveForces() {
            var a = this,
                b,
                e,
                c,
                h = a.options.bubblePadding;
            a.nodes.forEach(function (f) {
              f.degree = f.mass;
              f.neighbours = 0;
              a.nodes.forEach(function (d) {
                b = 0;
                f === d || f.fixedPosition || !a.options.seriesInteraction && f.series !== d.series || (c = a.getDistXY(f, d), e = a.vectorLength(c) - (f.marker.radius + d.marker.radius + h), 0 > e && (f.degree += .01, f.neighbours++, b = a.repulsiveForce(-e / Math.sqrt(f.neighbours), a.k, f, d)), a.force("repulsive", f, b * d.mass, c, d, e));
              });
            });
          },
          applyLimitBox: function applyLimitBox(a) {
            if (this.options.splitSeries && !a.isParentNode && this.options.parentNodeLimit) {
              var f = this.getDistXY(a, a.series.parentNode);
              var b = a.series.parentNodeRadius - a.marker.radius - this.vectorLength(f);
              0 > b && b > -2 * a.marker.radius && (a.plotX -= .01 * f.x, a.plotY -= .01 * f.y);
            }

            q.prototype.applyLimitBox.apply(this, arguments);
          }
        });
        b("packedbubble", "bubble", {
          minSize: "10%",
          maxSize: "50%",
          sizeBy: "area",
          zoneAxis: "y",
          crisp: !1,
          tooltip: {
            pointFormat: "Value: {point.value}"
          },
          draggable: !0,
          useSimulation: !0,
          dataLabels: {
            formatter: function formatter() {
              return this.point.value;
            },
            parentNodeFormatter: function parentNodeFormatter() {
              return this.name;
            },
            parentNodeTextPath: {
              enabled: !0
            },
            padding: 0,
            style: {
              transition: "opacity 2000ms"
            }
          },
          layoutAlgorithm: {
            initialPositions: "circle",
            initialPositionRadius: 20,
            bubblePadding: 5,
            parentNodeLimit: !1,
            seriesInteraction: !0,
            dragBetweenSeries: !1,
            parentNodeOptions: {
              maxIterations: 400,
              gravitationalConstant: .03,
              maxSpeed: 50,
              initialPositionRadius: 100,
              seriesInteraction: !0,
              marker: {
                fillColor: null,
                fillOpacity: 1,
                lineWidth: 1,
                lineColor: null,
                symbol: "circle"
              }
            },
            enableSimulation: !0,
            type: "packedbubble",
            integration: "packedbubble",
            maxIterations: 1E3,
            splitSeries: !1,
            maxSpeed: 5,
            gravitationalConstant: .01,
            friction: -.981
          }
        }, {
          hasDraggableNodes: !0,
          forces: ["barycenter", "repulsive"],
          pointArrayMap: ["value"],
          pointValKey: "value",
          isCartesian: !1,
          requireSorting: !1,
          directTouch: !0,
          axisTypes: [],
          noSharedTooltip: !0,
          searchPoint: c.noop,
          accumulateAllPoints: function accumulateAllPoints(a) {
            var f = a.chart,
                b = [],
                e,
                c;

            for (e = 0; e < f.series.length; e++) {
              if (a = f.series[e], a.visible || !f.options.chart.ignoreHiddenSeries) for (c = 0; c < a.yData.length; c++) {
                b.push([null, null, a.yData[c], a.index, c, {
                  id: c,
                  marker: {
                    radius: 0
                  }
                }]);
              }
            }

            return b;
          },
          init: function init() {
            z.prototype.init.apply(this, arguments);
            t(this, "updatedData", function () {
              this.chart.series.forEach(function (a) {
                a.type === this.type && (a.isDirty = !0);
              }, this);
            });
            return this;
          },
          render: function render() {
            var a = [];
            z.prototype.render.apply(this, arguments);
            this.options.dataLabels.allowOverlap || (this.data.forEach(function (b) {
              u(b.dataLabels) && b.dataLabels.forEach(function (b) {
                a.push(b);
              });
            }), this.options.useSimulation && this.chart.hideOverlappingLabels(a));
          },
          setVisible: function setVisible() {
            var a = this;
            z.prototype.setVisible.apply(a, arguments);
            a.parentNodeLayout && a.graph ? a.visible ? (a.graph.show(), a.parentNode.dataLabel && a.parentNode.dataLabel.show()) : (a.graph.hide(), a.parentNodeLayout.removeElementFromCollection(a.parentNode, a.parentNodeLayout.nodes), a.parentNode.dataLabel && a.parentNode.dataLabel.hide()) : a.layout && (a.visible ? a.layout.addElementsToCollection(a.points, a.layout.nodes) : a.points.forEach(function (b) {
              a.layout.removeElementFromCollection(b, a.layout.nodes);
            }));
          },
          drawDataLabels: function drawDataLabels() {
            var a = this.options.dataLabels.textPath,
                b = this.points;
            z.prototype.drawDataLabels.apply(this, arguments);
            this.parentNode && (this.parentNode.formatPrefix = "parentNode", this.points = [this.parentNode], this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath, z.prototype.drawDataLabels.apply(this, arguments), this.points = b, this.options.dataLabels.textPath = a);
          },
          seriesBox: function seriesBox() {
            var a = this.chart,
                b = Math.max,
                e = Math.min,
                c,
                d = [a.plotLeft, a.plotLeft + a.plotWidth, a.plotTop, a.plotTop + a.plotHeight];
            this.data.forEach(function (a) {
              D(a.plotX) && D(a.plotY) && a.marker.radius && (c = a.marker.radius, d[0] = e(d[0], a.plotX - c), d[1] = b(d[1], a.plotX + c), d[2] = e(d[2], a.plotY - c), d[3] = b(d[3], a.plotY + c));
            });
            return m(d.width / d.height) ? d : null;
          },
          calculateParentRadius: function calculateParentRadius() {
            var a = this.seriesBox();
            this.parentNodeRadius = y(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, a ? Math.max(Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20);
            this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
          },
          drawGraph: function drawGraph() {
            if (this.layout && this.layout.options.splitSeries) {
              var a = this.chart,
                  b = this.layout.options.parentNodeOptions.marker;
              b = {
                fill: b.fillColor || l(this.color).brighten(.4).get(),
                opacity: b.fillOpacity,
                stroke: b.lineColor || this.color,
                "stroke-width": b.lineWidth
              };
              var e = this.visible ? "inherit" : "hidden";
              this.parentNodesGroup || (this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", e, .1, a.seriesGroup), this.group.attr({
                zIndex: 2
              }));
              this.calculateParentRadius();
              e = C({
                x: this.parentNode.plotX - this.parentNodeRadius,
                y: this.parentNode.plotY - this.parentNodeRadius,
                width: 2 * this.parentNodeRadius,
                height: 2 * this.parentNodeRadius
              }, b);
              this.parentNode.graphic || (this.graph = this.parentNode.graphic = a.renderer.symbol(b.symbol).add(this.parentNodesGroup));
              this.parentNode.graphic.attr(e);
            }
          },
          createParentNodes: function createParentNodes() {
            var a = this,
                b = a.chart,
                c = a.parentNodeLayout,
                d,
                h = a.parentNode;
            a.parentNodeMass = 0;
            a.points.forEach(function (b) {
              a.parentNodeMass += Math.PI * Math.pow(b.marker.radius, 2);
            });
            a.calculateParentRadius();
            c.nodes.forEach(function (b) {
              b.seriesIndex === a.index && (d = !0);
            });
            c.setArea(0, 0, b.plotWidth, b.plotHeight);
            d || (h || (h = new e().init(this, {
              mass: a.parentNodeRadius / 2,
              marker: {
                radius: a.parentNodeRadius
              },
              dataLabels: {
                inside: !1
              },
              dataLabelOnNull: !0,
              degree: a.parentNodeRadius,
              isParentNode: !0,
              seriesIndex: a.index
            })), a.parentNode && (h.plotX = a.parentNode.plotX, h.plotY = a.parentNode.plotY), a.parentNode = h, c.addElementsToCollection([a], c.series), c.addElementsToCollection([h], c.nodes));
          },
          addSeriesLayout: function addSeriesLayout() {
            var a = this.options.layoutAlgorithm,
                b = this.chart.graphLayoutsStorage,
                e = this.chart.graphLayoutsLookup,
                d = C(a, a.parentNodeOptions, {
              enableSimulation: this.layout.options.enableSimulation
            });
            var h = b[a.type + "-series"];
            h || (b[a.type + "-series"] = h = new c.layouts[a.type](), h.init(d), e.splice(h.index, 0, h));
            this.parentNodeLayout = h;
            this.createParentNodes();
          },
          addLayout: function addLayout() {
            var a = this.options.layoutAlgorithm,
                b = this.chart.graphLayoutsStorage,
                e = this.chart.graphLayoutsLookup,
                d = this.chart.options.chart;
            b || (this.chart.graphLayoutsStorage = b = {}, this.chart.graphLayoutsLookup = e = []);
            var h = b[a.type];
            h || (a.enableSimulation = D(d.forExport) ? !d.forExport : a.enableSimulation, b[a.type] = h = new c.layouts[a.type](), h.init(a), e.splice(h.index, 0, h));
            this.layout = h;
            this.points.forEach(function (a) {
              a.mass = 2;
              a.degree = 1;
              a.collisionNmb = 1;
            });
            h.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight);
            h.addElementsToCollection([this], h.series);
            h.addElementsToCollection(this.points, h.nodes);
          },
          deferLayout: function deferLayout() {
            var a = this.options.layoutAlgorithm;
            this.visible && (this.addLayout(), a.splitSeries && this.addSeriesLayout());
          },
          translate: function translate() {
            var a = this.chart,
                b = this.data,
                e = this.index,
                c,
                h = this.options.useSimulation;
            this.processedXData = this.xData;
            this.generatePoints();
            D(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(this), this.getPointRadius());
            if (h) var d = a.allDataPoints;else d = this.placeBubbles(a.allDataPoints), this.options.draggable = !1;

            for (c = 0; c < d.length; c++) {
              if (d[c][3] === e) {
                var k = b[d[c][4]];
                var l = d[c][2];
                h || (k.plotX = d[c][0] - a.plotLeft + a.diffX, k.plotY = d[c][1] - a.plotTop + a.diffY);
                k.marker = x(k.marker, {
                  radius: l,
                  width: 2 * l,
                  height: 2 * l
                });
                k.radius = l;
              }
            }

            h && this.deferLayout();
            g(this, "afterTranslate");
          },
          checkOverlap: function checkOverlap(a, b) {
            var f = a[0] - b[0],
                e = a[1] - b[1];
            return -.001 > Math.sqrt(f * f + e * e) - Math.abs(a[2] + b[2]);
          },
          positionBubble: function positionBubble(a, b, e) {
            var f = Math.sqrt,
                c = Math.asin,
                d = Math.acos,
                h = Math.pow,
                g = Math.abs;
            f = f(h(a[0] - b[0], 2) + h(a[1] - b[1], 2));
            d = d((h(f, 2) + h(e[2] + b[2], 2) - h(e[2] + a[2], 2)) / (2 * (e[2] + b[2]) * f));
            c = c(g(a[0] - b[0]) / f);
            a = (0 > a[1] - b[1] ? 0 : Math.PI) + d + c * (0 > (a[0] - b[0]) * (a[1] - b[1]) ? 1 : -1);
            return [b[0] + (b[2] + e[2]) * Math.sin(a), b[1] - (b[2] + e[2]) * Math.cos(a), e[2], e[3], e[4]];
          },
          placeBubbles: function placeBubbles(a) {
            var b = this.checkOverlap,
                f = this.positionBubble,
                e = [],
                c = 1,
                d = 0,
                h = 0;
            var g = [];
            var k;
            a = a.sort(function (a, b) {
              return b[2] - a[2];
            });

            if (a.length) {
              e.push([[0, 0, a[0][2], a[0][3], a[0][4]]]);
              if (1 < a.length) for (e.push([[0, 0 - a[1][2] - a[0][2], a[1][2], a[1][3], a[1][4]]]), k = 2; k < a.length; k++) {
                a[k][2] = a[k][2] || 1, g = f(e[c][d], e[c - 1][h], a[k]), b(g, e[c][0]) ? (e.push([]), h = 0, e[c + 1].push(f(e[c][d], e[c][0], a[k])), c++, d = 0) : 1 < c && e[c - 1][h + 1] && b(g, e[c - 1][h + 1]) ? (h++, e[c].push(f(e[c][d], e[c - 1][h], a[k])), d++) : (d++, e[c].push(g));
              }
              this.chart.stages = e;
              this.chart.rawPositions = [].concat.apply([], e);
              this.resizeRadius();
              g = this.chart.rawPositions;
            }

            return g;
          },
          resizeRadius: function resizeRadius() {
            var a = this.chart,
                b = a.rawPositions,
                e = Math.min,
                c = Math.max,
                d = a.plotLeft,
                h = a.plotTop,
                g = a.plotHeight,
                k = a.plotWidth,
                l,
                m,
                q;
            var r = l = Number.POSITIVE_INFINITY;
            var t = m = Number.NEGATIVE_INFINITY;

            for (q = 0; q < b.length; q++) {
              var u = b[q][2];
              r = e(r, b[q][0] - u);
              t = c(t, b[q][0] + u);
              l = e(l, b[q][1] - u);
              m = c(m, b[q][1] + u);
            }

            q = [t - r, m - l];
            e = e.apply([], [(k - d) / q[0], (g - h) / q[1]]);

            if (1e-10 < Math.abs(e - 1)) {
              for (q = 0; q < b.length; q++) {
                b[q][2] *= e;
              }

              this.placeBubbles(b);
            } else a.diffY = g / 2 + h - l - (m - l) / 2, a.diffX = k / 2 + d - r - (t - r) / 2;
          },
          calculateZExtremes: function calculateZExtremes() {
            var a = this.options.zMin,
                b = this.options.zMax,
                e = Infinity,
                c = -Infinity;
            if (a && b) return [a, b];
            this.chart.series.forEach(function (a) {
              a.yData.forEach(function (a) {
                D(a) && (a > c && (c = a), a < e && (e = a));
              });
            });
            a = k(a, e);
            b = k(b, c);
            return [a, b];
          },
          getPointRadius: function getPointRadius() {
            var a = this,
                b = a.chart,
                e = a.options,
                c = e.useSimulation,
                d = Math.min(b.plotWidth, b.plotHeight),
                h = {},
                g = [],
                k = b.allDataPoints,
                l,
                m,
                q,
                r;
            ["minSize", "maxSize"].forEach(function (a) {
              var b = parseInt(e[a], 10),
                  f = /%$/.test(e[a]);
              h[a] = f ? d * b / 100 : b * Math.sqrt(k.length);
            });
            b.minRadius = l = h.minSize / Math.sqrt(k.length);
            b.maxRadius = m = h.maxSize / Math.sqrt(k.length);
            var t = c ? a.calculateZExtremes() : [l, m];
            (k || []).forEach(function (b, e) {
              q = c ? y(b[2], t[0], t[1]) : b[2];
              r = a.getRadius(t[0], t[1], l, m, q);
              0 === r && (r = null);
              k[e][2] = r;
              g.push(r);
            });
            a.radii = g;
          },
          redrawHalo: h.redrawHalo,
          onMouseDown: h.onMouseDown,
          onMouseMove: h.onMouseMove,
          onMouseUp: function onMouseUp(a) {
            if (a.fixedPosition && !a.removed) {
              var b,
                  e,
                  c = this.layout,
                  f = this.parentNodeLayout;
              f && c.options.dragBetweenSeries && f.nodes.forEach(function (f) {
                a && a.marker && f !== a.series.parentNode && (b = c.getDistXY(a, f), e = c.vectorLength(b) - f.marker.radius - a.marker.radius, 0 > e && (f.series.addPoint(C(a.options, {
                  plotX: a.plotX,
                  plotY: a.plotY
                }), !1), c.removeElementFromCollection(a, c.nodes), a.remove()));
              });
              h.onMouseUp.apply(this, arguments);
            }
          },
          destroy: function destroy() {
            this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(function (a) {
              a.removeElementFromCollection(this, a.series);
            }, this);
            this.parentNode && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy()));
            c.Series.prototype.destroy.apply(this, arguments);
          },
          alignDataLabel: c.Series.prototype.alignDataLabel
        }, {
          destroy: function destroy() {
            this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
            return d.prototype.destroy.apply(this, arguments);
          }
        });
        t(A, "beforeRedraw", function () {
          this.allDataPoints && delete this.allDataPoints;
        });
        "";
      });
      B(c, "parts-more/Polar.js", [c["parts/Globals.js"], c["parts/Utilities.js"], c["parts-more/Pane.js"]], function (c, a, d) {
        var b = a.addEvent,
            l = a.animObject,
            t = a.defined,
            y = a.find,
            D = a.isNumber,
            x = a.pick,
            g = a.splat,
            u = a.uniqueKey,
            m = a.wrap,
            C = c.Series,
            k = c.seriesTypes,
            z = C.prototype,
            A = c.Pointer.prototype;

        z.searchPointByAngle = function (a) {
          var b = this.chart,
              e = this.xAxis.pane.center;
          return this.searchKDTree({
            clientX: 180 + -180 / Math.PI * Math.atan2(a.chartX - e[0] - b.plotLeft, a.chartY - e[1] - b.plotTop)
          });
        };

        z.getConnectors = function (a, b, c, d) {
          var e = d ? 1 : 0;
          var f = 0 <= b && b <= a.length - 1 ? b : 0 > b ? a.length - 1 + b : 0;
          b = 0 > f - 1 ? a.length - (1 + e) : f - 1;
          e = f + 1 > a.length - 1 ? e : f + 1;
          var h = a[b];
          e = a[e];
          var g = h.plotX;
          h = h.plotY;
          var k = e.plotX;
          var p = e.plotY;
          e = a[f].plotX;
          f = a[f].plotY;
          g = (1.5 * e + g) / 2.5;
          h = (1.5 * f + h) / 2.5;
          k = (1.5 * e + k) / 2.5;
          var l = (1.5 * f + p) / 2.5;
          p = Math.sqrt(Math.pow(g - e, 2) + Math.pow(h - f, 2));
          var m = Math.sqrt(Math.pow(k - e, 2) + Math.pow(l - f, 2));
          g = Math.atan2(h - f, g - e);
          l = Math.PI / 2 + (g + Math.atan2(l - f, k - e)) / 2;
          Math.abs(g - l) > Math.PI / 2 && (l -= Math.PI);
          g = e + Math.cos(l) * p;
          h = f + Math.sin(l) * p;
          k = e + Math.cos(Math.PI + l) * m;
          l = f + Math.sin(Math.PI + l) * m;
          e = {
            rightContX: k,
            rightContY: l,
            leftContX: g,
            leftContY: h,
            plotX: e,
            plotY: f
          };
          c && (e.prevPointCont = this.getConnectors(a, b, !1, d));
          return e;
        };

        z.toXY = function (a) {
          var b = this.chart,
              e = this.xAxis;
          var c = this.yAxis;
          var d = a.plotX,
              g = a.plotY,
              k = a.series,
              l = b.inverted,
              m = a.y,
              q = l ? d : c.len - g;
          l && k && !k.isRadialBar && (a.plotY = g = "number" === typeof m ? c.translate(m) || 0 : 0);
          a.rectPlotX = d;
          a.rectPlotY = g;
          c.center && (q += c.center[3] / 2);
          c = l ? c.postTranslate(g, q) : e.postTranslate(d, q);
          a.plotX = a.polarPlotX = c.x - b.plotLeft;
          a.plotY = a.polarPlotY = c.y - b.plotTop;
          this.kdByAngle ? (b = (d / Math.PI * 180 + e.pane.options.startAngle) % 360, 0 > b && (b += 360), a.clientX = b) : a.clientX = a.plotX;
        };

        k.spline && (m(k.spline.prototype, "getPointSpline", function (a, b, c, d) {
          this.chart.polar ? d ? (a = this.getConnectors(b, d, !0, this.connectEnds), a = ["C", a.prevPointCont.rightContX, a.prevPointCont.rightContY, a.leftContX, a.leftContY, a.plotX, a.plotY]) : a = ["M", c.plotX, c.plotY] : a = a.call(this, b, c, d);
          return a;
        }), k.areasplinerange && (k.areasplinerange.prototype.getPointSpline = k.spline.prototype.getPointSpline));
        b(C, "afterTranslate", function () {
          var a = this.chart;

          if (a.polar && this.xAxis) {
            (this.kdByAngle = a.tooltip && a.tooltip.shared) ? this.searchPoint = this.searchPointByAngle : this.options.findNearestPointBy = "xy";
            if (!this.preventPostTranslate) for (var d = this.points, f = d.length; f--;) {
              this.toXY(d[f]), !a.hasParallelCoordinates && !this.yAxis.reversed && d[f].y < this.yAxis.min && (d[f].isNull = !0);
            }
            this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(b(this, "afterRender", function () {
              if (a.polar) {
                var b = this.yAxis.pane.center;
                this.clipCircle ? this.clipCircle.animate({
                  x: b[0],
                  y: b[1],
                  r: b[2] / 2,
                  innerR: b[3] / 2
                }) : this.clipCircle = a.renderer.clipCircle(b[0], b[1], b[2] / 2, b[3] / 2);
                this.group.clip(this.clipCircle);
                this.setClip = c.noop;
              }
            })));
          }
        }, {
          order: 2
        });
        m(z, "getGraphPath", function (a, b) {
          var e = this,
              c;

          if (this.chart.polar) {
            b = b || this.points;

            for (c = 0; c < b.length; c++) {
              if (!b[c].isNull) {
                var d = c;
                break;
              }
            }

            if (!1 !== this.options.connectEnds && "undefined" !== typeof d) {
              this.connectEnds = !0;
              b.splice(b.length, 0, b[d]);
              var h = !0;
            }

            b.forEach(function (a) {
              "undefined" === typeof a.polarPlotY && e.toXY(a);
            });
          }

          c = a.apply(this, [].slice.call(arguments, 1));
          h && b.pop();
          return c;
        });

        var q = function q(a, b) {
          var e = this,
              d = this.chart,
              h = this.options.animation,
              g = this.group,
              k = this.markerGroup,
              m = this.xAxis.center,
              q = d.plotLeft,
              r = d.plotTop,
              t,
              u,
              z,
              y;
          if (d.polar) {
            if (e.isRadialBar) b || (e.startAngleRad = x(e.translatedThreshold, e.xAxis.startAngleRad), c.seriesTypes.pie.prototype.animate.call(e, b));else {
              if (d.renderer.isSVG) if (h = l(h), e.is("column")) {
                if (!b) {
                  var A = m[3] / 2;
                  e.points.forEach(function (a) {
                    t = a.graphic;
                    z = (u = a.shapeArgs) && u.r;
                    y = u && u.innerR;
                    t && u && (t.attr({
                      r: A,
                      innerR: A
                    }), t.animate({
                      r: z,
                      innerR: y
                    }, e.options.animation));
                  });
                }
              } else b ? (a = {
                translateX: m[0] + q,
                translateY: m[1] + r,
                scaleX: .001,
                scaleY: .001
              }, g.attr(a), k && k.attr(a)) : (a = {
                translateX: q,
                translateY: r,
                scaleX: 1,
                scaleY: 1
              }, g.animate(a, h), k && k.animate(a, h));
            }
          } else a.call(this, b);
        };

        m(z, "animate", q);
        k.column && (C = k.arearange.prototype, k = k.column.prototype, k.polarArc = function (a, b, c, d) {
          var e = this.xAxis.center,
              f = this.yAxis.len,
              h = e[3] / 2;
          b = f - b + h;
          a = f - x(a, f) + h;
          this.yAxis.reversed && (0 > b && (b = h), 0 > a && (a = h));
          return {
            x: e[0],
            y: e[1],
            r: b,
            innerR: a,
            start: c,
            end: d
          };
        }, m(k, "animate", q), m(k, "translate", function (b) {
          var c = this.options,
              e = c.stacking,
              d = this.chart,
              g = this.xAxis,
              k = this.yAxis,
              l = k.reversed,
              m = k.center,
              q = g.startAngleRad,
              r = g.endAngleRad - q;
          this.preventPostTranslate = !0;
          b.call(this);

          if (g.isRadial) {
            b = this.points;
            g = b.length;
            var u = k.translate(k.min);
            var z = k.translate(k.max);
            c = c.threshold || 0;

            if (d.inverted && D(c)) {
              var y = k.translate(c);
              t(y) && (0 > y ? y = 0 : y > r && (y = r), this.translatedThreshold = y + q);
            }

            for (; g--;) {
              c = b[g];
              var x = c.barX;
              var A = c.x;
              var C = c.y;
              c.shapeType = "arc";

              if (d.inverted) {
                c.plotY = k.translate(C);

                if (e && k.stacking) {
                  if (C = k.stacking.stacks[(0 > C ? "-" : "") + this.stackKey], this.visible && C && C[A] && !c.isNull) {
                    var B = C[A].points[this.getStackIndicator(void 0, A, this.index).key];
                    var F = k.translate(B[0]);
                    B = k.translate(B[1]);
                    t(F) && (F = a.clamp(F, 0, r));
                  }
                } else F = y, B = c.plotY;

                F > B && (B = [F, F = B][0]);
                if (!l) {
                  if (F < u) F = u;else if (B > z) B = z;else {
                    if (B < u || F > z) F = B = 0;
                  }
                } else if (B > u) B = u;else if (F < z) F = z;else if (F > u || B < z) F = B = r;
                k.min > k.max && (F = B = l ? r : 0);
                F += q;
                B += q;
                m && (c.barX = x += m[3] / 2);
                A = Math.max(x, 0);
                C = Math.max(x + c.pointWidth, 0);
                c.shapeArgs = {
                  x: m && m[0],
                  y: m && m[1],
                  r: C,
                  innerR: A,
                  start: F,
                  end: B
                };
                c.opacity = F === B ? 0 : void 0;
                c.plotY = (t(this.translatedThreshold) && (F < this.translatedThreshold ? F : B)) - q;
              } else F = x + q, c.shapeArgs = this.polarArc(c.yBottom, c.plotY, F, F + c.pointWidth);

              this.toXY(c);
              d.inverted ? (x = k.postTranslate(c.rectPlotY, x + c.pointWidth / 2), c.tooltipPos = [x.x - d.plotLeft, x.y - d.plotTop]) : c.tooltipPos = [c.plotX, c.plotY];
              m && (c.ttBelow = c.plotY > m[1]);
            }
          }
        }), k.findAlignments = function (a, b) {
          null === b.align && (b.align = 20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center");
          null === b.verticalAlign && (b.verticalAlign = 45 > a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle");
          return b;
        }, C && (C.findAlignments = k.findAlignments), m(k, "alignDataLabel", function (a, b, c, d, g, k) {
          var e = this.chart,
              f = x(d.inside, !!this.options.stacking);
          e.polar ? (a = b.rectPlotX / Math.PI * 180, e.inverted ? (this.forceDL = e.isInsidePlot(b.plotX, Math.round(b.plotY), !1), f && b.shapeArgs ? (g = b.shapeArgs, g = this.yAxis.postTranslate((g.start + g.end) / 2 - this.xAxis.startAngleRad, b.barX + b.pointWidth / 2), g = {
            x: g.x - e.plotLeft,
            y: g.y - e.plotTop
          }) : b.tooltipPos && (g = {
            x: b.tooltipPos[0],
            y: b.tooltipPos[1]
          }), d.align = x(d.align, "center"), d.verticalAlign = x(d.verticalAlign, "middle")) : this.findAlignments && (d = this.findAlignments(a, d)), z.alignDataLabel.call(this, b, c, d, g, k), this.isRadialBar && b.shapeArgs && b.shapeArgs.start === b.shapeArgs.end && c.hide(!0)) : a.call(this, b, c, d, g, k);
        }));
        m(A, "getCoordinates", function (a, b) {
          var c = this.chart,
              e = {
            xAxis: [],
            yAxis: []
          };
          c.polar ? c.axes.forEach(function (a) {
            var d = a.isXAxis,
                f = a.center;

            if ("colorAxis" !== a.coll) {
              var g = b.chartX - f[0] - c.plotLeft;
              f = b.chartY - f[1] - c.plotTop;
              e[d ? "xAxis" : "yAxis"].push({
                axis: a,
                value: a.translate(d ? Math.PI - Math.atan2(g, f) : Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)), !0)
              });
            }
          }) : e = a.call(this, b);
          return e;
        });

        c.SVGRenderer.prototype.clipCircle = function (a, b, c, d) {
          var e = u(),
              f = this.createElement("clipPath").attr({
            id: e
          }).add(this.defs);
          a = d ? this.arc(a, b, c, d, 0, 2 * Math.PI).add(f) : this.circle(a, b, c).add(f);
          a.id = e;
          a.clipPath = f;
          return a;
        };

        b(c.Chart, "getAxes", function () {
          this.pane || (this.pane = []);
          g(this.options.pane).forEach(function (a) {
            new d(a, this);
          }, this);
        });
        b(c.Chart, "afterDrawChartBox", function () {
          this.pane.forEach(function (a) {
            a.render();
          });
        });
        b(c.Series, "afterInit", function () {
          var a = this.chart;
          a.inverted && a.polar && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0));
        });
        m(c.Chart.prototype, "get", function (a, b) {
          return y(this.pane, function (a) {
            return a.options.id === b;
          }) || a.call(this, b);
        });
      });
      B(c, "masters/highcharts-more.src.js", [], function () {});
    }); //# sourceMappingURL=highcharts-more.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/highcharts.js":
  /*!***********************************************!*\
    !*** ./node_modules/highcharts/highcharts.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsHighchartsJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.1.0 (2020-05-05)
    (c) 2009-2018 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (X, Q) {
      true && module.exports ? (Q["default"] = Q, module.exports = X.document ? Q(X) : Q) : true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return Q(X);
      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })("undefined" !== typeof window ? window : this, function (X) {
      function Q(d, f, E, q) {
        d.hasOwnProperty(f) || (d[f] = q.apply(null, E));
      }

      var A = {};
      Q(A, "parts/Globals.js", [], function () {
        var d = "undefined" !== typeof X ? X : "undefined" !== typeof window ? window : {},
            f = d.document,
            E = d.navigator && d.navigator.userAgent || "",
            q = f && f.createElementNS && !!f.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            M = /(edge|msie|trident)/i.test(E) && !d.opera,
            K = -1 !== E.indexOf("Firefox"),
            J = -1 !== E.indexOf("Chrome"),
            L = K && 4 > parseInt(E.split("Firefox/")[1], 10);
        return {
          product: "Highcharts",
          version: "8.1.0",
          deg2rad: 2 * Math.PI / 360,
          doc: f,
          hasBidiBug: L,
          hasTouch: !!d.TouchEvent,
          isMS: M,
          isWebKit: -1 !== E.indexOf("AppleWebKit"),
          isFirefox: K,
          isChrome: J,
          isSafari: !J && -1 !== E.indexOf("Safari"),
          isTouchDevice: /(Mobile|Android|Windows Phone)/.test(E),
          SVG_NS: "http://www.w3.org/2000/svg",
          chartCount: 0,
          seriesTypes: {},
          symbolSizes: {},
          svg: q,
          win: d,
          marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
          noop: function noop() {},
          charts: [],
          dateFormats: {}
        };
      });
      Q(A, "parts/Utilities.js", [A["parts/Globals.js"]], function (d) {
        function f() {
          var a,
              c = arguments,
              k = {},
              r = function r(a, c) {
            "object" !== typeof a && (a = {});
            Z(c, function (k, e) {
              !E(k, !0) || t(k) || n(k) ? a[e] = c[e] : a[e] = r(a[e] || {}, k);
            });
            return a;
          };

          !0 === c[0] && (k = c[1], c = Array.prototype.slice.call(c, 2));
          var e = c.length;

          for (a = 0; a < e; a++) {
            k = r(k, c[a]);
          }

          return k;
        }

        function E(a, c) {
          return !!a && "object" === typeof a && (!c || !w(a));
        }

        function q(a, c, k) {
          var r;
          D(c) ? b(k) ? a.setAttribute(c, k) : a && a.getAttribute && ((r = a.getAttribute(c)) || "class" !== c || (r = a.getAttribute(c + "Name"))) : Z(c, function (c, k) {
            a.setAttribute(k, c);
          });
          return r;
        }

        function M() {
          for (var a = arguments, c = a.length, k = 0; k < c; k++) {
            var r = a[k];
            if ("undefined" !== typeof r && null !== r) return r;
          }
        }

        function K(a, c) {
          if (!a) return c;
          var k = a.split(".").reverse();
          if (1 === k.length) return c[a];

          for (a = k.pop(); "undefined" !== typeof a && "undefined" !== typeof c && null !== c;) {
            c = c[a], a = k.pop();
          }

          return c;
        }

        d.timers = [];

        var J = d.charts,
            L = d.doc,
            x = d.win,
            F = d.error = function (a, c, k, r) {
          var e = N(a),
              z = e ? "Highcharts error #" + a + ": www.highcharts.com/errors/" + a + "/" : a.toString(),
              b = function b() {
            if (c) throw Error(z);
            x.console && console.log(z);
          };

          if ("undefined" !== typeof r) {
            var g = "";
            e && (z += "?");
            Z(r, function (a, c) {
              g += "\n" + c + ": " + a;
              e && (z += encodeURI(c) + "=" + encodeURI(a));
            });
            z += g;
          }

          k ? ba(k, "displayError", {
            code: a,
            message: z,
            params: r
          }, b) : b();
        },
            H = function () {
          function a(a, c, k) {
            this.options = c;
            this.elem = a;
            this.prop = k;
          }

          a.prototype.dSetter = function () {
            var a = this.paths,
                c = a && a[0];
            a = a && a[1];
            var k = [],
                r = this.now || 0;
            if (1 !== r && c && a) {
              if (c.length === a.length && 1 > r) for (var e = 0; e < a.length; e++) {
                for (var z = c[e], b = a[e], g = [], l = 0; l < b.length; l++) {
                  var h = z[l],
                      P = b[l];
                  g[l] = "number" === typeof h && "number" === typeof P && ("A" !== b[0] || 4 !== l && 5 !== l) ? h + r * (P - h) : P;
                }

                k.push(g);
              } else k = a;
            } else k = this.toD || [];
            this.elem.attr("d", k, void 0, !0);
          };

          a.prototype.update = function () {
            var a = this.elem,
                c = this.prop,
                k = this.now,
                r = this.options.step;
            if (this[c + "Setter"]) this[c + "Setter"]();else a.attr ? a.element && a.attr(c, k, null, !0) : a.style[c] = k + this.unit;
            r && r.call(a, k, this);
          };

          a.prototype.run = function (a, c, k) {
            var r = this,
                e = r.options,
                z = function z(a) {
              return z.stopped ? !1 : r.step(a);
            },
                b = x.requestAnimationFrame || function (a) {
              setTimeout(a, 13);
            },
                l = function l() {
              for (var a = 0; a < d.timers.length; a++) {
                d.timers[a]() || d.timers.splice(a--, 1);
              }

              d.timers.length && b(l);
            };

            a !== c || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = a, this.end = c, this.unit = k, this.now = this.start, this.pos = 0, z.elem = this.elem, z.prop = this.prop, z() && 1 === d.timers.push(z) && b(l)) : (delete e.curAnim[this.prop], e.complete && 0 === Object.keys(e.curAnim).length && e.complete.call(this.elem));
          };

          a.prototype.step = function (a) {
            var c = +new Date(),
                k = this.options,
                r = this.elem,
                e = k.complete,
                z = k.duration,
                b = k.curAnim;
            if (r.attr && !r.element) a = !1;else if (a || c >= z + this.startTime) {
              this.now = this.end;
              this.pos = 1;
              this.update();
              var l = b[this.prop] = !0;
              Z(b, function (a) {
                !0 !== a && (l = !1);
              });
              l && e && e.call(r);
              a = !1;
            } else this.pos = k.easing((c - this.startTime) / z), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a = !0;
            return a;
          };

          a.prototype.initPath = function (a, c, k) {
            function r(a, c) {
              for (; a.length < p;) {
                var k = a[0],
                    r = c[p - a.length];
                r && "M" === k[0] && (a[0] = "C" === r[0] ? ["C", k[1], k[2], k[1], k[2], k[1], k[2]] : ["L", k[1], k[2]]);
                a.unshift(k);
                l && a.push(a[a.length - 1]);
              }
            }

            function e(a, c) {
              for (; a.length < p;) {
                if (c = a[a.length / g - 1].slice(), "C" === c[0] && (c[1] = c[5], c[2] = c[6]), l) {
                  var k = a[a.length / g].slice();
                  a.splice(a.length / 2, 0, c, k);
                } else a.push(c);
              }
            }

            var z = a.startX,
                b = a.endX;
            c = c && c.slice();
            k = k.slice();
            var l = a.isArea,
                g = l ? 2 : 1;
            if (!c) return [k, k];

            if (z && b) {
              for (a = 0; a < z.length; a++) {
                if (z[a] === b[0]) {
                  var h = a;
                  break;
                } else if (z[0] === b[b.length - z.length + a]) {
                  h = a;
                  var P = !0;
                  break;
                } else if (z[z.length - 1] === b[b.length - z.length + a]) {
                  h = z.length - a;
                  break;
                }
              }

              "undefined" === typeof h && (c = []);
            }

            if (c.length && N(h)) {
              var p = k.length + h * g;
              P ? (r(c, k), e(k, c)) : (r(k, c), e(c, k));
            }

            return [c, k];
          };

          a.prototype.fillSetter = function () {
            a.prototype.strokeSetter.apply(this, arguments);
          };

          a.prototype.strokeSetter = function () {
            this.elem.attr(this.prop, d.color(this.start).tweenTo(d.color(this.end), this.pos), null, !0);
          };

          return a;
        }();

        d.Fx = H;
        d.merge = f;

        var C = d.pInt = function (a, c) {
          return parseInt(a, c || 10);
        },
            D = d.isString = function (a) {
          return "string" === typeof a;
        },
            w = d.isArray = function (a) {
          a = Object.prototype.toString.call(a);
          return "[object Array]" === a || "[object Array Iterator]" === a;
        };

        d.isObject = E;

        var n = d.isDOMElement = function (a) {
          return E(a) && "number" === typeof a.nodeType;
        },
            t = d.isClass = function (a) {
          var c = a && a.constructor;
          return !(!E(a, !0) || n(a) || !c || !c.name || "Object" === c.name);
        },
            N = d.isNumber = function (a) {
          return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
        },
            m = d.erase = function (a, c) {
          for (var k = a.length; k--;) {
            if (a[k] === c) {
              a.splice(k, 1);
              break;
            }
          }
        },
            b = d.defined = function (a) {
          return "undefined" !== typeof a && null !== a;
        };

        d.attr = q;

        var g = d.splat = function (a) {
          return w(a) ? a : [a];
        },
            v = d.syncTimeout = function (a, c, k) {
          if (0 < c) return setTimeout(a, c, k);
          a.call(0, k);
          return -1;
        },
            h = d.clearTimeout = function (a) {
          b(a) && clearTimeout(a);
        },
            e = d.extend = function (a, c) {
          var k;
          a || (a = {});

          for (k in c) {
            a[k] = c[k];
          }

          return a;
        };

        d.pick = M;

        var p = d.css = function (a, c) {
          d.isMS && !d.svg && c && "undefined" !== typeof c.opacity && (c.filter = "alpha(opacity=" + 100 * c.opacity + ")");
          e(a.style, c);
        },
            l = d.createElement = function (a, c, k, r, z) {
          a = L.createElement(a);
          c && e(a, c);
          z && p(a, {
            padding: "0",
            border: "none",
            margin: "0"
          });
          k && p(a, k);
          r && r.appendChild(a);
          return a;
        },
            I = d.extendClass = function (a, c) {
          var k = function k() {};

          k.prototype = new a();
          e(k.prototype, c);
          return k;
        },
            u = d.pad = function (a, c, k) {
          return Array((c || 2) + 1 - String(a).replace("-", "").length).join(k || "0") + a;
        },
            y = d.relativeLength = function (a, c, k) {
          return /%$/.test(a) ? c * parseFloat(a) / 100 + (k || 0) : parseFloat(a);
        },
            G = d.wrap = function (a, c, k) {
          var r = a[c];

          a[c] = function () {
            var a = Array.prototype.slice.call(arguments),
                c = arguments,
                e = this;

            e.proceed = function () {
              r.apply(e, arguments.length ? arguments : c);
            };

            a.unshift(r);
            a = k.apply(this, a);
            e.proceed = null;
            return a;
          };
        },
            S = d.format = function (a, c, k) {
          var r = "{",
              e = !1,
              z = [],
              b = /f$/,
              l = /\.([0-9])/,
              g = d.defaultOptions.lang,
              h = k && k.time || d.time;

          for (k = k && k.numberFormatter || T; a;) {
            var P = a.indexOf(r);
            if (-1 === P) break;
            var p = a.slice(0, P);

            if (e) {
              p = p.split(":");
              r = K(p.shift() || "", c);
              if (p.length && "number" === typeof r) if (p = p.join(":"), b.test(p)) {
                var u = parseInt((p.match(l) || ["", "-1"])[1], 10);
                null !== r && (r = k(r, u, g.decimalPoint, -1 < p.indexOf(",") ? g.thousandsSep : ""));
              } else r = h.dateFormat(p, r);
              z.push(r);
            } else z.push(p);

            a = a.slice(P + 1);
            r = (e = !e) ? "}" : "{";
          }

          z.push(a);
          return z.join("");
        },
            R = d.getMagnitude = function (a) {
          return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
        },
            B = d.normalizeTickInterval = function (a, c, k, r, e) {
          var z = a;
          k = M(k, 1);
          var b = a / k;
          c || (c = e ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === r && (1 === k ? c = c.filter(function (a) {
            return 0 === a % 1;
          }) : .1 >= k && (c = [1 / k])));

          for (r = 0; r < c.length && !(z = c[r], e && z * k >= a || !e && b <= (c[r] + (c[r + 1] || c[r])) / 2); r++) {
            ;
          }

          return z = P(z * k, -Math.round(Math.log(.001) / Math.LN10));
        },
            c = d.stableSort = function (a, c) {
          var k = a.length,
              r,
              e;

          for (e = 0; e < k; e++) {
            a[e].safeI = e;
          }

          a.sort(function (a, k) {
            r = c(a, k);
            return 0 === r ? a.safeI - k.safeI : r;
          });

          for (e = 0; e < k; e++) {
            delete a[e].safeI;
          }
        },
            a = d.arrayMin = function (a) {
          for (var c = a.length, k = a[0]; c--;) {
            a[c] < k && (k = a[c]);
          }

          return k;
        },
            k = d.arrayMax = function (a) {
          for (var c = a.length, k = a[0]; c--;) {
            a[c] > k && (k = a[c]);
          }

          return k;
        },
            r = d.destroyObjectProperties = function (a, c) {
          Z(a, function (k, r) {
            k && k !== c && k.destroy && k.destroy();
            delete a[r];
          });
        },
            z = d.discardElement = function (a) {
          var c = d.garbageBin;
          c || (c = l("div"));
          a && c.appendChild(a);
          c.innerHTML = "";
        },
            P = d.correctFloat = function (a, c) {
          return parseFloat(a.toPrecision(c || 14));
        },
            U = d.setAnimation = function (a, c) {
          c.renderer.globalAnimation = M(a, c.options.chart.animation, !0);
        },
            W = d.animObject = function (a) {
          return E(a) ? f(a) : {
            duration: a ? 500 : 0
          };
        },
            Y = d.timeUnits = {
          millisecond: 1,
          second: 1E3,
          minute: 6E4,
          hour: 36E5,
          day: 864E5,
          week: 6048E5,
          month: 24192E5,
          year: 314496E5
        },
            T = d.numberFormat = function (a, c, k, r) {
          a = +a || 0;
          c = +c;
          var e = d.defaultOptions.lang,
              z = (a.toString().split(".")[1] || "").split("e")[0].length,
              b = a.toString().split("e");
          if (-1 === c) c = Math.min(z, 20);else if (!N(c)) c = 2;else if (c && b[1] && 0 > b[1]) {
            var l = c + +b[1];
            0 <= l ? (b[0] = (+b[0]).toExponential(l).split("e")[0], c = l) : (b[0] = b[0].split(".")[0] || 0, a = 20 > c ? (b[0] * Math.pow(10, b[1])).toFixed(c) : 0, b[1] = 0);
          }
          var g = (Math.abs(b[1] ? b[0] : a) + Math.pow(10, -Math.max(c, z) - 1)).toFixed(c);
          z = String(C(g));
          l = 3 < z.length ? z.length % 3 : 0;
          k = M(k, e.decimalPoint);
          r = M(r, e.thousandsSep);
          a = (0 > a ? "-" : "") + (l ? z.substr(0, l) + r : "");
          a += z.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + r);
          c && (a += k + g.slice(-c));
          b[1] && 0 !== +a && (a += "e" + b[1]);
          return a;
        };

        Math.easeInOutSine = function (a) {
          return -.5 * (Math.cos(Math.PI * a) - 1);
        };

        var ca = d.getStyle = function (a, c, k) {
          if ("width" === c) return c = Math.min(a.offsetWidth, a.scrollWidth), k = a.getBoundingClientRect && a.getBoundingClientRect().width, k < c && k >= c - 1 && (c = Math.floor(k)), Math.max(0, c - d.getStyle(a, "padding-left") - d.getStyle(a, "padding-right"));
          if ("height" === c) return Math.max(0, Math.min(a.offsetHeight, a.scrollHeight) - d.getStyle(a, "padding-top") - d.getStyle(a, "padding-bottom"));
          x.getComputedStyle || F(27, !0);
          if (a = x.getComputedStyle(a, void 0)) a = a.getPropertyValue(c), M(k, "opacity" !== c) && (a = C(a));
          return a;
        },
            aa = d.inArray = function (a, c, k) {
          return c.indexOf(a, k);
        },
            O = d.find = Array.prototype.find ? function (a, c) {
          return a.find(c);
        } : function (a, c) {
          var k,
              r = a.length;

          for (k = 0; k < r; k++) {
            if (c(a[k], k)) return a[k];
          }
        };

        d.keys = Object.keys;

        var V = d.offset = function (a) {
          var c = L.documentElement;
          a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: a.top + (x.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: a.left + (x.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
          };
        },
            da = d.stop = function (a, c) {
          for (var k = d.timers.length; k--;) {
            d.timers[k].elem !== a || c && c !== d.timers[k].prop || (d.timers[k].stopped = !0);
          }
        },
            Z = d.objectEach = function (a, c, k) {
          for (var r in a) {
            Object.hasOwnProperty.call(a, r) && c.call(k || a[r], a[r], r, a);
          }
        };

        Z({
          map: "map",
          each: "forEach",
          grep: "filter",
          reduce: "reduce",
          some: "some"
        }, function (a, c) {
          d[c] = function (c) {
            return Array.prototype[a].apply(c, [].slice.call(arguments, 1));
          };
        });

        var ha = d.addEvent = function (a, c, k, r) {
          void 0 === r && (r = {});
          var e = a.addEventListener || d.addEventListenerPolyfill;
          var z = "function" === typeof a && a.prototype ? a.prototype.protoEvents = a.prototype.protoEvents || {} : a.hcEvents = a.hcEvents || {};
          d.Point && a instanceof d.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0);
          e && e.call(a, c, k, !1);
          z[c] || (z[c] = []);
          z[c].push({
            fn: k,
            order: "number" === typeof r.order ? r.order : Infinity
          });
          z[c].sort(function (a, c) {
            return a.order - c.order;
          });
          return function () {
            ea(a, c, k);
          };
        },
            ea = d.removeEvent = function (a, c, k) {
          function r(c, k) {
            var r = a.removeEventListener || d.removeEventListenerPolyfill;
            r && r.call(a, c, k, !1);
          }

          function e(k) {
            var e;

            if (a.nodeName) {
              if (c) {
                var z = {};
                z[c] = !0;
              } else z = k;

              Z(z, function (a, c) {
                if (k[c]) for (e = k[c].length; e--;) {
                  r(c, k[c][e].fn);
                }
              });
            }
          }

          var z;
          ["protoEvents", "hcEvents"].forEach(function (b, l) {
            var g = (l = l ? a : a.prototype) && l[b];
            g && (c ? (z = g[c] || [], k ? (g[c] = z.filter(function (a) {
              return k !== a.fn;
            }), r(c, k)) : (e(g), g[c] = [])) : (e(g), l[b] = {}));
          });
        },
            ba = d.fireEvent = function (a, c, k, r) {
          var z;
          k = k || {};

          if (L.createEvent && (a.dispatchEvent || a.fireEvent)) {
            var b = L.createEvent("Events");
            b.initEvent(c, !0, !0);
            e(b, k);
            a.dispatchEvent ? a.dispatchEvent(b) : a.fireEvent(c, b);
          } else k.target || e(k, {
            preventDefault: function preventDefault() {
              k.defaultPrevented = !0;
            },
            target: a,
            type: c
          }), function (c, r) {
            void 0 === c && (c = []);
            void 0 === r && (r = []);
            var e = 0,
                b = 0,
                l = c.length + r.length;

            for (z = 0; z < l; z++) {
              !1 === (c[e] ? r[b] ? c[e].order <= r[b].order ? c[e++] : r[b++] : c[e++] : r[b++]).fn.call(a, k) && k.preventDefault();
            }
          }(a.protoEvents && a.protoEvents[c], a.hcEvents && a.hcEvents[c]);

          r && !k.defaultPrevented && r.call(a, k);
        },
            A = d.animate = function (a, c, k) {
          var r,
              e = "",
              z,
              b;

          if (!E(k)) {
            var l = arguments;
            k = {
              duration: l[2],
              easing: l[3],
              complete: l[4]
            };
          }

          N(k.duration) || (k.duration = 400);
          k.easing = "function" === typeof k.easing ? k.easing : Math[k.easing] || Math.easeInOutSine;
          k.curAnim = f(c);
          Z(c, function (l, g) {
            da(a, g);
            b = new H(a, k, g);
            z = null;
            "d" === g && w(c.d) ? (b.paths = b.initPath(a, a.pathArray, c.d), b.toD = c.d, r = 0, z = 1) : a.attr ? r = a.attr(g) : (r = parseFloat(ca(a, g)) || 0, "opacity" !== g && (e = "px"));
            z || (z = l);
            z && z.match && z.match("px") && (z = z.replace(/px/g, ""));
            b.run(r, z, e);
          });
        },
            ia = d.seriesType = function (a, c, k, r, e) {
          var z = d.getOptions(),
              b = d.seriesTypes;
          z.plotOptions[a] = f(z.plotOptions[c], k);
          b[a] = I(b[c] || function () {}, r);
          b[a].prototype.type = a;
          e && (b[a].prototype.pointClass = I(d.Point, e));
          return b[a];
        },
            fa = d.uniqueKey = function () {
          var a = Math.random().toString(36).substring(2, 9),
              c = 0;
          return function () {
            return "highcharts-" + a + "-" + c++;
          };
        }(),
            ja = d.isFunction = function (a) {
          return "function" === typeof a;
        };

        x.jQuery && (x.jQuery.fn.highcharts = function () {
          var a = [].slice.call(arguments);
          if (this[0]) return a[0] ? (new d[D(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : J[q(this[0], "data-highcharts-chart")];
        });
        return {
          Fx: d.Fx,
          addEvent: ha,
          animate: A,
          animObject: W,
          arrayMax: k,
          arrayMin: a,
          attr: q,
          clamp: function clamp(a, c, k) {
            return a > c ? a < k ? a : k : c;
          },
          clearTimeout: h,
          correctFloat: P,
          createElement: l,
          css: p,
          defined: b,
          destroyObjectProperties: r,
          discardElement: z,
          erase: m,
          error: F,
          extend: e,
          extendClass: I,
          find: O,
          fireEvent: ba,
          format: S,
          getMagnitude: R,
          getNestedProperty: K,
          getStyle: ca,
          inArray: aa,
          isArray: w,
          isClass: t,
          isDOMElement: n,
          isFunction: ja,
          isNumber: N,
          isObject: E,
          isString: D,
          merge: f,
          normalizeTickInterval: B,
          numberFormat: T,
          objectEach: Z,
          offset: V,
          pad: u,
          pick: M,
          pInt: C,
          relativeLength: y,
          removeEvent: ea,
          seriesType: ia,
          setAnimation: U,
          splat: g,
          stableSort: c,
          stop: da,
          syncTimeout: v,
          timeUnits: Y,
          uniqueKey: fa,
          wrap: G
        };
      });
      Q(A, "parts/Color.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.isNumber,
            q = f.merge,
            M = f.pInt;

        f = function () {
          function d(f) {
            this.parsers = [{
              regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
              parse: function parse(d) {
                return [M(d[1]), M(d[2]), M(d[3]), parseFloat(d[4], 10)];
              }
            }, {
              regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
              parse: function parse(d) {
                return [M(d[1]), M(d[2]), M(d[3]), 1];
              }
            }];
            this.rgba = [];
            if (!(this instanceof d)) return new d(f);
            this.init(f);
          }

          d.parse = function (f) {
            return new d(f);
          };

          d.prototype.init = function (f) {
            var q, x;
            if ((this.input = f = d.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = f.stops.map(function (f) {
              return new d(f[1]);
            });else {
              if (f && f.charAt && "#" === f.charAt()) {
                var F = f.length;
                f = parseInt(f.substr(1), 16);
                7 === F ? q = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === F && (q = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1]);
              }

              if (!q) for (x = this.parsers.length; x-- && !q;) {
                var H = this.parsers[x];
                (F = H.regex.exec(f)) && (q = H.parse(F));
              }
            }
            this.rgba = q || [];
          };

          d.prototype.get = function (d) {
            var f = this.input,
                x = this.rgba;

            if ("undefined" !== typeof this.stops) {
              var F = q(f);
              F.stops = [].concat(F.stops);
              this.stops.forEach(function (f, x) {
                F.stops[x] = [F.stops[x][0], f.get(d)];
              });
            } else F = x && E(x[0]) ? "rgb" === d || !d && 1 === x[3] ? "rgb(" + x[0] + "," + x[1] + "," + x[2] + ")" : "a" === d ? x[3] : "rgba(" + x.join(",") + ")" : f;

            return F;
          };

          d.prototype.brighten = function (d) {
            var f,
                x = this.rgba;
            if (this.stops) this.stops.forEach(function (f) {
              f.brighten(d);
            });else if (E(d) && 0 !== d) for (f = 0; 3 > f; f++) {
              x[f] += M(255 * d), 0 > x[f] && (x[f] = 0), 255 < x[f] && (x[f] = 255);
            }
            return this;
          };

          d.prototype.setOpacity = function (d) {
            this.rgba[3] = d;
            return this;
          };

          d.prototype.tweenTo = function (d, f) {
            var x = this.rgba,
                q = d.rgba;
            q.length && x && x.length ? (d = 1 !== q[3] || 1 !== x[3], f = (d ? "rgba(" : "rgb(") + Math.round(q[0] + (x[0] - q[0]) * (1 - f)) + "," + Math.round(q[1] + (x[1] - q[1]) * (1 - f)) + "," + Math.round(q[2] + (x[2] - q[2]) * (1 - f)) + (d ? "," + (q[3] + (x[3] - q[3]) * (1 - f)) : "") + ")") : f = d.input || "none";
            return f;
          };

          d.names = {
            white: "#ffffff",
            black: "#000000"
          };
          return d;
        }();

        d.Color = f;
        d.color = f.parse;
        return d.Color;
      });
      Q(A, "parts/SVGElement.js", [A["parts/Color.js"], A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f, E) {
        var q = f.deg2rad,
            M = f.doc,
            K = f.hasTouch,
            J = f.isFirefox,
            L = f.noop,
            x = f.svg,
            F = f.SVG_NS,
            H = f.win,
            C = E.animate,
            D = E.animObject,
            w = E.attr,
            n = E.createElement,
            t = E.css,
            N = E.defined,
            m = E.erase,
            b = E.extend,
            g = E.fireEvent,
            v = E.inArray,
            h = E.isArray,
            e = E.isFunction,
            p = E.isNumber,
            l = E.isString,
            I = E.merge,
            u = E.objectEach,
            y = E.pick,
            G = E.pInt,
            S = E.stop,
            R = E.uniqueKey;

        E = function () {
          function B() {
            this.height = this.element = void 0;
            this.opacity = 1;
            this.renderer = void 0;
            this.SVG_NS = F;
            this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
            this.textProps = "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
            this.width = void 0;
          }

          B.prototype._defaultGetter = function (c) {
            c = y(this[c + "Value"], this[c], this.element ? this.element.getAttribute(c) : null, 0);
            /^[\-0-9\.]+$/.test(c) && (c = parseFloat(c));
            return c;
          };

          B.prototype._defaultSetter = function (c, a, k) {
            k.setAttribute(a, c);
          };

          B.prototype.add = function (c) {
            var a = this.renderer,
                k = this.element;
            c && (this.parentGroup = c);
            this.parentInverted = c && c.inverted;
            "undefined" !== typeof this.textStr && a.buildText(this);
            this.added = !0;
            if (!c || c.handleZ || this.zIndex) var r = this.zIndexSetter();
            r || (c ? c.element : a.box).appendChild(k);
            if (this.onAdd) this.onAdd();
            return this;
          };

          B.prototype.addClass = function (c, a) {
            var k = a ? "" : this.attr("class") || "";
            c = (c || "").split(/ /g).reduce(function (a, c) {
              -1 === k.indexOf(c) && a.push(c);
              return a;
            }, k ? [k] : []).join(" ");
            c !== k && this.attr("class", c);
            return this;
          };

          B.prototype.afterSetters = function () {
            this.doTransform && (this.updateTransform(), this.doTransform = !1);
          };

          B.prototype.align = function (c, a, k) {
            var r,
                e = {};
            var b = this.renderer;
            var g = b.alignedObjects;
            var h, p;

            if (c) {
              if (this.alignOptions = c, this.alignByTranslate = a, !k || l(k)) this.alignTo = r = k || "renderer", m(g, this), g.push(this), k = void 0;
            } else c = this.alignOptions, a = this.alignByTranslate, r = this.alignTo;

            k = y(k, b[r], b);
            r = c.align;
            b = c.verticalAlign;
            g = (k.x || 0) + (c.x || 0);
            var u = (k.y || 0) + (c.y || 0);
            "right" === r ? h = 1 : "center" === r && (h = 2);
            h && (g += (k.width - (c.width || 0)) / h);
            e[a ? "translateX" : "x"] = Math.round(g);
            "bottom" === b ? p = 1 : "middle" === b && (p = 2);
            p && (u += (k.height - (c.height || 0)) / p);
            e[a ? "translateY" : "y"] = Math.round(u);
            this[this.placed ? "animate" : "attr"](e);
            this.placed = !0;
            this.alignAttr = e;
            return this;
          };

          B.prototype.alignSetter = function (c) {
            var a = {
              left: "start",
              center: "middle",
              right: "end"
            };
            a[c] && (this.alignValue = c, this.element.setAttribute("text-anchor", a[c]));
          };

          B.prototype.animate = function (c, a, k) {
            var r = D(y(a, this.renderer.globalAnimation, !0));
            y(M.hidden, M.msHidden, M.webkitHidden, !1) && (r.duration = 0);
            0 !== r.duration ? (k && (r.complete = k), C(this, c, r)) : (this.attr(c, void 0, k), u(c, function (a, c) {
              r.step && r.step.call(this, a, {
                prop: c,
                pos: 1
              });
            }, this));
            return this;
          };

          B.prototype.applyTextOutline = function (c) {
            var a = this.element,
                k;
            -1 !== c.indexOf("contrast") && (c = c.replace(/contrast/g, this.renderer.getContrast(a.style.fill)));
            c = c.split(" ");
            var r = c[c.length - 1];

            if ((k = c[0]) && "none" !== k && f.svg) {
              this.fakeTS = !0;
              c = [].slice.call(a.getElementsByTagName("tspan"));
              this.ySetter = this.xSetter;
              k = k.replace(/(^[\d\.]+)(.*?)$/g, function (a, c, k) {
                return 2 * c + k;
              });
              this.removeTextOutline(c);
              var e = a.textContent ? /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(a.textContent) : !1;
              var b = a.firstChild;
              c.forEach(function (c, z) {
                0 === z && (c.setAttribute("x", a.getAttribute("x")), z = a.getAttribute("y"), c.setAttribute("y", z || 0), null === z && a.setAttribute("y", 0));
                z = c.cloneNode(!0);
                w(e && !J ? c : z, {
                  "class": "highcharts-text-outline",
                  fill: r,
                  stroke: r,
                  "stroke-width": k,
                  "stroke-linejoin": "round"
                });
                a.insertBefore(z, b);
              });
              e && J && c[0] && (c = c[0].cloneNode(!0), c.textContent = " ", a.insertBefore(c, b));
            }
          };

          B.prototype.attr = function (c, a, k, r) {
            var e = this.element,
                b,
                l = this,
                g,
                h,
                p = this.symbolCustomAttribs;

            if ("string" === typeof c && "undefined" !== typeof a) {
              var m = c;
              c = {};
              c[m] = a;
            }

            "string" === typeof c ? l = (this[c + "Getter"] || this._defaultGetter).call(this, c, e) : (u(c, function (a, k) {
              g = !1;
              r || S(this, k);
              this.symbolName && -1 !== v(k, p) && (b || (this.symbolAttr(c), b = !0), g = !0);
              !this.rotation || "x" !== k && "y" !== k || (this.doTransform = !0);
              g || (h = this[k + "Setter"] || this._defaultSetter, h.call(this, a, k, e), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(k) && this.updateShadows(k, a, h));
            }, this), this.afterSetters());
            k && k.call(this);
            return l;
          };

          B.prototype.clip = function (c) {
            return this.attr("clip-path", c ? "url(" + this.renderer.url + "#" + c.id + ")" : "none");
          };

          B.prototype.crisp = function (c, a) {
            a = a || c.strokeWidth || 0;
            var k = Math.round(a) % 2 / 2;
            c.x = Math.floor(c.x || this.x || 0) + k;
            c.y = Math.floor(c.y || this.y || 0) + k;
            c.width = Math.floor((c.width || this.width || 0) - 2 * k);
            c.height = Math.floor((c.height || this.height || 0) - 2 * k);
            N(c.strokeWidth) && (c.strokeWidth = a);
            return c;
          };

          B.prototype.complexColor = function (c, a, k) {
            var r = this.renderer,
                e,
                b,
                l,
                p,
                m,
                v,
                y,
                n,
                O,
                V,
                t = [],
                G;
            g(this.renderer, "complexColor", {
              args: arguments
            }, function () {
              c.radialGradient ? b = "radialGradient" : c.linearGradient && (b = "linearGradient");

              if (b) {
                l = c[b];
                m = r.gradients;
                v = c.stops;
                O = k.radialReference;
                h(l) && (c[b] = l = {
                  x1: l[0],
                  y1: l[1],
                  x2: l[2],
                  y2: l[3],
                  gradientUnits: "userSpaceOnUse"
                });
                "radialGradient" === b && O && !N(l.gradientUnits) && (p = l, l = I(l, r.getRadialAttr(O, p), {
                  gradientUnits: "userSpaceOnUse"
                }));
                u(l, function (a, c) {
                  "id" !== c && t.push(c, a);
                });
                u(v, function (a) {
                  t.push(a);
                });
                t = t.join(",");
                if (m[t]) V = m[t].attr("id");else {
                  l.id = V = R();
                  var z = m[t] = r.createElement(b).attr(l).add(r.defs);
                  z.radAttr = p;
                  z.stops = [];
                  v.forEach(function (a) {
                    0 === a[1].indexOf("rgba") ? (e = d.parse(a[1]), y = e.get("rgb"), n = e.get("a")) : (y = a[1], n = 1);
                    a = r.createElement("stop").attr({
                      offset: a[0],
                      "stop-color": y,
                      "stop-opacity": n
                    }).add(z);
                    z.stops.push(a);
                  });
                }
                G = "url(" + r.url + "#" + V + ")";
                k.setAttribute(a, G);
                k.gradient = t;

                c.toString = function () {
                  return G;
                };
              }
            });
          };

          B.prototype.css = function (c) {
            var a = this.styles,
                k = {},
                r = this.element,
                e = "",
                l = !a,
                g = ["textOutline", "textOverflow", "width"];
            c && c.color && (c.fill = c.color);
            a && u(c, function (c, r) {
              a && a[r] !== c && (k[r] = c, l = !0);
            });

            if (l) {
              a && (c = b(a, k));
              if (c) if (null === c.width || "auto" === c.width) delete this.textWidth;else if ("text" === r.nodeName.toLowerCase() && c.width) var h = this.textWidth = G(c.width);
              this.styles = c;
              h && !x && this.renderer.forExport && delete c.width;

              if (r.namespaceURI === this.SVG_NS) {
                var p = function p(a, c) {
                  return "-" + c.toLowerCase();
                };

                u(c, function (a, c) {
                  -1 === g.indexOf(c) && (e += c.replace(/([A-Z])/g, p) + ":" + a + ";");
                });
                e && w(r, "style", e);
              } else t(r, c);

              this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), c && c.textOutline && this.applyTextOutline(c.textOutline));
            }

            return this;
          };

          B.prototype.dashstyleSetter = function (c) {
            var a = this["stroke-width"];
            "inherit" === a && (a = 1);

            if (c = c && c.toLowerCase()) {
              var k = c.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

              for (c = k.length; c--;) {
                k[c] = "" + G(k[c]) * y(a, NaN);
              }

              c = k.join(",").replace(/NaN/g, "none");
              this.element.setAttribute("stroke-dasharray", c);
            }
          };

          B.prototype.destroy = function () {
            var c = this,
                a = c.element || {},
                k = c.renderer,
                r = k.isSVG && "SPAN" === a.nodeName && c.parentGroup || void 0,
                e = a.ownerSVGElement;
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = a.point = null;
            S(c);

            if (c.clipPath && e) {
              var b = c.clipPath;
              [].forEach.call(e.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
                -1 < a.getAttribute("clip-path").indexOf(b.element.id) && a.removeAttribute("clip-path");
              });
              c.clipPath = b.destroy();
            }

            if (c.stops) {
              for (e = 0; e < c.stops.length; e++) {
                c.stops[e].destroy();
              }

              c.stops.length = 0;
              c.stops = void 0;
            }

            c.safeRemoveChild(a);

            for (k.styledMode || c.destroyShadows(); r && r.div && 0 === r.div.childNodes.length;) {
              a = r.parentGroup, c.safeRemoveChild(r.div), delete r.div, r = a;
            }

            c.alignTo && m(k.alignedObjects, c);
            u(c, function (a, k) {
              c[k] && c[k].parentGroup === c && c[k].destroy && c[k].destroy();
              delete c[k];
            });
          };

          B.prototype.destroyShadows = function () {
            (this.shadows || []).forEach(function (c) {
              this.safeRemoveChild(c);
            }, this);
            this.shadows = void 0;
          };

          B.prototype.destroyTextPath = function (c, a) {
            var k = c.getElementsByTagName("text")[0];

            if (k) {
              if (k.removeAttribute("dx"), k.removeAttribute("dy"), a.element.setAttribute("id", ""), this.textPathWrapper && k.getElementsByTagName("textPath").length) {
                for (c = this.textPathWrapper.element.childNodes; c.length;) {
                  k.appendChild(c[0]);
                }

                k.removeChild(this.textPathWrapper.element);
              }
            } else if (c.getAttribute("dx") || c.getAttribute("dy")) c.removeAttribute("dx"), c.removeAttribute("dy");

            this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
          };

          B.prototype.dSetter = function (c, a, k) {
            h(c) && ("string" === typeof c[0] && (c = this.renderer.pathToSegments(c)), this.pathArray = c, c = c.reduce(function (a, c, k) {
              return c && c.join ? (k ? a + " " : "") + c.join(" ") : (c || "").toString();
            }, ""));
            /(NaN| {2}|^$)/.test(c) && (c = "M 0 0");
            this[a] !== c && (k.setAttribute(a, c), this[a] = c);
          };

          B.prototype.fadeOut = function (c) {
            var a = this;
            a.animate({
              opacity: 0
            }, {
              duration: y(c, 150),
              complete: function complete() {
                a.attr({
                  y: -9999
                }).hide();
              }
            });
          };

          B.prototype.fillSetter = function (c, a, k) {
            "string" === typeof c ? k.setAttribute(a, c) : c && this.complexColor(c, a, k);
          };

          B.prototype.getBBox = function (c, a) {
            var k,
                r = this.renderer,
                z = this.element,
                l = this.styles,
                g = this.textStr,
                h = r.cache,
                p = r.cacheKeys,
                u = z.namespaceURI === this.SVG_NS;
            a = y(a, this.rotation, 0);
            var m = r.styledMode ? z && B.prototype.getStyle.call(z, "font-size") : l && l.fontSize;

            if (N(g)) {
              var v = g.toString();
              -1 === v.indexOf("<") && (v = v.replace(/[0-9]/g, "0"));
              v += ["", a, m, this.textWidth, l && l.textOverflow, l && l.fontWeight].join();
            }

            v && !c && (k = h[v]);

            if (!k) {
              if (u || r.forExport) {
                try {
                  var O = this.fakeTS && function (a) {
                    [].forEach.call(z.querySelectorAll(".highcharts-text-outline"), function (c) {
                      c.style.display = a;
                    });
                  };

                  e(O) && O("none");
                  k = z.getBBox ? b({}, z.getBBox()) : {
                    width: z.offsetWidth,
                    height: z.offsetHeight
                  };
                  e(O) && O("");
                } catch (V) {
                  "";
                }

                if (!k || 0 > k.width) k = {
                  width: 0,
                  height: 0
                };
              } else k = this.htmlGetBBox();

              r.isSVG && (c = k.width, r = k.height, u && (k.height = r = {
                "11px,17": 14,
                "13px,20": 16
              }[l && l.fontSize + "," + Math.round(r)] || r), a && (l = a * q, k.width = Math.abs(r * Math.sin(l)) + Math.abs(c * Math.cos(l)), k.height = Math.abs(r * Math.cos(l)) + Math.abs(c * Math.sin(l))));

              if (v && 0 < k.height) {
                for (; 250 < p.length;) {
                  delete h[p.shift()];
                }

                h[v] || p.push(v);
                h[v] = k;
              }
            }

            return k;
          };

          B.prototype.getStyle = function (c) {
            return H.getComputedStyle(this.element || this, "").getPropertyValue(c);
          };

          B.prototype.hasClass = function (c) {
            return -1 !== ("" + this.attr("class")).split(" ").indexOf(c);
          };

          B.prototype.hide = function (c) {
            c ? this.attr({
              y: -9999
            }) : this.attr({
              visibility: "hidden"
            });
            return this;
          };

          B.prototype.htmlGetBBox = function () {
            return {
              height: 0,
              width: 0,
              x: 0,
              y: 0
            };
          };

          B.prototype.init = function (c, a) {
            this.element = "span" === a ? n(a) : M.createElementNS(this.SVG_NS, a);
            this.renderer = c;
            g(this, "afterInit");
          };

          B.prototype.invert = function (c) {
            this.inverted = c;
            this.updateTransform();
            return this;
          };

          B.prototype.on = function (c, a) {
            var k,
                r,
                e = this.element,
                b;
            K && "click" === c ? (e.ontouchstart = function (a) {
              k = a.touches[0].clientX;
              r = a.touches[0].clientY;
            }, e.ontouchend = function (c) {
              k && 4 <= Math.sqrt(Math.pow(k - c.changedTouches[0].clientX, 2) + Math.pow(r - c.changedTouches[0].clientY, 2)) || a.call(e, c);
              b = !0;
              c.preventDefault();
            }, e.onclick = function (c) {
              b || a.call(e, c);
            }) : e["on" + c] = a;
            return this;
          };

          B.prototype.opacitySetter = function (c, a, k) {
            this[a] = c;
            k.setAttribute(a, c);
          };

          B.prototype.removeClass = function (c) {
            return this.attr("class", ("" + this.attr("class")).replace(l(c) ? new RegExp(" ?" + c + " ?") : c, ""));
          };

          B.prototype.removeTextOutline = function (c) {
            for (var a = c.length, k; a--;) {
              k = c[a], "highcharts-text-outline" === k.getAttribute("class") && m(c, this.element.removeChild(k));
            }
          };

          B.prototype.safeRemoveChild = function (c) {
            var a = c.parentNode;
            a && a.removeChild(c);
          };

          B.prototype.setRadialReference = function (c) {
            var a = this.element.gradient && this.renderer.gradients[this.element.gradient];
            this.element.radialReference = c;
            a && a.radAttr && a.animate(this.renderer.getRadialAttr(c, a.radAttr));
            return this;
          };

          B.prototype.setTextPath = function (c, a) {
            var k = this.element,
                r = {
              textAnchor: "text-anchor"
            },
                e = !1,
                b = this.textPathWrapper,
                l = !b;
            a = I(!0, {
              enabled: !0,
              attributes: {
                dy: -5,
                startOffset: "50%",
                textAnchor: "middle"
              }
            }, a);
            var g = a.attributes;

            if (c && a && a.enabled) {
              b && null === b.element.parentNode ? (l = !0, b = b.destroy()) : b && this.removeTextOutline.call(b.parentGroup, [].slice.call(k.getElementsByTagName("tspan")));
              this.options && this.options.padding && (g.dx = -this.options.padding);
              b || (this.textPathWrapper = b = this.renderer.createElement("textPath"), e = !0);
              var h = b.element;
              (a = c.element.getAttribute("id")) || c.element.setAttribute("id", a = R());
              if (l) for (c = k.getElementsByTagName("tspan"); c.length;) {
                c[0].setAttribute("y", 0), p(g.dx) && c[0].setAttribute("x", -g.dx), h.appendChild(c[0]);
              }
              e && b && b.add({
                element: this.text ? this.text.element : k
              });
              h.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + a);
              N(g.dy) && (h.parentNode.setAttribute("dy", g.dy), delete g.dy);
              N(g.dx) && (h.parentNode.setAttribute("dx", g.dx), delete g.dx);
              u(g, function (a, c) {
                h.setAttribute(r[c] || c, a);
              });
              k.removeAttribute("transform");
              this.removeTextOutline.call(b, [].slice.call(k.getElementsByTagName("tspan")));
              this.text && !this.renderer.styledMode && this.attr({
                fill: "none",
                "stroke-width": 0
              });
              this.applyTextOutline = this.updateTransform = L;
            } else b && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(k, c), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));

            return this;
          };

          B.prototype.shadow = function (c, a, k) {
            var r = [],
                e = this.element,
                l = !1,
                g = this.oldShadowOptions;
            var h = {
              color: "#000000",
              offsetX: 1,
              offsetY: 1,
              opacity: .15,
              width: 3
            };
            var p;
            !0 === c ? p = h : "object" === typeof c && (p = b(h, c));
            p && (p && g && u(p, function (a, c) {
              a !== g[c] && (l = !0);
            }), l && this.destroyShadows(), this.oldShadowOptions = p);
            if (!p) this.destroyShadows();else if (!this.shadows) {
              var m = p.opacity / p.width;
              var v = this.parentInverted ? "translate(-1,-1)" : "translate(" + p.offsetX + ", " + p.offsetY + ")";

              for (h = 1; h <= p.width; h++) {
                var y = e.cloneNode(!1);
                var O = 2 * p.width + 1 - 2 * h;
                w(y, {
                  stroke: c.color || "#000000",
                  "stroke-opacity": m * h,
                  "stroke-width": O,
                  transform: v,
                  fill: "none"
                });
                y.setAttribute("class", (y.getAttribute("class") || "") + " highcharts-shadow");
                k && (w(y, "height", Math.max(w(y, "height") - O, 0)), y.cutHeight = O);
                a ? a.element.appendChild(y) : e.parentNode && e.parentNode.insertBefore(y, e);
                r.push(y);
              }

              this.shadows = r;
            }
            return this;
          };

          B.prototype.show = function (c) {
            return this.attr({
              visibility: c ? "inherit" : "visible"
            });
          };

          B.prototype.strokeSetter = function (c, a, k) {
            this[a] = c;
            this.stroke && this["stroke-width"] ? (B.prototype.fillSetter.call(this, this.stroke, "stroke", k), k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === a && 0 === c && this.hasStroke ? (k.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (k.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
          };

          B.prototype.strokeWidth = function () {
            if (!this.renderer.styledMode) return this["stroke-width"] || 0;
            var c = this.getStyle("stroke-width"),
                a = 0;
            if (c.indexOf("px") === c.length - 2) a = G(c);else if ("" !== c) {
              var k = M.createElementNS(F, "rect");
              w(k, {
                width: c,
                "stroke-width": 0
              });
              this.element.parentNode.appendChild(k);
              a = k.getBBox().width;
              k.parentNode.removeChild(k);
            }
            return a;
          };

          B.prototype.symbolAttr = function (c) {
            var a = this;
            "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (k) {
              a[k] = y(c[k], a[k]);
            });
            a.attr({
              d: a.renderer.symbols[a.symbolName](a.x, a.y, a.width, a.height, a)
            });
          };

          B.prototype.textSetter = function (c) {
            c !== this.textStr && (delete this.textPxLength, this.textStr = c, this.added && this.renderer.buildText(this));
          };

          B.prototype.titleSetter = function (c) {
            var a = this.element.getElementsByTagName("title")[0];
            a || (a = M.createElementNS(this.SVG_NS, "title"), this.element.appendChild(a));
            a.firstChild && a.removeChild(a.firstChild);
            a.appendChild(M.createTextNode(String(y(c, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
          };

          B.prototype.toFront = function () {
            var c = this.element;
            c.parentNode.appendChild(c);
            return this;
          };

          B.prototype.translate = function (c, a) {
            return this.attr({
              translateX: c,
              translateY: a
            });
          };

          B.prototype.updateShadows = function (c, a, k) {
            var r = this.shadows;
            if (r) for (var e = r.length; e--;) {
              k.call(r[e], "height" === c ? Math.max(a - (r[e].cutHeight || 0), 0) : "d" === c ? this.d : a, c, r[e]);
            }
          };

          B.prototype.updateTransform = function () {
            var c = this.translateX || 0,
                a = this.translateY || 0,
                k = this.scaleX,
                r = this.scaleY,
                e = this.inverted,
                b = this.rotation,
                l = this.matrix,
                g = this.element;
            e && (c += this.width, a += this.height);
            c = ["translate(" + c + "," + a + ")"];
            N(l) && c.push("matrix(" + l.join(",") + ")");
            e ? c.push("rotate(90) scale(-1,1)") : b && c.push("rotate(" + b + " " + y(this.rotationOriginX, g.getAttribute("x"), 0) + " " + y(this.rotationOriginY, g.getAttribute("y") || 0) + ")");
            (N(k) || N(r)) && c.push("scale(" + y(k, 1) + " " + y(r, 1) + ")");
            c.length && g.setAttribute("transform", c.join(" "));
          };

          B.prototype.visibilitySetter = function (c, a, k) {
            "inherit" === c ? k.removeAttribute(a) : this[a] !== c && k.setAttribute(a, c);
            this[a] = c;
          };

          B.prototype.xGetter = function (c) {
            "circle" === this.element.nodeName && ("x" === c ? c = "cx" : "y" === c && (c = "cy"));
            return this._defaultGetter(c);
          };

          B.prototype.zIndexSetter = function (c, a) {
            var k = this.renderer,
                r = this.parentGroup,
                e = (r || k).element || k.box,
                b = this.element,
                l = !1;
            k = e === k.box;
            var g = this.added;
            var h;
            N(c) ? (b.setAttribute("data-z-index", c), c = +c, this[a] === c && (g = !1)) : N(this[a]) && b.removeAttribute("data-z-index");
            this[a] = c;

            if (g) {
              (c = this.zIndex) && r && (r.handleZ = !0);
              a = e.childNodes;

              for (h = a.length - 1; 0 <= h && !l; h--) {
                r = a[h];
                g = r.getAttribute("data-z-index");
                var p = !N(g);
                if (r !== b) if (0 > c && p && !k && !h) e.insertBefore(b, a[h]), l = !0;else if (G(g) <= c || p && (!N(c) || 0 <= c)) e.insertBefore(b, a[h + 1] || null), l = !0;
              }

              l || (e.insertBefore(b, a[k ? 3 : 0] || null), l = !0);
            }

            return l;
          };

          return B;
        }();

        E.prototype["stroke-widthSetter"] = E.prototype.strokeSetter;
        E.prototype.yGetter = E.prototype.xGetter;

        E.prototype.matrixSetter = E.prototype.rotationOriginXSetter = E.prototype.rotationOriginYSetter = E.prototype.rotationSetter = E.prototype.scaleXSetter = E.prototype.scaleYSetter = E.prototype.translateXSetter = E.prototype.translateYSetter = E.prototype.verticalAlignSetter = function (e, c) {
          this[c] = e;
          this.doTransform = !0;
        };

        f.SVGElement = E;
        return f.SVGElement;
      });
      Q(A, "parts/SvgRenderer.js", [A["parts/Color.js"], A["parts/Globals.js"], A["parts/SVGElement.js"], A["parts/Utilities.js"]], function (d, f, E, q) {
        var M = d.parse,
            K = q.addEvent,
            J = q.attr,
            L = q.createElement,
            x = q.css,
            F = q.defined,
            H = q.destroyObjectProperties,
            C = q.extend,
            D = q.isArray,
            w = q.isNumber,
            n = q.isObject,
            t = q.isString,
            N = q.merge,
            m = q.objectEach,
            b = q.pick,
            g = q.pInt,
            v = q.removeEvent,
            h = q.splat,
            e = q.uniqueKey,
            p = f.charts,
            l = f.deg2rad,
            I = f.doc,
            u = f.isFirefox,
            y = f.isMS,
            G = f.isWebKit;
        q = f.noop;
        var S = f.svg,
            R = f.SVG_NS,
            B = f.symbolSizes,
            c = f.win;

        d = f.SVGRenderer = function () {
          this.init.apply(this, arguments);
        };

        C(d.prototype, {
          Element: E,
          SVG_NS: R,
          init: function init(a, k, r, e, b, l, g) {
            var z = this.createElement("svg").attr({
              version: "1.1",
              "class": "highcharts-root"
            });
            g || z.css(this.getStyle(e));
            e = z.element;
            a.appendChild(e);
            J(a, "dir", "ltr");
            -1 === a.innerHTML.indexOf("xmlns") && J(e, "xmlns", this.SVG_NS);
            this.isSVG = !0;
            this.box = e;
            this.boxWrapper = z;
            this.alignedObjects = [];
            this.url = (u || G) && I.getElementsByTagName("base").length ? c.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(I.createTextNode("Created with Highcharts 8.1.0"));
            this.defs = this.createElement("defs").add();
            this.allowHTML = l;
            this.forExport = b;
            this.styledMode = g;
            this.gradients = {};
            this.cache = {};
            this.cacheKeys = [];
            this.imgCount = 0;
            this.setSize(k, r, !1);
            var h;
            u && a.getBoundingClientRect && (k = function k() {
              x(a, {
                left: 0,
                top: 0
              });
              h = a.getBoundingClientRect();
              x(a, {
                left: Math.ceil(h.left) - h.left + "px",
                top: Math.ceil(h.top) - h.top + "px"
              });
            }, k(), this.unSubPixelFix = K(c, "resize", k));
          },
          definition: function definition(a) {
            function c(a, k) {
              var e;
              h(a).forEach(function (a) {
                var b = r.createElement(a.tagName),
                    l = {};
                m(a, function (a, c) {
                  "tagName" !== c && "children" !== c && "textContent" !== c && (l[c] = a);
                });
                b.attr(l);
                b.add(k || r.defs);
                a.textContent && b.element.appendChild(I.createTextNode(a.textContent));
                c(a.children || [], b);
                e = b;
              });
              return e;
            }

            var r = this;
            return c(a);
          },
          getStyle: function getStyle(a) {
            return this.style = C({
              fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
              fontSize: "12px"
            }, a);
          },
          setStyle: function setStyle(a) {
            this.boxWrapper.css(this.getStyle(a));
          },
          isHidden: function isHidden() {
            return !this.boxWrapper.getBBox().width;
          },
          destroy: function destroy() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            H(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.unSubPixelFix && this.unSubPixelFix();
            return this.alignedObjects = null;
          },
          createElement: function createElement(a) {
            var c = new this.Element();
            c.init(this, a);
            return c;
          },
          draw: q,
          getRadialAttr: function getRadialAttr(a, c) {
            return {
              cx: a[0] - a[2] / 2 + c.cx * a[2],
              cy: a[1] - a[2] / 2 + c.cy * a[2],
              r: c.r * a[2]
            };
          },
          truncate: function truncate(a, c, r, e, b, l, g) {
            var k = this,
                z = a.rotation,
                h,
                p = e ? 1 : 0,
                u = (r || e).length,
                P = u,
                m = [],
                v = function v(a) {
              c.firstChild && c.removeChild(c.firstChild);
              a && c.appendChild(I.createTextNode(a));
            },
                y = function y(l, z) {
              z = z || l;
              if ("undefined" === typeof m[z]) if (c.getSubStringLength) try {
                m[z] = b + c.getSubStringLength(0, e ? z + 1 : z);
              } catch (fa) {
                "";
              } else k.getSpanWidth && (v(g(r || e, l)), m[z] = b + k.getSpanWidth(a, c));
              return m[z];
            },
                n;

            a.rotation = 0;
            var U = y(c.textContent.length);

            if (n = b + U > l) {
              for (; p <= u;) {
                P = Math.ceil((p + u) / 2), e && (h = g(e, P)), U = y(P, h && h.length - 1), p === u ? p = u + 1 : U > l ? u = P - 1 : p = P;
              }

              0 === u ? v("") : r && u === r.length - 1 || v(h || g(r || e, P));
            }

            e && e.splice(0, P);
            a.actualWidth = U;
            a.rotation = z;
            return n;
          },
          escapes: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
          },
          buildText: function buildText(a) {
            var c = a.element,
                r = this,
                e = r.forExport,
                l = b(a.textStr, "").toString(),
                h = -1 !== l.indexOf("<"),
                p = c.childNodes,
                u,
                v = J(c, "x"),
                y = a.styles,
                n = a.textWidth,
                O = y && y.lineHeight,
                V = y && y.textOutline,
                t = y && "ellipsis" === y.textOverflow,
                G = y && "nowrap" === y.whiteSpace,
                d = y && y.fontSize,
                w,
                B = p.length;
            y = n && !a.added && this.box;

            var f = function f(a) {
              var k;
              r.styledMode || (k = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : d || r.style.fontSize || 12);
              return O ? g(O) : r.fontMetrics(k, a.getAttribute("style") ? a : c).h;
            },
                N = function N(a, c) {
              m(r.escapes, function (k, r) {
                c && -1 !== c.indexOf(k) || (a = a.toString().replace(new RegExp(k, "g"), r));
              });
              return a;
            },
                C = function C(a, c) {
              var k = a.indexOf("<");
              a = a.substring(k, a.indexOf(">") - k);
              k = a.indexOf(c + "=");
              if (-1 !== k && (k = k + c.length + 1, c = a.charAt(k), '"' === c || "'" === c)) return a = a.substring(k + 1), a.substring(0, a.indexOf(c));
            },
                D = /<br.*?>/g;

            var q = [l, t, G, O, V, d, n].join();

            if (q !== a.textCache) {
              for (a.textCache = q; B--;) {
                c.removeChild(p[B]);
              }

              h || V || t || n || -1 !== l.indexOf(" ") && (!G || D.test(l)) ? (y && y.appendChild(c), h ? (l = r.styledMode ? l.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), l = l.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(D)) : l = [l], l = l.filter(function (a) {
                return "" !== a;
              }), l.forEach(function (k, b) {
                var l = 0,
                    g = 0;
                k = k.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                var z = k.split("|||");
                z.forEach(function (k) {
                  if ("" !== k || 1 === z.length) {
                    var h = {},
                        p = I.createElementNS(r.SVG_NS, "tspan"),
                        m,
                        P;
                    (m = C(k, "class")) && J(p, "class", m);
                    if (m = C(k, "style")) m = m.replace(/(;| |^)color([ :])/, "$1fill$2"), J(p, "style", m);
                    (P = C(k, "href")) && !e && (J(p, "onclick", 'location.href="' + P + '"'), J(p, "class", "highcharts-anchor"), r.styledMode || x(p, {
                      cursor: "pointer"
                    }));
                    k = N(k.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                    if (" " !== k) {
                      p.appendChild(I.createTextNode(k));
                      l ? h.dx = 0 : b && null !== v && (h.x = v);
                      J(p, h);
                      c.appendChild(p);
                      !l && w && (!S && e && x(p, {
                        display: "block"
                      }), J(p, "dy", f(p)));

                      if (n) {
                        var O = k.replace(/([^\^])-/g, "$1- ").split(" ");
                        h = !G && (1 < z.length || b || 1 < O.length);
                        P = 0;
                        var y = f(p);
                        if (t) u = r.truncate(a, p, k, void 0, 0, Math.max(0, n - parseInt(d || 12, 10)), function (a, c) {
                          return a.substring(0, c) + "\u2026";
                        });else if (h) for (; O.length;) {
                          O.length && !G && 0 < P && (p = I.createElementNS(R, "tspan"), J(p, {
                            dy: y,
                            x: v
                          }), m && J(p, "style", m), p.appendChild(I.createTextNode(O.join(" ").replace(/- /g, "-"))), c.appendChild(p)), r.truncate(a, p, null, O, 0 === P ? g : 0, n, function (a, c) {
                            return O.slice(0, c).join(" ").replace(/- /g, "-");
                          }), g = a.actualWidth, P++;
                        }
                      }

                      l++;
                    }
                  }
                });
                w = w || c.childNodes.length;
              }), t && u && a.attr("title", N(a.textStr, ["&lt;", "&gt;"])), y && y.removeChild(c), V && a.applyTextOutline && a.applyTextOutline(V)) : c.appendChild(I.createTextNode(N(l)));
            }
          },
          getContrast: function getContrast(a) {
            a = M(a).rgba;
            a[0] *= 1;
            a[1] *= 1.2;
            a[2] *= .5;
            return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
          },
          button: function button(a, c, r, e, b, l, g, h, p, u) {
            var k = this.label(a, c, r, p, void 0, void 0, u, void 0, "button"),
                z = 0,
                m = this.styledMode;
            k.attr(N({
              padding: 8,
              r: 2
            }, b));

            if (!m) {
              b = N({
                fill: "#f7f7f7",
                stroke: "#cccccc",
                "stroke-width": 1,
                style: {
                  color: "#333333",
                  cursor: "pointer",
                  fontWeight: "normal"
                }
              }, b);
              var P = b.style;
              delete b.style;
              l = N(b, {
                fill: "#e6e6e6"
              }, l);
              var v = l.style;
              delete l.style;
              g = N(b, {
                fill: "#e6ebf5",
                style: {
                  color: "#000000",
                  fontWeight: "bold"
                }
              }, g);
              var n = g.style;
              delete g.style;
              h = N(b, {
                style: {
                  color: "#cccccc"
                }
              }, h);
              var U = h.style;
              delete h.style;
            }

            K(k.element, y ? "mouseover" : "mouseenter", function () {
              3 !== z && k.setState(1);
            });
            K(k.element, y ? "mouseout" : "mouseleave", function () {
              3 !== z && k.setState(z);
            });

            k.setState = function (a) {
              1 !== a && (k.state = z = a);
              k.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
              m || k.attr([b, l, g, h][a || 0]).css([P, v, n, U][a || 0]);
            };

            m || k.attr(b).css(C({
              cursor: "default"
            }, P));
            return k.on("click", function (a) {
              3 !== z && e.call(k, a);
            });
          },
          crispLine: function crispLine(a, c, r) {
            void 0 === r && (r = "round");
            var k = a[0],
                e = a[1];
            k[1] === e[1] && (k[1] = e[1] = Math[r](k[1]) - c % 2 / 2);
            k[2] === e[2] && (k[2] = e[2] = Math[r](k[2]) + c % 2 / 2);
            return a;
          },
          path: function path(a) {
            var c = this.styledMode ? {} : {
              fill: "none"
            };
            D(a) ? c.d = a : n(a) && C(c, a);
            return this.createElement("path").attr(c);
          },
          circle: function circle(a, c, r) {
            a = n(a) ? a : "undefined" === typeof a ? {} : {
              x: a,
              y: c,
              r: r
            };
            c = this.createElement("circle");

            c.xSetter = c.ySetter = function (a, c, k) {
              k.setAttribute("c" + c, a);
            };

            return c.attr(a);
          },
          arc: function arc(a, c, r, e, b, l) {
            n(a) ? (e = a, c = e.y, r = e.r, a = e.x) : e = {
              innerR: e,
              start: b,
              end: l
            };
            a = this.symbol("arc", a, c, r, r, e);
            a.r = r;
            return a;
          },
          rect: function rect(a, c, r, e, b, l) {
            b = n(a) ? a.r : b;
            var k = this.createElement("rect");
            a = n(a) ? a : "undefined" === typeof a ? {} : {
              x: a,
              y: c,
              width: Math.max(r, 0),
              height: Math.max(e, 0)
            };
            this.styledMode || ("undefined" !== typeof l && (a.strokeWidth = l, a = k.crisp(a)), a.fill = "none");
            b && (a.r = b);

            k.rSetter = function (a, c, r) {
              k.r = a;
              J(r, {
                rx: a,
                ry: a
              });
            };

            k.rGetter = function () {
              return k.r;
            };

            return k.attr(a);
          },
          setSize: function setSize(a, c, r) {
            var k = this.alignedObjects,
                e = k.length;
            this.width = a;
            this.height = c;

            for (this.boxWrapper.animate({
              width: a,
              height: c
            }, {
              step: function step() {
                this.attr({
                  viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                });
              },
              duration: b(r, !0) ? void 0 : 0
            }); e--;) {
              k[e].align();
            }
          },
          g: function g(a) {
            var c = this.createElement("g");
            return a ? c.attr({
              "class": "highcharts-" + a
            }) : c;
          },
          image: function image(a, k, r, e, b, l) {
            var g = {
              preserveAspectRatio: "none"
            },
                h = function h(a, c) {
              a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", c) : a.setAttribute("hc-svg-href", c);
            },
                z = function z(c) {
              h(p.element, a);
              l.call(p, c);
            };

            1 < arguments.length && C(g, {
              x: k,
              y: r,
              width: e,
              height: b
            });
            var p = this.createElement("image").attr(g);
            l ? (h(p.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), g = new c.Image(), K(g, "load", z), g.src = a, g.complete && z({})) : h(p.element, a);
            return p;
          },
          symbol: function symbol(a, c, r, e, l, g) {
            var k = this,
                h = /^url\((.*?)\)$/,
                z = h.test(a),
                u = !z && (this.symbols[a] ? a : "circle"),
                m = u && this.symbols[u],
                v;

            if (m) {
              "number" === typeof c && (v = m.call(this.symbols, Math.round(c || 0), Math.round(r || 0), e, l, g));
              var P = this.path(v);
              k.styledMode || P.attr("fill", "none");
              C(P, {
                symbolName: u,
                x: c,
                y: r,
                width: e,
                height: l
              });
              g && C(P, g);
            } else if (z) {
              var y = a.match(h)[1];
              P = this.image(y);
              P.imgwidth = b(B[y] && B[y].width, g && g.width);
              P.imgheight = b(B[y] && B[y].height, g && g.height);

              var n = function n() {
                P.attr({
                  width: P.width,
                  height: P.height
                });
              };

              ["width", "height"].forEach(function (a) {
                P[a + "Setter"] = function (a, c) {
                  var k = {},
                      r = this["img" + c],
                      e = "width" === c ? "translateX" : "translateY";
                  this[c] = a;
                  F(r) && (g && "within" === g.backgroundSize && this.width && this.height && (r = Math.round(r * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(c, r), this.alignByTranslate || (k[e] = ((this[c] || 0) - r) / 2, this.attr(k)));
                };
              });
              F(c) && P.attr({
                x: c,
                y: r
              });
              P.isImg = !0;
              F(P.imgwidth) && F(P.imgheight) ? n() : (P.attr({
                width: 0,
                height: 0
              }), L("img", {
                onload: function onload() {
                  var a = p[k.chartIndex];
                  0 === this.width && (x(this, {
                    position: "absolute",
                    top: "-999em"
                  }), I.body.appendChild(this));
                  B[y] = {
                    width: this.width,
                    height: this.height
                  };
                  P.imgwidth = this.width;
                  P.imgheight = this.height;
                  P.element && n();
                  this.parentNode && this.parentNode.removeChild(this);
                  k.imgCount--;
                  if (!k.imgCount && a && !a.hasLoaded) a.onload();
                },
                src: y
              }), this.imgCount++);
            }

            return P;
          },
          symbols: {
            circle: function circle(a, c, r, e) {
              return this.arc(a + r / 2, c + e / 2, r / 2, e / 2, {
                start: .5 * Math.PI,
                end: 2.5 * Math.PI,
                open: !1
              });
            },
            square: function square(a, c, r, e) {
              return [["M", a, c], ["L", a + r, c], ["L", a + r, c + e], ["L", a, c + e], ["Z"]];
            },
            triangle: function triangle(a, c, r, e) {
              return [["M", a + r / 2, c], ["L", a + r, c + e], ["L", a, c + e], ["Z"]];
            },
            "triangle-down": function triangleDown(a, c, r, e) {
              return [["M", a, c], ["L", a + r, c], ["L", a + r / 2, c + e], ["Z"]];
            },
            diamond: function diamond(a, c, r, e) {
              return [["M", a + r / 2, c], ["L", a + r, c + e / 2], ["L", a + r / 2, c + e], ["L", a, c + e / 2], ["Z"]];
            },
            arc: function arc(a, c, r, e, l) {
              var k = l.start,
                  g = l.r || r,
                  h = l.r || e || r,
                  p = l.end - .001;
              r = l.innerR;
              e = b(l.open, .001 > Math.abs(l.end - l.start - 2 * Math.PI));
              var z = Math.cos(k),
                  u = Math.sin(k),
                  m = Math.cos(p);
              p = Math.sin(p);
              k = b(l.longArc, .001 > l.end - k - Math.PI ? 0 : 1);
              g = [["M", a + g * z, c + h * u], ["A", g, h, 0, k, b(l.clockwise, 1), a + g * m, c + h * p]];
              F(r) && g.push(e ? ["M", a + r * m, c + r * p] : ["L", a + r * m, c + r * p], ["A", r, r, 0, k, F(l.clockwise) ? 1 - l.clockwise : 0, a + r * z, c + r * u]);
              e || g.push(["Z"]);
              return g;
            },
            callout: function callout(a, c, r, e, b) {
              var k = Math.min(b && b.r || 0, r, e),
                  l = k + 6,
                  g = b && b.anchorX;
              b = b && b.anchorY;
              var h = [["M", a + k, c], ["L", a + r - k, c], ["C", a + r, c, a + r, c, a + r, c + k], ["L", a + r, c + e - k], ["C", a + r, c + e, a + r, c + e, a + r - k, c + e], ["L", a + k, c + e], ["C", a, c + e, a, c + e, a, c + e - k], ["L", a, c + k], ["C", a, c, a, c, a + k, c]];
              g && g > r ? b > c + l && b < c + e - l ? h.splice(3, 1, ["L", a + r, b - 6], ["L", a + r + 6, b], ["L", a + r, b + 6], ["L", a + r, c + e - k]) : h.splice(3, 1, ["L", a + r, e / 2], ["L", g, b], ["L", a + r, e / 2], ["L", a + r, c + e - k]) : g && 0 > g ? b > c + l && b < c + e - l ? h.splice(7, 1, ["L", a, b + 6], ["L", a - 6, b], ["L", a, b - 6], ["L", a, c + k]) : h.splice(7, 1, ["L", a, e / 2], ["L", g, b], ["L", a, e / 2], ["L", a, c + k]) : b && b > e && g > a + l && g < a + r - l ? h.splice(5, 1, ["L", g + 6, c + e], ["L", g, c + e + 6], ["L", g - 6, c + e], ["L", a + k, c + e]) : b && 0 > b && g > a + l && g < a + r - l && h.splice(1, 1, ["L", g - 6, c], ["L", g, c - 6], ["L", g + 6, c], ["L", r - k, c]);
              return h;
            }
          },
          clipRect: function clipRect(a, c, r, b) {
            var k = e() + "-",
                l = this.createElement("clipPath").attr({
              id: k
            }).add(this.defs);
            a = this.rect(a, c, r, b, 0).add(l);
            a.id = k;
            a.clipPath = l;
            a.count = 0;
            return a;
          },
          text: function text(a, c, e, b) {
            var k = {};
            if (b && (this.allowHTML || !this.forExport)) return this.html(a, c, e);
            k.x = Math.round(c || 0);
            e && (k.y = Math.round(e));
            F(a) && (k.text = a);
            a = this.createElement("text").attr(k);
            b || (a.xSetter = function (a, c, k) {
              var e = k.getElementsByTagName("tspan"),
                  r = k.getAttribute(c),
                  b;

              for (b = 0; b < e.length; b++) {
                var l = e[b];
                l.getAttribute(c) === r && l.setAttribute(c, a);
              }

              k.setAttribute(c, a);
            });
            return a;
          },
          fontMetrics: function fontMetrics(a, k) {
            a = !this.styledMode && /px/.test(a) || !c.getComputedStyle ? a || k && k.style && k.style.fontSize || this.style && this.style.fontSize : k && E.prototype.getStyle.call(k, "font-size");
            a = /px/.test(a) ? g(a) : 12;
            k = 24 > a ? a + 3 : Math.round(1.2 * a);
            return {
              h: k,
              b: Math.round(.8 * k),
              f: a
            };
          },
          rotCorr: function rotCorr(a, c, e) {
            var k = a;
            c && e && (k = Math.max(k * Math.cos(c * l), 4));
            return {
              x: -a / 3 * Math.sin(c * l),
              y: k
            };
          },
          pathToSegments: function pathToSegments(a) {
            for (var c = [], e = [], b = {
              A: 8,
              C: 7,
              H: 2,
              L: 3,
              M: 3,
              Q: 5,
              S: 5,
              T: 3,
              V: 2
            }, l = 0; l < a.length; l++) {
              t(e[0]) && w(a[l]) && e.length === b[e[0].toUpperCase()] && a.splice(l, 0, e[0].replace("M", "L").replace("m", "l")), "string" === typeof a[l] && (e.length && c.push(e.slice(0)), e.length = 0), e.push(a[l]);
            }

            c.push(e.slice(0));
            return c;
          },
          label: function label(a, c, e, b, l, g, h, p, u) {
            var k = this,
                r = k.styledMode,
                z = k.g("button" !== u && "label"),
                m = z.text = k.text("", 0, 0, h).attr({
              zIndex: 1
            }),
                y,
                P = {
              width: 0,
              height: 0,
              x: 0,
              y: 0
            },
                n = P,
                t = 0,
                I = 3,
                G = 0,
                U,
                d,
                B,
                f,
                S,
                R = {},
                x,
                W,
                T = /^url\((.*?)\)$/.test(b),
                D = r || T,
                q = function q() {
              return r ? y.strokeWidth() % 2 / 2 : (x ? parseInt(x, 10) : 0) % 2 / 2;
            };

            u && z.addClass("highcharts-" + u);

            var Y = function Y() {
              var a = m.element.style,
                  c = {};
              n = w(U) && w(d) && !S || !F(m.textStr) ? P : m.getBBox();
              z.width = (U || n.width || 0) + 2 * I + G;
              z.height = (d || n.height || 0) + 2 * I;
              W = I + Math.min(k.fontMetrics(a && a.fontSize, m).b, n.height || Infinity);
              D && (y || (z.box = y = k.symbols[b] || T ? k.symbol(b) : k.rect(), y.addClass(("button" === u ? "" : "highcharts-label-box") + (u ? " highcharts-" + u + "-box" : "")), y.add(z), a = q(), c.x = a, c.y = (p ? -W : 0) + a), c.width = Math.round(z.width), c.height = Math.round(z.height), y.attr(C(c, R)), R = {});
            };

            var H = function H() {
              var a = G + I;
              var c = p ? 0 : W;
              F(U) && n && ("center" === S || "right" === S) && (a += {
                center: .5,
                right: 1
              }[S] * (U - n.width));
              if (a !== m.x || c !== m.y) m.attr("x", a), m.hasBoxWidthChanged && (n = m.getBBox(!0), Y()), "undefined" !== typeof c && m.attr("y", c);
              m.x = a;
              m.y = c;
            };

            var L = function L(a, c) {
              y ? y.attr(a, c) : R[a] = c;
            };

            z.onAdd = function () {
              m.add(z);
              z.attr({
                text: a || 0 === a ? a : "",
                x: c,
                y: e
              });
              y && F(l) && z.attr({
                anchorX: l,
                anchorY: g
              });
            };

            z.widthSetter = function (a) {
              U = w(a) ? a : null;
            };

            z.heightSetter = function (a) {
              d = a;
            };

            z["text-alignSetter"] = function (a) {
              S = a;
            };

            z.paddingSetter = function (a) {
              F(a) && a !== I && (I = z.padding = a, H());
            };

            z.paddingLeftSetter = function (a) {
              F(a) && a !== G && (G = a, H());
            };

            z.alignSetter = function (a) {
              a = {
                left: 0,
                center: .5,
                right: 1
              }[a];
              a !== t && (t = a, n && z.attr({
                x: B
              }));
            };

            z.textSetter = function (a) {
              "undefined" !== typeof a && m.attr({
                text: a
              });
              Y();
              H();
            };

            z["stroke-widthSetter"] = function (a, c) {
              a && (D = !0);
              x = this["stroke-width"] = a;
              L(c, a);
            };

            r ? z.rSetter = function (a, c) {
              L(c, a);
            } : z.strokeSetter = z.fillSetter = z.rSetter = function (a, c) {
              "r" !== c && ("fill" === c && a && (D = !0), z[c] = a);
              L(c, a);
            };

            z.anchorXSetter = function (a, c) {
              l = z.anchorX = a;
              L(c, Math.round(a) - q() - B);
            };

            z.anchorYSetter = function (a, c) {
              g = z.anchorY = a;
              L(c, a - f);
            };

            z.xSetter = function (a) {
              z.x = a;
              t && (a -= t * ((U || n.width) + 2 * I), z["forceAnimate:x"] = !0);
              B = Math.round(a);
              z.attr("translateX", B);
            };

            z.ySetter = function (a) {
              f = z.y = Math.round(a);
              z.attr("translateY", f);
            };

            z.isLabel = !0;
            var J = z.css;
            h = {
              css: function css(a) {
                if (a) {
                  var c = {};
                  a = N(a);
                  z.textProps.forEach(function (k) {
                    "undefined" !== typeof a[k] && (c[k] = a[k], delete a[k]);
                  });
                  m.css(c);
                  var k = "fontSize" in c || "fontWeight" in c;
                  if ("width" in c || k) Y(), k && H();
                }

                return J.call(z, a);
              },
              getBBox: function getBBox() {
                return {
                  width: n.width + 2 * I,
                  height: n.height + 2 * I,
                  x: n.x - I,
                  y: n.y - I
                };
              },
              destroy: function destroy() {
                v(z.element, "mouseenter");
                v(z.element, "mouseleave");
                m && m.destroy();
                y && (y = y.destroy());
                E.prototype.destroy.call(z);
                z = k = m = Y = H = L = null;
              }
            };

            z.on = function (a, c) {
              var k = m && "SPAN" === m.element.tagName ? m : void 0;

              if (k) {
                var e = function e(_e) {
                  ("mouseenter" === a || "mouseleave" === a) && _e.relatedTarget instanceof Element && (z.element.contains(_e.relatedTarget) || k.element.contains(_e.relatedTarget)) || c.call(z.element, _e);
                };

                k.on(a, e);
              }

              E.prototype.on.call(z, a, e || c);
              return z;
            };

            r || (h.shadow = function (a) {
              a && (Y(), y && y.shadow(a));
              return z;
            });
            return C(z, h);
          }
        });
        f.Renderer = d;
      });
      Q(A, "parts/Html.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.attr,
            q = f.createElement,
            M = f.css,
            K = f.defined,
            J = f.extend,
            L = f.pick,
            x = f.pInt,
            F = d.isFirefox,
            H = d.isMS,
            C = d.isWebKit,
            D = d.SVGElement;
        f = d.SVGRenderer;
        var w = d.win;
        J(D.prototype, {
          htmlCss: function htmlCss(n) {
            var t = "SPAN" === this.element.tagName && n && "width" in n,
                d = L(t && n.width, void 0);

            if (t) {
              delete n.width;
              this.textWidth = d;
              var m = !0;
            }

            n && "ellipsis" === n.textOverflow && (n.whiteSpace = "nowrap", n.overflow = "hidden");
            this.styles = J(this.styles, n);
            M(this.element, n);
            m && this.htmlUpdateTransform();
            return this;
          },
          htmlGetBBox: function htmlGetBBox() {
            var n = this.element;
            return {
              x: n.offsetLeft,
              y: n.offsetTop,
              width: n.offsetWidth,
              height: n.offsetHeight
            };
          },
          htmlUpdateTransform: function htmlUpdateTransform() {
            if (this.added) {
              var n = this.renderer,
                  t = this.element,
                  d = this.translateX || 0,
                  m = this.translateY || 0,
                  b = this.x || 0,
                  g = this.y || 0,
                  v = this.textAlign || "left",
                  h = {
                left: 0,
                center: .5,
                right: 1
              }[v],
                  e = this.styles,
                  p = e && e.whiteSpace;
              M(t, {
                marginLeft: d,
                marginTop: m
              });
              !n.styledMode && this.shadows && this.shadows.forEach(function (e) {
                M(e, {
                  marginLeft: d + 1,
                  marginTop: m + 1
                });
              });
              this.inverted && [].forEach.call(t.childNodes, function (e) {
                n.invertChild(e, t);
              });

              if ("SPAN" === t.tagName) {
                e = this.rotation;
                var l = this.textWidth && x(this.textWidth),
                    I = [e, v, t.innerHTML, this.textWidth, this.textAlign].join(),
                    u;
                (u = l !== this.oldTextWidth) && !(u = l > this.oldTextWidth) && ((u = this.textPxLength) || (M(t, {
                  width: "",
                  whiteSpace: p || "nowrap"
                }), u = t.offsetWidth), u = u > l);
                u && (/[ \-]/.test(t.textContent || t.innerText) || "ellipsis" === t.style.textOverflow) ? (M(t, {
                  width: l + "px",
                  display: "block",
                  whiteSpace: p || "normal"
                }), this.oldTextWidth = l, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
                I !== this.cTT && (p = n.fontMetrics(t.style.fontSize, t).b, !K(e) || e === (this.oldRotation || 0) && v === this.oldAlign || this.setSpanRotation(e, h, p), this.getSpanCorrection(!K(e) && this.textPxLength || t.offsetWidth, p, h, e, v));
                M(t, {
                  left: b + (this.xCorr || 0) + "px",
                  top: g + (this.yCorr || 0) + "px"
                });
                this.cTT = I;
                this.oldRotation = e;
                this.oldAlign = v;
              }
            } else this.alignOnAdd = !0;
          },
          setSpanRotation: function setSpanRotation(n, t, d) {
            var m = {},
                b = this.renderer.getTransformKey();
            m[b] = m.transform = "rotate(" + n + "deg)";
            m[b + (F ? "Origin" : "-origin")] = m.transformOrigin = 100 * t + "% " + d + "px";
            M(this.element, m);
          },
          getSpanCorrection: function getSpanCorrection(n, t, d) {
            this.xCorr = -n * d;
            this.yCorr = -t;
          }
        });
        J(f.prototype, {
          getTransformKey: function getTransformKey() {
            return H && !/Edge/.test(w.navigator.userAgent) ? "-ms-transform" : C ? "-webkit-transform" : F ? "MozTransform" : w.opera ? "-o-transform" : "";
          },
          html: function html(n, t, d) {
            var m = this.createElement("span"),
                b = m.element,
                g = m.renderer,
                v = g.isSVG,
                h = function h(e, b) {
              ["opacity", "visibility"].forEach(function (l) {
                e[l + "Setter"] = function (g, h, p) {
                  var u = e.div ? e.div.style : b;
                  D.prototype[l + "Setter"].call(this, g, h, p);
                  u && (u[h] = g);
                };
              });
              e.addedSetters = !0;
            };

            m.textSetter = function (e) {
              e !== b.innerHTML && (delete this.bBox, delete this.oldTextWidth);
              this.textStr = e;
              b.innerHTML = L(e, "");
              m.doTransform = !0;
            };

            v && h(m, m.element.style);

            m.xSetter = m.ySetter = m.alignSetter = m.rotationSetter = function (e, b) {
              "align" === b && (b = "textAlign");
              m[b] = e;
              m.doTransform = !0;
            };

            m.afterSetters = function () {
              this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
            };

            m.attr({
              text: n,
              x: Math.round(t),
              y: Math.round(d)
            }).css({
              position: "absolute"
            });
            g.styledMode || m.css({
              fontFamily: this.style.fontFamily,
              fontSize: this.style.fontSize
            });
            b.style.whiteSpace = "nowrap";
            m.css = m.htmlCss;
            v && (m.add = function (e) {
              var p = g.box.parentNode,
                  l = [];

              if (this.parentGroup = e) {
                var v = e.div;

                if (!v) {
                  for (; e;) {
                    l.push(e), e = e.parentGroup;
                  }

                  l.reverse().forEach(function (e) {
                    function b(b, l) {
                      e[l] = b;
                      "translateX" === l ? u.left = b + "px" : u.top = b + "px";
                      e.doTransform = !0;
                    }

                    var g = E(e.element, "class");
                    v = e.div = e.div || q("div", g ? {
                      className: g
                    } : void 0, {
                      position: "absolute",
                      left: (e.translateX || 0) + "px",
                      top: (e.translateY || 0) + "px",
                      display: e.display,
                      opacity: e.opacity,
                      pointerEvents: e.styles && e.styles.pointerEvents
                    }, v || p);
                    var u = v.style;
                    J(e, {
                      classSetter: function (e) {
                        return function (b) {
                          this.element.setAttribute("class", b);
                          e.className = b;
                        };
                      }(v),
                      on: function on() {
                        l[0].div && m.on.apply({
                          element: l[0].div
                        }, arguments);
                        return e;
                      },
                      translateXSetter: b,
                      translateYSetter: b
                    });
                    e.addedSetters || h(e);
                  });
                }
              } else v = p;

              v.appendChild(b);
              m.added = !0;
              m.alignOnAdd && m.htmlUpdateTransform();
              return m;
            });
            return m;
          }
        });
      });
      Q(A, "parts/Tick.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.clamp,
            q = f.correctFloat,
            M = f.defined,
            K = f.destroyObjectProperties,
            J = f.extend,
            L = f.fireEvent,
            x = f.isNumber,
            F = f.merge,
            H = f.objectEach,
            C = f.pick,
            D = d.deg2rad;

        f = function () {
          function d(n, t, d, m, b) {
            this.isNewLabel = this.isNew = !0;
            this.axis = n;
            this.pos = t;
            this.type = d || "";
            this.parameters = b || {};
            this.tickmarkOffset = this.parameters.tickmarkOffset;
            this.options = this.parameters.options;
            L(this, "init");
            d || m || this.addLabel();
          }

          d.prototype.addLabel = function () {
            var n = this,
                t = n.axis,
                d = t.options,
                m = t.chart,
                b = t.categories,
                g = t.logarithmic,
                v = t.names,
                h = n.pos,
                e = C(n.options && n.options.labels, d.labels),
                p = t.tickPositions,
                l = h === p[0],
                I = h === p[p.length - 1];
            v = this.parameters.category || (b ? C(b[h], v[h], h) : h);
            var u = n.label;
            b = (!e.step || 1 === e.step) && 1 === t.tickInterval;
            p = p.info;
            var y, G;

            if (t.dateTime && p) {
              var f = m.time.resolveDTLFormat(d.dateTimeLabelFormats[!d.grid && p.higherRanks[h] || p.unitName]);
              var w = f.main;
            }

            n.isFirst = l;
            n.isLast = I;
            n.formatCtx = {
              axis: t,
              chart: m,
              isFirst: l,
              isLast: I,
              dateTimeLabelFormat: w,
              tickPositionInfo: p,
              value: g ? q(g.lin2log(v)) : v,
              pos: h
            };
            d = t.labelFormatter.call(n.formatCtx, this.formatCtx);
            if (G = f && f.list) n.shortenLabel = function () {
              for (y = 0; y < G.length; y++) {
                if (u.attr({
                  text: t.labelFormatter.call(J(n.formatCtx, {
                    dateTimeLabelFormat: G[y]
                  }))
                }), u.getBBox().width < t.getSlotWidth(n) - 2 * C(e.padding, 5)) return;
              }

              u.attr({
                text: ""
              });
            };
            b && t._addedPlotLB && t.isXAxis && n.moveLabel(d, e);
            M(u) || n.movedLabel ? u && u.textStr !== d && !b && (!u.textWidth || e.style && e.style.width || u.styles.width || u.css({
              width: null
            }), u.attr({
              text: d
            }), u.textPxLength = u.getBBox().width) : (n.label = u = n.createLabel({
              x: 0,
              y: 0
            }, d, e), n.rotation = 0);
          };

          d.prototype.createLabel = function (n, t, d) {
            var m = this.axis,
                b = m.chart;
            if (n = M(t) && d.enabled ? b.renderer.text(t, n.x, n.y, d.useHTML).add(m.labelGroup) : null) b.styledMode || n.css(F(d.style)), n.textPxLength = n.getBBox().width;
            return n;
          };

          d.prototype.destroy = function () {
            K(this, this.axis);
          };

          d.prototype.getPosition = function (n, t, d, m) {
            var b = this.axis,
                g = b.chart,
                v = m && g.oldChartHeight || g.chartHeight;
            n = {
              x: n ? q(b.translate(t + d, null, null, m) + b.transB) : b.left + b.offset + (b.opposite ? (m && g.oldChartWidth || g.chartWidth) - b.right - b.left : 0),
              y: n ? v - b.bottom + b.offset - (b.opposite ? b.height : 0) : q(v - b.translate(t + d, null, null, m) - b.transB)
            };
            n.y = E(n.y, -1E5, 1E5);
            L(this, "afterGetPosition", {
              pos: n
            });
            return n;
          };

          d.prototype.getLabelPosition = function (n, t, d, m, b, g, v, h) {
            var e = this.axis,
                p = e.transA,
                l = e.isLinked && e.linkedParent ? e.linkedParent.reversed : e.reversed,
                I = e.staggerLines,
                u = e.tickRotCorr || {
              x: 0,
              y: 0
            },
                y = b.y,
                G = m || e.reserveSpaceDefault ? 0 : -e.labelOffset * ("center" === e.labelAlign ? .5 : 1),
                f = {};
            M(y) || (y = 0 === e.side ? d.rotation ? -8 : -d.getBBox().height : 2 === e.side ? u.y + 8 : Math.cos(d.rotation * D) * (u.y - d.getBBox(!1, 0).height / 2));
            n = n + b.x + G + u.x - (g && m ? g * p * (l ? -1 : 1) : 0);
            t = t + y - (g && !m ? g * p * (l ? 1 : -1) : 0);
            I && (d = v / (h || 1) % I, e.opposite && (d = I - d - 1), t += e.labelOffset / I * d);
            f.x = n;
            f.y = Math.round(t);
            L(this, "afterGetLabelPosition", {
              pos: f,
              tickmarkOffset: g,
              index: v
            });
            return f;
          };

          d.prototype.getLabelSize = function () {
            return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
          };

          d.prototype.getMarkPath = function (n, d, f, m, b, g) {
            return g.crispLine([["M", n, d], ["L", n + (b ? 0 : -f), d + (b ? f : 0)]], m);
          };

          d.prototype.handleOverflow = function (n) {
            var d = this.axis,
                f = d.options.labels,
                m = n.x,
                b = d.chart.chartWidth,
                g = d.chart.spacing,
                v = C(d.labelLeft, Math.min(d.pos, g[3]));
            g = C(d.labelRight, Math.max(d.isRadial ? 0 : d.pos + d.len, b - g[1]));
            var h = this.label,
                e = this.rotation,
                p = {
              left: 0,
              center: .5,
              right: 1
            }[d.labelAlign || h.attr("align")],
                l = h.getBBox().width,
                I = d.getSlotWidth(this),
                u = I,
                y = 1,
                G,
                w = {};
            if (e || "justify" !== C(f.overflow, "justify")) 0 > e && m - p * l < v ? G = Math.round(m / Math.cos(e * D) - v) : 0 < e && m + p * l > g && (G = Math.round((b - m) / Math.cos(e * D)));else if (b = m + (1 - p) * l, m - p * l < v ? u = n.x + u * (1 - p) - v : b > g && (u = g - n.x + u * p, y = -1), u = Math.min(I, u), u < I && "center" === d.labelAlign && (n.x += y * (I - u - p * (I - Math.min(l, u)))), l > u || d.autoRotation && (h.styles || {}).width) G = u;
            G && (this.shortenLabel ? this.shortenLabel() : (w.width = Math.floor(G) + "px", (f.style || {}).textOverflow || (w.textOverflow = "ellipsis"), h.css(w)));
          };

          d.prototype.moveLabel = function (n, d) {
            var t = this,
                m = t.label,
                b = !1,
                g = t.axis,
                v = g.reversed,
                h = g.chart.inverted;
            m && m.textStr === n ? (t.movedLabel = m, b = !0, delete t.label) : H(g.ticks, function (e) {
              b || e.isNew || e === t || !e.label || e.label.textStr !== n || (t.movedLabel = e.label, b = !0, e.labelPos = t.movedLabel.xy, delete e.label);
            });

            if (!b && (t.labelPos || m)) {
              var e = t.labelPos || m.xy;
              m = h ? e.x : v ? 0 : g.width + g.left;
              g = h ? v ? g.width + g.left : 0 : e.y;
              t.movedLabel = t.createLabel({
                x: m,
                y: g
              }, n, d);
              t.movedLabel && t.movedLabel.attr({
                opacity: 0
              });
            }
          };

          d.prototype.render = function (n, d, f) {
            var m = this.axis,
                b = m.horiz,
                g = this.pos,
                v = C(this.tickmarkOffset, m.tickmarkOffset);
            g = this.getPosition(b, g, v, d);
            v = g.x;
            var h = g.y;
            m = b && v === m.pos + m.len || !b && h === m.pos ? -1 : 1;
            f = C(f, 1);
            this.isActive = !0;
            this.renderGridLine(d, f, m);
            this.renderMark(g, f, m);
            this.renderLabel(g, d, f, n);
            this.isNew = !1;
            L(this, "afterRender");
          };

          d.prototype.renderGridLine = function (n, d, f) {
            var m = this.axis,
                b = m.options,
                g = this.gridLine,
                v = {},
                h = this.pos,
                e = this.type,
                p = C(this.tickmarkOffset, m.tickmarkOffset),
                l = m.chart.renderer,
                I = e ? e + "Grid" : "grid",
                u = b[I + "LineWidth"],
                y = b[I + "LineColor"];
            b = b[I + "LineDashStyle"];
            g || (m.chart.styledMode || (v.stroke = y, v["stroke-width"] = u, b && (v.dashstyle = b)), e || (v.zIndex = 1), n && (d = 0), this.gridLine = g = l.path().attr(v).addClass("highcharts-" + (e ? e + "-" : "") + "grid-line").add(m.gridGroup));
            if (g && (f = m.getPlotLinePath({
              value: h + p,
              lineWidth: g.strokeWidth() * f,
              force: "pass",
              old: n
            }))) g[n || this.isNew ? "attr" : "animate"]({
              d: f,
              opacity: d
            });
          };

          d.prototype.renderMark = function (n, d, f) {
            var m = this.axis,
                b = m.options,
                g = m.chart.renderer,
                v = this.type,
                h = v ? v + "Tick" : "tick",
                e = m.tickSize(h),
                p = this.mark,
                l = !p,
                I = n.x;
            n = n.y;
            var u = C(b[h + "Width"], !v && m.isXAxis ? 1 : 0);
            b = b[h + "Color"];
            e && (m.opposite && (e[0] = -e[0]), l && (this.mark = p = g.path().addClass("highcharts-" + (v ? v + "-" : "") + "tick").add(m.axisGroup), m.chart.styledMode || p.attr({
              stroke: b,
              "stroke-width": u
            })), p[l ? "attr" : "animate"]({
              d: this.getMarkPath(I, n, e[0], p.strokeWidth() * f, m.horiz, g),
              opacity: d
            }));
          };

          d.prototype.renderLabel = function (n, d, f, m) {
            var b = this.axis,
                g = b.horiz,
                v = b.options,
                h = this.label,
                e = v.labels,
                p = e.step;
            b = C(this.tickmarkOffset, b.tickmarkOffset);
            var l = !0,
                I = n.x;
            n = n.y;
            h && x(I) && (h.xy = n = this.getLabelPosition(I, n, h, g, e, b, m, p), this.isFirst && !this.isLast && !C(v.showFirstLabel, 1) || this.isLast && !this.isFirst && !C(v.showLastLabel, 1) ? l = !1 : !g || e.step || e.rotation || d || 0 === f || this.handleOverflow(n), p && m % p && (l = !1), l && x(n.y) ? (n.opacity = f, h[this.isNewLabel ? "attr" : "animate"](n), this.isNewLabel = !1) : (h.attr("y", -9999), this.isNewLabel = !0));
          };

          d.prototype.replaceMovedLabel = function () {
            var n = this.label,
                d = this.axis,
                f = d.reversed,
                m = this.axis.chart.inverted;

            if (n && !this.isNew) {
              var b = m ? n.xy.x : f ? d.left : d.width + d.left;
              f = m ? f ? d.width + d.top : d.top : n.xy.y;
              n.animate({
                x: b,
                y: f,
                opacity: 0
              }, void 0, n.destroy);
              delete this.label;
            }

            d.isDirty = !0;
            this.label = this.movedLabel;
            delete this.movedLabel;
          };

          return d;
        }();

        d.Tick = f;
        return d.Tick;
      });
      Q(A, "parts/Time.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.defined,
            q = f.error,
            M = f.extend,
            K = f.isObject,
            J = f.merge,
            L = f.objectEach,
            x = f.pad,
            F = f.pick,
            H = f.splat,
            C = f.timeUnits,
            D = d.win;

        f = function () {
          function f(d) {
            this.options = {};
            this.variableTimezone = this.useUTC = !1;
            this.Date = D.Date;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.update(d);
          }

          f.prototype.get = function (d, t) {
            if (this.variableTimezone || this.timezoneOffset) {
              var n = t.getTime(),
                  m = n - this.getTimezoneOffset(t);
              t.setTime(m);
              d = t["getUTC" + d]();
              t.setTime(n);
              return d;
            }

            return this.useUTC ? t["getUTC" + d]() : t["get" + d]();
          };

          f.prototype.set = function (d, t, f) {
            if (this.variableTimezone || this.timezoneOffset) {
              if ("Milliseconds" === d || "Seconds" === d || "Minutes" === d) return t["setUTC" + d](f);
              var m = this.getTimezoneOffset(t);
              m = t.getTime() - m;
              t.setTime(m);
              t["setUTC" + d](f);
              d = this.getTimezoneOffset(t);
              m = t.getTime() + d;
              return t.setTime(m);
            }

            return this.useUTC ? t["setUTC" + d](f) : t["set" + d](f);
          };

          f.prototype.update = function (d) {
            var n = F(d && d.useUTC, !0);
            this.options = d = J(!0, this.options || {}, d);
            this.Date = d.Date || D.Date || Date;
            this.timezoneOffset = (this.useUTC = n) && d.timezoneOffset;
            this.getTimezoneOffset = this.timezoneOffsetFunction();
            this.variableTimezone = !(n && !d.getTimezoneOffset && !d.timezone);
          };

          f.prototype.makeTime = function (n, f, w, m, b, g) {
            if (this.useUTC) {
              var v = this.Date.UTC.apply(0, arguments);
              var h = this.getTimezoneOffset(v);
              v += h;
              var e = this.getTimezoneOffset(v);
              h !== e ? v += e - h : h - 36E5 !== this.getTimezoneOffset(v - 36E5) || d.isSafari || (v -= 36E5);
            } else v = new this.Date(n, f, F(w, 1), F(m, 0), F(b, 0), F(g, 0)).getTime();

            return v;
          };

          f.prototype.timezoneOffsetFunction = function () {
            var d = this,
                f = this.options,
                w = D.moment;
            if (!this.useUTC) return function (m) {
              return 6E4 * new Date(m.toString()).getTimezoneOffset();
            };

            if (f.timezone) {
              if (w) return function (m) {
                return 6E4 * -w.tz(m, f.timezone).utcOffset();
              };
              q(25);
            }

            return this.useUTC && f.getTimezoneOffset ? function (m) {
              return 6E4 * f.getTimezoneOffset(m.valueOf());
            } : function () {
              return 6E4 * (d.timezoneOffset || 0);
            };
          };

          f.prototype.dateFormat = function (n, f, w) {
            var m;
            if (!E(f) || isNaN(f)) return (null === (m = d.defaultOptions.lang) || void 0 === m ? void 0 : m.invalidDate) || "";
            n = F(n, "%Y-%m-%d %H:%M:%S");
            var b = this;
            m = new this.Date(f);
            var g = this.get("Hours", m),
                v = this.get("Day", m),
                h = this.get("Date", m),
                e = this.get("Month", m),
                p = this.get("FullYear", m),
                l = d.defaultOptions.lang,
                I = null === l || void 0 === l ? void 0 : l.weekdays,
                u = null === l || void 0 === l ? void 0 : l.shortWeekdays;
            m = M({
              a: u ? u[v] : I[v].substr(0, 3),
              A: I[v],
              d: x(h),
              e: x(h, 2, " "),
              w: v,
              b: l.shortMonths[e],
              B: l.months[e],
              m: x(e + 1),
              o: e + 1,
              y: p.toString().substr(2, 2),
              Y: p,
              H: x(g),
              k: g,
              I: x(g % 12 || 12),
              l: g % 12 || 12,
              M: x(this.get("Minutes", m)),
              p: 12 > g ? "AM" : "PM",
              P: 12 > g ? "am" : "pm",
              S: x(m.getSeconds()),
              L: x(Math.floor(f % 1E3), 3)
            }, d.dateFormats);
            L(m, function (e, l) {
              for (; -1 !== n.indexOf("%" + l);) {
                n = n.replace("%" + l, "function" === typeof e ? e.call(b, f) : e);
              }
            });
            return w ? n.substr(0, 1).toUpperCase() + n.substr(1) : n;
          };

          f.prototype.resolveDTLFormat = function (d) {
            return K(d, !0) ? d : (d = H(d), {
              main: d[0],
              from: d[1],
              to: d[2]
            });
          };

          f.prototype.getTimeTicks = function (d, f, w, m) {
            var b = this,
                g = [],
                v = {};
            var h = new b.Date(f);
            var e = d.unitRange,
                p = d.count || 1,
                l;
            m = F(m, 1);

            if (E(f)) {
              b.set("Milliseconds", h, e >= C.second ? 0 : p * Math.floor(b.get("Milliseconds", h) / p));
              e >= C.second && b.set("Seconds", h, e >= C.minute ? 0 : p * Math.floor(b.get("Seconds", h) / p));
              e >= C.minute && b.set("Minutes", h, e >= C.hour ? 0 : p * Math.floor(b.get("Minutes", h) / p));
              e >= C.hour && b.set("Hours", h, e >= C.day ? 0 : p * Math.floor(b.get("Hours", h) / p));
              e >= C.day && b.set("Date", h, e >= C.month ? 1 : Math.max(1, p * Math.floor(b.get("Date", h) / p)));

              if (e >= C.month) {
                b.set("Month", h, e >= C.year ? 0 : p * Math.floor(b.get("Month", h) / p));
                var n = b.get("FullYear", h);
              }

              e >= C.year && b.set("FullYear", h, n - n % p);
              e === C.week && (n = b.get("Day", h), b.set("Date", h, b.get("Date", h) - n + m + (n < m ? -7 : 0)));
              n = b.get("FullYear", h);
              m = b.get("Month", h);
              var u = b.get("Date", h),
                  y = b.get("Hours", h);
              f = h.getTime();
              b.variableTimezone && (l = w - f > 4 * C.month || b.getTimezoneOffset(f) !== b.getTimezoneOffset(w));
              f = h.getTime();

              for (h = 1; f < w;) {
                g.push(f), f = e === C.year ? b.makeTime(n + h * p, 0) : e === C.month ? b.makeTime(n, m + h * p) : !l || e !== C.day && e !== C.week ? l && e === C.hour && 1 < p ? b.makeTime(n, m, u, y + h * p) : f + e * p : b.makeTime(n, m, u + h * p * (e === C.day ? 1 : 7)), h++;
              }

              g.push(f);
              e <= C.hour && 1E4 > g.length && g.forEach(function (e) {
                0 === e % 18E5 && "000000000" === b.dateFormat("%H%M%S%L", e) && (v[e] = "day");
              });
            }

            g.info = M(d, {
              higherRanks: v,
              totalRange: e * p
            });
            return g;
          };

          f.defaultOptions = {
            Date: void 0,
            getTimezoneOffset: void 0,
            timezone: void 0,
            timezoneOffset: 0,
            useUTC: !0
          };
          return f;
        }();

        d.Time = f;
        return d.Time;
      });
      Q(A, "parts/Options.js", [A["parts/Globals.js"], A["parts/Time.js"], A["parts/Color.js"], A["parts/Utilities.js"]], function (d, f, E, q) {
        E = E.parse;
        var M = q.merge;
        d.defaultOptions = {
          colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
          symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
          lang: {
            loading: "Loading...",
            months: "January February March April May June July August September October November December".split(" "),
            shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            decimalPoint: ".",
            numericSymbols: "kMGTPE".split(""),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: " "
          },
          global: {},
          time: f.defaultOptions,
          chart: {
            styledMode: !1,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [10, 10, 15, 10],
            resetZoomButton: {
              theme: {
                zIndex: 6
              },
              position: {
                align: "right",
                x: -10,
                y: 10
              }
            },
            width: null,
            height: null,
            borderColor: "#335cad",
            backgroundColor: "#ffffff",
            plotBorderColor: "#cccccc"
          },
          title: {
            text: "Chart title",
            align: "center",
            margin: 15,
            widthAdjust: -44
          },
          subtitle: {
            text: "",
            align: "center",
            widthAdjust: -44
          },
          caption: {
            margin: 15,
            text: "",
            align: "left",
            verticalAlign: "bottom"
          },
          plotOptions: {},
          labels: {
            style: {
              position: "absolute",
              color: "#333333"
            }
          },
          legend: {
            enabled: !0,
            align: "center",
            alignColumns: !0,
            layout: "horizontal",
            labelFormatter: function labelFormatter() {
              return this.name;
            },
            borderColor: "#999999",
            borderRadius: 0,
            navigation: {
              activeColor: "#003399",
              inactiveColor: "#cccccc"
            },
            itemStyle: {
              color: "#333333",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              textOverflow: "ellipsis"
            },
            itemHoverStyle: {
              color: "#000000"
            },
            itemHiddenStyle: {
              color: "#cccccc"
            },
            shadow: !1,
            itemCheckboxStyle: {
              position: "absolute",
              width: "13px",
              height: "13px"
            },
            squareSymbol: !0,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0,
            title: {
              style: {
                fontWeight: "bold"
              }
            }
          },
          loading: {
            labelStyle: {
              fontWeight: "bold",
              position: "relative",
              top: "45%"
            },
            style: {
              position: "absolute",
              backgroundColor: "#ffffff",
              opacity: .5,
              textAlign: "center"
            }
          },
          tooltip: {
            enabled: !0,
            animation: d.svg,
            borderRadius: 3,
            dateTimeLabelFormats: {
              millisecond: "%A, %b %e, %H:%M:%S.%L",
              second: "%A, %b %e, %H:%M:%S",
              minute: "%A, %b %e, %H:%M",
              hour: "%A, %b %e, %H:%M",
              day: "%A, %b %e, %Y",
              week: "Week from %A, %b %e, %Y",
              month: "%B %Y",
              year: "%Y"
            },
            footerFormat: "",
            padding: 8,
            snap: d.isTouchDevice ? 25 : 10,
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
            backgroundColor: E("#f7f7f7").setOpacity(.85).get(),
            borderWidth: 1,
            shadow: !0,
            style: {
              color: "#333333",
              cursor: "default",
              fontSize: "12px",
              whiteSpace: "nowrap"
            }
          },
          credits: {
            enabled: !0,
            href: "https://www.highcharts.com?credits",
            position: {
              align: "right",
              x: -10,
              verticalAlign: "bottom",
              y: -5
            },
            style: {
              cursor: "pointer",
              color: "#999999",
              fontSize: "9px"
            },
            text: "Highcharts.com"
          }
        };

        d.setOptions = function (f) {
          d.defaultOptions = M(!0, d.defaultOptions, f);
          (f.time || f.global) && d.time.update(M(d.defaultOptions.global, d.defaultOptions.time, f.global, f.time));
          return d.defaultOptions;
        };

        d.getOptions = function () {
          return d.defaultOptions;
        };

        d.defaultPlotOptions = d.defaultOptions.plotOptions;
        d.time = new f(M(d.defaultOptions.global, d.defaultOptions.time));

        d.dateFormat = function (f, q, L) {
          return d.time.dateFormat(f, q, L);
        };

        "";
      });
      Q(A, "parts/Axis.js", [A["parts/Color.js"], A["parts/Globals.js"], A["parts/Tick.js"], A["parts/Utilities.js"]], function (d, f, E, q) {
        var M = q.addEvent,
            K = q.animObject,
            J = q.arrayMax,
            L = q.arrayMin,
            x = q.clamp,
            F = q.correctFloat,
            H = q.defined,
            C = q.destroyObjectProperties,
            D = q.error,
            w = q.extend,
            n = q.fireEvent,
            t = q.format,
            N = q.getMagnitude,
            m = q.isArray,
            b = q.isFunction,
            g = q.isNumber,
            v = q.isString,
            h = q.merge,
            e = q.normalizeTickInterval,
            p = q.objectEach,
            l = q.pick,
            I = q.relativeLength,
            u = q.removeEvent,
            y = q.splat,
            G = q.syncTimeout,
            S = f.defaultOptions,
            R = f.deg2rad;

        q = function () {
          function B(c, a) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.oldMin = this.oldMax = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
            this.init(c, a);
          }

          B.prototype.init = function (c, a) {
            var k = a.isX,
                e = this;
            e.chart = c;
            e.horiz = c.inverted && !e.isZAxis ? !k : k;
            e.isXAxis = k;
            e.coll = e.coll || (k ? "xAxis" : "yAxis");
            n(this, "init", {
              userOptions: a
            });
            e.opposite = a.opposite;
            e.side = a.side || (e.horiz ? e.opposite ? 0 : 2 : e.opposite ? 1 : 3);
            e.setOptions(a);
            var g = this.options,
                h = g.type;
            e.labelFormatter = g.labels.formatter || e.defaultLabelFormatter;
            e.userOptions = a;
            e.minPixelPadding = 0;
            e.reversed = g.reversed;
            e.visible = !1 !== g.visible;
            e.zoomEnabled = !1 !== g.zoomEnabled;
            e.hasNames = "category" === h || !0 === g.categories;
            e.categories = g.categories || e.hasNames;
            e.names || (e.names = [], e.names.keys = {});
            e.plotLinesAndBandsGroups = {};
            e.positiveValuesOnly = !(!e.logarithmic || g.allowNegativeLog);
            e.isLinked = H(g.linkedTo);
            e.ticks = {};
            e.labelEdge = [];
            e.minorTicks = {};
            e.plotLinesAndBands = [];
            e.alternateBands = {};
            e.len = 0;
            e.minRange = e.userMinRange = g.minRange || g.maxZoom;
            e.range = g.range;
            e.offset = g.offset || 0;
            e.max = null;
            e.min = null;
            e.crosshair = l(g.crosshair, y(c.options.tooltip.crosshairs)[k ? 0 : 1], !1);
            a = e.options.events;
            -1 === c.axes.indexOf(e) && (k ? c.axes.splice(c.xAxis.length, 0, e) : c.axes.push(e), c[e.coll].push(e));
            e.series = e.series || [];
            c.inverted && !e.isZAxis && k && "undefined" === typeof e.reversed && (e.reversed = !0);
            e.labelRotation = e.options.labels.rotation;
            p(a, function (a, c) {
              b(a) && M(e, c, a);
            });
            n(this, "afterInit");
          };

          B.prototype.setOptions = function (c) {
            this.options = h(B.defaultOptions, "yAxis" === this.coll && B.defaultYAxisOptions, [B.defaultTopAxisOptions, B.defaultRightAxisOptions, B.defaultBottomAxisOptions, B.defaultLeftAxisOptions][this.side], h(S[this.coll], c));
            n(this, "afterSetOptions", {
              userOptions: c
            });
          };

          B.prototype.defaultLabelFormatter = function () {
            var c = this.axis,
                a = this.value,
                k = c.chart.time,
                e = c.categories,
                b = this.dateTimeLabelFormat,
                l = S.lang,
                g = l.numericSymbols;
            l = l.numericSymbolMagnitude || 1E3;
            var h = g && g.length,
                p = c.options.labels.format;
            c = c.logarithmic ? Math.abs(a) : c.tickInterval;
            var m = this.chart,
                u = m.numberFormatter;
            if (p) var v = t(p, this, m);else if (e) v = a;else if (b) v = k.dateFormat(b, a);else if (h && 1E3 <= c) for (; h-- && "undefined" === typeof v;) {
              k = Math.pow(l, h + 1), c >= k && 0 === 10 * a % k && null !== g[h] && 0 !== a && (v = u(a / k, -1) + g[h]);
            }
            "undefined" === typeof v && (v = 1E4 <= Math.abs(a) ? u(a, -1) : u(a, -1, void 0, ""));
            return v;
          };

          B.prototype.getSeriesExtremes = function () {
            var c = this,
                a = c.chart,
                k;
            n(this, "getSeriesExtremes", null, function () {
              c.hasVisibleSeries = !1;
              c.dataMin = c.dataMax = c.threshold = null;
              c.softThreshold = !c.isXAxis;
              c.stacking && c.stacking.buildStacks();
              c.series.forEach(function (e) {
                if (e.visible || !a.options.chart.ignoreHiddenSeries) {
                  var b = e.options,
                      r = b.threshold;
                  c.hasVisibleSeries = !0;
                  c.positiveValuesOnly && 0 >= r && (r = null);

                  if (c.isXAxis) {
                    if (b = e.xData, b.length) {
                      k = e.getXExtremes(b);
                      var h = k.min;
                      var p = k.max;
                      g(h) || h instanceof Date || (b = b.filter(g), k = e.getXExtremes(b), h = k.min, p = k.max);
                      b.length && (c.dataMin = Math.min(l(c.dataMin, h), h), c.dataMax = Math.max(l(c.dataMax, p), p));
                    }
                  } else if (e = e.applyExtremes(), g(e.dataMin) && (h = e.dataMin, c.dataMin = Math.min(l(c.dataMin, h), h)), g(e.dataMax) && (p = e.dataMax, c.dataMax = Math.max(l(c.dataMax, p), p)), H(r) && (c.threshold = r), !b.softThreshold || c.positiveValuesOnly) c.softThreshold = !1;
                }
              });
            });
            n(this, "afterGetSeriesExtremes");
          };

          B.prototype.translate = function (c, a, k, e, b, l) {
            var r = this.linkedParent || this,
                h = 1,
                p = 0,
                z = e ? r.oldTransA : r.transA;
            e = e ? r.oldMin : r.min;
            var m = r.minPixelPadding;
            b = (r.isOrdinal || r.brokenAxis && r.brokenAxis.hasBreaks || r.logarithmic && b) && r.lin2val;
            z || (z = r.transA);
            k && (h *= -1, p = r.len);
            r.reversed && (h *= -1, p -= h * (r.sector || r.len));
            a ? (c = (c * h + p - m) / z + e, b && (c = r.lin2val(c))) : (b && (c = r.val2lin(c)), c = g(e) ? h * (c - e) * z + p + h * m + (g(l) ? z * l : 0) : void 0);
            return c;
          };

          B.prototype.toPixels = function (c, a) {
            return this.translate(c, !1, !this.horiz, null, !0) + (a ? 0 : this.pos);
          };

          B.prototype.toValue = function (c, a) {
            return this.translate(c - (a ? 0 : this.pos), !0, !this.horiz, null, !0);
          };

          B.prototype.getPlotLinePath = function (c) {
            function a(a, c, k) {
              if ("pass" !== d && a < c || a > k) d ? a = x(a, c, k) : B = !0;
              return a;
            }

            var k = this,
                e = k.chart,
                b = k.left,
                h = k.top,
                p = c.old,
                m = c.value,
                u = c.translatedValue,
                v = c.lineWidth,
                d = c.force,
                y,
                O,
                f,
                I,
                G = p && e.oldChartHeight || e.chartHeight,
                t = p && e.oldChartWidth || e.chartWidth,
                B,
                w = k.transB;
            c = {
              value: m,
              lineWidth: v,
              old: p,
              force: d,
              acrossPanes: c.acrossPanes,
              translatedValue: u
            };
            n(this, "getPlotLinePath", c, function (c) {
              u = l(u, k.translate(m, null, null, p));
              u = x(u, -1E5, 1E5);
              y = f = Math.round(u + w);
              O = I = Math.round(G - u - w);
              g(u) ? k.horiz ? (O = h, I = G - k.bottom, y = f = a(y, b, b + k.width)) : (y = b, f = t - k.right, O = I = a(O, h, h + k.height)) : (B = !0, d = !1);
              c.path = B && !d ? null : e.renderer.crispLine([["M", y, O], ["L", f, I]], v || 1);
            });
            return c.path;
          };

          B.prototype.getLinearTickPositions = function (c, a, k) {
            var e = F(Math.floor(a / c) * c);
            k = F(Math.ceil(k / c) * c);
            var b = [],
                l;
            F(e + c) === e && (l = 20);
            if (this.single) return [a];

            for (a = e; a <= k;) {
              b.push(a);
              a = F(a + c, l);
              if (a === g) break;
              var g = a;
            }

            return b;
          };

          B.prototype.getMinorTickInterval = function () {
            var c = this.options;
            return !0 === c.minorTicks ? l(c.minorTickInterval, "auto") : !1 === c.minorTicks ? null : c.minorTickInterval;
          };

          B.prototype.getMinorTickPositions = function () {
            var c = this.options,
                a = this.tickPositions,
                k = this.minorTickInterval,
                e = [],
                b = this.pointRangePadding || 0,
                l = this.min - b;
            b = this.max + b;
            var g = b - l;

            if (g && g / k < this.len / 3) {
              var h = this.logarithmic;
              if (h) this.paddedTicks.forEach(function (a, c, b) {
                c && e.push.apply(e, h.getLogTickPositions(k, b[c - 1], b[c], !0));
              });else if (this.dateTime && "auto" === this.getMinorTickInterval()) e = e.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(k), l, b, c.startOfWeek));else for (c = l + (a[0] - l) % k; c <= b && c !== e[0]; c += k) {
                e.push(c);
              }
            }

            0 !== e.length && this.trimTicks(e);
            return e;
          };

          B.prototype.adjustForMinRange = function () {
            var c = this.options,
                a = this.min,
                k = this.max,
                e = this.logarithmic,
                b,
                g,
                h,
                p,
                u;
            this.isXAxis && "undefined" === typeof this.minRange && !e && (H(c.min) || H(c.max) ? this.minRange = null : (this.series.forEach(function (a) {
              p = a.xData;

              for (g = u = a.xIncrement ? 1 : p.length - 1; 0 < g; g--) {
                if (h = p[g] - p[g - 1], "undefined" === typeof b || h < b) b = h;
              }
            }), this.minRange = Math.min(5 * b, this.dataMax - this.dataMin)));

            if (k - a < this.minRange) {
              var m = this.dataMax - this.dataMin >= this.minRange;
              var v = this.minRange;
              var d = (v - k + a) / 2;
              d = [a - d, l(c.min, a - d)];
              m && (d[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
              a = J(d);
              k = [a + v, l(c.max, a + v)];
              m && (k[2] = e ? e.log2lin(this.dataMax) : this.dataMax);
              k = L(k);
              k - a < v && (d[0] = k - v, d[1] = l(c.min, k - v), a = J(d));
            }

            this.min = a;
            this.max = k;
          };

          B.prototype.getClosest = function () {
            var c;
            this.categories ? c = 1 : this.series.forEach(function (a) {
              var k = a.closestPointRange,
                  e = a.visible || !a.chart.options.chart.ignoreHiddenSeries;
              !a.noSharedTooltip && H(k) && e && (c = H(c) ? Math.min(c, k) : k);
            });
            return c;
          };

          B.prototype.nameToX = function (c) {
            var a = m(this.categories),
                k = a ? this.categories : this.names,
                e = c.options.x;
            c.series.requireSorting = !1;
            H(e) || (e = !1 === this.options.uniqueNames ? c.series.autoIncrement() : a ? k.indexOf(c.name) : l(k.keys[c.name], -1));

            if (-1 === e) {
              if (!a) var b = k.length;
            } else b = e;

            "undefined" !== typeof b && (this.names[b] = c.name, this.names.keys[c.name] = b);
            return b;
          };

          B.prototype.updateNames = function () {
            var c = this,
                a = this.names;
            0 < a.length && (Object.keys(a.keys).forEach(function (c) {
              delete a.keys[c];
            }), a.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (a) {
              a.xIncrement = null;
              if (!a.points || a.isDirtyData) c.max = Math.max(c.max, a.xData.length - 1), a.processData(), a.generatePoints();
              a.data.forEach(function (e, k) {
                if (e && e.options && "undefined" !== typeof e.name) {
                  var b = c.nameToX(e);
                  "undefined" !== typeof b && b !== e.x && (e.x = b, a.xData[k] = b);
                }
              });
            }));
          };

          B.prototype.setAxisTranslation = function (c) {
            var a = this,
                e = a.max - a.min,
                b = a.axisPointRange || 0,
                g = 0,
                h = 0,
                p = a.linkedParent,
                m = !!a.categories,
                u = a.transA,
                d = a.isXAxis;

            if (d || m || b) {
              var y = a.getClosest();
              p ? (g = p.minPointOffset, h = p.pointRangePadding) : a.series.forEach(function (c) {
                var e = m ? 1 : d ? l(c.options.pointRange, y, 0) : a.axisPointRange || 0,
                    k = c.options.pointPlacement;
                b = Math.max(b, e);
                if (!a.single || m) c = c.is("xrange") ? !d : d, g = Math.max(g, c && v(k) ? 0 : e / 2), h = Math.max(h, c && "on" === k ? 0 : e);
              });
              p = a.ordinal && a.ordinal.slope && y ? a.ordinal.slope / y : 1;
              a.minPointOffset = g *= p;
              a.pointRangePadding = h *= p;
              a.pointRange = Math.min(b, a.single && m ? 1 : e);
              d && (a.closestPointRange = y);
            }

            c && (a.oldTransA = u);
            a.translationSlope = a.transA = u = a.staticScale || a.len / (e + h || 1);
            a.transB = a.horiz ? a.left : a.bottom;
            a.minPixelPadding = u * g;
            n(this, "afterSetAxisTranslation");
          };

          B.prototype.minFromRange = function () {
            return this.max - this.range;
          };

          B.prototype.setTickInterval = function (c) {
            var a = this,
                k = a.chart,
                b = a.logarithmic,
                h = a.options,
                p = a.isXAxis,
                m = a.isLinked,
                u = h.maxPadding,
                v = h.minPadding,
                d = h.tickInterval,
                y = h.tickPixelInterval,
                f = a.categories,
                O = g(a.threshold) ? a.threshold : null,
                I = a.softThreshold;
            a.dateTime || f || m || this.getTickAmount();
            var G = l(a.userMin, h.min);
            var t = l(a.userMax, h.max);

            if (m) {
              a.linkedParent = k[a.coll][h.linkedTo];
              var B = a.linkedParent.getExtremes();
              a.min = l(B.min, B.dataMin);
              a.max = l(B.max, B.dataMax);
              h.type !== a.linkedParent.options.type && D(11, 1, k);
            } else {
              if (!I && H(O)) if (a.dataMin >= O) B = O, v = 0;else if (a.dataMax <= O) {
                var w = O;
                u = 0;
              }
              a.min = l(G, B, a.dataMin);
              a.max = l(t, w, a.dataMax);
            }

            b && (a.positiveValuesOnly && !c && 0 >= Math.min(a.min, l(a.dataMin, a.min)) && D(10, 1, k), a.min = F(b.log2lin(a.min), 16), a.max = F(b.log2lin(a.max), 16));
            a.range && H(a.max) && (a.userMin = a.min = G = Math.max(a.dataMin, a.minFromRange()), a.userMax = t = a.max, a.range = null);
            n(a, "foundExtremes");
            a.beforePadding && a.beforePadding();
            a.adjustForMinRange();
            !(f || a.axisPointRange || a.stacking && a.stacking.usePercentage || m) && H(a.min) && H(a.max) && (k = a.max - a.min) && (!H(G) && v && (a.min -= k * v), !H(t) && u && (a.max += k * u));
            g(a.userMin) || (g(h.softMin) && h.softMin < a.min && (a.min = G = h.softMin), g(h.floor) && (a.min = Math.max(a.min, h.floor)));
            g(a.userMax) || (g(h.softMax) && h.softMax > a.max && (a.max = t = h.softMax), g(h.ceiling) && (a.max = Math.min(a.max, h.ceiling)));
            I && H(a.dataMin) && (O = O || 0, !H(G) && a.min < O && a.dataMin >= O ? a.min = a.options.minRange ? Math.min(O, a.max - a.minRange) : O : !H(t) && a.max > O && a.dataMax <= O && (a.max = a.options.minRange ? Math.max(O, a.min + a.minRange) : O));
            a.tickInterval = a.min === a.max || "undefined" === typeof a.min || "undefined" === typeof a.max ? 1 : m && !d && y === a.linkedParent.options.tickPixelInterval ? d = a.linkedParent.tickInterval : l(d, this.tickAmount ? (a.max - a.min) / Math.max(this.tickAmount - 1, 1) : void 0, f ? 1 : (a.max - a.min) * y / Math.max(a.len, y));
            p && !c && a.series.forEach(function (c) {
              c.processData(a.min !== a.oldMin || a.max !== a.oldMax);
            });
            a.setAxisTranslation(!0);
            a.beforeSetTickPositions && a.beforeSetTickPositions();
            a.ordinal && (a.tickInterval = a.ordinal.postProcessTickInterval(a.tickInterval));
            a.pointRange && !d && (a.tickInterval = Math.max(a.pointRange, a.tickInterval));
            c = l(h.minTickInterval, a.dateTime && a.closestPointRange);
            !d && a.tickInterval < c && (a.tickInterval = c);
            a.dateTime || a.logarithmic || d || (a.tickInterval = e(a.tickInterval, void 0, N(a.tickInterval), l(h.allowDecimals, .5 > a.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
            this.tickAmount || (a.tickInterval = a.unsquish());
            this.setTickPositions();
          };

          B.prototype.setTickPositions = function () {
            var c = this.options,
                a = c.tickPositions;
            var e = this.getMinorTickInterval();
            var b = c.tickPositioner,
                l = this.hasVerticalPanning(),
                g = "colorAxis" === this.coll,
                h = (g || !l) && c.startOnTick;
            l = (g || !l) && c.endOnTick;
            this.tickmarkOffset = this.categories && "between" === c.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
            this.minorTickInterval = "auto" === e && this.tickInterval ? this.tickInterval / 5 : e;
            this.single = this.min === this.max && H(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== c.allowDecimals);
            this.tickPositions = e = a && a.slice();
            !e && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? e = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, c.units), this.min, this.max, c.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (e = [this.min, this.max], D(19, !1, this.chart)), e.length > this.len && (e = [e[0], e.pop()], e[0] === e[1] && (e.length = 1)), this.tickPositions = e, b && (b = b.apply(this, [this.min, this.max]))) && (this.tickPositions = e = b);
            this.paddedTicks = e.slice(0);
            this.trimTicks(e, h, l);
            this.isLinked || (this.single && 2 > e.length && !this.categories && !this.series.some(function (a) {
              return a.is("heatmap") && "between" === a.options.pointPlacement;
            }) && (this.min -= .5, this.max += .5), a || b || this.adjustTickAmount());
            n(this, "afterSetTickPositions");
          };

          B.prototype.trimTicks = function (c, a, e) {
            var k = c[0],
                b = c[c.length - 1],
                l = !this.isOrdinal && this.minPointOffset || 0;
            n(this, "trimTicks");

            if (!this.isLinked) {
              if (a && -Infinity !== k) this.min = k;else for (; this.min - l > c[0];) {
                c.shift();
              }
              if (e) this.max = b;else for (; this.max + l < c[c.length - 1];) {
                c.pop();
              }
              0 === c.length && H(k) && !this.options.tickPositions && c.push((b + k) / 2);
            }
          };

          B.prototype.alignToOthers = function () {
            var c = {},
                a,
                e = this.options;
            !1 === this.chart.options.chart.alignTicks || !1 === e.alignTicks || !1 === e.startOnTick || !1 === e.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function (e) {
              var k = e.options;
              k = [e.horiz ? k.left : k.top, k.width, k.height, k.pane].join();
              e.series.length && (c[k] ? a = !0 : c[k] = 1);
            });
            return a;
          };

          B.prototype.getTickAmount = function () {
            var c = this.options,
                a = c.tickAmount,
                e = c.tickPixelInterval;
            !H(c.tickInterval) && !a && this.len < e && !this.isRadial && !this.logarithmic && c.startOnTick && c.endOnTick && (a = 2);
            !a && this.alignToOthers() && (a = Math.ceil(this.len / e) + 1);
            4 > a && (this.finalTickAmt = a, a = 5);
            this.tickAmount = a;
          };

          B.prototype.adjustTickAmount = function () {
            var c = this.options,
                a = this.tickInterval,
                e = this.tickPositions,
                b = this.tickAmount,
                g = this.finalTickAmt,
                h = e && e.length,
                p = l(this.threshold, this.softThreshold ? 0 : null),
                m;

            if (this.hasData()) {
              if (h < b) {
                for (m = this.min; e.length < b;) {
                  e.length % 2 || m === p ? e.push(F(e[e.length - 1] + a)) : e.unshift(F(e[0] - a));
                }

                this.transA *= (h - 1) / (b - 1);
                this.min = c.startOnTick ? e[0] : Math.min(this.min, e[0]);
                this.max = c.endOnTick ? e[e.length - 1] : Math.max(this.max, e[e.length - 1]);
              } else h > b && (this.tickInterval *= 2, this.setTickPositions());

              if (H(g)) {
                for (a = c = e.length; a--;) {
                  (3 === g && 1 === a % 2 || 2 >= g && 0 < a && a < c - 1) && e.splice(a, 1);
                }

                this.finalTickAmt = void 0;
              }
            }
          };

          B.prototype.setScale = function () {
            var c,
                a = !1,
                e = !1;
            this.series.forEach(function (c) {
              var k;
              a = a || c.isDirtyData || c.isDirty;
              e = e || (null === (k = c.xAxis) || void 0 === k ? void 0 : k.isDirty) || !1;
            });
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            (c = this.len !== this.oldAxisLength) || a || e || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = c || this.min !== this.oldMin || this.max !== this.oldMax)) : this.stacking && this.stacking.cleanStacks();
            a && this.panningState && (this.panningState.isDirty = !0);
            n(this, "afterSetScale");
          };

          B.prototype.setExtremes = function (c, a, e, b, g) {
            var k = this,
                h = k.chart;
            e = l(e, !0);
            k.series.forEach(function (a) {
              delete a.kdTree;
            });
            g = w(g, {
              min: c,
              max: a
            });
            n(k, "setExtremes", g, function () {
              k.userMin = c;
              k.userMax = a;
              k.eventArgs = g;
              e && h.redraw(b);
            });
          };

          B.prototype.zoom = function (c, a) {
            var e = this,
                b = this.dataMin,
                g = this.dataMax,
                h = this.options,
                p = Math.min(b, l(h.min, b)),
                m = Math.max(g, l(h.max, g));
            c = {
              newMin: c,
              newMax: a
            };
            n(this, "zoom", c, function (a) {
              var c = a.newMin,
                  k = a.newMax;
              if (c !== e.min || k !== e.max) e.allowZoomOutside || (H(b) && (c < p && (c = p), c > m && (c = m)), H(g) && (k < p && (k = p), k > m && (k = m))), e.displayBtn = "undefined" !== typeof c || "undefined" !== typeof k, e.setExtremes(c, k, !1, void 0, {
                trigger: "zoom"
              });
              a.zoomed = !0;
            });
            return c.zoomed;
          };

          B.prototype.setAxisSize = function () {
            var c = this.chart,
                a = this.options,
                e = a.offsets || [0, 0, 0, 0],
                b = this.horiz,
                g = this.width = Math.round(I(l(a.width, c.plotWidth - e[3] + e[1]), c.plotWidth)),
                h = this.height = Math.round(I(l(a.height, c.plotHeight - e[0] + e[2]), c.plotHeight)),
                p = this.top = Math.round(I(l(a.top, c.plotTop + e[0]), c.plotHeight, c.plotTop));
            a = this.left = Math.round(I(l(a.left, c.plotLeft + e[3]), c.plotWidth, c.plotLeft));
            this.bottom = c.chartHeight - h - p;
            this.right = c.chartWidth - g - a;
            this.len = Math.max(b ? g : h, 0);
            this.pos = b ? a : p;
          };

          B.prototype.getExtremes = function () {
            var c = this.logarithmic;
            return {
              min: c ? F(c.lin2log(this.min)) : this.min,
              max: c ? F(c.lin2log(this.max)) : this.max,
              dataMin: this.dataMin,
              dataMax: this.dataMax,
              userMin: this.userMin,
              userMax: this.userMax
            };
          };

          B.prototype.getThreshold = function (c) {
            var a = this.logarithmic,
                e = a ? a.lin2log(this.min) : this.min;
            a = a ? a.lin2log(this.max) : this.max;
            null === c || -Infinity === c ? c = e : Infinity === c ? c = a : e > c ? c = e : a < c && (c = a);
            return this.translate(c, 0, 1, 0, 1);
          };

          B.prototype.autoLabelAlign = function (c) {
            var a = (l(c, 0) - 90 * this.side + 720) % 360;
            c = {
              align: "center"
            };
            n(this, "autoLabelAlign", c, function (c) {
              15 < a && 165 > a ? c.align = "right" : 195 < a && 345 > a && (c.align = "left");
            });
            return c.align;
          };

          B.prototype.tickSize = function (c) {
            var a = this.options,
                e = a["tick" === c ? "tickLength" : "minorTickLength"],
                b = l(a["tick" === c ? "tickWidth" : "minorTickWidth"], "tick" === c && this.isXAxis && !this.categories ? 1 : 0);

            if (b && e) {
              "inside" === a[c + "Position"] && (e = -e);
              var g = [e, b];
            }

            c = {
              tickSize: g
            };
            n(this, "afterTickSize", c);
            return c.tickSize;
          };

          B.prototype.labelMetrics = function () {
            var c = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[c] && this.ticks[c].label);
          };

          B.prototype.unsquish = function () {
            var c = this.options.labels,
                a = this.horiz,
                e = this.tickInterval,
                b = e,
                g = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e),
                h,
                p = c.rotation,
                m = this.labelMetrics(),
                u,
                v = Number.MAX_VALUE,
                d,
                y = this.max - this.min,
                f = function f(a) {
              var c = a / (g || 1);
              c = 1 < c ? Math.ceil(c) : 1;
              c * e > y && Infinity !== a && Infinity !== g && y && (c = Math.ceil(y / e));
              return F(c * e);
            };

            a ? (d = !c.staggerLines && !c.step && (H(p) ? [p] : g < l(c.autoRotationLimit, 80) && c.autoRotation)) && d.forEach(function (a) {
              if (a === p || a && -90 <= a && 90 >= a) {
                u = f(Math.abs(m.h / Math.sin(R * a)));
                var c = u + Math.abs(a / 360);
                c < v && (v = c, h = a, b = u);
              }
            }) : c.step || (b = f(m.h));
            this.autoRotation = d;
            this.labelRotation = l(h, p);
            return b;
          };

          B.prototype.getSlotWidth = function (c) {
            var a,
                e = this.chart,
                b = this.horiz,
                l = this.options.labels,
                h = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                p = e.margin[3];
            if (c && g(c.slotWidth)) return c.slotWidth;
            if (b && l && 2 > (l.step || 0)) return l.rotation ? 0 : (this.staggerLines || 1) * this.len / h;

            if (!b) {
              c = null === (a = null === l || void 0 === l ? void 0 : l.style) || void 0 === a ? void 0 : a.width;
              if (void 0 !== c) return parseInt(c, 10);
              if (p) return p - e.spacing[3];
            }

            return .33 * e.chartWidth;
          };

          B.prototype.renderUnsquish = function () {
            var c = this.chart,
                a = c.renderer,
                e = this.tickPositions,
                b = this.ticks,
                l = this.options.labels,
                g = l && l.style || {},
                h = this.horiz,
                p = this.getSlotWidth(),
                m = Math.max(1, Math.round(p - 2 * (l.padding || 5))),
                u = {},
                d = this.labelMetrics(),
                y = l.style && l.style.textOverflow,
                f = 0;
            v(l.rotation) || (u.rotation = l.rotation || 0);
            e.forEach(function (a) {
              a = b[a];
              a.movedLabel && a.replaceMovedLabel();
              a && a.label && a.label.textPxLength > f && (f = a.label.textPxLength);
            });
            this.maxLabelLength = f;
            if (this.autoRotation) f > m && f > d.h ? u.rotation = this.labelRotation : this.labelRotation = 0;else if (p) {
              var n = m;

              if (!y) {
                var I = "clip";

                for (m = e.length; !h && m--;) {
                  var G = e[m];
                  if (G = b[G].label) G.styles && "ellipsis" === G.styles.textOverflow ? G.css({
                    textOverflow: "clip"
                  }) : G.textPxLength > p && G.css({
                    width: p + "px"
                  }), G.getBBox().height > this.len / e.length - (d.h - d.f) && (G.specificTextOverflow = "ellipsis");
                }
              }
            }
            u.rotation && (n = f > .5 * c.chartHeight ? .33 * c.chartHeight : f, y || (I = "ellipsis"));
            if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) u.align = this.labelAlign;
            e.forEach(function (a) {
              var c = (a = b[a]) && a.label,
                  e = g.width,
                  k = {};
              c && (c.attr(u), a.shortenLabel ? a.shortenLabel() : n && !e && "nowrap" !== g.whiteSpace && (n < c.textPxLength || "SPAN" === c.element.tagName) ? (k.width = n + "px", y || (k.textOverflow = c.specificTextOverflow || I), c.css(k)) : c.styles && c.styles.width && !k.width && !e && c.css({
                width: null
              }), delete c.specificTextOverflow, a.rotation = u.rotation);
            }, this);
            this.tickRotCorr = a.rotCorr(d.b, this.labelRotation || 0, 0 !== this.side);
          };

          B.prototype.hasData = function () {
            return this.series.some(function (c) {
              return c.hasData();
            }) || this.options.showEmpty && H(this.min) && H(this.max);
          };

          B.prototype.addTitle = function (c) {
            var a = this.chart.renderer,
                e = this.horiz,
                b = this.opposite,
                l = this.options.title,
                g,
                p = this.chart.styledMode;
            this.axisTitle || ((g = l.textAlign) || (g = (e ? {
              low: "left",
              middle: "center",
              high: "right"
            } : {
              low: b ? "right" : "left",
              middle: "center",
              high: b ? "left" : "right"
            })[l.align]), this.axisTitle = a.text(l.text, 0, 0, l.useHTML).attr({
              zIndex: 7,
              rotation: l.rotation || 0,
              align: g
            }).addClass("highcharts-axis-title"), p || this.axisTitle.css(h(l.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
            p || l.style.width || this.isRadial || this.axisTitle.css({
              width: this.len + "px"
            });
            this.axisTitle[c ? "show" : "hide"](c);
          };

          B.prototype.generateTick = function (c) {
            var a = this.ticks;
            a[c] ? a[c].addLabel() : a[c] = new E(this, c);
          };

          B.prototype.getOffset = function () {
            var c = this,
                a = c.chart,
                e = a.renderer,
                b = c.options,
                g = c.tickPositions,
                h = c.ticks,
                m = c.horiz,
                u = c.side,
                v = a.inverted && !c.isZAxis ? [1, 0, 3, 2][u] : u,
                d,
                y = 0,
                f = 0,
                O = b.title,
                I = b.labels,
                G = 0,
                t = a.axisOffset;
            a = a.clipOffset;
            var B = [-1, 1, 1, -1][u],
                w = b.className,
                S = c.axisParent;
            var R = c.hasData();
            c.showAxis = d = R || l(b.showEmpty, !0);
            c.staggerLines = c.horiz && I.staggerLines;
            c.axisGroup || (c.gridGroup = e.g("grid").attr({
              zIndex: b.gridZIndex || 1
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (w || "")).add(S), c.axisGroup = e.g("axis").attr({
              zIndex: b.zIndex || 2
            }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (w || "")).add(S), c.labelGroup = e.g("axis-labels").attr({
              zIndex: I.zIndex || 7
            }).addClass("highcharts-" + c.coll.toLowerCase() + "-labels " + (w || "")).add(S));
            R || c.isLinked ? (g.forEach(function (a, e) {
              c.generateTick(a, e);
            }), c.renderUnsquish(), c.reserveSpaceDefault = 0 === u || 2 === u || {
              1: "left",
              3: "right"
            }[u] === c.labelAlign, l(I.reserveSpace, "center" === c.labelAlign ? !0 : null, c.reserveSpaceDefault) && g.forEach(function (a) {
              G = Math.max(h[a].getLabelSize(), G);
            }), c.staggerLines && (G *= c.staggerLines), c.labelOffset = G * (c.opposite ? -1 : 1)) : p(h, function (a, c) {
              a.destroy();
              delete h[c];
            });

            if (O && O.text && !1 !== O.enabled && (c.addTitle(d), d && !1 !== O.reserveSpace)) {
              c.titleOffset = y = c.axisTitle.getBBox()[m ? "height" : "width"];
              var x = O.offset;
              f = H(x) ? 0 : l(O.margin, m ? 5 : 10);
            }

            c.renderLine();
            c.offset = B * l(b.offset, t[u] ? t[u] + (b.margin || 0) : 0);
            c.tickRotCorr = c.tickRotCorr || {
              x: 0,
              y: 0
            };
            e = 0 === u ? -c.labelMetrics().h : 2 === u ? c.tickRotCorr.y : 0;
            f = Math.abs(G) + f;
            G && (f = f - e + B * (m ? l(I.y, c.tickRotCorr.y + 8 * B) : I.x));
            c.axisTitleMargin = l(x, f);
            c.getMaxLabelDimensions && (c.maxLabelDimensions = c.getMaxLabelDimensions(h, g));
            m = this.tickSize("tick");
            t[u] = Math.max(t[u], c.axisTitleMargin + y + B * c.offset, f, g && g.length && m ? m[0] + B * c.offset : 0);
            b = b.offset ? 0 : 2 * Math.floor(c.axisLine.strokeWidth() / 2);
            a[v] = Math.max(a[v], b);
            n(this, "afterGetOffset");
          };

          B.prototype.getLinePath = function (c) {
            var a = this.chart,
                e = this.opposite,
                b = this.offset,
                l = this.horiz,
                g = this.left + (e ? this.width : 0) + b;
            b = a.chartHeight - this.bottom - (e ? this.height : 0) + b;
            e && (c *= -1);
            return a.renderer.crispLine([["M", l ? this.left : g, l ? b : this.top], ["L", l ? a.chartWidth - this.right : g, l ? b : a.chartHeight - this.bottom]], c);
          };

          B.prototype.renderLine = function () {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
              stroke: this.options.lineColor,
              "stroke-width": this.options.lineWidth,
              zIndex: 7
            }));
          };

          B.prototype.getTitlePosition = function () {
            var c = this.horiz,
                a = this.left,
                e = this.top,
                b = this.len,
                l = this.options.title,
                g = c ? a : e,
                h = this.opposite,
                p = this.offset,
                m = l.x || 0,
                u = l.y || 0,
                d = this.axisTitle,
                v = this.chart.renderer.fontMetrics(l.style && l.style.fontSize, d);
            d = Math.max(d.getBBox(null, 0).height - v.h - 1, 0);
            b = {
              low: g + (c ? 0 : b),
              middle: g + b / 2,
              high: g + (c ? b : 0)
            }[l.align];
            a = (c ? e + this.height : a) + (c ? 1 : -1) * (h ? -1 : 1) * this.axisTitleMargin + [-d, d, v.f, -d][this.side];
            c = {
              x: c ? b + m : a + (h ? this.width : 0) + p + m,
              y: c ? a + u - (h ? this.height : 0) + p : b + u
            };
            n(this, "afterGetTitlePosition", {
              titlePosition: c
            });
            return c;
          };

          B.prototype.renderMinorTick = function (c) {
            var a = this.chart.hasRendered && g(this.oldMin),
                e = this.minorTicks;
            e[c] || (e[c] = new E(this, c, "minor"));
            a && e[c].isNew && e[c].render(null, !0);
            e[c].render(null, !1, 1);
          };

          B.prototype.renderTick = function (c, a) {
            var e = this.isLinked,
                b = this.ticks,
                l = this.chart.hasRendered && g(this.oldMin);
            if (!e || c >= this.min && c <= this.max) b[c] || (b[c] = new E(this, c)), l && b[c].isNew && b[c].render(a, !0, -1), b[c].render(a);
          };

          B.prototype.render = function () {
            var c = this,
                a = c.chart,
                e = c.logarithmic,
                b = c.options,
                l = c.isLinked,
                h = c.tickPositions,
                m = c.axisTitle,
                u = c.ticks,
                d = c.minorTicks,
                v = c.alternateBands,
                y = b.stackLabels,
                I = b.alternateGridColor,
                O = c.tickmarkOffset,
                t = c.axisLine,
                B = c.showAxis,
                w = K(a.renderer.globalAnimation),
                S,
                R;
            c.labelEdge.length = 0;
            c.overlap = !1;
            [u, d, v].forEach(function (a) {
              p(a, function (a) {
                a.isActive = !1;
              });
            });
            if (c.hasData() || l) c.minorTickInterval && !c.categories && c.getMinorTickPositions().forEach(function (a) {
              c.renderMinorTick(a);
            }), h.length && (h.forEach(function (a, e) {
              c.renderTick(a, e);
            }), O && (0 === c.min || c.single) && (u[-1] || (u[-1] = new E(c, -1, null, !0)), u[-1].render(-1))), I && h.forEach(function (k, b) {
              R = "undefined" !== typeof h[b + 1] ? h[b + 1] + O : c.max - O;
              0 === b % 2 && k < c.max && R <= c.max + (a.polar ? -O : O) && (v[k] || (v[k] = new f.PlotLineOrBand(c)), S = k + O, v[k].options = {
                from: e ? e.lin2log(S) : S,
                to: e ? e.lin2log(R) : R,
                color: I
              }, v[k].render(), v[k].isActive = !0);
            }), c._addedPlotLB || ((b.plotLines || []).concat(b.plotBands || []).forEach(function (a) {
              c.addPlotBandOrLine(a);
            }), c._addedPlotLB = !0);
            [u, d, v].forEach(function (c) {
              var e,
                  k = [],
                  b = w.duration;
              p(c, function (a, c) {
                a.isActive || (a.render(c, !1, 0), a.isActive = !1, k.push(c));
              });
              G(function () {
                for (e = k.length; e--;) {
                  c[k[e]] && !c[k[e]].isActive && (c[k[e]].destroy(), delete c[k[e]]);
                }
              }, c !== v && a.hasRendered && b ? b : 0);
            });
            t && (t[t.isPlaced ? "animate" : "attr"]({
              d: this.getLinePath(t.strokeWidth())
            }), t.isPlaced = !0, t[B ? "show" : "hide"](B));
            m && B && (b = c.getTitlePosition(), g(b.y) ? (m[m.isNew ? "attr" : "animate"](b), m.isNew = !1) : (m.attr("y", -9999), m.isNew = !0));
            y && y.enabled && c.stacking && c.stacking.renderStackTotals();
            c.isDirty = !1;
            n(this, "afterRender");
          };

          B.prototype.redraw = function () {
            this.visible && (this.render(), this.plotLinesAndBands.forEach(function (c) {
              c.render();
            }));
            this.series.forEach(function (c) {
              c.isDirty = !0;
            });
          };

          B.prototype.getKeepProps = function () {
            return this.keepProps || B.keepProps;
          };

          B.prototype.destroy = function (c) {
            var a = this,
                e = a.plotLinesAndBands,
                b;
            n(this, "destroy", {
              keepEvents: c
            });
            c || u(a);
            [a.ticks, a.minorTicks, a.alternateBands].forEach(function (a) {
              C(a);
            });
            if (e) for (c = e.length; c--;) {
              e[c].destroy();
            }
            "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (c) {
              a[c] && (a[c] = a[c].destroy());
            });

            for (b in a.plotLinesAndBandsGroups) {
              a.plotLinesAndBandsGroups[b] = a.plotLinesAndBandsGroups[b].destroy();
            }

            p(a, function (c, e) {
              -1 === a.getKeepProps().indexOf(e) && delete a[e];
            });
          };

          B.prototype.drawCrosshair = function (c, a) {
            var e = this.crosshair,
                b = l(e.snap, !0),
                g,
                h = this.cross,
                p = this.chart;
            n(this, "drawCrosshair", {
              e: c,
              point: a
            });
            c || (c = this.cross && this.cross.e);

            if (this.crosshair && !1 !== (H(a) || !b)) {
              b ? H(a) && (g = l("colorAxis" !== this.coll ? a.crosshairPos : null, this.isXAxis ? a.plotX : this.len - a.plotY)) : g = c && (this.horiz ? c.chartX - this.pos : this.len - c.chartY + this.pos);

              if (H(g)) {
                var m = {
                  value: a && (this.isXAxis ? a.x : l(a.stackY, a.y)),
                  translatedValue: g
                };
                p.polar && w(m, {
                  isCrosshair: !0,
                  chartX: c && c.chartX,
                  chartY: c && c.chartY,
                  point: a
                });
                m = this.getPlotLinePath(m) || null;
              }

              if (!H(m)) {
                this.hideCrosshair();
                return;
              }

              b = this.categories && !this.isRadial;
              h || (this.cross = h = p.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (b ? "category " : "thin ") + e.className).attr({
                zIndex: l(e.zIndex, 2)
              }).add(), p.styledMode || (h.attr({
                stroke: e.color || (b ? d.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                "stroke-width": l(e.width, 1)
              }).css({
                "pointer-events": "none"
              }), e.dashStyle && h.attr({
                dashstyle: e.dashStyle
              })));
              h.show().attr({
                d: m
              });
              b && !e.width && h.attr({
                "stroke-width": this.transA
              });
              this.cross.e = c;
            } else this.hideCrosshair();

            n(this, "afterDrawCrosshair", {
              e: c,
              point: a
            });
          };

          B.prototype.hideCrosshair = function () {
            this.cross && this.cross.hide();
            n(this, "afterHideCrosshair");
          };

          B.prototype.hasVerticalPanning = function () {
            var c, a;
            return /y/.test((null === (a = null === (c = this.chart.options.chart) || void 0 === c ? void 0 : c.panning) || void 0 === a ? void 0 : a.type) || "");
          };

          B.defaultOptions = {
            dateTimeLabelFormats: {
              millisecond: {
                main: "%H:%M:%S.%L",
                range: !1
              },
              second: {
                main: "%H:%M:%S",
                range: !1
              },
              minute: {
                main: "%H:%M",
                range: !1
              },
              hour: {
                main: "%H:%M",
                range: !1
              },
              day: {
                main: "%e. %b"
              },
              week: {
                main: "%e. %b"
              },
              month: {
                main: "%b '%y"
              },
              year: {
                main: "%Y"
              }
            },
            endOnTick: !1,
            labels: {
              enabled: !0,
              indentation: 10,
              x: 0,
              style: {
                color: "#666666",
                cursor: "default",
                fontSize: "11px"
              }
            },
            maxPadding: .01,
            minorTickLength: 2,
            minorTickPosition: "outside",
            minPadding: .01,
            showEmpty: !0,
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickPixelInterval: 100,
            tickmarkPlacement: "between",
            tickPosition: "outside",
            title: {
              align: "middle",
              style: {
                color: "#666666"
              }
            },
            type: "linear",
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#ccd6eb",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            tickColor: "#ccd6eb"
          };
          B.defaultYAxisOptions = {
            endOnTick: !0,
            maxPadding: .05,
            minPadding: .05,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
              x: -8
            },
            startOnTick: !0,
            title: {
              rotation: 270,
              text: "Values"
            },
            stackLabels: {
              allowOverlap: !1,
              enabled: !1,
              crop: !0,
              overflow: "justify",
              formatter: function formatter() {
                var c = this.axis.chart.numberFormatter;
                return c(this.total, -1);
              },
              style: {
                color: "#000000",
                fontSize: "11px",
                fontWeight: "bold",
                textOutline: "1px contrast"
              }
            },
            gridLineWidth: 1,
            lineWidth: 0
          };
          B.defaultLeftAxisOptions = {
            labels: {
              x: -15
            },
            title: {
              rotation: 270
            }
          };
          B.defaultRightAxisOptions = {
            labels: {
              x: 15
            },
            title: {
              rotation: 90
            }
          };
          B.defaultBottomAxisOptions = {
            labels: {
              autoRotation: [-45],
              x: 0
            },
            margin: 15,
            title: {
              rotation: 0
            }
          };
          B.defaultTopAxisOptions = {
            labels: {
              autoRotation: [-45],
              x: 0
            },
            margin: 15,
            title: {
              rotation: 0
            }
          };
          B.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
          return B;
        }();

        f.Axis = q;
        return f.Axis;
      });
      Q(A, "parts/DateTimeAxis.js", [A["parts/Axis.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.addEvent,
            q = f.getMagnitude,
            M = f.normalizeTickInterval,
            K = f.timeUnits,
            J = function () {
          function d(d) {
            this.axis = d;
          }

          d.prototype.normalizeTimeTickInterval = function (d, f) {
            var x = f || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
            f = x[x.length - 1];
            var C = K[f[0]],
                D = f[1],
                w;

            for (w = 0; w < x.length && !(f = x[w], C = K[f[0]], D = f[1], x[w + 1] && d <= (C * D[D.length - 1] + K[x[w + 1][0]]) / 2); w++) {
              ;
            }

            C === K.year && d < 5 * C && (D = [1, 2, 5]);
            d = M(d / C, D, "year" === f[0] ? Math.max(q(d / C), 1) : 1);
            return {
              unitRange: C,
              count: d,
              unitName: f[0]
            };
          };

          return d;
        }();

        f = function () {
          function d() {}

          d.compose = function (d) {
            d.keepProps.push("dateTime");

            d.prototype.getTimeTicks = function () {
              return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            };

            E(d, "init", function (d) {
              "datetime" !== d.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new J(this));
            });
          };

          d.AdditionsClass = J;
          return d;
        }();

        f.compose(d);
        return f;
      });
      Q(A, "parts/LogarithmicAxis.js", [A["parts/Axis.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.addEvent,
            q = f.getMagnitude,
            M = f.normalizeTickInterval,
            K = f.pick,
            J = function () {
          function d(d) {
            this.axis = d;
          }

          d.prototype.getLogTickPositions = function (d, f, H, C) {
            var x = this.axis,
                w = x.len,
                n = x.options,
                t = [];
            C || (this.minorAutoInterval = void 0);
            if (.5 <= d) d = Math.round(d), t = x.getLinearTickPositions(d, f, H);else if (.08 <= d) {
              n = Math.floor(f);
              var N, m;

              for (w = .3 < d ? [1, 2, 4] : .15 < d ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; n < H + 1 && !m; n++) {
                var b = w.length;

                for (N = 0; N < b && !m; N++) {
                  var g = this.log2lin(this.lin2log(n) * w[N]);
                  g > f && (!C || v <= H) && "undefined" !== typeof v && t.push(v);
                  v > H && (m = !0);
                  var v = g;
                }
              }
            } else f = this.lin2log(f), H = this.lin2log(H), d = C ? x.getMinorTickInterval() : n.tickInterval, d = K("auto" === d ? null : d, this.minorAutoInterval, n.tickPixelInterval / (C ? 5 : 1) * (H - f) / ((C ? w / x.tickPositions.length : w) || 1)), d = M(d, void 0, q(d)), t = x.getLinearTickPositions(d, f, H).map(this.log2lin), C || (this.minorAutoInterval = d / 5);
            C || (x.tickInterval = d);
            return t;
          };

          d.prototype.lin2log = function (d) {
            return Math.pow(10, d);
          };

          d.prototype.log2lin = function (d) {
            return Math.log(d) / Math.LN10;
          };

          return d;
        }();

        f = function () {
          function d() {}

          d.compose = function (d) {
            d.keepProps.push("logarithmic");
            var f = d.prototype,
                x = J.prototype;
            f.log2lin = x.log2lin;
            f.lin2log = x.lin2log;
            E(d, "init", function (d) {
              var f = this.logarithmic;
              "logarithmic" !== d.userOptions.type ? this.logarithmic = void 0 : (f || (f = this.logarithmic = new J(this)), this.log2lin !== f.log2lin && (f.log2lin = this.log2lin.bind(this)), this.lin2log !== f.lin2log && (f.lin2log = this.lin2log.bind(this)));
            });
            E(d, "afterInit", function () {
              var d = this.logarithmic;
              d && (this.lin2val = function (f) {
                return d.lin2log(f);
              }, this.val2lin = function (f) {
                return d.log2lin(f);
              });
            });
          };

          return d;
        }();

        f.compose(d);
        return f;
      });
      Q(A, "parts/PlotLineOrBand.js", [A["parts/Globals.js"], A["parts/Axis.js"], A["parts/Utilities.js"]], function (d, f, E) {
        var q = E.arrayMax,
            M = E.arrayMin,
            K = E.defined,
            J = E.destroyObjectProperties,
            L = E.erase,
            x = E.extend,
            F = E.merge,
            H = E.objectEach,
            C = E.pick,
            D = function () {
          function f(d, f) {
            this.axis = d;
            f && (this.options = f, this.id = f.id);
          }

          f.prototype.render = function () {
            d.fireEvent(this, "render");
            var f = this,
                t = f.axis,
                w = t.horiz,
                m = t.logarithmic,
                b = f.options,
                g = b.label,
                v = f.label,
                h = b.to,
                e = b.from,
                p = b.value,
                l = K(e) && K(h),
                I = K(p),
                u = f.svgElem,
                y = !u,
                G = [],
                S = b.color,
                R = C(b.zIndex, 0),
                B = b.events;
            G = {
              "class": "highcharts-plot-" + (l ? "band " : "line ") + (b.className || "")
            };
            var c = {},
                a = t.chart.renderer,
                k = l ? "bands" : "lines";
            m && (e = m.log2lin(e), h = m.log2lin(h), p = m.log2lin(p));
            t.chart.styledMode || (I ? (G.stroke = S || "#999999", G["stroke-width"] = C(b.width, 1), b.dashStyle && (G.dashstyle = b.dashStyle)) : l && (G.fill = S || "#e6ebf5", b.borderWidth && (G.stroke = b.borderColor, G["stroke-width"] = b.borderWidth)));
            c.zIndex = R;
            k += "-" + R;
            (m = t.plotLinesAndBandsGroups[k]) || (t.plotLinesAndBandsGroups[k] = m = a.g("plot-" + k).attr(c).add());
            y && (f.svgElem = u = a.path().attr(G).add(m));
            if (I) G = t.getPlotLinePath({
              value: p,
              lineWidth: u.strokeWidth(),
              acrossPanes: b.acrossPanes
            });else if (l) G = t.getPlotBandPath(e, h, b);else return;
            (y || !u.d) && G && G.length ? (u.attr({
              d: G
            }), B && H(B, function (a, c) {
              u.on(c, function (a) {
                B[c].apply(f, [a]);
              });
            })) : u && (G ? (u.show(!0), u.animate({
              d: G
            })) : u.d && (u.hide(), v && (f.label = v = v.destroy())));
            g && (K(g.text) || K(g.formatter)) && G && G.length && 0 < t.width && 0 < t.height && !G.isFlat ? (g = F({
              align: w && l && "center",
              x: w ? !l && 4 : 10,
              verticalAlign: !w && l && "middle",
              y: w ? l ? 16 : 10 : l ? 6 : -4,
              rotation: w && !l && 90
            }, g), this.renderLabel(g, G, l, R)) : v && v.hide();
            return f;
          };

          f.prototype.renderLabel = function (d, f, w, m) {
            var b = this.label,
                g = this.axis.chart.renderer;
            b || (b = {
              align: d.textAlign || d.align,
              rotation: d.rotation,
              "class": "highcharts-plot-" + (w ? "band" : "line") + "-label " + (d.className || "")
            }, b.zIndex = m, m = this.getLabelText(d), this.label = b = g.text(m, 0, 0, d.useHTML).attr(b).add(), this.axis.chart.styledMode || b.css(d.style));
            g = f.xBounds || [f[0][1], f[1][1], w ? f[2][1] : f[0][1]];
            f = f.yBounds || [f[0][2], f[1][2], w ? f[2][2] : f[0][2]];
            w = M(g);
            m = M(f);
            b.align(d, !1, {
              x: w,
              y: m,
              width: q(g) - w,
              height: q(f) - m
            });
            b.show(!0);
          };

          f.prototype.getLabelText = function (d) {
            return K(d.formatter) ? d.formatter.call(this) : d.text;
          };

          f.prototype.destroy = function () {
            L(this.axis.plotLinesAndBands, this);
            delete this.axis;
            J(this);
          };

          return f;
        }();

        x(f.prototype, {
          getPlotBandPath: function getPlotBandPath(d, f) {
            var n = this.getPlotLinePath({
              value: f,
              force: !0,
              acrossPanes: this.options.acrossPanes
            }),
                w = this.getPlotLinePath({
              value: d,
              force: !0,
              acrossPanes: this.options.acrossPanes
            }),
                m = [],
                b = this.horiz,
                g = 1;
            d = d < this.min && f < this.min || d > this.max && f > this.max;

            if (w && n) {
              if (d) {
                var v = w.toString() === n.toString();
                g = 0;
              }

              for (d = 0; d < w.length; d += 2) {
                f = w[d];
                var h = w[d + 1],
                    e = n[d],
                    p = n[d + 1];
                "M" !== f[0] && "L" !== f[0] || "M" !== h[0] && "L" !== h[0] || "M" !== e[0] && "L" !== e[0] || "M" !== p[0] && "L" !== p[0] || (b && e[1] === f[1] ? (e[1] += g, p[1] += g) : b || e[2] !== f[2] || (e[2] += g, p[2] += g), m.push(["M", f[1], f[2]], ["L", h[1], h[2]], ["L", p[1], p[2]], ["L", e[1], e[2]], ["Z"]));
                m.isFlat = v;
              }
            }

            return m;
          },
          addPlotBand: function addPlotBand(d) {
            return this.addPlotBandOrLine(d, "plotBands");
          },
          addPlotLine: function addPlotLine(d) {
            return this.addPlotBandOrLine(d, "plotLines");
          },
          addPlotBandOrLine: function addPlotBandOrLine(d, f) {
            var n = new D(this, d).render(),
                w = this.userOptions;

            if (n) {
              if (f) {
                var m = w[f] || [];
                m.push(d);
                w[f] = m;
              }

              this.plotLinesAndBands.push(n);
            }

            return n;
          },
          removePlotBandOrLine: function removePlotBandOrLine(d) {
            for (var f = this.plotLinesAndBands, t = this.options, w = this.userOptions, m = f.length; m--;) {
              f[m].id === d && f[m].destroy();
            }

            [t.plotLines || [], w.plotLines || [], t.plotBands || [], w.plotBands || []].forEach(function (b) {
              for (m = b.length; m--;) {
                (b[m] || {}).id === d && L(b, b[m]);
              }
            });
          },
          removePlotBand: function removePlotBand(d) {
            this.removePlotBandOrLine(d);
          },
          removePlotLine: function removePlotLine(d) {
            this.removePlotBandOrLine(d);
          }
        });
        d.PlotLineOrBand = D;
        return d.PlotLineOrBand;
      });
      Q(A, "parts/Tooltip.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.clamp,
            q = f.css,
            M = f.defined,
            K = f.discardElement,
            J = f.extend,
            L = f.fireEvent,
            x = f.format,
            F = f.isNumber,
            H = f.isString,
            C = f.merge,
            D = f.pick,
            w = f.splat,
            n = f.syncTimeout,
            t = f.timeUnits;
        "";

        var N = d.doc,
            m = function () {
          function b(b, d) {
            this.crosshairs = [];
            this.distance = 0;
            this.isHidden = !0;
            this.isSticky = !1;
            this.now = {};
            this.options = {};
            this.outside = !1;
            this.chart = b;
            this.init(b, d);
          }

          b.prototype.applyFilter = function () {
            var b = this.chart;
            b.renderer.definition({
              tagName: "filter",
              id: "drop-shadow-" + b.index,
              opacity: .5,
              children: [{
                tagName: "feGaussianBlur",
                "in": "SourceAlpha",
                stdDeviation: 1
              }, {
                tagName: "feOffset",
                dx: 1,
                dy: 1
              }, {
                tagName: "feComponentTransfer",
                children: [{
                  tagName: "feFuncA",
                  type: "linear",
                  slope: .3
                }]
              }, {
                tagName: "feMerge",
                children: [{
                  tagName: "feMergeNode"
                }, {
                  tagName: "feMergeNode",
                  "in": "SourceGraphic"
                }]
              }]
            });
            b.renderer.definition({
              tagName: "style",
              textContent: ".highcharts-tooltip-" + b.index + "{filter:url(#drop-shadow-" + b.index + ")}"
            });
          };

          b.prototype.bodyFormatter = function (b) {
            return b.map(function (b) {
              var g = b.series.tooltipOptions;
              return (g[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, g[(b.point.formatPrefix || "point") + "Format"] || "");
            });
          };

          b.prototype.cleanSplit = function (b) {
            this.chart.series.forEach(function (g) {
              var h = g && g.tt;
              h && (!h.isActive || b ? g.tt = h.destroy() : h.isActive = !1);
            });
          };

          b.prototype.defaultFormatter = function (b) {
            var g = this.points || w(this);
            var h = [b.tooltipFooterHeaderFormatter(g[0])];
            h = h.concat(b.bodyFormatter(g));
            h.push(b.tooltipFooterHeaderFormatter(g[0], !0));
            return h;
          };

          b.prototype.destroy = function () {
            this.label && (this.label = this.label.destroy());
            this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
            this.renderer && (this.renderer = this.renderer.destroy(), K(this.container));
            f.clearTimeout(this.hideTimer);
            f.clearTimeout(this.tooltipTimeout);
          };

          b.prototype.getAnchor = function (b, d) {
            var g = this.chart,
                e = g.pointer,
                p = g.inverted,
                l = g.plotTop,
                m = g.plotLeft,
                u = 0,
                f = 0,
                v,
                n;
            b = w(b);
            this.followPointer && d ? ("undefined" === typeof d.chartX && (d = e.normalize(d)), b = [d.chartX - m, d.chartY - l]) : b[0].tooltipPos ? b = b[0].tooltipPos : (b.forEach(function (e) {
              v = e.series.yAxis;
              n = e.series.xAxis;
              u += e.plotX + (!p && n ? n.left - m : 0);
              f += (e.plotLow ? (e.plotLow + e.plotHigh) / 2 : e.plotY) + (!p && v ? v.top - l : 0);
            }), u /= b.length, f /= b.length, b = [p ? g.plotWidth - f : u, this.shared && !p && 1 < b.length && d ? d.chartY - l : p ? g.plotHeight - u : f]);
            return b.map(Math.round);
          };

          b.prototype.getDateFormat = function (b, d, h, e) {
            var g = this.chart.time,
                l = g.dateFormat("%m-%d %H:%M:%S.%L", d),
                m = {
              millisecond: 15,
              second: 12,
              minute: 9,
              hour: 6,
              day: 3
            },
                u = "millisecond";

            for (f in t) {
              if (b === t.week && +g.dateFormat("%w", d) === h && "00:00:00.000" === l.substr(6)) {
                var f = "week";
                break;
              }

              if (t[f] > b) {
                f = u;
                break;
              }

              if (m[f] && l.substr(m[f]) !== "01-01 00:00:00.000".substr(m[f])) break;
              "week" !== f && (u = f);
            }

            if (f) var v = g.resolveDTLFormat(e[f]).main;
            return v;
          };

          b.prototype.getLabel = function () {
            var b,
                m,
                h = this,
                e = this.chart.renderer,
                p = this.chart.styledMode,
                l = this.options,
                f = "tooltip" + (M(l.className) ? " " + l.className : ""),
                u = (null === (b = l.style) || void 0 === b ? void 0 : b.pointerEvents) || (!this.followPointer && l.stickOnContact ? "auto" : "none"),
                y;

            b = function b() {
              h.inContact = !0;
            };

            var G = function G() {
              var e = h.chart.hoverSeries;
              h.inContact = !1;
              if (e && e.onMouseOut) e.onMouseOut();
            };

            if (!this.label) {
              this.outside && (this.container = y = d.doc.createElement("div"), y.className = "highcharts-tooltip-container", q(y, {
                position: "absolute",
                top: "1px",
                pointerEvents: u,
                zIndex: 3
              }), d.doc.body.appendChild(y), this.renderer = e = new d.Renderer(y, 0, 0, null === (m = this.chart.options.chart) || void 0 === m ? void 0 : m.style, void 0, void 0, e.styledMode));
              this.split ? this.label = e.g(f) : (this.label = e.label("", 0, 0, l.shape || "callout", null, null, l.useHTML, null, f).attr({
                padding: l.padding,
                r: l.borderRadius
              }), p || this.label.attr({
                fill: l.backgroundColor,
                "stroke-width": l.borderWidth
              }).css(l.style).css({
                pointerEvents: u
              }).shadow(l.shadow));
              p && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

              if (h.outside && !h.split) {
                var n = {
                  x: this.label.xSetter,
                  y: this.label.ySetter
                };

                this.label.xSetter = function (e, b) {
                  n[b].call(this.label, h.distance);
                  y.style.left = e + "px";
                };

                this.label.ySetter = function (e, b) {
                  n[b].call(this.label, h.distance);
                  y.style.top = e + "px";
                };
              }

              this.label.on("mouseenter", b).on("mouseleave", G).attr({
                zIndex: 8
              }).add();
            }

            return this.label;
          };

          b.prototype.getPosition = function (b, d, h) {
            var e = this.chart,
                g = this.distance,
                l = {},
                m = e.inverted && h.h || 0,
                u,
                f = this.outside,
                v = f ? N.documentElement.clientWidth - 2 * g : e.chartWidth,
                n = f ? Math.max(N.body.scrollHeight, N.documentElement.scrollHeight, N.body.offsetHeight, N.documentElement.offsetHeight, N.documentElement.clientHeight) : e.chartHeight,
                t = e.pointer.getChartPosition(),
                B = e.containerScaling,
                c = function c(a) {
              return B ? a * B.scaleX : a;
            },
                a = function a(_a) {
              return B ? _a * B.scaleY : _a;
            },
                k = function k(_k) {
              var l = "x" === _k;
              return [_k, l ? v : n, l ? b : d].concat(f ? [l ? c(b) : a(d), l ? t.left - g + c(h.plotX + e.plotLeft) : t.top - g + a(h.plotY + e.plotTop), 0, l ? v : n] : [l ? b : d, l ? h.plotX + e.plotLeft : h.plotY + e.plotTop, l ? e.plotLeft : e.plotTop, l ? e.plotLeft + e.plotWidth : e.plotTop + e.plotHeight]);
            },
                r = k("y"),
                z = k("x"),
                w = !this.followPointer && D(h.ttBelow, !e.inverted === !!h.negative),
                x = function x(e, b, k, h, p, r, d) {
              var u = "y" === e ? a(g) : c(g),
                  f = (k - h) / 2,
                  v = h < p - g,
                  y = p + g + h < b,
                  z = p - u - k + f;
              p = p + u - f;
              if (w && y) l[e] = p;else if (!w && v) l[e] = z;else if (v) l[e] = Math.min(d - h, 0 > z - m ? z : z - m);else if (y) l[e] = Math.max(r, p + m + k > b ? p : p + m);else return !1;
            },
                C = function C(a, c, e, b, k) {
              var h;
              k < g || k > c - g ? h = !1 : l[a] = k < e / 2 ? 1 : k > c - b / 2 ? c - b - 2 : k - e / 2;
              return h;
            },
                q = function q(a) {
              var c = r;
              r = z;
              z = c;
              u = a;
            },
                T = function T() {
              !1 !== x.apply(0, r) ? !1 !== C.apply(0, z) || u || (q(!0), T()) : u ? l.x = l.y = 0 : (q(!0), T());
            };

            (e.inverted || 1 < this.len) && q();
            T();
            return l;
          };

          b.prototype.getXDateFormat = function (b, d, h) {
            d = d.dateTimeLabelFormats;
            var e = h && h.closestPointRange;
            return (e ? this.getDateFormat(e, b.x, h.options.startOfWeek, d) : d.day) || d.year;
          };

          b.prototype.hide = function (b) {
            var g = this;
            f.clearTimeout(this.hideTimer);
            b = D(b, this.options.hideDelay, 500);
            this.isHidden || (this.hideTimer = n(function () {
              g.getLabel().fadeOut(b ? void 0 : b);
              g.isHidden = !0;
            }, b));
          };

          b.prototype.init = function (b, d) {
            this.chart = b;
            this.options = d;
            this.crosshairs = [];
            this.now = {
              x: 0,
              y: 0
            };
            this.isHidden = !0;
            this.split = d.split && !b.inverted && !b.polar;
            this.shared = d.shared || this.split;
            this.outside = D(d.outside, !(!b.scrollablePixelsX && !b.scrollablePixelsY));
          };

          b.prototype.isStickyOnContact = function () {
            return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
          };

          b.prototype.move = function (b, d, h, e) {
            var g = this,
                l = g.now,
                m = !1 !== g.options.animation && !g.isHidden && (1 < Math.abs(b - l.x) || 1 < Math.abs(d - l.y)),
                u = g.followPointer || 1 < g.len;
            J(l, {
              x: m ? (2 * l.x + b) / 3 : b,
              y: m ? (l.y + d) / 2 : d,
              anchorX: u ? void 0 : m ? (2 * l.anchorX + h) / 3 : h,
              anchorY: u ? void 0 : m ? (l.anchorY + e) / 2 : e
            });
            g.getLabel().attr(l);
            g.drawTracker();
            m && (f.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
              g && g.move(b, d, h, e);
            }, 32));
          };

          b.prototype.refresh = function (b, d) {
            var h = this.chart,
                e = this.options,
                g = b,
                l = {},
                m = [],
                u = e.formatter || this.defaultFormatter;
            l = this.shared;
            var v = h.styledMode;

            if (e.enabled) {
              f.clearTimeout(this.hideTimer);
              this.followPointer = w(g)[0].series.tooltipOptions.followPointer;
              var n = this.getAnchor(g, d);
              d = n[0];
              var t = n[1];
              !l || g.series && g.series.noSharedTooltip ? l = g.getLabelConfig() : (h.pointer.applyInactiveState(g), g.forEach(function (e) {
                e.setState("hover");
                m.push(e.getLabelConfig());
              }), l = {
                x: g[0].category,
                y: g[0].y
              }, l.points = m, g = g[0]);
              this.len = m.length;
              h = u.call(l, this);
              u = g.series;
              this.distance = D(u.tooltipOptions.distance, 16);
              !1 === h ? this.hide() : (this.split ? this.renderSplit(h, w(b)) : (b = this.getLabel(), e.style.width && !v || b.css({
                width: this.chart.spacingBox.width + "px"
              }), b.attr({
                text: h && h.join ? h.join("") : h
              }), b.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + D(g.colorIndex, u.colorIndex)), v || b.attr({
                stroke: e.borderColor || g.color || u.color || "#666666"
              }), this.updatePosition({
                plotX: d,
                plotY: t,
                negative: g.negative,
                ttBelow: g.ttBelow,
                h: n[2] || 0
              })), this.isHidden && this.label && this.label.attr({
                opacity: 1
              }).show(), this.isHidden = !1);
              L(this, "refresh");
            }
          };

          b.prototype.renderSplit = function (b, m) {
            function g(a, c, e, b, k) {
              void 0 === k && (k = !0);
              e ? (c = C ? 0 : F, a = E(a - b / 2, x.left, x.right - b)) : (c -= T, a = k ? a - b - r : a + r, a = E(a, k ? a : x.left, x.right));
              return {
                x: a,
                y: c
              };
            }

            var e = this,
                p = e.chart,
                l = e.chart,
                f = l.plotHeight,
                u = l.plotLeft,
                v = l.plotTop,
                n = l.pointer,
                t = l.renderer,
                w = l.scrollablePixelsY,
                B = void 0 === w ? 0 : w;
            w = l.scrollingContainer;
            w = void 0 === w ? {
              scrollLeft: 0,
              scrollTop: 0
            } : w;
            var c = w.scrollLeft,
                a = w.scrollTop,
                k = l.styledMode,
                r = e.distance,
                z = e.options,
                P = e.options.positioner,
                x = {
              left: c,
              right: c + l.chartWidth,
              top: a,
              bottom: a + l.chartHeight
            },
                q = e.getLabel(),
                C = !(!p.xAxis[0] || !p.xAxis[0].opposite),
                T = v + a,
                N = 0,
                F = f - B;
            H(b) && (b = [!1, b]);
            b = b.slice(0, m.length + 1).reduce(function (c, b, l) {
              if (!1 !== b && "" !== b) {
                l = m[l - 1] || {
                  isHeader: !0,
                  plotX: m[0].plotX,
                  plotY: f,
                  series: {}
                };
                var h = l.isHeader,
                    d = h ? e : l.series,
                    p = d.tt,
                    y = l.isHeader;
                var n = l.series;
                var G = "highcharts-color-" + D(l.colorIndex, n.colorIndex, "none");
                p || (p = {
                  padding: z.padding,
                  r: z.borderRadius
                }, k || (p.fill = z.backgroundColor, p["stroke-width"] = z.borderWidth), p = t.label("", 0, 0, z[y ? "headerShape" : "shape"] || "callout", void 0, void 0, z.useHTML).addClass((y ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + G).attr(p).add(q));
                p.isActive = !0;
                p.attr({
                  text: b
                });
                k || p.css(z.style).shadow(z.shadow).attr({
                  stroke: z.borderColor || l.color || n.color || "#333333"
                });
                b = d.tt = p;
                y = b.getBBox();
                d = y.width + b.strokeWidth();
                h && (N = y.height, F += N, C && (T -= N));
                n = l.plotX;
                n = void 0 === n ? 0 : n;
                G = l.plotY;
                G = void 0 === G ? 0 : G;
                var O = l.series;

                if (l.isHeader) {
                  n = u + n;
                  var I = v + f / 2;
                } else p = O.xAxis, O = O.yAxis, n = p.pos + E(n, -r, p.len + r), O.pos + G >= a + v && O.pos + G <= a + v + f - B && (I = O.pos + G);

                n = E(n, x.left - r, x.right + r);
                "number" === typeof I ? (y = y.height + 1, G = P ? P.call(e, d, y, l) : g(n, I, h, d), c.push({
                  align: P ? 0 : void 0,
                  anchorX: n,
                  anchorY: I,
                  boxWidth: d,
                  point: l,
                  rank: D(G.rank, h ? 1 : 0),
                  size: y,
                  target: G.y,
                  tt: b,
                  x: G.x
                })) : b.isActive = !1;
              }

              return c;
            }, []);
            !P && b.some(function (a) {
              return a.x < x.left;
            }) && (b = b.map(function (a) {
              var c = g(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1);
              return J(a, {
                target: c.y,
                x: c.x
              });
            }));
            e.cleanSplit();
            d.distribute(b, F);
            b.forEach(function (a) {
              var c = a.pos;
              a.tt.attr({
                visibility: "undefined" === typeof c ? "hidden" : "inherit",
                x: a.x,
                y: c + T,
                anchorX: a.anchorX,
                anchorY: a.anchorY
              });
            });
            b = e.container;
            p = e.renderer;
            e.outside && b && p && (l = q.getBBox(), p.setSize(l.width + l.x, l.height + l.y, !1), n = n.getChartPosition(), b.style.left = n.left + "px", b.style.top = n.top + "px");
          };

          b.prototype.drawTracker = function () {
            if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();else {
              var b = this.chart,
                  d = this.label,
                  h = b.hoverPoint;

              if (d && h) {
                var e = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                };
                h = this.getAnchor(h);
                var p = d.getBBox();
                h[0] += b.plotLeft - d.translateX;
                h[1] += b.plotTop - d.translateY;
                e.x = Math.min(0, h[0]);
                e.y = Math.min(0, h[1]);
                e.width = 0 > h[0] ? Math.max(Math.abs(h[0]), p.width - h[0]) : Math.max(Math.abs(h[0]), p.width);
                e.height = 0 > h[1] ? Math.max(Math.abs(h[1]), p.height - Math.abs(h[1])) : Math.max(Math.abs(h[1]), p.height);
                this.tracker ? this.tracker.attr(e) : (this.tracker = d.renderer.rect(e).addClass("highcharts-tracker").add(d), b.styledMode || this.tracker.attr({
                  fill: "rgba(0,0,0,0)"
                }));
              }
            }
          };

          b.prototype.styledModeFormat = function (b) {
            return b.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
          };

          b.prototype.tooltipFooterHeaderFormatter = function (b, d) {
            var h = d ? "footer" : "header",
                e = b.series,
                g = e.tooltipOptions,
                l = g.xDateFormat,
                m = e.xAxis,
                u = m && "datetime" === m.options.type && F(b.key),
                f = g[h + "Format"];
            d = {
              isFooter: d,
              labelConfig: b
            };
            L(this, "headerFormatter", d, function (h) {
              u && !l && (l = this.getXDateFormat(b, g, m));
              u && l && (b.point && b.point.tooltipDateKeys || ["key"]).forEach(function (e) {
                f = f.replace("{point." + e + "}", "{point." + e + ":" + l + "}");
              });
              e.chart.styledMode && (f = this.styledModeFormat(f));
              h.text = x(f, {
                point: b,
                series: e
              }, this.chart);
            });
            return d.text;
          };

          b.prototype.update = function (b) {
            this.destroy();
            C(!0, this.chart.options.tooltip.userOptions, b);
            this.init(this.chart, C(!0, this.options, b));
          };

          b.prototype.updatePosition = function (b) {
            var g = this.chart,
                h = g.pointer,
                e = this.getLabel(),
                d = b.plotX + g.plotLeft,
                l = b.plotY + g.plotTop;
            h = h.getChartPosition();
            b = (this.options.positioner || this.getPosition).call(this, e.width, e.height, b);

            if (this.outside) {
              var m = (this.options.borderWidth || 0) + 2 * this.distance;
              this.renderer.setSize(e.width + m, e.height + m, !1);
              if (g = g.containerScaling) q(this.container, {
                transform: "scale(" + g.scaleX + ", " + g.scaleY + ")"
              }), d *= g.scaleX, l *= g.scaleY;
              d += h.left - b.x;
              l += h.top - b.y;
            }

            this.move(Math.round(b.x), Math.round(b.y || 0), d, l);
          };

          return b;
        }();

        d.Tooltip = m;
        return d.Tooltip;
      });
      Q(A, "parts/Pointer.js", [A["parts/Globals.js"], A["parts/Utilities.js"], A["parts/Tooltip.js"], A["parts/Color.js"]], function (d, f, E, q) {
        var M = f.addEvent,
            K = f.attr,
            J = f.css,
            L = f.defined,
            x = f.extend,
            F = f.find,
            H = f.fireEvent,
            C = f.isNumber,
            D = f.isObject,
            w = f.objectEach,
            n = f.offset,
            t = f.pick,
            N = f.splat,
            m = q.parse,
            b = d.charts,
            g = d.noop;

        f = function () {
          function f(b, e) {
            this.lastValidTouch = {};
            this.pinchDown = [];
            this.runChartClick = !1;
            this.chart = b;
            this.hasDragged = !1;
            this.options = e;

            this.unbindContainerMouseLeave = function () {};

            this.init(b, e);
          }

          f.prototype.applyInactiveState = function (b) {
            var e = [],
                h;
            (b || []).forEach(function (b) {
              h = b.series;
              e.push(h);
              h.linkedParent && e.push(h.linkedParent);
              h.linkedSeries && (e = e.concat(h.linkedSeries));
              h.navigatorSeries && e.push(h.navigatorSeries);
            });
            this.chart.series.forEach(function (b) {
              -1 === e.indexOf(b) ? b.setState("inactive", !0) : b.options.inactiveOtherPoints && b.setAllPointsToState("inactive");
            });
          };

          f.prototype.destroy = function () {
            var b = this;
            "undefined" !== typeof b.unDocMouseMove && b.unDocMouseMove();
            this.unbindContainerMouseLeave();
            d.chartCount || (d.unbindDocumentMouseUp && (d.unbindDocumentMouseUp = d.unbindDocumentMouseUp()), d.unbindDocumentTouchEnd && (d.unbindDocumentTouchEnd = d.unbindDocumentTouchEnd()));
            clearInterval(b.tooltipTimeout);
            w(b, function (e, h) {
              b[h] = null;
            });
          };

          f.prototype.drag = function (b) {
            var e = this.chart,
                h = e.options.chart,
                l = b.chartX,
                g = b.chartY,
                d = this.zoomHor,
                f = this.zoomVert,
                v = e.plotLeft,
                n = e.plotTop,
                t = e.plotWidth,
                B = e.plotHeight,
                c = this.selectionMarker,
                a = this.mouseDownX || 0,
                k = this.mouseDownY || 0,
                r = D(h.panning) ? h.panning && h.panning.enabled : h.panning,
                z = h.panKey && b[h.panKey + "Key"];
            if (!c || !c.touch) if (l < v ? l = v : l > v + t && (l = v + t), g < n ? g = n : g > n + B && (g = n + B), this.hasDragged = Math.sqrt(Math.pow(a - l, 2) + Math.pow(k - g, 2)), 10 < this.hasDragged) {
              var w = e.isInsidePlot(a - v, k - n);
              e.hasCartesianSeries && (this.zoomX || this.zoomY) && w && !z && !c && (this.selectionMarker = c = e.renderer.rect(v, n, d ? 1 : t, f ? 1 : B, 0).attr({
                "class": "highcharts-selection-marker",
                zIndex: 7
              }).add(), e.styledMode || c.attr({
                fill: h.selectionMarkerFill || m("#335cad").setOpacity(.25).get()
              }));
              c && d && (l -= a, c.attr({
                width: Math.abs(l),
                x: (0 < l ? 0 : l) + a
              }));
              c && f && (l = g - k, c.attr({
                height: Math.abs(l),
                y: (0 < l ? 0 : l) + k
              }));
              w && !c && r && e.pan(b, h.panning);
            }
          };

          f.prototype.dragStart = function (b) {
            var e = this.chart;
            e.mouseIsDown = b.type;
            e.cancelClick = !1;
            e.mouseDownX = this.mouseDownX = b.chartX;
            e.mouseDownY = this.mouseDownY = b.chartY;
          };

          f.prototype.drop = function (b) {
            var e = this,
                h = this.chart,
                l = this.hasPinched;

            if (this.selectionMarker) {
              var g = {
                originalEvent: b,
                xAxis: [],
                yAxis: []
              },
                  d = this.selectionMarker,
                  m = d.attr ? d.attr("x") : d.x,
                  f = d.attr ? d.attr("y") : d.y,
                  v = d.attr ? d.attr("width") : d.width,
                  n = d.attr ? d.attr("height") : d.height,
                  B;
              if (this.hasDragged || l) h.axes.forEach(function (c) {
                if (c.zoomEnabled && L(c.min) && (l || e[{
                  xAxis: "zoomX",
                  yAxis: "zoomY"
                }[c.coll]])) {
                  var a = c.horiz,
                      k = "touchend" === b.type ? c.minPixelPadding : 0,
                      h = c.toValue((a ? m : f) + k);
                  a = c.toValue((a ? m + v : f + n) - k);
                  g[c.coll].push({
                    axis: c,
                    min: Math.min(h, a),
                    max: Math.max(h, a)
                  });
                  B = !0;
                }
              }), B && H(h, "selection", g, function (c) {
                h.zoom(x(c, l ? {
                  animation: !1
                } : null));
              });
              C(h.index) && (this.selectionMarker = this.selectionMarker.destroy());
              l && this.scaleGroups();
            }

            h && C(h.index) && (J(h.container, {
              cursor: h._cursor
            }), h.cancelClick = 10 < this.hasDragged, h.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
          };

          f.prototype.findNearestKDPoint = function (b, e, g) {
            var l = this.chart,
                h = l.hoverPoint;
            l = l.tooltip;
            if (h && l && l.isStickyOnContact()) return h;
            var d;
            b.forEach(function (b) {
              var l = !(b.noSharedTooltip && e) && 0 > b.options.findNearestPointBy.indexOf("y");
              b = b.searchPoint(g, l);

              if ((l = D(b, !0)) && !(l = !D(d, !0))) {
                l = d.distX - b.distX;
                var h = d.dist - b.dist,
                    p = (b.series.group && b.series.group.zIndex) - (d.series.group && d.series.group.zIndex);
                l = 0 < (0 !== l && e ? l : 0 !== h ? h : 0 !== p ? p : d.series.index > b.series.index ? -1 : 1);
              }

              l && (d = b);
            });
            return d;
          };

          f.prototype.getChartCoordinatesFromPoint = function (b, e) {
            var h = b.series,
                l = h.xAxis;
            h = h.yAxis;
            var g = t(b.clientX, b.plotX),
                d = b.shapeArgs;
            if (l && h) return e ? {
              chartX: l.len + l.pos - g,
              chartY: h.len + h.pos - b.plotY
            } : {
              chartX: g + l.pos,
              chartY: b.plotY + h.pos
            };
            if (d && d.x && d.y) return {
              chartX: d.x,
              chartY: d.y
            };
          };

          f.prototype.getChartPosition = function () {
            return this.chartPosition || (this.chartPosition = n(this.chart.container));
          };

          f.prototype.getCoordinates = function (b) {
            var e = {
              xAxis: [],
              yAxis: []
            };
            this.chart.axes.forEach(function (h) {
              e[h.isXAxis ? "xAxis" : "yAxis"].push({
                axis: h,
                value: h.toValue(b[h.horiz ? "chartX" : "chartY"])
              });
            });
            return e;
          };

          f.prototype.getHoverData = function (b, e, g, l, d, m) {
            var h,
                p = [];
            l = !(!l || !b);
            var f = e && !e.stickyTracking,
                u = {
              chartX: m ? m.chartX : void 0,
              chartY: m ? m.chartY : void 0,
              shared: d
            };
            H(this, "beforeGetHoverData", u);
            f = f ? [e] : g.filter(function (e) {
              return u.filter ? u.filter(e) : e.visible && !(!d && e.directTouch) && t(e.options.enableMouseTracking, !0) && e.stickyTracking;
            });
            e = (h = l || !m ? b : this.findNearestKDPoint(f, d, m)) && h.series;
            h && (d && !e.noSharedTooltip ? (f = g.filter(function (e) {
              return u.filter ? u.filter(e) : e.visible && !(!d && e.directTouch) && t(e.options.enableMouseTracking, !0) && !e.noSharedTooltip;
            }), f.forEach(function (e) {
              var c = F(e.points, function (a) {
                return a.x === h.x && !a.isNull;
              });
              D(c) && (e.chart.isBoosting && (c = e.getPoint(c)), p.push(c));
            })) : p.push(h));
            u = {
              hoverPoint: h
            };
            H(this, "afterGetHoverData", u);
            return {
              hoverPoint: u.hoverPoint,
              hoverSeries: e,
              hoverPoints: p
            };
          };

          f.prototype.getPointFromEvent = function (b) {
            b = b.target;

            for (var e; b && !e;) {
              e = b.point, b = b.parentNode;
            }

            return e;
          };

          f.prototype.onTrackerMouseOut = function (b) {
            b = b.relatedTarget || b.toElement;
            var e = this.chart.hoverSeries;
            this.isDirectTouch = !1;
            if (!(!e || !b || e.stickyTracking || this.inClass(b, "highcharts-tooltip") || this.inClass(b, "highcharts-series-" + e.index) && this.inClass(b, "highcharts-tracker"))) e.onMouseOut();
          };

          f.prototype.inClass = function (b, e) {
            for (var g; b;) {
              if (g = K(b, "class")) {
                if (-1 !== g.indexOf(e)) return !0;
                if (-1 !== g.indexOf("highcharts-container")) return !1;
              }

              b = b.parentNode;
            }
          };

          f.prototype.init = function (b, e) {
            this.options = e;
            this.chart = b;
            this.runChartClick = e.chart.events && !!e.chart.events.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            E && (b.tooltip = new E(b, e.tooltip), this.followTouchMove = t(e.tooltip.followTouchMove, !0));
            this.setDOMEvents();
          };

          f.prototype.normalize = function (b, e) {
            var g = b.touches,
                l = g ? g.length ? g.item(0) : g.changedTouches[0] : b;
            e || (e = this.getChartPosition());
            g = l.pageX - e.left;
            e = l.pageY - e.top;
            if (l = this.chart.containerScaling) g /= l.scaleX, e /= l.scaleY;
            return x(b, {
              chartX: Math.round(g),
              chartY: Math.round(e)
            });
          };

          f.prototype.onContainerClick = function (b) {
            var e = this.chart,
                g = e.hoverPoint;
            b = this.normalize(b);
            var l = e.plotLeft,
                h = e.plotTop;
            e.cancelClick || (g && this.inClass(b.target, "highcharts-tracker") ? (H(g.series, "click", x(b, {
              point: g
            })), e.hoverPoint && g.firePointEvent("click", b)) : (x(b, this.getCoordinates(b)), e.isInsidePlot(b.chartX - l, b.chartY - h) && H(e, "click", b)));
          };

          f.prototype.onContainerMouseDown = function (b) {
            b = this.normalize(b);
            if (d.isFirefox && 0 !== b.button) this.onContainerMouseMove(b);
            if ("undefined" === typeof b.button || 1 === ((b.buttons || b.button) & 1)) this.zoomOption(b), this.dragStart(b);
          };

          f.prototype.onContainerMouseLeave = function (g) {
            var e = b[t(d.hoverChartIndex, -1)],
                h = this.chart.tooltip;
            g = this.normalize(g);
            e && (g.relatedTarget || g.toElement) && (e.pointer.reset(), e.pointer.chartPosition = void 0);
            h && !h.isHidden && this.reset();
          };

          f.prototype.onContainerMouseMove = function (b) {
            var e = this.chart;
            b = this.normalize(b);
            this.setHoverChartIndex();
            b.preventDefault || (b.returnValue = !1);
            "mousedown" === e.mouseIsDown && this.drag(b);
            e.openMenu || !this.inClass(b.target, "highcharts-tracker") && !e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop) || this.runPointActions(b);
          };

          f.prototype.onDocumentTouchEnd = function (g) {
            b[d.hoverChartIndex] && b[d.hoverChartIndex].pointer.drop(g);
          };

          f.prototype.onContainerTouchMove = function (b) {
            this.touch(b);
          };

          f.prototype.onContainerTouchStart = function (b) {
            this.zoomOption(b);
            this.touch(b, !0);
          };

          f.prototype.onDocumentMouseMove = function (b) {
            var e = this.chart,
                g = this.chartPosition;
            b = this.normalize(b, g);
            var l = e.tooltip;
            !g || l && l.isStickyOnContact() || e.isInsidePlot(b.chartX - e.plotLeft, b.chartY - e.plotTop) || this.inClass(b.target, "highcharts-tracker") || this.reset();
          };

          f.prototype.onDocumentMouseUp = function (g) {
            var e = b[t(d.hoverChartIndex, -1)];
            e && e.pointer.drop(g);
          };

          f.prototype.pinch = function (b) {
            var e = this,
                h = e.chart,
                l = e.pinchDown,
                d = b.touches || [],
                m = d.length,
                f = e.lastValidTouch,
                v = e.hasZoom,
                n = e.selectionMarker,
                w = {},
                B = 1 === m && (e.inClass(b.target, "highcharts-tracker") && h.runTrackerClick || e.runChartClick),
                c = {};
            1 < m && (e.initiated = !0);
            v && e.initiated && !B && b.preventDefault();
            [].map.call(d, function (a) {
              return e.normalize(a);
            });
            "touchstart" === b.type ? ([].forEach.call(d, function (a, c) {
              l[c] = {
                chartX: a.chartX,
                chartY: a.chartY
              };
            }), f.x = [l[0].chartX, l[1] && l[1].chartX], f.y = [l[0].chartY, l[1] && l[1].chartY], h.axes.forEach(function (a) {
              if (a.zoomEnabled) {
                var c = h.bounds[a.horiz ? "h" : "v"],
                    e = a.minPixelPadding,
                    b = a.toPixels(Math.min(t(a.options.min, a.dataMin), a.dataMin)),
                    l = a.toPixels(Math.max(t(a.options.max, a.dataMax), a.dataMax)),
                    g = Math.max(b, l);
                c.min = Math.min(a.pos, Math.min(b, l) - e);
                c.max = Math.max(a.pos + a.len, g + e);
              }
            }), e.res = !0) : e.followTouchMove && 1 === m ? this.runPointActions(e.normalize(b)) : l.length && (n || (e.selectionMarker = n = x({
              destroy: g,
              touch: !0
            }, h.plotBox)), e.pinchTranslate(l, d, w, n, c, f), e.hasPinched = v, e.scaleGroups(w, c), e.res && (e.res = !1, this.reset(!1, 0)));
          };

          f.prototype.pinchTranslate = function (b, e, g, l, d, m) {
            this.zoomHor && this.pinchTranslateDirection(!0, b, e, g, l, d, m);
            this.zoomVert && this.pinchTranslateDirection(!1, b, e, g, l, d, m);
          };

          f.prototype.pinchTranslateDirection = function (b, e, g, l, d, m, f, v) {
            var h = this.chart,
                p = b ? "x" : "y",
                u = b ? "X" : "Y",
                c = "chart" + u,
                a = b ? "width" : "height",
                k = h["plot" + (b ? "Left" : "Top")],
                r,
                z,
                y = v || 1,
                n = h.inverted,
                G = h.bounds[b ? "h" : "v"],
                t = 1 === e.length,
                w = e[0][c],
                I = g[0][c],
                x = !t && e[1][c],
                O = !t && g[1][c];

            g = function g() {
              "number" === typeof O && 20 < Math.abs(w - x) && (y = v || Math.abs(I - O) / Math.abs(w - x));
              z = (k - I) / y + w;
              r = h["plot" + (b ? "Width" : "Height")] / y;
            };

            g();
            e = z;

            if (e < G.min) {
              e = G.min;
              var V = !0;
            } else e + r > G.max && (e = G.max - r, V = !0);

            V ? (I -= .8 * (I - f[p][0]), "number" === typeof O && (O -= .8 * (O - f[p][1])), g()) : f[p] = [I, O];
            n || (m[p] = z - k, m[a] = r);
            m = n ? 1 / y : y;
            d[a] = r;
            d[p] = e;
            l[n ? b ? "scaleY" : "scaleX" : "scale" + u] = y;
            l["translate" + u] = m * k + (I - m * w);
          };

          f.prototype.reset = function (b, e) {
            var g = this.chart,
                l = g.hoverSeries,
                d = g.hoverPoint,
                h = g.hoverPoints,
                m = g.tooltip,
                f = m && m.shared ? h : d;
            b && f && N(f).forEach(function (e) {
              e.series.isCartesian && "undefined" === typeof e.plotX && (b = !1);
            });
            if (b) m && f && N(f).length && (m.refresh(f), m.shared && h ? h.forEach(function (e) {
              e.setState(e.state, !0);
              e.series.isCartesian && (e.series.xAxis.crosshair && e.series.xAxis.drawCrosshair(null, e), e.series.yAxis.crosshair && e.series.yAxis.drawCrosshair(null, e));
            }) : d && (d.setState(d.state, !0), g.axes.forEach(function (e) {
              e.crosshair && d.series[e.coll] === e && e.drawCrosshair(null, d);
            })));else {
              if (d) d.onMouseOut();
              h && h.forEach(function (e) {
                e.setState();
              });
              if (l) l.onMouseOut();
              m && m.hide(e);
              this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
              g.axes.forEach(function (e) {
                e.hideCrosshair();
              });
              this.hoverX = g.hoverPoints = g.hoverPoint = null;
            }
          };

          f.prototype.runPointActions = function (g, e) {
            var h = this.chart,
                l = h.tooltip && h.tooltip.options.enabled ? h.tooltip : void 0,
                m = l ? l.shared : !1,
                f = e || h.hoverPoint,
                y = f && f.series || h.hoverSeries;
            y = this.getHoverData(f, y, h.series, (!g || "touchmove" !== g.type) && (!!e || y && y.directTouch && this.isDirectTouch), m, g);
            f = y.hoverPoint;
            var v = y.hoverPoints;
            e = (y = y.hoverSeries) && y.tooltipOptions.followPointer;
            m = m && y && !y.noSharedTooltip;

            if (f && (f !== h.hoverPoint || l && l.isHidden)) {
              (h.hoverPoints || []).forEach(function (e) {
                -1 === v.indexOf(e) && e.setState();
              });
              if (h.hoverSeries !== y) y.onMouseOver();
              this.applyInactiveState(v);
              (v || []).forEach(function (e) {
                e.setState("hover");
              });
              h.hoverPoint && h.hoverPoint.firePointEvent("mouseOut");
              if (!f.series) return;
              f.firePointEvent("mouseOver");
              h.hoverPoints = v;
              h.hoverPoint = f;
              l && l.refresh(m ? v : f, g);
            } else e && l && !l.isHidden && (f = l.getAnchor([{}], g), l.updatePosition({
              plotX: f[0],
              plotY: f[1]
            }));

            this.unDocMouseMove || (this.unDocMouseMove = M(h.container.ownerDocument, "mousemove", function (e) {
              var l = b[d.hoverChartIndex];
              if (l) l.pointer.onDocumentMouseMove(e);
            }));
            h.axes.forEach(function (e) {
              var b = t((e.crosshair || {}).snap, !0),
                  l;
              b && ((l = h.hoverPoint) && l.series[e.coll] === e || (l = F(v, function (c) {
                return c.series[e.coll] === e;
              })));
              l || !b ? e.drawCrosshair(g, l) : e.hideCrosshair();
            });
          };

          f.prototype.scaleGroups = function (b, e) {
            var g = this.chart,
                l;
            g.series.forEach(function (d) {
              l = b || d.getPlotBox();
              d.xAxis && d.xAxis.zoomEnabled && d.group && (d.group.attr(l), d.markerGroup && (d.markerGroup.attr(l), d.markerGroup.clip(e ? g.clipRect : null)), d.dataLabelsGroup && d.dataLabelsGroup.attr(l));
            });
            g.clipRect.attr(e || g.clipBox);
          };

          f.prototype.setDOMEvents = function () {
            var b = this.chart.container,
                e = b.ownerDocument;
            b.onmousedown = this.onContainerMouseDown.bind(this);
            b.onmousemove = this.onContainerMouseMove.bind(this);
            b.onclick = this.onContainerClick.bind(this);
            this.unbindContainerMouseLeave = M(b, "mouseleave", this.onContainerMouseLeave.bind(this));
            d.unbindDocumentMouseUp || (d.unbindDocumentMouseUp = M(e, "mouseup", this.onDocumentMouseUp.bind(this)));
            d.hasTouch && (M(b, "touchstart", this.onContainerTouchStart.bind(this)), M(b, "touchmove", this.onContainerTouchMove.bind(this)), d.unbindDocumentTouchEnd || (d.unbindDocumentTouchEnd = M(e, "touchend", this.onDocumentTouchEnd.bind(this))));
          };

          f.prototype.setHoverChartIndex = function () {
            var b = this.chart,
                e = d.charts[t(d.hoverChartIndex, -1)];
            if (e && e !== b) e.pointer.onContainerMouseLeave({
              relatedTarget: !0
            });
            e && e.mouseIsDown || (d.hoverChartIndex = b.index);
          };

          f.prototype.touch = function (b, e) {
            var g = this.chart,
                l;
            this.setHoverChartIndex();
            if (1 === b.touches.length) {
              if (b = this.normalize(b), (l = g.isInsidePlot(b.chartX - g.plotLeft, b.chartY - g.plotTop)) && !g.openMenu) {
                e && this.runPointActions(b);

                if ("touchmove" === b.type) {
                  e = this.pinchDown;
                  var d = e[0] ? 4 <= Math.sqrt(Math.pow(e[0].chartX - b.chartX, 2) + Math.pow(e[0].chartY - b.chartY, 2)) : !1;
                }

                t(d, !0) && this.pinch(b);
              } else e && this.reset();
            } else 2 === b.touches.length && this.pinch(b);
          };

          f.prototype.zoomOption = function (b) {
            var e = this.chart,
                g = e.options.chart,
                l = g.zoomType || "";
            e = e.inverted;
            /touch/.test(b.type) && (l = t(g.pinchType, l));
            this.zoomX = b = /x/.test(l);
            this.zoomY = l = /y/.test(l);
            this.zoomHor = b && !e || l && e;
            this.zoomVert = l && !e || b && e;
            this.hasZoom = b || l;
          };

          return f;
        }();

        d.Pointer = f;
        return d.Pointer;
      });
      Q(A, "parts/MSPointer.js", [A["parts/Globals.js"], A["parts/Pointer.js"], A["parts/Utilities.js"]], function (d, f, E) {
        function q() {
          var d = [];

          d.item = function (d) {
            return this[d];
          };

          x(w, function (f) {
            d.push({
              pageX: f.pageX,
              pageY: f.pageY,
              target: f.target
            });
          });
          return d;
        }

        function M(f, n, m, b) {
          "touch" !== f.pointerType && f.pointerType !== f.MSPOINTER_TYPE_TOUCH || !H[d.hoverChartIndex] || (b(f), b = H[d.hoverChartIndex].pointer, b[n]({
            type: m,
            target: f.currentTarget,
            preventDefault: D,
            touches: q()
          }));
        }

        var K = this && this.__extends || function () {
          var _d = function d(f, m) {
            _d = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (b, g) {
              b.__proto__ = g;
            } || function (b, g) {
              for (var d in g) {
                g.hasOwnProperty(d) && (b[d] = g[d]);
              }
            };

            return _d(f, m);
          };

          return function (f, m) {
            function b() {
              this.constructor = f;
            }

            _d(f, m);

            f.prototype = null === m ? Object.create(m) : (b.prototype = m.prototype, new b());
          };
        }(),
            J = E.addEvent,
            L = E.css,
            x = E.objectEach,
            F = E.removeEvent,
            H = d.charts,
            C = d.doc,
            D = d.noop,
            w = {},
            n = !!d.win.PointerEvent;

        return function (d) {
          function f() {
            return null !== d && d.apply(this, arguments) || this;
          }

          K(f, d);

          f.prototype.batchMSEvents = function (d) {
            d(this.chart.container, n ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
            d(this.chart.container, n ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
            d(C, n ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
          };

          f.prototype.destroy = function () {
            this.batchMSEvents(F);
            d.prototype.destroy.call(this);
          };

          f.prototype.init = function (m, b) {
            d.prototype.init.call(this, m, b);
            this.hasZoom && L(m.container, {
              "-ms-touch-action": "none",
              "touch-action": "none"
            });
          };

          f.prototype.onContainerPointerDown = function (d) {
            M(d, "onContainerTouchStart", "touchstart", function (b) {
              w[b.pointerId] = {
                pageX: b.pageX,
                pageY: b.pageY,
                target: b.currentTarget
              };
            });
          };

          f.prototype.onContainerPointerMove = function (d) {
            M(d, "onContainerTouchMove", "touchmove", function (b) {
              w[b.pointerId] = {
                pageX: b.pageX,
                pageY: b.pageY
              };
              w[b.pointerId].target || (w[b.pointerId].target = b.currentTarget);
            });
          };

          f.prototype.onDocumentPointerUp = function (d) {
            M(d, "onDocumentTouchEnd", "touchend", function (b) {
              delete w[b.pointerId];
            });
          };

          f.prototype.setDOMEvents = function () {
            d.prototype.setDOMEvents.call(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(J);
          };

          return f;
        }(f);
      });
      Q(A, "parts/Legend.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.addEvent,
            q = f.animObject,
            M = f.css,
            K = f.defined,
            J = f.discardElement,
            L = f.find,
            x = f.fireEvent,
            F = f.format,
            H = f.isNumber,
            C = f.merge,
            D = f.pick,
            w = f.relativeLength,
            n = f.setAnimation,
            t = f.stableSort,
            N = f.syncTimeout;
        f = f.wrap;

        var m = d.isFirefox,
            b = d.marginNames,
            g = d.win,
            v = function () {
          function g(e, b) {
            this.allItems = [];
            this.contentGroup = this.box = void 0;
            this.display = !1;
            this.group = void 0;
            this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
            this.options = {};
            this.padding = 0;
            this.pages = [];
            this.proximate = !1;
            this.scrollGroup = void 0;
            this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
            this.chart = e;
            this.init(e, b);
          }

          g.prototype.init = function (e, b) {
            this.chart = e;
            this.setOptions(b);
            b.enabled && (this.render(), E(this.chart, "endResize", function () {
              this.legend.positionCheckboxes();
            }), this.proximate ? this.unchartrender = E(this.chart, "render", function () {
              this.legend.proximatePositions();
              this.legend.positionItems();
            }) : this.unchartrender && this.unchartrender());
          };

          g.prototype.setOptions = function (e) {
            var b = D(e.padding, 8);
            this.options = e;
            this.chart.styledMode || (this.itemStyle = e.itemStyle, this.itemHiddenStyle = C(this.itemStyle, e.itemHiddenStyle));
            this.itemMarginTop = e.itemMarginTop || 0;
            this.itemMarginBottom = e.itemMarginBottom || 0;
            this.padding = b;
            this.initialItemY = b - 5;
            this.symbolWidth = D(e.symbolWidth, 16);
            this.pages = [];
            this.proximate = "proximate" === e.layout && !this.chart.inverted;
            this.baseline = void 0;
          };

          g.prototype.update = function (e, b) {
            var g = this.chart;
            this.setOptions(C(!0, this.options, e));
            this.destroy();
            g.isDirtyLegend = g.isDirtyBox = !0;
            D(b, !0) && g.redraw();
            x(this, "afterUpdate");
          };

          g.prototype.colorizeItem = function (e, b) {
            e.legendGroup[b ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

            if (!this.chart.styledMode) {
              var g = this.options,
                  d = e.legendItem,
                  h = e.legendLine,
                  m = e.legendSymbol,
                  f = this.itemHiddenStyle.color;
              g = b ? g.itemStyle.color : f;
              var p = b ? e.color || f : f,
                  v = e.options && e.options.marker,
                  n = {
                fill: p
              };
              d && d.css({
                fill: g,
                color: g
              });
              h && h.attr({
                stroke: p
              });
              m && (v && m.isMarker && (n = e.pointAttribs(), b || (n.stroke = n.fill = f)), m.attr(n));
            }

            x(this, "afterColorizeItem", {
              item: e,
              visible: b
            });
          };

          g.prototype.positionItems = function () {
            this.allItems.forEach(this.positionItem, this);
            this.chart.isResizing || this.positionCheckboxes();
          };

          g.prototype.positionItem = function (e) {
            var b = this.options,
                g = b.symbolPadding;
            b = !b.rtl;
            var d = e._legendItemPos,
                h = d[0];
            d = d[1];
            var m = e.checkbox;
            if ((e = e.legendGroup) && e.element) e[K(e.translateY) ? "animate" : "attr"]({
              translateX: b ? h : this.legendWidth - h - 2 * g - 4,
              translateY: d
            });
            m && (m.x = h, m.y = d);
          };

          g.prototype.destroyItem = function (e) {
            var b = e.checkbox;
            ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (b) {
              e[b] && (e[b] = e[b].destroy());
            });
            b && J(e.checkbox);
          };

          g.prototype.destroy = function () {
            function b(b) {
              this[b] && (this[b] = this[b].destroy());
            }

            this.getAllItems().forEach(function (e) {
              ["legendItem", "legendGroup"].forEach(b, e);
            });
            "clipRect up down pager nav box title group".split(" ").forEach(b, this);
            this.display = null;
          };

          g.prototype.positionCheckboxes = function () {
            var b = this.group && this.group.alignAttr,
                g = this.clipHeight || this.legendHeight,
                l = this.titleHeight;

            if (b) {
              var d = b.translateY;
              this.allItems.forEach(function (e) {
                var h = e.checkbox;

                if (h) {
                  var m = d + l + h.y + (this.scrollOffset || 0) + 3;
                  M(h, {
                    left: b.translateX + e.checkboxOffset + h.x - 20 + "px",
                    top: m + "px",
                    display: this.proximate || m > d - 6 && m < d + g - 6 ? "" : "none"
                  });
                }
              }, this);
            }
          };

          g.prototype.renderTitle = function () {
            var b = this.options,
                g = this.padding,
                l = b.title,
                d = 0;
            l.text && (this.title || (this.title = this.chart.renderer.label(l.text, g - 3, g - 4, null, null, null, b.useHTML, null, "legend-title").attr({
              zIndex: 1
            }), this.chart.styledMode || this.title.css(l.style), this.title.add(this.group)), l.width || this.title.css({
              width: this.maxLegendWidth + "px"
            }), b = this.title.getBBox(), d = b.height, this.offsetWidth = b.width, this.contentGroup.attr({
              translateY: d
            }));
            this.titleHeight = d;
          };

          g.prototype.setText = function (b) {
            var e = this.options;
            b.legendItem.attr({
              text: e.labelFormat ? F(e.labelFormat, b, this.chart) : e.labelFormatter.call(b)
            });
          };

          g.prototype.renderItem = function (b) {
            var e = this.chart,
                g = e.renderer,
                d = this.options,
                h = this.symbolWidth,
                m = d.symbolPadding,
                f = this.itemStyle,
                v = this.itemHiddenStyle,
                n = "horizontal" === d.layout ? D(d.itemDistance, 20) : 0,
                w = !d.rtl,
                c = b.legendItem,
                a = !b.series,
                k = !a && b.series.drawLegendSymbol ? b.series : b,
                r = k.options;
            r = this.createCheckboxForItem && r && r.showCheckbox;
            n = h + m + n + (r ? 20 : 0);
            var z = d.useHTML,
                t = b.options.className;
            c || (b.legendGroup = g.g("legend-item").addClass("highcharts-" + k.type + "-series highcharts-color-" + b.colorIndex + (t ? " " + t : "") + (a ? " highcharts-series-" + b.index : "")).attr({
              zIndex: 1
            }).add(this.scrollGroup), b.legendItem = c = g.text("", w ? h + m : -m, this.baseline || 0, z), e.styledMode || c.css(C(b.visible ? f : v)), c.attr({
              align: w ? "left" : "right",
              zIndex: 2
            }).add(b.legendGroup), this.baseline || (this.fontMetrics = g.fontMetrics(e.styledMode ? 12 : f.fontSize, c), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, c.attr("y", this.baseline)), this.symbolHeight = d.symbolHeight || this.fontMetrics.f, k.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, c, z));
            r && !b.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b);
            this.colorizeItem(b, b.visible);
            !e.styledMode && f.width || c.css({
              width: (d.itemWidth || this.widthOption || e.spacingBox.width) - n + "px"
            });
            this.setText(b);
            e = c.getBBox();
            b.itemWidth = b.checkboxOffset = d.itemWidth || b.legendItemWidth || e.width + n;
            this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
            this.totalItemWidth += b.itemWidth;
            this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || e.height || this.symbolHeight);
          };

          g.prototype.layoutItem = function (b) {
            var e = this.options,
                g = this.padding,
                d = "horizontal" === e.layout,
                h = b.itemHeight,
                m = this.itemMarginBottom,
                f = this.itemMarginTop,
                v = d ? D(e.itemDistance, 20) : 0,
                n = this.maxLegendWidth;
            e = e.alignColumns && this.totalItemWidth > n ? this.maxItemWidth : b.itemWidth;
            d && this.itemX - g + e > n && (this.itemX = g, this.lastLineHeight && (this.itemY += f + this.lastLineHeight + m), this.lastLineHeight = 0);
            this.lastItemY = f + this.itemY + m;
            this.lastLineHeight = Math.max(h, this.lastLineHeight);
            b._legendItemPos = [this.itemX, this.itemY];
            d ? this.itemX += e : (this.itemY += f + h + m, this.lastLineHeight = h);
            this.offsetWidth = this.widthOption || Math.max((d ? this.itemX - g - (b.checkbox ? 0 : v) : e) + g, this.offsetWidth);
          };

          g.prototype.getAllItems = function () {
            var b = [];
            this.chart.series.forEach(function (e) {
              var g = e && e.options;
              e && D(g.showInLegend, K(g.linkedTo) ? !1 : void 0, !0) && (b = b.concat(e.legendItems || ("point" === g.legendType ? e.data : e)));
            });
            x(this, "afterGetAllItems", {
              allItems: b
            });
            return b;
          };

          g.prototype.getAlignment = function () {
            var b = this.options;
            return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
          };

          g.prototype.adjustMargins = function (e, g) {
            var l = this.chart,
                d = this.options,
                h = this.getAlignment();
            h && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (m, f) {
              m.test(h) && !K(e[f]) && (l[b[f]] = Math.max(l[b[f]], l.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * d[f % 2 ? "x" : "y"] + D(d.margin, 12) + g[f] + (l.titleOffset[f] || 0)));
            });
          };

          g.prototype.proximatePositions = function () {
            var b = this.chart,
                g = [],
                l = "left" === this.options.align;
            this.allItems.forEach(function (e) {
              var d = l;

              if (e.yAxis && e.points) {
                e.xAxis.options.reversed && (d = !d);
                var h = L(d ? e.points : e.points.slice(0).reverse(), function (b) {
                  return H(b.plotY);
                });
                d = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom;
                var m = e.yAxis.top - b.plotTop;
                e.visible ? (h = h ? h.plotY : e.yAxis.height, h += m - .3 * d) : h = m + e.yAxis.height;
                g.push({
                  target: h,
                  size: d,
                  item: e
                });
              }
            }, this);
            d.distribute(g, b.plotHeight);
            g.forEach(function (e) {
              e.item._legendItemPos[1] = b.plotTop - b.spacing[0] + e.pos;
            });
          };

          g.prototype.render = function () {
            var b = this.chart,
                g = b.renderer,
                l = this.group,
                d = this.box,
                h = this.options,
                m = this.padding;
            this.itemX = m;
            this.itemY = this.initialItemY;
            this.lastItemY = this.offsetWidth = 0;
            this.widthOption = w(h.width, b.spacingBox.width - m);
            var f = b.spacingBox.width - 2 * m - h.x;
            -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (f /= 2);
            this.maxLegendWidth = this.widthOption || f;
            l || (this.group = l = g.g("legend").attr({
              zIndex: 7
            }).add(), this.contentGroup = g.g().attr({
              zIndex: 1
            }).add(l), this.scrollGroup = g.g().add(this.contentGroup));
            this.renderTitle();
            var v = this.getAllItems();
            t(v, function (b, c) {
              return (b.options && b.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0);
            });
            h.reversed && v.reverse();
            this.allItems = v;
            this.display = f = !!v.length;
            this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
            v.forEach(this.renderItem, this);
            v.forEach(this.layoutItem, this);
            v = (this.widthOption || this.offsetWidth) + m;
            var n = this.lastItemY + this.lastLineHeight + this.titleHeight;
            n = this.handleOverflow(n);
            n += m;
            d || (this.box = d = g.rect().addClass("highcharts-legend-box").attr({
              r: h.borderRadius
            }).add(l), d.isNew = !0);
            b.styledMode || d.attr({
              stroke: h.borderColor,
              "stroke-width": h.borderWidth || 0,
              fill: h.backgroundColor || "none"
            }).shadow(h.shadow);
            0 < v && 0 < n && (d[d.isNew ? "attr" : "animate"](d.crisp.call({}, {
              x: 0,
              y: 0,
              width: v,
              height: n
            }, d.strokeWidth())), d.isNew = !1);
            d[f ? "show" : "hide"]();
            b.styledMode && "none" === l.getStyle("display") && (v = n = 0);
            this.legendWidth = v;
            this.legendHeight = n;
            f && this.align();
            this.proximate || this.positionItems();
            x(this, "afterRender");
          };

          g.prototype.align = function (b) {
            void 0 === b && (b = this.chart.spacingBox);
            var e = this.chart,
                g = this.options,
                d = b.y;
            /(lth|ct|rth)/.test(this.getAlignment()) && 0 < e.titleOffset[0] ? d += e.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < e.titleOffset[2] && (d -= e.titleOffset[2]);
            d !== b.y && (b = C(b, {
              y: d
            }));
            this.group.align(C(g, {
              width: this.legendWidth,
              height: this.legendHeight,
              verticalAlign: this.proximate ? "top" : g.verticalAlign
            }), !0, b);
          };

          g.prototype.handleOverflow = function (b) {
            var e = this,
                g = this.chart,
                d = g.renderer,
                h = this.options,
                m = h.y,
                f = this.padding;
            m = g.spacingBox.height + ("top" === h.verticalAlign ? -m : m) - f;

            var v = h.maxHeight,
                n,
                w = this.clipRect,
                c = h.navigation,
                a = D(c.animation, !0),
                k = c.arrowSize || 12,
                r = this.nav,
                z = this.pages,
                t,
                x = this.allItems,
                q = function q(a) {
              "number" === typeof a ? w.attr({
                height: a
              }) : w && (e.clipRect = w.destroy(), e.contentGroup.clip());
              e.contentGroup.div && (e.contentGroup.div.style.clip = a ? "rect(" + f + "px,9999px," + (f + a) + "px,0)" : "auto");
            },
                C = function C(a) {
              e[a] = d.circle(0, 0, 1.3 * k).translate(k / 2, k / 2).add(r);
              g.styledMode || e[a].attr("fill", "rgba(0,0,0,0.0001)");
              return e[a];
            };

            "horizontal" !== h.layout || "middle" === h.verticalAlign || h.floating || (m /= 2);
            v && (m = Math.min(m, v));
            z.length = 0;
            b > m && !1 !== c.enabled ? (this.clipHeight = n = Math.max(m - 20 - this.titleHeight - f, 0), this.currentPage = D(this.currentPage, 1), this.fullHeight = b, x.forEach(function (a, c) {
              var b = a._legendItemPos[1],
                  e = Math.round(a.legendItem.getBBox().height),
                  k = z.length;
              if (!k || b - z[k - 1] > n && (t || b) !== z[k - 1]) z.push(t || b), k++;
              a.pageIx = k - 1;
              t && (x[c - 1].pageIx = k - 1);
              c === x.length - 1 && b + e - z[k - 1] > n && b !== t && (z.push(b), a.pageIx = k);
              b !== t && (t = b);
            }), w || (w = e.clipRect = d.clipRect(0, f, 9999, 0), e.contentGroup.clip(w)), q(n), r || (this.nav = r = d.g().attr({
              zIndex: 1
            }).add(this.group), this.up = d.symbol("triangle", 0, 0, k, k).add(r), C("upTracker").on("click", function () {
              e.scroll(-1, a);
            }), this.pager = d.text("", 15, 10).addClass("highcharts-legend-navigation"), g.styledMode || this.pager.css(c.style), this.pager.add(r), this.down = d.symbol("triangle-down", 0, 0, k, k).add(r), C("downTracker").on("click", function () {
              e.scroll(1, a);
            })), e.scroll(0), b = m) : r && (q(), this.nav = r.destroy(), this.scrollGroup.attr({
              translateY: 1
            }), this.clipHeight = 0);
            return b;
          };

          g.prototype.scroll = function (b, g) {
            var e = this,
                d = this.chart,
                h = this.pages,
                m = h.length,
                f = this.currentPage + b;
            b = this.clipHeight;
            var p = this.options.navigation,
                v = this.pager,
                w = this.padding;
            f > m && (f = m);
            0 < f && ("undefined" !== typeof g && n(g, d), this.nav.attr({
              translateX: w,
              translateY: b + this.padding + 7 + this.titleHeight,
              visibility: "visible"
            }), [this.up, this.upTracker].forEach(function (c) {
              c.attr({
                "class": 1 === f ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }), v.attr({
              text: f + "/" + m
            }), [this.down, this.downTracker].forEach(function (c) {
              c.attr({
                x: 18 + this.pager.getBBox().width,
                "class": f === m ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
              });
            }, this), d.styledMode || (this.up.attr({
              fill: 1 === f ? p.inactiveColor : p.activeColor
            }), this.upTracker.css({
              cursor: 1 === f ? "default" : "pointer"
            }), this.down.attr({
              fill: f === m ? p.inactiveColor : p.activeColor
            }), this.downTracker.css({
              cursor: f === m ? "default" : "pointer"
            })), this.scrollOffset = -h[f - 1] + this.initialItemY, this.scrollGroup.animate({
              translateY: this.scrollOffset
            }), this.currentPage = f, this.positionCheckboxes(), g = q(D(g, d.renderer.globalAnimation, !0)), N(function () {
              x(e, "afterScroll", {
                currentPage: f
              });
            }, g.duration || 0));
          };

          return g;
        }();

        (/Trident\/7\.0/.test(g.navigator && g.navigator.userAgent) || m) && f(v.prototype, "positionItem", function (b, e) {
          var g = this,
              d = function d() {
            e._legendItemPos && b.call(g, e);
          };

          d();
          g.bubbleLegend || setTimeout(d);
        });
        d.Legend = v;
        return d.Legend;
      });
      Q(A, "parts/Chart.js", [A["parts/Globals.js"], A["parts/Legend.js"], A["parts/MSPointer.js"], A["parts/Pointer.js"], A["parts/Time.js"], A["parts/Utilities.js"]], function (d, f, E, q, M, K) {
        var J = K.addEvent,
            L = K.animate,
            x = K.animObject,
            F = K.attr,
            H = K.createElement,
            C = K.css,
            D = K.defined,
            w = K.discardElement,
            n = K.erase,
            t = K.error,
            N = K.extend,
            m = K.find,
            b = K.fireEvent,
            g = K.getStyle,
            v = K.isArray,
            h = K.isFunction,
            e = K.isNumber,
            p = K.isObject,
            l = K.isString,
            I = K.merge,
            u = K.numberFormat,
            y = K.objectEach,
            G = K.pick,
            S = K.pInt,
            R = K.relativeLength,
            B = K.removeEvent,
            c = K.setAnimation,
            a = K.splat,
            k = K.syncTimeout,
            r = K.uniqueKey,
            z = d.doc,
            P = d.Axis,
            U = d.defaultOptions,
            W = d.charts,
            Y = d.marginNames,
            T = d.seriesTypes,
            A = d.win,
            aa = d.Chart = function () {
          this.getArgs.apply(this, arguments);
        };

        d.chart = function (a, c, b) {
          return new aa(a, c, b);
        };

        N(aa.prototype, {
          callbacks: [],
          getArgs: function getArgs() {
            var a = [].slice.call(arguments);
            if (l(a[0]) || a[0].nodeName) this.renderTo = a.shift();
            this.init(a[0], a[1]);
          },
          init: function init(a, c) {
            var e,
                k = a.series,
                g = a.plotOptions || {};
            b(this, "init", {
              args: arguments
            }, function () {
              a.series = null;
              e = I(U, a);
              var l = e.chart || {};
              y(e.plotOptions, function (a, c) {
                p(a) && (a.tooltip = g[c] && I(g[c].tooltip) || void 0);
              });
              e.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
              e.series = a.series = k;
              this.userOptions = a;
              var m = l.events;
              this.margin = [];
              this.spacing = [];
              this.bounds = {
                h: {},
                v: {}
              };
              this.labelCollectors = [];
              this.callback = c;
              this.isResizing = 0;
              this.options = e;
              this.axes = [];
              this.series = [];
              this.time = a.time && Object.keys(a.time).length ? new M(a.time) : d.time;
              this.numberFormatter = l.numberFormatter || u;
              this.styledMode = l.styledMode;
              this.hasCartesianSeries = l.showAxes;
              var f = this;
              f.index = W.length;
              W.push(f);
              d.chartCount++;
              m && y(m, function (a, c) {
                h(a) && J(f, c, a);
              });
              f.xAxis = [];
              f.yAxis = [];
              f.pointCount = f.colorCounter = f.symbolCounter = 0;
              b(f, "afterInit");
              f.firstRender();
            });
          },
          initSeries: function initSeries(a) {
            var c = this.options.chart;
            c = a.type || c.type || c.defaultSeriesType;
            var b = T[c];
            b || t(17, !0, this, {
              missingModuleFor: c
            });
            c = new b();
            c.init(this, a);
            return c;
          },
          setSeriesData: function setSeriesData() {
            this.getSeriesOrderByLinks().forEach(function (a) {
              a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1);
            });
          },
          getSeriesOrderByLinks: function getSeriesOrderByLinks() {
            return this.series.concat().sort(function (a, c) {
              return a.linkedSeries.length || c.linkedSeries.length ? c.linkedSeries.length - a.linkedSeries.length : 0;
            });
          },
          orderSeries: function orderSeries(a) {
            var c = this.series;

            for (a = a || 0; a < c.length; a++) {
              c[a] && (c[a].index = a, c[a].name = c[a].getName());
            }
          },
          isInsidePlot: function isInsidePlot(a, c, e) {
            var k = e ? c : a;
            a = e ? a : c;
            k = {
              x: k,
              y: a,
              isInsidePlot: 0 <= k && k <= this.plotWidth && 0 <= a && a <= this.plotHeight
            };
            b(this, "afterIsInsidePlot", k);
            return k.isInsidePlot;
          },
          redraw: function redraw(a) {
            b(this, "beforeRedraw");
            var e = this.axes,
                k = this.series,
                g = this.pointer,
                d = this.legend,
                l = this.userOptions.legend,
                h = this.isDirtyLegend,
                f = this.hasCartesianSeries,
                m = this.isDirtyBox,
                r = this.renderer,
                u = r.isHidden(),
                p = [];
            this.setResponsive && this.setResponsive(!1);
            c(this.hasRendered ? a : !1, this);
            u && this.temporaryDisplay();
            this.layOutTitles();

            for (a = k.length; a--;) {
              var v = k[a];

              if (v.options.stacking) {
                var z = !0;

                if (v.isDirty) {
                  var n = !0;
                  break;
                }
              }
            }

            if (n) for (a = k.length; a--;) {
              v = k[a], v.options.stacking && (v.isDirty = !0);
            }
            k.forEach(function (a) {
              a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), h = !0) : l && (l.labelFormatter || l.labelFormat) && (h = !0));
              a.isDirtyData && b(a, "updatedData");
            });
            h && d && d.options.enabled && (d.render(), this.isDirtyLegend = !1);
            z && this.getStacks();
            f && e.forEach(function (a) {
              a.updateNames();
              a.setScale();
            });
            this.getMargins();
            f && (e.forEach(function (a) {
              a.isDirty && (m = !0);
            }), e.forEach(function (a) {
              var c = a.min + "," + a.max;
              a.extKey !== c && (a.extKey = c, p.push(function () {
                b(a, "afterSetExtremes", N(a.eventArgs, a.getExtremes()));
                delete a.eventArgs;
              }));
              (m || z) && a.redraw();
            }));
            m && this.drawChartBox();
            b(this, "predraw");
            k.forEach(function (a) {
              (m || a.isDirty) && a.visible && a.redraw();
              a.isDirtyData = !1;
            });
            g && g.reset(!0);
            r.draw();
            b(this, "redraw");
            b(this, "render");
            u && this.temporaryDisplay(!0);
            p.forEach(function (a) {
              a.call();
            });
          },
          get: function get(a) {
            function c(c) {
              return c.id === a || c.options && c.options.id === a;
            }

            var b = this.series,
                e;
            var k = m(this.axes, c) || m(this.series, c);

            for (e = 0; !k && e < b.length; e++) {
              k = m(b[e].points || [], c);
            }

            return k;
          },
          getAxes: function getAxes() {
            var c = this,
                e = this.options,
                k = e.xAxis = a(e.xAxis || {});
            e = e.yAxis = a(e.yAxis || {});
            b(this, "getAxes");
            k.forEach(function (a, c) {
              a.index = c;
              a.isX = !0;
            });
            e.forEach(function (a, c) {
              a.index = c;
            });
            k.concat(e).forEach(function (a) {
              new P(c, a);
            });
            b(this, "afterGetAxes");
          },
          getSelectedPoints: function getSelectedPoints() {
            var a = [];
            this.series.forEach(function (c) {
              a = a.concat(c.getPointsCollection().filter(function (a) {
                return G(a.selectedStaging, a.selected);
              }));
            });
            return a;
          },
          getSelectedSeries: function getSelectedSeries() {
            return this.series.filter(function (a) {
              return a.selected;
            });
          },
          setTitle: function setTitle(a, c, b) {
            this.applyDescription("title", a);
            this.applyDescription("subtitle", c);
            this.applyDescription("caption", void 0);
            this.layOutTitles(b);
          },
          applyDescription: function applyDescription(a, c) {
            var b = this,
                e = "title" === a ? {
              color: "#333333",
              fontSize: this.options.isStock ? "16px" : "18px"
            } : {
              color: "#666666"
            };
            e = this.options[a] = I(!this.styledMode && {
              style: e
            }, this.options[a], c);
            var k = this[a];
            k && c && (this[a] = k = k.destroy());
            e && !k && (k = this.renderer.text(e.text, 0, 0, e.useHTML).attr({
              align: e.align,
              "class": "highcharts-" + a,
              zIndex: e.zIndex || 4
            }).add(), k.update = function (c) {
              b[{
                title: "setTitle",
                subtitle: "setSubtitle",
                caption: "setCaption"
              }[a]](c);
            }, this.styledMode || k.css(e.style), this[a] = k);
          },
          layOutTitles: function layOutTitles(a) {
            var c = [0, 0, 0],
                e = this.renderer,
                k = this.spacingBox;
            ["title", "subtitle", "caption"].forEach(function (a) {
              var b = this[a],
                  g = this.options[a],
                  d = g.verticalAlign || "top";
              a = "title" === a ? -3 : "top" === d ? c[0] + 2 : 0;

              if (b) {
                if (!this.styledMode) var l = g.style.fontSize;
                l = e.fontMetrics(l, b).b;
                b.css({
                  width: (g.width || k.width + (g.widthAdjust || 0)) + "px"
                });
                var h = Math.round(b.getBBox(g.useHTML).height);
                b.align(N({
                  y: "bottom" === d ? l : a + l,
                  height: h
                }, g), !1, "spacingBox");
                g.floating || ("top" === d ? c[0] = Math.ceil(c[0] + h) : "bottom" === d && (c[2] = Math.ceil(c[2] + h)));
              }
            }, this);
            c[0] && "top" === (this.options.title.verticalAlign || "top") && (c[0] += this.options.title.margin);
            c[2] && "bottom" === this.options.caption.verticalAlign && (c[2] += this.options.caption.margin);
            var g = !this.titleOffset || this.titleOffset.join(",") !== c.join(",");
            this.titleOffset = c;
            b(this, "afterLayOutTitles");
            !this.isDirtyBox && g && (this.isDirtyBox = this.isDirtyLegend = g, this.hasRendered && G(a, !0) && this.isDirtyBox && this.redraw());
          },
          getChartSize: function getChartSize() {
            var a = this.options.chart,
                c = a.width;
            a = a.height;
            var b = this.renderTo;
            D(c) || (this.containerWidth = g(b, "width"));
            D(a) || (this.containerHeight = g(b, "height"));
            this.chartWidth = Math.max(0, c || this.containerWidth || 600);
            this.chartHeight = Math.max(0, R(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
          },
          temporaryDisplay: function temporaryDisplay(a) {
            var c = this.renderTo;
            if (a) for (; c && c.style;) {
              c.hcOrigStyle && (C(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (z.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode;
            } else for (; c && c.style;) {
              z.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, z.body.appendChild(c));
              if ("none" === g(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = {
                display: c.style.display,
                height: c.style.height,
                overflow: c.style.overflow
              }, a = {
                display: "block",
                overflow: "hidden"
              }, c !== this.renderTo && (a.height = 0), C(c, a), c.offsetWidth || c.style.setProperty("display", "block", "important");
              c = c.parentNode;
              if (c === z.body) break;
            }
          },
          setClassName: function setClassName(a) {
            this.container.className = "highcharts-container " + (a || "");
          },
          getContainer: function getContainer() {
            var a = this.options,
                k = a.chart;
            var g = this.renderTo;
            var h = r(),
                m,
                f;
            g || (this.renderTo = g = k.renderTo);
            l(g) && (this.renderTo = g = z.getElementById(g));
            g || t(13, !0, this);
            var u = S(F(g, "data-highcharts-chart"));
            e(u) && W[u] && W[u].hasRendered && W[u].destroy();
            F(g, "data-highcharts-chart", this.index);
            g.innerHTML = "";
            k.skipClone || g.offsetWidth || this.temporaryDisplay();
            this.getChartSize();
            u = this.chartWidth;
            var p = this.chartHeight;
            C(g, {
              overflow: "hidden"
            });
            this.styledMode || (m = N({
              position: "relative",
              overflow: "hidden",
              width: u + "px",
              height: p + "px",
              textAlign: "left",
              lineHeight: "normal",
              zIndex: 0,
              "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
            }, k.style));
            this.container = g = H("div", {
              id: h
            }, m, g);
            this._cursor = g.style.cursor;
            this.renderer = new (d[k.renderer] || d.Renderer)(g, u, p, null, k.forExport, a.exporting && a.exporting.allowHTML, this.styledMode);
            c(void 0, this);
            this.setClassName(k.className);
            if (this.styledMode) for (f in a.defs) {
              this.renderer.definition(a.defs[f]);
            } else this.renderer.setStyle(k.style);
            this.renderer.chartIndex = this.index;
            b(this, "afterGetContainer");
          },
          getMargins: function getMargins(a) {
            var c = this.spacing,
                e = this.margin,
                k = this.titleOffset;
            this.resetMargins();
            k[0] && !D(e[0]) && (this.plotTop = Math.max(this.plotTop, k[0] + c[0]));
            k[2] && !D(e[2]) && (this.marginBottom = Math.max(this.marginBottom, k[2] + c[2]));
            this.legend && this.legend.display && this.legend.adjustMargins(e, c);
            b(this, "getMargins");
            a || this.getAxisMargins();
          },
          getAxisMargins: function getAxisMargins() {
            var a = this,
                c = a.axisOffset = [0, 0, 0, 0],
                b = a.colorAxis,
                e = a.margin,
                k = function k(a) {
              a.forEach(function (a) {
                a.visible && a.getOffset();
              });
            };

            a.hasCartesianSeries ? k(a.axes) : b && b.length && k(b);
            Y.forEach(function (b, k) {
              D(e[k]) || (a[b] += c[k]);
            });
            a.setChartSize();
          },
          reflow: function reflow(a) {
            var c = this,
                b = c.options.chart,
                e = c.renderTo,
                d = D(b.width) && D(b.height),
                l = b.width || g(e, "width");
            b = b.height || g(e, "height");
            e = a ? a.target : A;

            if (!d && !c.isPrinting && l && b && (e === A || e === z)) {
              if (l !== c.containerWidth || b !== c.containerHeight) K.clearTimeout(c.reflowTimeout), c.reflowTimeout = k(function () {
                c.container && c.setSize(void 0, void 0, !1);
              }, a ? 100 : 0);
              c.containerWidth = l;
              c.containerHeight = b;
            }
          },
          setReflow: function setReflow(a) {
            var c = this;
            !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = J(A, "resize", function (a) {
              c.options && c.reflow(a);
            }), J(this, "destroy", this.unbindReflow));
          },
          setSize: function setSize(a, e, g) {
            var d = this,
                l = d.renderer;
            d.isResizing += 1;
            c(g, d);
            g = l.globalAnimation;
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            "undefined" !== typeof a && (d.options.chart.width = a);
            "undefined" !== typeof e && (d.options.chart.height = e);
            d.getChartSize();
            d.styledMode || (g ? L : C)(d.container, {
              width: d.chartWidth + "px",
              height: d.chartHeight + "px"
            }, g);
            d.setChartSize(!0);
            l.setSize(d.chartWidth, d.chartHeight, g);
            d.axes.forEach(function (a) {
              a.isDirty = !0;
              a.setScale();
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(g);
            d.oldChartHeight = null;
            b(d, "resize");
            k(function () {
              d && b(d, "endResize", null, function () {
                --d.isResizing;
              });
            }, x(g).duration || 0);
          },
          setChartSize: function setChartSize(a) {
            var c = this.inverted,
                e = this.renderer,
                k = this.chartWidth,
                g = this.chartHeight,
                d = this.options.chart,
                l = this.spacing,
                h = this.clipOffset,
                m,
                f,
                r,
                u;
            this.plotLeft = m = Math.round(this.plotLeft);
            this.plotTop = f = Math.round(this.plotTop);
            this.plotWidth = r = Math.max(0, Math.round(k - m - this.marginRight));
            this.plotHeight = u = Math.max(0, Math.round(g - f - this.marginBottom));
            this.plotSizeX = c ? u : r;
            this.plotSizeY = c ? r : u;
            this.plotBorderWidth = d.plotBorderWidth || 0;
            this.spacingBox = e.spacingBox = {
              x: l[3],
              y: l[0],
              width: k - l[3] - l[1],
              height: g - l[0] - l[2]
            };
            this.plotBox = e.plotBox = {
              x: m,
              y: f,
              width: r,
              height: u
            };
            k = 2 * Math.floor(this.plotBorderWidth / 2);
            c = Math.ceil(Math.max(k, h[3]) / 2);
            e = Math.ceil(Math.max(k, h[0]) / 2);
            this.clipBox = {
              x: c,
              y: e,
              width: Math.floor(this.plotSizeX - Math.max(k, h[1]) / 2 - c),
              height: Math.max(0, Math.floor(this.plotSizeY - Math.max(k, h[2]) / 2 - e))
            };
            a || this.axes.forEach(function (a) {
              a.setAxisSize();
              a.setAxisTranslation();
            });
            b(this, "afterSetChartSize", {
              skipAxes: a
            });
          },
          resetMargins: function resetMargins() {
            b(this, "resetMargins");
            var a = this,
                c = a.options.chart;
            ["margin", "spacing"].forEach(function (b) {
              var e = c[b],
                  k = p(e) ? e : [e, e, e, e];
              ["Top", "Right", "Bottom", "Left"].forEach(function (e, g) {
                a[b][g] = G(c[b + e], k[g]);
              });
            });
            Y.forEach(function (c, b) {
              a[c] = G(a.margin[b], a.spacing[b]);
            });
            a.axisOffset = [0, 0, 0, 0];
            a.clipOffset = [0, 0, 0, 0];
          },
          drawChartBox: function drawChartBox() {
            var a = this.options.chart,
                c = this.renderer,
                e = this.chartWidth,
                k = this.chartHeight,
                g = this.chartBackground,
                d = this.plotBackground,
                l = this.plotBorder,
                h = this.styledMode,
                m = this.plotBGImage,
                f = a.backgroundColor,
                r = a.plotBackgroundColor,
                u = a.plotBackgroundImage,
                p,
                v = this.plotLeft,
                z = this.plotTop,
                n = this.plotWidth,
                y = this.plotHeight,
                w = this.plotBox,
                t = this.clipRect,
                B = this.clipBox,
                P = "animate";
            g || (this.chartBackground = g = c.rect().addClass("highcharts-background").add(), P = "attr");
            if (h) var G = p = g.strokeWidth();else {
              G = a.borderWidth || 0;
              p = G + (a.shadow ? 8 : 0);
              f = {
                fill: f || "none"
              };
              if (G || g["stroke-width"]) f.stroke = a.borderColor, f["stroke-width"] = G;
              g.attr(f).shadow(a.shadow);
            }
            g[P]({
              x: p / 2,
              y: p / 2,
              width: e - p - G % 2,
              height: k - p - G % 2,
              r: a.borderRadius
            });
            P = "animate";
            d || (P = "attr", this.plotBackground = d = c.rect().addClass("highcharts-plot-background").add());
            d[P](w);
            h || (d.attr({
              fill: r || "none"
            }).shadow(a.plotShadow), u && (m ? (u !== m.attr("href") && m.attr("href", u), m.animate(w)) : this.plotBGImage = c.image(u, v, z, n, y).add()));
            t ? t.animate({
              width: B.width,
              height: B.height
            }) : this.clipRect = c.clipRect(B);
            P = "animate";
            l || (P = "attr", this.plotBorder = l = c.rect().addClass("highcharts-plot-border").attr({
              zIndex: 1
            }).add());
            h || l.attr({
              stroke: a.plotBorderColor,
              "stroke-width": a.plotBorderWidth || 0,
              fill: "none"
            });
            l[P](l.crisp({
              x: v,
              y: z,
              width: n,
              height: y
            }, -l.strokeWidth()));
            this.isDirtyBox = !1;
            b(this, "afterDrawChartBox");
          },
          propFromSeries: function propFromSeries() {
            var a = this,
                c = a.options.chart,
                b,
                e = a.options.series,
                k,
                g;
            ["inverted", "angular", "polar"].forEach(function (d) {
              b = T[c.type || c.defaultSeriesType];
              g = c[d] || b && b.prototype[d];

              for (k = e && e.length; !g && k--;) {
                (b = T[e[k].type]) && b.prototype[d] && (g = !0);
              }

              a[d] = g;
            });
          },
          linkSeries: function linkSeries() {
            var a = this,
                c = a.series;
            c.forEach(function (a) {
              a.linkedSeries.length = 0;
            });
            c.forEach(function (c) {
              var b = c.options.linkedTo;
              l(b) && (b = ":previous" === b ? a.series[c.index - 1] : a.get(b)) && b.linkedParent !== c && (b.linkedSeries.push(c), c.linkedParent = b, b.enabledDataSorting && c.setDataSortingOptions(), c.visible = G(c.options.visible, b.options.visible, c.visible));
            });
            b(this, "afterLinkSeries");
          },
          renderSeries: function renderSeries() {
            this.series.forEach(function (a) {
              a.translate();
              a.render();
            });
          },
          renderLabels: function renderLabels() {
            var a = this,
                c = a.options.labels;
            c.items && c.items.forEach(function (b) {
              var e = N(c.style, b.style),
                  k = S(e.left) + a.plotLeft,
                  g = S(e.top) + a.plotTop + 12;
              delete e.left;
              delete e.top;
              a.renderer.text(b.html, k, g).attr({
                zIndex: 2
              }).css(e).add();
            });
          },
          render: function render() {
            var a = this.axes,
                c = this.colorAxis,
                b = this.renderer,
                e = this.options,
                k = 0,
                g = function g(a) {
              a.forEach(function (a) {
                a.visible && a.render();
              });
            };

            this.setTitle();
            this.legend = new f(this, e.legend);
            this.getStacks && this.getStacks();
            this.getMargins(!0);
            this.setChartSize();
            e = this.plotWidth;
            a.some(function (a) {
              if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return k = 21, !0;
            });
            var d = this.plotHeight = Math.max(this.plotHeight - k, 0);
            a.forEach(function (a) {
              a.setScale();
            });
            this.getAxisMargins();
            var l = 1.1 < e / this.plotWidth;
            var h = 1.05 < d / this.plotHeight;
            if (l || h) a.forEach(function (a) {
              (a.horiz && l || !a.horiz && h) && a.setTickInterval(!0);
            }), this.getMargins();
            this.drawChartBox();
            this.hasCartesianSeries ? g(a) : c && c.length && g(c);
            this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({
              zIndex: 3
            }).add());
            this.renderSeries();
            this.renderLabels();
            this.addCredits();
            this.setResponsive && this.setResponsive();
            this.updateContainerScaling();
            this.hasRendered = !0;
          },
          addCredits: function addCredits(a) {
            var c = this;
            a = I(!0, this.options.credits, a);
            a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
              a.href && (A.location.href = a.href);
            }).attr({
              align: a.position.align,
              zIndex: 8
            }), c.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
              c.credits = c.credits.destroy();
              c.addCredits(a);
            });
          },
          updateContainerScaling: function updateContainerScaling() {
            var a = this.container;

            if (a.offsetWidth && a.offsetHeight && a.getBoundingClientRect) {
              var c = a.getBoundingClientRect(),
                  b = c.width / a.offsetWidth;
              a = c.height / a.offsetHeight;
              1 !== b || 1 !== a ? this.containerScaling = {
                scaleX: b,
                scaleY: a
              } : delete this.containerScaling;
            }
          },
          destroy: function destroy() {
            var a = this,
                c = a.axes,
                e = a.series,
                k = a.container,
                g,
                l = k && k.parentNode;
            b(a, "destroy");
            a.renderer.forExport ? n(W, a) : W[a.index] = void 0;
            d.chartCount--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            B(a);

            for (g = c.length; g--;) {
              c[g] = c[g].destroy();
            }

            this.scroller && this.scroller.destroy && this.scroller.destroy();

            for (g = e.length; g--;) {
              e[g] = e[g].destroy();
            }

            "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (c) {
              var b = a[c];
              b && b.destroy && (a[c] = b.destroy());
            });
            k && (k.innerHTML = "", B(k), l && w(k));
            y(a, function (c, b) {
              delete a[b];
            });
          },
          firstRender: function firstRender() {
            var a = this,
                c = a.options;

            if (!a.isReadyToRender || a.isReadyToRender()) {
              a.getContainer();
              a.resetMargins();
              a.setChartSize();
              a.propFromSeries();
              a.getAxes();
              (v(c.series) ? c.series : []).forEach(function (c) {
                a.initSeries(c);
              });
              a.linkSeries();
              a.setSeriesData();
              b(a, "beforeRender");
              q && (a.pointer = d.hasTouch || !A.PointerEvent && !A.MSPointerEvent ? new q(a, c) : new E(a, c));
              a.render();
              if (!a.renderer.imgCount && !a.hasLoaded) a.onload();
              a.temporaryDisplay(!0);
            }
          },
          onload: function onload() {
            this.callbacks.concat([this.callback]).forEach(function (a) {
              a && "undefined" !== typeof this.index && a.apply(this, [this]);
            }, this);
            b(this, "load");
            b(this, "render");
            D(this.index) && this.setReflow(this.options.chart.reflow);
            this.hasLoaded = !0;
          }
        });
      });
      Q(A, "parts/ScrollablePlotArea.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.addEvent,
            q = f.createElement,
            A = f.pick,
            K = f.stop;
        f = d.Chart;
        "";
        E(f, "afterSetChartSize", function (f) {
          var q = this.options.chart.scrollablePlotArea,
              x = q && q.minWidth;
          q = q && q.minHeight;

          if (!this.renderer.forExport) {
            if (x) {
              if (this.scrollablePixelsX = x = Math.max(0, x - this.chartWidth)) {
                this.plotWidth += x;
                this.inverted ? (this.clipBox.height += x, this.plotBox.height += x) : (this.clipBox.width += x, this.plotBox.width += x);
                var F = {
                  1: {
                    name: "right",
                    value: x
                  }
                };
              }
            } else q && (this.scrollablePixelsY = x = Math.max(0, q - this.chartHeight)) && (this.plotHeight += x, this.inverted ? (this.clipBox.width += x, this.plotBox.width += x) : (this.clipBox.height += x, this.plotBox.height += x), F = {
              2: {
                name: "bottom",
                value: x
              }
            });

            F && !f.skipAxes && this.axes.forEach(function (f) {
              F[f.side] ? f.getPlotLinePath = function () {
                var x = F[f.side].name,
                    q = this[x];
                this[x] = q - F[f.side].value;
                var w = d.Axis.prototype.getPlotLinePath.apply(this, arguments);
                this[x] = q;
                return w;
              } : (f.setAxisSize(), f.setAxisTranslation());
            });
          }
        });
        E(f, "render", function () {
          this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });

        f.prototype.setUpScrolling = function () {
          var d = this,
              f = {
            WebkitOverflowScrolling: "touch",
            overflowX: "hidden",
            overflowY: "hidden"
          };
          this.scrollablePixelsX && (f.overflowX = "auto");
          this.scrollablePixelsY && (f.overflowY = "auto");
          this.scrollingContainer = q("div", {
            className: "highcharts-scrolling"
          }, f, this.renderTo);
          E(this.scrollingContainer, "scroll", function () {
            d.pointer && delete d.pointer.chartPosition;
          });
          this.innerContainer = q("div", {
            className: "highcharts-inner-container"
          }, null, this.scrollingContainer);
          this.innerContainer.appendChild(this.container);
          this.setUpScrolling = null;
        };

        f.prototype.moveFixedElements = function () {
          var d = this.container,
              f = this.fixedRenderer,
              x = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
              q;
          this.scrollablePixelsX && !this.inverted ? q = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? q = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? q = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (q = ".highcharts-yaxis");
          x.push(q, q + "-labels");
          x.forEach(function (x) {
            [].forEach.call(d.querySelectorAll(x), function (d) {
              (d.namespaceURI === f.SVG_NS ? f.box : f.box.parentNode).appendChild(d);
              d.style.pointerEvents = "auto";
            });
          });
        };

        f.prototype.applyFixed = function () {
          var f,
              L,
              x = !this.fixedDiv,
              F = this.options.chart.scrollablePlotArea;
          x ? (this.fixedDiv = q("div", {
            className: "highcharts-fixed"
          }, {
            position: "absolute",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 2
          }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = L = new d.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (f = this.options.chart) || void 0 === f ? void 0 : f.style), this.scrollableMask = L.path().attr({
            fill: this.options.chart.backgroundColor || "#fff",
            "fill-opacity": A(F.opacity, .85),
            zIndex: -1
          }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), E(this, "afterShowResetZoom", this.moveFixedElements), E(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
          f = this.chartWidth + (this.scrollablePixelsX || 0);
          L = this.chartHeight + (this.scrollablePixelsY || 0);
          K(this.container);
          this.container.style.width = f + "px";
          this.container.style.height = L + "px";
          this.renderer.boxWrapper.attr({
            width: f,
            height: L,
            viewBox: [0, 0, f, L].join(" ")
          });
          this.chartBackground.attr({
            width: f,
            height: L
          });
          this.scrollingContainer.style.height = this.chartHeight + "px";
          x && (F.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * F.scrollPositionX), F.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * F.scrollPositionY));
          L = this.axisOffset;
          x = this.plotTop - L[0] - 1;
          F = this.plotLeft - L[3] - 1;
          f = this.plotTop + this.plotHeight + L[2] + 1;
          L = this.plotLeft + this.plotWidth + L[1] + 1;
          var H = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
              C = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
          x = this.scrollablePixelsX ? [["M", 0, x], ["L", this.plotLeft - 1, x], ["L", this.plotLeft - 1, f], ["L", 0, f], ["Z"], ["M", H, x], ["L", this.chartWidth, x], ["L", this.chartWidth, f], ["L", H, f], ["Z"]] : this.scrollablePixelsY ? [["M", F, 0], ["L", F, this.plotTop - 1], ["L", L, this.plotTop - 1], ["L", L, 0], ["Z"], ["M", F, C], ["L", F, this.chartHeight], ["L", L, this.chartHeight], ["L", L, C], ["Z"]] : [["M", 0, 0]];
          "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
            d: x
          });
        };
      });
      Q(A, "parts/StackingAxis.js", [A["parts/Utilities.js"]], function (d) {
        var f = d.addEvent,
            E = d.destroyObjectProperties,
            q = d.fireEvent,
            A = d.objectEach,
            K = d.pick,
            J = function () {
          function d(d) {
            this.oldStacks = {};
            this.stacks = {};
            this.stacksTouched = 0;
            this.axis = d;
          }

          d.prototype.buildStacks = function () {
            var d = this.axis,
                f = d.series,
                H = K(d.options.reversedStacks, !0),
                C = f.length,
                D;

            if (!d.isXAxis) {
              this.usePercentage = !1;

              for (D = C; D--;) {
                var w = f[H ? D : C - D - 1];
                w.setStackedPoints();
              }

              for (D = 0; D < C; D++) {
                f[D].modifyStacks();
              }

              q(d, "afterBuildStacks");
            }
          };

          d.prototype.cleanStacks = function () {
            if (!this.axis.isXAxis) {
              if (this.oldStacks) var d = this.stacks = this.oldStacks;
              A(d, function (d) {
                A(d, function (d) {
                  d.cumulative = d.total;
                });
              });
            }
          };

          d.prototype.resetStacks = function () {
            var d = this,
                f = d.stacks;
            d.axis.isXAxis || A(f, function (f) {
              A(f, function (q, x) {
                q.touched < d.stacksTouched ? (q.destroy(), delete f[x]) : (q.total = null, q.cumulative = null);
              });
            });
          };

          d.prototype.renderStackTotals = function () {
            var d = this.axis.chart,
                f = d.renderer,
                q = this.stacks,
                C = this.stackTotalGroup = this.stackTotalGroup || f.g("stack-labels").attr({
              visibility: "visible",
              zIndex: 6
            }).add();
            C.translate(d.plotLeft, d.plotTop);
            A(q, function (d) {
              A(d, function (d) {
                d.render(C);
              });
            });
          };

          return d;
        }();

        return function () {
          function d() {}

          d.compose = function (q) {
            f(q, "init", d.onInit);
            f(q, "destroy", d.onDestroy);
          };

          d.onDestroy = function () {
            var d = this.stacking;

            if (d) {
              var f = d.stacks;
              A(f, function (d, q) {
                E(d);
                f[q] = null;
              });
              d && d.stackTotalGroup && d.stackTotalGroup.destroy();
            }
          };

          d.onInit = function () {
            this.stacking || (this.stacking = new J(this));
          };

          return d;
        }();
      });
      Q(A, "mixins/legend-symbol.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var E = f.merge,
            q = f.pick;
        d.LegendSymbolMixin = {
          drawRectangle: function drawRectangle(d, f) {
            var E = d.symbolHeight,
                A = d.options.squareSymbol;
            f.legendSymbol = this.chart.renderer.rect(A ? (d.symbolWidth - E) / 2 : 0, d.baseline - E + 1, A ? E : d.symbolWidth, E, q(d.options.symbolRadius, E / 2)).addClass("highcharts-point").attr({
              zIndex: 3
            }).add(f.legendGroup);
          },
          drawLineMarker: function drawLineMarker(d) {
            var f = this.options,
                A = f.marker,
                L = d.symbolWidth,
                x = d.symbolHeight,
                F = x / 2,
                H = this.chart.renderer,
                C = this.legendGroup;
            d = d.baseline - Math.round(.3 * d.fontMetrics.b);
            var D = {};
            this.chart.styledMode || (D = {
              "stroke-width": f.lineWidth || 0
            }, f.dashStyle && (D.dashstyle = f.dashStyle));
            this.legendLine = H.path(["M", 0, d, "L", L, d]).addClass("highcharts-graph").attr(D).add(C);
            A && !1 !== A.enabled && L && (f = Math.min(q(A.radius, F), F), 0 === this.symbol.indexOf("url") && (A = E(A, {
              width: x,
              height: x
            }), f = 0), this.legendSymbol = A = H.symbol(this.symbol, L / 2 - f, d - f, 2 * f, 2 * f, A).addClass("highcharts-point").add(C), A.isMarker = !0);
          }
        };
        return d.LegendSymbolMixin;
      });
      Q(A, "parts/Point.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        "";

        var A = f.animObject,
            q = f.defined,
            M = f.erase,
            K = f.extend,
            J = f.fireEvent,
            L = f.format,
            x = f.getNestedProperty,
            F = f.isArray,
            H = f.isNumber,
            C = f.isObject,
            D = f.syncTimeout,
            w = f.pick,
            n = f.removeEvent,
            t = f.uniqueKey;

        f = function () {
          function d() {
            this.colorIndex = this.category = void 0;
            this.formatPrefix = "point";
            this.id = void 0;
            this.isNull = !1;
            this.percentage = this.options = this.name = void 0;
            this.selected = !1;
            this.total = this.series = void 0;
            this.visible = !0;
            this.x = void 0;
          }

          d.prototype.animateBeforeDestroy = function () {
            var d = this,
                b = {
              x: d.startXPos,
              opacity: 0
            },
                g,
                f = d.getGraphicalProps();
            f.singular.forEach(function (f) {
              g = "dataLabel" === f;
              d[f] = d[f].animate(g ? {
                x: d[f].startXPos,
                y: d[f].startYPos,
                opacity: 0
              } : b);
            });
            f.plural.forEach(function (b) {
              d[b].forEach(function (b) {
                b.element && b.animate(K({
                  x: d.startXPos
                }, b.startYPos ? {
                  x: b.startXPos,
                  y: b.startYPos
                } : {}));
              });
            });
          };

          d.prototype.applyOptions = function (f, b) {
            var g = this.series,
                m = g.options.pointValKey || g.pointValKey;
            f = d.prototype.optionsToObject.call(this, f);
            K(this, f);
            this.options = this.options ? K(this.options, f) : f;
            f.group && delete this.group;
            f.dataLabels && delete this.dataLabels;
            m && (this.y = d.prototype.getNestedProperty.call(this, m));
            this.formatPrefix = (this.isNull = w(this.isValid && !this.isValid(), null === this.x || !H(this.y))) ? "null" : "point";
            this.selected && (this.state = "select");
            "name" in this && "undefined" === typeof b && g.xAxis && g.xAxis.hasNames && (this.x = g.xAxis.nameToX(this));
            "undefined" === typeof this.x && g && (this.x = "undefined" === typeof b ? g.autoIncrement(this) : b);
            return this;
          };

          d.prototype.destroy = function () {
            function d() {
              if (b.graphic || b.dataLabel || b.dataLabels) n(b), b.destroyElements();

              for (p in b) {
                b[p] = null;
              }
            }

            var b = this,
                g = b.series,
                f = g.chart;
            g = g.options.dataSorting;
            var h = f.hoverPoints,
                e = A(b.series.chart.renderer.globalAnimation),
                p;
            b.legendItem && f.legend.destroyItem(b);
            h && (b.setState(), M(h, b), h.length || (f.hoverPoints = null));
            if (b === f.hoverPoint) b.onMouseOut();
            g && g.enabled ? (this.animateBeforeDestroy(), D(d, e.duration)) : d();
            f.pointCount--;
          };

          d.prototype.destroyElements = function (d) {
            var b = this;
            d = b.getGraphicalProps(d);
            d.singular.forEach(function (d) {
              b[d] = b[d].destroy();
            });
            d.plural.forEach(function (d) {
              b[d].forEach(function (b) {
                b.element && b.destroy();
              });
              delete b[d];
            });
          };

          d.prototype.firePointEvent = function (d, b, g) {
            var f = this,
                h = this.series.options;
            (h.point.events[d] || f.options && f.options.events && f.options.events[d]) && f.importEvents();
            "click" === d && h.allowPointSelect && (g = function g(b) {
              f.select && f.select(null, b.ctrlKey || b.metaKey || b.shiftKey);
            });
            J(f, d, b, g);
          };

          d.prototype.getClassName = function () {
            return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
          };

          d.prototype.getGraphicalProps = function (d) {
            var b = this,
                g = [],
                f,
                h = {
              singular: [],
              plural: []
            };
            d = d || {
              graphic: 1,
              dataLabel: 1
            };
            d.graphic && g.push("graphic", "shadowGroup");
            d.dataLabel && g.push("dataLabel", "dataLabelUpper", "connector");

            for (f = g.length; f--;) {
              var e = g[f];
              b[e] && h.singular.push(e);
            }

            ["dataLabel", "connector"].forEach(function (e) {
              var g = e + "s";
              d[e] && b[g] && h.plural.push(g);
            });
            return h;
          };

          d.prototype.getLabelConfig = function () {
            return {
              x: this.category,
              y: this.y,
              color: this.color,
              colorIndex: this.colorIndex,
              key: this.name || this.category,
              series: this.series,
              point: this,
              percentage: this.percentage,
              total: this.total || this.stackTotal
            };
          };

          d.prototype.getNestedProperty = function (d) {
            if (d) return 0 === d.indexOf("custom.") ? x(d, this.options) : this[d];
          };

          d.prototype.getZone = function () {
            var d = this.series,
                b = d.zones;
            d = d.zoneAxis || "y";
            var g = 0,
                f;

            for (f = b[g]; this[d] >= f.value;) {
              f = b[++g];
            }

            this.nonZonedColor || (this.nonZonedColor = this.color);
            this.color = f && f.color && !this.options.color ? f.color : this.nonZonedColor;
            return f;
          };

          d.prototype.hasNewShapeType = function () {
            return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
          };

          d.prototype.init = function (d, b, g) {
            this.series = d;
            this.applyOptions(b, g);
            this.id = q(this.id) ? this.id : t();
            this.resolveColor();
            d.chart.pointCount++;
            J(this, "afterInit");
            return this;
          };

          d.prototype.optionsToObject = function (f) {
            var b = {},
                g = this.series,
                m = g.options.keys,
                h = m || g.pointArrayMap || ["y"],
                e = h.length,
                p = 0,
                l = 0;
            if (H(f) || null === f) b[h[0]] = f;else if (F(f)) for (!m && f.length > e && (g = typeof f[0], "string" === g ? b.name = f[0] : "number" === g && (b.x = f[0]), p++); l < e;) {
              m && "undefined" === typeof f[p] || (0 < h[l].indexOf(".") ? d.prototype.setNestedProperty(b, f[p], h[l]) : b[h[l]] = f[p]), p++, l++;
            } else "object" === typeof f && (b = f, f.dataLabels && (g._hasPointLabels = !0), f.marker && (g._hasPointMarkers = !0));
            return b;
          };

          d.prototype.resolveColor = function () {
            var d = this.series;
            var b = d.chart.options.chart.colorCount;
            var g = d.chart.styledMode;
            delete this.nonZonedColor;
            g || this.options.color || (this.color = d.color);
            d.options.colorByPoint ? (g || (b = d.options.colors || d.chart.options.colors, this.color = this.color || b[d.colorCounter], b = b.length), g = d.colorCounter, d.colorCounter++, d.colorCounter === b && (d.colorCounter = 0)) : g = d.colorIndex;
            this.colorIndex = w(this.colorIndex, g);
          };

          d.prototype.setNestedProperty = function (d, b, g) {
            g.split(".").reduce(function (d, g, e, f) {
              d[g] = f.length - 1 === e ? b : C(d[g], !0) ? d[g] : {};
              return d[g];
            }, d);
            return d;
          };

          d.prototype.tooltipFormatter = function (d) {
            var b = this.series,
                g = b.tooltipOptions,
                f = w(g.valueDecimals, ""),
                h = g.valuePrefix || "",
                e = g.valueSuffix || "";
            b.chart.styledMode && (d = b.chart.tooltip.styledModeFormat(d));
            (b.pointArrayMap || ["y"]).forEach(function (b) {
              b = "{point." + b;
              if (h || e) d = d.replace(RegExp(b + "}", "g"), h + b + "}" + e);
              d = d.replace(RegExp(b + "}", "g"), b + ":,." + f + "f}");
            });
            return L(d, {
              point: this,
              series: this.series
            }, b.chart);
          };

          return d;
        }();

        d.Point = f;
        return d.Point;
      });
      Q(A, "parts/Series.js", [A["mixins/legend-symbol.js"], A["parts/Globals.js"], A["parts/Point.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        "";

        var E = q.addEvent,
            K = q.animObject,
            J = q.arrayMax,
            L = q.arrayMin,
            x = q.clamp,
            F = q.correctFloat,
            H = q.defined,
            C = q.erase,
            D = q.error,
            w = q.extend,
            n = q.find,
            t = q.fireEvent,
            N = q.getNestedProperty,
            m = q.isArray,
            b = q.isFunction,
            g = q.isNumber,
            v = q.isString,
            h = q.merge,
            e = q.objectEach,
            p = q.pick,
            l = q.removeEvent,
            I = q.seriesType,
            u = q.splat,
            y = q.syncTimeout,
            G = f.defaultOptions,
            S = f.defaultPlotOptions,
            R = f.seriesTypes,
            B = f.SVGElement,
            c = f.win;
        f.Series = I("line", null, {
          lineWidth: 2,
          allowPointSelect: !1,
          crisp: !0,
          showCheckbox: !1,
          animation: {
            duration: 1E3
          },
          events: {},
          marker: {
            enabledThreshold: 2,
            lineColor: "#ffffff",
            lineWidth: 0,
            radius: 4,
            states: {
              normal: {
                animation: !0
              },
              hover: {
                animation: {
                  duration: 50
                },
                enabled: !0,
                radiusPlus: 2,
                lineWidthPlus: 1
              },
              select: {
                fillColor: "#cccccc",
                lineColor: "#000000",
                lineWidth: 2
              }
            }
          },
          point: {
            events: {}
          },
          dataLabels: {
            align: "center",
            formatter: function formatter() {
              var a = this.series.chart.numberFormatter;
              return "number" !== typeof this.y ? "" : a(this.y, -1);
            },
            padding: 5,
            style: {
              fontSize: "11px",
              fontWeight: "bold",
              color: "contrast",
              textOutline: "1px contrast"
            },
            verticalAlign: "bottom",
            x: 0,
            y: 0
          },
          cropThreshold: 300,
          opacity: 1,
          pointRange: 0,
          softThreshold: !0,
          states: {
            normal: {
              animation: !0
            },
            hover: {
              animation: {
                duration: 50
              },
              lineWidthPlus: 1,
              marker: {},
              halo: {
                size: 10,
                opacity: .25
              }
            },
            select: {
              animation: {
                duration: 0
              }
            },
            inactive: {
              animation: {
                duration: 50
              },
              opacity: .2
            }
          },
          stickyTracking: !0,
          turboThreshold: 1E3,
          findNearestPointBy: "x"
        }, {
          axisTypes: ["xAxis", "yAxis"],
          coll: "series",
          colorCounter: 0,
          cropShoulder: 1,
          directTouch: !1,
          eventsToUnbind: [],
          isCartesian: !0,
          parallelArrays: ["x", "y"],
          pointClass: A,
          requireSorting: !0,
          sorted: !0,
          init: function init(a, c) {
            t(this, "init", {
              options: c
            });
            var d = this,
                k = a.series,
                g;
            this.eventOptions = this.eventOptions || {};
            d.chart = a;
            d.options = c = d.setOptions(c);
            d.linkedSeries = [];
            d.bindAxes();
            w(d, {
              name: c.name,
              state: "",
              visible: !1 !== c.visible,
              selected: !0 === c.selected
            });
            var f = c.events;
            e(f, function (a, c) {
              b(a) && d.eventOptions[c] !== a && (b(d.eventOptions[c]) && l(d, c, d.eventOptions[c]), d.eventOptions[c] = a, E(d, c, a));
            });
            if (f && f.click || c.point && c.point.events && c.point.events.click || c.allowPointSelect) a.runTrackerClick = !0;
            d.getColor();
            d.getSymbol();
            d.parallelArrays.forEach(function (a) {
              d[a + "Data"] || (d[a + "Data"] = []);
            });
            d.isCartesian && (a.hasCartesianSeries = !0);
            k.length && (g = k[k.length - 1]);
            d._i = p(g && g._i, -1) + 1;
            a.orderSeries(this.insert(k));
            c.dataSorting && c.dataSorting.enabled ? d.setDataSortingOptions() : d.points || d.data || d.setData(c.data, !1);
            t(this, "afterInit");
          },
          is: function is(a) {
            return R[a] && this instanceof R[a];
          },
          insert: function insert(a) {
            var c = this.options.index,
                b;

            if (g(c)) {
              for (b = a.length; b--;) {
                if (c >= p(a[b].options.index, a[b]._i)) {
                  a.splice(b + 1, 0, this);
                  break;
                }
              }

              -1 === b && a.unshift(this);
              b += 1;
            } else a.push(this);

            return p(b, a.length - 1);
          },
          bindAxes: function bindAxes() {
            var a = this,
                c = a.options,
                b = a.chart,
                e;
            t(this, "bindAxes", null, function () {
              (a.axisTypes || []).forEach(function (d) {
                b[d].forEach(function (b) {
                  e = b.options;
                  if (c[d] === e.index || "undefined" !== typeof c[d] && c[d] === e.id || "undefined" === typeof c[d] && 0 === e.index) a.insert(b.series), a[d] = b, b.isDirty = !0;
                });
                a[d] || a.optionalAxis === d || D(18, !0, b);
              });
            });
            t(this, "afterBindAxes");
          },
          updateParallelArrays: function updateParallelArrays(a, c) {
            var b = a.series,
                e = arguments,
                d = g(c) ? function (e) {
              var d = "y" === e && b.toYData ? b.toYData(a) : a[e];
              b[e + "Data"][c] = d;
            } : function (a) {
              Array.prototype[c].apply(b[a + "Data"], Array.prototype.slice.call(e, 2));
            };
            b.parallelArrays.forEach(d);
          },
          hasData: function hasData() {
            return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
          },
          autoIncrement: function autoIncrement() {
            var a = this.options,
                c = this.xIncrement,
                b,
                e = a.pointIntervalUnit,
                d = this.chart.time;
            c = p(c, a.pointStart, 0);
            this.pointInterval = b = p(this.pointInterval, a.pointInterval, 1);
            e && (a = new d.Date(c), "day" === e ? d.set("Date", a, d.get("Date", a) + b) : "month" === e ? d.set("Month", a, d.get("Month", a) + b) : "year" === e && d.set("FullYear", a, d.get("FullYear", a) + b), b = a.getTime() - c);
            this.xIncrement = c + b;
            return c;
          },
          setDataSortingOptions: function setDataSortingOptions() {
            var a = this.options;
            w(this, {
              requireSorting: !1,
              sorted: !1,
              enabledDataSorting: !0,
              allowDG: !1
            });
            H(a.pointRange) || (a.pointRange = 1);
          },
          setOptions: function setOptions(a) {
            var c = this.chart,
                b = c.options,
                e = b.plotOptions,
                d = c.userOptions || {};
            a = h(a);
            c = c.styledMode;
            var g = {
              plotOptions: e,
              userOptions: a
            };
            t(this, "setOptions", g);
            var l = g.plotOptions[this.type],
                f = d.plotOptions || {};
            this.userOptions = g.userOptions;
            d = h(l, e.series, d.plotOptions && d.plotOptions[this.type], a);
            this.tooltipOptions = h(G.tooltip, G.plotOptions.series && G.plotOptions.series.tooltip, G.plotOptions[this.type].tooltip, b.tooltip.userOptions, e.series && e.series.tooltip, e[this.type].tooltip, a.tooltip);
            this.stickyTracking = p(a.stickyTracking, f[this.type] && f[this.type].stickyTracking, f.series && f.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : d.stickyTracking);
            null === l.marker && delete d.marker;
            this.zoneAxis = d.zoneAxis;
            b = this.zones = (d.zones || []).slice();
            !d.negativeColor && !d.negativeFillColor || d.zones || (e = {
              value: d[this.zoneAxis + "Threshold"] || d.threshold || 0,
              className: "highcharts-negative"
            }, c || (e.color = d.negativeColor, e.fillColor = d.negativeFillColor), b.push(e));
            b.length && H(b[b.length - 1].value) && b.push(c ? {} : {
              color: this.color,
              fillColor: this.fillColor
            });
            t(this, "afterSetOptions", {
              options: d
            });
            return d;
          },
          getName: function getName() {
            return p(this.options.name, "Series " + (this.index + 1));
          },
          getCyclic: function getCyclic(a, c, b) {
            var e = this.chart,
                d = this.userOptions,
                k = a + "Index",
                g = a + "Counter",
                l = b ? b.length : p(e.options.chart[a + "Count"], e[a + "Count"]);

            if (!c) {
              var f = p(d[k], d["_" + k]);
              H(f) || (e.series.length || (e[g] = 0), d["_" + k] = f = e[g] % l, e[g] += 1);
              b && (c = b[f]);
            }

            "undefined" !== typeof f && (this[k] = f);
            this[a] = c;
          },
          getColor: function getColor() {
            this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || S[this.type].color, this.chart.options.colors);
          },
          getPointsCollection: function getPointsCollection() {
            return (this.hasGroupedData ? this.points : this.data) || [];
          },
          getSymbol: function getSymbol() {
            this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
          },
          findPointIndex: function findPointIndex(a, c) {
            var b = a.id,
                e = a.x,
                d = this.points,
                k,
                l = this.options.dataSorting;
            if (b) var f = this.chart.get(b);else if (this.linkedParent || this.enabledDataSorting) {
              var h = l && l.matchByName ? "name" : "index";
              f = n(d, function (c) {
                return !c.touched && c[h] === a[h];
              });
              if (!f) return;
            }

            if (f) {
              var m = f && f.index;
              "undefined" !== typeof m && (k = !0);
            }

            "undefined" === typeof m && g(e) && (m = this.xData.indexOf(e, c));
            -1 !== m && "undefined" !== typeof m && this.cropped && (m = m >= this.cropStart ? m - this.cropStart : m);
            !k && d[m] && d[m].touched && (m = void 0);
            return m;
          },
          drawLegendSymbol: d.drawLineMarker,
          updateData: function updateData(a, c) {
            var b = this.options,
                e = b.dataSorting,
                d = this.points,
                k = [],
                l,
                f,
                h,
                m = this.requireSorting,
                u = a.length === d.length,
                p = !0;
            this.xIncrement = null;
            a.forEach(function (a, c) {
              var f = H(a) && this.pointClass.prototype.optionsToObject.call({
                series: this
              }, a) || {};
              var r = f.x;

              if (f.id || g(r)) {
                if (r = this.findPointIndex(f, h), -1 === r || "undefined" === typeof r ? k.push(a) : d[r] && a !== b.data[r] ? (d[r].update(a, !1, null, !1), d[r].touched = !0, m && (h = r + 1)) : d[r] && (d[r].touched = !0), !u || c !== r || e && e.enabled || this.hasDerivedData) l = !0;
              } else k.push(a);
            }, this);
            if (l) for (a = d.length; a--;) {
              (f = d[a]) && !f.touched && f.remove && f.remove(!1, c);
            } else !u || e && e.enabled ? p = !1 : (a.forEach(function (a, c) {
              d[c].update && a !== d[c].y && d[c].update(a, !1, null, !1);
            }), k.length = 0);
            d.forEach(function (a) {
              a && (a.touched = !1);
            });
            if (!p) return !1;
            k.forEach(function (a) {
              this.addPoint(a, !1, null, null, !1);
            }, this);
            null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = J(this.xData), this.autoIncrement());
            return !0;
          },
          setData: function setData(a, c, b, e) {
            var d = this,
                k = d.points,
                l = k && k.length || 0,
                f,
                h = d.options,
                r = d.chart,
                u = h.dataSorting,
                n = null,
                z = d.xAxis;
            n = h.turboThreshold;
            var y = this.xData,
                w = this.yData,
                t = (f = d.pointArrayMap) && f.length,
                B = h.keys,
                G = 0,
                q = 1,
                x;
            a = a || [];
            f = a.length;
            c = p(c, !0);
            u && u.enabled && (a = this.sortData(a));
            !1 !== e && f && l && !d.cropped && !d.hasGroupedData && d.visible && !d.isSeriesBoosting && (x = this.updateData(a, b));

            if (!x) {
              d.xIncrement = null;
              d.colorCounter = 0;
              this.parallelArrays.forEach(function (a) {
                d[a + "Data"].length = 0;
              });
              if (n && f > n) {
                if (n = d.getFirstValidPoint(a), g(n)) for (b = 0; b < f; b++) {
                  y[b] = this.autoIncrement(), w[b] = a[b];
                } else if (m(n)) {
                  if (t) for (b = 0; b < f; b++) {
                    e = a[b], y[b] = e[0], w[b] = e.slice(1, t + 1);
                  } else for (B && (G = B.indexOf("x"), q = B.indexOf("y"), G = 0 <= G ? G : 0, q = 0 <= q ? q : 1), b = 0; b < f; b++) {
                    e = a[b], y[b] = e[G], w[b] = e[q];
                  }
                } else D(12, !1, r);
              } else for (b = 0; b < f; b++) {
                "undefined" !== typeof a[b] && (e = {
                  series: d
                }, d.pointClass.prototype.applyOptions.apply(e, [a[b]]), d.updateParallelArrays(e, b));
              }
              w && v(w[0]) && D(14, !0, r);
              d.data = [];
              d.options.data = d.userOptions.data = a;

              for (b = l; b--;) {
                k[b] && k[b].destroy && k[b].destroy();
              }

              z && (z.minRange = z.userMinRange);
              d.isDirty = r.isDirtyBox = !0;
              d.isDirtyData = !!k;
              b = !1;
            }

            "point" === h.legendType && (this.processData(), this.generatePoints());
            c && r.redraw(b);
          },
          sortData: function sortData(a) {
            var c = this,
                b = c.options.dataSorting.sortKey || "y",
                e = function e(a, c) {
              return H(c) && a.pointClass.prototype.optionsToObject.call({
                series: a
              }, c) || {};
            };

            a.forEach(function (b, d) {
              a[d] = e(c, b);
              a[d].index = d;
            }, this);
            a.concat().sort(function (a, c) {
              a = N(b, a);
              c = N(b, c);
              return c < a ? -1 : c > a ? 1 : 0;
            }).forEach(function (a, c) {
              a.x = c;
            }, this);
            c.linkedSeries && c.linkedSeries.forEach(function (c) {
              var b = c.options,
                  d = b.data;
              b.dataSorting && b.dataSorting.enabled || !d || (d.forEach(function (b, k) {
                d[k] = e(c, b);
                a[k] && (d[k].x = a[k].x, d[k].index = k);
              }), c.setData(d, !1));
            });
            return a;
          },
          getProcessedData: function getProcessedData(a) {
            var c = this.xData,
                b = this.yData,
                e = c.length;
            var d = 0;
            var g = this.xAxis,
                f = this.options;
            var l = f.cropThreshold;
            var h = a || this.getExtremesFromAll || f.getExtremesFromAll,
                m = this.isCartesian;
            a = g && g.val2lin;
            f = !(!g || !g.logarithmic);
            var u = this.requireSorting;

            if (g) {
              g = g.getExtremes();
              var p = g.min;
              var n = g.max;
            }

            if (m && this.sorted && !h && (!l || e > l || this.forceCrop)) if (c[e - 1] < p || c[0] > n) c = [], b = [];else if (this.yData && (c[0] < p || c[e - 1] > n)) {
              d = this.cropData(this.xData, this.yData, p, n);
              c = d.xData;
              b = d.yData;
              d = d.start;
              var v = !0;
            }

            for (l = c.length || 1; --l;) {
              if (e = f ? a(c[l]) - a(c[l - 1]) : c[l] - c[l - 1], 0 < e && ("undefined" === typeof y || e < y)) var y = e;else 0 > e && u && (D(15, !1, this.chart), u = !1);
            }

            return {
              xData: c,
              yData: b,
              cropped: v,
              cropStart: d,
              closestPointRange: y
            };
          },
          processData: function processData(a) {
            var c = this.xAxis;
            if (this.isCartesian && !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !a) return !1;
            a = this.getProcessedData();
            this.cropped = a.cropped;
            this.cropStart = a.cropStart;
            this.processedXData = a.xData;
            this.processedYData = a.yData;
            this.closestPointRange = this.basePointRange = a.closestPointRange;
          },
          cropData: function cropData(a, c, b, e, d) {
            var g = a.length,
                k = 0,
                l = g,
                f;
            d = p(d, this.cropShoulder);

            for (f = 0; f < g; f++) {
              if (a[f] >= b) {
                k = Math.max(0, f - d);
                break;
              }
            }

            for (b = f; b < g; b++) {
              if (a[b] > e) {
                l = b + d;
                break;
              }
            }

            return {
              xData: a.slice(k, l),
              yData: c.slice(k, l),
              start: k,
              end: l
            };
          },
          generatePoints: function generatePoints() {
            var a = this.options,
                c = a.data,
                b = this.data,
                e,
                d = this.processedXData,
                g = this.processedYData,
                f = this.pointClass,
                l = d.length,
                h = this.cropStart || 0,
                m = this.hasGroupedData;
            a = a.keys;
            var p = [],
                n;
            b || m || (b = [], b.length = c.length, b = this.data = b);
            a && m && (this.options.keys = !1);

            for (n = 0; n < l; n++) {
              var v = h + n;

              if (m) {
                var y = new f().init(this, [d[n]].concat(u(g[n])));
                y.dataGroup = this.groupMap[n];
                y.dataGroup.options && (y.options = y.dataGroup.options, w(y, y.dataGroup.options), delete y.dataLabels);
              } else (y = b[v]) || "undefined" === typeof c[v] || (b[v] = y = new f().init(this, c[v], d[n]));

              y && (y.index = v, p[n] = y);
            }

            this.options.keys = a;
            if (b && (l !== (e = b.length) || m)) for (n = 0; n < e; n++) {
              n !== h || m || (n += l), b[n] && (b[n].destroyElements(), b[n].plotX = void 0);
            }
            this.data = b;
            this.points = p;
            t(this, "afterGeneratePoints");
          },
          getXExtremes: function getXExtremes(a) {
            return {
              min: L(a),
              max: J(a)
            };
          },
          getExtremes: function getExtremes(a, c) {
            var b = this.xAxis,
                e = this.yAxis,
                d = this.processedXData || this.xData,
                k = [],
                l = 0,
                f = 0;
            var h = 0;
            var u = this.requireSorting ? this.cropShoulder : 0,
                n = e ? e.positiveValuesOnly : !1,
                p;
            a = a || this.stackedYData || this.processedYData || [];
            e = a.length;
            b && (h = b.getExtremes(), f = h.min, h = h.max);

            for (p = 0; p < e; p++) {
              var v = d[p];
              var y = a[p];
              var w = (g(y) || m(y)) && (y.length || 0 < y || !n);
              v = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (d[p + u] || v) >= f && (d[p - u] || v) <= h;
              if (w && v) if (w = y.length) for (; w--;) {
                g(y[w]) && (k[l++] = y[w]);
              } else k[l++] = y;
            }

            a = {
              dataMin: L(k),
              dataMax: J(k)
            };
            t(this, "afterGetExtremes", {
              dataExtremes: a
            });
            return a;
          },
          applyExtremes: function applyExtremes() {
            var a = this.getExtremes();
            this.dataMin = a.dataMin;
            this.dataMax = a.dataMax;
            return a;
          },
          getFirstValidPoint: function getFirstValidPoint(a) {
            for (var c = null, b = a.length, e = 0; null === c && e < b;) {
              c = a[e], e++;
            }

            return c;
          },
          translate: function translate() {
            this.processedXData || this.processData();
            this.generatePoints();
            var a = this.options,
                c = a.stacking,
                b = this.xAxis,
                e = b.categories,
                d = this.enabledDataSorting,
                l = this.yAxis,
                f = this.points,
                h = f.length,
                u = !!this.modifyValue,
                n,
                v = this.pointPlacementToXValue(),
                y = !!v,
                w = a.threshold,
                B = a.startFromThreshold ? w : 0,
                G,
                q = this.zoneAxis || "y",
                I = Number.MAX_VALUE;

            for (n = 0; n < h; n++) {
              var C = f[n],
                  D = C.x,
                  R = C.y,
                  S = C.low,
                  A = c && l.stacking && l.stacking.stacks[(this.negStacks && R < (B ? 0 : w) ? "-" : "") + this.stackKey];
              l.positiveValuesOnly && null !== R && 0 >= R && (C.isNull = !0);
              C.plotX = G = F(x(b.translate(D, 0, 0, 0, 1, v, "flags" === this.type), -1E5, 1E5));

              if (c && this.visible && A && A[D]) {
                var E = this.getStackIndicator(E, D, this.index);

                if (!C.isNull) {
                  var N = A[D];
                  var L = N.points[E.key];
                }
              }

              m(L) && (S = L[0], R = L[1], S === B && E.key === A[D].base && (S = p(g(w) && w, l.min)), l.positiveValuesOnly && 0 >= S && (S = null), C.total = C.stackTotal = N.total, C.percentage = N.total && C.y / N.total * 100, C.stackY = R, this.irregularWidths || N.setOffset(this.pointXOffset || 0, this.barW || 0));
              C.yBottom = H(S) ? x(l.translate(S, 0, 1, 0, 1), -1E5, 1E5) : null;
              u && (R = this.modifyValue(R, C));
              C.plotY = "number" === typeof R && Infinity !== R ? x(l.translate(R, 0, 1, 0, 1), -1E5, 1E5) : void 0;
              C.isInside = this.isPointInside(C);
              C.clientX = y ? F(b.translate(D, 0, 0, 0, 1, v)) : G;
              C.negative = C[q] < (a[q + "Threshold"] || w || 0);
              C.category = e && "undefined" !== typeof e[C.x] ? e[C.x] : C.x;

              if (!C.isNull && !1 !== C.visible) {
                "undefined" !== typeof J && (I = Math.min(I, Math.abs(G - J)));
                var J = G;
              }

              C.zone = this.zones.length && C.getZone();
              !C.graphic && this.group && d && (C.isNew = !0);
            }

            this.closestPointRangePx = I;
            t(this, "afterTranslate");
          },
          getValidPoints: function getValidPoints(a, c, b) {
            var e = this.chart;
            return (a || this.points || []).filter(function (a) {
              return c && !e.isInsidePlot(a.plotX, a.plotY, e.inverted) ? !1 : !1 !== a.visible && (b || !a.isNull);
            });
          },
          getClipBox: function getClipBox(a, c) {
            var b = this.options,
                e = this.chart,
                d = e.inverted,
                g = this.xAxis,
                k = g && this.yAxis;
            a && !1 === b.clip && k ? a = d ? {
              y: -e.chartWidth + k.len + k.pos,
              height: e.chartWidth,
              width: e.chartHeight,
              x: -e.chartHeight + g.len + g.pos
            } : {
              y: -k.pos,
              height: e.chartHeight,
              width: e.chartWidth,
              x: -g.pos
            } : (a = this.clipBox || e.clipBox, c && (a.width = e.plotSizeX, a.x = 0));
            return c ? {
              width: a.width,
              x: a.x
            } : a;
          },
          setClip: function setClip(a) {
            var c = this.chart,
                b = this.options,
                e = c.renderer,
                d = c.inverted,
                g = this.clipBox,
                l = this.getClipBox(a),
                f = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, l.height, b.xAxis, b.yAxis].join(),
                h = c[f],
                m = c[f + "m"];
            a && (l.width = 0, d && (l.x = c.plotHeight + (!1 !== b.clip ? 0 : c.plotTop)));
            h ? c.hasLoaded || h.attr(l) : (a && (c[f + "m"] = m = e.clipRect(d ? c.plotSizeX + 99 : -99, d ? -c.plotLeft : -c.plotTop, 99, d ? c.chartWidth : c.chartHeight)), c[f] = h = e.clipRect(l), h.count = {
              length: 0
            });
            a && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1);
            if (!1 !== b.clip || a) this.group.clip(a || g ? h : c.clipRect), this.markerGroup.clip(m), this.sharedClipKey = f;
            a || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && f && c[f] && (g || (c[f] = c[f].destroy()), c[f + "m"] && (c[f + "m"] = c[f + "m"].destroy())));
          },
          animate: function animate(a) {
            var c = this.chart,
                b = K(this.options.animation);
            if (!c.hasRendered) if (a) this.setClip(b);else {
              var e = this.sharedClipKey;
              a = c[e];
              var d = this.getClipBox(b, !0);
              a && a.animate(d, b);
              c[e + "m"] && c[e + "m"].animate({
                width: d.width + 99,
                x: d.x - (c.inverted ? 0 : 99)
              }, b);
            }
          },
          afterAnimate: function afterAnimate() {
            this.setClip();
            t(this, "afterAnimate");
            this.finishedAnimating = !0;
          },
          drawPoints: function drawPoints() {
            var a = this.points,
                c = this.chart,
                b,
                e,
                d = this.options.marker,
                g = this[this.specialGroup] || this.markerGroup,
                f = this.xAxis,
                l = p(d.enabled, !f || f.isRadial ? !0 : null, this.closestPointRangePx >= d.enabledThreshold * d.radius);
            if (!1 !== d.enabled || this._hasPointMarkers) for (b = 0; b < a.length; b++) {
              var h = a[b];
              var m = (e = h.graphic) ? "animate" : "attr";
              var u = h.marker || {};
              var n = !!h.marker;

              if ((l && "undefined" === typeof u.enabled || u.enabled) && !h.isNull && !1 !== h.visible) {
                var v = p(u.symbol, this.symbol);
                var y = this.markerAttribs(h, h.selected && "select");
                this.enabledDataSorting && (h.startXPos = f.reversed ? -y.width : f.width);
                var w = !1 !== h.isInside;
                e ? e[w ? "show" : "hide"](w).animate(y) : w && (0 < y.width || h.hasImage) && (h.graphic = e = c.renderer.symbol(v, y.x, y.y, y.width, y.height, n ? u : d).add(g), this.enabledDataSorting && c.hasRendered && (e.attr({
                  x: h.startXPos
                }), m = "animate"));
                e && "animate" === m && e[w ? "show" : "hide"](w).animate(y);
                if (e && !c.styledMode) e[m](this.pointAttribs(h, h.selected && "select"));
                e && e.addClass(h.getClassName(), !0);
              } else e && (h.graphic = e.destroy());
            }
          },
          markerAttribs: function markerAttribs(a, c) {
            var b = this.options,
                e = b.marker,
                d = a.marker || {},
                g = d.symbol || e.symbol,
                k = p(d.radius, e.radius);
            c && (e = e.states[c], c = d.states && d.states[c], k = p(c && c.radius, e && e.radius, k + (e && e.radiusPlus || 0)));
            a.hasImage = g && 0 === g.indexOf("url");
            a.hasImage && (k = 0);
            a = {
              x: b.crisp ? Math.floor(a.plotX) - k : a.plotX - k,
              y: a.plotY - k
            };
            k && (a.width = a.height = 2 * k);
            return a;
          },
          pointAttribs: function pointAttribs(a, c) {
            var b = this.options.marker,
                e = a && a.options,
                d = e && e.marker || {},
                g = this.color,
                k = e && e.color,
                f = a && a.color;
            e = p(d.lineWidth, b.lineWidth);
            var l = a && a.zone && a.zone.color;
            a = 1;
            g = k || l || f || g;
            k = d.fillColor || b.fillColor || g;
            g = d.lineColor || b.lineColor || g;
            c = c || "normal";
            b = b.states[c];
            c = d.states && d.states[c] || {};
            e = p(c.lineWidth, b.lineWidth, e + p(c.lineWidthPlus, b.lineWidthPlus, 0));
            k = c.fillColor || b.fillColor || k;
            g = c.lineColor || b.lineColor || g;
            a = p(c.opacity, b.opacity, a);
            return {
              stroke: g,
              "stroke-width": e,
              fill: k,
              opacity: a
            };
          },
          destroy: function destroy(a) {
            var b = this,
                d = b.chart,
                g = /AppleWebKit\/533/.test(c.navigator.userAgent),
                f,
                l,
                h = b.data || [],
                m,
                u;
            t(b, "destroy");
            this.removeEvents(a);
            (b.axisTypes || []).forEach(function (a) {
              (u = b[a]) && u.series && (C(u.series, b), u.isDirty = u.forceRedraw = !0);
            });
            b.legendItem && b.chart.legend.destroyItem(b);

            for (l = h.length; l--;) {
              (m = h[l]) && m.destroy && m.destroy();
            }

            b.points = null;
            q.clearTimeout(b.animationTimeout);
            e(b, function (a, c) {
              a instanceof B && !a.survive && (f = g && "group" === c ? "hide" : "destroy", a[f]());
            });
            d.hoverSeries === b && (d.hoverSeries = null);
            C(d.series, b);
            d.orderSeries();
            e(b, function (c, e) {
              a && "hcEvents" === e || delete b[e];
            });
          },
          getGraphPath: function getGraphPath(a, c, b) {
            var e = this,
                d = e.options,
                g = d.step,
                k,
                f = [],
                l = [],
                h;
            a = a || e.points;
            (k = a.reversed) && a.reverse();
            (g = {
              right: 1,
              center: 2
            }[g] || g && 3) && k && (g = 4 - g);
            a = this.getValidPoints(a, !1, !(d.connectNulls && !c && !b));
            a.forEach(function (k, m) {
              var u = k.plotX,
                  r = k.plotY,
                  n = a[m - 1];
              (k.leftCliff || n && n.rightCliff) && !b && (h = !0);
              k.isNull && !H(c) && 0 < m ? h = !d.connectNulls : k.isNull && !c ? h = !0 : (0 === m || h ? m = [["M", k.plotX, k.plotY]] : e.getPointSpline ? m = [e.getPointSpline(a, k, m)] : g ? (m = 1 === g ? [["L", n.plotX, r]] : 2 === g ? [["L", (n.plotX + u) / 2, n.plotY], ["L", (n.plotX + u) / 2, r]] : [["L", u, n.plotY]], m.push(["L", u, r])) : m = [["L", u, r]], l.push(k.x), g && (l.push(k.x), 2 === g && l.push(k.x)), f.push.apply(f, m), h = !1);
            });
            f.xMap = l;
            return e.graphPath = f;
          },
          drawGraph: function drawGraph() {
            var a = this,
                c = this.options,
                b = (this.gappedPath || this.getGraphPath).call(this),
                e = this.chart.styledMode,
                d = [["graph", "highcharts-graph"]];
            e || d[0].push(c.lineColor || this.color || "#cccccc", c.dashStyle);
            d = a.getZonesGraphs(d);
            d.forEach(function (d, g) {
              var k = d[0],
                  f = a[k],
                  l = f ? "animate" : "attr";
              f ? (f.endX = a.preventGraphAnimation ? null : b.xMap, f.animate({
                d: b
              })) : b.length && (a[k] = f = a.chart.renderer.path(b).addClass(d[1]).attr({
                zIndex: 1
              }).add(a.group));
              f && !e && (k = {
                stroke: d[2],
                "stroke-width": c.lineWidth,
                fill: a.fillGraph && a.color || "none"
              }, d[3] ? k.dashstyle = d[3] : "square" !== c.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), f[l](k).shadow(2 > g && c.shadow));
              f && (f.startX = b.xMap, f.isArea = b.isArea);
            });
          },
          getZonesGraphs: function getZonesGraphs(a) {
            this.zones.forEach(function (c, b) {
              b = ["zone-graph-" + b, "highcharts-graph highcharts-zone-graph-" + b + " " + (c.className || "")];
              this.chart.styledMode || b.push(c.color || this.color, c.dashStyle || this.options.dashStyle);
              a.push(b);
            }, this);
            return a;
          },
          applyZones: function applyZones() {
            var a = this,
                c = this.chart,
                b = c.renderer,
                e = this.zones,
                d,
                g,
                f = this.clips || [],
                l,
                h = this.graph,
                m = this.area,
                u = Math.max(c.chartWidth, c.chartHeight),
                n = this[(this.zoneAxis || "y") + "Axis"],
                v = c.inverted,
                y,
                w,
                t,
                B = !1,
                G,
                q;

            if (e.length && (h || m) && n && "undefined" !== typeof n.min) {
              var C = n.reversed;
              var I = n.horiz;
              h && !this.showLine && h.hide();
              m && m.hide();
              var D = n.getExtremes();
              e.forEach(function (e, k) {
                d = C ? I ? c.plotWidth : 0 : I ? 0 : n.toPixels(D.min) || 0;
                d = x(p(g, d), 0, u);
                g = x(Math.round(n.toPixels(p(e.value, D.max), !0) || 0), 0, u);
                B && (d = g = n.toPixels(D.max));
                y = Math.abs(d - g);
                w = Math.min(d, g);
                t = Math.max(d, g);
                n.isXAxis ? (l = {
                  x: v ? t : w,
                  y: 0,
                  width: y,
                  height: u
                }, I || (l.x = c.plotHeight - l.x)) : (l = {
                  x: 0,
                  y: v ? t : w,
                  width: u,
                  height: y
                }, I && (l.y = c.plotWidth - l.y));
                v && b.isVML && (l = n.isXAxis ? {
                  x: 0,
                  y: C ? w : t,
                  height: l.width,
                  width: c.chartWidth
                } : {
                  x: l.y - c.plotLeft - c.spacingBox.x,
                  y: 0,
                  width: l.height,
                  height: c.chartHeight
                });
                f[k] ? f[k].animate(l) : f[k] = b.clipRect(l);
                G = a["zone-area-" + k];
                q = a["zone-graph-" + k];
                h && q && q.clip(f[k]);
                m && G && G.clip(f[k]);
                B = e.value > D.max;
                a.resetZones && 0 === g && (g = void 0);
              });
              this.clips = f;
            } else a.visible && (h && h.show(!0), m && m.show(!0));
          },
          invertGroups: function invertGroups(a) {
            function c() {
              ["group", "markerGroup"].forEach(function (c) {
                b[c] && (e.renderer.isVML && b[c].attr({
                  width: b.yAxis.len,
                  height: b.xAxis.len
                }), b[c].width = b.yAxis.len, b[c].height = b.xAxis.len, b[c].invert(b.isRadialSeries ? !1 : a));
              });
            }

            var b = this,
                e = b.chart;
            b.xAxis && (b.eventsToUnbind.push(E(e, "resize", c)), c(), b.invertGroups = c);
          },
          plotGroup: function plotGroup(a, c, b, e, d) {
            var g = this[a],
                k = !g;
            k && (this[a] = g = this.chart.renderer.g().attr({
              zIndex: e || .1
            }).add(d));
            g.addClass("highcharts-" + c + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (H(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
            g.attr({
              visibility: b
            })[k ? "attr" : "animate"](this.getPlotBox());
            return g;
          },
          getPlotBox: function getPlotBox() {
            var a = this.chart,
                c = this.xAxis,
                b = this.yAxis;
            a.inverted && (c = b, b = this.xAxis);
            return {
              translateX: c ? c.left : a.plotLeft,
              translateY: b ? b.top : a.plotTop,
              scaleX: 1,
              scaleY: 1
            };
          },
          removeEvents: function removeEvents(a) {
            a ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) {
              a();
            }), this.eventsToUnbind.length = 0) : l(this);
          },
          render: function render() {
            var a = this,
                c = a.chart,
                b = a.options,
                e = !a.finishedAnimating && c.renderer.isSVG && K(b.animation).duration,
                d = a.visible ? "inherit" : "hidden",
                g = b.zIndex,
                f = a.hasRendered,
                l = c.seriesGroup,
                h = c.inverted;
            t(this, "render");
            var m = a.plotGroup("group", "series", d, g, l);
            a.markerGroup = a.plotGroup("markerGroup", "markers", d, g, l);
            e && a.animate && a.animate(!0);
            m.inverted = a.isCartesian || a.invertable ? h : !1;
            a.drawGraph && (a.drawGraph(), a.applyZones());
            a.visible && a.drawPoints();
            a.drawDataLabels && a.drawDataLabels();
            a.redrawPoints && a.redrawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            a.invertGroups(h);
            !1 === b.clip || a.sharedClipKey || f || m.clip(c.clipRect);
            e && a.animate && a.animate();
            f || (a.animationTimeout = y(function () {
              a.afterAnimate();
            }, e || 0));
            a.isDirty = !1;
            a.hasRendered = !0;
            t(a, "afterRender");
          },
          redraw: function redraw() {
            var a = this.chart,
                c = this.isDirty || this.isDirtyData,
                b = this.group,
                e = this.xAxis,
                d = this.yAxis;
            b && (a.inverted && b.attr({
              width: a.plotWidth,
              height: a.plotHeight
            }), b.animate({
              translateX: p(e && e.left, a.plotLeft),
              translateY: p(d && d.top, a.plotTop)
            }));
            this.translate();
            this.render();
            c && delete this.kdTree;
          },
          kdAxisArray: ["clientX", "plotY"],
          searchPoint: function searchPoint(a, c) {
            var b = this.xAxis,
                e = this.yAxis,
                d = this.chart.inverted;
            return this.searchKDTree({
              clientX: d ? b.len - a.chartY + b.pos : a.chartX - b.pos,
              plotY: d ? e.len - a.chartX + e.pos : a.chartY - e.pos
            }, c, a);
          },
          buildKDTree: function buildKDTree(a) {
            function c(a, e, d) {
              var g;

              if (g = a && a.length) {
                var k = b.kdAxisArray[e % d];
                a.sort(function (a, c) {
                  return a[k] - c[k];
                });
                g = Math.floor(g / 2);
                return {
                  point: a[g],
                  left: c(a.slice(0, g), e + 1, d),
                  right: c(a.slice(g + 1), e + 1, d)
                };
              }
            }

            this.buildingKdTree = !0;
            var b = this,
                e = -1 < b.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            delete b.kdTree;
            y(function () {
              b.kdTree = c(b.getValidPoints(null, !b.directTouch), e, e);
              b.buildingKdTree = !1;
            }, b.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
          },
          searchKDTree: function searchKDTree(a, c, b) {
            function e(a, c, b, l) {
              var h = c.point,
                  m = d.kdAxisArray[b % l],
                  u = h;
              var n = H(a[g]) && H(h[g]) ? Math.pow(a[g] - h[g], 2) : null;
              var p = H(a[k]) && H(h[k]) ? Math.pow(a[k] - h[k], 2) : null;
              p = (n || 0) + (p || 0);
              h.dist = H(p) ? Math.sqrt(p) : Number.MAX_VALUE;
              h.distX = H(n) ? Math.sqrt(n) : Number.MAX_VALUE;
              m = a[m] - h[m];
              p = 0 > m ? "left" : "right";
              n = 0 > m ? "right" : "left";
              c[p] && (p = e(a, c[p], b + 1, l), u = p[f] < u[f] ? p : h);
              c[n] && Math.sqrt(m * m) < u[f] && (a = e(a, c[n], b + 1, l), u = a[f] < u[f] ? a : u);
              return u;
            }

            var d = this,
                g = this.kdAxisArray[0],
                k = this.kdAxisArray[1],
                f = c ? "distX" : "dist";
            c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
            this.kdTree || this.buildingKdTree || this.buildKDTree(b);
            if (this.kdTree) return e(a, this.kdTree, c, c);
          },
          pointPlacementToXValue: function pointPlacementToXValue() {
            var a = this.options,
                c = a.pointRange,
                b = this.xAxis;
            a = a.pointPlacement;
            "between" === a && (a = b.reversed ? -.5 : .5);
            return g(a) ? a * p(c, b.pointRange) : 0;
          },
          isPointInside: function isPointInside(a) {
            return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len;
          }
        });
        "";
      });
      Q(A, "parts/Stacking.js", [A["parts/Axis.js"], A["parts/Globals.js"], A["parts/StackingAxis.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        var E = q.correctFloat,
            K = q.defined,
            J = q.destroyObjectProperties,
            L = q.format,
            x = q.pick;
        "";
        q = f.Chart;

        var F = f.Series,
            H = function () {
          function d(d, f, n, t, q) {
            var m = d.chart.inverted;
            this.axis = d;
            this.isNegative = n;
            this.options = f = f || {};
            this.x = t;
            this.total = null;
            this.points = {};
            this.stack = q;
            this.rightCliff = this.leftCliff = 0;
            this.alignOptions = {
              align: f.align || (m ? n ? "left" : "right" : "center"),
              verticalAlign: f.verticalAlign || (m ? "middle" : n ? "bottom" : "top"),
              y: f.y,
              x: f.x
            };
            this.textAlign = f.textAlign || (m ? n ? "right" : "left" : "center");
          }

          d.prototype.destroy = function () {
            J(this, this.axis);
          };

          d.prototype.render = function (d) {
            var f = this.axis.chart,
                n = this.options,
                t = n.format;
            t = t ? L(t, this, f) : n.formatter.call(this);
            this.label ? this.label.attr({
              text: t,
              visibility: "hidden"
            }) : (this.label = f.renderer.label(t, null, null, n.shape, null, null, n.useHTML, !1, "stack-labels"), t = {
              r: n.borderRadius || 0,
              text: t,
              rotation: n.rotation,
              padding: x(n.padding, 5),
              visibility: "hidden"
            }, f.styledMode || (t.fill = n.backgroundColor, t.stroke = n.borderColor, t["stroke-width"] = n.borderWidth, this.label.css(n.style)), this.label.attr(t), this.label.added || this.label.add(d));
            this.label.labelrank = f.plotHeight;
          };

          d.prototype.setOffset = function (d, f, n, t, q) {
            var m = this.axis,
                b = m.chart;
            t = m.translate(m.stacking.usePercentage ? 100 : t ? t : this.total, 0, 0, 0, 1);
            n = m.translate(n ? n : 0);
            n = K(t) && Math.abs(t - n);
            d = x(q, b.xAxis[0].translate(this.x)) + d;
            m = K(t) && this.getStackBox(b, this, d, t, f, n, m);
            f = this.label;
            n = this.isNegative;
            d = "justify" === x(this.options.overflow, "justify");
            var g = this.textAlign;
            f && m && (q = f.getBBox(), t = f.padding, g = "left" === g ? b.inverted ? -t : t : "right" === g ? q.width : b.inverted && "center" === g ? q.width / 2 : b.inverted ? n ? q.width + t : -t : q.width / 2, n = b.inverted ? q.height / 2 : n ? -t : q.height, this.alignOptions.x = x(this.options.x, 0), this.alignOptions.y = x(this.options.y, 0), m.x -= g, m.y -= n, f.align(this.alignOptions, null, m), b.isInsidePlot(f.alignAttr.x + g - this.alignOptions.x, f.alignAttr.y + n - this.alignOptions.y) ? f.show() : (f.alignAttr.y = -9999, d = !1), d && F.prototype.justifyDataLabel.call(this.axis, f, this.alignOptions, f.alignAttr, q, m), f.attr({
              x: f.alignAttr.x,
              y: f.alignAttr.y
            }), x(!d && this.options.crop, !0) && ((b = b.isInsidePlot(f.x - t + f.width, f.y) && b.isInsidePlot(f.x + t, f.y)) || f.hide()));
          };

          d.prototype.getStackBox = function (d, f, n, t, q, m, b) {
            var g = f.axis.reversed,
                v = d.inverted,
                h = b.height + b.pos - (v ? d.plotLeft : d.plotTop);
            f = f.isNegative && !g || !f.isNegative && g;
            return {
              x: v ? f ? t - b.right : t - m + b.pos - d.plotLeft : n + d.xAxis[0].transB - d.plotLeft,
              y: v ? b.height - n - q : f ? h - t - m : h - t,
              width: v ? m : q,
              height: v ? q : m
            };
          };

          return d;
        }();

        q.prototype.getStacks = function () {
          var d = this,
              f = d.inverted;
          d.yAxis.forEach(function (d) {
            d.stacking && d.stacking.stacks && d.hasVisibleSeries && (d.stacking.oldStacks = d.stacking.stacks);
          });
          d.series.forEach(function (w) {
            var n = w.xAxis && w.xAxis.options || {};
            !w.options.stacking || !0 !== w.visible && !1 !== d.options.chart.ignoreHiddenSeries || (w.stackKey = [w.type, x(w.options.stack, ""), f ? n.top : n.left, f ? n.height : n.width].join());
          });
        };

        A.compose(d);

        F.prototype.setStackedPoints = function () {
          if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
            var d = this.processedXData,
                f = this.processedYData,
                w = [],
                n = f.length,
                t = this.options,
                q = t.threshold,
                m = x(t.startFromThreshold && q, 0),
                b = t.stack;
            t = t.stacking;
            var g = this.stackKey,
                v = "-" + g,
                h = this.negStacks,
                e = this.yAxis,
                p = e.stacking.stacks,
                l = e.stacking.oldStacks,
                I,
                u;
            e.stacking.stacksTouched += 1;

            for (u = 0; u < n; u++) {
              var y = d[u];
              var G = f[u];
              var S = this.getStackIndicator(S, y, this.index);
              var R = S.key;
              var B = (I = h && G < (m ? 0 : q)) ? v : g;
              p[B] || (p[B] = {});
              p[B][y] || (l[B] && l[B][y] ? (p[B][y] = l[B][y], p[B][y].total = null) : p[B][y] = new H(e, e.options.stackLabels, I, y, b));
              B = p[B][y];
              null !== G ? (B.points[R] = B.points[this.index] = [x(B.cumulative, m)], K(B.cumulative) || (B.base = R), B.touched = e.stacking.stacksTouched, 0 < S.index && !1 === this.singleStacks && (B.points[R][0] = B.points[this.index + "," + y + ",0"][0])) : B.points[R] = B.points[this.index] = null;
              "percent" === t ? (I = I ? g : v, h && p[I] && p[I][y] ? (I = p[I][y], B.total = I.total = Math.max(I.total, B.total) + Math.abs(G) || 0) : B.total = E(B.total + (Math.abs(G) || 0))) : B.total = E(B.total + (G || 0));
              B.cumulative = x(B.cumulative, m) + (G || 0);
              null !== G && (B.points[R].push(B.cumulative), w[u] = B.cumulative);
            }

            "percent" === t && (e.stacking.usePercentage = !0);
            this.stackedYData = w;
            e.stacking.oldStacks = {};
          }
        };

        F.prototype.modifyStacks = function () {
          var d = this,
              f = d.stackKey,
              w = d.yAxis.stacking.stacks,
              n = d.processedXData,
              t,
              q = d.options.stacking;
          d[q + "Stacker"] && [f, "-" + f].forEach(function (f) {
            for (var b = n.length, g, m; b--;) {
              if (g = n[b], t = d.getStackIndicator(t, g, d.index, f), m = (g = w[f] && w[f][g]) && g.points[t.key]) d[q + "Stacker"](m, g, b);
            }
          });
        };

        F.prototype.percentStacker = function (d, f, w) {
          f = f.total ? 100 / f.total : 0;
          d[0] = E(d[0] * f);
          d[1] = E(d[1] * f);
          this.stackedYData[w] = d[1];
        };

        F.prototype.getStackIndicator = function (d, f, w, n) {
          !K(d) || d.x !== f || n && d.key !== n ? d = {
            x: f,
            index: 0,
            key: n
          } : d.index++;
          d.key = [w, f, d.index].join();
          return d;
        };

        f.StackItem = H;
        return f.StackItem;
      });
      Q(A, "parts/Dynamics.js", [A["parts/Globals.js"], A["parts/Point.js"], A["parts/Time.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        var E = q.addEvent,
            K = q.animate,
            J = q.createElement,
            L = q.css,
            x = q.defined,
            F = q.erase,
            H = q.error,
            C = q.extend,
            D = q.fireEvent,
            w = q.isArray,
            n = q.isNumber,
            t = q.isObject,
            N = q.isString,
            m = q.merge,
            b = q.objectEach,
            g = q.pick,
            v = q.relativeLength,
            h = q.setAnimation,
            e = q.splat,
            p = d.Axis;
        q = d.Chart;
        var l = d.Series,
            I = d.seriesTypes;

        d.cleanRecursively = function (e, g) {
          var f = {};
          b(e, function (b, l) {
            if (t(e[l], !0) && !e.nodeType && g[l]) b = d.cleanRecursively(e[l], g[l]), Object.keys(b).length && (f[l] = b);else if (t(e[l]) || e[l] !== g[l]) f[l] = e[l];
          });
          return f;
        };

        C(q.prototype, {
          addSeries: function addSeries(b, e, d) {
            var f,
                l = this;
            b && (e = g(e, !0), D(l, "addSeries", {
              options: b
            }, function () {
              f = l.initSeries(b);
              l.isDirtyLegend = !0;
              l.linkSeries();
              f.enabledDataSorting && f.setData(b.data, !1);
              D(l, "afterAddSeries", {
                series: f
              });
              e && l.redraw(d);
            }));
            return f;
          },
          addAxis: function addAxis(b, e, d, g) {
            return this.createAxis(e ? "xAxis" : "yAxis", {
              axis: b,
              redraw: d,
              animation: g
            });
          },
          addColorAxis: function addColorAxis(b, e, d) {
            return this.createAxis("colorAxis", {
              axis: b,
              redraw: e,
              animation: d
            });
          },
          createAxis: function createAxis(b, f) {
            var l = this.options,
                h = "colorAxis" === b,
                u = f.redraw,
                n = f.animation;
            f = m(f.axis, {
              index: this[b].length,
              isX: "xAxis" === b
            });
            var c = h ? new d.ColorAxis(this, f) : new p(this, f);
            l[b] = e(l[b] || {});
            l[b].push(f);
            h && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
              a.series = [];
            }), this.series.forEach(function (a) {
              a.bindAxes();
              a.isDirtyData = !0;
            }));
            g(u, !0) && this.redraw(n);
            return c;
          },
          showLoading: function showLoading(b) {
            var e = this,
                d = e.options,
                f = e.loadingDiv,
                l = d.loading,
                h = function h() {
              f && L(f, {
                left: e.plotLeft + "px",
                top: e.plotTop + "px",
                width: e.plotWidth + "px",
                height: e.plotHeight + "px"
              });
            };

            f || (e.loadingDiv = f = J("div", {
              className: "highcharts-loading highcharts-loading-hidden"
            }, null, e.container), e.loadingSpan = J("span", {
              className: "highcharts-loading-inner"
            }, null, f), E(e, "redraw", h));
            f.className = "highcharts-loading";
            e.loadingSpan.innerHTML = g(b, d.lang.loading, "");
            e.styledMode || (L(f, C(l.style, {
              zIndex: 10
            })), L(e.loadingSpan, l.labelStyle), e.loadingShown || (L(f, {
              opacity: 0,
              display: ""
            }), K(f, {
              opacity: l.style.opacity || .5
            }, {
              duration: l.showDuration || 0
            })));
            e.loadingShown = !0;
            h();
          },
          hideLoading: function hideLoading() {
            var b = this.options,
                e = this.loadingDiv;
            e && (e.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || K(e, {
              opacity: 0
            }, {
              duration: b.loading.hideDuration || 100,
              complete: function complete() {
                L(e, {
                  display: "none"
                });
              }
            }));
            this.loadingShown = !1;
          },
          propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
          propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
          propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
          collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
          update: function update(f, l, h, p) {
            var u = this,
                y = {
              credits: "addCredits",
              title: "setTitle",
              subtitle: "setSubtitle",
              caption: "setCaption"
            },
                c,
                a,
                k,
                r = f.isResponsiveOptions,
                t = [];
            D(u, "update", {
              options: f
            });
            r || u.setResponsive(!1, !0);
            f = d.cleanRecursively(f, u.options);
            m(!0, u.userOptions, f);

            if (c = f.chart) {
              m(!0, u.options.chart, c);
              "className" in c && u.setClassName(c.className);
              "reflow" in c && u.setReflow(c.reflow);

              if ("inverted" in c || "polar" in c || "type" in c) {
                u.propFromSeries();
                var w = !0;
              }

              "alignTicks" in c && (w = !0);
              b(c, function (c, b) {
                -1 !== u.propsRequireUpdateSeries.indexOf("chart." + b) && (a = !0);
                -1 !== u.propsRequireDirtyBox.indexOf(b) && (u.isDirtyBox = !0);
                r || -1 === u.propsRequireReflow.indexOf(b) || (k = !0);
              });
              !u.styledMode && "style" in c && u.renderer.setStyle(c.style);
            }

            !u.styledMode && f.colors && (this.options.colors = f.colors);
            f.plotOptions && m(!0, this.options.plotOptions, f.plotOptions);
            f.time && this.time === d.time && (this.time = new A(f.time));
            b(f, function (c, b) {
              if (u[b] && "function" === typeof u[b].update) u[b].update(c, !1);else if ("function" === typeof u[y[b]]) u[y[b]](c);
              "chart" !== b && -1 !== u.propsRequireUpdateSeries.indexOf(b) && (a = !0);
            });
            this.collectionsWithUpdate.forEach(function (a) {
              if (f[a]) {
                if ("series" === a) {
                  var c = [];
                  u[a].forEach(function (a, b) {
                    a.options.isInternal || c.push(g(a.options.index, b));
                  });
                }

                e(f[a]).forEach(function (b, e) {
                  (e = x(b.id) && u.get(b.id) || u[a][c ? c[e] : e]) && e.coll === a && (e.update(b, !1), h && (e.touched = !0));
                  !e && h && u.collectionsWithInit[a] && (u.collectionsWithInit[a][0].apply(u, [b].concat(u.collectionsWithInit[a][1] || []).concat([!1])).touched = !0);
                });
                h && u[a].forEach(function (a) {
                  a.touched || a.options.isInternal ? delete a.touched : t.push(a);
                });
              }
            });
            t.forEach(function (a) {
              a.remove && a.remove(!1);
            });
            w && u.axes.forEach(function (a) {
              a.update({}, !1);
            });
            a && u.getSeriesOrderByLinks().forEach(function (a) {
              a.chart && a.update({}, !1);
            }, this);
            f.loading && m(!0, u.options.loading, f.loading);
            w = c && c.width;
            c = c && c.height;
            N(c) && (c = v(c, w || u.chartWidth));
            k || n(w) && w !== u.chartWidth || n(c) && c !== u.chartHeight ? u.setSize(w, c, p) : g(l, !0) && u.redraw(p);
            D(u, "afterUpdate", {
              options: f,
              redraw: l,
              animation: p
            });
          },
          setSubtitle: function setSubtitle(b, e) {
            this.applyDescription("subtitle", b);
            this.layOutTitles(e);
          },
          setCaption: function setCaption(b, e) {
            this.applyDescription("caption", b);
            this.layOutTitles(e);
          }
        });
        q.prototype.collectionsWithInit = {
          xAxis: [q.prototype.addAxis, [!0]],
          yAxis: [q.prototype.addAxis, [!1]],
          series: [q.prototype.addSeries]
        };
        C(f.prototype, {
          update: function update(b, e, d, f) {
            function l() {
              h.applyOptions(b);
              var f = a && h.hasDummyGraphic;
              f = null === h.y ? !f : f;
              a && f && (h.graphic = a.destroy(), delete h.hasDummyGraphic);
              t(b, !0) && (a && a.element && b && b.marker && "undefined" !== typeof b.marker.symbol && (h.graphic = a.destroy()), b && b.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.connector && (h.connector = h.connector.destroy()));
              k = h.index;
              c.updateParallelArrays(h, k);
              u.data[k] = t(u.data[k], !0) || t(b, !0) ? h.options : g(b, u.data[k]);
              c.isDirty = c.isDirtyData = !0;
              !c.fixedBox && c.hasCartesianSeries && (m.isDirtyBox = !0);
              "point" === u.legendType && (m.isDirtyLegend = !0);
              e && m.redraw(d);
            }

            var h = this,
                c = h.series,
                a = h.graphic,
                k,
                m = c.chart,
                u = c.options;
            e = g(e, !0);
            !1 === f ? l() : h.firePointEvent("update", {
              options: b
            }, l);
          },
          remove: function remove(b, e) {
            this.series.removePoint(this.series.data.indexOf(this), b, e);
          }
        });
        C(l.prototype, {
          addPoint: function addPoint(b, e, d, f, l) {
            var h = this.options,
                c = this.data,
                a = this.chart,
                k = this.xAxis;
            k = k && k.hasNames && k.names;
            var m = h.data,
                u = this.xData,
                n;
            e = g(e, !0);
            var p = {
              series: this
            };
            this.pointClass.prototype.applyOptions.apply(p, [b]);
            var v = p.x;
            var y = u.length;
            if (this.requireSorting && v < u[y - 1]) for (n = !0; y && u[y - 1] > v;) {
              y--;
            }
            this.updateParallelArrays(p, "splice", y, 0, 0);
            this.updateParallelArrays(p, y);
            k && p.name && (k[v] = p.name);
            m.splice(y, 0, b);
            n && (this.data.splice(y, 0, null), this.processData());
            "point" === h.legendType && this.generatePoints();
            d && (c[0] && c[0].remove ? c[0].remove(!1) : (c.shift(), this.updateParallelArrays(p, "shift"), m.shift()));
            !1 !== l && D(this, "addPoint", {
              point: p
            });
            this.isDirtyData = this.isDirty = !0;
            e && a.redraw(f);
          },
          removePoint: function removePoint(b, e, d) {
            var f = this,
                l = f.data,
                m = l[b],
                c = f.points,
                a = f.chart,
                k = function k() {
              c && c.length === l.length && c.splice(b, 1);
              l.splice(b, 1);
              f.options.data.splice(b, 1);
              f.updateParallelArrays(m || {
                series: f
              }, "splice", b, 1);
              m && m.destroy();
              f.isDirty = !0;
              f.isDirtyData = !0;
              e && a.redraw();
            };

            h(d, a);
            e = g(e, !0);
            m ? m.firePointEvent("remove", null, k) : k();
          },
          remove: function remove(b, e, d, f) {
            function l() {
              h.destroy(f);
              h.remove = null;
              c.isDirtyLegend = c.isDirtyBox = !0;
              c.linkSeries();
              g(b, !0) && c.redraw(e);
            }

            var h = this,
                c = h.chart;
            !1 !== d ? D(h, "remove", null, l) : l();
          },
          update: function update(b, e) {
            b = d.cleanRecursively(b, this.userOptions);
            D(this, "update", {
              options: b
            });
            var f = this,
                l = f.chart,
                h = f.userOptions,
                n = f.initialType || f.type,
                c = b.type || h.type || l.options.chart.type,
                a = !(this.hasDerivedData || b.dataGrouping || c && c !== this.type || "undefined" !== typeof b.pointStart || b.pointInterval || b.pointIntervalUnit || b.keys),
                k = I[n].prototype,
                p,
                u = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"],
                v = ["eventOptions", "navigatorSeries", "baseSeries"],
                y = f.finishedAnimating && {
              animation: !1
            },
                t = {};
            a && (v.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== b.visible && v.push("area", "graph"), f.parallelArrays.forEach(function (a) {
              v.push(a + "Data");
            }), b.data && (b.dataSorting && C(f.options.dataSorting, b.dataSorting), this.setData(b.data, !1)));
            b = m(h, y, {
              index: "undefined" === typeof h.index ? f.index : h.index,
              pointStart: g(h.pointStart, f.xData[0])
            }, !a && {
              data: f.options.data
            }, b);
            a && b.data && (b.data = f.options.data);
            v = u.concat(v);
            v.forEach(function (a) {
              v[a] = f[a];
              delete f[a];
            });
            f.remove(!1, null, !1, !0);

            for (p in k) {
              f[p] = void 0;
            }

            I[c || n] ? C(f, I[c || n].prototype) : H(17, !0, l, {
              missingModuleFor: c || n
            });
            v.forEach(function (a) {
              f[a] = v[a];
            });
            f.init(l, b);

            if (a && this.points) {
              var w = f.options;
              !1 === w.visible ? (t.graphic = 1, t.dataLabel = 1) : f._hasPointLabels || (c = w.marker, k = w.dataLabels, c && (!1 === c.enabled || "symbol" in c) && (t.graphic = 1), k && !1 === k.enabled && (t.dataLabel = 1));
              this.points.forEach(function (a) {
                a && a.series && (a.resolveColor(), Object.keys(t).length && a.destroyElements(t), !1 === w.showInLegend && a.legendItem && l.legend.destroyItem(a));
              }, this);
            }

            b.zIndex !== h.zIndex && u.forEach(function (a) {
              f[a] && f[a].attr({
                zIndex: b.zIndex
              });
            });
            f.initialType = n;
            l.linkSeries();
            D(this, "afterUpdate");
            g(e, !0) && l.redraw(a ? void 0 : !1);
          },
          setName: function setName(b) {
            this.name = this.options.name = this.userOptions.name = b;
            this.chart.isDirtyLegend = !0;
          }
        });
        C(p.prototype, {
          update: function update(e, d) {
            var f = this.chart,
                l = e && e.events || {};
            e = m(this.userOptions, e);
            f.options[this.coll].indexOf && (f.options[this.coll][f.options[this.coll].indexOf(this.userOptions)] = e);
            b(f.options[this.coll].events, function (b, e) {
              "undefined" === typeof l[e] && (l[e] = void 0);
            });
            this.destroy(!0);
            this.init(f, C(e, {
              events: l
            }));
            f.isDirtyBox = !0;
            g(d, !0) && f.redraw();
          },
          remove: function remove(b) {
            for (var e = this.chart, d = this.coll, f = this.series, l = f.length; l--;) {
              f[l] && f[l].remove(!1);
            }

            F(e.axes, this);
            F(e[d], this);
            w(e.options[d]) ? e.options[d].splice(this.options.index, 1) : delete e.options[d];
            e[d].forEach(function (b, c) {
              b.options.index = b.userOptions.index = c;
            });
            this.destroy();
            e.isDirtyBox = !0;
            g(b, !0) && e.redraw();
          },
          setTitle: function setTitle(b, e) {
            this.update({
              title: b
            }, e);
          },
          setCategories: function setCategories(b, e) {
            this.update({
              categories: b
            }, e);
          }
        });
      });
      Q(A, "parts/AreaSeries.js", [A["parts/Globals.js"], A["parts/Color.js"], A["mixins/legend-symbol.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        var E = f.parse,
            K = q.objectEach,
            J = q.pick;
        f = q.seriesType;
        var L = d.Series;
        f("area", "line", {
          softThreshold: !1,
          threshold: 0
        }, {
          singleStacks: !1,
          getStackPoints: function getStackPoints(d) {
            var f = [],
                q = [],
                x = this.xAxis,
                D = this.yAxis,
                w = D.stacking.stacks[this.stackKey],
                n = {},
                t = this.index,
                A = D.series,
                m = A.length,
                b = J(D.options.reversedStacks, !0) ? 1 : -1,
                g;
            d = d || this.points;

            if (this.options.stacking) {
              for (g = 0; g < d.length; g++) {
                d[g].leftNull = d[g].rightNull = void 0, n[d[g].x] = d[g];
              }

              K(w, function (b, e) {
                null !== b.total && q.push(e);
              });
              q.sort(function (b, e) {
                return b - e;
              });
              var v = A.map(function (b) {
                return b.visible;
              });
              q.forEach(function (d, e) {
                var h = 0,
                    l,
                    I;
                if (n[d] && !n[d].isNull) f.push(n[d]), [-1, 1].forEach(function (f) {
                  var h = 1 === f ? "rightNull" : "leftNull",
                      p = 0,
                      u = w[q[e + f]];
                  if (u) for (g = t; 0 <= g && g < m;) {
                    l = u.points[g], l || (g === t ? n[d][h] = !0 : v[g] && (I = w[d].points[g]) && (p -= I[1] - I[0])), g += b;
                  }
                  n[d][1 === f ? "rightCliff" : "leftCliff"] = p;
                });else {
                  for (g = t; 0 <= g && g < m;) {
                    if (l = w[d].points[g]) {
                      h = l[1];
                      break;
                    }

                    g += b;
                  }

                  h = D.translate(h, 0, 1, 0, 1);
                  f.push({
                    isNull: !0,
                    plotX: x.translate(d, 0, 0, 0, 1),
                    x: d,
                    plotY: h,
                    yBottom: h
                  });
                }
              });
            }

            return f;
          },
          getGraphPath: function getGraphPath(d) {
            var f = L.prototype.getGraphPath,
                q = this.options,
                x = q.stacking,
                D = this.yAxis,
                w,
                n = [],
                t = [],
                A = this.index,
                m = D.stacking.stacks[this.stackKey],
                b = q.threshold,
                g = Math.round(D.getThreshold(q.threshold));
            q = J(q.connectNulls, "percent" === x);

            var v = function v(f, h, p) {
              var l = d[f];
              f = x && m[l.x].points[A];
              var u = l[p + "Null"] || 0;
              p = l[p + "Cliff"] || 0;
              l = !0;

              if (p || u) {
                var v = (u ? f[0] : f[1]) + p;
                var w = f[0] + p;
                l = !!u;
              } else !x && d[h] && d[h].isNull && (v = w = b);

              "undefined" !== typeof v && (t.push({
                plotX: e,
                plotY: null === v ? g : D.getThreshold(v),
                isNull: l,
                isCliff: !0
              }), n.push({
                plotX: e,
                plotY: null === w ? g : D.getThreshold(w),
                doCurve: !1
              }));
            };

            d = d || this.points;
            x && (d = this.getStackPoints(d));

            for (w = 0; w < d.length; w++) {
              x || (d[w].leftCliff = d[w].rightCliff = d[w].leftNull = d[w].rightNull = void 0);
              var h = d[w].isNull;
              var e = J(d[w].rectPlotX, d[w].plotX);
              var p = J(d[w].yBottom, g);
              if (!h || q) q || v(w, w - 1, "left"), h && !x && q || (t.push(d[w]), n.push({
                x: w,
                plotX: e,
                plotY: p
              })), q || v(w, w + 1, "right");
            }

            w = f.call(this, t, !0, !0);
            n.reversed = !0;
            h = f.call(this, n, !0, !0);
            (p = h[0]) && "M" === p[0] && (h[0] = ["L", p[1], p[2]]);
            h = w.concat(h);
            f = f.call(this, t, !1, q);
            h.xMap = w.xMap;
            this.areaPath = h;
            return f;
          },
          drawGraph: function drawGraph() {
            this.areaPath = [];
            L.prototype.drawGraph.apply(this);
            var d = this,
                f = this.areaPath,
                q = this.options,
                C = [["area", "highcharts-area", this.color, q.fillColor]];
            this.zones.forEach(function (f, w) {
              C.push(["zone-area-" + w, "highcharts-area highcharts-zone-area-" + w + " " + f.className, f.color || d.color, f.fillColor || q.fillColor]);
            });
            C.forEach(function (x) {
              var w = x[0],
                  n = d[w],
                  t = n ? "animate" : "attr",
                  C = {};
              n ? (n.endX = d.preventGraphAnimation ? null : f.xMap, n.animate({
                d: f
              })) : (C.zIndex = 0, n = d[w] = d.chart.renderer.path(f).addClass(x[1]).add(d.group), n.isArea = !0);
              d.chart.styledMode || (C.fill = J(x[3], E(x[2]).setOpacity(J(q.fillOpacity, .75)).get()));
              n[t](C);
              n.startX = f.xMap;
              n.shiftUnit = q.step ? 2 : 1;
            });
          },
          drawLegendSymbol: A.drawRectangle
        });
        "";
      });
      Q(A, "parts/SplineSeries.js", [A["parts/Utilities.js"]], function (d) {
        var f = d.pick;
        d = d.seriesType;
        d("spline", "line", {}, {
          getPointSpline: function getPointSpline(d, q, A) {
            var E = q.plotX || 0,
                J = q.plotY || 0,
                L = d[A - 1];
            A = d[A + 1];

            if (L && !L.isNull && !1 !== L.doCurve && !q.isCliff && A && !A.isNull && !1 !== A.doCurve && !q.isCliff) {
              d = L.plotY || 0;
              var x = A.plotX || 0;
              A = A.plotY || 0;
              var F = 0;
              var H = (1.5 * E + (L.plotX || 0)) / 2.5;
              var C = (1.5 * J + d) / 2.5;
              x = (1.5 * E + x) / 2.5;
              var D = (1.5 * J + A) / 2.5;
              x !== H && (F = (D - C) * (x - E) / (x - H) + J - D);
              C += F;
              D += F;
              C > d && C > J ? (C = Math.max(d, J), D = 2 * J - C) : C < d && C < J && (C = Math.min(d, J), D = 2 * J - C);
              D > A && D > J ? (D = Math.max(A, J), C = 2 * J - D) : D < A && D < J && (D = Math.min(A, J), C = 2 * J - D);
              q.rightContX = x;
              q.rightContY = D;
            }

            q = ["C", f(L.rightContX, L.plotX, 0), f(L.rightContY, L.plotY, 0), f(H, E, 0), f(C, J, 0), E, J];
            L.rightContX = L.rightContY = void 0;
            return q;
          }
        });
        "";
      });
      Q(A, "parts/AreaSplineSeries.js", [A["parts/Globals.js"], A["mixins/legend-symbol.js"], A["parts/Utilities.js"]], function (d, f, A) {
        A = A.seriesType;
        var q = d.seriesTypes.area.prototype;
        A("areaspline", "spline", d.defaultPlotOptions.area, {
          getStackPoints: q.getStackPoints,
          getGraphPath: q.getGraphPath,
          drawGraph: q.drawGraph,
          drawLegendSymbol: f.drawRectangle
        });
        "";
      });
      Q(A, "parts/ColumnSeries.js", [A["parts/Globals.js"], A["parts/Color.js"], A["mixins/legend-symbol.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        "";

        var E = f.parse,
            K = q.animObject,
            J = q.clamp,
            L = q.defined,
            x = q.extend,
            F = q.isNumber,
            H = q.merge,
            C = q.pick;
        f = q.seriesType;
        var D = d.Series;
        f("column", "line", {
          borderRadius: 0,
          groupPadding: .2,
          marker: null,
          pointPadding: .1,
          minPointLength: 0,
          cropThreshold: 50,
          pointRange: null,
          states: {
            hover: {
              halo: !1,
              brightness: .1
            },
            select: {
              color: "#cccccc",
              borderColor: "#000000"
            }
          },
          dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
          },
          softThreshold: !1,
          startFromThreshold: !0,
          stickyTracking: !1,
          tooltip: {
            distance: 6
          },
          threshold: 0,
          borderColor: "#ffffff"
        }, {
          cropShoulder: 0,
          directTouch: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          negStacks: !0,
          init: function init() {
            D.prototype.init.apply(this, arguments);
            var d = this,
                f = d.chart;
            f.hasRendered && f.series.forEach(function (f) {
              f.type === d.type && (f.isDirty = !0);
            });
          },
          getColumnMetrics: function getColumnMetrics() {
            var d = this,
                f = d.options,
                t = d.xAxis,
                q = d.yAxis,
                m = t.options.reversedStacks;
            m = t.reversed && !m || !t.reversed && m;
            var b,
                g = {},
                v = 0;
            !1 === f.grouping ? v = 1 : d.chart.series.forEach(function (e) {
              var f = e.yAxis,
                  l = e.options;

              if (e.type === d.type && (e.visible || !d.chart.options.chart.ignoreHiddenSeries) && q.len === f.len && q.pos === f.pos) {
                if (l.stacking) {
                  b = e.stackKey;
                  "undefined" === typeof g[b] && (g[b] = v++);
                  var h = g[b];
                } else !1 !== l.grouping && (h = v++);

                e.columnIndex = h;
              }
            });
            var h = Math.min(Math.abs(t.transA) * (t.ordinal && t.ordinal.slope || f.pointRange || t.closestPointRange || t.tickInterval || 1), t.len),
                e = h * f.groupPadding,
                p = (h - 2 * e) / (v || 1);
            f = Math.min(f.maxPointWidth || t.len, C(f.pointWidth, p * (1 - 2 * f.pointPadding)));
            d.columnMetrics = {
              width: f,
              offset: (p - f) / 2 + (e + ((d.columnIndex || 0) + (m ? 1 : 0)) * p - h / 2) * (m ? -1 : 1)
            };
            return d.columnMetrics;
          },
          crispCol: function crispCol(d, f, t, q) {
            var m = this.chart,
                b = this.borderWidth,
                g = -(b % 2 ? .5 : 0);
            b = b % 2 ? .5 : 1;
            m.inverted && m.renderer.isVML && (b += 1);
            this.options.crisp && (t = Math.round(d + t) + g, d = Math.round(d) + g, t -= d);
            q = Math.round(f + q) + b;
            g = .5 >= Math.abs(f) && .5 < q;
            f = Math.round(f) + b;
            q -= f;
            g && q && (--f, q += 1);
            return {
              x: d,
              y: f,
              width: t,
              height: q
            };
          },
          translate: function translate() {
            var d = this,
                f = d.chart,
                t = d.options,
                q = d.dense = 2 > d.closestPointRange * d.xAxis.transA;
            q = d.borderWidth = C(t.borderWidth, q ? 0 : 1);
            var m = d.xAxis,
                b = d.yAxis,
                g = t.threshold,
                v = d.translatedThreshold = b.getThreshold(g),
                h = C(t.minPointLength, 5),
                e = d.getColumnMetrics(),
                p = e.width,
                l = d.barW = Math.max(p, 1 + 2 * q),
                I = d.pointXOffset = e.offset,
                u = d.dataMin,
                y = d.dataMax;
            f.inverted && (v -= .5);
            t.pointPadding && (l = Math.ceil(l));
            D.prototype.translate.apply(d);
            d.points.forEach(function (e) {
              var n = C(e.yBottom, v),
                  t = 999 + Math.abs(n),
                  q = p,
                  c = e.plotX;
              t = J(e.plotY, -t, b.len + t);
              var a = e.plotX + I,
                  k = l,
                  r = Math.min(t, n),
                  w = Math.max(t, n) - r;

              if (h && Math.abs(w) < h) {
                w = h;
                var x = !b.reversed && !e.negative || b.reversed && e.negative;
                F(g) && F(y) && e.y === g && y <= g && (b.min || 0) < g && u !== y && (x = !x);
                r = Math.abs(r - v) > h ? n - h : v - (x ? h : 0);
              }

              L(e.options.pointWidth) && (q = k = Math.ceil(e.options.pointWidth), a -= Math.round((q - p) / 2));
              e.barX = a;
              e.pointWidth = q;
              e.tooltipPos = f.inverted ? [b.len + b.pos - f.plotLeft - t, m.len + m.pos - f.plotTop - (c || 0) - I - k / 2, w] : [a + k / 2, t + b.pos - f.plotTop, w];
              e.shapeType = d.pointClass.prototype.shapeType || "rect";
              e.shapeArgs = d.crispCol.apply(d, e.isNull ? [a, v, k, 0] : [a, r, k, w]);
            });
          },
          getSymbol: d.noop,
          drawLegendSymbol: A.drawRectangle,
          drawGraph: function drawGraph() {
            this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
          },
          pointAttribs: function pointAttribs(d, f) {
            var n = this.options,
                q = this.pointAttrToOptions || {};
            var m = q.stroke || "borderColor";
            var b = q["stroke-width"] || "borderWidth",
                g = d && d.color || this.color,
                v = d && d[m] || n[m] || this.color || g,
                h = d && d[b] || n[b] || this[b] || 0;
            q = d && d.options.dashStyle || n.dashStyle;
            var e = C(d && d.opacity, n.opacity, 1);

            if (d && this.zones.length) {
              var p = d.getZone();
              g = d.options.color || p && (p.color || d.nonZonedColor) || this.color;
              p && (v = p.borderColor || v, q = p.dashStyle || q, h = p.borderWidth || h);
            }

            f && d && (d = H(n.states[f], d.options.states && d.options.states[f] || {}), f = d.brightness, g = d.color || "undefined" !== typeof f && E(g).brighten(d.brightness).get() || g, v = d[m] || v, h = d[b] || h, q = d.dashStyle || q, e = C(d.opacity, e));
            m = {
              fill: g,
              stroke: v,
              "stroke-width": h,
              opacity: e
            };
            q && (m.dashstyle = q);
            return m;
          },
          drawPoints: function drawPoints() {
            var d = this,
                f = this.chart,
                q = d.options,
                x = f.renderer,
                m = q.animationLimit || 250,
                b;
            d.points.forEach(function (g) {
              var n = g.graphic,
                  h = !!n,
                  e = n && f.pointCount < m ? "animate" : "attr";

              if (F(g.plotY) && null !== g.y) {
                b = g.shapeArgs;
                n && g.hasNewShapeType() && (n = n.destroy());
                d.enabledDataSorting && (g.startXPos = d.xAxis.reversed ? -(b ? b.width : 0) : d.xAxis.width);
                n || (g.graphic = n = x[g.shapeType](b).add(g.group || d.group)) && d.enabledDataSorting && f.hasRendered && f.pointCount < m && (n.attr({
                  x: g.startXPos
                }), h = !0, e = "animate");
                if (n && h) n[e](H(b));
                if (q.borderRadius) n[e]({
                  r: q.borderRadius
                });
                f.styledMode || n[e](d.pointAttribs(g, g.selected && "select")).shadow(!1 !== g.allowShadow && q.shadow, null, q.stacking && !q.borderRadius);
                n.addClass(g.getClassName(), !0);
              } else n && (g.graphic = n.destroy());
            });
          },
          animate: function animate(d) {
            var f = this,
                q = this.yAxis,
                w = f.options,
                m = this.chart.inverted,
                b = {},
                g = m ? "translateX" : "translateY";
            if (d) b.scaleY = .001, d = J(q.toPixels(w.threshold), q.pos, q.pos + q.len), m ? b.translateX = d - q.len : b.translateY = d, f.clipBox && f.setClip(), f.group.attr(b);else {
              var v = f.group.attr(g);
              f.group.animate({
                scaleY: 1
              }, x(K(f.options.animation), {
                step: function step(d, e) {
                  f.group && (b[g] = v + e.pos * (q.pos - v), f.group.attr(b));
                }
              }));
            }
          },
          remove: function remove() {
            var d = this,
                f = d.chart;
            f.hasRendered && f.series.forEach(function (f) {
              f.type === d.type && (f.isDirty = !0);
            });
            D.prototype.remove.apply(d, arguments);
          }
        });
        "";
      });
      Q(A, "parts/BarSeries.js", [A["parts/Utilities.js"]], function (d) {
        d = d.seriesType;
        d("bar", "column", null, {
          inverted: !0
        });
        "";
      });
      Q(A, "parts/ScatterSeries.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var A = f.addEvent;
        f = f.seriesType;
        var q = d.Series;
        f("scatter", "line", {
          lineWidth: 0,
          findNearestPointBy: "xy",
          jitter: {
            x: 0,
            y: 0
          },
          marker: {
            enabled: !0
          },
          tooltip: {
            headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
          }
        }, {
          sorted: !1,
          requireSorting: !1,
          noSharedTooltip: !0,
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          takeOrdinalPosition: !1,
          drawGraph: function drawGraph() {
            this.options.lineWidth && q.prototype.drawGraph.call(this);
          },
          applyJitter: function applyJitter() {
            var d = this,
                f = this.options.jitter,
                q = this.points.length;
            f && this.points.forEach(function (A, x) {
              ["x", "y"].forEach(function (E, H) {
                var C = "plot" + E.toUpperCase();

                if (f[E] && !A.isNull) {
                  var D = d[E + "Axis"];
                  var w = f[E] * D.transA;

                  if (D && !D.isLog) {
                    var n = Math.max(0, A[C] - w);
                    D = Math.min(D.len, A[C] + w);
                    H = 1E4 * Math.sin(x + H * q);
                    A[C] = n + (D - n) * (H - Math.floor(H));
                    "x" === E && (A.clientX = A.plotX);
                  }
                }
              });
            });
          }
        });
        A(q, "afterTranslate", function () {
          this.applyJitter && this.applyJitter();
        });
        "";
      });
      Q(A, "mixins/centered-series.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var A = f.isNumber,
            q = f.pick,
            M = f.relativeLength,
            K = d.deg2rad;
        d.CenteredSeriesMixin = {
          getCenter: function getCenter() {
            var d = this.options,
                f = this.chart,
                x = 2 * (d.slicedOffset || 0),
                A = f.plotWidth - 2 * x,
                E = f.plotHeight - 2 * x,
                C = d.center,
                D = Math.min(A, E),
                w = d.size,
                n = d.innerSize || 0;
            "string" === typeof w && (w = parseFloat(w));
            "string" === typeof n && (n = parseFloat(n));
            d = [q(C[0], "50%"), q(C[1], "50%"), q(w && 0 > w ? void 0 : d.size, "100%"), q(n && 0 > n ? void 0 : d.innerSize || 0, "0%")];
            f.angular && (d[3] = 0);

            for (C = 0; 4 > C; ++C) {
              w = d[C], f = 2 > C || 2 === C && /%$/.test(w), d[C] = M(w, [A, E, D, d[2]][C]) + (f ? x : 0);
            }

            d[3] > d[2] && (d[3] = d[2]);
            return d;
          },
          getStartAndEndRadians: function getStartAndEndRadians(d, f) {
            d = A(d) ? d : 0;
            f = A(f) && f > d && 360 > f - d ? f : d + 360;
            return {
              start: K * (d + -90),
              end: K * (f + -90)
            };
          }
        };
      });
      Q(A, "parts/PieSeries.js", [A["parts/Globals.js"], A["mixins/legend-symbol.js"], A["parts/Point.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        var E = q.addEvent,
            K = q.clamp,
            J = q.defined,
            L = q.fireEvent,
            x = q.isNumber,
            F = q.merge,
            H = q.pick,
            C = q.relativeLength,
            D = q.seriesType,
            w = q.setAnimation;
        q = d.CenteredSeriesMixin;
        var n = q.getStartAndEndRadians,
            t = d.noop,
            N = d.Series;
        D("pie", "line", {
          center: [null, null],
          clip: !1,
          colorByPoint: !0,
          dataLabels: {
            allowOverlap: !0,
            connectorPadding: 5,
            connectorShape: "fixedOffset",
            crookDistance: "70%",
            distance: 30,
            enabled: !0,
            formatter: function formatter() {
              return this.point.isNull ? void 0 : this.point.name;
            },
            softConnector: !0,
            x: 0
          },
          fillColor: void 0,
          ignoreHiddenPoint: !0,
          inactiveOtherPoints: !0,
          legendType: "point",
          marker: null,
          size: null,
          showInLegend: !1,
          slicedOffset: 10,
          stickyTracking: !1,
          tooltip: {
            followPointer: !0
          },
          borderColor: "#ffffff",
          borderWidth: 1,
          lineWidth: void 0,
          states: {
            hover: {
              brightness: .1
            }
          }
        }, {
          isCartesian: !1,
          requireSorting: !1,
          directTouch: !0,
          noSharedTooltip: !0,
          trackerGroups: ["group", "dataLabelsGroup"],
          axisTypes: [],
          pointAttribs: d.seriesTypes.column.prototype.pointAttribs,
          animate: function animate(d) {
            var b = this,
                f = b.points,
                m = b.startAngleRad;
            d || f.forEach(function (d) {
              var e = d.graphic,
                  f = d.shapeArgs;
              e && f && (e.attr({
                r: H(d.startR, b.center && b.center[3] / 2),
                start: m,
                end: m
              }), e.animate({
                r: f.r,
                start: f.start,
                end: f.end
              }, b.options.animation));
            });
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          updateTotals: function updateTotals() {
            var d,
                b = 0,
                f = this.points,
                n = f.length,
                h = this.options.ignoreHiddenPoint;

            for (d = 0; d < n; d++) {
              var e = f[d];
              b += h && !e.visible ? 0 : e.isNull ? 0 : e.y;
            }

            this.total = b;

            for (d = 0; d < n; d++) {
              e = f[d], e.percentage = 0 < b && (e.visible || !h) ? e.y / b * 100 : 0, e.total = b;
            }
          },
          generatePoints: function generatePoints() {
            N.prototype.generatePoints.call(this);
            this.updateTotals();
          },
          getX: function getX(d, b, f) {
            var g = this.center,
                h = this.radii ? this.radii[f.index] : g[2] / 2;
            d = Math.asin(K((d - g[1]) / (h + f.labelDistance), -1, 1));
            return g[0] + (b ? -1 : 1) * Math.cos(d) * (h + f.labelDistance) + (0 < f.labelDistance ? (b ? -1 : 1) * this.options.dataLabels.padding : 0);
          },
          translate: function translate(d) {
            this.generatePoints();
            var b = 0,
                f = this.options,
                m = f.slicedOffset,
                h = m + (f.borderWidth || 0),
                e = n(f.startAngle, f.endAngle),
                p = this.startAngleRad = e.start;
            e = (this.endAngleRad = e.end) - p;
            var l = this.points,
                q = f.dataLabels.distance;
            f = f.ignoreHiddenPoint;
            var u,
                y = l.length;
            d || (this.center = d = this.getCenter());

            for (u = 0; u < y; u++) {
              var t = l[u];
              var w = p + b * e;
              if (!f || t.visible) b += t.percentage / 100;
              var x = p + b * e;
              t.shapeType = "arc";
              t.shapeArgs = {
                x: d[0],
                y: d[1],
                r: d[2] / 2,
                innerR: d[3] / 2,
                start: Math.round(1E3 * w) / 1E3,
                end: Math.round(1E3 * x) / 1E3
              };
              t.labelDistance = H(t.options.dataLabels && t.options.dataLabels.distance, q);
              t.labelDistance = C(t.labelDistance, t.shapeArgs.r);
              this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, t.labelDistance);
              x = (x + w) / 2;
              x > 1.5 * Math.PI ? x -= 2 * Math.PI : x < -Math.PI / 2 && (x += 2 * Math.PI);
              t.slicedTranslation = {
                translateX: Math.round(Math.cos(x) * m),
                translateY: Math.round(Math.sin(x) * m)
              };
              var B = Math.cos(x) * d[2] / 2;
              var c = Math.sin(x) * d[2] / 2;
              t.tooltipPos = [d[0] + .7 * B, d[1] + .7 * c];
              t.half = x < -Math.PI / 2 || x > Math.PI / 2 ? 1 : 0;
              t.angle = x;
              w = Math.min(h, t.labelDistance / 5);
              t.labelPosition = {
                natural: {
                  x: d[0] + B + Math.cos(x) * t.labelDistance,
                  y: d[1] + c + Math.sin(x) * t.labelDistance
                },
                "final": {},
                alignment: 0 > t.labelDistance ? "center" : t.half ? "right" : "left",
                connectorPosition: {
                  breakAt: {
                    x: d[0] + B + Math.cos(x) * w,
                    y: d[1] + c + Math.sin(x) * w
                  },
                  touchingSliceAt: {
                    x: d[0] + B,
                    y: d[1] + c
                  }
                }
              };
            }

            L(this, "afterTranslate");
          },
          drawEmpty: function drawEmpty() {
            var d = this.options;

            if (0 === this.total) {
              var b = this.center[0];
              var f = this.center[1];
              this.graph || (this.graph = this.chart.renderer.circle(b, f, 0).addClass("highcharts-graph").add(this.group));
              this.graph.animate({
                "stroke-width": d.borderWidth,
                cx: b,
                cy: f,
                r: this.center[2] / 2,
                fill: d.fillColor || "none",
                stroke: d.color || "#cccccc"
              }, this.options.animation);
            } else this.graph && (this.graph = this.graph.destroy());
          },
          redrawPoints: function redrawPoints() {
            var d = this,
                b = d.chart,
                f = b.renderer,
                n,
                h,
                e,
                p,
                l = d.options.shadow;
            this.drawEmpty();
            !l || d.shadowGroup || b.styledMode || (d.shadowGroup = f.g("shadow").attr({
              zIndex: -1
            }).add(d.group));
            d.points.forEach(function (g) {
              var m = {};
              h = g.graphic;

              if (!g.isNull && h) {
                p = g.shapeArgs;
                n = g.getTranslate();

                if (!b.styledMode) {
                  var v = g.shadowGroup;
                  l && !v && (v = g.shadowGroup = f.g("shadow").add(d.shadowGroup));
                  v && v.attr(n);
                  e = d.pointAttribs(g, g.selected && "select");
                }

                g.delayedRendering ? (h.setRadialReference(d.center).attr(p).attr(n), b.styledMode || h.attr(e).attr({
                  "stroke-linejoin": "round"
                }).shadow(l, v), g.delayedRendering = !1) : (h.setRadialReference(d.center), b.styledMode || F(!0, m, e), F(!0, m, p, n), h.animate(m));
                h.attr({
                  visibility: g.visible ? "inherit" : "hidden"
                });
                h.addClass(g.getClassName());
              } else h && (g.graphic = h.destroy());
            });
          },
          drawPoints: function drawPoints() {
            var d = this.chart.renderer;
            this.points.forEach(function (b) {
              b.graphic && b.hasNewShapeType() && (b.graphic = b.graphic.destroy());
              b.graphic || (b.graphic = d[b.shapeType](b.shapeArgs).add(b.series.group), b.delayedRendering = !0);
            });
          },
          searchPoint: t,
          sortByAngle: function sortByAngle(d, b) {
            d.sort(function (d, f) {
              return "undefined" !== typeof d.angle && (f.angle - d.angle) * b;
            });
          },
          drawLegendSymbol: f.drawRectangle,
          getCenter: q.getCenter,
          getSymbol: t,
          drawGraph: null
        }, {
          init: function init() {
            A.prototype.init.apply(this, arguments);
            var d = this;
            d.name = H(d.name, "Slice");

            var b = function b(_b) {
              d.slice("select" === _b.type);
            };

            E(d, "select", b);
            E(d, "unselect", b);
            return d;
          },
          isValid: function isValid() {
            return x(this.y) && 0 <= this.y;
          },
          setVisible: function setVisible(d, b) {
            var f = this,
                m = f.series,
                h = m.chart,
                e = m.options.ignoreHiddenPoint;
            b = H(b, e);
            d !== f.visible && (f.visible = f.options.visible = d = "undefined" === typeof d ? !f.visible : d, m.options.data[m.data.indexOf(f)] = f.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) {
              if (f[b]) f[b][d ? "show" : "hide"](!0);
            }), f.legendItem && h.legend.colorizeItem(f, d), d || "hover" !== f.state || f.setState(""), e && (m.isDirty = !0), b && h.redraw());
          },
          slice: function slice(d, b, f) {
            var g = this.series;
            w(f, g.chart);
            H(b, !0);
            this.sliced = this.options.sliced = J(d) ? d : !this.sliced;
            g.options.data[g.data.indexOf(this)] = this.options;
            this.graphic && this.graphic.animate(this.getTranslate());
            this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
          },
          getTranslate: function getTranslate() {
            return this.sliced ? this.slicedTranslation : {
              translateX: 0,
              translateY: 0
            };
          },
          haloPath: function haloPath(d) {
            var b = this.shapeArgs;
            return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + d, b.r + d, {
              innerR: b.r - 1,
              start: b.start,
              end: b.end
            });
          },
          connectorShapes: {
            fixedOffset: function fixedOffset(d, b, f) {
              var g = b.breakAt;
              b = b.touchingSliceAt;
              return [["M", d.x, d.y], f.softConnector ? ["C", d.x + ("left" === d.alignment ? -5 : 5), d.y, 2 * g.x - b.x, 2 * g.y - b.y, g.x, g.y] : ["L", g.x, g.y], ["L", b.x, b.y]];
            },
            straight: function straight(d, b) {
              b = b.touchingSliceAt;
              return [["M", d.x, d.y], ["L", b.x, b.y]];
            },
            crookedLine: function crookedLine(d, b, f) {
              b = b.touchingSliceAt;
              var g = this.series,
                  h = g.center[0],
                  e = g.chart.plotWidth,
                  m = g.chart.plotLeft;
              g = d.alignment;
              var l = this.shapeArgs.r;
              f = C(f.crookDistance, 1);
              e = "left" === g ? h + l + (e + m - h - l) * (1 - f) : m + (h - l) * f;
              f = ["L", e, d.y];
              h = !0;
              if ("left" === g ? e > d.x || e < b.x : e < d.x || e > b.x) h = !1;
              d = [["M", d.x, d.y]];
              h && d.push(f);
              d.push(["L", b.x, b.y]);
              return d;
            }
          },
          getConnectorPath: function getConnectorPath() {
            var d = this.labelPosition,
                b = this.series.options.dataLabels,
                f = b.connectorShape,
                n = this.connectorShapes;
            n[f] && (f = n[f]);
            return f.call(this, {
              x: d.final.x,
              y: d.final.y,
              alignment: d.alignment
            }, d.connectorPosition, b);
          }
        });
        "";
      });
      Q(A, "parts/DataLabels.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var A = f.animObject,
            q = f.arrayMax,
            M = f.clamp,
            K = f.defined,
            J = f.extend,
            L = f.fireEvent,
            x = f.format,
            F = f.isArray,
            H = f.merge,
            C = f.objectEach,
            D = f.pick,
            w = f.relativeLength,
            n = f.splat,
            t = f.stableSort;
        f = d.noop;
        var N = d.Series,
            m = d.seriesTypes;

        d.distribute = function (b, f, m) {
          function g(b, e) {
            return b.target - e.target;
          }

          var e,
              n = !0,
              l = b,
              v = [];
          var u = 0;
          var q = l.reducedLen || f;

          for (e = b.length; e--;) {
            u += b[e].size;
          }

          if (u > q) {
            t(b, function (b, e) {
              return (e.rank || 0) - (b.rank || 0);
            });

            for (u = e = 0; u <= q;) {
              u += b[e].size, e++;
            }

            v = b.splice(e - 1, b.length);
          }

          t(b, g);

          for (b = b.map(function (b) {
            return {
              size: b.size,
              targets: [b.target],
              align: D(b.align, .5)
            };
          }); n;) {
            for (e = b.length; e--;) {
              n = b[e], u = (Math.min.apply(0, n.targets) + Math.max.apply(0, n.targets)) / 2, n.pos = M(u - n.size * n.align, 0, f - n.size);
            }

            e = b.length;

            for (n = !1; e--;) {
              0 < e && b[e - 1].pos + b[e - 1].size > b[e].pos && (b[e - 1].size += b[e].size, b[e - 1].targets = b[e - 1].targets.concat(b[e].targets), b[e - 1].align = .5, b[e - 1].pos + b[e - 1].size > f && (b[e - 1].pos = f - b[e - 1].size), b.splice(e, 1), n = !0);
            }
          }

          l.push.apply(l, v);
          e = 0;
          b.some(function (b) {
            var g = 0;
            if (b.targets.some(function () {
              l[e].pos = b.pos + g;
              if ("undefined" !== typeof m && Math.abs(l[e].pos - l[e].target) > m) return l.slice(0, e + 1).forEach(function (b) {
                delete b.pos;
              }), l.reducedLen = (l.reducedLen || f) - .1 * f, l.reducedLen > .1 * f && d.distribute(l, f, m), !0;
              g += l[e].size;
              e++;
            })) return !0;
          });
          t(l, g);
        };

        N.prototype.drawDataLabels = function () {
          function b(c, a) {
            var b = a.filter;
            return b ? (a = b.operator, c = c[b.property], b = b.value, ">" === a && c > b || "<" === a && c < b || ">=" === a && c >= b || "<=" === a && c <= b || "==" === a && c == b || "===" === a && c === b ? !0 : !1) : !0;
          }

          function d(c, a) {
            var b = [],
                e;
            if (F(c) && !F(a)) b = c.map(function (c) {
              return H(c, a);
            });else if (F(a) && !F(c)) b = a.map(function (a) {
              return H(c, a);
            });else if (F(c) || F(a)) for (e = Math.max(c.length, a.length); e--;) {
              b[e] = H(c[e], a[e]);
            } else b = H(c, a);
            return b;
          }

          var f = this,
              h = f.chart,
              e = f.options,
              m = e.dataLabels,
              l = f.points,
              q,
              u = f.hasRendered || 0,
              t = A(e.animation).duration,
              w = Math.min(t, 200),
              E = !h.renderer.forExport && D(m.defer, 0 < w),
              J = h.renderer;
          m = d(d(h.options.plotOptions && h.options.plotOptions.series && h.options.plotOptions.series.dataLabels, h.options.plotOptions && h.options.plotOptions[f.type] && h.options.plotOptions[f.type].dataLabels), m);
          L(this, "drawDataLabels");

          if (F(m) || m.enabled || f._hasPointLabels) {
            var B = f.plotGroup("dataLabelsGroup", "data-labels", E && !u ? "hidden" : "inherit", m.zIndex || 6);
            E && (B.attr({
              opacity: +u
            }), u || setTimeout(function () {
              var c = f.dataLabelsGroup;
              c && (f.visible && B.show(!0), c[e.animation ? "animate" : "attr"]({
                opacity: 1
              }, {
                duration: w
              }));
            }, t - w));
            l.forEach(function (c) {
              q = n(d(m, c.dlOptions || c.options && c.options.dataLabels));
              q.forEach(function (a, d) {
                var g = a.enabled && (!c.isNull || c.dataLabelOnNull) && b(c, a),
                    l = c.dataLabels ? c.dataLabels[d] : c.dataLabel,
                    k = c.connectors ? c.connectors[d] : c.connector,
                    m = D(a.distance, c.labelDistance),
                    n = !l;

                if (g) {
                  var p = c.getLabelConfig();
                  var u = D(a[c.formatPrefix + "Format"], a.format);
                  p = K(u) ? x(u, p, h) : (a[c.formatPrefix + "Formatter"] || a.formatter).call(p, a);
                  u = a.style;
                  var v = a.rotation;
                  h.styledMode || (u.color = D(a.color, u.color, f.color, "#000000"), "contrast" === u.color ? (c.contrastColor = J.getContrast(c.color || f.color), u.color = !K(m) && a.inside || 0 > m || e.stacking ? c.contrastColor : "#000000") : delete c.contrastColor, e.cursor && (u.cursor = e.cursor));
                  var q = {
                    r: a.borderRadius || 0,
                    rotation: v,
                    padding: a.padding,
                    zIndex: 1
                  };
                  h.styledMode || (q.fill = a.backgroundColor, q.stroke = a.borderColor, q["stroke-width"] = a.borderWidth);
                  C(q, function (a, c) {
                    "undefined" === typeof a && delete q[c];
                  });
                }

                !l || g && K(p) ? g && K(p) && (l ? q.text = p : (c.dataLabels = c.dataLabels || [], l = c.dataLabels[d] = v ? J.text(p, 0, -9999, a.useHTML).addClass("highcharts-data-label") : J.label(p, 0, -9999, a.shape, null, null, a.useHTML, null, "data-label"), d || (c.dataLabel = l), l.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (a.className || "") + (a.useHTML ? " highcharts-tracker" : ""))), l.options = a, l.attr(q), h.styledMode || l.css(u).shadow(a.shadow), l.added || l.add(B), a.textPath && !a.useHTML && (l.setTextPath(c.getDataLabelPath && c.getDataLabelPath(l) || c.graphic, a.textPath), c.dataLabelPath && !a.textPath.enabled && (c.dataLabelPath = c.dataLabelPath.destroy())), f.alignDataLabel(c, l, a, null, n)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[d]), d || delete c.dataLabel, k && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[d])));
              });
            });
          }

          L(this, "afterDrawDataLabels");
        };

        N.prototype.alignDataLabel = function (b, d, f, h, e) {
          var g = this,
              l = this.chart,
              m = this.isCartesian && l.inverted,
              n = this.enabledDataSorting,
              q = D(b.dlBox && b.dlBox.centerX, b.plotX, -9999),
              v = D(b.plotY, -9999),
              t = d.getBBox(),
              w = f.rotation,
              x = f.align,
              c = l.isInsidePlot(q, Math.round(v), m),
              a = "justify" === D(f.overflow, n ? "none" : "justify"),
              k = this.visible && !1 !== b.visible && (b.series.forceDL || n && !a || c || f.inside && h && l.isInsidePlot(q, m ? h.x + 1 : h.y + h.height - 1, m));

          var r = function r(f) {
            n && g.xAxis && !a && g.setDataLabelStartPos(b, d, e, c, f);
          };

          if (k) {
            var z = l.renderer.fontMetrics(l.styledMode ? void 0 : f.style.fontSize, d).b;
            h = J({
              x: m ? this.yAxis.len - v : q,
              y: Math.round(m ? this.xAxis.len - q : v),
              width: 0,
              height: 0
            }, h);
            J(f, {
              width: t.width,
              height: t.height
            });
            w ? (a = !1, q = l.renderer.rotCorr(z, w), q = {
              x: h.x + f.x + h.width / 2 + q.x,
              y: h.y + f.y + {
                top: 0,
                middle: .5,
                bottom: 1
              }[f.verticalAlign] * h.height
            }, r(q), d[e ? "attr" : "animate"](q).attr({
              align: x
            }), r = (w + 720) % 360, r = 180 < r && 360 > r, "left" === x ? q.y -= r ? t.height : 0 : "center" === x ? (q.x -= t.width / 2, q.y -= t.height / 2) : "right" === x && (q.x -= t.width, q.y -= r ? 0 : t.height), d.placed = !0, d.alignAttr = q) : (r(h), d.align(f, null, h), q = d.alignAttr);
            a && 0 <= h.height ? this.justifyDataLabel(d, f, q, t, h, e) : D(f.crop, !0) && (k = l.isInsidePlot(q.x, q.y) && l.isInsidePlot(q.x + t.width, q.y + t.height));
            if (f.shape && !w) d[e ? "attr" : "animate"]({
              anchorX: m ? l.plotWidth - b.plotY : b.plotX,
              anchorY: m ? l.plotHeight - b.plotX : b.plotY
            });
          }

          e && n && (d.placed = !1);
          k || n && !a || (d.hide(!0), d.placed = !1);
        };

        N.prototype.setDataLabelStartPos = function (b, d, f, h, e) {
          var g = this.chart,
              l = g.inverted,
              m = this.xAxis,
              n = m.reversed,
              q = l ? d.height / 2 : d.width / 2;
          b = (b = b.pointWidth) ? b / 2 : 0;
          m = l ? e.x : n ? -q - b : m.width - q + b;
          e = l ? n ? this.yAxis.height - q + b : -q - b : e.y;
          d.startXPos = m;
          d.startYPos = e;
          h ? "hidden" === d.visibility && (d.show(), d.attr({
            opacity: 0
          }).animate({
            opacity: 1
          })) : d.attr({
            opacity: 1
          }).animate({
            opacity: 0
          }, void 0, d.hide);
          g.hasRendered && (f && d.attr({
            x: d.startXPos,
            y: d.startYPos
          }), d.placed = !0);
        };

        N.prototype.justifyDataLabel = function (b, d, f, h, e, m) {
          var g = this.chart,
              n = d.align,
              p = d.verticalAlign,
              q = b.box ? 0 : b.padding || 0;
          var v = f.x + q;

          if (0 > v) {
            "right" === n ? (d.align = "left", d.inside = !0) : d.x = -v;
            var t = !0;
          }

          v = f.x + h.width - q;
          v > g.plotWidth && ("left" === n ? (d.align = "right", d.inside = !0) : d.x = g.plotWidth - v, t = !0);
          v = f.y + q;
          0 > v && ("bottom" === p ? (d.verticalAlign = "top", d.inside = !0) : d.y = -v, t = !0);
          v = f.y + h.height - q;
          v > g.plotHeight && ("top" === p ? (d.verticalAlign = "bottom", d.inside = !0) : d.y = g.plotHeight - v, t = !0);
          t && (b.placed = !m, b.align(d, null, e));
          return t;
        };

        m.pie && (m.pie.prototype.dataLabelPositioners = {
          radialDistributionY: function radialDistributionY(b) {
            return b.top + b.distributeBox.pos;
          },
          radialDistributionX: function radialDistributionX(b, d, f, h) {
            return b.getX(f < d.top + 2 || f > d.bottom - 2 ? h : f, d.half, d);
          },
          justify: function justify(b, d, f) {
            return f[0] + (b.half ? -1 : 1) * (d + b.labelDistance);
          },
          alignToPlotEdges: function alignToPlotEdges(b, d, f, h) {
            b = b.getBBox().width;
            return d ? b + h : f - b - h;
          },
          alignToConnectors: function alignToConnectors(b, d, f, h) {
            var e = 0,
                g;
            b.forEach(function (b) {
              g = b.dataLabel.getBBox().width;
              g > e && (e = g);
            });
            return d ? e + h : f - e - h;
          }
        }, m.pie.prototype.drawDataLabels = function () {
          var b = this,
              f = b.data,
              m,
              h = b.chart,
              e = b.options.dataLabels || {},
              n = e.connectorPadding,
              l,
              t = h.plotWidth,
              u = h.plotHeight,
              y = h.plotLeft,
              w = Math.round(h.chartWidth / 3),
              x,
              C = b.center,
              B = C[2] / 2,
              c = C[1],
              a,
              k,
              r,
              z,
              A = [[], []],
              E,
              F,
              L,
              J,
              M = [0, 0, 0, 0],
              Q = b.dataLabelPositioners,
              O;
          b.visible && (e.enabled || b._hasPointLabels) && (f.forEach(function (a) {
            a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
              width: "auto"
            }).css({
              width: "auto",
              textOverflow: "clip"
            }), a.dataLabel.shortened = !1);
          }), N.prototype.drawDataLabels.apply(b), f.forEach(function (a) {
            a.dataLabel && (a.visible ? (A[a.half].push(a), a.dataLabel._pos = null, !K(e.style.width) && !K(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > w && (a.dataLabel.css({
              width: Math.round(.7 * w) + "px"
            }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
          }), A.forEach(function (f, g) {
            var l = f.length,
                p = [],
                q;

            if (l) {
              b.sortByAngle(f, g - .5);

              if (0 < b.maxLabelDistance) {
                var v = Math.max(0, c - B - b.maxLabelDistance);
                var w = Math.min(c + B + b.maxLabelDistance, h.plotHeight);
                f.forEach(function (a) {
                  0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, c - B - a.labelDistance), a.bottom = Math.min(c + B + a.labelDistance, h.plotHeight), q = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                    target: a.labelPosition.natural.y - a.top + q / 2,
                    size: q,
                    rank: a.y
                  }, p.push(a.distributeBox));
                });
                v = w + q - v;
                d.distribute(p, v, v / 5);
              }

              for (J = 0; J < l; J++) {
                m = f[J];
                r = m.labelPosition;
                a = m.dataLabel;
                L = !1 === m.visible ? "hidden" : "inherit";
                F = v = r.natural.y;
                p && K(m.distributeBox) && ("undefined" === typeof m.distributeBox.pos ? L = "hidden" : (z = m.distributeBox.size, F = Q.radialDistributionY(m)));
                delete m.positionIndex;
                if (e.justify) E = Q.justify(m, B, C);else switch (e.alignTo) {
                  case "connectors":
                    E = Q.alignToConnectors(f, g, t, y);
                    break;

                  case "plotEdges":
                    E = Q.alignToPlotEdges(a, g, t, y);
                    break;

                  default:
                    E = Q.radialDistributionX(b, m, F, v);
                }
                a._attr = {
                  visibility: L,
                  align: r.alignment
                };
                O = m.options.dataLabels || {};
                a._pos = {
                  x: E + D(O.x, e.x) + ({
                    left: n,
                    right: -n
                  }[r.alignment] || 0),
                  y: F + D(O.y, e.y) - 10
                };
                r.final.x = E;
                r.final.y = F;
                D(e.crop, !0) && (k = a.getBBox().width, v = null, E - k < n && 1 === g ? (v = Math.round(k - E + n), M[3] = Math.max(v, M[3])) : E + k > t - n && 0 === g && (v = Math.round(E + k - t + n), M[1] = Math.max(v, M[1])), 0 > F - z / 2 ? M[0] = Math.max(Math.round(-F + z / 2), M[0]) : F + z / 2 > u && (M[2] = Math.max(Math.round(F + z / 2 - u), M[2])), a.sideOverflow = v);
              }
            }
          }), 0 === q(M) || this.verifyDataLabelOverflow(M)) && (this.placeDataLabels(), this.points.forEach(function (c) {
            O = H(e, c.options.dataLabels);

            if (l = D(O.connectorWidth, 1)) {
              var d;
              x = c.connector;

              if ((a = c.dataLabel) && a._pos && c.visible && 0 < c.labelDistance) {
                L = a._attr.visibility;
                if (d = !x) c.connector = x = h.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c.colorIndex + (c.className ? " " + c.className : "")).add(b.dataLabelsGroup), h.styledMode || x.attr({
                  "stroke-width": l,
                  stroke: O.connectorColor || c.color || "#666666"
                });
                x[d ? "attr" : "animate"]({
                  d: c.getConnectorPath()
                });
                x.attr("visibility", L);
              } else x && (c.connector = x.destroy());
            }
          }));
        }, m.pie.prototype.placeDataLabels = function () {
          this.points.forEach(function (b) {
            var d = b.dataLabel,
                f;
            d && b.visible && ((f = d._pos) ? (d.sideOverflow && (d._attr.width = Math.max(d.getBBox().width - d.sideOverflow, 0), d.css({
              width: d._attr.width + "px",
              textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
            }), d.shortened = !0), d.attr(d._attr), d[d.moved ? "animate" : "attr"](f), d.moved = !0) : d && d.attr({
              y: -9999
            }));
            delete b.distributeBox;
          }, this);
        }, m.pie.prototype.alignDataLabel = f, m.pie.prototype.verifyDataLabelOverflow = function (b) {
          var d = this.center,
              f = this.options,
              h = f.center,
              e = f.minSize || 80,
              m = null !== f.size;

          if (!m) {
            if (null !== h[0]) var l = Math.max(d[2] - Math.max(b[1], b[3]), e);else l = Math.max(d[2] - b[1] - b[3], e), d[0] += (b[3] - b[1]) / 2;
            null !== h[1] ? l = M(l, e, d[2] - Math.max(b[0], b[2])) : (l = M(l, e, d[2] - b[0] - b[2]), d[1] += (b[0] - b[2]) / 2);
            l < d[2] ? (d[2] = l, d[3] = Math.min(w(f.innerSize || 0, l), l), this.translate(d), this.drawDataLabels && this.drawDataLabels()) : m = !0;
          }

          return m;
        });
        m.column && (m.column.prototype.alignDataLabel = function (b, d, f, h, e) {
          var g = this.chart.inverted,
              l = b.series,
              m = b.dlBox || b.shapeArgs,
              n = D(b.below, b.plotY > D(this.translatedThreshold, l.yAxis.len)),
              q = D(f.inside, !!this.options.stacking);
          m && (h = H(m), 0 > h.y && (h.height += h.y, h.y = 0), m = h.y + h.height - l.yAxis.len, 0 < m && m < h.height && (h.height -= m), g && (h = {
            x: l.yAxis.len - h.y - h.height,
            y: l.xAxis.len - h.x - h.width,
            width: h.height,
            height: h.width
          }), q || (g ? (h.x += n ? 0 : h.width, h.width = 0) : (h.y += n ? h.height : 0, h.height = 0)));
          f.align = D(f.align, !g || q ? "center" : n ? "right" : "left");
          f.verticalAlign = D(f.verticalAlign, g || q ? "middle" : n ? "top" : "bottom");
          N.prototype.alignDataLabel.call(this, b, d, f, h, e);
          f.inside && b.contrastColor && d.css({
            color: b.contrastColor
          });
        });
      });
      Q(A, "modules/overlapping-datalabels.src.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var A = f.addEvent,
            q = f.fireEvent,
            M = f.isArray,
            K = f.objectEach,
            J = f.pick;
        d = d.Chart;
        A(d, "render", function () {
          var d = [];
          (this.labelCollectors || []).forEach(function (f) {
            d = d.concat(f());
          });
          (this.yAxis || []).forEach(function (f) {
            f.stacking && f.options.stackLabels && !f.options.stackLabels.allowOverlap && K(f.stacking.stacks, function (f) {
              K(f, function (f) {
                d.push(f.label);
              });
            });
          });
          (this.series || []).forEach(function (f) {
            var q = f.options.dataLabels;
            f.visible && (!1 !== q.enabled || f._hasPointLabels) && (f.nodes || f.points).forEach(function (f) {
              f.visible && (M(f.dataLabels) ? f.dataLabels : f.dataLabel ? [f.dataLabel] : []).forEach(function (q) {
                var x = q.options;
                q.labelrank = J(x.labelrank, f.labelrank, f.shapeArgs && f.shapeArgs.height);
                x.allowOverlap || d.push(q);
              });
            });
          });
          this.hideOverlappingLabels(d);
        });

        d.prototype.hideOverlappingLabels = function (d) {
          var f = this,
              A = d.length,
              E = f.renderer,
              C,
              D,
              w,
              n = !1;

          var t = function t(b) {
            var d,
                f = b.box ? 0 : b.padding || 0,
                h = d = 0,
                e;

            if (b && (!b.alignAttr || b.placed)) {
              var m = b.alignAttr || {
                x: b.attr("x"),
                y: b.attr("y")
              };
              var l = b.parentGroup;
              b.width || (d = b.getBBox(), b.width = d.width, b.height = d.height, d = E.fontMetrics(null, b.element).h);
              var n = b.width - 2 * f;
              (e = {
                left: "0",
                center: "0.5",
                right: "1"
              }[b.alignValue]) ? h = +e * n : Math.round(b.x) !== b.translateX && (h = b.x - b.translateX);
              return {
                x: m.x + (l.translateX || 0) + f - h,
                y: m.y + (l.translateY || 0) + f - d,
                width: b.width - 2 * f,
                height: b.height - 2 * f
              };
            }
          };

          for (D = 0; D < A; D++) {
            if (C = d[D]) C.oldOpacity = C.opacity, C.newOpacity = 1, C.absoluteBox = t(C);
          }

          d.sort(function (b, d) {
            return (d.labelrank || 0) - (b.labelrank || 0);
          });

          for (D = 0; D < A; D++) {
            var J = (t = d[D]) && t.absoluteBox;

            for (C = D + 1; C < A; ++C) {
              var m = (w = d[C]) && w.absoluteBox;
              !J || !m || t === w || 0 === t.newOpacity || 0 === w.newOpacity || m.x > J.x + J.width || m.x + m.width < J.x || m.y > J.y + J.height || m.y + m.height < J.y || ((t.labelrank < w.labelrank ? t : w).newOpacity = 0);
            }
          }

          d.forEach(function (b) {
            if (b) {
              var d = b.newOpacity;
              b.oldOpacity !== d && (b.alignAttr && b.placed ? (b[d ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), n = !0, b.alignAttr.opacity = d, b[b.isOld ? "animate" : "attr"](b.alignAttr, null, function () {
                f.styledMode || b.css({
                  pointerEvents: d ? "auto" : "none"
                });
                b.visibility = d ? "inherit" : "hidden";
                b.placed = !!d;
              }), q(f, "afterHideOverlappingLabel")) : b.attr({
                opacity: d
              }));
              b.isOld = !0;
            }
          });
          n && q(f, "afterHideAllOverlappingLabels");
        };
      });
      Q(A, "parts/Interaction.js", [A["parts/Globals.js"], A["parts/Legend.js"], A["parts/Point.js"], A["parts/Utilities.js"]], function (d, f, A, q) {
        var E = q.addEvent,
            K = q.createElement,
            J = q.css,
            L = q.defined,
            x = q.extend,
            F = q.fireEvent,
            H = q.isArray,
            C = q.isFunction,
            D = q.isNumber,
            w = q.isObject,
            n = q.merge,
            t = q.objectEach,
            N = q.pick;
        q = d.Chart;
        var m = d.defaultOptions,
            b = d.defaultPlotOptions,
            g = d.hasTouch,
            v = d.Series,
            h = d.seriesTypes,
            e = d.svg;
        var p = d.TrackerMixin = {
          drawTrackerPoint: function drawTrackerPoint() {
            var b = this,
                d = b.chart,
                e = d.pointer,
                f = function f(b) {
              var d = e.getPointFromEvent(b);
              "undefined" !== typeof d && (e.isDirectTouch = !0, d.onMouseOver(b));
            },
                h;

            b.points.forEach(function (b) {
              h = H(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : [];
              b.graphic && (b.graphic.element.point = b);
              h.forEach(function (d) {
                d.div ? d.div.point = b : d.element.point = b;
              });
            });
            b._hasTracking || (b.trackerGroups.forEach(function (l) {
              if (b[l]) {
                b[l].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function (b) {
                  e.onTrackerMouseOut(b);
                });
                if (g) b[l].on("touchstart", f);
                !d.styledMode && b.options.cursor && b[l].css(J).css({
                  cursor: b.options.cursor
                });
              }
            }), b._hasTracking = !0);
            F(this, "afterDrawTracker");
          },
          drawTrackerGraph: function drawTrackerGraph() {
            var b = this,
                d = b.options,
                f = d.trackByArea,
                h = [].concat(f ? b.areaPath : b.graphPath),
                m = b.chart,
                n = m.pointer,
                p = m.renderer,
                q = m.options.tooltip.snap,
                c = b.tracker,
                a = function a(_a2) {
              if (m.hoverSeries !== b) b.onMouseOver();
            },
                k = "rgba(192,192,192," + (e ? .0001 : .002) + ")";

            c ? c.attr({
              d: h
            }) : b.graph && (b.tracker = p.path(h).attr({
              visibility: b.visible ? "visible" : "hidden",
              zIndex: 2
            }).addClass(f ? "highcharts-tracker-area" : "highcharts-tracker-line").add(b.group), m.styledMode || b.tracker.attr({
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              stroke: k,
              fill: f ? k : "none",
              "stroke-width": b.graph.strokeWidth() + (f ? 0 : 2 * q)
            }), [b.tracker, b.markerGroup].forEach(function (c) {
              c.addClass("highcharts-tracker").on("mouseover", a).on("mouseout", function (a) {
                n.onTrackerMouseOut(a);
              });
              d.cursor && !m.styledMode && c.css({
                cursor: d.cursor
              });
              if (g) c.on("touchstart", a);
            }));
            F(this, "afterDrawTracker");
          }
        };
        h.column && (h.column.prototype.drawTracker = p.drawTrackerPoint);
        h.pie && (h.pie.prototype.drawTracker = p.drawTrackerPoint);
        h.scatter && (h.scatter.prototype.drawTracker = p.drawTrackerPoint);
        x(f.prototype, {
          setItemEvents: function setItemEvents(b, d, e) {
            var f = this,
                g = f.chart.renderer.boxWrapper,
                l = b instanceof A,
                h = "highcharts-legend-" + (l ? "point" : "series") + "-active",
                m = f.chart.styledMode;
            (e ? [d, b.legendSymbol] : [b.legendGroup]).forEach(function (c) {
              if (c) c.on("mouseover", function () {
                b.visible && f.allItems.forEach(function (a) {
                  b !== a && a.setState("inactive", !l);
                });
                b.setState("hover");
                b.visible && g.addClass(h);
                m || d.css(f.options.itemHoverStyle);
              }).on("mouseout", function () {
                f.chart.styledMode || d.css(n(b.visible ? f.itemStyle : f.itemHiddenStyle));
                f.allItems.forEach(function (a) {
                  b !== a && a.setState("", !l);
                });
                g.removeClass(h);
                b.setState();
              }).on("click", function (a) {
                var c = function c() {
                  b.setVisible && b.setVisible();
                  f.allItems.forEach(function (a) {
                    b !== a && a.setState(b.visible ? "inactive" : "", !l);
                  });
                };

                g.removeClass(h);
                a = {
                  browserEvent: a
                };
                b.firePointEvent ? b.firePointEvent("legendItemClick", a, c) : F(b, "legendItemClick", a, c);
              });
            });
          },
          createCheckboxForItem: function createCheckboxForItem(b) {
            b.checkbox = K("input", {
              type: "checkbox",
              className: "highcharts-legend-checkbox",
              checked: b.selected,
              defaultChecked: b.selected
            }, this.options.itemCheckboxStyle, this.chart.container);
            E(b.checkbox, "click", function (d) {
              F(b.series || b, "checkboxClick", {
                checked: d.target.checked,
                item: b
              }, function () {
                b.select();
              });
            });
          }
        });
        x(q.prototype, {
          showResetZoom: function showResetZoom() {
            function b() {
              d.zoomOut();
            }

            var d = this,
                e = m.lang,
                f = d.options.chart.resetZoomButton,
                g = f.theme,
                h = g.states,
                n = "chart" === f.relativeTo || "spaceBox" === f.relativeTo ? null : "plotBox";
            F(this, "beforeShowResetZoom", null, function () {
              d.resetZoomButton = d.renderer.button(e.resetZoom, null, null, b, g, h && h.hover).attr({
                align: f.position.align,
                title: e.resetZoomTitle
              }).addClass("highcharts-reset-zoom").add().align(f.position, !1, n);
            });
            F(this, "afterShowResetZoom");
          },
          zoomOut: function zoomOut() {
            F(this, "selection", {
              resetSelection: !0
            }, this.zoom);
          },
          zoom: function zoom(b) {
            var d = this,
                e,
                f = d.pointer,
                g = !1,
                l = d.inverted ? f.mouseDownX : f.mouseDownY;
            !b || b.resetSelection ? (d.axes.forEach(function (b) {
              e = b.zoom();
            }), f.initiated = !1) : b.xAxis.concat(b.yAxis).forEach(function (b) {
              var c = b.axis,
                  a = d.inverted ? c.left : c.top,
                  k = d.inverted ? a + c.width : a + c.height,
                  h = c.isXAxis,
                  m = !1;
              if (!h && l >= a && l <= k || h || !L(l)) m = !0;
              f[h ? "zoomX" : "zoomY"] && m && (e = c.zoom(b.min, b.max), c.displayBtn && (g = !0));
            });
            var h = d.resetZoomButton;
            g && !h ? d.showResetZoom() : !g && w(h) && (d.resetZoomButton = h.destroy());
            e && d.redraw(N(d.options.chart.animation, b && b.animation, 100 > d.pointCount));
          },
          pan: function pan(b, e) {
            var f = this,
                g = f.hoverPoints,
                l = f.options.chart,
                h = f.options.mapNavigation && f.options.mapNavigation.enabled,
                m;
            e = "object" === typeof e ? e : {
              enabled: e,
              type: "x"
            };
            l && l.panning && (l.panning = e);
            var n = e.type;
            F(this, "pan", {
              originalEvent: b
            }, function () {
              g && g.forEach(function (a) {
                a.setState();
              });
              var c = [1];
              "xy" === n ? c = [1, 0] : "y" === n && (c = [0]);
              c.forEach(function (a) {
                var c = f[a ? "xAxis" : "yAxis"][0],
                    e = c.options,
                    g = c.horiz,
                    l = b[g ? "chartX" : "chartY"];
                g = g ? "mouseDownX" : "mouseDownY";
                var p = f[g],
                    q = (c.pointRange || 0) / 2,
                    u = c.reversed && !f.inverted || !c.reversed && f.inverted ? -1 : 1,
                    t = c.getExtremes(),
                    v = c.toValue(p - l, !0) + q * u;
                u = c.toValue(p + c.len - l, !0) - q * u;
                var w = u < v;
                p = w ? u : v;
                v = w ? v : u;
                var y = c.hasVerticalPanning(),
                    x = c.panningState;
                c.series.forEach(function (b) {
                  if (y && !a && (!x || x.isDirty)) {
                    var c = b.getProcessedData(!0);
                    b = b.getExtremes(c.yData, !0);
                    x || (x = {
                      startMin: Number.MAX_VALUE,
                      startMax: -Number.MAX_VALUE
                    });
                    D(b.dataMin) && D(b.dataMax) && (x.startMin = Math.min(b.dataMin, x.startMin), x.startMax = Math.max(b.dataMax, x.startMax));
                  }
                });
                u = Math.min(d.pick(null === x || void 0 === x ? void 0 : x.startMin, t.dataMin), q ? t.min : c.toValue(c.toPixels(t.min) - c.minPixelPadding));
                q = Math.max(d.pick(null === x || void 0 === x ? void 0 : x.startMax, t.dataMax), q ? t.max : c.toValue(c.toPixels(t.max) + c.minPixelPadding));
                c.panningState = x;

                if (!e.ordinal) {
                  e = u - p;
                  0 < e && (v += e, p = u);
                  e = v - q;
                  0 < e && (v = q, p -= e);
                  if (c.series.length && p !== t.min && v !== t.max && a || x && p >= u && v <= q) c.setExtremes(p, v, !1, !1, {
                    trigger: "pan"
                  }), f.resetZoomButton || h || !n.match("y") || (f.showResetZoom(), c.displayBtn = !1), m = !0;
                  f[g] = l;
                }
              });
              m && f.redraw(!1);
              J(f.container, {
                cursor: "move"
              });
            });
          }
        });
        x(A.prototype, {
          select: function select(b, d) {
            var e = this,
                f = e.series,
                g = f.chart;
            this.selectedStaging = b = N(b, !e.selected);
            e.firePointEvent(b ? "select" : "unselect", {
              accumulate: d
            }, function () {
              e.selected = e.options.selected = b;
              f.options.data[f.data.indexOf(e)] = e.options;
              e.setState(b && "select");
              d || g.getSelectedPoints().forEach(function (b) {
                var d = b.series;
                b.selected && b !== e && (b.selected = b.options.selected = !1, d.options.data[d.data.indexOf(b)] = b.options, b.setState(g.hoverPoints && d.options.inactiveOtherPoints ? "inactive" : ""), b.firePointEvent("unselect"));
              });
            });
            delete this.selectedStaging;
          },
          onMouseOver: function onMouseOver(b) {
            var d = this.series.chart,
                e = d.pointer;
            b = b ? e.normalize(b) : e.getChartCoordinatesFromPoint(this, d.inverted);
            e.runPointActions(b, this);
          },
          onMouseOut: function onMouseOut() {
            var b = this.series.chart;
            this.firePointEvent("mouseOut");
            this.series.options.inactiveOtherPoints || (b.hoverPoints || []).forEach(function (b) {
              b.setState();
            });
            b.hoverPoints = b.hoverPoint = null;
          },
          importEvents: function importEvents() {
            if (!this.hasImportedEvents) {
              var b = this,
                  d = n(b.series.options.point, b.options).events;
              b.events = d;
              t(d, function (d, e) {
                C(d) && E(b, e, d);
              });
              this.hasImportedEvents = !0;
            }
          },
          setState: function setState(d, e) {
            var f = this.series,
                g = this.state,
                l = f.options.states[d || "normal"] || {},
                h = b[f.type].marker && f.options.marker,
                m = h && !1 === h.enabled,
                n = h && h.states && h.states[d || "normal"] || {},
                c = !1 === n.enabled,
                a = f.stateMarkerGraphic,
                k = this.marker || {},
                p = f.chart,
                q = f.halo,
                t,
                v = h && f.markerAttribs;
            d = d || "";

            if (!(d === this.state && !e || this.selected && "select" !== d || !1 === l.enabled || d && (c || m && !1 === n.enabled) || d && k.states && k.states[d] && !1 === k.states[d].enabled)) {
              this.state = d;
              v && (t = f.markerAttribs(this, d));

              if (this.graphic) {
                g && this.graphic.removeClass("highcharts-point-" + g);
                d && this.graphic.addClass("highcharts-point-" + d);

                if (!p.styledMode) {
                  var w = f.pointAttribs(this, d);
                  var A = N(p.options.chart.animation, l.animation);
                  f.options.inactiveOtherPoints && w.opacity && ((this.dataLabels || []).forEach(function (a) {
                    a && a.animate({
                      opacity: w.opacity
                    }, A);
                  }), this.connector && this.connector.animate({
                    opacity: w.opacity
                  }, A));
                  this.graphic.animate(w, A);
                }

                t && this.graphic.animate(t, N(p.options.chart.animation, n.animation, h.animation));
                a && a.hide();
              } else {
                if (d && n) {
                  g = k.symbol || f.symbol;
                  a && a.currentSymbol !== g && (a = a.destroy());
                  if (t) if (a) a[e ? "animate" : "attr"]({
                    x: t.x,
                    y: t.y
                  });else g && (f.stateMarkerGraphic = a = p.renderer.symbol(g, t.x, t.y, t.width, t.height).add(f.markerGroup), a.currentSymbol = g);
                  !p.styledMode && a && a.attr(f.pointAttribs(this, d));
                }

                a && (a[d && this.isInside ? "show" : "hide"](), a.element.point = this);
              }

              d = l.halo;
              l = (a = this.graphic || a) && a.visibility || "inherit";
              d && d.size && a && "hidden" !== l && !this.isCluster ? (q || (f.halo = q = p.renderer.path().add(a.parentGroup)), q.show()[e ? "animate" : "attr"]({
                d: this.haloPath(d.size)
              }), q.attr({
                "class": "highcharts-halo highcharts-color-" + N(this.colorIndex, f.colorIndex) + (this.className ? " " + this.className : ""),
                visibility: l,
                zIndex: -1
              }), q.point = this, p.styledMode || q.attr(x({
                fill: this.color || f.color,
                "fill-opacity": d.opacity
              }, d.attributes))) : q && q.point && q.point.haloPath && q.animate({
                d: q.point.haloPath(0)
              }, null, q.hide);
              F(this, "afterSetState");
            }
          },
          haloPath: function haloPath(b) {
            return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - b, this.plotY - b, 2 * b, 2 * b);
          }
        });
        x(v.prototype, {
          onMouseOver: function onMouseOver() {
            var b = this.chart,
                d = b.hoverSeries;
            b.pointer.setHoverChartIndex();
            if (d && d !== this) d.onMouseOut();
            this.options.events.mouseOver && F(this, "mouseOver");
            this.setState("hover");
            b.hoverSeries = this;
          },
          onMouseOut: function onMouseOut() {
            var b = this.options,
                d = this.chart,
                e = d.tooltip,
                f = d.hoverPoint;
            d.hoverSeries = null;
            if (f) f.onMouseOut();
            this && b.events.mouseOut && F(this, "mouseOut");
            !e || this.stickyTracking || e.shared && !this.noSharedTooltip || e.hide();
            d.series.forEach(function (b) {
              b.setState("", !0);
            });
          },
          setState: function setState(b, d) {
            var e = this,
                f = e.options,
                g = e.graph,
                l = f.inactiveOtherPoints,
                h = f.states,
                m = f.lineWidth,
                c = f.opacity,
                a = N(h[b || "normal"] && h[b || "normal"].animation, e.chart.options.chart.animation);
            f = 0;
            b = b || "";

            if (e.state !== b && ([e.group, e.markerGroup, e.dataLabelsGroup].forEach(function (a) {
              a && (e.state && a.removeClass("highcharts-series-" + e.state), b && a.addClass("highcharts-series-" + b));
            }), e.state = b, !e.chart.styledMode)) {
              if (h[b] && !1 === h[b].enabled) return;
              b && (m = h[b].lineWidth || m + (h[b].lineWidthPlus || 0), c = N(h[b].opacity, c));
              if (g && !g.dashstyle) for (h = {
                "stroke-width": m
              }, g.animate(h, a); e["zone-graph-" + f];) {
                e["zone-graph-" + f].attr(h), f += 1;
              }
              l || [e.group, e.markerGroup, e.dataLabelsGroup, e.labelBySeries].forEach(function (b) {
                b && b.animate({
                  opacity: c
                }, a);
              });
            }

            d && l && e.points && e.setAllPointsToState(b);
          },
          setAllPointsToState: function setAllPointsToState(b) {
            this.points.forEach(function (d) {
              d.setState && d.setState(b);
            });
          },
          setVisible: function setVisible(b, d) {
            var e = this,
                f = e.chart,
                g = e.legendItem,
                h = f.options.chart.ignoreHiddenSeries,
                l = e.visible;
            var m = (e.visible = b = e.options.visible = e.userOptions.visible = "undefined" === typeof b ? !l : b) ? "show" : "hide";
            ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (b) {
              if (e[b]) e[b][m]();
            });
            if (f.hoverSeries === e || (f.hoverPoint && f.hoverPoint.series) === e) e.onMouseOut();
            g && f.legend.colorizeItem(e, b);
            e.isDirty = !0;
            e.options.stacking && f.series.forEach(function (b) {
              b.options.stacking && b.visible && (b.isDirty = !0);
            });
            e.linkedSeries.forEach(function (c) {
              c.setVisible(b, !1);
            });
            h && (f.isDirtyBox = !0);
            F(e, m);
            !1 !== d && f.redraw();
          },
          show: function show() {
            this.setVisible(!0);
          },
          hide: function hide() {
            this.setVisible(!1);
          },
          select: function select(b) {
            this.selected = b = this.options.selected = "undefined" === typeof b ? !this.selected : b;
            this.checkbox && (this.checkbox.checked = b);
            F(this, b ? "select" : "unselect");
          },
          drawTracker: p.drawTrackerGraph
        });
      });
      Q(A, "parts/Responsive.js", [A["parts/Globals.js"], A["parts/Utilities.js"]], function (d, f) {
        var A = f.find,
            q = f.isArray,
            M = f.isObject,
            K = f.merge,
            J = f.objectEach,
            L = f.pick,
            x = f.splat,
            F = f.uniqueKey;
        d = d.Chart;

        d.prototype.setResponsive = function (d, f) {
          var q = this.options.responsive,
              w = [],
              n = this.currentResponsive;
          !f && q && q.rules && q.rules.forEach(function (d) {
            "undefined" === typeof d._id && (d._id = F());
            this.matchResponsiveRule(d, w);
          }, this);
          f = K.apply(0, w.map(function (d) {
            return A(q.rules, function (f) {
              return f._id === d;
            }).chartOptions;
          }));
          f.isResponsiveOptions = !0;
          w = w.toString() || void 0;
          w !== (n && n.ruleIds) && (n && this.update(n.undoOptions, d, !0), w ? (n = this.currentOptions(f), n.isResponsiveOptions = !0, this.currentResponsive = {
            ruleIds: w,
            mergedOptions: f,
            undoOptions: n
          }, this.update(f, d, !0)) : this.currentResponsive = void 0);
        };

        d.prototype.matchResponsiveRule = function (d, f) {
          var q = d.condition;
          (q.callback || function () {
            return this.chartWidth <= L(q.maxWidth, Number.MAX_VALUE) && this.chartHeight <= L(q.maxHeight, Number.MAX_VALUE) && this.chartWidth >= L(q.minWidth, 0) && this.chartHeight >= L(q.minHeight, 0);
          }).call(this) && f.push(d._id);
        };

        d.prototype.currentOptions = function (d) {
          function f(d, t, w, m) {
            var b;
            J(d, function (d, n) {
              if (!m && -1 < A.collectionsWithUpdate.indexOf(n)) for (d = x(d), w[n] = [], b = 0; b < d.length; b++) {
                t[n][b] && (w[n][b] = {}, f(d[b], t[n][b], w[n][b], m + 1));
              } else M(d) ? (w[n] = q(d) ? [] : {}, f(d, t[n] || {}, w[n], m + 1)) : w[n] = "undefined" === typeof t[n] ? null : t[n];
            });
          }

          var A = this,
              w = {};
          f(d, this.options, w, 0);
          return w;
        };
      });
      Q(A, "masters/highcharts.src.js", [A["parts/Globals.js"]], function (d) {
        return d;
      });
      A["masters/highcharts.src.js"]._modules = A;
      return A["masters/highcharts.src.js"];
    }); //# sourceMappingURL=highcharts.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/modules/funnel.js":
  /*!***************************************************!*\
    !*** ./node_modules/highcharts/modules/funnel.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesFunnelJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.1.0 (2020-05-05)
    Highcharts funnel module
    (c) 2010-2019 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (b) {
      true && module.exports ? (b["default"] = b, module.exports = b) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (e) {
        b(e);
        b.Highcharts = e;
        return b;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (b) {
      function e(b, l, e, B) {
        b.hasOwnProperty(l) || (b[l] = B.apply(null, e));
      }

      b = b ? b._modules : {};
      e(b, "modules/funnel.src.js", [b["parts/Globals.js"], b["parts/Utilities.js"]], function (b, l) {
        var e = l.isArray,
            B = l.pick;
        l = b.seriesType;
        var F = b.seriesTypes,
            K = b.fireEvent,
            G = b.addEvent,
            I = b.noop;
        l("funnel", "pie", {
          animation: !1,
          center: ["50%", "50%"],
          width: "90%",
          neckWidth: "30%",
          height: "100%",
          neckHeight: "25%",
          reversed: !1,
          size: !0,
          dataLabels: {
            connectorWidth: 1,
            verticalAlign: "middle"
          },
          states: {
            select: {
              color: "#cccccc",
              borderColor: "#000000"
            }
          }
        }, {
          animate: I,
          translate: function translate() {
            function a(b, a) {
              return /%$/.test(b) ? a * parseInt(b, 10) / 100 : parseInt(b, 10);
            }

            var b = 0,
                d = this,
                g = d.chart,
                f = d.options,
                k = f.reversed,
                c = f.ignoreHiddenPoint,
                v = g.plotWidth;
            g = g.plotHeight;
            var e = 0,
                l = f.center,
                h = a(l[0], v),
                m = a(l[1], g),
                F = a(f.width, v),
                r,
                t = a(f.height, g),
                y = a(f.neckWidth, v),
                H = a(f.neckHeight, g),
                z = m - t / 2 + t - H;
            v = d.data;
            var C,
                D,
                G = "left" === f.dataLabels.position ? 1 : 0,
                A,
                n,
                E,
                u,
                p,
                x,
                q;

            d.getWidthAt = function (b) {
              var a = m - t / 2;
              return b > z || t === H ? y : y + (F - y) * (1 - (b - a) / (t - H));
            };

            d.getX = function (b, a, c) {
              return h + (a ? -1 : 1) * (d.getWidthAt(k ? 2 * m - b : b) / 2 + c.labelDistance);
            };

            d.center = [h, m, t];
            d.centerX = h;
            v.forEach(function (a) {
              c && !1 === a.visible || (b += a.y);
            });
            v.forEach(function (a) {
              q = null;
              D = b ? a.y / b : 0;
              n = m - t / 2 + e * t;
              p = n + D * t;
              r = d.getWidthAt(n);
              A = h - r / 2;
              E = A + r;
              r = d.getWidthAt(p);
              u = h - r / 2;
              x = u + r;
              n > z ? (A = u = h - y / 2, E = x = h + y / 2) : p > z && (q = p, r = d.getWidthAt(z), u = h - r / 2, x = u + r, p = z);
              k && (n = 2 * m - n, p = 2 * m - p, null !== q && (q = 2 * m - q));
              C = [["M", A, n], ["L", E, n], ["L", x, p]];
              null !== q && C.push(["L", x, q], ["L", u, q]);
              C.push(["L", u, p], ["Z"]);
              a.shapeType = "path";
              a.shapeArgs = {
                d: C
              };
              a.percentage = 100 * D;
              a.plotX = h;
              a.plotY = (n + (q || p)) / 2;
              a.tooltipPos = [h, a.plotY];
              a.dlBox = {
                x: u,
                y: n,
                topWidth: E - A,
                bottomWidth: x - u,
                height: Math.abs(B(q, p) - n),
                width: NaN
              };
              a.slice = I;
              a.half = G;
              c && !1 === a.visible || (e += D);
            });
            K(d, "afterTranslate");
          },
          sortByAngle: function sortByAngle(a) {
            a.sort(function (a, b) {
              return a.plotY - b.plotY;
            });
          },
          drawDataLabels: function drawDataLabels() {
            var a = this.data,
                b = this.options.dataLabels.distance,
                d,
                g = a.length;

            for (this.center[2] -= 2 * b; g--;) {
              var f = a[g];
              var k = (d = f.half) ? 1 : -1;
              var c = f.plotY;
              f.labelDistance = B(f.options.dataLabels && f.options.dataLabels.distance, b);
              this.maxLabelDistance = Math.max(f.labelDistance, this.maxLabelDistance || 0);
              var e = this.getX(c, d, f);
              f.labelPosition = {
                natural: {
                  x: 0,
                  y: c
                },
                "final": {},
                alignment: d ? "right" : "left",
                connectorPosition: {
                  breakAt: {
                    x: e + (f.labelDistance - 5) * k,
                    y: c
                  },
                  touchingSliceAt: {
                    x: e + f.labelDistance * k,
                    y: c
                  }
                }
              };
            }

            F[this.options.dataLabels.inside ? "column" : "pie"].prototype.drawDataLabels.call(this);
          },
          alignDataLabel: function alignDataLabel(a, e, d, g, f) {
            var k = a.series;
            g = k.options.reversed;
            var c = a.dlBox || a.shapeArgs,
                l = d.align,
                w = d.verticalAlign,
                J = ((k.options || {}).dataLabels || {}).inside,
                h = k.center[1];
            k = k.getWidthAt((g ? 2 * h - a.plotY : a.plotY) - c.height / 2 + e.height);
            k = "middle" === w ? (c.topWidth - c.bottomWidth) / 4 : (k - c.bottomWidth) / 2;
            h = c.y;
            var m = c.x;
            "middle" === w ? h = c.y - c.height / 2 + e.height / 2 : "top" === w && (h = c.y - c.height + e.height + d.padding);
            if ("top" === w && !g || "bottom" === w && g || "middle" === w) "right" === l ? m = c.x - d.padding + k : "left" === l && (m = c.x + d.padding - k);
            g = {
              x: m,
              y: g ? h - c.height : h,
              width: c.bottomWidth,
              height: c.height
            };
            d.verticalAlign = "bottom";
            J && !a.visible || b.Series.prototype.alignDataLabel.call(this, a, e, d, g, f);
            J && (!a.visible && a.dataLabel && (a.dataLabel.placed = !1), a.contrastColor && e.css({
              color: a.contrastColor
            }));
          }
        });
        G(b.Chart, "afterHideAllOverlappingLabels", function () {
          this.series.forEach(function (a) {
            var b = a.options && a.options.dataLabels;
            e(b) && (b = b[0]);
            a.is("pie") && a.placeDataLabels && b && !b.inside && a.placeDataLabels();
          });
        });
        l("pyramid", "funnel", {
          neckWidth: "0%",
          neckHeight: "0%",
          reversed: !0
        });
        "";
      });
      e(b, "masters/modules/funnel.src.js", [], function () {});
    }); //# sourceMappingURL=funnel.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/modules/heatmap.js":
  /*!****************************************************!*\
    !*** ./node_modules/highcharts/modules/heatmap.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesHeatmapJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highmaps JS v8.1.0 (2020-05-05)
    (c) 2009-2019 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (b) {
      true && module.exports ? (b["default"] = b, module.exports = b) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (r) {
        b(r);
        b.Highcharts = r;
        return b;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (b) {
      function r(b, h, g, z) {
        b.hasOwnProperty(h) || (b[h] = z.apply(null, g));
      }

      b = b ? b._modules : {};
      r(b, "parts-map/ColorSeriesMixin.js", [b["parts/Globals.js"]], function (b) {
        b.colorPointMixin = {
          setVisible: function setVisible(b) {
            var g = this,
                h = b ? "show" : "hide";
            g.visible = g.options.visible = !!b;
            ["graphic", "dataLabel"].forEach(function (b) {
              if (g[b]) g[b][h]();
            });
          }
        };
        b.colorSeriesMixin = {
          optionalAxis: "colorAxis",
          colorAxis: 0,
          translateColors: function translateColors() {
            var b = this,
                g = this.options.nullColor,
                v = this.colorAxis,
                r = this.colorKey;
            (this.data.length ? this.data : this.points).forEach(function (h) {
              var p = h.getNestedProperty(r);
              if (p = h.options.color || (h.isNull || null === h.value ? g : v && "undefined" !== typeof p ? v.toColor(p, h) : h.color || b.color)) h.color = p;
            });
          }
        };
      });
      r(b, "parts-map/ColorAxis.js", [b["parts/Axis.js"], b["parts/Color.js"], b["parts/Globals.js"], b["parts/Legend.js"], b["mixins/legend-symbol.js"], b["parts/Point.js"], b["parts/Utilities.js"]], function (b, h, g, z, r, C, p) {
        var v = this && this.__extends || function () {
          var _a3 = function a(e, c) {
            _a3 = Object.setPrototypeOf || {
              __proto__: []
            } instanceof Array && function (c, n) {
              c.__proto__ = n;
            } || function (c, n) {
              for (var k in n) {
                n.hasOwnProperty(k) && (c[k] = n[k]);
              }
            };

            return _a3(e, c);
          };

          return function (e, c) {
            function k() {
              this.constructor = e;
            }

            _a3(e, c);

            e.prototype = null === c ? Object.create(c) : (k.prototype = c.prototype, new k());
          };
        }(),
            w = h.parse;

        h = p.addEvent;
        var D = p.erase,
            u = p.extend,
            x = p.Fx,
            a = p.isNumber,
            f = p.merge,
            y = p.pick,
            F = p.splat;
        "";
        p = g.Chart;
        var q = g.Series,
            l = g.colorPointMixin,
            m = g.noop;
        u(q.prototype, g.colorSeriesMixin);
        u(C.prototype, l);
        p.prototype.collectionsWithUpdate.push("colorAxis");
        p.prototype.collectionsWithInit.colorAxis = [p.prototype.addColorAxis];

        var B = function (e) {
          function d(c, k) {
            var n = e.call(this, c, k) || this;
            n.beforePadding = !1;
            n.chart = void 0;
            n.coll = "colorAxis";
            n.dataClasses = void 0;
            n.legendItem = void 0;
            n.legendItems = void 0;
            n.name = "";
            n.options = void 0;
            n.stops = void 0;
            n.visible = !0;
            n.init(c, k);
            return n;
          }

          v(d, e);

          d.buildOptions = function (c, k, n) {
            c = c.options.legend || {};
            var t = n.layout ? "vertical" !== n.layout : "vertical" !== c.layout;
            return f(k, {
              side: t ? 2 : 1,
              reversed: !t
            }, n, {
              opposite: !t,
              showEmpty: !1,
              title: null,
              visible: c.enabled && (n ? !1 !== n.visible : !0)
            });
          };

          d.prototype.init = function (c, k) {
            var n = d.buildOptions(c, d.defaultOptions, k);
            this.coll = "colorAxis";
            e.prototype.init.call(this, c, n);
            k.dataClasses && this.initDataClasses(k);
            this.initStops();
            this.horiz = !n.opposite;
            this.zoomEnabled = !1;
          };

          d.prototype.initDataClasses = function (c) {
            var k = this.chart,
                n,
                t = 0,
                a = k.options.chart.colorCount,
                e = this.options,
                d = c.dataClasses.length;
            this.dataClasses = n = [];
            this.legendItems = [];
            c.dataClasses.forEach(function (c, b) {
              c = f(c);
              n.push(c);
              if (k.styledMode || !c.color) "category" === e.dataClassColor ? (k.styledMode || (b = k.options.colors, a = b.length, c.color = b[t]), c.colorIndex = t, t++, t === a && (t = 0)) : c.color = w(e.minColor).tweenTo(w(e.maxColor), 2 > d ? .5 : b / (d - 1));
            });
          };

          d.prototype.hasData = function () {
            return !!(this.tickPositions || []).length;
          };

          d.prototype.setTickPositions = function () {
            if (!this.dataClasses) return e.prototype.setTickPositions.call(this);
          };

          d.prototype.initStops = function () {
            this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
            this.stops.forEach(function (c) {
              c.color = w(c[1]);
            });
          };

          d.prototype.setOptions = function (c) {
            e.prototype.setOptions.call(this, c);
            this.options.crosshair = this.options.marker;
          };

          d.prototype.setAxisSize = function () {
            var c = this.legendSymbol,
                k = this.chart,
                a = k.options.legend || {},
                t,
                e;
            c ? (this.left = a = c.attr("x"), this.top = t = c.attr("y"), this.width = e = c.attr("width"), this.height = c = c.attr("height"), this.right = k.chartWidth - a - e, this.bottom = k.chartHeight - t - c, this.len = this.horiz ? e : c, this.pos = this.horiz ? a : t) : this.len = (this.horiz ? a.symbolWidth : a.symbolHeight) || d.defaultLegendLength;
          };

          d.prototype.normalizedValue = function (c) {
            this.logarithmic && (c = this.logarithmic.log2lin(c));
            return 1 - (this.max - c) / (this.max - this.min || 1);
          };

          d.prototype.toColor = function (c, k) {
            var a = this.dataClasses,
                e = this.stops,
                d;
            if (a) for (d = a.length; d--;) {
              var b = a[d];
              var f = b.from;
              e = b.to;

              if (("undefined" === typeof f || c >= f) && ("undefined" === typeof e || c <= e)) {
                var l = b.color;
                k && (k.dataClass = d, k.colorIndex = b.colorIndex);
                break;
              }
            } else {
              c = this.normalizedValue(c);

              for (d = e.length; d-- && !(c > e[d][0]);) {
                ;
              }

              f = e[d] || e[d + 1];
              e = e[d + 1] || f;
              c = 1 - (e[0] - c) / (e[0] - f[0] || 1);
              l = f.color.tweenTo(e.color, c);
            }
            return l;
          };

          d.prototype.getOffset = function () {
            var c = this.legendGroup,
                k = this.chart.axisOffset[this.side];
            c && (this.axisParent = c, e.prototype.getOffset.call(this), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = k);
          };

          d.prototype.setLegendColor = function () {
            var c = this.reversed,
                k = c ? 1 : 0;
            c = c ? 0 : 1;
            k = this.horiz ? [k, 0, c, 0] : [0, c, 0, k];
            this.legendColor = {
              linearGradient: {
                x1: k[0],
                y1: k[1],
                x2: k[2],
                y2: k[3]
              },
              stops: this.stops
            };
          };

          d.prototype.drawLegendSymbol = function (c, k) {
            var e = c.padding,
                a = c.options,
                f = this.horiz,
                b = y(a.symbolWidth, f ? d.defaultLegendLength : 12),
                l = y(a.symbolHeight, f ? 12 : d.defaultLegendLength),
                m = y(a.labelPadding, f ? 16 : 30);
            a = y(a.itemDistance, 10);
            this.setLegendColor();
            k.legendSymbol = this.chart.renderer.rect(0, c.baseline - 11, b, l).attr({
              zIndex: 1
            }).add(k.legendGroup);
            this.legendItemWidth = b + e + (f ? a : m);
            this.legendItemHeight = l + e + (f ? m : 0);
          };

          d.prototype.setState = function (c) {
            this.series.forEach(function (a) {
              a.setState(c);
            });
          };

          d.prototype.setVisible = function () {};

          d.prototype.getSeriesExtremes = function () {
            var c = this.series,
                a = c.length,
                e;
            this.dataMin = Infinity;

            for (this.dataMax = -Infinity; a--;) {
              var d = c[a];
              var f = d.colorKey = y(d.options.colorKey, d.colorKey, d.pointValKey, d.zoneAxis, "y");
              var b = d.pointArrayMap;
              var l = d[f + "Min"] && d[f + "Max"];
              if (d[f + "Data"]) var m = d[f + "Data"];else if (b) {
                m = [];
                b = b.indexOf(f);
                var g = d.yData;
                if (0 <= b && g) for (e = 0; e < g.length; e++) {
                  m.push(y(g[e][b], g[e]));
                }
              } else m = d.yData;
              l ? (d.minColorValue = d[f + "Min"], d.maxColorValue = d[f + "Max"]) : (m = q.prototype.getExtremes.call(d, m), d.minColorValue = m.dataMin, d.maxColorValue = m.dataMax);
              "undefined" !== typeof d.minColorValue && (this.dataMin = Math.min(this.dataMin, d.minColorValue), this.dataMax = Math.max(this.dataMax, d.maxColorValue));
              l || q.prototype.applyExtremes.call(d);
            }
          };

          d.prototype.drawCrosshair = function (c, a) {
            var d = a && a.plotX,
                k = a && a.plotY,
                f = this.pos,
                b = this.len;

            if (a) {
              var l = this.toPixels(a.getNestedProperty(a.series.colorKey));
              l < f ? l = f - 2 : l > f + b && (l = f + b + 2);
              a.plotX = l;
              a.plotY = this.len - l;
              e.prototype.drawCrosshair.call(this, c, a);
              a.plotX = d;
              a.plotY = k;
              this.cross && !this.cross.addedToColorAxis && this.legendGroup && (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.addedToColorAxis = !0, !this.chart.styledMode && this.crosshair && this.cross.attr({
                fill: this.crosshair.color
              }));
            }
          };

          d.prototype.getPlotLinePath = function (c) {
            var d = c.translatedValue;
            return a(d) ? this.horiz ? [["M", d - 4, this.top - 6], ["L", d + 4, this.top - 6], ["L", d, this.top], ["Z"]] : [["M", this.left, d], ["L", this.left - 6, d + 6], ["L", this.left - 6, d - 6], ["Z"]] : e.prototype.getPlotLinePath.call(this, c);
          };

          d.prototype.update = function (c, a) {
            var b = this.chart,
                k = b.legend,
                l = d.buildOptions(b, {}, c);
            this.series.forEach(function (c) {
              c.isDirtyData = !0;
            });
            (c.dataClasses && k.allItems || this.dataClasses) && this.destroyItems();
            b.options[this.coll] = f(this.userOptions, l);
            e.prototype.update.call(this, l, a);
            this.legendItem && (this.setLegendColor(), k.colorizeItem(this, !0));
          };

          d.prototype.destroyItems = function () {
            var c = this.chart;
            this.legendItem ? c.legend.destroyItem(this) : this.legendItems && this.legendItems.forEach(function (a) {
              c.legend.destroyItem(a);
            });
            c.isDirtyLegend = !0;
          };

          d.prototype.remove = function (c) {
            this.destroyItems();
            e.prototype.remove.call(this, c);
          };

          d.prototype.getDataClassLegendSymbols = function () {
            var c = this,
                a = c.chart,
                d = c.legendItems,
                e = a.options.legend,
                f = e.valueDecimals,
                b = e.valueSuffix || "",
                l;
            d.length || c.dataClasses.forEach(function (e, k) {
              var n = !0,
                  g = e.from,
                  q = e.to,
                  h = a.numberFormatter;
              l = "";
              "undefined" === typeof g ? l = "< " : "undefined" === typeof q && (l = "> ");
              "undefined" !== typeof g && (l += h(g, f) + b);
              "undefined" !== typeof g && "undefined" !== typeof q && (l += " - ");
              "undefined" !== typeof q && (l += h(q, f) + b);
              d.push(u({
                chart: a,
                name: l,
                options: {},
                drawLegendSymbol: r.drawRectangle,
                visible: !0,
                setState: m,
                isDataClass: !0,
                setVisible: function setVisible() {
                  n = c.visible = !n;
                  c.series.forEach(function (a) {
                    a.points.forEach(function (a) {
                      a.dataClass === k && a.setVisible(n);
                    });
                  });
                  a.legend.colorizeItem(this, n);
                }
              }, e));
            });
            return d;
          };

          d.defaultLegendLength = 200;
          d.defaultOptions = {
            lineWidth: 0,
            minPadding: 0,
            maxPadding: 0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            startOnTick: !0,
            endOnTick: !0,
            offset: 0,
            marker: {
              animation: {
                duration: 50
              },
              width: .01,
              color: "#999999"
            },
            labels: {
              overflow: "justify",
              rotation: 0
            },
            minColor: "#e6ebf5",
            maxColor: "#003399",
            tickLength: 5,
            showInLegend: !0
          };
          d.keepProps = ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"];
          return d;
        }(b);

        Array.prototype.push.apply(b.keepProps, B.keepProps);
        g.ColorAxis = B;
        ["fill", "stroke"].forEach(function (a) {
          x.prototype[a + "Setter"] = function () {
            this.elem.attr(a, w(this.start).tweenTo(w(this.end), this.pos), null, !0);
          };
        });
        h(p, "afterGetAxes", function () {
          var a = this,
              d = a.options;
          this.colorAxis = [];
          d.colorAxis && (d.colorAxis = F(d.colorAxis), d.colorAxis.forEach(function (c, d) {
            c.index = d;
            new B(a, c);
          }));
        });
        h(q, "bindAxes", function () {
          var a = this.axisTypes;
          a ? -1 === a.indexOf("colorAxis") && a.push("colorAxis") : this.axisTypes = ["colorAxis"];
        });
        h(z, "afterGetAllItems", function (a) {
          var d = [],
              c,
              e;
          (this.chart.colorAxis || []).forEach(function (e) {
            (c = e.options) && c.showInLegend && (c.dataClasses && c.visible ? d = d.concat(e.getDataClassLegendSymbols()) : c.visible && d.push(e), e.series.forEach(function (d) {
              if (!d.options.showInLegend || c.dataClasses) "point" === d.options.legendType ? d.points.forEach(function (c) {
                D(a.allItems, c);
              }) : D(a.allItems, d);
            }));
          });

          for (e = d.length; e--;) {
            a.allItems.unshift(d[e]);
          }
        });
        h(z, "afterColorizeItem", function (a) {
          a.visible && a.item.legendColor && a.item.legendSymbol.attr({
            fill: a.item.legendColor
          });
        });
        h(z, "afterUpdate", function () {
          var a = this.chart.colorAxis;
          a && a.forEach(function (a, c, e) {
            a.update({}, e);
          });
        });
        h(q, "afterTranslate", function () {
          (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors();
        });
        return B;
      });
      r(b, "parts-map/ColorMapSeriesMixin.js", [b["parts/Globals.js"], b["parts/Point.js"], b["parts/Utilities.js"]], function (b, h, g) {
        var v = g.defined;
        g = b.noop;
        var r = b.seriesTypes;
        b.colorMapPointMixin = {
          dataLabelOnNull: !0,
          isValid: function isValid() {
            return null !== this.value && Infinity !== this.value && -Infinity !== this.value;
          },
          setState: function setState(b) {
            h.prototype.setState.call(this, b);
            this.graphic && this.graphic.attr({
              zIndex: "hover" === b ? 1 : 0
            });
          }
        };
        b.colorMapSeriesMixin = {
          pointArrayMap: ["value"],
          axisTypes: ["xAxis", "yAxis", "colorAxis"],
          trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
          getSymbol: g,
          parallelArrays: ["x", "y", "value"],
          colorKey: "value",
          pointAttribs: r.column.prototype.pointAttribs,
          colorAttribs: function colorAttribs(b) {
            var g = {};
            v(b.color) && (g[this.colorProp || "fill"] = b.color);
            return g;
          }
        };
      });
      r(b, "parts-map/HeatmapSeries.js", [b["parts/Globals.js"], b["mixins/legend-symbol.js"], b["parts/Utilities.js"]], function (b, h, g) {
        var r = g.clamp,
            v = g.extend,
            C = g.fireEvent,
            p = g.isNumber,
            A = g.merge,
            w = g.pick;
        g = g.seriesType;
        var E = b.colorMapPointMixin,
            u = b.Series,
            x = b.SVGRenderer.prototype.symbols;
        g("heatmap", "scatter", {
          animation: !1,
          borderWidth: 0,
          nullColor: "#f7f7f7",
          dataLabels: {
            formatter: function formatter() {
              return this.point.value;
            },
            inside: !0,
            verticalAlign: "middle",
            crop: !1,
            overflow: !1,
            padding: 0
          },
          marker: {
            symbol: "rect",
            radius: 0,
            lineColor: void 0,
            states: {
              hover: {
                lineWidthPlus: 0
              },
              select: {}
            }
          },
          clip: !0,
          pointRange: null,
          tooltip: {
            pointFormat: "{point.x}, {point.y}: {point.value}<br/>"
          },
          states: {
            hover: {
              halo: !1,
              brightness: .2
            }
          }
        }, A(b.colorMapSeriesMixin, {
          pointArrayMap: ["y", "value"],
          hasPointSpecificOptions: !0,
          getExtremesFromAll: !0,
          directTouch: !0,
          init: function init() {
            u.prototype.init.apply(this, arguments);
            var a = this.options;
            a.pointRange = w(a.pointRange, a.colsize || 1);
            this.yAxis.axisPointRange = a.rowsize || 1;
            v(x, {
              ellipse: x.circle,
              rect: x.square
            });
          },
          getSymbol: u.prototype.getSymbol,
          setClip: function setClip(a) {
            var b = this.chart;
            u.prototype.setClip.apply(this, arguments);
            (!1 !== this.options.clip || a) && this.markerGroup.clip((a || this.clipBox) && this.sharedClipKey ? b[this.sharedClipKey] : b.clipRect);
          },
          translate: function translate() {
            var a = this.options,
                b = a.marker && a.marker.symbol || "",
                g = x[b] ? b : "rect";
            a = this.options;
            var h = -1 !== ["circle", "square"].indexOf(g);
            this.generatePoints();
            this.points.forEach(function (a) {
              var f = a.getCellAttributes(),
                  m = {
                x: Math.min(f.x1, f.x2),
                y: Math.min(f.y1, f.y2),
                width: Math.max(Math.abs(f.x2 - f.x1), 0),
                height: Math.max(Math.abs(f.y2 - f.y1), 0)
              };
              var q = a.hasImage = 0 === (a.marker && a.marker.symbol || b || "").indexOf("url");

              if (h) {
                var e = Math.abs(m.width - m.height);
                m.x = Math.min(f.x1, f.x2) + (m.width < m.height ? 0 : e / 2);
                m.y = Math.min(f.y1, f.y2) + (m.width < m.height ? e / 2 : 0);
                m.width = m.height = Math.min(m.width, m.height);
              }

              e = {
                plotX: (f.x1 + f.x2) / 2,
                plotY: (f.y1 + f.y2) / 2,
                clientX: (f.x1 + f.x2) / 2,
                shapeType: "path",
                shapeArgs: A(!0, m, {
                  d: x[g](m.x, m.y, m.width, m.height)
                })
              };
              q && (a.marker = {
                width: m.width,
                height: m.height
              });
              v(a, e);
            });
            C(this, "afterTranslate");
          },
          pointAttribs: function pointAttribs(a, f) {
            var g = u.prototype.pointAttribs.call(this, a, f),
                h = this.options || {},
                q = this.chart.options.plotOptions || {},
                l = q.series || {},
                m = q.heatmap || {};
            q = h.borderColor || m.borderColor || l.borderColor;
            l = h.borderWidth || m.borderWidth || l.borderWidth || g["stroke-width"];
            g.stroke = a && a.marker && a.marker.lineColor || h.marker && h.marker.lineColor || q || this.color;
            g["stroke-width"] = l;
            f && (a = A(h.states[f], h.marker && h.marker.states[f], a.options.states && a.options.states[f] || {}), f = a.brightness, g.fill = a.color || b.color(g.fill).brighten(f || 0).get(), g.stroke = a.lineColor);
            return g;
          },
          markerAttribs: function markerAttribs(a, b) {
            var f = a.marker || {},
                g = this.options.marker || {},
                h = a.shapeArgs || {},
                l = {};
            if (a.hasImage) return {
              x: a.plotX,
              y: a.plotY
            };

            if (b) {
              var m = g.states[b] || {};
              var p = f.states && f.states[b] || {};
              [["width", "x"], ["height", "y"]].forEach(function (a) {
                l[a[0]] = (p[a[0]] || m[a[0]] || h[a[0]]) + (p[a[0] + "Plus"] || m[a[0] + "Plus"] || 0);
                l[a[1]] = h[a[1]] + (h[a[0]] - l[a[0]]) / 2;
              });
            }

            return b ? l : h;
          },
          drawPoints: function drawPoints() {
            var a = this;
            if ((this.options.marker || {}).enabled || this._hasPointMarkers) u.prototype.drawPoints.call(this), this.points.forEach(function (b) {
              b.graphic && b.graphic[a.chart.styledMode ? "css" : "animate"](a.colorAttribs(b));
            });
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          getValidPoints: function getValidPoints(a, b) {
            return u.prototype.getValidPoints.call(this, a, b, !0);
          },
          getBox: b.noop,
          drawLegendSymbol: h.drawRectangle,
          alignDataLabel: b.seriesTypes.column.prototype.alignDataLabel,
          getExtremes: function getExtremes() {
            var a = u.prototype.getExtremes.call(this, this.valueData),
                b = a.dataMin;
            a = a.dataMax;
            p(b) && (this.valueMin = b);
            p(a) && (this.valueMax = a);
            return u.prototype.getExtremes.call(this);
          }
        }), A(E, {
          applyOptions: function applyOptions(a, f) {
            a = b.Point.prototype.applyOptions.call(this, a, f);
            a.formatPrefix = a.isNull || null === a.value ? "null" : "point";
            return a;
          },
          isValid: function isValid() {
            return Infinity !== this.value && -Infinity !== this.value;
          },
          haloPath: function haloPath(a) {
            if (!a) return [];
            var b = this.shapeArgs;
            return ["M", b.x - a, b.y - a, "L", b.x - a, b.y + b.height + a, b.x + b.width + a, b.y + b.height + a, b.x + b.width + a, b.y - a, "Z"];
          },
          getCellAttributes: function getCellAttributes() {
            var a = this.series,
                b = a.options,
                g = (b.colsize || 1) / 2,
                h = (b.rowsize || 1) / 2,
                q = a.xAxis,
                l = a.yAxis,
                m = this.options.marker || a.options.marker;
            a = a.pointPlacementToXValue();
            var p = w(this.pointPadding, b.pointPadding, 0),
                e = {
              x1: r(Math.round(q.len - (q.translate(this.x - g, !1, !0, !1, !0, -a) || 0)), -q.len, 2 * q.len),
              x2: r(Math.round(q.len - (q.translate(this.x + g, !1, !0, !1, !0, -a) || 0)), -q.len, 2 * q.len),
              y1: r(Math.round(l.translate(this.y - h, !1, !0, !1, !0) || 0), -l.len, 2 * l.len),
              y2: r(Math.round(l.translate(this.y + h, !1, !0, !1, !0) || 0), -l.len, 2 * l.len)
            };
            [["width", "x"], ["height", "y"]].forEach(function (a) {
              var b = a[0];
              a = a[1];
              var d = a + "1",
                  f = a + "2",
                  g = Math.abs(e[d] - e[f]),
                  h = m && m.lineWidth || 0,
                  l = Math.abs(e[d] + e[f]) / 2;
              m[b] && m[b] < g && (e[d] = l - m[b] / 2 - h / 2, e[f] = l + m[b] / 2 + h / 2);
              p && ("y" === a && (d = f, f = a + "1"), e[d] += p, e[f] -= p);
            });
            return e;
          }
        }));
        "";
      });
      r(b, "masters/modules/heatmap.src.js", [], function () {});
    }); //# sourceMappingURL=heatmap.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/modules/solid-gauge.js":
  /*!********************************************************!*\
    !*** ./node_modules/highcharts/modules/solid-gauge.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesSolidGaugeJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.1.0 (2020-05-05)
    Solid angular gauge module
    (c) 2010-2019 Torstein Honsi
    License: www.highcharts.com/license
    */


    (function (b) {
      true && module.exports ? (b["default"] = b, module.exports = b) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js"), __webpack_require__(
      /*! highcharts/highcharts-more */
      "./node_modules/highcharts/highcharts-more.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (h) {
        b(h);
        b.Highcharts = h;
        return b;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (b) {
      function h(b, r, h, g) {
        b.hasOwnProperty(r) || (b[r] = g.apply(null, h));
      }

      b = b ? b._modules : {};
      h(b, "modules/solid-gauge.src.js", [b["parts/Globals.js"], b["parts/Color.js"], b["mixins/legend-symbol.js"], b["parts/Utilities.js"]], function (b, h, x, g) {
        var k = h.parse,
            r = g.clamp,
            u = g.extend,
            v = g.isNumber,
            y = g.merge,
            t = g.pick,
            w = g.pInt;
        h = g.seriesType;
        g = g.wrap;
        g(b.Renderer.prototype.symbols, "arc", function (a, d, b, e, m, c) {
          a = a(d, b, e, m, c);
          c.rounded && (e = ((c.r || e) - (c.innerR || 0)) / 2, d = a[0], c = a[2], "M" === d[0] && "L" === c[0] && (d = ["A", e, e, 0, 1, 1, d[1], d[2]], a[2] = ["A", e, e, 0, 1, 1, c[1], c[2]], a[4] = d));
          return a;
        });
        var z = {
          initDataClasses: function initDataClasses(a) {
            var d = this.chart,
                b,
                e = 0,
                m = this.options;
            this.dataClasses = b = [];
            a.dataClasses.forEach(function (c, f) {
              c = y(c);
              b.push(c);
              c.color || ("category" === m.dataClassColor ? (f = d.options.colors, c.color = f[e++], e === f.length && (e = 0)) : c.color = k(m.minColor).tweenTo(k(m.maxColor), f / (a.dataClasses.length - 1)));
            });
          },
          initStops: function initStops(a) {
            this.stops = a.stops || [[0, this.options.minColor], [1, this.options.maxColor]];
            this.stops.forEach(function (a) {
              a.color = k(a[1]);
            });
          },
          toColor: function toColor(a, b) {
            var f = this.stops,
                e = this.dataClasses,
                d;
            if (e) for (d = e.length; d--;) {
              var c = e[d];
              var g = c.from;
              f = c.to;

              if (("undefined" === typeof g || a >= g) && ("undefined" === typeof f || a <= f)) {
                var h = c.color;
                b && (b.dataClass = d);
                break;
              }
            } else {
              this.logarithmic && (a = this.val2lin(a));
              a = 1 - (this.max - a) / (this.max - this.min);

              for (d = f.length; d-- && !(a > f[d][0]);) {
                ;
              }

              g = f[d] || f[d + 1];
              f = f[d + 1] || g;
              a = 1 - (f[0] - a) / (f[0] - g[0] || 1);
              h = g.color.tweenTo(f.color, a);
            }
            return h;
          }
        };
        h("solidgauge", "gauge", {
          colorByPoint: !0,
          dataLabels: {
            y: 0
          }
        }, {
          drawLegendSymbol: x.drawRectangle,
          translate: function translate() {
            var a = this.yAxis;
            u(a, z);
            !a.dataClasses && a.options.dataClasses && a.initDataClasses(a.options);
            a.initStops(a.options);
            b.seriesTypes.gauge.prototype.translate.call(this);
          },
          drawPoints: function drawPoints() {
            var a = this,
                b = a.yAxis,
                f = b.center,
                e = a.options,
                g = a.chart.renderer,
                c = e.overshoot,
                h = v(c) ? c / 180 * Math.PI : 0,
                k;
            v(e.threshold) && (k = b.startAngleRad + b.translate(e.threshold, null, null, null, !0));
            this.thresholdAngleRad = t(k, b.startAngleRad);
            a.points.forEach(function (c) {
              if (!c.isNull) {
                var d = c.graphic,
                    l = b.startAngleRad + b.translate(c.y, null, null, null, !0),
                    k = w(t(c.options.radius, e.radius, 100)) * f[2] / 200,
                    n = w(t(c.options.innerRadius, e.innerRadius, 60)) * f[2] / 200,
                    p = b.toColor(c.y, c),
                    q = Math.min(b.startAngleRad, b.endAngleRad),
                    m = Math.max(b.startAngleRad, b.endAngleRad);
                "none" === p && (p = c.color || a.color || "none");
                "none" !== p && (c.color = p);
                l = r(l, q - h, m + h);
                !1 === e.wrap && (l = r(l, q, m));
                q = Math.min(l, a.thresholdAngleRad);
                l = Math.max(l, a.thresholdAngleRad);
                l - q > 2 * Math.PI && (l = q + 2 * Math.PI);
                c.shapeArgs = n = {
                  x: f[0],
                  y: f[1],
                  r: k,
                  innerR: n,
                  start: q,
                  end: l,
                  rounded: e.rounded
                };
                c.startR = k;
                d ? (k = n.d, d.animate(u({
                  fill: p
                }, n)), k && (n.d = k)) : c.graphic = d = g.arc(n).attr({
                  fill: p,
                  "sweep-flag": 0
                }).add(a.group);
                a.chart.styledMode || ("square" !== e.linecap && d.attr({
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }), d.attr({
                  stroke: e.borderColor || "none",
                  "stroke-width": e.borderWidth || 0
                }));
                d && d.addClass(c.getClassName(), !0);
              }
            });
          },
          animate: function animate(a) {
            a || (this.startAngleRad = this.thresholdAngleRad, b.seriesTypes.pie.prototype.animate.call(this, a));
          }
        });
        "";
      });
      h(b, "masters/modules/solid-gauge.src.js", [], function () {});
    }); //# sourceMappingURL=solid-gauge.js.map

    /***/

  },

  /***/
  "./node_modules/highcharts/modules/treemap.js":
  /*!****************************************************!*\
    !*** ./node_modules/highcharts/modules/treemap.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesHighchartsModulesTreemapJs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    /*
    Highcharts JS v8.1.0 (2020-05-05)
    (c) 2014-2019 Highsoft AS
    Authors: Jon Arild Nygard / Oystein Moseng
    License: www.highcharts.com/license
    */


    (function (c) {
      true && module.exports ? (c["default"] = c, module.exports = c) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(
      /*! highcharts */
      "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (w) {
        c(w);
        c.Highcharts = w;
        return c;
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
    })(function (c) {
      function w(c, d, x, l) {
        c.hasOwnProperty(d) || (c[d] = l.apply(null, x));
      }

      c = c ? c._modules : {};
      w(c, "mixins/tree-series.js", [c["parts/Color.js"], c["parts/Utilities.js"]], function (c, d) {
        var x = d.extend,
            l = d.isArray,
            n = d.isNumber,
            q = d.isObject,
            h = d.merge,
            v = d.pick;
        return {
          getColor: function getColor(f, k) {
            var r = k.index,
                d = k.mapOptionsToLevel,
                h = k.parentColor,
                q = k.parentColorIndex,
                C = k.series,
                A = k.colors,
                x = k.siblings,
                p = C.points,
                l = C.chart.options.chart,
                y;

            if (f) {
              p = p[f.i];
              f = d[f.level] || {};

              if (d = p && f.colorByPoint) {
                var t = p.index % (A ? A.length : l.colorCount);
                var n = A && A[t];
              }

              if (!C.chart.styledMode) {
                A = p && p.options.color;
                l = f && f.color;
                if (y = h) y = (y = f && f.colorVariation) && "brightness" === y.key ? c.parse(h).brighten(r / x * y.to).get() : h;
                y = v(A, l, n, y, C.color);
              }

              var w = v(p && p.options.colorIndex, f && f.colorIndex, t, q, k.colorIndex);
            }

            return {
              color: y,
              colorIndex: w
            };
          },
          getLevelOptions: function getLevelOptions(f) {
            var k = null;

            if (q(f)) {
              k = {};
              var d = n(f.from) ? f.from : 1;
              var c = f.levels;
              var z = {};
              var v = q(f.defaults) ? f.defaults : {};
              l(c) && (z = c.reduce(function (k, c) {
                if (q(c) && n(c.level)) {
                  var f = h({}, c);
                  var r = "boolean" === typeof f.levelIsConstant ? f.levelIsConstant : v.levelIsConstant;
                  delete f.levelIsConstant;
                  delete f.level;
                  c = c.level + (r ? 0 : d - 1);
                  q(k[c]) ? x(k[c], f) : k[c] = f;
                }

                return k;
              }, {}));
              c = n(f.to) ? f.to : 1;

              for (f = 0; f <= c; f++) {
                k[f] = h({}, v, q(z[f]) ? z[f] : {});
              }
            }

            return k;
          },
          setTreeValues: function J(k, c) {
            var d = c.before,
                h = c.idRoot,
                r = c.mapIdToNode[h],
                l = c.points[k.i],
                q = l && l.options || {},
                p = 0,
                n = [];
            x(k, {
              levelDynamic: k.level - (("boolean" === typeof c.levelIsConstant ? c.levelIsConstant : 1) ? 0 : r.level),
              name: v(l && l.name, ""),
              visible: h === k.id || ("boolean" === typeof c.visible ? c.visible : !1)
            });
            "function" === typeof d && (k = d(k, c));
            k.children.forEach(function (d, h) {
              var l = x({}, c);
              x(l, {
                index: h,
                siblings: k.children.length,
                visible: k.visible
              });
              d = J(d, l);
              n.push(d);
              d.visible && (p += d.val);
            });
            k.visible = 0 < p || k.visible;
            d = v(q.value, p);
            x(k, {
              children: n,
              childrenTotal: p,
              isLeaf: k.visible && !p,
              val: d
            });
            return k;
          },
          updateRootId: function updateRootId(c) {
            if (q(c)) {
              var d = q(c.options) ? c.options : {};
              d = v(c.rootNode, d.rootId, "");
              q(c.userOptions) && (c.userOptions.rootId = d);
              c.rootNode = d;
            }

            return d;
          }
        };
      });
      w(c, "mixins/draw-point.js", [], function () {
        var c = function c(_c) {
          var d,
              l = this,
              n = l.graphic,
              q = _c.animatableAttribs,
              h = _c.onComplete,
              v = _c.css,
              f = _c.renderer,
              k = null === (d = l.series) || void 0 === d ? void 0 : d.options.animation;
          if (l.shouldDraw()) n || (l.graphic = n = f[_c.shapeType](_c.shapeArgs).add(_c.group)), n.css(v).attr(_c.attribs).animate(q, _c.isNew ? !1 : k, h);else if (n) {
            var r = function r() {
              l.graphic = n = n.destroy();
              "function" === typeof h && h();
            };

            Object.keys(q).length ? n.animate(q, void 0, function () {
              r();
            }) : r();
          }
        };

        return function (d) {
          (d.attribs = d.attribs || {})["class"] = this.getClassName();
          c.call(this, d);
        };
      });
      w(c, "modules/treemap.src.js", [c["parts/Globals.js"], c["mixins/tree-series.js"], c["mixins/draw-point.js"], c["parts/Color.js"], c["mixins/legend-symbol.js"], c["parts/Point.js"], c["parts/Utilities.js"]], function (c, d, x, l, n, q, h) {
        var v = l.parse,
            f = h.addEvent,
            k = h.correctFloat,
            r = h.defined,
            w = h.error,
            z = h.extend,
            K = h.fireEvent,
            C = h.isArray,
            A = h.isNumber,
            L = h.isObject,
            p = h.isString,
            E = h.merge,
            y = h.objectEach,
            t = h.pick;
        l = h.seriesType;
        var M = h.stableSort,
            H = c.seriesTypes;
        h = c.noop;

        var N = d.getColor,
            O = d.getLevelOptions,
            F = c.Series,
            P = function P(a, b, e) {
          e = e || this;
          y(a, function (c, g) {
            b.call(e, c, g, a);
          });
        },
            G = function G(a, b, e) {
          e = e || this;
          a = b.call(e, a);
          !1 !== a && G(a, b, e);
        },
            Q = d.updateRootId,
            I = !1;

        l("treemap", "scatter", {
          allowTraversingTree: !1,
          animationLimit: 250,
          showInLegend: !1,
          marker: !1,
          colorByPoint: !1,
          dataLabels: {
            defer: !1,
            enabled: !0,
            formatter: function formatter() {
              var a = this && this.point ? this.point : {};
              return p(a.name) ? a.name : "";
            },
            inside: !0,
            verticalAlign: "middle"
          },
          tooltip: {
            headerFormat: "",
            pointFormat: "<b>{point.name}</b>: {point.value}<br/>"
          },
          ignoreHiddenPoint: !0,
          layoutAlgorithm: "sliceAndDice",
          layoutStartingDirection: "vertical",
          alternateStartingDirection: !1,
          levelIsConstant: !0,
          drillUpButton: {
            position: {
              align: "right",
              x: -10,
              y: 10
            }
          },
          traverseUpButton: {
            position: {
              align: "right",
              x: -10,
              y: 10
            }
          },
          borderColor: "#e6e6e6",
          borderWidth: 1,
          colorKey: "colorValue",
          opacity: .15,
          states: {
            hover: {
              borderColor: "#999999",
              brightness: H.heatmap ? 0 : .1,
              halo: !1,
              opacity: .75,
              shadow: !1
            }
          }
        }, {
          pointArrayMap: ["value"],
          directTouch: !0,
          optionalAxis: "colorAxis",
          getSymbol: h,
          parallelArrays: ["x", "y", "value", "colorValue"],
          colorKey: "colorValue",
          trackerGroups: ["group", "dataLabelsGroup"],
          getListOfParents: function getListOfParents(a, b) {
            a = C(a) ? a : [];
            var e = C(b) ? b : [];
            b = a.reduce(function (a, b, e) {
              b = t(b.parent, "");
              "undefined" === typeof a[b] && (a[b] = []);
              a[b].push(e);
              return a;
            }, {
              "": []
            });
            P(b, function (a, b, c) {
              "" !== b && -1 === e.indexOf(b) && (a.forEach(function (a) {
                c[""].push(a);
              }), delete c[b]);
            });
            return b;
          },
          getTree: function getTree() {
            var a = this.data.map(function (a) {
              return a.id;
            });
            a = this.getListOfParents(this.data, a);
            this.nodeMap = [];
            return this.buildNode("", -1, 0, a, null);
          },
          hasData: function hasData() {
            return !!this.processedXData.length;
          },
          init: function init(a, b) {
            var e = c.colorMapSeriesMixin;
            e && (this.colorAttribs = e.colorAttribs);
            this.eventsToUnbind.push(f(this, "setOptions", function (a) {
              a = a.userOptions;
              r(a.allowDrillToNode) && !r(a.allowTraversingTree) && (a.allowTraversingTree = a.allowDrillToNode, delete a.allowDrillToNode);
              r(a.drillUpButton) && !r(a.traverseUpButton) && (a.traverseUpButton = a.drillUpButton, delete a.drillUpButton);
            }));
            F.prototype.init.call(this, a, b);
            this.options.allowTraversingTree && this.eventsToUnbind.push(f(this, "click", this.onClickDrillToNode));
          },
          buildNode: function buildNode(a, b, e, c, g) {
            var B = this,
                m = [],
                u = B.points[b],
                d = 0,
                D;
            (c[a] || []).forEach(function (b) {
              D = B.buildNode(B.points[b].id, b, e + 1, c, a);
              d = Math.max(D.height + 1, d);
              m.push(D);
            });
            b = {
              id: a,
              i: b,
              children: m,
              height: d,
              level: e,
              parent: g,
              visible: !1
            };
            B.nodeMap[b.id] = b;
            u && (u.node = b);
            return b;
          },
          setTreeValues: function setTreeValues(a) {
            var b = this,
                e = b.options,
                c = b.nodeMap[b.rootNode];
            e = "boolean" === typeof e.levelIsConstant ? e.levelIsConstant : !0;
            var g = 0,
                B = [],
                m = b.points[a.i];
            a.children.forEach(function (a) {
              a = b.setTreeValues(a);
              B.push(a);
              a.ignore || (g += a.val);
            });
            M(B, function (a, b) {
              return a.sortIndex - b.sortIndex;
            });
            var d = t(m && m.options.value, g);
            m && (m.value = d);
            z(a, {
              children: B,
              childrenTotal: g,
              ignore: !(t(m && m.visible, !0) && 0 < d),
              isLeaf: a.visible && !g,
              levelDynamic: a.level - (e ? 0 : c.level),
              name: t(m && m.name, ""),
              sortIndex: t(m && m.sortIndex, -d),
              val: d
            });
            return a;
          },
          calculateChildrenAreas: function calculateChildrenAreas(a, b) {
            var e = this,
                c = e.options,
                g = e.mapOptionsToLevel[a.level + 1],
                d = t(e[g && g.layoutAlgorithm] && g.layoutAlgorithm, c.layoutAlgorithm),
                m = c.alternateStartingDirection,
                f = [];
            a = a.children.filter(function (a) {
              return !a.ignore;
            });
            g && g.layoutStartingDirection && (b.direction = "vertical" === g.layoutStartingDirection ? 0 : 1);
            f = e[d](b, a);
            a.forEach(function (a, c) {
              c = f[c];
              a.values = E(c, {
                val: a.childrenTotal,
                direction: m ? 1 - b.direction : b.direction
              });
              a.pointValues = E(c, {
                x: c.x / e.axisRatio,
                y: 100 - c.y - c.height,
                width: c.width / e.axisRatio
              });
              a.children.length && e.calculateChildrenAreas(a, a.values);
            });
          },
          setPointValues: function setPointValues() {
            var a = this,
                b = a.xAxis,
                e = a.yAxis,
                c = a.chart.styledMode;
            a.points.forEach(function (g) {
              var d = g.node,
                  m = d.pointValues;
              d = d.visible;

              if (m && d) {
                d = m.height;
                var u = m.width,
                    f = m.x,
                    k = m.y,
                    h = c ? 0 : (a.pointAttribs(g)["stroke-width"] || 0) % 2 / 2;
                m = Math.round(b.toPixels(f, !0)) - h;
                u = Math.round(b.toPixels(f + u, !0)) - h;
                f = Math.round(e.toPixels(k, !0)) - h;
                d = Math.round(e.toPixels(k + d, !0)) - h;
                g.shapeArgs = {
                  x: Math.min(m, u),
                  y: Math.min(f, d),
                  width: Math.abs(u - m),
                  height: Math.abs(d - f)
                };
                g.plotX = g.shapeArgs.x + g.shapeArgs.width / 2;
                g.plotY = g.shapeArgs.y + g.shapeArgs.height / 2;
              } else delete g.plotX, delete g.plotY;
            });
          },
          setColorRecursive: function setColorRecursive(a, b, e, c, g) {
            var d = this,
                m = d && d.chart;
            m = m && m.options && m.options.colors;

            if (a) {
              var f = N(a, {
                colors: m,
                index: c,
                mapOptionsToLevel: d.mapOptionsToLevel,
                parentColor: b,
                parentColorIndex: e,
                series: d,
                siblings: g
              });
              if (b = d.points[a.i]) b.color = f.color, b.colorIndex = f.colorIndex;
              (a.children || []).forEach(function (b, e) {
                d.setColorRecursive(b, f.color, f.colorIndex, e, a.children.length);
              });
            }
          },
          algorithmGroup: function algorithmGroup(a, b, e, c) {
            this.height = a;
            this.width = b;
            this.plot = c;
            this.startDirection = this.direction = e;
            this.lH = this.nH = this.lW = this.nW = this.total = 0;
            this.elArr = [];
            this.lP = {
              total: 0,
              lH: 0,
              nH: 0,
              lW: 0,
              nW: 0,
              nR: 0,
              lR: 0,
              aspectRatio: function aspectRatio(a, b) {
                return Math.max(a / b, b / a);
              }
            };

            this.addElement = function (a) {
              this.lP.total = this.elArr[this.elArr.length - 1];
              this.total += a;
              0 === this.direction ? (this.lW = this.nW, this.lP.lH = this.lP.total / this.lW, this.lP.lR = this.lP.aspectRatio(this.lW, this.lP.lH), this.nW = this.total / this.height, this.lP.nH = this.lP.total / this.nW, this.lP.nR = this.lP.aspectRatio(this.nW, this.lP.nH)) : (this.lH = this.nH, this.lP.lW = this.lP.total / this.lH, this.lP.lR = this.lP.aspectRatio(this.lP.lW, this.lH), this.nH = this.total / this.width, this.lP.nW = this.lP.total / this.nH, this.lP.nR = this.lP.aspectRatio(this.lP.nW, this.nH));
              this.elArr.push(a);
            };

            this.reset = function () {
              this.lW = this.nW = 0;
              this.elArr = [];
              this.total = 0;
            };
          },
          algorithmCalcPoints: function algorithmCalcPoints(a, b, e, c) {
            var g,
                d,
                f,
                u,
                h = e.lW,
                D = e.lH,
                l = e.plot,
                q = 0,
                n = e.elArr.length - 1;
            if (b) h = e.nW, D = e.nH;else var p = e.elArr[e.elArr.length - 1];
            e.elArr.forEach(function (a) {
              if (b || q < n) 0 === e.direction ? (g = l.x, d = l.y, f = h, u = a / f) : (g = l.x, d = l.y, u = D, f = a / u), c.push({
                x: g,
                y: d,
                width: f,
                height: k(u)
              }), 0 === e.direction ? l.y += u : l.x += f;
              q += 1;
            });
            e.reset();
            0 === e.direction ? e.width -= h : e.height -= D;
            l.y = l.parent.y + (l.parent.height - e.height);
            l.x = l.parent.x + (l.parent.width - e.width);
            a && (e.direction = 1 - e.direction);
            b || e.addElement(p);
          },
          algorithmLowAspectRatio: function algorithmLowAspectRatio(a, b, e) {
            var c = [],
                g = this,
                d,
                f = {
              x: b.x,
              y: b.y,
              parent: b
            },
                h = 0,
                l = e.length - 1,
                k = new this.algorithmGroup(b.height, b.width, b.direction, f);
            e.forEach(function (e) {
              d = e.val / b.val * b.height * b.width;
              k.addElement(d);
              k.lP.nR > k.lP.lR && g.algorithmCalcPoints(a, !1, k, c, f);
              h === l && g.algorithmCalcPoints(a, !0, k, c, f);
              h += 1;
            });
            return c;
          },
          algorithmFill: function algorithmFill(a, b, e) {
            var c = [],
                g,
                d = b.direction,
                f = b.x,
                h = b.y,
                k = b.width,
                l = b.height,
                q,
                n,
                p,
                r;
            e.forEach(function (e) {
              g = e.val / b.val * b.height * b.width;
              q = f;
              n = h;
              0 === d ? (r = l, p = g / r, k -= p, f += p) : (p = k, r = g / p, l -= r, h += r);
              c.push({
                x: q,
                y: n,
                width: p,
                height: r
              });
              a && (d = 1 - d);
            });
            return c;
          },
          strip: function strip(a, b) {
            return this.algorithmLowAspectRatio(!1, a, b);
          },
          squarified: function squarified(a, b) {
            return this.algorithmLowAspectRatio(!0, a, b);
          },
          sliceAndDice: function sliceAndDice(a, b) {
            return this.algorithmFill(!0, a, b);
          },
          stripes: function stripes(a, b) {
            return this.algorithmFill(!1, a, b);
          },
          translate: function translate() {
            var a = this,
                b = a.options,
                c = Q(a);
            F.prototype.translate.call(a);
            var d = a.tree = a.getTree();
            var g = a.nodeMap[c];
            a.renderTraverseUpButton(c);
            a.mapOptionsToLevel = O({
              from: g.level + 1,
              levels: b.levels,
              to: d.height,
              defaults: {
                levelIsConstant: a.options.levelIsConstant,
                colorByPoint: b.colorByPoint
              }
            });
            "" === c || g && g.children.length || (a.setRootNode("", !1), c = a.rootNode, g = a.nodeMap[c]);
            G(a.nodeMap[a.rootNode], function (b) {
              var c = !1,
                  e = b.parent;
              b.visible = !0;
              if (e || "" === e) c = a.nodeMap[e];
              return c;
            });
            G(a.nodeMap[a.rootNode].children, function (a) {
              var b = !1;
              a.forEach(function (a) {
                a.visible = !0;
                a.children.length && (b = (b || []).concat(a.children));
              });
              return b;
            });
            a.setTreeValues(d);
            a.axisRatio = a.xAxis.len / a.yAxis.len;
            a.nodeMap[""].pointValues = c = {
              x: 0,
              y: 0,
              width: 100,
              height: 100
            };
            a.nodeMap[""].values = c = E(c, {
              width: c.width * a.axisRatio,
              direction: "vertical" === b.layoutStartingDirection ? 0 : 1,
              val: d.val
            });
            a.calculateChildrenAreas(d, c);
            a.colorAxis || b.colorByPoint || a.setColorRecursive(a.tree);
            b.allowTraversingTree && (b = g.pointValues, a.xAxis.setExtremes(b.x, b.x + b.width, !1), a.yAxis.setExtremes(b.y, b.y + b.height, !1), a.xAxis.setScale(), a.yAxis.setScale());
            a.setPointValues();
          },
          drawDataLabels: function drawDataLabels() {
            var a = this,
                b = a.mapOptionsToLevel,
                c,
                d;
            a.points.filter(function (a) {
              return a.node.visible;
            }).forEach(function (e) {
              d = b[e.node.level];
              c = {
                style: {}
              };
              e.node.isLeaf || (c.enabled = !1);
              d && d.dataLabels && (c = E(c, d.dataLabels), a._hasPointLabels = !0);
              e.shapeArgs && (c.style.width = e.shapeArgs.width, e.dataLabel && e.dataLabel.css({
                width: e.shapeArgs.width + "px"
              }));
              e.dlOptions = E(c, e.options.dataLabels);
            });
            F.prototype.drawDataLabels.call(this);
          },
          alignDataLabel: function alignDataLabel(a, b, c) {
            var e = c.style;
            !r(e.textOverflow) && b.text && b.getBBox().width > b.text.textWidth && b.css({
              textOverflow: "ellipsis",
              width: e.width += "px"
            });
            H.column.prototype.alignDataLabel.apply(this, arguments);
            a.dataLabel && a.dataLabel.attr({
              zIndex: (a.node.zIndex || 0) + 1
            });
          },
          pointAttribs: function pointAttribs(a, b) {
            var c = L(this.mapOptionsToLevel) ? this.mapOptionsToLevel : {},
                d = a && c[a.node.level] || {};
            c = this.options;
            var g = b && c.states[b] || {},
                f = a && a.getClassName() || "";
            a = {
              stroke: a && a.borderColor || d.borderColor || g.borderColor || c.borderColor,
              "stroke-width": t(a && a.borderWidth, d.borderWidth, g.borderWidth, c.borderWidth),
              dashstyle: a && a.borderDashStyle || d.borderDashStyle || g.borderDashStyle || c.borderDashStyle,
              fill: a && a.color || this.color
            };
            -1 !== f.indexOf("highcharts-above-level") ? (a.fill = "none", a["stroke-width"] = 0) : -1 !== f.indexOf("highcharts-internal-node-interactive") ? (b = t(g.opacity, c.opacity), a.fill = v(a.fill).setOpacity(b).get(), a.cursor = "pointer") : -1 !== f.indexOf("highcharts-internal-node") ? a.fill = "none" : b && (a.fill = v(a.fill).brighten(g.brightness).get());
            return a;
          },
          drawPoints: function drawPoints() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = b.styledMode,
                f = a.options,
                h = d ? {} : f.shadow,
                k = f.borderRadius,
                l = b.pointCount < f.animationLimit,
                p = f.allowTraversingTree;
            a.points.forEach(function (b) {
              var e = b.node.levelDynamic,
                  g = {},
                  m = {},
                  q = {},
                  n = "level-group-" + e,
                  r = !!b.graphic,
                  u = l && r,
                  t = b.shapeArgs;
              b.shouldDraw() && (k && (m.r = k), E(!0, u ? g : m, r ? t : {}, d ? {} : a.pointAttribs(b, b.selected && "select")), a.colorAttribs && d && z(q, a.colorAttribs(b)), a[n] || (a[n] = c.g(n).attr({
                zIndex: 1E3 - e
              }).add(a.group), a[n].survive = !0));
              b.draw({
                animatableAttribs: g,
                attribs: m,
                css: q,
                group: a[n],
                renderer: c,
                shadow: h,
                shapeArgs: t,
                shapeType: "rect"
              });
              p && b.graphic && (b.drillId = f.interactByLeaf ? a.drillToByLeaf(b) : a.drillToByGroup(b));
            });
          },
          onClickDrillToNode: function onClickDrillToNode(a) {
            var b = (a = a.point) && a.drillId;
            p(b) && (a.setState(""), this.setRootNode(b, !0, {
              trigger: "click"
            }));
          },
          drillToByGroup: function drillToByGroup(a) {
            var b = !1;
            1 !== a.node.level - this.nodeMap[this.rootNode].level || a.node.isLeaf || (b = a.id);
            return b;
          },
          drillToByLeaf: function drillToByLeaf(a) {
            var b = !1;
            if (a.node.parent !== this.rootNode && a.node.isLeaf) for (a = a.node; !b;) {
              a = this.nodeMap[a.parent], a.parent === this.rootNode && (b = a.id);
            }
            return b;
          },
          drillUp: function drillUp() {
            var a = this.nodeMap[this.rootNode];
            a && p(a.parent) && this.setRootNode(a.parent, !0, {
              trigger: "traverseUpButton"
            });
          },
          drillToNode: function drillToNode(a, b) {
            w("WARNING: treemap.drillToNode has been renamed to treemap.setRootNode, and will be removed in the next major version.");
            this.setRootNode(a, b);
          },
          setRootNode: function setRootNode(a, b, c) {
            a = z({
              newRootId: a,
              previousRootId: this.rootNode,
              redraw: t(b, !0),
              series: this
            }, c);
            K(this, "setRootNode", a, function (a) {
              var b = a.series;
              b.idPreviousRoot = a.previousRootId;
              b.rootNode = a.newRootId;
              b.isDirty = !0;
              a.redraw && b.chart.redraw();
            });
          },
          renderTraverseUpButton: function renderTraverseUpButton(a) {
            var b = this,
                c = b.options.traverseUpButton,
                d = t(c.text, b.nodeMap[a].name, "< Back");
            if ("" === a) b.drillUpButton && (b.drillUpButton = b.drillUpButton.destroy());else if (this.drillUpButton) this.drillUpButton.placed = !1, this.drillUpButton.attr({
              text: d
            }).align();else {
              var f = (a = c.theme) && a.states;
              this.drillUpButton = this.chart.renderer.button(d, null, null, function () {
                b.drillUp();
              }, a, f && f.hover, f && f.select).addClass("highcharts-drillup-button").attr({
                align: c.position.align,
                zIndex: 7
              }).add().align(c.position, !1, c.relativeTo || "plotBox");
            }
          },
          buildKDTree: h,
          drawLegendSymbol: n.drawRectangle,
          getExtremes: function getExtremes() {
            var a = F.prototype.getExtremes.call(this, this.colorValueData),
                b = a.dataMax;
            this.valueMin = a.dataMin;
            this.valueMax = b;
            return F.prototype.getExtremes.call(this);
          },
          getExtremesFromAll: !0,
          setState: function setState(a) {
            this.options.inactiveOtherPoints = !0;
            F.prototype.setState.call(this, a, !1);
            this.options.inactiveOtherPoints = !1;
          },
          utils: {
            recursive: G
          }
        }, {
          draw: x,
          setVisible: H.pie.prototype.pointClass.prototype.setVisible,
          getClassName: function getClassName() {
            var a = q.prototype.getClassName.call(this),
                b = this.series,
                c = b.options;
            this.node.level <= b.nodeMap[b.rootNode].level ? a += " highcharts-above-level" : this.node.isLeaf || t(c.interactByLeaf, !c.allowTraversingTree) ? this.node.isLeaf || (a += " highcharts-internal-node") : a += " highcharts-internal-node-interactive";
            return a;
          },
          isValid: function isValid() {
            return this.id || A(this.value);
          },
          setState: function setState(a) {
            q.prototype.setState.call(this, a);
            this.graphic && this.graphic.attr({
              zIndex: "hover" === a ? 1 : 0
            });
          },
          shouldDraw: function shouldDraw() {
            return A(this.plotY) && null !== this.y;
          }
        });
        f(c.Series, "afterBindAxes", function () {
          var a = this.xAxis,
              b = this.yAxis;
          if (a && b) if (this.is("treemap")) {
            var c = {
              endOnTick: !1,
              gridLineWidth: 0,
              lineWidth: 0,
              min: 0,
              dataMin: 0,
              minPadding: 0,
              max: 100,
              dataMax: 100,
              maxPadding: 0,
              startOnTick: !1,
              title: null,
              tickPositions: []
            };
            z(b.options, c);
            z(a.options, c);
            I = !0;
          } else I && (b.setOptions(b.userOptions), a.setOptions(a.userOptions), I = !1);
        });
        "";
      });
      w(c, "masters/modules/treemap.src.js", [], function () {});
    }); //# sourceMappingURL=treemap.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n    <ion-button  fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\n      <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list inset>\n    <div class=\"speaker-background\">\n      <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\n      <h2>{{speaker?.name}}</h2>\n    </div>\n\n    <ion-item detail button>\n      <ion-label>\n        Archived Promises\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"openTutorial()\">\n      <ion-label>\n        Tutorial\n      </ion-label>\n    </ion-item>\n\n    <ion-item button routerLink=\"/app/tabs/about/privacy\">\n      <ion-label>\n        Privacy Policy\n      </ion-label>\n    </ion-item>\n\n      <ion-item button routerLink=\"/app/tabs/about/terms\">\n      <ion-label>\n        Terms & Conditions\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapMapHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"shareChart()\">\n        <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-sliding id=\"item100\">\n    <ion-item routerLink=\"/app/tabs/map/speaker-details/5\">\n      <ion-label>\n        <h2>Notifications</h2>\n        <p>You have overdue Promises</p>\n      </ion-label>\n      <ion-note slot=\"end\">\n        12:15 AM\n      </ion-note>\n    </ion-item>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option color=\"danger\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <div id=\"outer\">\n    <div id=\"container\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleFilterScheduleFilterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button *ngIf=\"ios\" (click)=\"dismiss()\">Cancel</ion-button>\n      <ion-button *ngIf=\"!ios\" (click)=\"selectAll(false)\">Reset</ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Areas\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"applyFilters()\" strong>Done</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [lines]=\"ios ? 'inset' : 'full'\">\n    <ion-list-header>Areas</ion-list-header>\n\n    <ion-item *ngFor=\"let track of tracks\" [attr.track]=\"track.name | lowercase\">\n      <ion-icon *ngIf=\"ios\" slot=\"start\" [name]=\"track.icon\" color=\"medium\"></ion-icon>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-checkbox [(ngModel)]=\"track.isChecked\"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer translucent=\"true\" *ngIf=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"selectAll(false)\">Deselect All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"selectAll(true)\">Select All</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesScheduleScheduleHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"!showSearchbar\">Promises</ion-title>\n    <ion-searchbar *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"presentFilter()\">\n        <span>Filter</span>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)=\"updateSchedule()\">\n      <ion-segment-button value=\"all\">\n        All\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        Favourites\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Promises</ion-title>\n    </ion-toolbar>\n    <!--\n    <ion-toolbar>\n      <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"updateSchedule()\" placeholder=\"Search\"></ion-searchbar>\n    </ion-toolbar>\n    -->\n  </ion-header>\n\n  <ion-list #scheduleList [hidden]=\"shownSessions === 0\">\n    <ion-item-group *ngFor=\"let group of groups\" [hidden]=\"group.hide\">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n  <!--\n  (ionDrag)=\"dragging($event, session)\"\n  <ion-item-options (ionSwipe)=\"fullySwiped($event,session)\">\n    -->\n\n      <ion-item-sliding *ngFor=\"let session of group.sessions\" #slidingItem\n        [attr.track]=\"session.tracks[0] | lowercase\"\n        [attr.location]=\"session.location | lowercase\"\n        (ionDrag)=\"dragging($event, session)\"\n        (ionSwipe)=\"fullySwiped($event,session)\"\n        [hidden]=\"session.hide\">\n        <ion-item routerLink=\"/app/tabs/schedule/session/{{session.id}}\">\n          <ion-label>\n            <h3>{{session.name}}</h3>\n            <p>\n              {{session.timeStart}} &mdash; {{session.timeEnd}}: {{session.location}}\n            </p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options>\n          <ion-item-option color=\"favorite\" (click)=\"addFavorite(slidingItem, session)\" *ngIf=\"segment === 'all'\">\n            Favorite\n          </ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"removeFavorite(slidingItem, session, 'Remove Favorite')\"\n            *ngIf=\"segment === 'favorites'\">\n            Remove\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list-header [hidden]=\"shownSessions > 0\">\n    No Promises Found\n  </ion-list-header>\n\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button routerLink=\"/signup/promise\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSessionDetailSessionDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"toggleFavorite()\">\n        <ion-icon *ngIf=\"!isFavorite\" slot=\"icon-only\" name=\"star-outline\"></ion-icon>\n        <ion-icon *ngIf=\"isFavorite\" slot=\"icon-only\" name=\"star\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"shareSession()\">\n        <ion-icon slot=\"icon-only\" name=\"share-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"session\" class=\"ion-padding\">\n    <h1>{{session.name}}</h1>\n    <span *ngFor=\"let track of session?.tracks\" [class]=\"'session-track-'+track.toLowerCase()\">{{track}}</span>\n    <p>{{session.description}}</p>\n    <ion-text color=\"medium\">\n      {{session.timeStart}} &ndash; {{session.timeEnd}}\n      <!--\n      <br /> {{session.location}}\n      -->\n    </ion-text>\n  </div>\n\n  <ion-list>\n    <ion-item (click)=\"sessionClick('edit')\" button>\n      <ion-label color=\"primary\">Edit</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"create-outline\"></ion-icon>\n    </ion-item>\n  <ion-list>\n  <ion-radio-group *ngIf=\"session\" [value]=\"session.location\">\n    <ion-list-header>\n      <ion-label>Update Status</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>In-Progress</ion-label>\n      <ion-radio slot=\"start\" value=\"Active\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-icon [name]=\"session.location==='Done' ? 'checkbox':'checkbox-outline'\"></ion-icon>\n      <ion-note slot=\"end\" color=\"dark\">Mark as Done</ion-note>\n      <ion-radio slot=\"start\" value=\"Done\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-icon [name]=\"session.location==='Not Done' ? 'flag':'flag-outline'\"></ion-icon>\n      <ion-note slot=\"end\" color=\"dark\">Not Done</ion-note>\n      <ion-radio slot=\"start\" value=\"Not Done\"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-icon [name]=\"session.location==='Revoked' ? 'hand-left':'hand-left-outline'\"></ion-icon>\n      <ion-note slot=\"end\" color=\"dark\">Revoked</ion-note>\n      <ion-radio slot=\"start\" value=\"Revoked\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    <ion-label>Do More</ion-label>\n  </ion-list-header>\n    <ion-item (click)=\"sessionClick('Poke')\" button detail>\n      <ion-label color=\"primary\">Request Update</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sessionClick('add to calendar')\" button>\n      <ion-label color=\"primary\">Add to Calendar</ion-label>\n      <ion-icon slot=\"end\" color=\"primary\" size=\"small\" name=\"calendar-outline\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerDetailSpeakerDetailHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"speaker-detail\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button [defaultHref]=\"defaultHref\"></ion-back-button>\n      </ion-buttons>\n      <ion-buttons *ngIf=\"speaker\" slot=\"end\">\n        <ion-button (click)=\"openContact(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"call-outline\" md=\"call-sharp\"></ion-icon>\n        </ion-button>\n        <!--\n        <ion-button (click)=\"openSpeakerShare(speaker)\">\n          <ion-icon slot=\"icon-only\" ios=\"share-outline\" md=\"share-sharp\"></ion-icon>\n        </ion-button>\n        -->\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"speaker-background\">\n    <img [src]=\"speaker?.profilePic\" [alt]=\"speaker?.name\">\n    <h2>{{speaker?.name}}</h2>\n  </div>\n\n\n  <ion-list lines=\"none\" class=\"chat\">\n    <ion-item slot=\"start\" class=\"message-other\"\n        routerLink=\"/app/tabs/speakers/session/{{speaker?.sessions[0].id}}\">\n      <ion-chip>\n        <ion-icon name=\"mail-unread-outline\"></ion-icon>\n        <ion-label>{{newPromiseMsg}} : <h4>{{speaker?.sessions[0].name}}</h4></ion-label>\n      </ion-chip>\n    </ion-item>\n\n    <ion-item  lines=\"none\" class=\"message-mine\">\n        <div slot=\"end\">\n           <h4>Jon</h4>\n           <ion-chip>\n             <ion-label>Hey, how's the Promise going?</ion-label>\n           </ion-chip>\n           <p class=\"timestamp\">10:20am</p>\n        </div>\n    </ion-item>\n    <ion-item  lines=\"none\" class=\"message-other\">\n        <div slot=\"start\">\n          <h4>{{getFirstName(speaker)}}</h4>\n          <ion-chip>\n            <ion-label>I'm nearly done!</ion-label>\n          </ion-chip>\n          <p class=\"timestamp\">10:21am</p>\n        </div>\n    </ion-item>\n    <ion-item slot=\"start\" class=\"message-other\"\n      routerLink=\"/app/tabs/speakers/session/{{speaker?.sessions[1].id}}\">\n      <ion-chip>\n        <ion-icon name=\"mail-unread-outline\"></ion-icon>\n        <ion-label>{{newPromiseMsg}} : <h4>{{speaker?.sessions[1].name}}</h4></ion-label>\n      </ion-chip>\n    </ion-item>\n    <ion-item slot=\"start\" class=\"message-mine\">\n        <div slot=\"end\">\n           <h4>Jon</h4>\n           <ion-chip>\n             <ion-label>That is great! Can't wait to celebrate with dinner!</ion-label>\n           </ion-chip>\n           <p class=\"timestamp\">10:23am</p>\n        </div>\n    </ion-item>\n    <ion-item slot=\"start\" routerLink=\"/app/tabs/speakers/session/{{speaker?.sessions[0].id}}\">\n      <ion-chip color=\"success\">\n        <ion-icon name=\"checkbox-outline\"></ion-icon>\n        <ion-label>{{getFirstName(speaker)}} has done a Promise! <h4>{{speaker?.sessions[0].name}}</h4></ion-label>\n      </ion-chip>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeakerListSpeakerListHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"!showSearchbar\">Groups & Buddies</ion-title>\n    <ion-searchbar *ngIf=\"showSearchbar\" showCancelButton=\"always\"  (ionChange)=\"updateSchedule()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button  *ngIf=\"!showSearchbar\" fill=\"clear\" slot=\"end\" (click)=\"presentPopover($event)\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Groups & Buddies</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\" size-md=\"6\" *ngFor=\"let speaker of speakers\">\n        <ion-card class=\"speaker-card\">\n          <ion-card-header>\n            <ion-item detail=\"false\" lines=\"none\" class=\"speaker-item\" routerLink=\"/app/tabs/speakers/speaker-details/{{speaker.id}}\">\n              <ion-avatar slot=\"start\">\n                <img [src]=\"speaker.profilePic\" [alt]=\"speaker.name + ' profile picture'\">\n              </ion-avatar>\n              <ion-label>\n                <h2>{{speaker.name}}</h2>\n                <p>{{speaker.title}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-card-header>\n<!--\n(ionDrag)=\"dragging($event, session)\"\n<ion-item-options (ionSwipe)=\"fullySwiped($event,session)\">\n-->\n          <ion-card-content>\n            <ion-list #sessionList lines=\"none\">\n              <ion-item-sliding *ngFor=\"let session of speaker.sessions\"\n                #slidingItem\n                (ionDrag)=\"dragging($event, session)\"\n                (ionSwipe)=\"fullySwiped($event,session)\"\n                [hidden]=\"session.hide\">\n\n                <ion-item detail=\"false\"\n                  routerLink=\"/app/tabs/speakers/session/{{session.id}}\">\n                  <ion-note slot=\"start\" color=\"primary\">\n                    <ion-button (click)=\"ack($event, session)\" fill=\"clear\">\n                      <ion-icon color=\"medium\" [name]=\"getIcon(session)\"></ion-icon>\n                    </ion-button>\n                  </ion-note>\n                  <ion-label>{{session.name}}</ion-label>\n                </ion-item>\n                <ion-item-options>\n                  <ion-item-option expandable color=\"light\" [disabled]=\"!session.ack\">\n                    <ion-label *ngIf=\"session.ack\">Archive</ion-label>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n\n              <ion-item>\n                <ion-fab-button slot=\"end\" size=\"small\" color=\"light\"\n                    routerLink=\"/signup/promise\">\n                    <ion-icon color=\"medium\" name=\"create-outline\"></ion-icon>\n                </ion-fab-button>\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsPageTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-label>Integritometer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"schedule\">\n      <ion-icon name=\"reader\"></ion-icon>\n      <ion-label>Promises</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"people\"></ion-icon>\n      <ion-label>Community</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"ellipsis-horizontal\"></ion-icon>\n      <ion-label>More</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/pages/about-popover/about-popover.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/about-popover/about-popover.ts ***!
    \******************************************************/

  /*! exports provided: PopoverPage */

  /***/
  function srcAppPagesAboutPopoverAboutPopoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverPage", function () {
      return PopoverPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var PopoverPage =
    /*#__PURE__*/
    function () {
      function PopoverPage(popoverCtrl) {
        _classCallCheck(this, PopoverPage);

        this.popoverCtrl = popoverCtrl;
      }

      _createClass(PopoverPage, [{
        key: "support",
        value: function support() {
          // this.app.getRootNavs()[0].push('/support');
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "close",
        value: function close(url) {
          window.open(url, '_blank');
          this.popoverCtrl.dismiss();
        }
      }]);

      return PopoverPage;
    }();

    PopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <ion-list>\n      <ion-item button>\n        <ion-label>Invite Friends</ion-label>\n      </ion-item>\n      <ion-item button>\n        <ion-label>Share</ion-label>\n      </ion-item>\n    </ion-list>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverPage);
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");

    var routes = [{
      path: '',
      component: _about__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about */
    "./src/app/pages/about/about.ts");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageRoutingModule"]],
      declarations: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]],
      bootstrap: [_about__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
    })], AboutModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.scss":
  /*!****************************************!*\
    !*** ./src/app/pages/about/about.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBRUEscUNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLDhDQUFBO0VBRUEsMEVBQUE7QUNORjs7QURTQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtFQUVBLFlBQUE7RUFFQSxZQUFBO0FDUkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG5cbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBib3R0b206IDEwcHg7XG5cbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/about/about.ts ***!
    \**************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(router, route, modalCtrl, popoverCtrl, storage) {
        _classCallCheck(this, AboutPage);

        this.router = router;
        this.route = route;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        console.log("About constructor");
        this.speaker = {};
        this.speaker.name = "Jon Rutherford";
        this.speaker.profilePic = "/assets/img/flaticons/man-5.png";
      }

      _createClass(AboutPage, [{
        key: "presentPopover",
        value: function presentPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverCtrl.create({
                      component: _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"],
                      event: event
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.route.params.subscribe(function (params) {
            console.log("In subscribe to params...");
            console.log(params);
          });
        }
      }, {
        key: "openTutorial",
        value: function openTutorial() {
          this.storage.set('ion_did_tutorial', false);
          this.router.navigateByUrl('/tutorial');
        }
      }, {
        key: "showArchive",
        value: function showArchive() {}
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.scss */
      "./src/app/pages/about/about.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], AboutPage);
    /***/
  },

  /***/
  "./src/app/pages/map/map-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/map/map-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MapPageRoutingModule */

  /***/
  function srcAppPagesMapMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function () {
      return MapPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");

    var routes = [{
      path: '',
      component: _map__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }];

    var MapPageRoutingModule = function MapPageRoutingModule() {
      _classCallCheck(this, MapPageRoutingModule);
    };

    MapPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/map/map.module.ts ***!
    \*****************************************/

  /*! exports provided: MapModule */

  /***/
  function srcAppPagesMapMapModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapModule", function () {
      return MapModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./map */
    "./src/app/pages/map/map.ts");
    /* harmony import */


    var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map-routing.module */
    "./src/app/pages/map/map-routing.module.ts");

    var MapModule = function MapModule() {
      _classCallCheck(this, MapModule);
    };

    MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]],
      declarations: [_map__WEBPACK_IMPORTED_MODULE_4__["MapPage"]]
    })], MapModule);
    /***/
  },

  /***/
  "./src/app/pages/map/map.scss":
  /*!************************************!*\
    !*** ./src/app/pages/map/map.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapMapScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#outer {\n  height: 100%;\n}\n\n#container {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n#container .chartLink {\n  text-decoration: none !important;\n}\n\n#container .chartTitle {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXAvbWFwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREY7O0FESUU7RUFDRSxnQ0FBQTtBQ0ZKOztBRElFO0VBQ0UsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwL21hcC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiNvdXRlciB7XG4gIGhlaWdodDoxMDAlO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAvLy13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGlvbiAycyBpbmZpbml0ZSBsaW5lYXI7XG5cbiAgLmNoYXJ0TGluayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuY2hhcnRUaXRsZSB7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gIH1cbn1cbiIsIiNvdXRlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbiNjb250YWluZXIgLmNoYXJ0TGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuI2NvbnRhaW5lciAuY2hhcnRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/map/map.ts":
  /*!**********************************!*\
    !*** ./src/app/pages/map/map.ts ***!
    \**********************************/

  /*! exports provided: MapPage */

  /***/
  function srcAppPagesMapMapTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPage", function () {
      return MapPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highcharts */
    "./node_modules/highcharts/highcharts.js");
    /* harmony import */


    var highcharts__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__); // HIGHCHARTS


    __webpack_require__(
    /*! highcharts/highcharts-more */
    "./node_modules/highcharts/highcharts-more.js")(highcharts__WEBPACK_IMPORTED_MODULE_5__);

    __webpack_require__(
    /*! highcharts/modules/solid-gauge */
    "./node_modules/highcharts/modules/solid-gauge.js")(highcharts__WEBPACK_IMPORTED_MODULE_5__);

    __webpack_require__(
    /*! highcharts/modules/heatmap */
    "./node_modules/highcharts/modules/heatmap.js")(highcharts__WEBPACK_IMPORTED_MODULE_5__);

    __webpack_require__(
    /*! highcharts/modules/treemap */
    "./node_modules/highcharts/modules/treemap.js")(highcharts__WEBPACK_IMPORTED_MODULE_5__);

    __webpack_require__(
    /*! highcharts/modules/funnel */
    "./node_modules/highcharts/modules/funnel.js")(highcharts__WEBPACK_IMPORTED_MODULE_5__);

    var chartHolder;

    var MapPage =
    /*#__PURE__*/
    function () {
      function MapPage(alertCtrl, router, userData) {
        _classCallCheck(this, MapPage);

        this.alertCtrl = alertCtrl;
        this.router = router;
        this.userData = userData;
      }

      _createClass(MapPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("MapPage ngOnInit");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var mySeries = [];
          var currColourScheme = [];
          var incomplete = {
            name: "<span id=\"incomplete\" style=\"vertical-align:middle\">Incomplete</span>",
            data: [7, 6, 3, 8, 5, 6, 6, 8],
            marker: {
              enabled: true,
              symbol: 'circle'
            },
            type: 'area',
            fillOpacity: 0.5
          };
          var active = {
            name: "<span id=\"active\" style=\"vertical-align:middle\">Active</span>",
            data: [4, 6, 3, 5, 5, 2, 5, 7],
            marker: {
              enabled: true,
              symbol: 'circle'
            },
            type: 'area',
            fillColor: 'white'
          };
          var outerSpace = {
            name: '',
            data: [10, 10, 10, 10, 10, 10, 10, 10],
            marker: {
              enabled: false,
              symbol: 'circle'
            }
          };
          mySeries.push(incomplete);
          currColourScheme.push('#F9DC22');
          mySeries.push(active);
          currColourScheme.push('#7DC243');
          mySeries.push(outerSpace); // hidden. no color

          currColourScheme.push('rgb(192,192,192,0)'); // grey

          this.myAlerts = "8";
          var alertBadge = "<ion-badge>".concat(this.myAlerts, "</ion-badge>");
          /*
          let titleLink=`
            <a class="energized chartLink"  href="/tab/myAlerts">
              <span class="padding-left chartTitle"">Alerts</span>
              ${alertBadge}
            </a>
            `;
            */

          var titleLink = "\n        <span class=\"padding-left chartTitle\"\">Alerts</span>\n          ".concat(alertBadge, "\n        ");
          var chartTitle = {
            //text: null,
            text: titleLink,
            useHTML: true,
            margin: 30,
            style: {
              "fontSize": "20px"
            }
          };
          chartHolder = highcharts__WEBPACK_IMPORTED_MODULE_5__["chart"]('container', {
            chart: {
              polar: true,
              type: 'line',
              style: {
                fontFamily: 'inherit'
              }
            },
            title: chartTitle,
            subtitle: {
              text: 'You have notifications'
            },
            xAxis: {
              categories: ['Health', 'Work', 'Love', 'Leisure', 'Relationships', 'Finances', 'Fun', 'Misc'],
              tickmarkPlacement: 'on',
              lineWidth: 0,
              labels: {
                style: {
                  "fontSize": "14px"
                },
                distance: 30,
                align: 'center'
              }
            },
            yAxis: {
              gridLineInterpolation: 'polygon',
              lineWidth: 0,
              tickInterval: 1,
              minTickInterval: 1,
              showFirstLabel: false,
              labels: {
                enabled: false
              }
            },
            colors: currColourScheme,
            series: mySeries,
            legend: {
              enabled: true,
              useHTML: true,
              itemStyle: {
                fontSize: '16px',
                fontWeight: 'normal'
              },
              symbolHeight: 10
            },
            plotOptions: {
              series: {
                lineWidth: 2,
                pointPlacement: 'on',
                events: {
                  legendItemClick: function legendItemClick(event) {
                    console.log("---- legend clicked ----");

                    if (event) {
                      event.preventDefault(); //console.log("legendItemClick() target id=");
                      //console.log(event.browserEvent.target.id);
                    }
                  }
                },
                point: {
                  events: {
                    click: function click(event) {
                      console.log("Point, Category:" + event.point.category + " index=" + event.point.index);
                    }
                  }
                }
              }
            },
            credits: {
              enabled: false
            },
            tooltip: {
              enabled: false
            }
          });
        }
      }, {
        key: "shareChart",
        value: function shareChart() {}
      }]);

      return MapPage;
    }();

    MapPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }];
    };

    MapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.scss */
      "./src/app/pages/map/map.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]])], MapPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Material Design\n */\n.md ion-toolbar ion-button {\n  text-transform: capitalize;\n  letter-spacing: 0;\n}\n.md ion-checkbox {\n  --background-checked: transparent;\n  --border-color: transparent;\n  --border-color-checked: transparent;\n  --checkmark-color: var(--ion-color-primary);\n}\n.md ion-list {\n  background: inherit;\n}\n/*\n * iOS\n */\n.ios ion-list-header {\n  margin-top: 10px;\n}\n.ios ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIiwic3JjL2FwcC9wYWdlcy9zY2hlZHVsZS1maWx0ZXIvc2NoZWR1bGUtZmlsdGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUNBRjtBREdBO0VBQ0UsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7QUNBRjtBREdBO0VBQ0UsbUJBQUE7QUNBRjtBRElBOztFQUFBO0FBSUE7RUFDRSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSwrQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NoZWR1bGUtZmlsdGVyL3NjaGVkdWxlLWZpbHRlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIE1hdGVyaWFsIERlc2lnblxuICovXG5cbi5tZCBpb24tdG9vbGJhciBpb24tYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ubWQgaW9uLWNoZWNrYm94IHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAtLWNoZWNrbWFyay1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubWQgaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG5cbi8qXG4gKiBpT1NcbiAqL1xuXG4uaW9zIGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5pb3MgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbiIsIi8qXG4gKiBNYXRlcmlhbCBEZXNpZ25cbiAqL1xuLm1kIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5tZCBpb24tY2hlY2tib3gge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdHJhbnNwYXJlbnQ7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tZCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi8qXG4gKiBpT1NcbiAqL1xuLmlvcyBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaW9zIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/schedule-filter/schedule-filter.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/schedule-filter/schedule-filter.ts ***!
    \**********************************************************/

  /*! exports provided: ScheduleFilterPage */

  /***/
  function srcAppPagesScheduleFilterScheduleFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleFilterPage", function () {
      return ScheduleFilterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");

    var ScheduleFilterPage =
    /*#__PURE__*/
    function () {
      function ScheduleFilterPage(confData, config, modalCtrl, navParams) {
        _classCallCheck(this, ScheduleFilterPage);

        this.confData = confData;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.tracks = [];
      }

      _createClass(ScheduleFilterPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.ios = this.config.get('mode') === "ios"; // passed in array of track names that should be excluded (unchecked)

          var excludedTrackNames = this.navParams.get('excludedTracks');
          this.confData.getTracks().subscribe(function (tracks) {
            tracks.forEach(function (track) {
              _this.tracks.push({
                name: track.name,
                icon: track.icon,
                isChecked: excludedTrackNames.indexOf(track.name) === -1
              });
            });
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll(check) {
          // set all to checked or unchecked
          this.tracks.forEach(function (track) {
            track.isChecked = check;
          });
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          // Pass back a new array of track names to exclude
          var excludedTrackNames = this.tracks.filter(function (c) {
            return !c.isChecked;
          }).map(function (c) {
            return c.name;
          });
          this.dismiss(excludedTrackNames);
        }
      }, {
        key: "dismiss",
        value: function dismiss(data) {
          // using the injected ModalController this page
          // can "dismiss" itself and pass back data
          this.modalCtrl.dismiss(data);
        }
      }]);

      return ScheduleFilterPage;
    }();

    ScheduleFilterPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    ScheduleFilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule-filter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule-filter.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule-filter/schedule-filter.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule-filter.scss */
      "./src/app/pages/schedule-filter/schedule-filter.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Config"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], ScheduleFilterPage);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/schedule/schedule-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SchedulePageRoutingModule */

  /***/
  function srcAppPagesScheduleScheduleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePageRoutingModule", function () {
      return SchedulePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _schedule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: '',
      component: _schedule__WEBPACK_IMPORTED_MODULE_3__["SchedulePage"]
    }];

    var SchedulePageRoutingModule = function SchedulePageRoutingModule() {
      _classCallCheck(this, SchedulePageRoutingModule);
    };

    SchedulePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppPagesScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./schedule */
    "./src/app/pages/schedule/schedule.ts");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./schedule-routing.module */
    "./src/app/pages/schedule/schedule-routing.module.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _schedule_routing_module__WEBPACK_IMPORTED_MODULE_7__["SchedulePageRoutingModule"]],
      declarations: [_schedule__WEBPACK_IMPORTED_MODULE_5__["SchedulePage"], _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]],
      entryComponents: [_schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_6__["ScheduleFilterPage"]]
    })], ScheduleModule);
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.scss":
  /*!**********************************************!*\
    !*** ./src/app/pages/schedule/schedule.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesScheduleScheduleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-fab-button {\n  --background: var(--ion-color-step-150, #fff);\n  --background-hover: var(--ion-color-step-200, #f2f2f2);\n  --background-focused: var(--ion-color-step-250, #d9d9d9);\n  --color: var(--ion-color-primary, #3880ff);\n}\n\n/*\n * Material Design uses the ripple for activated\n * so only style the iOS activated background\n */\n\n.ios ion-fab-button {\n  --background-activated: var(--ion-color-step-250, #d9d9d9);\n}\n\nion-item-sliding[track=health] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 5px;\n}\n\nion-item-sliding[track=work] ion-label {\n  border-left: 2px solid #ac282b;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=love] ion-label {\n  border-left: 2px solid #8e8d93;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=leisure] ion-label {\n  border-left: 2px solid #fe4c52;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=relationships] ion-label {\n  border-left: 2px solid #fd8b2d;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=fun] ion-label {\n  border-left: 2px solid #fed035;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=finances] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 5px;\n}\n\nion-item-sliding[track=misc] ion-label {\n  border-left: 2px solid #3bc7c4;\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZDQUFBO0VBQ0Esc0RBQUE7RUFDQSx3REFBQTtFQUVBLDBDQUFBO0FDQUY7O0FER0E7OztFQUFBOztBQUlBO0VBQ0UsMERBQUE7QUNBRjs7QURlRTtFQUNFLCtDQUFBO0VBQ0EsaUJBQUE7QUNaSjs7QURVRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURLRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURBRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURMRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QURWRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNhSjs7QURmRTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNrQko7O0FEcEJFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQ3VCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZmZmKTtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yMDAsICNmMmYyZjIpO1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcblxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbi8qXG4gKiBNYXRlcmlhbCBEZXNpZ24gdXNlcyB0aGUgcmlwcGxlIGZvciBhY3RpdmF0ZWRcbiAqIHNvIG9ubHkgc3R5bGUgdGhlIGlPUyBhY3RpdmF0ZWQgYmFja2dyb3VuZFxuICovXG4uaW9zIGlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCAjZDlkOWQ5KTtcbn1cblxuJGNhdGVnb3JpZXM6IChcbiAgaGVhbHRoOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSksXG4gIHdvcms6ICNhYzI4MmIsXG4gIGxvdmU6ICM4ZThkOTMsXG4gIGxlaXN1cmU6ICNmZTRjNTIsXG4gIHJlbGF0aW9uc2hpcHM6ICNmZDhiMmQsXG4gIGZ1bjogI2ZlZDAzNSxcbiAgZmluYW5jZXM6ICM2OWJiN2IsXG4gIG1pc2M6ICMzYmM3YzRcbik7XG5cbkBlYWNoICR0cmFjaywgJHZhbHVlIGluIG1hcC1yZW1vdmUoJGNhdGVnb3JpZXMpIHtcbiAgaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz0nI3skdHJhY2t9J10gaW9uLWxhYmVsIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuIiwiaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2ZmZik7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjAwLCAjZjJmMmYyKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCwgI2Q5ZDlkOSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKTtcbn1cblxuLypcbiAqIE1hdGVyaWFsIERlc2lnbiB1c2VzIHRoZSByaXBwbGUgZm9yIGFjdGl2YXRlZFxuICogc28gb25seSBzdHlsZSB0aGUgaU9TIGFjdGl2YXRlZCBiYWNrZ3JvdW5kXG4gKi9cbi5pb3MgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTAsICNkOWQ5ZDkpO1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWhlYWx0aF0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPXdvcmtdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FjMjgyYjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9bG92ZV0gaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjOGU4ZDkzO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz1sZWlzdXJlXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZTRjNTI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPXJlbGF0aW9uc2hpcHNdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZkOGIyZDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbmlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9ZnVuXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNmZWQwMzU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPWZpbmFuY2VzXSBpb24tbGFiZWwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM2OWJiN2I7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5pb24taXRlbS1zbGlkaW5nW3RyYWNrPW1pc2NdIGlvbi1sYWJlbCB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzNiYzdjNDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/schedule/schedule.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/schedule/schedule.ts ***!
    \********************************************/

  /*! exports provided: SchedulePage */

  /***/
  function srcAppPagesScheduleScheduleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulePage", function () {
      return SchedulePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule-filter/schedule-filter */
    "./src/app/pages/schedule-filter/schedule-filter.ts");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SchedulePage =
    /*#__PURE__*/
    function () {
      function SchedulePage(alertCtrl, confData, loadingCtrl, modalCtrl, router, routerOutlet, toastCtrl, user, config) {
        _classCallCheck(this, SchedulePage);

        this.alertCtrl = alertCtrl;
        this.confData = confData;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.routerOutlet = routerOutlet;
        this.toastCtrl = toastCtrl;
        this.user = user;
        this.config = config;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
      }

      _createClass(SchedulePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateSchedule();
          this.ios = this.config.get('mode') === 'ios';
        }
      }, {
        key: "dragging",
        value: function dragging(event, session) {
          event.target.getOpenAmount().then(function (res) {
            var openAmount = res;
            console.log("--- open amount ----");
            console.log(openAmount);

            if (openAmount > 200) {
              console.log("archive this; closeOpened()");
              event.target.close(); //need to do this to take focus off the current item

              session.hide = true;
            }
          });
        }
      }, {
        key: "fullySwiped",
        value: function fullySwiped($event, session) {
          console.log("fullySwiped");
          console.log(this.scheduleList);

          if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
          }
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {
          var _this2 = this;

          // Close any open sliding items when the schedule updates
          if (this.scheduleList) {
            this.scheduleList.closeSlidingItems();
          }

          this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            _this2.shownSessions = data.shownSessions;
            _this2.groups = data.groups;
          });
        }
      }, {
        key: "presentFilter",
        value: function presentFilter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var modal, _ref, data;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalCtrl.create({
                      component: _schedule_filter_schedule_filter__WEBPACK_IMPORTED_MODULE_4__["ScheduleFilterPage"],
                      swipeToClose: true,
                      presentingElement: this.routerOutlet.nativeEl,
                      componentProps: {
                        excludedTracks: this.excludeTracks
                      }
                    });

                  case 2:
                    modal = _context2.sent;
                    _context2.next = 5;
                    return modal.present();

                  case 5:
                    _context2.next = 7;
                    return modal.onWillDismiss();

                  case 7:
                    _ref = _context2.sent;
                    data = _ref.data;

                    if (data) {
                      this.excludeTracks = data;
                      this.updateSchedule();
                    }

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addFavorite",
        value: function addFavorite(slidingItem, sessionData) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!this.user.hasFavorite(sessionData.name)) {
                      _context3.next = 4;
                      break;
                    }

                    // Prompt to remove favorite
                    this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
                    _context3.next = 11;
                    break;

                  case 4:
                    // Add as a favorite
                    this.user.addFavorite(sessionData.name); // Close the open item

                    slidingItem.close(); // Create a toast

                    _context3.next = 8;
                    return this.toastCtrl.create({
                      header: "".concat(sessionData.name, " was successfully added as a favorite."),
                      duration: 3000,
                      buttons: [{
                        text: 'Close',
                        role: 'cancel'
                      }]
                    });

                  case 8:
                    toast = _context3.sent;
                    _context3.next = 11;
                    return toast.present();

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "removeFavorite",
        value: function removeFavorite(slidingItem, sessionData, title) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      message: 'Would you like to remove this session from your favorites?',
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler() {
                          // they clicked the cancel button, do not remove the session
                          // close the sliding item and hide the option buttons
                          slidingItem.close();
                        }
                      }, {
                        text: 'Remove',
                        handler: function handler() {
                          // they want to remove this session from their favorites
                          _this3.user.removeFavorite(sessionData.name);

                          _this3.updateSchedule(); // close the sliding item and hide the option buttons


                          slidingItem.close();
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "openSocial",
        value: function openSocial(network, fab) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var loading;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingCtrl.create({
                      message: "Posting to ".concat(network),
                      duration: Math.random() * 1000 + 500
                    });

                  case 2:
                    loading = _context5.sent;
                    _context5.next = 5;
                    return loading.present();

                  case 5:
                    _context5.next = 7;
                    return loading.onWillDismiss();

                  case 7:
                    fab.close();

                  case 8:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SchedulePage;
    }();

    SchedulePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduleList', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-schedule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./schedule.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/schedule/schedule.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./schedule.scss */
      "./src/app/pages/schedule/schedule.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_5__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRouterOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_user_data__WEBPACK_IMPORTED_MODULE_6__["UserData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Config"]])], SchedulePage);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SessionDetailPageRoutingModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPageRoutingModule", function () {
      return SessionDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");

    var routes = [{
      path: '',
      component: _session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]
    }];

    var SessionDetailPageRoutingModule = function SessionDetailPageRoutingModule() {
      _classCallCheck(this, SessionDetailPageRoutingModule);
    };

    SessionDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SessionDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SessionDetailModule */

  /***/
  function srcAppPagesSessionDetailSessionDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailModule", function () {
      return SessionDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _session_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-detail */
    "./src/app/pages/session-detail/session-detail.ts");
    /* harmony import */


    var _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./session-detail-routing.module */
    "./src/app/pages/session-detail/session-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SessionDetailModule = function SessionDetailModule() {
      _classCallCheck(this, SessionDetailModule);
    };

    SessionDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _session_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SessionDetailPageRoutingModule"]],
      declarations: [_session_detail__WEBPACK_IMPORTED_MODULE_3__["SessionDetailPage"]]
    })], SessionDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSessionDetailSessionDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".session-track-ionic {\n  color: var(--ion-color-primary);\n}\n\n.session-track-angular {\n  color: var(--ion-color-angular);\n}\n\n.session-track-communication {\n  color: var(--ion-color-communication);\n}\n\n.session-track-tooling {\n  color: var(--ion-color-tooling);\n}\n\n.session-track-services {\n  color: var(--ion-color-services);\n}\n\n.session-track-design {\n  color: var(--ion-color-design);\n}\n\n.session-track-workshop {\n  color: var(--ion-color-workshop);\n}\n\n.session-track-food {\n  color: var(--ion-color-food);\n}\n\n.session-track-documentation {\n  color: var(--ion-color-documentation);\n}\n\n.session-track-navigation {\n  color: var(--ion-color-navigation);\n}\n\n/* Favorite Icon\n * --------------------------------------------------------\n */\n\n.show-favorite {\n  position: relative;\n}\n\n.icon-heart-empty,\n.icon-heart {\n  --border-radius: 50%;\n  --padding-start: 0;\n  --padding-end: 0;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  width: 48px;\n  height: 48px;\n  font-size: 16px;\n  -webkit-transition: -webkit-transform 300ms ease;\n  transition: -webkit-transform 300ms ease;\n  transition: transform 300ms ease;\n  transition: transform 300ms ease, -webkit-transform 300ms ease;\n}\n\n.icon-heart-empty {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.icon-heart {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\n.show-favorite .icon-heart {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n\n.show-favorite .icon-heart-empty {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n\nh1 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw0QkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURFQTtFQUNFLGtDQUFBO0FDQ0Y7O0FERUE7O0VBQUE7O0FBSUE7RUFDRSxrQkFBQTtBQ0FGOztBREdBOztFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBRUEsUUFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFFQSxnREFBQTtFQUFBLHdDQUFBO0VBQUEsZ0NBQUE7RUFBQSw4REFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0xGOztBRFFBO0VBQ0UsU0FBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi1kZXRhaWwvc2Vzc2lvbi1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXNzaW9uLXRyYWNrLWlvbmljIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnNlc3Npb24tdHJhY2stYW5ndWxhciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYW5ndWxhcik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWNvbW11bmljYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbW11bmljYXRpb24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay10b29saW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci10b29saW5nKTtcbn1cblxuLnNlc3Npb24tdHJhY2stc2VydmljZXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlcnZpY2VzKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZGVzaWduIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZXNpZ24pO1xufVxuXG4uc2Vzc2lvbi10cmFjay13b3Jrc2hvcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd29ya3Nob3ApO1xufVxuXG4uc2Vzc2lvbi10cmFjay1mb29kIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb29kKTtcbn1cblxuLnNlc3Npb24tdHJhY2stZG9jdW1lbnRhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZG9jdW1lbnRhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLW5hdmlnYXRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW5hdmlnYXRpb24pO1xufVxuXG4vKiBGYXZvcml0ZSBJY29uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG5cbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcblxuICBmb250LXNpemU6IDE2cHg7XG5cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG59XG5cbi5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmljb24taGVhcnQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4uc2hvdy1mYXZvcml0ZSAuaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0LWVtcHR5IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG59IiwiLnNlc3Npb24tdHJhY2staW9uaWMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1hbmd1bGFyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1hbmd1bGFyKTtcbn1cblxuLnNlc3Npb24tdHJhY2stY29tbXVuaWNhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29tbXVuaWNhdGlvbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXRvb2xpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRvb2xpbmcpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1zZXJ2aWNlcyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2VydmljZXMpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kZXNpZ24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRlc2lnbik7XG59XG5cbi5zZXNzaW9uLXRyYWNrLXdvcmtzaG9wIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13b3Jrc2hvcCk7XG59XG5cbi5zZXNzaW9uLXRyYWNrLWZvb2Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb2QpO1xufVxuXG4uc2Vzc2lvbi10cmFjay1kb2N1bWVudGF0aW9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kb2N1bWVudGF0aW9uKTtcbn1cblxuLnNlc3Npb24tdHJhY2stbmF2aWdhdGlvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbmF2aWdhdGlvbik7XG59XG5cbi8qIEZhdm9yaXRlIEljb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbi5zaG93LWZhdm9yaXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWNvbi1oZWFydC1lbXB0eSxcbi5pY29uLWhlYXJ0IHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcbn1cblxuLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaWNvbi1oZWFydCB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG5cbi5zaG93LWZhdm9yaXRlIC5pY29uLWhlYXJ0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnNob3ctZmF2b3JpdGUgLmljb24taGVhcnQtZW1wdHkge1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/session-detail/session-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/session-detail/session-detail.ts ***!
    \********************************************************/

  /*! exports provided: SessionDetailPage */

  /***/
  function srcAppPagesSessionDetailSessionDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailPage", function () {
      return SessionDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_user_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/user-data */
    "./src/app/providers/user-data.ts");

    var SessionDetailPage =
    /*#__PURE__*/
    function () {
      function SessionDetailPage(dataProvider, userProvider, route) {
        _classCallCheck(this, SessionDetailPage);

        this.dataProvider = dataProvider;
        this.userProvider = userProvider;
        this.route = route;
        this.isFavorite = false;
        this.defaultHref = '';
      }

      _createClass(SessionDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this4 = this;

          this.dataProvider.load().subscribe(function (data) {
            if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
              var sessionId = _this4.route.snapshot.paramMap.get('sessionId');

              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = data.schedule[0].groups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var group = _step.value;

                  if (group && group.sessions) {
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                      for (var _iterator2 = group.sessions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var session = _step2.value;

                        if (session && session.id === sessionId) {
                          _this4.session = session;
                          _this4.isFavorite = _this4.userProvider.hasFavorite(_this4.session.name);
                          break;
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
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.defaultHref = "/app/tabs/schedule";
        }
      }, {
        key: "sessionClick",
        value: function sessionClick(item) {
          console.log('Clicked', item);
        }
      }, {
        key: "toggleFavorite",
        value: function toggleFavorite() {
          if (this.userProvider.hasFavorite(this.session.name)) {
            this.userProvider.removeFavorite(this.session.name);
            this.isFavorite = false;
          } else {
            this.userProvider.addFavorite(this.session.name);
            this.isFavorite = true;
          }
        }
      }, {
        key: "shareSession",
        value: function shareSession() {
          console.log('Clicked share session');
        }
      }]);

      return SessionDetailPage;
    }();

    SessionDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    SessionDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-session-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/session-detail/session-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./session-detail.scss */
      "./src/app/pages/session-detail/session-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _providers_user_data__WEBPACK_IMPORTED_MODULE_4__["UserData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], SessionDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SpeakerDetailPageRoutingModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPageRoutingModule", function () {
      return SpeakerDetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");

    var routes = [{
      path: '',
      component: _speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]
    }];

    var SpeakerDetailPageRoutingModule = function SpeakerDetailPageRoutingModule() {
      _classCallCheck(this, SpeakerDetailPageRoutingModule);
    };

    SpeakerDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.module.ts ***!
    \***************************************************************/

  /*! exports provided: SpeakerDetailModule */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailModule", function () {
      return SpeakerDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _speaker_detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-detail */
    "./src/app/pages/speaker-detail/speaker-detail.ts");
    /* harmony import */


    var _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-detail-routing.module */
    "./src/app/pages/speaker-detail/speaker-detail-routing.module.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerDetailModule = function SpeakerDetailModule() {
      _classCallCheck(this, SpeakerDetailModule);
    };

    SpeakerDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _speaker_detail_routing_module__WEBPACK_IMPORTED_MODULE_4__["SpeakerDetailPageRoutingModule"]],
      declarations: [_speaker_detail__WEBPACK_IMPORTED_MODULE_3__["SpeakerDetailPage"]]
    })], SpeakerDetailModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*\n * Speaker Background\n */\nion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n.speaker-background {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  padding-top: var(--ion-safe-area-top);\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(250px + var(--ion-safe-area-top));\n  background: center/cover url(/assets/img/speaker-background.png) no-repeat;\n}\n.speaker-background img {\n  width: 70px;\n  border-radius: 50%;\n  margin-top: calc(-1 * var(--ion-safe-area-top));\n}\n.speaker-background h2 {\n  position: absolute;\n  bottom: 10px;\n  color: white;\n}\n.md .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n}\n.ios .speaker-background {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 16px;\n}\n/*\n * Speaker Details\n */\n.speaker-detail p {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.speaker-detail hr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  background: var(--ion-color-step-150, #d7d8da);\n}\n/*\n* chat\n */\n.chat h4 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.chat p.text {\n  margin: 0px;\n}\n.chat p.timestamp {\n  margin: 0px;\n  font-size: 10px;\n}\n.chat .message-mine p.timestamp {\n  text-align: right;\n}\n.chat .message-mine h4 {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlYWtlci1kZXRhaWwvc3BlYWtlci1kZXRhaWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUlBO0VBQ0Usa0JBQUE7RUFFQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSx5QkFBQTtFQUNBLGNBQUE7QUNGRjtBREtBOzs7RUFHRSxjQUFBO0FDRkY7QURLQTtFQUNFLGtCQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBRUEscUNBQUE7RUFFQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLDhDQUFBO0VBRUEsMEVBQUE7QUNSRjtBRFdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7QUNSRjtBRFdBO0VBQ0Usa0JBQUE7RUFFQSxZQUFBO0VBRUEsWUFBQTtBQ1ZGO0FEYUE7RUFDRSx5SEFBQTtBQ1ZGO0FEYUE7RUFDRSw0Q0FBQTtBQ1ZGO0FEYUE7O0VBQUE7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNYRjtBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLDhDQUFBO0FDWkY7QURlQTs7RUFBQTtBQUtFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDZEo7QURnQkU7RUFDRSxXQUFBO0FDZEo7QURnQkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ2RKO0FEa0JJO0VBQ0UsaUJBQUE7QUNoQk47QURvQkk7RUFBSyxpQkFBQTtBQ2pCVCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWFrZXItZGV0YWlsL3NwZWFrZXItZGV0YWlsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU3BlYWtlciBCYWNrZ3JvdW5kXG4gKi9cblxuaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcblxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1iYWNrLWJ1dHRvbixcbmlvbi10b29sYmFyIGlvbi1tZW51LWJ1dHRvbiB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG5cbiAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC9hc3NldHMvaW1nL3NwZWFrZXItYmFja2dyb3VuZC5wbmcpIG5vLXJlcGVhdDtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0taW9uLXNhZmUtYXJlYS10b3ApKTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCBoMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICBib3R0b206IDEwcHg7XG5cbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWQgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAwcHg7XG59XG5cbi5pb3MgLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCAxNnB4O1xufVxuXG4vKlxuICogU3BlYWtlciBEZXRhaWxzXG4gKi9cblxuLnNwZWFrZXItZGV0YWlsIHAge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnNwZWFrZXItZGV0YWlsIGhyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG4vKlxuKiBjaGF0XG4gKi9cblxuLmNoYXQge1xuICBoNCB7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICB9XG4gIHAudGV4dCB7XG4gICAgbWFyZ2luOjBweDtcbiAgfVxuICBwLnRpbWVzdGFtcCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBmb250LXNpemU6MTBweDtcbiAgfVxuXG4gIC5tZXNzYWdlLW1pbmUge1xuICAgIHAudGltZXN0YW1wIHtcbiAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgfVxuICB9XG4gIC5tZXNzYWdlLW1pbmUge1xuICAgIGg0IHsgdGV4dC1hbGlnbjpyaWdodDt9XG4gIH1cblxufVxuIiwiLypcbiAqIFNwZWFrZXIgQmFja2dyb3VuZFxuICovXG5pb24tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b24sXG5pb24tdG9vbGJhciBpb24tYmFjay1idXR0b24sXG5pb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwZWFrZXItYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogY2FsYygyNTBweCArIHZhcigtLWlvbi1zYWZlLWFyZWEtdG9wKSk7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoL2Fzc2V0cy9pbWcvc3BlYWtlci1iYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA3MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IGNhbGMoLTEgKiB2YXIoLS1pb24tc2FmZS1hcmVhLXRvcCkpO1xufVxuXG4uc3BlYWtlci1iYWNrZ3JvdW5kIGgyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1kIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDNweCAxcHggLTJweCwgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDFweCA1cHggMHB4O1xufVxuXG4uaW9zIC5zcGVha2VyLWJhY2tncm91bmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggMTZweDtcbn1cblxuLypcbiAqIFNwZWFrZXIgRGV0YWlsc1xuICovXG4uc3BlYWtlci1kZXRhaWwgcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uc3BlYWtlci1kZXRhaWwgaHIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG4vKlxuKiBjaGF0XG4gKi9cbi5jaGF0IGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNoYXQgcC50ZXh0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2hhdCBwLnRpbWVzdGFtcCB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG4uY2hhdCAubWVzc2FnZS1taW5lIHAudGltZXN0YW1wIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2hhdCAubWVzc2FnZS1taW5lIGg0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-detail/speaker-detail.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/speaker-detail/speaker-detail.ts ***!
    \********************************************************/

  /*! exports provided: SpeakerDetailPage */

  /***/
  function srcAppPagesSpeakerDetailSpeakerDetailTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailPage", function () {
      return SpeakerDetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");

    var SpeakerDetailPage =
    /*#__PURE__*/
    function () {
      function SpeakerDetailPage(dataProvider, route, actionSheetCtrl, confData, inAppBrowser) {
        _classCallCheck(this, SpeakerDetailPage);

        this.dataProvider = dataProvider;
        this.route = route;
        this.actionSheetCtrl = actionSheetCtrl;
        this.confData = confData;
        this.inAppBrowser = inAppBrowser;
        this.newPromiseMsg = "You have a new Promise:";
        this.defaultHref = '';
      }

      _createClass(SpeakerDetailPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this5 = this;

          this.dataProvider.load().subscribe(function (data) {
            var speakerId = _this5.route.snapshot.paramMap.get('speakerId');

            if (data && data.speakers) {
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = data.speakers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var speaker = _step3.value;

                  if (speaker && speaker.id === speakerId) {
                    _this5.speaker = speaker;
                    break;
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
            }
          });
        }
      }, {
        key: "openExternalUrl",
        value: function openExternalUrl(url) {
          this.inAppBrowser.create(url, '_blank');
        }
      }, {
        key: "openSpeakerShare",
        value: function openSpeakerShare(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var actionSheet;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.actionSheetCtrl.create({
                      header: 'Share ' + speaker.name,
                      buttons: [{
                        text: 'Copy Link',
                        handler: function handler() {
                          console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);

                          if (window.cordova && window.cordova.plugins.clipboard) {
                            window.cordova.plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                          }
                        }
                      }, {
                        text: 'Share via ...'
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 2:
                    actionSheet = _context6.sent;
                    _context6.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openContact",
        value: function openContact(speaker) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var mode, actionSheet;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    mode = 'ios'; // this.config.get('mode');

                    _context7.next = 3;
                    return this.actionSheetCtrl.create({
                      header: 'Contact ' + speaker.name,
                      buttons: [{
                        text: "Email ( ".concat(speaker.email, " )"),
                        icon: mode !== 'ios' ? 'mail' : null,
                        handler: function handler() {
                          window.open('mailto:' + speaker.email);
                        }
                      }, {
                        text: "Call ( ".concat(speaker.phone, " )"),
                        icon: mode !== 'ios' ? 'call' : null,
                        handler: function handler() {
                          window.open('tel:' + speaker.phone);
                        }
                      }, {
                        text: 'Cancel',
                        role: 'cancel'
                      }]
                    });

                  case 3:
                    actionSheet = _context7.sent;
                    _context7.next = 6;
                    return actionSheet.present();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "getFirstName",
        value: function getFirstName(speaker) {
          if (speaker) {
            var res = speaker.name.split(" ");
            return res[0];
          }

          return "Bob";
        }
      }]);

      return SpeakerDetailPage;
    }();

    SpeakerDetailPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]
      }, {
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
      }];
    };

    SpeakerDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-detail.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-detail/speaker-detail.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-detail.scss */
      "./src/app/pages/speaker-detail/speaker-detail.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _providers_conference_data__WEBPACK_IMPORTED_MODULE_3__["ConferenceData"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]])], SpeakerDetailPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list-popover/speaker-list-popover.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/speaker-list-popover/speaker-list-popover.ts ***!
    \********************************************************************/

  /*! exports provided: SpeakerListPopoverPage */

  /***/
  function srcAppPagesSpeakerListPopoverSpeakerListPopoverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPopoverPage", function () {
      return SpeakerListPopoverPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SpeakerListPopoverPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPopoverPage(popoverCtrl) {
        _classCallCheck(this, SpeakerListPopoverPage);

        this.popoverCtrl = popoverCtrl;
      }

      _createClass(SpeakerListPopoverPage, [{
        key: "support",
        value: function support() {
          // this.app.getRootNavs()[0].push('/support');
          this.popoverCtrl.dismiss();
        }
      }, {
        key: "close",
        value: function close(url) {
          window.open(url, '_blank');
          this.popoverCtrl.dismiss();
        }
      }]);

      return SpeakerListPopoverPage;
    }();

    SpeakerListPopoverPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    SpeakerListPopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <ion-list>\n      <ion-item button>\n        <ion-label>Create Group</ion-label>\n      </ion-item>\n      <ion-item button>\n        <ion-label>Filter by ...</ion-label>\n      </ion-item>\n    </ion-list>\n  "
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], SpeakerListPopoverPage);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SpeakerListPageRoutingModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPageRoutingModule", function () {
      return SpeakerListPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");

    var routes = [{
      path: '',
      component: _speaker_list__WEBPACK_IMPORTED_MODULE_3__["SpeakerListPage"]
    }];

    var SpeakerListPageRoutingModule = function SpeakerListPageRoutingModule() {
      _classCallCheck(this, SpeakerListPageRoutingModule);
    };

    SpeakerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeakerListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerListModule */

  /***/
  function srcAppPagesSpeakerListSpeakerListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListModule", function () {
      return SpeakerListModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./speaker-list */
    "./src/app/pages/speaker-list/speaker-list.ts");
    /* harmony import */


    var _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speaker-list-routing.module */
    "./src/app/pages/speaker-list/speaker-list-routing.module.ts");
    /* harmony import */


    var _speaker_list_popover_speaker_list_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../speaker-list-popover/speaker-list-popover */
    "./src/app/pages/speaker-list-popover/speaker-list-popover.ts");

    var SpeakerListModule = function SpeakerListModule() {
      _classCallCheck(this, SpeakerListModule);
    };

    SpeakerListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _speaker_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeakerListPageRoutingModule"]],
      declarations: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"], _speaker_list_popover_speaker_list_popover__WEBPACK_IMPORTED_MODULE_6__["SpeakerListPopoverPage"]],
      entryComponents: [_speaker_list_popover_speaker_list_popover__WEBPACK_IMPORTED_MODULE_6__["SpeakerListPopoverPage"]],
      bootstrap: [_speaker_list__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPage"]]
    })], SpeakerListModule);
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeakerListSpeakerListScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ripple-parent {\n  position: relative;\n  overflow: hidden;\n}\n\n.speaker-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n/* Due to the fact the cards are inside of columns the margins don't overlap\n * properly so we want to remove the extra margin between cards\n */\n\nion-col:not(:last-of-type) .speaker-card {\n  margin-bottom: 0;\n}\n\n.speaker-card .speaker-item {\n  --min-height: 85px;\n}\n\n.speaker-card .speaker-item h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card .speaker-item p {\n  font-size: 13px;\n  letter-spacing: 0.02em;\n}\n\n.speaker-card ion-card-header {\n  padding: 0;\n}\n\n.speaker-card ion-card-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 0;\n}\n\n.speaker-card ion-card-content .session-name h3 {\n  font-size: 16px;\n}\n\n.ios ion-list {\n  margin-bottom: 10px;\n}\n\n.md ion-list {\n  border-top: 1px solid var(--ion-color-step-150, #d7d8da);\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zc2xlb25nL2Rldi90ZXN0L2lvbmljL3NyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGVha2VyLWxpc3Qvc3BlYWtlci1saXN0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjs7QURFQTs7RUFBQTs7QUFHQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0VBRUEsVUFBQTtBQ0FGOztBREdJO0VBQ0UsZUFBQTtBQ0ROOztBRE1BO0VBQ0UsbUJBQUE7QUNIRjs7QURNQTtFQUNFLHdEQUFBO0VBRUEsVUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlYWtlci1saXN0L3NwZWFrZXItbGlzdC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGVha2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXG4gKiBwcm9wZXJseSBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXh0cmEgbWFyZ2luIGJldHdlZW4gY2FyZHNcbiAqL1xuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSB7XG4gIC0tbWluLWhlaWdodDogODVweDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcblxuICBwYWRkaW5nOiAwO1xuXG4gIC5zZXNzaW9uLW5hbWV7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5pb3MgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWQgaW9uLWxpc3Qge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcblxuICBwYWRkaW5nOiAwO1xufVxuIiwiLnJpcHBsZS1wYXJlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zcGVha2VyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4vKiBEdWUgdG8gdGhlIGZhY3QgdGhlIGNhcmRzIGFyZSBpbnNpZGUgb2YgY29sdW1ucyB0aGUgbWFyZ2lucyBkb24ndCBvdmVybGFwXG4gKiBwcm9wZXJseSBzbyB3ZSB3YW50IHRvIHJlbW92ZSB0aGUgZXh0cmEgbWFyZ2luIGJldHdlZW4gY2FyZHNcbiAqL1xuaW9uLWNvbDpub3QoOmxhc3Qtb2YtdHlwZSkgLnNwZWFrZXItY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5zcGVha2VyLWNhcmQgLnNwZWFrZXItaXRlbSB7XG4gIC0tbWluLWhlaWdodDogODVweDtcbn1cblxuLnNwZWFrZXItY2FyZCAuc3BlYWtlci1pdGVtIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuXG4uc3BlYWtlci1jYXJkIC5zcGVha2VyLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cblxuLnNwZWFrZXItY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc3BlYWtlci1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMDtcbn1cbi5zcGVha2VyLWNhcmQgaW9uLWNhcmQtY29udGVudCAuc2Vzc2lvbi1uYW1lIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW9zIGlvbi1saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1kIGlvbi1saXN0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG4gIHBhZGRpbmc6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speaker-list/speaker-list.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/speaker-list/speaker-list.ts ***!
    \****************************************************/

  /*! exports provided: SpeakerListPage */

  /***/
  function srcAppPagesSpeakerListSpeakerListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerListPage", function () {
      return SpeakerListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../providers/conference-data */
    "./src/app/providers/conference-data.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _speaker_list_popover_speaker_list_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../speaker-list-popover/speaker-list-popover */
    "./src/app/pages/speaker-list-popover/speaker-list-popover.ts");

    var SpeakerListPage =
    /*#__PURE__*/
    function () {
      function SpeakerListPage(confData, toastCtrl, popoverCtrl) {
        _classCallCheck(this, SpeakerListPage);

        this.confData = confData;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.speakers = [];
        this.queryText = '';
        this.showSearchbar = false;
      }

      _createClass(SpeakerListPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this6 = this;

          this.confData.getSpeakers().subscribe(function (speakers) {
            _this6.speakers = speakers;
          });
        }
      }, {
        key: "dragging",
        value: function dragging(event, session) {
          if (session.ack) {
            event.target.getOpenAmount().then(function (res) {
              var openAmount = res;
              console.log("--- open amount ----");
              console.log(openAmount);

              if (openAmount > 200) {
                console.log("archive this; closeOpened()");
                session.hide = true;
                event.target.close(); //need to do this to take focus off the current item
              }
            });
          }
        }
      }, {
        key: "fullySwiped",
        value: function fullySwiped($event, session) {
          console.log("fullySwiped");
          console.log(this.sessionList);

          if (this.sessionList) {
            this.sessionList.closeSlidingItems();
          }
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var popover;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.popoverCtrl.create({
                      component: _speaker_list_popover_speaker_list_popover__WEBPACK_IMPORTED_MODULE_4__["SpeakerListPopoverPage"],
                      event: event
                    });

                  case 2:
                    popover = _context8.sent;
                    _context8.next = 5;
                    return popover.present();

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "updateSchedule",
        value: function updateSchedule() {}
      }, {
        key: "getIcon",
        value: function getIcon(session) {
          var myIcon = null;

          switch (session.location) {
            case 'Done':
              myIcon = 'checkbox';
              break;

            case 'Not Done':
              myIcon = 'flag';
              break;

            case 'Revoked':
              myIcon = 'hand-left';
              break;
          }

          if (!session.ack) {
            myIcon = "".concat(myIcon, "-outline");
          }

          return myIcon;
        }
        /*
          async ionViewDidEnter() {
            const toast = await this.toastCtrl.create({
              message: 'This does not actually send a support request.',
              duration: 3000
            });
            await toast.present();
          }
          */

      }, {
        key: "ack",
        value: function ack($event, session) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var toast;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    $event.stopPropagation();
                    $event.preventDefault();

                    if (!session.ack) {
                      _context9.next = 6;
                      break;
                    }

                    session.ack = false;
                    _context9.next = 12;
                    break;

                  case 6:
                    session.ack = true;
                    _context9.next = 9;
                    return this.toastCtrl.create({
                      header: 'Acknowledged',
                      //message: 'Acknowledged',
                      duration: 1000
                    });

                  case 9:
                    toast = _context9.sent;
                    _context9.next = 12;
                    return toast.present();

                  case 12:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }]);

      return SpeakerListPage;
    }();

    SpeakerListPage.ctorParameters = function () {
      return [{
        type: _providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sessionList', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"])], SpeakerListPage.prototype, "sessionList", void 0);
    SpeakerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-speaker-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaker-list.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speaker-list/speaker-list.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaker-list.scss */
      "./src/app/pages/speaker-list/speaker-list.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_conference_data__WEBPACK_IMPORTED_MODULE_2__["ConferenceData"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])], SpeakerListPage);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppPagesTabsPageTabsPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../schedule/schedule */
    "./src/app/pages/schedule/schedule.ts");

    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'schedule',
        children: [{
          path: '',
          component: _schedule_schedule__WEBPACK_IMPORTED_MODULE_4__["SchedulePage"]
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }]
      }, {
        path: 'speakers',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-list/speaker-list.module */
            "./src/app/pages/speaker-list/speaker-list.module.ts")).then(function (m) {
              return m.SpeakerListModule;
            });
          }
        }, {
          path: 'session/:sessionId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../session-detail/session-detail.module */
            "./src/app/pages/session-detail/session-detail.module.ts")).then(function (m) {
              return m.SessionDetailModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'map',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../map/map.module */
            "./src/app/pages/map/map.module.ts")).then(function (m) {
              return m.MapModule;
            });
          }
        }, {
          path: 'speaker-details/:speakerId',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../speaker-detail/speaker-detail.module */
            "./src/app/pages/speaker-detail/speaker-detail.module.ts")).then(function (m) {
              return m.SpeakerDetailModule;
            });
          }
        }]
      }, {
        path: 'about',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.resolve().then(__webpack_require__.bind(null,
            /*! ../about/about.module */
            "./src/app/pages/about/about.module.ts")).then(function (m) {
              return m.AboutModule;
            });
          }
        }, {
          path: ':page',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | privacy-privacy-module */
            "privacy-privacy-module").then(__webpack_require__.bind(null,
            /*! ../privacy/privacy.module */
            "./src/app/pages/privacy/privacy.module.ts")).then(function (m) {
              return m.PrivacyModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.module.ts ***!
    \*****************************************************/

  /*! exports provided: TabsModule */

  /***/
  function srcAppPagesTabsPageTabsPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsModule", function () {
      return TabsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tabs-page */
    "./src/app/pages/tabs-page/tabs-page.ts");
    /* harmony import */


    var _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-page-routing.module */
    "./src/app/pages/tabs-page/tabs-page-routing.module.ts");
    /* harmony import */


    var _about_about_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../about/about.module */
    "./src/app/pages/about/about.module.ts");
    /* harmony import */


    var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../map/map.module */
    "./src/app/pages/map/map.module.ts");
    /* harmony import */


    var _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../schedule/schedule.module */
    "./src/app/pages/schedule/schedule.module.ts");
    /* harmony import */


    var _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../session-detail/session-detail.module */
    "./src/app/pages/session-detail/session-detail.module.ts");
    /* harmony import */


    var _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../speaker-detail/speaker-detail.module */
    "./src/app/pages/speaker-detail/speaker-detail.module.ts");
    /* harmony import */


    var _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../speaker-list/speaker-list.module */
    "./src/app/pages/speaker-list/speaker-list.module.ts");

    var TabsModule = function TabsModule() {
      _classCallCheck(this, TabsModule);
    };

    TabsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_about_about_module__WEBPACK_IMPORTED_MODULE_6__["AboutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_7__["MapModule"], _schedule_schedule_module__WEBPACK_IMPORTED_MODULE_8__["ScheduleModule"], _session_detail_session_detail_module__WEBPACK_IMPORTED_MODULE_9__["SessionDetailModule"], _speaker_detail_speaker_detail_module__WEBPACK_IMPORTED_MODULE_10__["SpeakerDetailModule"], _speaker_list_speaker_list_module__WEBPACK_IMPORTED_MODULE_11__["SpeakerListModule"], _tabs_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"]]
    })], TabsModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-page/tabs-page.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/tabs-page/tabs-page.ts ***!
    \**********************************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppPagesTabsPageTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TabsPage = function TabsPage() {
      _classCallCheck(this, TabsPage);
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs-page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-page/tabs-page.html")).default
    })], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tabs-page-tabs-page-module-es5.js.map