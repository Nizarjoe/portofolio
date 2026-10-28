import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Code2,
  PenTool,
  BarChart3,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  Search,
  Filter,
  Terminal,
  Database,
  Sparkles,
  FileText,
  Layers,
  Send,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Lock,
  Unlock,
  Settings,
  Plus,
  Trash2,
  Edit3,
  Eye,
  Download,
  RefreshCw,
  DollarSign,
  TrendingUp,
  Activity,
  ShieldCheck,
  BookOpen,
  Cpu,
  LayoutGrid,
  Check,
  AlertCircle,
  ArrowLeft,
  Share2,
  Copy
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// ============================================================================
// 1. INITIAL CENTRALIZED DATA & BILINGUAL CONTENT (EN & ID)
// ============================================================================

const INITIAL_CMS_STATE = {
  profile: {
    fullName: 'Muhammad Nizar Asagaf',
    shortName: 'Nizar Asagaf',
    brandMark: 'MNA.',
    roles: {
      en: ['Web Developer', 'Technical Writer', 'Data Analyst'],
      id: ['Pengembang Web', 'Penulis Teknis', 'Analis Data']
    },
    headline: {
      en: 'I Build Digital Experiences. I Turn Ideas Into Insights.',
      id: 'Saya Membangun Pengalaman Digital. Mengubah Ide Menjadi Wawasan.'
    },
    subheadline: {
      en: 'I combine thoughtful full-stack engineering, clear technical storytelling, and rigorous data analysis to build digital products that solve real business problems.',
      id: 'Saya menggabungkan rekayasa web modern, penulisan teknis yang tajam, dan analisis berbasis data untuk menciptakan produk digital yang menyelesaikan masalah nyata.'
    },
    location: 'Indonesia (Remote Friendly)',
    email: 'nizar.asagaf@example.com',
    whatsapp: '+62 812-0000-0000 (Editable in Admin)',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    availableForWork: true,
    availabilityText: {
      en: 'Available for Select Projects, Writing & Data Consulting',
      id: 'Tersedia untuk Proyek Web, Penulisan & Konsultasi Data'
    },
    bioParagraphs: {
      en: [
        'Hello, I am Muhammad Nizar Asagaf. I operate at the intersection of software engineering, editorial communication, and quantitative decision-making.',
        'Too often, software teams build fast interfaces without understanding user behavior metrics, or data teams uncover deep insights that fail to communicate clearly to stakeholders. My work bridges these three worlds.',
        'Whether architecting a high-performance React application, authoring structured technical documentation, or modeling SQL & Python datasets into actionable executive dashboards, I focus on clarity, reliability, and measurable impact.'
      ],
      id: [
        'Halo, saya Muhammad Nizar Asagaf. Saya berkarya di titik temu antara rekayasa perangkat lunak, komunikasi editorial, dan pengambilan keputusan berbasis data.',
        'Sering kali tim teknis membangun aplikasi cepat tanpa memahami metrik perilaku pengguna, atau tim analis menemukan wawasan mendalam yang sulit dipahami pemangku kepentingan. Peran saya menjembatani ketiga disiplin tersebut.',
        'Baik saat merancang aplikasi web modern, menulis dokumentasi dan artikel teknis mendalam, maupun mengolah data menjadi dashboard interaktif, fokus utama saya adalah kejelasan, keandalan, dan dampak nyata.'
      ]
    }
  },

  projects: [
    {
      id: 'proj-1',
      slug: 'nexus-telemetry-commerce',
      title: 'Nexus Telemetry & Headless Commerce Engine',
      category: 'Full-Stack Applications',
      featured: true,
      year: '2025',
      status: 'Sample Architecture Case Study',
      problem: {
        en: 'Mid-sized retail teams struggled with slow storefront load times and fragmented checkout drop-off visibility across mobile devices.',
        id: 'Tim ritel menengah mengalami kendala waktu muat toko online yang lambat serta kurangnya visibilitas data terkait pembatalan checkout di perangkat seluler.'
      },
      solution: {
        en: 'Engineered a modular Next.js App Router storefront integrated with a real-time event telemetry pipeline and sub-second search filtering.',
        id: 'Merancang storefront modular berbasis Next.js App Router yang terintegrasi dengan pipeline telemetri real-time dan pencarian instan.'
      },
      architecture: {
        en: 'Server Components for zero-bundle catalog rendering, Zod schema validation on API boundaries, and PostgreSQL analytical views for funnel tracking.',
        id: 'Server Components untuk rendering katalog cepat, validasi skema Zod di sisi API, serta tampilan analitik PostgreSQL untuk pelacakan konversi.'
      },
      results: {
        en: 'Verified Lighthouse Performance score of 98/100 in staging benchmarks; reduced time-to-interactive during catalog filtering.',
        id: 'Skor performa Lighthouse 98/100 pada pengujian staging; mempercepat waktu interaksi saat penyaringan katalog.'
      },
      lessons: {
        en: 'Decoupling analytics tracking from the main UI thread prevents interaction latency while preserving 100% event accuracy.',
        id: 'Memisahkan pelacakan analitik dari thread utama UI mencegah jeda interaksi sekaligus menjaga akurasi data.'
      },
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Zod'],
      demoUrl: 'https://example.com/demo/nexus',
      repoUrl: 'https://github.com/example/nexus-telemetry'
    },
    {
      id: 'proj-2',
      slug: 'pulse-executive-bi-suite',
      title: 'PulseBI — Multi-Channel Revenue & Cohort Suite',
      category: 'Data Analytics',
      featured: true,
      year: '2025',
      status: 'Interactive Prototype',
      problem: {
        en: 'Operations managers spent 12+ hours weekly manually merging CSV exports from payment gateways and ad platforms.',
        id: 'Manajer operasional menghabiskan lebih dari 12 jam per minggu untuk menggabungkan ekspor CSV manual dari berbagai platform.'
      },
      solution: {
        en: 'Built an automated ETL normalization schema and an interactive React + Recharts executive cockpit with cohort retention heatmaps.',
        id: 'Membangun skema normalisasi ETL otomatis serta dashboard eksekutif interaktif berbasis React dan Recharts.'
      },
      architecture: {
        en: 'SQL window functions for cohort retention calculation, automated anomaly thresholds, and accessible responsive chart containers.',
        id: 'Fungsi window SQL untuk perhitungan retensi kohort, deteksi anomali otomatis, dan komponen grafik responsif.'
      },
      results: {
        en: 'Standardized 14 core KPI definitions into a single source of truth with instant date-range drilldowns.',
        id: 'Menstandarisasi 14 definisi KPI utama ke dalam satu sumber data terpadu dengan filter rentang waktu instan.'
      },
      lessons: {
        en: 'Executives rarely need 30 charts; they need 4 high-signal metrics paired with clear contextual annotations.',
        id: 'Eksekutif jarang membutuhkan 30 grafik; mereka membutuhkan 4 metrik utama yang disertai anotasi konteks yang jelas.'
      },
      stack: ['React', 'Recharts', 'SQL', 'Python Pandas', 'Tailwind CSS'],
      demoUrl: 'https://example.com/demo/pulse-bi',
      repoUrl: 'https://github.com/example/pulse-bi'
    },
    {
      id: 'proj-3',
      slug: 'devdocs-mdx-publishing-system',
      title: 'Lexicon — MDX Technical Documentation & Editorial Kit',
      category: 'Technical Writing',
      featured: true,
      year: '2024',
      status: 'Open Reference',
      problem: {
        en: 'Engineering teams lacked a unified system to publish API guides, interactive code sandboxes, and bilingual release notes.',
        id: 'Tim engineering membutuhkan sistem terpadu untuk mempublikasikan panduan API, contoh kode interaktif, dan catatan rilis dwibahasa.'
      },
      solution: {
        en: 'Designed a keyboard-first editorial platform featuring automated table-of-contents generation, reading-time estimation, and semantic search.',
        id: 'Merancang platform publikasi dokumentasi dengan daftar isi otomatis, estimasi waktu baca, dan pencarian semantik.'
      },
      architecture: {
        en: 'Structured MDX frontmatter schemas validated with Zod, accessible syntax highlighting, and zero-CLS typography tokens.',
        id: 'Skema frontmatter MDX terstruktur dengan validasi Zod, penyorotan sintaks kode aksesibel, dan tipografi bebas pergeseran tata letak.'
      },
      results: {
        en: 'Reduced documentation onboarding friction and established a repeatable style guide for technical contributors.',
        id: 'Mempermudah proses dokumentasi teknis dan menciptakan panduan gaya penulisan yang konsisten.'
      },
      lessons: {
        en: 'Great documentation is product engineering in prose form—structure and scannability matter as much as code quality.',
        id: 'Dokumentasi yang hebat adalah rekayasa produk dalam bentuk tulisan—struktur dan kemudahan pemindaian sangat krusial.'
      },
      stack: ['MDX', 'Next.js', 'TypeScript', 'Lucide Icons', 'CSS Grid'],
      demoUrl: 'https://example.com/demo/lexicon',
      repoUrl: 'https://github.com/example/lexicon-docs'
    },
    {
      id: 'proj-4',
      slug: 'sentinel-automated-data-quality',
      title: 'Sentinel — Automated Schema & Pipeline Monitor',
      category: 'Automation',
      featured: false,
      year: '2024',
      status: 'Sample Tooling',
      problem: {
        en: 'Silent schema changes in upstream webhooks caused downstream reporting dashboards to display null metrics.',
        id: 'Perubahan skema mendadak pada webhook hulu menyebabkan laporan analitik menampilkan nilai kosong tanpa peringatan.'
      },
      solution: {
        en: 'Created a lightweight validation middleware that intercepts malformed payloads and logs structured diagnostic diffs.',
        id: 'Membuat middleware validasi ringan yang menangkap payload tidak valid dan mencatat rincian diagnostik secara terstruktur.'
      },
      architecture: {
        en: 'TypeScript runtime schema guards, webhook retry queues, and structured JSON audit logs.',
        id: 'Pelindung skema runtime TypeScript, antrean percobaan ulang webhook, dan log audit JSON terstruktur.'
      },
      results: {
        en: 'Eliminated silent null-data corruption across simulated ingestion pipelines.',
        id: 'Mencegah kerusakan data kosong tanpa terdeteksi pada simulasi pipeline integrasi.'
      },
      lessons: {
        en: 'Data reliability starts at the ingestion boundary, not inside the visualization layer.',
        id: 'Keandalan data dimulai sejak batas input pertama, bukan baru diperbaiki saat pembuatan visualisasi.'
      },
      stack: ['TypeScript', 'Node.js', 'Zod', 'REST API'],
      demoUrl: 'https://example.com/demo/sentinel',
      repoUrl: 'https://github.com/example/sentinel-monitor'
    }
  ],

  articles: [
    {
      id: 'art-1',
      slug: 'bridging-code-and-data-in-modern-web-apps',
      title: {
        en: 'Bridging Full-Stack Engineering and Data Analytics in Product Design',
        id: 'Menjembatani Rekayasa Web dan Analitik Data dalam Desain Produk'
      },
      subtitle: {
        en: 'Why modern developers should think like analysts—and how analysts benefit from software engineering discipline.',
        id: 'Mengapa pengembang web modern perlu berpikir seperti analis—dan bagaimana analis diuntungkan oleh disiplin rekayasa perangkat lunak.'
      },
      category: 'Software Engineering',
      publishedAt: '2025-02-10',
      updatedAt: '2025-02-14',
      featured: true,
      isSampleDraft: true,
      excerpt: {
        en: 'When frontend architecture and event taxonomy are designed together, products become both faster to maintain and infinitely easier to measure.',
        id: 'Ketika arsitektur frontend dan taksonomi data dirancang berdampingan, produk menjadi lebih mudah dipelihara sekaligus diukur.'
      },
      sections: [
        {
          heading: '1. The Disconnect Between UI State and Business Metrics',
          body: 'In many organizations, software engineers build features to satisfy functional tickets while data analysts are brought in weeks later to make sense of messy database tables. By the time an analyst asks how many users completed a multi-step workflow, the necessary state transitions were never logged cleanly.'
        },
        {
          heading: '2. Designing Event Contracts First',
          body: 'Before writing a complex React component, define the analytical questions that the feature must answer. Using strict schema validation such as Zod allows both your UI state and your telemetry payload to share a single, self-documenting contract.'
        },
        {
          heading: '3. Practical Implementation Pattern',
          body: 'Below is a clean pattern for separating domain events from visual components so that neither accessibility nor rendering performance suffers:'
        }
      ],
      codeSnippet: `// Shared Analytical Event Contract
import { z } from 'zod';

export const CheckoutStepSchema = z.object({
  sessionId: z.string().uuid(),
  stepIndex: z.number().int().min(1).max(4),
  latencyMs: z.number().nonnegative(),
  currency: z.enum(['IDR', 'USD']),
});

export type CheckoutStepEvent = z.infer<typeof CheckoutStepSchema>;`,
      takeaway: {
        en: 'Treat every user interface as both a human experience and a structured data generator.',
        id: 'Perlakukan setiap antarmuka pengguna sebagai pengalaman manusia sekaligus penghasil struktur data yang bersih.'
      }
    },
    {
      id: 'art-2',
      slug: 'designing-executive-dashboards-that-drive-action',
      title: {
        en: 'Designing Analytical Dashboards That Actually Drive Decisions',
        id: 'Merancang Dashboard Analitik yang Benar-Benar Mendorong Keputusan'
      },
      subtitle: {
        en: 'Moving beyond decorative charts toward high-signal data storytelling and clear visual hierarchy.',
        id: 'Bergerak melampaui grafik dekoratif menuju penceritaan data yang tajam dan hierarki visual yang jelas.'
      },
      category: 'Data and Analytics',
      publishedAt: '2025-01-22',
      updatedAt: '2025-01-25',
      featured: true,
      isSampleDraft: true,
      excerpt: {
        en: 'A dashboard crowded with 20 gauges often hides the very anomaly that leadership needs to address today.',
        id: 'Dashboard yang dipenuhi 20 grafik sering kali justru menyembunyikan anomali penting yang harus segera ditindaklanjuti.'
      },
      sections: [
        {
          heading: '1. Start With the Business Question, Not the Dataset',
          body: 'Every chart on a screen should justify its pixels by answering a specific operational question. If a metric cannot trigger a concrete action when it rises or falls by 15%, it belongs in an exploratory appendix—not the primary header.'
        },
        {
          heading: '2. Context Is Everything: Benchmarks and Variance',
          body: 'A raw number like "Rp 145,000,000 Monthly Revenue" is meaningless in isolation. Pair primary metrics with period-over-period variance, target thresholds, and brief qualitative annotations explaining sudden shifts.'
        },
        {
          heading: '3. SQL Cohort Aggregation Example',
          body: 'Clean visual storytelling always rests on clean upstream SQL transformations:'
        }
      ],
      codeSnippet: `WITH monthly_activity AS (
  SELECT
    user_id,
    DATE_TRUNC('month', created_at) AS activity_month,
    MIN(DATE_TRUNC('month', created_at)) OVER (PARTITION BY user_id) AS cohort_month
  FROM user_orders
)
SELECT
  cohort_month,
  EXTRACT(MONTH FROM AGE(activity_month, cohort_month)) AS month_offset,
  COUNT(DISTINCT user_id) AS active_users
FROM monthly_activity
GROUP BY 1, 2
ORDER BY 1, 2;`,
      takeaway: {
        en: 'Clarity in data visualization comes from ruthless curation and honest acknowledgment of data limitations.',
        id: 'Kejelasan dalam visualisasi data lahir dari kurasi yang ketat serta kejujuran dalam menyampaikan batasan data.'
      }
    },
    {
      id: 'art-3',
      slug: 'art-of-technical-writing-for-developers',
      title: {
        en: 'The Architecture of Clear Technical Writing for Software Teams',
        id: 'Arsitektur Penulisan Teknis yang Jelas bagi Tim Perangkat Lunak'
      },
      subtitle: {
        en: 'How structured prose reduces support tickets, accelerates onboarding, and builds engineering trust.',
        id: 'Bagaimana tulisan yang terstruktur mengurangi tiket bantuan, mempercepat adaptasi tim, dan membangun kepercayaan.'
      },
      category: 'Tutorials and Learning',
      publishedAt: '2024-12-12',
      updatedAt: '2024-12-15',
      featured: false,
      isSampleDraft: true,
      excerpt: {
        en: 'Good documentation respects the reader’s cognitive load through progressive disclosure, runnable examples, and explicit prerequisites.',
        id: 'Dokumentasi yang baik menghargai fokus pembaca melalui penyampaian bertahap, contoh nyata, dan prasyarat yang jelas.'
      },
      sections: [
        {
          heading: '1. Progressive Disclosure in Documentation',
          body: 'Readers arrive at technical articles with different goals: some need a 30-second quickstart command, while others need deep architectural trade-offs. Structure headings so both audiences can navigate effortlessly.'
        },
        {
          heading: '2. Eliminate Ambiguous Pronouns and Passive Voice',
          body: 'When documenting APIs or deployment pipelines, ambiguity causes production bugs. State clearly whether an action occurs on the client browser, the edge middleware, or the database server.'
        }
      ],
      codeSnippet: `// Good Documentation Example: Explicit Return & Error States
export async function verifyWebhookSignature(payload: string, signature: string): Promise<boolean> {
  if (!payload || !signature) return false;
  // Deterministic verification logic
  return true;
}`,
      takeaway: {
        en: 'Writing is thinking made visible. When you can explain a system simply, you understand its architecture deeply.',
        id: 'Menulis adalah cara membuat pemikiran terlihat jelas. Jika Anda bisa menjelaskan sistem secara sederhana, Anda memahaminya secara mendalam.'
      }
    }
  ],

  caseStudies: [
    {
      id: 'cs-1',
      title: 'Regional E-Commerce Revenue & Funnel Conversion Analysis',
      category: 'Sales & Conversion Analytics',
      datasetLabel: 'Simulated Demonstration Dataset (120,000 anonymized session records)',
      businessQuestion: 'Why did gross checkout volume plateau in Q3 despite a 28% increase in top-of-funnel paid acquisition traffic?',
      methodology: 'Funnel stage drop-off decomposition, device-level latency segmentation, and cohort AOV (Average Order Value) comparison using SQL & Python.',
      keyInsight: 'Mobile Safari users on cellular networks experienced a 4.2s payment modal delay, causing a 34% abandonment spike at Step 3.',
      limitation: 'Simulated dataset excludes offline bank transfer reconciliation delays beyond 48 hours.',
      recommendation: 'Pre-fetch payment gateway scripts on cart hover and introduce lightweight skeleton feedback, projected to recover 11–15% of abandoned mobile checkouts.',
      chartType: 'area',
      metrics: [
        { label: 'Analyzed Sessions', value: '120,000' },
        { label: 'Identified Bottleneck', value: 'Step 3 Mobile' },
        { label: 'Potential Recovery', value: '+14.2%' }
      ],
      data: [
        { period: 'Jan', desktopConv: 4.2, mobileConv: 3.1, revenueIdx: 68 },
        { period: 'Feb', desktopConv: 4.4, mobileConv: 3.0, revenueIdx: 72 },
        { period: 'Mar', desktopConv: 4.5, mobileConv: 2.8, revenueIdx: 75 },
        { period: 'Apr', desktopConv: 4.6, mobileConv: 2.3, revenueIdx: 71 },
        { period: 'May', desktopConv: 4.8, mobileConv: 2.1, revenueIdx: 70 },
        { period: 'Jun', desktopConv: 5.1, mobileConv: 3.6, revenueIdx: 94 }
      ]
    },
    {
      id: 'cs-2',
      title: 'B2B SaaS Customer Segmentation & Retention RFM Modeling',
      category: 'Customer Intelligence',
      datasetLabel: 'Simulated Demonstration Dataset (4,500 B2B subscription accounts)',
      businessQuestion: 'Which customer segments generate the highest net retention, and which early onboarding behaviors predict 90-day churn?',
      methodology: 'RFM (Recency, Frequency, Monetary) clustering paired with survival analysis across workspace activation milestones.',
      keyInsight: 'Teams that connected at least one automated data source within 72 hours of signup exhibited 3.1x higher 6-month retention.',
      limitation: 'Demonstration model assumes uniform pricing tiers across geographic regions.',
      recommendation: 'Restructure onboarding emails into behavioral triggers focused on first-dataset connection rather than generic feature tours.',
      chartType: 'bar',
      metrics: [
        { label: 'Accounts Modeled', value: '4,500' },
        { label: 'High-LTV Segment', value: 'Power Integrators' },
        { label: 'Retention Lift Factor', value: '3.1x' }
      ],
      data: [
        { segment: 'Champions', retention: 94, share: 22 },
        { segment: 'Growth Teams', retention: 82, share: 31 },
        { segment: 'Passive Users', retention: 54, share: 28 },
        { segment: 'At-Risk', retention: 29, share: 19 }
      ]
    },
    {
      id: 'cs-3',
      title: 'Editorial Content Velocity & Organic Search Engagement Study',
      category: 'Content & Traffic Analytics',
      datasetLabel: 'Simulated Demonstration Dataset (85 technical articles over 12 months)',
      businessQuestion: 'Do long-form architectural guides with interactive diagrams outperform short tutorials in qualified consultation inquiries?',
      methodology: 'Scroll-depth telemetry correlation, reading-time quartile grouping, and assisted conversion attribution.',
      keyInsight: 'Articles between 1,400–2,200 words containing runnable code blocks generated 4.4x more contact form visits than brief news posts.',
      limitation: 'Attribution limited to same-device session journeys without cross-device cookie tracking.',
      recommendation: 'Invest 70% of editorial calendar capacity into deep evergreen architecture case studies with bilingual summaries.',
      chartType: 'line',
      metrics: [
        { label: 'Articles Evaluated', value: '85 Posts' },
        { label: 'Optimal Length', value: '1.8k Words' },
        { label: 'Inquiry Multiplier', value: '4.4x' }
      ],
      data: [
        { depth: '25% Scroll', tutorial: 88, deepDive: 92 },
        { depth: '50% Scroll', tutorial: 61, deepDive: 81 },
        { depth: '75% Scroll', tutorial: 34, deepDive: 69 },
        { depth: '100% Read', tutorial: 18, deepDive: 54 }
      ]
    }
  ],

  pricelist: [
    {
      id: 'price-web-1',
      category: 'Web Development',
      tierName: 'Starter Landing Page / Personal Brand',
      priceIDR: 'Rp 2.500.000',
      priceUSD: '$180',
      billingNote: 'Starting estimate • Customizable scope',
      popular: false,
      audience: 'Professionals, creators, and early-stage initiatives needing a fast, credible online presence.',
      deliveryTime: '5 – 7 Business Days',
      features: [
        'Custom responsive UI/UX design (Dark/Light mode)',
        'Up to 4 core sections + interactive contact form',
        'Technical SEO metadata, sitemap & performance optimization',
        'Bilingual support (ID / EN) ready',
        '14 days post-launch technical support'
      ]
    },
    {
      id: 'price-web-2',
      category: 'Web Development',
      tierName: 'Premium Portfolio / Corporate Web + CMS',
      priceIDR: 'Rp 6.500.000',
      priceUSD: '$450',
      billingNote: 'Most Popular • Full-Stack + Admin Panel',
      popular: true,
      audience: 'Consultants, startups, and businesses requiring dynamic content management & high visual polish.',
      deliveryTime: '2 – 3 Weeks',
      features: [
        'Multi-page architecture with custom motion & interactive visuals',
        'Dedicated separated Admin CMS dashboard for easy updates',
        'Blog / Article publishing engine with syntax highlighting',
        'Analytics integration & conversion rate optimization',
        '30 days priority maintenance & documentation handover'
      ]
    },
    {
      id: 'price-web-3',
      category: 'Web Development',
      tierName: 'Custom Full-Stack Web Application',
      priceIDR: 'Rp 14.000.000+',
      priceUSD: '$950+',
      billingNote: 'Tailored to technical specification',
      popular: false,
      audience: 'Organizations needing custom business workflows, authenticated portals, or API integrations.',
      deliveryTime: '4 – 8 Weeks',
      features: [
        'End-to-end Next.js / React + Database architecture',
        'Role-based authentication & separated admin portal',
        'Custom REST/GraphQL API & third-party webhook integration',
        'Automated data validation (Zod) & security hardening',
        'Complete technical documentation & deployment setup'
      ]
    },
    {
      id: 'price-data-1',
      category: 'Data Analytics',
      tierName: 'Data Cleaning, EDA & Executive Report',
      priceIDR: 'Rp 2.000.000',
      priceUSD: '$140',
      billingNote: 'Per dataset / analytical sprint',
      popular: false,
      audience: 'Teams with raw spreadsheet/SQL data needing clear answers to specific business questions.',
      deliveryTime: '4 – 6 Business Days',
      features: [
        'Data auditing, deduplication & missing-value treatment',
        'Exploratory Data Analysis (EDA) & statistical summary',
        'Key business insights, anomalies & actionable recommendations',
        'Clean exported dataset (CSV/Excel/SQL) + PDF executive deck'
      ]
    },
    {
      id: 'price-data-2',
      category: 'Data Analytics',
      tierName: 'Interactive BI Dashboard Suite',
      priceIDR: 'Rp 5.500.000',
      priceUSD: '$380',
      billingNote: 'Most Popular Analytics Package',
      popular: true,
      audience: 'Founders & managers needing real-time KPI visibility across sales, marketing, or operations.',
      deliveryTime: '10 – 14 Business Days',
      features: [
        'Custom interactive web dashboard (React/Recharts or BI tool)',
        'Automated KPI cards, cohort retention & trend visualizations',
        'Date-range filtering, segment drilldowns & export controls',
        'Metric dictionary & stakeholder walkthrough session'
      ]
    },
    {
      id: 'price-write-1',
      category: 'Writing & Content',
      tierName: 'Technical Article / Deep-Dive Tutorial',
      priceIDR: 'Rp 850.000',
      priceUSD: '$65',
      billingNote: 'Per long-form article (1,200 – 2,000 words)',
      popular: false,
      audience: 'Developer tool companies, tech blogs, and engineering teams building authority.',
      deliveryTime: '3 – 5 Business Days',
      features: [
        'Original research, architectural clarity & SEO keyword alignment',
        'Verified, runnable code examples with inline explanations',
        'Custom architecture or workflow diagram included',
        'Available in English or Bahasa Indonesia (or bilingual)'
      ]
    },
    {
      id: 'price-write-2',
      category: 'Writing & Content',
      tierName: 'Product Documentation & API Guide Bundle',
      priceIDR: 'Rp 4.200.000',
      priceUSD: '$290',
      billingNote: 'Complete documentation sprint',
      popular: true,
      audience: 'SaaS products and internal engineering teams needing structured onboarding & API docs.',
      deliveryTime: '1 – 2 Weeks',
      features: [
        'Information architecture & documentation style guide',
        'Quickstart guide, authentication docs & endpoint references',
        'Troubleshooting FAQ & developer onboarding playbook',
        'Delivered in MDX / Markdown / Git repository ready format'
      ]
    }
  ],

  skills: [
    {
      group: 'Web Engineering',
      items: ['React & Next.js', 'TypeScript / JavaScript', 'Tailwind CSS', 'Node.js & REST APIs', 'PostgreSQL & SQL', 'Zod Validation', 'Accessible UI (WCAG)']
    },
    {
      group: 'Data Analytics & BI',
      items: ['Exploratory Data Analysis', 'SQL Window Functions', 'Python (Pandas / NumPy)', 'Recharts & Data Viz', 'KPI & Cohort Modeling', 'Spreadsheet Automation', 'Data Storytelling']
    },
    {
      group: 'Technical Writing',
      items: ['API & SDK Documentation', 'Long-Form Engineering Guides', 'MDX Content Systems', 'System Architecture Diagrams', 'Bilingual Copywriting (EN/ID)', 'Technical SEO Strategy']
    }
  ],

  timeline: [
    {
      id: 'tl-1',
      period: 'Present',
      role: 'Multidisciplinary Web Developer, Technical Writer & Data Analyst',
      organization: 'Independent Professional Practice (Muhammad Nizar Asagaf)',
      type: 'Verified Focus (Editable in Admin)',
      description: 'Building high-performance web applications, authoring technical documentation, and delivering analytical dashboards for digital initiatives.'
    },
    {
      id: 'tl-2',
      period: '2024 – 2025',
      role: 'Full-Stack & Data Visualization Architecture Explorations',
      organization: 'Portfolio Research & Engineering Lab',
      type: 'Project Milestone',
      description: 'Developed modular Next.js & React telemetry systems, interactive Recharts BI suites, and MDX publishing workflows.'
    },
    {
      id: 'tl-3',
      period: 'Ongoing',
      role: 'Continuous Specialization in Software Engineering & Analytics',
      organization: 'Replaceable Credential / Academic & Certification Slot',
      type: 'Editable Placeholder',
      description: 'Clearly labeled placeholder for formal degree, bootcamp, or certification details—editable directly via the separated Admin CMS.'
    }
  ],

  faqs: [
    {
      q: {
        en: 'Can I hire you for a project that combines web development and data analytics?',
        id: 'Apakah saya bisa menggunakan jasa Anda untuk gabungan pengembangan web dan analitik data?'
      },
      a: {
        en: 'Yes. Many clients need both a clean web application and an internal executive dashboard or event-tracking pipeline. Combining both disciplines under one workflow prevents communication gaps.',
        id: 'Tentu. Banyak klien membutuhkan aplikasi web sekaligus dashboard analitik internal. Menggabungkan kedua disiplin ini dalam satu alur kerja membuat hasil lebih cepat dan presisi.'
      }
    },
    {
      q: {
        en: 'Are the prices in the Pricelist fixed or customizable?',
        id: 'Apakah harga pada Pricelist bersifat tetap atau dapat disesuaikan?'
      },
      a: {
        en: 'The Pricelist provides transparent baseline estimates so you can plan your budget confidently. Final quotes are tailored to your exact scope, timeline, and integration complexity.',
        id: 'Pricelist memberikan estimasi dasar yang transparan agar Anda dapat merencanakan anggaran. Penawaran akhir disesuaikan dengan ruang lingkup dan kebutuhan spesifik proyek Anda.'
      }
    },
    {
      q: {
        en: 'How are the Portfolio Website and the Admin Website separated?',
        id: 'Bagaimana pemisahan antara Web Portofolio dan Web Admin dilakukan?'
      },
      a: {
        en: 'The system is architected into two distinct workspaces: the Public Visitor Portfolio and the Separated Admin CMS Portal (/admin). Content managed in the Admin Portal updates the live portfolio state immediately and can be exported as a JSON configuration file.',
        id: 'Sistem dirancang dalam dua ruang kerja terpisah: Web Portofolio Publik untuk pengunjung dan Portal Admin CMS Terpisah (/admin) untuk mengelola profil, proyek, artikel, studi kasus data, serta daftar harga (pricelist).'
      }
    }
  ]
};

