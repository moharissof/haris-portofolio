import Link from "next/link"
import { notFound } from "next/navigation"
import { getPost } from "../data"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug)
  if (!post) notFound()
  return <main className="article-page"><nav className="nav editorial-nav"><Link className="brand" href="/"><img className="brand-image" src="/logo.png" alt="Haris Sofyan" /></Link><Link className="nav-cta" href="/blog">← All notes</Link></nav><article className="article"><div className="blog-meta"><span>{post.category}</span><span>{post.readTime}</span><span>{post.publishedAt}</span></div><h1>{post.title}</h1><p className="article-lead">{post.excerpt}</p><div className="article-body"><p>Produk yang baik jarang lahir dari satu keputusan besar. Biasanya ia tumbuh dari serangkaian keputusan kecil yang dibuat dengan konteks yang cukup dan dikomunikasikan dengan jelas.</p><h2>Mulai dari kontrak yang bisa dipahami</h2><p>Sebelum memilih tools, tuliskan siapa yang menggunakan sistem, data apa yang berpindah, dan bagaimana keberhasilan diukur. Kontrak yang sederhana membuat diskusi lintas tim lebih cepat dan mengurangi asumsi tersembunyi.</p><h2>Rancang ruang untuk perubahan</h2><p>Arsitektur yang sehat bukan yang paling rumit, tetapi yang memberi batas yang jelas. Pisahkan tanggung jawab, beri nama yang mudah dicari, dan dokumentasikan keputusan yang paling mahal untuk diubah.</p><blockquote>Clarity is a feature. It compounds across every handoff.</blockquote><p>Gunakan catatan ini sebagai titik mulai, lalu validasi dengan sistem dan pengguna yang sebenarnya. Iterasi kecil yang konsisten selalu mengalahkan rencana sempurna yang tidak pernah dirilis.</p></div></article></main>
}
