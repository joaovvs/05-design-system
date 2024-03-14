import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = '$5'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  background: '$gray800',

  '.toast-header': {
    display: 'flex',
    flexDirection: 'row',
  },

  h3: {
    margin: 0,

    fontFamily: '$default',
    fontSize: '$lg',
    color: '$white',
    lineHeight: '$base',
  },

  p: {
    margin: 0,

    fontFamily: '$default',
    fontSize: '$sm',
    color: '$gray200',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastClose = styled(Toast.Close, {
  border: 'none',
  color: '$gray200',
  lineHeight: 0,

  display: 'flex',
  marginLeft: 'auto',

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: 'transparent',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 20,
  display: 'flex',
  flexDirection: 'column',
  padding: `${VIEWPORT_PADDING}px`,
  gap: '$5',
  width: '390px',
  maxHeight: '100vh',
  maxWidth: '100vw',
  marginLeft: 'auto',
  listStyle: 'none',
  zIndex: 'calc(9999 + var(--toast-count))',
  outline: 'none',
})
