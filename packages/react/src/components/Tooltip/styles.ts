import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(Tooltip.Root, {
  padding: '$3 $4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  background: '$gray900',
  borderRadius: '$sm',
})

export const TooltipTrigger = styled(Tooltip.Trigger, {})
export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'absolute',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  color: '$gray100',

  borderRadius: '$sm',
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
