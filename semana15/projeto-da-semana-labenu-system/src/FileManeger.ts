import * as fs from "fs";

class FileManeger {
    constructor(private filePath: string) {}

    public setFilePath(path: string): void {
        this.filePath = path;
    }

    public whiteFile(data: any): void {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }

    public readFile() :any {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}