import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../app/globals.css';
import type { AppProps } from 'next/app';

function BookApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default BookApp;