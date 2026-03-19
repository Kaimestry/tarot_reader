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
      <div className="flex justify-center px-6 md:px-10 py-12">
        <div className="w-full max-w-6xl flex flex-col gap-10">
          {/* BRAND */}
          <div>
            <div className="text-xl font-bold text-primary uppercase tracking-widest">
              {FOOTER_CONFIG.brand.name}
            </div>

            <p className="text-muted mt-2 max-w-md">
              {FOOTER_CONFIG.brand.description}
            </p>

            <p className="text-muted mt-2">
              Contact: {FOOTER_CONFIG.brand.contact}
            </p>
          </div>

          {/* SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            {FOOTER_CONFIG.sections.map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h3 className="font-semibold text-primary">{section.title}</h3>

                {section.links.map((link) =>
                  link.path ? (
                    <Link
                      key={link.label}
                      to={link.path}
                      className="hover:text-primary transition"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span key={link.label} className="text-main">
                      {link.label}
                    </span>
                  ),
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="text-xs text-main text-center pt-6 border-t border-divider">
            © {new Date().getFullYear()} {FOOTER_CONFIG.brand.name}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
