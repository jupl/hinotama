const RADIX = 10

export const isProduction = process.env.NODE_ENV === 'production'
export const isDevelopment = process.env.NODE_ENV === 'development'
export const port = parseInt(process.env.PORT, RADIX)
