# Preface

> 序言


## Goal

> 目标


This book is an analytic study of programming languages. Our goal is to provide a deep, working understanding of the essential concepts of programming languages. These essentials have proved to be of enduring importance; they form a basis for understanding future developments in programming languages.

> 这本书是对编程语言的分析研究。我们的目标是对编程语言的基本要素提供深入的、可行的理解。事实证明，这些要素被证明具有长久的重要性; 它们构成了理解编程语言未来发展的基石。


Most of these essentials relate to the semantics, or meaning, of program elements. Such meanings reflect how program elements are interpreted as the program executes. Programs called interpreters provide the most direct, executable expression of program semantics. They process a program by directly analyzing an abstract representation of the program text. We therefore choose interpreters as our primary vehicle for expressing the semantics of programming language elements.

> 这些基本要素中的大多数都与程序元素的语义或意义有关。这些含义反映了程序元素在程序执行时是如何被解释的。被称为解释器的程序提供了程序语义的最直接、可执行的表达式。它们通过直接分析程序文本的抽象表示来处理程序。因此，我们选择解释器作为表达编程语言元素语义的主要工具。


The most interesting question about a program as object is, “What does it do?” The study of interpreters tells us this. Interpreters are critical because they reveal nuances of meaning, and are the direct path to more efficient compilation and to other kinds of program analyses.

> 关于程序作为对象，最有趣的问题是，"它是做什么的?" 对解释器的研究告诉了我们这一点。
> 解释器至关重要，因为它们揭示了意义的细微差别，是更高效的编译和其他类型程序分析的直接途径。

Interpreters are also illustrative of a broad class of systems that transform information from one form to another based on syntax structure. Compilers, for example, transform programs into forms suitable for interpretation by hardware or virtual machines. Though general compilation techniques are beyond the scope of this book, we do develop several elementary program translation systems. These reflect forms of program analysis typical of compilation, such as control transformation, variable binding resolution, and type checking.

> 解释器的原理同样适用于更广泛的系统，它们都是基于语法结构将信息从一种形式转换为另一种形式。例如，编译器将程序转换为适合于由硬件或虚拟机进行解释的形式。虽然一般的编译技巧超出了本书的范围，但我们确实开发了几个基本的程序翻译系统。它们反映了典型的编译程序分析形式，如控件转换、变量绑定解析和类型检查。


The following are some of the strategies that distinguish our approach.

> 以下是区分我们方法的一些策略。


1. Each new concept is explained through the use of a small language. These languages are often cumulative: later languages may rely on the features of earlier ones.

> 1. 每一个新概念都通过使用一种小型语言来解释。这些语言概念通常是累加的: 后来的语言特性可能依赖于之前的特征。


2. Language processors such as interpreters and type checkers are used to explain the behavior of programs in a given language. They express language design decisions in a manner that is both formal (unambiguous and complete) and executable.

> 2. 语言处理器如解释器和类型检查器用于解释给定语言中程序的行为。在某种意义上，它们以正规(明确且完整)且可执行的方式表达语言设计的决策。


3. When appropriate, we use interfaces and specifications to create data abstractions. In this way, we can change data representation without changing programs. We use this to investigate alternative implementation strategies.

> 3. 在适当的时候，我们使用接口和规范来创建数据抽象。通过这种方式，我们可以在不改变程序的情况下改变数据表示。我们使用这种方式来研究可替代的实现策略。


4. Our language processors are written both at the very high level needed to produce a concise and comprehensible view of semantics and at the much lower level needed to understand implementation strategies.

> 4. 我们编写的语言处理器需要考虑两个层次的问题：在非常高的层次上，它需要产生一个简洁而易于理解的语义视图，而在非常低的层次上，它需要理解实现策略。


5. We show how simple algebraic manipulation can be used to predict the behavior of programs and to derive their properties. In general, however, we make little use of mathematical notation, preferring instead to study the behavior of programs that constitute the implementations of our languages.

> 5. 我们将展示如何使用简单的代数操作来预测程序的行为并推导它们的性质。然而，一般来说，我们很少使用数学符号语言，而是更倾向于研究构成我们语言实现的程序的行为。

6. The text explains the key concepts, while the exercises explore alternative designs and other issues. For example, the text deals with static binding, but dynamic binding is discussed in the exercises. One thread of exercises applies the concept of lexical addressing to the various languages developed in the book.

> 6. 正文解释了关键的概念，而练习探索另外的设计和其他问题。例如，正文中处理静态绑定，但动态绑定在练习中讨论。本书中的某一个一个线程的练习, 针对不同的语言应用了词法地址的概念。


We provide several views of programming languages using widely varying levels of abstraction. Frequently our interpreters provide a very high-level view that expresses language semantics in a very concise fashion, not far from that of formal mathematical semantics. At the other extreme, we demonstrate how programs may be transformed into a very low-level form characteristic of assembly language. By accomplishing this transformation in small stages, we maintain a clear connection between the high-level and low-level views.

