$.getJSON('http://data.cityofchicago.org/resource/5cq6-qygt.json', function(busstops) {
    $('#busstoplist').empty();
    
    $.each(busstops, function(i, busstop) {
      $('#busstoplist').append(generateLStopLink(busstop));
    });
    
    $('#busstoplist').listview('refresh');
});

function generateLStopLink(busstop){
  
    return '<li><a href="javascript:void(0)'
              + '"onclick="goToStopDetailPage(\''
              + busstop.cta_stop_name
              + '\',\''
              + busstop.routes +'\')">'
              + busstop.cta_stop_name
              + '</a></li>';
}

function goToStopDetailPage(busstopName) {
  
  var busstopPage = $("<div data-role='page' data url=station><div data-role='header'><h1>"
                    + busstopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                    + busstopName + "</h4></div></div>");


//append the new page to the page container
busstopPage.appendTo( $.mobile.pageContainer);

//go to the newly created page
$.mobile.changePage(busstopPage);

}