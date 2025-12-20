# Global AI Hardware Landscape | 全球 AI 硬件格局

The competition in the global AI hardware field is intense, representing a struggle for dominance in the core infrastructure of the future intelligent era. This document summarizes the top 10 global AI hardware companies and compares the landscape between China and the US.

当前全球 AI 硬件领域的竞争非常激烈，这背后是各国对未来智能时代核心基础设施主导权的争夺。本文档汇总了全球顶级的 10 家 AI 硬件公司及其核心产品与优势，并对比了中美两国的产业格局。

## 1. Top 10 Global AI Hardware Companies | 全球十大 AI 硬件公司

| Company Name (公司名称) | Country (国别) | Core Products (核心产品示例) | Core Advantages & Features (核心优势与特点) |
| --- | --- | --- | --- |
| **NVIDIA (英伟达)** | USA | H100, B200, Blackwell Architecture | Absolute leader in global AI training. Its GPU and CUDA software ecosystem constitute the current industry standard for AI development. Extremely high barriers in hardware performance and software ecosystem. <br> 全球 AI 训练领域绝对主导者。其 GPU 和 CUDA 软件生态构成了当前 AI 开发的行业标准，硬件性能和软件生态壁垒极高。 |
| **AMD** | USA | Instinct MI300 Series, MI355X | Strong competitor in HPC. Its Instinct MI series performs comparably to NVIDIA's flagships in specific benchmarks. A key alternative to NVIDIA. <br> 高性能计算领域的强力竞争者。其 Instinct MI 系列加速卡在特定基准测试中表现可与英伟达旗舰产品媲美，是除英伟达外的重要选择。 |
| **Google (Alphabet)** | USA | TPU v5e, TPU v6e (Trillium) | Focus on Tensor Processing Units (TPU). Deeply integrated into Google Cloud, providing efficient inference and training power for its core businesses and cloud users. <br> 专注张量处理单元 (TPU)。TPU 深度集成于谷歌云服务，为自身搜索、翻译等核心业务及云用户提供高效能推理和训练算力。 |
| **AWS** | USA | Trainium, Inferentia | In-house chips for cloud-native workloads. Trainium for training, Inferentia for inference, aiming to optimize performance-cost efficiency for its massive cloud infrastructure. <br> 为云原生工作负载自研芯片。Trainium 用于训练，Inferentia 用于推理，旨在优化其庞大云基础设施的性能成本效益。 |
| **Intel (英特尔)** | USA | Gaudi 3, Xeon 6 | Entering AI acceleration via x86 ecosystem. Gaudi 3 directly targets NVIDIA H100; Xeon processors remain important for CPU inference workloads. <br> 凭借 x86 生态进军 AI 加速市场。Gaudi 3 加速器直接对标英伟达 H100，其至强处理器在 CPU 推理负载中仍占重要地位。 |
| **Cerebras Systems** | USA | WSE-3 (Wafer Scale Engine) | Breakthrough "Wafer-Scale" design. WSE-3 features massive chip area and 900k AI cores, designed for massive model training with extreme compute density. <br> 采用突破性的“晶圆级”芯片设计。WSE-3 拥有巨大芯片面积和极多计算核心（90万 AI 核心），专为大规模 AI 模型训练设计，追求极致算力密度。 |
| **Qualcomm (高通)** | USA | Cloud AI 100, Snapdragon Series | Advantage in power efficiency and edge AI. Cloud AI 100 excels in power-efficiency tests; Snapdragon is strong in terminal-side AI inference. <br> 在能效和边缘侧 AI 推理具优势。其 Cloud AI 100 芯片在部分能效比测试中表现突出，移动平台 Snapdragon 在终端侧 AI 推理领域实力强劲。 |
| **Huawei (华为)** | China | Ascend (昇腾) 910B | Leader in China's AI hardware ecosystem. Ascend 910B represents China's autonomous high-performance AI accelerator, deeply integrated with domestic AI frameworks. <br> 中国 AI 硬件生态的领军者。昇腾 910B 是中国目前自主化高性能 AI 加速器的代表，与国内 AI 框架和应用生态深度整合。 |
| **Cambricon (寒武纪)** | China | Siyuan 370, 590 | Key player in China's AI chip industry. Focuses on cloud and edge AI chips, utilizing technologies like chiplets. <br> 中国本土早期和重要的 AI 芯片设计公司。专注于云端和边缘端 AI 芯片，如思元 370 采用 chiplet 等技术，是中国 AI 芯片产业的关键参与者。 |
| **T-Head (阿里平头哥)** | China | Hanguang 800 | Alibaba's chip unit, focusing on AI inference. Hanguang 800 is a high-performance inference chip for data centers. <br> 阿里巴巴旗下芯片公司，聚焦 AI 推理场景。其含光 800 是面向数据中心的高性能 AI 推理芯片，注重在特定场景下的性能与能效。 |

