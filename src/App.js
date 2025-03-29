import './App.css';

function App() {
  return (
    <div className="App">
      {/* 追加フォーム */}
      <div className='add_form'>
        <input className='add_input' type='text' placeholder='タイトル' />
        <select className='status' name="status">
          <option value="incomplete">未完了</option>
          <option value="launch">着手</option>
          <option value="complete">完了</option>
        </select>
        <button className='button add_button'>追加</button>
      </div>

      {/* 表示切り替えのプルダウン */}
      <div className='filter'>
        <p className='filter_title'>フィルター</p>
        <select className='filter_status status' name="sort_status">
          <option value="incomplete">未完了</option>
          <option value="launch">着手</option>
          <option value="complete">完了</option>
        </select>

      {/* ソートのプルダウン */}
        <select className='sort_status status' name="sort_status">
          <option value="id">id</option>
          <option value="name">名前</option>
        </select>
      </div>

      {/* Todo一覧 */}
      <div className='summary'>
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
      </div>

      {/* 編集フォーム */}
      <div className='edit_form'>
        <input className='edit_input' type='text' placeholder='編集する' />
        <select className='status' name="status">
          <option value="incomplete">未完了</option>
          <option value="launch">着手</option>
          <option value="complete">完了</option>
        </select>
        <button className='button save_button'>変更を保存する</button>
      </div>
    </div>
  );
}

export default App;
