const jsonUrl =
  "https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json";

async function fetchJson() {
  const response = await fetch(jsonUrl);
  const json = await response.json();
  console.log(json);
  return json;
}

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
