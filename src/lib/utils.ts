import { clsx, type ClassValue } from 'clsx'
import { lazy } from 'react'
import { twMerge } from 'tailwind-merge'

import NProgress from '@/configs/nprogress.config'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

export function lazyWithProgress<T extends React.ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
  delay = 300
) {
  return lazy(async () => {
    NProgress.start()
    await new Promise((resolve) => setTimeout(resolve, delay))
    try {
      const module = await factory()
      return module
    } finally {
      NProgress.done()
    }
  })
}
