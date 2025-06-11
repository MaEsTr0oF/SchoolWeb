"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CoursesContent from "../../components/CoursesContent/CoursesContent";
import BackgroundDecorations from "../../components/BackgroundDecorations/BackgroundDecorations";

export default function Courses() {
  return (
    <div style={{ position: "relative" }}>
      <BackgroundDecorations />
      <Header />
      <CoursesContent />
      <Footer form={true} />
    </div>
  );
}
