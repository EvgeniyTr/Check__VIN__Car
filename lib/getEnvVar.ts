export function getEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key]

  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue
    }
    throw new Error(`${key} not found in process.env`)
  }

  return value
}
