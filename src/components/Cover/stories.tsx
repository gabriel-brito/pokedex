import { Story, Meta } from '@storybook/react/types-6-0'
import Cover from '.'

export default {
  title: 'Cover',
  component: Cover
} as Meta

export const Default: Story = () => (
  <div style={{ width: '350px', margin: '0 auto' }}>
    <Cover />
  </div>
)

export const Upside: Story = () => (
  <div style={{ width: '350px', margin: '0 auto' }}>
    <Cover upside />
  </div>
)

export const Together: Story = () => (
  <div style={{ width: '350px', margin: '0 auto' }}>
    <Cover />
    <Cover upside />
  </div>
)
