import $ from 'jquery'

$.fn.tab = function(options) {
var defaults = {
    tabActiveClass: 'active',
    tabNav: '#nav>li',
    tabCont: '#cont>div',
    tabType: 'click'
};

var endOptions = $.extend(defaults, options);
$(this).each(function() {
    var _this = $(this);
    _this.find(endOptions.tabNav).bind(endOptions.tabType, function() {
        $(this).addClass(endOptions.tabActiveClass).siblings().removeClass(endOptions.tabActiveClass);
        var index = $(this).index();
        _this.find(endOptions.tabCont).eq(index).show().siblings().hide();
    });
});
};
