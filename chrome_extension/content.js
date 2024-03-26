chrome.storage.local.get('blockedSites', async (data) => {
    const blockedSites = data.blockedSites || [];
    if (blockedSites.some(site => window.location.href.startsWith(site))) {
        document.documentElement.innerHTML = "This website is blocked!";
    }
});
