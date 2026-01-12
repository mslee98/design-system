import type { Meta, StoryObj } from '@storybook/react-vite';

import IconButton from '../components/IconButton';

const meta = {
  title: 'Buttons/IconButton', // 경로
  component: IconButton, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      alt: {
        control: "text",
        description: "이미지의 alt 속성",
        defaultValue: "icon"
      },
      iconPath: {control: "text", description: "Icon의 경로"},
      onClick: {action: "clicked", desctipion: "버튼 클릭 이벤트"}
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'alt 속성 작성',
    iconPath: '/icons/ic-delete-dark.svg',
    onClick: () => {}
  },
};
