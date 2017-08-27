function handleContactWidget() {
    $("#contactForm").length <= 0 || $("#contactForm button").click(function(e) {
        e.preventDefault();
        var t = $("#contactForm");
        if (t.valid()) {
            var n = t.serializeArray();
            $.post($("#contactForm").attr("action"), n).done(function(e) {
                var n = $.parseJSON(e);
                n.error ? (t.find("#messages .alert-success").hide(), t.find("#messages .alert-danger").show()) : (t.find("input, textarea, select").val(""), t.find("button").prop("disabled", !0), t.find("label.valid, label.error").remove(), t.find("#messages .alert-danger").hide(), t.find("#messages .alert-success").show())
            })
        }
    })
}

function loadLanguageWidget() {
    if (0 !== $("#langWidget").length) {
        var e = function(e, t) {
            "undefined" != typeof t && t || (t = "#langWidget #interpretLanguageId");
            var n = "-1" === $("#langWidget #selectedLanguageId").val() ? null : $("#langWidget #selectedLanguageId").val();
            $.post(Resource.Urls.getTranslatableLanguages, {
                fromLanguageId: e,
                selectedLanguageId: n
            }).done(function(e) {
                initMultiLanguageSelector($(t).html(e), null, function() {
                    var e = t.split(" ");
                    if (e.length > 0) {
                        var n = e[e.length - 1];
                        "#" === n.substr(0, 1) && (n = n.substr(1))
                    }
                })
            })
        };
        e($("#langWidget #fileLanguageId").val()), $("#langWidget #fileLanguageId").change(function() {
            e($(this).val())
        })
    }
}

function loadReferences() {
    function e() {
        $("#slide8 img").each(function() {
            $(this).css({
                "margin-top": $(this).outerHeight() / -2,
                "margin-left": $(this).outerWidth() / -2
            })
        })
    }
    if (0 !== $("#slide8").length) {
        e();
        var t = "onorientationchange" in window,
            n = t ? "orientationchange" : "resize";
        window.addEventListener(n, function() {
            e()
        }, !1)
    }
}

function printDiv(e) {
    var t = document.getElementById(e).innerHTML,
        n = document.body.innerHTML;
    document.body.innerHTML = t, window.print(), document.body.innerHTML = n
}

function initBootstrapSelects() {
    $("select:not(select[name=countryCode]):not(#fileLanguageId):not(#interpretLanguageId)").select2({
        minimumResultsForSearch: -1,
        width: null,
        language: Resource.Language
    }), $("#fileLanguageId").select2({
        minimumResultsForSearch: 1,
        width: null,
        language: Resource.Language
    }), $("#interpretLanguageId").select2({
        minimumResultsForSearch: 1,
        width: null,
        closeOnSelect: !1,
        language: Resource.Language
    }), $("select[name=countryCode]").select2({
        width: null,
        language: Resource.Language,
        dropdownCssClass: "countrycode",
        templateSelection: function(e) {
            var t = $(e.element);
            return "+" + t.data("phonecode")
        },
        templateResult: function(e) {
            if (!e.id) return e.text;
            var t = $(e.element),
                n = t.closest("select").data("flagpath"),
                i = '<img src="' + n + '" alt="' + e.text + '" class="flag flag-' + t.data("code") + '" /><span>' + e.text + "</span>";
            return $(i)
        }
    }), $("select[name=country]").select2({
        width: null,
        language: Resource.Language,
        dropdownCssClass: "country",
        templateResult: function(e) {
            if (!e.id) return e.text;
            var t = $(e.element),
                n = t.closest("select").data("flagpath"),
                i = '<img src="' + n + '" alt="' + e.text + '" class="flag flag-' + t.data("code") + '" /><span>' + e.text + "</span>";
            return $(i)
        }
    });
    var e = function() {
        "49" === $("select[name=countryCode]").val() ? $("input[name=phoneNumber]").mask("0000000000ZZ", {
            translation: {
                Z: {
                    pattern: /[0-9]/,
                    optional: !0
                }
            }
        }) : "1" === $("select[name=countryCode]").val() ? $("input[name=phoneNumber]").mask("0000000000Z", {
            translation: {
                Z: {
                    pattern: /[0-9]/,
                    optional: !0
                }
            }
        }) : $("input[name=phoneNumber]").mask("0000000ZZZ", {
            translation: {
                Z: {
                    pattern: /[0-9]/,
                    optional: !0
                }
            }
        })
    };
    $("select[name=countryCode]").change(function() {
        e()
    }), e()
}

function handleLongTextarea() {
    if (0 !== $(".longerText").length) {
        var e = function(e) {
            var t = 44;
            window.matchMedia("(min-width: 1024px)").matches && (t = 44), window.matchMedia("(max-width: 1023px)").matches && (t = 77), window.matchMedia("(max-width: 767px)").matches && (t = 44), window.matchMedia("(max-width: 413px)").matches && (t = 37), window.matchMedia("(max-width: 374px)").matches && (t = 30);
            var n = 2 * t;
            e.val().length < t ? e.removeClass("doubleLine").removeClass("trippleLine") : e.val().length > t && e.val().length <= n ? e.addClass("doubleLine") : e.val().length > n && e.removeClass("doubleLine").addClass("trippleLine")
        };
        $(".longerText").each(function() {
            e($(this))
        }), $(".longerText").on("keyup", function() {
            e($(this))
        })
    }
}

function initTooltips() {
    $('[data-toggle="tooltip"]').tooltip(), $(".help").hover(function() {
        $(this).next(".helpInfoWR").parent().hasClass("cvc") && $(this).next(".helpInfoWR").addClass("number2"), $(this).parent().find(".helpInfoWR").fadeIn(150)
    }), $(".help").mouseleave(function() {
        $(this).parent().find(".helpInfoWR").fadeOut(150)
    })
}

function passVisitorNotesToChat(e) {
    $zopim && $zopim(function() {
        $zopim.livechat.setNotes(e)
    })
}

function initMultiLanguageSelector(e, t, n) {
    "undefined" != typeof n && e.on("change", n), e.prop("disabled", !1), 0 == e.find("option:selected").length && e.val(e.find("option:first").val())
}

function handleCurrencySelects() {
    var e = function(e) {
        $.post(Resource.Urls.setCurrency, {
            currencyCode: e
        }).done(function(e) {
            var t = $.parseJSON(e);
            t.success && window.location.reload()
        })
    };
    $(".navbar .currency select").change(function() {
        e($(this).val())
    }), $(".navbar .currency-select.dropdown-menu a").each(function() {
        var t = $(this).data("currency");
        $(this).click(function(n) {
            n.preventDefault(), e(t)
        })
    })
}

