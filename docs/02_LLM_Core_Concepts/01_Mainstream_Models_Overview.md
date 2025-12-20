# Mainstream Models Overview | 主流大模型全景

The global AI model landscape is evolving rapidly. This document summarizes key information about mainstream models to help you quickly grasp their characteristics and application scenarios.

当前全球 AI 大模型发展迅速。本文档汇总了主流模型的关键信息，帮助您快速把握其核心特点和应用场景。

## Global Mainstream Models Summary | 全球主流模型汇总

| Model Name (模型名称) | Organization (所属机构) | Core Features (核心特点) | Main Applications (主要应用领域) | Hardware Requirements (关键硬件资源需求) |
| --- | --- | --- | --- | --- |
| **o1 Series (o1-preview/o1-mini)** | OpenAI (USA) | Specialized in complex reasoning ("System 2" thinking). Uses Chain of Thought reinforcement learning. Strong in Math/Code. <br> 专精于复杂推理（“系统 2”思维）。采用思维链强化学习训练。数学和编程能力极强。 | STEM research, complex coding, advanced math problem solving. <br> STEM 科研、复杂代码开发、高阶数学解题。 | API only. <br> 目前仅通过 API 调用。 |
| **GPT-4o** | OpenAI (USA) | Native multimodal (text, image, audio), extremely fast. "Omni" model. <br> 原生多模态（文本、图像、音频），响应极快。“全能”模型。 | Real-time voice interaction, vision analysis, general assistant. <br> 实时语音交互、视觉分析、通用助手。 | API only. <br> 通过 API 调用。 |
| **Claude 3.5 Sonnet** | Anthropic (USA) | Best-in-class coding and reasoning. Balances speed and intelligence perfectly. "Artifacts" UI integration. <br> 编程与推理能力目前业界顶尖。完美平衡速度与智能。“Artifacts”界面集成体验佳。 | Software development, data analysis, creative writing. <br> 软件开发、数据分析、创意写作。 | API only. <br> 通过 API 调用。 |
| **Gemini 1.5 Pro** | Google DeepMind (USA) | Massive context window (up to 2M tokens). Deep ecosystem integration (Workspace). <br> 超大上下文窗口（可达 200 万 token）。深度集成 Google 生态（Workspace）。 | Long-context understanding (books, codebases), multimodal analysis. <br> 长文本理解（整书、代码库）、多模态分析。 | API or Google Cloud. <br> API 或 Google Cloud。 |
| **Grok 2** | xAI (USA) | Integrated with X (Twitter) real-time data. Unfiltered/Fun mode. Image generation via FLUX. <br> 集成 X (Twitter) 实时数据。具备“无过滤/有趣”模式。通过 FLUX 生成图像。 | Real-time news analysis, social media interaction, image generation. <br> 实时新闻分析、社交媒体交互、图像生成。 | API or X Premium. <br> API 或 X Premium 订阅。 |
| **Llama 3.2** | Meta (USA) | Open weights. 1B/3B (Edge) and 11B/90B (Vision-Multimodal). Standard for open-source. <br> 开放权重。1B/3B（边缘侧）和 11B/90B（视觉多模态）。开源领域的标准。 | Edge devices (mobile), custom enterprise apps, visual reasoning. <br> 边缘设备（手机）、企业定制应用、视觉推理。 | Consumer GPUs (RTX 4090) to H100s depending on size. <br> 视尺寸而定，从消费级显卡到 H100。 |
| **Mistral Large 2** | Mistral AI (France) | Strong reasoning, coding, and multilingual support. Direct competitor to GPT-4o/Llama 3.1 405B. <br> 强大的推理、编程及多语言支持。GPT-4o 和 Llama 3.1 405B 的有力竞争者。 | Enterprise RAG, multilingual tasks, coding agents. <br> 企业级 RAG、多语言任务、编程智能体。 | High-end GPU clusters. <br> 高端 GPU 集群。 |
| **DeepSeek-V3 (深度求索)** | DeepSeek (China) | MoE Architecture (671B params, 37B active). Strong coding/math. Top-tier open weights. <br> MoE 架构（671B 参数，37B 激活）。编程/数学能力极强。开源界顶流。 | Coding, Math, Scientific research, cost-effective inference. <br> 编程、数学计算、科研、高性价比推理。 | High-end Consumer (Quantized) to H800 clusters. <br> 高端消费级（量化版）到 H800 集群。 |
| **Qwen 2.5 (通义千问)** | Alibaba (China) | Comprehensive size range (0.5B to 72B+). "Coder" and "Math" specialized variants. <br> 尺寸覆盖全（0.5B 到 72B+）。拥有“Coder”和“Math”专项版。 | General purpose, coding assistants, mobile deployment. <br> 通用场景、编程助手、移动端部署。 | Consumer to Pro cards. <br> 消费级到专业卡。 |
| **Yi-Lightning** | 01.AI (China) | Fast inference, strong performance on LMSYS leaderboard. <br> 推理速度快，LMSYS 榜单表现强劲。 | High-throughput chat applications. <br> 高吞吐量对话应用。 | API mostly. <br> 主要为 API。 |
| **Hunyuan Video (混元视频)** | Tencent (China) | Open source video generation foundation model. High quality. <br> 开源视频生成基础模型。画质高。 | Video content creation, advertising. <br> 视频内容创作、广告。 | High VRAM GPUs. <br> 高显存 GPU。 |

*Note: Model versions and capabilities evolve rapidly. This table represents a snapshot of the landscape.*
*注：模型版本和能力迭代迅速，本表格仅代表当前阶段的行业概览。*
