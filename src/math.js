export function add(a, b) {
  return a + b
}

export function daysUntil(targetDate, fromDate = new Date()) {
  const msPerDay = 1000 * 60 * 60 * 24
  return Math.ceil((targetDate.getTime() - fromDate.getTime()) / msPerDay)
}

export function formatTime(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}
