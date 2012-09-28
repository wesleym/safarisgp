(function () {
  function popoverListener() {
    var url = safari.application.activeBrowserWindow.activeTab.url;
    var uriResult = URI.parse(url);
    document.getElementById("Domain").value = uriResult.getDomain();
  }

  safari.application.addEventListener("popover", popoverListener, true);
}())
