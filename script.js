const categories = {
  technology: {
    name: "Technology & Programming",
    symbol: "⌘",
    description: "You seem to enjoy figuring out how things work, solving puzzles, and using technology to bring ideas to life.",
    strengths: ["You like breaking a big problem into smaller steps.", "You are curious about how apps, games, or devices work.", "You enjoy learning by experimenting and trying things out.", "You may have a knack for finding clear, logical solutions."],
    areas: ["Web development", "App building", "Game design", "Data & AI", "Cybersecurity"],
    studies: ["Computer science", "Software engineering", "Information technology", "Game development", "Computer networking"],
    careers: ["Web developer", "Software developer", "Game developer", "Data analyst", "IT support specialist"],
    tip: "Try a beginner coding activity or make a simple webpage about something you love.",
    alternative: "You may enjoy solving digital puzzles, exploring how tools work, and building useful things with technology."
  },
  creative: {
    name: "Design & Creativity",
    symbol: "✳",
    description: "Your answers suggest you may enjoy imagining possibilities, expressing ideas visually, and making things feel fresh and original.",
    strengths: ["You notice details, colors, and how things fit together.", "You enjoy expressing ideas in your own way.", "You are happy to try different approaches to a creative challenge.", "You may have a strong eye for what makes something engaging."],
    areas: ["Graphic design", "Illustration", "Animation", "UI/UX design", "Photography & video"],
    studies: ["Visual communication design", "Graphic design", "Animation", "Multimedia", "Interior design"],
    careers: ["Graphic designer", "Illustrator", "Animator", "UI/UX designer", "Content creator"],
    tip: "Create a poster, sketch, or digital mood board about a topic you care about.",
    alternative: "You may enjoy visual storytelling, experimenting with fresh ideas, and making things your own."
  },
  business: {
    name: "Business & Management",
    symbol: "↗",
    description: "You seem energized by making plans, bringing people together, and finding practical ways to turn an idea into action.",
    strengths: ["You enjoy organizing people, tasks, or ideas.", "You think about how to make a plan work in real life.", "You may feel comfortable taking initiative.", "You like seeing a project move from idea to finish."],
    areas: ["Entrepreneurship", "Marketing", "Project planning", "Finance", "Event management"],
    studies: ["Business management", "Marketing", "Accounting", "Entrepreneurship", "Office administration"],
    careers: ["Small business owner", "Marketing assistant", "Project coordinator", "Event planner", "Business analyst"],
    tip: "Plan a small class activity or fundraiser and notice which parts you enjoy most.",
    alternative: "You may enjoy organizing a project, taking initiative, and helping a plan become real."
  },
  communication: {
    name: "Communication & Language",
    symbol: "✉",
    description: "Your answers point to an interest in sharing ideas, listening to people, and finding the right words to connect.",
    strengths: ["You enjoy explaining ideas and making them easy to understand.", "You are curious about stories, words, or different points of view.", "You may feel at home speaking, writing, or presenting.", "You notice how good communication brings people together."],
    areas: ["Writing & storytelling", "Public speaking", "Journalism", "Languages", "Digital media"],
    studies: ["Communication studies", "Journalism", "English or languages", "Public relations", "Digital media"],
    careers: ["Writer", "Journalist", "Translator", "Public relations assistant", "Media presenter"],
    tip: "Write a short story, start a class newsletter, or practice presenting a topic you love.",
    alternative: "You may enjoy sharing ideas, listening to others, and finding the right words to connect."
  },
  engineering: {
    name: "Engineering & Practical Skills",
    symbol: "⚙",
    description: "You seem to like working hands-on, understanding how things fit together, and making useful ideas real.",
    strengths: ["You enjoy learning by building, fixing, or testing things.", "You like practical challenges with a clear result.", "You may be patient when figuring out how something works.", "You notice how tools, parts, and systems fit together."],
    areas: ["Robotics", "Product design", "Electronics", "Construction", "Automotive technology"],
    studies: ["Engineering", "Mechatronics", "Electrical technology", "Automotive technology", "Construction"],
    careers: ["Engineering technician", "Robotics technician", "Product designer", "Electrician", "Automotive technician"],
    tip: "Try a simple build-it-yourself project or visit a workshop to see what interests you.",
    alternative: "You may enjoy hands-on challenges, making or fixing things, and seeing a practical idea take shape."
  },
  social: {
    name: "Social & Education",
    symbol: "♡",
    description: "Your answers suggest you care about people, enjoy helping others learn, and value making a positive difference.",
    strengths: ["You pay attention to how other people are feeling.", "You enjoy sharing what you know or helping someone improve.", "You value teamwork and making everyone feel included.", "You may be a thoughtful listener and a supportive teammate."],
    areas: ["Teaching & learning", "Counseling support", "Community projects", "Youth work", "Health & wellbeing"],
    studies: ["Education", "Early childhood education", "Social work", "Community development", "Psychology (introductory study)"],
    careers: ["Teacher", "Teaching assistant", "Youth worker", "Community program assistant", "Learning support assistant"],
    tip: "Help a friend learn something new or volunteer for a community activity you care about.",
    alternative: "You may enjoy supporting others, helping people learn, and making a positive difference."
  }
};

