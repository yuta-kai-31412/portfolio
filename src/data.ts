import { Project, TimelineEvent, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: {
    ja: "皆藤 優太",
    en: "Yuta Kaito"
  },
  university: "和歌山大学大学院 システム工学研究科 デザイン科学専攻",
  bio: "建築デザインの経験を持ちながら、建築情報学・情報工学を学び、AIやアプリケーション開発を組み合わせた「建築のデジタル化・最適化」を研究・実践しています。空間をつくるだけでなく、テクノロジーを用いて「つくるプロセスそのものを豊かに効率化する」ことを目指しています。",
  profileImage: "images/profile/self.jpeg"
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2018",
    month: "4月",
    title: "大阪府立生野高等学校 文理科",
    organization: "入学",
    description: "文理科にて高度な基礎学力と論理的・科学的思考力を養い、実空間の創造への深い関心を持つきっかけを得る。"
  },
  {
    year: "2021",
    month: "4月",
    title: "和歌山大学 システム工学部",
    organization: "入学",
    description: "独自のダブルメジャー制度により建築と環境のデザインを主として学び、建築設計を学ぶ傍ら、デジタル技術の建築への応用に興味を持つ。"
  },
  {
    year: "2025",
    month: "4月",
    title: "和歌山大学大学院 システム工学研究科 デザイン科学専攻",
    organization: "入学",
    description: "空間デザイン研究室に所属し、建築とDXをテーマとしアイデア発想における生成AIの活用について研究中。"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "BIM / 3D CAD",
    icon: "Layers",
    image: "images/skill/3d.png",
    skills: [
      { name: "Archicad", level: 5, description: "設計事務所アルバイトでのBIM設計検討プロセスの構築、リアルタイムディスカッションに活用。", iconImage: "images/skill/tool_icon/archicad.png" },
      { name: "Revit", level: 4, description: "建築製図から構造BIMへのデータ変換、属性情報の定義や配筋検討への応用。", iconImage: "images/skill/tool_icon/revit.png" },
      { name: "AutoCAD", level: 4, description: "高精度な実施設計図、詳細施工図面および2Dレイアウト図面の作成・管理。", iconImage: "images/skill/tool_icon/autocad.png" },
      { name: "Shapr3D", level: 4, description: "iPadを用いたクイックな建築モックアップ作成や、直感的な初期デザイン検証。", iconImage: "images/skill/tool_icon/shaper3d.png" }
    ]
  },
  {
    title: "Rendering / Visualization",
    icon: "Image",
    image: "images/skill/rendering.jpeg",
    skills: [
      { name: "Twinmotion", level: 5, description: "フォトリアルレンダリング、プレゼンテーション用ウォークスルー動画の全自動レンダリング。", iconImage: "images/skill/tool_icon/twinmotion.png" },
      { name: "Morpholio Trace", level: 5, description: "スケッチとCADデータを組み合わせた重ね書き、パース構築やコンセプトの視覚表現。", iconImage: "images/skill/tool_icon/morpholio.jpeg" }
    ]
  },
  {
    title: "Design / Illustration",
    icon: "Palette",
    image: "images/skill/design.jpeg",
    skills: [
      { name: "Illustrator", level: 4, description: "提案書、コンペ用プレゼンテーションボード、図面・パースのレイアウト構成と編集。", iconImage: "images/skill/tool_icon/illustrator.png" },
      { name: "Affinity Suite", level: 4, description: "軽快なベクターイラスト作成、ポスターデザインやレイアウト図書のデジタル編集。", iconImage: "images/skill/tool_icon/affinity.png" },
      { name: "Procreate & Concepts", level: 4, description: "建築の初期スケッチ、空間パースのアナログ表現とデジタルペイントのハイブリッド。", iconImage: "images/skill/tool_icon/procreate.jpeg" }
    ]
  },
  {
    title: "AI / Technology",
    icon: "Cpu",
    image: "images/skill/ai.jpg",
    skills: [
      { name: "Gemini / Claude API", level: 5, description: "建築着想アプリケーションでのAPI統合、構造化データ出力、プロンプトエンジニアリング連携。", iconImage: "images/skill/tool_icon/gemini.png" },
      { name: "JavaScript (GAS)", level: 5, description: "個人経営店向けのシフト管理自動化、GoogleスプレッドシートやGmailを連携したフルスタックDX化。" },
      { name: "Python", level: 4, description: "建築画像変換モデルの制御、AI発想支援ツールのバックエンドロジック構築。" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "デジタル技術による設計プロセスの効率化とBBQ場の竣工",
    subtitle: "建築プロセスの高速化と実建築の現実化",
    description: "個人設計事務所でのアルバイトにおける設計プロセスの変革。Shapr3Dによるモデルの構築、Morpholio Traceによるパース作成の導入提案により、より多くのアイデアを検討し、自身の案が反映されたBBQ場が実際に竣工。",
    detailedDescription: "個人設計事務所でのアルバイトに際して、Shapr3Dによるモデルの構築およびMorpholio Trace（モルフォリオ・トレース）によるパース作成の導入提案を行いました。これにより、伝統的な図面修正に伴う二度手間や手戻りの回数を劇的に減少させ、かつ限られた検証期間内にこれまで以上に多くの革新的なアイデアを深く検討することができました。この効率的でクリエイティブなアプローチを用いてデザインした自身の案が正式に反映され、実地にて素晴らしいBBQ（バーベキュー）場が竣工を遂げました。",
    image: "images/project/project01.png",
    technologies: ["Shapr3D", "Morpholio Trace", "Procreate"],
    duration: "2023年6月 - 2024年4月",
    role: "アイデア提案、モデリング、パース作成",
    insights: [
      "2Dの平面からBIMベースのリアルタイム3Dへの思考のシフト",
      "手書きとモデリングによる効率化したワークフロー",
      "実地設計・マテリアル・ディテールへの直接的な関与と、施工・竣工プロセスの体感"
    ]
  },
  {
    id: "project-02",
    title: "建築初期段階における生成AIを活用したアイデア発想支援",
    subtitle: "人間とAIが共創する「着想支援の設計」",
    description: "設計の「一番はじめのアイデア出し」においてAIが設計者の思考をどう助けるかを実証的に探究する研究。",
    detailedDescription: "現在の建築設計実務において、生成AIの活用は急速に広がっていますが、その多くはパース作成などの最終成果物のレンダリングに留まっています。本研究では、設計の「一番はじめのアイデア出し」においてAIが設計者の思考をどう助けるかを実証的に明らかにします。複雑なアルゴリズムの構築ではなく、「既存のツールをどう組み合わせれば設計が楽しく、豊かになるか」という実践的な視点を重視します。",
    image: "images/project/project02.png",
    technologies: ["Gemini", "Claude", "ChatGPT", "Google AI Studio", "Antigravity"],
    duration: "2025年4月 - 現在",
    role: "研究者",
    insights: [
      "AIは創造できない、人間が創造するものである",
      "AIと建築家が共創していくのが今後の建築家に求められるものである",
      "複雑な知識なしに誰もが扱うことのできるツールの必要性"
    ]
  },
  {
    id: "project-03",
    title: "GASとスプレッドシートを用いたシフト管理システムと業務改善",
    subtitle: "個人飲食店向けデジタルシフト管理＆業務プロセスの変革",
    description: "手書きシフト管理による転記ミスや利便性の課題を解決。Google Apps Scriptを活用したWebアプリケーションを構築し、発注票・マニュアルのデジタル化など店舗運営をトータルに改善。",
    detailedDescription: "アルバイト先の個人経営の飲食店で、コストがかかることと導入ハードルから手書きでのシフト管理が行われていたが、シフト間違いや出勤しなければシフトを提出できないなどの問題があった。そこでGoogle spreadsheetのappsscript機能を用いたシフト管理ウェブアプリケーションを開発。これによりいつでも誰でも容易に利用できるシフト管理システムを導入できた。またこのほかにも発注票の作成、マニュアルの作成などデジタル技術を用いた業務改善を行った、",
    image: "images/project/project03.jpg",
    technologies: ["Google Apps Script", "Google Spreadsheets", "HTML5", "CSS3"],
    duration: "2025年4月 - 現在",
    role: "ホール、キッチンスタッフ、業務改善プランナー",
    insights: [
      "コストをかけずに利用できる、持続可能なアプリケーションの開発",
      "システムに不慣れな従業員も直感的に利用できる、簡素なスマートフォン入力インターフェースの構築",
      "いつか改善しようではなく、課題を迅速に改善する姿勢"
    ]
  }
];

export const INTERESTS = [
  {
    id: "camera",
    icon: "Camera",
    title: "📷 Camera / 写真",
    description: "日常のきらめきや街角のスナップ撮影",
    detail: "旅先や街歩きをしながら、光が美しく差し込む瞬間や、人々のふとした表情をカメラで切り取るのが何よりの楽しみです。愛機を片手に、季節の美しい移ろいや、何気ない日常の中に宿る一瞬のドラマを探求しています。",
    image: "images/hobby/camera.jpeg"
  },
  {
    id: "aikido",
    icon: "Award",
    title: "🥋 合気道",
    description: "心身を柔軟に鍛える円の動きと調和",
    detail: "長年精進を重ねて合気道二段を取得しました。腕力で力任せに相手と競い合うのではなく、自らの姿勢（中心軸）を安定させ、流れるような円運動で相手の力と同調して柔らかくいなす姿勢を大切にしています。日々の礼儀作法や静かな集中力の向上、精神修行としての魅力を感じています。",
    image: "images/hobby/aikido.jpeg"
  },
  {
    id: "mahjong",
    icon: "Compass",
    title: "🀄 麻雀",
    description: "一瞬の決断力を競う心理と確率のゲーム",
    detail: "限られた情報（捨牌や配牌の傾向）を元に、確率的な選択肢を組み立てながら、同席するプレイヤーとの駆け引きや心理戦を行うことに惹かれています。常に冷静沈着な状況判断力を養い、攻めと守りの絶妙なタイミングを見極める高い戦略性を楽しんでいます。",
    image: "images/hobby/mahjong.jpeg"
  },
  {
    id: "cooking",
    icon: "ChefHat",
    title: "🍳 料理 ＆ ラーメン巡り",
    description: "丁寧な仕込みが生み出す極上の一品",
    detail: "素材の組み合わせや加熱時間を丁寧見極め、自分のこだわりを詰め込んだ料理を一から作るのがお気に入りのリフレッシュ方法です。また、週末には全国のこだわりラーメン店を巡り、熟練の店主が生み出す個性豊かなスープの調和や調理技術に感動をもらっています。",
    image: "images/hobby/food.jpeg"
  }
];
