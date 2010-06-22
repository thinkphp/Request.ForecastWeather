Class: Request.ForecastWeather {#Request.ForecastWeather}
=========================================================

Request.ForecastWeather is a simple class that extends Request.JSONP and display the local forecast weather on your website, blog or other web document.

### Implements:

Options, Events

### Extends:

Request.JSONP


Request.ForecastWeather Method: constructor {#Request.ForecastWeather:constructor}
----------------------------------------------------------------------------------


### Syntax:

    var forecast = new Request.ForecastWeather(location,unit,options);

### Arguments:

1. location (*String*) the location for which you wish to display weather.
2. unit (*Char*) unit 'c' for degrees Celsius or 'f' for degrees Fahrenheit
3. options - (*object*) An object containing the Request.ForecastWeather instance's options.

### options:

* url  - (*String*)  the url to get the JSON data
* data - (*Object*)  additional key/value data to append to the url
...
added options obtained through inheritance.[Request.ForecastWeather extends Request.JSONP]

### Returns:

a Request.ForecastWeather instance

### Events:

### request

* (*function*) this event (function) is fired whenever the instance actually send a request.It is passed one argument.

### Signature

   onRequest(script)

#### Arguments
     1. script - is passed the markup 'SCRIPT' with the url stored in attribute 'src'.


### complete

* (*function*) this event is triggered whenever the instance receives a successful response from the server. It is passed one argument.

### Signature

   onComplete(data)

#### Arguments
     1. data - (*Object*) the data returns is passed.

### success

* (*function*) this function is fired whenever the request has been completed and the data returns from the server. It is passed one argument.

### Signature

   onSuccess(data)

#### Arguments
     1. data - (*Object*) data returns are passed.

## Element Method: loadWeather

Updates the content of the Element with the desired weather.

### Syntax:

myElement.loadWeather(location,unit);

#### Arguments:
1. location (*String*) - the location for which you wish to display weather.
2. unit (*Char*) - unit 'c' for degrees Celsius or 'f' for degrees Fahrenheit

### Returns:

(*Element*) - the target Element

### Example:

       #HTML
       <div id="content">Loading content...</div>

       #JS
       $('content').loadWeather('bucharest','f');

