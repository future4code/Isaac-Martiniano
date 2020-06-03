import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

import '@testing-library/jest-dom/extend-expect'

describe('Quando Criar um novo post', () => {
    it('o novo post é adicionado a página', () => {
        const {getBytext, getByPlaceholderText} = render(<App/>)

        const input = getByPlaceholderText(/Novo post/i);

        const button = getBytext(/Adicionar/i);

        fireEvent.change(input, {target:{value: 'teste'}});
        fireEvent.click(button);

        expect(getBytext('teste')).toBeInTheDocument()
    })
})