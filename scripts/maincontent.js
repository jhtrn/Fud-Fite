(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function LoadMainContent(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
  }

  // LoadMainContent.prototype.loadContent = function() {
  //   $.ajax(this.serverUrl, {
  //     type: "GET",
  //     dataType: "json",
  //     success: function(serverResponse) {
  //       console.log(serverResponse);
  //     },
  //     error: function(xhr) {
  //       alert(xhr.responseText);
  //     }
  //   });
  // };

  function LoadMainContent(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  LoadMainContent.prototype.mainContent = function() {
    dpd.pictures.get(function(results, error) {
      if (error) {
        alert(error.message);
      } else {
        console.log(results);
      }
    });
  };


  App.RemoteDataStore = LoadMainContent;
  window.App = App;
})(window);
