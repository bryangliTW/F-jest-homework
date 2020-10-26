import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUserName = "mocked username";
    const mockPassword = "mocked password";

    await expect(register(mockUserName, mockPassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);

    const mockUserName = "mocked username";
    const mockPassword = "mocked password";

    await expect(register(mockUserName, mockPassword)).rejects.toThrow(
      "wrong username or password"
    );
  });
});
