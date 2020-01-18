export const truncate = (input, length, symbol) => {
  if (length == null) {
    length = 80
  }
  if (symbol == null) {
    symbol = '...'
  }
  if (input.length > length) {
    return input.substring(0, length - symbol.length) + symbol
  } else {
    return input
  }
}

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export const getAuthorName = (author) => {
  return author.split('"')[1]
}