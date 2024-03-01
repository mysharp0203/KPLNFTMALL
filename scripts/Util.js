/*全局的ajax访问，处理ajax清求时sesion超时*/
$.ajaxSetup({
    contentType: 'application/x-www-form-urlencoded;charset=utf-8',
    complete: function (XMLHttpRequest, textStatus) {
        var sessionstatus = XMLHttpRequest.getResponseHeader('SessionStatus'); //通过XMLHttpRequest取得响应头，sessionstatus，
        if (sessionstatus == 'TimeOut') {
            if (window.top == window.self) {//不存在父页面
            } else {
                top.window.location.href = '/Login';
            }
        }
        else {

        }
    }
});


Date.prototype.format = function (a) {
    if (a == undefined) return '';
    var o = {
        'M+': this.getMonth() + 0x1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 0x3) / 0x3),
        'S': this.getMilliseconds()
    };
    if (/(y+)/.test(a)) {
        a = a.replace(RegExp.$1, (this.getFullYear() + '').substr(0x4 - RegExp.$1.length))
    };
    for (var b in o) {
        if (new RegExp('(' + b + ')').test(a)) {
            a = a.replace(RegExp.$1, RegExp.$1.length == 0x1 ? o[b] : ('00' + o[b]).substr(('' + o[b]).length))
        }
    };
    return a
};
Array.prototype.Contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
};

