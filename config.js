const main = (config) => {
  config["rules"] = [];
  config["rule-providers"] = {};

  proxy_name = config["proxy-groups"][0]["name"];

  // 添加新的 proxy-groups
  config["proxy-groups"] = [
    ...config["proxy-groups"],
    {
      name: "漏网之鱼",
      type: "select",
      proxies: ["DIRECT", proxy_name],
    },
  ];

  // 添加 rule-providers
  config["rule-providers"] = {
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
      behavior: "domain",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/reject.txt",
      path: "./ruleset/广告.yaml",
      interval: 86400,
    },
    非中国顶域: {
      type: "http",
      behavior: "domain",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/tld-not-cn.txt",
      path: "./ruleset/非中国顶域.yaml",
      interval: 86400,
    },

    纸飞机IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/telegramcidr.txt",
      path: "./ruleset/纸飞机IP.yaml",
      interval: 86400,
    },

    远程直连: {
      type: "http",
      behavior: "domain",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/direct.txt",
      path: "./ruleset/远程直连.yaml",
      interval: 86400,
    },

    大陆IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/cncidr.txt",
      path: "./ruleset/大陆IP.yaml",
      interval: 86400,
    },

    私有域: {
      type: "http",
      behavior: "domain",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/private.txt",
      path: "./ruleset/私有域.yaml",
      interval: 86400,
    },

    局域网IP及保留IP: {
      type: "http",
      behavior: "ipcidr",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/lancidr.txt",
      path: "./ruleset/局域网IP及保留IP.yaml",
      interval: 86400,
    },

    远程代理: {
      type: "http",
      behavior: "domain",
      url: "https://raw.gitmirror.com/Loyalsoldier/clash-rules/release/proxy.txt",
      path: "./ruleset/远程代理.yaml",
      interval: 86400,
    },
  };

  // 添加 rules
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
    `RULE-SET,我的代理,${proxy_name}`,
    `RULE-SET,远程代理,${proxy_name}`,
    `RULE-SET,非中国顶域,${proxy_name}`,
    `RULE-SET,纸飞机IP,${proxy_name}`,
    "MATCH,漏网之鱼",
  ];

  return config;
};
