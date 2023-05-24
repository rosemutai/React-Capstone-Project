import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home Component is rendered correctly', () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    store = mockStore({
      statistics: {
        statistics: [
          { country: 'Tanzania', active: '40' },
          { country: 'Nigeria', active: '120' },
        ],
      },
    });

    store.dispatch = dispatchMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('country statistics are displayed', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const title = screen.getByText('Covid19 Statistics');
    const card = screen.getAllByRole('link');

    expect(title).toBeInTheDocument();
    expect(card).toHaveLength(2);
  });

  it('dispatch getCountryDetails action', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    const countryInput = screen.getByRole('textbox');
    const submitBtn = screen.getByRole('button', { name: 'search' });

    fireEvent.change(countryInput, { target: { value: 'Example Country' } });
    fireEvent.click(submitBtn);

    expect(store.dispatch).toHaveBeenCalledWith(
      expect.any(Function),
    );
  });
});
