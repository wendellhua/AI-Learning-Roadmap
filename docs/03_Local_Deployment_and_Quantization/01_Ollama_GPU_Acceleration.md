# Ollama & GPU Acceleration Practice | Ollama GPU 加速实战

> **The Reality Check**
> "Why is my AI so slow?"
> Usually, it's because the model is too big for your GPU, so it spills over to the CPU (which is 10x-100x slower).
> **现实检验**
> “为什么我的 AI 这么慢？”
> 通常是因为模型对你的显卡来说太大了，所以它溢出到了 CPU（慢 10-100 倍）。

## 1. Hardware Tier Guide | 硬件分级指南

What can you run?
你能跑什么？

| Tier (级别) | Hardware (硬件) | Recommended Model (推荐模型) | Strategy (策略) |
| --- | --- | --- | --- |
| **Entry (入门)** | MacBook Air (M1/M2/M3) <br> Intel Integrated Graphics <br> Old GPU (< 6GB VRAM) | **1.5B - 3B Models** <br> (e.g., Qwen2.5-1.5B, Llama-3.2-3B) | **CPU Mode (GGUF)** <br> Rely on fast RAM. Apple Silicon is surprisingly good here. |
| **Mid (进阶)** | RTX 3060 / 4060 (8GB-12GB) | **7B - 14B Models (Quantized)** <br> (e.g., DeepSeek-R1-Distill-Llama-8B-Q4) | **GPU Offloading** <br> Fit most layers on GPU. |
| **High (高端)** | RTX 3090 / 4090 (24GB) | **32B - 70B Models (Quantized)** | **Full GPU** <br> Fast inference. |
| **Pro (专业)** | Dual 3090 / 4090 (48GB+) | **70B+ Models (FP16)** | **Multi-GPU** <br> Run uncompressed models. |

## 2. Common Issue: CPU Fallback | 常见问题：CPU 降级运行

**Symptom**: The model runs extremely slowly (1 token/sec), consuming high CPU, while GPU usage is 0%.
<br> **现象**：模型运行极慢（每秒 1 个字），CPU 满载，而 GPU 占用率为 0%。

**Cause**: **VRAM Overflow (显存溢出)**.
<br> **原因**：显存不够装下整个模型。

**Solution**: Use a smaller or more compressed model.
<br> **解决方案**：使用更小或压缩率更高的模型。
- **Don't**: `ollama run deepseek-r1:14b` (Requires ~9GB VRAM in Q4).
- **Do**: `ollama run deepseek-r1:7b` (Requires ~5GB VRAM).

## 3. No GPU? No Problem! | 没有显卡？没问题！

If you are on a laptop without a dedicated GPU, you can still run AI.
如果你用的是没有独立显卡的笔记本，你依然可以运行 AI。

1.  **Use GGUF Format**: This format is designed for CPUs. It's efficient.
    <br> **使用 GGUF 格式**：这是专为 CPU 设计的格式。效率很高。
2.  **Stick to Small Models**:
    - **Qwen2.5-1.5B**: Surprisingly smart, runs on a toaster.
    - **Llama-3.2-3B**: Good balance.
3.  **Apple Silicon (M1/M2/M3)**:
    - MacBooks use "Unified Memory". Your RAM *is* your VRAM.
    - A MacBook with 16GB RAM can run larger models than a PC with an 8GB GPU!

## 4. Troubleshooting CUDA | CUDA 故障排除

If you *have* a GPU but Ollama ignores it:
如果你*有*显卡但 Ollama 忽略它：

1.  **Update Drivers**: 90% of issues are fixed by installing the latest NVIDIA Studio/Game Ready Driver.
    <br> **更新驱动**：90% 的问题可以通过安装最新的 NVIDIA 驱动解决。
2.  **Check Logs**:
    - Windows: Check `~/.ollama/logs/server.log`.
    - Look for "CUDA capability" errors.

*[Image: Screenshot of nvidia-smi showing GPU usage]*
*[图片：nvidia-smi 显示 GPU 占用率的截图]*

## 5. Practice Mission: The Local AI Hello World | 练习任务：本地 AI 的 Hello World

**Objective (目标)**: Successfully run a Large Language Model on your own computer.
**目标**：在你的电脑上成功运行一个大语言模型。

**Prerequisites (前置条件)**:
- Install [Ollama](https://ollama.com/).
- Open your Terminal (Command Prompt / PowerShell / Terminal).

**Task (任务)**:
1.  **Check your Hardware**:
    *   Do you have an NVIDIA GPU? Or a Mac M1/M2? Or just Intel CPU?
2.  **Select a Model**:
    *   **Weak Hardware**: Run `ollama run qwen2.5:0.5b` (Tiny, super fast).
    *   **Average Hardware**: Run `ollama run llama3.2:3b` (Standard).
    *   **Strong Hardware**: Run `ollama run llama3.1:8b` (Powerful).
3.  **The Chat**:
    *   Ask the AI: "Why is the sky blue?"
    *   **Challenge**: Ask it to write a Python function to calculate Fibonacci numbers.
4.  **Monitor Resources (Optional)**:
    *   Windows: Open Task Manager -> Performance -> GPU.
    *   Mac: Open Activity Monitor -> Memory.
    *   **Question**: How much RAM/VRAM did it eat?

> **Success Criteria (成功标准)**:
> - You see the AI typing out the answer token by token.
> - You feel the "magic" of running intelligence locally (offline!).
