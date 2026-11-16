export const PLAYGROUND_PRESETS = [
  {
    id: "router",
    title: "1. Router Dispatcher (web.php)",
    description: "Simulate how web.php reads $_GET['page'] and dispatches execution to controller actions.",
    defaultPage: "home",
    options: ["home", "about", "contact", "login", "unknown"],
    explanation: "web.php checks if $_GET['page'] is set and executes the corresponding method on HelloWorld. If missing, it defaults to home."
  },
  {
    id: "view_engine",
    title: "2. Template Engine (view() & extract())",
    description: "Watch how helpers.php uses output buffering and extract() to pass data into PHP templates.",
    defaultTemplate: "home",
    defaultData: [
      { id: 1, name: "Borno", email: "borno@gmail.com", mobile: "0181818188", address: "Dhaka" },
      { id: 2, name: "Patwari", email: "patwari@gmail.com", mobile: "0181818188", address: "Sirajgonj", hobby: "standup" },
      { id: 3, name: "Golam", email: "golam@gmail.com", mobile: "0181818188", address: "Chittagonj" },
      { id: 4, name: "Nasir (You!)", email: "nasir@example.com", mobile: "0170000000", address: "Dhaka", hobby: "Web Dev" }
    ],
    explanation: "extract($data) takes the key 'students' and turns it into $students inside the view scope. ob_start() traps the generated HTML into memory."
  },
  {
    id: "oop_car",
    title: "3. OOP Object Instantiator (Car.php)",
    description: "Instantiate a Car object, store it on the virtual memory heap, and execute its methods.",
    defaultValues: {
      name: "Axios - Hybrid",
      model: "2022",
      color: "Red"
    },
    methods: ["allInfo", "getName", "getModel", "getColor"],
    explanation: "$car = new Car() calls __construct() to assign properties. Methods access instance state using $this->property."
  },
  {
    id: "new_class_bug",
    title: "4. OOP Variable Variables Spot-The-Bug (NewClass.php)",
    description: "Inspect the classic classroom typo: $this->$name vs $this->name.",
    defaultValues: {
      name: "Nasir",
      age: 21,
      profession: "Web Developer"
    },
    explanation: "In PHP, $this->$name looks for a variable called $name to use its string as the property name! $this->name directly accesses the property."
  },
  {
    id: "psr4_resolver",
    title: "5. Composer PSR-4 Path Resolver",
    description: "Type any Fully Qualified Class Name (FQCN) and watch Composer resolve it to a physical file path.",
    defaultInput: "App\\classes\\HelloWorld",
    presets: [
      "App\\classes\\HelloWorld",
      "App\\classes\\Car",
      "App\\classes\\NewClass",
      "App\\models\\Student",
      "OtherNamespace\\Utility"
    ],
    explanation: "Composer maps 'App\\\\' to 'app/'. Sub-namespaces become directories and the class name becomes the PHP file name."
  }
];
