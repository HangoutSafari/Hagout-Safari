import { describe, it, expect } from "vitest";

describe("Animals api test", () => {
  it("calls the api", async () => {
    const animals = await fetch(`http://localhost:3010/animals`);

    expect(animals.status).toBe(200);
  });
});
