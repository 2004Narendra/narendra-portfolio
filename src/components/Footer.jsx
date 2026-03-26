import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHackerrank, FaTerminal, FaBug, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/2004Narendra", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/narendra0805", label: "LinkedIn" },
        { icon: FaEnvelope, href: "mailto:bethapudinarendra@gmail.com", label: "Email" },
    ];

    return (
        <footer className="bg-secondary/20 border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-8 mb-8 flex-wrap">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-all transform hover:-translate-y-2 duration-300 p-3 rounded-full hover:bg-accent-cyan/20 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                            aria-label={social.label}
                        >
                            <social.icon size={28} />
                        </a>
                    ))}
                </div>

                <p className="text-xl font-heading font-semibold mb-2">Narendra Bethapudi</p>
                <p className="text-text-muted mb-6">Built with precision and passion.</p>

                <div className="text-sm text-text-muted/60">
                    &copy; {currentYear} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