> 我们提供了几种使用不同抽象层次的编程语言视图。大部分情况下，我们的解释器会提供一个非常高级的视图，以一种非常简洁的方式表达语言语义，接近形式化的数学语义。但在一些极端情况下，我们也会演示如何将程序转换为汇编语言这种非常低级的形式。通过在小的阶段中完成这种转换，我们可以在高级视图和低级视图之间保持清晰的连接。


We have made some significant changes to this edition. We have included informal contracts with all nontrivial definitions. This has the effect of clarifying the chosen abstractions. In addition, the chapter on modules is completely new. To make implementations simpler, the source language for chapters 3, 4, 5, 7, and 8 assumes that exactly one argument can be passed to a function; we have included exercises that support multiargument procedures. Chapter 6 is completely new, since we have opted for a first-order compositional continuation-passing-style transform rather than a relational one. Also because of the nature of tail-form expressions, we use multiargument procedures here, and in the objects and classes chapter, we do the same, though there it is not so necessary. Every chapter has been revised and many new exercises have been added.

> 在这个版本中,我们作了一些重要的修改。对所有的重要定义都包含了非正式约定。这有助于澄清所选择的抽象。此外，关于模块的章节是全新的。为了使实现更简单，第3、4、5、7和8章的源语言假设了一个函数只能被传递一个参数; 在练习中包括了支持多参数的程序。第6章是全新的，因为我们选择了一阶组合(CPS)延续传递风格的转换，而不是关系转换。另外，由于尾形式表达式的本质，我们在这里使用多参数程序，在对象和类章节中，我们也同样这么做，尽管在那里没有这么必要。每一章都已修改，并增加了许多新的练习。


## Organization

> 组织


The first two chapters provide the foundations for a careful study of programming languages. Chapter 1 emphasizes the connection between inductive data specification and recursive programming and introduces several notions related to the scope of variables. Chapter 2 introduces a data type facility. This leads to a discussion of data abstraction and examples of representational transformations of the sort used in subsequent chapters.

> 前两章为仔细研究编程语言提供了基础。第一章强调了归纳数据规范和递归编程之间的联系，并介绍了与变量范围有关的几个概念。第二章介绍了一种数据类型工具。这就引出了对抽象化的讨论，以及后续章节中使用的表示变换的例子。


Chapter 3 uses these foundations to describe the behavior of programming languages. It introduces interpreters as mechanisms for explaining the runtime behavior of languages and develops an interpreter for a simple, lexically scoped language with first-class procedures and recursion. This interpreter is the basis for much of the material in the remainder of the book. The chapter ends by giving a thorough treatment of a language that uses indices in place of variables and as a result variable lookup can be via a list reference.

> 第三章用这些基础来描述编程语言的行为。它引入了解释器作为解释语言运行时行为的机制，并开发了一种具有词法作用域的，简单的、过程(函数)和递归为"一等公民"的解释器。这个解释器是本书其余部分大部分材料的基础。本章最后给出了一种使用索引代替变量的语言的详尽方法，借此变量查找可以通过列表引用来完成。


Chapter 4 introduces a new component, the state, which maps locations to values. Once this is added, we can look at various questions of representation. In addition, it permits us to explore call-by-reference, call-by-name, and call-by-need parameter-passing mechanisms.

> 第4章介绍了一个新的组件，"状态"，它将位置映射到值。一旦加上这点，我们就可以看到各种各样的代表性问题。此外，它还允许我们探索参数传递方式中的 按引用调用、按名称调用 和 按需调用 的机制。


Chapter 5 rewrites our basic interpreter in continuation-passing style. The control structure that is needed to run the interpreter thereby shifts from recursion to iteration. This exposes the control mechanisms of the interpreted language, and strengthens one’s intuition for control issues in general. It also allows us to extend the language with trampolining, exception-handling, and multithreading mechanisms.

> 第5章， 我们使用CPS风格，重写了基础解释器。因此，运行解释器所需的控制结构从递归转移到迭代。这揭示了解释型语言的控制机制，增强了对控制问题的直觉。它还允许我们使用"trampolining(蹦床)"、异常处理和多线程机制扩展语言。


Chapter 6 is the companion to the previous chapter.
There we show how to transform our familiar interpreter into continuation-passing style; here we show how to accomplish this for a much larger class of programs.
Continuation-passing style is a powerful programming tool, for it allows any sequential control mechanism to be implemented in almost any language.
The algorithm is also an example of an abstractly specified source-to-source program transformation.

> 第六章是前一章的姊妹篇。
> 上一章我们展示了如何将我们熟悉的解释器转换为延续传递方式(CPS); 而这一章我们展示如何在更大的程序类中完成这一转换。
> CPS是一个强大的编程工具，因为它允许任何顺序控制机制在几乎任何语言中实现。
> 该算法也是抽象指定源到源程序转换的一个例子。


Chapter 7 turns the language of chapter 3 into a typed language. First we implement a type checker. Then we show how the types in a program can be deduced by a unification based type inference algorithm.