const questions = [
  {
    topic: "YOUR FREE TIME",
    question: "Which activity would you be most excited to try on a free afternoon?",
    options: [
      { text: "Making a drawing, poster, or short video", category: "creative", insight: "You enjoy expressing ideas in creative ways." },
      { text: "Trying a coding game or exploring a new app", category: "technology", insight: "You are curious about technology and how it works." },
      { text: "Planning a fun activity for friends", category: "business", insight: "You like organizing ideas and bringing people together." },
      { text: "Writing a story or recording a mini podcast", category: "communication", insight: "You enjoy sharing stories and communicating ideas." },
      { text: "Making, fixing, or building something", category: "engineering", insight: "You like learning through practical, hands-on activities." },
      { text: "Helping someone learn a new skill", category: "social", insight: "You enjoy supporting others and sharing what you know." }
    ]
  },
  {
    topic: "HOW YOU SOLVE THINGS",
    question: "When you get stuck on a tricky problem, what do you usually do first?",
    options: [
      { text: "Look for a pattern and break it into smaller steps", category: "technology", insight: "You tend to approach challenges in a logical, step-by-step way." },
      { text: "Sketch out a few different ideas", category: "creative", insight: "You like exploring imaginative ways through a challenge." },
      { text: "Make a quick plan and decide what to do next", category: "business", insight: "You are comfortable turning a challenge into an action plan." },
      { text: "Talk it through and ask what others think", category: "communication", insight: "You use conversation to understand a challenge." },
      { text: "Try something hands-on and see what happens", category: "engineering", insight: "You learn by testing ideas in a practical way." },
      { text: "Check how everyone involved is doing", category: "social", insight: "You remember the people affected when solving a problem." }
    ]
  },
  {
    topic: "TEAM PROJECTS",
    question: "When working on a group project, which role sounds most fun?",
    options: [
      { text: "Creating the visual look and presentation", category: "creative", insight: "You like making ideas engaging and visually clear." },
      { text: "Building the technical part or figuring out the tools", category: "technology", insight: "You enjoy exploring the tools that make a project work." },
      { text: "Organizing the team, tasks, and timeline", category: "business", insight: "You like helping a team stay organized and on track." },
      { text: "Presenting the project or writing its story", category: "communication", insight: "You enjoy helping others understand a team's ideas." },
      { text: "Making a model or working on the practical parts", category: "engineering", insight: "You enjoy turning a plan into something tangible." },
      { text: "Making sure everyone feels included and heard", category: "social", insight: "You help teams work well by noticing and supporting people." }
    ]
  },
  {
    topic: "WHAT YOU NOTICE",
    question: "What do you tend to notice first when you walk into a new place?",
    options: [
      { text: "The colors, layout, and little design details", category: "creative", insight: "You notice visual details and how a space feels." },
      { text: "The devices, screens, or interesting technology", category: "technology", insight: "You are naturally curious about technology around you." },
      { text: "How the place is organized and what is happening", category: "business", insight: "You notice how people and activities are coordinated." },
      { text: "The conversations and stories people are sharing", category: "communication", insight: "You tune into what people are saying and sharing." },
      { text: "How the building, equipment, or objects are put together", category: "engineering", insight: "You notice how practical things are made and arranged." },
      { text: "Who might need help or look unsure", category: "social", insight: "You notice how other people are feeling in a space." }
    ]
  },
  {
    topic: "LEARNING SOMETHING NEW",
    question: "How do you most enjoy learning a new skill?",
    options: [
      { text: "Experimenting and figuring out how it works", category: "technology", insight: "You enjoy curious, hands-on experimentation." },
      { text: "Trying different styles and making it your own", category: "creative", insight: "You like learning in a way that leaves room for creativity." },
      { text: "Setting a goal and following a clear plan", category: "business", insight: "You enjoy learning toward a clear and organized goal." },
      { text: "Reading, watching, or talking about it with someone", category: "communication", insight: "You like learning through ideas, stories, and discussion." },
      { text: "Practicing it with real tools or materials", category: "engineering", insight: "You learn best when you can put a skill into practice." },
      { text: "Learning alongside others and helping each other", category: "social", insight: "You enjoy learning as a supportive, shared experience." }
    ]
  },
  {
    topic: "YOUR KIND OF CHALLENGE",
    question: "Which challenge would you choose for a school activity?",
    options: [
      { text: "Design a logo or create a mini comic", category: "creative", insight: "You enjoy creative challenges with room for self-expression." },
      { text: "Solve a puzzle or make a simple digital tool", category: "technology", insight: "You enjoy logical challenges and making digital things work." },
      { text: "Come up with a plan to raise money for a cause", category: "business", insight: "You like practical planning and turning ideas into action." },
      { text: "Give a short talk about something you care about", category: "communication", insight: "You enjoy putting your ideas into words and sharing them." },
      { text: "Build a bridge from simple classroom materials", category: "engineering", insight: "You like hands-on challenges that test how things work." },
      { text: "Help younger students feel welcome at school", category: "social", insight: "You find meaning in helping people feel supported." }
    ]
  },
  {
    topic: "WHAT YOU ENJOY MAKING",
    question: "If you could make something for your friends, what would it be?",
    options: [
      { text: "A fun illustration, playlist cover, or custom card", category: "creative", insight: "You like making thoughtful things with a personal touch." },
      { text: "A tiny website, game, or useful phone feature", category: "technology", insight: "You enjoy creating useful or fun digital experiences." },
      { text: "A plan for an unforgettable group outing", category: "business", insight: "You like creating experiences and making plans happen." },
      { text: "A funny video, message, or story about your group", category: "communication", insight: "You enjoy capturing moments and sharing them with people." },
      { text: "A handmade gift or something you built yourself", category: "engineering", insight: "You enjoy creating useful, tangible things with your hands." },
      { text: "A care package to cheer someone up", category: "social", insight: "You like showing people they are cared for." }
    ]
  },
  {
    topic: "WHEN SOMETHING GOES WRONG",
    question: "A class project isn't working as planned. What would you be likely to do?",
    options: [
      { text: "Suggest a fresh idea or a different way to present it", category: "creative", insight: "You can adapt an idea and imagine a new direction." },
      { text: "Check the details and figure out where it stopped working", category: "technology", insight: "You like troubleshooting and finding the cause of a problem." },
      { text: "Help the group agree on a new plan and priorities", category: "business", insight: "You can bring focus to a project when plans change." },
      { text: "Explain the situation and help everyone share ideas", category: "communication", insight: "You use clear communication to move a team forward." },
      { text: "Test a different material, tool, or practical solution", category: "engineering", insight: "You respond to setbacks by trying practical solutions." },
      { text: "Check in with teammates and see who needs help", category: "social", insight: "You make sure people feel supported during a setback." }
    ]
  },
  {
    topic: "YOUR IDEAL WORKSPACE",
    question: "Which workspace sounds most comfortable to you?",
    options: [
      { text: "A bright spot with art supplies and room to sketch", category: "creative", insight: "You enjoy an environment that inspires creative thinking." },
      { text: "A laptop desk where you can explore and experiment", category: "technology", insight: "You like having tools nearby to explore new ideas." },
      { text: "A shared space with a clear plan and team goals", category: "business", insight: "You enjoy working toward goals with an organized team." },
      { text: "A welcoming place to write, talk, and exchange ideas", category: "communication", insight: "You thrive where ideas and conversations can flow." },
      { text: "A workshop where you can use tools and build things", category: "engineering", insight: "You enjoy practical spaces where you can work with your hands." },
      { text: "A friendly room where people can work and learn together", category: "social", insight: "You value warm, people-centered environments." }
    ]
  },
  {
    topic: "THE ROLE YOU OFTEN PLAY",
    question: "In a group of friends, which one sounds most like you?",
    options: [
      { text: "The one with imaginative ideas for what to do", category: "creative", insight: "Friends may count on you for fun and imaginative ideas." },
      { text: "The one who can figure out how the tech works", category: "technology", insight: "Others may turn to you when they need help with technology." },
      { text: "The one who gets everyone together and makes a plan", category: "business", insight: "You enjoy helping a group organize and make plans." },
      { text: "The one who keeps the conversation going", category: "communication", insight: "You often help people connect through conversation." },
      { text: "The one who can fix, carry, or put something together", category: "engineering", insight: "People may appreciate your practical, can-do approach." },
      { text: "The one friends can talk to when they need support", category: "social", insight: "Friends may value you as a caring, supportive listener." }
    ]
  },
  {
    topic: "YOUR CURIOSITY",
    question: "Which question are you most likely to wonder about?",
    options: [
      { text: "How could this look more interesting or beautiful?", category: "creative", insight: "You are curious about how visual choices affect an idea." },
      { text: "How does this app, game, or device actually work?", category: "technology", insight: "You wonder about the systems behind everyday technology." },
      { text: "What would help this idea reach more people?", category: "business", insight: "You think about how ideas can grow and connect with others." },
      { text: "What is the story behind this person or place?", category: "communication", insight: "You are curious about stories and different perspectives." },
      { text: "How was this made, and could I build one too?", category: "engineering", insight: "You like understanding how real things are designed and made." },
      { text: "What would make this better for the people using it?", category: "social", insight: "You consider the needs and experiences of other people." }
    ]
  },
  {
    topic: "A SMALL WIN",
    question: "Which kind of achievement would make you feel proud?",
    options: [
      { text: "Making something that looks and feels just right", category: "creative", insight: "You take pride in thoughtful, expressive creative work." },
      { text: "Finally getting a tricky digital project to work", category: "technology", insight: "You feel rewarded when you solve a challenging technical problem." },
      { text: "Seeing a team complete a plan you helped organize", category: "business", insight: "You enjoy making progress through teamwork and planning." },
      { text: "Helping an audience understand an idea you shared", category: "communication", insight: "You value making ideas clear and memorable for others." },
      { text: "Finishing something useful with your own hands", category: "engineering", insight: "You enjoy seeing a practical project take shape." },
      { text: "Knowing you helped someone feel more confident", category: "social", insight: "You feel proud when your support helps someone grow." }
    ]
  },
  {
    topic: "YOUR KIND OF FEEDBACK",
    question: "What would you most like someone to say about your work?",
    options: [
      { text: "“That is such an original idea!”", category: "creative", insight: "You value originality and fresh ways of expressing ideas." },
      { text: "“You figured out how to make it work!”", category: "technology", insight: "You appreciate recognition for solving problems and learning." },
      { text: "“You helped the whole team get there.”", category: "business", insight: "You value helping a group make progress together." },
      { text: "“You explained that so clearly.”", category: "communication", insight: "You care about communicating in ways people understand." },
      { text: "“You made that with your own hands?”", category: "engineering", insight: "You enjoy creating real things people can use." },
      { text: "“You really made me feel included.”", category: "social", insight: "You value kindness and helping people feel they belong." }
    ]
  },
  {
    topic: "A DAY TO EXPLORE",
    question: "You get to spend a day with a new club. Which one would you pick?",
    options: [
      { text: "Art, animation, or photography club", category: "creative", insight: "Creative clubs appeal to your interest in visual expression." },
      { text: "Robotics, coding, or game-making club", category: "technology", insight: "You are interested in experimenting with technology." },
      { text: "Young entrepreneurs or event-planning club", category: "business", insight: "You enjoy ideas about planning, leadership, and projects." },
      { text: "Debate, writing, or language club", category: "communication", insight: "You enjoy clubs that explore ideas and communication." },
      { text: "Makerspace, science, or DIY building club", category: "engineering", insight: "You are drawn to hands-on discovery and making." },
      { text: "Peer mentors, tutoring, or community club", category: "social", insight: "You like activities where people learn and help each other." }
    ]
  },
  {
    topic: "HOW YOU MAKE DECISIONS",
    question: "When choosing between a few good ideas, what helps you decide?",
    options: [
      { text: "Which idea feels the most exciting and original", category: "creative", insight: "You trust your imagination when comparing possibilities." },
      { text: "Which one solves the problem most effectively", category: "technology", insight: "You look for solutions that work clearly and efficiently." },
      { text: "Which one is realistic and has the biggest impact", category: "business", insight: "You weigh practical plans and the results they could bring." },
      { text: "Which one I can explain and get others excited about", category: "communication", insight: "You think about how ideas can be shared and understood." },
      { text: "Which one I can build or test in real life", category: "engineering", insight: "You like ideas that can be tried out in a practical way." },
      { text: "Which one will be most helpful to the people involved", category: "social", insight: "You consider how choices affect the people around you." }
    ]
  },
  {
    topic: "THE PROBLEM YOU WOULD TACKLE",
    question: "If you could make one thing easier for students, what would you choose?",
    options: [
      { text: "Finding a fun way to express their ideas", category: "creative", insight: "You want people to have more creative ways to share ideas." },
      { text: "Using helpful tools for schoolwork and learning", category: "technology", insight: "You see how useful technology can help with everyday problems." },
      { text: "Keeping track of activities, plans, and deadlines", category: "business", insight: "You like making busy schedules easier to manage." },
      { text: "Finding good information and understanding it", category: "communication", insight: "You want important ideas to be clear and accessible." },
      { text: "Fixing classroom equipment or improving useful spaces", category: "engineering", insight: "You notice practical improvements that could help every day." },
      { text: "Feeling welcome, included, and supported at school", category: "social", insight: "You care about making school a kinder place for everyone." }
    ]
  },
  {
    topic: "YOUR FAVORITE KIND OF FEEDBACK",
    question: "After finishing a project, what would you most want to hear?",
    options: [
      { text: "“I love how you brought your own style to it.”", category: "creative", insight: "Personal style and originality matter to you." },
      { text: "“That works so well—you solved it!”", category: "technology", insight: "You enjoy making a useful solution that works well." },
      { text: "“Your planning made this so much easier.”", category: "business", insight: "You value clear organization and making things run smoothly." },
      { text: "“Your words made me see it differently.”", category: "communication", insight: "You enjoy using words to help people see a new perspective." },
      { text: "“This is really useful. How did you make it?”", category: "engineering", insight: "You take pride in building practical things that work." },
      { text: "“I felt like I could be myself on this team.”", category: "social", insight: "You value creating a sense of trust and belonging." }
    ]
  },
  {
    topic: "YOUR FUTURE PROJECT",
    question: "If you could spend a month on any personal project, what sounds most fun?",
    options: [
      { text: "Make a collection of art, designs, or short films", category: "creative", insight: "You like longer creative projects where ideas can grow." },
      { text: "Build a small website, app, or game", category: "technology", insight: "You enjoy making interactive things with technology." },
      { text: "Start a mini business or organize a community event", category: "business", insight: "You are interested in building and organizing a real project." },
      { text: "Write a blog, make a podcast, or learn a language", category: "communication", insight: "You enjoy projects that share ideas with an audience." },
      { text: "Design and build a useful object or model", category: "engineering", insight: "You like taking a practical project from idea to finished result." },
      { text: "Create a helpful club, tutoring group, or volunteer project", category: "social", insight: "You are interested in projects that bring people support." }
    ]
  },
  {
    topic: "WHAT KEEPS YOU GOING",
    question: "When a project takes longer than expected, what helps you stick with it?",
    options: [
      { text: "Seeing the idea slowly become something I imagined", category: "creative", insight: "A growing creative vision can motivate you to keep going." },
      { text: "Getting curious about what is still left to figure out", category: "technology", insight: "A new puzzle or discovery can keep you engaged." },
      { text: "Checking off steps and seeing the plan come together", category: "business", insight: "Visible progress and clear milestones help you stay focused." },
      { text: "Talking it over and getting a fresh perspective", category: "communication", insight: "Sharing ideas helps you find energy and a new direction." },
      { text: "Testing a better way until it finally works", category: "engineering", insight: "You can keep trying practical approaches until one works." },
      { text: "Remembering who the project could help", category: "social", insight: "Knowing your work could help others gives you purpose." }
    ]
  },
  {
    topic: "LOOKING AHEAD",
    question: "Which sentence sounds most like the kind of future you want to explore?",
    options: [
      { text: "“I want to make ideas people can see and feel.”", category: "creative", insight: "You are drawn to creating meaningful visual experiences." },
      { text: "“I want to understand technology and make it useful.”", category: "technology", insight: "You want to explore how technology can solve real problems." },
      { text: "“I want to turn good ideas into real projects.”", category: "business", insight: "You like the idea of helping plans become real." },
      { text: "“I want to share ideas and connect with people.”", category: "communication", insight: "You are interested in bringing people together through communication." },
      { text: "“I want to design, build, or improve how things work.”", category: "engineering", insight: "You are interested in making practical things better." },
      { text: "“I want to help people learn, grow, or feel supported.”", category: "social", insight: "You see yourself doing work that supports other people." }
    ]
  }
];

