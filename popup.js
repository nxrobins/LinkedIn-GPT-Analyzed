document.getElementById("analyzeButton").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "analyzeProfile" }, (response) => {
    document.getElementById("analysisResult").innerText = response.analysis;
  });
});
