$(document).ready(function(){function t(){return $(".header-inner").height()+CONFIG.sidebar.offset}function e(){var t=$(".footer-inner"),e=t.outerHeight(!0)-t.outerHeight(),i=t.outerHeight(!0)+e;return i}function i(t){return $("#sidebar").css({"margin-top":t})}function n(){var n=t(),f=e(),o=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight(),a=$("#content").height();n+o<a&&r.affix({offset:{top:n-CONFIG.sidebar.offset,bottom:f}}),i(n).css({"margin-left":"initial"})}function f(){$(window).off(".affix"),r.removeData("bs.affix").removeClass("affix affix-top affix-bottom"),n()}function o(){var t=window.matchMedia("(min-width: 991px)");t.addListener(function(t){t.matches&&f()})}var r=$(".sidebar-inner");n(),o()});