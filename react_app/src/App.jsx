import './styles/bootstrap.min.css';
import './styles/styles.css';

import Main from './UI/Main';
import Title from './UI/Title';
// import Body from './UI/Body';
import Lk from './components/Lk';
import ErrorPage from './components/ErrorPage';
import Registration from './components/Registration';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const user = (
    {
      id: 1,
      age: 18,
      nickname: "UralFox",
      email: "admin@zadolbal.net",
      username: "Илья",
      surname: "Куликов",
      avatar: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1678618018~exp=1678618618~hmac=ea416d598467ae43cc431081515e0bb0a25e41cb22385a045ec12ca347842f9a",
      password: "qwe123",
      registrationdate: "35.15.3984",
      is_active: true,
      is_superuser: false,
    }
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Title />,
      // errorElement: <ErrorPage />, // временно для тестирования
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "lk/",
          element: <Lk user={user} />,
        },
        {
          path: "register/",
          element: <Registration />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
