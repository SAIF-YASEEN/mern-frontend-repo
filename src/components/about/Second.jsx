import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Second.css';

const SecondAboutComponent = () => {
  return (
    <section className="giraffe-history" data-aos="fade-right">
      <h2>History of the MERN Stack</h2>
      <p>
        The MERN stack came into prominence as developers increasingly sought
        cohesive tools to streamline both front-end and back-end development
        processes. By utilizing JavaScript for the entire stack, teams could
        collaborate effectively and deploy high-performing applications.
      </p>
      <p>
        <strong>Key Milestones:</strong>
      </p>
      <ul>
        <li>
          <SiMongodb size={24} style={{ color: '#47A248', marginRight: '10px' }} />
          <strong>MongoDB:</strong> Introduced in 2009, MongoDB revolutionized
          database systems by providing a schema-less NoSQL option.
        </li>
        <li>
          <SiExpress size={24} style={{ color: '#000000', marginRight: '10px' }} />
          <strong>Express.js:</strong> Built atop Node.js in 2010, Express.js
          simplified web server creation by abstracting complex processes.
        </li>
        <li>
          <FaReact size={24} style={{ color: '#61DAFB', marginRight: '10px' }} />
          <strong>React.js:</strong> Facebook released React in 2013, enabling
          developers to build dynamic UIs with a component-based architecture.
        </li>
        <li>
          <FaNodeJs size={24} style={{ color: '#68A063', marginRight: '10px' }} />
          <strong>Node.js:</strong> Launched in 2009, Node.js allowed JavaScript
          to thrive on the server side, complementing modern web development.
        </li>
      </ul>
    </section>
  );
};

export default SecondAboutComponent;
