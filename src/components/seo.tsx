import Head from "next/head";
import React, { FC } from "react";

interface SeoProps {
  description?: string;
  author?: string;
  title?: string;
  meta?: any[];
  lang?: string;
}

const Seo: FC<SeoProps> = ({ description, author, title, meta }) => {
  const metaData = [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: author,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
  ].concat(meta!);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, idx) => (
        <meta key={idx} name={name} content={content} />
      ))}
    </Head>
  );
};
Seo.defaultProps = {
  description: "Cars website",
  author: "KD",
  title: "Cars",
  meta: [],
  lang: "en",
};
export default Seo;
