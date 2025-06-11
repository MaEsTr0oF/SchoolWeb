"use client";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import Teachers from "@/components/Teachers/Teachers";
import BackgroundDecorations from "../../components/BackgroundDecorations/BackgroundDecorations";

export default function TeachersPage() {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundDecorations />
      <Header />
      <MainLayout>
        <Teachers />
      </MainLayout>
      <Footer />
    </div>
  );
}
