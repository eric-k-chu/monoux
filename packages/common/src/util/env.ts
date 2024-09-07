export function findEnvironmentVar(name: string): string | undefined {
  return process.env[name]
}

export function getEnvironmentVar(name: string): string {
  const value = findEnvironmentVar(name)
  if (value === undefined) {
    throw new Error(`Environment variable ${name} is not set`)
  }
  return value
}
