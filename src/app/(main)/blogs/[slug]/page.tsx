import { fetchQuery } from "convex/nextjs";
import type { Metadata } from 'next'

import { BlogDetailPage } from "@/features/blogs/pages"
import { toTitleCase } from '@/lib/utils'
import { api } from "@convex/_generated/api";


interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  return <BlogDetailPage slug={slug} />
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const decodedSlug = decodeURIComponent(slug)

  // Base site URL
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.csguild.tech'

  try {
    const blog = await fetchQuery(api.blogs.getBlogBySlug, { slug: decodedSlug })

    if (!blog) {
      return {
        title: `${toTitleCase(decodedSlug.replace(/-/g, ' '))} | CS Guild Blogs`,
        description: 'Read insightful articles and updates from CS Guild.',
      }
    }

    const title = `${blog.title} | CS Guild Blogs`
    const description = blog.metaDescription || blog.excerpt || blog.subtitle || blog.title

    // Prefer main cover image, else first available
    const mainCover = (blog.coverImages || []).find((img) => img.isMain) || (blog.coverImages || [])[0]
    const ogImageUrl = mainCover?.imageUrl
      ? (mainCover.imageUrl.startsWith('http') ? mainCover.imageUrl : `${SITE_URL}${mainCover.imageUrl}`)
      : `${SITE_URL}/og-image.png`

    const authors = blog.author?.username
      ? [{ name: `${blog.author.firstName || ''} ${blog.author.lastName || ''}`.trim() || blog.author.username }]
      : undefined

    const keywords: Array<string> = [
      'blog',
      'cs guild',
      ...((blog.tags || []).map((t) => t?.name).filter(Boolean) as Array<string>),
      ...((blog.categories || []).map((c) => c?.name).filter(Boolean) as Array<string>),
    ]

    return {
      title,
      description,
      keywords,
      authors,
      openGraph: {
        title,
        description,
        type: 'article',
        siteName: 'CS Guild',
        url: `${SITE_URL}/blogs/${decodedSlug}`,
        images: [
          {
            url: ogImageUrl,
            alt: blog.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [
          {
            url: ogImageUrl,
            alt: blog.title,
          },
        ],
      },
    }
  } catch {
    return {
      title: `${toTitleCase(decodedSlug.replace(/-/g, ' '))} | CS Guild Blogs`,
      description: 'Read insightful articles and updates from CS Guild.',
      openGraph: {
        title: `${toTitleCase(decodedSlug.replace(/-/g, ' '))} | CS Guild Blogs`,
        description: 'Read insightful articles and updates from CS Guild.',
        type: 'article',
        siteName: 'CS Guild',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${toTitleCase(decodedSlug.replace(/-/g, ' '))} | CS Guild Blogs`,
        description: 'Read insightful articles and updates from CS Guild.',
      },
    }
  }
}
