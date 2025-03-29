import './App.css';

function App() {
  return (
    <div className="App">
      <input className='input' type='text' placeholder='タイトル' />
      <select className='status' name="status">
        <option value="incomplete">未完了</option>
        <option value="launch">着手</option>
        <option value="complete">完了</option>
      </select>
      <button className='button'>追加</button>
      <ul>
        <li>
          <span>タイトル</span>
          <button className='button'>編集</button>
          <button className='button'>削除</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
