import type { Meta, StoryObj } from '@storybook/react-vite';

import TagList from '../components/TagList';

const meta = {
  title: 'List/TagList', // 경로
  component: TagList, 
  parameters: {
    layout: 'centered', // 스토리북 미리보기 화면에서 컴포넌트 배치 || left | center | right
  },
  tags: ['autodocs'],
    argTypes: {
      tagList: {
        control: { type: "object", properties: { tagList: { type: "array" } } },
        description: "태그 리스트",
        defaultValue: ["Tag1", "Tag2", "Tag3"]
      },
      onTagClick: {action: "clicked", desctipion: "버튼 클릭 이벤트"}
  }
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ['Tag1', 'Tag2', 'Tag3'],
    onTagClick: () => {}
  },
};
