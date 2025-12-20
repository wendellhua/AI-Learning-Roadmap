# AI for Technical Research | 利用 AI 进行技术研究

> **The Superpower**
> Research used to mean reading 50 papers and hoping to find a connection.
> Now, it means asking AI to read 500 papers and *show* you the connection.
> **超能力**
> 以前研究意味着读 50 篇论文并希望找到联系。
> 现在，意味着让 AI 读 500 篇论文并*展示*给你联系。

## 1. The "Deep Research" Framework | “深度研究”框架

Don't just ask "What is X?". Use a structured approach.
别只问“什么是 X？”。使用结构化方法。

### Phase 1: Exploration (探索)
**Goal**: Map the landscape.
**目标**：绘制版图。

- **Prompt**: "I want to understand [Topic]. Create a knowledge graph of the key concepts, leading researchers, and seminal papers from the last 5 years."
- **Tool**: Perplexity, Genspark, Connected Papers.

### Phase 2: Synthesis (综合)
**Goal**: Connect the dots.
**目标**：连接点。

- **Prompt**: "Here are PDFs of 5 papers. Compare their methodologies. What are the conflicting results? Create a table summarizing their pros and cons."
- **Tool**: ChatPDF, Claude (Large Context Window), NotebookLM.

### Phase 3: Innovation (创新)
**Goal**: Find the gap.
**目标**：发现空白。

- **Prompt**: "Based on these papers, what are the unsolved problems? Propose 3 novel research directions that combine Method A from Paper 1 and Method B from Paper 2."
- **Tool**: GPT-4o, Claude 3.5 Sonnet.

## 2. Practical Workflow: The "Paper Crusher" | 实战工作流：“论文粉碎机”

How to digest a complex technical field in 1 day.
如何在 1 天内消化一个复杂的技术领域。

1.  **Collection**: Use **Perplexity** to find the top 10 most cited papers on the topic.
    <br> **收集**：用 **Perplexity** 找到该主题引用率最高的 10 篇论文。
2.  **Ingestion**: Upload them to **Google NotebookLM**. It turns them into a searchable database (and even a Podcast!).
    <br> **摄入**：上传到 **Google NotebookLM**。它把它们变成可搜索的数据库（甚至播客！）。
3.  **Interrogation**: Ask specific questions.
    - "How does the implementation of X differ from Y?"
    - "What are the hardware requirements?"
4.  **Coding**: Use **Cursor** to implement a toy version of the algorithm to verify understanding.
    <br> **编码**：用 **Cursor** 实现算法的玩具版本以验证理解。

## 3. Pitfalls to Avoid | 需避免的陷阱

1.  **The "Echo Chamber"**: AI tends to agree with you. Ask it to be critical.
    <br> **“回声室”**：AI 倾向于同意你。让它具有批判性。
    - *Prompt*: "Play the Devil's Advocate. Why might this theory be wrong?"
2.  **Hallucinated Citations**: AI loves to invent paper titles. **Always verify DOIs**.
    <br> **幻觉引用**：AI 喜欢编造论文标题。**务必验证 DOI**。
3.  **Surface Level Trap**: Don't stop at the summary. You still need to read the core math/code yourself.
    <br> **浅层陷阱**：别止步于摘要。你仍然需要自己阅读核心数学/代码。

## 4. Recommended Tools Stack | 推荐工具栈

| Stage | Tool | Why? |
| --- | --- | --- |
| **Search** | **Perplexity / Elicit** | Finds real papers, not hallucinations. |
| **Reading** | **NotebookLM / ChatPDF** | Chats with multiple PDFs at once. |
| **Writing** | **LaTeX + Copilot** | Auto-completes complex equations. |
| **Coding** | **Cursor** | Implements research papers into code fast. |
