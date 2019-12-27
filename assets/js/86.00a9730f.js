(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{170:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("p",[t._v("来源：juejin.im/post/5d157bf3f265da1bcc1954e6")]),t._v(" "),t._m(1),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("本文是参考廖雪峰老师的 Git 资料再加上我自己对 Git 的理解，记录我的 Git 学习历程，作下此文是为以后学习，工作，开发中如果遇到问题可以回过头来参考参考。因为水平有限，难免会有出错的地方，欢迎指正。")]),t._v(" "),t._m(2),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("官方话：Git 是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。")]),t._v(" "),i("p",[t._v("引用廖雪峰老师的话，它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。")]),t._v(" "),t._m(3),t._v(" "),i("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("hr"),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("直接在官网上去下载。下载完成后，随便在某个文件下右键如果有 Git Bash Here 就安装成功。安装后，还要在命令行输入")]),t._v(" "),t._m(7),i("p",[t._v("global 表示全局，这台机器所有的 Git 仓库都会使用这个配置。允许单个仓库使用其他的名字和邮箱。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("也可以直接从 AppStore 安装 Xcode，Xcode 集成了 Git，不过默认没有安装，你需要运行 Xcode，选择菜单 “Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install” 就可以完成安装了。")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("本地仓库是对于远程仓库而言的。本地仓库 = 工作区 + 版本区。")]),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("以我使用最频繁的 git 命令为例，即提交到 github 为例。")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("以前不熟悉 git 命令的时候，我提交项目到 github 上都是直接在网页上直接拉取文件提交上去的。有点羞耻。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("提交一个文件，有时候我们会提交很多次，在提交历史中，这样就产生了不同的版本。每次提交，Git 会把他们串成一条时间线。如何回溯到我们提交的上一个版本，用 git reset --hard + 版本号即可。版本号可以用 git log 来查看，每一次的版本都会产生不一样的版本号。")]),t._v(" "),i("p",[t._v("回溯之后，git log 查看一下发现离我们最近的那个版本已经不见了。但是我还想要前进到最近的版本应该如何？只要 git reset --hard + 版本号就行。退一步来讲，虽然我们可以通过 git reset --hard + 版本号, 靠记住版本号来可以在不同的版本之间来回穿梭。")]),t._v(" "),i("p",[t._v("但是, 有时候把版本号弄丢了怎么办？git reflog 帮你记录了每一次的命令，这样就可以找到版本号了，这样你又可以通过 git reset 来版本穿梭了。")]),t._v(" "),t._m(17),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("**场景 1：**在工作区时，你修改了一个东西，你想撤销修改，git checkout -- file。廖雪峰老师指出撤销修改就回到和版本库一模一样的状态，即用版本库里的版本替换工作区的版本。")]),t._v(" "),i("p",[t._v("**场景 2：**你修改了一个内容，并且已经 git add 到暂存区了。想撤销怎么办？回溯版本，git reset --hard + 版本号, 再 git checkout -- file, 替换工作区的版本。")]),t._v(" "),i("p",[t._v("**场景 3：**你修改了一个内容，并且已经 git commit 到了 master。跟场景 2 一样，版本回溯，再进行撤销。")]),t._v(" "),t._m(18),t._v(" "),i("hr"),t._v(" "),i("p",[t._v('如果你 git add 一个文件到暂存区，然后在工作区又把文件删除了，Git 会知道你删除了文件。如果你要把版本库里的文件删除，git rm 并且 git commit -m "xxx".')]),t._v(" "),i("p",[t._v("如果你误删了工作区的文件，怎么办？使用撤销命令，git checkout -- 就可以。这再次证明了撤销命令其实就是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以 “一键还原”。")]),t._v(" "),t._m(19),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("分支，就像平行宇宙，廖雪峰老师如是说。你创建了一个属于你自己的分支，别人看不到，还继续在原来的分支上正常工作，而你在自己的分支上干活，想提交就提交，直到开发完毕后，再一次性合并到原来的分支上，这样，既安全，又不影响别人工作。"),i("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247487895&idx=1&sn=c25c88fc4737bb94d4b08d916a0af7d2&chksm=eb5394a1dc241db7ad634baecc7bfa1db37ccd2881c51de732319546fb7323e9ae6388cdfbff&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("用 Git 和 Github 提高效率的 10 个技巧！"),i("OutboundLink")],1),t._v("这篇也推荐看下。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),i("p",[t._v("在没有其他分支插进来时，只有一个 master 主分支。每次你 git push -u origin master 提交就是增加一条时间轴，master 也会跟着移动。")]),t._v(" "),t._m(22),t._v(" "),i("p",[t._v("创建一个 other 的分支，通过 other 提交，虽然时间轴向前走了，但是主分支 master 还在原来的位置。")]),t._v(" "),t._m(23),t._v(" "),i("p",[t._v("理论分析完，看一下命令怎么写。")]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),i("p",[t._v("当前的分支会有一个 *")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),i("p",[t._v("此时，master 分支上并没有 other 的文件，因为分支还没有合并。")]),t._v(" "),t._m(33),t._v(" "),t._m(34),i("p",[t._v("合并完成之后，就可以在 master 分支上查看到文件了。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),i("p",[t._v("我由此想到，在以后工作中，应该是一个开放小组共同开发一个项目，组长会创建很多分支，每一个分支可以交给一个人去开发某一个功能，一个小组共同开发而且不会相互干扰。谁的功能完成了，可以由组长合并一下完成了的分支。哦，完美！")]),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),i("p",[t._v("假如有这样一种情况，分支 other 已经 commit 了，但是此时指针指回 master 时，并且 master 没有合并，而是 git add / commit 提交了。这样，就产生了冲突，主分支 master 文件内容与 other 分支的内容不一样。合并不起来！所以，")]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),i("p",[t._v("git merge --no-ff other 禁用 Fast forward 模式，因为使用 Fast forward 模式，删除分支后，分支历史信息会丢失。"),i("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzI3ODcxMzQzMw==&mid=2247488096&idx=1&sn=f7ce1def1cd7d086137205ad5e1310bd&chksm=eb539756dc241e40c244f544a29da85e8f74f0062bac0bc887fbcf4439e36dfff07cef0754c4&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("超详细的 Git 实战教程，傻瓜一看也会！"),i("OutboundLink")],1),t._v("这篇也推荐看下。")]),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),i("p",[t._v("此时你要恢复工作：")]),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),i("p",[t._v("产生上图的冲突时，")]),t._v(" "),t._m(53),t._v(" "),i("p",[t._v("廖雪峰老师的总结：多人协作的工作模式通常是这样：")]),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),i("p",[t._v("git rebase 把分叉的提交历史 “整理” 成一条直线，看上去更直观. 缺点是本地的分叉提交已经被修改过了。")]),t._v(" "),i("p",[t._v("最后在进行 git push -u origin master")]),t._v(" "),i("p",[t._v("rebase 的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。")]),t._v(" "),t._m(56),t._v(" "),i("p",[t._v("比如一个 APP 要上线，通常在版本库中打一个标签 (tag), 这样，就确定了打标签的版本。将来无论什么时候，取某个标签的版本，就是把那个打标签的时刻的历史版本取出来。所以，标签也是版本库的一个快照。")]),t._v(" "),i("p",[t._v("Git 的标签虽然是版本库的快照，但其实它就是指向某个 commit 的指针。")]),t._v(" "),i("p",[t._v("tag 其实就是一个让人容易记住的有意义的名字，它跟某个 commit 绑在一起。比如 tag v2.1 就是把历史上的一个版本的东西叫做 v2.1")]),t._v(" "),t._m(57),t._v(" "),i("p",[t._v("步骤：")]),t._v(" "),i("ul",[t._m(58),t._v(" "),i("li",[i("p",[t._v("git tag "),i("name",[t._v(" 打标签，默认为 HEAD。比如 git tag v1.0")])],1)]),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),i("li",[i("p",[t._v("git show "),i("tagname",[t._v(" 查看标签信息。")])],1)]),t._v(" "),t._m(63)]),t._v(" "),t._m(64),t._v(" "),i("ul",[t._m(65),t._v(" "),i("li",[i("p",[t._v("git push origin "),i("tagname",[t._v(" 推送某个标签到远程")])],1)]),t._v(" "),t._m(66),t._v(" "),t._m(67)]),t._v(" "),t._m(68),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),i("ul",[i("li",[i("p",[t._v("强制提交已忽略的的文件。git add -f "),i("file")],1)]),t._v(" "),i("li",[i("p",[t._v("git check-ignore -v "),i("file",[t._v(" 检查为什么 Git 会忽略该文件。")])],1)]),t._v(" "),t._m(71)]),t._v(" "),t._m(72),t._v(" "),i("hr"),t._v(" "),i("ul",[t._m(73),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),i("li",[i("p",[t._v("git add ./"),i("file",[t._v("/ 把工作区的 < file > 文件提交到暂存区")])],1)]),t._v(" "),t._m(77),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),t._m(80),t._v(" "),t._m(81),t._v(" "),t._m(82),t._v(" "),t._m(83),t._v(" "),t._m(84),t._v(" "),t._m(85),t._v(" "),t._m(86),t._v(" "),i("li",[i("p",[t._v("git checkout -- "),i("file",[t._v(" 撤销命令，用版本库里的文件替换掉工作区的文件。我觉得就像是 Git 世界的 ctrl + z")])],1)]),t._v(" "),t._m(87),t._v(" "),t._m(88),t._v(" "),t._m(89),t._v(" "),t._m(90),t._v(" "),t._m(91),t._v(" "),t._m(92),t._v(" "),t._m(93),t._v(" "),t._m(94),t._v(" "),t._m(95),t._v(" "),t._m(96),t._v(" "),t._m(97),t._v(" "),t._m(98),t._v(" "),t._m(99),t._v(" "),t._m(100),t._v(" "),t._m(101),t._v(" "),t._m(102),t._v(" "),t._m(103),t._v(" "),t._m(104),t._v(" "),t._m(105),t._v(" "),i("li",[i("p",[t._v("git tag "),i("name",[t._v(" 打标签，默认为 HEAD。比如 git tag v1.0")])],1)]),t._v(" "),i("li",[i("p",[t._v("git tag "),i("tagName",[t._v(" < 版本号 > 把版本号打上标签，版本号就是 commit 时，跟在旁边的一串字母数字")])],1)]),t._v(" "),i("li",[i("p",[t._v("git show "),i("tagName",[t._v(" 查看标签信息")])],1)]),t._v(" "),i("li",[i("p",[t._v("git tag -a "),i("tagName",[t._v(' -m "< 说明 >" 创建带说明的标签。-a 指定标签名，-m 指定说明文字')])],1)]),t._v(" "),i("li",[i("p",[t._v("git tag -d "),i("tagName",[t._v(" 删除标签")])],1)]),t._v(" "),i("li",[i("p",[t._v("git push origin "),i("tagname",[t._v(" 推送某个标签到远程")])],1)]),t._v(" "),t._m(106),t._v(" "),i("li",[i("p",[t._v("git push origin :refs/tags/"),i("tagname",[t._v(" 删除远程标签 < tagname>")])],1)]),t._v(" "),t._m(107),t._v(" "),i("li",[i("p",[t._v("git add -f "),i("file",[t._v(" 强制提交已忽略的的文件")])],1)]),t._v(" "),i("li",[i("p",[t._v("git check-ignore -v "),i("file",[t._v(" 检查为什么 Git 会忽略该文件")])],1)])]),t._v(" "),t._m(108)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"🍺🐮总结的-git-使用技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#🍺🐮总结的-git-使用技巧","aria-hidden":"true"}},[this._v("#")]),this._v(" 🍺🐮总结的 Git 使用技巧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"git-是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-是什么","aria-hidden":"true"}},[this._v("#")]),this._v(" Git 是什么")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"为什么要学习-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习-git","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要学习 Git")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("面试要被问。可以应付面试。")])]),this._v(" "),e("li",[e("p",[this._v("很多公司开发都用 Git 来处理项目。现在不学，以后肯定还要学。")])]),this._v(" "),e("li",[e("p",[this._v("在我看来 Git 是现如今所有程序员都要掌握的，以后与同事共同开发项目必定要用到的，熟练掌握 Git 命令，可以提高开发的效率。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-git","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 Git")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('$git config --global user.name "你的名字"\n$git config --global user.email "你的邮箱"\n\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Mac 也可以像 Windows 一样，按上面的步骤安装。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("仓库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029130523.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("工作区即磁盘上的文件集合。")])]),this._v(" "),e("li",[e("p",[this._v("版本区 (版本库) 即. git 文件。")])]),this._v(" "),e("li",[e("p",[this._v("版本库 = 暂存区 (stage) + 分支 (master) + 指针 Head。")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("git init 原本本地仓库只包含着工作区，这是最常见的工作状态。此时，git init 一下，表示在本地区域创建了一个. git 文件, 版本区建立。")])]),t._v(" "),i("li",[i("p",[t._v("git add . 表示把工作区的所有文件全部提交到版本区里面的暂存区")])]),t._v(" "),i("li",[i("p",[t._v("当然你也可以通过 git add ./xxx/ 一条一条分批添加到暂存区。")])]),t._v(" "),i("li",[i("p",[t._v('git commit -m "xxx" 把暂存区的所有文件提交到仓库区，暂存区空空荡荡。')])]),t._v(" "),i("li",[i("p",[t._v("git remote add origin https://github.com/name/name_cangku.git 把本地仓库与远程仓库连接起来。")])]),t._v(" "),i("li",[i("p",[t._v("git push -u origin master 把仓库区的文件提交到远程仓库里。")])]),t._v(" "),i("li",[i("p",[t._v("一旦提交后，如果你又没有对工作区做任何修改，那么工作区就是 “干净” 的。会有这样的信息 nothing to commit, working tree clean")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"提交到-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交到-github","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交到 GitHub")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[i("code",[t._v("git init")]),t._v(" . 初始化，表示把这个文件变成 Git 可以管理的仓库。初始化后打开隐藏的文件可以看到有一个. git 文件。")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git add .")]),t._v(" 后面的一个点表示把这个文件全部提交到暂存区。")])]),t._v(" "),i("li",[i("p",[t._v("git add ./readme.md/ 表示把这个文件下面的 readme.md 文件提交到暂存区。")])]),t._v(" "),i("li",[i("p",[t._v('git commit -m "你要评论一点什么东西" git commit 的意思是把暂存区的全部文件提交到本地仓库。-m 后接评论。')])]),t._v(" "),i("li",[i("p",[t._v("git remote add origin https://github.com/name/name_cangku.git 表示把你本地的仓库与 GitHub 上的远程仓库连接起来。只需要连接一次，以后提交的时候就可以不用谢这条命令了。name 是你的 github 名字，name_cangku 是你的仓库名。注意不要把后面的. git 给漏掉了。因为我前面就是这么走过来的，绕了很多弯路。至于如何在 GitHub 上新建仓库，网上有很多教程，这里不再赘述了。")])]),t._v(" "),i("li",[i("p",[t._v("git push -u origin master 把本地仓库提交到远程仓库。(最后一步) 在你的远程仓库上刷新一下就可以看到你提交的文件了。")])]),t._v(" "),i("li",[i("p",[t._v('最后提到的是，在 git commit -m "" 之前，可以重复 git add 到暂存区。但是 git commit 会把你之前存放在暂存区的全部文件一次性全部提交到本地仓库。')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"版本的回溯与前进"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本的回溯与前进","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本的回溯与前进")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"撤销"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销","aria-hidden":"true"}},[this._v("#")]),this._v(" 撤销")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 分支")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"创建与合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建与合并分支")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029130858.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029130915.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029131029.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("创建分支 other, 切换到 other 分支。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git branch other\ngit checkout other\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("查看当前所有分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git branch\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("*")]),this._v(" other\n  master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("用 other 提交")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"language-js extra-class"},[i("pre",{pre:!0,attrs:{class:"language-js"}},[i("code",[t._v("git add "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\ngit commit "),i("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),i("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("other 分支完成，切换回 master")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git checkout master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("合并分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git merge other")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),this._v("分支名页可以其他名字"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("删除 other 分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("git branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("-")]),this._v("d other\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"解决合并分支问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决合并分支问题","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("解决合并分支问题")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029131158.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("修改文件的内容，让其保持一致。")])]),this._v(" "),e("li",[e("p",[this._v("git add git commit 提交。")])]),this._v(" "),e("li",[e("p",[this._v("分支合并了。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029131331.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git log --graph 查看分支合并图")])]),this._v(" "),e("li",[e("p",[this._v("git branch -d other 删除分支，任务结束。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"分支管理策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理策略","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("分支管理策略")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bug-分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bug-分支","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("BUG 分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("廖雪峰老师提到，工作中每个 bug 都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。但如果你手上有分支在工作中，你的上级要你改另外的分支的 BUG。")]),this._v(" "),e("p",[this._v("你要把现在正在工作的分支保存下来，git stash, 把当前工作现场 “存储” 起来，等以后恢复后继续工作。当你解决 BUG 后，git checkout other 回到自己的分支。用 git stash list 查看你刚刚 “存放” 起来的工作去哪里了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git stash apply 恢复却不删除 stash 内容，git stash drop 删除 stash 内容。")])]),this._v(" "),e("li",[e("p",[this._v("git stash pop 恢复的同时把 stash 内容也删了.")])]),this._v(" "),e("li",[e("p",[this._v("此时，用 git stash list 查看，看不到任何 stash 内容。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("总结：修复 bug 时，我们会通过创建新的 bug 分支进行修复，然后合并，最后删除；当手头工作没有完成时，先把工作现场 git stash 一下，然后去修复 bug，修复后，再 git stash pop，回到工作现场")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 删除分支")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git branch -d + 分支有可能会删除失败，因为 Git 会保护没有被合并的分支。")])]),this._v(" "),e("li",[e("p",[this._v("git branch -D + 分支 强行删除，丢弃没被合并的分支。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"多人协作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多人协作","aria-hidden":"true"}},[this._v("#")]),this._v(" 多人协作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git remote 查看远程库的信息，会显示 origin，远程仓库默认名称为 origin")])]),this._v(" "),e("li",[e("p",[this._v("git remote -v 显示更详细的信息")])]),this._v(" "),e("li",[e("p",[this._v("git push -u origin master 推送 master 分支到 origin 远程仓库。")])]),this._v(" "),e("li",[e("p",[this._v("git push -u origin other 推送 other 到 origin 远程仓库。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"抓取分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#抓取分支","aria-hidden":"true"}},[this._v("#")]),this._v(" 抓取分支")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://book.52react.cn/20191029131528.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git pull 把最新的提交从远程仓库中抓取下来，在本地合并，解决冲突。在进行 git pull")])]),this._v(" "),e("li",[e("p",[this._v("如果 git pull 也失败了，还要指定分支之间的链接，这一步 Git 会提醒你怎么做。然后再 git pull。")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("p",[t._v("首先，可以试图用 git push origin")]),t._v(" "),i("p",[t._v("推送自己的修改；")])]),t._v(" "),i("li",[i("p",[t._v("如果推送失败，则因为远程分支比你的本地更新，需要先用 git pull 试图合并；")])]),t._v(" "),i("li",[i("p",[t._v("如果合并有冲突，则解决冲突，并在本地提交；")])]),t._v(" "),i("li",[i("p",[t._v("没有冲突或者解决掉冲突后，再用 git push origin")]),t._v(" "),i("p",[t._v("推送就能成功！")])]),t._v(" "),i("li",[i("p",[t._v("如果 git pull 提示 no tracking information，则说明本地分支和远程分支的链接关系没有创建，用命令 git branch --set-upstream-to origin/。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rebase","aria-hidden":"true"}},[this._v("#")]),this._v(" Rebase")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"标签管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签管理","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("strong",[this._v("标签管理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建标签")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git branch 查看当前分支, git checkout master 切换到 master 分支。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("默认标签是打在最新提交的 commit 上的。如果想要打标签在以前的 commit 上，要 git log 找到历史提交的 commit id.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("如果一个 commt id 是 du2n2d9, 执行 git tag v1.0 du2n2d9 就把这个版本打上了 v1.0 的标签了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git tag 查看所有标签，可以知道历史版本的 tag")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("标签不是按时间顺序列出，而是按字母排序的。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v('git tag -a <标签名> -m "< 说明 >", 创建带说明的标签。-a 指定标签名，-m 指定说明文字。用 show 可以查看说明。')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"操作标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 操作标签")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git tag -d v1.0 删除标签。因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git push origin --tags 一次性推送全部尚未推送到远程的本地标签")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("如果标签推送到远程。git tag -d v1.0 先删除本地标签 v1.0。git push origin :refs/tags/v1.0 删除远程标签 v1.0")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"自定义-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义-git","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 Git")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("git config --global color.ui true 让 Git 显示颜色，会让命令输出看起来更醒目")])]),this._v(" "),e("li",[e("p",[this._v("忽略特殊文件 创建一个. gitignore 文件，把需要忽略的文件名填进去。Git 就会自动忽略这些文件。我也在学习中遇到过这样的问题，比如 node_modules 文件就可以忽略。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("忽略文件原则：忽略操作系统自动生成的文件，比如缩略图等；忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的. class 文件；忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("给 Git 命令配别名, 这个有点骚，就是你以后想输入 git rebase 时, 你给它一个 “外号”，就叫它 git nb。以后你可以通过 git nb 来代替 git rebase。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"常用-git-命令总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用-git-命令总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 常用 Git 命令总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v('git config --global user.name "你的名字" 让你全部的 Git 仓库绑定你的名字')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v('git config --global user.email "你的邮箱" 让你全部的 Git 仓库绑定你的邮箱')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git init 初始化你的仓库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git add . 把工作区的文件全部提交到暂存区")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v('git commit -m "xxx" 把暂存区的所有文件提交到仓库区，暂存区空空荡荡')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git remote add origin https://github.com/name/name_cangku.git 把本地仓库与远程仓库连接起来")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git push -u origin master 把仓库区的主分支 master 提交到远程仓库里")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git push -u origin <其他分支> 把其他分支提交到远程仓库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git status 查看当前仓库的状态")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git diff 查看文件修改的具体内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git log 显示从最近到最远的提交历史")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git clone + 仓库地址下载克隆文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git reset --hard + 版本号 回溯版本，版本号在 commit 的时候与 master 跟随在一起")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git reflog 显示命令历史")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git rm 删除版本库的文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git branch 查看当前所有分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git branch <分支名字> 创建分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git checkout <分支名字> 切换到分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git merge <分支名字> 合并分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git branch -d <分支名字> 删除分支, 有可能会删除失败，因为 Git 会保护没有被合并的分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git branch -D + <分支名字> 强行删除，丢弃没被合并的分支")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git log --graph 查看分支合并图")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git merge --no-ff <分支名字> 合并分支的时候禁用 Fast forward 模式, 因为这个模式会丢失分支历史信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git stash 当有其他任务插进来时，把当前工作现场 “存储” 起来, 以后恢复后继续工作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git stash list 查看你刚刚 “存放” 起来的工作去哪里了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git stash apply 恢复却不删除 stash 内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git stash drop 删除 stash 内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git stash pop 恢复的同时把 stash 内容也删了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git remote 查看远程库的信息，会显示 origin，远程仓库默认名称为 origin")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git remote -v 显示更详细的信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git pull 把最新的提交从远程仓库中抓取下来，在本地合并, 和 git push 相反")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git rebase 把分叉的提交历史 “整理” 成一条直线，看上去更直观")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git tag 查看所有标签，可以知道历史版本的 tag")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git push origin --tags 一次性推送全部尚未推送到远程的本地标签")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("git config --global color.ui true 让 Git 显示颜色，会让命令输出看起来更醒目")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("END")])])}],!1,null,null,null);e.default=r.exports}}]);