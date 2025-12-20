# Prompt Engineering Best Practices | 提示词工程最佳实践

> **The Golden Rule**
> Garbage In, Garbage Out.
> If you give the AI a vague request, you get a vague answer.
> **黄金法则**
> 垃圾进，垃圾出。
> 如果你给 AI 一个模糊的请求，你就会得到一个模糊的答案。

## 1. The "CO-STAR" Framework | CO-STAR 框架

A proven formula to write perfect prompts every time.
一个经过验证的完美提示词公式。

1.  **C (Context)**: What is the background? (我是谁？我在做什么？)
2.  **O (Objective)**: What is the task? (你要做什么？)
3.  **S (Style)**: Who should the AI act like? (像鲁迅？像乔布斯？)
4.  **T (Tone)**: What is the emotional tone? (正式？幽默？激进？)
5.  **A (Audience)**: Who is reading this? (小学生？博士？)
6.  **R (Response)**: What is the output format? (JSON? Markdown? Table?)

## 2. Before & After: Real Examples | 实战对比

### Scenario 1: Coding (写代码)

❌ **Bad Prompt**:
> "Write a Python script to scrape a website."
> (Result: Generic code, probably breaks, no error handling.)

✅ **Good Prompt**:
> **Context**: I am building a data pipeline to track prices on an e-commerce site.
> **Objective**: Write a Python script using `BeautifulSoup` and `requests`.
> **Constraints**:
> - Handle HTTP 403/404 errors with retries.
> - Add comments explaining each step.
> - Do NOT use Selenium (I need speed).
> **Format**: Return a single code block with a `main()` function.

### Scenario 2: Writing Email (写邮件)

❌ **Bad Prompt**:
> "Write an email to my boss asking for a raise."
> (Result: Generic, maybe too aggressive or too weak.)

✅ **Good Prompt**:
> **Context**: I have successfully led the "Project X" which saved the company $50k last quarter.
> **Objective**: Write an email to my manager requesting a salary review.
> **Tone**: Professional, confident, but polite. Not demanding.
> **Audience**: My manager is busy and likes concise emails.
> **Format**: Subject line + Body. Keep it under 200 words.

## 3. The "Mega-Prompt" Template | “超级提示词”模板

Copy and paste this structure for complex tasks.
复制粘贴此结构用于复杂任务。

```markdown
# Role
You are an expert [Role Name], specializing in [Skill 1] and [Skill 2].

# Context
I am currently [Current Situation]. My goal is to [Goal].

# Task
Please [Action Verb] a [Output Type] that [Specific Requirement].

# Constraints
- The output must be in [Language].
- Do not use [Forbidden Thing].
- Ensure [Quality Standard].

# Output Format
Please provide the result in [Format, e.g., Markdown Table, JSON].

# Example (Few-Shot)
Input: [Example Input]
Output: [Example Output]
```

## 4. Pro Tip: "Iterative Refinement" | 专家技巧：“迭代精炼”

Don't expect perfection on the first try. Treat the AI like an intern.
别指望一次就完美。把 AI 当作实习生。

1.  **Prompt**: "Write code."
2.  **AI**: (Gives buggy code).
3.  **Refine**: "Good, but it fails on large files. Optimize it for memory."
4.  **AI**: (Gives better code).
5.  **Refine**: "Now add docstrings."

## 5. Practice Mission: The Socrates Challenge | 练习任务：苏格拉底挑战

**Objective (目标)**: Write a prompt that forces the AI to *teach* you, not just *tell* you.
**目标**：编写一个提示词，强迫 AI *教会*你，而不仅仅是*告诉*你答案。

**Scenario (场景)**:
You are a student trying to understand "Quantum Physics" (or any topic you like).
If the AI just gives you a lecture, you will fall asleep. You want the AI to act like **Socrates** (苏格拉底).
你是想学习“量子物理”（或任何你喜欢的主题）的学生。
如果 AI 只是给你讲课，你会睡着。你希望 AI 扮演**苏格拉底**。

**Task (任务)**:
Write a prompt using the **CO-STAR** framework.
1.  **Role**: Socrates (The philosopher who asks questions).
2.  **Objective**: Help me understand [Topic] by asking me guiding questions.
3.  **Constraint**: Do NOT give me the answer directly. Wait for my response after each question.

**Try it on ChatGPT/Claude**:
> *Paste your prompt and see if it works.*

> **Example Answer (参考答案)**:
> ```markdown
> # Role
> You are Socrates, the wise philosopher.
>
> # Task
> I want to understand "How Gravity Works".
> Instead of explaining it to me, ask me a series of simple questions to help me derive the answer myself.
>
> # Constraints
> - Ask only ONE question at a time.
> - Wait for my answer before moving on.
> - If I am wrong, gently guide me with a hint, but don't give the answer.
> - Use a curious and humble tone.
> ```
