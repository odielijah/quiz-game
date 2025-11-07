/**
 *
 * categories
 *
 */

const categories = [
  "biology",
  "geography",
  "computer science",
  "general knowledge",
  "music",
  "movies and entertainment",
  "mythology",
  "fashion",
];

const difficulties = ["easy", "medium", "hard"];

// Biology
const biologyEasyQuestions = [
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Brain", "Skin", "Heart", "Liver"],
    answer: "Skin",
  },
  {
    question: "Which gas is responsible for the Earth's ozone layer depletion?",
    options: [
      "Carbon Dioxide",
      "Oxygen",
      "Chlorofluorocarbons (CFCs)",
      "Methane",
    ],
    answer: "Chlorofluorocarbons (CFCs)",
  },
  {
    question:
      "What is the process by which plants make their own food using sunlight?",
    options: ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
    answer: "Photosynthesis",
  },
  {
    question: "What is the main function of red blood cells in the human body?",
    options: [
      "Carrying oxygen",
      "Digesting food",
      "Producing insulin",
      "Filtering waste",
    ],
    answer: "Carrying oxygen",
  },
  {
    question: "Which gas do humans breathe out during respiration?",
    options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the chemical formula for water?",
    options: ["CO2", "H2O", "O2", "CH4"],
    answer: "H2O",
  },
  {
    question: "Which part of a plant absorbs water and minerals from the soil?",
    options: ["Stem", "Leaves", "Roots", "Flowers"],
    answer: "Roots",
  },
  {
    question: "What is the outermost layer of the Earth's surface called?",
    options: ["Mantle", "Crust", "Core", "Atmosphere"],
    answer: "Crust",
  },
];

const biologyMediumQuestions = [
  {
    question:
      "What is the process by which green plants and some other organisms use sunlight to synthesize foods with the help of chlorophyll?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
    answer: "Photosynthesis",
  },
  {
    question:
      "Which part of the human brain is responsible for regulating vital functions like breathing and heart rate?",
    options: ["Cerebellum", "Hippocampus", "Medulla Oblongata", "Thalamus"],
    answer: "Medulla Oblongata",
  },
  {
    question:
      "What is the powerhouse of the cell responsible for producing energy in the form of ATP?",
    options: [
      "Mitochondria",
      "Endoplasmic Reticulum",
      "Golgi Apparatus",
      "Lysosome",
    ],
    answer: "Mitochondria",
  },
  {
    question:
      "Which gas is essential for all aerobic respiration and is transported by hemoglobin in the blood?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Oxygen",
  },
  {
    question:
      "What is the name of the process by which cells replicate and divide into two identical daughter cells?",
    options: ["Meiosis", "Mitosis", "Cytokinesis", "Fertilization"],
    answer: "Mitosis",
  },
  {
    question:
      "Which of the following blood types is considered the universal recipient?",
    options: ["A+", "B-", "AB+", "O-"],
    answer: "AB+",
  },
  {
    question:
      "In the classification of living organisms, which category is higher than 'class' but lower than 'phylum'?",
    options: ["Genus", "Order", "Family", "Kingdom"],
    answer: "Order",
  },
  {
    question:
      "What is the name of the hormone responsible for regulating blood sugar levels in the body?",
    options: ["Insulin", "Glucagon", "Melatonin", "Thyroxine"],
    answer: "Insulin",
  },
  {
    question:
      "Which gas is most commonly produced by the combustion of fossil fuels and contributes to global warming?",
    options: ["Carbon Monoxide", "Sulfur Dioxide", "Methane", "Carbon Dioxide"],
    answer: "Carbon Dioxide",
  },
  {
    question:
      "What is the process by which cells engulf and digest particles or microorganisms, often referred to as 'cell eating'?",
    options: ["Phagocytosis", "Pinocytosis", "Exocytosis", "Diffusion"],
    answer: "Phagocytosis",
  },
];

const biologyHardQuestions = [
  {
    question:
      "Which of the following enzymes is responsible for breaking down complex carbohydrates into simple sugars in the digestive system?",
    options: ["Lipase", "Amylase", "Protease", "Nuclease"],
    answer: "Amylase",
  },
  {
    question:
      "What is the term for a group of organisms of the same species living in the same area and interbreeding?",
    options: ["Population", "Community", "Ecosystem", "Biome"],
    answer: "Population",
  },
  {
    question:
      "In genetics, what term is used to describe a trait that is expressed when an individual has two different alleles for that trait?",
    options: ["Dominant", "Recessive", "Codominant", "Incomplete Dominance"],
    answer: "Codominant",
  },
  {
    question:
      "Which of the following is a rare genetic disorder characterized by the absence of melanin pigment in the skin, hair, and eyes?",
    options: [
      "Albinism",
      "Hemophilia",
      "Cystic Fibrosis",
      "Huntington's Disease",
    ],
    answer: "Albinism",
  },
  {
    question: "In which phase of the cell cycle does DNA replication occur?",
    options: ["G1 Phase", "S Phase", "G2 Phase", "M Phase"],
    answer: "S Phase",
  },
  {
    question:
      "What is the process by which cells become specialized for specific functions during development?",
    options: ["Mitosis", "Meiosis", "Differentiation", "Apoptosis"],
    answer: "Differentiation",
  },
  {
    question:
      "Which of the following is NOT a function of the lymphatic system?",
    options: [
      "Transporting white blood cells",
      "Filtering blood",
      "Absorbing dietary fats",
      "Producing insulin",
    ],
    answer: "Producing insulin",
  },
  {
    question:
      "What is the name of the protein responsible for oxygen transport in red blood cells?",
    options: ["Hemoglobin", "Myoglobin", "Collagen", "Keratin"],
    answer: "Hemoglobin",
  },
  {
    question:
      "Which hormone is produced by the pineal gland and regulates sleep-wake cycles?",
    options: ["Melatonin", "Insulin", "Thyroxine", "Epinephrine"],
    answer: "Melatonin",
  },
  {
    question:
      "What is the process by which certain species of bacteria can exchange genetic material via direct cell-to-cell contact?",
    options: [
      "Binary fission",
      "Transformation",
      "Conjugation",
      "Transduction",
    ],
    answer: "Conjugation",
  },
];

