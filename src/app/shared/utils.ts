export function isEqualString(string1: string, string2: string): boolean {
    return (string1 || '').toUpperCase() === (string2 || '').toUpperCase();
}