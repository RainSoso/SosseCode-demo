// 写一个工具函数，用来生成唯一的 uuid 需要结合时间戳
// export function createUUID() {
//   const timestamp = Date.now().toString(16);
//   return (
//     "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//       // 生成一个唯一的 uuid
//       const r = (Math.random() * 16) | 0;
//       const v = c === "x" ? r : (r & 0x3) | 0x8;
//       return v.toString(16);
//     }) +
//     "-" +
//     timestamp
//   );
// }
export function createUUID(e = 8) {
  e = e || 32;
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
