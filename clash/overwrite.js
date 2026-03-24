function main(config) {
  // 填充rule-provider
  if (!config["rule-providers"]) {
    config["rule-providers"] = {};
  }
  const mobaiDirectLabel = "mobai-direct";
  const mobaiDirect = {
    type: "http",
    behavior: "classical",
    url: "https://gh-proxy.org/https://raw.githubusercontent.com/Qian-MoBai/rules/refs/heads/main/clash/direct.yaml",
    interval: 86400,
  };
  config["rule-providers"][mobaiDirectLabel] = mobaiDirect;
  if (!config["rules"]) {
    config["rules"] = [];
  }
  // 插入规则（放前面优先匹配）
  config["rules"].unshift(`RULE-SET,${mobaiDirectLabel},DIRECT`);
  return config;
}
