import { TypeAnimation } from 'react-type-animation';

export default function TypingEffect() {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer', 2000,
        'MERN Stack Enthusiast', 2000,
        'Open to Work 💼', 2000,
        '', 1000, // simulate backspace
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}
