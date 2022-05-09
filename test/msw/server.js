import { setupServer } from "msw/node";

import example from "./handlers/example";

/* MSW handlers
 * Mocked API responses for each request. If the request you're testing is not listed here,
 * feel free to add it using a real API response. (Remember to delete sensitive data)
 */
const handlers = [...example];

const mockedServer = setupServer(...handlers);

export default mockedServer;
