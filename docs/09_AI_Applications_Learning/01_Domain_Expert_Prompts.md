# 🎭 Domain Expert Prompts | 打造领域专家提示词

> 🎯 **Learning Objective | 学习目标**：Master the art of crafting prompts that turn AI into domain experts | 掌握让AI变身领域专家的提示词技艺

---

## 🌟 What is Domain Expert Prompting? | 什么是领域专家提示词？

Imagine you could hire any expert instantly:
想象你可以即时聘请任何专家：

- 🏥 **Medical Consultant | 医疗顾问** - For health-related questions | 解答健康问题
- 💼 **Business Strategist | 商业策略师** - For career decisions | 职业决策
- 💻 **Senior Developer | 资深开发者** - For coding challenges | 编程挑战
- 📝 **Editor | 编辑专家** - For writing improvement | 写作提升

**With the right prompt, AI becomes that expert!**
**用对了提示词，AI就变成那个专家！**

---

## 📋 The Expert Prompt Framework | 专家提示词框架

### CO-STAR Method | CO-STAR方法

| Element | Description | Example |
|---------|-------------|---------|
| 元素 | 描述 | 示例 |
| **C**ontext | Background information | "I'm a QA engineer..." |
| **C**上下文 | 背景信息 | "我是一名测试工程师..." |
| **O**bjective | What you want to achieve | "Help me write test cases" |
| **O**目标 | 你想达成什么 | "帮我编写测试用例" |
| **S**tyle | How AI should respond | "Be detailed and structured" |
| **S**风格 | AI应如何回应 | "详细且结构化" |
| **T**one | The voice/personality | "Professional but friendly" |
| **T**语气 | 语气/人设 | "专业但友好" |
| **A**udience | Who will read the output | "Junior developers" |
| **A**受众 | 谁会阅读输出 | "初级开发者" |
| **R**esponse | Output format | "Markdown with code blocks" |
| **R**响应 | 输出格式 | "带代码块的Markdown" |

---

## 🎯 Practical Examples | 实战示例

### Example 1: Programming Expert | 示例1：编程专家

```xml
<role>
You are a senior Python developer with 10+ years of experience.
你是一位拥有10年以上经验的资深Python开发者。
Expertise: Clean code, design patterns, performance optimization.
专长：整洁代码、设计模式、性能优化。
</role>

<constraints>
- Always follow PEP 8 standards
- 始终遵循PEP 8标准
- Add type hints to all functions
- 为所有函数添加类型提示
- Include docstrings and comments
- 包含文档字符串和注释
</constraints>

<output_format>
- Brief explanation first
- 先简要说明
- Then complete code
- 然后完整代码
- Finally, usage examples
- 最后使用示例
</output_format>
```

### Example 2: Learning Tutor | 示例2：学习导师

```xml
<role>
You are a patient and experienced teacher.
你是一位耐心且经验丰富的老师。
Skilled at explaining complex concepts simply.
擅长用简单的方式解释复杂概念。
</role>

<teaching_style>
- Use analogies from daily life
- 使用生活中的类比
- Break down into small steps
- 分解为小步骤
- Check understanding frequently
- 经常检查理解程度
- Encourage questions
- 鼓励提问
</teaching_style>

<audience>
Student with basic knowledge, learning [TOPIC].
有基础知识的学生，正在学习[主题]。
</audience>
```

### Example 3: Research Assistant | 示例3：研究助手

```xml
<role>
You are an academic research assistant.
你是一位学术研究助手。
Expert in literature review and synthesis.
专长于文献综述和综合分析。
</role>

<task>
When given a research topic:
当给定一个研究主题时：
1. Identify key concepts and terms
   识别关键概念和术语
2. Suggest search strategies
   建议搜索策略
3. Summarize findings objectively
   客观总结发现
4. Point out knowledge gaps
   指出知识空白
</task>

<output_rules>
- Cite sources when possible
- 尽可能引用来源
- Distinguish facts from opinions
- 区分事实和观点
- Acknowledge limitations
- 承认局限性
</output_rules>
```

---

## 🏗️ Building Your Prompt Library | 构建你的提示词库

### Step 1: Start with Templates | 从模板开始

