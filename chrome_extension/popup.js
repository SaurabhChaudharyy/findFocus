document.addEventListener("DOMContentLoaded", function () {
  const websiteInput = document.getElementById("websiteInput");
  const addButton = document.getElementById("addButton");
  const blockedWebsitesList = document.getElementById("blockedWebsitesList");

  addButton.addEventListener("click", function () {
    const websiteUrl = websiteInput.value.trim();
    if (websiteUrl !== "") {
      chrome.storage.sync.get(["blockedWebsites"], function (result) {
        let blockedWebsites = result.blockedWebsites || [];
        blockedWebsites.push(websiteUrl);
        chrome.storage.sync.set(
          { blockedWebsites: blockedWebsites },
          function () {
            appendToBlockedWebsitesList(websiteUrl);
            websiteInput.value = "";
          }
        );
      });
    }
  });

  function appendToBlockedWebsitesList(websiteUrl) {
    const listItem = document.createElement("li");
    listItem.textContent = websiteUrl;
    blockedWebsitesList.appendChild(listItem);
  }
});
