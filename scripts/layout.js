var tabsAction;
; $(function () {
    tabsAction = {
        menuClick: function () {
            var $menuTabs = $(".J_menuTab");
            var _href = $(this).attr("href");
            var _index = $(this).data("index");
            var _value = $.trim($(this).text());

            var $a = $(".page-tabs-content a:contains('" + _value + "')");
            var _count = 0;
            $a.each(function () {
                if ($(this).text() === _value)
                    _count++;
            });
            //if ($a.length > 0) {
            if (_count>0) {
                $menuTabs.removeClass("active");
                $a.addClass("active");
                $(".J_mainContent").find("iframe.J_iframe").hide();
                $(".J_mainContent").find("iframe.J_iframe[name='iframe" + $a.data("id") + "']").show();
            }
            else {
                if ($menuTabs.length > 10) {
                    layer.msg("亲，超过最大Tab数10,不能继续添加!")
                    return false;
                }
                var _aText = '<a href="javascript:;" class="active J_menuTab" data-id="' + _index + '">' + _value + '<i class="fa fa-times-circle"></i></a>';
                $menuTabs.removeClass("active");
                var iframeContent = '<iframe class="J_iframe" name="iframe' + _index + '" width="100%" height="' + ($(window).height() - 50) + 'px" src="' + _href + '" frameborder="0" data-id="' + _href + '" seamless></iframe>';
                $(".J_mainContent").find("iframe.J_iframe").hide().parents(".J_mainContent").append(iframeContent);
                var lIndex = layer.load();
                $(".J_mainContent iframe:visible").load(function () {
                    layer.close(lIndex)
                })
                $(".J_menuTabs .page-tabs-content").append(_aText);
            }
            return false;
        },
        selectTab: function (t) {
            $(".J_menuTab").removeClass("active");
            $(t).addClass("active");
            $(".J_mainContent").find("iframe.J_iframe").hide();
            $(".J_mainContent").find("iframe.J_iframe[name='iframe" + $(t).data("id") + "']").show();
        },
        closeTab: function (tabName, ev) {
            var $this;
            if (!!tabName) {
                $this = $(".J_menuTab:contains('" + tabName + "')");
            } else {
                $this = $(this).parent("a");
            }
            if ($this.parent().find(".active").length > 0) {
                if ($this.hasClass("active")) {
                    var thisNext = $this.next();
                    if (thisNext.length > 0) {
                        tabsAction.selectTab(thisNext[0]);
                    } else {
                        var thisPrev = $this.prev();
                        tabsAction.selectTab(thisPrev[0]);
                    }
                }
                $this.remove();
                $(".J_mainContent").find("iframe.J_iframe[name='iframe" + $this.data("id") + "']").remove();
            } else {
                $this.remove();
                $(".J_mainContent").find("iframe.J_iframe[name='iframe" + $this.data("id") + "']").remove();
            }
        },
        editName: function (oldName, newName) {
            $this = $(".J_menuTab:contains('" + oldName + "')");
            $i = $this.find("i");
            $this.html(newName).append($i);
        },
        getRand: function (startNum, endNum) {
            return Math.floor(Math.random() * (endNum - startNum)) + startNum;
        }
    }

    $(".c_menu").click(tabsAction.menuClick);
    $(".page-tabs-content").on("click", ".J_menuTab", function () {
        tabsAction.selectTab(this);
    });

    $(".page-tabs-content").on("click", ".fa-times-circle", function (event) {
        tabsAction.closeTab.call(this);
        event.stopPropagation();
    });
});