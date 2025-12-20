# 💻 Local Deployment | 本地部署与量化

> 🎯 **Learning Objective | 学习目标**：Learn to run AI large models on your own computer | 学会在自己的电脑上运行AI大模型

---

## 🌟 Why Local Deployment? | 为什么要本地部署？

Benefits of running AI on your own computer:
在自己电脑上运行AI的好处：

- 🔒 **Privacy & Security | 隐私安全** - Data never leaves your computer | 数据不离开你的电脑
- 💰 **Free to Use | 免费使用** - No API fees needed | 不用付API费用
- ⚡ **Offline Available | 离线可用** - Works without internet | 没网也能用
- 🎮 **Full Customization | 自由定制** - Play however you want | 想怎么玩就怎么玩

---

## 📚 Chapter Contents | 本章内容

### 1️⃣ [Ollama GPU Acceleration | Ollama GPU加速](01_Ollama_GPU_Acceleration.md)

The simplest local deployment solution:
最简单的本地部署方案：

- 📥 **One-click Install | 一键安装** - Done in 5 minutes | 5分钟搞定
- ⚡ **GPU Acceleration | GPU加速** - Make the model fly | 让模型飞起来
- 🔧 **Common Commands | 常用命令** - Quick start guide | 快速上手指南

### 2️⃣ [Model Quantization Guide | 模型量化指南](02_Model_Quantization_Guide.md)

The magic of making large models "slim down":
让大模型"瘦身"的魔法：

- 📦 **What is Quantization | 什么是量化** - Model compression technology | 压缩模型的技术
- 🎯 **Quantization Levels | 量化等级** - Differences between Q4, Q5, Q8 | Q4、Q5、Q8的区别
- ⚖️ **Precision vs Speed | 精度vs速度** - How to balance | 如何平衡

### 3️⃣ [Local Model Evaluation | 本地模型评估](03_Local_Model_Evaluation.md)

How to judge if a model is good:
如何判断模型好不好：

- 📊 **Evaluation Metrics | 评估指标** - Measuring model capability | 衡量模型能力
- 🧪 **Testing Methods | 测试方法** - Practical testing techniques | 实际测试技巧
- 📈 **Performance Comparison | 性能对比** - Real-world test data for various models | 各模型实测数据

---

## 🎮 Quick Start Guide | 快速入门指南

```bash
# 1. Install Ollama (Mac example) | 安装 Ollama（以Mac为例）
brew install ollama

# 2. Start service | 启动服务
ollama serve

# 3. Download and run model | 下载并运行模型
ollama run llama3.1:8b

# 4. Start chatting! | 开始对话！
>>> Hello, please introduce yourself
>>> 你好，请介绍一下你自己
```

---

## 📊 VRAM Requirements Quick Reference | 显存需求速查表

| Model Size | Quantization | Required VRAM | Recommended GPU |
|------------|--------------|---------------|-----------------|
| 模型大小 | 量化等级 | 所需显存 | 推荐显卡 |
| 7B | Q4 | 4-6 GB | RTX 3060 |
| 7B | Q8 | 8-10 GB | RTX 3080 |
| 13B | Q4 | 8-10 GB | RTX 3080 |
| 70B | Q4 | 35-40 GB | RTX 4090 x2 |

---

## ⏱️ Estimated Study Time | 预计学习时间

- Ollama Installation & Usage | Ollama安装使用：1-2 hours | 小时
- Quantization Principles | 量化原理学习：1-2 hours | 小时
- Model Evaluation Practice | 模型评估实践：1-2 hours | 小时

**Total | 总计**：About 3-6 hours | 约 3-6 小时

---

> 💡 **Pro Tip | 小贴士**：Starting with Ollama is the easiest! You can run AI on your own computer in just a few minutes.
> 
> 从 Ollama 开始是最简单的！几分钟就能在自己电脑上运行AI。
