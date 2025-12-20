# AI Safety & Alignment | AI 安全与对齐

As AI models become more powerful, ensuring they are safe, helpful, and honest is critical. This field is known as AI Alignment.

随着 AI 模型变得越来越强大，确保它们安全、有益且诚实至关重要。这个领域被称为 AI 对齐。

## 1. The HHH Principle | HHH 原则

Anthropic defines alignment using three pillars:
Anthropic 用三大支柱定义对齐：

1.  **Helpful (有益)**: The AI should attempt to perform the task as best as it can.
    <br> AI 应尽可能好地完成任务。
2.  **Honest (诚实)**: The AI should give accurate information and express uncertainty when it doesn't know.
    <br> AI 应提供准确信息，并在不知道时表达不确定性（避免幻觉）。
3.  **Harmless (无害)**: The AI should not be offensive, discriminatory, or assist in illegal acts.
    <br> AI 不应具有冒犯性、歧视性或协助非法行为。

## 2. Common Risks | 常见风险

### 2.1 Hallucination (幻觉)
- **Definition**: The model confidently generates false information.
  <br> 模型自信地生成错误信息。
- **Mitigation**: RAG (Grounding), Chain of Thought (Reasoning), RLHF.
  <br> **缓解**：RAG（接地）、思维链（推理）、RLHF。

### 2.2 Bias & Fairness (偏见与公平)
- **Definition**: Models reflecting historical biases in training data (e.g., gender roles).
  <br> 模型反映训练数据中的历史偏见（如性别角色）。
- **Mitigation**: Diverse datasets, Constitutional AI.
  <br> **缓解**：多样化数据集、宪法 AI。

### 2.3 Data Privacy (数据隐私)
- **Risk**: Models memorizing and leaking PII (Personally Identifiable Information).
  <br> 模型记忆并泄露个人身份信息 (PII)。
- **Mitigation**: Data sanitization, Differential Privacy.
  <br> **缓解**：数据清洗、差分隐私。

## 3. Alignment Techniques | 对齐技术

- **RLHF (Reinforcement Learning from Human Feedback)**: The industry standard. Humans rank outputs to guide the model.
  <br> 行业标准。人类对输出排序以指导模型。
- **Constitutional AI (CAI)**: AI trains AI. The model critiques its own outputs based on a set of principles (a "Constitution").
  <br> AI 训练 AI。模型根据一套原则（“宪法”）批评自己的输出。
- **Red Teaming**: Hiring experts to attack the model to find vulnerabilities before release.
  <br> 聘请专家攻击模型，在发布前发现漏洞。
