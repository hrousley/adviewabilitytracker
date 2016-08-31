$(document).ready(function() {

  var siteLoad = Date.now();
  var win = $(window);
  var viewport = window.innerHeight || document.documentElement.clientHeight;
  var adClassName = ".ad-container";
  var adArray = [];
  //var el;
  //console.log(adArray);

  $(adClassName).each(function() {
      adArray.push(this.id);
  });

  var data = {};
  data.ads = [];
  var ad = {};

  console.log(data);

  console.log("viewport:", viewport, "siteLoad", siteLoad);
  //"adArray:", adArray
  

  function isOnScreen (el) {

      if (typeof jQuery === "function" && el instanceof jQuery) {
          el = el[0];
      }
      
      var element = el.getBoundingClientRect();

      var elementHeight = element.height/2,
      pageTop = win.scrollTop(),
      pageBottom = pageTop + win.height(),
      elementTop = element.top,
      elementBottom = element.bottom;

      var isVisible = (elementTop >= 0 - elementHeight && elementBottom <= viewport + elementHeight);
      console.log(isVisible);
      return isVisible;
  }

  $(window).on('DOMContentLoaded load resize scroll', function(){ 
    
    for (var i = 0; i < 1; i++) {

      var el = document.getElementById(adArray[i]);
      var isElementInView = setTimeout(isOnScreen(el, 1000));
      var viewed = false;

      //console.log(data.ads);

      if (isElementInView) {
        console.log("isElementInView true", el);
        viewed = true;
        var adViewStart = Date.now();
        var time_until_view = (adViewStart - siteLoad); // milliseconds (/1000 for seconds)  
        //pushToObj(el,viewed);
      }
      else {
        if (viewed = true) { 
          //stop timer then push total_view_time to object 
          var adViewStop = Date.now();
          //not quite the right approach here, need to rethink this
          var total_view_time = (adViewStop - adViewStart);
        }
        else { 
          viewed = false; 
        }
      }

      //console.log("siteLoad", siteLoad, "adViewStart", adViewStart, "time_until_view", time_until_view, "total_view_time", total_view_time, "adViewStop", adViewStop, "el", el);

    }

  }); 

  function pushToObj(el,viewed) {
    var elementViewed = viewed;

    // ad = data.ads.push({
    //   'id': adArray[i], (i won't work in this function)
    //   'viewed': $(this).viewed, 
    //   'time_until_view': $(this).time_until_view
    // });
  }

});