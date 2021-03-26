export function filterEmpty(data: object) {
  const result = {};
  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (!['', undefined, null].includes(value)) {
      result[key] = typeof value === 'string' ? value.trim() : value;
    }
  });

  return result;
}

export function delay(ms: number, msg?: string) {
  return new Promise((resolve) => setTimeout(() => resolve(msg), ms));
}
