import { Link } from "react-router-dom";

export const FOOTER_CONFIG = {
  brand: {
    name: "Kaimestry's Tarot Reader",
    description: "Built by Kaimestry",
    contact: "your@email.com",
  },

  sections: [
    {
      title: "Navigation",
      links: [
        { label: "Home", path: "/" },
        { label: "Library", path: "/library" },
      ],
    },
    {
      title: "More",
      links: [
        { label: "FAQ", path: "/faq" },
        { label: "Custom Cards (Coming Soon)", path: null },
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-divider mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* BRAND */}
          <div className="max-w-sm">
            <div className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              {FOOTER_CONFIG.brand.name}
            </div>

            <p className="text-muted mt-3">{FOOTER_CONFIG.brand.description}</p>

            <p className="text-muted mt-2 text-sm">
              Contact: {FOOTER_CONFIG.brand.contact}
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm w-full md:w-auto">
            {FOOTER_CONFIG.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h3 className="font-semibold text-primary">{section.title}</h3>

                {section.links.map((link) =>
                  link.path ? (
                    <Link
                      key={link.label}
                      to={link.path}
                      className="text-main hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span key={link.label} className="text-muted">
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="text-xs text-main text-center mt-12 pt-6 border-t border-divider">
          © {new Date().getFullYear()} {FOOTER_CONFIG.brand.name}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
