export class FerrariGto {
    color: string;

    setColor(color: string): void {
        this.color = color;
    }

    printColor(): void{
        console.log(this.color);
    }
}
