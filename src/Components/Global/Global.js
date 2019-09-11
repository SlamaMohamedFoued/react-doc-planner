import React from "react";
import "./NavMenu.css";
import { tsPropertySignature } from "@babel/types";

const Sites = [
  {
    siteName: "ZnanyLekarz",
    siteLink:
      "https://www.znanylekarz.pl/?_ga=2.120421834.319287975.1567977873-1705279586.1567977873"
  },
  {
    siteName: "Doctoralia",
    siteLink: "https://www.doctoralia.es/"
  },
  {
    siteName: "MioDolttore",
    siteLink:
      "https://www.miodottore.it/?_ga=2.120421834.319287975.1567977873-1705279586.1567977873"
  },
  {
    siteName: "DokTorTakvimi",
    siteLink:
      "https://www.doktortakvimi.com/?_ga=2.120421834.319287975.1567977873-1705279586.1567977873"
  },
  {
    siteName: "ZnamyLekar",
    siteLink: "https://www.znamylekar.cz/"
  }
];

const Site = props => {
  return (
    <div>
      <a href={props.site.siteLink}></a>
    </div>
  );
};

const Global = () => {
  return (
    <div>
      Sites.map((Site, i) => <Service service={service} />
      );
    </div>
  );
};

export default Global;
