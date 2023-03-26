import ListIdeas from './UI/ListIdeas';

import './styles/bootstrap.min.css'
import './styles/styles.css'
import Title from './UI/Title'
import Body from './UI/Body'
import { Registration } from './components/Registration';
import { Lk } from './components/Lk';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(
    {
      id:1,
      age:18,
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

  return (
    <div>
      <Title/>
      <Body/>
      {/* <Registration/> 
      <Lk user={user}/> */}
    </div>
  );
}

export default App;
