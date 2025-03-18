export const rangeYear = start => {
  let end = new Date().getFullYear()

  let options = []
  while (end >= start) {
    options.push(end)
    end--
  }

  return options
}
