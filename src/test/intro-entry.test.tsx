import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";

vi.mock("@/components/Navbar", () => ({ default: () => null }));
vi.mock("@/components/ScrollProgress", () => ({ default: () => null }));
vi.mock("@/components/HeroSection", () => ({ default: () => <main data-testid="studio-content" /> }));
vi.mock("@/components/MarqueeSection", () => ({ default: () => null }));
vi.mock("@/components/WorkSection", () => ({ default: () => null }));
vi.mock("@/components/ScrollRevealSection", () => ({ default: () => null }));
vi.mock("@/components/FeaturedInSection", () => ({ default: () => null }));
vi.mock("@/components/ServicesSection", () => ({ default: () => null }));
vi.mock("@/components/ProcessSection", () => ({ default: () => null }));
vi.mock("@/components/PhilosophySection", () => ({ default: () => null }));
vi.mock("@/components/AboutSection", () => ({ default: () => null }));
vi.mock("@/components/TestimonialsSection", () => ({ default: () => null }));
vi.mock("@/components/FAQSection", () => ({ default: () => null }));
vi.mock("@/components/ContactSection", () => ({ default: () => null }));
vi.mock("@/components/FooterSection", () => ({ default: () => null }));

describe("intro entry", () => {
  it("waits for Enter instead of advancing automatically", async () => {
    render(<Index />);
    await new Promise((resolve) => setTimeout(resolve, 4600));
    expect(screen.queryByTestId("studio-content")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Enter" }));
    await waitFor(() => expect(screen.getByTestId("studio-content")).toBeInTheDocument(), { timeout: 2000 });
  }, 10000);
});