import dotenv from 'dotenv'

export interface ViteEnv {
   [key: string]: string
}

/**
 * @description: Load the environment variable configuration of vite
 */
export function loadEnv(): ViteEnv {
   const env = process.env.NODE_ENV
   const ret: ViteEnv = {}
   const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env']
   envList.forEach((env) => {
      dotenv.config({
         path: env,
      })
   })

   for (const envName of Object.keys(process.env)) {
      let realName = (process.env as unknown)[envName].replace(/\\n/g, '\n')
      realName = realName === 'true' ? true : realName === 'false' ? false : realName
      if (envName === 'VITE_PORT') {
         realName = Number(realName)
      }
      if (envName === 'VITE_PROXY') {
         try {
            realName = JSON.parse(realName)
            // eslint-disable-next-line no-empty
         } catch (error) {}
      }
      ret[envName] = realName
      process.env[envName] = realName
   }

   return ret
}

export function isDevFn(): boolean {
   return process.env.NODE_ENV === 'development'
}

export function isProdFn(): boolean {
   return process.env.NODE_ENV === 'production'
}
