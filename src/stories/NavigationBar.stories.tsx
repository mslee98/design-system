import type { Meta, StoryObj } from '@storybook/react-vite';
import NavigationBar from '../components/NavigationBar';

export default {
    title: 'Navigation/NavigationBar',
    component: NavigationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // decorators 를 작성하면 ts => tsx로 변환해야한다.
    decorators: [
        (Story) => (
            <div className="w-80">
                <Story />
            </div>
        ),
    ],
    argTypes: {
        isDark: { control: 'boolean', description: '다크 모드 여부', defaultValue: false },
        title: { control: 'text', description: '페이지 제목', defaultValue: '타이틀' },
        showTitle: { control: 'boolean', description: '페이지 제목 표시 여부', defaultValue: true },
        showBackButton: { control: 'boolean', description: '뒤로가기 버튼 표시 여부', defaultValue: true },
        showCloseButton: { control: 'boolean', description: '닫기 버튼 표시 여부', defaultValue: true },
        onBackClick: { action: 'clicked', description: '뒤로가기 버튼 클릭 이벤트' },
        onCloseClick: { action: 'clicked', description: '닫기 버튼 클릭 이벤트' },
    },
} satisfies Meta<typeof NavigationBar>;

export const Default: StoryObj<typeof NavigationBar> = {
    args: {
        title: '페이지 제목',
        showTitle: true,
        showBackButton: true,
        isDark: false,
        showCloseButton: true,
    },
};