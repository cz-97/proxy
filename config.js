const main = (config) => {
  config["proxy-groups"] = [];
  config["rules"] = [];
  config["rule-providers"] = {};

  十分之一 = [];
  百分之一 = [];
  不含香港 = [];
  不含日本 = [];
  代理组 = [];

  const proxies = config["proxies"];

  for (const proxy of proxies) {
    const name = proxy.name;
    if (name.includes("套餐到期") || name.includes("剩余流量")) {
      continue;
    }
    代理组.push(name);
    if (name.includes("0.1")) {
      十分之一.push(name);
      if (!name.includes("香港")) {
        不含香港.push(name);
      }
      if (!name.includes("日本")) {
        不含日本.push(name);
      }
    }
    if (name.includes("0.01")) {
      百分之一.push(name);
    }
  }

  const proxy_name = "默认代理";
  // 添加新的 proxy-groups
  config["proxy-groups"] = [
    {
      name: proxy_name,
      type: "select",
      proxies: ["自动选择","⅒","1%", ...代理组],
    },
    {
      name: "不含🇭🇰",
      type: "url-test",
      proxies: 不含香港,
      url: "http://www.gstatic.com/generate_204",
      interval: 300
    },
    {
      name: "不含🇯🇵",
      type: "url-test",
      proxies: 不含日本,
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "github发行版",
      type: "select",
      proxies: ["1%", "⅒", proxy_name],
    },
    {
      name: "在线播放",
      type: "select",
      proxies: ["⅒", "1%", proxy_name],
    },
    {
      name: "下载",
      type: "select",
      proxies: ["1%", "⅒", proxy_name],
    },
    {
      name: "漏网之鱼",
      type: "select",
      proxies: ["DIRECT", proxy_name],
    },
    {
      name: "自动选择",
      type: "url-test",
      proxies: 代理组,
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "⅒",
      type: "url-test",
      proxies: 十分之一,
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
    {
      name: "1%",
      type: "fallback",
      proxies: 百分之一,
      url: "http://www.gstatic.com/generate_204",
      interval: 1800,
      tolerance: 50,
    },
  ];

  // 添加 rule-providers
  config["rule-providers"] = {
    no_hk: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/no_hk.txt",
      format: "text",
      interval: 86400,
      path: "./no_hk.txt",
    },
    no_jp: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/no_jp.txt",
      format: "text",
      interval: 86400,
      path: "./no_jp.txt",
    },
    在线: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/online.txt",
      format: "text",
      interval: 86400,
      path: "./在线.txt",
    },
    下载: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/download.txt",
      format: "text",
      interval: 86400,
      path: "./下载.txt",
    },
    预代理: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/pre_proxy.txt",
      format: "text",
      interval: 86400,
      path: "./预代理.txt",
    },
    我的代理: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/proxy.txt",
      format: "text",
      interval: 86400,
      path: "./我的代理.txt",
    },
    我的直连: {
      behavior: "classical",
      type: "http",
      url: "https://raw.githubusercontent.com/cz-97/proxy/main/direct.txt",
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

  // 添加 rules
  config["rules"] = [
    "RULE-SET,广告,REJECT",
    "RULE-SET,no_hk,不含🇭🇰",
    "RULE-SET,no_jp,不含🇯🇵",
    "DOMAIN-SUFFIX,githubusercontent.com,github发行版",
    `RULE-SET,预代理,${proxy_name}`,
    "RULE-SET,远程直连,DIRECT",
    "RULE-SET,私有域,DIRECT",
    "RULE-SET,大陆IP,DIRECT",
    "RULE-SET,局域网IP及保留IP,DIRECT",
    "GEOIP,LAN,DIRECT",
    "GEOIP,CN,DIRECT",
    "RULE-SET,我的直连,DIRECT",
    "RULE-SET,在线,在线播放",
    "RULE-SET,下载,下载",
    `RULE-SET,我的代理,${proxy_name}`,
    `RULE-SET,远程代理,${proxy_name}`,
    `RULE-SET,非中国顶域,${proxy_name}`,
    `RULE-SET,纸飞机IP,${proxy_name}`,
    "MATCH,漏网之鱼",
  ];

  return config;
};
