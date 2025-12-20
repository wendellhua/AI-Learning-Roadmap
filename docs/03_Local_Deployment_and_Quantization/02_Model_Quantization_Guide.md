# Model Quantization Guide | 模型量化原理与实操

> **The Analogy: Image Compression**
> - **FP16 (Original Model)** is like a raw **BMP/PNG** image. Perfect quality, huge file size.
> - **Int4 (Quantized Model)** is like a **JPEG** image. Much smaller, slightly lower quality, but looks almost the same to the human eye.
> **类比：图片压缩**
> - **FP16（原始模型）** 就像原始的 **BMP/PNG** 图片。画质完美，体积巨大。
> - **Int4（量化模型）** 就像 **JPEG** 图片。体积小得多，画质稍差，但肉眼几乎看不出区别。

## 1. Why Quantize? | 为什么要量化？

- **Size**: A 7B model in FP16 is **14GB**. In Int4, it's **4GB**.
- **Speed**: Smaller models load faster and calculate faster.
- **Accessibility**: Allows running huge models on consumer hardware.

## 2. Quantization Formats | 量化格式

Not all quantized models are the same. Choose the right format for your hardware.
不是所有量化模型都一样。根据你的硬件选择合适的格式。

| Format | Best For | Device | Pros | Cons |
| --- | --- | --- | --- | --- |
| **GGUF** | **Ollama / llama.cpp** | **CPU / Apple Silicon** / GPU | Universal compatibility. Best for Mac users. | Slightly slower on pure NVIDIA setups than GPTQ. |
| **GPTQ** | **Python / AutoGPTQ** | **NVIDIA GPU Only** | Extremely fast on GPUs. | Hard to run on CPU/Mac. |
| **AWQ** | **vLLM / TGI** | **NVIDIA GPU Only** | Newer, better accuracy than GPTQ. | Less software support than GGUF. |

**Recommendation**: If you use **Ollama**, always look for **GGUF**.
**推荐**：如果你用 **Ollama**，永远找 **GGUF**。

## 3. Decoding the Filenames | 解读文件名

You will see names like `Llama-3-8B-Instruct-Q4_K_M.gguf`. What does it mean?
你会看到像 `Llama-3-8B-Instruct-Q4_K_M.gguf` 这样的文件名。什么意思？

- **Q4**: 4-bit Quantization. (The sweet spot).
- **K**: Uses "K-quants" (A smarter way to organize bits).
- **M**: Medium size.

| Tag | Meaning | Verdict |
| --- | --- | --- |
| **Q2_K** | 2-bit | **Too dumb**. Don't use unless desperate. |
| **Q3_K_M** | 3-bit | **Okay**. Use if Q4 doesn't fit. |
| **Q4_K_M** | 4-bit | **The Gold Standard**. Best balance. |
| **Q5_K_M** | 5-bit | **Good**. Slightly better smarts, slower. |
| **Q8_0** | 8-bit | **Overkill**. Just use FP16 if you have space. |

## 4. How to Quantize (The Easy Way) | 如何量化（简易版）

Don't quantize it yourself unless you have to.
除非必须，否则别自己量化。

1.  Go to **Hugging Face**.
2.  Search for the model name + "GGUF". (e.g., "DeepSeek R1 GGUF").
3.  Look for uploads by **TheBloke** or **Bartowski** (Community heroes who quantize everything).
4.  Download the `.gguf` file.
5.  Create a Modelfile in Ollama:
    ```dockerfile
    FROM ./deepseek-r1.Q4_K_M.gguf
    ```

## 5. How to Quantize (The Hard Way) | 如何量化（难版）

### Path 1: Direct Quantization in Ollama (Easiest)
**路径一：直接量化已拉取的模型（最简方法）**

If you already have a model in Ollama (e.g., `llama3.1:8b`):
如果 Ollama 中已有模型：

1.  **Run Command**:
    ```bash
    ollama quantize llama3.1:8b my-quantized-llama3.1 Q4_K_M
    ```
2.  **Run New Model**:
    ```bash
    ollama run my-quantized-llama3.1
    ```

### Path 2: From Hugging Face to Ollama (Advanced)
**路径二：从零开始（转换并量化 Hugging Face 模型）**

If you have a `.safetensors` model from Hugging Face:
如果你有 Hugging Face 格式的模型：

1.  **Prepare Environment (准备环境)**:
    Clone `llama.cpp` and install dependencies.
    ```bash
    git clone https://github.com/ggerganov/llama.cpp
    cd llama.cpp
    pip install -r requirements.txt
    ```
2.  **Convert Format (转换格式)**:
    Convert to GGUF (FP16).
    ```bash
    python convert-hf-to-gguf.py /path/to/model --outtype f16 --outfile ./model-f16.gguf
    ```
3.  **Quantize (执行量化)**:
    Use `llama-quantize` tool.
    ```bash
    ./llama-quantize ./model-f16.gguf ./model-q4_k_m.gguf Q4_K_M
    ```
4.  **Import to Ollama (导入 Ollama)**:
    Create a `Modelfile`:
    ```dockerfile
    FROM ./model-q4_k_m.gguf
    PARAMETER temperature 0.7
    ```
    Create and run:
    ```bash
    ollama create my-custom-model -f ./Modelfile
    ollama run my-custom-model
    ```

## 6. Core Principles | 核心原理

Ollama relies on **GGUF (GPT-Generated Unified Format)**, a binary format designed for fast loading and mapping. It allows efficient memory management and CPU/GPU offloading.

Ollama 底层依赖 **GGUF** 格式。这是一种专为快速加载设计的二进制格式，支持高效的内存管理和 CPU/GPU 混合计算。
