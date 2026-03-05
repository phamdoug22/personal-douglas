const socialLinks = [
    {
        name: "github",
        url: "https://github.com/phamdoug22",
    },
    {
        name: "x",
        url: "https://x.com/DouglasDPham",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/douglaspham/",
    },
];

export const SocialLinks = () => {
    return (
        <div className="flex gap-2">
            {socialLinks.map((link, index) => (
                <span key={link.name}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline transition-opacity hover:opacity-60"
                    >
                        {link.name}
                    </a>
                    {index < socialLinks.length - 1 && <span className="text-white"> / </span>}
                </span>
            ))}
        </div>
    );
};
