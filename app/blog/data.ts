export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  accent: string
}

export const blogPosts: BlogPost[] = [
  { slug: "mendesain-api-yang-siap-tumbuh", title: "Mendesain API yang siap tumbuh", excerpt: "Prinsip praktis untuk membuat kontrak API tetap jelas ketika fitur dan tim terus berkembang.", category: "Engineering", readTime: "6 min read", publishedAt: "12 Jun 2026", accent: "#c9ff3d" },
  { slug: "memilih-arsitektur-untuk-produk-real-time", title: "Memilih arsitektur untuk produk real-time", excerpt: "Cara memetakan kebutuhan sinkronisasi, notifikasi, dan konsistensi sebelum memilih teknologi.", category: "Architecture", readTime: "8 min read", publishedAt: "28 Mei 2026", accent: "#b7a6ff" },
  { slug: "checklist-release-yang-lebih-tenang", title: "Checklist release yang lebih tenang", excerpt: "Ritual kecil sebelum deploy yang membantu tim menemukan risiko lebih awal.", category: "Delivery", readTime: "5 min read", publishedAt: "09 Mei 2026", accent: "#72d9ff" },
]

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