// Geography
const geographyEasyQuestions = [
  {
    question: "Which continent is known as the 'Land of the Rising Sun'?",
    options: ["Europe", "Africa", "Asia", "Australia"],
    answer: "Asia",
  },
  {
    question: "What is the capital city of France?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answer: "Paris",
  },
  {
    question: "Which river is the longest in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Mississippi River",
      "Yangtze River",
    ],
    answer: "Nile River",
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arabian Desert",
      "Mojave Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    question: "Which country is both an island and a continent?",
    options: ["New Zealand", "Madagascar", "Australia", "Sri Lanka"],
    answer: "Australia",
  },
  {
    question: "Which ocean is the largest by area?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question:
      "Which mountain range stretches across the western part of North America?",
    options: ["Andes Mountains", "Rocky Mountains", "Himalayas", "Alps"],
    answer: "Rocky Mountains",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount McKinley",
      "Mount Everest",
      "Mount Fuji",
    ],
    answer: "Mount Everest",
  },
  {
    question: "Which country is known as the 'Land of the Midnight Sun'?",
    options: ["Norway", "Russia", "Sweden", "Canada"],
    answer: "Norway",
  },
  {
    question:
      "Which city is located at the confluence of the Blue Nile and White Nile rivers?",
    options: ["Cairo", "Khartoum", "Nairobi", "Addis Ababa"],
    answer: "Khartoum",
  },
];

const geographyMediumQuestions = [
  {
    question:
      "Which mountain range runs along the border between Italy and Switzerland?",
    options: ["Andes Mountains", "Himalayas", "Alps", "Rocky Mountains"],
    answer: "Alps",
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Ottawa", "Toronto", "Montreal", "Vancouver"],
    answer: "Ottawa",
  },
  {
    question: "Which river forms the eastern border of the United States?",
    options: [
      "Mississippi River",
      "Colorado River",
      "Ohio River",
      "Hudson River",
    ],
    answer: "Mississippi River",
  },
  {
    question: "What is the largest country by land area in South America?",
    options: ["Brazil", "Argentina", "Peru", "Colombia"],
    answer: "Brazil",
  },
  {
    question:
      "Which African country is known as the 'Land of a Thousand Hills'?",
    options: ["Rwanda", "Kenya", "Nigeria", "South Africa"],
    answer: "Rwanda",
  },
  {
    question: "Which ocean is located to the east of Africa?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    answer: "Indian Ocean",
  },
  {
    question: "What is the longest river in Europe?",
    options: ["Seine River", "Danube River", "Volga River", "Loire River"],
    answer: "Volga River",
  },
  {
    question: "Which U.S. state is known as the 'Sunshine State'?",
    options: ["California", "Florida", "Texas", "Arizona"],
    answer: "Florida",
  },
  {
    question: "What is the highest mountain peak in North America?",
    options: [
      "Mount McKinley (Denali)",
      "Mount Rainier",
      "Mount St. Helens",
      "Mount Hood",
    ],
    answer: "Mount McKinley (Denali)",
  },
  {
    question:
      "Which desert is located in southwestern Africa and is known for its iconic red sand dunes?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Namib Desert",
      "Kalahari Desert",
    ],
    answer: "Namib Desert",
  },
];

const geographyHardQuestions = [
  {
    question:
      "Which river forms the border between China and North Korea before emptying into the Yellow Sea?",
    options: ["Yangtze River", "Amur River", "Mekong River", "Indus River"],
    answer: "Amur River",
  },
  {
    question:
      "What is the smallest independent country in the world both by area and population?",
    options: ["Monaco", "Nauru", "San Marino", "Vatican City"],
    answer: "Vatican City",
  },
  {
    question:
      "Which strait separates the African continent from Europe and connects the Mediterranean Sea to the Atlantic Ocean?",
    options: [
      "Strait of Hormuz",
      "Strait of Gibraltar",
      "Bosporus Strait",
      "Malacca Strait",
    ],
    answer: "Strait of Gibraltar",
  },
  {
    question:
      "Which country claims the region of Kashmir as a disputed territory?",
    options: ["India", "Pakistan", "China", "Nepal"],
    answer: "India",
  },
  {
    question:
      "Which desert covers a large part of Mongolia and China and is known for its extreme temperatures?",
    options: [
      "Sahara Desert",
      "Atacama Desert",
      "Gobi Desert",
      "Kalahari Desert",
    ],
    answer: "Gobi Desert",
  },
  {
    question: "What is the northernmost point of land on Earth?",
    options: ["North Pole", "Greenland", "Svalbard", "Barrow (Utqiaġvik)"],
    answer: "North Pole",
  },
  {
    question:
      "Which country is located on the easternmost point of the African mainland?",
    options: ["Kenya", "Tanzania", "Somalia", "Mozambique"],
    answer: "Somalia",
  },
  {
    question:
      "Which island nation in the Indian Ocean is known as the 'Pearl of the Indian Ocean'?",
    options: ["Maldives", "Sri Lanka", "Madagascar", "Seychelles"],
    answer: "Sri Lanka",
  },
  {
    question:
      "What is the name of the mountain range that runs along the western edge of South America?",
    options: ["Andes Mountains", "Rocky Mountains", "Himalayas", "Alps"],
    answer: "Andes Mountains",
  },
  {
    question: "Which African country is the largest by land area?",
    options: ["Nigeria", "South Africa", "Algeria", "Egypt"],
    answer: "Algeria",
  },
];

// Computer Science
const computerScienceEasyQuestions = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Process Unit",
      "Computer Processor Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    question:
      "Which programming language is known for its use in web development and is often used for client-side scripting?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "What is the primary function of an operating system?",
    options: [
      "Running applications",
      "Managing hardware resources",
      "Creating documents",
      "Sending emails",
    ],
    answer: "Managing hardware resources",
  },
  {
    question:
      "Which data structure stores elements in a Last-In-First-Out (LIFO) manner?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the binary system based on?",
    options: ["Base 2", "Base 10", "Base 16", "Base 8"],
    answer: "Base 2",
  },
  {
    question: "Which of the following is NOT a type of programming paradigm?",
    options: [
      "Imperative",
      "Functional",
      "Object-Oriented",
      "Database-Oriented",
    ],
    answer: "Database-Oriented",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High-Level Text Markup Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which protocol is used for secure communication over the internet, often identified by 'https://' in website URLs?",
    options: ["HTTP", "FTP", "SMTP", "SSL/TLS"],
    answer: "SSL/TLS",
  },
  {
    question:
      "Which of the following is a popular version control system used by developers to track changes in source code?",
    options: [
      "JavaBeans",
      "Subversion (SVN)",
      "Hypertext Preprocessor (PHP)",
      "Cascading Style Sheets (CSS)",
    ],
    answer: "Subversion (SVN)",
  },
  {
    question: "What is the main purpose of a firewall in network security?",
    options: [
      "Filter incoming and outgoing network traffic",
      "Enhance internet speed",
      "Store backup data",
      "Manage user accounts",
    ],
    answer: "Filter incoming and outgoing network traffic",
  },
];

