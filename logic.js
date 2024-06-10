// constants
const jsonUrl =
  "https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json";

async function fetchJson() {
  const response = await fetch(jsonUrl);
  const json = await response.json();
  console.log(json);
  return json;
}

// 배열 하나 받아서 옵션 뷰 설정
function setupVersionOptions(versions) {
  const majorVersionSelect = document.getElementById("majorVersionSelect");

  for (const version of versions) {
    const option = document.createElement("option");
    option.value = version;
    option.text = version;
    majorVersionSelect.appendChild(option);
  }
}

async function initData() {
  const json = await fetchJson();
  const versions = Array.from(
    new Set(json.versions.map((obj) => obj.version.split(".")[0]))
  ).sort((a, b) => b - a);
  setupVersionOptions(versions);
}

// initData();

// fetchJson();

/**
 * {timestamp: '2024-06-08T01:33:43.899Z', versions: Array(771)}
timestamp
: 
"2024-06-08T01:33:43.899Z"
versions
: 
Array(771)
[0 … 99]
0
: 
downloads
: 
{chrome: Array(5)}
revision
: 
"1121455"
version
: 
"113.0.5672.0"
 * 
 * 
 */
