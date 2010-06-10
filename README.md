Request.ForecastWeather
=======================
This is a simple plugin that shows you the local weather with JSONP&YQL-driven badge.

![Screenshot](http://farm5.static.flickr.com/4026/4659201615_5229b62e6d.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="core.js"></script>
       <script type="text/javascript" src="jsonp.js"></script>
       <script type="text/javascript" src="Request.ForecastWeather.js"></script>

In your JavaScript source: 

       #JS 
       window.addEvent('domready',function(){ 
           new Request.Weather('bucharest','c',{
                       onSuccess: function(o){
                              var title = '<p style="color: blue"><strong>'+o.query.results.weather.rss.channel.item.title+'</strong></p>',
                                  description = o.query.results.weather.rss.channel.item.description;               
                                  $('weatherbadge').set('html',title+description);
                       }
           }).send();

         //You can load the weather in an Element 
         $('custom').loadWeather('london','f');
      });
In your HTML source: 

       #HTML
       <div id="weatherbadge"></div>
       <div id="custom"></div>

Dependencies

      MooTools Core 1.2.4
      MooTools More: Request.JSONP