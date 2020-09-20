/**
 * 任意挑选的关键字
 */
export const IKEA_NAMES_KEYWORDS = [
  "拉",
  "斯",
  "夫",
  "帝",
  "格",
  "托",
  "玛",
  "穆",
  "勒",
  "库",
  "卡",
  "利",
  "麦",
  "维",
  "克",
  "特",
  "贝",
  "德",
  "图",
  "约",
  "尼",
];

/**
 * 获取随机数
 * @param zoom
 */
export const generateRandomNumber = (zoom = 100) => {
  return Math.random() * zoom;
}

/**
 * 基于基准值生成长度
 * @param base
 */
export const generateLength = (base = 4) => {
  return window.parseInt(generateRandomNumber() % base);
}

/**
 * 随机生成一个宜家风格的中文名字
 * 加 1 位避免生成一位的名字
 */
const generateIkeaLikeName = () => {
  const nameLength = generateLength() + 1;
  let ikeaName = '';

  for (let i = nameLength; i >= 0; i--) {
    const index = generateLength(IKEA_NAMES_KEYWORDS.length);
    ikeaName += IKEA_NAMES_KEYWORDS[index];
  }
  return ikeaName;
}

export default generateIkeaLikeName;
