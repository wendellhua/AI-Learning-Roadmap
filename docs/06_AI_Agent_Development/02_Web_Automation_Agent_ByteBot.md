# Web Automation Agent: ByteBot | Web 智能体实战

ByteBot represents a cutting-edge approach to web automation: **"Driving browsers with Natural Language"**. It uses LLMs to understand web structures, eliminating the pain of writing complex CSS selectors.

ByteBot 代表了 Web 自动化的前沿方向：**“用自然语言驱动浏览器”**。它利用大模型理解网页结构，消除了编写复杂 CSS 选择器的痛苦。

## 1. Core Value | 核心价值

- **Zero-Code / Low-Code**: No need to inspect elements (F12). Just say "Click the signup button".
  <br> **零代码/低代码**：无需检查元素。只需说“点击注册按钮”。
- **Self-Healing (自愈能力)**: If the website layout changes but the "Submit" button is still there, the script won't break.
  <br> **自愈能力**：即使网页布局改变，只要逻辑元素还在，脚本就不会挂。
- **Enhancement**: It enhances Playwright/Puppeteer, not replaces them.
  <br> **增强**：它是对 Playwright/Puppeteer 的增强，而非替代。

## 2. Three Core Scenarios | 三大核心场景

### 2.1 Rapid Prototyping (快速原型开发)
- **Use Case**: Simple crawlers or testing an idea.
- **Code**:
  ```javascript
  await bytebot.navigate("https://amazon.com");
  await bytebot.act("Search for 'iPhone 15 pro'");
  const price = await bytebot.extract("Get the price of the first item");
  ```
- **Benefit**: Speed. No need to find element IDs.
  <br> **价值**：速度。无需查找元素 ID。

### 💻 Python Implementation Example | Python 实现示例

Here is how you might implement a simple version of this using `playwright` and `openai`:
以下是如何使用 `playwright` 和 `openai` 实现其简单版本的示例：

```python
import asyncio
from playwright.async_api import async_playwright
from openai import OpenAI

client = OpenAI()

async def get_element_selector(html_content, description):
    """
    Ask LLM to find the CSS selector for a described element.
    让 LLM 找出描述元素的 CSS 选择器。
    """
    prompt = f"""
    HTML: {html_content[:2000]}... (truncated)
    Task: Find the CSS selector for: "{description}"
    Return ONLY the selector string.
    """
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content.strip()

async def run_agent():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=False)
        page = await browser.new_page()
        await page.goto("https://www.amazon.com")
        
        # 1. Get page content (simplified) | 获取页面内容（简化版）
        # In reality, you'd want to clean the HTML or use accessibility tree
        # 实际上，你需要清洗 HTML 或使用无障碍树
        content = await page.content()
        
        # 2. Ask AI for the search box selector | 询问 AI 搜索框的选择器
        search_selector = await get_element_selector(content, "The main search input box")
        print(f"Found selector: {search_selector}")
        
        # 3. Act | 执行动作
        await page.fill(search_selector, "iPhone 15 Pro")
        await page.keyboard.press("Enter")
        
        await asyncio.sleep(5) # Wait for results | 等待结果
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_agent())
```

### 2.2 Enhanced E2E Testing (增强 E2E 测试)
- **Use Case**: QA Engineers maintaining fragile test scripts.
- **Strategy**:
  - Use **Native Selectors** for static, stable elements (Login box).
  - Use **ByteBot (AI)** for dynamic, complex elements (Recommendation lists).
  <br> **策略**：静态元素用原生选择器（快），动态复杂元素用 ByteBot（稳）。

### 2.3 Intelligent Web Agents (构建智能 Web Agent)
- **Use Case**: Complex tasks like "Book a flight" or "File taxes".
- **Logic**: Combine loops and logic.
  - "If page says 'Out of Stock', do Plan B; else, Buy."
  <br> **逻辑**：结合循环与判断。“如果显示缺货，执行 B 计划；否则下单。”

## 3. Best Practices | 最佳实践

1.  **Prompt Engineering for UI**:
    - ❌ "Click that."
    - ✅ "Find the primary button containing text 'Sign Up' and click it."
    - **Tip**: Treat ByteBot like a new intern. Be specific.
    <br> **提示词工程**：把 ByteBot 当作实习生，指令要具体。
2.  **Performance Optimization**:
    - Don't use AI for everything. It has latency and cost.
    - **Hybrid Mode**: Use native code for page loads/URL jumps; use AI for core logic.
    <br> **性能优化**：不要全盘 AI 化。混合使用原生代码和 AI。
3.  **Handle Hallucinations**:
    - Always **Assert**. After an action, ask AI to verify the result.
    - `const success = await bytebot.extract("Does the page show 'Success'?");`
    <br> **处理幻觉**：务必进行断言验证。
