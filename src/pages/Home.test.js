import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createInstance} from 'i18next';
import {I18nextProvider, initReactI18next} from 'react-i18next';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import Home from './Home';
import {rootReducer} from '../reducers/rootReducer';
import commonEn from '../translations/en.json';
import commonPl from '../translations/pl.json';

const originalFetch = global.fetch;

afterEach(() => {
    global.fetch = originalFetch;
    localStorage.clear();
    jest.restoreAllMocks();
});

async function renderApp() {
    const i18n = createInstance();
    await i18n.use(initReactI18next).init({
        lng: 'en',
        interpolation: {escapeValue: false},
        resources: {en: {common: commonEn}, pl: {common: commonPl}}
    });
    const store = createStore(rootReducer, applyMiddleware(thunk));
    render(
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <Home/>
            </I18nextProvider>
        </Provider>
    );
}

test('loads quotes, navigates between them and switches language', async () => {
    const quotes = [
        {quote: 'First quote', author: 'First author'},
        {quote: 'Second quote', author: 'Second author'}
    ];
    global.fetch = jest.fn().mockResolvedValue({ok: true, json: async () => quotes});
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const user = userEvent.setup();

    await renderApp();
    expect(await screen.findByText(/First quote/)).toBeInTheDocument();
    Math.random.mockReturnValue(0.99);
    await user.click(screen.getByText('>'));
    expect(screen.getByText(/Second quote/)).toBeInTheDocument();
    await user.click(screen.getByText('<'));
    expect(screen.getByText(/First quote/)).toBeInTheDocument();

    await user.click(screen.getByText('Pl'));
    expect(await screen.findByText('Serwis Cytatów')).toBeInTheDocument();
    await waitFor(() => expect(document.documentElement.lang).toBe('pl'));
    expect(document.title).toBe('STRONA GŁÓWNA | SERWIS CYTATÓW');
    expect(localStorage.getItem('language')).toBe('pl');
    expect(screen.getByTitle('GitHub')).toHaveAttribute('href', 'https://github.com/ernestbies');
    expect(screen.getByTitle('Bitbucket')).toHaveAttribute('href', 'https://bitbucket.org/ernestbies/workspace/repositories/');
});

test('displays the connection error when fetching quotes fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('Offline'));
    await renderApp();
    expect(await screen.findByText(commonEn.loading_error)).toBeInTheDocument();
});