const computerScienceMediumQuestions = [
  {
    question:
      "What is the process of converting high-level programming code into machine code called?",
    options: ["Decompilation", "Compilation", "Interpretation", "Debugging"],
    answer: "Compilation",
  },
  {
    question:
      "In object-oriented programming, what is the term for creating a new object based on an existing object?",
    options: ["Cloning", "Inheritance", "Polymorphism", "Abstraction"],
    answer: "Cloning",
  },
  {
    question:
      "Which data structure follows the Last-In-First-Out (LIFO) order?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: "Stack",
  },
  {
    question: "What does the acronym 'HTML' stand for in web development?",
    options: [
      "HyperText Markup Language",
      "High-Level Text Manipulation Language",
      "Hyperlink and Text Management Language",
      "Hypertext Template Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question:
      "Which programming language is often used for developing Android applications?",
    options: ["Java", "Python", "C#", "Swift"],
    answer: "Java",
  },
  {
    question: "What does 'SQL' stand for in the context of databases?",
    options: [
      "Structured Query Language",
      "Sequential Query Language",
      "Simple Query Language",
      "Scripted Query Language",
    ],
    answer: "Structured Query Language",
  },
  {
    question:
      "Which sorting algorithm has an average and worst-case time complexity of O(n log n)?",
    options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"],
    answer: "Quick Sort",
  },
  {
    question: "In networking, what does 'TCP' stand for?",
    options: [
      "Transmission Control Protocol",
      "Transfer Control Protocol",
      "Technical Control Protocol",
      "Transport Communication Protocol",
    ],
    answer: "Transmission Control Protocol",
  },
  {
    question: "What does 'API' stand for in software development?",
    options: [
      "Application Programming Interface",
      "Application Processing Interface",
      "Application Protocol Interface",
      "Application Page Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    question:
      "Which type of programming error is often detected during compilation and causes the program to not run at all?",
    options: ["Syntax Error", "Runtime Error", "Logic Error", "Semantic Error"],
    answer: "Syntax Error",
  },
];

const computerScienceHardQuestions = [
  {
    question:
      "Which data structure is typically used for implementing recursive algorithms?",
    options: ["Stack", "Queue", "Linked List", "Array"],
    answer: "Stack",
  },
  {
    question: "In computer networking, what does 'DNS' stand for?",
    options: [
      "Domain Name Service",
      "Dynamic Network Server",
      "Data Network System",
      "Digital Naming Service",
    ],
    answer: "Domain Name Service",
  },
  {
    question: "What is the maximum number of IP addresses that IPv4 supports?",
    options: ["256", "65536", "4294967296", "1024"],
    answer: "4294967296",
  },
  {
    question:
      "Which programming language is often used for low-level system programming and operating systems?",
    options: ["Python", "Java", "C++", "Assembly Language"],
    answer: "Assembly Language",
  },
  {
    question:
      "What is the term for a security attack in which an attacker intercepts communication between two parties and possibly alters it?",
    options: [
      "Phishing",
      "Denial of Service (DoS)",
      "Man-in-the-Middle (MitM)",
      "Spoofing",
    ],
    answer: "Man-in-the-Middle (MitM)",
  },
  {
    question:
      "Which encryption algorithm is commonly used for secure data transmission over the internet, including HTTPS?",
    options: ["AES", "RSA", "MD5", "DES"],
    answer: "AES",
  },
  {
    question:
      "What is the primary purpose of a 'firewall' in network security?",
    options: [
      "Virus Detection",
      "Packet Filtering",
      "Data Encryption",
      "Data Backup",
    ],
    answer: "Packet Filtering",
  },
  {
    question: "In the context of databases, what does 'ACID' stand for?",
    options: [
      "All Conditions In Database",
      "Atomicity, Consistency, Isolation, Durability",
      "Advanced Control of InnoDB Databases",
      "Automatic Code Integrity and Database",
    ],
    answer: "Atomicity, Consistency, Isolation, Durability",
  },
  {
    question:
      "Which programming paradigm focuses on treating computation as the evaluation of mathematical functions and avoids changing state and mutable data?",
    options: [
      "Imperative Programming",
      "Object-Oriented Programming",
      "Functional Programming",
      "Procedural Programming",
    ],
    answer: "Functional Programming",
  },
  {
    question:
      "What is the term for a software development practice that integrates code changes frequently and automatically into a shared repository?",
    options: [
      "Version Control",
      "Continuous Integration",
      "Agile Development",
      "Scrum Management",
    ],
    answer: "Continuous Integration",
  },
];

// General Knowledge
const generalKnowledgeEasyQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Venus", "Jupiter", "Mars", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Giraffe", "African Elephant", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Which country is famous for the ancient city of Machu Picchu?",
    options: ["Brazil", "Peru", "Mexico", "Chile"],
    answer: "Peru",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount McKinley",
      "Mount Everest",
      "Mount Fuji",
    ],
    answer: "Mount Everest",
  },
  {
    question: "Which animal is known as the 'King of the Jungle'?",
    options: ["Gorilla", "Lion", "Tiger", "Elephant"],
    answer: "Lion",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Dollar", "Euro", "Yen", "Pound"],
    answer: "Yen",
  },
];

