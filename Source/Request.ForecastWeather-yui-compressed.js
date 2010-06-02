/*
---
description: Request.ForecastWeather is a simple class based on MooTools framework that extends Request.JSONP and display the local forecast weather on your website, blog or other web document.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.2.1: '*'

provides: [Request.ForecastWeather]
...
*/

Request.ForecastWeather=new Class({Extends:Request.JSONP,options:{url:"http://query.yahooapis.com/v1/public/yql?q=use%20%22http%3A%2F%2Fthinkphp.ro%2Fapps%2FYQL%2Fweather-forecast%2Fweather.woeid.xml%22%20as%20weather%3B%20select%20*%20from%20weather%20where%20location%3D%22{term}%22%20and%20unit%3D%22{unit}%22%3B",data:{format:"json"}},initialize:function(term,unit,options){this.parent(options);this.options.url=this.options.url.substitute({term:term,unit:unit})}});