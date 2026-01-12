import { useState } from "react";
import TagButton from "./TagButton";

interface ITagListProps<T extends string> {
    // tagList: string[];
    tagList: T[];
    // onTagClick: (tag: string) => void;
    onTagClick: (tag: T) => void;
}

export default function TagList<T extends string>({ tagList, onTagClick }: ITagListProps<T>) {

    // 태그리스트내부에서만 동작하기에 스테이트를 TagList에서 관리하는게 올바르다고 판단
    const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);
   
    return (
        <div className="flex gap-[16px]" onClick={(event) => {
            // 실제[로 div onClick을 넣으면 어떤 태그가 선택되는지 알 수 없기에 이벤트버블링을 통해서 받아온다.
            const eventTarget = event.target as HTMLButtonElement;
            const tag = eventTarget.textContent as T;
            onTagClick(tag);
        }}>
            {tagList.map((tag) => (
                <TagButton key={tag} isChecked={tag === selectedTag} onClick={() => setSelectedTag(tag)}>{tag}</TagButton>
            ))}
        </div>
    )
}