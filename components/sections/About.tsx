import { ABOUT_TEXT } from '@/util/data'
import { FadeIn } from '@/components/ui/fade-in'

export function AboutSection() {
    return (
        <FadeIn>
            <div className="flex-1">
                <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">{ABOUT_TEXT}</p>
            </div>
        </FadeIn>
    )
}
