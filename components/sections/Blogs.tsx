import { AnimatedBackground } from '@/components/ui/animated-background'
import Link from 'next/link'
import Image from 'next/image'
import { MEDIUM_USERNAME } from '@/util/data'
import { FadeIn } from '@/components/ui/fade-in'

type MediumPost = {
    title: string
    pubDate: string
    link: string
    guid: string
    author: string
    thumbnail: string
    description: string
    content: string
    categories: string[]
}

async function getBlogs() {
    try {
        const res = await fetch(
            `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        )
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (data.status === 'ok') {
            return data.items.slice(0, 4)
        }
        return []
    } catch (error) {
        console.error('Error fetching medium blogs:', error)
        return []
    }
}

export async function BlogsSection() {
    const blogs: MediumPost[] = await getBlogs()

    if (blogs.length === 0) return null

    // Helper to extract a short description from the HTML content safely
    const extractDescription = (content: string) => {
        // Strip out image tags, paragraph tags, etc using a simple regex
        const text = content.replace(/<\/?[^>]+(>|$)/g, "")
        return text.trim().substring(0, 100) + '...'
    }

    return (
        <FadeIn className="space-y-4">
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium">Blog</h2>
                <a
                    href={`https://${MEDIUM_USERNAME}.medium.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                    See more &rarr;
                </a>
            </div>
            <div className="flex flex-col space-y-0">
                <AnimatedBackground
                    enableHover
                    className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
                    transition={{
                        type: 'spring',
                        bounce: 0,
                        duration: 0.2,
                    }}
                >
                    {blogs.map((post) => (
                        <Link
                            key={post.guid}
                            className="-mx-3 rounded-xl px-3 py-3 relative z-10 block"
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-id={post.guid}
                        >
                            <div className="relative z-50 flex flex-col space-y-3 p-2">
                                {post.thumbnail && (
                                    <div className="relative h-32 w-full overflow-hidden rounded-md">
                                        <Image
                                            src={post.thumbnail}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                    </div>
                                )}
                                <h3 className="font-normal dark:text-zinc-100 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                                    {extractDescription(post.description)}
                                </p>
                                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                        </Link>
                    ))}
                </AnimatedBackground>
            </div>
        </FadeIn>
    )
}
