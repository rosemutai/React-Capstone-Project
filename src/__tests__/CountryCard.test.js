import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '../components/CountryCard';

it('CountryCard renders correctly', () => {
  const country = 'Kenya';
  const active = '270';
  render(
    <BrowserRouter>
      <CountryCard country={country} active={active} />
    </BrowserRouter>,
  );

  const countryName = screen.getByText(country);
  const activeCases = screen.getByText(active);

  expect(countryName).toBeInTheDocument();
  expect(activeCases).toBeInTheDocument();
});
