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

* (*function*) function is fired when a request is made.

### Signature

   onRequest(script)

#### Arguments
     1. script - is passed the markup 'SCRIPT' with the url stored in attribute 'src'.


### complete

* (*function*) function is triggered when the request is completed and the data returns.

### Signature

   onComplete(data)

#### Arguments
     1. data - (*Object*) data returns are passed.

### success

* (*function*) function is triggered when the data returns.

### Signature

   onSuccess(data)

#### Arguments
     1. data - (*Object*) data returns are passed.

## Element Method: loadWeather

Updates the content of the Element with this method

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

