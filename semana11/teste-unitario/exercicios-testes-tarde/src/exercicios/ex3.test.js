import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
    it("retorne true para [1, 1]", () => {
        const arrayRepeat = checaItensDuplicados([1, 1]);
        expect(arrayRepeat).toEqual(true);
    })
    it("retorne true para [1, 2, 1]", () => {
        const arrayRepeat = checaItensDuplicados([1, 2, 1]);
        expect(arrayRepeat).toEqual(true);
    })
    it("retorne true para [3, 3, 4, 4]", () => {
        const arrayRepeat = checaItensDuplicados([3, 3, 4, 4]);
        expect(arrayRepeat).toEqual(true);
    })
    it("retorne true para [5, 5, 3, 6, 5, 6]", () => {
        const arrayRepeat = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(arrayRepeat).toEqual(true);
    })
    it("retorne false para []", () => {
        const arrayRepeat = checaItensDuplicados([]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [1]", () => {
        const arrayRepeat = checaItensDuplicados([1]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [1, 2, 3]", () => {
        const arrayRepeat = checaItensDuplicados([1, 2, 3]);
        expect(arrayRepeat).toEqual(false);
    })   
    it("retorne false para [1, 2, 3, 4]", () => {
        const arrayRepeat = checaItensDuplicados([1, 2, 3, 4]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [4, 3, 2, 1]", () => {
        const arrayRepeat = checaItensDuplicados([4, 3, 2, 1]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [5, 4, 3, 2, 1]", () => {
        const arrayRepeat = checaItensDuplicados([5, 4, 3, 2, 1]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [1, 2, 3, 4, 5]", () => {
        const arrayRepeat = checaItensDuplicados([1, 2, 3, 4, 5]);
        expect(arrayRepeat).toEqual(false);
    })
    it("retorne false para [1, 10, 3, 100, 5]", () => {
        const arrayRepeat = checaItensDuplicados([1, 10, 3, 100, 5]);
        expect(arrayRepeat).toEqual(false);
    })
});
