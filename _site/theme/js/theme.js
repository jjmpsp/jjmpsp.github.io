$(document).ready(function () {
    'use strict';

    /*!
    * IE10 viewport hack for Surface/desktop Windows 8 bug
    * Copyright 2014-2017 The Bootstrap Authors
    * Copyright 2014-2017 Twitter, Inc.
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle);
    }

    /*!
    * Random ad display
    */
    const adBlockElem = $(".ad-block");
    let adCount = adBlockElem.length;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const randomInt = getRandomInt(adCount);
    $(adBlockElem[randomInt]).show();
});


