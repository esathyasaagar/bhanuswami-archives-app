export const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Śrīmad-Bhāgavatam",
    href: "/sb",
    children: [
      { label: "Canto 1 – Creation", href: "/sb/1" },
      { label: "Canto 2 – The Cosmic Manifestation", href: "/sb/2" },
      { label: "Canto 3 – The Status Quo", href: "/sb/3" },
      { label: "Canto 4 – The Creation of the Fourth Order", href: "/sb/4" },
      { label: "Canto 5 – The Creative Impetus", href: "/sb/5" },
      { label: "Canto 7 – The Science of God", href: "/sb/7" },
      { label: "Canto 8 – Withdrawal of the Cosmic Creations", href: "/sb/8" },
      { label: "Canto 10 – The Summum Bonum", href: "/sb/10" },
      { label: "Canto 11 – General History", href: "/sb/11" },
    ],
  },
  {
    label: "Bhagavad-gītā",
    href: "/bg",
    children: [
      { label: "Bhagavad-gītā As It Is", href: "/bg" },
      { label: "BG Seminars", href: "/bg/seminars" },
      { label: "Gita Jayanti", href: "/bg/seminars/gj" },
    ],
  },
  {
    label: "Seminars",
    href: "/seminars",
    children: [
      {
        label: "2025",
        href: "/seminars/2025",
        children: [
          { label: "Japan 2025", href: "/seminars/2025/japan" },
          { label: "Australia 2025", href: "/seminars/2025/australia" },
          { label: "Italy 2025", href: "/seminars/2025/italy" },
          { label: "Bulgaria 2025", href: "/seminars/2025/bulgaria" },
          { label: "Serbia 2025", href: "/seminars/2025/serbia" },
          { label: "Macedonia 2025", href: "/seminars/2025/macedonia" },
          { label: "Malaysia 2025", href: "/seminars/2025/malaysia" },
          { label: "Athens 2025", href: "/seminars/2025/athenes" },
          { label: "Mayapur 2025", href: "/seminars/mayapur/2025" },
          { label: "Chennai 2025", href: "/seminars/2025/chennai" },
        ],
      },
      {
        label: "2024",
        href: "/seminars/2024",
        children: [
          { label: "Japan 2024", href: "/seminars/2024/japan" },
          { label: "New Govardhana 2024", href: "/seminars/2024/new-govardhana" },
        ],
      },
      { label: "2021", href: "/seminars/2021" },
      { label: "2018", href: "/seminars/2018" },
      { label: "2016", href: "/seminars/2016" },
    ],
  },
  {
    label: "Festivals",
    href: "/festivals",
    children: [
      { label: "Festivals 2026", href: "/festivals/2026" },
      { label: "Festivals 2025", href: "/festivals/2025" },
      { label: "Festivals 2017", href: "/festivals-2017" },
      { label: "Festivals 2013", href: "/festivals/2013" },
    ],
  },
  {
    label: "Books & Texts",
    href: "/books",
    children: [
      { label: "Nectar of Devotion", href: "/nod" },
      { label: "Harināma Cintāmaṇi", href: "/hnc" },
      { label: "Bṛhad Bhāgavatāmṛta", href: "/brhad" },
      { label: "Vraja Rīti Cintāmaṇi", href: "/vrajariti" },
    ],
  },
  {
    label: "Special Events",
    href: "/special-events",
    children: [
      { label: "Madhura Mahotsava 2025", href: "/madhura/2025" },
      { label: "Shravana Utsav 2025", href: "/shravana-utsav/2025" },
      { label: "Shravana Utsav 2024", href: "/shravana-utsav/2024" },
      { label: "Karthik Month 2024", href: "/km/2024" },
      { label: "Karthik Month 2022", href: "/km/2022" },
    ],
  },
  { label: "Gauḍīya Ācāryas", href: "/gaudia-acharyas" },
  { label: "Podcasts", href: "/podcasts" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact-us" },
];

// ── Śrīmad-Bhāgavatam ────────────────────────────────────────────────────────

