import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

export const ThirdHomeComponent = () => {
  return (
    <>
      <section className="long-content" data-aos="zoom-in">
        <p>
          The MERN stack allows developers to build full-stack web applications
          using JavaScript on both the client and server sides, enabling greater
          workflow efficiency and uniformity across the project. Here’s a more
          in-depth overview of the stack:
          <br />
          <SiMongodb size={40} style={{ color: "#47A248" }} />
          <br />
          <strong>MongoDB</strong> is perfect for building flexible and scalable
          databases for applications that handle huge volumes of dynamic,
          unstructured data. With its simple and JSON-like format, it's
          intuitive and ideal for handling modern web apps.
          <br /> <SiExpress size={40} style={{ color: "#000000" }} /> <br />
          <strong>Express.js</strong> handles all server-side needs, from
          routing requests to managing middleware. The lightweight framework is
          often favored for its simplicity and speed in developing API-based
          applications.
          <br /> <FaReact size={40} style={{ color: "#61DAFB" }} /> <br />
          <strong>React.js</strong> is revered for its ability to create
          lightning-fast, responsive UIs. With JSX and state management tools
          (like Redux), React ensures data consistency while providing dynamic
          rendering and high performance.
          <br /> <FaNodeJs size={40} style={{ color: "#68A063" }} /> <br />
          <strong>Node.js</strong> provides the core for backend operations. Its
          non-blocking and event-driven architecture ensures that applications
          can handle many tasks simultaneously. Combined with Express and
          MongoDB, Node.js provides the foundation for building real-time,
          data-driven applications quickly.
        </p>
      </section>
    </>
  );
};
