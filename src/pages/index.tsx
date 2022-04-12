import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div>
      <h2
        className="font-medium text-2xl text-blue-400 font-Poppins"
        // onClick={() =>
        //   router.locale === "en" ? router.push("/fr") : router.push("/en")
        // }
      >
        <Link href="/" locale={router.locale === "en" ? "fr" : "en"}>
          Change Language
        </Link>{" "}
        {t("h2")}
      </h2>

      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "footer"])),
    },
  };
};