export const sbCantos = [
  { canto: 1, title: "Creation", chapters: ["1.8 – Prayers by Queen Kuntī", "1.10", "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19"] },
  { canto: 2, title: "The Cosmic Manifestation", chapters: ["2.1 – The First Step in God Realization", "2.2 – The Lord in the Heart", "2.3", "2.4"] },
  { canto: 3, title: "The Status Quo", chapters: ["3.16", "3.25", "3.27"] },
  { canto: 4, title: "The Creation of the Fourth Order", chapters: ["4.17", "4.28", "4.30"] },
  { canto: 5, title: "The Creative Impetus", chapters: ["5.4", "5.19", "5.24"] },
  { canto: 7, title: "The Science of God", chapters: ["7.5", "7.7", "7.8"] },
  { canto: 8, title: "Withdrawal of the Cosmic Creations", chapters: ["8.16", "8.24"] },
  {
    canto: 10, title: "The Summum Bonum",
    chapters: ["10.3", "10.9 – Mother Yaśodā Binds Lord Kṛṣṇa", "10.52", "10.55", "10.62", "10.63", "10.65", "10.76", "10.77", "10.78"],
  },
  { canto: 11, title: "General History", chapters: ["11.2", "11.5 – SB 11.5.36", "11.10", "11.11"] },
];

// ── Seminars ──────────────────────────────────────────────────────────────────

export const seminars: Record<string, Record<string, { title: string; href: string; description?: string }[]>> = {
  "2025": {
    japan: [
      { title: "Dikṣa Traditions", href: "/seminars/2025/japan/diksa-traditions" },
      { title: "Demons in Vṛndāvan", href: "/seminars/2025/japan/demons-in-vrindavan" },
      { title: "Diksha Traditions & the Analysis of 2-Part Initiations in ISKCON Diksha System", href: "/seminars/2025/japan/diksha-traditions-iskcon-intiation-analysis" },
      { title: "Gaura Tattva", href: "/seminars/2025/japan/gaura-tattva" },
      { title: "Mysteries of Sound", href: "/seminars/2025/japan/mysteries-of-sound" },
      { title: "Bhakti-latā – 1 (Mādhurya Kādambinī)", href: "/seminars/2025/japan/bhakti-lata-1" },
      { title: "Bhakti-latā – 2 (Mādhurya Kādambinī)", href: "/seminars/2025/japan/bhakti-lata-2" },
      { title: "Bhakti-latā – 3 (Mādhurya Kādambinī)", href: "/seminars/2025/japan/bhakti-lata-3" },
    ],
    australia: [
      { title: "Law of Karma", href: "/seminars/2025/australia/law-of-karma", description: "Replace conditioned feelings with proper spiritual values to break the unending Karmic wheel" },
      { title: "Pure Bhakti", href: "/seminars/2025/australia/pure-bhakti" },
    ],
    italy: [
      { title: "Removing the Fog & Cloud from the Mind Which Obstructs Chanting Śuddha Nāma & Attaining Prema", href: "/seminars/2025/italy/suddhanama" },
      { title: "Good Health: More Than Muscles & Meals", href: "/seminars/2025/italy/healthy-life" },
      { title: "The Transcendental Appearance of Kṛṣṇa & the Strong Vātsalya Bhāva of Nanda & Yaśodā", href: "/seminars/2025/italy/krsna-janmastami" },
      { title: "Śrīla Prabhupāda & ISKCON in the Mission of Lord Caitanya", href: "/seminars/2025/italy/sp-vyasa-puja" },
      { title: "Secret Hack to Crack the Wheel of Karma", href: "/seminars/2025/italy/wheel-of-karma" },
      { title: "Scriptural Basis Behind Gauḍīya Vaiṣṇava's Spiritual Practice for Eternal Happiness", href: "/seminars/2025/italy/scriptures-behind-chanting" },
      { title: "Understand Guru's Position in ISKCON via Śāstras & Ācāryas – Give Proper Respect to All", href: "/seminars/2025/italy/proper-respect" },
      { title: "Realize the Power of Mind to Unlock Its Full Potential", href: "/seminars/2025/italy/power-of-mind" },
    ],
    bulgaria: [{ title: "Bulgaria Seminars 2025", href: "/seminars/2025/bulgaria" }],
    serbia: [{ title: "Serbia Seminars 2025", href: "/seminars/2025/serbia" }],
    macedonia: [
      { title: "Holy Name – The Mysterious Sound", href: "/seminars/2025/macedonia/mysteries-of-sound" },
      { title: "Q&A on Krishna Worship Intricacies", href: "/seminars/2025/macedonia/qa" },
    ],
    malaysia: [{ title: "Dīkṣā and Śikṣā – Respect Distinctions", href: "/seminars/2025/malaysia/diksa-siksa" }],
    athenes: [{ title: "Athens Seminars 2025", href: "/seminars/2025/athenes" }],
    chennai: [{ title: "Chennai Seminars 2025", href: "/seminars/2025/chennai" }],
  },
  "2024": {
    japan: [
      { title: "Bhakti and Varṇāśrama", href: "/seminars/2024/japan/bhaktiandvarnashram" },
      { title: "Lord Śiva", href: "/seminars/2024/japan/lord-siva" },
    ],
    "new-govardhana": [
      { title: "Transforming Dysfunctional Relationships", href: "/seminars/2024/new-govardhana/transforming-dysfunctional-relationships" },
    ],
  },
  "2021": {
    japan: [{ title: "Japan Seminars 2021", href: "/seminars/2021/japan" }],
  },
  "2018": {
    japan: [
      { title: "Bhakti Tattva Viveka – Part 1", href: "/seminars/2018/japan/btv1" },
    ],
  },
  "2016": {
    japan: [{ title: "Japan Seminars 2016", href: "/seminars/2016/japan" }],
  },
};

