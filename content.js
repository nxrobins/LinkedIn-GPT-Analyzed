chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchProfileData") {
    const name = document.querySelector(".top-card-layout__title").innerText;
    const headline = document.querySelector(".top-card-layout__headline").innerText;

    sendResponse({ name, headline });
  }
});
