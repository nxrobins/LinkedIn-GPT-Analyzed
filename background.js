chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProfile") {
    const prompt = request.prompt;
    const url = "https://api.openai.com/v1/engines/davinci-codex/completions";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.8
      })
    })
      .then(response => response.json())
      .then(data => sendResponse(data.choices[0].text))
      .catch(error => console.error("Error:", error));

    return true; // Required for async sendResponse
  }
});
