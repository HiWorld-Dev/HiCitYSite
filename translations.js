const T = {
  zh: {
    nav: {
      home: '首页', about: '关于我们', services: '业务板块',
      ai: 'AI技术', cases: '项目案例', partners: '合作伙伴', contact: '联系我们'
    },
    hero: {
      tag: '企业智能化改造 · 数字化转型服务商',
      title: '高效价值交付',
      subtitle: '助力客户成功',
      desc: '融合云计算、大数据、人工智能与移动互联，为制造、能源、金融、教育等行业提供全生命周期数字化解决方案。',
      cta1: '了解我们', cta2: '联系我们'
    },
    stats: [
      { num: '2018', label: '年成立', sub: '大连高新园区' },
      { num: '32', label: '项著作权', sub: '含15项独有著作权' },
      { num: 'AAA', label: '国家信用等级', sub: '四板挂牌企业' },
      { num: '100+', label: '项系统交付', sub: '覆盖多国多行业' }
    ],
    about: {
      tag: '关于我们',
      title: '科技向善，人文创新',
      p1: '大连海思特信息技术有限责任公司（HiCitY.World）成立于2018年，位于大连高新技术产业园区，是专注于企业智能化改造与数字化转型的技术服务商。',
      p2: '公司拥有独立软硬件研发团队，完善的研发与知识产权体系，资深IT管理团队与全流程项目交付能力，服务范围覆盖中国、日本、加拿大及香港等国家和地区。',
      items: ['独立软硬件研发团队', '完善知识产权体系', '全流程项目交付', '国家AAA级信用企业']
    },
    services: {
      tag: '核心业务',
      title: '全方位数字化服务体系',
      list: [
        { title: '软件开发', desc: '面向制造、高校、物流、医疗等行业定制开发商业价值软件，提供需求分析→设计→编码→测试→运维全生命周期服务。' },
        { title: '咨询服务', desc: '提供应用系统实施、信息化管理、技术方案支持等专业咨询，聚焦制造、零售、医疗等行业，助力企业提效与创新。' },
        { title: '数字化转型', desc: '融合云计算、大数据、AI、移动互联等技术，推动企业全要素数字化、智能化，重构业务流程与生产方式。' },
        { title: '定制开发与实施', desc: '提供软件定制、外包、一体化解决方案，典型场景包含港务票务、高校教务、ERP/CRM/OA、电商平台等。' },
        { title: 'AI技术应用', desc: '构建人机交互、知识自动化与辅助决策体系，覆盖OCR识别、人脸识别、人体分析、图像识别等核心AI能力。' }
      ]
    },
    ai: {
      tag: '人工智能',
      title: 'AI-Native',
      desc: '实践AI-Native范式，为智慧政务、智慧城市、智慧旅游、应急安全、新零售、供应链金融等领域提供AI赋能。',
      list: [
        { title: 'AI Agent 开发', desc: '构建自主推理与任务执行的智能体系统，覆盖多Agent协作、工具调用、知识检索增强（RAG）等场景。' },
        { title: '人脸与生物识别', desc: '身份认证、人脸考勤测温（精度99.83%）、活体检测、安防预警与门禁管控。' },
        { title: '视觉与场景分析', desc: '客流统计、行为异常检测、人群密度预警、仪表读数识别（识别率>95%）。' },
        { title: '大模型应用集成', desc: '基于主流LLM构建企业专属知识库、智能问答、文档处理与辅助决策系统。' }
      ]
    },
    cases: {
      tag: '项目案例',
      title: '深耕多行业的实践经验',
      tabs: ['教育', '文旅', '金融', '商业', '政务'],
      list: {
        教育: ['大连理工大学智慧教务系统', '东北财经大学综合教务平台', '北京城市学院在线考试系统', '大连舰艇学院教考分离平台', '高校教务管理与智能排课系统'],
        文旅: ['大连旅游集散中心票务系统', '皮口港智慧港务平台', '小水口景区综合管理系统', '多地智慧文旅大数据平台'],
        金融: ['阜新银行数字化平台', '大连银行业务系统', '内蒙银联支付平台', '供应链金融管理系统'],
        商业: ['中国移动业务支撑系统', '住友电工协同管理平台', '冰山集团ERP系统', '中联云仓智慧仓储', '汽车服务一体化平台'],
        政务: ['大连政务服务大厅系统', '大连公安连小智AI助手', '佛山跨境电商综合平台', '智慧政务AI繁简分流']
      }
    },
    partners: { tag: '合作伙伴', title: '携手行业领先企业共创价值' },
    contact: {
      tag: '联系我们',
      title: '期待与您合作',
      desc: '无论您处于数字化转型的哪个阶段，我们都愿意为您提供专业支持。',
      addr: '大连市高新技术产业园区三丰大厦B座20F',
      email: 'dev@hicity.world',
      brand: 'HiCitY.World',
      company: '大连海思特信息技术有限责任公司',
      slogan: '高效价值交付，助力客户成功',
      btn: '立即联系'
    },
    footer: {
      rights: '© 2025 大连海思特信息技术有限责任公司 版权所有',
      icp: ''
    }
  },

  en: {
    nav: {
      home: 'Home', about: 'About', services: 'Services',
      ai: 'AI Tech', cases: 'Cases', partners: 'Partners', contact: 'Contact'
    },
    hero: {
      tag: 'Enterprise Digitalization & Intelligent Transformation',
      title: 'High-Performance',
      subtitle: 'Value Delivery',
      desc: 'Leveraging cloud computing, big data, AI and mobile internet to deliver full-lifecycle digital solutions across manufacturing, energy, finance, education and more.',
      cta1: 'Learn More', cta2: 'Contact Us'
    },
    stats: [
      { num: '2018', label: 'Est. Year', sub: 'Dalian Hi-Tech Zone' },
      { num: '32', label: 'Copyrights', sub: '15 Proprietary' },
      { num: 'AAA', label: 'Credit Rating', sub: 'Listed Enterprise' },
      { num: '100+', label: 'Systems Delivered', sub: 'Multi-country' }
    ],
    about: {
      tag: 'About Us',
      title: 'Technology for Good, Human Innovation',
      p1: 'HiCitY (Dalian HiCity Technology Co., Ltd.) was founded in 2018 in the Dalian Hi-Tech Industrial Development Zone, specializing in enterprise intelligent transformation and digital transition services.',
      p2: 'With an independent R&D team, robust IP framework, and end-to-end project delivery capabilities, we serve clients across China, Japan, Canada, and Hong Kong.',
      items: ['Independent R&D Team', 'Strong IP Framework', 'Full-Lifecycle Delivery', 'National AAA Credit']
    },
    services: {
      tag: 'Services',
      title: 'Comprehensive Digital Service Portfolio',
      list: [
        { title: 'Software Development', desc: 'Custom commercial software for manufacturing, universities, logistics, healthcare and more — covering requirements through operations.' },
        { title: 'Consulting', desc: 'IT consulting on system implementation, information management, and technical solutions for manufacturing, retail, and healthcare industries.' },
        { title: 'Digital Transformation', desc: 'Drive full-factor digitalization by integrating cloud, big data, AI and mobile internet to reshape business processes and production models.' },
        { title: 'Custom Development', desc: 'Bespoke software, outsourcing, and integrated solutions. Typical scenarios: port ticketing, university EMS, ERP/CRM/OA, e-commerce.' },
        { title: 'AI Applications', desc: 'Human-machine interaction, knowledge automation and decision support — covering OCR, face recognition, crowd analytics and image recognition.' }
      ]
    },
    ai: {
      tag: 'AI',
      title: "AI Native",
      desc: 'AI Native first, powering smart government, smart city, smart tourism, emergency safety, new retail AI, and supply chain finance.',
      list: [
        { title: 'AI Agent Development', desc: 'Autonomous reasoning & task-execution agents: multi-agent collaboration, tool-use, RAG-enhanced knowledge retrieval.' },
        { title: 'Face & Biometric ID', desc: 'Identity auth, face attendance & temperature (99.83% accuracy), liveness detection, access control.' },
        { title: 'Vision & Scene Analysis', desc: 'Foot-traffic counting, anomaly behavior detection, crowd density alerts, meter reading (>95%).' },
        { title: 'LLM Application Integration', desc: 'Enterprise knowledge bases, intelligent Q&A, document processing and decision-support built on leading LLMs.' }
      ]
    },
    cases: {
      tag: 'Case Studies',
      title: 'Proven Experience Across Industries',
      tabs: ['Education', 'Tourism', 'Finance', 'Commercial', 'Government'],
      list: {
        Education: ['Dalian University of Technology Smart Academic System', 'DUFE Integrated Academic Platform', 'Beijing City University Online Exam System', 'PLAN Submarine Academy Exam Platform', 'Smart Scheduling & Academic Management'],
        Tourism: ['Dalian Tourism Hub Ticketing System', 'Pikou Port Smart Harbor Platform', 'Xiaoshuikou Scenic Smart Management', 'Multi-city Smart Tourism Data Platform'],
        Finance: ['Fuxin Bank Digital Platform', 'Bank of Dalian Business System', 'Inner Mongolia UnionPay System', 'Supply Chain Finance Platform'],
        Commercial: ['China Mobile Support System', 'Sumitomo Electric Collaboration Platform', 'Bingshan Group ERP', 'Zhonglian Cloud Warehouse WMS', 'Auto Service Integration Platform'],
        Government: ['Dalian Government Affairs Hall System', 'Dalian Police AI Assistant', 'Foshan Cross-border E-commerce Platform', 'AI Smart Government Triage System']
      }
    },
    partners: { tag: 'Partners', title: 'Co-creating Value with Industry Leaders' },
    contact: {
      tag: 'Contact',
      title: 'Ready to Collaborate',
      desc: 'Wherever you are in your digital transformation journey, we are here to provide expert support.',
      addr: 'S20th Floor, Building B, Sanfeng Building, High-tech Zone, Dalian City, China',
      email: 'dev@hicity.world',
      brand: 'HiCitY.World',
      company: 'Dalian HiCity Technology Co., Ltd.',
      slogan: 'High-Performance Value Delivery',
      btn: 'Get in Touch'
    },
    footer: {
      rights: '© 2025 Dalian HiCity Technology Co., Ltd. All Rights Reserved.',
      icp: 'ICP No. XXXXXXXX'
    }
  },

  ja: {
    nav: {
      home: 'ホーム', about: '会社概要', services: 'サービス',
      ai: 'AI技術', cases: '事例', partners: 'パートナー', contact: 'お問い合わせ'
    },
    hero: {
      tag: '企業スマート化・デジタルトランスフォーメーション',
      title: 'ハイパフォーマンス',
      subtitle: '価値デリバリー',
      desc: 'クラウド、ビッグデータ、AI、モバイルインターネットを融合し、製造・エネルギー・金融・教育などの分野にフルライフサイクルのデジタルソリューションを提供します。',
      cta1: '詳細を見る', cta2: 'お問い合わせ'
    },
    stats: [
      { num: '2018', label: '年設立', sub: '大連ハイテク開発区' },
      { num: '32', label: '件著作権', sub: '独自15件含む' },
      { num: 'AAA', label: '国家信用格付け', sub: '上場企業' },
      { num: '100+', label: 'システム納品', sub: '多国・多業種' }
    ],
    about: {
      tag: '会社概要',
      title: '善のテクノロジー、人文革新',
      p1: 'HiCitY（大連海思特信息技术有限责任公司）は2018年に大連ハイテク産業開発区に設立され、企業のスマート化改造とデジタルトランスフォーメーションに特化したテクノロジーサービス企業です。',
      p2: '独立したR&Dチーム、充実した知的財産体系、豊富なプロジェクト経験を持ち、中国・日本・カナダ・香港などに向けてサービスを提供しています。',
      items: ['独立研究開発チーム', '強力な知財体系', 'エンドツーエンド', '国家AAA信用格付け']
    },
    services: {
      tag: 'サービス',
      title: '包括的デジタルサービス体系',
      list: [
        { title: 'ソフトウェア開発', desc: '製造・大学・物流・医療向けカスタムソフトウェア開発、要件定義から運用まで全工程をカバー。' },
        { title: 'コンサルティング', desc: 'ITシステム導入、情報管理、技術方針などの専門コンサルティングで企業の効率化・イノベーションを支援。' },
        { title: 'デジタル変革', desc: 'クラウド・ビッグデータ・AI・モバイルを融合し、企業の全要素デジタル化・スマート化を推進。' },
        { title: 'カスタム開発', desc: 'ソフトウェアカスタマイズ、アウトソーシング、統合ソリューションを提供。港湾・教務・ERP/CRM/OA・ECなど。' },
        { title: 'AIアプリケーション', desc: '人機インタラクション・知識自動化・意思決定支援システムを構築。OCR・顔認識・群衆分析・画像認識をカバー。' }
      ]
    },
    ai: {
      tag: 'AI',
      title: 'AI ネイティブ',
      desc: 'スマート政務、スマートシティ、スマート観光、安全・防災、ニューリテールAI、サプライチェーンファイナンスへのAI適用を推進。',
      list: [
        { title: 'AI エージェント開発', desc: '自律推論・タスク実行型AIエージェント構築。マルチエージェント連携・ツール呼び出し・RAG知識検索に対応。' },
        { title: '顔・生体認識', desc: '本人確認・顔認証勤怠体温測定（精度99.83%）・生体検知・防犯警告・入退室管理。' },
        { title: '映像・シーン分析', desc: '来客数計測・異常行動検知・混雑度アラート・メーター読取（認識率>95%）。' },
        { title: 'LLMアプリケーション統合', desc: '主要LLMを活用した企業専用ナレッジベース・Q&A・文書処理・意思決定支援システム構築。' }
      ]
    },
    cases: {
      tag: '事例紹介',
      title: '多業界での豊富な実績',
      tabs: ['教育', '観光', '金融', '商業', '行政'],
      list: {
        教育: ['大連理工大学スマート教務システム', '東北財経大学総合教務プラットフォーム', '北京城市学院オンライン試験システム', '大連艦艇学院試験管理プラットフォーム', 'スマートスケジューリング教務管理'],
        観光: ['大連観光センターチケットシステム', '皮口港スマート港湾プラットフォーム', '小水口景区総合管理システム', '複数都市スマート観光データプラットフォーム'],
        金融: ['阜新銀行デジタルプラットフォーム', '大連銀行業務システム', '内モンゴル銀聯決済プラットフォーム', 'サプライチェーン金融管理システム'],
        商業: ['中国移動業務支援システム', '住友電工協働管理プラットフォーム', '氷山グループERPシステム', 'スマート倉庫管理システム', '自動車サービス統合プラットフォーム'],
        行政: ['大連行政サービスホールシステム', '大連警察AIアシスタント', '仏山越境EC総合プラットフォーム', 'スマート行政AIトリアージ']
      }
    },
    partners: { tag: 'パートナー', title: '業界リーダーと共に価値を創造' },
    contact: {
      tag: 'お問い合わせ',
      title: 'ご協力をお待ちしています',
      desc: 'デジタル変革のどの段階でも、専門的なサポートを提供いたします。',
      addr: '中国 大連市高新区三峰ビル B 棟 20 階',
      email: 'dev@hicity.world',
      brand: 'HiCitY.World',
      company: '大連海思特信息技術有限責任公司',
      slogan: 'High-Performance Value Delivery',
      btn: 'お問い合わせ'
    },
    footer: {
      rights: '© 2025 大連海思特信息技術有限責任公司 All Rights Reserved.',
      icp: 'ICP No. XXXXXXXX'
    }
  }
};

window.T = T;
