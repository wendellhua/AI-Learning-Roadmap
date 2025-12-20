# 10.2 AI编程专家之路 (AI Coding Mastery)

## 1. 概览 (Overview)

AI编程不仅仅是使用代码补全工具，而是关于如何与AI协作，从“手写代码”转变为“设计逻辑”和“审查代码”。本节将带你从AI编程的初学者进阶为专家。

AI coding is not just about using code completion tools; it's about collaborating with AI, shifting from "hand-writing code" to "designing logic" and "reviewing code." This section will take you from a beginner to an expert in AI coding.

## 2. 初级：工具使用者 (Junior: Tool User)

在这个阶段，你的目标是熟练使用AI工具来提高编码速度和解决简单问题。

At this stage, your goal is to proficiently use AI tools to speed up coding and solve simple problems.

### 2.1 核心工具 (Core Tools)
*   **Cursor (Tab)**: 利用Tab键进行智能代码补全。
*   **GitHub Copilot**: 实时代码建议。

### 2.2 关键能力 (Key Skills)
*   **代码补全 (Code Completion)**: 学会通过注释引导AI生成函数体。
*   **代码解释 (Code Explanation)**: 选中看不懂的代码，问AI "Explain this"。
*   **Bug修复 (Bug Fixing)**: 将报错信息粘贴给AI，让其提供修复建议。

### 2.3 常用Prompt
*   "Fix the bug in this function."
*   "Add comments to this code."
*   "Write a unit test for this function."

## 3. 中级：项目开发者 (Intermediate: Project Developer)

在这个阶段，你开始利用AI处理更复杂的任务，如整个模块的开发、重构和文档编写。

At this stage, you start using AI for more complex tasks, such as module development, refactoring, and documentation.

### 3.1 核心工具 (Core Tools)
*   **Cursor (Composer)**: 多文件编辑和项目级生成。
*   **MetaGPT**: 多智能体协作框架，生成PRD和设计文档。

### 3.2 关键能力 (Key Skills)
*   **CO-STAR 原则**: 使用结构化的Prompt来描述需求（Context, Objective, Style, Tone, Audience, Response）。
*   **上下文管理 (Context Management)**: 学会向AI提供必要的文件（`@Files`）作为上下文，避免“幻觉”。
*   **迭代开发 (Iterative Development)**: 不要试图一次生成完美代码，而是通过“生成 -> 运行 -> 反馈报错 -> 修正”的循环来开发。

### 3.3 实战案例：智能工作台 (Case Study: Smart Workbench)
参考 `CodeBuddy` 的案例，将大需求拆解为小任务：
1.  **数据库设计**: "Create a SQLite schema for a task management app."
2.  **API开发**: "Generate CRUD endpoints using FastAPI."
3.  **前端开发**: "Build a Streamlit dashboard to display tasks."

## 4. 高级：架构师与工具创造者 (Senior: Architect & Tool Creator)

在这个阶段，你不再局限于现有的AI工具，而是开始构建自己的AI工作流和Agent。

At this stage, you are no longer limited to existing AI tools but start building your own AI workflows and Agents.

### 4.1 核心工具 (Core Tools)
*   **MCP Servers**: 连接本地资源（文件、数据库）和AI模型。
*   **LangChain / LangGraph**: 构建自定义的AI Agent。

### 4.2 关键能力 (Key Skills)
*   **OpenSpec 规范驱动开发**: 先让AI生成详细的设计文档（Spec），经人工审查通过后，再让AI生成代码。
*   **Prompt Engineering for Code**: 编写系统级提示词（System Prompts），定制AI的编码风格和行为规范。
*   **架构设计 (Architecture Design)**: 利用AI辅助进行系统设计权衡（Trade-offs），如选择SQL还是NoSQL。

### 4.3 进阶Prompt示例 (Advanced Prompt Example)
> "Act as a System Architect. Design a scalable microservices architecture for an e-commerce platform.
>
> **Requirements**:
> - High availability (99.99%).
> - Handle 10k QPS.
> - Use Go for backend and React for frontend.
>
> **Deliverables**:
> 1. Architecture Diagram (Mermaid).
> 2. API Specification (OpenAPI).
> 3. Database Schema (PostgreSQL).
> 4. Technology Stack justification."

## 5. 总结 (Summary)

从初级到高级，核心的转变在于：**从关注“怎么写代码”转变为关注“要做什么”和“为什么这么做”。** AI是你最强大的执行者，而你必须成为最优秀的指挥官。

From junior to senior, the core shift is: **moving from focusing on "how to write code" to focusing on "what to do" and "why to do it."** AI is your most powerful executor, and you must become the best commander.
