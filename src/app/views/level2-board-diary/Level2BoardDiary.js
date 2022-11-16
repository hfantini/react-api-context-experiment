import { useContext } from 'react';
import TextContext from '../../context/TextContext';
import './Level2BoardDiary.scss';

function Level2BoardDiary() {

  const [text, setText] = useContext(TextContext);

  const onTextAreaChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="LEVEL2-BOARD-DIARY">
      BOARD DIARY:
      <br />
      <textarea
        value={text}
        class="LEVEL2-BOARD-DIARY-TEXTAREA"
        onChange={onTextAreaChange}>
      </textarea>
    </div>
  );
}

export default Level2BoardDiary;
