import { useState, createContext, useContext } from "react";

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);

export default function DarkMode() {
  const [theme, setTheme] = useState("dark");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <h1>This is the DarkMode component</h1>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <WelcomePanel />
      </CurrentUserContext.Provider>
      <Form />
      {/* <Button
            onClick={() => {
                console.log(theme)
                setTheme('light');
            }}
        >
            Switch to light theme
        </Button> */}
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
        use dark mode
      </label>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
}

function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You logged in as {currentUser.name}</p>;
}

function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  return (
    <>
      <label>
        First name: {": "}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last name: {": "}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + " " + lastName,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields</i>}
    </>
  );
}

function Form() {
  return (
    <Panel title="welcome">
      <Button>Sign Up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = "panel panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ onClick, children }) {
  const theme = useContext(ThemeContext);
  const className = "button button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