const state = {
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  currentCategory: null,
  toastTimer: null
};

const views = [...document.querySelectorAll("[data-view]")];
const navLinks = [...document.querySelectorAll(".nav-link")];
const instructionsPanel = document.getElementById("instructions-panel");
const questionPanel = document.getElementById("question-panel");
const questionTitle = document.getElementById("question-title");
const questionTopic = document.getElementById("question-topic");
const answerList = document.getElementById("answer-list");
const nextButton = document.getElementById("next-question");
const previousButton = document.getElementById("previous-question");
const progressTrack = document.getElementById("progress-track");
const progressFill = document.getElementById("progress-fill");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function showView(name) {
  views.forEach((view) => view.classList.toggle("is-hidden", view.dataset.view !== name));
  navLinks.forEach((link) => {
    const active = link.dataset.nav === name || (name === "results" && link.dataset.nav === "test");
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  siteNav.classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startTest() {
  state.currentQuestion = 0;
  state.answers.fill(null);
  state.currentCategory = null;
  instructionsPanel.classList.add("is-hidden");
  questionPanel.classList.remove("is-hidden");
  showView("test");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.currentQuestion];
  const number = state.currentQuestion + 1;
  questionTitle.textContent = question.question;
  questionTopic.textContent = question.topic;
  document.getElementById("question-count").textContent = `QUESTION ${number} OF ${questions.length}`;
  document.getElementById("progress-number").textContent = `${number} / ${questions.length}`;
  progressFill.style.width = `${(state.currentQuestion / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(state.currentQuestion));
  answerList.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", String(state.answers[state.currentQuestion] === index));
    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = String.fromCharCode(65 + index);
    const text = document.createElement("span");
    text.className = "answer-text";
    text.textContent = option.text;
    const check = document.createElement("span");
    check.className = "answer-check";
    check.setAttribute("aria-hidden", "true");
    check.textContent = "✓";
    button.append(letter, text, check);
    button.addEventListener("click", () => selectAnswer(index));
    answerList.append(button);
  });
  previousButton.disabled = state.currentQuestion === 0;
  nextButton.disabled = state.answers[state.currentQuestion] === null;
  nextButton.innerHTML = state.currentQuestion === questions.length - 1
    ? 'See my results <span aria-hidden="true">→</span>'
    : 'Next <span aria-hidden="true">→</span>';
}

function selectAnswer(index) {
  state.answers[state.currentQuestion] = index;
  [...answerList.children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
  nextButton.disabled = false;
}

function moveQuestion(direction) {
  if (direction > 0 && state.answers[state.currentQuestion] === null) return;
  if (state.currentQuestion === questions.length - 1 && direction > 0) {
    showResults();
    return;
  }
  state.currentQuestion = Math.max(0, Math.min(questions.length - 1, state.currentQuestion + direction));
  renderQuestion();
  questionTitle.focus?.();
}

function getScores() {
  const scores = Object.fromEntries(Object.keys(categories).map((key) => [key, 0]));
  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const selected = questions[questionIndex].options[answerIndex];
    scores[selected.category] += selected.score || 1;
  });
  return scores;
}

function showResults() {
  if (state.answers.some((answer) => answer === null)) return;
  const scores = getScores();
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  state.currentCategory = ranked[0][0];
  const primary = categories[state.currentCategory];
  document.getElementById("result-heading").textContent = primary.name;
  document.getElementById("result-description").textContent = primary.description;
  const answerInsights = state.answers
    .map((answerIndex, questionIndex) => questions[questionIndex].options[answerIndex])
    .filter((answer) => answer.category === state.currentCategory)
    .map((answer) => answer.insight);
  renderList("strength-list", [...new Set([...answerInsights, ...primary.strengths])].slice(0, 4));
  renderTags("areas-list", primary.areas);
  renderTags("study-list", primary.studies);
  renderTags("careers-list", primary.careers);
  document.getElementById("growth-tip").textContent = primary.tip;
  renderAlternatives(ranked.slice(1).filter(([, score]) => score >= 2 && score >= scores[state.currentCategory] * 0.4).slice(0, 2));
  instructionsPanel.classList.remove("is-hidden");
  questionPanel.classList.add("is-hidden");
  showView("results");
}

function renderList(elementId, items) {
  const list = document.getElementById(elementId);
  list.replaceChildren(...items.map((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  }));
}

function renderTags(elementId, items) {
  const list = document.getElementById(elementId);
  list.replaceChildren(...items.map((item) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item;
    return tag;
  }));
}

function renderAlternatives(alternatives) {
  const section = document.getElementById("alternatives-section");
  const grid = document.getElementById("alternative-grid");
  grid.replaceChildren();
  section.classList.toggle("is-hidden", alternatives.length === 0);
  alternatives.forEach(([key]) => {
    const category = categories[key];
    const card = document.createElement("article");
    card.className = "alternative-card";
    const symbol = document.createElement("span");
    symbol.className = "alternative-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = category.symbol;
    const copy = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = category.name;
    const description = document.createElement("p");
    description.textContent = category.alternative;
    copy.append(heading, description);
    card.append(symbol, copy);
    grid.append(card);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(state.toastTimer);
  state.toastTimer = setTimeout(() => toast.classList.remove("visible"), 2800);
}

document.getElementById("begin-test").addEventListener("click", startTest);
document.getElementById("next-question").addEventListener("click", () => moveQuestion(1));
document.getElementById("previous-question").addEventListener("click", () => moveQuestion(-1));
document.getElementById("retake-button").addEventListener("click", () => {
  instructionsPanel.classList.remove("is-hidden");
  questionPanel.classList.add("is-hidden");
  startTest();
});
document.getElementById("explore-button").addEventListener("click", () => {
  document.getElementById("field-details").scrollIntoView({ behavior: "smooth", block: "center" });
  document.getElementById("field-details").classList.add("field-highlight");
  setTimeout(() => document.getElementById("field-details").classList.remove("field-highlight"), 1500);
});
document.getElementById("share-button").addEventListener("click", async () => {
  const shareText = `My BrightPath result: I may enjoy exploring ${categories[state.currentCategory].name}. Try the test and discover your own possibilities!`;
  try {
    if (navigator.share) await navigator.share({ title: "My BrightPath result", text: shareText });
    else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareText);
      showToast("Your result has been copied to the clipboard.");
    } else {
      showToast("Sharing isn't available in this browser. You can tell a friend your result!");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("We couldn't share just now. You can still tell a friend your result!");
  }
});
document.getElementById("back-home").addEventListener("click", () => showView("home"));
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  siteNav.classList.toggle("open", !isOpen);
});
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const destination = link.dataset.nav;
    if (destination === "test") {
      instructionsPanel.classList.remove("is-hidden");
      questionPanel.classList.add("is-hidden");
    }
    showView(destination);
  });
});
document.querySelectorAll('a[href="#test"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    instructionsPanel.classList.remove("is-hidden");
    questionPanel.classList.add("is-hidden");
    showView("test");
  });
});
document.querySelectorAll('a[href="#home"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView("home");
  });
});
document.querySelectorAll('a[href="#about"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView("about");
  });
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("open")) {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});