function handleFormLabelDoubleClick() {
    $('form .form-group label:not([for=""])').dblclick(function() {
        var e = $(this).attr("for");
        $("#" + e).focus()
    })
}
if (! function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        "use strict";

        function n(e, t) {
            t = t || te;
            var n = t.createElement("script");
            n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(e) {
            var t = !!e && "length" in e && e.length,
                n = fe.type(e);
            return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function r(e, t, n) {
            return fe.isFunction(t) ? fe.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            }) : t.nodeType ? fe.grep(e, function(e) {
                return e === t !== n
            }) : "string" != typeof t ? fe.grep(e, function(e) {
                return se.call(t, e) > -1 !== n
            }) : Te.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function(e) {
                return se.call(t, e) > -1 !== n && 1 === e.nodeType
            }))
        }

        function o(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function s(e) {
            var t = {};
            return fe.each(e.match(_e) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a(e) {
            return e
        }

        function l(e) {
            throw e
        }

        function c(e, t, n) {
            var i;
            try {
                e && fe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && fe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e)
            } catch (e) {
                n.call(void 0, e)
            }
        }

        function u() {
            te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), fe.ready()
        }

        function d() {
            this.expando = fe.expando + d.uid++
        }

        function h(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : je.test(e) ? JSON.parse(e) : e)
        }

        function p(e, t, n) {
            var i;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Me, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = h(n)
                    } catch (r) {}
                    qe.set(e, t, n)
                } else n = void 0;
            return n
        }

        function f(e, t, n, i) {
            var r, o = 1,
                s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return fe.css(e, t, "")
                },
                l = a(),
                c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
                u = (fe.cssNumber[t] || "px" !== c && +l) && Fe.exec(fe.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do o = o || ".5", u /= o, fe.style(e, t, u + c); while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
        }

        function m(e) {
            var t, n = e.ownerDocument,
                i = e.nodeName,
                r = Be[i];
            return r ? r : (t = n.body.appendChild(n.createElement(i)), r = fe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Be[i] = r, r)
        }

        function g(e, t) {
            for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = Oe.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && He(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none", Oe.set(i, "display", n)));
            for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
            return e
        }

        function v(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], n) : n
        }

        function y(e, t) {
            for (var n = 0, i = e.length; n < i; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
        }

        function b(e, t, n, i, r) {
            for (var o, s, a, l, c, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                if (o = e[p], o || 0 === o)
                    if ("object" === fe.type(o)) fe.merge(h, o.nodeType ? [o] : o);
                    else if (Ye.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), a = (Ve.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[a] || Ge._default, s.innerHTML = l[1] + fe.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                fe.merge(h, s.childNodes), s = d.firstChild, s.textContent = ""
            } else h.push(t.createTextNode(o));
            for (d.textContent = "", p = 0; o = h[p++];)
                if (i && fe.inArray(o, i) > -1) r && r.push(o);
                else if (c = fe.contains(o.ownerDocument, o), s = v(d.appendChild(o), "script"), c && y(s), n)
                for (u = 0; o = s[u++];) Qe.test(o.type || "") && n.push(o);
            return d
        }

        function $() {
            return !0
        }

        function w() {
            return !1
        }

        function x() {
            try {
                return te.activeElement
            } catch (e) {}
        }

        function C(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in t) C(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = w;
            else if (!r) return e;
            return 1 === o && (s = r, r = function(e) {
                return fe().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
                fe.event.add(this, t, r, i, n)
            })
        }

        function T(e, t) {
            return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
        }

        function k(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function E(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function S(e, t) {
            var n, i, r, o, s, a, l, c;
            if (1 === t.nodeType) {
                if (Oe.hasData(e) && (o = Oe.access(e), s = Oe.set(t, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                        for (n = 0, i = c[r].length; n < i; n++) fe.event.add(t, r, c[r][n])
                }
                qe.hasData(e) && (a = qe.access(e), l = fe.extend({}, a), qe.set(t, l))
            }
        }

        function A(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function R(e, t, i, r) {
            t = re.apply([], t);
            var o, s, a, l, c, u, d = 0,
                h = e.length,
                p = h - 1,
                f = t[0],
                m = fe.isFunction(f);
            if (m || h > 1 && "string" == typeof f && !he.checkClone && nt.test(f)) return e.each(function(n) {
                var o = e.eq(n);
                m && (t[0] = f.call(this, n, o.html())), R(o, t, i, r)
            });
            if (h && (o = b(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
                for (a = fe.map(v(o, "script"), k), l = a.length; d < h; d++) c = o, d !== p && (c = fe.clone(c, !0, !0), l && fe.merge(a, v(c, "script"))), i.call(e[d], c, d);
                if (l)
                    for (u = a[a.length - 1].ownerDocument, fe.map(a, E), d = 0; d < l; d++) c = a[d], Qe.test(c.type || "") && !Oe.access(c, "globalEval") && fe.contains(u, c) && (c.src ? fe._evalUrl && fe._evalUrl(c.src) : n(c.textContent.replace(rt, ""), u))
            }
            return e
        }

        function _(e, t, n) {
            for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(v(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }

        function N(e, t, n) {
            var i, r, o, s, a = e.style;
            return n = n || at(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), !he.pixelMarginRight() && st.test(s) && ot.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function D(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function I(e) {
            if (e in ht) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
                if (e = dt[n] + t, e in ht) return e
        }

        function L(e, t, n) {
            var i = Fe.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function O(e, t, n, i, r) {
            var o, s = 0;
            for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += fe.css(e, n + Ue[o], !0, r)), i ? ("content" === n && (s -= fe.css(e, "padding" + Ue[o], !0, r)), "margin" !== n && (s -= fe.css(e, "border" + Ue[o] + "Width", !0, r))) : (s += fe.css(e, "padding" + Ue[o], !0, r), "padding" !== n && (s += fe.css(e, "border" + Ue[o] + "Width", !0, r)));
            return s
        }

        function q(e, t, n) {
            var i, r = !0,
                o = at(e),
                s = "border-box" === fe.css(e, "boxSizing", !1, o);
            if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
                if (i = N(e, t, o), (i < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
                r = s && (he.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + O(e, t, n || (s ? "border" : "content"), r, o) + "px"
        }

        function j(e, t, n, i, r) {
            return new j.prototype.init(e, t, n, i, r)
        }

        function M() {
            ft && (e.requestAnimationFrame(M), fe.fx.tick())
        }

        function P() {
            return e.setTimeout(function() {
                pt = void 0
            }), pt = fe.now()
        }

        function F(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ue[i], r["margin" + n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function U(e, t, n) {
            for (var i, r = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function H(e, t, n) {
            var i, r, o, s, a, l, c, u, d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && He(e),
                v = Oe.get(e, "fxshow");
            n.queue || (s = fe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                s.unqueued || a()
            }), s.unqueued++, h.always(function() {
                h.always(function() {
                    s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
                })
            }));
            for (i in t)
                if (r = t[i], mt.test(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                        if ("show" !== r || !v || void 0 === v[i]) continue;
                        m = !0
                    }
                    p[i] = v && v[i] || fe.style(e, i)
                }
            if (l = !fe.isEmptyObject(t), l || !fe.isEmptyObject(p)) {
                d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = v && v.display, null == c && (c = Oe.get(e, "display")), u = fe.css(e, "display"), "none" === u && (c ? u = c : (g([e], !0), c = e.style.display || c, u = fe.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === fe.css(e, "float") && (l || (h.done(function() {
                    f.display = c
                }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function() {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                })), l = !1;
                for (i in p) l || (v ? "hidden" in v && (m = v.hidden) : v = Oe.access(e, "fxshow", {
                    display: c
                }), o && (v.hidden = !m), m && g([e], !0), h.done(function() {
                    m || g([e]), Oe.remove(e, "fxshow");
                    for (i in p) fe.style(e, i, p[i])
                })), l = U(m ? v[i] : 0, i, h), i in v || (v[i] = l.start, m && (l.end = l.start, l.start = 0))
            }
        }

        function W(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = fe.camelCase(n), r = t[i], o = e[n], fe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = fe.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function B(e, t, n) {
            var i, r, o = 0,
                s = B.prefilters.length,
                a = fe.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = pt || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; s < l; s++) c.tweens[s].run(o);
                    return a.notifyWith(e, [c, o, n]), o < 1 && l ? n : (a.resolveWith(e, [c]), !1)
                },
                c = a.promise({
                    elem: e,
                    props: fe.extend({}, t),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: pt || P(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = fe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n < i; n++) c.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (W(u, c.opts.specialEasing); o < s; o++)
                if (i = B.prefilters[o].call(c, e, u, c.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(i.stop, i)), i;
            return fe.map(u, U, c), fe.isFunction(c.opts.start) && c.opts.start.call(e, c), fe.fx.timer(fe.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function z(e) {
            var t = e.match(_e) || [];
            return t.join(" ")
        }

        function V(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function Q(e, t, n, i) {
            var r;
            if (fe.isArray(t)) fe.each(t, function(t, r) {
                n || Et.test(e) ? i(e, r) : Q(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== fe.type(t)) i(e, t);
            else
                for (r in t) Q(e + "[" + r + "]", t[r], n, i)
        }

        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(_e) || [];
                if (fe.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function Y(e, t, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, fe.each(e[a] || [], function(e, a) {
                    var c = a(t, n, i);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                s = e === Mt;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function X(e, t) {
            var n, i, r = fe.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
            return i && fe.extend(!0, e, i), e
        }

        function K(e, t, n) {
            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || e.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            if (o) return o !== l[0] && l.unshift(o), n[o]
        }

        function Z(e, t, n, i) {
            var r, o, s, a, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
            for (o = u.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s)
                    for (r in c)
                        if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && e["throws"]) t = s(t);
                    else try {
                        t = s(t)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function J(e) {
            return fe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var ee = [],
            te = e.document,
            ne = Object.getPrototypeOf,
            ie = ee.slice,
            re = ee.concat,
            oe = ee.push,
            se = ee.indexOf,
            ae = {},
            le = ae.toString,
            ce = ae.hasOwnProperty,
            ue = ce.toString,
            de = ue.call(Object),
            he = {},
            pe = "3.1.1",
            fe = function(e, t) {
                return new fe.fn.init(e, t)
            },
            me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ge = /^-ms-/,
            ve = /-([a-z])/g,
            ye = function(e, t) {
                return t.toUpperCase()
            };
        fe.fn = fe.prototype = {
            jquery: pe,
            constructor: fe,
            length: 0,
            toArray: function() {
                return ie.call(this)
            },
            get: function(e) {
                return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = fe.merge(this.constructor(), e);
                return t.prevObject = this, t
            },
            each: function(e) {
                return fe.each(this, e)
            },
            map: function(e) {
                return this.pushStack(fe.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ie.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: oe,
            sort: ee.sort,
            splice: ee.splice
        }, fe.extend = fe.fn.extend = function() {
            var e, t, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e) n = s[t], i = e[t], s !== i && (c && i && (fe.isPlainObject(i) || (r = fe.isArray(i))) ? (r ? (r = !1, o = n && fe.isArray(n) ? n : []) : o = n && fe.isPlainObject(n) ? n : {}, s[t] = fe.extend(c, o, i)) : void 0 !== i && (s[t] = i));
            return s
        }, fe.extend({
            expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === fe.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = fe.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            },
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || ue.call(n) !== de))
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[le.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                n(e)
            },
            camelCase: function(e) {
                return e.replace(ge, "ms-").replace(ve, ye)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (i(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(me, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (i(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : se.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var r, o, s = 0,
                    a = [];
                if (i(e))
                    for (r = e.length; s < r; s++) o = t(e[s], s, n), null != o && a.push(o);
                else
                    for (s in e) o = t(e[s], s, n), null != o && a.push(o);
                return re.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return i = ie.call(arguments, 2), r = function() {
                    return e.apply(t || this, i.concat(ie.call(arguments)))
                }, r.guid = e.guid = e.guid || fe.guid++, r
            },
            now: Date.now,
            support: he
        }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ee[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ae["[object " + t + "]"] = t.toLowerCase()
        });
        var be = function(e) {
            function t(e, t, n, i) {
                var r, o, s, a, l, c, u, h = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!i && ((t ? t.ownerDocument || t : U) !== I && D(t), t = t || I, O)) {
                    if (11 !== f && (l = ve.exec(e)))
                        if (r = l[1]) {
                            if (9 === f) {
                                if (!(s = t.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (h && (s = h.getElementById(r)) && P(t, s) && s.id === r) return n.push(s), n
                        } else {
                            if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (x.qsa && !V[e + " "] && (!q || !q.test(e))) {
                        if (1 !== f) h = t, u = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(we, xe) : t.setAttribute("id", a = F), c = E(e), o = c.length; o--;) c[o] = "#" + a + " " + p(c[o]);
                            u = c.join(","), h = ye.test(e) && d(t.parentNode) || t
                        }
                        if (u) try {
                            return Z.apply(n, h.querySelectorAll(u)), n
                        } catch (m) {} finally {
                            a === F && t.removeAttribute("id")
                        }
                    }
                }
                return A(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[F] = !0, e
            }

            function r(e) {
                var t = I.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
            }

            function s(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function u(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function d(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }

            function h() {}

            function p(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir,
                    r = t.next,
                    o = r || i,
                    s = n && "parentNode" === o,
                    a = W++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || s) return e(t, n, r);
                    return !1
                } : function(t, n, l) {
                    var c, u, d, h = [H, a];
                    if (l) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || s)
                                if (d = t[F] || (t[F] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                else {
                                    if ((c = u[o]) && c[0] === H && c[1] === a) return h[2] = c[2];
                                    if (u[o] = h, h[2] = e(t, n, l)) return !0
                                } return !1
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }

            function v(e, t, n, i, r) {
                for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                return s
            }

            function y(e, t, n, r, o, s) {
                return r && !r[F] && (r = y(r)), o && !o[F] && (o = y(o, s)), i(function(i, s, a, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = s.length,
                        m = i || g(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? m : v(m, h, e, a, l),
                        b = n ? o || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, b, a, l), r)
                        for (c = v(b, p), r(c, [], a, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? ee(i, d) : h[u]) > -1 && (i[c] = !(s[c] = d))
                        }
                    } else b = v(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : Z.apply(s, b)
                })
            }

            function b(e) {
                for (var t, n, i, r = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                        return e === t
                    }, s, !0), c = f(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), u = [function(e, n, i) {
                        var r = !o && (i || n !== R) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                        return t = null, r
                    }]; a < r; a++)
                    if (n = C.relative[e[a].type]) u = [f(m(u), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                            for (i = ++a; i < r && !C.relative[e[i].type]; i++);
                            return y(a > 1 && m(u), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, a < i && b(e.slice(a, i)), i < r && b(e = e.slice(i)), i < r && p(e))
                        }
                        u.push(n)
                    }
                return m(u)
            }

            function $(e, n) {
                var r = n.length > 0,
                    o = e.length > 0,
                    s = function(i, s, a, l, c) {
                        var u, d, h, p = 0,
                            f = "0",
                            m = i && [],
                            g = [],
                            y = R,
                            b = i || o && C.find.TAG("*", c),
                            $ = H += null == y ? 1 : Math.random() || .1,
                            w = b.length;
                        for (c && (R = s === I || s || c); f !== w && null != (u = b[f]); f++) {
                            if (o && u) {
                                for (d = 0, s || u.ownerDocument === I || (D(u), a = !O); h = e[d++];)
                                    if (h(u, s || I, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (H = $)
                            }
                            r && ((u = !h && u) && p--, i && m.push(u))
                        }
                        if (p += f, r && f !== p) {
                            for (d = 0; h = n[d++];) h(m, g, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; f--;) m[f] || g[f] || (g[f] = X.call(l));
                                g = v(g)
                            }
                            Z.apply(l, g), c && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (H = $, R = y), m
                    };
                return r ? i(s) : s
            }
            var w, x, C, T, k, E, S, A, R, _, N, D, I, L, O, q, j, M, P, F = "sizzle" + 1 * new Date,
                U = e.document,
                H = 0,
                W = 0,
                B = n(),
                z = n(),
                V = n(),
                Q = function(e, t) {
                    return e === t && (N = !0), 0
                },
                G = {}.hasOwnProperty,
                Y = [],
                X = Y.pop,
                K = Y.push,
                Z = Y.push,
                J = Y.slice,
                ee = function(e, t) {
                    for (var n = 0, i = e.length; n < i; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
                se = new RegExp(ne + "+", "g"),
                ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                le = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(oe),
                he = new RegExp("^" + ie + "$"),
                pe = {
                    ID: new RegExp("^#(" + ie + ")"),
                    CLASS: new RegExp("^\\.(" + ie + ")"),
                    TAG: new RegExp("^(" + ie + "|[*])"),
                    ATTR: new RegExp("^" + re),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + te + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                me = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ye = /[+~]/,
                be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                $e = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                xe = function(e, t) {
                    return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                },
                Ce = function() {
                    D()
                },
                Te = f(function(e) {
                    return e.disabled === !0 && ("form" in e || "label" in e)
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Z.apply(Y = J.call(U.childNodes), U.childNodes), Y[U.childNodes.length].nodeType
            } catch (ke) {
                Z = {
                    apply: Y.length ? function(e, t) {
                        K.apply(e, J.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            x = t.support = {}, k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, D = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : U;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = I.documentElement, O = !k(I), U !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), x.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = r(function(e) {
                    return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(I.getElementsByClassName), x.getById = r(function(e) {
                    return L.appendChild(e).id = F, !I.getElementsByName || !I.getElementsByName(F).length
                }), x.getById ? (C.filter.ID = function(e) {
                    var t = e.replace(be, $e);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (C.filter.ID = function(e) {
                    var t = e.replace(be, $e);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, C.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && O) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                        }
                        return []
                    }
                }), C.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, C.find.CLASS = x.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
                }, j = [], q = [], (x.qsa = ge.test(I.querySelectorAll)) && (r(function(e) {
                    L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
                }), r(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = I.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                })), (x.matchesSelector = ge.test(M = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(e) {
                    x.disconnectedMatch = M.call(e, "*"), M.call(e, "[s!='']:x"), j.push("!=", oe)
                }), q = q.length && new RegExp(q.join("|")), j = j.length && new RegExp(j.join("|")), t = ge.test(L.compareDocumentPosition), P = t || ge.test(L.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Q = t ? function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === U && P(U, e) ? -1 : t === I || t.ownerDocument === U && P(U, t) ? 1 : _ ? ee(_, e) - ee(_, t) : 0 : 4 & n ? -1 : 1);
                } : function(e, t) {
                    if (e === t) return N = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!r || !o) return e === I ? -1 : t === I ? 1 : r ? -1 : o ? 1 : _ ? ee(_, e) - ee(_, t) : 0;
                    if (r === o) return s(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; a[i] === l[i];) i++;
                    return i ? s(a[i], l[i]) : a[i] === U ? -1 : l[i] === U ? 1 : 0
                }, I) : I
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== I && D(e), n = n.replace(ue, "='$1']"), x.matchesSelector && O && !V[n + " "] && (!j || !j.test(n)) && (!q || !q.test(n))) try {
                    var i = M.call(e, n);
                    if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (r) {}
                return t(n, I, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== I && D(e), P(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== I && D(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                return void 0 !== i ? i : x.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.escape = function(e) {
                return (e + "").replace(we, xe)
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (N = !x.detectDuplicates, _ = !x.sortStable && e.slice(0), e.sort(Q), N) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return _ = null, e
            }, T = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += T(t);
                return n
            }, C = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, $e), e[3] = (e[3] || e[4] || e[5] || "").replace(be, $e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, $e).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, h, p, f, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = t; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (h = g, d = h[F] || (h[F] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[e] || [], p = c[0] === H && c[1], b = p && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (b = p = 0) || f.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [H, p, b];
                                            break
                                        }
                                } else if (y && (h = t, d = h[F] || (h[F] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), c = u[e] || [], p = c[0] === H && c[1], b = p), b === !1)
                                    for (;
                                        (h = ++p && h && h[m] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[F] || (h[F] = {}), u = d[h.uniqueID] || (d[h.uniqueID] = {}), u[e] = [H, b]), h !== t)););
                                return b -= r, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = S(e.replace(ae, "$1"));
                        return r[F] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(be, $e),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, $e).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return me.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = l(w);
            return h.prototype = C.filters = C.pseudos, C.setFilters = new h, E = t.tokenize = function(e, n) {
                var i, r, o, s, a, l, c, u = z[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (a = e, l = [], c = C.preFilter; a;) {
                    i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ce.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(ae, " ")
                    }), a = a.slice(i.length));
                    for (s in C.filter) !(r = pe[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
            }, S = t.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = V[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = b(t[n]), o[F] ? i.push(o) : r.push(o);
                    o = V(e, $(r, i)), o.selector = e
                }
                return o
            }, A = t.select = function(e, t, n, i) {
                var r, o, s, a, l, c = "function" == typeof e && e,
                    u = !i && E(e = c.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && O && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(be, $e), t) || [])[0], !t) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !C.relative[a = s.type]);)
                        if ((l = C.find[a]) && (i = l(s.matches[0].replace(be, $e), ye.test(o[0].type) && d(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = i.length && p(o), !e) return Z.apply(n, i), n;
                            break
                        }
                }
                return (c || S(e, u))(i, t, !O, n, !t || ye.test(e) && d(t.parentNode) || t), n
            }, x.sortStable = F.split("").sort(Q).join("") === F, x.detectDuplicates = !!N, D(), x.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var i;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        fe.find = be, fe.expr = be.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = be.uniqueSort, fe.text = be.getText, fe.isXMLDoc = be.isXML, fe.contains = be.contains, fe.escapeSelector = be.escape;
        var $e = function(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && fe(e).is(n)) break;
                        i.push(e)
                    }
                return i
            },
            we = function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            },
            xe = fe.expr.match.needsContext,
            Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Te = /^.[^:#\[\.,]*$/;
        fe.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, fe.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (fe.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, r[t], n);
                return i > 1 ? fe.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function(e) {
                return !!r(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length
            }
        });
        var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            Se = fe.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || ke, "string" == typeof e) {
                    if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(i[1]) && fe.isPlainObject(t))
                            for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
                }
                return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this)
            };
        Se.prototype = fe.fn, ke = fe(te);
        var Ae = /^(?:parents|prev(?:Until|All))/,
            Re = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        fe.fn.extend({
            has: function(e) {
                var t = fe(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (fe.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof e && fe(e);
                if (!xe.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? se.call(fe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), fe.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return $e(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return $e(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return $e(e, "nextSibling")
            },
            prevAll: function(e) {
                return $e(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return $e(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return $e(e, "previousSibling", n)
            },
            siblings: function(e) {
                return we((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return we(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || fe.merge([], e.childNodes)
            }
        }, function(e, t) {
            fe.fn[e] = function(n, i) {
                var r = fe.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Re[e] || fe.uniqueSort(r), Ae.test(e) && r.reverse()), this.pushStack(r)
            }
        });
        var _e = /[^\x20\t\r\n\f]+/g;
        fe.Callbacks = function(e) {
            e = "string" == typeof e ? s(e) : fe.extend({}, e);
            var t, n, i, r, o = [],
                a = [],
                l = -1,
                c = function() {
                    for (r = e.once, i = t = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                    e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                },
                u = {
                    add: function() {
                        return o && (n && !t && (l = o.length - 1, a.push(n)), function i(t) {
                            fe.each(t, function(t, n) {
                                fe.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== fe.type(n) && i(n)
                            })
                        }(arguments), n && !t && c()), this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var n;
                                (n = fe.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(e) {
                        return e ? fe.inArray(e, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return r = a = [], o = n = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return r = a = [], n || t || (o = n = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, n) {
                        return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, fe.extend({
            Deferred: function(t) {
                var n = [
                        ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
                        ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    r = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        "catch": function(e) {
                            return r.then(null, e)
                        },
                        pipe: function() {
                            var e = arguments;
                            return fe.Deferred(function(t) {
                                fe.each(n, function(n, i) {
                                    var r = fe.isFunction(e[i[4]]) && e[i[4]];
                                    o[i[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        then: function(t, i, r) {
                            function o(t, n, i, r) {
                                return function() {
                                    var c = this,
                                        u = arguments,
                                        d = function() {
                                            var e, d;
                                            if (!(t < s)) {
                                                if (e = i.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(d) ? r ? d.call(e, o(s, n, a, r), o(s, n, l, r)) : (s++, d.call(e, o(s, n, a, r), o(s, n, l, r), o(s, n, a, n.notifyWith))) : (i !== a && (c = void 0, u = [e]), (r || n.resolveWith)(c, u))
                                            }
                                        },
                                        h = r ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, h.stackTrace), t + 1 >= s && (i !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
                                            }
                                        };
                                    t ? h() : (fe.Deferred.getStackHook && (h.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(h))
                                }
                            }
                            var s = 0;
                            return fe.Deferred(function(e) {
                                n[0][3].add(o(0, e, fe.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, fe.isFunction(t) ? t : a)), n[2][3].add(o(0, e, fe.isFunction(i) ? i : l))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, r) : r
                        }
                    },
                    o = {};
                return fe.each(n, function(e, t) {
                    var s = t[2],
                        a = t[5];
                    r[t[1]] = s.add, a && s.add(function() {
                        i = a
                    }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() {
                        return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[t[0] + "With"] = s.fireWith
                }), r.promise(o), t && t.call(o, o), o
            },
            when: function(e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    r = ie.call(arguments),
                    o = fe.Deferred(),
                    s = function(e) {
                        return function(n) {
                            i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r)
                        }
                    };
                if (t <= 1 && (c(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || fe.isFunction(r[n] && r[n].then))) return o.then();
                for (; n--;) c(r[n], s(n), o.reject);
                return o.promise()
            }
        });
        var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        fe.Deferred.exceptionHook = function(t, n) {
            e.console && e.console.warn && t && Ne.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
        }, fe.readyException = function(t) {
            e.setTimeout(function() {
                throw t
            })
        };
        var De = fe.Deferred();
        fe.fn.ready = function(e) {
            return De.then(e)["catch"](function(e) {
                fe.readyException(e)
            }), this
        }, fe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? fe.readyWait++ : fe.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || De.resolveWith(te, [fe]))
            }
        }), fe.ready.then = De.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(fe.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
        var Ie = function(e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === fe.type(n)) {
                    r = !0;
                    for (a in n) Ie(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, fe.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(fe(e), n)
                    })), t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
            },
            Le = function(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            };
        d.uid = 1, d.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[fe.camelCase(t)] = n;
                else
                    for (i in t) r[fe.camelCase(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        fe.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t), t = t in i ? [t] : t.match(_e) || []), n = t.length;
                        for (; n--;) delete i[t[n]]
                    }(void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !fe.isEmptyObject(t)
            }
        };
        var Oe = new d,
            qe = new d,
            je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Me = /[A-Z]/g;
        fe.extend({
            hasData: function(e) {
                return qe.hasData(e) || Oe.hasData(e)
            },
            data: function(e, t, n) {
                return qe.access(e, t, n)
            },
            removeData: function(e, t) {
                qe.remove(e, t)
            },
            _data: function(e, t, n) {
                return Oe.access(e, t, n)
            },
            _removeData: function(e, t) {
                Oe.remove(e, t)
            }
        }), fe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = qe.get(o), 1 === o.nodeType && !Oe.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), p(o, i, r[i])));
                        Oe.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    qe.set(this, e)
                }) : Ie(this, function(t) {
                    var n;
                    if (o && void 0 === t) {
                        if (n = qe.get(o, e), void 0 !== n) return n;
                        if (n = p(o, e), void 0 !== n) return n
                    } else this.each(function() {
                        qe.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    qe.remove(this, e)
                })
            }
        }), fe.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = Oe.get(e, t), n && (!i || fe.isArray(n) ? i = Oe.access(e, t, fe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = fe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = fe._queueHooks(e, t),
                    s = function() {
                        fe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Oe.get(e, n) || Oe.access(e, n, {
                    empty: fe.Callbacks("once memory").add(function() {
                        Oe.remove(e, [t + "queue", n])
                    })
                })
            }
        }), fe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = fe.queue(this, e, t);
                    fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = fe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Oe.get(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        });
        var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Fe = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
            Ue = ["Top", "Right", "Bottom", "Left"],
            He = function(e, t) {
                return e = t || e, "none" === e.style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
            },
            We = function(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = s[o];
                return r
            },
            Be = {};
        fe.fn.extend({
            show: function() {
                return g(this, !0)
            },
            hide: function() {
                return g(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    He(this) ? fe(this).show() : fe(this).hide()
                })
            }
        });
        var ze = /^(?:checkbox|radio)$/i,
            Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Qe = /^$|\/(?:java|ecma)script/i,
            Ge = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
        var Ye = /<|&#?\w+;/;
        ! function() {
            var e = te.createDocumentFragment(),
                t = e.appendChild(te.createElement("div")),
                n = te.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Xe = te.documentElement,
            Ke = /^key/,
            Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Je = /^([^.]*)(?:\.(.+)|)/;
        fe.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, s, a, l, c, u, d, h, p, f, m, g = Oe.get(e);
                if (g)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), r && fe.find.matchesSelector(Xe, r), n.guid || (n.guid = fe.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                            return "undefined" != typeof fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
                        }), t = (t || "").match(_e) || [""], c = t.length; c--;) a = Je.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (d = fe.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = fe.event.special[p] || {}, u = fe.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && fe.expr.match.needsContext.test(r),
                        namespace: f.join(".")
                    }, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, d.setup && d.setup.call(e, i, f, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), fe.event.global[p] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, l, c, u, d, h, p, f, m, g = Oe.hasData(e) && Oe.get(e);
                if (g && (l = g.events)) {
                    for (t = (t || "").match(_e) || [""], c = t.length; c--;)
                        if (a = Je.exec(t[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = fe.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                            s && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || fe.removeEvent(e, p, g.handle), delete l[p])
                        } else
                            for (p in l) fe.event.remove(e, p + t[c], n, i, !0);
                    fe.isEmptyObject(l) && Oe.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, o, s, a = fe.event.fix(e),
                    l = new Array(arguments.length),
                    c = (Oe.get(this, "events") || {})[a.type] || [],
                    u = fe.event.special[a.type] || {};
                for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                    for (s = fe.event.handlers.call(this, a, c), t = 0;
                        (r = s[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s, a = [],
                    l = t.delegateCount,
                    c = e.target;
                if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                            for (o = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? fe(r, this).index(c) > -1 : fe.find(r, this, null, [c]).length), s[r] && o.push(i);
                            o.length && a.push({
                                elem: c,
                                handlers: o
                            })
                        }
                return c = this, l < t.length && a.push({
                    elem: c,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(e, t) {
                Object.defineProperty(fe.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: fe.isFunction(t) ? function() {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            },
            fix: function(e) {
                return e[fe.expando] ? e : new fe.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== x() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === x() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && fe.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(e) {
                        return fe.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, fe.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, fe.Event = function(e, t) {
            return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? $ : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
        }, fe.Event.prototype = {
            constructor: fe.Event,
            isDefaultPrevented: w,
            isPropagationStopped: w,
            isImmediatePropagationStopped: w,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = $, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = $, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = $, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, fe.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, fe.event.addProp), fe.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            fe.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    return r && (r === i || fe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), fe.fn.extend({
            on: function(e, t, n, i) {
                return C(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return C(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function() {
                    fe.event.remove(this, e, n, t)
                })
            }
        });
        var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            tt = /<script|<style|<link/i,
            nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            it = /^true\/(.*)/,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        fe.extend({
            htmlPrefilter: function(e) {
                return e.replace(et, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, s, a = e.cloneNode(!0),
                    l = fe.contains(e.ownerDocument, e);
                if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                    for (s = v(a), o = v(e), i = 0, r = o.length; i < r; i++) A(o[i], s[i]);
                if (t)
                    if (n)
                        for (o = o || v(e), s = s || v(a), i = 0, r = o.length; i < r; i++) S(o[i], s[i]);
                    else S(e, a);
                return s = v(a, "script"), s.length > 0 && y(s, !l && v(e, "script")), a
            },
            cleanData: function(e) {
                for (var t, n, i, r = fe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Le(n)) {
                        if (t = n[Oe.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
                            n[Oe.expando] = void 0
                        }
                        n[qe.expando] && (n[qe.expando] = void 0)
                    }
            }
        }), fe.fn.extend({
            detach: function(e) {
                return _(this, e, !0)
            },
            remove: function(e) {
                return _(this, e)
            },
            text: function(e) {
                return Ie(this, function(e) {
                    return void 0 === e ? fe.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return R(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return R(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = T(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return R(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return R(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(v(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return fe.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ie(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !tt.test(e) && !Ge[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = fe.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return R(this, arguments, function(t) {
                    var n = this.parentNode;
                    fe.inArray(this, e) < 0 && (fe.cleanData(v(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), fe.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            fe.fn[e] = function(e) {
                for (var n, i = [], r = fe(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), fe(r[s])[t](n), oe.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var ot = /^margin/,
            st = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
            at = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e), n.getComputedStyle(t)
            };
        ! function() {
            function t() {
                if (a) {
                    a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Xe.appendChild(s);
                    var t = e.getComputedStyle(a);
                    n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Xe.removeChild(s), a = null
                }
            }
            var n, i, r, o, s = te.createElement("div"),
                a = te.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), fe.extend(he, {
                pixelPosition: function() {
                    return t(), n
                },
                boxSizingReliable: function() {
                    return t(), i
                },
                pixelMarginRight: function() {
                    return t(), r
                },
                reliableMarginLeft: function() {
                    return t(), o
                }
            }))
        }();
        var lt = /^(none|table(?!-c[ea]).+)/,
            ct = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            dt = ["Webkit", "Moz", "ms"],
            ht = te.createElement("div").style;
        fe.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = N(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = fe.camelCase(t),
                        l = e.style;
                    return t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Fe.exec(n)) && r[1] && (n = f(e, t, r), o = "number"), void(null != n && n === n && ("number" === o && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
                }
            },
            css: function(e, t, n, i) {
                var r, o, s, a = fe.camelCase(t);
                return t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = N(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
            }
        }), fe.each(["height", "width"], function(e, t) {
            fe.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return !lt.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, i) : We(e, ct, function() {
                        return q(e, t, i)
                    })
                },
                set: function(e, n, i) {
                    var r, o = i && at(e),
                        s = i && O(e, t, i, "border-box" === fe.css(e, "boxSizing", !1, o), o);
                    return s && (r = Fe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), L(e, n, s)
                }
            }
        }), fe.cssHooks.marginLeft = D(he.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            fe.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Ue[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, ot.test(e) || (fe.cssHooks[e + t].set = L)
        }), fe.fn.extend({
            css: function(e, t) {
                return Ie(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (fe.isArray(t)) {
                        for (i = at(e), r = t.length; s < r; s++) o[t[s]] = fe.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), fe.Tween = j, j.prototype = {
            constructor: j,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = j.propHooks[this.prop];
                return e && e.get ? e.get(this) : j.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = j.propHooks[this.prop];
                return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
            }
        }, j.prototype.init.prototype = j.prototype, j.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, j.propHooks.scrollTop = j.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = j.prototype.init, fe.fx.step = {};
        var pt, ft, mt = /^(?:toggle|show|hide)$/,
            gt = /queueHooks$/;
        fe.Animation = fe.extend(B, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return f(n.elem, e, Fe.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
                },
                prefilters: [H],
                prefilter: function(e, t) {
                    t ? B.prefilters.unshift(e) : B.prefilters.push(e)
                }
            }), fe.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? fe.extend({}, e) : {
                    complete: n || !n && t || fe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !fe.isFunction(t) && t
                };
                return fe.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
                }, i
            }, fe.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(He).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var r = fe.isEmptyObject(e),
                        o = fe.speed(t, n, i),
                        s = function() {
                            var t = B(this, fe.extend({}, e), o);
                            (r || Oe.get(this, "finish")) && t.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = fe.timers,
                            s = Oe.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && gt.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                        !t && n || fe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, n = Oe.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = fe.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), fe.each(["toggle", "show", "hide"], function(e, t) {
                var n = fe.fn[t];
                fe.fn[t] = function(e, i, r) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, r)
                }
            }), fe.each({
                slideDown: F("show"),
                slideUp: F("hide"),
                slideToggle: F("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                fe.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), fe.timers = [], fe.fx.tick = function() {
                var e, t = 0,
                    n = fe.timers;
                for (pt = fe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
                n.length || fe.fx.stop(), pt = void 0
            }, fe.fx.timer = function(e) {
                fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
            }, fe.fx.interval = 13, fe.fx.start = function() {
                ft || (ft = e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setInterval(fe.fx.tick, fe.fx.interval))
            }, fe.fx.stop = function() {
                e.cancelAnimationFrame ? e.cancelAnimationFrame(ft) : e.clearInterval(ft), ft = null
            }, fe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, fe.fn.delay = function(t, n) {
                return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function() {
                        e.clearTimeout(r)
                    }
                })
            },
            function() {
                var e = te.createElement("input"),
                    t = te.createElement("select"),
                    n = t.appendChild(te.createElement("option"));
                e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", he.radioValue = "t" === e.value
            }();
        var vt, yt = fe.expr.attrHandle;
        fe.fn.extend({
            attr: function(e, t) {
                return Ie(this, fe.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    fe.removeAttr(this, e)
                })
            }
        }), fe.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!he.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    r = t && t.match(_e);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), vt = {
            set: function(e, t, n) {
                return t === !1 ? fe.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = yt[t] || fe.find.attr;
            yt[t] = function(e, t, i) {
                var r, o, s = t.toLowerCase();
                return i || (o = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = o), r
            }
        });
        var bt = /^(?:input|select|textarea|button)$/i,
            $t = /^(?:a|area)$/i;
        fe.fn.extend({
            prop: function(e, t) {
                return Ie(this, fe.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[fe.propFix[e] || e]
                })
            }
        }), fe.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = fe.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : bt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), he.optSelected || (fe.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            fe.propFix[this.toLowerCase()] = this
        }), fe.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, V(this)))
                });
                if ("string" == typeof e && e)
                    for (t = e.match(_e) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && " " + z(r) + " ") {
                            for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = z(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s, a, l = 0;
                if (fe.isFunction(e)) return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, V(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(_e) || []; n = this[l++];)
                        if (r = V(n), i = 1 === n.nodeType && " " + z(r) + " ") {
                            for (s = 0; o = t[s++];)
                                for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                            a = z(i), r !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                    fe(this).toggleClass(e.call(this, n, V(this), t), t)
                }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = fe(this), o = e.match(_e) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = V(this), t && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Oe.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + z(V(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var wt = /\r/g;
        fe.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                return arguments.length ? (i = fe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, fe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : fe.isArray(r) && (r = fe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                })) : r ? (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
            }
        }), fe.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = fe.find.attr(e, "value");
                        return null != t ? t : z(fe.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r = e.options,
                            o = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? o + 1 : r.length;
                        for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                            if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                if (t = fe(n).val(), s) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = fe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = fe.inArray(fe.valHooks.option.get(i), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), fe.each(["radio", "checkbox"], function() {
            fe.valHooks[this] = {
                set: function(e, t) {
                    if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
                }
            }, he.checkOn || (fe.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var xt = /^(?:focusinfocus|focusoutblur)$/;
        fe.extend(fe.event, {
            trigger: function(t, n, i, r) {
                var o, s, a, l, c, u, d, h = [i || te],
                    p = ce.call(t, "type") ? t.type : t,
                    f = ce.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(p + fe.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[fe.expando] ? t : new fe.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), d = fe.event.special[p] || {}, r || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!r && !d.noBubble && !fe.isWindow(i)) {
                        for (l = d.delegateType || p, xt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                        a === (i.ownerDocument || te) && h.push(a.defaultView || a.parentWindow || e)
                    }
                    for (o = 0;
                        (s = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || p, u = (Oe.get(s, "events") || {})[t.type] && Oe.get(s, "handle"), u && u.apply(s, n), u = c && s[c], u && u.apply && Le(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                    return t.type = p, r || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !Le(i) || c && fe.isFunction(i[p]) && !fe.isWindow(i) && (a = i[c], a && (i[c] = null), fe.event.triggered = p, i[p](), fe.event.triggered = void 0, a && (i[c] = a)), t.result
                }
            },
            simulate: function(e, t, n) {
                var i = fe.extend(new fe.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                fe.event.trigger(i, null, t)
            }
        }), fe.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    fe.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return fe.event.trigger(e, t, n, !0)
            }
        }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
            fe.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), fe.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), he.focusin = "onfocusin" in e, he.focusin || fe.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                fe.event.simulate(t, e.target, fe.event.fix(e))
            };
            fe.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = Oe.access(i, t);
                    r || i.addEventListener(e, n, !0), Oe.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = Oe.access(i, t) - 1;
                    r ? Oe.access(i, t, r) : (i.removeEventListener(e, n, !0), Oe.remove(i, t))
                }
            }
        });
        var Ct = e.location,
            Tt = fe.now(),
            kt = /\?/;
        fe.parseXML = function(t) {
            var n;
            if (!t || "string" != typeof t) return null;
            try {
                n = (new e.DOMParser).parseFromString(t, "text/xml")
            } catch (i) {
                n = void 0
            }
            return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
        };
        var Et = /\[\]$/,
            St = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Rt = /^(?:input|select|textarea|keygen)/i;
        fe.param = function(e, t) {
            var n, i = [],
                r = function(e, t) {
                    var n = fe.isFunction(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (n in e) Q(n, e[n], t, r);
            return i.join("&")
        }, fe.fn.extend({
            serialize: function() {
                return fe.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !fe(this).is(":disabled") && Rt.test(this.nodeName) && !At.test(e) && (this.checked || !ze.test(e))
                }).map(function(e, t) {
                    var n = fe(this).val();
                    return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                }).get()
            }
        });
        var _t = /%20/g,
            Nt = /#.*$/,
            Dt = /([?&])_=[^&]*/,
            It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ot = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            jt = {},
            Mt = {},
            Pt = "*/".concat("*"),
            Ft = te.createElement("a");
        Ft.href = Ct.href, fe.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: Lt.test(Ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Pt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": fe.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? X(X(e, fe.ajaxSettings), t) : X(fe.ajaxSettings, e)
            },
            ajaxPrefilter: G(jt),
            ajaxTransport: G(Mt),
            ajax: function(t, n) {
                function i(t, n, i, a) {
                    var c, h, p, $, w, x = n;
                    u || (u = !0, l && e.clearTimeout(l), r = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && ($ = K(f, C, i)), $ = Z(f, $, C, c), c ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (fe.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (fe.etag[o] = w)), 204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = $.state, h = $.data, p = $.error, c = !p)) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || x) + "", c ? v.resolveWith(m, [h, x, C]) : v.rejectWith(m, [C, x, p]), C.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? h : p]), y.fireWith(m, [C, x]), d && (g.trigger("ajaxComplete", [C, f]), --fe.active || fe.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = void 0), n = n || {};
                var r, o, s, a, l, c, u, d, h, p, f = fe.ajaxSetup({}, n),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? fe(m) : fe.event,
                    v = fe.Deferred(),
                    y = fe.Callbacks("once memory"),
                    b = f.statusCode || {},
                    $ = {},
                    w = {},
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (u) {
                                if (!a)
                                    for (a = {}; t = It.exec(s);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return u ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, $[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == u && (f.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (u) C.always(e[C.status]);
                                else
                                    for (t in e) b[t] = [b[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (v.promise(C), f.url = ((t || f.url || Ct.href) + "").replace(qt, Ct.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(_e) || [""], null == f.crossDomain) {
                    c = te.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
                    } catch (T) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = fe.param(f.data, f.traditional)), Y(jt, f, n, C), u) return C;
                d = fe.event && f.global, d && 0 === fe.active++ && fe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), o = f.url.replace(Nt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(_t, "+")) : (p = f.url.slice(o.length), f.data && (o += (kt.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(Dt, "$1"), p = (kt.test(o) ? "&" : "?") + "_=" + Tt++ + p), f.url = o + p), f.ifModified && (fe.lastModified[o] && C.setRequestHeader("If-Modified-Since", fe.lastModified[o]), fe.etag[o] && C.setRequestHeader("If-None-Match", fe.etag[o])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : f.accepts["*"]);
                for (h in f.headers) C.setRequestHeader(h, f.headers[h]);
                if (f.beforeSend && (f.beforeSend.call(m, C, f) === !1 || u)) return C.abort();
                if (x = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), r = Y(Mt, f, n, C)) {
                    if (C.readyState = 1, d && g.trigger("ajaxSend", [C, f]), u) return C;
                    f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        u = !1, r.send($, i)
                    } catch (T) {
                        if (u) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return fe.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return fe.get(e, void 0, t, "script")
            }
        }), fe.each(["get", "post"], function(e, t) {
            fe[t] = function(e, n, i, r) {
                return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, fe.isPlainObject(e) && e))
            }
        }), fe._evalUrl = function(e) {
            return fe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, fe.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(e) {
                return fe.isFunction(e) ? this.each(function(t) {
                    fe(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = fe(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = fe.isFunction(e);
                return this.each(function(n) {
                    fe(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    fe(this).replaceWith(this.childNodes)
                }), this
            }
        }), fe.expr.pseudos.hidden = function(e) {
            return !fe.expr.pseudos.visible(e)
        }, fe.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, fe.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        };
        var Ut = {
                0: 200,
                1223: 204
            },
            Ht = fe.ajaxSettings.xhr();
        he.cors = !!Ht && "withCredentials" in Ht, he.ajax = Ht = !!Ht, fe.ajaxTransport(function(t) {
            var n, i;
            if (he.cors || Ht && !t.crossDomain) return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (s in r) a.setRequestHeader(s, r[s]);
                    n = function(e) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Ut[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && i()
                        })
                    }, n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (n) throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
        }), fe.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), fe.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return fe.globalEval(e), e
                }
            }
        }), fe.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), fe.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(i, r) {
                        t = fe("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                        }), te.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Wt = [],
            Bt = /(=)\?(?=&|$)|\?\?/;
        fe.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Wt.pop() || fe.expando + "_" + Tt++;
                return this[e] = !0, e
            }
        }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, o, s, a = t.jsonp !== !1 && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
            if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Bt, "$1" + r) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
                return s || fe.error(r + " was not called"), s[0]
            }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? fe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Wt.push(r)), s && fe.isFunction(o) && o(s[0]), s = o = void 0
            }), "script"
        }), he.createHTMLDocument = function() {
            var e = te.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
        }(), fe.parseHTML = function(e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && (n = t, t = !1);
            var i, r, o;
            return t || (he.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ce.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && fe(o).remove(), fe.merge([], r.childNodes))
        }, fe.fn.load = function(e, t, n) {
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return a > -1 && (i = z(e.slice(a)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            fe.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), fe.expr.pseudos.animated = function(e) {
            return fe.grep(fe.timers, function(t) {
                return e === t.elem
            }).length
        }, fe.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a, l, c, u = fe.css(e, "position"),
                    d = fe(e),
                    h = {};
                "static" === u && (e.style.position = "relative"), a = d.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
            }
        }, fe.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
                var t, n, i, r, o = this[0];
                return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = J(r), t = r.documentElement, {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (i = e.offset()), i = {
                        top: i.top + fe.css(e[0], "borderTopWidth", !0),
                        left: i.left + fe.css(e[0], "borderLeftWidth", !0)
                    }), {
                        top: t.top - i.top - fe.css(n, "marginTop", !0),
                        left: t.left - i.left - fe.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
                    return e || Xe
                })
            }
        }), fe.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            fe.fn[e] = function(i) {
                return Ie(this, function(e, i, r) {
                    var o = J(e);
                    return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
                }, e, i, arguments.length)
            }
        }), fe.each(["top", "left"], function(e, t) {
            fe.cssHooks[t] = D(he.pixelPosition, function(e, n) {
                if (n) return n = N(e, t), st.test(n) ? fe(e).position()[t] + "px" : n
            })
        }), fe.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            fe.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                fe.fn[i] = function(r, o) {
                    var s = arguments.length && (n || "boolean" != typeof r),
                        a = n || (r === !0 || o === !0 ? "margin" : "border");
                    return Ie(this, function(t, n, r) {
                        var o;
                        return fe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? fe.css(t, n, a) : fe.style(t, n, r, a)
                    }, t, s ? r : void 0, s)
                }
            })
        }), fe.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), fe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
            return fe
        });
        var zt = e.jQuery,
            Vt = e.$;
        return fe.noConflict = function(t) {
            return e.$ === fe && (e.$ = Vt), t && e.jQuery === fe && (e.jQuery = zt), fe
        }, t || (e.jQuery = e.$ = fe), fe
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(r, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = e("#" === o ? [] : o);
        t && t.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), e.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.button"),
                o = "object" == typeof t && t;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == t ? r.toggle() : t && r.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        t += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(e.proxy(function() {
            i[r](null == o[t] ? this.options[t] : o[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.carousel"),
                o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                s = "string" == typeof t ? t : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof t ? r.to(t) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t),
            i = "prev" == e && 0 === n || "next" == e && n == this.$items.length - 1;
        if (i && !this.options.wrap) return t;
        var r = "prev" == e ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(t, r),
            s = this.interval,
            a = "next" == t ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var c = o[0],
            u = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = e(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var h = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return e.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([t, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = e(this),
            o = e(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = e.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), t.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.collapse"),
                o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof t && r[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (t = r.data("bs.collapse"), t && t.transitioning))) {
                var o = e.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), t || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return a.call(this);
                    var l = e.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var r = e(i);
            this.addAriaAndCollapsedClass(t(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = r, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = e(this);
        r.attr("data-target") || i.preventDefault();
        var o = t(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(r).remove(), e(o).each(function() {
            var i = e(this),
                r = t(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(r[0], n.target) || (r.trigger(n = e.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(e.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
            var o = t(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = e.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = t(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = s, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = a, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var r = e(this),
                o = r.data("bs.modal"),
                s = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof t ? o[t](i) : s.show && o.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && r;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            r = i.attr("href"),
            o = e(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(o, s, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + h > f.bottom ? "top" : "top" == a && u.top - h < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, d, h);
            this.applyPlacement(m, a);
            var g = function() {
                var e = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == e && r.leave(r)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != o && (t.top = t.top + o - c);
        var u = this.getViewportAdjustedDelta(n, t, l, c);
        u.left ? t.left += u.left : t.top += u.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * u.left - r + l : 2 * u.top - o + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][p], d)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), t && t()
        }
        var r = this,
            o = e(this.$tip),
            s = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : o ? null : t.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, r, a, l, s)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll,
                l = t.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var c = t.left - o,
                u = t.left + o + n;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
        }
        return r
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.popover"),
                o = "object" == typeof t && t;
            !r && /destroy|hide/.test(t) || (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof t && r[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.pt_js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new t(this, o)), "string" == typeof n && r[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return s != (e = o[o.length - 1]) && this.activate(e);
        if (s && t < r[0]) return this.activeTarget = null, this.clear();
        for (e = r.length; e--;) s != o[e] && t >= r[e] && (void 0 === r[e + 1] || t < r[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                s = e.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), t.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = e(i);
                this.activate(t.closest("li"), n), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = i.find("> .active"),
            a = r && e.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                r = i.data("bs.affix"),
                o = "object" == typeof t && t;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof t && r[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= e - i) && "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            c = a ? s : t;
        return null != n && r <= n ? "top" : null != i && l + c >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1);
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, t, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - t - o
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var n = e.data(this[0], "validator");
            return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                n.settings.submitHandler && (n.submitButton = t.target), e(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.on("submit.validate", function(t) {
                function i() {
                    var i, r;
                    return !n.settings.submitHandler || (n.submitButton && (i = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(e(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && i.remove(), void 0 !== r && r)
                }
                return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
            })), n)
        },
        valid: function() {
            var t, n, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, n = e(this[0].form).validate(), this.each(function() {
                t = n.element(this) && t, t || (i = i.concat(n.errorList))
            }), n.errorList = i), t
        },
        rules: function(t, n) {
            if (this.length) {
                var i, r, o, s, a, l, c = this[0];
                if (t) switch (i = e.data(c.form, "validator").settings, r = i.rules, o = e.validator.staticRules(c), t) {
                    case "add":
                        e.extend(o, e.validator.normalizeRule(n)), delete o.messages, r[c.name] = o, n.messages && (i.messages[c.name] = e.extend(i.messages[c.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, e.each(n.split(/\s/), function(t, n) {
                            l[n] = o[n], delete o[n], "required" === n && e(c).removeAttr("aria-required")
                        }), l) : (delete r[c.name], o)
                }
                return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(c), e.validator.attributeRules(c), e.validator.dataRules(c), e.validator.staticRules(c)), c), s.required && (a = s.required, delete s.required, s = e.extend({
                    required: a
                }, s), e(c).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = e.extend(s, {
                    remote: a
                })), s
            }
        }
    }), e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            var n = e(t).val();
            return null !== n && !!e.trim("" + n)
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function(t, n) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
    }, e.validator.format = function(t, n) {
        return 1 === arguments.length ? function() {
            var n = e.makeArray(arguments);
            return n.unshift(t), e.validator.format.apply(this, n)
        } : void 0 === n ? t : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return n
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(t, n) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(t) || -1 !== e.inArray(n.keyCode, i) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(i) : e(t).addClass(n).removeClass(i)
            },
            unhighlight: function(t, n, i) {
                "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(i) : e(t).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var n = e.data(this.form, "validator"),
                        i = "on" + t.type.replace(/^validate/, ""),
                        r = n.settings;
                    r[i] && !e(this).is(r.ignore) && r[i].call(n, this, t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};
                e.each(this.settings.groups, function(t, n) {
                    "string" == typeof n && (n = n.split(/\s/)), e.each(n, function(e, n) {
                        i[n] = t
                    })
                }), n = this.settings.rules, e.each(n, function(t, i) {
                    n[t] = e.validator.normalizeRule(i)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var n, i, r = this.clean(t),
                    o = this.validationTargetFor(r),
                    s = this,
                    a = !0;
                return void 0 === o ? delete this.invalid[r.name] : (this.prepareElement(o), this.currentElements = e(o), i = this.groups[o.name], i && e.each(this.groups, function(e, t) {
                    t === i && e !== o.name && (r = s.validationTargetFor(s.clean(s.findByName(e))), r && r.name in s.invalid && (s.currentElements.push(r), a = a && s.check(r)))
                }), n = this.check(o) !== !1, a = a && n, n ? this.invalid[o.name] = !1 : this.invalid[o.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !n)), a
            },
            showErrors: function(t) {
                if (t) {
                    var n = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function(e, t) {
                        return {
                            message: e,
                            element: n.findByName(t)[0]
                        }
                    }), this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || e(this).attr("name");
                    return !i && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0]), !(i in n || !t.objectLength(e(this).rules())) && (n[i] = !0, !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var n, i, r = e(t),
                    o = t.type;
                return "radio" === o || "checkbox" === o ? this.findByName(t.name).filter(":checked").val() : "number" === o && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : r.val() : (n = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === o ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/"), i >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\"), i >= 0 ? n.substr(i + 1) : n)) : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var n, i, r, o = e(t).rules(),
                    s = e.map(o, function(e, t) {
                        return t
                    }).length,
                    a = !1,
                    l = this.elementValue(t);
                if ("function" == typeof o.normalizer) {
                    if (l = o.normalizer.call(t, l), "string" != typeof l) throw new TypeError("The normalizer should return a string value.");
                    delete o.normalizer
                }
                for (i in o) {
                    r = {
                        method: i,
                        parameters: o[i]
                    };
                    try {
                        if (n = e.validator.methods[i].call(this, l, t, r.parameters), "dependency-mismatch" === n && 1 === s) {
                            a = !0;
                            continue
                        }
                        if (a = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!n) return this.formatAndAdd(t, r), !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), c
                    }
                }
                if (!a) return this.objectLength(o) && this.successList.push(t), !0
            },
            customDataMessage: function(t, n) {
                return e(t).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var n = this.settings.messages[e];
                return n && (n.constructor === String ? n : n[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(t, n) {
                var i = this.findDefined(this.customMessage(t.name, n.method), this.customDataMessage(t, n.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, t) : r.test(i) && (i = e.validator.format(i.replace(r, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                var e, t, n;
                for (e = 0; this.errorList[e]; e++) n = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, n) {
                var i, r, o, s, a = this.errorsFor(t),
                    l = this.idOrName(t),
                    c = e(t).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(n)) : (a = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(n || ""), i = a, this.settings.wrapper && (i = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, e(t)) : i.insertAfter(t), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (o = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(o) + "\\b")) || (c += " " + o) : c = o, e(t).attr("aria-describedby", c), r = this.groups[t.name], r && (s = this, e.each(s.groups, function(t, n) {
                    n === r && e("[name='" + s.escapeCssMeta(t) + "']", s.currentForm).attr("aria-describedby", a.attr("id"))
                })))), !n && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, t)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(t) {
                var n = this.escapeCssMeta(this.idOrName(t)),
                    i = e(t).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return e("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, n) {
                    return !!e(t, n.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var n = this.elementValue(t);
                return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            },
            stopRequest: function(t, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(t, n) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, n) {
            t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var n = {},
                i = e(t).attr("class");
            return i && e.each(i.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
            }), n
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(t) {
            var n, i, r = {},
                o = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) "required" === n ? (i = t.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), this.normalizeAttributeRule(r, s, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(t) {
            var n, i, r = {},
                o = e(t),
                s = t.getAttribute("type");
            for (n in e.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), this.normalizeAttributeRule(r, s, n, i);
            return r
        },
        staticRules: function(t) {
            var n = {},
                i = e.data(t.form, "validator");
            return i.settings.rules && (n = e.validator.normalizeRule(i.settings.rules[t.name]) || {}), n
        },
        normalizeRules: function(t, n) {
            return e.each(t, function(i, r) {
                if (r === !1) return void delete t[i];
                if (r.param || r.depends) {
                    var o = !0;
                    switch (typeof r.depends) {
                        case "string":
                            o = !!e(r.depends, n.form).length;
                            break;
                        case "function":
                            o = r.depends.call(n, n)
                    }
                    o ? t[i] = void 0 === r.param || r.param : (e.data(n.form, "validator").resetElements(e(n)), delete t[i])
                }
            }), e.each(t, function(i, r) {
                t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r
            }), e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function() {
                var n;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (n = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(n[0]), Number(n[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var n = {};
                e.each(t.split(/\s/), function() {
                    n[this] = !0
                }), t = n
            }
            return t
        },
        addMethod: function(t, n, i) {
            e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== i ? i : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = e(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(t, n) > 0 : t.length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i
            },
            maxlength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || i >= r
            },
            rangelength: function(t, n, i) {
                var r = e.isArray(t) ? t.length : this.getLength(t, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || e >= n
            },
            max: function(e, t, n) {
                return this.optional(t) || n >= e
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(t, n, i) {
                var r = e(n).attr("type"),
                    o = "Step attribute on input type " + r + " is not supported.",
                    s = ["text", "number", "range"],
                    a = new RegExp("\\b" + r + "\\b"),
                    l = r && !a.test(s.join());
                if (l) throw new Error(o);
                return this.optional(n) || t % i === 0
            },
            equalTo: function(t, n, i) {
                var r = e(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    e(n).valid()
                }), t === r.val()
            },
            remote: function(t, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var o, s, a, l = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = l.message, i = "string" == typeof i && {
                    url: i
                } || i, a = e.param(e.extend({
                    data: t
                }, i.data)), l.old === a ? l.valid : (l.old = a, o = this, this.startRequest(n), s = {}, s[n.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: s,
                    context: o.currentForm,
                    success: function(e) {
                        var i, s, a, c = e === !0 || "true" === e;
                        o.settings.messages[n.name][r] = l.originalMessage, c ? (a = o.formSubmitted, o.resetInternals(), o.toHide = o.errorsFor(n), o.formSubmitted = a, o.successList.push(n), o.invalid[n.name] = !1, o.showErrors()) : (i = {}, s = e || o.defaultMessage(n, {
                            method: r,
                            parameters: t
                        }), i[n.name] = l.message = s, o.invalid[n.name] = !0, o.showErrors(i)), l.valid = c, o.stopRequest(n, c)
                    }
                }, i)), "pending")
            }
        }
    });
    var t, n = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, t, i) {
        var r = e.port;
        "abort" === e.mode && (n[r] && n[r].abort(), n[r] = i)
    }) : (t = e.ajax, e.ajax = function(i) {
        var r = ("mode" in i ? i : e.ajaxSettings).mode,
            o = ("port" in i ? i : e.ajaxSettings).port;
        return "abort" === r ? (n[o] && n[o].abort(), n[o] = t.apply(this, arguments), n[o]) : t.apply(this, arguments)
    })
}),
function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t || n)
}(function(e) {
    var t = function(t, n, i) {
        var r = {
            invalid: [],
            getCaret: function() {
                try {
                    var e, n = 0,
                        i = t.get(0),
                        o = document.selection,
                        s = i.selectionStart;
                    return o && navigator.appVersion.indexOf("MSIE 10") === -1 ? (e = o.createRange(), e.moveStart("character", -r.val().length), n = e.text.length) : (s || "0" === s) && (n = s), n
                } catch (a) {}
            },
            setCaret: function(e) {
                try {
                    if (t.is(":focus")) {
                        var n, i = t.get(0);
                        i.setSelectionRange ? (i.focus(), i.setSelectionRange(e, e)) : (n = i.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
                    }
                } catch (r) {}
            },
            events: function() {
                t.on("keydown.mask", function(e) {
                    t.data("mask-keycode", e.keyCode || e.which)
                }).on(e.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", r.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        t.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    t.data("changed", !0)
                }).on("blur.mask", function() {
                    a === r.val() || t.data("changed") || t.trigger("change"), t.data("changed", !1)
                }).on("blur.mask", function() {
                    a = r.val()
                }).on("focus.mask", function(t) {
                    i.selectOnFocus === !0 && e(t.target).select()
                }).on("focusout.mask", function() {
                    i.clearIfNotMatch && !o.test(r.val()) && r.val("")
                })
            },
            getRegexMask: function() {
                for (var e, t, i, r, o, a, l = [], c = 0; c < n.length; c++) e = s.translation[n.charAt(c)], e ? (t = e.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = e.optional, r = e.recursive, r ? (l.push(n.charAt(c)), o = {
                    digit: n.charAt(c),
                    pattern: t
                }) : l.push(i || r ? t + "?" : t)) : l.push(n.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return a = l.join(""), o && (a = a.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(a)
            },
            destroyEvents: function() {
                t.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
            },
            val: function(e) {
                var n, i = t.is("input"),
                    r = i ? "val" : "text";
                return arguments.length > 0 ? (t[r]() !== e && t[r](e), n = t) : n = t[r](), n
            },
            getMCharsBeforeCount: function(e, t) {
                for (var i = 0, r = 0, o = n.length; r < o && r < e; r++) s.translation[n.charAt(r)] || (e = t ? e + 1 : e, i++);
                return i
            },
            caretPos: function(e, t, i, o) {
                var a = s.translation[n.charAt(Math.min(e - 1, n.length - 1))];
                return a ? Math.min(e + i - t - o, i) : r.caretPos(e + 1, t, i, o)
            },
            behaviour: function(n) {
                n = n || window.event, r.invalid = [];
                var i = t.data("mask-keycode");
                if (e.inArray(i, s.byPassKeys) === -1) {
                    var o = r.getCaret(),
                        a = r.val(),
                        l = a.length,
                        c = r.getMasked(),
                        u = c.length,
                        d = r.getMCharsBeforeCount(u - 1) - r.getMCharsBeforeCount(l - 1),
                        h = o < l;
                    return r.val(c), h && (8 !== i && 46 !== i && (o = r.caretPos(o, l, u, d)), r.setCaret(o)), r.callbacks(n)
                }
            },
            getMasked: function(e, t) {
                var o, a, l = [],
                    c = void 0 === t ? r.val() : t + "",
                    u = 0,
                    d = n.length,
                    h = 0,
                    p = c.length,
                    f = 1,
                    m = "push",
                    g = -1;
                for (i.reverse ? (m = "unshift", f = -1, o = 0, u = d - 1, h = p - 1, a = function() {
                        return u > -1 && h > -1
                    }) : (o = d - 1, a = function() {
                        return u < d && h < p
                    }); a();) {
                    var v = n.charAt(u),
                        y = c.charAt(h),
                        b = s.translation[v];
                    b ? (y.match(b.pattern) ? (l[m](y), b.recursive && (g === -1 ? g = u : u === o && (u = g - f), o === g && (u -= f)), u += f) : b.optional ? (u += f, h -= f) : b.fallback ? (l[m](b.fallback), u += f, h -= f) : r.invalid.push({
                        p: h,
                        v: y,
                        e: b.pattern
                    }), h += f) : (e || l[m](v), y === v && (h += f), u += f)
                }
                var $ = n.charAt(o);
                return d !== p + 1 || s.translation[$] || l.push($), l.join("")
            },
            callbacks: function(e) {
                var o = r.val(),
                    s = o !== a,
                    l = [o, e, t, i],
                    c = function(e, t, n) {
                        "function" == typeof i[e] && t && i[e].apply(this, n)
                    };
                c("onChange", s === !0, l), c("onKeyPress", s === !0, l), c("onComplete", o.length === n.length, l), c("onInvalid", r.invalid.length > 0, [o, e, t, r.invalid, i])
            }
        };
        t = e(t);
        var o, s = this,
            a = r.val();
        n = "function" == typeof n ? n(r.val(), void 0, t, i) : n, s.mask = n, s.options = i, s.remove = function() {
            var e = r.getCaret();
            return r.destroyEvents(), r.val(s.getCleanVal()), r.setCaret(e - r.getMCharsBeforeCount(e)), t
        }, s.getCleanVal = function() {
            return r.getMasked(!0)
        }, s.getMaskedVal = function(e) {
            return r.getMasked(!1, e)
        }, s.init = function(n) {
            if (n = n || !1, i = i || {}, s.clearIfNotMatch = e.jMaskGlobals.clearIfNotMatch, s.byPassKeys = e.jMaskGlobals.byPassKeys, s.translation = e.extend({}, e.jMaskGlobals.translation, i.translation), s = e.extend(!0, {}, s, i), o = r.getRegexMask(), n === !1) {
                i.placeholder && t.attr("placeholder", i.placeholder), t.data("mask") && t.attr("autocomplete", "off"), r.destroyEvents(), r.events();
                var a = r.getCaret();
                r.val(r.getMasked()), r.setCaret(a + r.getMCharsBeforeCount(a, !0))
            } else r.events(), r.val(r.getMasked())
        }, s.init(!t.is("input"))
    };
    e.maskWatchers = {};
    var n = function() {
            var n = e(this),
                r = {},
                o = "data-mask-",
                s = n.attr("data-mask");
            if (n.attr(o + "reverse") && (r.reverse = !0), n.attr(o + "clearifnotmatch") && (r.clearIfNotMatch = !0), "true" === n.attr(o + "selectonfocus") && (r.selectOnFocus = !0), i(n, s, r)) return n.data("mask", new t(this, s, r))
        },
        i = function(t, n, i) {
            i = i || {};
            var r = e(t).data("mask"),
                o = JSON.stringify,
                s = e(t).val() || e(t).text();
            try {
                return "function" == typeof n && (n = n(s)), "object" != typeof r || o(r.options) !== o(i) || r.mask !== n
            } catch (a) {}
        },
        r = function(e) {
            var t, n = document.createElement("div");
            return e = "on" + e, t = e in n, t || (n.setAttribute(e, "return;"), t = "function" == typeof n[e]), n = null, t
        };
    e.fn.mask = function(n, r) {
        r = r || {};
        var o = this.selector,
            s = e.jMaskGlobals,
            a = s.watchInterval,
            l = r.watchInputs || s.watchInputs,
            c = function() {
                if (i(this, n, r)) return e(this).data("mask", new t(this, n, r))
            };
        return e(this).each(c), o && "" !== o && l && (clearInterval(e.maskWatchers[o]), e.maskWatchers[o] = setInterval(function() {
            e(document).find(o).each(c)
        }, a)), this
    }, e.fn.masked = function(e) {
        return this.data("mask").getMaskedVal(e)
    }, e.fn.unmask = function() {
        return clearInterval(e.maskWatchers[this.selector]), delete e.maskWatchers[this.selector], this.each(function() {
            var t = e(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, e.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    }, e.applyDataMask = function(t) {
        t = t || e.jMaskGlobals.maskElements;
        var i = t instanceof e ? t : e(t);
        i.filter(e.jMaskGlobals.dataMaskAttr).each(n)
    };
    var o = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        useInput: r("input"),
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    e.jMaskGlobals = e.jMaskGlobals || {}, o = e.jMaskGlobals = e.extend(!0, {}, o, e.jMaskGlobals), o.dataMask && e.applyDataMask(), setInterval(function() {
        e.jMaskGlobals.watchDataMask && e.applyDataMask()
    }, o.watchInterval)
}, window.jQuery, window.Zepto), ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            var t;
            return function() {
                    if (!t || !t.requirejs) {
                        t ? n = t : t = {};
                        var e, n, i;
                        ! function(t) {
                            function r(e, t) {
                                return $.call(e, t)
                            }

                            function o(e, t) {
                                var n, i, r, o, s, a, l, c, u, d, h, p = t && t.split("/"),
                                    f = y.map,
                                    m = f && f["*"] || {};
                                if (e && "." === e.charAt(0))
                                    if (t) {
                                        for (e = e.split("/"), s = e.length - 1, y.nodeIdCompat && x.test(e[s]) && (e[s] = e[s].replace(x, "")), e = p.slice(0, p.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                            if (h = e[u], "." === h) e.splice(u, 1), u -= 1;
                                            else if (".." === h) {
                                            if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                            u > 0 && (e.splice(u - 1, 2), u -= 2)
                                        }
                                        e = e.join("/")
                                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                                if ((p || m) && f) {
                                    for (n = e.split("/"), u = n.length; u > 0; u -= 1) {
                                        if (i = n.slice(0, u).join("/"), p)
                                            for (d = p.length; d > 0; d -= 1)
                                                if (r = f[p.slice(0, d).join("/")], r && (r = r[i])) {
                                                    o = r, a = u;
                                                    break
                                                }
                                        if (o) break;
                                        !l && m && m[i] && (l = m[i], c = u)
                                    }!o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                                }
                                return e
                            }

                            function s(e, n) {
                                return function() {
                                    var i = w.call(arguments, 0);
                                    return "string" != typeof i[0] && 1 === i.length && i.push(null), p.apply(t, i.concat([e, n]))
                                }
                            }

                            function a(e) {
                                return function(t) {
                                    return o(t, e)
                                }
                            }

                            function l(e) {
                                return function(t) {
                                    g[e] = t
                                }
                            }

                            function c(e) {
                                if (r(v, e)) {
                                    var n = v[e];
                                    delete v[e], b[e] = !0, h.apply(t, n)
                                }
                                if (!r(g, e) && !r(b, e)) throw new Error("No " + e);
                                return g[e]
                            }

                            function u(e) {
                                var t, n = e ? e.indexOf("!") : -1;
                                return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                            }

                            function d(e) {
                                return function() {
                                    return y && y.config && y.config[e] || {}
                                }
                            }
                            var h, p, f, m, g = {},
                                v = {},
                                y = {},
                                b = {},
                                $ = Object.prototype.hasOwnProperty,
                                w = [].slice,
                                x = /\.js$/;
                            f = function(e, t) {
                                var n, i = u(e),
                                    r = i[0];
                                return e = i[1], r && (r = o(r, t), n = c(r)), r ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (e = o(e, t), i = u(e), r = i[0], e = i[1], r && (n = c(r))), {
                                    f: r ? r + "!" + e : e,
                                    n: e,
                                    pr: r,
                                    p: n
                                }
                            }, m = {
                                require: function(e) {
                                    return s(e)
                                },
                                exports: function(e) {
                                    var t = g[e];
                                    return "undefined" != typeof t ? t : g[e] = {}
                                },
                                module: function(e) {
                                    return {
                                        id: e,
                                        uri: "",
                                        exports: g[e],
                                        config: d(e)
                                    }
                                }
                            }, h = function(e, n, i, o) {
                                var a, u, d, h, p, y, $ = [],
                                    w = typeof i;
                                if (o = o || e,
                                    "undefined" === w || "function" === w) {
                                    for (n = !n.length && i.length ? ["require", "exports", "module"] : n, p = 0; p < n.length; p += 1)
                                        if (h = f(n[p], o), u = h.f, "require" === u) $[p] = m.require(e);
                                        else if ("exports" === u) $[p] = m.exports(e), y = !0;
                                    else if ("module" === u) a = $[p] = m.module(e);
                                    else if (r(g, u) || r(v, u) || r(b, u)) $[p] = c(u);
                                    else {
                                        if (!h.p) throw new Error(e + " missing " + u);
                                        h.p.load(h.n, s(o, !0), l(u), {}), $[p] = g[u]
                                    }
                                    d = i ? i.apply(g[e], $) : void 0, e && (a && a.exports !== t && a.exports !== g[e] ? g[e] = a.exports : d === t && y || (g[e] = d))
                                } else e && (g[e] = i)
                            }, e = n = p = function(e, n, i, r, o) {
                                if ("string" == typeof e) return m[e] ? m[e](n) : c(f(e, n).f);
                                if (!e.splice) {
                                    if (y = e, y.deps && p(y.deps, y.callback), !n) return;
                                    n.splice ? (e = n, n = i, i = null) : e = t
                                }
                                return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? h(t, e, n, i) : setTimeout(function() {
                                    h(t, e, n, i)
                                }, 4), p
                            }, p.config = function(e) {
                                return p(e)
                            }, e._defined = g, i = function(e, t, n) {
                                if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                                t.splice || (n = t, t = []), r(g, e) || r(v, e) || (v[e] = [e, t, n])
                            }, i.amd = {
                                jQuery: !0
                            }
                        }(), t.requirejs = e, t.require = n, t.define = i
                    }
                }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                    var t = e || $;
                    return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
                }), t.define("select2/utils", ["jquery"], function(e) {
                    function t(e) {
                        var t = e.prototype,
                            n = [];
                        for (var i in t) {
                            var r = t[i];
                            "function" == typeof r && "constructor" !== i && n.push(i)
                        }
                        return n
                    }
                    var n = {};
                    n.Extend = function(e, t) {
                        function n() {
                            this.constructor = e
                        }
                        var i = {}.hasOwnProperty;
                        for (var r in t) i.call(t, r) && (e[r] = t[r]);
                        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                    }, n.Decorate = function(e, n) {
                        function i() {
                            var t = Array.prototype.unshift,
                                i = n.prototype.constructor.length,
                                r = e.prototype.constructor;
                            i > 0 && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                        }

                        function r() {
                            this.constructor = i
                        }
                        var o = t(n),
                            s = t(e);
                        n.displayName = e.displayName, i.prototype = new r;
                        for (var a = 0; a < s.length; a++) {
                            var l = s[a];
                            i.prototype[l] = e.prototype[l]
                        }
                        for (var c = (function(e) {
                                var t = function() {};
                                e in i.prototype && (t = i.prototype[e]);
                                var r = n.prototype[e];
                                return function() {
                                    var e = Array.prototype.unshift;
                                    return e.call(arguments, t), r.apply(this, arguments)
                                }
                            }), u = 0; u < o.length; u++) {
                            var d = o[u];
                            i.prototype[d] = c(d)
                        }
                        return i
                    };
                    var i = function() {
                        this.listeners = {}
                    };
                    return i.prototype.on = function(e, t) {
                        this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                    }, i.prototype.trigger = function(e) {
                        var t = Array.prototype.slice,
                            n = t.call(arguments, 1);
                        this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                    }, i.prototype.invoke = function(e, t) {
                        for (var n = 0, i = e.length; i > n; n++) e[n].apply(this, t)
                    }, n.Observable = i, n.generateChars = function(e) {
                        for (var t = "", n = 0; e > n; n++) {
                            var i = Math.floor(36 * Math.random());
                            t += i.toString(36)
                        }
                        return t
                    }, n.bind = function(e, t) {
                        return function() {
                            e.apply(t, arguments)
                        }
                    }, n._convertData = function(e) {
                        for (var t in e) {
                            var n = t.split("-"),
                                i = e;
                            if (1 !== n.length) {
                                for (var r = 0; r < n.length; r++) {
                                    var o = n[r];
                                    o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                                }
                                delete e[t]
                            }
                        }
                        return e
                    }, n.hasScroll = function(t, n) {
                        var i = e(n),
                            r = n.style.overflowX,
                            o = n.style.overflowY;
                        return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                    }, n.escapeMarkup = function(e) {
                        var t = {
                            "\\": "&#92;",
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;",
                            "/": "&#47;"
                        };
                        return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                            return t[e]
                        })
                    }, n.appendMany = function(t, n) {
                        if ("1.7" === e.fn.jquery.substr(0, 3)) {
                            var i = e();
                            e.map(n, function(e) {
                                i = i.add(e)
                            }), n = i
                        }
                        t.append(n)
                    }, n
                }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                    function n(e, t, i) {
                        this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = e('<ul class="select2-results__options" role="tree"></ul>');
                        return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                    }, n.prototype.clear = function() {
                        this.$results.empty()
                    }, n.prototype.displayMessage = function(t) {
                        var n = this.options.get("escapeMarkup");
                        this.clear(), this.hideLoading();
                        var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                            r = this.options.get("translations").get(t.message);
                        i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                    }, n.prototype.hideMessages = function() {
                        this.$results.find(".select2-results__message").remove()
                    }, n.prototype.append = function(e) {
                        this.hideLoading();
                        var t = [];
                        if (null == e.results || 0 === e.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                            message: "noResults"
                        }));
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                r = this.option(i);
                            t.push(r)
                        }
                        this.$results.append(t)
                    }, n.prototype.position = function(e, t) {
                        var n = t.find(".select2-results");
                        n.append(e)
                    }, n.prototype.sort = function(e) {
                        var t = this.options.get("sorter");
                        return t(e)
                    }, n.prototype.highlightFirstItem = function() {
                        var e = this.$results.find(".select2-results__option[aria-selected]"),
                            t = e.filter("[aria-selected=true]");
                        t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                    }, n.prototype.setClasses = function() {
                        var t = this;
                        this.data.current(function(n) {
                            var i = e.map(n, function(e) {
                                    return e.id.toString()
                                }),
                                r = t.$results.find(".select2-results__option[aria-selected]");
                            r.each(function() {
                                var t = e(this),
                                    n = e.data(this, "data"),
                                    r = "" + n.id;
                                null != n.element && n.element.selected || null == n.element && e.inArray(r, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                            })
                        })
                    }, n.prototype.showLoading = function(e) {
                        this.hideLoading();
                        var t = this.options.get("translations").get("searching"),
                            n = {
                                disabled: !0,
                                loading: !0,
                                text: t(e)
                            },
                            i = this.option(n);
                        i.className += " loading-results", this.$results.prepend(i)
                    }, n.prototype.hideLoading = function() {
                        this.$results.find(".loading-results").remove()
                    }, n.prototype.option = function(t) {
                        var n = document.createElement("li");
                        n.className = "select2-results__option";
                        var i = {
                            role: "treeitem",
                            "aria-selected": "false"
                        };
                        t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]);
                        for (var r in i) {
                            var o = i[r];
                            n.setAttribute(r, o)
                        }
                        if (t.children) {
                            var s = e(n),
                                a = document.createElement("strong");
                            a.className = "select2-results__group", e(a), this.template(t, a);
                            for (var l = [], c = 0; c < t.children.length; c++) {
                                var u = t.children[c],
                                    d = this.option(u);
                                l.push(d)
                            }
                            var h = e("<ul></ul>", {
                                "class": "select2-results__options select2-results__options--nested"
                            });
                            h.append(l), s.append(a), s.append(h)
                        } else this.template(t, n);
                        return e.data(n, "data", t), n
                    }, n.prototype.bind = function(t, n) {
                        var i = this,
                            r = t.id + "-results";
                        this.$results.attr("id", r), t.on("results:all", function(e) {
                            i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("results:append", function(e) {
                            i.append(e.data), t.isOpen() && i.setClasses()
                        }), t.on("query", function(e) {
                            i.hideMessages(), i.showLoading(e)
                        }), t.on("select", function() {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("unselect", function() {
                            t.isOpen() && (i.setClasses(), i.highlightFirstItem())
                        }), t.on("open", function() {
                            i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                        }), t.on("close", function() {
                            i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                        }), t.on("results:toggle", function() {
                            var e = i.getHighlightedResults();
                            0 !== e.length && e.trigger("mouseup")
                        }), t.on("results:select", function() {
                            var e = i.getHighlightedResults();
                            if (0 !== e.length) {
                                var t = e.data("data");
                                "true" == e.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                    data: t
                                })
                            }
                        }), t.on("results:previous", function() {
                            var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                n = t.index(e);
                            if (0 !== n) {
                                var r = n - 1;
                                0 === e.length && (r = 0);
                                var o = t.eq(r);
                                o.trigger("mouseenter");
                                var s = i.$results.offset().top,
                                    a = o.offset().top,
                                    l = i.$results.scrollTop() + (a - s);
                                0 === r ? i.$results.scrollTop(0) : 0 > a - s && i.$results.scrollTop(l)
                            }
                        }), t.on("results:next", function() {
                            var e = i.getHighlightedResults(),
                                t = i.$results.find("[aria-selected]"),
                                n = t.index(e),
                                r = n + 1;
                            if (!(r >= t.length)) {
                                var o = t.eq(r);
                                o.trigger("mouseenter");
                                var s = i.$results.offset().top + i.$results.outerHeight(!1),
                                    a = o.offset().top + o.outerHeight(!1),
                                    l = i.$results.scrollTop() + a - s;
                                0 === r ? i.$results.scrollTop(0) : a > s && i.$results.scrollTop(l)
                            }
                        }), t.on("results:focus", function(e) {
                            e.element.addClass("select2-results__option--highlighted")
                        }), t.on("results:message", function(e) {
                            i.displayMessage(e)
                        }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                            var t = i.$results.scrollTop(),
                                n = i.$results.get(0).scrollHeight - t + e.deltaY,
                                r = e.deltaY > 0 && t - e.deltaY <= 0,
                                o = e.deltaY < 0 && n <= i.$results.height();
                            r ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
                        }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                            var n = e(this),
                                r = n.data("data");
                            return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                originalEvent: t,
                                data: r
                            }) : i.trigger("close", {})) : void i.trigger("select", {
                                originalEvent: t,
                                data: r
                            })
                        }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(t) {
                            var n = e(this).data("data");
                            i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                data: n,
                                element: e(this)
                            })
                        })
                    }, n.prototype.getHighlightedResults = function() {
                        var e = this.$results.find(".select2-results__option--highlighted");
                        return e
                    }, n.prototype.destroy = function() {
                        this.$results.remove()
                    }, n.prototype.ensureHighlightVisible = function() {
                        var e = this.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = this.$results.find("[aria-selected]"),
                                n = t.index(e),
                                i = this.$results.offset().top,
                                r = e.offset().top,
                                o = this.$results.scrollTop() + (r - i),
                                s = r - i;
                            o -= 2 * e.outerHeight(!1), 2 >= n ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || 0 > s) && this.$results.scrollTop(o)
                        }
                    }, n.prototype.template = function(t, n) {
                        var i = this.options.get("templateResult"),
                            r = this.options.get("escapeMarkup"),
                            o = i(t, n);
                        null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
                    }, n
                }), t.define("select2/keys", [], function() {
                    var e = {
                        BACKSPACE: 8,
                        TAB: 9,
                        ENTER: 13,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        ESC: 27,
                        SPACE: 32,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        END: 35,
                        HOME: 36,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        DELETE: 46
                    };
                    return e
                }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, t.Observable), i.prototype.render = function() {
                        var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                        return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                    }, i.prototype.bind = function(e, t) {
                        var i = this,
                            r = (e.id + "-container", e.id + "-results");
                        this.container = e, this.$selection.on("focus", function(e) {
                            i.trigger("focus", e)
                        }), this.$selection.on("blur", function(e) {
                            i._handleBlur(e)
                        }), this.$selection.on("keydown", function(e) {
                            i.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                        }), e.on("results:focus", function(e) {
                            i.$selection.attr("aria-activedescendant", e.data._resultId)
                        }), e.on("selection:update", function(e) {
                            i.update(e.data)
                        }), e.on("open", function() {
                            i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(e)
                        }), e.on("close", function() {
                            i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(e)
                        }), e.on("enable", function() {
                            i.$selection.attr("tabindex", i._tabindex)
                        }), e.on("disable", function() {
                            i.$selection.attr("tabindex", "-1")
                        })
                    }, i.prototype._handleBlur = function(t) {
                        var n = this;
                        window.setTimeout(function() {
                            document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                        }, 1)
                    }, i.prototype._attachCloseHandler = function(t) {
                        e(document.body).on("mousedown.select2." + t.id, function(t) {
                            var n = e(t.target),
                                i = n.closest(".select2"),
                                r = e(".select2.select2-container--open");
                            r.each(function() {
                                var t = e(this);
                                if (this != i[0]) {
                                    var n = t.data("element");
                                    n.select2("close")
                                }
                            })
                        })
                    }, i.prototype._detachCloseHandler = function(t) {
                        e(document.body).off("mousedown.select2." + t.id)
                    }, i.prototype.position = function(e, t) {
                        var n = t.find(".selection");
                        n.append(e)
                    }, i.prototype.destroy = function() {
                        this._detachCloseHandler(this.container)
                    }, i.prototype.update = function(e) {
                        throw new Error("The `update` method must be defined in child classes.")
                    }, i
                }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, i) {
                    function r() {
                        r.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(r, t), r.prototype.render = function() {
                        var e = r.__super__.render.call(this);
                        return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                    }, r.prototype.bind = function(e, t) {
                        var n = this;
                        r.__super__.bind.apply(this, arguments);
                        var i = e.id + "-container";
                        this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(e) {
                            1 === e.which && n.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), e.on("focus", function(t) {
                            e.isOpen() || n.$selection.focus()
                        }), e.on("selection:update", function(e) {
                            n.update(e.data)
                        })
                    }, r.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, r.prototype.display = function(e, t) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(e, t))
                    }, r.prototype.selectionContainer = function() {
                        return e("<span></span>")
                    }, r.prototype.update = function(e) {
                        if (0 === e.length) return void this.clear();
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    }, r
                }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                    function i(e, t) {
                        i.__super__.constructor.apply(this, arguments)
                    }
                    return n.Extend(i, t), i.prototype.render = function() {
                        var e = i.__super__.render.call(this);
                        return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                    }, i.prototype.bind = function(t, n) {
                        var r = this;
                        i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                            r.trigger("toggle", {
                                originalEvent: e
                            })
                        }), this.$selection.on("click", ".select2-selection__choice__remove", function(t) {
                            if (!r.options.get("disabled")) {
                                var n = e(this),
                                    i = n.parent(),
                                    o = i.data("data");
                                r.trigger("unselect", {
                                    originalEvent: t,
                                    data: o
                                })
                            }
                        })
                    }, i.prototype.clear = function() {
                        this.$selection.find(".select2-selection__rendered").empty()
                    }, i.prototype.display = function(e, t) {
                        var n = this.options.get("templateSelection"),
                            i = this.options.get("escapeMarkup");
                        return i(n(e, t))
                    }, i.prototype.selectionContainer = function() {
                        var t = e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                        return t
                    }, i.prototype.update = function(e) {
                        if (this.clear(), 0 !== e.length) {
                            for (var t = [], i = 0; i < e.length; i++) {
                                var r = e[i],
                                    o = this.selectionContainer(),
                                    s = this.display(r, o);
                                o.append(s), o.prop("title", r.title || r.text), o.data("data", r), t.push(o)
                            }
                            var a = this.$selection.find(".select2-selection__rendered");
                            n.appendMany(a, t)
                        }
                    }, i
                }), t.define("select2/selection/placeholder", ["../utils"], function(e) {
                    function t(e, t, n) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                    }
                    return t.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, t.prototype.createPlaceholder = function(e, t) {
                        var n = this.selectionContainer();
                        return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                    }, t.prototype.update = function(e, t) {
                        var n = 1 == t.length && t[0].id != this.placeholder.id,
                            i = t.length > 1;
                        if (i || n) return e.call(this, t);
                        this.clear();
                        var r = this.createPlaceholder(this.placeholder);
                        this.$selection.find(".select2-selection__rendered").append(r)
                    }, t
                }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                    function n() {}
                    return n.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                            i._handleClear(e)
                        }), t.on("keypress", function(e) {
                            i._handleKeyboardClear(e, t)
                        })
                    }, n.prototype._handleClear = function(e, t) {
                        if (!this.options.get("disabled")) {
                            var n = this.$selection.find(".select2-selection__clear");
                            if (0 !== n.length) {
                                t.stopPropagation();
                                for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                    var o = {
                                        data: i[r]
                                    };
                                    if (this.trigger("unselect", o), o.prevented) return
                                }
                                this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                            }
                        }
                    }, n.prototype._handleKeyboardClear = function(e, n, i) {
                        i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
                    }, n.prototype.update = function(t, n) {
                        if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                            var i = e('<span class="select2-selection__clear">&times;</span>');
                            i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                        }
                    }, n
                }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                    function i(e, t, n) {
                        e.call(this, t, n)
                    }
                    return i.prototype.render = function(t) {
                        var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                        this.$searchContainer = n, this.$search = n.find("input");
                        var i = t.call(this);
                        return this._transferTabIndex(), i
                    }, i.prototype.bind = function(e, t, i) {
                        var r = this;
                        e.call(this, t, i), t.on("open", function() {
                            r.$search.trigger("focus")
                        }), t.on("close", function() {
                            r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                        }), t.on("enable", function() {
                            r.$search.prop("disabled", !1), r._transferTabIndex()
                        }), t.on("disable", function() {
                            r.$search.prop("disabled", !0)
                        }), t.on("focus", function(e) {
                            r.$search.trigger("focus")
                        }), t.on("results:focus", function(e) {
                            r.$search.attr("aria-activedescendant", e.id)
                        }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                            r.trigger("focus", e)
                        }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                            r._handleBlur(e)
                        }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                            e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented();
                            var t = e.which;
                            if (t === n.BACKSPACE && "" === r.$search.val()) {
                                var i = r.$searchContainer.prev(".select2-selection__choice");
                                if (i.length > 0) {
                                    var o = i.data("data");
                                    r.searchRemoveChoice(o), e.preventDefault()
                                }
                            }
                        });
                        var o = document.documentMode,
                            s = o && 11 >= o;
                        this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                            return s ? void r.$selection.off("input.search input.searchcheck") : void r.$selection.off("keyup.search")
                        }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                            if (s && "input" === e.type) return void r.$selection.off("input.search input.searchcheck");
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                        })
                    }, i.prototype._transferTabIndex = function(e) {
                        this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                    }, i.prototype.createPlaceholder = function(e, t) {
                        this.$search.attr("placeholder", t.text)
                    }, i.prototype.update = function(e, t) {
                        var n = this.$search[0] == document.activeElement;
                        this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                    }, i.prototype.handleSearch = function() {
                        if (this.resizeSearch(), !this._keyUpPrevented) {
                            var e = this.$search.val();
                            this.trigger("query", {
                                term: e
                            })
                        }
                        this._keyUpPrevented = !1
                    }, i.prototype.searchRemoveChoice = function(e, t) {
                        this.trigger("unselect", {
                            data: t
                        }), this.$search.val(t.text), this.handleSearch()
                    }, i.prototype.resizeSearch = function() {
                        this.$search.css("width", "25px");
                        var e = "";
                        if ("" !== this.$search.attr("placeholder")) e = this.$selection.find(".select2-selection__rendered").innerWidth();
                        else {
                            var t = this.$search.val().length + 1;
                            e = .75 * t + "em"
                        }
                        this.$search.css("width", e)
                    }, i
                }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                    function t() {}
                    return t.prototype.bind = function(t, n, i) {
                        var r = this,
                            o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                            s = ["opening", "closing", "selecting", "unselecting"];
                        t.call(this, n, i), n.on("*", function(t, n) {
                            if (-1 !== e.inArray(t, o)) {
                                n = n || {};
                                var i = e.Event("select2:" + t, {
                                    params: n
                                });
                                r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                            }
                        })
                    }, t
                }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                    function n(e) {
                        this.dict = e || {}
                    }
                    return n.prototype.all = function() {
                        return this.dict
                    }, n.prototype.get = function(e) {
                        return this.dict[e]
                    }, n.prototype.extend = function(t) {
                        this.dict = e.extend({}, t.all(), this.dict)
                    }, n._cache = {}, n.loadPath = function(e) {
                        if (!(e in n._cache)) {
                            var i = t(e);
                            n._cache[e] = i
                        }
                        return new n(n._cache[e])
                    }, n
                }), t.define("select2/diacritics", [], function() {
                    var e = {
                        "â’¶": "A",
                        "ï¼¡": "A",
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "áº¦": "A",
                        "áº¤": "A",
                        "áºª": "A",
                        "áº¨": "A",
                        "Ãƒ": "A",
                        "Ä€": "A",
                        "Ä‚": "A",
                        "áº°": "A",
                        "áº®": "A",
                        "áº´": "A",
                        "áº²": "A",
                        "È¦": "A",
                        "Ç ": "A",
                        "Ã„": "A",
                        "Çž": "A",
                        "áº¢": "A",
                        "Ã…": "A",
                        "Çº": "A",
                        "Ç": "A",
                        "È€": "A",
                        "È‚": "A",
                        "áº ": "A",
                        "áº¬": "A",
                        "áº¶": "A",
                        "á¸€": "A",
                        "Ä„": "A",
                        "Èº": "A",
                        "â±¯": "A",
                        "êœ²": "AA",
                        "Ã†": "AE",
                        "Ç¼": "AE",
                        "Ç¢": "AE",
                        "êœ´": "AO",
                        "êœ¶": "AU",
                        "êœ¸": "AV",
                        "êœº": "AV",
                        "êœ¼": "AY",
                        "â’·": "B",
                        "ï¼¢": "B",
                        "á¸‚": "B",
                        "á¸„": "B",
                        "á¸†": "B",
                        "Éƒ": "B",
                        "Æ‚": "B",
                        "Æ": "B",
                        "â’¸": "C",
                        "ï¼£": "C",
                        "Ä†": "C",
                        "Äˆ": "C",
                        "ÄŠ": "C",
                        "ÄŒ": "C",
                        "Ã‡": "C",
                        "á¸ˆ": "C",
                        "Æ‡": "C",
                        "È»": "C",
                        "êœ¾": "C",
                        "â’¹": "D",
                        "ï¼¤": "D",
                        "á¸Š": "D",
                        "ÄŽ": "D",
                        "á¸Œ": "D",
                        "á¸": "D",
                        "á¸’": "D",
                        "á¸Ž": "D",
                        "Ä": "D",
                        "Æ‹": "D",
                        "ÆŠ": "D",
                        "Æ‰": "D",
                        "ê¹": "D",
                        "Ç±": "DZ",
                        "Ç„": "DZ",
                        "Ç²": "Dz",
                        "Ç…": "Dz",
                        "â’º": "E",
                        "ï¼¥": "E",
                        "Ãˆ": "E",
                        "Ã‰": "E",
                        "ÃŠ": "E",
                        "á»€": "E",
                        "áº¾": "E",
                        "á»„": "E",
                        "á»‚": "E",
                        "áº¼": "E",
                        "Ä’": "E",
                        "á¸”": "E",
                        "á¸–": "E",
                        "Ä”": "E",
                        "Ä–": "E",
                        "Ã‹": "E",
                        "áºº": "E",
                        "Äš": "E",
                        "È„": "E",
                        "È†": "E",
                        "áº¸": "E",
                        "á»†": "E",
                        "È¨": "E",
                        "á¸œ": "E",
                        "Ä˜": "E",
                        "á¸˜": "E",
                        "á¸š": "E",
                        "Æ": "E",
                        "ÆŽ": "E",
                        "â’»": "F",
                        "ï¼¦": "F",
                        "á¸ž": "F",
                        "Æ‘": "F",
                        "ê»": "F",
                        "â’¼": "G",
                        "ï¼§": "G",
                        "Ç´": "G",
                        "Äœ": "G",
                        "á¸ ": "G",
                        "Äž": "G",
                        "Ä ": "G",
                        "Ç¦": "G",
                        "Ä¢": "G",
                        "Ç¤": "G",
                        "Æ“": "G",
                        "êž ": "G",
                        "ê½": "G",
                        "ê¾": "G",
                        "â’½": "H",
                        "ï¼¨": "H",
                        "Ä¤": "H",
                        "á¸¢": "H",
                        "á¸¦": "H",
                        "Èž": "H",
                        "á¸¤": "H",
                        "á¸¨": "H",
                        "á¸ª": "H",
                        "Ä¦": "H",
                        "â±§": "H",
                        "â±µ": "H",
                        "êž": "H",
                        "â’¾": "I",
                        "ï¼©": "I",
                        "ÃŒ": "I",
                        "Ã": "I",
                        "ÃŽ": "I",
                        "Ä¨": "I",
                        "Äª": "I",
                        "Ä¬": "I",
                        "Ä°": "I",
                        "Ã": "I",
                        "á¸®": "I",
                        "á»ˆ": "I",
                        "Ç": "I",
                        "Èˆ": "I",
                        "ÈŠ": "I",
                        "á»Š": "I",
                        "Ä®": "I",
                        "á¸¬": "I",
                        "Æ—": "I",
                        "â’¿": "J",
                        "ï¼ª": "J",
                        "Ä´": "J",
                        "Éˆ": "J",
                        "â“€": "K",
                        "ï¼«": "K",
                        "á¸°": "K",
                        "Ç¨": "K",
                        "á¸²": "K",
                        "Ä¶": "K",
                        "á¸´": "K",
                        "Æ˜": "K",
                        "â±©": "K",
                        "ê€": "K",
                        "ê‚": "K",
                        "ê„": "K",
                        "êž¢": "K",
                        "â“": "L",
                        "ï¼¬": "L",
                        "Ä¿": "L",
                        "Ä¹": "L",
                        "Ä½": "L",
                        "á¸¶": "L",
                        "á¸¸": "L",
                        "Ä»": "L",
                        "á¸¼": "L",
                        "á¸º": "L",
                        "Å": "L",
                        "È½": "L",
                        "â±¢": "L",
                        "â± ": "L",
                        "êˆ": "L",
                        "ê†": "L",
                        "êž€": "L",
                        "Ç‡": "LJ",
                        "Çˆ": "Lj",
                        "â“‚": "M",
                        "ï¼­": "M",
                        "á¸¾": "M",
                        "á¹€": "M",
                        "á¹‚": "M",
                        "â±®": "M",
                        "Æœ": "M",
                        "â“ƒ": "N",
                        "ï¼®": "N",
                        "Ç¸": "N",
                        "Åƒ": "N",
                        "Ã‘": "N",
                        "á¹„": "N",
                        "Å‡": "N",
                        "á¹†": "N",
                        "Å…": "N",
                        "á¹Š": "N",
                        "á¹ˆ": "N",
                        "È ": "N",
                        "Æ": "N",
                        "êž": "N",
                        "êž¤": "N",
                        "ÇŠ": "NJ",
                        "Ç‹": "Nj",
                        "â“„": "O",
                        "ï¼¯": "O",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "á»’": "O",
                        "á»": "O",
                        "á»–": "O",
                        "á»”": "O",
                        "Ã•": "O",
                        "á¹Œ": "O",
                        "È¬": "O",
                        "á¹Ž": "O",
                        "ÅŒ": "O",
                        "á¹": "O",
                        "á¹’": "O",
                        "ÅŽ": "O",
                        "È®": "O",
                        "È°": "O",
                        "Ã–": "O",
                        "Èª": "O",
                        "á»Ž": "O",
                        "Å": "O",
                        "Ç‘": "O",
                        "ÈŒ": "O",
                        "ÈŽ": "O",
                        "Æ ": "O",
                        "á»œ": "O",
                        "á»š": "O",
                        "á» ": "O",
                        "á»ž": "O",
                        "á»¢": "O",
                        "á»Œ": "O",
                        "á»˜": "O",
                        "Çª": "O",
                        "Ç¬": "O",
                        "Ã˜": "O",
                        "Ç¾": "O",
                        "Æ†": "O",
                        "ÆŸ": "O",
                        "êŠ": "O",
                        "êŒ": "O",
                        "Æ¢": "OI",
                        "êŽ": "OO",
                        "È¢": "OU",
                        "â“…": "P",
                        "ï¼°": "P",
                        "á¹”": "P",
                        "á¹–": "P",
                        "Æ¤": "P",
                        "â±£": "P",
                        "ê": "P",
                        "ê’": "P",
                        "ê”": "P",
                        "â“†": "Q",
                        "ï¼±": "Q",
                        "ê–": "Q",
                        "ê˜": "Q",
                        "ÉŠ": "Q",
                        "â“‡": "R",
                        "ï¼²": "R",
                        "Å”": "R",
                        "á¹˜": "R",
                        "Å˜": "R",
                        "È": "R",
                        "È’": "R",
                        "á¹š": "R",
                        "á¹œ": "R",
                        "Å–": "R",
                        "á¹ž": "R",
                        "ÉŒ": "R",
                        "â±¤": "R",
                        "êš": "R",
                        "êž¦": "R",
                        "êž‚": "R",
                        "â“ˆ": "S",
                        "ï¼³": "S",
                        "áºž": "S",
                        "Åš": "S",
                        "á¹¤": "S",
                        "Åœ": "S",
                        "á¹ ": "S",
                        "Å ": "S",
                        "á¹¦": "S",
                        "á¹¢": "S",
                        "á¹¨": "S",
                        "È˜": "S",
                        "Åž": "S",
                        "â±¾": "S",
                        "êž¨": "S",
                        "êž„": "S",
                        "â“‰": "T",
                        "ï¼´": "T",
                        "á¹ª": "T",
                        "Å¤": "T",
                        "á¹¬": "T",
                        "Èš": "T",
                        "Å¢": "T",
                        "á¹°": "T",
                        "á¹®": "T",
                        "Å¦": "T",
                        "Æ¬": "T",
                        "Æ®": "T",
                        "È¾": "T",
                        "êž†": "T",
                        "êœ¨": "TZ",
                        "â“Š": "U",
                        "ï¼µ": "U",
                        "Ã™": "U",
                        "Ãš": "U",
                        "Ã›": "U",
                        "Å¨": "U",
                        "á¹¸": "U",
                        "Åª": "U",
                        "á¹º": "U",
                        "Å¬": "U",
                        "Ãœ": "U",
                        "Ç›": "U",
                        "Ç—": "U",
                        "Ç•": "U",
                        "Ç™": "U",
                        "á»¦": "U",
                        "Å®": "U",
                        "Å°": "U",
                        "Ç“": "U",
                        "È”": "U",
                        "È–": "U",
                        "Æ¯": "U",
                        "á»ª": "U",
                        "á»¨": "U",
                        "á»®": "U",
                        "á»¬": "U",
                        "á»°": "U",
                        "á»¤": "U",
                        "á¹²": "U",
                        "Å²": "U",
                        "á¹¶": "U",
                        "á¹´": "U",
                        "É„": "U",
                        "â“‹": "V",
                        "ï¼¶": "V",
                        "á¹¼": "V",
                        "á¹¾": "V",
                        "Æ²": "V",
                        "êž": "V",
                        "É…": "V",
                        "ê ": "VY",
                        "â“Œ": "W",
                        "ï¼·": "W",
                        "áº€": "W",
                        "áº‚": "W",
                        "Å´": "W",
                        "áº†": "W",
                        "áº„": "W",
                        "áºˆ": "W",
                        "â±²": "W",
                        "â“": "X",
                        "ï¼¸": "X",
                        "áºŠ": "X",
                        "áºŒ": "X",
                        "â“Ž": "Y",
                        "ï¼¹": "Y",
                        "á»²": "Y",
                        "Ã": "Y",
                        "Å¶": "Y",
                        "á»¸": "Y",
                        "È²": "Y",
                        "áºŽ": "Y",
                        "Å¸": "Y",
                        "á»¶": "Y",
                        "á»´": "Y",
                        "Æ³": "Y",
                        "ÉŽ": "Y",
                        "á»¾": "Y",
                        "â“": "Z",
                        "ï¼º": "Z",
                        "Å¹": "Z",
                        "áº": "Z",
                        "Å»": "Z",
                        "Å½": "Z",
                        "áº’": "Z",
                        "áº”": "Z",
                        "Æµ": "Z",
                        "È¤": "Z",
                        "â±¿": "Z",
                        "â±«": "Z",
                        "ê¢": "Z",
                        "â“": "a",
                        "ï½": "a",
                        "áºš": "a",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "áº§": "a",
                        "áº¥": "a",
                        "áº«": "a",
                        "áº©": "a",
                        "Ã£": "a",
                        "Ä": "a",
                        "Äƒ": "a",
                        "áº±": "a",
                        "áº¯": "a",
                        "áºµ": "a",
                        "áº³": "a",
                        "È§": "a",
                        "Ç¡": "a",
                        "Ã¤": "a",
                        "ÇŸ": "a",
                        "áº£": "a",
                        "Ã¥": "a",
                        "Ç»": "a",
                        "ÇŽ": "a",
                        "È": "a",
                        "Èƒ": "a",
                        "áº¡": "a",
                        "áº­": "a",
                        "áº·": "a",
                        "á¸": "a",
                        "Ä…": "a",
                        "â±¥": "a",
                        "É": "a",
                        "êœ³": "aa",
                        "Ã¦": "ae",
                        "Ç½": "ae",
                        "Ç£": "ae",
                        "êœµ": "ao",
                        "êœ·": "au",
                        "êœ¹": "av",
                        "êœ»": "av",
                        "êœ½": "ay",
                        "â“‘": "b",
                        "ï½‚": "b",
                        "á¸ƒ": "b",
                        "á¸…": "b",
                        "á¸‡": "b",
                        "Æ€": "b",
                        "Æƒ": "b",
                        "É“": "b",
                        "â“’": "c",
                        "ï½ƒ": "c",
                        "Ä‡": "c",
                        "Ä‰": "c",
                        "Ä‹": "c",
                        "Ä": "c",
                        "Ã§": "c",
                        "á¸‰": "c",
                        "Æˆ": "c",
                        "È¼": "c",
                        "êœ¿": "c",
                        "â†„": "c",
                        "â““": "d",
                        "ï½„": "d",
                        "á¸‹": "d",
                        "Ä": "d",
                        "á¸": "d",
                        "á¸‘": "d",
                        "á¸“": "d",
                        "á¸": "d",
                        "Ä‘": "d",
                        "ÆŒ": "d",
                        "É–": "d",
                        "É—": "d",
                        "êº": "d",
                        "Ç³": "dz",
                        "Ç†": "dz",
                        "â“”": "e",
                        "ï½…": "e",
                        "Ã¨": "e",
                        "Ã©": "e",
                        "Ãª": "e",
                        "á»": "e",
                        "áº¿": "e",
                        "á»…": "e",
                        "á»ƒ": "e",
                        "áº½": "e",
                        "Ä“": "e",
                        "á¸•": "e",
                        "á¸—": "e",
                        "Ä•": "e",
                        "Ä—": "e",
                        "Ã«": "e",
                        "áº»": "e",
                        "Ä›": "e",
                        "È…": "e",
                        "È‡": "e",
                        "áº¹": "e",
                        "á»‡": "e",
                        "È©": "e",
                        "á¸": "e",
                        "Ä™": "e",
                        "á¸™": "e",
                        "á¸›": "e",
                        "É‡": "e",
                        "É›": "e",
                        "Ç": "e",
                        "â“•": "f",
                        "ï½†": "f",
                        "á¸Ÿ": "f",
                        "Æ’": "f",
                        "ê¼": "f",
                        "â“–": "g",
                        "ï½‡": "g",
                        "Çµ": "g",
                        "Ä": "g",
                        "á¸¡": "g",
                        "ÄŸ": "g",
                        "Ä¡": "g",
                        "Ç§": "g",
                        "Ä£": "g",
                        "Ç¥": "g",
                        "É ": "g",
                        "êž¡": "g",
                        "áµ¹": "g",
                        "ê¿": "g",
                        "â“—": "h",
                        "ï½ˆ": "h",
                        "Ä¥": "h",
                        "á¸£": "h",
                        "á¸§": "h",
                        "ÈŸ": "h",
                        "á¸¥": "h",
                        "á¸©": "h",
                        "á¸«": "h",
                        "áº–": "h",
                        "Ä§": "h",
                        "â±¨": "h",
                        "â±¶": "h",
                        "É¥": "h",
                        "Æ•": "hv",
                        "â“˜": "i",
                        "ï½‰": "i",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ä©": "i",
                        "Ä«": "i",
                        "Ä­": "i",
                        "Ã¯": "i",
                        "á¸¯": "i",
                        "á»‰": "i",
                        "Ç": "i",
                        "È‰": "i",
                        "È‹": "i",
                        "á»‹": "i",
                        "Ä¯": "i",
                        "á¸­": "i",
                        "É¨": "i",
                        "Ä±": "i",
                        "â“™": "j",
                        "ï½Š": "j",
                        "Äµ": "j",
                        "Ç°": "j",
                        "É‰": "j",
                        "â“š": "k",
                        "ï½‹": "k",
                        "á¸±": "k",
                        "Ç©": "k",
                        "á¸³": "k",
                        "Ä·": "k",
                        "á¸µ": "k",
                        "Æ™": "k",
                        "â±ª": "k",
                        "ê": "k",
                        "êƒ": "k",
                        "ê…": "k",
                        "êž£": "k",
                        "â“›": "l",
                        "ï½Œ": "l",
                        "Å€": "l",
                        "Äº": "l",
                        "Ä¾": "l",
                        "á¸·": "l",
                        "á¸¹": "l",
                        "Ä¼": "l",
                        "á¸½": "l",
                        "á¸»": "l",
                        "Å¿": "l",
                        "Å‚": "l",
                        "Æš": "l",
                        "É«": "l",
                        "â±¡": "l",
                        "ê‰": "l",
                        "êž": "l",
                        "ê‡": "l",
                        "Ç‰": "lj",
                        "â“œ": "m",
                        "ï½": "m",
                        "á¸¿": "m",
                        "á¹": "m",
                        "á¹ƒ": "m",
                        "É±": "m",
                        "É¯": "m",
                        "â“": "n",
                        "ï½Ž": "n",
                        "Ç¹": "n",
                        "Å„": "n",
                        "Ã±": "n",
                        "á¹…": "n",
                        "Åˆ": "n",
                        "á¹‡": "n",
                        "Å†": "n",
                        "á¹‹": "n",
                        "á¹‰": "n",
                        "Æž": "n",
                        "É²": "n",
                        "Å‰": "n",
                        "êž‘": "n",
                        "êž¥": "n",
                        "ÇŒ": "nj",
                        "â“ž": "o",
                        "ï½": "o",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "á»“": "o",
                        "á»‘": "o",
                        "á»—": "o",
                        "á»•": "o",
                        "Ãµ": "o",
                        "á¹": "o",
                        "È­": "o",
                        "á¹": "o",
                        "Å": "o",
                        "á¹‘": "o",
                        "á¹“": "o",
                        "Å": "o",
                        "È¯": "o",
                        "È±": "o",
                        "Ã¶": "o",
                        "È«": "o",
                        "á»": "o",
                        "Å‘": "o",
                        "Ç’": "o",
                        "È": "o",
                        "È": "o",
                        "Æ¡": "o",
                        "á»": "o",
                        "á»›": "o",
                        "á»¡": "o",
                        "á»Ÿ": "o",
                        "á»£": "o",
                        "á»": "o",
                        "á»™": "o",
                        "Ç«": "o",
                        "Ç­": "o",
                        "Ã¸": "o",
                        "Ç¿": "o",
                        "É”": "o",
                        "ê‹": "o",
                        "ê": "o",
                        "Éµ": "o",
                        "Æ£": "oi",
                        "È£": "ou",
                        "ê": "oo",
                        "â“Ÿ": "p",
                        "ï½": "p",
                        "á¹•": "p",
                        "á¹—": "p",
                        "Æ¥": "p",
                        "áµ½": "p",
                        "ê‘": "p",
                        "ê“": "p",
                        "ê•": "p",
                        "â“ ": "q",
                        "ï½‘": "q",
                        "É‹": "q",
                        "ê—": "q",
                        "ê™": "q",
                        "â“¡": "r",
                        "ï½’": "r",
                        "Å•": "r",
                        "á¹™": "r",
                        "Å™": "r",
                        "È‘": "r",
                        "È“": "r",
                        "á¹›": "r",
                        "á¹": "r",
                        "Å—": "r",
                        "á¹Ÿ": "r",
                        "É": "r",
                        "É½": "r",
                        "ê›": "r",
                        "êž§": "r",
                        "êžƒ": "r",
                        "â“¢": "s",
                        "ï½“": "s",
                        "ÃŸ": "s",
                        "Å›": "s",
                        "á¹¥": "s",
                        "Å": "s",
                        "á¹¡": "s",
                        "Å¡": "s",
                        "á¹§": "s",
                        "á¹£": "s",
                        "á¹©": "s",
                        "È™": "s",
                        "ÅŸ": "s",
                        "È¿": "s",
                        "êž©": "s",
                        "êž…": "s",
                        "áº›": "s",
                        "â“£": "t",
                        "ï½”": "t",
                        "á¹«": "t",
                        "áº—": "t",
                        "Å¥": "t",
                        "á¹­": "t",
                        "È›": "t",
                        "Å£": "t",
                        "á¹±": "t",
                        "á¹¯": "t",
                        "Å§": "t",
                        "Æ­": "t",
                        "Êˆ": "t",
                        "â±¦": "t",
                        "êž‡": "t",
                        "êœ©": "tz",
                        "â“¤": "u",
                        "ï½•": "u",
                        "Ã¹": "u",
                        "Ãº": "u",
                        "Ã»": "u",
                        "Å©": "u",
                        "á¹¹": "u",
                        "Å«": "u",
                        "á¹»": "u",
                        "Å­": "u",
                        "Ã¼": "u",
                        "Çœ": "u",
                        "Ç˜": "u",
                        "Ç–": "u",
                        "Çš": "u",
                        "á»§": "u",
                        "Å¯": "u",
                        "Å±": "u",
                        "Ç”": "u",
                        "È•": "u",
                        "È—": "u",
                        "Æ°": "u",
                        "á»«": "u",
                        "á»©": "u",
                        "á»¯": "u",
                        "á»­": "u",
                        "á»±": "u",
                        "á»¥": "u",
                        "á¹³": "u",
                        "Å³": "u",
                        "á¹·": "u",
                        "á¹µ": "u",
                        "Ê‰": "u",
                        "â“¥": "v",
                        "ï½–": "v",
                        "á¹½": "v",
                        "á¹¿": "v",
                        "Ê‹": "v",
                        "êŸ": "v",
                        "ÊŒ": "v",
                        "ê¡": "vy",
                        "â“¦": "w",
                        "ï½—": "w",
                        "áº": "w",
                        "áºƒ": "w",
                        "Åµ": "w",
                        "áº‡": "w",
                        "áº…": "w",
                        "áº˜": "w",
                        "áº‰": "w",
                        "â±³": "w",
                        "â“§": "x",
                        "ï½˜": "x",
                        "áº‹": "x",
                        "áº": "x",
                        "â“¨": "y",
                        "ï½™": "y",
                        "á»³": "y",
                        "Ã½": "y",
                        "Å·": "y",
                        "á»¹": "y",
                        "È³": "y",
                        "áº": "y",
                        "Ã¿": "y",
                        "á»·": "y",
                        "áº™": "y",
                        "á»µ": "y",
                        "Æ´": "y",
                        "É": "y",
                        "á»¿": "y",
                        "â“©": "z",
                        "ï½š": "z",
                        "Åº": "z",
                        "áº‘": "z",
                        "Å¼": "z",
                        "Å¾": "z",
                        "áº“": "z",
                        "áº•": "z",
                        "Æ¶": "z",
                        "È¥": "z",
                        "É€": "z",
                        "â±¬": "z",
                        "ê£": "z",
                        "Î†": "Î‘",
                        "Îˆ": "Î•",
                        "Î‰": "Î—",
                        "ÎŠ": "Î™",
                        "Îª": "Î™",
                        "ÎŒ": "ÎŸ",
                        "ÎŽ": "Î¥",
                        "Î«": "Î¥",
                        "Î": "Î©",
                        "Î¬": "Î±",
                        "Î­": "Îµ",
                        "Î®": "Î·",
                        "Î¯": "Î¹",
                        "ÏŠ": "Î¹",
                        "Î": "Î¹",
                        "ÏŒ": "Î¿",
                        "Ï": "Ï…",
                        "Ï‹": "Ï…",
                        "Î°": "Ï…",
                        "Ï‰": "Ï‰",
                        "Ï‚": "Ïƒ"
                    };
                    return e
                }), t.define("select2/data/base", ["../utils"], function(e) {
                    function t(e, n) {
                        t.__super__.constructor.call(this)
                    }
                    return e.Extend(t, e.Observable), t.prototype.current = function(e) {
                        throw new Error("The `current` method must be defined in child classes.")
                    }, t.prototype.query = function(e, t) {
                        throw new Error("The `query` method must be defined in child classes.")
                    }, t.prototype.bind = function(e, t) {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                        var i = t.id + "-result-";
                        return i += e.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4)
                    }, t
                }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        this.$element = e, this.options = t, i.__super__.constructor.call(this)
                    }
                    return t.Extend(i, e), i.prototype.current = function(e) {
                        var t = [],
                            i = this;
                        this.$element.find(":selected").each(function() {
                            var e = n(this),
                                r = i.item(e);
                            t.push(r)
                        }), e(t)
                    }, i.prototype.select = function(e) {
                        var t = this;
                        if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                        if (this.$element.prop("multiple")) this.current(function(i) {
                            var r = [];
                            e = [e], e.push.apply(e, i);
                            for (var o = 0; o < e.length; o++) {
                                var s = e[o].id; - 1 === n.inArray(s, r) && r.push(s)
                            }
                            t.$element.val(r), t.$element.trigger("change")
                        });
                        else {
                            var i = e.id;
                            this.$element.val(i), this.$element.trigger("change")
                        }
                    }, i.prototype.unselect = function(e) {
                        var t = this;
                        if (this.$element.prop("multiple")) return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                            for (var r = [], o = 0; o < i.length; o++) {
                                var s = i[o].id;
                                s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                            }
                            t.$element.val(r), t.$element.trigger("change")
                        })
                    }, i.prototype.bind = function(e, t) {
                        var n = this;
                        this.container = e, e.on("select", function(e) {
                            n.select(e.data)
                        }), e.on("unselect", function(e) {
                            n.unselect(e.data)
                        })
                    }, i.prototype.destroy = function() {
                        this.$element.find("*").each(function() {
                            n.removeData(this, "data")
                        })
                    }, i.prototype.query = function(e, t) {
                        var i = [],
                            r = this,
                            o = this.$element.children();
                        o.each(function() {
                            var t = n(this);
                            if (t.is("option") || t.is("optgroup")) {
                                var o = r.item(t),
                                    s = r.matches(e, o);
                                null !== s && i.push(s)
                            }
                        }), t({
                            results: i
                        })
                    }, i.prototype.addOptions = function(e) {
                        t.appendMany(this.$element, e)
                    }, i.prototype.option = function(e) {
                        var t;
                        e.children ? (t = document.createElement("optgroup"), t.label = e.text) : (t = document.createElement("option"), void 0 !== t.textContent ? t.textContent = e.text : t.innerText = e.text), e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                        var i = n(t),
                            r = this._normalizeItem(e);
                        return r.element = t, n.data(t, "data", r), i
                    }, i.prototype.item = function(e) {
                        var t = {};
                        if (t = n.data(e[0], "data"), null != t) return t;
                        if (e.is("option")) t = {
                            id: e.val(),
                            text: e.text(),
                            disabled: e.prop("disabled"),
                            selected: e.prop("selected"),
                            title: e.prop("title")
                        };
                        else if (e.is("optgroup")) {
                            t = {
                                text: e.prop("label"),
                                children: [],
                                title: e.prop("title")
                            };
                            for (var i = e.children("option"), r = [], o = 0; o < i.length; o++) {
                                var s = n(i[o]),
                                    a = this.item(s);
                                r.push(a)
                            }
                            t.children = r
                        }
                        return t = this._normalizeItem(t), t.element = e[0], n.data(e[0], "data", t), t
                    }, i.prototype._normalizeItem = function(e) {
                        n.isPlainObject(e) || (e = {
                            id: e,
                            text: e
                        }), e = n.extend({}, {
                            text: ""
                        }, e);
                        var t = {
                            selected: !1,
                            disabled: !1
                        };
                        return null != e.id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                    }, i.prototype.matches = function(e, t) {
                        var n = this.options.get("matcher");
                        return n(e, t)
                    }, i
                }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        var n = t.get("data") || [];
                        i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                    }
                    return t.Extend(i, e), i.prototype.select = function(e) {
                        var t = this.$element.find("option").filter(function(t, n) {
                            return n.value == e.id.toString()
                        });
                        0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                    }, i.prototype.convertToOptions = function(e) {
                        function i(e) {
                            return function() {
                                return n(this).val() == e.id
                            }
                        }
                        for (var r = this, o = this.$element.find("option"), s = o.map(function() {
                                return r.item(n(this)).id
                            }).get(), a = [], l = 0; l < e.length; l++) {
                            var c = this._normalizeItem(e[l]);
                            if (n.inArray(c.id, s) >= 0) {
                                var u = o.filter(i(c)),
                                    d = this.item(u),
                                    h = n.extend(!0, {}, c, d),
                                    p = this.option(h);
                                u.replaceWith(p)
                            } else {
                                var f = this.option(c);
                                if (c.children) {
                                    var m = this.convertToOptions(c.children);
                                    t.appendMany(f, m)
                                }
                                a.push(f)
                            }
                        }
                        return a
                    }, i
                }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                    function i(e, t) {
                        this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                    }
                    return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                        var t = {
                            data: function(e) {
                                return n.extend({}, e, {
                                    q: e.term
                                })
                            },
                            transport: function(e, t, i) {
                                var r = n.ajax(e);
                                return r.then(t), r.fail(i), r
                            }
                        };
                        return n.extend({}, t, e, !0)
                    }, i.prototype.processResults = function(e) {
                        return e
                    }, i.prototype.query = function(e, t) {
                        function i() {
                            var i = o.transport(o, function(i) {
                                var o = r.processResults(i, e);
                                r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                            }, function() {
                                i.status && "0" === i.status || r.trigger("results:message", {
                                    message: "errorLoading"
                                })
                            });
                            r._request = i
                        }
                        var r = this;
                        null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                        var o = n.extend({
                            type: "GET"
                        }, this.ajaxOptions);
                        "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                    }, i
                }), t.define("select2/data/tags", ["jquery"], function(e) {
                    function t(t, n, i) {
                        var r = i.get("tags"),
                            o = i.get("createTag");
                        void 0 !== o && (this.createTag = o);
                        var s = i.get("insertTag");
                        if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r))
                            for (var a = 0; a < r.length; a++) {
                                var l = r[a],
                                    c = this._normalizeItem(l),
                                    u = this.option(c);
                                this.$element.append(u)
                            }
                    }
                    return t.prototype.query = function(e, t, n) {
                        function i(e, o) {
                            for (var s = e.results, a = 0; a < s.length; a++) {
                                var l = s[a],
                                    c = null != l.children && !i({
                                        results: l.children
                                    }, !0),
                                    u = l.text === t.term;
                                if (u || c) return !o && (e.data = s, void n(e))
                            }
                            if (o) return !0;
                            var d = r.createTag(t);
                            if (null != d) {
                                var h = r.option(d);
                                h.attr("data-select2-tag", !0), r.addOptions([h]), r.insertTag(s, d)
                            }
                            e.results = s, n(e)
                        }
                        var r = this;
                        return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
                    }, t.prototype.createTag = function(t, n) {
                        var i = e.trim(n.term);
                        return "" === i ? null : {
                            id: i,
                            text: i
                        }
                    }, t.prototype.insertTag = function(e, t, n) {
                        t.unshift(n)
                    }, t.prototype._removeOldTags = function(t) {
                        var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                        n.each(function() {
                            this.selected || e(this).remove()
                        })
                    }, t
                }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                    function t(e, t, n) {
                        var i = n.get("tokenizer");
                        void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                    }
                    return t.prototype.bind = function(e, t, n) {
                        e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                    }, t.prototype.query = function(t, n, i) {
                        function r(t) {
                            var n = s._normalizeItem(t),
                                i = s.$element.find("option").filter(function() {
                                    return e(this).val() === n.id
                                });
                            if (!i.length) {
                                var r = s.option(n);
                                r.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([r])
                            }
                            o(n)
                        }

                        function o(e) {
                            s.trigger("select", {
                                data: e
                            })
                        }
                        var s = this;
                        n.term = n.term || "";
                        var a = this.tokenizer(n, this.options, r);
                        a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), n.term = a.term), t.call(this, n, i)
                    }, t.prototype.tokenizer = function(t, n, i, r) {
                        for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                                return {
                                    id: e.term,
                                    text: e.term
                                }
                            }; a < s.length;) {
                            var c = s[a];
                            if (-1 !== e.inArray(c, o)) {
                                var u = s.substr(0, a),
                                    d = e.extend({}, n, {
                                        term: u
                                    }),
                                    h = l(d);
                                null != h ? (r(h), s = s.substr(a + 1) || "", a = 0) : a++
                            } else a++
                        }
                        return {
                            term: s
                        }
                    }, t
                }), t.define("select2/data/minimumInputLength", [], function() {
                    function e(e, t, n) {
                        this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                            message: "inputTooShort",
                            args: {
                                minimum: this.minimumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumInputLength", [], function() {
                    function e(e, t, n) {
                        this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                            message: "inputTooLong",
                            args: {
                                maximum: this.maximumInputLength,
                                input: t.term,
                                params: t
                            }
                        }) : void e.call(this, t, n)
                    }, e
                }), t.define("select2/data/maximumSelectionLength", [], function() {
                    function e(e, t, n) {
                        this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        var i = this;
                        this.current(function(r) {
                            var o = null != r ? r.length : 0;
                            return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                message: "maximumSelected",
                                args: {
                                    maximum: i.maximumSelectionLength
                                }
                            }) : void e.call(i, t, n)
                        })
                    }, e
                }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                    function n(e, t) {
                        this.$element = e, this.options = t, n.__super__.constructor.call(this)
                    }
                    return t.Extend(n, t.Observable), n.prototype.render = function() {
                        var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                    }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
                        this.$dropdown.remove()
                    }, n
                }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e, t) {
                    function n() {}
                    return n.prototype.render = function(t) {
                        var n = t.call(this),
                            i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                        return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                    }, n.prototype.bind = function(t, n, i) {
                        var r = this;
                        t.call(this, n, i), this.$search.on("keydown", function(e) {
                            r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                        }), this.$search.on("input", function(t) {
                            e(this).off("keyup")
                        }), this.$search.on("keyup input", function(e) {
                            r.handleSearch(e)
                        }), n.on("open", function() {
                            r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() {
                                r.$search.focus()
                            }, 0)
                        }), n.on("close", function() {
                            r.$search.attr("tabindex", -1), r.$search.val("")
                        }), n.on("focus", function() {
                            n.isOpen() && r.$search.focus()
                        }), n.on("results:all", function(e) {
                            if (null == e.query.term || "" === e.query.term) {
                                var t = r.showSearch(e);
                                t ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                            }
                        })
                    }, n.prototype.handleSearch = function(e) {
                        if (!this._keyUpPrevented) {
                            var t = this.$search.val();
                            this.trigger("query", {
                                term: t
                            })
                        }
                        this._keyUpPrevented = !1
                    }, n.prototype.showSearch = function(e, t) {
                        return !0
                    }, n
                }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                    function e(e, t, n, i) {
                        this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                    }
                    return e.prototype.append = function(e, t) {
                        t.results = this.removePlaceholder(t.results), e.call(this, t)
                    }, e.prototype.normalizePlaceholder = function(e, t) {
                        return "string" == typeof t && (t = {
                            id: "",
                            text: t
                        }), t
                    }, e.prototype.removePlaceholder = function(e, t) {
                        for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                            var r = t[i];
                            this.placeholder.id === r.id && n.splice(i, 1)
                        }
                        return n
                    }, e
                }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                    function t(e, t, n, i) {
                        this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                    }
                    return t.prototype.append = function(e, t) {
                        this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                    }, t.prototype.bind = function(t, n, i) {
                        var r = this;
                        t.call(this, n, i), n.on("query", function(e) {
                            r.lastParams = e, r.loading = !0
                        }), n.on("query:append", function(e) {
                            r.lastParams = e, r.loading = !0
                        }), this.$results.on("scroll", function() {
                            var t = e.contains(document.documentElement, r.$loadingMore[0]);
                            if (!r.loading && t) {
                                var n = r.$results.offset().top + r.$results.outerHeight(!1),
                                    i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                                n + 50 >= i && r.loadMore()
                            }
                        })
                    }, t.prototype.loadMore = function() {
                        this.loading = !0;
                        var t = e.extend({}, {
                            page: 1
                        }, this.lastParams);
                        t.page++, this.trigger("query:append", t)
                    }, t.prototype.showLoadingMore = function(e, t) {
                        return t.pagination && t.pagination.more
                    }, t.prototype.createLoadingMore = function() {
                        var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                            n = this.options.get("translations").get("loadingMore");
                        return t.html(n(this.lastParams)), t
                    }, t
                }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                    function n(t, n, i) {
                        this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                    }
                    return n.prototype.bind = function(e, t, n) {
                        var i = this,
                            r = !1;
                        e.call(this, t, n), t.on("open", function() {
                            i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }), t.on("results:append", function() {
                                i._positionDropdown(), i._resizeDropdown()
                            }))
                        }), t.on("close", function() {
                            i._hideDropdown(), i._detachPositioningHandler(t)
                        }), this.$dropdownContainer.on("mousedown", function(e) {
                            e.stopPropagation()
                        })
                    }, n.prototype.destroy = function(e) {
                        e.call(this), this.$dropdownContainer.remove()
                    }, n.prototype.position = function(e, t, n) {
                        t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                            position: "absolute",
                            top: -999999
                        }), this.$container = n
                    }, n.prototype.render = function(t) {
                        var n = e("<span></span>"),
                            i = t.call(this);
                        return n.append(i), this.$dropdownContainer = n, n
                    }, n.prototype._hideDropdown = function(e) {
                        this.$dropdownContainer.detach()
                    }, n.prototype._attachPositioningHandler = function(n, i) {
                        var r = this,
                            o = "scroll.select2." + i.id,
                            s = "resize.select2." + i.id,
                            a = "orientationchange.select2." + i.id,
                            l = this.$container.parents().filter(t.hasScroll);
                        l.each(function() {
                            e(this).data("select2-scroll-position", {
                                x: e(this).scrollLeft(),
                                y: e(this).scrollTop()
                            })
                        }), l.on(o, function(t) {
                            var n = e(this).data("select2-scroll-position");
                            e(this).scrollTop(n.y)
                        }), e(window).on(o + " " + s + " " + a, function(e) {
                            r._positionDropdown(), r._resizeDropdown()
                        })
                    }, n.prototype._detachPositioningHandler = function(n, i) {
                        var r = "scroll.select2." + i.id,
                            o = "resize.select2." + i.id,
                            s = "orientationchange.select2." + i.id,
                            a = this.$container.parents().filter(t.hasScroll);
                        a.off(r), e(window).off(r + " " + o + " " + s)
                    }, n.prototype._positionDropdown = function() {
                        var t = e(window),
                            n = this.$dropdown.hasClass("select2-dropdown--above"),
                            i = this.$dropdown.hasClass("select2-dropdown--below"),
                            r = null,
                            o = this.$container.offset();
                        o.bottom = o.top + this.$container.outerHeight(!1);
                        var s = {
                            height: this.$container.outerHeight(!1)
                        };
                        s.top = o.top, s.bottom = o.top + s.height;
                        var a = {
                                height: this.$dropdown.outerHeight(!1)
                            },
                            l = {
                                top: t.scrollTop(),
                                bottom: t.scrollTop() + t.height()
                            },
                            c = l.top < o.top - a.height,
                            u = l.bottom > o.bottom + a.height,
                            d = {
                                left: o.left,
                                top: s.bottom
                            },
                            h = this.$dropdownParent;
                        "static" === h.css("position") && (h = h.offsetParent());
                        var p = h.offset();
                        d.top -= p.top, d.left -= p.left, n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = s.top - p.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
                    }, n.prototype._resizeDropdown = function() {
                        var e = {
                            width: this.$container.outerWidth(!1) + "px"
                        };
                        this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                    }, n.prototype._showDropdown = function(e) {
                        this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                    }, n
                }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                    function e(t) {
                        for (var n = 0, i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.children ? n += e(r.children) : n++
                        }
                        return n
                    }

                    function t(e, t, n, i) {
                        this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                    }
                    return t.prototype.showSearch = function(t, n) {
                        return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                    }, t
                }), t.define("select2/dropdown/selectOnClose", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("close", function(e) {
                            i._handleSelectOnClose(e)
                        })
                    }, e.prototype._handleSelectOnClose = function(e, t) {
                        if (t && null != t.originalSelect2Event) {
                            var n = t.originalSelect2Event;
                            if ("select" === n._type || "unselect" === n._type) return
                        }
                        var i = this.getHighlightedResults();
                        if (!(i.length < 1)) {
                            var r = i.data("data");
                            null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                data: r
                            })
                        }
                    }, e
                }), t.define("select2/dropdown/closeOnSelect", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        var i = this;
                        e.call(this, t, n), t.on("select", function(e) {
                            i._selectTriggered(e)
                        }), t.on("unselect", function(e) {
                            i._selectTriggered(e)
                        })
                    }, e.prototype._selectTriggered = function(e, t) {
                        var n = t.originalEvent;
                        n && n.ctrlKey || this.trigger("close", {
                            originalEvent: n,
                            originalSelect2Event: t
                        })
                    }, e
                }), t.define("select2/i18n/en", [], function() {
                    return {
                        errorLoading: function() {
                            return "The results could not be loaded."
                        },
                        inputTooLong: function(e) {
                            var t = e.input.length - e.maximum,
                                n = "Please delete " + t + " character";
                            return 1 != t && (n += "s"), n
                        },
                        inputTooShort: function(e) {
                            var t = e.minimum - e.input.length,
                                n = "Please enter " + t + " or more characters";
                            return n
                        },
                        loadingMore: function() {
                            return "Loading more resultsâ€¦"
                        },
                        maximumSelected: function(e) {
                            var t = "You can only select " + e.maximum + " item";
                            return 1 != e.maximum && (t += "s"), t
                        },
                        noResults: function() {
                            return "No results found"
                        },
                        searching: function() {
                            return "Searchingâ€¦"
                        }
                    }
                }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, r, o, s, a, l, c, u, d, h, p, f, m, g, v, y, b, $, w, x, C, T, k, E, S, A) {
                    function R() {
                        this.reset()
                    }
                    R.prototype.apply = function(d) {
                        if (d = e.extend(!0, {}, this.defaults, d), null == d.dataAdapter) {
                            if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = h, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), null != d.query) {
                                var A = t(d.amdBase + "compat/query");
                                d.dataAdapter = c.Decorate(d.dataAdapter, A)
                            }
                            if (null != d.initSelection) {
                                var R = t(d.amdBase + "compat/initSelection");
                                d.dataAdapter = c.Decorate(d.dataAdapter, R)
                            }
                        }
                        if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, x)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, E))), null == d.dropdownAdapter) {
                            if (d.multiple) d.dropdownAdapter = $;
                            else {
                                var _ = c.Decorate($, w);
                                d.dropdownAdapter = _
                            }
                            if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, k)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, S)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                var N = t(d.amdBase + "compat/dropdownCss");
                                d.dropdownAdapter = c.Decorate(d.dropdownAdapter, N)
                            }
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, T)
                        }
                        if (null == d.selectionAdapter) {
                            if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                var D = t(d.amdBase + "compat/containerCss");
                                d.selectionAdapter = c.Decorate(d.selectionAdapter, D)
                            }
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                        }
                        if ("string" == typeof d.language)
                            if (d.language.indexOf("-") > 0) {
                                var I = d.language.split("-"),
                                    L = I[0];
                                d.language = [d.language, L]
                            } else d.language = [d.language];
                        if (e.isArray(d.language)) {
                            var O = new u;
                            d.language.push("en");
                            for (var q = d.language, j = 0; j < q.length; j++) {
                                var M = q[j],
                                    P = {};
                                try {
                                    P = u.loadPath(M)
                                } catch (F) {
                                    try {
                                        M = this.defaults.amdLanguageBase + M, P = u.loadPath(M)
                                    } catch (U) {
                                        d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');
                                        continue
                                    }
                                }
                                O.extend(P)
                            }
                            d.translations = O
                        } else {
                            var H = u.loadPath(this.defaults.amdLanguageBase + "en"),
                                W = new u(d.language);
                            W.extend(H), d.translations = W
                        }
                        return d
                    }, R.prototype.reset = function() {
                        function t(e) {
                            function t(e) {
                                return d[e] || e
                            }
                            return e.replace(/[^\u0000-\u007E]/g, t)
                        }

                        function n(i, r) {
                            if ("" === e.trim(i.term)) return r;
                            if (r.children && r.children.length > 0) {
                                for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) {
                                    var a = r.children[s],
                                        l = n(i, a);
                                    null == l && o.children.splice(s, 1)
                                }
                                return o.children.length > 0 ? o : n(i, o)
                            }
                            var c = t(r.text).toUpperCase(),
                                u = t(i.term).toUpperCase();
                            return c.indexOf(u) > -1 ? r : null
                        }
                        this.defaults = {
                            amdBase: "./",
                            amdLanguageBase: "./i18n/",
                            closeOnSelect: !0,
                            debug: !1,
                            dropdownAutoWidth: !1,
                            escapeMarkup: c.escapeMarkup,
                            language: A,
                            matcher: n,
                            minimumInputLength: 0,
                            maximumInputLength: 0,
                            maximumSelectionLength: 0,
                            minimumResultsForSearch: 0,
                            selectOnClose: !1,
                            sorter: function(e) {
                                return e
                            },
                            templateResult: function(e) {
                                return e.text
                            },
                            templateSelection: function(e) {
                                return e.text
                            },
                            theme: "default",
                            width: "resolve"
                        }
                    }, R.prototype.set = function(t, n) {
                        var i = e.camelCase(t),
                            r = {};
                        r[i] = n;
                        var o = c._convertData(r);
                        e.extend(this.defaults, o)
                    };
                    var _ = new R;
                    return _
                }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                    function r(t, r) {
                        if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                            var o = e(this.get("amdBase") + "compat/inputData");
                            this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                        }
                    }
                    return r.prototype.fromElement = function(e) {
                        var n = ["select2"];
                        null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                        var r = {};
                        r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                        var o = t.extend(!0, {}, r);
                        o = i._convertData(o);
                        for (var s in o) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                        return this
                    }, r.prototype.get = function(e) {
                        return this.options[e]
                    }, r.prototype.set = function(e, t) {
                        this.options[e] = t
                    }, r
                }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                    var r = function(e, n) {
                        null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), r.__super__.constructor.call(this);
                        var i = e.attr("tabindex") || 0;
                        e.data("old-tabindex", i), e.attr("tabindex", "-1");
                        var o = this.options.get("dataAdapter");
                        this.dataAdapter = new o(e, this.options);
                        var s = this.render();
                        this._placeContainer(s);
                        var a = this.options.get("selectionAdapter");
                        this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                        var l = this.options.get("dropdownAdapter");
                        this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                        var c = this.options.get("resultsAdapter");
                        this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                        var u = this;
                        this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                            u.trigger("selection:update", {
                                data: e
                            })
                        }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                    };
                    return n.Extend(r, n.Observable), r.prototype._generateId = function(e) {
                        var t = "";
                        return t = null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), t = t.replace(/(:|\.|\[|\]|,)/g, ""), t = "select2-" + t
                    }, r.prototype._placeContainer = function(e) {
                        e.insertAfter(this.$element);
                        var t = this._resolveWidth(this.$element, this.options.get("width"));
                        null != t && e.css("width", t)
                    }, r.prototype._resolveWidth = function(e, t) {
                        var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                        if ("resolve" == t) {
                            var i = this._resolveWidth(e, "style");
                            return null != i ? i : this._resolveWidth(e, "element")
                        }
                        if ("element" == t) {
                            var r = e.outerWidth(!1);
                            return 0 >= r ? "auto" : r + "px"
                        }
                        if ("style" == t) {
                            var o = e.attr("style");
                            if ("string" != typeof o) return null;
                            for (var s = o.split(";"), a = 0, l = s.length; l > a; a += 1) {
                                var c = s[a].replace(/\s/g, ""),
                                    u = c.match(n);
                                if (null !== u && u.length >= 1) return u[1]
                            }
                            return null
                        }
                        return t
                    }, r.prototype._bindAdapters = function() {
                        this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                    }, r.prototype._registerDomEvents = function() {
                        var t = this;
                        this.$element.on("change.select2", function() {
                            t.dataAdapter.current(function(e) {
                                t.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }), this.$element.on("focus.select2", function(e) {
                            t.trigger("focus", e)
                        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                        var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                        null != i ? (this._observer = new i(function(n) {
                            e.each(n, t._syncA), e.each(n, t._syncS)
                        }), this._observer.observe(this.$element[0], {
                            attributes: !0,
                            childList: !0,
                            subtree: !1
                        })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                    }, r.prototype._registerDataEvents = function() {
                        var e = this;
                        this.dataAdapter.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, r.prototype._registerSelectionEvents = function() {
                        var t = this,
                            n = ["toggle", "focus"];
                        this.selection.on("toggle", function() {
                            t.toggleDropdown()
                        }), this.selection.on("focus", function(e) {
                            t.focus(e)
                        }), this.selection.on("*", function(i, r) {
                            -1 === e.inArray(i, n) && t.trigger(i, r)
                        })
                    }, r.prototype._registerDropdownEvents = function() {
                        var e = this;
                        this.dropdown.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, r.prototype._registerResultsEvents = function() {
                        var e = this;
                        this.results.on("*", function(t, n) {
                            e.trigger(t, n)
                        })
                    }, r.prototype._registerEvents = function() {
                        var e = this;
                        this.on("open", function() {
                            e.$container.addClass("select2-container--open")
                        }), this.on("close", function() {
                            e.$container.removeClass("select2-container--open")
                        }), this.on("enable", function() {
                            e.$container.removeClass("select2-container--disabled")
                        }), this.on("disable", function() {
                            e.$container.addClass("select2-container--disabled")
                        }), this.on("blur", function() {
                            e.$container.removeClass("select2-container--focus")
                        }), this.on("query", function(t) {
                            e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) {
                                e.trigger("results:all", {
                                    data: n,
                                    query: t
                                })
                            })
                        }), this.on("query:append", function(t) {
                            this.dataAdapter.query(t, function(n) {
                                e.trigger("results:append", {
                                    data: n,
                                    query: t
                                })
                            })
                        }), this.on("keypress", function(t) {
                            var n = t.which;
                            e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                        })
                    }, r.prototype._syncAttributes = function() {
                        this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                    }, r.prototype._syncSubtree = function(e, t) {
                        var n = !1,
                            i = this;
                        if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                            if (t)
                                if (t.addedNodes && t.addedNodes.length > 0)
                                    for (var r = 0; r < t.addedNodes.length; r++) {
                                        var o = t.addedNodes[r];
                                        o.selected && (n = !0)
                                    } else t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                                else n = !0;
                            n && this.dataAdapter.current(function(e) {
                                i.trigger("selection:update", {
                                    data: e
                                })
                            })
                        }
                    }, r.prototype.trigger = function(e, t) {
                        var n = r.__super__.trigger,
                            i = {
                                open: "opening",
                                close: "closing",
                                select: "selecting",
                                unselect: "unselecting"
                            };
                        if (void 0 === t && (t = {}), e in i) {
                            var o = i[e],
                                s = {
                                    prevented: !1,
                                    name: e,
                                    args: t
                                };
                            if (n.call(this, o, s), s.prevented) return void(t.prevented = !0)
                        }
                        n.call(this, e, t)
                    }, r.prototype.toggleDropdown = function() {
                        this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                    }, r.prototype.open = function() {
                        this.isOpen() || this.trigger("query", {})
                    }, r.prototype.close = function() {
                        this.isOpen() && this.trigger("close", {})
                    }, r.prototype.isOpen = function() {
                        return this.$container.hasClass("select2-container--open")
                    }, r.prototype.hasFocus = function() {
                        return this.$container.hasClass("select2-container--focus")
                    }, r.prototype.focus = function(e) {
                        this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                    }, r.prototype.enable = function(e) {
                        this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                        var t = !e[0];
                        this.$element.prop("disabled", t)
                    }, r.prototype.data = function() {
                        this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                        var e = [];
                        return this.dataAdapter.current(function(t) {
                            e = t
                        }), e
                    }, r.prototype.val = function(t) {
                        if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                        var n = t[0];
                        e.isArray(n) && (n = e.map(n, function(e) {
                            return e.toString()
                        })), this.$element.val(n).trigger("change")
                    }, r.prototype.destroy = function() {
                        this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                    }, r.prototype.render = function() {
                        var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                        return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                    }, r
                }), t.define("select2/compat/utils", ["jquery"], function(e) {
                    function t(t, n, i) {
                        var r, o, s = [];
                        r = e.trim(t.attr("class")), r && (r = "" + r, e(r.split(/\s+/)).each(function() {
                            0 === this.indexOf("select2-") && s.push(this)
                        })), r = e.trim(n.attr("class")), r && (r = "" + r, e(r.split(/\s+/)).each(function() {
                            0 !== this.indexOf("select2-") && (o = i(this), null != o && s.push(o))
                        })), t.attr("class", s.join(" "))
                    }
                    return {
                        syncCssClasses: t
                    }
                }), t.define("select2/compat/containerCss", ["jquery", "./utils"], function(e, t) {
                    function n(e) {
                        return null
                    }

                    function i() {}
                    return i.prototype.render = function(i) {
                        var r = i.call(this),
                            o = this.options.get("containerCssClass") || "";
                        e.isFunction(o) && (o = o(this.$element));
                        var s = this.options.get("adaptContainerCssClass");
                        if (s = s || n, -1 !== o.indexOf(":all:")) {
                            o = o.replace(":all:", "");
                            var a = s;
                            s = function(e) {
                                var t = a(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var l = this.options.get("containerCss") || {};
                        return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(r, this.$element, s), r.css(l), r.addClass(o), r
                    }, i
                }), t.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(e, t) {
                    function n(e) {
                        return null
                    }

                    function i() {}
                    return i.prototype.render = function(i) {
                        var r = i.call(this),
                            o = this.options.get("dropdownCssClass") || "";
                        e.isFunction(o) && (o = o(this.$element));
                        var s = this.options.get("adaptDropdownCssClass");
                        if (s = s || n, -1 !== o.indexOf(":all:")) {
                            o = o.replace(":all:", "");
                            var a = s;
                            s = function(e) {
                                var t = a(e);
                                return null != t ? t + " " + e : e
                            }
                        }
                        var l = this.options.get("dropdownCss") || {};
                        return e.isFunction(l) && (l = l(this.$element)), t.syncCssClasses(r, this.$element, s), r.css(l), r.addClass(o), r
                    }, i
                }), t.define("select2/compat/initSelection", ["jquery"], function(e) {
                    function t(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),
                            this.initSelection = n.get("initSelection"), this._isInitialized = !1, e.call(this, t, n)
                    }
                    return t.prototype.current = function(t, n) {
                        var i = this;
                        return this._isInitialized ? void t.call(this, n) : void this.initSelection.call(null, this.$element, function(t) {
                            i._isInitialized = !0, e.isArray(t) || (t = [t]), n(t)
                        })
                    }, t
                }), t.define("select2/compat/inputData", ["jquery"], function(e) {
                    function t(e, t, n) {
                        this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === t.prop("type") && n.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), e.call(this, t, n)
                    }
                    return t.prototype.current = function(t, n) {
                        function i(t, n) {
                            var r = [];
                            return t.selected || -1 !== e.inArray(t.id, n) ? (t.selected = !0, r.push(t)) : t.selected = !1, t.children && r.push.apply(r, i(t.children, n)), r
                        }
                        for (var r = [], o = 0; o < this._currentData.length; o++) {
                            var s = this._currentData[o];
                            r.push.apply(r, i(s, this.$element.val().split(this._valueSeparator)))
                        }
                        n(r)
                    }, t.prototype.select = function(t, n) {
                        if (this.options.get("multiple")) {
                            var i = this.$element.val();
                            i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                        } else this.current(function(t) {
                            e.map(t, function(e) {
                                e.selected = !1
                            })
                        }), this.$element.val(n.id), this.$element.trigger("change")
                    }, t.prototype.unselect = function(e, t) {
                        var n = this;
                        t.selected = !1, this.current(function(e) {
                            for (var i = [], r = 0; r < e.length; r++) {
                                var o = e[r];
                                t.id != o.id && i.push(o.id)
                            }
                            n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                        })
                    }, t.prototype.query = function(e, t, n) {
                        for (var i = [], r = 0; r < this._currentData.length; r++) {
                            var o = this._currentData[r],
                                s = this.matches(t, o);
                            null !== s && i.push(s)
                        }
                        n({
                            results: i
                        })
                    }, t.prototype.addOptions = function(t, n) {
                        var i = e.map(n, function(t) {
                            return e.data(t[0], "data")
                        });
                        this._currentData.push.apply(this._currentData, i)
                    }, t
                }), t.define("select2/compat/matcher", ["jquery"], function(e) {
                    function t(t) {
                        function n(n, i) {
                            var r = e.extend(!0, {}, i);
                            if (null == n.term || "" === e.trim(n.term)) return r;
                            if (i.children) {
                                for (var o = i.children.length - 1; o >= 0; o--) {
                                    var s = i.children[o],
                                        a = t(n.term, s.text, s);
                                    a || r.children.splice(o, 1)
                                }
                                if (r.children.length > 0) return r
                            }
                            return t(n.term, i.text, i) ? r : null
                        }
                        return n
                    }
                    return t
                }), t.define("select2/compat/query", [], function() {
                    function e(e, t, n) {
                        n.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), e.call(this, t, n)
                    }
                    return e.prototype.query = function(e, t, n) {
                        t.callback = n;
                        var i = this.options.get("query");
                        i.call(null, t)
                    }, e
                }), t.define("select2/dropdown/attachContainer", [], function() {
                    function e(e, t, n) {
                        e.call(this, t, n)
                    }
                    return e.prototype.position = function(e, t, n) {
                        var i = n.find(".dropdown-wrapper");
                        i.append(t), t.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                    }, e
                }), t.define("select2/dropdown/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$dropdown.on(i.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }), t.define("select2/selection/stopPropagation", [], function() {
                    function e() {}
                    return e.prototype.bind = function(e, t, n) {
                        e.call(this, t, n);
                        var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                        this.$selection.on(i.join(" "), function(e) {
                            e.stopPropagation()
                        })
                    }, e
                }),
                function(n) {
                    "function" == typeof t.define && t.define.amd ? t.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(e)
                }(function(e) {
                    function t(t) {
                        var s = t || window.event,
                            a = l.call(arguments, 1),
                            c = 0,
                            d = 0,
                            h = 0,
                            p = 0,
                            f = 0,
                            m = 0;
                        if (t = e.event.fix(s), t.type = "mousewheel", "detail" in s && (h = -1 * s.detail), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = -1 * s.wheelDeltaX), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = -1 * h, h = 0), c = 0 === h ? d : h, "deltaY" in s && (h = -1 * s.deltaY, c = h), "deltaX" in s && (d = s.deltaX, 0 === h && (c = -1 * d)), 0 !== h || 0 !== d) {
                            if (1 === s.deltaMode) {
                                var g = e.data(this, "mousewheel-line-height");
                                c *= g, h *= g, d *= g
                            } else if (2 === s.deltaMode) {
                                var v = e.data(this, "mousewheel-page-height");
                                c *= v, h *= v, d *= v
                            }
                            if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || o > p) && (o = p, i(s, p) && (o /= 40)), i(s, p) && (c /= 40, d /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u.settings.normalizeOffset && this.getBoundingClientRect) {
                                var y = this.getBoundingClientRect();
                                f = t.clientX - y.left, m = t.clientY - y.top
                            }
                            return t.deltaX = d, t.deltaY = h, t.deltaFactor = o, t.offsetX = f, t.offsetY = m, t.deltaMode = 0, a.unshift(t, c, d, h), r && clearTimeout(r), r = setTimeout(n, 200), (e.event.dispatch || e.event.handle).apply(this, a)
                        }
                    }

                    function n() {
                        o = null
                    }

                    function i(e, t) {
                        return u.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
                    }
                    var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                        a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        l = Array.prototype.slice;
                    if (e.event.fixHooks)
                        for (var c = s.length; c;) e.event.fixHooks[s[--c]] = e.event.mouseHooks;
                    var u = e.event.special.mousewheel = {
                        version: "3.1.12",
                        setup: function() {
                            if (this.addEventListener)
                                for (var n = a.length; n;) this.addEventListener(a[--n], t, !1);
                            else this.onmousewheel = t;
                            e.data(this, "mousewheel-line-height", u.getLineHeight(this)), e.data(this, "mousewheel-page-height", u.getPageHeight(this))
                        },
                        teardown: function() {
                            if (this.removeEventListener)
                                for (var n = a.length; n;) this.removeEventListener(a[--n], t, !1);
                            else this.onmousewheel = null;
                            e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
                        },
                        getLineHeight: function(t) {
                            var n = e(t),
                                i = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                            return i.length || (i = e("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                        },
                        getPageHeight: function(t) {
                            return e(t).height()
                        },
                        settings: {
                            adjustOldDeltas: !0,
                            normalizeOffset: !0
                        }
                    };
                    e.fn.extend({
                        mousewheel: function(e) {
                            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                        },
                        unmousewheel: function(e) {
                            return this.unbind("mousewheel", e)
                        }
                    })
                }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
                    if (null == e.fn.select2) {
                        var r = ["open", "close", "destroy"];
                        e.fn.select2 = function(t) {
                            if (t = t || {}, "object" == typeof t) return this.each(function() {
                                var i = e.extend(!0, {}, t);
                                new n(e(this), i)
                            }), this;
                            if ("string" == typeof t) {
                                var i, o = Array.prototype.slice.call(arguments, 1);
                                return this.each(function() {
                                    var n = e(this).data("select2");
                                    null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = n[t].apply(n, o)
                                }), e.inArray(t, r) > -1 ? this : i
                            }
                            throw new Error("Invalid arguments for Select2: " + t)
                        }
                    }
                    return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
                }), {
                    define: t.define,
                    require: t.require
                }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}),
