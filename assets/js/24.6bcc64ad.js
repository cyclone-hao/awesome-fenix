(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{417:function(t,e,r){t.exports=r.p+"assets/img/layed-arch.8e054a47.png"},505:function(t,e,r){"use strict";r.r(e);var s=r(11),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"单体系统时代"}},[t._v("单体系统时代")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("单体架构（Monolithic）")]),t._v(" "),s("p",[t._v("“单体”只是表明系统中主要的过程调用都是进程内调用，不会发生进程间通讯，仅此而已。")])]),t._v(" "),s("p",[t._v("单体系统是绝大部软件从业者都学习、实践过的架构形式，许多介绍微服务的书籍和技术资料中也把这种架构形式称作“巨石系统”，且某些文章中为对比展示出微服务架构的优点，往往会或有意或无意地强调、放大这种架构形式的缺点，以至于让人获得某种巨石系统就“人如其名”是铁板一块无可拆分也不可伸缩的，单体架构就不如微服务架构先进好用的潜在暗示。")]),t._v(" "),s("p",[t._v("如果说单体架构是一块巨石，不可拆分的显然有失偏颇，“单体”只是表明系统中主要的过程调用（不算数据库、文件、缓存等这类资源访问）都是进程内调用，不会发生"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B%E9%96%93%E9%80%9A%E8%A8%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("进程间通讯"),s("OutboundLink")],1),t._v("（Inter-Process Communication，IPC。RPC属于IPC的一种特例，但请注意这里两个“PC”不是同个单词的缩写）。事实上，笔者从来没有见过生产环境中的哪个大型的系统是完全不分层的。分层架构（Layered Architecture）已是现在大多数系统建设中普遍认可、普遍采用的设计方法，无论是单体还是微服务，抑或是其他架构风格，都会对代码进行横向拆分，收到的外部的请求在各层之间以不同形式的数据结构进行流转传递，触及最末端的数据库后依次返回响应。在这个意义上的“拆分”，单体架构完全不会展露出丝毫的弱势，反而还可能会因更容易开发、部署、测试而获得一些便捷性上的好处。")]),t._v(" "),s("div",{staticClass:"custom-block center"},[s("p",[s("img",{attrs:{src:r(417),alt:""}}),t._v("\n图片来自O'Reilly的开放文档《"),s("a",{attrs:{href:"https://www.oreilly.com/programming/free/files/software-architecture-patterns.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Software Architecture Patterns"),s("OutboundLink")],1),t._v("》")])]),t._v(" "),s("p",[t._v("至于比较微服务、单体架构哪种先进，笔者认为“先进”不能是绝对的，这点可以举一个非常浅显的例子来说明。譬如，沃尔玛将超市分为仓储部、采购部、安保部、库存管理部、巡检部、质量管理部、市场营销部，等等，可以划分职责，明确边界，让管理能力能支持企业的成长规模；但如果你家楼下开的小卖部，爸、妈加儿子，再算上看家的中华田园犬小黄一共也就只有四名员工，也去追求先进管理，划分仓储部、采购部、库存管理部……那纯粹是给自己找麻烦。")]),t._v(" "),s("p",[t._v("单体系统真正体现弱势的地方在于垂直切分上，哪怕是信息系统中两个相互毫无关联的子系统，也必须部署到一起。当系统规模小时这是优势，但系统规模大的时候，修改时候的部署成本、技术升级时的迁移成本都会变得高昂。按前面的例子来说，就是当公司小时，让安保部和质检部两个不相干的部门在同一栋大楼中办公是节约资源，但当公司人数增加，办公室已经拥挤不堪，也最多只能在楼顶加盖新楼层（相当于增强硬件性能），而不能让安保、质检分开地方办公，这才是缺陷所在。")]),t._v(" "),s("p",[t._v("不过，为了实现垂直拆分，并不意味着一定要依靠微服务架构才能解决，在新旧世纪之交，人们曾经探索过几种服务垂直拆分的方法，这些架构方法后来导致了面向服务架构（Service-Oriented Architecture）的一段兴盛期，我们称其为“SOA时代”。")])])}),[],!1,null,null,null);e.default=n.exports}}]);