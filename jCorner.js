(function($) {
    $.fn.jCorner = function(options) {
        return this.each(function() {
            var settings = $.extend({
                size: 40,
                id: undefined,
                link: undefined,
                background: '#fff' 
            }, options);

            var id = settings.id === undefined ? '' : ' id="' 
                    + settings.id + '"';
            var a_start = settings.link === undefined ? '' : '<a href="'
                    + settings.link + '" target="_blank">';
            var a_end = settings.link === undefined ? '' : '</a>';
            var element = '<div' + id + ' class="jCorner" style="width: '
                    + settings.size * 2 + 'px; height: ' + settings.size
                    + 'px; position: absolute; bottom: 0; right: 0;">' + a_start
                    + '<div class="jCorner_left" style="border-width: 0 0 '
                    + settings.size + 'px ' + settings.size 
                    + 'px; width: 0px; height: 0px; border-style: solid; '
                    + 'border-color: transparent transparent #999 transparent; '
                    + 'opacity: 0.6; float: left; z-index: 10;"></div>'
                    + '<div class="jCorner_square" style="border-width: 0 0 '
                    + settings.size + 'px ' + settings.size 
                    + 'px; border-color: transparent transparent ' 
                    + settings.background 
                    + ' transparent; width: 0px; height: 0px; '
                    + 'border-style: solid; float: left;"></div>'
                    + '<div class="jCorner_right" '
                    + 'style="border-width: ' + settings.size + 'px ' 
                    + settings.size + 'px 0 0; left: ' + settings.size 
                    + 'px; top: -' + settings.size + 'px; width: 0px; '
                    + 'height: 0px; border-style: solid; '
                    + 'border-color: #fff transparent transparent transparent; '
                    + 'position: relative; opacity: 0.6; float: left; '
                    + 'z-index: 10;"></div>' 
                    + a_end;

            return $(this).append(element).css('position', 'relative');
        });
    }
}(jQuery));
