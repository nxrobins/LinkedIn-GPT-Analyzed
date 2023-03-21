async function analyzeProfileData(profileData) {
  const apiKey = "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";
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

async function analyzeProfileData(profileData) {
  // Handle the case when profileData contains an error.
  if (profileData.error) {
    return profileData.error;
  }

  const apiKey = "your_openai_api_key";
  const apiEndpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const prompt = `Analyze the LinkedIn profile of ${profileData.name}, who has the headline "${profileData.headline}".`;

  try {
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
    
    async function analyzeProfileData(profileData) {
  // Handle the case when profileData contains an error or is undefined.
  if (!profileData || profileData.error) {
    const errorMessage = profileData ? profileData.error : "No profile data received.";
    console.error(errorMessage);
    return errorMessage;
  }

  // The rest of the code remains unchanged.
  // ...
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProfile") {
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "fetchProfileData" }, async (profileData) => {
        const analysis = await analyzeProfileData(profileData);
        sendResponse({ analysis });
      });
    });

    // Add this line to keep the message channel open for asynchronous responses.
    return true;
  }
});


    const data = await response.json();
    console.log("API response:", data);
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching GPT analysis:", error);
    return "Error fetching GPT analysis.";
  }
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

async function analyzeProfileData(profileData) {
  // Handle the case when profileData is undefined or contains an error.
  if (!profileData || profileData.error) {
    const errorMessage = profileData ? profileData.error : "No profile data received.";
    console.error(errorMessage);
    return errorMessage;
  }

  // The rest of the code remains unchanged.
  // ...
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProfile") {
    console.log("Received 'analyzeProfile' action");

    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      console.log("Sending 'fetchProfileData' message to the active tab");

      chrome.tabs.sendMessage(tabs[0].id, { action: "fetchProfileData" }, async (profileData) => {
        console.log("Received profile data:", profileData);

        const analysis = await analyzeProfileData(profileData);
        sendResponse({ analysis });
      });
    });

    // Keep the message channel open for asynchronous responses.
    return true;
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeProfile") {
    console.log("Received 'analyzeProfile' action");

    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      console.log("Sending 'fetchProfileData' message to the active tab");

      chrome.tabs.sendMessage(tabs[0].id, { action: "fetchProfileData" }, async (profileData) => {
        console.log("Received profile data:", profileData);

        const analysis = await analyzeProfileData(profileData);
        sendResponse({ analysis });
      });
    });

    // Keep the message channel open for asynchronous responses.
    return true;
  }
});


