module.exports = {
    base: "/",
    lang: "zh-CN",
    title: "Essentials of Programming Languages",
    description: "EOPL",
    // theme: 'vuepress-theme-mix',
    themeConfig: {
        // logo: "https://vuejs.org/images/logo.png",
        // logo: "/images/zoe.png",
        navbar: [
            // NavbarItem
            {
                text: 'Foo',
                link: '/content/posts/computation/halting.md',
            },
            // NavbarGroup
            {
                text: '关于',
                children: [
                    '/content/posts/lambda/essential.md',
                    '/content/posts/lambda/number.md'
                ]
            },
            // 字符串 - 页面文件路径
            '/content/about.md',
        ],
        sidebar: [
            {
                text: '前言',
                link: '/content/foreword.md'
            },
            {
                text: '序言',
                link: '/content/preface.md'
            },
            // SidebarItem
            {
                text: '第 1 章  Inductive Sets of Data',
                link: '/content/ch01.md',
                children: [
                    // SidebarItem
                    {
                        text: '1.1 Recursively Specified Data',
                        link: '/content/ch01-1.md',
                        children: [],
                    },
                    {
                        text: '1.2 Deriving Recursive Programs',
                        link: '/content/ch01-2.md',
                    },
                    {
                        text: '1.3 Auxiliary Procedures and Context Arguments',
                        link: '/content/ch01-3.md',
                    },
                    {
                        text: '1.4 Exercises',
                        link: '/content/ch01-4.md',
                    },
                    // 字符串 - 页面文件路径
                    // '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            // '/bar/README.md',
        ],
    },
}