// ============================================================================
// 2. TRANSLATION DICTIONARY (EN / ID)
// ============================================================================

const UI_TEXT = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      writing: 'Writing',
      analytics: 'Data Analytics',
      services: 'Services & Pricelist',
      contact: 'Contact',
      adminPortal: 'Admin CMS'
    },
    hero: {
      exploreBtn: 'Explore My Work',
      pricelistBtn: 'View Services & Pricelist',
      collabBtn: "Let's Collaborate",
      disciplinesLabel: 'THREE INTEGRATED IDENTITIES'
    },
    overview: {
      badge: 'THE MULTIDISCIPLINARY ADVANTAGE',
      title: 'Where Engineering Precision Meets Narrative Clarity & Data Intelligence',
      desc: 'Most digital projects fail in the seams between disciplines: code that ignores metrics, analytics that lack context, or products with poor documentation. By uniting Web Development, Technical Writing, and Data Analytics, I deliver cohesive solutions from architecture to insight.'
    },
    sections: {
      featuredProjects: 'Featured Engineering & Analytics Projects',
      viewAllProjects: 'Explore Full Project Library',
      featuredWriting: 'Editorial & Technical Publications',
      viewAllWriting: 'Read All Articles',
      featuredAnalytics: 'Interactive Data Analytics Case Studies',
      viewAllAnalytics: 'Open Data Analytics Lab',
      pricelistTitle: 'Transparent Services & Pricelist',
      pricelistSub: 'Clear baseline investment tiers in IDR & USD across Web Development, Data Analytics, and Technical Writing.',
      processTitle: 'Structured 6-Stage Execution Process',
      skillsTitle: 'Capabilities & Technology Matrix',
      timelineTitle: 'Experience & Milestones',
      faqTitle: 'Frequently Asked Questions',
      ctaTitle: 'Ready to Build, Write, or Analyze Something Meaningful?',
      ctaSub: 'Tell me about your product roadmap, documentation needs, or data challenges.'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
      writing: 'Tulisan',
      analytics: 'Analitik Data',
      services: 'Layanan & Pricelist',
      contact: 'Kontak',
      adminPortal: 'Web Admin'
    },
    hero: {
      exploreBtn: 'Jelajahi Karya Saya',
      pricelistBtn: 'Lihat Layanan & Pricelist',
      collabBtn: 'Mari Berkolaborasi',
      disciplinesLabel: 'TIGA IDENTITAS PROFESIONAL TERPADU'
    },
    overview: {
      badge: 'KEUNGGULAN MULTIDISIPLIN',
      title: 'Titik Temu Rekayasa Web, Ketajaman Tulisan, dan Kecerdasan Data',
      desc: 'Banyak proyek digital terhambat karena celah antar disiplin: kode yang tidak terukur secara analitik, data yang sulit dipahami bisnis, atau produk tanpa dokumentasi jelas. Dengan menyatukan Web Development, Penulisan Teknis, dan Data Analytics, saya menghadirkan solusi utuh dari arsitektur hingga wawasan.'
    },
    sections: {
      featuredProjects: 'Proyek Unggulan Rekayasa & Analitik',
      viewAllProjects: 'Lihat Semua Proyek',
      featuredWriting: 'Publikasi Editorial & Artikel Teknis',
      viewAllWriting: 'Baca Semua Artikel',
      featuredAnalytics: 'Studi Kasus Analitik Data Interaktif',
      viewAllAnalytics: 'Buka Laboratorium Data',
      pricelistTitle: 'Layanan & Daftar Harga (Pricelist)',
      pricelistSub: 'Estimasi investasi yang transparan dalam Rupiah (IDR) & USD untuk Web Development, Data Analytics, dan Penulisan Teknis.',
      processTitle: '6 Tahap Proses Kerja Terstruktur',
      skillsTitle: 'Matriks Keahlian & Teknologi',
      timelineTitle: 'Perjalanan & Tonggak Karier',
      faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
      ctaTitle: 'Siap Membangun Produk, Menulis Dokumentasi, atau Mengolah Data?',
      ctaSub: 'Ceritakan kebutuhan website, artikel teknis, atau tantangan analitik data Anda.'
    }
  }
};

