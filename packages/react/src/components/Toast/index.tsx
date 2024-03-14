import * as ToastPrimitive from '@radix-ui/react-toast'

import { ToastRoot, ToastClose, ToastViewport } from './styles'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description: string
  closeToast: () => void
}

export function Toast({
  title,
  description,
  closeToast,
  ...props
}: ToastProps) {
  return (
    <ToastRoot {...props}>
      <ToastPrimitive.Title className="toast-header">
        <h3>{title}</h3>
        <ToastClose aria-label="Close" onClick={closeToast}>
          <span aria-hidden>
            <X size={20} />
          </span>
        </ToastClose>
      </ToastPrimitive.Title>
      <ToastPrimitive.Description className="toast-description">
        <p>{description}</p>
      </ToastPrimitive.Description>
    </ToastRoot>
  )
}

export function ToastViewportContainer() {
  return <ToastViewport />
}
