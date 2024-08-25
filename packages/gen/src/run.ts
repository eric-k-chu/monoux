export async function run(fn: () => Promise<void>): Promise<void> {
  try {
    await fn()
  } catch (error) {
    console.error(error)
  }
}
