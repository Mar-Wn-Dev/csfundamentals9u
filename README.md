# csfundamentals9u
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CS Fundamentals</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>💻 CS Fundamentals</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#concepts">Concepts</a>
      <a href="#quiz">Quiz</a>
      <a href="#about">About</a>
    </nav>
  </header>

  <section id="home" class="hero">
    <h2>Learn the Essentials of Computer Science</h2>
    <p>Interactive lessons and quizzes designed for students. Understand computers, coding, AI, and algorithms in a fun way!</p>
    <a href="#concepts" class="btn">Start Learning</a>
  </section>

  <section id="concepts" class="concepts">
    <h2>Core Concepts</h2>
    <div class="cards">
      <div class="card">
        <h3>🖥️ Hardware vs Software</h3>
        <p><strong>Hardware:</strong> Physical parts of a computer like CPU, RAM, motherboard, and peripherals.</p>
        <p><strong>Software:</strong> Programs and applications that tell hardware what to do, like Windows, games, or coding editors.</p>
      </div>
      <div class="card">
        <h3>🌐 How the Internet Works</h3>
        <p>The Internet is a global network of connected computers. Data is sent in packets via routers and servers using protocols like TCP/IP.</p>
        <p>This allows websites, emails, video calls, and apps to work seamlessly across the world.</p>
      </div>
      <div class="card">
        <h3>🤖 Artificial Intelligence (AI)</h3>
        <p>AI lets computers perform tasks requiring human intelligence, such as understanding language, recognizing images, and making decisions.</p>
        <p>Examples: Chatbots, self-driving cars, and recommendation systems.</p>
      </div>
      <div class="card">
        <h3>🔢 Algorithms</h3>
        <p>An algorithm is a step-by-step procedure for solving a problem or completing a task.</p>
        <p>Examples: Sorting numbers, searching data, calculating routes in maps.</p>
      </div>
      <div class="card">
        <h3>💻 Programming Basics</h3>
        <p>Programming is writing instructions for computers to follow. Languages like Python, JavaScript, and C++ let us create software, websites, and games.</p>
        <p>Key ideas: Variables, loops, conditionals, and functions.</p>
      </div>
    </div>
  </section>

  <section id="quiz" class="quiz">
    <h2>Test Your Knowledge</h2>
    <form id="quizForm">
      <ol>
        <li>
          Hardware refers to:
          <select name="q1">
            <option value="">Select</option>
            <option value="correct">Physical components</option>
            <option value="wrong">Software programs</option>
            <option value="wrong2">Internet connections</option>
          </select>
        </li>
        <li>
          AI stands for:
          <select name="q2">
            <option value="">Select</option>
            <option value="correct">Artificial Intelligence</option>
            <option value="wrong">Automated Internet</option>
            <option value="wrong2">Advanced Input</option>
          </select>
        </li>
        <li>
          Algorithms are:
          <select name="q3">
            <option value="">Select</option>
            <option value="correct">Step-by-step solutions to problems</option>
            <option value="wrong">Computer hardware</option>
            <option value="wrong2">Internet connections</option>
          </select>
        </li>
        <li>
          Software is:
          <select name="q4">
            <option value="">Select</option>
            <option value="correct">Programs that run on hardware</option>
            <option value="wrong">Physical circuits</option>
            <option value="wrong2">Network cables</option>
          </select>
        </li>
        <li>
          The Internet allows:
          <select name="q5">
            <option value="">Select</option>
            <option value="correct">Computers worldwide to communicate</option>
            <option value="wrong">Only phones to connect</option>
            <option value="wrong2">Only schools to share data</option>
          </select>
        </li>
      </ol>
      <button type="button" onclick="checkQuiz()">Submit</button>
    </form>
    <p id="quizResult"></p>
  </section>

  <section id="about" class="about">
    <h2>About this Project</h2>
    <p>Created by <strong>[Your Name]</strong>, Class <strong>[Your Class]</strong> for a Computer Science school project. This website teaches the basics of CS in an interactive and visually engaging way.</p>
  </section>

  <footer>
    <p>&copy; 2026 CS Fundamentals 💡</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
