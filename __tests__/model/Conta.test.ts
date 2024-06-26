import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("sacar com sucesso", () => {
        const conta: Conta = criarConta();
        conta.sacar(200);
        expect(conta.saldo).toBe(4800);
    })

    test("depositar com sucesso", () => {
        const conta: Conta = criarConta();
        conta.depositar(200);
        expect(conta.saldo).toBe(5200);
    })

    test("validar saque zerado", () => {
        const conta: Conta = criarConta();
        expect( () => {conta.sacar(0);}).toThrow("Valor precisa ser maior que zero.");
    })

    test("validar deposito zerado", () => {
        const conta: Conta = criarConta();
        expect( () => {conta.depositar(0);}).toThrow("Valor precisa ser maior que zero.");
    })

    test("validar saque negativo", () => {
        const conta: Conta = criarConta();
        expect( () => {conta.sacar(-10);}).toThrow("Valor precisa ser maior que zero.");
    })

    test("validar deposito negativo", () => {
        const conta: Conta = criarConta();
        expect( () => {conta.depositar(-10);}).toThrow("Valor precisa ser maior que zero.");
    })

    test("Sacar valor acima do saldo", () => {
        const conta: Conta = criarContaSaldo199();
        expect( () => {conta.sacar(200);}).toThrow("Valor precisa ser menor ou igual ao Saldo.");
    })
});

function criarConta(): Conta {
    return new Conta("123456", 5000.0);
  };
  
  function criarContaSaldo199(): Conta {
    return new Conta("123456", 199.0);
  };