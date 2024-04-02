import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fashionImg from "@/public/fashion.png";
import earthquakeImg from "@/public/deprem.png";
import registerImg from "@/public/login.png";
import emlakImg from "@/public/emlak.png";
import yuniImg from "@/public/yuni.png";
export const links = [
  {
    name: "Ana Sayfa",
    hash: "#home",
  },
  {
    name: "Hakkımda",
    hash: "#about",
  },
  {
    name: "Projeler",
    hash: "#projects",
  },
  {
    name: "Beceriler",
    hash: "#skills",
  },
  {
    name: "Deneyim",
    hash: "#experience",
  },
  {
    name: "Eğitim",
    hash: "#education",
  },
  {
    name: "İletişim",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "İOS Developer",
    location: "Yuni",
    description:
    "Yuni'de kurucu ortak olarak görev yapıyorum. Figma üzerinde tasarımlar oluşturarak kullanıcı deneyimini planladım ve bu tasarımları Firebase ve Swift UI kullanarak kodladım. Ayrıca, takım çalışması ve GitHub kullanımı konularında da önemli deneyimler kazandım.  ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Eylül - 2023 Mart | 6 ay",
  },
  {
    title: "Mobile Developer",
    location: "Jurnalle",
    description:
   "Jurnalle şirketinde 7 ay boyunca Flutter Developer olarak görev aldım. Bu süre zarfında, GitHub kullanımında yetkinlik kazandım ve Agile metodoloji ile projeleri hızlı ve esnek bir şekilde geliştirmeyi öğrendim. Takım çalışması ön plandaydı ve farklı uzmanlık alanlarından gelen meslektaşlarımla etkili iletişim kurma becerilerimi geliştirdim. Ayrıca, Firebase Analytics kullanarak uygulamalarımızın performansını ve kullanıcı etkileşimlerini analiz etme konusunda pratik deneyim edindim.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 Temmuz - 2024 Ocak | 7 ay",
  },
] as const;

export const educationData = [
  {
    title: "Balıkesir Üniversitesi",
    location: "Lisans | Bilgisayar Mühendisliği",
    description:
      "Balıkesir Üniversitesi Bilgisayar Mühendisliğinden 2024 Temmuz ayında mezun olacağım. Öğrenim hayatım boyunca mobil geliştirme, yapay zeka , web geliştirme ve veri tabanı  gibi konularda önemli bilgiler edindim. ",
    icon: React.createElement(LuGraduationCap),
    date:  "2020 - 2024 Temmuz",
  },
  {
    title: "Efeler Anadolu Lisesi",
    location: "Efeler/Aydın",
    description:
      "Efeler Anadolu lisesinden 73.2 ortalama ile 2019 yılında mezun oldum.",
      icon: React.createElement(LuGraduationCap),
    date:  "2015 - 2019",
  },
  

    
 
] as const;

export const projectsData = [
  {
    title: "Deprem | Güvenli Bölge",
    description:
    "Deprem verileri, toplanma alanları ve acil durum konumu için geliştirdiğim mobil uygulamam.",
    tags: ["Flutter", "Dart", "Api", "Bloc", "Sqfilte"],
    imageUrl: earthquakeImg,

  },
  {
    title: "Yuni App",
    description:
      "Sadece öğrenciler için geliştirilen anonim paylaşım özelliği sunan bir sosyal medya uygulaması.",
    tags: ["SwiftUI", "Firebase", "Figma","Firebase Authentication","MVVM",],
    imageUrl: yuniImg,

  },
  {
    title: "Emlak App",
    description:
      "Emlakçılar için geliştirdiğim bu uygulama müşteri takibi ve ev takibi yapmaya olanak tanıyarak emlakçılara kolaylık sağlıyor.",
    tags: ["Flutter", "Dart", "Sqflite", "Firebase"],
    imageUrl: emlakImg,

  },
  {
    title: "Fashion Shop",
    description:
      "Kullanıcı deneyimini önemseyerek geliştirdiğim mağaza arayüzü projesi.",
    tags: ["Flutter", "Dart"],
    imageUrl: fashionImg,

  }, {
    title: "Flutter Register",
    description:
      "Firebase authentication kullanarak geliştirdiğim bu proje ile kayıt ve giriş işlemleri yapılabiliyor.",
    tags: ["Flutter", "Dart", "Firebase Authentication"],
    imageUrl: registerImg,
  },
  
] as const;

export const skillsData = [
  "Swift",
  "SwiftUI",
  "RxSwift",
  "Flutter",
  "Dart",
  "Bloc",
  "State Management ",
  "Firebase",
  "React",
  "SQL",
  "Sqflite",
  "Figma",
  "Next.js",
  "Firebase Analytics",
  "Git",
  "GitHub",
  "Tailwind",
  "Html",
  "CSS",
  "Python",
  "C#",
  "Java",
  


] as const;
