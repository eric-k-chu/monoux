export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  const fmtStart = toMonthYear(start)
  const fmtEnd = endDate ? toMonthYear(end) : 'Present'

  return `${fmtStart} - ${fmtEnd}`
}

function toMonthYear(date: Date): string {
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}
