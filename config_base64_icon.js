function main(config) {
  config["proxy-groups"] = [];
  config["rules"] = [];
  config["rule-providers"] = {};

  let 十分之一 = [];
  let 百分之一 = [];
  let 排除香港 = [];
  let 排除日本 = [];
  let 代理组 = [];

  const proxies = config["proxies"];

  for (const proxy of proxies) {
    const name = proxy.name;
    if (name.includes("套餐到期") || name.includes("剩余流量")) {
      continue;
    }
    代理组.push(name);
    if (name.includes("0.1")) {
      十分之一.push(name);
    }
    if (!name.includes("香港")) {
      排除香港.push(name);
    }
    if (!name.includes("日本")) {
      排除日本.push(name);
    }
    if (name.includes("0.01")) {
      百分之一.push(name);
    }
  }

  if (十分之一.length === 0) {
    十分之一 = 代理组;
  }
  if (排除香港.length === 0) {
    排除香港 = 十分之一;
  }
  if (排除日本.length === 0) {
    排除日本 = 十分之一;
  }
  if (百分之一.length === 0) {
    百分之一 = 十分之一;
  }

  const proxy_name = "默认代理";
  const base_url = "https://raw.githubusercontent.com/cz-97/proxy/main/";

  config["proxy-groups"] = [
    {
      name: proxy_name,
      type: "select",
      proxies: ["0.1倍率", "0.01倍率", "自动选择", ...代理组],
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTEwMTIuNTggNDg0LjE3NCA5MTEuMjI4IDM4Mi44NDNhNzguNjUgNzguNjUgMCAwIDEtMjMuMDE4LTU1LjYwOFYxODAuMzEzYzAtMjEuNjgyLTE3LjY1Mi0zOS4zMTItMzkuMzM1LTM5LjMxMkg3MDEuOTUzYTc4LjcgNzguNyAwIDAgMS01NS42MDgtMjMuMDRMNTM5Ljg5NCAxMS41MDlBMzkuMSAzOS4xIDAgMCAwIDUxMi4wOSAwYy02LjA3NyAwLTE3Ljc4NyAxLjQ5Mi0yNy44MDQgMTEuNTFsLTEwNi40MyAxMDYuNDVBNzguNyA3OC43IDAgMCAxIDMyMi4yNSAxNDFIMTgwLjQyNWMtMjEuNjgyIDAtMzkuMzM1IDE3LjYzMS0zOS4zMzUgMzkuMzEzdjE0MS44MjRhNzguNzMgNzguNzMgMCAwIDEtMjMuMDE3IDU1LjYwOEwxMS42MiA0ODQuMTc0QTM5LjE4IDM5LjE4IDAgMCAwIC4xMTIgNTExLjk3OGMwIDYuMSAxLjQ5MiAxNy43ODYgMTEuNTEgMjcuODA0bDEwNi40NSAxMDYuNDUxYTc4LjcgNzguNyAwIDAgMSAyMy4wMTggNTUuNjA4djE0Ni45MjFhMzkuNCAzOS40IDAgMCAwIDM5LjMzNSAzOS4zMzVoMTQ2LjkyMmE3OC43IDc4LjcgMCAwIDEgNTUuNjA4IDIzLjAxOGwxMDEuMzMxIDEwMS4zNTRjMTAuMDQgMTAuMDE3IDIxLjcyNyAxMS41MDkgMjcuODA0IDExLjUwOWEzOS4xOCAzOS4xOCAwIDAgMCAyNy44MjYtMTEuNTFsMTAxLjMxLTEwMS4zNTNhNzguNzQgNzguNzQgMCAwIDEgNTUuNjI5LTIzLjAxOGgxNTIuMDJhMzkuNCAzOS40IDAgMCAwIDM5LjMzNC0zOS4zMzVWNjk2Ljc0M2E3OC42NSA3OC42NSAwIDAgMSAyMy4wMTgtNTUuNjA4bDEwMS4zMzItMTAxLjM1M2MxMC4wNC0xMC4wMTggMTEuNTMtMjEuNzA1IDExLjUzLTI3LjgwNCAwLTYuMDc3LTEuNDktMTcuNzg3LTExLjUwOC0yNy44MDRNNzkyLjE1NSAzMzkuNDEyYTE3LjIgMTcuMiAwIDAgMS0yLjc4MyA0LjUxOUw0NDYuNjg3IDc0My4wMjNhMjYuMiAyNi4yIDAgMCAxLTM5LjE1Ni42OWwtMTcwLjY3NC0xODUuMjFhMjEuODM4IDIxLjgzOCAwIDAgMSA3LjI1Ny0zNC43NzFsMTQuMDI0LTYuMTY3YzguNjE1LTMuODA2IDE4LjYxLTIuNjcxIDI2LjE3OSAyLjkzOWwxMTkuNDk2IDg4Ljc1NGEyNi4yIDI2LjIgMCAwIDAgMzMuNDM2LTEuODI2bDMxMS41NjMtMjg4LjM5YTI2LjIxIDI2LjIxIDAgMCAxIDI4LjA0OS00Ljg5Nmw2LjE0NCAyLjYwNGExNy4yNzQgMTcuMjc0IDAgMCAxIDkuMTQ5IDIyLjY2MiIgZmlsbD0iIzE1YmM4MyIvPjwvc3ZnPg==",
    },
    {
      name: "在线播放",
      type: "select",
      proxies: ["0.1倍率", "0.01倍率", proxy_name],
      icon: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjgwMCIgd2lkdGg9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IiMyZWNjNzEiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik03IDI4SDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTFoNGMuNiAwIDEgLjQgMSAxcy0uNCAxLTEgMSIvPjxwYXRoIGQ9Ik05IDMwYy0xLjcgMC0zLTEuMy0zLTNzMS4zLTMgMy0zIDMgMS4zIDMgMy0xLjMgMy0zIDNtMjAtNEgxMy45Yy4xLjMuMS43LjEgMXMwIC43LS4xIDFIMjljLjYgMCAxLS40IDEtMXMtLjQtMS0xLTFNMjYgM0g2QzMuMiAzIDEgNS4yIDEgOHYxMGMwIDIuOCAyLjIgNSA1IDVoMjBjMi44IDAgNS0yLjIgNS01VjhjMC0yLjgtMi4yLTUtNS01bS01LjkgMTEuNy01IDNjLS4zLjItLjcuMy0xIC4zcy0uNy0uMS0xLS4zYy0uNi0uNC0xLTEtMS0xLjd2LTZjMC0uNy40LTEuMyAxLTEuN3MxLjQtLjMgMiAwbDUgM2MuNi40LjkgMSAuOSAxLjdzLS40IDEuMy0uOSAxLjciLz48L3N2Zz4=",
    },
    {
      name: "下载",
      type: "select",
      proxies: ["0.01倍率", "0.1倍率", proxy_name],
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTkzOC44NTYgNjM4Ljc3NnYyNzAuM2MwIDI3LjQxLTIyLjIxMSA0OS42MzQtNDkuNjIxIDQ5LjYzNEgxMzQuNzkyYy0yNy40MSAwLTQ5LjY0OC0yMi4yMjQtNDkuNjQ4LTQ5LjYzNHYtMjcwLjNjMC0yNy40MSAyMi4yMjQtNDkuNjM0IDQ5LjYzNS00OS42MzRzNDkuNjM0IDIyLjIyNCA0OS42MzQgNDkuNjM0djIyMC42NjVoNjU1LjE3NFY2MzguNzc2YzAtMjcuNDEgMjIuMjI0LTQ5LjYzNCA0OS42MzQtNDkuNjM0czQ5LjYzNSAyMi4yMjQgNDkuNjM1IDQ5LjYzNG0tNDYyLjMwNCA2Mi4yNTFhNDkuNjM1IDQ5LjYzNSAwIDAgMCA3MC45MjIgMEw3NDUuNDg5IDQ5OC44NmMxOS4xOC0xOS41ODMgMTguODU1LTUxLjAwNy0uNzMzLTcwLjE5LTE5LjU4Ny0xOS4xNzctNTEuMDE3LTE4Ljg1Ni03MC4xOTcuNzNMNTYxLjYzNCA1NDQuNjg3VjExNC45MjRjMC0yNy40MS0yMi4yMjQtNDkuNjM0LTQ5LjYzNC00OS42MzRzLTQ5LjYzNCAyMi4yMjQtNDkuNjM0IDQ5LjYzNFY1NDQuNjhMMzQ5LjQ3MyA0MjkuNDAxYy0xOS4xOC0xOS41ODMtNTAuNTktMTkuOTAzLTcwLjE4Ni0uNzMyLTE5LjU4MyAxOS4xOC0xOS45MSA1MC42MDQtLjczIDcwLjE5eiIgZmlsbD0iIzNjYjYwZCIvPjwvc3ZnPg==",
    },
    {
      name: "纸飞机",
      type: "select",
      proxies: ["0.01倍率", "0.1倍率", proxy_name],
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE0IiBmaWxsPSJ1cmwoI2EpIi8+PHBhdGggZD0iTTIyLjk4NyAxMC4yMDljLjEyNC0uODA2LS42NDItMS40NDEtMS4zNTgtMS4xMjdMNy4zNjUgMTUuMzQ1Yy0uNTE0LjIyNS0uNDc2IDEuMDAzLjA1NiAxLjE3M2wyLjk0Mi45MzdjLjU2Mi4xNzkgMS4xNy4wODYgMS42Ni0uMjUzbDYuNjMyLTQuNTgyYy4yLS4xMzguNDE4LjE0Ny4yNDcuMzIzbC00Ljc3NCA0LjkyMmMtLjQ2My40NzctLjM3MSAxLjI4Ni4xODYgMS42MzZsNS4zNDUgMy4zNTFjLjYuMzc2IDEuMzctLjAwMSAxLjQ4My0uNzI2eiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjE2IiB5MT0iMiIgeDI9IjE2IiB5Mj0iMzAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjMzdiYmZlIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3ZGJiIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    },
    {
      name: "漏网之鱼",
      type: "select",
      proxies: ["DIRECT", proxy_name],
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc2OC4xIDU0NmMtMjItMjItMjItNTcuNiAwLTc5LjVsNzUuMi03NS4yYzIyLTIyIDU3LjYtMjIgNzkuNSAwIDIyIDIyIDIyIDU3LjYgMCA3OS41TDg0Ny42IDU0NmMtMjEuOSAyMi01Ny41IDIyLTc5LjUgMCIgZmlsbD0iIzIwMDAwMCIvPjxwYXRoIGQ9Ik03NjguMSA0NzhjMjItMjIgNTcuNi0yMiA3OS41IDBsNzUuMiA3NS4yYzIyIDIyIDIyIDU3LjYgMCA3OS41LTIyIDIyLTU3LjYgMjItNzkuNSAwbC03NS4yLTc1LjJjLTIxLjktMjItMjEuOS01Ny42IDAtNzkuNSIgZmlsbD0iIzIwMDAwMCIvPjxwYXRoIGQ9Ik0zOTMuNCA3NzhjLTQ2LjYgMC05My0xMy45LTEzNy45LTQxLjQtMzUuMS0yMS41LTY5LjQtNTEuMi0xMDItODguNUM5OC44IDU4NS40IDY4IDUyMy40IDY2LjcgNTIwLjhjLTIuNy01LjYtMi43LTEyLjEgMC0xNy42IDEuMy0yLjYgMzItNjQuNiA4Ni44LTEyNy4zIDMyLjUtMzcuMiA2Ni44LTY3IDEwMi04OC41IDQ0LjktMjcuNSA5MS4zLTQxLjQgMTM3LjktNDEuNCA0NS43IDAgOTguNSAxMy41IDE1NyA0MC4yIDQ1LjcgMjAuOSA5NS4yIDUwIDE0Ny4xIDg2LjQgODcuOCA2MS43IDE1MS40IDEyMi40IDE1NC4xIDEyNC45IDMuOSAzLjggNi4yIDkgNi4yIDE0LjRzLTIuMiAxMC43LTYuMiAxNC40Yy0yLjcgMi42LTY2LjIgNjMuMy0xNTQuMSAxMjQuOS01MS45IDM2LjQtMTAxLjQgNjUuNS0xNDcuMSA4Ni40LTU4LjUgMjYuOS0xMTEuMyA0MC40LTE1NyA0MC40IiBmaWxsPSIjNWRjMWNmIi8+PHBhdGggZD0iTTM5My40IDI2NmMxODcuOCAwIDQ0NC4zIDI0NiA0NDQuMyAyNDZTNTgxLjIgNzU4IDM5My40IDc1OCA4NC43IDUxMiA4NC43IDUxMnMxMjAuOS0yNDYgMzA4LjctMjQ2bTAtNDBjLTUwLjMgMC0xMDAuMiAxNC45LTE0OC4zIDQ0LjMtMzYuOSAyMi41LTcyLjcgNTMuNi0xMDYuNiA5Mi40LTU2LjUgNjQuNy04OC40IDEyOS04OS43IDEzMS43LTUuNSAxMS4xLTUuNSAyNC4yIDAgMzUuMyAxLjMgMi43IDMzLjIgNjcgODkuNyAxMzEuNyAzMy45IDM4LjggNjkuNyA2OS45IDEwNi42IDkyLjQgNDguMSAyOS40IDk4IDQ0LjMgMTQ4LjMgNDQuMyA0OC42IDAgMTA0LjItMTQuMiAxNjUuMy00Mi4xIDQ2LjktMjEuNCA5Ny40LTUxLjEgMTUwLjMtODguMiA4OS4xLTYyLjUgMTUzLjctMTI0LjMgMTU2LjQtMTI2LjkgNy45LTcuNSAxMi4zLTE4IDEyLjMtMjguOXMtNC40LTIxLjMtMTIuMy0yOC45Yy0yLjctMi42LTY3LjQtNjQuMy0xNTYuNC0xMjYuOS01Mi45LTM3LjEtMTAzLjQtNjYuOC0xNTAuMy04OC4yLTYxLjEtMjcuOC0xMTYuNy00Mi0xNjUuMy00MiIgZmlsbD0iIzIwMDAwMCIvPjxwYXRoIGQ9Ik0xNzIuMyA0NjYuOGE2MCA2MCAwIDEgMCAxMjAgMCA2MCA2MCAwIDEgMC0xMjAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0yMDMuMSA0NjYuOGEyOS4yIDI5LjIgMCAxIDAgNTguNCAwIDI5LjIgMjkuMiAwIDEgMC01OC40IDAiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNNDE3LjcgNDc2Yy0zMC45IDAtNTYtMjQuMi01Ni01NHMyNS4xLTU0IDU2LTU0YzUuNSAwIDEwIDQuNSAxMCAxMHMtNC41IDEwLTEwIDEwYy0xOS45IDAtMzYgMTUuMy0zNiAzNHMxNi4xIDM0IDM2IDM0YzUuNSAwIDEwIDQuNSAxMCAxMHMtNC41IDEwLTEwIDEwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQxNy43IDU2NmMtMzAuOSAwLTU2LTI0LjItNTYtNTRzMjUuMS01NCA1Ni01NGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMGMtMTkuOSAwLTM2IDE1LjMtMzYgMzRzMTYuMSAzNCAzNiAzNGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik00MTcuNyA2NTZjLTMwLjkgMC01Ni0yNC4yLTU2LTU0czI1LjEtNTQgNTYtNTRjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTBjLTE5LjkgMC0zNiAxNS4zLTM2IDM0czE2LjEgMzQgMzYgMzRjNS41IDAgMTAgNC41IDEwIDEwcy00LjUgMTAtMTAgMTBtMTI5LjItMTM1Yy0zMC45IDAtNTYtMjQuMi01Ni01NHMyNS4xLTU0IDU2LTU0YzUuNSAwIDEwIDQuNSAxMCAxMHMtNC41IDEwLTEwIDEwYy0xOS45IDAtMzYgMTUuMy0zNiAzNHMxNi4xIDM0IDM2IDM0YzUuNSAwIDEwIDQuNSAxMCAxMHMtNC40IDEwLTEwIDEwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTU0Ni45IDYxMWMtMzAuOSAwLTU2LTI0LjItNTYtNTRzMjUuMS01NCA1Ni01NGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMGMtMTkuOSAwLTM2IDE1LjMtMzYgMzRzMTYuMSAzNCAzNiAzNGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNCAxMC0xMCAxMG0xMjkuMy00NWMtMzAuOSAwLTU2LTI0LjItNTYtNTRzMjUuMS01NCA1Ni01NGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMGMtMTkuOSAwLTM2IDE1LjMtMzYgMzRzMTYuMSAzNCAzNiAzNGM1LjUgMCAxMCA0LjUgMTAgMTBzLTQuNSAxMC0xMCAxMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",
    },
    {
      name: "自动选择",
      type: "url-test",
      proxies: 代理组,
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjpnb2xkO3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmY2YjM1O3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNhODU1Zjc7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlYzQ4OTk7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzM4YmRmODtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzgxOGNmODtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Im0zNzcuMTkgNjgwLjM5Ny00NS45MjYtMTU5LjA3OS0xNTguMjA4LTQ1LjQ2NWE0Mi40OTYgNDIuNDk2IDAgMCAxLTEzLjE1OC03NS4yNjRsMTQxLjYxOS0xMDIuOTEyVjEyNy41OWE0Mi40OTYgNDIuNDk2IDAgMCAxIDY3Ljk5My0zMy42MzhsMTMxLjg0IDk3LjAyNCAxNjEuMTc4LTU3Ljg1NmE0Mi40OTYgNDIuNDk2IDAgMCAxIDU2LjExNSA1NS43NTdsLTU4LjI2NSAxNjAuNzE3IDk3LjM4MiAxMzIuMTk4YTQyLjQ5NiA0Mi40OTYgMCAwIDEtMzMuOTk3IDY3LjU4NGwtMTcwLjk1NyAzLjQzLTEwMS42MzIgMTQxLjE1OWE0Mi40OTYgNDIuNDk2IDAgMCAxLTczLjk4NC0xMy41NjhtLTExMS44Mi0yNTkuNDMgMTI3LjUzOSAzNy40MjcgMzcuNDI3IDEyNy41OUw1MTIgNDcyLjQyMmgxMzkuNDY5bC03OC42OTUtMTEwLjA4IDQ2LjM4OC0xMjcuNTktMTI3LjY0MiA0Ni4zMzYtMTA4LjgtODEuNjY0LTMuODQgMTQwLjgtMTEzLjUxIDgwLjY5MXoiLz48cGF0aCBmaWxsPSJ1cmwoI2IpIiBkPSJNODkyLjk4IDkzNS41MjZhNDIuNSA0Mi41IDAgMCAxLTMwLjIwOS0xMi4zMzlsLTI1NS4xMy0yNTUuMTNhNDIuNyA0Mi43IDAgMCAxIDYwLjQxNy02MC40MTVsMjU1LjEzIDI1NS4xOGE0Mi40OTYgNDIuNDk2IDAgMCAxLTMwLjIwOSA3Mi43MDRtLTYxNi41LTI3Ni40MjgtNDUuMDU2IDgyLjUzNC04Mi41MzQgNDUuMDU2IDgyLjQ4MyA0NS4wNTYgNDUuMDU2IDgyLjUzNCA0NS4wNTYtODIuNTM0IDgyLjUzNC00NS4wNTYtODIuNDgzLTQ1LjA1NnoiLz48cGF0aCBmaWxsPSJ1cmwoI2MpIiBkPSJtNTMxLjYxIDc4Ni44OTMtMjIuNTI4IDQxLjI2Ny00MS4yNjggMjIuNTI4IDQxLjI2OCAyMi41MjggMjIuNTI4IDQxLjI2NyAyMi41MjgtNDEuMjY3IDQxLjI2Ny0yMi41MjgtNDEuMjY3LTIyLjUyOHoiLz48L3N2Zz4=",
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "0.1倍率",
      type: "url-test",
      proxies: 十分之一,
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTg1MC4yIDk4LjFIMTc1LjhDMTMyLjggOTguMSA5OCAxMzMgOTggMTc2djY3NC41YzAgNDMgMzQuOCA3Ny44IDc3LjggNzcuOGg2NzQuNGM0MyAwIDc3LjgtMzQuOCA3Ny44LTc3LjhWMTc2YzAtNDMtMzQuOC03Ny45LTc3LjgtNzcuOU00MDcuNSA3NzcuMmMwIDUuNi0yLjQgOC04IDhoLTczLjZjLTUuNiAwLTgtMi40LTgtOFYzNDguNGgtMS42bC04My4yIDU4LjRjLTUuNiA0LTguOCAyLjQtOC44LTQuOHYtODEuNmMwLTQgMS42LTggNS42LTExLjJsODcuMi02My4ycTYtNC44IDE0LjQtNC44aDY4YzUuNiAwIDggMi40IDggOHptMTQ5LjQtNDguNWMwIDI0LjEtNCAzNi43LTE3LjYgNDQuNnMtMzIuNCA5LjQtNTguNyA5LjRjLTEuNC0xMy4zLTcuOS0zNC42LTE0LTQ3LjkgMTIuNi43IDI3LjQuNyAzMiAuNyA1LS40IDYuOC0xLjggNi44LTYuOHYtNjUuOWwtMzQuNiA4LjMtMTIuMi01MGMxMy43LTIuNSAyOS41LTUuOCA0Ni44LTkuNHYtNTYuOWgtNDB2LTQ4LjJoNDB2LTY1LjJoNTEuNXY2NS4yaDQxLjh2NDguMmgtNDEuOHY0NWwzOC41LTkgNi4xIDQ3LjljLTE0LjggNC0yOS41IDcuNi00NC42IDExLjV6bTI0NC44LTExN2gtNDcuNXYxNzFoLTUxLjh2LTE3MWgtMzkuMmMtMi4yIDU4LTExLjkgMTE5LjItNDUgMTczLjUtMTAuMS0xMS41LTI4LjQtMjUuMi00Mi41LTMzLjggMzItNTcuNiAzNi0xMTguNCAzNi0xNzAuM1Y0NzUuNmM1Mi4yLTYuOCAxMDgtMTguNyAxNDcuMi0zMi40bDMxIDQ0LjNDNzUyIDQ5OSA3MDYuNyA1MDggNjYzLjUgNTEzLjhWNTYyaDEzOC4yeiIgZmlsbD0iI2ZmYTY0ZCIvPjwvc3ZnPg==",
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "排除🇭🇰",
      type: "url-test",
      proxies: 排除香港,
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTkyMS42IDUxMmMwIDIyNi4yMTktMTgzLjM4MSA0MDkuNi00MDkuNiA0MDkuNlMxMDIuNCA3MzguMjE5IDEwMi40IDUxMiAyODUuNzgxIDEwMi40IDUxMiAxMDIuNCA5MjEuNiAyODUuNzgxIDkyMS42IDUxMk03MTYuODY0IDc3NC4yNzIgMjQ5LjcwNyAzMDcuMTE1QTMzMS4zNyAzMzEuMzcgMCAwIDAgMTc5LjIgNTEyYzAgMTgzLjc4NyAxNDguOTkyIDMzMi44IDMzMi44IDMzMi44IDc3LjI3IDAgMTQ4LjM5NS0yNi4zNDcgMjA0Ljg2NC03MC41MjhtNTQuNjc3LTUzLjkzQTMzMS40IDMzMS40IDAgMCAwIDg0NC44IDUxMmMwLTE4My44MDgtMTQ5LjAxMy0zMzIuOC0zMzIuOC0zMzIuOGEzMzEuNCAzMzEuNCAwIDAgMC0yMDguMzQxIDczLjI1OXoiIGZpbGw9IiNmZjM2MjkiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTMuNDQ3OTNhODFVQUgyTzciLz48L3N2Zz4=",
      url: "http://www.gstatic.com/generate_204",
      interval: 300,
    },
    {
      name: "排除🇯🇵",
      type: "url-test",
      proxies: 排除日本,
      icon: "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTkyMS42IDUxMmMwIDIyNi4yMTktMTgzLjM4MSA0MDkuNi00MDkuNiA0MDkuNlMxMDIuNCA3MzguMjE5IDEwMi40IDUxMiAyODUuNzgxIDEwMi40IDUxMiAxMDIuNCA5MjEuNiAyODUuNzgxIDkyMS42IDUxMk03MTYuODY0IDc3NC4yNzIgMjQ5LjcwNyAzMDcuMTE1QTMzMS4zNyAzMzEuMzcgMCAwIDAgMTc5LjIgNTEyYzAgMTgzLjc4NyAxNDguOTkyIDMzMi44IDMzMi44IDMzMi44IDc3LjI3IDAgMTQ4LjM5NS0yNi4zNDcgMjA0Ljg2NC03MC41MjhtNTQuNjc3LTUzLjkzQTMzMS40IDMzMS40IDAgMCAwIDg0NC44IDUxMmMwLTE4My44MDgtMTQ5LjAxMy0zMzIuOC0zMzIuOC0zMzIuOGEzMzEuNCAzMzEuNCAwIDAgMC0yMDguMzQxIDczLjI1OXoiIGZpbGw9IiNmZjM2MjkiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTMuNDQ3OTNhODFVQUgyTzciLz48L3N2Zz4=",
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "0.01倍率",
      type: "url-test",
      proxies: 百分之一,
      icon: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMyZWNjNzEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxMiI+PHBhdGggZD0ibTggMzggMTUtMTB2NzBtLTE1IDJoMzAiLz48ZWxsaXBzZSBjeD0iNjgiIGN5PSI0NSIgcng9IjEyIiByeT0iMTUiLz48ZWxsaXBzZSBjeD0iMTA4IiBjeT0iODUiIHJ4PSIxMiIgcnk9IjE1Ii8+PHBhdGggZD0ibTU4IDEwMCA2MC03MCIvPjwvZz48L3N2Zz4=",
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
  ];

  config["rule-providers"] = {
    low_delay: {
      behavior: "classical",
      type: "http",
      url: `${base_url}low_delay.txt`,
      format: "text",
      interval: 86400,
      path: "./low_delay.txt",
    },
    no_hk: {
      behavior: "classical",
      type: "http",
      url: `${base_url}no_hk.txt`,
      format: "text",
      interval: 86400,
      path: "./no_hk.txt",
    },
    no_jp: {
      behavior: "classical",
      type: "http",
      url: `${base_url}no_jp.txt`,
      format: "text",
      interval: 86400,
      path: "./no_jp.txt",
    },
    在线: {
      behavior: "classical",
      type: "http",
      url: `${base_url}online.txt`,
      format: "text",
      interval: 86400,
      path: "./在线.txt",
    },
    下载: {
      behavior: "classical",
      type: "http",
      url: `${base_url}download.txt`,
      format: "text",
      interval: 86400,
      path: "./下载.txt",
    },
    预代理: {
      behavior: "classical",
      type: "http",
      url: `${base_url}pre_proxy.txt`,
      format: "text",
      interval: 86400,
      path: "./预代理.txt",
    },
    我的代理: {
      behavior: "classical",
      type: "http",
      url: `${base_url}proxy.txt`,
      format: "text",
      interval: 86400,
      path: "./我的代理.txt",
    },
    我的直连: {
      behavior: "classical",
      type: "http",
      url: `${base_url}direct.txt`,
      format: "text",
      interval: 86400,
      path: "./我的直连.txt",
    },
    广告: {
      type: "http",
      behavior: "classical",
      url: "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Advertising/Advertising.yaml",
      path: "./ruleset/广告.yaml",
      interval: 86400,
    },
    非中国顶域: {
      type: "http",
      behavior: "domain",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/tld-not-cn.txt",
      path: "./ruleset/非中国顶域.yaml",
      interval: 86400,
    },

    纸飞机IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/telegramcidr.txt",
      path: "./ruleset/纸飞机IP.yaml",
      interval: 86400,
    },

    远程直连: {
      type: "http",
      behavior: "domain",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt",
      path: "./ruleset/远程直连.yaml",
      interval: 86400,
    },

    大陆IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/cncidr.txt",
      path: "./ruleset/大陆IP.yaml",
      interval: 86400,
    },

    私有域: {
      type: "http",
      behavior: "domain",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt",
      path: "./ruleset/私有域.yaml",
      interval: 86400,
    },

    局域网IP及保留IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt",
      path: "./ruleset/局域网IP及保留IP.yaml",
      interval: 86400,
    },

    远程代理: {
      type: "http",
      behavior: "domain",
      url: "https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt",
      path: "./ruleset/远程代理.yaml",
      interval: 86400,
    },
  };

  config["rules"] = [
    "RULE-SET,广告,REJECT",
    `RULE-SET,预代理,${proxy_name}`,
    "RULE-SET,远程直连,DIRECT",
    "RULE-SET,私有域,DIRECT",
    "RULE-SET,大陆IP,DIRECT",
    "RULE-SET,局域网IP及保留IP,DIRECT",
    "GEOIP,LAN,DIRECT",
    "GEOIP,CN,DIRECT",
    "RULE-SET,我的直连,DIRECT",
    `RULE-SET,纸飞机IP,纸飞机`,
    "RULE-SET,low_delay,自动选择",
    "RULE-SET,no_hk,排除🇭🇰",
    "RULE-SET,no_jp,排除🇯🇵",
    "RULE-SET,在线,在线播放",
    "RULE-SET,下载,下载",
    `RULE-SET,我的代理,${proxy_name}`,
    `RULE-SET,远程代理,${proxy_name}`,
    `RULE-SET,非中国顶域,${proxy_name}`,
    "MATCH,漏网之鱼",
  ];

  return config;
}
