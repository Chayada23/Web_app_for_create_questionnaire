import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateQuestionnaire from "./pages/CreateQuestionnaire";
import StartingCreateQuestionnaire from "./pages/StartingCreateQuestionnaire";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<CreateQuestionnaire />}
        />

        <Route
          path="/starting-questionnaire"
          element={<StartingCreateQuestionnaire />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;