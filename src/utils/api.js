const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbziHeBeoo0pGYiMZ7MIv-6sLXvF5rKbU1ncf8_qcBPepATdNTjHpDFl6QfapWuk119I/exec";

export async function fetchTopics() {
  try {
    const response = await fetch(SCRIPT_URL);
    const rawData = await response.json();

    return rawData.map((item) => {
      const keys = Object.keys(item);
      return {
        Title: item[keys[0]] || "Untitled Topic",
        Keywords: item[keys[1]] || "",
        Process: item.Process || "",
        Documents: item.Documents || "",
        Siebel: item.Siebel || "",
        CCAT: item.CCAT || "",
        WinCash: item.WinCash || "",
        "Creator name": item["Creator name"] || "Unknown",
        "Creator username": item["Creator username"] || "",
      };
    });
  } catch (err) {
    console.error("Failed to load data:", err);
    throw err;
  }
}
