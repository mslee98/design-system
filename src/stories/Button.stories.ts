import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from '../components/Button';

const meta = {
  title: 'Example/Button', // 경로
  component: Button, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      primary: { control: "boolean", description: "버튼의 타입"},
      backgroundColor: { control: 'color', description: "버튼의 배경 색상"},
  },
    args: { onClick: fn() }, // 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
