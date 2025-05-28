import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { NextIntlProvider } from "next-intl";

describe("Header", () => {
  it("renders language switcher", () => {
    render(
      <NextIntlProvider locale="en" messages={{}}>
        <Header />
      </NextIntlProvider>
    );
    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("日本語")).toBeInTheDocument();
  });
});