function() {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return e.define("select2/i18n/tr", [], function() {
        return {
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum,
                    n = t + " karakter daha girmelisiniz";
                return n
            },
            inputTooShort: function(e) {
                var t = e.minimum - e.input.length,
                    n = "En az " + t + " karakter daha girmelisiniz";
                return n
            },
            loadingMore: function() {
                return "Daha fazlaâ€¦"
            },
            maximumSelected: function(e) {
                var t = "Sadece " + e.maximum + " seÃ§im yapabilirsiniz";
                return t
            },
            noResults: function() {
                return "SonuÃ§ bulunamadÄ±"
            },
            searching: function() {
                return "AranÄ±yorâ€¦"
            }
        }
    }), {
        define: e.define,
        require: e.require
    }
}(),
function() {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return e.define("select2/i18n/en", [], function() {
        return {
            errorLoading: function() {
                return "The results could not be loaded."
            },
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum,
                    n = "Please delete " + t + " character";
                return 1 != t && (n += "s"), n
            },
            inputTooShort: function(e) {
                var t = e.minimum - e.input.length,
                    n = "Please enter " + t + " or more characters";
                return n
            },
            loadingMore: function() {
                return "Loading more resultsâ€¦"
            },
            maximumSelected: function(e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"), t
            },
            noResults: function() {
                return "No results found"
            },
            searching: function() {
                return "Searchingâ€¦"
            }
        }
    }), {
        define: e.define,
        require: e.require
    }
}(),
function() {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return e.define("select2/i18n/ar", [], function() {
        return {
            errorLoading: function() {
                return "Ù„Ø§ ÙŠÙ…ÙƒÙ† ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù†ØªØ§Ø¦Ø¬"
            },
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum,
                    n = "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø­Ø°Ù " + t + " Ø¹Ù†Ø§ØµØ±";
                return n
            },
            inputTooShort: function(e) {
                var t = e.minimum - e.input.length,
                    n = "Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø¥Ø¶Ø§ÙØ© " + t + " Ø¹Ù†Ø§ØµØ±";
                return n
            },
            loadingMore: function() {
                return "Ø¬Ø§Ø±ÙŠ ØªØ­Ù…ÙŠÙ„ Ù†ØªØ§Ø¦Ø¬ Ø¥Ø¶Ø§ÙÙŠØ©..."
            },
            maximumSelected: function(e) {
                var t = "ØªØ³ØªØ·ÙŠØ¹ Ø¥Ø®ØªÙŠØ§Ø± " + e.maximum + " Ø¨Ù†ÙˆØ¯ ÙÙ‚Ø·";
                return t
            },
            noResults: function() {
                return "Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ø£ÙŠ Ù†ØªØ§Ø¦Ø¬"
            },
            searching: function() {
                return "Ø¬Ø§Ø±ÙŠ Ø§Ù„Ø¨Ø­Ø«â€¦"
            }
        }
    }), {
        define: e.define,
        require: e.require
    }
}(),
function() {
    if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
    return e.define("select2/i18n/fa", [], function() {
        return {
            errorLoading: function() {
                return "Ø§Ù…Ú©Ø§Ù† Ø¨Ø§Ø±Ú¯Ø°Ø§Ø±ÛŒ Ù†ØªØ§ÛŒØ¬ ÙˆØ¬ÙˆØ¯ Ù†Ø¯Ø§Ø±Ø¯."
            },
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum,
                    n = "Ù„Ø·ÙØ§Ù‹ " + t + " Ú©Ø§Ø±Ø§Ú©ØªØ± Ø±Ø§ Ø­Ø°Ù Ù†Ù…Ø§ÛŒÛŒØ¯";
                return n
            },
            inputTooShort: function(e) {
                var t = e.minimum - e.input.length,
                    n = "Ù„Ø·ÙØ§Ù‹ ØªØ¹Ø¯Ø§Ø¯ " + t + " Ú©Ø§Ø±Ø§Ú©ØªØ± ÛŒØ§ Ø¨ÛŒØ´ØªØ± ÙˆØ§Ø±Ø¯ Ù†Ù…Ø§ÛŒÛŒØ¯";
                return n
            },
            loadingMore: function() {
                return "Ø¯Ø± Ø­Ø§Ù„ Ø¨Ø§Ø±Ú¯Ø°Ø§Ø±ÛŒ Ù†ØªØ§ÛŒØ¬ Ø¨ÛŒØ´ØªØ±..."
            },
            maximumSelected: function(e) {
                var t = "Ø´Ù…Ø§ ØªÙ†Ù‡Ø§ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ " + e.maximum + " Ø¢ÛŒØªÙ… Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ù†Ù…Ø§ÛŒÛŒØ¯";
                return t
            },
            noResults: function() {
                return "Ù‡ÛŒÚ† Ù†ØªÛŒØ¬Ù‡â€ŒØ§ÛŒ ÛŒØ§ÙØª Ù†Ø´Ø¯"
            },
            searching: function() {
                return "Ø¯Ø± Ø­Ø§Ù„ Ø¬Ø³ØªØ¬Ùˆ..."
            }
        }
    }), {
        define: e.define,
        require: e.require
    }
}(), $(document).ready(function() {
        function e() {
            if (window.matchMedia("(max-width: 1023px)").matches) {
                var e = window.innerHeight ? window.innerHeight : $(window).height();
                $("#mainMenuWr").css({
                    height: e
                }), $("#userMenuWr").css({
                    height: e
                })
            } else $("#mainMenuWr").removeAttr("style"), $("#userMenuWr").removeAttr("style"), $(".menuOpened").click()
        }

        function t() {
            var e = $(this).scrollTop();
            Math.abs(a - e) <= l || (e > a && e > c ? $("#mainHead").css("top", c * -1.2) : e + $(window).height() < $(document).height() && $("#mainHead").css("top", "0"), a = e)
        }
        setTimeout(function() {
            e()
        }, 500);
        var n = "onorientationchange" in window,
            i = n ? "orientationchange" : "resize";
        window.addEventListener(i, function() {
            e()
        }, !1);
        var r = !1;
        $("#hamburgerButton").click(function(e) {
            return e.preventDefault(), !r && (r = !0, $("#mainMenu").hasClass("in") ? $(this).removeClass("menuOpened") : $(this).addClass("menuOpened"), void(window.matchMedia("(max-width: 1023px)").matches && !$("#mainMenu").hasClass("in") ? ($("#mainMenuWr").css({
                width: "277px"
            }), $("#userMenu").hasClass("in") && $("#userButton").click(), $("#shadow").fadeIn(400, function() {
                r = !1
            })) : ($("#mainMenuWr").css({
                width: "0"
            }), $("#shadow").fadeOut(400, function() {
                r = !1
            }))))
        });
        var o = !1;
        $("#userButton").click(function(e) {
            return e.preventDefault(), !o && (o = !0, $("#userMenu").hasClass("in") ? $(this).removeClass("menuOpened") : $(this).addClass("menuOpened"), void(window.matchMedia("(max-width: 1023px)").matches && !$("#userMenu").hasClass("in") ? ($("#userMenuWr").css({
                width: "277px"
            }), $("#mainMenu").hasClass("in") && $("#hamburgerButton").click(), $("#shadow").fadeIn(400, function() {
                o = !1
            })) : ($("#userMenuWr").css({
                width: "0"
            }), $("#shadow").fadeOut(400, function() {
                o = !1
            }))))
        }), $("#shadow").click(function() {
            $(".menuOpened:visible").click()
        });
        var s, a = 0,
            l = 5;
        if (window.matchMedia("(max-width: 1023px)").matches) var c = 65;
        else var c = 79;
        $(window).scroll(function(e) {
            s = !0, $(this).scrollTop() > c ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut()
        }), $(".scrollToTop").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 800), !1
        }), setInterval(function() {
            s && (t(), s = !1)
        }, 100), $("#mainMenu li").click(function() {
            $("#mainMenu").find(".active").removeClass("active"), $(this).addClass("active")
        }), $(".menu").click(function() {
            $("#userMenu").find(".active").removeClass("active"), $(this).addClass("active")
        }), $(".langSelect a").click(function() {
            $(".langSelect a").removeClass("activeSelect"), $(this).addClass("activeSelect")
        }), $(".curSelect a").click(function() {
            $(".curSelect  a").removeClass("activeSelect"), $(this).addClass("activeSelect")
        })
    }),
    function(e, t, n, i) {
        function r(t, n) {
            var o = this;
            "object" == typeof n && (delete n.refresh, delete n.render, e.extend(this, n)), this.$element = e(t), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
            var s = (this.position + "").toLowerCase().match(/\S+/g) || [];
            if (s.length < 1 && s.push("center"), 1 == s.length && s.push(s[0]), "top" != s[0] && "bottom" != s[0] && "left" != s[1] && "right" != s[1] || (s = [s[1], s[0]]), this.positionX != i && (s[0] = this.positionX.toLowerCase()), this.positionY != i && (s[1] = this.positionY.toLowerCase()), o.positionX = s[0], o.positionY = s[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this;
            if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this;
            this.$mirror = e("<div />").prependTo("body");
            var a = this.$element.find(">.parallax-slider"),
                l = !1;
            0 == a.length ? this.$slider = e("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
                visibility: "hidden",
                zIndex: this.zIndex,
                position: "fixed",
                top: 0,
                left: 0,
                overflow: "hidden"
            }), this.$slider.addClass("parallax-slider").one("load", function() {
                o.naturalHeight && o.naturalWidth || (o.naturalHeight = this.naturalHeight || this.height || 1, o.naturalWidth = this.naturalWidth || this.width || 1), o.aspectRatio = o.naturalWidth / o.naturalHeight, r.isSetup || r.setup(), r.sliders.push(o), r.isFresh = !1, r.requestRender()
            }), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
        }

        function o(i) {
            return this.each(function() {
                var o = e(this),
                    s = "object" == typeof i && i;
                this == t || this == n || o.is("body") ? r.configure(s) : o.data("px.parallax") ? "object" == typeof i && e.extend(o.data("px.parallax"), s) : (s = e.extend({}, o.data(), s), o.data("px.parallax", new r(this, s))), "string" == typeof i && ("destroy" == i ? r.destroy(this) : r[i]())
            })
        }! function() {
            for (var e = 0, n = ["ms", "moz", "webkit", "o"], i = 0; i < n.length && !t.requestAnimationFrame; ++i) t.requestAnimationFrame = t[n[i] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n[i] + "CancelAnimationFrame"] || t[n[i] + "CancelRequestAnimationFrame"];
            t.requestAnimationFrame || (t.requestAnimationFrame = function(n) {
                var i = (new Date).getTime(),
                    r = Math.max(0, 16 - (i - e)),
                    o = t.setTimeout(function() {
                        n(i + r)
                    }, r);
                return e = i + r, o
            }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }(), e.extend(r.prototype, {
            speed: .2,
            bleed: 0,
            zIndex: -100,
            iosFix: !0,
            androidFix: !0,
            position: "center",
            overScrollFix: !1,
            refresh: function() {
                this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
                var e = r.winHeight,
                    t = r.docHeight,
                    n = Math.min(this.boxOffsetTop, t - e),
                    i = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
                    o = this.boxHeight + (n - i) * (1 - this.speed) | 0,
                    s = (this.boxOffsetTop - n) * (1 - this.speed) | 0;
                if (o * this.aspectRatio >= this.boxWidth) {
                    this.imageWidth = o * this.aspectRatio | 0, this.imageHeight = o, this.offsetBaseTop = s;
                    var a = this.imageWidth - this.boxWidth;
                    "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -a : isNaN(this.positionX) ? this.offsetLeft = -a / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -a)
                } else {
                    this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                    var a = this.imageHeight - o;
                    "top" == this.positionY ? this.offsetBaseTop = s : "bottom" == this.positionY ? this.offsetBaseTop = s - a : isNaN(this.positionY) ? this.offsetBaseTop = s - a / 2 | 0 : this.offsetBaseTop = s + Math.max(this.positionY, -a)
                }
            },
            render: function() {
                var e = r.scrollTop,
                    t = r.scrollLeft,
                    n = this.overScrollFix ? r.overScroll : 0,
                    i = e + r.winHeight;
                this.boxOffsetBottom > e && this.boxOffsetTop <= i ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - e, this.mirrorLeft = this.boxOffsetLeft - t, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                    transform: "translate3d(0px, 0px, 0px)",
                    visibility: this.visibility,
                    top: this.mirrorTop - n,
                    left: this.mirrorLeft,
                    height: this.boxHeight,
                    width: this.boxWidth
                }), this.$slider.css({
                    transform: "translate3d(0px, 0px, 0px)",
                    position: "absolute",
                    top: this.offsetTop,
                    left: this.offsetLeft,
                    height: this.imageHeight,
                    width: this.imageWidth,
                    maxWidth: "none"
                })
            }
        }), e.extend(r, {
            scrollTop: 0,
            scrollLeft: 0,
            winHeight: 0,
            winWidth: 0,
            docHeight: 1 << 30,
            docWidth: 1 << 30,
            sliders: [],
            isReady: !1,
            isFresh: !1,
            isBusy: !1,
            setup: function() {
                if (!this.isReady) {
                    var i = e(n),
                        o = e(t),
                        s = function() {
                            r.winHeight = o.height(), r.winWidth = o.width(), r.docHeight = i.height(), r.docWidth = i.width()
                        },
                        a = function() {
                            var e = o.scrollTop(),
                                t = r.docHeight - r.winHeight,
                                n = r.docWidth - r.winWidth;
                            r.scrollTop = Math.max(0, Math.min(t, e)), r.scrollLeft = Math.max(0, Math.min(n, o.scrollLeft())), r.overScroll = Math.max(e - t, Math.min(e, 0))
                        };
                    o.on("resize.px.parallax load.px.parallax", function() {
                        s(), r.isFresh = !1, r.requestRender()
                    }).on("scroll.px.parallax load.px.parallax", function() {
                        a(), r.requestRender()
                    }), s(), a(), this.isReady = !0
                }
            },
            configure: function(t) {
                "object" == typeof t && (delete t.refresh, delete t.render, e.extend(this.prototype, t))
            },
            refresh: function() {
                e.each(this.sliders, function() {
                    this.refresh()
                }), this.isFresh = !0
            },
            render: function() {
                this.isFresh || this.refresh(), e.each(this.sliders, function() {
                    this.render()
                })
            },
            requestRender: function() {
                var e = this;
                this.isBusy || (this.isBusy = !0, t.requestAnimationFrame(function() {
                    e.render(), e.isBusy = !1
                }))
            },
            destroy: function(n) {
                var i, o = e(n).data("px.parallax");
                for (o.$mirror.remove(), i = 0; i < this.sliders.length; i += 1) this.sliders[i] == o && this.sliders.splice(i, 1);
                e(n).data("px.parallax", !1), 0 === this.sliders.length && (e(t).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, r.isSetup = !1)
            }
        });
        var s = e.fn.parallax;
        e.fn.parallax = o, e.fn.parallax.Constructor = r, e.fn.parallax.noConflict = function() {
            return e.fn.parallax = s, this
        }, e(n).on("ready.px.parallax.data-api", function() {
            e('[data-parallax="scroll"]').parallax()
        })
    }(jQuery, window, document), window.matchMedia("(min-width: 1024px)").matches && ($("#masthead").hasClass("akademik") ? $("#masthead").parallax({
        imageSrc: "ar" == Resource.Language ? "/static/pt_images/academic_ar.jpg" : "/static/pt_images/akademik.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").hasClass("detail") ? $("#masthead").parallax({
        imageSrc: "/static/pt_images/masthead-detail.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").hasClass("law") ? $("#masthead").parallax({
        imageSrc: "ar" == Resource.Language ? "/static/pt_images/law_ar.jpg" : "/static/pt_images/masthead-law.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").hasClass("references") ? $("#masthead").parallax({
        imageSrc: "/static/pt_images/masthead-references.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").hasClass("translators") ? $("#masthead").parallax({
        imageSrc: "/static/pt_images/slide10.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").hasClass("medical") ? $("#masthead").parallax({
        imageSrc: "/static/pt_images/medikal.jpg",
        naturalHeight: 1,
        speed: .1
    }) : $("#masthead").parallax({
        imageSrc: "ar" == Resource.Language ? "/static/pt_images/masthead_ar.jpg" : "/static/pt_images/masthead.jpg",
        speed: .1
    }), $("#slide2").parallax({
        imageSrc: "/static/pt_images/slide2.jpg",
        speed: .1
    })), $("#slide10").parallax({
        imageSrc: "/static/pt_images/slide10.jpg",
        speed: .1
    }), Number.prototype.format = function(e, t, n, i) {
        var r = "\\d(?=(\\d{" + (t || 3) + "})+" + (e > 0 ? "\\D" : "$") + ")",
            o = this.toFixed(Math.max(0, ~~e));
        return (i ? o.replace(".", i) : o).replace(new RegExp(r, "g"), "$&" + (n || ","))
    }, $(document).ready(function() {
        initBootstrapSelects(), initTooltips(), handleCurrencySelects(), handleFormLabelDoubleClick(), $(".quality_type_link").click(function(e) {
            var t = $(this).attr("href");
            $.post(Resource.Urls.setQuality, {
                interpretionQuailtyTypeId: $(this).data("quality")
            }).done(function(e) {
                window.location.href = t
            }), e.preventDefault()
        }), $(document).on("submit", "form[data-async]", function(e) {
            var t = $(this),
                n = $(t.attr("data-target")),
                i = $("input[type='submit'][clicked=true], button[type='submit'][clicked=true]", t),
                r = t.serializeArray();
            1 === i.size() ? r.push({
                name: $(i[0]).attr("name"),
                value: "1"
            }) : 0 !== i.size() && console.log("Multiple submit-buttons pressed. This should not happen!"), i.attr("disabled", "true"), $.ajax({
                type: t.attr("method"),
                url: t.attr("action"),
                data: r,
                success: function(e, t) {
                    n.find(".modal-content").html(e)
                },
                done: function() {
                    i.removeAttr("disabled"), i.button("reset")
                }
            }), e.preventDefault()
        }), $(document).on("click", 'input[type="submit"], button[type="submit"]', function() {
            $("form[data-async] input[type=submit], form[data-async] button[type=submit]", $(this).parents("form")).removeAttr("clicked"), $(this).attr("clicked", "true")
        }), loadReferences(), loadLanguageWidget(), handleContactWidget(), handleLongTextarea()
    }),
    function() {
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd;
        return e.define("select2/i18n/tr", [], function() {
            return {
                inputTooLong: function(e) {
                    var t = e.input.length - e.maximum,
                        n = t + " karakter daha girmelisiniz";
                    return n
                },
                inputTooShort: function(e) {
                    var t = e.minimum - e.input.length,
                        n = "En az " + t + " karakter daha girmelisiniz";
                    return n
                },
                loadingMore: function() {
                    return "Daha fazlaÃ¢â‚¬Â¦"
                },
                maximumSelected: function(e) {
                    var t = "Sadece " + e.maximum + " seÃƒÂ§im yapabilirsiniz";
                    return t
                },
                noResults: function() {
                    return "SonuÃƒÂ§ bulunamadÃ„Â±"
                },
                searching: function() {
                    return "AranÃ„Â±yorÃ¢â‚¬Â¦"
                }
            }
        }), {
            define: e.define,
            require: e.require
        }
    }();
var Summary = function() {
        var e = {
                mainFormId: null,
                ajaxCallback: null,
                voucherLink: null
            },
            t = function(t) {
                e = t, i(), n(), $("#orderBox .onayla button").click(function(t) {
                    t.preventDefault(), $(this).is(":not(:disabled)") && e.mainFormId && $("#" + e.mainFormId).valid() && $("#" + e.mainFormId).submit()
                }), $(".orderHeader").click(function() {
                    $(".workList").slideToggle(), $(this).find(".glyphicon").toggleClass("rotated")
                }), $("#orderBox .help").tooltip()
            },
            n = function() {
                $("#telNo").mask("000 000 00 00"), $("p.turkcellindirimi").click(function() {
                    $("#turkcellModal").modal()
                }), $("#turkcellModal .btn").click(function(t) {
                    if (t.preventDefault(), $("#turkcellModal form").valid()) {
                        Summary.displayTotalsProgress();
                        var n = $("input[name=actualAmount]").length > 0 ? $("input[name=actualAmount]").val() : 0,
                            i = $("input[name=proposalId]").length > 0 ? $("input[name=proposalId]").val() : 0;
                        $.post(e.voucherLink, {
                            campaignType: "TRKCL",
                            phone: $("#turkcellModal #telNo").val(),
                            pin: $("#turkcellModal #isteKazan").val(),
                            actualAmount: n,
                            proposalId: i
                        }).done(function(t) {
                            var n = $.parseJSON(t);
                            n.success && ($("#turkcellModal").modal("hide"), e.ajaxCallback && e.ajaxCallback(n)), Summary.hideTotalsProgress()
                        })
                    }
                })
            },
            i = function() {
                $("#orderBox .ptindirimi").click(function() {
                    $("#ptModal").modal()
                }), $("#ptModal .btn").click(function(t) {
                    if (t.preventDefault(), $("#ptModal form").valid()) {
                        Summary.displayTotalsProgress();
                        var n = $("input[name=actualAmount]").length > 0 ? $("input[name=actualAmount]").val() : 0,
                            i = $("input[name=proposalId]").length > 0 ? $("input[name=proposalId]").val() : 0;
                        $.post(e.voucherLink, {
                            voucherCode: $("#ptModal #kuponKodu").val(),
                            transactionTypeId: "",
                            actualAmount: n,
                            proposalId: i
                        }).done(function(t) {
                            var n = $.parseJSON(t);
                            n.success && ($("#ptModal").modal("hide"), e.ajaxCallback && e.ajaxCallback(n)), Summary.hideTotalsProgress()
                        })
                    }
                })
            },
            r = function() {
                $("#orderWr .loader").css("width", $("#orderWr .loader").parents("#orderWr").find(".orderHeader").css("width")), $("#orderWr .loader").show()
            },
            o = function() {
                $("#orderWr .loader").css("width", $("#orderWr .loader").parents("#orderWr").find(".orderHeader").css("width")), $("#orderWr .loader").hide()
            },
            s = function(e, t) {
                "undefined" != typeof t && null !== t || (t = ""), t ? ($(".onayla button").attr("title", t).tooltip({
                    delay: {
                        show: 0,
                        hide: 250
                    }
                }).tooltip("fixTitle").tooltip("show"), setTimeout(function() {
                    $(".onayla button").tooltip("hide")
                }, 3e3)) : $(".onayla button").tooltip("destroy"), $(".onayla button").prop("disabled", !e)
            },
            a = function() {
                var e = $("#orderBox .kalemler");
                e.find("p").filter(function() {
                    return "none" == $(this).css("display")
                }).length === e.find("p").length ? e.hide() : e.show()
            },
            l = function() {
                $.fn.adjustScroll = function(e) {
                    var t = this;
                    window.matchMedia("(min-width: 1024px)").matches ? $(window).scrollTop() > e ? t.css({
                        position: "absolute",
                        top: e
                    }) : t.css({
                        position: "fixed",
                        top: 80,
                        width: t.parent().width()
                    }) : t.removeAttr("style")
                }, $.fn.followTo = function(e) {
                    var t = this;
                    $(window).scroll(function(n) {
                        t.adjustScroll(e)
                    }), t.adjustScroll(e)
                };
                var e = $("#mainFooter").offset().top - ($("#orderWr").height() + $("#mainHead").height() + 32);
                $("#orderWr").followTo(e)
            };
        return {
            init: t,
            hideTotalsProgress: o,
            displayTotalsProgress: r,
            adjustButton: s,
            adjustVisibility: a,
            handleScroller: l,
            loadVoucherModalHandler: i,
            loadActiveCampaignModalHandler: n
        }
    }(),
    Order = function() {
        var e = {
                selectedTargetLanguages: [],
                displayThanksModal: !1,
                translationServiceTypeId: null,
                reloadInterval: 10,
                maxLoadRetryCount: 12
            },
            t = null,
            n = 0,
            i = function() {
                var e = "";
                return $("#interpretLanguageId option:selected").each(function() {
                    e.length > 0 && (e += ", "), e += $(this).text()
                }), e
            },
            r = function(e) {
                var t = [];
                return "undefined" != typeof e && e || (e = "#interpretLanguageId"), $(e + " option:selected").each(function() {
                    t.push($(this).val())
                }), t
            },
            o = function() {
                var e = 0;
                return $("#fileInfo .item").each(function() {
                    e += parseInt($(this).data("count"))
                }), e
            },
            s = function() {
                return $("#fileInfo .item").length
            },
            a = function(t, n) {
                var i = e.selectedTargetLanguages;
                "undefined" != typeof n && n || (n = "#interpretLanguageId"), $.post(Resource.Urls.getTranslatableLanguages, {
                    fromLanguageId: t,
                    selectedLanguageId: i
                }).done(function(e) {
                    initMultiLanguageSelector($(n).html(e), null, function() {}), u()
                })
            },
            l = function(e) {
                Summary.displayTotalsProgress(), $.post(Resource.Urls.removeFile, {
                    fileIndex: e.closest("div.item").data("index")
                }).done(function(e) {
                    var t = $.parseJSON(e);
                    if (t.success) {
                        $("#fileInfo").html("");
                        var n = 0;
                        $.map(t.items, function(e, t) {
                            $("#fileInfo").append('<div class="item" data-count="' + e.WordCount + '" data-index="' + n++ + '"><p class="selectedFileName fileSelected">' + e.OriginalFileName + " (" + Resource.Text.FILE_WORD_COUNT.replace("{word_count}", e.WordCount) + ')</p><span class="fileRemove" title="' + Resource.Text.REMOVE_FILE + '"></span></div>')
                        }), 0 == n && $("#fileInfo").removeClass("fileSelected"), y(), d(t), passVisitorNotesToChat(c())
                    }
                    Summary.hideTotalsProgress()
                })
            },
            c = function() {
                var e = $("#fileLanguageId option:selected").text(),
                    t = i(),
                    n = $(".siparisSinifi input[type=radio]:checked").closest("label").text(),
                    r = $(".speed input[type=radio]:checked").closest("label").text(),
                    s = $(".uzmanlik input[type=radio]:checked").closest("label").text(),
                    a = $("#orderBox .toplam span").text(),
                    l = $("#orderBox .workList .trDate").text(),
                    c = Resource.Text.FILE_WORD_COUNT,
                    u = "";
                return $("#fileInfo .item").each(function() {
                    u.length > 0 && (u += ", "), u += $(this).find(".selectedFileName").text()
                }), e + " -> " + t + "\r\n" + n + "\r\n" + r + "\r\n" + s + "\r\n" + c.replace("{word_count}", o()) + "\r\n" + a + "\r\n" + l + "\r\n" + u + "\r\n"
            },
            u = function() {
                0 !== $("#fileLanguageId").length && (Summary.displayTotalsProgress(), $.post(Resource.Urls.updateOrder, $("#newOrderForm").serialize()).done(function(e) {
                    var t = $.parseJSON(e);
                    t.success && passVisitorNotesToChat(c()), d(t), Summary.hideTotalsProgress()
                }))
            },
            d = function(e) {
                var t = $("#orderBox .workList"),
                    n = $("#orderBox .kalemler"),
                    s = $("#orderBox .toplam"),
                    a = $("#orderBox .orderHeader"),
                    l = $("#orderBox .onayla button");
                if (l.text(l.data("defaulttext")), t.find(".wordCount").html(Resource.Text.TOTAL_WORD_COUNT.replace("{word_count}", "<strong>0</strong>")).show(), s.show().find("span").text(e.amountFormatted), a.find("span.pull-right").text(""), t.find(".trDate").html("").hide(), n.find(".protrans").hide(), n.find(".turkcell").hide(), n.find(".extras").html("").hide(), e.success) {
                    if (s.find("span").text(e.amountFormatted), r().length > 0 && o() > 0 && a.find("span.pull-right").text(e.subtotalFormatted), e.priceDiscountFormatted ? (n.find(".protrans span").text("-" + e.priceDiscountFormatted), n.find(".protrans").show()) : (n.find(".protrans span").text(""), n.find(".protrans").hide()), e.discountFormatted ? (n.find(".turkcell span").text("-" + e.discountFormatted), n.find(".turkcell").show(), $("#ptOK").prop("checked", !e.campaignDiscountUsed), $("#turkcellOK").prop("checked", e.campaignDiscountUsed)) : (n.find(".turkcell span").text(""), n.find(".turkcell").hide(), $("#ptOK, #turkcellOK").prop("checked", !1)), n.find(".extras").html("").hide(), Object.keys(e.extraServices).length > 0) {
                        for (var c in e.extraServices) n.find(".extras").append('<p class="kargo">' + c + '<span class="pull-right">+' + e.extraServices[c] + "</span></p>").show();
                        n.find(".extras .kargo").show()
                    }
                    e.wordCount > 0 && t.find(".wordCount").html(Resource.Text.TOTAL_WORD_COUNT.replace("{word_count}", "<strong>" + e.wordCount + "</strong>")).show(), e.estimatedDateFormatted && t.find(".trDate").html(Resource.Text.ESTIMATED_DUE_DATE + ": <strong>" + e.estimatedDateFormatted + "</strong>").show(), (e.highBudgetOrder || e.uncountableFilesExist) && (l.text(l.data("manualordertext")), s.hide()), $("#newOrderForm input[name=highBudget]").val(e.highBudgetOrder), $("#newOrderForm input[name=containsUncounted]").val(e.uncountableFilesExist)
                }
                t.find(".trLanguages").html(Resource.Text.TRANSLATION_LANGUAGES + ": <strong>" + i() + "</strong>").show(), t.find(".trProf").html(Resource.Text.INTERPRETION_QUALITY + ": <strong>" + $(".uzmanlik input[type=radio]:checked").closest("label").text() + "</strong>").show(), t.find(".trClass").html($(".siparisSinifi input[type=radio]:checked").closest("label").text()).show(), t.find(".trSpeed").html($(".speed input[type=radio]:checked").closest("label").text()).show();
                var u = $(".workType input[type=radio]:checked").closest("label").text();
                a.find(".type").text(u), h(), Summary.adjustVisibility(), Summary.handleScroller()
            },
            h = function() {
                var e = r().length > 0 && s() > 0,
                    t = "true" === $("#newOrderForm input[name=highBudget]").val(),
                    n = "true" === $("#newOrderForm input[name=containsUncounted]").val(),
                    i = "";
                r().length <= 0 ? i = Resource.Validation.Order.TARGET_LANGUAGE_REQUIRED : 0 === s() ? i = Resource.Validation.Order.ORDER_MATERIAL_ENTRY_REQUIRED : t ? i = Resource.Text.MANUAL_ORDER_AMOUNT_CALCULATION_REQUIRED : n && (i = Resource.Text.ORDER_CONTAINS_UNCOUNTABLE_DOCUMENT), Summary.adjustButton(e, i)
            },
            p = function(n) {
                if ($("input[name=serviceTypeId]:checked").val() != e.translationServiceTypeId) return location.href = Resource.Urls.triggerManualOrder + "?cancelled=1", void n.preventDefault();
                var i = "true" == $("#newOrderForm input[name=highBudget]").val();
                i && (n.preventDefault(), b(Resource.Text.DOCUMENTS_BEING_ANALYZED_IN_CAT_TOOL, Resource.Text.DONT_WANT_TO_WAIT_FOR_QUOTE, function() {
                    location.href = Resource.Urls.triggerManualOrder + "?cancelled=1"
                }), Summary.displayTotalsProgress(), $.post(Resource.Urls.startHighBudgetOrder, {}).done(function(n) {
                    var i = $.parseJSON(n);
                    i.success ? t = setInterval(Order.reloadProject, 1e3 * e.reloadInterval) : location.href = Resource.Urls.triggerManualOrder
                }))
            },
            f = function() {
                e.displayThanksModal && $("#thanksModal").modal(), $("#newOrderForm").submit(function(e) {
                    return 0 === r().length ? (e.preventDefault(), void h()) : void p(e)
                }), $("#fileLanguageId").change(function() {
                    a($(this).val())
                }), $("#hiddenUpload").change(function() {
                    b(Resource.Text.FILE_BEING_PROCESSED), $(this).closest("form").submit()
                }), $("#fileUpload").click(function() {
                    $("li.wordCount:visible").hide(), $("#hiddenUpload").click()
                }), $("#textUpload").click(function(e) {
                    $("li.wordCount:visible").hide(), $("#metinGiris").val().length > 0 && (b(Resource.Text.TEXT_BEING_PROCESSED), $(this).closest("form").submit())
                }), $('#interpretLanguageId, input[name=durationTypeId], input[name=qualityTypeId], input[name=serviceTypeId], input[name^="extraService_"]').change(function() {
                    u()
                }), $("input[name=categoryTypeId]").change(function() {
                    var e = $('input[name^="extraService_"][data-name="NOTARISATION"]'),
                        t = $('input[name="categoryTypeId"][data-name="CERTIFIED_INTERPRETER"]').is(":checked");
                    !t && e.length > 0 && e.is(":checked") && (g(), $("#error-modal .modal-body .message").text(Resource.Text.NOTARISATION_REQUIRES_CERTIFIED_TRANSLATOR), $("#error-modal").modal()), u()
                }), y(), v(), m()
            },
            m = function() {
                0 != $("form.customer-form").length && $("form.customer-form input").keydown(function(e) {
                    var t = e.which;
                    13 == t && (e.preventDefault(), $("form.customer-form button[value=save]").click())
                })
            },
            g = function() {
                var e = $('input[name="categoryTypeId"][data-name="CERTIFIED_INTERPRETER"]');
                $('input[name^="extraService_"][data-name="NOTARISATION"]').is(":checked") && !e.is(":checked") && (e.prop("checked", !0), e.closest(".siparisSinifi").find(".selectedChoise").removeClass("selectedChoise"), e.closest("li").addClass("selectedChoise"))
            },
            v = function() {
                g(), $('input[name^="extraService_"][data-name="NOTARISATION"]').click(function() {
                    var e = $('input[name^="extraService_"][data-name="CARGO_DELIVERY"]');
                    $(this).is(":checked") && e.length > 0 && !e.is(":checked") && e.prop("checked", !0), g()
                })
            },
            y = function() {
                $("#fileInfo .fileRemove").each(function() {
                    var e = $(this);
                    $(this).click(function() {
                        l(e)
                    })
                })
            },
            b = function(e, t, n) {
                $("#loading-text").text(e), $("#loading .action").hide(), t && ($("#loading .action .btn").text(t), $("#loading .action").delay(6e3).show(), n && $("#loading .action .btn").click(function(e) {
                    n()
                })), $("#loading").modal({
                    backdrop: "static",
                    keyboard: !1
                })
            },
            w = function() {
                $("#metinGir").click(function() {
                    $("#alanDosya").slideUp(), $("#alanMetin").slideDown(), $("#alanDosya").removeClass("alanAcik"), $("#alanMetin").hasClass("alanAcik") || $("#alanMetin").addClass("alanAcik")
                }), $("#dosyaYukle").click(function() {
                    $("#alanMetin").slideUp(), $("#alanDosya").slideDown(), $("#alanMetin").removeClass("alanAcik"), $("#alanDosya").hasClass("alanAcik") || $("#alanDosya").addClass("alanAcik")
                }), $(".work li").click(function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = $(this).parent();
                    t.find(".selectedChoise").removeClass("selectedChoise"), t.find("input[type=radio]:checked").prop("checked", !1), $(this).addClass("selectedChoise"), $(this).find("input[type=radio]").prop("checked", !0).trigger("change")
                })
            },
            x = function() {
                $("input").on("blur, change", function() {
                    $(this).val().length < 1 && $(this).parent().find("label.valid").remove()
                })
            },
            C = function() {
                Summary.handleScroller();
                var e = "onorientationchange" in window,
                    t = e ? "orientationchange" : "resize";
                window.addEventListener(t, function() {
                    window.matchMedia("(max-width: 1023px)").matches && $("#orderWr").removeAttr("style")
                }, !1), $(window).resize(function() {
                    Summary.handleScroller()
                })
            },
            T = function() {
                $("#metinGiris").focus(function() {
                    $(this).parent().parent().addClass("stepFocused")
                }).keyup(function() {
                    $("#alanMetin").find("label").text($.trim($("#metinGiris").val()).split(" ").filter(function(e) {
                        return "" !== e
                    }).length)
                }), $(document).on("blur", "#metinGiris", function() {
                    $(".stepFocused").removeClass("stepFocused")
                }), $("ul.select2-selection__rendered").click(function() {
                    $(".step3").addClass("stepFocused")
                }), $("#notlar").click(function() {
                    $(".step7").addClass("stepFocused")
                })
            },
            k = function() {
                n += 1, $.post(Resource.Urls.loadCatProject, {}).done(function(i) {
                    var r = $.parseJSON(i);
                    (n > e.maxLoadRetryCount || r.success) && clearInterval(t), r.success ? (d(r), n = 0, $("#loading").modal("hide"), Summary.hideTotalsProgress()) : r.retry || (location.href = Resource.Urls.triggerManualOrder)
                })
            },
            E = function(t) {
                $.extend(e, t), Summary.init({
                    mainFormId: "newOrderForm",
                    ajaxCallback: d,
                    voucherLink: Resource.Urls.applyVoucher
                }), a($("#fileLanguageId").val()), x(), w(), C(), T(), f()
            };
        return {
            init: E,
            reloadProject: k
        }
    }(),
    Payment = function() {
        var e = {
                ininalTransactionType: 0,
                bkmHtmlContent: ""
            },
            t = function() {
                r(), i(), o(), s(), n(), Summary.adjustVisibility()
            },
            n = function() {
                $("#fileUpload").click(function() {
                    $("#hiddenUpload").click().change(function() {
                        $("#fileInfo").addClass("fileSelected"), $(".selectedFileName").addClass("fileSelected").text($("#hiddenUpload").val().split("\\").pop())
                    })
                }), $("#fileRemove").click(function() {
                    $(".selectedFileName").text(""), $(".fileSelected").removeClass("fileSelected")
                })
            },
            i = function() {
                $("#iyzico_bkmexpress a").click(function(t) {
                    t.preventDefault(), $("#iyzico_bkmexpress").append(unescape(e.bkmHtmlContent))
                })
            },
            r = function() {
                $("#iyzipay-checkout-form").length > 0 && setTimeout(function() {
                    $("#iyzico .loader").hide()
                }, 500)
            },
            o = function() {
                $('a[data-toggle="tab"]').on("show.bs.tab", function(e) {
                    Summary.displayTotalsProgress();
                    var t = $(e.target).attr("href"),
                        n = $(e.target).data("transactiontypeid"),
                        i = "#" + t.substring(1),
                        r = $(i);
                    if ($(".tab-content.payment .tab-pane[data-disable-inactive=true]").length > 0 && ($(".tab-content.payment .tab-pane[data-disable-inactive=true] .cont").html(), $(".tab-content.payment .tab-pane[data-disable-inactive=true] .loader").show()), r.data("disable-inactive") && $(i + " input[name=iframesrc]").length > 0) {
                        var o = $(i + " input[name=iframesrc]");
                        r.find(".cont").html('<iframe src="' + o.val() + '"></iframe>')
                    }
                    $.post(Resource.Urls.updateTransactionType, {
                        transactionType: n
                    }).done(function(e) {
                        var t = $.parseJSON(e);
                        a(t), Summary.hideTotalsProgress()
                    })
                })
            },
            s = function() {
                0 != $('#ininal input[name="cardNumber"]').length && ($('#ininal input[name="cardNumber"]').mask("0000000000000000"), $('#ininal input[name="cardCvv"]').mask("000"), $('#ininal input[name="cardExpiry"]').mask("00/00"), $('#ininal input[name="cardNumber"]').blur(function(e) {
                    if ($("#ininal .discount").length > 0) {
                        var t = $(this).val().replace(/\s/g, "").replace(/-/g, "");
                        16 === t.length && 0 === t.indexOf("515755") ? $("#ininal .discount").show() : $("#ininal .discount").hide()
                    }
                }), $("#ininal .discount button").click(function() {
                    Summary.displayTotalsProgress(), $.post(Resource.Urls.applyVoucher, {
                        voucherCode: "",
                        transactionTypeId: e.ininalTransactionType
                    }).done(function(e) {
                        var t = $.parseJSON(e);
                        t.success && $("#ininal .discount").remove(), a(t), Summary.hideTotalsProgress()
                    })
                }))
            },
            a = function(e) {
                var t = $("#orderBox .kalemler"),
                    n = $("#orderBox .toplam");
                if (n.find("span").text(e.amountFormatted), e.priceDiscountFormatted ? (t.find(".protrans span").text("-" + e.priceDiscountFormatted), t.find(".protrans").show()) : (t.find(".protrans span").text(""), t.find(".protrans").hide()), e.discountFormatted ? (t.find(".turkcell span").text("-" + e.discountFormatted), t.find(".turkcell").show(), $("#ptOK").prop("checked", !e.campaignDiscountUsed), $("#turkcellOK").prop("checked", e.campaignDiscountUsed)) : (t.find(".turkcell span").text(""), t.find(".turkcell").hide(), $("#ptOK, #turkcellOK").prop("checked", !1)), e.paymentCostFormatted ? (t.find(".paycost span").text("+" + e.paymentCostFormatted), t.find(".paycost").show()) : (t.find(".paycost span").text(""), t.find(".paycost").hide()), t.find(".extras").html("").hide(), Object.keys(e.extraServices).length > 0) {
                    for (var i in e.extraServices) t.find(".extras").append('<p class="kargo">' + i + '<span class="pull-right">+' + e.extraServices[i] + "</span></p>").show();
                    t.find(".extras .kargo").show()
                }
                Summary.adjustVisibility()
            },
            l = function(n) {
                $.extend(e, n), Summary.init({
                    ajaxCallback: a
                }), t()
            };
        return {
            init: l
        }
    }(),
    Proposal = function() {
        var e = {
                calculateDate: 0
            },
            t = function() {
                o(), $('input[name^="extraService_"]').change(function() {
                    r()
                }), r(), n(), Summary.adjustButton(!0)
            },
            n = function() {
                $('input[name^="extraService_"][data-name="NOTARISATION"]').click(function() {
                    var e = $('input[name^="extraService_"][data-name="CARGO_DELIVERY"]');
                    $(this).is(":checked") && e.length > 0 && !e.is(":checked") && e.prop("checked", !0)
                })
            },
            i = function(e) {
                var t = $("#orderBox .kalemler"),
                    n = $("#orderBox .toplam");
                if (n.find("span").text(e.amountFormatted), e.priceDiscountFormatted ? (t.find(".protrans span").text("-" + e.priceDiscountFormatted), t.find(".protrans").show()) : (t.find(".protrans span").text(""), t.find(".protrans").hide()), e.discountFormatted ? (t.find(".turkcell span").text("-" + e.discountFormatted), t.find(".turkcell").show(), $("#ptOK").prop("checked", !e.campaignDiscountUsed), $("#turkcellOK").prop("checked", e.campaignDiscountUsed)) : (t.find(".turkcell span").text(""), t.find(".turkcell").hide(), $("#ptOK, #turkcellOK").prop("checked", !1)), t.find(".extras").html("").hide(), Object.keys(e.extraServices).length > 0) {
                    for (var i in e.extraServices) t.find(".extras").append('<p class="kargo">' + i + '<span class="pull-right">+' + e.extraServices[i] + "</span></p>").show();
                    t.find(".extras .kargo").show()
                }
                Summary.adjustVisibility()
            },
            r = function() {
                Summary.displayTotalsProgress(), $.post(Resource.Urls.updateProposal, $("#proposalForm").serialize()).done(function(e) {
                    var t = $.parseJSON(e);
                    i(t), Summary.hideTotalsProgress()
                })
            },
            o = function() {
                1 === e.calculateDate && $.post(Resource.Urls.getEstimatedDate, {
                    fromLanguageId: $("input[name=fileLanguageId]").val(),
                    toLanguageIds: $("input[name=interpretLanguageId]").val(),
                    word_count: $("input[name=wordCount]").val(),
                    interpretionQuailtyTypeId: $("input[name=interpretionQualityTypeId]").val(),
                    interpretionDurationTypeId: $("input[name=interpretionDurationTypeId]").val(),
                    categoryTypeId: $("input[name=categoryTypeId]").val()
                }).done(function(e) {
                    $("#orderBox .workList").find(".trDate").html(Resource.Text.ESTIMATED_DUE_DATE + ": <strong>" + e.replace(/\"/g, "") + "</strong>").show()
                })
            },
            s = function(n) {
                $.extend(e, n), Summary.init({
                    mainFormId: "proposalForm",
                    ajaxCallback: i,
                    voucherLink: Resource.Urls.applyProposalVoucher
                }), t()
            };
        return {
            init: s
        }
    }(),
    Account = function() {
        var e = {
                corporateBillingId: 0
            },
            t = function() {
                n(), r(), i()
            },
            n = function() {
                var e = $(".account-form");
                0 === e.length
            },
            i = function() {
                $(".hesapEkle").click(function(e) {
                    e.preventDefault(), $(this).hasClass("addingAccount") ? $(this).removeClass("addingAccount") : $(this).addClass("addingAccount"), $(".newAccountLine td").toggle()
                });
                var e = function() {
                    var e = $("#banksList").find('input[checked="checked"]').val();
                    $("#default").val("1" === e ? $(".newAccountLine #iban").val() : e), "1" !== e && $(".banks-form").submit()
                };
                $(".removeThis").click(function(t) {
                    t.preventDefault(), $(this).closest("tr").remove(), e()
                }), $(".recordAccount input[type=submit]").click(function(t) {
                    e()
                }), $("#banksList .radius").click(function() {
                    $("#banksList").find('input[checked="checked"]').removeAttr("checked"), $("#banksList .radius.checked").removeClass("checked"), $(this).addClass("checked").find("input").attr("checked", "checked"), e()
                })
            },
            r = function() {
                o(), $("input[name=billingType]").change(function() {
                    o()
                })
            },
            o = function() {
                $("input[name=billingType]").length > 0 && ($("input[name=billingType]:checked").val() == e.corporateBillingId ? ($("#myAcc .radius.checked").removeClass("checked"), $("#kurumsalF").prop("checked", !0).closest(".radius").addClass("checked"), $(".corporate-container").find("input,textarea,select").prop("disabled", !1), $(".corporate-container").show(), $(".personal-container").find("label.error").remove(), $(".personal-container").find("input,textarea,select").prop("disabled", !0), $(".personal-container").hide()) : ($("#myAcc .radius.checked").removeClass("checked"), $("#bireyselF").prop("checked", !0).closest(".radius").addClass("checked"), $(".personal-container").find("input,textarea,select").prop("disabled", !1), $(".personal-container").show(), $(".corporate-container").find("label.error").remove(), $(".corporate-container").find("input,textarea,select").prop("disabled", !0), $(".corporate-container").hide()))
            },
            s = function(n) {
                $.extend(e, n), t()
            };
        return {
            init: s
        }
    }(),
    Register = function() {
        var e = {},
            t = function() {
                var e = $("form");
                0 !== e.length && e.find(".select2-container").click(function() {
                    $(this).parent().find("label:not(.error)").addClass("focused")
                })
            },
            n = function() {
                var e = $(".joinorlogin-form");
                0 !== e.length && e.find(".formSwitcher").click(function(e) {
                    e.preventDefault(), $("#joinForm, #loginForm").slideToggle()
                })
            },
            i = function() {
                var e = $("form.newtranslator-form");
                0 !== e.length && (e.find("input[name=graduationDate]").mask("00/00/0000"), r(), o())
            },
            r = function() {
                function e() {
                    t.clone().appendTo("#selectLang"), i++, $("#selectLang").find(".duplicateMe:last #fromLang").attr("id", "fromLang" + i).attr("name", "fromLanguage[" + i + "]"), $("#selectLang").find(".duplicateMe:last #toLang").attr("id", "toLang" + i).attr("name", "toLanguage[" + i + "][]"), $("#selectLang").find('.duplicateMe:last label[for="fromLang"]').attr("for", "fromLang" + i), $("#selectLang").find('.duplicateMe:last label[for="toLang"]').attr("for", "toLang" + i)
                }
                var t = $("#selectLang").find(".duplicateMe"),
                    n = 140,
                    i = 0,
                    r = 0;
                $("#duplicateThis").click(function() {
                    e(), $("#selectLang select").select2({
                        minimumResultsForSearch: -1,
                        width: null
                    }), $("body").width() > 1024 && (n += 150), $("body").width() <= 1023 && $("body").width() > 991 && (n += 152), $("body").width() <= 991 && (n += 297), $(this).css("top", n), $("#eraseThis").show().css("top", n), $(".duplicateMe:last .form-group").find(".select2-container--default:last").remove(), r += 146, $(".parallax-mirror").css({
                        "margin-top": r + "px"
                    })
                }), $("#eraseThis").click(function() {
                    i--, $("#selectLang").find(".duplicateMe:last").remove(), $("body").width() > 1024 && (n -= 150), $("body").width() <= 1023 && (n -= 300), $("#duplicateThis").css("top", n), $("#eraseThis").css("top", n), 1 == $("body").find(".duplicateMe").length && $("#eraseThis").hide(), r -= 146, $(".parallax-mirror").css({
                        "margin-top": r + "px"
                    })
                })
            },
            o = function() {
                $("#fileUpload").click(function() {
                    $("#hiddenUpload").click().change(function() {
                        $("#fileInfo").addClass("fileSelected"), $("#selectedFileName").addClass("fileSelected").text($("#hiddenUpload").val().split("\\").pop())
                    })
                }), $("#fileRemove").click(function() {
                    $("#selectedFileName").text(""), $(".fileSelected").removeClass("fileSelected")
                })
            },
            s = function(r) {
                $.extend(e, r), t(), n(), i()
            };
        return {
            init: s
        }
    }(),
    User = function() {
        var e = {},
            t = function() {
                o(), r(), i(), n()
            },
            n = function() {
                var e = $("#detailedList ul.translations");
                if (0 !== e.find("li[data-cat-job-id]").length) {
                    var t = [];
                    e.find("li[data-cat-job-id]").each(function() {
                        t.indexOf($(this).data("cat-job-id")) < 0 && t.push($(this).data("cat-job-id"))
                    }), t.length > 0 && setTimeout(function() {
                        n()
                    }, 6e5), $(t).each(function() {
                        var t = this;
                        $.post(Resource.Urls.loadCatJobStatus, {
                            jobId: t
                        }).done(function(t) {
                            var n = $.parseJSON(t),
                                i = n.JobId + "-" + n.Password,
                                r = e.find("li[data-cat-job-id=" + i + "] .catstatus"),
                                o = "tr" == Resource.Language ? "%" + n.ProgressPercentage : n.ProgressPercentage + "%";
                            r.html($("#jobCompletedPercentageText").val() + ": <strong>" + o + "</strong>").removeClass("alert-warning").addClass("alert-" + (100 == n.ProgressPercentage ? "success" : "warning"))
                        })
                    })
                }
            },
            i = function() {
                0 !== $("#detailedList ul.translations .catdownload").length && $("#detailedList ul.translations .catdownload").click(function(e) {
                    e.preventDefault(), confirm($("#incompleteTranslationWarning").val()) && (window.location.href = $(this).attr("href"))
                })
            },
            r = function() {
                function e() {
                    i.clone().appendTo("#selectLang").show(), o++, $("#selectLang").find(".duplicateMe:last #fromLang").attr("id", "fromLang" + o).attr("name", "fromLanguage[" + o + "]"), $("#selectLang").find(".duplicateMe:last #toLang").attr("id", "toLang" + o).attr("name", "toLanguage[" + o + "][]"), $("#selectLang").find('.duplicateMe:last label[for="fromLang"]').attr("for", "fromLang" + o), $("#selectLang").find('.duplicateMe:last label[for="toLang"]').attr("for", "toLang" + o)
                }

                function t() {
                    var e = 0;
                    e = $("body").width() > 1024 ? 120 : $("body").width() <= 1023 && $("body").width() > 991 ? 122 : 237;
                    var t = r + ($(".duplicateMe:visible").length - 1) * e;
                    $("#duplicateThis").css("top", t), $("#eraseThis").show().css("top", t), 2 == $("body").find(".duplicateMe").length && $("#eraseThis").hide()
                }
                var n = $("form.languages-form");
                if (0 !== n.length) {
                    var i = $("#selectLang").find(".duplicateMe:first"),
                        r = 20,
                        o = 0;
                    t(), $("#duplicateThis").click(function() {
                        e(), $("#selectLang select").select2({
                            minimumResultsForSearch: -1,
                            width: null
                        }), t(), $(".duplicateMe:last .form-group").find(".select2-container--default:last").remove()
                    }), $("#eraseThis").click(function() {
                        o--, $("#selectLang").find(".duplicateMe:last").remove(), t()
                    })
                }
            },
            o = function() {
                var e = $("form.workdetail-form");
                0 !== e.length && e.find("a[name=fileUpload]").click(function(e) {
                    e.preventDefault();
                    var t = $(this).parent(),
                        n = t.find("input[type=file]");
                    n.click().change(function() {
                        t.find(".fileInfo").addClass("fileSelected"), t.find(".selectedFileName").addClass("fileSelected").text(n.val().split("\\").pop())
                    })
                })
            },
            s = function(n) {
                $.extend(e, n), t()
            };
        return {
            init: s
        }
    }(),
    CatTool = function() {
        var e = {},
            t = function() {},
            n = function(n) {
                e = n, t()
            };
        return {
            init: n
        }
    }(),
    Survey = function() {
        var e = {
                requiredElements: null
            },
            t = function(t) {
                $.extend(e, t), n()
            },
            n = function() {
                $("input[type=radio]").each(function() {
                    $(this).change(function() {
                        $(this).is(":checked") ? ($(this).closest(".form-group").find("label.radius").removeClass("checked"), $(this).closest(".form-group").find("input[type=radio]").prop("checked", !1), $(this).prop("checked", !0), $(this).closest("label.radius").hasClass("checked") || $(this).closest("label.radius").addClass("checked")) : ($(this).prop("checked", !1), $(this).closest("label.radius").removeClass("checked"))
                    })
                }), e.requiredElements && ($("#custSurvey").validate({
                    errorPlacement: function(e, t) {
                        t.closest(".form-group").find("p").append(e)
                    },
                    success: function(e) {
                        e.removeClass("error").addClass("valid")
                    }
                }), $(e.requiredElements.split(",")).each(function(e, t) {
                    $("[name=" + t + "]").rules("add", {
                        required: !0,
                        messages: {
                            required: Resource.Validation.REQUIRED
                        }
                    })
                }))
            };
        return {
            init: t
        }
    }();
$(document).ready(function() {
    var e = function() {
            $.validator.addMethod("customemail", function(e, t) {
                return /^\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i.test(e)
            }, "Invalid email address"), $.validator.addMethod("genericphone", function(e, t) {
                return /^(?=.*[0-9])[- +()0-9]+$/i.test(e)
            }, "Invalid phone number"), $.validator.addMethod("turkishdate", function(e, t) {
                return e.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/)
            }, "Please enter date in day/month/year format.")
        },
        t = function() {
            $("input").on("focus, keyup", function() {
                $(this).parent().find(".valid").length > 0 && $(this).parent().find("label.valid").remove()
            }), $("input").on("blur", function() {
                $(this).parent().find("label.valid").length > 1 && $(this).parent().find("label.valid").not(":first-of-type").remove()
            })
        },
        n = function() {
            var e = $("form.login-form, form.login.joinorlogin-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    email: {
                        required: !0,
                        customemail: !0
                    },
                    password: {
                        required: !0
                    }
                },
                messages: {
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    },
                    password: {
                        required: Resource.Validation.Login.PASSWORD_REQUIRED
                    }
                }
            })
        },
        i = function() {
            var e = "form.password-form",
                t = $(e);
            0 !== t.length && t.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    currentPassword: {
                        required: !0,
                        minlength: 6
                    },
                    password: {
                        required: !0,
                        minlength: 6
                    },
                    password2: {
                        equalTo: e + " #sifre"
                    }
                },
                messages: {
                    currentPassword: {
                        required: Resource.Validation.Login.PASSWORD_REQUIRED,
                        minlength: Resource.Validation.NewUser.PASSWORD_MINLENGTH
                    },
                    password: {
                        required: Resource.Validation.Login.PASSWORD_REQUIRED,
                        minlength: Resource.Validation.NewUser.PASSWORD_MINLENGTH
                    },
                    password2: {
                        equalTo: Resource.Validation.NewUser.PASSWORD_MUST_MATCH
                    }
                }
            })
        },
        r = function() {
            var e = "form.resetpassword-form",
                t = $(e);
            0 !== t.length && t.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    password: {
                        required: !0,
                        minlength: 6
                    },
                    password2: {
                        equalTo: e + " #sifre"
                    }
                },
                messages: {
                    password: {
                        required: Resource.Validation.Login.PASSWORD_REQUIRED,
                        minlength: Resource.Validation.NewUser.PASSWORD_MINLENGTH
                    },
                    password2: {
                        equalTo: Resource.Validation.NewUser.PASSWORD_MUST_MATCH
                    }
                }
            })
        },
        o = function() {
            $("body").find("#billingType-error").length > 0 && $("#billingType-error").appendTo($(".faturaBilgi"))
        },
        s = function() {
            var e = $("form.unsubscribe-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t), o()
                },
                success: function(e, t) {
                    e.insertAfter(t).removeClass("error").addClass("valid"), o()
                },
                rules: {
                    phoneCode: {
                        required: !0
                    },
                    phoneNumber: {
                        required: !0,
                        minlength: 10
                    }
                },
                messages: {
                    phoneCode: {
                        required: ""
                    },
                    phoneNumber: {
                        required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                        minlength: Resource.Validation.NewUser.PHONE_NUMBER_MINLENGTH
                    }
                }
            })
        },
        a = function() {
            var e = $("form.account-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t), o()
                },
                success: function(e, t) {
                    e.insertAfter(t).removeClass("error").addClass("valid"), o()
                },
                rules: {
                    fullName: {
                        required: !0
                    },
                    phoneCode: {
                        required: !0
                    },
                    phoneNumber: {
                        required: !0,
                        minlength: 10
                    },
                    email: {
                        required: !0,
                        customemail: !0
                    },
                    billingAddress: {
                        required: "#kurumsalF:checked"
                    },
                    billingTaxOffice: {
                        required: !0
                    },
                    billingTaxNumber: {
                        required: "#kurumsalF:checked"
                    },
                    billingCompany: {
                        required: !0
                    }
                },
                messages: {
                    fullName: {
                        required: Resource.Validation.NewUser.FULLNAME_REQUIRED
                    },
                    phoneCode: {
                        required: ""
                    },
                    phoneNumber: {
                        required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                        minlength: Resource.Validation.NewUser.PHONE_NUMBER_MINLENGTH
                    },
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    },
                    billingAddress: {
                        required: Resource.Validation.Account.ADDRESS_REQUIRED
                    },
                    billingTaxOffice: {
                        required: Resource.Validation.Account.TAX_OFFICE_REQUIRED
                    },
                    billingTaxNumber: {
                        required: Resource.Validation.Account.TAX_NUMBER_REQUIRED
                    },
                    billingCompany: {
                        required: Resource.Validation.Account.COMPANY_NAME_REQUIRED
                    }
                }
            })
        },
        l = function() {
            var e = $("form.remind-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    email: {
                        required: !0,
                        customemail: !0
                    }
                },
                messages: {
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    }
                }
            })
        },
        c = function() {
            var e = $("form.banks-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    email: {
                        required: !0,
                        customemail: !0
                    }
                },
                messages: {
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    }
                }
            })
        },
        u = function() {
            var e = $("form.customer-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e, t) {
                    e.insertAfter(t).removeClass("error").addClass("valid")
                },
                rules: {
                    fullName: {
                        required: !0
                    },
                    phoneCode: {
                        required: !0
                    },
                    phoneNumber: {
                        required: !0,
                        remote: {
                            url: Resource.Urls.validatePhone,
                            type: "post",
                            data: {
                                phoneCode: function() {
                                    return $("select[name=countryCode]").val()
                                },
                                phoneNumber: function() {
                                    return $("input[name=phoneNumber]").val()
                                }
                            }
                        }
                    },
                    email: {
                        required: !0,
                        customemail: !0
                    },
                    fileLanguageId: {
                        required: !0
                    },
                    "interpretLanguageId[]": {
                        required: !0
                    }
                },
                messages: {
                    fullName: {
                        required: Resource.Validation.NewUser.FULLNAME_REQUIRED
                    },
                    phoneCode: {
                        required: ""
                    },
                    phoneNumber: {
                        required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                        remote: Resource.Validation.NewUser.PHONE_NUMBER_INVALID
                    },
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    },
                    fileLanguageId: {
                        required: Resource.Validation.Order.TARGET_LANGUAGE_REQUIRED
                    },
                    "interpretLanguageId[]": {
                        required: Resource.Validation.Order.TARGET_LANGUAGE_REQUIRED
                    }
                }
            })
        },
        d = function() {
            var e = $("form.address-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    var n = t;
                    $(t).next() && "greenCheck" === $(t).next().attr("class") && (n = $(t).next()), e.insertAfter(n)
                },
                success: function(e, t) {
                    var n = t;
                    $(t).next() && "greenCheck" === $(t).next().attr("class") && (n = $(t).next()), e.insertAfter(n).removeClass("error").addClass("valid")
                },
                rules: {
                    recipient: {
                        required: !0
                    },
                    phoneCode: {
                        required: !0
                    },
                    phoneNumber: {
                        required: !0,
                        remote: {
                            url: Resource.Urls.validatePhone,
                            type: "post",
                            data: {
                                phoneCode: function() {
                                    return $("select[name=countryCode]").val()
                                },
                                phoneNumber: function() {
                                    return $("input[name=phoneNumber]").val()
                                }
                            }
                        }
                    },
                    address: {
                        required: !0
                    },
                    city: {
                        required: !0
                    },
                    country: {
                        required: !0
                    }
                },
                messages: {
                    recipient: {
                        required: Resource.Validation.NewUser.FULLNAME_REQUIRED
                    },
                    phoneCode: {
                        required: ""
                    },
                    phoneNumber: {
                        required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                        remote: Resource.Validation.NewUser.PHONE_NUMBER_INVALID
                    },
                    address: {
                        required: Resource.Validation.Account.ADDRESS_REQUIRED
                    },
                    city: {
                        required: Resource.Validation.Account.CITY_REQUIRED
                    },
                    country: {
                        required: ""
                    }
                }
            })
        },
        h = function() {
            var e = "form.newuser-form",
                t = "form.kayitol.joinorlogin-form",
                n = $(e).length > 0 ? e : $(t).length > 0 ? t : null;
            if (null !== n) {
                var i = $(n);
                i.validate({
                    errorPlacement: function(e, t) {
                        var n = t;
                        $(t).next() && "greenCheck" === $(t).next().attr("class") && (n = $(t).next()), e.insertAfter(n)
                    },
                    success: function(e, t) {
                        var n = t;
                        $(t).next() && "greenCheck" === $(t).next().attr("class") && (n = $(t).next()), e.insertAfter(n).removeClass("error").addClass("valid")
                    },
                    rules: {
                        fullName: {
                            required: !0
                        },
                        phoneCode: {
                            required: !0
                        },
                        phoneNumber: {
                            required: !0,
                            remote: {
                                url: Resource.Urls.validatePhone,
                                type: "post",
                                data: {
                                    phoneCode: function() {
                                        return $("select[name=countryCode]").val()
                                    },
                                    phoneNumber: function() {
                                        return $("input[name=phoneNumber]").val()
                                    }
                                }
                            }
                        },
                        password: {
                            required: !0,
                            minlength: 6
                        },
                        password2: {
                            required: !0,
                            equalTo: n + " #sifre"
                        },
                        email: {
                            required: !0,
                            customemail: !0
                        },
                        eula: {
                            required: !0
                        }
                    },
                    messages: {
                        fullName: {
                            required: Resource.Validation.NewUser.FULLNAME_REQUIRED
                        },
                        phoneCode: {
                            required: ""
                        },
                        phoneNumber: {
                            required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                            remote: Resource.Validation.NewUser.PHONE_NUMBER_INVALID
                        },
                        password: {
                            required: Resource.Validation.Login.PASSWORD_REQUIRED,
                            minlength: Resource.Validation.NewUser.PASSWORD_MINLENGTH
                        },
                        password2: {
                            required: " ",
                            equalTo: Resource.Validation.NewUser.PASSWORD_MUST_MATCH
                        },
                        email: {
                            required: Resource.Validation.Login.EMAIL_REQUIRED,
                            customemail: Resource.Validation.Login.EMAIL_INVALID
                        },
                        eula: {
                            required: Resource.Validation.NewUser.AGREEMENT_APPROVAL_REQUIRED
                        }
                    }
                })
            }
        },
        p = function() {
            var e = $("form.newtranslator-form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e, t) {
                    e.insertAfter(t).removeClass("error").addClass("valid")
                },
                rules: {
                    fullName: {
                        required: !0
                    },
                    nationality: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        customemail: !0
                    },
                    graduationDate: {
                        turkishdate: !0,
                        required: !0
                    },
                    phoneCode: {
                        required: !0
                    },
                    phoneNumber: {
                        required: !0,
                        remote: {
                            url: Resource.Urls.validatePhone,
                            type: "post",
                            data: {
                                phoneCode: function() {
                                    return $("select[name=countryCode]").val()
                                },
                                phoneNumber: function() {
                                    return $("input[name=phoneNumber]").val()
                                }
                            }
                        }
                    },
                    address: {
                        required: !0
                    },
                    university: {
                        required: !0
                    },
                    department: {
                        required: !0
                    }
                },
                messages: {
                    fullName: {
                        required: Resource.Validation.NewUser.FULLNAME_REQUIRED
                    },
                    nationality: {
                        required: Resource.Validation.NewTranslator.NATIONALITY_REQUIRED
                    },
                    email: {
                        required: Resource.Validation.Login.EMAIL_REQUIRED,
                        customemail: Resource.Validation.Login.EMAIL_INVALID
                    },
                    graduationDate: {
                        required: Resource.Validation.NewTranslator.GRADUATION_DATE_REQUIRED,
                        turkishdate: Resource.Validation.NewTranslator.GRADUATION_DATE_INVALID
                    },
                    phoneCode: {
                        required: ""
                    },
                    phoneNumber: {
                        required: Resource.Validation.NewUser.PHONE_NUMBER_REQUIRED,
                        remote: Resource.Validation.NewUser.PHONE_NUMBER_INVALID
                    },
                    address: {
                        required: Resource.Validation.NewTranslator.ADDRESS_REQUIRED
                    },
                    university: {
                        required: Resource.Validation.NewTranslator.UNIVERSITY_REQUIRED
                    },
                    department: {
                        required: Resource.Validation.NewTranslator.DEPARTMENT_REQUIRED
                    }
                }
            })
        },
        f = function() {
            var e = $("#ptModal");
            0 !== e.length && 0 !== e.find("form").length && e.find("form").validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    voucherCode: {
                        required: !0
                    }
                },
                messages: {
                    voucherCode: " "
                }
            })
        },
        m = function() {
            var e = $("#turkcellModal");
            0 !== e.length && 0 !== e.find("form").length && e.find("form").validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    phone: {
                        required: !0
                    },
                    pin: {
                        required: !0
                    }
                },
                messages: {
                    phone: " ",
                    pin: " "
                }
            })
        },
        g = function() {
            var e = $("#ininal form");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    cardNumber: {
                        required: !0,
                        number: !0
                    },
                    cardExpiry: {
                        required: !0
                    },
                    cardCvv: {
                        required: !0,
                        number: !0
                    }
                },
                messages: {
                    cardNumber: {
                        required: Resource.Validation.Payment.CARD_NO_REQUIRED,
                        number: Resource.Validation.Payment.CARD_NO_REQUIRED
                    },
                    cardExpiry: {
                        required: Resource.Validation.Payment.CARD_EXPIRY_REQUIRED
                    },
                    cardCvv: {
                        required: Resource.Validation.Payment.CARD_CVV_REQUIRED,
                        number: Resource.Validation.Payment.CARD_CVV_REQUIRED
                    }
                }
            })
        },
        v = function() {
            var e = $("#eft form");
            0 !== e.length && e.validate({
                ignore: [],
                errorPlacement: function(e, t) {
                    e.insertAfter(t)
                },
                success: function(e) {
                    e.removeClass("error").addClass("valid")
                },
                rules: {
                    uploadFile: {
                        required: !0
                    }
                },
                messages: {
                    uploadFile: {
                        required: Resource.Validation.Payment.FILE_REQUIRED
                    }
                }
            })
        },
        y = function() {
            var e = $("#contactForm");
            0 !== e.length && e.validate({
                errorPlacement: function(e, t) {
                    $(t).nextAll(".error, .valid").remove(), e.insertAfter(t)
                },
                success: function(e, t) {
                    $(t).nextAll(".error, .valid").remove(), e.insertAfter(t).removeClass("error").addClass("valid")
                },
                rules: {
                    firstName: {
                        required: !0
                    },
                    lastName: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        customemail: !0
                    },
                    phone: {
                        required: !0,
                        minlength: 7,
                        genericphone: !0
                    },
                    country: {
                        required: !0
                    },
                    message: {
                        required: !0
                    }
                },
                messages: {
                    firstName: {
                        required: " "
                    },
                    lastName: {
                        required: " "
                    },
                    email: {
                        required: " ",
                        customemail: " "
                    },
                    phone: {
                        required: " ",
                        minlength: " ",
                        genericphone: " "
                    },
                    country: {
                        required: " "
                    },
                    message: {
                        required: " "
                    }
                }
            })
        };
    e(), t(), n(), l(), h(), i(), r(), p(), a(), u(), d(), c(), y(), s(), g(), v(), f(), m()
});
//# sourceMappingURL=app.min.js.map