import type { Meta, StoryObj } from '@storybook/react-vite';

import ErrorMessage from '../components/ErrorMessage';

const meta = {
  title: 'Example/ErrorMessage', // 경로
  component: ErrorMessage, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      children: {control: "text", description: "label의 내용"}
  }
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '에러 메시지'
  },
};
