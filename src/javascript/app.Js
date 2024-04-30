// Importando módulos equivalentes
const { BrowserRouter, Routes, Route } = require("react-router-dom");
const Header = require("./components/common/Header/Header").default;
const AddBreakFast = require("./pages/AddBreakFast/AddBreakFast").default;
const ListBreak = require("./pages/ListBreak/ListBreak").default;
const EditBreak = require("./pages/EditBreak/EditBreak").default;

// Definindo a função App
function App() {
  return (
    // Utilizando BrowserRouter, Routes e Route
    React.createElement(BrowserRouter, null,
      React.createElement(Header, null),
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(ListBreak, null) }),
        React.createElement(Route, { path: "/add", element: React.createElement(AddBreakFast, null) }),
        React.createElement(Route, { path: "/edit/:id", element: React.createElement(EditBreak, null) })
      )
    )
  );
}

// Exportando a função App
module.exports = App;
