"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import TeachingMethods from "@/components/TeachingMethods/TeachingMethods";
import BackgroundDecorations from "../../components/BackgroundDecorations/BackgroundDecorations";

export default function Teaching() {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundDecorations />
      <Header />
      <MainLayout>
        <TeachingMethods />
      </MainLayout>
      <Footer form={true} />
    </div>
  );
}
