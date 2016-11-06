<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Open Weather API</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
        <div class="container">
                <h3>Get the weather!</h3>
                <!-- START INPUT FIELDS -->
                <div class="input-search">
                        <input id="searchField" type="search-field" name="search-field" placeholder="What’s the weather in...">
                        <input id="searchSubmit" type="button" name="Search" value="Search">
                </div>
                <!-- END INPUT FIELDS -->
                <!-- START SHOW OUR GETTING DATA  -->
                <div>
                <ul id="currentWeather">
                </ul>
                </div>
                <!-- END SHOW OUR GETTING DATA  -->
                <!-- START OUR CLEAN BUTTON -->
                <div id="clear">clear</div>
                <!-- END OUR CLEAN BUTTON -->
        </div>
</body>
</html>