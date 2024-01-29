"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Hakkımda");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Hakkımda</SectionHeading>
      <p className="mb-3">
        
        <span className="font-medium">Merhaba, ben Mert Alp. Bilgisayar Mühendisliği 4. sınıf öğrencisi olarak Temmuz ayında mezun olacağım. Kariyerime mobil geliştirici olarak devam etmekteyim. Flutter teknolojisiyle 3 yıldır, Swift ile 1.5 yıldır çalışmalar yürütüyor ve sürekli olarak kendimi geliştiriyorum. Bu süreçte projeler geliştirip deneyimlerimi GitHub hesabımda paylaşıyorum. Daha önce Jurnalle&apos;de Mobile Developer olarak görev aldım, şimdi ise kurucularından biri olduğum Yuni projesinde SwiftUI ile iOS geliştirme yapmaktayım. Ayrıca Figma kullanımı, GitHub, Agile Metodoloji gibi konularda da bilgi ve deneyim sahibiyim.</span> 

        <span className="font-medium">
        
        </span>
       
       {" "}
        <span className="font-medium"></span> 
       
      </p>

      <p>
        <span className="italic"> Mobil geliştirme alanının yanı sıra yapay zeka konusuna da ilgi duyuyorum ve ilerleyen süreçte çalışmalar yapmayı planlıyorum. Gelecekte daha fazla bilgi ve deneyim kazanarak alanımda uzmanlaşmak ve yetkin bir mühendis olmak istiyorum. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanarak, sektördeki yenilikleri takip etmek ve projelerde daha etkin bir rol üstlenmek amacındayım.</span>
        {" "}
        <span className="font-medium"></span>
         {" "}
        <span className="font-medium"></span>
     
      </p>
    </motion.section>
  );
}