// ── Festivals ─────────────────────────────────────────────────────────────────

export const festivals: Record<string, { title: string; href: string; description?: string }[]> = {
  "2026": [
    { title: "Kīrtan Melā – Essential Ingredients of Śuddha Nāma Kīrtan & Its Glories!", href: "/festivals/2026/addressing-mm-kirtaniyas" },
    { title: "HH Gopal Kṛṣṇa Gosvāmī Mahārāj – Triobhav Utsav!", href: "/festivals/2026/hhgkg-triobhav" },
  ],
  "2025": [
    { title: "Nityānanda Trayodaśī – Lord Nityānanda: The Most Merciful", href: "/festivals/2025/nityananda-triyodasi", description: "Shelter of all & the principal of Lord Caitanya's movement" },
    { title: "Rāma Navamī", href: "/festivals/2025/rama-navami" },
    { title: "Gaura Pūrṇimā – The Purpose, Mission & Hidden Aspects Behind the Appearance of Lord Caitanya", href: "/festivals/2025/gaura-purnima" },
    { title: "Jagannāth Śravaṇa Utsav – Bhajan Rahasya & Śikṣāṣṭakam", href: "/festivals/2025/jag-srav-utsav" },
    { title: "Guṇḍicā Marjan Utsav – Clean Your Heart by Cleaning the Temple", href: "/festivals/2025/gundicha-marjan" },
    { title: "Ratha Yātrā – The Most Intense & Highest Blissful Spiritual Love", href: "/festivals/2025/ratha-yatra" },
    { title: "Śrīla Gadadhara Pandit & Śrīla Bhakti Vinoda Ṭhākur Triobhav", href: "/festivals/2025/sgp-bvt-triobhav" },
    { title: "HH Bhakti Charu Swami Appearance Day – An Exemplary Messenger of Śrīla Prabhupāda", href: "/festivals/2025/hhbcs-appearance-day" },
    { title: "World Holy Name Week", href: "/festivals/2025/holynameweek" },
    { title: "Govardhan Pūjā – Illuminating Intricacies, Intense Devotion & Illustrating Insights", href: "/festivals/2025/govardhan-puja" },
    { title: "Balarāma Pūrṇimā (Italy) – Balarāma, the First Expansion of Kṛṣṇa & His Unique, Sweet Pastimes", href: "/festivals/2025/balaram-purnima-italy" },
    { title: "Śrīla Prabhupāda Triobhav & Vyāsa Pūjā", href: "/festivals/2025/sp-triobhav" },
    { title: "HH RNS Vyāsa Pūjā", href: "/festivals/2025/hhrns-vyasa-puja" },
    { title: "Śrīla Prabhupāda Vyāsa Pūjā", href: "/festivals/2025/sp-vyasa-puja" },
  ],
  "2013": [{ title: "Festivals 2013 Archive", href: "/festivals/2013" }],
};

// ── Books / Texts ─────────────────────────────────────────────────────────────

