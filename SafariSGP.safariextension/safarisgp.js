safari.application.addEventListener("popover", function() {
  var url = safari.application.activeBrowserWindow.activeTab.url;
  console.log(url);
  var uriResult = URI.parse(url);
  console.log(uriResult.getDomain());
  document.getElementById("Domain").value = uriResult.getDomain();
}, true);