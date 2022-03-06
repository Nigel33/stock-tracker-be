exports.sanitizeIntegerInput = val => {
  if (!Number(val)) return -1

  return Math.round(val)
}