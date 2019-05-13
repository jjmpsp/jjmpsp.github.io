function initialize() {
    var mapOptions = {
        center: {lat: 48.6130662, lng: 4.0355098},
        zoom: 3
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.setCenter(new google.maps.LatLng(52.519325, 13.392709));

    new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
            where: "ISO_2DIGIT IN (" +
            "'AT'," + // Austria
            "'BA'," + // Bosnia and Herzegovina
            "'BE'," + // Belgium
            "'BG'," + // Bulgaria
            "'CH'," + // Switzerland
            "'CY'," + // Cyprus
            "'CZ'," + // Czech Republic
            "'DE'," + // Germany
            "'ES'," + // Spain
            "'FR'," + // France
            "'GB'," + // Great Britain
            "'GR'," + // Greece
            "'HR'," + // Croatia
            "'HU'," + // Hungary
            "'IE'," + // Ireland
            "'IL'," + // Israel
            "'IT'," + // Italy
            "'LT'," + // Lithuania
            "'LV'," + // Latvia
            "'NL'," + // Netherlands
            "'NO'," + // Norway
            "'PL'," + // Poland
            "'RO'," + // Romania
            "'RS'," + // Serbia
            "'SE'," + // Sweden
            "'SI'," + // Slovenia
            "'SK'" + // Slovakia
            ")"
        },
        styles: [
            {
                polygonOptions: {
                    fillColor: '#FF0000',
                    fillOpacity: 0.6
                }
            },
        ],
        map: map,
        suppressInfoWindows:
            true
    });
}

google.maps.event.addDomListener(window, 'load', initialize);