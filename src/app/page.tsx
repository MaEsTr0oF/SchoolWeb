import Header from "../components/Header/Header";
import Dashbord from "../components/Dashbord/Dashbord";
import AboutUs from "../components/AboutUs/AboutUs";
import CardHolder from "../components/CardHolder/CardHolder";
import TeacherSlider from "../components/TeacherSlider/TeacherSlider";
import CommentSlider from "../components/CommentSlider/CommentSlider";
import Benefits from "../components/Benefits/Benefits";
export default function Home() {
  return (
    <div>
      <Header />
		<Dashbord />
		<AboutUs />
		<CardHolder />
		<TeacherSlider />
		<CommentSlider />	
		<Benefits />
    </div>
  );
}
