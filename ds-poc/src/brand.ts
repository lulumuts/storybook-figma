export const brands = ['grove', 'harbor', 'ember', 'linen', 'moss', 'clay'] as const

export type Brand = (typeof brands)[number]
