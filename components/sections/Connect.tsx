import { EMAIL, SOCIAL_LINKS } from '@/util/data'
import { MagneticSocialLink } from '@/components/ui/magnetic-social-link'
import { FadeIn } from '@/components/ui/fade-in'

export function ConnectSection() {
    return (
        <FadeIn>
            <h2 className="mb-5 text-lg font-medium">Connect</h2>
            <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                Feel free to contact me at{' '}
                <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                </a>
            </p>
            <div className="flex items-center justify-start space-x-3">
                {SOCIAL_LINKS.map((link) => (
                    <MagneticSocialLink key={link.label} link={link.link}>
                        {link.label}
                    </MagneticSocialLink>
                ))}
            </div>
        </FadeIn>
    )
}
