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
                    + settings.link + '">';
            var a_end = settings.link === undefined ? '' : '</a>';
            var element = '<div' + id + ' class="jCorner" style="width: '
                    + settings.size * 2 + 'px; height: ' + settings.size
                    + 'px;">' + a_start
                    + '<div class="jCorner_left" style="border-width: 0 0 '
                    + settings.size + 'px ' + settings.size 
                    + 'px;"></div><div class="jCorner_square" '
                    + 'style="border-width: 0 0 ' + settings.size + 'px '
                    + settings.size 
                    + 'px; border-color: transparent transparent ' 
                    + settings.background 
                    + ' transparent;"></div><div class="jCorner_right" '
                    + 'style="border-width: ' + settings.size + 'px ' 
                    + settings.size + 'px 0 0; left: ' + settings.size 
                    + 'px; top: -' + settings.size + 'px;"></div>' 
                    + a_end;
            console.log(element);

            return $(this).append(element);
        });
    }
}(jQuery));

