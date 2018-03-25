(function(window) {
  "use strict";

  var App = window.App;
  var LoadMainContent = App.LoadMainContent;

  // var USER_CONTENT_SELECTOR = "main-content=\"user-content\"";
  var SERVER_URL = "http://localhost:2403/food-fight-backend-master";

  var mainContent = new LoadMainContent(SERVER_URL);

  mainContent.loadContent();



})(window);
