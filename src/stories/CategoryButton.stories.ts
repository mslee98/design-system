import type { Meta, StoryObj } from '@storybook/react-vite';

import CatogoryButton from '../components/CatogoryButton';

const meta = {
  title: 'Buttons/CatogoryButton', // 경로
  component: CatogoryButton, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      iconAlt: {
        control: "text",
        description: "이미지의 alt 속성",
        defaultValue: "icon"
      },
      text: { control: "text", desciption: "카테고리 명", defaultValue: "button"},
      iconPath: {control: "text", description: "Icon의 경로"},
      onClick: {action: "clicked", desctipion: "버튼 클릭 이벤트"}
  }
} satisfies Meta<typeof CatogoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "category",
    iconAlt: 'alt 속성 작성',
    iconPath: '/icons/ic-close-dark.svg',
    onClick: () => {}
  },
};
