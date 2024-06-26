import { NegocioErro } from "../error/NegocioErro";
import { NumeroConta } from "./NumeroConta";

export class Conta {

    private _saldo: number;
    private _numeroConta: NumeroConta;

    constructor(numero: string, saldo: number) {
        this._saldo = saldo;
        this._numeroConta = new NumeroConta(numero);
    }


    public sacar(quantidade: number) {
        this.validarValor(quantidade);
        if (this._saldo < quantidade) throw new NegocioErro("Valor precisa ser menor ou igual ao Saldo.");
        this._saldo -= quantidade;
    }

    depositar(quantidade: number) {
        this.validarValor(quantidade);
        this._saldo += quantidade;
    }

    private validarValor(valor: number): void {
        if (valor <= 0)
            throw new NegocioErro("Valor precisa ser maior que zero.");
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numeroConta.numero;
      }


}