```
📁 My Prompt Library
├── 💻 Programming/
│   ├── code_reviewer.md
│   ├── debugger.md
│   └── architect.md
├── 📝 Writing/
│   ├── editor.md
│   ├── translator.md
│   └── summarizer.md
├── 🎓 Learning/
│   ├── tutor.md
│   ├── explainer.md
│   └── quiz_master.md
└── 🔬 Research/
    ├── literature_reviewer.md
    ├── data_analyst.md
    └── brainstormer.md
```

### Step 2: Iterate and Improve | 迭代优化

```
Initial Prompt → Test → Analyze Output → Refine → Test Again
初始提示词   → 测试 → 分析输出     → 优化  → 再次测试
```

**Key Questions for Improvement | 优化关键问题：**
- Did AI understand the context? | AI理解了上下文吗？
- Was the output format correct? | 输出格式正确吗？
- Did it miss any important aspects? | 是否遗漏了重要方面？
- Was it too verbose or too brief? | 是否太冗长或太简短？

---

## 🔥 Advanced Techniques | 进阶技巧

### 1. Chain of Thought (CoT) | 思维链

Force AI to think step-by-step:
强制AI逐步思考：

```xml
<thinking>
Before answering, please:
回答前，请：
1. Analyze the problem components
   分析问题组成
2. Consider multiple approaches
   考虑多种方法
3. Evaluate pros and cons
   评估利弊
4. Then provide your recommendation
   然后提供你的建议
</thinking>
```

### 2. Few-Shot Learning | 少样本学习

Provide examples to guide output:
提供示例来引导输出：

```
Example 1:
Input: "def calc(a,b): return a+b"
Output: "def calculate_sum(num1: int, num2: int) -> int:
    '''Calculate the sum of two numbers.'''
    return num1 + num2"

Example 2:
Input: "def f(x): return x*x"
Output: "def calculate_square(number: float) -> float:
    '''Calculate the square of a number.'''
    return number * number"

Now apply this to: [YOUR CODE]
现在应用于：[你的代码]
```

### 3. Self-Consistency | 自我一致性

Ask AI to verify its own answers:
让AI验证自己的答案：

```xml
<verification>
After providing your answer:
提供答案后：
1. Re-read the original question
   重读原始问题
2. Check if your answer fully addresses it
   检查答案是否完全解决了问题
3. Identify any assumptions made
   识别做出的任何假设
4. Rate your confidence (1-10)
   给出你的信心评分（1-10）
</verification>
```

---

## 📚 Real-World Prompt Collection | 实战提示词收藏

### For Code Review | 代码审查

```
You are a strict but helpful code reviewer.
Review this code for:
- Security vulnerabilities
- Performance issues
- Code style violations
- Potential bugs
- Improvement suggestions

For each issue found, explain WHY it's a problem 
and provide a concrete fix.
```

### For Document Summarization | 文档总结

```
Summarize the following document using this structure:
1. **Key Points** (3-5 bullet points)
2. **Main Arguments** (brief paragraph)
3. **Conclusions** (1-2 sentences)
4. **Questions Raised** (for further exploration)

Keep the summary under 300 words.
Preserve technical accuracy.
```

### For Learning New Topics | 学习新主题

```
Explain [TOPIC] to me as if I'm a smart 12-year-old.
- Use simple analogies
- Avoid jargon (or explain it)
- Give real-world examples
- End with a small quiz to check my understanding

After your explanation, ask me if I have questions.
```

---

## ⏱️ Practice Exercises | 练习任务

1. **Create Your First Expert** | 创建你的第一个专家
   - Pick a domain you need help with
   - Write a CO-STAR prompt
   - Test it with 3 different questions
   - Iterate to improve

2. **Build a Prompt Library** | 构建提示词库
   - Create 5 prompts for your daily work
   - Organize them in a system
   - Share with colleagues for feedback

3. **Advanced Challenge** | 进阶挑战
   - Combine multiple techniques (CoT + Few-shot)
   - Create a self-improving prompt that learns from feedback

---

> 💡 **Pro Tip | 小贴士**：The best prompts are like good documentation - clear, specific, and with examples. Treat prompt writing as a skill to be practiced!
> 
> 最好的提示词就像好的文档——清晰、具体、有示例。把提示词写作当作一门需要练习的技能！

---

## 📖 Recommended Resources | 推荐资源

- [System Prompts Collection](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) - Learn from top AI products | 从顶级AI产品学习
- [Awesome Prompts](https://github.com/f/awesome-chatgpt-prompts) - Community-curated prompts | 社区精选提示词
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook) - Official best practices | 官方最佳实践
