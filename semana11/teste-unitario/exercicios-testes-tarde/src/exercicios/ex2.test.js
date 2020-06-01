import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'ana'", () => {
    const ehPalindromo = checaPalindromo("ana");
    expect(ehPalindromo).toEqual(true);
  });

  it("retorna true para 'asacadadacasa'", () => {
    const ehPalindromo = checaPalindromo("asacadadacasa");
    expect(ehPalindromo).toEqual(true);
  });
  
  it("retorna true para 'reviver'", () => {
    const ehPalindromo = checaPalindromo("reviver");
    expect(ehPalindromo).toEqual(true);
  });
  
  it("retorna true para 'asacadadacasa'", () => {
    const ehPalindromo = checaPalindromo("asacadadacasa");
    expect(ehPalindromo).toEqual(true);
  });
});


