import React from "react";
import "./style.css";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Logo from "../components/Logo";
import BtnWhatsapp from "../components/BtnWhatsapp";
import Hero from "../components/Hero";
import Seal from "../components/Seal";
import Project from "../components/Project";
import Footer from "../components/Footer";

import { graphql, useStaticQuery } from "gatsby";

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      <Header>
        <Logo />
        <BtnWhatsapp />
      </Header>
      <Hero />
      <Seal />
      <Project />
      <Footer>
        <BtnWhatsapp />
      </Footer>
    </div>
  );
};

export default Index;
