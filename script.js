function addMemo() {
  const date = document.getElementById('dateInput').value;
  const content = document.getElementById('contentInput').value;

  if (date === '' || content === '') {
      alert('日付と内容を入力してください');
      return;
  }

  const table = document.getElementById('memoList');
  const row = document.createElement('tr');

  // 日付の<td>を作成
  const tdDate = document.createElement('td');
  tdDate.textContent = date;

  // 内容の<td>を作成
  const tdContent = document.createElement('td');
  tdContent.textContent = content;

  // 削除ボタンの<td>を作成
  const tdButton = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = '削除';
  button.onclick = function() { deleteMemo(button); };
  tdButton.appendChild(button);

  // 行に<td>要素を追加
  row.appendChild(tdDate);
  row.appendChild(tdContent);
  row.appendChild(tdButton);

  // テーブルに行を追加
  table.appendChild(row);

  // 入力欄を空にする
  document.getElementById('contentInput').value = '';
}

function deleteMemo(button) {
  button.parentElement.parentElement.remove();
}
