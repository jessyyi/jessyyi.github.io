/*
 * Portfolio content layer
 * -----------------------
 * Update copy, contacts, and project links here. The layout and visual system
 * live in index.html, so routine portfolio updates do not require redesigning.
 */
window.PORTFOLIO_CONTENT = {
  contacts: {
    email: "jessyyi@nyu.edu",
    phone: "+1 510 774 6691",
    linkedin: "https://www.linkedin.com/in/shengqiyi",
    github: "https://github.com/jessyyi",
    wechat: "Jessyyi220160"
  },
  projects: {
    uplift: {
      presentation: "Shengqi-Yi-Uplift-Modeling-Presentation.pptx"
    },
    airbnb: {
      live: "https://jessyyi.github.io/nyc-airbnb-recommendation/",
      source: "https://github.com/jessyyi/nyc-airbnb-recommendation"
    },
    delivery: {
      presentation: "Shengqi-Yi-Amazon-Delivery-Efficiency-Presentation.pptx"
    }
  },
  en: {
    title: "Shengqi Yi — Data Science, ML & Quant",
    description: "Shengqi (Jessy) Yi — NYU data science master's student working across product analytics, machine learning, and quantitative decision-making.",
    text: {
      ".nav-links > a:nth-of-type(1)": "Work",
      ".nav-links > a:nth-of-type(2)": "Experience",
      ".nav-links > a:nth-of-type(3)": "About",
      ".nav-links > a:nth-of-type(4)": "Resume ↗",
      ".intro": "I’m Shengqi (Jessy) Yi, an M.S. in Data Science student at NYU building analytical systems across product, machine learning, and quantitative finance.",
      ".hero-actions a:nth-child(2)": "View résumé ↗",
      ".window-top > span:nth-child(2)": "DECISION SYSTEM / OVERVIEW",
      ".side-label": "Focus",
      ".canvas-kicker": "Incremental impact",
      ".canvas-title": "Finding signal in behavior",
      ".metric small": "REALIZED UPLIFT",
      "#work .section-kicker": "01 / Selected work",
      "#work .section-intro": "Four projects spanning causal machine learning, geospatial recommendation, operational modeling, and large-scale graph systems.",
      "#work .project:nth-child(1) .project-id": "Causal ML · 12.7M+ interactions",
      "#work .project:nth-child(1) h3": "E-commerce treatment optimization",
      "#work .project:nth-child(1) > p": "Estimated heterogeneous treatment effects with logistic regression and causal forests, then ranked users by predicted incremental conversion.",
      "#work .project:nth-child(2) .project-id": "Geospatial · NYC",
      "#work .project:nth-child(2) h3": "Airbnb recommendation & market analytics",
      "#work .project:nth-child(2) > p": "Combined 36K+ listings, 1M+ reviews, and accessibility features into a scoring system for neighborhood and property comparison.",
      "#work .project:nth-child(3) .project-id": "Applied ML · 8.6K+ deliveries",
      "#work .project:nth-child(3) h3": "Delivery efficiency optimization",
      "#work .project:nth-child(3) > p": "Compared regression and tree-based models, identified operating drivers, and simulated changes associated with a 5.2% improvement.",
      "#work .project:nth-child(4) .project-id": "Data structures · Large-scale graph",
      "#work .project:nth-child(4) h3": "Distributed semantic network",
      "#work .project:nth-child(4) p": "Built a Java system for hierarchical WordNet search, multi-keyword semantic association, and N-gram frequency tracking with BFS and hash-based indexing.",
      "#experience .section-kicker": "02 / Experience",
      "#experience .section-intro": "I’ve worked with consumer-platform data, enterprise AI pipelines, financial research, and credit-risk models.",
      "#experience .role:nth-child(1) h3": "Part-Time Assistant",
      "#experience .role:nth-child(1) .role-company": "Boston Consulting Group · Shanghai / Hong Kong",
      "#experience .role:nth-child(1) p": "Built configurable Python and YAML data pipelines with NLP safety modules, and analyzed industrial demand across 20+ procurement projects.",
      "#experience .role:nth-child(2) h3": "Data Analyst Intern",
      "#experience .role:nth-child(2) .role-company": "Xiaohongshu (RedNote) · Shanghai",
      "#experience .role:nth-child(2) p": "Diagnosed performance across 100K+ merchants using SQL, tracked RMB 21.4M daily GMV and 34% YoY growth, and identified high-growth cohorts.",
      "#experience .role:nth-child(3) h3": "Industry Research Intern",
      "#experience .role:nth-child(3) .role-company": "Industrial Securities · Shanghai",
      "#experience .role:nth-child(3) p": "Built 7+ financial databases and classified cycle stages across 31 primary and 134 secondary A-share industries over 20 years.",
      "#experience .role:nth-child(4) h3": "Financial Risk Control Intern",
      "#experience .role:nth-child(4) .role-company": "PricewaterhouseCoopers · Shanghai",
      "#experience .role:nth-child(4) p": "Developed reproducible Python workflows for 24-month credit migration matrices and six-month loan-level loss-given-default analysis.",
      "#about .section-kicker": "03 / About",
      "#about .about-copy > p:nth-child(1)": "My path—from accounting and economic statistics at SUFE to computer science at UC Berkeley and data science at NYU—shapes how I work: understand the decision first, then choose the right analytical tool.",
      "#about .about-copy > p:nth-child(2)": "I’m especially interested in product data science, experimentation, applied machine learning, and quantitative finance.",
      "#about .school:nth-child(1) span": "M.S. DATA SCIENCE · 2028",
      "#about .school:nth-child(2) span": "ACCOUNTING + ECON STATS · 2026",
      "#about .school:nth-child(4) span": "TIME SERIES · EXCHANGE 2025",
      "footer .footer-head p": "Based in New York City and open to Summer 2027 opportunities in data science, ML, and quantitative roles.",
      "footer .contact:nth-child(1) small": "Email",
      "footer .contact:nth-child(2) small": "Phone",
      "footer .contact:nth-child(3) small": "LinkedIn",
      "footer .contact:nth-child(4) small": "GitHub",
      "footer .fineprint > span:last-child": "New York · Shanghai"
    },
    html: {
      ".hero .eyebrow": "<span class=\"eyebrow-dot\"></span>NYC · Open to Summer 2027",
      ".hero h1": "Data, products,<br><span class=\"gradient-text\">and better decisions.</span>",
      ".hero-actions a:first-child": "Explore my work <span aria-hidden=\"true\">↓</span>",
      "#work .section-head h2": "Built around<br>real decisions.",
      "#experience .section-head h2": "Across products,<br>markets & risk.",
      "#about h2": "Business context.<br>Technical depth.",
      "footer .footer-head h2": "Let’s turn data<br>into direction."
    },
    airbnb: {
      details: "View project details",
      live: "Open interactive system ↗",
      source: "View source on GitHub ↗",
      close: "Close",
      kicker: "Featured project · Product & geospatial analytics",
      title: "NYC Airbnb Analytics & Recommendation",
      lede: "A bilingual, interactive recommendation system that turns listing, review, neighborhood, transit, and lifestyle signals into personalized NYC stay recommendations.",
      stats: [["36,445", "listings analyzed"], ["$132", "average nightly price"], ["28.3%", "active listings"], ["32.4%", "low-activity listings"]],
      panels: [
        ["What it does", "Users can set a budget, persona, room preference, target destination, and minimum rating to receive ranked recommendations with transparent reasons."],
        ["How it works", "The system combines market segmentation, accessibility features, quality signals, and weighted scoring, then visualizes listings, targets, and subway access on a map."]
      ],
      copied: "WeChat ID copied"
    },
    presentation: "View presentation ↗"
  },
  zh: {
    title: "益晟旗｜数据科学、机器学习与量化分析",
    description: "益晟旗（Jessy Yi）— 纽约大学数据科学硕士，关注产品分析、机器学习和量化决策。",
    text: {
      ".nav-links > a:nth-of-type(1)": "项目",
      ".nav-links > a:nth-of-type(2)": "经历",
      ".nav-links > a:nth-of-type(3)": "关于我",
      ".nav-links > a:nth-of-type(4)": "简历 ↗",
      ".intro": "我是益晟旗（Jessy Yi），纽约大学数据科学硕士研究生，专注于产品数据科学、机器学习与量化金融中的分析和决策系统。",
      ".hero-actions a:nth-child(2)": "查看简历 ↗",
      ".window-top > span:nth-child(2)": "决策系统 / 总览",
      ".side-label": "方向",
      ".canvas-kicker": "增量影响",
      ".canvas-title": "从行为中识别有效信号",
      ".metric small": "实际转化提升",
      "#work .section-kicker": "01 / 代表项目",
      "#work .section-intro": "四个项目覆盖因果机器学习、地理空间推荐、运营建模和大规模图结构系统。",
      "#work .project:nth-child(1) .project-id": "因果机器学习 · 1,270万+ 随机实验记录",
      "#work .project:nth-child(1) h3": "电商优惠券增量效果优化",
      "#work .project:nth-child(1) > p": "使用逻辑回归和因果森林估计异质性处理效应，并按照预测的增量转化效果对用户进行排序。",
      "#work .project:nth-child(2) .project-id": "地理空间分析 · 纽约",
      "#work .project:nth-child(2) h3": "Airbnb 个性化推荐与市场分析",
      "#work .project:nth-child(2) > p": "整合3.6万+房源、100万+评论和交通生活便利度特征，构建社区与房源的综合评分和推荐系统。",
      "#work .project:nth-child(3) .project-id": "应用机器学习 · 8,600+ 配送记录",
      "#work .project:nth-child(3) h3": "配送效率预测与运营优化",
      "#work .project:nth-child(3) > p": "比较回归与树模型，识别关键运营因素，并模拟出与预测效率提升5.2%相关的改进方案。",
      "#work .project:nth-child(4) .project-id": "数据结构 · 大规模图网络",
      "#work .project:nth-child(4) h3": "分布式语义网络与词频追踪",
      "#work .project:nth-child(4) p": "使用 Java、BFS 和哈希索引构建 WordNet 层级语义搜索、多关键词关联查询和 N-gram 词频追踪系统。",
      "#experience .section-kicker": "02 / 实习经历",
      "#experience .section-intro": "我的实践覆盖消费互联网数据、企业级 AI 数据管线、金融研究与信用风险建模。",
      "#experience .role:nth-child(1) h3": "兼职项目助理",
      "#experience .role:nth-child(1) .role-company": "波士顿咨询公司 · 上海 / 香港",
      "#experience .role:nth-child(1) p": "使用 Python、YAML 和 NLP 安全模块搭建可配置数据管线，并分析20+采购项目中的工业市场需求。",
      "#experience .role:nth-child(2) h3": "数据分析实习生",
      "#experience .role:nth-child(2) .role-company": "小红书 · 上海",
      "#experience .role:nth-child(2) p": "使用 SQL 诊断10万+商家经营表现，追踪日GMV 2,140万元和34%同比增长，并识别高增长商家群体。",
      "#experience .role:nth-child(3) h3": "行业研究实习生",
      "#experience .role:nth-child(3) .role-company": "兴业证券 · 上海",
      "#experience .role:nth-child(3) p": "搭建7+金融数据库，并对31个一级、134个二级A股行业的20年生产周期阶段进行分类分析。",
      "#experience .role:nth-child(4) h3": "金融风险控制实习生",
      "#experience .role:nth-child(4) .role-company": "普华永道 · 上海",
      "#experience .role:nth-child(4) p": "使用 Python 构建可复现分析流程，完成24个月信用迁徙矩阵和6个月贷款级违约损失率分析。",
      "#about .section-kicker": "03 / 关于我",
      "#about .about-copy > p:nth-child(1)": "从上海财经大学的会计与经济统计，到加州大学伯克利分校的计算机课程，再到纽约大学的数据科学训练，这条路径塑造了我的工作方式：先理解决策问题，再选择合适的分析工具。",
      "#about .about-copy > p:nth-child(2)": "我尤其关注产品数据科学、实验与因果推断、应用机器学习和量化金融。",
      "#about .school:nth-child(1) span": "数据科学硕士 · 2028",
      "#about .school:nth-child(2) span": "国际会计 + 经济统计 · 2026",
      "#about .school:nth-child(4) span": "时间序列 · 交换学习 2025",
      "footer .footer-head p": "现居纽约，正在寻找2027年暑期的数据科学、机器学习和量化相关机会。",
      "footer .contact:nth-child(1) small": "邮箱",
      "footer .contact:nth-child(2) small": "电话",
      "footer .contact:nth-child(3) small": "领英",
      "footer .contact:nth-child(4) small": "GitHub",
      "footer .fineprint > span:last-child": "纽约 · 上海"
    },
    html: {
      ".hero .eyebrow": "<span class=\"eyebrow-dot\"></span>纽约 · 寻找 2027 暑期机会",
      ".hero h1": "让数据成为<br><span class=\"gradient-text\">更好的决策。</span>",
      ".hero-actions a:first-child": "浏览我的项目 <span aria-hidden=\"true\">↓</span>",
      "#work .section-head h2": "围绕真实决策<br>构建分析系统。",
      "#experience .section-head h2": "跨越产品、<br>市场与风险。",
      "#about h2": "商业理解。<br>技术深度。",
      "footer .footer-head h2": "让数据<br>指向行动。"
    },
    airbnb: {
      details: "查看项目详情",
      live: "打开交互式推荐系统 ↗",
      source: "在 GitHub 查看源码 ↗",
      close: "关闭",
      kicker: "重点项目 · 产品与地理空间分析",
      title: "纽约 Airbnb 分析与个性化推荐",
      lede: "一个支持中英文的交互式推荐系统，将房源、评论、社区、地铁和生活便利度信号转化为个性化的纽约住宿建议。",
      stats: [["36,445", "分析房源"], ["$132", "平均每晚价格"], ["28.3%", "活跃房源"], ["32.4%", "低活跃房源"]],
      panels: [
        ["它解决什么问题", "用户可以设置预算、出行人群、房型偏好、目标地点和最低评分，获得带有透明推荐理由的房源排序。"],
        ["它如何工作", "系统结合市场细分、交通便利度、房源质量和加权评分，并在地图上展示房源、目标地点和附近地铁。"]
      ],
      copied: "微信号已复制"
    },
    presentation: "查看演示文稿 ↗"
  }
};
