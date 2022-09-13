import { LawyerDetailPage } from "./pages/lawyer-detail/lawyer-detail";
import { LawyersPage } from "./pages/lawyers";
import MainPage from "./pages/main";
import { CreateReview } from "./pages/create-review/create-review-page";
import CreateQuestionPage from "./pages/create-question/create-question-page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="lawyers" element={<LawyersPage />} />
        <Route path="lawyers/:id" element={<LawyerDetailPage />} />
        <Route path="reviews/new/:id" element={<CreateReview />} />
        <Route path="questions/new/" element={<CreateQuestionPage />} />
      </Routes>
    </>
  );
}

export default App;
