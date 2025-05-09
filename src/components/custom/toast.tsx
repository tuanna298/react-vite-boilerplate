import { toast, type ToastT } from 'sonner'

type ExternalToast = Omit<
  ToastT,
  'id' | 'type' | 'title' | 'jsx' | 'delete' | 'promise'
> & {
  id?: number | string
}
export const AppToast = {
  success: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.success(message, { ...data, position: 'top-center', duration: 1500 }),
  info: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.info(message, { ...data, position: 'top-center', duration: 1500 }),
  warning: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.warning(message, { ...data, position: 'top-center', duration: 1500 }),
  error: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.error(message ?? 500, {
      ...data,
      description: data.description,
      position: 'top-center',
      duration: 1500,
    }),
  message: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.message(message, { ...data, position: 'top-center', duration: 1500 }),
  loading: (message: string | React.ReactNode, data: ExternalToast = {}) =>
    toast.loading(message, { ...data, position: 'top-center', duration: 1500 }),
}
