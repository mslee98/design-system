import '../stories/button.css';

/** 
 * interface로 정의된 타입은 수정할 수 있는 argmunet로 들어간다. 
 * 하지만 이건 컴포넌트 영역이지 스토리 영역이 아니기 때문에 여기다 작성하는건 비추천이긴 함 
*/
export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
