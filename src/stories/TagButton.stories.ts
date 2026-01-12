import type { Meta, StoryObj } from '@storybook/react-vite';

import TagButton from '../components/TagButton';

const meta = {
  title: 'Buttons/TagButton', // 경로
  component: TagButton, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      isChecked: {
        control: "boolean",
        description: "버튼 체크 여부",
        defaultValue: false,
      },
      children: {
        control: "text",
        description: "버튼 text",
        defaultValue: "Button"
      },
      onClick: {action: "clicked", desctipion: "버튼 클릭 이벤트"}
  }
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: true,
    children: 'Button',
    onClick: () => {}
  },
};