export const books = {
  nod: {
    title: "Nectar of Devotion (Bhakti-rasāmṛta-sindhu)",
    author: "Śrīla Rūpa Gosvāmī",
    description: "The Nectar of Devotion is a summary study of Śrīla Rūpa Gosvāmī's Bhakti-rasāmṛta-sindhu. Bhanu Swami lectures cover the science of devotional service and the 64 limbs of bhakti.",
    sections: [
      { title: "Japan Series – Part 1 (Rasa)", href: "/nod/japan/1" },
      { title: "Japan Series – Part 2 (Rasa)", href: "/nod/japan/2" },
      { title: "Japan Series – Part 3 (Rasa)", href: "/nod/japan/3" },
      { title: "Japan Series – Part 4 (Rasa)", href: "/nod/japan/4" },
      { title: "Japan Series – Part 5 (Anubhāvas & Sāttvika Bhāvas)", href: "/nod/japan/5" },
    ],
  },
  hnc: {
    title: "Harināma Cintāmaṇi",
    author: "Śrīla Bhaktivinoda Ṭhākura",
    description: "Harināma Cintāmaṇi describes the glories and significance of the Holy Name. Bhanu Swami's lectures explore the philosophy of śuddha-nāma and the ten offences to the Holy Name.",
    sections: [
      { title: "Japan Series – Part 1", href: "/hnc/japan/1" },
      { title: "Japan Series – Part 2", href: "/hnc/japan/2" },
      { title: "Japan Series – Part 3", href: "/hnc/japan/3" },
      { title: "Japan Series – Part 4", href: "/hnc/japan/4" },
      { title: "Japan Series – Part 5", href: "/hnc/japan/5" },
      { title: "Japan Series – Part 6", href: "/hnc/japan/6" },
      { title: "New Govardhana – Part 1", href: "/hnc/australia/new-govardhana/1" },
      { title: "New Govardhana – Part 2", href: "/hnc/australia/new-govardhana/2" },
    ],
  },
  brhad: {
    title: "Bṛhad Bhāgavatāmṛta",
    author: "Śrīla Sanātana Gosvāmī",
    description: "The Bṛhad Bhāgavatāmṛta explores the different levels of devotional service and the transcendental abode of the Lord through the journey of the sage Nārada.",
    sections: [
      { title: "Japan Series – Part 1", href: "/brhad/japan/1" },
      { title: "Japan Series – Part 2", href: "/brhad/japan/2" },
      { title: "Japan Series – Part 3", href: "/brhad/japan/3" },
      { title: "Japan Series – Part 4", href: "/brhad/japan/4" },
    ],
  },
  vrajariti: {
    title: "Vraja Rīti Cintāmaṇi",
    author: "Śrīla Viśvanātha Cakravartī Ṭhākura",
    description: "Vraja Rīti Cintāmaṇi describes the eternal pastimes and the sacred geography of Vṛndāvana. These lectures were delivered during Śravaṇa Utsav 2024.",
    sections: [
      { title: "Part 1", href: "/vrajariti/part1" },
      { title: "Part 2", href: "/vrajariti/part2" },
      { title: "Part 3", href: "/vrajariti/part3" },
      { title: "Part 4", href: "/vrajariti/part4" },
      { title: "Part 5", href: "/vrajariti/part5" },
    ],
  },
};

// ── Special Events ────────────────────────────────────────────────────────────

export const shravanaUtsav = {
  "2025": [
    { title: "Bhagavad-gītā – Sārārtha Varṣiṇī Ṭīkā Study", href: "/shravana-utsav/2025/bg" },
    { title: "BG Chapter 12 – Devotional Service", href: "/shravana-utsav/2025/bg/ch12" },
    { title: "BG Verses 12.8–12.18 – Comparative Analysis", href: "/shravana-utsav/2025/bg/12-8-12" },
    { title: "BG Verses 18.50–18.66 – Concluding Summary", href: "/shravana-utsav/2025/bg/18-50-66" },
  ],
  "2024": [
    { title: "Vraja Rīti Cintāmaṇi – Complete Series", href: "/vrajariti" },
  ],
};

export const madhuraContent = {
  "2025": [
    { title: "SB 11.5.36 – The Present Kali-yuga Is the Best Yuga & Has the Best Process to Attain the Best Result", href: "/madhura/2025/sb/11/5/36" },
    { title: "SB 3.33.7 – Analysis and Commentary", href: "/madhura/2025/sb/3/33/7" },
  ],
};

export const karthikMonth = {
  "2024": [
    { title: "Canto 10 – Chapter 9: Mother Yaśodā Binds Lord Kṛṣṇa (Dāmodara Month)", href: "/sb/10/9" },
  ],
  "2022": [
    { title: "Glories of Kārttika", href: "/kc/glories-of-kartik" },
  ],
};

// ── Podcasts ──────────────────────────────────────────────────────────────────

export const podcasts: Record<string, { title: string; href: string; date: string; image?: string }[]> = {
  "2025": [
    { title: "Celebrating Śrīla Prabhupāda's Life & Legacy!", href: "/podcasts/2025/sp-life-legacy", date: "2025" },
  ],
  "2020": [
    { title: "Why Science and Scripture See Reality Differently", href: "/podcasts/2020/reality-view-in-science-spirituality", date: "2020" },
  ],
};

// ── Gauḍīya Ācāryas ───────────────────────────────────────────────────────────

