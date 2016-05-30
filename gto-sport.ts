import { FerrariGto } from "./gto.ts"

export class FerrariGtoSport extends FerrariGto {
    color: string;

    setColor(color: string): void {
        this.color = color;
    }

    printColor(): void {
        console.log(this.color + " sport");
    }
}
