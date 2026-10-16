export const brands = ['grove', 'harbor', 'ember'] as const

export type Brand = (typeof brands)[number]
