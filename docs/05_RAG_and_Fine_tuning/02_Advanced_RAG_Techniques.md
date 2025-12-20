# Advanced RAG Techniques | 高级 RAG 技术

Naive RAG (Retrieve-Read) often fails with complex queries. Advanced RAG introduces optimization at pre-retrieval, retrieval, and post-retrieval stages.

朴素 RAG（检索-阅读）在处理复杂查询时往往表现不佳。高级 RAG 在检索前、检索中和检索后阶段引入了优化。

## 1. Pre-Retrieval Optimization | 检索前优化

Improving the user query to match the database better.
优化用户查询以更好地匹配数据库。

- **Query Expansion (查询扩展)**: Breaking a complex question into sub-questions.
  <br> 将复杂问题分解为子问题。
- **Query Transformation (查询转换)**: Rewriting the query to be more search-friendly.
  <br> 重写查询使其更适合检索。
  - *User*: "Compare revenue of Apple and Microsoft."
  - *Transformed*: "Apple revenue 2024", "Microsoft revenue 2024".

## 2. Retrieval Optimization | 检索优化

Finding the most relevant chunks.
找到最相关的切片。

- **Hybrid Search (混合检索)**: Combining **Keyword Search (BM25)** and **Vector Search (Dense)**.
  <br> 结合关键词检索（BM25）和向量检索（稠密检索）。
  - *Why*: Vectors are good at semantics ("Apple" ~ "Fruit"), Keywords are good at exact match ("iPhone 15 Pro Max").
- **Metadata Filtering**: Filtering by date, author, or category before searching.
  <br> 在搜索前按日期、作者或类别过滤。

## 3. Post-Retrieval Optimization | 检索后优化

Refining the results before feeding them to the LLM.
在将结果喂给 LLM 之前进行精炼。

- **Re-ranking (重排序)**: Using a specialized Cross-Encoder model (like BGE-Reranker) to score the relevance of retrieved chunks accurately.
  <br> 使用专门的交叉编码器模型（如 BGE-Reranker）精确评分检索到的切片的相关性。
  - *Process*: Retrieve top 100 -> Re-rank -> Keep top 5.
- **Context Compression**: Removing irrelevant info from chunks to save tokens.
  <br> 从切片中移除无关信息以节省 Token。

## 4. GraphRAG (Knowledge Graphs) | 知识图谱 RAG

Instead of just vector similarity, GraphRAG uses Knowledge Graphs to understand relationships between entities.
GraphRAG 不仅依赖向量相似度，还利用知识图谱来理解实体间的关系。

- **Use Case**: "How does the CEO's decision affect the engineering team?" (Multi-hop reasoning).
  <br> **场景**：“CEO 的决策如何影响工程团队？”（多跳推理）。
- **Mechanism**: Traverses the graph edges to find connected concepts.
  <br> **机制**：遍历图的边以找到连接的概念。

## 5. Recommended Stack | 推荐技术栈

- **Vector DB**: Milvus, Qdrant, Pinecone.
- **Framework**: LlamaIndex (Best for RAG), LangChain.
- **Reranker**: BAAI/bge-reranker-v2-m3.
