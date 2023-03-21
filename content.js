chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchProfileData") {
    const name = document.querySelector(".top-card-layout__title").innerText;
    const headline = document.querySelector(".top-card-layout__headline").innerText;

    sendResponse({ name, headline });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchProfileData") {
    try {
      const name = document.querySelector(".top-card-layout__title").innerText;
      const headline = document.querySelector(".top-card-layout__headline").innerText;

      console.log(`Profile data: Name: ${name}, Headline: ${headline}`);
      sendResponse({ name, headline });
    } catch (error) {
      console.error("Error fetching profile data:", error);
      sendResponse({ error: "Error fetching profile data." });
    }

    // Add this line to keep the message channel open for asynchronous responses.
    return true;
  }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchProfileData") {
    try {
      const name = document.querySelector(".top-card-layout__title").innerText;
      const headline = document.querySelector(".top-card-layout__headline").innerText;

      console.log(`Profile data: Name: ${name}, Headline: ${headline}`);
      sendResponse({ name, headline });
    } catch (error) {
      console.error("Error fetching profile data:", error);
      sendResponse({ error: "Error fetching profile data." });
    }
  }
});
