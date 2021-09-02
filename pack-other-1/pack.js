// https://kaiwu.lagou.com/course/courseInfo.htm?courseId=584#/detail/pc?id=5919
// 1.读取入口文件（比如entry.js）；

// 2.基于 AST 分析入口文件，并产出依赖列表；

// 3.使用 Babel 将相关模块编译到 ES5；

// 4.对每个依赖模块产出一个唯一的 ID，方便后续读取模块相关内容；

// 5.将每个依赖以及经过 Babel 编译过后的内容，存储在一个对象中进行维护；

// 6.遍历上一步中的对象，构建出一个依赖图（Dependency Graph）；

// 7.将各模块内容 bundle 产出。
