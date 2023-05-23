import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CountryDetails from '../routes/CountryDetails';
import { store } from '../redux/store';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <CountryDetails />
        </Provider>

      </BrowserRouter>,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
