import Link from "next-intl/link";
import { usePathname, useRouter } from "next-intl/client";
import { useLocale } from "next-intl";
import type { FC } from "react";

const locales = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
];

const Header: FC = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="w-full flex justify-end p-4 bg-white shadow">
      <nav className="space-x-2">
        {locales.map((l) => (
          <Link
            key={l.code}
            href={pathname}
            locale={l.code}
            className={`px-3 py-1 rounded transition-colors ${
              locale === l.code
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            aria-current={locale === l.code ? "page" : undefined}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
