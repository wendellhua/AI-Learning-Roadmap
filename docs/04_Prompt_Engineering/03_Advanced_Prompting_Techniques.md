# Advanced Prompting Techniques | 进阶提示词技巧

Beyond basic instructions, these techniques unlock the reasoning and planning capabilities of LLMs.

超越基础指令，这些技巧解锁了 LLM 的推理和规划能力。

## 1. Chain of Thought (CoT) | 思维链

Encouraging the model to "think out loud" before answering.
鼓励模型在回答前“大声思考”。

- **Zero-Shot CoT**: Just add "Let's think step by step."
  <br> **零样本 CoT**：只需添加“让我们一步步思考。”
- **Few-Shot CoT**: Provide examples of reasoning steps.
  <br> **少样本 CoT**：提供推理步骤的示例。

### 💻 Code Example: Implementing CoT with Python | 代码示例：用 Python 实现 CoT

```python
import os
from openai import OpenAI

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def solve_math_problem(problem):
    """
    Solves a math problem using Chain of Thought prompting.
    使用思维链提示解决数学问题。
    """
    prompt = f"""
    Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
    A: Roger started with 5 balls. 2 cans of 3 balls each is 6 balls. 5 + 6 = 11. The answer is 11.

    Q: {problem}
    A: Let's think step by step.
    """
    
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant that solves math problems step by step."},
            {"role": "user", "content": prompt}
        ],
        temperature=0
    )
    
    return response.choices[0].message.content

# Example usage | 使用示例
problem = "The cafeteria had 23 apples. If they used 20 to make lunch and bought 6 more, how many apples do they have?"
print(solve_math_problem(problem))
```

## 2. Tree of Thoughts (ToT) | 思维树

For complex problems, explore multiple reasoning paths and backtrack if necessary.
对于复杂问题，探索多条推理路径，并在必要时回溯。

- **Process**:
  1.  **Decomposition**: Break the problem into steps.
  2.  **Generation**: Generate multiple options for the next step.
  3.  **Evaluation**: Score each option.
  4.  **Search**: BFS (Breadth-First Search) or DFS (Depth-First Search).
  <br> **流程**：分解 -> 生成 -> 评估 -> 搜索。
- **Use Case**: Creative writing, complex math proofs.
  <br> **场景**：创意写作、复杂数学证明。

## 3. ReAct (Reason + Act) | 推理与行动

The foundation of AI Agents. Combining reasoning with external tool usage.
AI Agent 的基础。将推理与外部工具使用结合起来。

- **Loop**:
  1.  **Thought**: "I need to find the weather in Tokyo."
  2.  **Action**: `get_weather("Tokyo")`
  3.  **Observation**: "Sunny, 25°C"
  4.  **Thought**: "The weather is nice. I can answer the user."
  5.  **Answer**: "It's sunny and 25°C in Tokyo."
  <br> **循环**：思考 -> 行动 -> 观察 -> 思考 -> 回答。

## 4. Self-Consistency | 自洽性

Generate multiple answers using CoT and take the majority vote.
使用 CoT 生成多个答案，然后取多数票。

- **Why**: Reasoning paths might vary, but the correct answer should be consistent.
  <br> **原因**：推理路径可能不同，但正确答案应该是一致的。
