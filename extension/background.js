var blocked_domains = ["*://*.facebook.com/*", "*://*.youtube.com/*"];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: "http://www.google.com"};
    },
    {urls: blocked_domains},
    ["blocking"]
);
