"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import TeachingMethods from "@/components/TeachingMethods/TeachingMethods";


export default function Teaching() {
  return (
    <>
      <Header />
		<MainLayout>
			<TeachingMethods />
		</MainLayout>
      <Footer form={true} />
    </>
  );
}
