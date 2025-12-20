# Fine-tuning Guide | 微调指南

> **The Analogy: Education vs. Cheat Sheet**
> - **Pre-training**: Primary School. Learning grammar, logic, and general world knowledge.
> - **Fine-tuning**: Medical School. Learning specific jargon, format, and style. (Changing the brain).
> - **RAG**: A Textbook. Looking up facts during work. (Using a tool).
> **类比：教育 vs 小抄**
> - **预训练**：小学。学习语法、逻辑和通用世界知识。
> - **微调**：医学院。学习特定术语、格式和风格。（改变大脑）。
> - **RAG**：教科书。工作中查阅事实。（使用工具）。

## 1. The Decision Tree: Do I need Fine-tuning? | 决策树：我需要微调吗？

```mermaid
graph TD
    Start[I have a problem] --> Q1{Does the model lack KNOWLEDGE?}
    Q1 -- Yes --> Q2{Is the knowledge changing often?}
    Q2 -- Yes --> RAG[Use RAG]
    Q2 -- No --> Q3{Is the dataset huge?}
    Q3 -- Yes --> FT[Fine-Tuning (Knowledge Injection)]
    Q3 -- No --> RAG
    
    Q1 -- No --> Q4{Does the model lack STYLE/FORMAT?}
    Q4 -- Yes --> Q5{Can Prompt Engineering fix it?}
    Q5 -- Yes --> Prompt[Use Few-Shot Prompting]
    Q5 -- No --> FT2[Fine-Tuning (Style Injection)]
```

**Verdict**: 90% of use cases need **RAG**, not Fine-tuning.
**结论**：90% 的场景需要 **RAG**，而不是微调。

## 2. PEFT: Fine-tuning for Everyone | PEFT：人人可用的微调

In the past, fine-tuning a 7B model required 100GB+ VRAM. Now, thanks to **PEFT (Parameter-Efficient Fine-Tuning)**, you can do it on a gaming PC.
过去，微调 7B 模型需要 100GB+ 显存。现在，感谢 **PEFT**，你可以在游戏本上完成。

### 2.1 LoRA (Low-Rank Adaptation)
**The "Post-it Note" Method | “便利贴”法**

Instead of rewriting the whole textbook (Weights), we stick small post-it notes (Adapter Layers) on the pages.
我们不重写整本教科书（权重），而是在页面上贴小便利贴（适配器层）。
- **Original Weights**: Frozen (Don't touch).
- **LoRA Weights**: Trainable (Tiny, < 1% of total size).

### 2.2 QLoRA (Quantized LoRA)
**The "Compressed Post-it Note" Method | “压缩便利贴”法**

Compress the textbook to 4-bit (Quantization) AND use LoRA.
将教科书压缩到 4-bit（量化），同时使用 LoRA。
- **Result**: Fine-tune a 70B model on a single 48GB GPU.

## 3. RLHF: How ChatGPT was made | RLHF：ChatGPT 是如何炼成的

**Reinforcement Learning from Human Feedback**
基于人类反馈的强化学习

1.  **SFT (Supervised Fine-Tuning)**: Teach the model to answer questions. (The "Intern" stage).
    <br> 教模型回答问题。（“实习生”阶段）。
2.  **Reward Modeling**: Teach a judge model to rate answers. (The "Critic" stage).
    <br> 教裁判模型给答案打分。（“评论家”阶段）。
3.  **PPO (Optimization)**: The model generates answers, the judge rates them, and the model updates itself to get higher scores. (The "Training" stage).
    <br> 模型生成答案，裁判打分，模型自我更新以获得更高分。（“训练”阶段）。

## 4. Tools & Frameworks | 工具与框架

- **Hugging Face PEFT**: The standard library for LoRA/Prefix Tuning.
- **Unsloth**: Optimized library for faster LoRA fine-tuning (2x-5x faster).
- **Axolotl**: All-in-one configuration-based fine-tuning tool.
