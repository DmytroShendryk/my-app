import React from "react";
import { useState } from 'react';

export function Header() {
  return (
    <header className="header">
      <h2>React App</h2>
    </header>
  );
}

export function LeftSidebar({ onItemClick }) {
  return (
    <nav className="left-sidebar">
      <ul>
        <li onClick={() => onItemClick(0)}>1</li>
        <li onClick={() => onItemClick(1)}>2</li>
        <li onClick={() => onItemClick(2)}>3</li>
      </ul>
    </nav>
  );
}

export function MainContent({ activeParagraph }) {
  let content;
  
  if (activeParagraph === 0) {
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ultricies nibh. Curabitur posuere orci dui. Cras ut turpis in quam dapibus imperdiet. Morbi egestas et risus fermentum posuere. Donec dictum odio vitae enim eleifend consequat. Quisque iaculis lorem in purus porttitor, vel commodo metus semper. Donec eu condimentum leo.';
  } else if (activeParagraph === 1) {
  content = 'Proin fermentum nisi at velit sagittis, id mollis lorem condimentum. Nam vehicula arcu in nulla malesuada ullamcorper. Suspendisse ac volutpat erat, in posuere nunc. Suspendisse dictum sollicitudin purus in congue. In lorem erat, suscipit ac risus ut, euismod varius arcu. Sed id euismod tortor. Vestibulum dolor eros, faucibus non lorem in, euismod tempus urna.';
  } else if (activeParagraph === 2) {
  content = 'Pellentesque nec vulputate tortor, ut aliquam augue. Donec luctus ante quis nisi pulvinar, at convallis lorem volutpat. Etiam tincidunt sapien quis erat auctor congue. Proin vehicula ullamcorper pulvinar. Fusce finibus, eros at fringilla bibendum, magna sapien mollis mi, feugiat tincidunt lectus tellus vel lectus. Fusce in est non lectus consectetur congue. Morbi ut pellentesque lorem, malesuada blandit felis.';
  }
  return (
    <main className="main-content">
    <p>{content}</p>
    </main>
    );
}

function App() {
  const [activeParagraph, setActiveParagraph] = useState(0);

  function handleItemClick(index) {
    setActiveParagraph(index);
  }

  return (
    <div className="app">
      <Header />
      <LeftSidebar onItemClick={handleItemClick} />
      <MainContent activeParagraph={activeParagraph} />
    </div>
  );
}

export default App;
