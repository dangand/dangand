import { API_URL, API } from ".";

describe("api", () => {
  it("should have the correct baseURL", () => {
    expect(API.defaults.baseURL).toBe(API_URL);
  });

  it("should have the correct headers", () => {
    expect(API.defaults.headers).toEqual({
      "Content-Type": "application/json",
      common: { Accept: "application/json, text/plain, */*" },
      delete: {},
      get: {},
      head: {},
      patch: { "Content-Type": undefined },
      post: { "Content-Type": undefined },
      put: { "Content-Type": undefined },
    });
  });
});