(function ($, window, undefined) {
    //引用插件jquery、unblockUI
    $.extend({
        ICFS: {
            getFormValues: function (selector, subselectors) {
                var obj = getValues(selector);
                if (subselectors != undefined) {
                    for (var item in subselectors) {
                        //多行扩展 代码块

                        obj[subselectors[item]] = {};
                    }
                }
                return obj;

                function getValues(selector) {
                    var obj = {};
                    var $selector = $(selector);
                    $selector.find(" :input[name]").each(function (i, v) {
                        var $v = $(v);

                        if (v.type == "checkbox" || v.type == "radio") {
                            setChk(this, obj);
                            return;
                        }
                        //else if (v.type == "radio") {
                        //    setRaido(this, obj);
                        //    return;
                        //}

                        //用$(v).val() 代替this.value 区别于当下拉框为数组时能取到多条数据
                        var _value = $v.val();
                        _value = _value instanceof Array ? _value.join(',') : _value;

                        if (this.type == "textarea") {
                            _value = _value || $v.text();
                            if (_value && _value.length > 0)
                                obj[this.name] = _value;
                            return;
                        }
                        if ($v.hasClass("_inputmark")) {
                            var _inputValue = $v.inputmask('unmaskedvalue');
                            if (_inputValue.length > 0)
                                obj[v.name] = _inputValue;
                            return;
                        }

                        if ($v.hasClass("_ipaddress")) {
                            if (_value != "___.___.___.___" && _value != "____:____:____:____:____:____:____:____")
                                obj[v.name] = _value;
                            return;
                        }

                        if (_value && _value.length > 0)
                            obj[v.name] = _value;
                    });

                    return obj;
                }


            },
            setForm: function (selector, data) {
                $(selector + " :input[name]").each(function (i, v) {

                });
            },
            convertDate: function (value, dateStr) {
                try {
                    if (value != null && value != '') {
                        var _temp = new Date((parseInt(value.replace('/Date(', '').replace(')/', ''), 0xa)));
                        return _temp.format(dateStr)
                    };
                } catch (e) {
                    return ''
                }


            },
            jump: function (options) {
                var defaults = { action: "", method: "post", target: "_self" };
                var isObject = typeof options == "object";
                if (isObject) {
                    defaults = $.extend({}, defaults, options);
                }
                else {
                    defaults.action = options || "";
                }
                if (!defaults.action) {
                    alert("action 参数错误")
                    return false;
                }
                var form = $('<form target="' + defaults.target + '" method="' + defaults.method + '" action="' + defaults.action + '"></form>');
                if (isObject) {
                    for (var p in defaults) {
                        if (p != "target" && p != "method" && p != "action") {
                            var _input = $('<input type="text" name="' + p + '" value="' + defaults[p] + '" />');
                            form.append(_input);
                        }
                    }
                }
                $("body").append(form)
                form.submit();
                form.remove();
            },
            Post: function (url, data, callback) {
                var $submitButton = $("#" + data._submitButton);
                var btnText = $submitButton.text();
                if ($.isFunction(data)) {
                    callback = data;
                    data = {}
                };
                $.ajax({
                    type: 'POST',
                    url: url,
                    data: data,
                    dataType: 'json',
                    beforeSend: function () {
                        if ($submitButton.hasClass("disabled")) {
                            return false;
                        }
                        $submitButton.addClass("btn-danger").text("正在提交...");
                        layer.load();
                        // $.blockUI({ message: '正在提交...', css: { padding: "10px" } });
                    },
                    complete: function () {

                        //$.unblockUI();
                    },
                    success: callback
                })
            },
            getUrlParams: function (paraName) {
                //获取url参数
                var s = '';
                var url = window.location.search;
                if (url.indexOf('?') != -1) {
                    var str = url.substr(1);
                    var strs = str.split('&');
                    for (var i = 0; i < strs.length; i++) {
                        if ([strs[i].split('=')[0]] == paraName) {
                            s = strs[i].split('=')[1];
                        }
                    };
                    return s;
                }
            }
        }
    });



    $.fn.getSearch = function () {
        var arr = [];
        var $selector = $(this);
        $selector.find(" :input[name]").each(function (i, v) {
            var _method = $(this).attr("_method") || $(this).attr("method");

            var $v = $(v);
            var obj = {};
            if (v.type == "checkbox") {
                arr.push({ Field: this.name, Method: _method, Value: v.checked });
                return;
            }
            else if (v.type == "radio") {
                //setRaido(this, obj);
                return;
            }
            var _value = $v.val();
            if (v.type == "select-one" && _value == -1) {
                return;
            }
            _value = _value instanceof Array ? _value.join(',') : _value;

            if (this.type == "textarea") {
                _value = _value || $v.text();
                if (_value && _value.length > 0)
                    arr.push({ Field: this.name, Method: _method, Value: _value });
                return;
            }
            if ($v.hasClass("_inputmark")) {
                var _inputValue = $v.inputmask('unmaskedvalue');
                if (_inputValue.length > 0)
                    arr.push({ Field: this.name, Method: _method, Value: _inputValue });
                return;
            }

            if ($v.hasClass("_ipaddress")) {
                if (_value != "___.___.___.___" && _value != "____:____:____:____:____:____:____:____")
                    arr.push({ Field: this.name, Method: _method, Value: _value });
                return;
            }

            if (_value && _value.length > 0)
                arr.push({ Field: this.name, Method: _method, Value: _value });
        });
        return { Items: arr };
    }

    $.fn.forms = function (options, param) {
        if (typeof options == 'string') {
            this.each(function () {
                //initForm(this);
            });
            return $.fn.forms.methods[options](this, param);
        }

        return this.each(function () {
            initForm(this, options);
            setForm(this);
        });
    }

    $.fn.forms.methods = {
        get: function (jq, data) {
            return _get(jq, data);
        },
        load: function (jq, data) {
            return jq.each(function () {
                load(this, data);
            });
        },
        clear: function (jq) {
            return jq.each(function () {
                clear(this);
            });
        }
    };

    function _get(jq, data) {
        return $.ICFS.getFormValues(jq, data);
    }


    function convertToDate(a, b) {
        if (a != null && a != '') {
            var c = new Date((parseInt(a.replace('/Date(', '').replace(')/', ''), 0xa)));
            return c.format(b)
        };
        return ''
    };

    $("#page-wrapper").css({ "min-height": $("body").height() - 10 });

})(jQuery, window, undefined);