## 2. China-US AI Hardware Landscape Comparison | 中美 AI 硬件产业全景对比

### 2.1 Compute Foundation & Peak Performance | 算力基础与尖端性能
- **USA**: Significant advantage in high-end compute reserves. Top tech companies hold ~12.4 million equivalent H100 GPUs. Leading in single-chip performance (e.g., Blackwell).
  <br> **美国**：在高端算力储备上优势显著。头部科技公司掌握的等效 H100 GPU 数量约 1240 万块。在单芯片性能上（如 Blackwell 架构）目前仍领先。
- **China**: Total high-end GPU count estimated under 500k. Facing challenges in speed and cost for training frontier models.
  <br> **中国**：全行业高端 GPU 总量预计不足 50 万块。在训练最前沿大模型时，速度和成本上面临挑战。

### 2.2 Software & Ecosystem | 软件与开发生态系统
- **USA**: NVIDIA CUDA is the de facto global standard, creating a strong ecosystem barrier.
  <br> **美国**：英伟达 CUDA 是全球 AI 开发的事实标准，形成了强大的生态黏性。
- **China**: Building autonomous software stacks (e.g., Huawei CANN), but gaps remain in ecosystem maturity and developer community size.
  <br> **中国**：正在努力构建自主软件栈（如华为 CANN），但生态完善度、开发者社区规模与美国相比仍有差距。

### 2.3 Business Model & Focus | 商业模式与产业聚焦
- **USA**: Market-driven, diverse (giants + startups like Groq/Cerebras), mature high-margin subscription models.
  <br> **美国**：市场驱动，多元化（巨头+初创公司），高毛利的订阅制较为成熟。
- **China**: State-strategy guided, focused on autonomy and controllability. Early stage relies heavily on government projects; challenges in product standardization.
  <br> **中国**：国家战略主导，旨在实现技术自主可控。早期较多依赖政府订单，在推动产品标准化方面面临挑战。

### 2.4 Development Path | 发展路径
- **USA**: Driven by private sector innovation and market forces.
  <br> **美国**：依靠市场力量和私营部门创新驱动。
- **China**: Whole-nation system layout (e.g., "East Data West Computing"). Exploring advanced packaging (Chiplet) to improve competitiveness under manufacturing constraints.
  <br> **中国**：体现国家意志和整体布局（如“东数西算”）。积极探索通过 Chiplet 等先进封装技术提升综合竞争力。

## 3. Summary | 总结

The US leads in cutting-edge chip design, software ecosystems, and original innovation. China possesses unique advantages in national strategic support, vast application scenarios, and determination for technological autonomy. Future competition will be systemic, spanning hardware, software, and policy.

总的来说，美国在尖端芯片设计、软件生态和原始创新能力上占据领先地位。中国在国家战略支持、应用场景广度及自主决心上具备优势。未来的竞争将是全链条、系统性的竞争。

## 4. Practice Mission: Build Your AI Rig | 练习任务：组装你的 AI 战机

**Objective (目标)**: Estimate the hardware requirements for training/running an AI model.
**目标**：估算训练/运行一个 AI 模型所需的硬件配置。

**Scenario (场景)**:
You are an AI Engineer at a startup. Your boss wants to run a **Llama-3-8B** model locally for the company chatbot.
你是一家初创公司的 AI 工程师。你的老板想在本地运行一个 **Llama-3-8B** 模型作为公司聊天机器人。

**Data (数据)**:
- **Model Size**: 8 Billion Parameters (8B).
- **Precision (精度)**:
    - **FP16 (Half Precision)**: 2 bytes per parameter.
    - **INT4 (Quantized)**: 0.5 bytes per parameter.
- **Context Window Overhead**: Needs extra ~20% memory for KV Cache.

**Task (任务)**:
1.  Calculate VRAM needed for **FP16** (Standard).
    *   Formula: $8 \times 2 \text{ GB} \times 1.2 = ?$
2.  Calculate VRAM needed for **INT4** (Compressed).
    *   Formula: $8 \times 0.5 \text{ GB} \times 1.2 = ?$
3.  **Decision**: Which GPU should you buy?
    *   **Option A**: NVIDIA RTX 4060 (8GB VRAM)
    *   **Option B**: NVIDIA RTX 3090 (24GB VRAM)
    *   **Option C**: NVIDIA A100 (80GB VRAM)

> **Answer Key (答案)**:
> 1.  **FP16**: $16 \text{ GB} \times 1.2 \approx 19.2 \text{ GB}$.
> 2.  **INT4**: $4 \text{ GB} \times 1.2 \approx 4.8 \text{ GB}$.
> 3.  **Decision**:
>     *   If you run **INT4** (Quantized), the **RTX 4060 (8GB)** is enough! (Budget friendly).
>     *   If you need **FP16** (Full quality), you need the **RTX 3090 (24GB)**.
>     *   The **A100** is overkill (too expensive) for just running an 8B model.
