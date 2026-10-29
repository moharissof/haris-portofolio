import Link from "next/link"
import type { CSSProperties } from "react"
import { blogPosts } from "./data"

export default function BlogPage() {
  return (
    <main className="editorial-page">
      <nav className="nav editorial-nav"><Link className="brand" href="/"><img className="brand-image" src="/logo.png" alt="Haris Sofyan" /></Link><div className="nav-links"><Link href="/">Home</Link><Link href="/dashboard">Dashboard</Link></div><Link className="nav-cta" href="/">Back to portfolio ↗</Link></nav>
      <section className="editorial-hero"><span className="section-index">FIELD NOTES / 2026</span><h1>Ideas for building<br /><em>better systems.</em></h1><p>Catatan singkat tentang engineering, arsitektur, dan cara menjaga proses delivery tetap manusiawi.</p></section>
      <section className="blog-list" aria-label="Blog posts">{blogPosts.map((post, index) => <Link className="blog-card" href={`/blog/${post.slug}`} key={post.slug} style={{ "--post-accent": post.accent } as React.CSSProperties}><div className="blog-card-art"><span>0{index + 1}</span><i /></div><div className="blog-card-copy"><div className="blog-meta"><span>{post.category}</span><span>{post.readTime}</span><span>{post.publishedAt}</span></div><h2>{post.title}</h2><p>{post.excerpt}</p><strong>Read note <span>↗</span></strong></div></Link>)}</section>
      <footer><span>© 2026 Haris Sofyan</span><span>Notes on software, cloud, and delivery</span></footer>
    </main>
  )
}
