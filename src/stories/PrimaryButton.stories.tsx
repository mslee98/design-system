import type { Meta, StoryObj } from '@storybook/react-vite';

import PrimaryButton from '../components/PrimaryButton';

const meta = {
  title: 'Buttons/PrimaryButton', // 경로
  component: PrimaryButton, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
    argTypes: {
      theme: {
        control: { type: "select" , options: ["dark", "light", "social", "text", "disable"]},
        description: "버튼 타입",
        defaultValue: "dark",
      },
      disabled: {
        control: "boolean",
        description: "버튼 비활성화 여부",
        defaultValue: false,
      },
      children: {
        control: "text",
        description: "버튼 text",
        defaultValue: "Button"
      },
      onClick: {action: "clicked", desctipion: "버튼 클릭 이벤트"}
  }
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: true,
    theme: "social",
    children: 'Button',
    onClick: () => {}
  },
};
