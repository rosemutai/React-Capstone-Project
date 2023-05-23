import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import { store } from '../redux/store';

it('renders CardComponent correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>

      </BrowserRouter>,

    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
