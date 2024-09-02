import { SiDoi, SiVite, SiTailwindcss, SiMongodb, SiExpress, SiMysql } from 'react-icons/si';
import { BiLogoGithub } from 'react-icons/bi';
import { FaChrome, FaPython, FaReact, FaNode, FaJava, FaLaravel } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { IoLogoVue } from "react-icons/io5";

import journalFront from "/journalFrontPage.jpg";
import veterinariaFront from "/veterinariaFront.jpg";
import observatoryFront from "/observatoryFront.jpg";
import monitoreoFront from "/monitoreo.jpg";
import gestionFront from "/gestion_front.jpg";

export const ServiceData = (t) => [
  {
    title: t("publishedArticle"),
    content: t("publishedArticleContent"),
    backgroundImage: journalFront,
    tecnologiesUsedIcons: [FaPython],
    links: [
      {
        icon: SiDoi,
        link: "https://doi.org/10.48168/innosoft.s15.a156",
      }
    ]
  },
  {
    title: t("mentalHealthObservatory"),
    content: t("mentalHealthObservatoryContent"),
    backgroundImage: observatoryFront,
    tecnologiesUsedIcons: [ FaReact, SiVite, SiTailwindcss, SiMongodb, FaNode, SiExpress ],
    links: [
      {
        icon: BiLogoGithub,
        link: "https://github.com/GWRT/observatorio-mental-react.git",
      },
      {
        icon: FaChrome,
        link: "https://observatorio-mental.netlify.app/",
      }
    ]
  },
  {
    title: t("studentManagmentTitle"),
    content: t("studentManagmentContent"),
    backgroundImage: gestionFront,
    tecnologiesUsedIcons: [ IoLogoVue, SiVite, SiTailwindcss, SiMysql, FaLaravel ],
    links: [
      {
        icon: BiLogoGithub,
        link: "https://github.com/GWRT/academicoFront.git",
      },
      {
        icon: FaChrome,
        link: "https://academico-front.vercel.app/",
      }
    ]
  },
  {
    title: t("veterinaryPatientMonitoring"),
    content: t("veterinaryPatientMonitoringContent"),
    backgroundImage: veterinariaFront,
    tecnologiesUsedIcons: [ FaReact, SiVite, SiTailwindcss ],
    links: [
      {
        icon: BiLogoGithub,
        link: "https://github.com/GWRT/citas_react_vite",
      },
      {
        icon: FaChrome,
        link: "https://bright-tiramisu-f225de.netlify.app/",
      }
    ]
  },
  {
    title: t("publicHealthSurveillanceMonitoringSystem"),
    content: t("publicHealthSurveillanceMonitoringSystemContent"),
    backgroundImage: monitoreoFront,
    tecnologiesUsedIcons: [ FaJava, SiMysql ],
    links: [
      {
        icon: BiLogoGithub,
        link: "https://github.com/MarcoQM/SistemaMonitoreoVigilanciaSaludPublica.git",
      },
      {
        icon: GrArticle,
        link: "https://drive.google.com/file/d/1rrPCYygMM-ouXxQRMFHYVEwictGCxPeD/view?usp=sharing",
      }
    ]
  },
];
