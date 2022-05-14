import { screen } from "@testing-library/react";

import Home from "@/pages/index";
import { customRender } from "@/test/utils";

describe("Home", () => {
  it("renders a heading", () => {
    customRender(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to your new themis project/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
