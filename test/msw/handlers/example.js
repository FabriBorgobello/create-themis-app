import { rest } from "msw";

import { API_URL } from "@test/utils";

const example = [
  rest.post(`${API_URL}/example`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ message: "Example message" }))
  ),
];

export default example;
