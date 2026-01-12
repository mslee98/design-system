import type { Meta, StoryObj } from '@storybook/react-vite';

import DefaultTextFiled from '../components/DefaultTextField';

const meta = {
  title: 'TextFileds/DefaultTextFiled', // 경로
  component: DefaultTextFiled, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      id: {
        control: "text",
        description: "텍스트 필드의 id",
        defaultValue: "",
      },
      errorMessage: {control: "text", description: "에러메시지 내용"},
      iconAlt: {
        control: "text",
        description: "아이콘 이미지의 alt 속성",
        defaultValue: "icon"
      },
      iconPath: {
        control: "text",
        description: "아이콘 이미지의 경로",
        defaultValue: ""
      },
      placeholder: { 
        control: "text", 
        description: "텍스트 필드의 placeholder",
        defaultValue: "텍스트를 입력해주세요"
      },
      value: {
        control: "text",
        description: "텍스트 필드의 값",
        defaultValue: ""
      },
      isError: {
        control: "boolean",
        description: "에러 상태 여부",
        defaultValue: false
      },
      onIconClick: {
        action: "clicked",
        description: "아이콘 클릭 이벤트"
      },
      onChange: {
        action: "changed",
        description: "텍스트 필드 값 변경 이벤트"
      },
      
  }
} satisfies Meta<typeof DefaultTextFiled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  
  args: {
    id: "",
    errorMessage: "에러메시지를 입력하세요",
    iconAlt: "icon",
    iconPath: "/icons/ic-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    isError: false,
    onIconClick: () => {},
    onChange: () => {}
  },
};
