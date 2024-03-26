chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage();
});

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (changes.blockedSites) {
    const blockedSites = changes.blockedSites.newValue || [];
    chrome.declarativeNetRequest.update({
      removeRuleIds: [...blockedSites.map((site) => `block-${site}`)],
      addRules: [
        ...blockedSites.map((site) => ({
          id: `block-${site}`,
          condition: {urlPattern: site},
          action: {type: "block"}
        }))
      ]
    });
  }
});
