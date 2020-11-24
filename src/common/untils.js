// 防抖函数
export function debounce(func, delay) {
  let timer = null;

  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

// yyyy/MM/dd hh:mm:ss
// 日期格式化函数
export function format(data, fmt) {
  const nData = new Date(data * 1000);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (nData.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  const o = {
    "M+": nData.getMonth() + 1,
    "d+": nData.getDate(),
    "h+": nData.getHours(),
    "m+": nData.getMinutes(),
    "s+": nData.getSeconds()
  };

  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
