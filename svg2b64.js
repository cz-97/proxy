#!/usr/bin/env bun
/**
 * 读取 config.js 同目录下的 SVG 文件，将所有
 * `${base_url}文件名.svg` 替换为 base64，输出为 config_base64_icon.js
 *
 * 用法：bun replace_icons.js <config.js路径>
 */

import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const dir = ".";
const configPath = join(dir, "config.js");
let content = await readFile(configPath, "utf-8");

const pattern = /`\$\{base_url\}([^`]+\.svg)`/g;
const svgNames = [...new Set([...content.matchAll(pattern)].map(m => m[1]))];

// 读取所有涉及的 SVG 文件
const icons = {};
for (const name of svgNames) {
  const svgPath = join(dir, name);
  try {
    const buf = await readFile(svgPath);
    icons[name] = `data:image/svg+xml;base64,${buf.toString("base64")}`;
    console.log(`  ✓ ${name}`);
  } catch {
    console.warn(`  ⚠ 文件不存在，跳过：${name}`);
  }
}

// 替换
let count = 0;
content = content.replace(pattern, (match, filename) => {
  const b64 = icons[filename];
  if (!b64) return match;
  count++;
  return `"${b64}"`;
});

const outputPath = join(dir, "config_base64_icon.js");
await writeFile(outputPath, content, "utf-8");
console.log(`\n共完成 ${count} 处替换！→ ${outputPath}`);