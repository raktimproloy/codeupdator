const globalAbortController = new AbortController();

export async function fetchDataFromServer(url: string, timeout: number = 10000) {
  const startTimestamp = Date.now();
  console.log(`Fetching data from ${url}...`);

  const controller = timeout > 0 ? new AbortController() : globalAbortController;
  const timeoutId = timeout > 0 ? setTimeout(() => controller.abort(), timeout) : null;

  try {
    const response = await fetch(url, { signal: controller.signal, cache: 'no-cache' });

    if (!response.ok) {
      const errorText = await response.text();
      const error: Error = new Error(`Failed to fetch data. Server error: ${response.status} - ${errorText}`);
      console.error(error);
      throw error;
    }

    const responseBody = await response.text();

    if (responseBody.trim().length === 0) {
      throw new Error("Response body is empty");
    }

    try {
      return JSON.parse(responseBody);
    } catch (jsonError: any) {
      console.error(`Failed to parse JSON response. Error: ${jsonError.message}`);
      throw jsonError;
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log(error)
      console.error('Request timed out. Please check your network and server.');
    } else {
      console.error(`Failed to fetch data from ${url}. Error: ${error.message}`);
    }
    throw error;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    const endTimestamp = Date.now();
    console.log(`Request to ${url} completed in ${endTimestamp - startTimestamp}ms`);
  }
}



export async function postDataToServer(url: string, data: any, timeout: number = 10000) {
  const startTimestamp = Date.now();
  console.log(`Posting data to ${url}...`);

  const controller = timeout > 0 ? new AbortController() : globalAbortController;
  const timeoutId = timeout > 0 ? setTimeout(() => controller.abort(), timeout) : null;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      signal: controller.signal,
      cache: 'no-cache'
    });

    if (!response.ok) {
      const errorText = await response.text();
      const error: Error = new Error(`Failed to post data. Server error: ${response.status} - ${errorText}`);
      console.error(error);
      throw error;
    }

    const responseBody = await response.text();

    if (responseBody.trim().length === 0) {
      throw new Error("Response body is empty");
    }

    try {
      return JSON.parse(responseBody);
    } catch (jsonError: any) {
      console.error(`Failed to parse JSON response. Error: ${jsonError.message}`);
      throw jsonError;
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error('Request timed out. Please check your network and server.');
    } else {
      console.error(`Failed to post data to ${url}. Error: ${error.message}`);
    }
    throw error;
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    const endTimestamp = Date.now();
    console.log(`Post request to ${url} completed in ${endTimestamp - startTimestamp}ms`);
  }
}
