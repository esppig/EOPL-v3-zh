# Foreword

> 前言

This book brings you face-to-face with the most fundamental idea in computer programming:

  "The interpreter for a computer language is just another program."

It sounds obvious, doesn't it?  But the implications are profound. 
If you are a computational theorist, the interpreter idea recalls Gödel's discovery of the limitations of formal logical systems, Turing's concept of a universal computer, and von Neumann's basic notion of the stored-program machine.
If you are a programmer, mastering the idea of an interpreter is a source of great power. It provokes a real shift in mindset, a basic change in the way you think about programming.

> 这本书让你直面计算机编程中最基本的思想:

>  `计算机语言的解释器只是另一个程序.`

> 这听起来很明显，不是吗？但其影响是深远的。如果你是一个计算理论家，这个解释器的思想会让你想起哥德尔发现的形式逻辑系统的局限性，图灵的通用计算机概念，以及冯·诺依曼存储程序机器的基本概念。
> 如果你是一个程序员，掌握解释器的思想是强大力量的源泉。它激发思维模式的真正转变，也是你对编程思考的根本转变。


I did a lot of programming before I learned about interpreters, and I produced some substantial programs. One of them, for example, was a large data-entry and information-retrieval system written in PL/I. When I implemented my system, I viewed PL/I as a fixed collection of rules established by some unapproachable group of language designers. 
I saw my job as not to modify these rules, or even to understand them deeply, but rather to pick through the (very) large manual, selecting this or that feature to use. 
The notion that there was some underlying structure to the way the language was organized, and that I might want to override some of the language designers' decisions, never occurred to me. 
I didn't know how to create embedded sub languages to help organize my implementation, so the entire program seemed like a large, complex mosaic, where each piece had to be carefully shaped and fitted into place, rather than a cluster of languages, where the pieces could be flexibly combined. 
If you don't understand interpreters, you can still write programs; you can even be a competent programmer. 
But you can't be a master.

> 在学习解释器之前，我做了很多编程工作，我制作了一些实质性的程序。
> 例如，其中之一是一个用 PL/I 编写的大型数据输入和信息检索系统。
> 当我实现我的系统时，我将 PL/I 看作一些难以接近的语言设计人员建立的规则的固定集合。
> 我认为我的工作不是修改这些规则，甚至不是深入理解它们，而是通过(非常)大的手册，选择要使用的这个或那个特性。
> 我从来没有想到过，语言的组织方式存在一些潜在的结构，我可能想要覆盖一些语言设计者的决定。
> 我不知道如何创建嵌入的子语言来帮助组织我的实现，所以整个程序看起来就像一个巨大的、复杂的马赛克，每个部分都必须被仔细地塑造和安装到位，而不是一个语言集群，在那里各个部分可以灵活地组合在一起。
> 如果你不懂解释器，你仍然可以编写程序; 你甚至可以成为一个称职的程序员。
> 但是你不能成为大师。

There are three reasons why as a programmer you should learn about
interpreters.

> 作为一个程序员，你应该学习解释器，有三个原因:

First, you will need at some point to implement interpreters, perhaps not interpreters for full-blown general-purpose languages, but interpreters just the same. 

Almost every complex computer system with which people interact in flexible ways a computer drawing tool or an information-retrieval system, for example: includes some sort of interpreter that structures the interaction. 

These programs may include complex individual operations shading a region on the display screen, or performing a database search but the interpreter is the glue that lets you combine individual operations into useful patterns. Can you use the result of one operation as the input to another operation? Can you name a sequence of operations? Is the name local or global? Can you parameterize a sequence of operations, and give names to its inputs? And so on. 

No matter how complex and polished the individual operations are, it is often the quality of the glue that most directly determines the power of the system. It's easy to find examples of programs with good individual operations, but lousy glue; looking back on it, I can see that my PL/I database program certainly had lousy glue.

> 首先，在某个时候你需要实现解释器，也许不是成熟的通用语言的解释器，但是解释器是一样的。

> 几乎每一个复杂的计算机系统，人们与之以灵活的方式进行交互，计算机绘图工具或信息检索系统，例如: 包括某种解释器，构成交互。

> 这些程序可能包括复杂的单独操作，在显示屏上对一个区域进行阴影处理，或者执行数据库搜索，但是解释器是粘合剂，可以让你将单个操作组合成有用的模式。是否可以将一个操作的结果作为另一个操作的输入？你能说出操作的顺序吗？名称是本地的还是全局的？您能够参数化一系列操作，并为其输入命名吗？诸如此类。

> 不管单个操作是多么复杂和精致，往往是胶水的质量最直接地决定了系统的力量。很容易找到具有良好的单独操作的程序示例，但粘合力很差; 回过头来看，可以看到我的 PL/I 数据库程序的粘合力确实很差.


Second, even programs that are not themselves interpreters have important interpreter-like pieces. Look inside a sophisticated computer-aided design system and you're likely to find a geometric recognition language, a graphics interpreter, a rule-based control interpreter, and an object-oriented language interpreter all working together. One of the most powerful ways to structure a complex program is as a collection of languages, each of which provides a different perspective, a different way of working with the program elements. Choosing the right kind of language for the right purpose, and understanding the implementation tradeoffs involved: that's what the study of interpreters is about.

> 第二，即使程序本身不是解释器，它也有重要的类似解释器的部分。在一个复杂的计算机辅助设计系统中，你可能会发现一个几何识别语言，一个图形解释器，一个基于规则的控制解释器，以及一个面向对象的语言解释器在一同工作。构造一个复杂程序的最强大的方法之一就是将其作为一个语言集合，每一种语言都提供了不同的视角，以不同的方式使用程序元素。为了正确的目的选择正确的语言，并且理解其中涉及的实现权衡: 这就是学习解释器的原因.




