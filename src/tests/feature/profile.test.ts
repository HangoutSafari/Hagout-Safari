import { describe, it, expect } from "vitest";

describe("Profile can be called", () => {
  it("opens the profile page", async () => {
    const response = await fetch('http://localhost/profile');
    expect(response.status).toBe(200);
  });
});

describe("Profile can be called", () => {
    it("check if the response is 404", async () => {
      const response = await fetch('http://localhost/profilee');
      expect(response.status).toBe(404);
    });
  });
