let value = '';
value = value ? value : '既定値';

console.log(value);

value ||= '既定値';
value ??= '既定値';

console.log(value ?? '既定値');

// 空文字がfalseと判断された