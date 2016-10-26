/**
 * @author Alexxd
 * @version 1.0.0
 * @decription image upload with a preview js component.
 */
;(function(exports) {
    /**
     * default setting
     * @attribute isAbsPostion  Whether to use absolute positioning（set it 'true' to have a higher performance）
     * @attribute pvBoxId  The id of a 'div' element which will be put the preview image in.
     */
    var options = {
        width: 150,
        height: 150,
        prvBox:'preview',
        isAbsPostion: false
    },
    fr = new FileReader();

    var api = {
        config: function(opts) {
            if (!opts) {
                return options
            }
            for (var key in opts) {
                if (opts.hasOwnProperty(key)) {
                    options[key] = opts[key];
                }
            }
            return api;
        },
        listen: function listen(elem) {
            if (typeof elem === 'string') {
                var elems = document.querySelectorAll(elem),
                    i = elems.length;

                while (i--) {
                    listen(elems[i]);
                }
                return api;
            }

            elem.onchange = function() {
                fr.readAsDataURL(elem.files[0]);
            }
            api.showPreview(document.getElementById(options.prvBox));
            return api;
        },
        showPreview: function(elem) {
            fr.onload = function() {
                var img = document.createElement('img');

                img.style.width = options.width + 'px';
                img.style.height = options.height + 'px';
                if (options.isAbsPostion) {
                    img.style.position = 'absolute';
                }
                img.setAttribute('src', fr.result);

                elem.appendChild(img);
            }
            return api;
        }
    }

    exports.preview = api;
})(window)
