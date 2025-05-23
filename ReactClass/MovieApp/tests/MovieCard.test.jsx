import {store} from '../src/store/store.jsx';
import {Provider} from 'react-redux';
import {screen, render} from '@testing-library/react';
import MovieCard from '../src/reusable/MovieCard.jsx';
// import * as test from "node:test";


const renderWithProvider = (ui) => {
    render(<Provider store={store}>{ui}</Provider>)
};


describe("MovieCard", () => {

    test('Show loading initially', () => {
        renderWithProvider(MovieCard)
        const result = screen.findByText(/loading.../i)
        expect(result).toBeTruthy()
    })
})