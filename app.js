// Array of objects that supplies the Content, icon, title and information
var dataArray = [{
    myLatLng: {
        lat: 44.9781,
        lng: 266.744
    },
    title: 'Guthrie Theater',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=1|FE6256|000000',
    locationInfo: '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Guthrie Theater</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Guthrie Theater</b>, is an amazing place! They host the best plays in Minnesota. I am  ' +
        ' not the biggest fan of plays but these are so well done I must recommend this as one ' +
        ' of the best places to visit in Minnesota. The building itself is extravagant, having a  ' +
        ' section of the building that hangs out over the river, making it an amazing view. Also be ' +
        ' sure to dress to impress as this is a fancy establishment. </p>' +
        '</div>' +
        '</div>',
}, {
    myLatLng: {
        lat: 44.8549,
        lng: 266.758
    },
    title: 'Mall of America',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|FE6256|000000',
    locationInfo: '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Mall of America</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Mall of America</b>, is the largest Mall in America! Being a major tourist attraction ' +
        ' the Mall offers a one stop shop for everything you could wish for; ranging from, ' +
        ' over four floors of continuous stores, an entire amusement park called Nickelodeon ' +
        ' Universe, An underground aquarium, with countless of food options. The mall has ' +
        ' recently been expanding by adding hotels and updating major parts of the interior. </p>' +
        '</div>' +
        '</div>'
}, {
    myLatLng: {
        lat: 46.7867,
        lng: 267.91
    },
    title: 'Duluth',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=3|FE6256|000000',
    locationInfo: '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Duluth</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Duluth</b>, is a seaport city in the U.S. state of Minnesota and the county seat of Saint Louis County ' +
        'Duluth has a population of 86,110[3] and is the second-largest city on Lake Superiors shores, after Thunder Bay, ' +
        'Ontario; it has the largest metropolitan area on the lake. The Duluth MSA had a population of 279,771 in 2010, ' +
        ' the second largest in Minnesota. ' +
        '</p>' +
        '<p>Attribution: Duluth, <a href="https://en.wikipedia.org/wiki/Duluth,_Minnesota">' +
        'https://en.wikipedia.org/wiki/Duluth,_Minnesota</a> ' +
        '(last visited September 20, 2016).</p>' +
        '</div>' +
        '</div>'
}, {
    myLatLng: {
        lat: 44.767,
        lng: 266.805
    },
    title: 'Minnesota Zoo',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=4|FE6256|000000',
    locationInfo: '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Minnesota Zoo</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Minnesota Zoo</b>,(formerly the The New Zoo), is an AZA-accredited zoo in Apple Valley, Minnesota. When it opened on May 22, 1978[1] ' +
        'it was fairly revolutionary in its exhibit design. The zoo, built in a suburbanizing rural area, had more space to house exhibits ' +
        'and was one of the first zoos to organize its animals by their living environment as opposed to their species. ' +
        ' Exhibits are arrayed in six themed areas, including three themed walking trails ranging from one to two miles. ' +
        '</p>' +
        '<p>Attribution: Minnesota Zoo, <a href="https://en.wikipedia.org/wiki/Minnesota_Zoo">' +
        'https://en.wikipedia.org/wiki/Minnesota_Zoo</a> ' +
        '(last visited September 20, 2016).</p>' +
        '</div>' +
        '</div>'
}, {
    myLatLng: {
        lat: 44.866,
        lng: 266.672
    },
    title: 'Centennial Lakes Park',
    icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|FE6256|000000',
    locationInfo: '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Centennial Lakes Park</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Centennial Lakes Park</b>, Centennial Lakes Park is a 24-acre (97,000 m2) park and man-made pond ' +
        ' located in the southeast portion of Edina, Minnesota, United States. The park features more than 1.5 miles (2.4 km) of  ' +
        ' paved pathways meandering around a 10-acre (40,000 m2) lake and interspersed with landscaped grounds, ' +
        ' formal and informal seating areas, swinging benches and fountains. ' +
        ' In addition, the park features a miniature golf course. There is a wide space for lawn bowling and paddleboats can be rented as well.</p>' +
        '<p>Attribution: Centennial Lakes Park, <a href="https://en.wikipedia.org/wiki/Centennial_Lakes_Park_">' +
        'https://en.wikipedia.org/wiki/Centennial_Lakes_Park_</a> ' +
        '(last visited September 20, 2016).</p>' +
        '</div>' +
        '</div>'
}]


//Global Variable map.
var map;

// Creates a map instance and sets center to MN and zoom of entire state.
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(46.2, 266.6),
        zoom: 7
    });

// jQuery forEach loop, dynamically sorting the array of objects accordingly, as it increments through.
    dataArray.forEach(function(dataFromArray, index) {

        var marker = new google.maps.Marker({
            position: dataFromArray.myLatLng,
            map: map,
            title: dataFromArray.title,
            icon: dataFromArray.icon
        });

        var infowindow = new google.maps.InfoWindow({
            content: dataFromArray.locationInfo
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}


// Once document is done loading, allow .click button to hide Landing Page, displaying map. 
$(document).ready(function() {

    $("button").click(function() {
        $(".landingPage").hide();


    });

});
