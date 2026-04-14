


# Proxy

clash客户端自定义脚本，加工你的订阅。

## 简介

本项目提供一套 Clash 客户端的订阅自定义脚本，旨在帮助用户优化代理订阅配置。主要功能包括：

- **清理规则**：删除代理商提供的原有规则
- **增强规则**：集成 [clash-rules](https://github.com/Loyalsoldier/clash-rules)、[blackmatrix7](https://github.com/blackmatrix7/ios_rule_script) 以及自定义规则
- **图标定制**：支持自定义节点图标显示

适用于含有低倍率路线的代理商环境。

## 文件说明

| 文件 | 说明 |
|------|------|
| `config.js` | 链接图标版主脚本，适用于大多数 Clash 客户端 |
| `config_base64_icon.js` | Base64 图标版脚本，适用于支持 Base64 图标的客户端如 [Clash Party](https://github.com/mihomo-party-org/mihomo-party) |
| `svg2b64.js` | 图标转换工具，用于将 SVG 链接图标转换为 Base64 格式 |

### 图标文件

| 文件 | 描述 |
|------|------|
| `0.01.svg` | 极低倍率图标 |
| `0.1.svg` | 低倍率图标 |
| `auto.svg` | 自动选择图标 |
| `default.svg` | 默认图标 |
| `disable.svg` | 禁用图标 |
| `download.svg` | 下载图标 |
| `fish.svg` | 代理鱼图标 |
| `github.svg` | GitHub 图标 |
| `online.svg` | 在线图标 |
| `telegram.svg` | Telegram 图标 |

### 规则文件

| 文件 | 用途 |
|------|------|
| `direct.txt` | 直连规则 |
| `low_delay.txt` | 低延迟规则 |
| `no_hk.txt` | 排除香港节点规则 |
| `no_jp.txt` | 排除日本节点规则 |
| `online.txt` | 在线规则 |
| `pre_proxy.txt` | 优先代理规则 |
| `proxy.txt` | 代理规则 |
| `download.txt` | 下载规则 |

## 使用方法

### 基础配置

1. 链接图标版（默认）：
   ```bash
   # 编辑 config.js 后同步到 Base64 版本
   bun svg2b64.js
   ```

2. Base64 图标版：
   直接使用 `config_base64_icon.js`

### 订阅 URL 替换

在订阅转换服务中，将订阅地址替换为：

- 链接图标版：`你的URL/config.js`
- Base64 图标版：`你的URL/config_base64_icon.js`

## 依赖

- [Bun](https://bun.sh) - JavaScript 运行时

## 相关项目

- [clash-rules](https://github.com/Loyalsoldier/clash-rules) - Clash 规则集
- [blackmatrix7/ios_rule_script](https://github.com/blackmatrix7/ios_rule_script) - iOS 规则脚本
- [mihomo-party-org/mihomo-party](https://github.com/mihomo-party-org/mihomo-party) - Clash Party 客户端

## 许可证

MIT License