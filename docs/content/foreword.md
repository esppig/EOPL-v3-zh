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


The third reason for learning about interpreters is that programming techniques that explicitly involve the structure of language are becoming increasingly important. Today's concern with designing and manipulating class hierarchies in object-oriented systems is only one example of this trend. 

Perhaps this is an inevitable consequence of the fact that our programs are becoming increasingly complex—thinking more explicitly about languages may be our best tool for dealing with this complexity. 

Consider again the basic idea: the interpreter itself is just a program. But that program is written in some language, whose interpreter is itself just a program written in some language whose interpreter is itself . . .  

Perhaps the whole distinction between program and programming language is a misleading idea, and future programmers will see themselves not as writing programs in particular, but as creating new languages for each new application.

> 学习编译器的第三个原因是: 明确涉及语言结构的编程技术正变得越来越重要。目前对面向对象系统中类层次结构的设计和操作的关注只是这种趋势的一个例子。

> 也许这是我们的程序变得越来越复杂的必然结果ーー更明确地思考语言可能是我们处理这种复杂性的最佳工具。

> 再考虑一下基本思想: 解释器本身只是一个程序。但是那个程序是用某种语言编写的，它的解释器本身就是用某种语言编写的程序，它的解释器本身就是... ..。

> 也许程序和编程语言之间的整个差异是一个误导性的想法，未来的程序员不会特别把自己看作是在编写程序，而是在为每个新的应用程序创造新的语言。


Friedman and Wand have done a landmark job, and their book will change the landscape of programming-language courses. They don't just *tell* you about interpreters; they *show* them to you. 

The core of the book is a tour de force sequence of interpreters starting with an abstract high-level language and progressively making linguistic features explicit until we reach a state machine. You can actually run this code, study and modify it, and change the way these interpreters handle scoping, parameter-passing, control structure, etc.

> Friedman 和 Wand 完成了一项里程碑式的工作，他们的书将改变编程语言课程的格局。他们不仅仅是告诉你关于解释器的事情，还向你展示它们.

> 这本书的核心是一系列"精彩"的解释器，从一个抽象的高级语言开始，逐步明确语言特性，直到到达一个状态机。 你可以实际运行这些代码，研究和修改它们，并改变这些解释器处理作用域、参数传递和控制结构等等的方式。


Having used interpreters to study the execution of languages, the authors show how the same ideas can be used to analyze programs without running them. In two new chapters, they show how to implement type checkers and inferencers, and how these features interact in modern object-oriented languages.

> 通过使用解释器来研究语言的执行，作者展示了如何使用相同的思想来分析程序而不需要运行它们。在两个新的章节中，他们展示了如何实现类型检查器和类型推断器，以及这些特性如何与现代面向对象语言相互作用。

Part of the reason for the appeal of this approach is that the authors have chosen a good tool—the Scheme language, which combines the uniform syntax and data-abstraction capabilities of Lisp with the lexical scoping and block structure of Algol. But a powerful tool becomes most powerful in the hands of masters. The sample interpreters in this book are outstanding models. Indeed, since they are *runnable* models, I'm sure that these interpreters and analyzers will find themselves at the cores of many programming systems over the coming years.

> 这种方法之所以有新引力，部分原因在于作者选择了一个很好的工具 --- Scheme 语言，它将 Lisp 的统一语法和数据抽象能力 与 Algol 的词法作用域和块结构相结合。
> 但是一个强大的工具在大师的手中会变得最强大。这本书中的解释器示例是杰出的典范。事实上，因为它们都是可运行的模型，我确信这些解释器和分析器在未来几年将被发现于许多编程系统的核心之中。


This is not an easy book. Mastery of interpreters does not come easily, and for good reason.
The language designer is a further level removed from the end user than is the ordinary application programmer. 
In designing an application program, you think about the specific tasks to be performed, and consider what features to include. 
But in designing a language, you consider the various applications people might want to implement, and the ways in which they might implement them. 
Should your language have static or dynamic scope, or a mixture? 
Should it have inheritance? Should it pass parameters by reference or by value
Should continuations be explicit or implicit? 
It all depends on how you expect your language to be used, which kinds of programs should be easy to write, and which you can afford to make more difficult.

