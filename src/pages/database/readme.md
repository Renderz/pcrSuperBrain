## 设计

- 数据端固定, 由客户端筛选.
- 数据分为两层, 一个是 condition 层, 有了 conditions 可以直接筛选出 result.
- 一个是 collection 层, 负责提供 condition.
