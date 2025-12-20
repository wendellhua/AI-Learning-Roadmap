# 10.1 领域专家提示词 (Domain Expert Prompts)

## 1. 核心理念 (Core Concepts)

打造领域专家级提示词（Prompt Engineering）不仅仅是“提问”，更是一门“编程”艺术。其核心在于通过结构化的指令，将AI的思维引导至特定的专业领域和逻辑路径上。

Crafting domain expert prompts is not just about "asking questions," but an art of "programming." The core lies in using structured instructions to guide AI's thinking into specific professional domains and logical paths.

### 1.1 结构化提示词 (Structured Prompts)
像写代码一样写Prompt。使用清晰的分隔符（如 `###`, `---`）和标签（如XML Tags）来组织内容，使AI更容易解析指令的意图。

Write prompts like code. Use clear separators (e.g., `###`, `---`) and tags (e.g., XML Tags) to organize content, making it easier for AI to parse the intent of instructions.

### 1.2 角色扮演 (Role Playing)
通过设定特定的角色（Persona），激活AI在特定领域的潜在知识。例如：“你是一位拥有10年经验的Python架构师”比单纯的“写一段Python代码”效果要好得多。

Activate AI's latent knowledge in a specific field by setting a specific persona. For example, "You are a Python architect with 10 years of experience" works much better than a simple "Write some Python code."

### 1.3 思维链 (Chain of Thought, CoT)
要求AI在给出最终答案之前，先展示其思考过程。这能显著提高复杂任务的准确性。

Require AI to show its thinking process before giving the final answer. This significantly improves accuracy for complex tasks.

## 2. 常用逻辑框架 (Common Logical Frameworks)

以下是几个经过验证的高效Prompt框架：

Here are several proven and efficient Prompt frameworks:

### 2.1 CRISPE 框架
适用于需要深度定制和复杂背景的任务。

*   **C (Capacity)**: 能力设定（如“你是一位资深数据分析师”）。
*   **R (Role)**: 角色定位（同上，强调职责）。
*   **I (Insight)**: 洞察/背景（提供任务的背景信息）。
*   **S (Statement)**: 任务声明（明确要做什么）。
*   **P (Personality)**: 个性风格（如“专业、简洁、幽默”）。
*   **E (Experiment)**: 实验/示例（提供具体的输入输出示例）。

### 2.2 TAG 框架
适用于快速、明确的任务。

*   **T (Target)**: 目标受众（如“面向初学者”）。
*   **A (Action)**: 行动指令（如“解释量子力学”）。
*   **G (Goals)**: 最终目标（如“让读者能听懂并产生兴趣”）。

### 2.3 SPAR 框架
适用于解决问题或复盘场景。

*   **S (Situation)**: 情境描述。
*   **P (Problem)**: 面临的问题。
*   **A (Action)**: 采取的行动。
*   **R (Result)**: 期望的结果。

## 3. 实战技巧：XML Tagging (Practical Skills: XML Tagging)

目前最先进的Prompt写法是利用XML标签来组织内容，这在Claude和GPT-4模型中表现尤为出色。

The most advanced prompt writing technique currently is using XML tags to organize content, which performs exceptionally well in Claude and GPT-4 models.

### 3.1 模板示例 (Template Example)

```xml
<role>
    You are an expert Technical Writer specializing in AI documentation.
</role>

<context>
    We are writing a guide for beginners on how to use Cursor editor.
    The audience has basic programming knowledge but is new to AI tools.
</context>

<task>
    Write a tutorial section about "Code Generation".
</task>

<constraints>
    - Use simple language.
    - Include code snippets.
    - Keep paragraphs short (max 3 sentences).
    - Use Markdown formatting.
</constraints>

<format>
    ## Title
    ### Concept
    [Explanation]
    ### Example
    [Code Block]
</format>
```

## 4. 专家级Prompt库 (Expert Prompt Library)

### 4.1 代码生成 (Code Generation)
> **Prompt**:
> "You are a Senior Software Engineer. I need you to implement a [Function Name] in [Language].
>
> **Requirements**:
> 1. Follow [Style Guide, e.g., PEP 8].
> 2. Include type hints and docstrings.
> 3. Handle edge cases: [List specific cases].
> 4. Optimize for [Performance/Readability].
>
> **Input**: [Describe input data]
> **Output**: [Describe expected output]"

### 4.2 技术文章写作 (Technical Writing)
> **Prompt**:
> "Act as a Tech Blogger. Write a blog post about [Topic].
>
> **Structure**:
> 1. **Hook**: Start with a compelling problem or statistic.
> 2. **Solution**: Introduce the technology.
> 3. **Deep Dive**: Explain how it works (use analogies).
> 4. **Tutorial**: Step-by-step guide with code.
> 5. **Conclusion**: Summary and future outlook.
>
> **Tone**: Professional yet accessible. Avoid jargon where possible."

## 5. 进阶学习资源 (Advanced Learning Resources)

*   **System Prompts**: 研究顶尖AI工具（如Cursor, v0.dev）的系统提示词，学习它们是如何约束AI行为的。
*   **Prompt Engineering Guide**: 持续关注最新的Prompt工程论文和指南。
