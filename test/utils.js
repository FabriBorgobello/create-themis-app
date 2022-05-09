/* eslint-disable import/prefer-default-export */
import { render as defaultRender } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";

export * from "@testing-library/react";
export const API_URL =
  process.env.NEXT_PUBLIC_API_ROUTE || "http://localhost:3000/api";

/* ROUTER MOCK
 * You can override the router mock like this:
 * render(<MyComponent />, { router: { pathname: '/my-custom-pathname', query: { id: '123' } } });
 */
const mockRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

export function customRender(ui, { router, ...options } = {}) {
  // Add providers to this wrapper if you need them for your tests.
  const wrapper = ({ children }) => (
    <RouterContext.Provider value={{ ...mockRouter, ...router }}>
      {children}
    </RouterContext.Provider>
  );

  return defaultRender(ui, { wrapper, ...options });
}
