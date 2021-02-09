/**
 * @description: Whether to develop mode
 * @returns: boolean
 */
export const isDevMode = (): boolean => import.meta.env.DEV

/**
 * @description: Whether the production mode
 * @returns: boolean
 */
export const isProdMode = (): boolean => import.meta.env.PROD