const generalKnowledgeMediumQuestions = [
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    answer: "Canberra",
  },
  {
    question:
      "Which gas do plants absorb from the atmosphere during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    options: ["Japan", "China", "South Korea", "Vietnam"],
    answer: "Japan",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    answer: "Blue Whale",
  },
  {
    question: "Which gas makes up the majority of Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Nitrogen",
  },
  {
    question: "Who is the author of the 'Harry Potter' book series?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "George Orwell", "Jane Austen"],
    answer: "J.K. Rowling",
  },
  {
    question: "Which planet is known as the 'Red Planet'?",
    options: ["Mars", "Venus", "Mercury", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
];

const generalKnowledgeHardQuestions = [
  {
    question: "Which planet in our solar system is known as the 'Red Planet'?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the chemical symbol for the element gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    answer: "Au",
  },
  {
    question: "Which river is the longest in the world?",
    options: [
      "Nile River",
      "Amazon River",
      "Yangtze River",
      "Mississippi River",
    ],
    answer: "Nile River",
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Jane Austen",
      "Leo Tolstoy",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which country is the largest producer of coffee in the world?",
    options: ["Brazil", "Colombia", "Ethiopia", "Vietnam"],
    answer: "Brazil",
  },
  {
    question: "Which chemical element has the atomic number 92?",
    options: ["Uranium", "Gold", "Lead", "Platinum"],
    answer: "Uranium",
  },
  {
    question: "In what year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    answer: "1912",
  },
  {
    question: "Which mountain is the tallest in the world?",
    options: [
      "Mount Kilimanjaro",
      "Mount McKinley",
      "Mount Everest",
      "Mount Fuji",
    ],
    answer: "Mount Everest",
  },
  {
    question: "Who was the first woman to fly solo across the Atlantic Ocean?",
    options: [
      "Amelia Earhart",
      "Bessie Coleman",
      "Harriet Quimby",
      "Jacqueline Cochran",
    ],
    answer: "Amelia Earhart",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
];

// Music
const musicEasyQuestions = [
  {
    question: "Who is known as the 'King of Pop'?",
    options: ["Michael Jackson", "Elvis Presley", "Prince", "Whitney Houston"],
    answer: "Michael Jackson",
  },
  {
    question: "Which musical instrument is known as the 'king of instruments'?",
    options: ["Piano", "Violin", "Guitar", "Trumpet"],
    answer: "Piano",
  },
  {
    question:
      "Which Nigerian musician is known for the hit songs 'African Giant' and 'Ye'?",
    options: ["Burna Boy", "Davido", "Wizkid", "Tiwa Savage"],
    answer: "Burna Boy",
  },
  {
    question:
      "Which artist released the album 'Thriller,' which is one of the best-selling albums of all time?",
    options: ["Elton John", "Prince", "Whitney Houston", "Michael Jackson"],
    answer: "Michael Jackson",
  },
  {
    question: "What is the main woodwind instrument in an orchestra?",
    options: ["Clarinet", "Flute", "Trumpet", "Trombone"],
    answer: "Flute",
  },
  {
    question: "Who is known as the 'Queen of Soul'?",
    options: [
      "Whitney Houston",
      "Aretha Franklin",
      "Diana Ross",
      "Tina Turner",
    ],
    answer: "Aretha Franklin",
  },
  {
    question:
      "Which musical instrument is played by pressing keys and produces sound by striking strings with hammers?",
    options: ["Violin", "Piano", "Flute", "Trumpet"],
    answer: "Piano",
  },
  {
    question: "Which Nigerian artist is known for the song 'Jowo'?",
    options: ["Burna Boy", "Davido", "Wizkid", "Tiwa Savage"],
    answer: "Davido",
  },
  {
    question:
      "Who is known as the 'Purple One' and released the album 'Purple Rain'?",
    options: ["Michael Jackson", "Elvis Presley", "Prince", "Whitney Houston"],
    answer: "Prince",
  },
  {
    question:
      "Which percussion instrument is often played with the hands and consists of a series of wooden bars?",
    options: ["Xylophone", "Tambourine", "Bongo Drums", "Maracas"],
    answer: "Xylophone",
  },
];

const musicMediumQuestions = [
  {
    question:
      "Which legendary musician is often referred to as the 'King of Pop'?",
    options: ["Elvis Presley", "Michael Jackson", "Prince", "David Bowie"],
    answer: "Michael Jackson",
  },
  {
    question:
      "Who is known for playing the lead guitar in the rock band Queen?",
    options: ["John Lennon", "Jimmy Page", "Brian May", "Eric Clapton"],
    answer: "Brian May",
  },
  {
    question: "Which musical instrument is known as the 'King of Instruments'?",
    options: ["Piano", "Violin", "Organ", "Trumpet"],
    answer: "Organ",
  },
  {
    question:
      "Which Nigerian musician is famous for the Afrobeat genre and the song 'Zombie'?",
    options: ["Femi Kuti", "Burna Boy", "Wizkid", "Fela Kuti"],
    answer: "Fela Kuti",
  },
  {
    question: "Who is the lead vocalist of the rock band U2?",
    options: ["Bono", "Chris Martin", "Mick Jagger", "Sting"],
    answer: "Bono",
  },
  {
    question:
      "Which instrument is known as the 'Grandfather of Rock and Roll'?",
    options: ["Electric Guitar", "Saxophone", "Drums", "Piano"],
    answer: "Electric Guitar",
  },
  {
    question:
      "Which American singer-songwriter is known for hits like 'Like a Rolling Stone' and 'Blowin' in the Wind'?",
    options: ["Elton John", "Bob Marley", "Bob Dylan", "Johnny Cash"],
    answer: "Bob Dylan",
  },
  {
    question: "Which musical instrument is known as the 'King of the Brass'?",
    options: ["Trombone", "Trumpet", "French Horn", "Saxophone"],
    answer: "Trumpet",
  },
  {
    question:
      "Which Nigerian musician is famous for his reggae music and the song 'Rasta Get Ready'?",
    options: ["Majek Fashek", "2Baba", "P-Square", "Timaya"],
    answer: "Majek Fashek",
  },
  {
    question:
      "Who is known for playing the piano and composing classical music like 'Fur Elise'?",
    options: [
      "Johann Sebastian Bach",
      "Ludwig van Beethoven",
      "Wolfgang Amadeus Mozart",
      "Frederic Chopin",
    ],
    answer: "Ludwig van Beethoven",
  },
];

const musicHardQuestions = [
  {
    question: "Which Nigerian musician is known as the 'African Giant'?",
    options: ["Burna Boy", "Davido", "Wizkid", "Tiwa Savage"],
    answer: "Burna Boy",
  },
  {
    question: "Who is often referred to as the 'Queen of Pop'?",
    options: ["Madonna", "Beyoncé", "Britney Spears", "Lady Gaga"],
    answer: "Madonna",
  },
  {
    question: "Which instrument is known as the 'King of Instruments'?",
    options: ["Piano", "Violin", "Trumpet", "Pipe Organ"],
    answer: "Pipe Organ",
  },
  {
    question:
      "Which American musician was known for his iconic guitar solo in 'Purple Haze'?",
    options: [
      "Eric Clapton",
      "Jimi Hendrix",
      "Stevie Ray Vaughan",
      "Eddie Van Halen",
    ],
    answer: "Jimi Hendrix",
  },
  {
    question: "Who is considered the 'Father of the Blues'?",
    options: ["B.B. King", "Muddy Waters", "Robert Johnson", "W.C. Handy"],
    answer: "W.C. Handy",
  },
  {
    question: "Which classical composer is famous for 'The Four Seasons'?",
    options: [
      "Ludwig van Beethoven",
      "Wolfgang Amadeus Mozart",
      "Johann Sebastian Bach",
      "Antonio Vivaldi",
    ],
    answer: "Antonio Vivaldi",
  },
  {
    question:
      "Which instrument is central to Indian classical music and is often used to accompany vocal performances?",
    options: ["Tabla", "Sitar", "Flute", "Veena"],
    answer: "Tabla",
  },
  {
    question:
      "Who is known for pioneering the use of the theremin in electronic music?",
    options: [
      "Kraftwerk",
      "Jean-Michel Jarre",
      "Leon Theremin",
      "Trent Reznor",
    ],
    answer: "Leon Theremin",
  },
  {
    question:
      "Which Jamaican musician is often credited with popularizing reggae music worldwide?",
    options: ["Jimmy Cliff", "Toots Hibbert", "Bob Marley", "Peter Tosh"],
    answer: "Bob Marley",
  },
  {
    question:
      "Which instrument is a member of the woodwind family and is played with a double reed?",
    options: ["Flute", "Clarinet", "Oboe", "Saxophone"],
    answer: "Oboe",
  },
];

// Movies and Entertainment
const moviesAndEntertainmentEasyQuestions = [
  {
    question:
      "Which actor played the role of Iron Man in the Marvel Cinematic Universe?",
    options: [
      "Chris Hemsworth",
      "Robert Downey Jr.",
      "Chris Evans",
      "Mark Ruffalo",
    ],
    answer: "Robert Downey Jr.",
  },
  {
    question:
      "What is the highest-grossing film of all time (unadjusted for inflation)?",
    options: ["Titanic", "Avatar", "Avengers: Endgame", "Jurassic World"],
    answer: "Avengers: Endgame",
  },
  {
    question:
      "Which animated film features a snowman named Olaf and a queen named Elsa?",
    options: ["Moana", "Tangled", "Frozen", "Brave"],
    answer: "Frozen",
  },
  {
    question:
      "Who played the lead role of Harry Potter in the Harry Potter film series?",
    options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"],
    answer: "Daniel Radcliffe",
  },
  {
    question: "Which movie won the Academy Award for Best Picture in 1994?",
    options: [
      "Forrest Gump",
      "Schindler's List",
      "The Silence of the Lambs",
      "Braveheart",
    ],
    answer: "Forrest Gump",
  },
  {
    question:
      "What is the name of the fictional African country in the movie 'Black Panther'?",
    options: ["Zamunda", "Wakanda", "Genovia", "Agrabah"],
    answer: "Wakanda",
  },
  {
    question:
      "Which TV series is a spin-off of 'Black-ish' and follows the life of Zoey Johnson at college?",
    options: ["Grey's Anatomy", "grown-ish", "The Good Place", "Riverdale"],
    answer: "grown-ish",
  },
  {
    question: "Who directed the film 'Jurassic Park'?",
    options: [
      "Christopher Nolan",
      "Steven Spielberg",
      "James Cameron",
      "George Lucas",
    ],
    answer: "Steven Spielberg",
  },
  {
    question: "Which superhero is known as the 'Man of Steel'?",
    options: ["Spider-Man", "Superman", "Iron Man", "Captain America"],
    answer: "Superman",
  },
  {
    question:
      "In the 'Star Wars' franchise, who is the Jedi Master and mentor to Luke Skywalker?",
    options: ["Yoda", "Obi-Wan Kenobi", "Darth Vader", "Han Solo"],
    answer: "Obi-Wan Kenobi",
  },
];

const moviesAndEntertainmentMediumQuestions = [
  {
    question: "Who directed the 1994 film 'Pulp Fiction'?",
    options: [
      "Martin Scorsese",
      "Quentin Tarantino",
      "Steven Spielberg",
      "Christopher Nolan",
    ],
    answer: "Quentin Tarantino",
  },
  {
    question:
      "Which actor played the character Jack Dawson in the movie 'Titanic'?",
    options: ["Leonardo DiCaprio", "Tom Hanks", "Brad Pitt", "Johnny Depp"],
    answer: "Leonardo DiCaprio",
  },
  {
    question: "Which Disney animated film features a character named Simba?",
    options: ["Beauty and the Beast", "The Lion King", "Aladdin", "Frozen"],
    answer: "The Lion King",
  },
  {
    question:
      "In the 'Harry Potter' film series, what is the name of Harry's pet owl?",
    options: ["Hedwig", "Dobby", "Fawkes", "Crookshanks"],
    answer: "Hedwig",
  },
  {
    question:
      "Who played the iconic character James Bond in 'GoldenEye' (1995)?",
    options: [
      "Sean Connery",
      "Pierce Brosnan",
      "Roger Moore",
      "Timothy Dalton",
    ],
    answer: "Pierce Brosnan",
  },
  {
    question:
      "Which actress starred as Katniss Everdeen in 'The Hunger Games' film series?",
    options: [
      "Jennifer Aniston",
      "Jennifer Lawrence",
      "Scarlett Johansson",
      "Emma Watson",
    ],
    answer: "Jennifer Lawrence",
  },
  {
    question: "Which film won the Academy Award for Best Picture in 2020?",
    options: ["Parasite", "1917", "Joker", "The Irishman"],
    answer: "Parasite",
  },
  {
    question: "In the 'Star Wars' franchise, who played the role of Han Solo?",
    options: ["Mark Hamill", "Harrison Ford", "Alec Guinness", "Ewan McGregor"],
    answer: "Harrison Ford",
  },
  {
    question:
      "Which 1999 film features a character named Tyler Durden and is based on a novel by Chuck Palahniuk?",
    options: [
      "The Big Lebowski",
      "American Psycho",
      "Fight Club",
      "The Matrix",
    ],
    answer: "Fight Club",
  },
  {
    question:
      "Which film directed by Quentin Tarantino features the Bride seeking revenge against her former assassin colleagues?",
    options: [
      "Reservoir Dogs",
      "Inglourious Basterds",
      "Kill Bill",
      "Django Unchained",
    ],
    answer: "Kill Bill",
  },
];

const moviesAndEntertainmentHardQuestions = [
  {
    question:
      "Which actor played the lead role in the Netflix series 'Stranger Things'?",
    options: [
      "Finn Wolfhard",
      "David Harbour",
      "Millie Bobby Brown",
      "Winona Ryder",
    ],
    answer: "Millie Bobby Brown",
  },
  {
    question: "Which film won the Academy Award for Best Picture in 2020?",
    options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
    answer: "Parasite",
  },
  {
    question: "Who directed the movie 'Inception'?",
    options: [
      "Christopher Nolan",
      "Martin Scorsese",
      "Quentin Tarantino",
      "Steven Spielberg",
    ],
    answer: "Christopher Nolan",
  },
  {
    question:
      "Which actor portrayed the character Tony Stark in the Marvel Cinematic Universe?",
    options: [
      "Chris Evans",
      "Mark Ruffalo",
      "Chris Hemsworth",
      "Robert Downey Jr.",
    ],
    answer: "Robert Downey Jr.",
  },
  {
    question: "What is the highest-grossing animated film of all time?",
    options: ["The Lion King (1994)", "Frozen", "Toy Story 4", "Shrek 2"],
    answer: "The Lion King (1994)",
  },
  {
    question:
      "Which classic film features the line 'Here's looking at you, kid'?",
    options: [
      "Casablanca",
      "Gone with the Wind",
      "The Godfather",
      "Citizen Kane",
    ],
    answer: "Casablanca",
  },
  {
    question:
      "What is the name of the fictional African nation in the movie 'Black Panther'?",
    options: ["Zamunda", "Wakanda", "Genovia", "Elbonia"],
    answer: "Wakanda",
  },
  {
    question: "Who directed the sci-fi film 'Blade Runner'?",
    options: [
      "James Cameron",
      "Ridley Scott",
      "George Lucas",
      "Steven Spielberg",
    ],
    answer: "Ridley Scott",
  },
  {
    question:
      "Which TV series is based on a book series by George R.R. Martin?",
    options: ["The Crown", "Westworld", "The Witcher", "Game of Thrones"],
    answer: "Game of Thrones",
  },
  {
    question:
      "Who played the iconic character of Hannibal Lecter in 'The Silence of the Lambs'?",
    options: [
      "Anthony Hopkins",
      "Mads Mikkelsen",
      "Brian Cox",
      "Javier Bardem",
    ],
    answer: "Anthony Hopkins",
  },
];

// Mythology
const mythologyEasyQuestions = [
  {
    question: "Who is the king of the Greek gods in Greek mythology?",
    options: ["Hades", "Apollo", "Zeus", "Ares"],
    answer: "Zeus",
  },
  {
    question: "In Roman mythology, who is the god of love and desire?",
    options: ["Venus", "Jupiter", "Mars", "Cupid"],
    answer: "Cupid",
  },
  {
    question: "Which Norse god is known as the trickster and shape-shifter?",
    options: ["Odin", "Thor", "Loki", "Freyja"],
    answer: "Loki",
  },
  {
    question:
      "In Egyptian mythology, who is the god of the afterlife and the dead?",
    options: ["Anubis", "Horus", "Ra", "Isis"],
    answer: "Anubis",
  },
  {
    question:
      "Which Greek hero is known for his strength and his Twelve Labors?",
    options: ["Achilles", "Perseus", "Heracles (Hercules)", "Theseus"],
    answer: "Heracles (Hercules)",
  },
  {
    question:
      "In Yoruba mythology (Nigerian), who is the god of thunder and lightning?",
    options: ["Obatala", "Sango", "Eshu", "Oya"],
    answer: "Sango",
  },
  {
    question:
      "In Igbo mythology (Nigerian), who is the goddess of the earth and fertility?",
    options: ["Amadioha", "Ogun", "Igbo", "Ala"],
    answer: "Ala",
  },
  {
    question: "Which Hindu god is known as the preserver of the universe?",
    options: ["Shiva", "Brahma", "Vishnu", "Krishna"],
    answer: "Vishnu",
  },
  {
    question:
      "In Chinese mythology, which legendary creature is often depicted as a guardian of treasure?",
    options: ["Dragon", "Phoenix", "Unicorn", "Turtle"],
    answer: "Dragon",
  },
  {
    question:
      "Who is the queen of the Greek gods and the goddess of marriage and family?",
    options: ["Athena", "Hera", "Demeter", "Artemis"],
    answer: "Hera",
  },
];

const mythologyMediumQuestions = [
  {
    question: "In Greek mythology, who is the god of the sea?",
    options: ["Zeus", "Hades", "Poseidon", "Apollo"],
    answer: "Poseidon",
  },
  {
    question: "Which Norse god is known as the 'God of Thunder'?",
    options: ["Loki", "Odin", "Thor", "Freyja"],
    answer: "Thor",
  },
  {
    question:
      "In Hindu mythology, who is the god of destruction and transformation?",
    options: ["Shiva", "Vishnu", "Brahma", "Krishna"],
    answer: "Shiva",
  },
  {
    question:
      "In Egyptian mythology, who is the god of the afterlife and the dead?",
    options: ["Ra", "Anubis", "Isis", "Horus"],
    answer: "Anubis",
  },
  {
    question:
      "Which legendary bird is said to rise from its own ashes in various mythologies?",
    options: ["Griffin", "Hippogriff", "Phoenix", "Sphinx"],
    answer: "Phoenix",
  },
  {
    question: "In Japanese mythology, what is the name of the sun goddess?",
    options: ["Izanami", "Amaterasu", "Tsukuyomi", "Susano-o"],
    answer: "Amaterasu",
  },
  {
    question:
      "In Greek mythology, who was cursed to turn everything into gold by touch?",
    options: ["Medusa", "Circe", "Midas", "Narcissus"],
    answer: "Midas",
  },
  {
    question:
      "In Chinese mythology, what animal is associated with good luck and prosperity?",
    options: ["Dragon", "Tiger", "Monkey", "Rabbit"],
    answer: "Dragon",
  },
  {
    question:
      "In Nigerian Igbo mythology, who is the supreme god and creator of the universe?",
    options: ["Amadioha", "Ogbanje", "Chukwu", "Oshun"],
    answer: "Chukwu",
  },
  {
    question:
      "Which Greek hero is known for his invulnerability due to a vulnerable heel?",
    options: ["Perseus", "Heracles (Hercules)", "Achilles", "Theseus"],
    answer: "Achilles",
  },
];

const mythologyHardQuestions = [
  {
    question:
      "In Greek mythology, who was the Titan who stole fire from the gods and gave it to humanity?",
    options: ["Prometheus", "Epimetheus", "Atlas", "Cronus"],
    answer: "Prometheus",
  },
  {
    question:
      "Which Norse god is known as the trickster and is often portrayed with a mischievous sense of humor?",
    options: ["Odin", "Freyja", "Thor", "Loki"],
    answer: "Loki",
  },
  {
    question:
      "In Egyptian mythology, who was the god of the afterlife and the judge of souls?",
    options: ["Ra", "Osiris", "Anubis", "Horus"],
    answer: "Anubis",
  },
  {
    question:
      "Which Hindu god is known as the preserver of the universe and is often depicted with blue skin?",
    options: ["Brahma", "Vishnu", "Shiva", "Ganesha"],
    answer: "Vishnu",
  },
  {
    question:
      "In Norse mythology, what is the name of the end-of-the-world event that leads to the destruction of the gods?",
    options: ["Ragnarok", "Fimbulwinter", "Ginnungagap", "Valhalla"],
    answer: "Ragnarok",
  },
  {
    question:
      "In Mesopotamian mythology, who was the god of wisdom and the patron god of Babylon?",
    options: ["Enlil", "Marduk", "Ishtar", "Ea"],
    answer: "Marduk",
  },
  {
    question:
      "Which Aztec god was associated with the sun, war, and human sacrifice?",
    options: ["Quetzalcoatl", "Tlaloc", "Huitzilopochtli", "Tezcatlipoca"],
    answer: "Huitzilopochtli",
  },
  {
    question: "In Japanese folklore, what kind of creature is a 'Tengu'?",
    options: ["Dragon", "Oni", "Kappa", "Goblin"],
    answer: "Goblin",
  },
  {
    question: "Which Celtic goddess is associated with war and sovereignty?",
    options: ["Morrigan", "Brigid", "Lugh", "Cernunnos"],
    answer: "Morrigan",
  },
  {
    question:
      "In Hindu mythology, who is the demon king of Lanka defeated by Lord Rama?",
    options: ["Kumbhakarna", "Ravana", "Vibhishana", "Sugriva"],
    answer: "Ravana",
  },
];

// Fashion
// Define the fashionEasyQuestions variable
const fashionEasyQuestions = [
  {
    question:
      "What is a popular accessory typically worn around the neck, often made of fabric or silk?",
    options: ["Earrings", "Necktie", "Bracelet", "Sunglasses"],
    answer: "Necktie",
  },
  {
    question:
      "Which type of clothing is designed to cover and protect the feet?",
    options: ["Gloves", "Socks", "Hats", "Scarves"],
    answer: "Socks",
  },
  {
    question:
      "What type of clothing is a one-piece garment that combines a top and pants?",
    options: ["T-shirt", "Sweater", "Dress", "Jeans"],
    answer: "Dress",
  },
  {
    question:
      "Which piece of clothing is worn on the lower part of the body and covers both legs separately?",
    options: ["Skirt", "Trousers (Pants)", "Blouse", "Vest"],
    answer: "Trousers (Pants)",
  },
  {
    question:
      "What do you call a small, decorative item often worn on a lapel or collar of a jacket?",
    options: ["Badge", "Brooch", "Cufflink", "Belt"],
    answer: "Brooch",
  },
  {
    question: "Which type of hat has a wide, flat brim all around?",
    options: ["Fedora", "Baseball Cap", "Beret", "Sunhat"],
    answer: "Sunhat",
  },
  {
    question: "What is a common fabric used to make jeans?",
    options: ["Silk", "Cotton", "Wool", "Velvet"],
    answer: "Cotton",
  },
  {
    question:
      "Which accessory is worn on the wrist and is often used to tell time?",
    options: ["Bracelet", "Ring", "Anklet", "Watch"],
    answer: "Watch",
  },
  {
    question:
      "What type of shoes are known for their high heels and are typically worn by women?",
    options: ["Sneakers", "Flip-flops", "Sandals", "High Heels"],
    answer: "High Heels",
  },
  {
    question:
      "What is the term for a decorative piece of fabric that hangs from the waist and is often worn with dresses or skirts?",
    options: ["Cape", "Shawl", "Apron", "Sash"],
    answer: "Sash",
  },
];

const fashionMediumQuestions = [
  {
    question: "Who is known for designing the iconic little black dress (LBD)?",
    options: [
      "Coco Chanel",
      "Ralph Lauren",
      "Donatella Versace",
      "Giorgio Armani",
    ],
    answer: "Coco Chanel",
  },
  {
    question: "Which fashion designer is famous for the red-soled shoes?",
    options: [
      "Christian Dior",
      "Manolo Blahnik",
      "Jimmy Choo",
      "Christian Louboutin",
    ],
    answer: "Christian Louboutin",
  },
  {
    question:
      "Which French fashion house is known for its interlocking double-C logo?",
    options: ["Dior", "Louis Vuitton", "Chanel", "Givenchy"],
    answer: "Chanel",
  },
  {
    question:
      "Who is the creative director of the luxury fashion brand Gucci as of 2021?",
    options: [
      "Miuccia Prada",
      "Riccardo Tisci",
      "Virgil Abloh",
      "Alessandro Michele",
    ],
    answer: "Alessandro Michele",
  },
  {
    question: "Which fashion designer is often associated with the wrap dress?",
    options: [
      "Vera Wang",
      "Stella McCartney",
      "Diane von Fürstenberg",
      "Oscar de la Renta",
    ],
    answer: "Diane von Fürstenberg",
  },
  {
    question:
      "What type of fabric is known for its distinctive tartan or plaid pattern?",
    options: ["Silk", "Denim", "Flannel", "Tweed"],
    answer: "Tweed",
  },
  {
    question:
      "Which Italian fashion designer is known for his luxury brand that features a Medusa logo?",
    options: ["Giorgio Armani", "Versace", "Dolce & Gabbana", "Prada"],
    answer: "Versace",
  },
  {
    question: "Who is the British fashion designer behind the label Burberry?",
    options: [
      "Alexander McQueen",
      "Vivienne Westwood",
      "Stella McCartney",
      "Christopher Bailey",
    ],
    answer: "Christopher Bailey",
  },
  {
    question:
      "Which fashion designer became famous for creating the punk fashion movement?",
    options: [
      "John Galliano",
      "Vivienne Westwood",
      "Karl Lagerfeld",
      "Alexander Wang",
    ],
    answer: "Vivienne Westwood",
  },
  {
    question: "What is the traditional Japanese garment known as?",
    options: ["Kilt", "Sari", "Kimono", "Lederhosen"],
    answer: "Kimono",
  },
];

const fashionHardQuestions = [
  {
    question:
      "Which French fashion designer is known for creating the 'New Look' in the 1950s?",
    options: [
      "Coco Chanel",
      "Christian Dior",
      "Yves Saint Laurent",
      "Gianni Versace",
    ],
    answer: "Christian Dior",
  },
  {
    question:
      "What is the name of the annual event that showcases the fashion collections of the Metropolitan Museum of Art's Costume Institute in New York?",
    options: [
      "New York Fashion Week",
      "Milan Fashion Week",
      "Paris Fashion Week",
      "Met Gala",
    ],
    answer: "Met Gala",
  },
  {
    question:
      "Which Italian fashion designer founded the luxury fashion brand Dolce & Gabbana?",
    options: ["Gucci", "Versace", "Prada", "Dolce & Gabbana"],
    answer: "Dolce & Gabbana",
  },
  {
    question:
      "Which fashion designer is known for popularizing the wrap dress in the 1970s?",
    options: [
      "Vera Wang",
      "Donatella Versace",
      "Diane von Fürstenberg",
      "Stella McCartney",
    ],
    answer: "Diane von Fürstenberg",
  },
  {
    question:
      "What is the name of the prestigious fashion award presented annually by the Council of Fashion Designers of America (CFDA)?",
    options: [
      "Fashion Icon Award",
      "Fashion Excellence Award",
      "Designer of the Year Award",
      "Vogue Fashion Award",
    ],
    answer: "Designer of the Year Award",
  },
  {
    question:
      "Which iconic fashion event is held in Florence, Italy, and features exhibitions, runway shows, and cultural events?",
    options: [
      "London Fashion Week",
      "Paris Haute Couture Fashion Week",
      "Milan Fashion Week",
      "Pitti Uomo",
    ],
    answer: "Pitti Uomo",
  },
  {
    question:
      "Which French fashion designer is known for introducing the tuxedo for women?",
    options: [
      "Coco Chanel",
      "Jean-Paul Gaultier",
      "Hedi Slimane",
      "Yves Saint Laurent",
    ],
    answer: "Yves Saint Laurent",
  },
  {
    question:
      "What is the name of the annual fashion show organized by Victoria's Secret featuring lingerie and top models?",
    options: [
      "Catwalk Angels",
      "Victoria's Secret Spectacular",
      "Heavenly Runway",
      "Victoria's Secret Fashion Show",
    ],
    answer: "Victoria's Secret Fashion Show",
  },
  {
    question:
      "Which British fashion designer is known for his punk-inspired designs and the Alexander McQueen brand?",
    options: [
      "Vivienne Westwood",
      "Burberry",
      "Paul Smith",
      "Alexander McQueen",
    ],
    answer: "Alexander McQueen",
  },
  {
    question:
      "What is the term for the practice of designing and creating custom-made clothing for individual clients?",
    options: ["Bespoke", "Ready-to-Wear", "Haute Couture", "Prêt-à-Porter"],
    answer: "Bespoke",
  },
];

/**
 * quizzes
 */

const quizzes = [
  {
    category: categories[0],
    difficulty: difficulties[0],
    questions: biologyEasyQuestions,
  },
  {
    category: categories[0],
    difficulty: difficulties[1],
    questions: biologyMediumQuestions,
  },
  {
    category: categories[0],
    difficulty: difficulties[2],
    questions: biologyHardQuestions,
  },
  {
    category: categories[1],
    difficulty: difficulties[0],
    questions: geographyEasyQuestions,
  },
  {
    category: categories[1],
    difficulty: difficulties[1],
    questions: geographyMediumQuestions,
  },
  {
    category: categories[1],
    difficulty: difficulties[2],
    questions: geographyHardQuestions,
  },
  {
    category: categories[2],
    difficulty: difficulties[0],
    questions: computerScienceEasyQuestions,
  },
  {
    category: categories[2],
    difficulty: difficulties[1],
    questions: computerScienceMediumQuestions,
  },
  {
    category: categories[2],
    difficulty: difficulties[2],
    questions: computerScienceHardQuestions,
  },
  {
    category: categories[3],
    difficulty: difficulties[0],
    questions: generalKnowledgeEasyQuestions,
  },
  {
    category: categories[3],
    difficulty: difficulties[1],
    questions: generalKnowledgeMediumQuestions,
  },
  {
    category: categories[3],
    difficulty: difficulties[2],
    questions: generalKnowledgeHardQuestions,
  },
  {
    category: categories[4],
    difficulty: difficulties[0],
    questions: musicEasyQuestions,
  },
  {
    category: categories[4],
    difficulty: difficulties[1],
    questions: musicMediumQuestions,
  },
  {
    category: categories[4],
    difficulty: difficulties[2],
    questions: musicHardQuestions,
  },
  {
    category: categories[5],
    difficulty: difficulties[0],
    questions: moviesAndEntertainmentEasyQuestions,
  },
  {
    category: categories[5],
    difficulty: difficulties[1],
    questions: moviesAndEntertainmentMediumQuestions,
  },
  {
    category: categories[5],
    difficulty: difficulties[2],
    questions: moviesAndEntertainmentHardQuestions,
  },
  {
    category: categories[6],
    difficulty: difficulties[0],
    questions: mythologyEasyQuestions,
  },
  {
    category: categories[6],
    difficulty: difficulties[1],
    questions: mythologyMediumQuestions,
  },
  {
    category: categories[6],
    difficulty: difficulties[2],
    questions: mythologyHardQuestions,
  },
  {
    category: categories[7],
    difficulty: difficulties[0],
    questions: fashionEasyQuestions,
  },
  {
    category: categories[7],
    difficulty: difficulties[1],
    questions: fashionMediumQuestions,
  },
  {
    category: categories[7],
    difficulty: difficulties[2],
    questions: fashionHardQuestions,
  },
];