// ============================================================================
// 3. HELPER UTILITIES
// ============================================================================

function estimateReadingTime(article) {
  const words =
    article.sections.reduce((acc, s) => acc + s.body.split(/\s+/).length, 0) +
    (article.codeSnippet ? article.codeSnippet.split(/\s+/).length : 0);
  return Math.max(2, Math.ceil(words / 160));
}

// ============================================================================
// 4. SEPARATED WEB ADMIN CMS APPLICATION
// ============================================================================

function AdminPortalApp({
  cmsData,
  setCmsData,
  onSwitchToPublic,
  adminAuthed,
  setAdminAuthed
}) {
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [toast, setToast] = useState(null);

  // Form states for adding items
  const [newPriceItem, setNewPriceItem] = useState({
    category: 'Web Development',
    tierName: '',
    priceIDR: 'Rp ',
    priceUSD: '$',
    billingNote: 'Custom scope',
    popular: false,
    audience: '',
    deliveryTime: '1 - 2 Weeks',
    featuresText: ''
  });

  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Web Development',
    year: '2026',
    status: 'Verified Project',
    problemEn: '',
    solutionEn: '',
    resultsEn: '',
    stackText: 'Next.js, TypeScript, Tailwind CSS',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com'
  });

  const [newArticle, setNewArticle] = useState({
    titleEn: '',
    subtitleEn: '',
    category: 'Web Development',
    excerptEn: '',
    heading1: '1. Core Architecture & Context',
    body1: '',
    codeSnippet: '// Example code snippet\nconsole.log("Hello Nizar Portfolio");',
    takeawayEn: ''
  });

  const showNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode.trim().toLowerCase() === 'nizar2026' || passcode.trim() === 'admin') {
      setAdminAuthed(true);
      setAuthError('');
      showNotification('Authenticated into Nizar Admin CMS Workspace.');
    } else {
      setAuthError('Invalid passcode. Use demo code: nizar2026');
    }
  };

  const handleExportJSON = () => {
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(cmsData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'nizar-asagaf-portfolio-cms.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Exported centralized CMS JSON configuration.');
  };

  const handleResetDefaults = () => {
    setCmsData(INITIAL_CMS_STATE);
    showNotification('Restored default Muhammad Nizar Asagaf dataset.');
  };

  const handleAddPriceTier = (e) => {
    e.preventDefault();
    if (!newPriceItem.tierName.trim()) return;
    const created = {
      id: 'price-' + Date.now(),
      category: newPriceItem.category,
      tierName: newPriceItem.tierName,
      priceIDR: newPriceItem.priceIDR,
      priceUSD: newPriceItem.priceUSD,
      billingNote: newPriceItem.billingNote,
      popular: newPriceItem.popular,
      audience: newPriceItem.audience || 'Custom client requirement.',
      deliveryTime: newPriceItem.deliveryTime,
      features: newPriceItem.featuresText
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean)
    };
    if (created.features.length === 0) {
      created.features = ['Custom consultation & requirement mapping', 'Production deliverables & support'];
    }
    setCmsData((prev) => ({
      ...prev,
      pricelist: [created, ...prev.pricelist]
    }));
    setNewPriceItem({
      category: 'Web Development',
      tierName: '',
      priceIDR: 'Rp ',
      priceUSD: '$',
      billingNote: 'Custom scope',
      popular: false,
      audience: '',
      deliveryTime: '1 - 2 Weeks',
      featuresText: ''
    });
    showNotification('New Pricelist package published to Public Portfolio.');
  };

  const handleDeletePriceTier = (id) => {
    setCmsData((prev) => ({
      ...prev,
      pricelist: prev.pricelist.filter((item) => item.id !== id)
    }));
    showNotification('Removed package from Pricelist.');
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;
    const slug = newProject.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const created = {
      id: 'proj-' + Date.now(),
      slug: slug || 'project-' + Date.now(),
      title: newProject.title,
      category: newProject.category,
      featured: true,
      year: newProject.year,
      status: newProject.status,
      problem: {
        en: newProject.problemEn || 'Problem statement defined in Admin CMS.',
        id: newProject.problemEn || 'Pernyataan masalah didefinisikan di Admin CMS.'
      },
      solution: {
        en: newProject.solutionEn || 'Custom engineering and analytical solution.',
        id: newProject.solutionEn || 'Solusi rekayasa dan analitik khusus.'
      },
      architecture: {
        en: 'Modular architecture configured via Nizar Admin CMS.',
        id: 'Arsitektur modular dikonfigurasi melalui Admin CMS.'
      },
      results: {
        en: newProject.resultsEn || 'Verified implementation deliverable.',
        id: newProject.resultsEn || 'Hasil implementasi terverifikasi.'
      },
      lessons: {
        en: 'Continuous iteration between engineering and data yields resilient products.',
        id: 'Iterasi berkelanjutan menghasilkan produk yang tangguh.'
      },
      stack: newProject.stackText
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      demoUrl: newProject.demoUrl,
      repoUrl: newProject.repoUrl
    };
    setCmsData((prev) => ({
      ...prev,
      projects: [created, ...prev.projects]
    }));
    setNewProject({
      title: '',
      category: 'Web Development',
      year: '2026',
      status: 'Verified Project',
      problemEn: '',
      solutionEn: '',
      resultsEn: '',
      stackText: 'Next.js, TypeScript, Tailwind CSS',
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com'
    });
    showNotification('New project added to Portfolio Library.');
  };

  const handleDeleteProject = (id) => {
    setCmsData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
    showNotification('Project deleted.');
  };

  const handleAddArticle = (e) => {
    e.preventDefault();
    if (!newArticle.titleEn.trim()) return;
    const slug = newArticle.titleEn
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const today = new Date().toISOString().slice(0, 10);
    const created = {
      id: 'art-' + Date.now(),
      slug: slug || 'article-' + Date.now(),
      title: {
        en: newArticle.titleEn,
        id: newArticle.titleEn
      },
      subtitle: {
        en: newArticle.subtitleEn || 'Published from Nizar Separated Admin CMS',
        id: newArticle.subtitleEn || 'Dipublikasikan dari Web Admin CMS Terpisah'
      },
      category: newArticle.category,
      publishedAt: today,
      updatedAt: today,
      featured: true,
      isSampleDraft: false,
      excerpt: {
        en: newArticle.excerptEn || 'Technical insight authored by Muhammad Nizar Asagaf.',
        id: newArticle.excerptEn || 'Wawasan teknis ditulis oleh Muhammad Nizar Asagaf.'
      },
      sections: [
        {
          heading: newArticle.heading1 || 'Overview',
          body: newArticle.body1 || 'Article content body managed via Admin CMS.'
        }
      ],
      codeSnippet: newArticle.codeSnippet,
      takeaway: {
        en: newArticle.takeawayEn || 'Key takeaway summarized for readers.',
        id: newArticle.takeawayEn || 'Kesimpulan utama bagi pembaca.'
      }
    };
    setCmsData((prev) => ({
      ...prev,
      articles: [created, ...prev.articles]
    }));
    setNewArticle({
      titleEn: '',
      subtitleEn: '',
      category: 'Web Development',
      excerptEn: '',
      heading1: '1. Core Architecture & Context',
      body1: '',
      codeSnippet: '// Example code snippet\nconsole.log("Hello Nizar Portfolio");',
      takeawayEn: ''
    });
    showNotification('Article published to Writing index.');
  };

  const handleDeleteArticle = (id) => {
    setCmsData((prev) => ({
      ...prev,
      articles: prev.articles.filter((a) => a.id !== id)
    }));
    showNotification('Article removed.');
  };

  if (!adminAuthed) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 block">
                  SEPARATED WEB ADMIN
                </span>
                <h1 className="text-lg font-bold text-white">
                  MNA. Content & Pricelist CMS
                </h1>
              </div>
            </div>
            <button
              onClick={onSwitchToPublic}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 border border-slate-800 px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Public Web
            </button>
          </div>

          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            This is the dedicated <strong>Web Admin Portal</strong> separated from the public portfolio visitor interface. Manage Muhammad Nizar Asagaf&apos;s biography, projects, articles, data case studies, and service pricelist here.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                Admin Access Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode (nizar2026)"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500"
              />
              <p className="text-xs text-slate-500 mt-2">
                Demo Passcode: <code className="text-indigo-400 font-mono">nizar2026</code>
              </p>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" /> Unlock Web Admin Workspace
            </button>

            <button
              type="button"
              onClick={() => {
                setPasscode('nizar2026');
                setAdminAuthed(true);
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-xs font-mono transition"
            >
              Quick One-Click Demo Login (nizar2026)
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-950/95 border border-emerald-500/40 text-emerald-200 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* Left Sidebar Navigation for Web Admin */}
      <aside className="w-full lg:w-72 bg-slate-900/90 border-b lg:border-b-0 lg:border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center font-mono font-bold text-white">
                CMS
              </div>
              <div>
                <h2 className="font-bold text-sm text-white leading-tight">
                  Nizar Admin Portal
                </h2>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Separated Workspace
                </span>
              </div>
            </div>
          </div>

          <nav className="space-y-1.5">
            {[
              { id: 'overview', label: 'Dashboard Overview', icon: LayoutGrid },
              { id: 'profile', label: 'Brand & Profile Settings', icon: Settings },
              { id: 'pricelist', label: 'Manage Pricelist & Tiers', icon: DollarSign },
              { id: 'projects', label: 'Manage Projects', icon: Code2 },
              { id: 'articles', label: 'Manage Writing / Blog', icon: PenTool },
              { id: 'analytics', label: 'Data Case Studies', icon: BarChart3 }
            ].map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                    active
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-800 space-y-2.5">
          <button
            onClick={onSwitchToPublic}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2 transition"
          >
            <Eye className="w-4 h-4" /> View Live Public Portfolio
          </button>
          <button
            onClick={handleExportJSON}
            className="w-full py-2 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center justify-center gap-2 transition"
          >
            <Download className="w-3.5 h-3.5" /> Export CMS JSON
          </button>
          <button
            onClick={handleResetDefaults}
            className="w-full py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 text-xs flex items-center justify-center gap-2 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Reset Sample Data
          </button>
        </div>
      </aside>

      {/* Main Content Area of Separated Admin Web */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    SEPARATED WEB ADMIN SYSTEM
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Welcome, {cmsData.profile.fullName}
                  </h1>
                  <p className="text-sm text-slate-400 mt-1">
                    All edits made here immediately synchronize with your public portfolio website.
                  </p>
                </div>
                <button
                  onClick={onSwitchToPublic}
                  className="self-start px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2"
                >
                  Open Public Portfolio <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs font-mono text-slate-400 uppercase">Projects</span>
                  <div className="text-3xl font-bold text-white mt-2">
                    {cmsData.projects.length}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Published case studies</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs font-mono text-slate-400 uppercase">Articles</span>
                  <div className="text-3xl font-bold text-white mt-2">
                    {cmsData.articles.length}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Technical posts & drafts</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs font-mono text-slate-400 uppercase">Pricelist Packages</span>
                  <div className="text-3xl font-bold text-emerald-400 mt-2">
                    {cmsData.pricelist.length}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Active service tiers</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                  <span className="text-xs font-mono text-slate-400 uppercase">Data Case Studies</span>
                  <div className="text-3xl font-bold text-indigo-400 mt-2">
                    {cmsData.caseStudies.length}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Interactive Recharts models</p>
                </div>
              </div>

              <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-2">
                  Architecture Separation Note (Web Admin vs Web Portfolio)
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  In accordance with your requirement, the <strong>Web Admin CMS</strong> and the <strong>Public Portfolio Website</strong> are cleanly decoupled in both UI layout and state management. In a multi-domain deployment, you can host the Admin Portal on <code className="text-indigo-300 font-mono">admin.nizarasagaf.com</code> (or <code className="text-indigo-300 font-mono">/admin</code> route protected by middleware) and the public site on <code className="text-emerald-300 font-mono">nizarasagaf.com</code>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setActiveTab('pricelist')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white"
                  >
                    Edit Pricelist Packages →
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white"
                  >
                    Edit Muhammad Nizar Asagaf Bio →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROFILE SETTINGS */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  Brand & Identity Configuration
                </h2>
                <p className="text-sm text-slate-400">
                  Update your name, headlines, contact email, and availability status.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={cmsData.profile.fullName}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: { ...prev.profile, fullName: e.target.value }
                      }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={cmsData.profile.email}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: { ...prev.profile, email: e.target.value }
                      }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Location Label
                  </label>
                  <input
                    type="text"
                    value={cmsData.profile.location}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: { ...prev.profile, location: e.target.value }
                      }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-4 py-3">
                  <div>
                    <span className="text-sm font-medium text-white block">
                      Available for Projects
                    </span>
                    <span className="text-xs text-slate-400">
                      Displays green availability badge in Hero
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cmsData.profile.availableForWork}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: {
                          ...prev.profile,
                          availableForWork: e.target.checked
                        }
                      }))
                    }
                    className="w-5 h-5 accent-indigo-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Primary Headline (English)
                  </label>
                  <input
                    type="text"
                    value={cmsData.profile.headline.en}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: {
                          ...prev.profile,
                          headline: { ...prev.profile.headline, en: e.target.value }
                        }
                      }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                    Primary Headline (Bahasa Indonesia)
                  </label>
                  <input
                    type="text"
                    value={cmsData.profile.headline.id}
                    onChange={(e) =>
                      setCmsData((prev) => ({
                        ...prev,
                        profile: {
                          ...prev.profile,
                          headline: { ...prev.profile.headline, id: e.target.value }
                        }
                      }))
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white"
                  />
                </div>
              </div>

              <button
                onClick={() => showNotification('Profile settings saved to live state.')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium"
              >
                Save Profile Changes
              </button>
            </div>
          )}

          {/* TAB 3: PRICELIST MANAGER */}
          {activeTab === 'pricelist' && (
            <div className="space-y-8">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  Service Pricelist Manager
                </h2>
                <p className="text-sm text-slate-400">
                  Add, edit, or remove service packages across Web Development, Data Analytics, and Technical Writing.
                </p>
              </div>

              {/* Add New Pricelist Package Form */}
              <form
                onSubmit={handleAddPriceTier}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add New Service Pricelist Package
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Discipline Category
                    </label>
                    <select
                      value={newPriceItem.category}
                      onChange={(e) =>
                        setNewPriceItem({ ...newPriceItem, category: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Writing & Content">Writing & Content</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Package / Tier Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. E-Commerce Web + Analytics Bundle"
                      value={newPriceItem.tierName}
                      onChange={(e) =>
                        setNewPriceItem({ ...newPriceItem, tierName: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Price in IDR (Rupiah)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rp 4.500.000"
                      value={newPriceItem.priceIDR}
                      onChange={(e) =>
                        setNewPriceItem({ ...newPriceItem, priceIDR: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Price in USD
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="$300"
                      value={newPriceItem.priceUSD}
                      onChange={(e) =>
                        setNewPriceItem({ ...newPriceItem, priceUSD: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Estimated Delivery
                    </label>
                    <input
                      type="text"
                      value={newPriceItem.deliveryTime}
                      onChange={(e) =>
                        setNewPriceItem({
                          ...newPriceItem,
                          deliveryTime: e.target.value
                        })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Deliverables / Features (One per line)
                  </label>
                  <textarea
                    rows={3}
                    placeholder={'Custom Next.js responsive UI\nInteractive Recharts dashboard\n30 days support'}
                    value={newPriceItem.featuresText}
                    onChange={(e) =>
                      setNewPriceItem({
                        ...newPriceItem,
                        featuresText: e.target.value
                      })
                    }
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newPriceItem.popular}
                      onChange={(e) =>
                        setNewPriceItem({
                          ...newPriceItem,
                          popular: e.target.checked
                        })
                      }
                      className="accent-indigo-500"
                    />
                    Highlight as &quot;Most Popular&quot; Tier
                  </label>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" /> Publish Package to Pricelist
                  </button>
                </div>
              </form>

              {/* Existing Pricelist Items */}
              <div className="space-y-3">
                {cmsData.pricelist.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          {item.category}
                        </span>
                        {item.popular && (
                          <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300">
                            Popular
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-white mt-1.5">
                        {item.tierName}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        <strong className="text-emerald-400">{item.priceIDR}</strong> ({item.priceUSD}) • {item.deliveryTime}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeletePriceTier(item.id)}
                      className="self-start sm:self-center p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition"
                      title="Delete Tier"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROJECTS MANAGER */}
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  Portfolio Projects Manager
                </h2>
                <p className="text-sm text-slate-400">
                  Add or remove engineering, writing, and data analytics projects.
                </p>
              </div>

              <form
                onSubmit={handleAddProject}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-sm font-mono uppercase text-indigo-400 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add New Project Case Study
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Project Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FinTrack Realtime Dashboard"
                      value={newProject.title}
                      onChange={(e) =>
                        setNewProject({ ...newProject, title: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Category
                    </label>
                    <select
                      value={newProject.category}
                      onChange={(e) =>
                        setNewProject({ ...newProject, category: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="Full-Stack Applications">Full-Stack Applications</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Technical Writing">Technical Writing</option>
                      <option value="Automation">Automation</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Problem Statement
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="What real problem did this project address?"
                      value={newProject.problemEn}
                      onChange={(e) =>
                        setNewProject({ ...newProject, problemEn: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Solution & Architecture Summary
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="How did you engineer or analyze the solution?"
                      value={newProject.solutionEn}
                      onChange={(e) =>
                        setNewProject({ ...newProject, solutionEn: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Tech Stack (Comma-separated)
                    </label>
                    <input
                      type="text"
                      value={newProject.stackText}
                      onChange={(e) =>
                        setNewProject({ ...newProject, stackText: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Verified Result / Status Note
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Deployed live for internal operations"
                      value={newProject.resultsEn}
                      onChange={(e) =>
                        setNewProject({ ...newProject, resultsEn: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Save Project to Portfolio
                </button>
              </form>

              <div className="space-y-3">
                {cmsData.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-mono text-indigo-400">
                        {proj.category} • {proj.year}
                      </span>
                      <h4 className="font-semibold text-white">{proj.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {proj.stack.join(' · ')}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ARTICLES MANAGER */}
          {activeTab === 'articles' && (
            <div className="space-y-8">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  Editorial & Technical Blog Manager
                </h2>
                <p className="text-sm text-slate-400">
                  Publish new long-form articles with code blocks and takeaways.
                </p>
              </div>

              <form
                onSubmit={handleAddArticle}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <h3 className="text-sm font-mono uppercase text-indigo-400 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Publish New Technical Article
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Article Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Optimizing SQL Queries for Executive Dashboards"
                      value={newArticle.titleEn}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, titleEn: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Editorial Category
                    </label>
                    <select
                      value={newArticle.category}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, category: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    >
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Data and Analytics">Data and Analytics</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Tutorials and Learning">Tutorials and Learning</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Short Summary / Excerpt
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Concise summary for article cards..."
                      value={newArticle.excerptEn}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, excerptEn: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-slate-400 mb-1">
                      Main Section Content
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your technical paragraph content..."
                      value={newArticle.body1}
                      onChange={(e) =>
                        setNewArticle({ ...newArticle, body1: e.target.value })
                      }
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Publish Article
                </button>
              </form>

              <div className="space-y-3">
                {cmsData.articles.map((art) => (
                  <div
                    key={art.id}
                    className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span className="text-xs font-mono text-indigo-400">
                        {art.category} • {art.publishedAt}
                      </span>
                      <h4 className="font-semibold text-white">{art.title.en}</h4>
                    </div>
                    <button
                      onClick={() => handleDeleteArticle(art.id)}
                      className="p-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: ANALYTICS CASE STUDIES */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-xl font-bold text-white">
                  Data Analytics Case Studies Configuration
                </h2>
                <p className="text-sm text-slate-400">
                  Review and edit the key findings and recommendations for your Recharts case studies.
                </p>
              </div>

              {cmsData.caseStudies.map((cs, idx) => (
                <div
                  key={cs.id}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-emerald-400">
                      Case Study #{idx + 1} • {cs.category}
                    </span>
                    <span className="text-xs text-slate-500">{cs.datasetLabel}</span>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={cs.title}
                      onChange={(e) => {
                        const updated = [...cmsData.caseStudies];
                        updated[idx] = { ...cs, title: e.target.value };
                        setCmsData({ ...cmsData, caseStudies: updated });
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      Key Analytical Insight
                    </label>
                    <input
                      type="text"
                      value={cs.keyInsight}
                      onChange={(e) => {
                        const updated = [...cmsData.caseStudies];
                        updated[idx] = { ...cs, keyInsight: e.target.value };
                        setCmsData({ ...cmsData, caseStudies: updated });
                      }}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// ============================================================================
// 5. MAIN EXPORTED APPLICATION (PORTFOLIO WEB + SEPARATED ADMIN SWITCHER)
// ============================================================================

export default function App() {
  // Global State
  const [cmsData, setCmsData] = useState(INITIAL_CMS_STATE);
  const [appMode, setAppMode] = useState('portfolio'); // 'portfolio' | 'admin'
  const [adminAuthed, setAdminAuthed] = useState(false);

  // Portfolio Navigation & UI State
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'about' | 'projects' | 'project-detail' | 'writing' | 'article-detail' | 'analytics' | 'services' | 'contact' | '404'
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(null);

  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'
  const [lang, setLang] = useState('en'); // 'en' | 'id'
  const [currency, setCurrency] = useState('IDR'); // 'IDR' | 'USD'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Filters
  const [projectSearch, setProjectSearch] = useState('');
  const [projectCategory, setProjectCategory] = useState('All');
  const [articleSearch, setArticleSearch] = useState('');
  const [articleCategory, setArticleCategory] = useState('All');
  const [priceCategoryFilter, setPriceCategoryFilter] = useState('All');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState('cs-1');
  const [roleIndex, setRoleIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: 'Web Development Project',
    selectedPackage: '',
    budgetRange: 'Rp 5.000.000 - Rp 15.000.000',
    message: ''
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactStatus, setContactStatus] = useState('idle'); // 'idle' | 'validated'

  // Rotate Hero Role Descriptor
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage, selectedProjectSlug, selectedArticleSlug, appMode]);

  const t = UI_TEXT[lang];
  const isDark = theme === 'dark';

  // Navigation Helper
  const navigateTo = (page, slug = null) => {
    if (page === 'project-detail' && slug) {
      setSelectedProjectSlug(slug);
    }
    if (page === 'article-detail' && slug) {
      setSelectedArticleSlug(slug);
    }
    setCurrentPage(page);
  };

  // Select package from Pricelist and jump to Contact form
  const handleSelectPackageForInquiry = (pkg) => {
    setContactForm((prev) => ({
      ...prev,
      inquiryType: `${pkg.category} Inquiry`,
      selectedPackage: `${pkg.tierName} (${currency === 'IDR' ? pkg.priceIDR : pkg.priceUSD})`,
      budgetRange: currency === 'IDR' ? pkg.priceIDR : pkg.priceUSD
    }));
    navigateTo('contact');
  };

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return cmsData.projects.filter((p) => {
      const matchesCat =
        projectCategory === 'All' || p.category === projectCategory;
      const q = projectSearch.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.problem[lang].toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [cmsData.projects, projectCategory, projectSearch, lang]);

  // Filtered Articles
  const filteredArticles = useMemo(() => {
    return cmsData.articles.filter((a) => {
      const matchesCat =
        articleCategory === 'All' || a.category === articleCategory;
      const q = articleSearch.toLowerCase();
      const matchesSearch =
        !q ||
        a.title[lang].toLowerCase().includes(q) ||
        a.excerpt[lang].toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [cmsData.articles, articleCategory, articleSearch, lang]);

  // Filtered Pricelist
  const filteredPricelist = useMemo(() => {
    return cmsData.pricelist.filter(
      (item) =>
        priceCategoryFilter === 'All' || item.category === priceCategoryFilter
    );
  }, [cmsData.pricelist, priceCategoryFilter]);

  // Contact Form Validation
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!contactForm.name || contactForm.name.trim().length < 2) {
      errs.name =
        lang === 'en'
          ? 'Please enter your name (min 2 characters).'
          : 'Mohon masukkan nama Anda (minimal 2 karakter).';
    }
    if (
      !contactForm.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)
    ) {
      errs.email =
        lang === 'en'
          ? 'Please enter a valid email address.'
          : 'Mohon masukkan alamat email yang valid.';
    }
    if (!contactForm.message || contactForm.message.trim().length < 15) {
      errs.message =
        lang === 'en'
          ? 'Please share at least 15 characters about your project or inquiry.'
          : 'Mohon tuliskan minimal 15 karakter mengenai kebutuhan Anda.';
    }

    setContactErrors(errs);
    if (Object.keys(errs).length === 0) {
      setContactStatus('validated');
    }
  };

  // Switch to Separated Admin Web if selected
  if (appMode === 'admin') {
    return (
      <AdminPortalApp
        cmsData={cmsData}
        setCmsData={setCmsData}
        onSwitchToPublic={() => setAppMode('portfolio')}
        adminAuthed={adminAuthed}
        setAdminAuthed={setAdminAuthed}
      />
    );
  }

  // Theme surface classes
  const bgPrimary = isDark ? 'bg-[#090B10] text-slate-100' : 'bg-[#F8FAFC] text-slate-900';
  const bgCard = isDark
    ? 'bg-[#111520]/90 border-slate-800/80 hover:border-slate-700'
    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-600';
  const borderSubtle = isDark ? 'border-slate-800/80' : 'border-slate-200';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgPrimary} font-sans selection:bg-indigo-500 selection:text-white`}>
      {/* TOP ENVIRONMENT BAR: SEPARATED PORTFOLIO WEB vs ADMIN CMS */}
      <div className="bg-indigo-950/90 border-b border-indigo-500/30 text-indigo-200 px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-indigo-500/20 border border-indigo-400/30 font-mono text-[10px] uppercase tracking-wider text-indigo-300">
              Dual-Architecture Mode
            </span>
            <span className="hidden sm:inline text-slate-300">
              Viewing <strong>Public Portfolio Website</strong> ({cmsData.profile.fullName})
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('services')}
              className="text-emerald-300 hover:text-emerald-200 font-medium underline underline-offset-4"
            >
              {lang === 'en' ? 'Jump to Pricelist' : 'Lihat Pricelist'}
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={() => setAppMode('admin')}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition shadow-sm"
            >
              <Lock className="w-3 h-3" />
              <span>{lang === 'en' ? 'Open Separated Web Admin CMS' : 'Buka Web Admin Terpisah'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SITE HEADER / NAVIGATION BAR */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b ${borderSubtle} ${
          isDark ? 'bg-[#090B10]/85' : 'bg-white/85'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-600 to-emerald-500 p-[1px]">
              <div
                className={`w-full h-full rounded-[11px] flex items-center justify-center font-mono font-bold text-sm ${
                  isDark ? 'bg-[#090B10] text-white' : 'bg-white text-slate-900'
                }`}
              >
                {cmsData.profile.brandMark}
              </div>
            </div>
            <div>
              <span className="font-bold tracking-tight text-sm sm:text-base block leading-none">
                {cmsData.profile.fullName}
              </span>
              <span className={`text-[11px] font-mono ${textMuted} block mt-1`}>
                DEV • WRITER • DATA ANALYST
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {[
              { id: 'home', label: t.nav.home },
              { id: 'about', label: t.nav.about },
              { id: 'projects', label: t.nav.projects },
              { id: 'writing', label: t.nav.writing },
              { id: 'analytics', label: t.nav.analytics },
              { id: 'services', label: t.nav.services },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => {
              const isActive =
                currentPage === item.id ||
                (item.id === 'projects' && currentPage === 'project-detail') ||
                (item.id === 'writing' && currentPage === 'article-detail');
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-indigo-500/15 text-indigo-400 font-semibold'
                      : `${textMuted} hover:text-indigo-400`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Global Controls: Language, Theme, Admin Shortcut */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLang((prev) => (prev === 'en' ? 'id' : 'en'))}
              className={`px-3 py-2 rounded-xl border ${borderSubtle} text-xs font-mono font-semibold flex items-center gap-1.5 hover:border-indigo-500/50 transition`}
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              className={`p-2.5 rounded-xl border ${borderSubtle} hover:border-indigo-500/50 transition`}
              aria-label="Toggle Dark or Light Mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className={`xl:hidden p-2.5 rounded-xl border ${borderSubtle}`}
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className={`xl:hidden border-b ${borderSubtle} px-4 pt-3 pb-6 space-y-2`}>
            {[
              { id: 'home', label: t.nav.home },
              { id: 'about', label: t.nav.about },
              { id: 'projects', label: t.nav.projects },
              { id: 'writing', label: t.nav.writing },
              { id: 'analytics', label: t.nav.analytics },
              { id: 'services', label: t.nav.services },
              { id: 'contact', label: t.nav.contact }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-indigo-600 text-white'
                    : `${textMuted} hover:bg-slate-800/40`
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => setAppMode('admin')}
                className="w-full py-3 px-4 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" /> Switch to Web Admin Portal
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================================
          PAGE ROUTER VIEWPORT
      ===================================================================== */}
      <main>
        {/* -------------------------------------------------------------------
            1. HOME PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'home' && (
          <div className="space-y-28 pb-24">
            {/* HERO SECTION */}
            <section className="relative pt-12 sm:pt-20 overflow-hidden">
              {/* Subtle atmospheric lighting */}
              <div className="pointer-events-none absolute -top-40 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
              <div className="pointer-events-none absolute top-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Editorial Headline & CTAs */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Availability Pill */}
                    {cmsData.profile.availableForWork && (
                      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>{cmsData.profile.availabilityText[lang]}</span>
                      </div>
                    )}

                    {/* Identity Badge & Cycling Role */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400">
                      <span>{cmsData.profile.fullName}</span>
                      <span>—</span>
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                        {cmsData.profile.roles[lang][roleIndex]}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                      {cmsData.profile.headline[lang]}
                    </h1>

                    {/* Supporting Value Proposition */}
                    <p className={`text-base sm:text-lg ${textMuted} max-w-2xl leading-relaxed`}>
                      {cmsData.profile.subheadline[lang]}
                    </p>

                    {/* Primary & Secondary CTAs */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-2">
                      <button
                        onClick={() => navigateTo('projects')}
                        className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition flex items-center gap-2"
                      >
                        <span>{t.hero.exploreBtn}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => navigateTo('services')}
                        className={`px-6 py-3.5 rounded-xl border ${borderSubtle} hover:border-emerald-500/60 font-semibold text-sm transition flex items-center gap-2`}
                      >
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        <span>{t.hero.pricelistBtn}</span>
                      </button>

                      <button
                        onClick={() => navigateTo('contact')}
                        className={`px-5 py-3.5 rounded-xl ${textMuted} hover:text-indigo-400 text-sm font-medium transition`}
                      >
                        {t.hero.collabBtn} →
                      </button>
                    </div>

                    {/* Quick Three Pillars Summary */}
                    <div className={`pt-6 border-t ${borderSubtle} grid grid-cols-3 gap-4`}>
                      <div>
                        <span className="text-xs font-mono uppercase text-indigo-400 block">
                          01 / CODE
                        </span>
                        <span className="text-sm font-semibold mt-0.5 block">
                          Full-Stack Web Apps
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase text-violet-400 block">
                          02 / PROSE
                        </span>
                        <span className="text-sm font-semibold mt-0.5 block">
                          Technical Storytelling
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase text-emerald-400 block">
                          03 / DATA
                        </span>
                        <span className="text-sm font-semibold mt-0.5 block">
                          BI & Decision Analytics
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Code + Prose + Data Matrix Visual */}
                  <div className="lg:col-span-5">
                    <div className={`rounded-2xl border ${bgCard} p-6 relative overflow-hidden shadow-2xl`}>
                      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                          <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                          <span className="text-xs font-mono text-slate-400 ml-2">
                            nizar-identity-engine.ts
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-500/10">
                          LIVE TELEMETRY
                        </span>
                      </div>

                      {/* Code layer */}
                      <div className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-1.5 mb-4">
                        <div>
                          <span className="text-violet-400">const</span>{' '}
                          <span className="text-indigo-300">engineer</span> ={' '}
                          <span className="text-emerald-300">&quot;Muhammad Nizar Asagaf&quot;</span>;
                        </div>
                        <div>
                          <span className="text-violet-400">const</span>{' '}
                          <span className="text-indigo-300">disciplines</span> = [
                          <span className="text-amber-300">&quot;WebDev&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;Writing&quot;</span>,{' '}
                          <span className="text-amber-300">&quot;DataAnalytics&quot;</span>];
                        </div>
                        <div className="text-slate-500">
                          // Connecting engineering precision with business clarity
                        </div>
                      </div>

                      {/* Mini Live Analytics Preview inside Hero */}
                      <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-slate-400">
                            MULTIDISCIPLINARY VALUE INDEX
                          </span>
                          <span className="text-xs font-mono text-emerald-400">
                            +98.4% Signal
                          </span>
                        </div>
                        <div className="h-36 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                              data={[
                                { stage: 'Discover', code: 40, data: 65 },
                                { stage: 'Design', code: 65, data: 75 },
                                { stage: 'Build', code: 95, data: 82 },
                                { stage: 'Analyze', code: 88, data: 96 },
                                { stage: 'Scale', code: 96, data: 98 }
                              ]}
                            >
                              <defs>
                                <linearGradient id="heroGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.5} />
                                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                                </linearGradient>
                              </defs>
                              <XAxis dataKey="stage" stroke="#64748b" fontSize={10} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#0f172a',
                                  borderColor: '#334155',
                                  borderRadius: '0.75rem',
                                  fontSize: '12px'
                                }}
                              />
                              <Area
                                type="monotone"
                                dataKey="data"
                                stroke="#10b981"
                                fillOpacity={1}
                                fill="url(#heroGrad)"
                              />
                              <Area
                                type="monotone"
                                dataKey="code"
                                stroke="#6366f1"
                                fillOpacity={0.2}
                                fill="#6366f1"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* THREE PROFESSIONAL DISCIPLINES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                  {t.overview.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold mt-2">
                  {t.overview.title}
                </h2>
                <p className={`mt-3 text-sm sm:text-base ${textMuted} leading-relaxed`}>
                  {t.overview.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pillar 1: Web Developer */}
                <div className={`rounded-2xl border p-7 flex flex-col justify-between transition ${bgCard}`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase text-indigo-400">
                      DISCIPLINE 01
                    </span>
                    <h3 className="text-xl font-bold mt-1">
                      Web Development & Engineering
                    </h3>
                    <p className={`text-sm ${textMuted} mt-3 leading-relaxed`}>
                      Architecting responsive, accessible, and fast web applications using React, Next.js, TypeScript, and modern backend APIs.
                    </p>
                    <ul className="mt-5 space-y-2 text-xs">
                      {[
                        'Custom Web Apps & Separated Admin Portals',
                        'Frontend Architecture & Motion Systems',
                        'Technical SEO & Core Web Vitals Optimization'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigateTo('projects')}
                    className="mt-8 pt-4 border-t border-slate-800/60 text-xs font-mono uppercase tracking-wider text-indigo-400 hover:text-indigo-300 flex items-center justify-between"
                  >
                    <span>Explore Development Work</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Pillar 2: Writer & Technical Content Creator */}
                <div className={`rounded-2xl border p-7 flex flex-col justify-between transition ${bgCard}`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6">
                      <PenTool className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase text-violet-400">
                      DISCIPLINE 02
                    </span>
                    <h3 className="text-xl font-bold mt-1">
                      Technical Writing & Content Strategy
                    </h3>
                    <p className={`text-sm ${textMuted} mt-3 leading-relaxed`}>
                      Translating complex software architectures and analytical findings into structured documentation, tutorials, and editorial essays.
                    </p>
                    <ul className="mt-5 space-y-2 text-xs">
                      {[
                        'Developer Documentation & API Guides',
                        'Long-Form Engineering & Data Articles',
                        'Bilingual Editorial Systems (English & Indonesia)'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigateTo('writing')}
                    className="mt-8 pt-4 border-t border-slate-800/60 text-xs font-mono uppercase tracking-wider text-violet-400 hover:text-violet-300 flex items-center justify-between"
                  >
                    <span>Read Editorial Publications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Pillar 3: Data Analyst */}
                <div className={`rounded-2xl border p-7 flex flex-col justify-between transition ${bgCard}`}>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono uppercase text-emerald-400">
                      DISCIPLINE 03
                    </span>
                    <h3 className="text-xl font-bold mt-1">
                      Data Analytics & Business Intelligence
                    </h3>
                    <p className={`text-sm ${textMuted} mt-3 leading-relaxed`}>
                      Transforming raw datasets into clean SQL models, cohort analyses, and interactive executive dashboards that guide real decisions.
                    </p>
                    <ul className="mt-5 space-y-2 text-xs">
                      {[
                        'Exploratory Data Analysis (SQL, Python, Excel)',
                        'Interactive KPI & Cohort Dashboards',
                        'Conversion Funnel & Retention Diagnostics'
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => navigateTo('analytics')}
                    className="mt-8 pt-4 border-t border-slate-800/60 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 flex items-center justify-between"
                  >
                    <span>Explore Data Case Studies</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* FEATURED PROJECTS SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                    SELECTED ENGINEERING & BI WORK
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    {t.sections.featuredProjects}
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('projects')}
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5"
                >
                  <span>{t.sections.viewAllProjects}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {cmsData.projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between transition group ${bgCard}`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-mono mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 text-indigo-400">
                          {project.category}
                        </span>
                        <span className={textMuted}>{project.year}</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-indigo-400 transition">
                        {project.title}
                      </h3>
                      <p className={`text-xs ${textMuted} mt-3 line-clamp-3 leading-relaxed`}>
                        <strong>Problem:</strong> {project.problem[lang]}
                      </p>
                      <p className={`text-xs ${textMuted} mt-2 line-clamp-3 leading-relaxed`}>
                        <strong>Solution:</strong> {project.solution[lang]}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-[11px] font-mono px-2 py-0.5 rounded border ${borderSubtle} ${textMuted}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-6 pt-4 border-t ${borderSubtle} flex items-center justify-between`}>
                      <button
                        onClick={() => navigateTo('project-detail', project.slug)}
                        className="text-xs font-mono uppercase tracking-wider text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono text-emerald-400">
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FEATURED ANALYTICAL CASE STUDY PREVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`rounded-3xl border p-6 sm:p-10 ${bgCard}`}>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                      DATA ANALYTICS & DECISION INTELLIGENCE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                      {t.sections.featuredAnalytics}
                    </h2>
                    <p className={`text-sm ${textMuted} mt-1`}>
                      Interactive visualizations powered by explicitly labeled demonstration datasets.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('analytics')}
                    className="self-start px-5 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider hover:bg-emerald-500/25 transition"
                  >
                    {t.sections.viewAllAnalytics} →
                  </button>
                </div>

                {/* Case Study Selector Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cmsData.caseStudies.map((cs) => (
                    <button
                      key={cs.id}
                      onClick={() => setActiveCaseStudyId(cs.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono transition ${
                        activeCaseStudyId === cs.id
                          ? 'bg-emerald-600 text-white'
                          : `border ${borderSubtle} ${textMuted}`
                      }`}
                    >
                      {cs.category}
                    </button>
                  ))}
                </div>

                {(() => {
                  const activeCS =
                    cmsData.caseStudies.find((c) => c.id === activeCaseStudyId) ||
                    cmsData.caseStudies[0];
                  return (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-5 space-y-4">
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-block">
                          {activeCS.datasetLabel}
                        </span>
                        <h3 className="text-xl font-bold">{activeCS.title}</h3>
                        <div className="space-y-2 text-xs leading-relaxed">
                          <p className={textMuted}>
                            <strong className="text-slate-200">Business Question:</strong>{' '}
                            {activeCS.businessQuestion}
                          </p>
                          <p className={textMuted}>
                            <strong className="text-emerald-400">Key Finding:</strong>{' '}
                            {activeCS.keyInsight}
                          </p>
                          <p className={textMuted}>
                            <strong className="text-indigo-400">Recommendation:</strong>{' '}
                            {activeCS.recommendation}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 pt-2">
                          {activeCS.metrics.map((m) => (
                            <div
                              key={m.label}
                              className={`p-3 rounded-xl border ${borderSubtle}`}
                            >
                              <div className="text-base font-bold text-emerald-400">
                                {m.value}
                              </div>
                              <div className={`text-[11px] ${textMuted}`}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-7 h-72 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4">
                        <ResponsiveContainer width="100%" height="100%">
                          {activeCS.chartType === 'area' ? (
                            <AreaChart data={activeCS.data}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                              <XAxis dataKey="period" stroke="#94a3b8" fontSize={12} />
                              <YAxis stroke="#94a3b8" fontSize={12} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#0f172a',
                                  borderColor: '#334155',
                                  borderRadius: '0.75rem'
                                }}
                              />
                              <Legend />
                              <Area
                                type="monotone"
                                dataKey="desktopConv"
                                name="Desktop Conv %"
                                stroke="#6366f1"
                                fill="#6366f1"
                                fillOpacity={0.25}
                              />
                              <Area
                                type="monotone"
                                dataKey="mobileConv"
                                name="Mobile Conv %"
                                stroke="#10b981"
                                fill="#10b981"
                                fillOpacity={0.25}
                              />
                            </AreaChart>
                          ) : activeCS.chartType === 'bar' ? (
                            <BarChart data={activeCS.data}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                              <XAxis dataKey="segment" stroke="#94a3b8" fontSize={12} />
                              <YAxis stroke="#94a3b8" fontSize={12} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#0f172a',
                                  borderColor: '#334155',
                                  borderRadius: '0.75rem'
                                }}
                              />
                              <Legend />
                              <Bar
                                dataKey="retention"
                                name="6-Month Retention %"
                                fill="#10b981"
                                radius={[6, 6, 0, 0]}
                              />
                              <Bar
                                dataKey="share"
                                name="Account Share %"
                                fill="#6366f1"
                                radius={[6, 6, 0, 0]}
                              />
                            </BarChart>
                          ) : (
                            <LineChart data={activeCS.data}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                              <XAxis dataKey="depth" stroke="#94a3b8" fontSize={12} />
                              <YAxis stroke="#94a3b8" fontSize={12} />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#0f172a',
                                  borderColor: '#334155',
                                  borderRadius: '0.75rem'
                                }}
                              />
                              <Legend />
                              <Line
                                type="monotone"
                                dataKey="deepDive"
                                name="Deep Architecture Guide %"
                                stroke="#10b981"
                                strokeWidth={3}
                              />
                              <Line
                                type="monotone"
                                dataKey="tutorial"
                                name="Short Tutorial %"
                                stroke="#6366f1"
                                strokeWidth={2}
                              />
                            </LineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </section>

            {/* FEATURED WRITING SECTION */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                    TECHNICAL WRITING & EDITORIAL INSIGHTS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    {t.sections.featuredWriting}
                  </h2>
                </div>
                <button
                  onClick={() => navigateTo('writing')}
                  className="text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1.5"
                >
                  <span>{t.sections.viewAllWriting}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cmsData.articles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => navigateTo('article-detail', article.slug)}
                    className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer transition group ${bgCard}`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className="text-violet-400">{article.category}</span>
                        <span className={textMuted}>
                          {estimateReadingTime(article)} min read
                        </span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-violet-400 transition">
                        {article.title[lang]}
                      </h3>
                      <p className={`text-xs ${textMuted} mt-3 leading-relaxed`}>
                        {article.excerpt[lang]}
                      </p>
                    </div>
                    <div className={`mt-6 pt-4 border-t ${borderSubtle} flex items-center justify-between text-xs font-mono`}>
                      <span className={textMuted}>{article.publishedAt}</span>
                      <span className="text-violet-400 flex items-center gap-1">
                        Read Article <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* PRICELIST PREVIEW SECTION ON HOME PAGE */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    INVESTMENT & PACKAGES
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                    {t.sections.pricelistTitle}
                  </h2>
                  <p className={`text-sm ${textMuted} mt-1 max-w-2xl`}>
                    {t.sections.pricelistSub}
                  </p>
                </div>

                {/* Currency Switcher IDR / USD */}
                <div className="flex items-center gap-2 self-start">
                  <div className={`inline-flex rounded-xl p-1 border ${borderSubtle}`}>
                    {['IDR', 'USD'].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition ${
                          currency === curr
                            ? 'bg-emerald-600 text-white'
                            : textMuted
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => navigateTo('services')}
                    className="px-4 py-2 rounded-xl bg-indigo-500/15 text-indigo-400 text-xs font-mono hover:bg-indigo-500/25 transition"
                  >
                    Full Pricelist ({cmsData.pricelist.length}) →
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cmsData.pricelist.slice(0, 3).map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between relative ${
                      pkg.popular
                        ? 'border-emerald-500/60 ring-1 ring-emerald-500/30'
                        : ''
                    } ${bgCard}`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-mono uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <span className="text-xs font-mono text-indigo-400 uppercase">
                        {pkg.category}
                      </span>
                      <h3 className="text-lg font-bold mt-1">{pkg.tierName}</h3>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                          {currency === 'IDR' ? pkg.priceIDR : pkg.priceUSD}
                        </span>
                      </div>
                      <span className={`text-[11px] font-mono ${textMuted} block mt-1`}>
                        {pkg.billingNote} • Est. {pkg.deliveryTime}
                      </span>
                      <p className={`text-xs ${textMuted} mt-3 leading-relaxed`}>
                        {pkg.audience}
                      </p>
                      <ul className="mt-5 space-y-2 text-xs">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleSelectPackageForInquiry(pkg)}
                      className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center justify-center gap-2"
                    >
                      <span>Select Package & Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* PROFESSIONAL PROCESS (6 STAGES) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                  HOW I WORK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                  {t.sections.processTitle}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {[
                  {
                    step: '01',
                    name: 'Discover',
                    desc: 'Clarify business objectives, user pain points, and target metrics.'
                  },
                  {
                    step: '02',
                    name: 'Research',
                    desc: 'Audit existing data schemas, technical constraints, and content gaps.'
                  },
                  {
                    step: '03',
                    name: 'Design',
                    desc: 'Structure clean UI wireframes, API contracts, and editorial hierarchy.'
                  },
                  {
                    step: '04',
                    name: 'Build',
                    desc: 'Engineer production code, write documentation, or model SQL pipelines.'
                  },
                  {
                    step: '05',
                    name: 'Analyze',
                    desc: 'Measure performance, validate telemetry, and test edge cases.'
                  },
                  {
                    step: '06',
                    name: 'Improve',
                    desc: 'Iterate based on verified user behavior and stakeholder feedback.'
                  }
                ].map((p) => (
                  <div key={p.step} className={`rounded-2xl border p-5 ${bgCard}`}>
                    <span className="text-xs font-mono text-indigo-400">{p.step}</span>
                    <h3 className="font-bold text-base mt-1">{p.name}</h3>
                    <p className={`text-xs ${textMuted} mt-2 leading-relaxed`}>
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ ACCORDION */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                  CLARITY & COLLABORATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-1">
                  {t.sections.faqTitle}
                </h2>
              </div>
              <div className="space-y-3">
                {cmsData.faqs.map((item, idx) => {
                  const open = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`rounded-2xl border ${bgCard} overflow-hidden`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(open ? -1 : idx)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base"
                      >
                        <span>{item.q[lang]}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            open ? 'rotate-180 text-indigo-400' : ''
                          }`}
                        />
                      </button>
                      {open && (
                        <div className={`px-6 pb-5 text-sm ${textMuted} leading-relaxed`}>
                          {item.a[lang]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* -------------------------------------------------------------------
            2. ABOUT PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'about' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                PROFESSIONAL BIOGRAPHY & PHILOSOPHY
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {cmsData.profile.fullName}
              </h1>
              <p className="text-base sm:text-lg text-indigo-400 font-mono">
                Web Developer • Technical Writer • Data Analyst
              </p>
            </div>

            <div className={`rounded-2xl border p-6 sm:p-8 space-y-4 ${bgCard}`}>
              {cmsData.profile.bioParagraphs[lang].map((p, i) => (
                <p key={i} className={`text-sm sm:text-base ${textMuted} leading-relaxed`}>
                  {p}
                </p>
              ))}
            </div>

            {/* Three Philosophies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`rounded-2xl border p-6 ${bgCard}`}>
                <h3 className="font-bold text-base text-indigo-400 mb-2">
                  Engineering Philosophy
                </h3>
                <p className={`text-xs sm:text-sm ${textMuted} leading-relaxed`}>
                  Prioritize maintainable architecture, strict type safety, and accessible user interfaces over fleeting framework hype.
                </p>
              </div>
              <div className={`rounded-2xl border p-6 ${bgCard}`}>
                <h3 className="font-bold text-base text-violet-400 mb-2">
                  Writing Philosophy
                </h3>
                <p className={`text-xs sm:text-sm ${textMuted} leading-relaxed`}>
                  Respect the reader&apos;s time. Every technical article or documentation guide should solve a real problem with runnable examples.
                </p>
              </div>
              <div className={`rounded-2xl border p-6 ${bgCard}`}>
                <h3 className="font-bold text-base text-emerald-400 mb-2">
                  Analytical Mindset
                </h3>
                <p className={`text-xs sm:text-sm ${textMuted} leading-relaxed`}>
                  Never torture data to fit a narrative. Acknowledge dataset limitations honestly and focus on metrics that drive concrete action.
                </p>
              </div>
            </div>

            {/* Skills Matrix */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.sections.skillsTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cmsData.skills.map((group) => (
                  <div key={group.group} className={`rounded-2xl border p-6 ${bgCard}`}>
                    <h3 className="font-bold text-sm font-mono uppercase text-indigo-400 mb-4">
                      {group.group}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className={`text-xs px-3 py-1.5 rounded-lg border ${borderSubtle}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience & Milestones Timeline */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t.sections.timelineTitle}</h2>
              <div className="space-y-4">
                {cmsData.timeline.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${bgCard}`}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-indigo-400">{item.period}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{item.type}</span>
                      </div>
                      <h3 className="text-lg font-bold mt-1">{item.role}</h3>
                      <p className="text-xs font-mono text-slate-400">
                        {item.organization}
                      </p>
                      <p className={`text-sm ${textMuted} mt-2`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            3. PROJECTS PAGE (SEARCHABLE & FILTERABLE)
        ------------------------------------------------------------------- */}
        {currentPage === 'projects' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                PORTFOLIO LIBRARY
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
                Engineering, Writing & Analytics Projects
              </h1>
              <p className={`text-sm sm:text-base ${textMuted} mt-2 max-w-2xl`}>
                Filter across full-stack applications, analytical dashboards, automation tools, and documentation systems.
              </p>
            </div>

            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  placeholder="Search by title, stack, or problem..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm focus:outline-none focus:border-indigo-500`}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  'All',
                  'Full-Stack Applications',
                  'Data Analytics',
                  'Technical Writing',
                  'Automation'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition ${
                      projectCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : `border ${borderSubtle} ${textMuted}`
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {filteredProjects.length === 0 ? (
              <div className={`rounded-2xl border p-12 text-center ${bgCard}`}>
                <p className="text-base font-semibold">
                  No projects matched your current filter criteria.
                </p>
                <button
                  onClick={() => {
                    setProjectSearch('');
                    setProjectCategory('All');
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-mono"
                >
                  Reset Project Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={`rounded-2xl border p-6 flex flex-col justify-between ${bgCard}`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono mb-3">
                        <span className="text-indigo-400">{project.category}</span>
                        <span className="text-emerald-400">{project.status}</span>
                      </div>
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <p className={`text-sm ${textMuted} mt-3 leading-relaxed`}>
                        <strong>Problem:</strong> {project.problem[lang]}
                      </p>
                      <p className={`text-sm ${textMuted} mt-2 leading-relaxed`}>
                        <strong>Solution:</strong> {project.solution[lang]}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className={`text-xs font-mono px-2.5 py-1 rounded border ${borderSubtle}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`mt-6 pt-4 border-t ${borderSubtle} flex items-center justify-between`}>
                      <button
                        onClick={() => navigateTo('project-detail', project.slug)}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5"
                      >
                        <span>Open Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex items-center gap-3 text-xs font-mono">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`${textMuted} hover:text-indigo-400 flex items-center gap-1`}
                        >
                          <Github className="w-3.5 h-3.5" /> Repo
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* -------------------------------------------------------------------
            4. PROJECT DETAIL PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'project-detail' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            {(() => {
              const project =
                cmsData.projects.find((p) => p.slug === selectedProjectSlug) ||
                cmsData.projects[0];
              return (
                <>
                  <button
                    onClick={() => navigateTo('projects')}
                    className={`text-xs font-mono ${textMuted} hover:text-indigo-400 flex items-center gap-1.5`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Projects Library
                  </button>

                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-400">
                        {project.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400">
                        {project.status}
                      </span>
                      <span className={textMuted}>{project.year}</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold">
                      {project.title}
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`rounded-2xl border p-6 ${bgCard}`}>
                      <h3 className="text-xs font-mono uppercase text-rose-400 mb-2">
                        01 / Problem Definition
                      </h3>
                      <p className={`text-sm ${textMuted} leading-relaxed`}>
                        {project.problem[lang]}
                      </p>
                    </div>
                    <div className={`rounded-2xl border p-6 ${bgCard}`}>
                      <h3 className="text-xs font-mono uppercase text-emerald-400 mb-2">
                        02 / Engineered Solution
                      </h3>
                      <p className={`text-sm ${textMuted} leading-relaxed`}>
                        {project.solution[lang]}
                      </p>
                    </div>
                    <div className={`rounded-2xl border p-6 ${bgCard}`}>
                      <h3 className="text-xs font-mono uppercase text-indigo-400 mb-2">
                        03 / Architecture & Implementation
                      </h3>
                      <p className={`text-sm ${textMuted} leading-relaxed`}>
                        {project.architecture[lang]}
                      </p>
                    </div>
                    <div className={`rounded-2xl border p-6 ${bgCard}`}>
                      <h3 className="text-xs font-mono uppercase text-amber-400 mb-2">
                        04 / Outcomes & Lessons Learned
                      </h3>
                      <p className={`text-sm ${textMuted} leading-relaxed`}>
                        {project.results[lang]} — {project.lessons[lang]}
                      </p>
                    </div>
                  </div>

                  <div className={`rounded-2xl border p-6 flex flex-wrap items-center justify-between gap-4 ${bgCard}`}>
                    <div>
                      <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                        Technology Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => navigateTo('contact')}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
                    >
                      Discuss a Similar Project →
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* -------------------------------------------------------------------
            5. WRITING & BLOG PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'writing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                EDITORIAL & TECHNICAL PUBLISHING
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-1">
                Articles, Tutorials & Analytical Essays
              </h1>
              <p className={`text-sm sm:text-base ${textMuted} mt-2 max-w-2xl`}>
                Long-form writing on software architecture, SQL & data storytelling, and technical communication by {cmsData.profile.fullName}.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={articleSearch}
                  onChange={(e) => setArticleSearch(e.target.value)}
                  placeholder="Search articles..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm`}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'All',
                  'Software Engineering',
                  'Data and Analytics',
                  'Tutorials and Learning'
                ].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setArticleCategory(cat)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition ${
                      articleCategory === cat
                        ? 'bg-violet-600 text-white'
                        : `border ${borderSubtle} ${textMuted}`
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => navigateTo('article-detail', article.slug)}
                  className={`rounded-2xl border p-6 flex flex-col justify-between cursor-pointer group ${bgCard}`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className="text-violet-400">{article.category}</span>
                      <span className={textMuted}>
                        {estimateReadingTime(article)} min read
                      </span>
                    </div>
                    <h2 className="text-xl font-bold group-hover:text-violet-400 transition">
                      {article.title[lang]}
                    </h2>
                    <p className={`text-sm ${textMuted} mt-3 leading-relaxed`}>
                      {article.excerpt[lang]}
                    </p>
                  </div>
                  <div className={`mt-6 pt-4 border-t ${borderSubtle} flex items-center justify-between text-xs font-mono`}>
                    <span className={textMuted}>{article.publishedAt}</span>
                    <span className="text-violet-400">Read Full Article →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            6. ARTICLE DETAIL PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'article-detail' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            {(() => {
              const article =
                cmsData.articles.find((a) => a.slug === selectedArticleSlug) ||
                cmsData.articles[0];
              return (
                <>
                  <button
                    onClick={() => navigateTo('writing')}
                    className={`text-xs font-mono ${textMuted} hover:text-violet-400 flex items-center gap-1.5`}
                  >
                    <ArrowLeft className="w-4 h-4" /> Back to Writing Index
                  </button>

                  <header className="space-y-4 border-b border-slate-800 pb-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-400">
                        {article.category}
                      </span>
                      <span className={textMuted}>
                        Published {article.publishedAt}
                      </span>
                      <span className={textMuted}>
                        • {estimateReadingTime(article)} min read
                      </span>
                      {article.isSampleDraft && (
                        <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Editable Sample Article
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                      {article.title[lang]}
                    </h1>
                    <p className={`text-base sm:text-lg ${textMuted}`}>
                      {article.subtitle[lang]}
                    </p>
                    <div className="text-xs font-mono text-indigo-400">
                      By {cmsData.profile.fullName}
                    </div>
                  </header>

                  {/* Table of Contents */}
                  <div className={`rounded-2xl border p-5 ${bgCard}`}>
                    <span className="text-xs font-mono uppercase text-violet-400 block mb-2">
                      TABLE OF CONTENTS
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm">
                      {article.sections.map((sec, idx) => (
                        <li key={idx} className={textMuted}>
                          {sec.heading}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Article Body */}
                  <div className="space-y-8">
                    {article.sections.map((sec, idx) => (
                      <section key={idx} className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {sec.heading}
                        </h2>
                        <p className={`text-sm sm:text-base ${textMuted} leading-relaxed`}>
                          {sec.body}
                        </p>
                      </section>
                    ))}

                    {article.codeSnippet && (
                      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-x-auto">
                        <div className="text-xs font-mono text-slate-400 mb-2">
                          Code Implementation Reference
                        </div>
                        <pre className="text-xs sm:text-sm font-mono text-emerald-300 leading-relaxed">
                          <code>{article.codeSnippet}</code>
                        </pre>
                      </div>
                    )}

                    <div className="p-6 rounded-2xl bg-violet-500/10 border border-violet-500/30">
                      <span className="text-xs font-mono uppercase text-violet-300 block mb-1">
                        KEY TAKEAWAY
                      </span>
                      <p className="text-sm sm:text-base font-medium">
                        {article.takeaway[lang]}
                      </p>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* -------------------------------------------------------------------
            7. DATA ANALYTICS PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'analytics' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                DATA ANALYTICS & BUSINESS INTELLIGENCE LAB
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold">
                Turning Raw Datasets Into Executive Clarity
              </h1>
              <p className={`text-sm sm:text-base ${textMuted} max-w-3xl leading-relaxed`}>
                All interactive case studies below use explicitly labeled demonstration datasets to showcase analytical methodology, SQL/Python data preparation, visualization design, and honest limitation reporting.
              </p>
            </div>

            {/* Capabilities Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { title: 'Data Cleaning & ETL', tool: 'SQL • Python Pandas' },
                { title: 'Exploratory Analysis', tool: 'Cohort & Funnel Math' },
                { title: 'BI Dashboards', tool: 'Recharts • Looker • Excel' },
                { title: 'Data Storytelling', tool: 'Executive Recommendations' }
              ].map((cap) => (
                <div key={cap.title} className={`rounded-2xl border p-5 ${bgCard}`}>
                  <div className="text-sm font-bold">{cap.title}</div>
                  <div className="text-xs font-mono text-emerald-400 mt-1">
                    {cap.tool}
                  </div>
                </div>
              ))}
            </div>

            {/* Full Case Studies List */}
            <div className="space-y-10">
              {cmsData.caseStudies.map((cs) => (
                <div
                  key={cs.id}
                  className={`rounded-3xl border p-6 sm:p-8 ${bgCard} grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
                >
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400">
                        {cs.category}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300">
                        {cs.datasetLabel}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold">{cs.title}</h2>
                    <div className="space-y-2 text-xs sm:text-sm leading-relaxed">
                      <p className={textMuted}>
                        <strong>Business Question:</strong> {cs.businessQuestion}
                      </p>
                      <p className={textMuted}>
                        <strong>Methodology:</strong> {cs.methodology}
                      </p>
                      <p className={textMuted}>
                        <strong className="text-emerald-400">Key Finding:</strong>{' '}
                        {cs.keyInsight}
                      </p>
                      <p className={textMuted}>
                        <strong className="text-indigo-400">Recommendation:</strong>{' '}
                        {cs.recommendation}
                      </p>
                      <p className="text-xs text-slate-500">
                        <strong>Limitations & Assumptions:</strong> {cs.limitation}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-6 h-72 bg-slate-950/70 border border-slate-800 rounded-2xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      {cs.chartType === 'area' ? (
                        <AreaChart data={cs.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="period" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#0f172a',
                              borderColor: '#334155',
                              borderRadius: '0.75rem'
                            }}
                          />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="desktopConv"
                            name="Desktop Conv %"
                            stroke="#6366f1"
                            fill="#6366f1"
                            fillOpacity={0.3}
                          />
                          <Area
                            type="monotone"
                            dataKey="mobileConv"
                            name="Mobile Conv %"
                            stroke="#10b981"
                            fill="#10b981"
                            fillOpacity={0.3}
                          />
                        </AreaChart>
                      ) : cs.chartType === 'bar' ? (
                        <BarChart data={cs.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="segment" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#0f172a',
                              borderColor: '#334155',
                              borderRadius: '0.75rem'
                            }}
                          />
                          <Legend />
                          <Bar
                            dataKey="retention"
                            name="Retention %"
                            fill="#10b981"
                            radius={[6, 6, 0, 0]}
                          />
                          <Bar
                            dataKey="share"
                            name="Account Share %"
                            fill="#6366f1"
                            radius={[6, 6, 0, 0]}
                          />
                        </BarChart>
                      ) : (
                        <LineChart data={cs.data}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                          <XAxis dataKey="depth" stroke="#94a3b8" fontSize={12} />
                          <YAxis stroke="#94a3b8" fontSize={12} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#0f172a',
                              borderColor: '#334155',
                              borderRadius: '0.75rem'
                            }}
                          />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="deepDive"
                            name="Deep Guide Retention %"
                            stroke="#10b981"
                            strokeWidth={3}
                          />
                          <Line
                            type="monotone"
                            dataKey="tutorial"
                            name="Short Post Retention %"
                            stroke="#6366f1"
                            strokeWidth={2}
                          />
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            8. SERVICES & PRICELIST PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'services' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  SERVICES & TRANSPARENT PRICELIST
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold mt-1">
                  {t.sections.pricelistTitle}
                </h1>
                <p className={`text-sm sm:text-base ${textMuted} mt-2 max-w-2xl`}>
                  Choose a structured package below or request a custom quote tailored to your technical roadmap. All packages are editable in the separated Web Admin CMS.
                </p>
              </div>

              {/* Currency & Category Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <div className={`inline-flex rounded-xl p-1 border ${borderSubtle}`}>
                  {['IDR', 'USD'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition ${
                        currency === curr
                          ? 'bg-emerald-600 text-white'
                          : textMuted
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                'All',
                'Web Development',
                'Data Analytics',
                'Writing & Content'
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setPriceCategoryFilter(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-mono transition ${
                    priceCategoryFilter === cat
                      ? 'bg-indigo-600 text-white'
                      : `border ${borderSubtle} ${textMuted}`
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pricelist Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPricelist.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-2xl border p-7 flex flex-col justify-between relative transition ${
                    pkg.popular
                      ? 'border-emerald-500/60 ring-1 ring-emerald-500/30'
                      : ''
                  } ${bgCard}`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-mono uppercase tracking-wider">
                      Recommended
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-mono uppercase text-indigo-400">
                      {pkg.category}
                    </span>
                    <h2 className="text-xl font-bold mt-1">{pkg.tierName}</h2>
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-emerald-400">
                        {currency === 'IDR' ? pkg.priceIDR : pkg.priceUSD}
                      </span>
                    </div>
                    <span className={`text-xs font-mono ${textMuted} block mt-1`}>
                      {pkg.billingNote} • Delivery: {pkg.deliveryTime}
                    </span>
                    <p className={`text-xs ${textMuted} mt-4 leading-relaxed`}>
                      <strong>Best for:</strong> {pkg.audience}
                    </p>

                    <div className={`my-5 border-t ${borderSubtle}`} />

                    <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5 text-xs">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleSelectPackageForInquiry(pkg)}
                    className="mt-8 w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center justify-center gap-2"
                  >
                    <span>Book / Customize This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------
            9. CONTACT PAGE
        ------------------------------------------------------------------- */}
        {currentPage === 'contact' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
                  DIRECT COLLABORATION & INQUIRIES
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold">
                  Let&apos;s Discuss Your Project or Role
                </h1>
                <p className={`text-sm ${textMuted} leading-relaxed`}>
                  Whether you are hiring for a Web / Data team, commissioning a custom website or BI dashboard, or requesting technical documentation, send a structured brief below.
                </p>

                <div className={`rounded-2xl border p-5 space-y-4 ${bgCard}`}>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${cmsData.profile.email}`}
                        className="text-sm font-medium hover:text-indigo-400"
                      >
                        {cmsData.profile.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-xs font-mono text-slate-400 block">
                        Location
                      </span>
                      <span className="text-sm font-medium">
                        {cmsData.profile.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form
                  onSubmit={handleContactSubmit}
                  noValidate
                  className={`rounded-2xl border p-6 sm:p-8 space-y-5 ${bgCard}`}
                >
                  <h2 className="text-xl font-bold">Project & Collaboration Brief</h2>

                  {contactForm.selectedPackage && (
                    <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs flex items-center justify-between">
                      <span>
                        Selected Package: <strong>{contactForm.selectedPackage}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setContactForm({ ...contactForm, selectedPackage: '' })
                        }
                        className="text-slate-400 hover:text-white"
                      >
                        Clear
                      </button>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        placeholder="Full name"
                        className={`w-full px-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm`}
                      />
                      {contactErrors.name && (
                        <p className="text-xs text-rose-400 mt-1">
                          {contactErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        placeholder="you@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm`}
                      />
                      {contactErrors.email && (
                        <p className="text-xs text-rose-400 mt-1">
                          {contactErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5">
                        Collaboration Type
                      </label>
                      <select
                        value={contactForm.inquiryType}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            inquiryType: e.target.value
                          })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border ${borderSubtle} ${
                          isDark ? 'bg-[#090B10]' : 'bg-white'
                        } text-sm`}
                      >
                        <option value="Web Development Project">
                          Web Development Project
                        </option>
                        <option value="Data Analytics & BI Dashboard">
                          Data Analytics & BI Dashboard
                        </option>
                        <option value="Technical Writing & Documentation">
                          Technical Writing & Documentation
                        </option>
                        <option value="Full-Time / Role Opportunity">
                          Full-Time / Role Opportunity
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase mb-1.5">
                        Estimated Budget / Tier
                      </label>
                      <input
                        type="text"
                        value={contactForm.budgetRange}
                        onChange={(e) =>
                          setContactForm({
                            ...contactForm,
                            budgetRange: e.target.value
                          })
                        }
                        className={`w-full px-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase mb-1.5">
                      Project Goals, Timeline & Context *
                    </label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      placeholder="Describe the problem you are solving, timeline expectations, or role details..."
                      className={`w-full px-4 py-2.5 rounded-xl border ${borderSubtle} bg-transparent text-sm`}
                    />
                    {contactErrors.message && (
                      <p className="text-xs text-rose-400 mt-1">
                        {contactErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Validate Brief & Prepare Direct Dispatch</span>
                  </button>

                  {contactStatus === 'validated' && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Brief Validated — Honest Mailto Dispatch Ready</span>
                      </div>
                      <p className={`text-xs ${textMuted}`}>
                        Because this environment operates without a third-party SMTP server configured, click below to launch your email client with your structured brief pre-filled for <strong>{cmsData.profile.email}</strong>.
                      </p>
                      <a
                        href={`mailto:${cmsData.profile.email}?subject=${encodeURIComponent(
                          `[Portfolio Inquiry] ${contactForm.inquiryType} — ${contactForm.name}`
                        )}&body=${encodeURIComponent(
                          `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nType: ${contactForm.inquiryType}\nPackage: ${contactForm.selectedPackage || 'Custom'}\nBudget: ${contactForm.budgetRange}\n\nMessage:\n${contactForm.message}`
                        )}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
                      >
                        <Mail className="w-3.5 h-3.5" /> Open Email Client with Brief
                      </a>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* GLOBAL FOOTER */}
      <footer className={`border-t ${borderSubtle} py-12 mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="font-bold text-base">
              {cmsData.profile.fullName}
            </div>
            <p className={`text-xs ${textMuted} mt-1`}>
              Web Developer | Writer & Technical Content Creator | Data Analyst
            </p>
            <p className={`text-xs ${textMuted} mt-2`}>
              © {new Date().getFullYear()} {cmsData.profile.fullName}. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <button
              onClick={() => navigateTo('services')}
              className="hover:text-emerald-400"
            >
              Pricelist
            </button>
            <button
              onClick={() => navigateTo('projects')}
              className="hover:text-indigo-400"
            >
              Projects
            </button>
            <button
              onClick={() => navigateTo('writing')}
              className="hover:text-violet-400"
            >
              Writing
            </button>
            <button
              onClick={() => navigateTo('analytics')}
              className="hover:text-emerald-400"
            >
              Analytics
            </button>
            <button
              onClick={() => setAppMode('admin')}
              className="px-3 py-1.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/25 flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" /> Separated Admin CMS
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}