import { setToken, getToken } from "./token"; // Import token functions

describe("JWT Token Handling", () => {
  it("should set and get token", () => {
    const token = "exampleToken";
    setToken(token);

    const retrievedToken = getToken();

    expect(retrievedToken).toBe(token);
  });
});
