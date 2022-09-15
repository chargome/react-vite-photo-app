export const bytesToMbLabel = (bytes: number): string => {
  const mb = bytes / 1000000;
  return `${Math.round(mb * 100) / 100} MB`;
}