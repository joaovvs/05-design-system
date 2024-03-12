import { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps, Text } from '@joaovvs-ignite-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {},
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const ButtonTooltip: StoryObj<TooltipProps> = {
  args: {
    message: `It's a tooltip message`,
    children: (
      <Button
        style={{
          display: 'flex',
          margin: 'auto',
        }}
      >
        <Plus />
        Adicionar
      </Button>
    ),
  },
}
export const TextTooltip: StoryObj<TooltipProps> = {
  args: {
    message: `I's a tooltip message`,
    children: (
      <Text
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Any text
      </Text>
    ),
  },
}
