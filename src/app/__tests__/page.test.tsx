import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../page';
import { mainPageTexts } from '../constants/texts';

describe('Home Page', () => {
  it('renders the main title', () => {
    render(<Home />);
    expect(screen.getByText(mainPageTexts.title)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Home />);
    expect(screen.getByText(mainPageTexts.description)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Home />);
    expect(screen.getByText(mainPageTexts.ctaButton)).toBeInTheDocument();
  });

  it('CTA button links to heroes page', () => {
    render(<Home />);
    const link = screen.getByText(mainPageTexts.ctaButton);
    expect(link).toHaveAttribute('href', '/heroes');
  });
});
