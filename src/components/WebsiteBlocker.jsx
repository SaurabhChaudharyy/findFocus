import React, { useState } from "react";

const WebsiteBlocker = () => {
  const [blockedWebsites, setBlockedWebsites] = useState([]);
  const [websiteInput, setWebsiteInput] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");

  const handleInputChange = (event) => {
    setWebsiteInput(event.target.value);
  };

  const addWebsite = () => {
    if (websiteInput.trim() !== "") {
      setBlockedWebsites([...blockedWebsites, websiteInput.trim()]);
      setWebsiteInput("");
    }
  };

  const handleNavigation = (event) => {
    const { href } = event.target;
    if (blockedWebsites.some((website) => href.includes(website))) {
      event.preventDefault();
      setCurrentUrl(href);
      alert(`Access to ${href} is blocked.`);
    }
  };

  return (
    <div>
      <h2>Website Blocker</h2>
      <input
        type="text"
        placeholder="Enter website URL"
        value={websiteInput}
        onChange={handleInputChange}
      />
      <button onClick={addWebsite}>Add Website</button>
      <ul>
        {blockedWebsites.map((website, index) => (
          <li key={index}>{website}</li>
        ))}
      </ul>
      <a href="https://example.com" onClick={handleNavigation}>
        Example Website
      </a>
      <p>Current URL: {currentUrl}</p>
    </div>
  );
};

export default WebsiteBlocker;
