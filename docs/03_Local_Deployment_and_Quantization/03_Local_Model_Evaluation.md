# Local Model Evaluation Scheme | 本地模型测评方案

How do you know which model is better for your specific hardware and use case? This document provides a standardized scheme for local model evaluation.

如何知道哪个模型更适合您的硬件和应用场景？本文档提供了一套标准化的本地模型测评方案。

## 1. Evaluation Dimensions | 测评维度

| Dimension (维度) | Core Metrics (核心指标) | Recommended Tools/Datasets (推荐工具/数据集) | Local Tips (本地操作要点) |
| --- | --- | --- | --- |
| **Base Capability**<br>**基础能力** | **Language**: Perplexity (PPL), BLEU.<br>**Knowledge**: MMLU (General), C-Eval (Chinese).<br>**Logic**: GSM8K (Math), ARC-AGI.<br>**Coding**: HumanEval. | MMLU, C-Eval, GSM8K, HumanEval | Use standardized datasets and scripts to calculate accuracy/match rate.<br>使用标准化数据集，通过脚本批量测试。 |
| **Performance**<br>**性能效率** | **Throughput**: Tokens/s.<br>**Latency**: TTFT (Time to First Token).<br>**Stability**: Context length support. | Custom Scripts, vLLM, Ollama | Fix input/output length, run multiple times, take average.<br>固定输入输出长度，多次测试取平均值。 |
| **Resource**<br>**资源消耗** | **VRAM**: Peak usage.<br>**RAM**: System memory peak.<br>**Energy**: Watts/token. | `nvidia-smi`, `htop`, DCGM | Monitor hardware during stress tests.<br>在压力测试下记录硬件监控数据。 |

## 2. How to Execute Local Evaluation | 如何执行本地测评

### Step 1: Prepare Environment (准备环境)
- **Models**: Ensure models are at the same quantization level (e.g., all 4-bit) for fairness.
  <br> 确保对比的模型采用相同的量化等级（如均采用 4-bit），保证公平性。
- **Hardware**: Isolate the test machine. Close background apps.
  <br> 确保硬件环境唯一，避免其他进程干扰。
- **Tools**: Install `transformers`, `vLLM`, or `OpenCompass` (a powerful evaluation framework).
  <br> 安装必要的库，OpenCompass 是一个强大的自动化评测框架。

### Step 2: Automate Testing (实施自动化测评)
- **Base Test**: Write scripts to load MMLU/C-Eval datasets, query the model, and compare answers.
  <br> 编写脚本批量运行基础能力测试。
- **Performance Test**: Use a fixed prompt (e.g., "Write a 300-word essay on AI") and record Tokens/s.
  <br> 使用固定提示词重复测试，记录 Tokens/s 和延迟。
- **Resource Monitor**: Run `nvidia-smi --query-gpu=memory.used --format=csv -l 1` in background to log VRAM.
  <br> 在后台运行监控命令记录显存占用峰值。

### Step 3: Analyze & Optimize (分析结果与优化)
- **Visualize**: Create charts comparing models across dimensions.
  <br> 将结果汇总成表格或可视化图表。
- **Context Matters**: For logic tasks, prioritize GSM8K scores over speed. For chat bots, prioritize TTFT.
  <br> 重点关注模型在不同场景下的性能差异。逻辑任务看重准确率，聊天机器人看重首字延迟。

## 3. Important Notes | 重要提醒

1.  **No "Perfect" Model**: Define your goal (Coding vs. Creative Writing) first.
    <br> 没有“全能”的模型。测评前想清楚主要应用场景。
2.  **Avoid Overfitting**: Ensure test data wasn't in the training set (Data Contamination).
    <br> 警惕过拟合，确保测评数据集与训练数据无重叠。
3.  **Human Eval**: For subjective quality, human review is still necessary.
    <br> 对于内容质量等主观指标，必须结合人工评测。
