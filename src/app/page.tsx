import Header from "../components/Header/Header";
import Dashbord from "../components/Dashbord/Dashbord";
import AboutUs from "../components/AboutUs/AboutUs";
import CardHolder from "../components/CardHolder/CardHolder";
import TeacherSlider from "../components/TeacherSlider/TeacherSlider";
import CommentSlider from "../components/CommentSlider/CommentSlider";
import Benefits from "../components/Benefits/Benefits";
import FeedbackDetail from "../components/FeedbackDetail/FeedbackDetail";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Dashbord />
      <AboutUs />
      <CardHolder />
      <TeacherSlider />
      <FeedbackDetail />
      <CommentSlider />
      <ContactForm />
      <Footer />
    </div>
  );
}
