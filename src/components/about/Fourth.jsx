import './Fourth.css';

const FourthAboutComponent = () => {
  return (
    <section className="furniture-install" data-aos="fade-up">
      <h2>Setting Up the MERN Stack</h2>
      <p>Follow these steps to create a seamless MERN stack environment:</p>
      <ol>
        <li>
          <strong>Install Node.js:</strong>{" "}
          <a
            href="https://nodejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Node.js
          </a>{" "}
          from the official website and install it. Verify the installation
          with:
          <pre>
            <code>node --version</code>
          </pre>
        </li>
        <li>
          <strong>Install MongoDB:</strong>{" "}
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download MongoDB
          </a>{" "}
          or use a cloud service like MongoDB Atlas. For local installation,
          run:
          <pre>
            <code>sudo apt install mongodb</code>
          </pre>
        </li>
        <li>
          <strong>Set Up Express:</strong> Add Express.js to your project with
          npm:
          <pre>
            <code>npm install express</code>
          </pre>
        </li>
        <li>
          <strong>Create a React App:</strong> Use the React CLI to initialize a
          frontend project:
          <pre>
            <code>npx create-react-app my-app</code>
          </pre>
        </li>
        <li>
          <strong>Run the App:</strong> Start your backend server with:
          <pre>
            <code>node app.js</code>
          </pre>
          Start the React development server:
          <pre>
            <code>npm start</code>
          </pre>
        </li>
      </ol>
    </section>
  );
};

export default FourthAboutComponent;
