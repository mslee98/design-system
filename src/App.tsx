import { useState } from 'react';
import './App.css'
import TagList from './components/TagList';
// import DefaultTextFiled from './components/DefaultTextField'
// import Label from './components/Label'

function App() {
  // const [isError, setIsError] = useState(false);

  return (
    <>
      <TagList tagList={['Tag1', 'Tag2', 'Tag3']} onTagClick={(tag) => console.log(tag)} />
    
      {/* <Label htmlFor='email'>이메일</Label>
      <DefaultTextFiled
        id='email'
        placeholder='이메일을 입력하세요'
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt='delete'
        isError={isError}
        errorMessage='이메일을 입력하세요'
        onChange={() => {}}
        onIconClick={() => {}}
      />
    
      <div className='mt-20'/>

    
      <Label htmlFor='address'>주소</Label>
      <DefaultTextFiled
        id='address'
        placeholder='주소를 입력하세요'
        iconPath="/icons/ic-delete-dark.svg"
        iconAlt='delete'
        isError={isError}
        errorMessage='주소를 입력하세요'
        onChange={() => {}}
        onIconClick={() => {}}
      />
      <button onClick={() => setIsError((prev) => !prev)}>에러 토글</button> */}
    
    </>
  )
}

export default App
