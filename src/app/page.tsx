import Header from "../components/Header/Header";
import Dashbord from "../components/Dashbord/Dashbord";
import AboutUs from "../components/AboutUs/AboutUs";
import CardHolder from "../components/CardHolder/CardHolder";
import TeacherSlider from "../components/TeacherSlider/TeacherSlider";
import CommentSlider from "../components/CommentSlider/CommentSlider";
import FeedbackDetail from "../components/FeedbackDetail/FeedbackDetail";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import MainLayout from "../components/Layout/MainLayout";

export default function Home() {
  return (
    <div>
      <Header />
      <MainLayout>
        <Dashbord />
        <AboutUs />
        <CardHolder />
        {/* <TeachingMethods /> */}
        <TeacherSlider />
        <FeedbackDetail />
        <CommentSlider />
        <ContactForm />
      </MainLayout>
      <Footer form={false} />
    </div>
  );
}
