# AI Learning Roadmap | AI 学习路线图

Welcome to the AI Learning Roadmap. This repository contains a curated collection of AI learning materials, reorganized from a personal knowledge base and enhanced with industry-standard resources to help beginners systematically understand and master Artificial Intelligence technologies.

欢迎来到 AI 学习路线图。本仓库包含一系列精选的 AI 学习资料，经过脱敏、重组并结合行业标准资源进行了增强，旨在帮助初学者系统地理解和掌握人工智能技术。

## 📚 Table of Contents | 目录结构

The content is organized following First Principles and Logical Layering, guiding you from mathematical foundations to advanced agent development and future trends.

**New Feature**: Each section now includes a **"Practice Mission" (练习任务)** to help you apply what you learn!
**新特性**：每个章节现在都包含一个**“练习任务”**，帮助你学以致用！

### [00. Prerequisites | 预备知识](./00_Prerequisites/)
- Mathematics for AI (AI 数学基础：线性代数、微积分、概率论)
- Machine Learning & Deep Learning Fundamentals (机器学习与深度学习基础)

### [01. AI Foundations & Hardware | AI 基础与硬件](./01_AI_Foundations_and_Hardware/)
- Global AI Hardware Landscape (全球 AI 硬件格局)
- Hardware Selection Guide for Local Deployment (本地部署硬件选型指南)

### [02. LLM Core Concepts | 大模型核心概念](./02_LLM_Core_Concepts/)
- Transformer Architecture Deep Dive (Transformer 架构详解)
- Emergent Abilities: Where Does Intelligence Come From? (涌现能力：智能从何而来？)
- How Machines Learn: The Science of Optimization (机器如何学习：优化的科学)
- Mainstream Models Overview (主流大模型全景)
- Deep Dive: DeepSeek, GPT, Claude, Gemini (四大模型深度解析)
- Model Selection Strategy (模型选型策略)

### [03. Local Deployment & Quantization | 本地部署与量化](./03_Local_Deployment_and_Quantization/)
- Ollama & GPU Acceleration Practice (Ollama GPU 加速实战)
- Model Quantization Guide (模型量化原理与实操)
- Local Model Evaluation Scheme (本地模型测评方案)

### [04. Prompt Engineering | 提示词工程](./04_Prompt_Engineering/)
- System Prompts Analysis (系统提示词解密：Cursor/v0)
- Prompt Engineering Best Practices (提示词工程最佳实践)
- Advanced Prompting Techniques (进阶提示词技巧：CoT, ToT, ReAct)
- AI for Technical Research (利用 AI 进行技术研究)

### [05. RAG & Fine-tuning | RAG 与微调](./05_RAG_and_Fine_tuning/)
- RAG Fundamentals (RAG 基础)
- Advanced RAG Techniques (高级 RAG 技术：GraphRAG, Re-ranking)
- Fine-tuning Guide (微调指南：LoRA, QLoRA, RLHF)

### [06. AI Agent Development | AI 智能体开发](./06_AI_Agent_Development/)
- Agent Frameworks Comparison (主流 Agent 框架对比：LangChain, AutoGen, CrewAI)
- AI-Native Workflow: The Future of Work (AI 原生工作流：工作的未来)
- Web Automation Agent: ByteBot (Web 智能体实战)
- Game AI Agent: G-Agent (游戏智能体框架)

### [07. AI Ethics & Safety | AI 伦理与安全](./07_AI_Ethics_and_Safety/)
- AI Safety & Alignment (AI 安全与对齐)
- Prompt Injection & Defense (提示词注入与防御)

### [08. Future Trends | 未来趋势](./08_Future_Trends/)
- Multimodal AI (多模态 AI)
- Video Generation (视频生成)
- Embodied AI (具身智能)

### [09. Best Resources | 最佳资源库](./99_Best_Resources/)
- Top 10 Hardcore AI GitHub Repositories (10 个最硬核 AI GitHub 资源库)

## 🔊 Accessibility & Deployment | 无障碍与部署

This project is configured to be deployed as a static website with built-in **Text-to-Speech (TTS)** capabilities, making it accessible to visually impaired users.
本项目已配置为可部署为静态网站，并内置**语音朗读 (TTS)** 功能，方便视障用户使用。

### Features (功能)
- **Text-to-Speech**: Click the "Listen" button (🔊) on any page to hear the content read aloud.
- **Multi-language Support**: Automatically detects and reads English and Chinese content.
- **GitHub Pages Ready**: Includes automated workflow for deployment.

### How to Deploy (如何部署)
1.  **Fork** this repository to your GitHub account.
2.  Enable **GitHub Pages** in your repository settings:
    - Go to `Settings` -> `Pages`.
    - Under `Build and deployment`, select `Source` as `GitHub Actions`.
3.  Push any change to the `main` branch. The site will automatically build and deploy.

### Local Preview (本地预览)
To preview the site locally with TTS features:
```bash
pip install mkdocs-material
mkdocs serve
```
Then open `http://127.0.0.1:8000` in your browser.

## ⚠️ Disclaimer | 免责声明

This repository is a desensitized version of a personal knowledge base. All sensitive personal information, company-specific internal data, and internal links have been removed or modified to ensure privacy and security. The content is for educational purposes only.

本仓库是个人知识库的脱敏版本。所有敏感的个人信息、公司内部数据和内网链接均已被移除或修改，以确保隐私和安全。内容仅供教育和学习使用。
