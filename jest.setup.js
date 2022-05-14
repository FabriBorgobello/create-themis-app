import mockedServer from "@/test/msw/server";
import "@testing-library/jest-dom";

/* Jest mocks */
// jest.mock("next/link", () => ({ children }) => <>{children}</>);

/* MSW */
// Establish API mocking before all tests.
beforeAll(() => mockedServer.listen());
// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => mockedServer.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => mockedServer.close());
