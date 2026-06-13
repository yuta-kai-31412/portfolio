// ==========================================================================
// Yuta Kaito Portfolio - Static Build script
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  /* ---------------- Header: scroll state + active section ---------------- */
  const header = document.getElementById('site-header');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = ['hero', 'about', 'projects', 'skills', 'interests'];

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);

    const scrollPos = window.scrollY + 200;
    let current = 'hero';
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = id;
        break;
      }
    }
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------------- Smooth scroll navigation ---------------- */
  document.querySelectorAll('[data-scroll-to]').forEach((el) => {
    el.addEventListener('click', () => {
      const target = document.getElementById(el.dataset.scrollTo);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      mobileNav.classList.remove('open');
    });
  });

  /* ---------------- Mobile nav toggle ---------------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const isOpen = mobileNav.classList.contains('open');
    menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });

  /* ---------------- Timeline expand/collapse (mobile) ---------------- */
  const timeline = document.getElementById('timeline');
  const timelineToggle = document.getElementById('timeline-toggle');
  const timelineLabel = document.getElementById('timeline-toggle-label');

  timelineToggle.addEventListener('click', () => {
    const expanded = timeline.classList.toggle('expanded');
    const icon = timelineToggle.querySelector('svg, i');
    const replacement = document.createElement('i');
    if (expanded) {
      timelineLabel.textContent = '経歴を折りたたむ';
      replacement.setAttribute('data-lucide', 'chevron-up');
    } else {
      timelineLabel.textContent = 'すべての経歴を表示';
      replacement.setAttribute('data-lucide', 'chevron-down');
    }
    icon.replaceWith(replacement);
    if (window.lucide) lucide.createIcons();
  });

  /* ---------------- Project modal ---------------- */
  const PROJECTS = [
    {
      title: 'デジタル技術による設計プロセスの効率化とBBQ場の竣工',
      subtitle: '建築プロセスの高速化と実建築の現実化',
      image: 'public/images/project/project01.png',
      description:
        '個人設計事務所でのアルバイトに際して、Shapr3Dによるモデルの構築およびMorpholio Trace（モルフォリオ・トレース）によるパース作成の導入提案を行いました。これにより、伝統的な図面修正に伴う二度手間や手戻りの回数を劇的に減少させ、かつ限られた検証期間内にこれまで以上に多くの革新的なアイデアを深く検討することができました。この効率的でクリエイティブなアプローチを用いてデザインされ、実地にて素晴らしいBBQ（バーベキュー）場が竣工を遂げました。',
      duration: '2023年6月 - 2024年4月',
      insights: [
        '2Dの平面からBIMベースのリアルタイム3Dへの思考のシフト',
        '手書きとモデリングによる効率化したワークフロー',
        '実地設計・マテリアル・ディテールへの直接的な関与と、施工・竣工プロセスの体感',
      ],
    },
    {
      title: '建築初期段階における生成AIを活用したアイデア発想支援',
      subtitle: '人間とAIが共創する「着想支援の設計」',
      image: 'public/images/project/project02.jpg',
      description:
        '現在の建築設計実務において、生成AIの活用は急速に広がっていますが、その多くはパース作成などの最終成果物のレンダリングに留まっています。本研究では、設計の「一番はじめのアイデア出し」においてAIが設計者の思考をどう助けるかを実証的に明らかにします。複雑なアルゴリズムの構築ではなく、「既存のツールをどう組み合わせれば設計が楽しく、豊かになるか」という実践的な視点を重視します。',
      duration: '2025年4月 - 現在',
      insights: [
        'AIは創造できない、人間が創造するものである',
        'AIと建築家が共創していくのが今後の建築家に求められるものである',
        '複雑な知識なしに誰もが扱うことのできるツールの必要性',
      ],
    },
    {
      title: 'GASとスプレッドシートを用いたシフト管理システムと業務改善',
      subtitle: '個人飲食店向けデジタルシフト管理＆業務プロセスの変革',
      image: 'public/images/project/project03.jpg',
      description:
        'アルバイト先の個人経営の飲食店で、コストがかかることと導入ハードルから手書きでのシフト管理が行われていたが、シフト間違いや出勤しなければシフトを提出できないなどの問題があった。そこでGoogle spreadsheetのappsscript機能を用いたシフト管理ウェブアプリケーションを開発。これによりいつでも誰でも容易に利用できるシフト管理システムを導入できた。またこのほかにも発注票の作成、マニュアルの作成などデジタル技術を用いた業務改善を行った、',
      duration: '2025年4月 - 現在',
      insights: [
        'コストをかけずに利用できる、持続可能なアプリケーションの開発',
        'システムに不慣れな従業員も直感的に利用できる、簡素なスマートフォン入力インターフェースの構築',
        'いつか改善しようではなく、課題を迅速に改善する姿勢',
      ],
    },
    {
      title: '感情記憶ネットワークによるアイデア発想支援アプリの提案',
      subtitle: 'ソフトバンク生成AIアイデアコンテスト 45,000件中第84位',
      image: 'public/images/project/project04.jpg',
      description:
        '日常的に写真を撮る、メモを残すといった行為に着目し、その時の環境情報やユーザーの身体情報から作成した感情推論データを紐づけることで、AIが個人の「記憶のネットワーク」を構築するアイデア支援アプリを提案。アイデアを創出する際には、このネットワークの中からあえて関連性の低い記憶同士を組み合わせた提案をAIに行わせることで、発想に新たな刺激を与えられるのではないかという仮説のもと設計しました。本提案は、2025年に開催されたソフトバンク生成AIアイデアコンテストにおいて、応募総数45,000件の中から第84位を受賞しました。',
      duration: '2025年11月',
      insights: [
        'ビジネスコンペにおいて、アイデアの本質をテキストで的確に伝えることの難しさ',
        'オンラインプレゼンテーションで内容を的確に伝える表現力',
        '人間とAIが共創する中で、どこまでアイデア創出を委ねられるかという可能性と限界',
      ],
    },
  ];

  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDescription = document.getElementById('modal-description');
  const modalInsights = document.getElementById('modal-insights');
  const modalDuration = document.getElementById('modal-duration');

  const openModal = (index) => {
    const proj = PROJECTS[index];
    if (!proj) return;

    modalImage.src = proj.image;
    modalImage.alt = proj.title;
    modalTitle.textContent = proj.title;
    modalSubtitle.textContent = proj.subtitle;
    modalDescription.textContent = proj.description;
    modalDuration.textContent = proj.duration;

    modalInsights.innerHTML = '';
    proj.insights.forEach((insight) => {
      const row = document.createElement('div');
      row.className = 'modal-insight';
      row.innerHTML = `<i data-lucide="check-circle"></i><p>${insight}</p>`;
      modalInsights.appendChild(row);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  };

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.project, 10)));
  });
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------------- Skills viewer ---------------- */
  const skillTabs = document.querySelectorAll('.skill-tab');
  const skillsTools = document.getElementById('skills-tools');
  const skillToolGroups = document.querySelectorAll('.skill-tools-group');
  const skillsViewerImage = document.getElementById('skills-viewer-image');

  skillTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('active')) return;

      skillTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      skillsTools.classList.add('fade');
      skillsViewerImage.classList.add('fade');

      setTimeout(() => {
        skillToolGroups.forEach((g) => g.classList.toggle('active', g.dataset.skill === tab.dataset.skill));
        skillsViewerImage.src = tab.dataset.image;
        skillsViewerImage.alt = tab.dataset.alt;
        skillsTools.classList.remove('fade');
        skillsViewerImage.classList.remove('fade');
      }, 200);
    });
  });

  /* ---------------- Interests accordion ---------------- */
  const hobbyPanels = document.querySelectorAll('.hobby-panel');
  hobbyPanels.forEach((panel) => {
    panel.addEventListener('click', () => {
      hobbyPanels.forEach((p) => p.classList.remove('active'));
      panel.classList.add('active');
    });
    panel.addEventListener('mouseenter', () => {
      hobbyPanels.forEach((p) => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });

  /* ---------------- Footer ---------------- */
  document.getElementById('scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.getElementById('footer-year').innerHTML =
    `&copy; ${new Date().getFullYear()} Yuta Kaito. All Rights Reserved.`;
});
