import React from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { Card, CardGrid, Container, Header } from './Elements';
import './App.css';
import Menu from './Menu';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';
import Modal from './Modal';
import Accordion from './Accordion';
import { Nav } from './Nav';
import { Squares } from './Squares';
import { Slideshow } from './Slideshow';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  const [value, setValue] = React.useState(0);
  const [isNavOpen, setNavOpen] = React.useState(false);
  const [isCardActive, setCardActive] = React.useState(true);
  const [isToggled, setToggle] = React.useState(false);
  const location = useLocation();

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </Container>
      {/* <Container>
        <Slideshow />
        <Squares />
        <h2>Super Cool</h2>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setToggle((prevValue) => !prevValue)}>
          Toggle
        </button>
        <Modal isToggled={isToggled} setToggle={setToggle}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  onDragEnd={(event, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setCardActive(false);
                    }
                  }}
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  style={{
                    x,
                    opacity,
                    background: 'var(--blue)',
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container> */}
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
