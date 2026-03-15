const columns = [
  {
    title: "Products",
    links: ["UI Kits", "Icon Sets", "Templates", "3D Assets", "Bundles"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Changelog", "License Terms", "API Access"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press Kit"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Status", "Discord"],
  },
];

const FooterSection = () => {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-data text-muted-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-data-up pulse-dot" />
            <span className="text-data text-muted-foreground">System Status: Operational</span>
          </div>
          <p className="text-data text-muted-foreground">
            © {new Date().getFullYear()} Intelligence Marketplace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
