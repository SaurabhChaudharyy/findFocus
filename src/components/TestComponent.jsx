import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Or similar library for navigation events

const BlockedSiteComponent = () => {
  const [blockedSites, setBlockedSites] = useState([]); // Array to store blocked URLs
  const [newUrl, setNewUrl] = useState(""); // State for user-entered URL
  const navigate = useNavigate();

  useEffect(() => {
    const handleHistoryChange = (location) => {
      const currentUrl = location.pathname;
      if (blockedSites.some((site) => currentUrl.startsWith(site))) {
        alert(`This website (URL: ${currentUrl}) is blocked.`);
      }
    };

    // Update listener on blocklist changes or when navigate changes (optional)
    const unsubscribe = navigate.createListener(handleHistoryChange);
    unsubscribe(); // Call immediately to trigger initial check

    return unsubscribe; // Cleanup on unmount
  }, [blockedSites, navigate]); // Update listener on blocklist changes

  const handleAddSite = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    setBlockedSites([...blockedSites, newUrl]); // Add new URL to blocklist
    setNewUrl(""); // Clear input field
  };

  return (
    <div>
      <h2>Blocked Sites</h2>
      <ul>
        {blockedSites.map((site) => (
          <li key={site}>{site}</li>
        ))}
      </ul>

      <h2>Add a Site to Block</h2>
      <form onSubmit={handleAddSite}>
        <label htmlFor="new-url">Website URL:</label>
        <input
          type="text"
          id="new-url"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
          required
        />
        <button type="submit">Block Site</button>
      </form>

      {/* Your other component content here */}
    </div>
  );
};

export default BlockedSiteComponent;