> 第七章将第三章的语言转化为类型化语言。首先，我们实现一个类型检查器。然后，我们演示了如何通过基于统一的类型推理算法来推导程序中的类型。


Chapter 8 builds typed modules relying heavily on an understanding of the previous chapter. Modules allow us to build and enforce abstraction boundaries, and they offer a new kind of scoping.

> 第8章主要依赖于对前一章的理解构建类型化模块。模块允许我们构建和执行抽象边界，并且它们提供了一种新的作用域。


Chapter 9 presents the basic concepts of object-oriented languages, centered on classes. We first develop an efficient run-time architecture, which is used as the basis for the material in the second part of the chapter. The second part combines the ideas of the type checker of chapter 7 with those of the object-oriented language of the first part, leading to a conventional typed object-oriented language. This requires introducing new concepts including interfaces, abstract methods, and casting.

> 第9章介绍了以类为中心的面向对象语言的基本概念。我们首先开发了一个高效的运行时体系结构，该体系结构用作本章第二部分内容的基础。第二部分将第七章类型检查器的思想与第一部分面向对象语言的思想相结合，形成了一种传统的面向对象类型语言。这需要引入新的概念，包括接口、抽象方法和强制转换。


For *Further Reading* explains where each of the ideas in the book has come from. This is a personal walk-through allowing the reader the opportunity to visit each topic from the original paper, though in some cases, we have just chosen an accessible source.

> 在进一步的阅读内容中，解释了本书中的每一个想法是的来源。根据个人的需要，让访问原始论文的每一个主题，虽然在某些情况下，我们只是选择了一个可访问的来源。


Finally, appendix B describes our SLLGEN parsing system.

> 最后，附录B 描述了我们的 SLLGEN 解析系统。


The dependencies of the various chapters are shown in the figure below.

> 主要的章节依赖如下:

```
                     5️⃣ → 6️⃣
                   ↗
1️⃣ → 2️⃣ → 3️⃣ → 4️⃣        8️⃣
                   ↘    ↗
                     7️⃣
                        ↘
                          9️⃣
```

## Usage

> 使用


This material has been used in both undergraduate and graduate courses.
Also, it has been used in continuing education courses for professional programmers. We assume background in data structures and experience both in a procedural language such as C, C++, or Java, and in Scheme, ML, Python, or Haskell.

> 这本材料在本科和研究生的课程中都被使用。此外，它还被用于专业程序员的再教育课程。
> 我们假设你有数据结构的背景，并且在诸如 C，C++，Java 这样的过程式语言 和 Scheme，ML，Python，Haskell等方面有经验。


Exercises are a vital part of the text and are scattered throughout. They range in difficulty from being trivial if related material is understood [*], to requiring many hours of thought and programming work [* * *]. A great deal of material of applied, historical, and theoretical interest resides within them. We recommend that each exercise be read and some thought be given as to how to solve it. Although we write our program interpretation and transformation systems in Scheme, any language that supports both first-class procedures and assignment (ML, Common Lisp, Python, Ruby, etc.) is adequate for working the exercises.

> 练习是正文内容的重要组成部分，它们分散在各个角落。它们的难度范围从，只需要片刻时间就能够理解相关的内容[ * ]，到可能需要花费数小时的思考和编程[ * * * ]。练习中存在着大量的应用，历史，理论等。我们建议阅读每个练习，并对如何解决这个问题进行一些思考。尽管我们使用 Scheme 编写程序解释器和转换系统，但任何支持first-class过程和赋值(ML、 Common Lisp、 Python、 Ruby 等)的语言都可以完成这些练习。


Exercise 0.1 [*] We often use phrases like “some languages have property X.” For each such phrase, find one or more languages that have the property and one or more languages that do not have the property. Feel free to ferret out this information from any descriptive book on programming languages (say Scott (2005), Sebesta (2007), or Pratt & Zelkowitz (2001)).

> ...


This is a hands-on book: everything discussed in the book may be implemented within the limits of a typical university course. Because the abstraction facilities of functional programming languages are especially suited to this sort of programming, we can write substantial language-processing systems that are nevertheless compact enough that one can understand and manipulate them with reasonable effort.

> 这是一本实践性很强的书: 书中讨论的所有内容都可以在一个典型的大学课程范围内实现。因为函数式编程语言的抽象机制特别适合这种编程，所以我们可以编写大量的语言处理系统，这些系统足够紧凑，人们可以通过适当的努力来理解和操作它们。


The web site, available through the publisher, includes complete Scheme code for all of the interpreters and analyzers in this book. The code is written in PLT Scheme. We chose this Scheme implementation because its module system and programming environment provide a substantial advantage to the student. The code is largely R5RS-compatible, and should be easily portable to any full-featured Scheme implementation

> 本书中，Scheme解释器和分析器的完整代码都可以在出版商的网站上获取。 代码是用 PLT-Scheme 编写的。我们之所以选择这个Scheme方言，是因为它的模块系统和编程环境为学生提供了极大的便利。代码基本上是 r5rs 兼容的，并且应该易于移植到任何功能齐全的 Scheme 实现中。

