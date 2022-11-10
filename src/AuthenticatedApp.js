import { LawyerDetailPage } from "./pages/lawyer-detail/lawyer-detail";
import { LawyersPage } from "./pages/lawyers";
import MainPage from "./pages/main";
import { CreateReview } from "./pages/create-review/create-review-page";
import CreateQuestionPage from "./pages/create-question/create-question-page";
import { Routes, Route } from "react-router-dom";
import IndexQuestionsPage from "./pages/index questions/index-questions";
import ShowQuestion from "./pages/show question/show-question";
import SignupPage from "./pages/signup/login pages/signup";
import LoginPage from "./pages/signup/login pages/login";
import EditProfilePage from "./pages/edit-lawyer-profile";
import ShowProfile from "./pages/show-profile";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import CreateLawyerPage from "./pages/create-lawyer";
import CreateContact from "./pages/create-contact";
import IndexContacts from "./pages/index-contacts";

function AuthenticatedApp() {

  return(
  <>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="lawyers" element={<LawyersPage />} />
      <Route path="lawyers/:id" element={<LawyerDetailPage />} />
      <Route path="reviews/new/:id" element={<CreateReview />} />
      <Route path="questions" element={<IndexQuestionsPage />} />
      <Route path="questions/new" element={<CreateQuestionPage />} />
      <Route path="questions/:id" element={<ShowQuestion />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="show-profile" element={<ShowProfile />} />
      <Route path="lawyer-profile/create" element={<CreateLawyerPage />} />
      <Route path="lawyer-profile/edit" element={<EditProfilePage />} />
      <Route path="contact/new" element={<CreateContact />} />
      <Route path="contacts" element={<IndexContacts />} />
    </Routes>
    <Footer />
  </>
  )
}

export default AuthenticatedApp;