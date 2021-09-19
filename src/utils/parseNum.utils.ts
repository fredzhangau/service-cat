export function parseNum(input: string, n: string): number {
  let parsed = parseInt(n);
  if (!parsed) throw Error(`Invalid input value for ${input}.`);
  if (parsed < 1)
    throw Error(
      `${input} must be a positive integer and larger than or equal to 1.`
    );
  return parsed;
}
