# Hardware Selection Guide for Local Deployment | 本地部署硬件选型指南

Choosing the right hardware for local AI deployment is about matching your specific needs with hardware capabilities. This guide categorizes hardware configurations from entry-level to professional, helping you find the "sweet spot" for your AI journey.

为本地 AI 部署选择合适的硬件，关键在于实现模型需求与硬件能力之间的精准匹配。本指南将硬件配置从入门级到专业级进行分类，帮助您找到适合自己 AI 之旅的“甜点区”。

## 1. Hardware Configuration Tiers | 硬件配置层级

| Tier (层级) | Typical Config (典型配置) | Recommended Models (推荐运行模型) | Core Considerations & Applications (核心考量与典型应用) |
| --- | --- | --- | --- |
| **Entry Level**<br>**入门级**<br>(Consumer GPU) | **GPU**: RTX 4060 Ti 16GB<br>**RAM**: 32GB<br>**Budget**: ~$800-$1200 | **Full Param**: 7B-8B models (Llama 3-8B, Qwen2.5-7B, DeepSeek-R1-7B)<br>**Quantized (4-bit)**: 13B models (Llama 3.1-13B) | **Bottleneck**: VRAM Capacity.<br>**Goal**: "Get it running".<br>**Key**: Use 4-bit quantization. Suitable for personal learning, prototyping, and lightweight apps.<br>**核心瓶颈**：显存容量。目标是“跑起来”。利用 4-bit 量化技术是关键。适合个人学习、原型验证。 |
| **Advanced Level**<br>**进阶级**<br>(High-end Consumer / Workstation) | **GPU**: RTX 4090 24GB<br>**RAM**: 64GB<br>**Budget**: ~$2500-$4500 | **Full Param**: 13B-34B models (Yi-34B, Qwen2.5-32B)<br>**Quantized (4-bit)**: 70B models (Llama 3-70B)<br>**MoE**: Mixtral 8x7B | **Advantage**: Balance of performance & cost.<br>**Sweet Spot**: RTX 4090's 24GB VRAM runs most mid-sized models natively.<br>**Use Case**: SME production, high-quality content creation, coding assistance.<br>**核心优势**：性能与成本的平衡点。RTX 4090 是“甜点区”。适合中小企业生产环境、高质量内容创作。 |
| **Professional Level**<br>**专业级**<br>(Multi-GPU / Data Center) | **GPU**: Multi-A100/H100 80GB or RTX 6000 Ada<br>**RAM**: 128GB+<br>**Budget**: High | **Full Param**: 70B+ models (Llama 3-70B, Falcon-180B)<br>**Training**: Custom large model fine-tuning/training<br>**Multimodal**: GPT-4V class models | **Goal**: Extreme performance & stability.<br>**Features**: NVLink, VRAM pooling, ECC memory.<br>**Use Case**: High-concurrency inference, large-scale training, frontier research.<br>**核心目标**：极致性能与稳定性。关注多卡并行效率、显存池化。适合高并发推理、大规模训练。 |

## 2. Key Factors for Model Selection | 模型选择的关键因素

Besides hardware, consider these factors when choosing a model:
除了硬件配置，选择合适的模型时还需综合考虑以下因素：

### 2.1 Task & Language | 任务场景与语言
- **Chinese Context (中文场景)**: Qwen (通义千问), Yi (零一万物), ChatGLM, DeepSeek are usually better than international models.
  <br> 如果核心业务是中文内容处理，Qwen、Yi、ChatGLM、DeepSeek 等针对中文优化的模型通常更佳。
- **English/Coding (英文/代码)**: Llama, Mixtral, Claude (via API) are strong contenders.
  <br> 若侧重英文或代码生成，Llama、Mixtral 系列可能表现更优。

### 2.2 Quantization Technology | 量化技术
- **The "Key" (钥匙)**: Quantization (GPTQ, GGUF) reduces VRAM usage by 50%-75%.
  <br> 量化是有限硬件上运行更大模型的“钥匙”。
- **Trade-off (权衡)**: Slight precision loss for significant accessibility. A 13B model can run on 16GB VRAM with quantization.
  <br> 代价是轻微的精度损失，但能让 13B 模型在 16GB 显存上流畅运行。

### 2.3 Licensing | 开源协议
- **Check License (检查协议)**: Ensure commercial use is allowed (e.g., Apache 2.0 for Mixtral vs. custom licenses).
  <br> 务必检查模型的许可证，确保符合规定（特别是商业用途）。

## 3. Summary & Advice | 总结与建议

There is no "one-size-fits-all" solution.
选择大模型没有“唯一解”。

1.  **Beginners (新手入门)**: Start with **RTX 4060 Ti 16GB** + **Ollama** running **Llama 3-8B** or **Qwen2.5-7B**.
    <br> 从 RTX 4060 Ti 16GB + Ollama 运行 7B/8B 模型开始，快速体验。
2.  **Performance/Cost Balance (性能平衡)**: **RTX 4090 24GB** is the "Golden Choice" for consumers, handling 13B-34B models natively.
    <br> RTX 4090 24GB 是目前消费级市场的“黄金选择”，能流畅运行 13B-34B 级别模型。
3.  **Enterprise (企业级)**: Consider **A100/L40S** + **vLLM** for stability and high throughput.
    <br> 企业级严肃应用考虑专业数据中心显卡并搭配 vLLM 等高性能推理框架。
