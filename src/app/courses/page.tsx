"use client";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CoursesContent from "@/components/CoursesContent/CoursesContent";
import MainLayout from "@/components/Layout/MainLayout";




export default function Courses() {
  return (
    <>
	 <Header />
	 	<MainLayout>
			<CoursesContent />
	 	</MainLayout>
		 <Footer form={true} />
    </>
  );
}
