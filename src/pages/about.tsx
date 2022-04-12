import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React from "react";

const About = () => {
  const { t } = useTranslation("about");
  return <div>{t("h2")}</div>;
};

export default About;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["about", "footer"])),
    },
  };
};
