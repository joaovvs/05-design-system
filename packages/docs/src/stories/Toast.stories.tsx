import { StoryObj, Meta } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import {
  Button,
  Toast,
  ToastProps,
  ToastViewportContainer,
} from '@joaovvs-ignite-ui/react'
import { useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

export default {
  title: 'Data Display/Toast',
  args: {
    title: 'Toast Title',
    description: 'Toast description',
    duration: 2000,
  },
  render: function Render(args) {
    const [{ open }, updateArgs] = useArgs()

    function handleCloseButton() {
      updateArgs({ open: false })
    }

    return <Toast {...args} closeToast={handleCloseButton} open={open} />
  },
  decorators: [
    (Story) => (
      <ToastPrimitive.Provider>
        {Story()}
        <ToastViewportContainer />
      </ToastPrimitive.Provider>
    ),
  ],
} as Meta<ToastProps>

export const Default: StoryObj<ToastProps> = {
  args: {},
}

export const ButtonToast: StoryObj<ToastProps> = {
  args: {
    title: 'Toast Title',
    description: 'Toast description',
    duration: 2000,
  },
  render: function Render(args) {
    const [toasts, setToasts] = useState<{ id: number; open: boolean }[]>([])

    document.documentElement.style.setProperty(
      '--toast-count',
      toasts.length ? String(toasts.length) : '0',
    )

    const handleOpenToast = () => {
      const newToast = {
        id: toasts.length + 1,
        open: true,
      }

      setToasts([newToast, ...toasts])
    }

    const handleCloseToast = (id: number) => {
      const updatedToasts = toasts.map((toast) =>
        toast.id === id ? { ...toast, open: false } : toast,
      )
      setToasts(updatedToasts)
    }

    return (
      <ToastPrimitive.Provider>
        <Button onClick={handleOpenToast}>Open Toast</Button>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...args}
            open={toast.open}
            closeToast={() => handleCloseToast(toast.id)}
          />
        ))}
        <ToastViewportContainer />
      </ToastPrimitive.Provider>
    )
  },
}
