import './App.css'
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const projectID='6ec3d9c9-d039-43ee-b229-65de43c96bad';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
          height="100vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />

    </div>
  );
}

export default App;