> 这不是一本容易的书，要精通解释器并不容易且有充分的理由。
> 与普通的应用程序编程人员相比，语言设计者与最终用户之间的距离更远。
> 在设计应用程序时，你需要考虑的是具体任务的执行，考虑需要囊括哪些特性。
> 但是在设计语言时，你要考虑人们可能想要实现的各种应用程序，以及他们可能实现这些应用程序的方式。
> 你的语言应该是静态的还是动态的，还是混合的？
> 它应该具有继承性吗? 它应该通过引用还是通过值传递参数？
> 延续应该是显式的还是隐式的？
> 这完全取决于你希望你的语言如何被使用，哪种程序应该容易编写，哪种程序你可以承担得起使用更困难的代价。


Also, interpreters really are subtle programs. A simple change to a line of code in an interpreter can make an enormous difference in the behavior of the resulting language. 
Don't think that you can just skim these programs—very few people in the world can glance at a new interpreter and predict from that how it will behave even on relatively simple programs. So study these programs. Better yet, run them-this is working code. Try interpreting some simple expressions, then more complex ones. Add error messages.
Modify the interpreters. Design your own variations. Try to really master these programs, not just get a vague feeling for how they work.

> 而且，解释器真的是很微妙的程序。对解释器中的一行代码进行简单的更改，就可以对结果语言的行为产生巨大的影响。
> 不要以为只浏览这些程序就能掌握解释器, 世界上很少有人能够瞥一眼一个新的解释器，就预测它在相对简单的程序上的表现。
> 所以，还是需要好好研究这些项目。更好的办法是，运行它们~(它们都是可执行的代码)。从解释一些简单的表达式开始，再到更复杂的表达式，添加错误消息, 修改解释器，加入你自己的改动。
> 试着真正掌握这些程序，而不是仅仅对它们的工作原理有一个模糊的感觉。


If you do this, you will change your view of your programming, and your view of yourself as a programmer. You’ll come to see yourself as a designer of languages rather than only a user of languages, as a person who chooses the rules by which languages are put together, rather than only a follower of rules that other people have chosen.

> 如果您这样做，您将改变您对编程的看法，以及您对自己作为程序员的看法。你会发现自己是一个语言的设计者，而不仅仅是一个语言的使用者，一个选择语言组合规则的人，而不仅仅是其他人选择的规则的遵循者。


## Postscript to the Third Edition

The foreword above was written only seven years ago. Since then, information applications and services have entered the lives of people around the world in ways that hardly seemed possible in 1990. They are powered by an ever—growing collection of programming languages and programming frameworks—all erected on an ever-expanding platform of interpreter Do you want to create Web pages? In 1990, that meant formatting static text and graphics, in effect, creating a program to be run by browsers executing only a single “print” statement. Today’s dynamic Web pages make full use of scripting languages (another name for interpreted languages) like Javascript. The browser programs can be complex, and including asynchronous calls to a Web server that is typically running a program in a completely different programming framework possibly with a host of services, each with its own individual language.
Or you might be creating a bot for enhancing the performance of your avatar in a massive online multiplayer game like World of Warcraft. In that case, you’re probably using a scripting language like Lua, possibly with an object-oriented extension to help in expressing classes of behaviors. Or maybe you’re programming a massive computing cluster to do indexing and searching on a global scale. If so, you might be writing your programs using the map-reduce paradigm of functional programming to relieve you of dealing explicitly with the details of how the individual processors are scheduled.
Or perhaps you’re developing new algorithms for sensor networks, and exploring the use of lazy evaluation to better deal with parallelism and data aggregation. Or exploring transformation systems like XSLT for controlling Web pages. Or designing frameworks for transforming and remixing multimedia streams. Or . . .
So many new applications! So many new languages! So many new inter-
preters! As ever, novice programmers, even capable ones, can get along viewing
each new framework individually, working within its fixed set of rules. But creating new frameworks requires skills of the master: understanding the principles that run across languages, appreciating which language features are best suited for which type of application, and knowing how to craft the interpreters that bring these languages to life. These are the skills you will learn from this book.

