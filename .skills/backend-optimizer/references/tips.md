# Backend Optimization Tips

## 1. Data Access
*   **Avoid N+1 Queries**: Fetch related data in a single batch (e.g., JOINs or Eager Loading).
*   **Indexing**: Ensure columns used in WHERE clauses or JOINs are indexed.
*   **Selectivity**: Only fetch the columns you need.

## 2. Caching
*   Use caching for expensive calculations or slow-changing data.
*   Implement proper cache invalidation strategies.

## 3. Asynchrony
*   Offload heavy tasks (email, image processing) to background workers.
*   Use non-blocking I/O where possible.

## 4. Algorithms
*   Profile slow code to find actual bottlenecks.
*   Prefer O(1) or O(n) over O(n²) operations.
