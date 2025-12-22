# 🌍 Global App Deployment Guide | APP出海部署实战指南

> 🎯 **Learning Objective | 学习目标**：Master a cost-effective and stable deployment strategy for global applications specifically for Chinese developers | 掌握一套专为中国开发者设计的低成本、高稳定性APP出海部署方案

---

## 🚀 The "10-Minute" Deployment Strategy | "10分钟"极速部署方案

This guide provides a streamlined, 4-step process to deploy your AI application globally, balancing cost, performance, and security.
本指南提供了一套精简的4步流程，帮助你实现AI应用的全球化部署，兼顾成本、性能与安全性。

### 📋 Overview | 方案概览

- **Total Time | 耗时**: ~10 Minutes | 约10分钟
- **Key Services | 核心服务**: Tencent Cloud (Domain) + Cloudflare (DNS/CDN/Security)
- **Cost Strategy | 成本策略**: Low-cost TLDs + Free Tier CDN | 低价顶级域名 + 免费CDN层

---

## 📝 Step-by-Step Guide | 详细操作指引

### Step 1: Domain Registration on Tencent Cloud | 腾讯云选购低价域名

Avoid expensive TLDs like `.ai` if you are on a budget. `.online` is a great, professional alternative.
预算有限时请避开 `.ai` 等昂贵后缀。`.online` 是一个既专业又实惠的替代方案。

1. **Log in to Tencent Cloud Console** | 登录腾讯云控制台。
2. **Go to Domain Registration** | 进入域名注册页面 (DNSPod)。
3. **Search & Compare** | 搜索心仪的域名。
   - 💡 **Tip**: Search for your app name.
   - 💡 **Suggestion**: Check prices for `.online`, `.io`, `.co`, or `.xyz`. `.online` often has promotions (e.g., ¥8-¥20 for the first year).
   - ⚠️ **Warning**: `.ai` domains usually cost $60-80+/year.
4. **Purchase & Verify** | 购买并完成实名认证 (Required in China for purchase, but using Cloudflare DNS hides origin IP).

### Step 2: Register on Cloudflare & Get DNS | Cloudflare注册并获取DNS

Cloudflare is the industry standard for DNS, CDN, and DDoS protection.
Cloudflare 是DNS解析、CDN加速和DDoS防护的行业标准。

1. **Sign Up/Log In** | 访问 [Cloudflare.com](https://www.cloudflare.com/) 注册或登录。
2. **Add a Site** | 点击右上角 "Add a site"。
3. **Enter Domain** | 输入你在腾讯云购买的域名 (e.g., `my-ai-app.online`) -> Continue。
4. **Select Plan** | 选择底部 **Free** Plan (免费版) -> Continue。
5. **Review DNS** | Cloudflare will scan existing records. Click Continue.
6. **Get Nameservers** | You will see two Nameservers provided by Cloudflare.
   - Example: `amy.ns.cloudflare.com` & `bob.ns.cloudflare.com`
   - 📋 **Copy these!** | **复制这两个地址！**

### Step 3: Update DNS in Tencent Cloud | 腾讯云替换DNS (Critical Step)

🔴 **Crucial Step for Beginners**: Many users forget this and wait forever for propagation.
🔴 **新手易错点**：很多用户忘记这一步，导致解析一直不生效。

1. **Back to Tencent Cloud** | 回到腾讯云/DNSPod 控制台。
2. **Domain Management** | 找到“我的域名”列表。
3. **Modify DNS** | 点击域名进入详情 -> 找到 "DNS服务器" (DNS Servers) -> 点击 "修改" (Modify).
4. **Custom DNS** | 选择 "自定义DNS" (Custom DNS).
5. **Paste Cloudflare NS** | 将 Cloudflare 提供的两个地址分别粘贴进去。
   - 删除原有的腾讯云DNS地址。
6. **Save** | 保存更改。

### Step 4: Enable SSL & Security on Cloudflare | Cloudflare开启SSL与安全防护

Wait for a few minutes (up to 24h, but usually ~10 mins). Cloudflare will send an email saying "Status Active".
等待几分钟（通常约10分钟），Cloudflare 会发送邮件通知域名已激活。

1. **Check Status** | 在 Cloudflare 首页看到域名状态变为 "Active" (绿色)。
2. **SSL/TLS Setup** | 点击左侧菜单 **SSL/TLS**:
   - Set encryption mode to **Full** or **Full (strict)**.
   - **Flexible**: Use only if your origin server cannot support SSL (not recommended).
3. **Always Use HTTPS** | Go to **SSL/TLS** -> **Edge Certificates**.
   - Toggle **Always Use HTTPS** to **On**.
4. **Security Settings** | Go to **Security** -> **WAF**.
   - You can create rules to block specific countries or high-risk IPs if needed.

---

## 🌟 Why This Stack? | 为什么选择这个组合？

| Feature | Tencent Cloud Domain | Cloudflare DNS/CDN |
| :--- | :--- | :--- |
| **Payment | 支付** | WeChat/Alipay supported (Convenient) | Free Tier covers most needs |
| **Speed | 速度** | Fast registration process | Global CDN reduces latency |
| **Security | 安全** | Basic domain lock | Free SSL, DDoS protection, WAF |
| **Cost | 成本** | Competitive first-year prices | $0 for essential features |

## ✅ Summary | 总结

By separating the **Domain Registrar** (Tencent Cloud) from the **DNS/Service Provider** (Cloudflare), you get the best of both worlds: easy payment and management in China, combined with world-class global performance and security.
通过将**域名注册商**（腾讯云）与**DNS/服务提供商**（Cloudflare）分离，你获得了两全其美的效果：国内便捷的支付与管理，结合世界级的全球性能与安全防护。
