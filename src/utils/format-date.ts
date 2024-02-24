export const formatDate = (date: Date) => {
  date = new Date(date)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${month}/${day}/${year}`
}

export const formatLastDate = (isoDateString: string) => {
  const date = new Date(isoDateString)
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const day = date.getDate()
  const month = months[date.getMonth()]

  return `${month} ${day}`
}