export const gaudiyaAcharyas = [
  { title: "Gosvāmīs of Vṛndāvana", href: "/gaudia-acharyas/gosvamis-of-vrindavan", description: "The Six Gosvāmīs appointed by Lord Caitanya to establish the philosophy and practice of Gauḍīya Vaiṣṇavism." },
];

// ── Sidebar data ──────────────────────────────────────────────────────────────

export const sidebarCategories = [
  { label: "Śrīmad-Bhāgavatam", count: 248, href: "/sb" },
  { label: "Bhagavad-gītā", count: 112, href: "/bg" },
  { label: "Seminars", count: 89, href: "/seminars" },
  { label: "Festivals", count: 34, href: "/festivals" },
  { label: "Nectar of Devotion", count: 5, href: "/nod" },
  { label: "Harināma Cintāmaṇi", count: 8, href: "/hnc" },
  { label: "Bṛhad Bhāgavatāmṛta", count: 4, href: "/brhad" },
  { label: "Vraja Rīti Cintāmaṇi", count: 5, href: "/vrajariti" },
  { label: "Podcasts", count: 12, href: "/podcasts" },
  { label: "Gauḍīya Ācāryas", count: 6, href: "/gaudia-acharyas" },
  { label: "Special Events", count: 28, href: "/special-events" },
];

export const recentPosts = [
  { title: "Kīrtan Melā – Essential Ingredients of Śuddha Nāma Kīrtan", href: "/festivals/2026/addressing-mm-kirtaniyas", date: "Jun 2026" },
  { title: "HH Gopal Kṛṣṇa Gosvāmī Mahārāj – Triobhav Utsav", href: "/festivals/2026/hhgkg-triobhav", date: "Jun 2026" },
  { title: "Mysteries of Sound – Japan 2025", href: "/seminars/2025/japan/mysteries-of-sound", date: "2025" },
  { title: "Bhakti-latā – Mādhurya Kādambinī (Series)", href: "/seminars/2025/japan/bhakti-lata-1", date: "2025" },
  { title: "Śrīla Prabhupāda Triobhav & Vyāsa Pūjā", href: "/festivals/2025/sp-triobhav", date: "Nov 2025" },
];

export const featuredContent = [
  {
    id: 1,
    title: "Podcasts",
    subtitle: "Updated January 2026",
    date: "Nov 2025 – Jan 2026",
    category: "Podcasts",
    href: "/podcasts",
    description: "Listen to the latest podcast episodes covering spiritual topics, guided meditations, and philosophical discussions by Bhanu Swami Maharaj.",
    color: "#1a6b8a",
  },
  {
    id: 2,
    title: "Bhagavad-gītā As It Is",
    subtitle: "Complete Lecture Series",
    date: "December 2024",
    category: "Bhagavad-gītā",
    href: "/bg",
    description: "Comprehensive lectures on Bhagavad-gītā As It Is by Śrīla Prabhupāda — all chapters with seminars on BG 4.34, 12.8–18, and 18.50–66.",
    color: "#8b6914",
  },
  {
    id: 3,
    title: "Śrīmad-Bhāgavatam",
    subtitle: "Nine Cantos Available",
    date: "October 2024",
    category: "Śrīmad-Bhāgavatam",
    href: "/sb",
    description: "In-depth study of the Śrīmad-Bhāgavatam across Cantos 1–5, 7, 8, 10, and 11 — exploring the science of God and devotional service.",
    color: "#5a1a8a",
  },
  {
    id: 4,
    title: "Nectar of Devotion",
    subtitle: "Bhakti-rasāmṛta-sindhu",
    date: "2024",
    category: "Books",
    href: "/nod",
    description: "Five-part Japan lecture series on the Nectar of Devotion by Śrīla Rūpa Gosvāmī — covering rasa-tattva and the limbs of devotional service.",
    color: "#1a5a2a",
  },
  {
    id: 5,
    title: "Harināma Cintāmaṇi",
    subtitle: "Japan & Australia Series",
    date: "2024",
    category: "Books",
    href: "/hnc",
    description: "Eight-part series (Japan & New Govardhana) on the glories of the Holy Name and the ten offences to be avoided.",
    color: "#5a1a1a",
  },
  {
    id: 6,
    title: "Vraja Rīti Cintāmaṇi",
    subtitle: "Śravaṇa Utsav 2024",
    date: "2024",
    category: "Books",
    href: "/vrajariti",
    description: "Five-part series on Vraja Rīti Cintāmaṇi describing the eternal pastimes and sacred geography of Vṛndāvana.",
    color: "#1a3a5a",
  },
];
