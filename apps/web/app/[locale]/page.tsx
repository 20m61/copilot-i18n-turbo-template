import { useTranslations } from "next-intl";
import Header from "../../components/Header";
import type { FC } from "react";

const HomePage: FC = () => {
  const t = useTranslations("home");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Header />
      <h1 className="text-4xl font-bold mb-2">{t("title")}</h1>
      <p className="text-lg text-gray-600">{t("subtitle")}</p>
    </main>
  );
};

export default HomePage;
