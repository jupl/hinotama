const RADIX = 10

export const production = process.env.NODE_ENV === 'production'
export const development = process.env.NODE_ENV === 'development'
export const port = parseInt(process.env.PORT, RADIX)
