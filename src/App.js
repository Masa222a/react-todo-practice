import './App.css';

function App() {
  return (
    <div className="App">
      {/* 追加フォーム */}
      <input className='add_input' type='text' placeholder='タイトル' />
      <select className='status' name="status">
        <option value="incomplete">未完了</option>
        <option value="launch">着手</option>
        <option value="complete">完了</option>
      </select>
      <button className='button add_button'>追加</button>

      {/* Todo一覧 */}
      <ul>
        <li>
          <span>タイトル</span>
          <select className='status' name="status">
            <option value="incomplete">未完了</option>
            <option value="launch">着手</option>
            <option value="complete">完了</option>
          </select>
          <button className='button edit_button'>編集</button>
          <button className='button delete_button'>削除</button>
        </li>
      </ul>

      {/* 編集フォーム */}
      <input className='edit_input' type='text' placeholder='編集する' />
      <select className='status' name="status">
        <option value="incomplete">未完了</option>
        <option value="launch">着手</option>
        <option value="complete">完了</option>
      </select>
      <button className='button save_button'>変更を保存する</button>
    </div>
  );
}

export default App;
