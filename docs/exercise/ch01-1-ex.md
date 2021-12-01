Exercise 1.1 [*] Write inductive definitions of the following sets. Write each definition in all three styles (top-down, bottom-up, and rules of inference). Using your rules, show the derivation of some sample elements of each set.

1. {3n + 2 |n ∈ N}
2. {2n + 3m + 1 |n, m ∈ N}
3. {(n, 2n + 1) |n ∈ N}
4. {(n, n^2) |n ∈ N}

Do not mention squaring in your rules. As a hint, remember the equation (n + 1)^2 = n^2 + 2n + 1.

> 练习 1.1 [*] 写出下列集合的归纳定义。用所有三种风格(自顶向下、自底向上和推理规则)编写每个定义。使用您的规则，描述每个集合的一些示例元素。
>
> PS: 不要在你的规则中提到平方. 提示一下，记住这个等式 `(n + 1)^2 = n^2 + 2n + 1` 。

Solution-1: 

* 集合S自顶向下定义(top-down): 一个自然数n, 当且仅当 n = 2 或者 n - 3 ∈ S；n 属于 S。

* 集合S自底向上定义(bottom-up): S是符合 A： 2 ∈ S;  B：如果 n ∈ S, 则 n + 3 ∈ S; 两个特性的最小自然数子集。

* 集合S推理规则(rules of inference)

   ```
   2 ∈ S


   n ∈ S
   ----------
   n + 3 ∈ S
   ```

Solution-2:

* top-down: 自然数 n ∈ S, 当且仅当
   
   1. n = 1, or
   2. n - 2 ∈ S, or
   3. n - 3 ∈ S

* bottom-up: S是符合以下两个特性的最小自然数子集.

   1. 1 ∈ S, and
   2. if n ∈ S, then n + 2 ∈ S, and
   3. if n ∈ S, then n + 3 ∈ S

* 集合S推理规则(rules of inference)

   ```
   1 ∈ S

     n ∈ S
   ----------
   n + 2 ∈ S

     n ∈ S
   ----------
   n + 3 ∈ S
   ```

Solution-3:

* top-down: 自然数n,m, (n, m) ∈ S, 当且仅当
   
   1. (n, m) = (0, 1), or
   2. (n - 1, m - 2) ∈ S

* bottom-up: S是符合以下两个特性的最小自然数子集.

   1. (0, 1) ∈ S, and
   2. if (n, m) ∈ S, then (n + 1, m + 2) ∈ S

* 集合S推理规则(rules of inference)

   ```
   (0, 1) ∈ S


      (n, m) ∈ S
   -------------------
   (n + 1, m + 2) ∈ S
   ```

Solution-4: 

* top-down: 自然数n,m, (n, m) ∈ S, 当且仅当
   
   1. (n, m) = (0, 0), or
   2. (n - 1, m - 2n + 1) ∈ S

* bottom-up: S是符合以下两个特性的最小自然数子集.

   1. (0, 0) ∈ S, and
   2. if (n, m) ∈ S, then (n + 1, m + 2n + 1) ∈ S

* 集合S推理规则(rules of inference)

   ```
   (0, 0) ∈ S
   

      (n, m) ∈ S
   -------------------
   (n + 1, m + 2n + 1) ∈ S
   ```


---

Exercise 1.2 [* *] What sets are defined by the following pairs of rules? Explain why.

1. 
   ```
   (0, 1) ∈ S 


      (n, k) ∈ S
   -------------------
   (n + 1, k + 7) ∈ S
   ```

2. 
   ```
   (0, 1) ∈ S 


      (n, k) ∈ S
   -------------------
   (n + 1, 2k) ∈ S
   ```

3.
   ```
   (0, 0, 1) ∈ S 


      (n, i, j) ∈ S
   -------------------
   (n + 1, j, i + j) ∈ S
   ```

4. [* * *]
   ```
   (0, 1, 0) ∈ S 


      (n, i, j) ∈ S
   -------------------
   (n + 1, i + 2, i + j) ∈ S
   ```

> 练习 1.2 [* *] 什么样的集合是由以下几对规则定义的? 请解释原因。


Solution-1: (n, k) -> (n + 1, k + 7)

* (0,1) (1, 8) (2, 15)  {(n, 7n+1) | n ∈ N}


Solution-2: (n, k) -> (n + 1, 2k)

* {(n, 2^n) | n ∈ N}

n: 0  1  2  3  4
k: 1  2  4  8 16

Solution-3: (n, i ,j) -> (n + 1, j, i + j) 

* {(n, fib(n), fib(n+1)) | n ∈ N }

n: 0  1  2  3  4  5  6
i: 0  1  1  2  3  5  8
j: 1  1  2  3  5  8  13

fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13

Solution-4: (n, i, j) -> (n + 1, i + 2, i + j)

* {(n, 2n+1, n^2) | n ∈ N }

n: 0  1  2  3  4  5  6
i: 1  3  5  7  9  11 13
j: 0  1  4  9  16 25 36

n, 2n+1, n^2




Exercise 1.3 [*] Find a set T of natural numbers such that 0 ∈ T, and whenever n ∈ T, then n + 3 ∈ T, but T ∉ S, where S is the set defined in definition 1.1.2.

> 练习 1.3 [*] 找出一个自然数集T，使得 0 ∈ T，并且当 n ∈ T 时，n + 3 ∈ T，但 T ∉ S，其中 S 是定义1.1.2中定义的集合。

Solution-1:

S = { 3n | n ∈ N }

T = { n != 1 | n ∈ N }