# Game AI Agent: G-Agent | 游戏智能体框架

G-Agent is a cross-terminal game automation testing framework based on **Vision-Language Models (VLM)** and **AI Agent** concepts.

G-Agent 是一个基于**视觉大模型 (VLM)** 和 **AI 智能体**理念的跨终端游戏自动化测试框架方案。

## 1. The Problem | 问题背景

Traditional game automation relies on **Template Matching** (finding a specific image on screen) or accessing internal game engine object trees.
传统游戏自动化依赖**图像模板匹配**或访问游戏引擎内部对象树。

- **Issues**:
  - **High Maintenance**: If the UI icon changes slightly, the script fails.
    <br> **维护成本高**：UI 图标微调，脚本即失效。
  - **Low Generalization**: Scripts for one game level rarely work for another.
    <br> **泛化能力弱**：关卡间的脚本难以复用。

## 2. The Solution: VLM + Agent | 解决方案

G-Agent aims to **"See, Think, and Act like a Human Player"**.
G-Agent 旨在实现**“像人类玩家一样看懂画面、思考策略、操作游戏”**。

### 2.1 See (看)
- Uses **VLM (Vision-Language Models)** (like GPT-4o, Gemini) to understand the game screen semantically.
- Instead of matching pixels, it understands "This is a 'Start Game' button" or "The character is low on health".
  <br> 利用 VLM 语义化理解游戏画面。它能理解“这是开始按钮”或“角色血量低”，而非仅仅匹配像素。

### 2.2 Think (想)
- The Agent analyzes the visual information and current game state to decide the next move.
- "Health is low -> I need to find a potion."
  <br> 智能体分析视觉信息和当前状态，决策下一步行动。“血量低 -> 我需要找药水。”

### 2.3 Act (做)
- Translates the decision into coordinate clicks or swipes on the screen.
  <br> 将决策转化为屏幕上的点击或滑动操作。

## 3. Value Proposition | 核心价值

- **Robustness**: Unaffected by minor UI changes or resolution differences.
  <br> **鲁棒性**：不受 UI 微调或分辨率差异影响。
- **Intelligence**: Can handle complex logic that traditional scripts cannot (e.g., exploring a map).
  <br> **智能性**：能处理传统脚本无法处理的复杂逻辑（如地图探索）。
