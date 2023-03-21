async function analyzeProfileData(profileData) {
  const apiKey = "your_openai_api_key";
  const apiEndpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const prompt = `Analyze the LinkedIn profile of ${profileData.name}, who has the headline "${profileData.headline}".`;

  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return data.choices[0].text.trim();
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProfile") {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "fetchProfileData" }, async (profileData) => {
        const analysis = await analyzeProfileData(profileData);
        sendResponse({ analysis });
      });
    });

    return true;
  }
});
