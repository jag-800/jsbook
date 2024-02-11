let x = 1;
let y = 2;

if (x === 1)
  if (y === 1) { console.log('変数x、yはともに1です。'); }
else
  console.log('変数x、yはともに1ではありません。');

// カッコを省略した場合、elseは直近のifだけを参考にする