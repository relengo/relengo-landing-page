// Placeholder API client
export const base44 = {
  // Add your API methods here
  get: async (url: string) => {
    return fetch(url);
  },
  post: async (url: string, data: any) => {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  },
};
