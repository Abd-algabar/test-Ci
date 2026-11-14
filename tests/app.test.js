import request from "supertest";
import app from "../app.js";

describe("GET /", () => {
  test("should return API is running", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("API is running...");
  });
});