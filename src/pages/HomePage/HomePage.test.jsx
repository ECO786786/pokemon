import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { screen, render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import * as matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import HomePage from ".";

/**
 * @vitest-environment jsdom
 */

describe("Home page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it("renders a welcome message", () => {
    const linkElement = screen.getByText(/Welcome to the world of/i);
    expect(linkElement).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
