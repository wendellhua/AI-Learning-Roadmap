# System Prompts Analysis: Cursor & v0 | 系统提示词解密

System Prompts are the "operating manuals" and "personas" of AI tools. By analyzing the system prompts of top-tier AI products like Cursor and v0, we can learn advanced prompt engineering techniques.

系统提示词是 AI 工具的“人设”和“操作手册”。通过分析 Cursor、v0 等顶尖 AI 产品的系统提示词，我们可以学习到高阶的提示词工程技巧。

## 1. What Can We Learn? | 我们能学到什么？

1.  **Replicate Experience (复刻体验)**: Get Cursor-like coding assistance or v0-like UI generation in standard ChatGPT/Claude.
    <br> 在 ChatGPT/Claude 中获得类似 Cursor 的编程体验或 v0 的前端生成能力。
2.  **Advanced Techniques (高阶技巧)**: Learn how experts use constraints, jailbreak defenses, and Chain of Thought (CoT).
    <br> 学习专家如何设置约束、防御越狱以及使用思维链。
3.  **Build Agents (构建智能体)**: Reuse verified prompt structures for your own AI applications (Dify, LangChain).
    <br> 复用经过验证的提示词结构来构建自己的 AI 应用。

## 2. Key Resources Analysis | 核心资源解析

### 2.1 Cursor (The AI Code Editor)
- **Value**: Contains strong code generation standards, CoT logic, and bug prevention instructions.
  <br> **价值**：包含极强的代码生成规范、思维链逻辑以及如何避免 Bug 的指令。
- **Application**: Extract the "Coding Rules" part (e.g., "Don't be lazy", "Write modular code") and use it as your Custom Instructions.
  <br> **应用**：提取其“编程规则”部分作为你的自定义指令。

### 2.2 v0.dev / Bolt.new (UI Generators)
- **Value**: Detailed specifications on using Tailwind CSS, React components, and layout principles.
  <br> **价值**：详细规定了如何使用 Tailwind CSS、React 组件和布局原则。
- **Application**: Feed these prompts to Claude 3.5 Sonnet to instantly improve its web design capabilities.
  <br> **应用**：将这些提示词喂给 Claude 3.5 Sonnet，立即提升其网页设计能力。

### 2.3 Claude Artifacts
- **Value**: Teaches how to generate standalone, interactive code blocks (previews).
  <br> **价值**：教你如何让 AI 生成独立、可交互的代码块（预览窗口）。

## 3. Practical Scenarios | 实战应用场景

### Scenario 1: "Free" Cursor Experience
**场景 1：在 ChatGPT 中“白嫖”Cursor 体验**

1.  **Find**: Locate the Cursor system prompt text.
    <br> 找到 Cursor 系统提示词文本。
2.  **Clean**: Remove specific tool definitions (like `edit_file` APIs that ChatGPT doesn't have). Keep the core coding principles.
    <br> 清洗文本，去掉具体的 API 工具定义，保留核心编程原则。
3.  **Inject**: Paste into "Custom Instructions" in ChatGPT or a Project in Claude.
    <br> 粘贴到 ChatGPT 的“自定义指令”或 Claude 的 Project 中。

### Scenario 2: XML Tagging Structure
**场景 2：学习结构化 Prompt 写作 (XML Tagging)**

Top prompts use XML tags for organization. Imitate this structure:
顶尖提示词使用 XML 标签来组织内容。模仿这种结构：

```xml
<role>
    You are an expert UI designer.
</role>
<constraints>
    - Do not use external CSS.
    - Use Tailwind classes.
</constraints>
<thinking>
    Before generating code, outline the component structure.
</thinking>
```

### Scenario 3: Building Vertical Agents
**场景 3：开发垂直领域智能体**

If building a "Frontend Assistant" in Dify:
如果在 Dify 中搭建“前端助手”：
1.  Copy `v0-system-prompt`.
    <br> 复制 v0 的系统提示词。
2.  Modify library constraints (e.g., change "Use v0 lib" to "Use Ant Design").
    <br> 修改组件库约束（如改为使用 Ant Design）。
3.  Deploy as System Prompt.
    <br> 部署为系统提示词。

## 4. Notes | 注意事项

- **Token Cost**: System prompts can be huge. Summarize them for API usage to save costs.
  <br> 系统提示词通常很长。调用 API 时建议精简以节省成本。
- **Model Fit**: Cursor/v0 prompts are optimized for **Claude 3.5 Sonnet**. They might work differently on GPT-4o.
  <br> Cursor/v0 的提示词针对 Claude 3.5 优化。在 GPT-4o 上效果可能不同。
