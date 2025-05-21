"use client";

import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import Teachers from "@/components/Teachers/Teachers";


export default function TeachersPage() {
  

  return (
    <>
      <Header />
		<MainLayout>
			<Teachers />
	  </MainLayout>
      <Footer />
    </>
  );
}
