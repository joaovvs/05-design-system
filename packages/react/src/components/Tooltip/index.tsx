import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
} from './styles'
import { Text } from '../Text'
import { TooltipProvider } from '@radix-ui/react-tooltip'

export type TooltipProps = ComponentProps<typeof TooltipContainer> & {
  message: string
  children: ReactNode
}

export function Tooltip({ message, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent className="TooltipContent" sideOffset={5}>
            <TooltipArrow className="TooltipArrow" />
            <Text>{message}</Text>
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
