export const cn = (...inputs: (string | boolean | undefined | null)[]): string =>
    inputs.filter(Boolean).join(" ").trim();
