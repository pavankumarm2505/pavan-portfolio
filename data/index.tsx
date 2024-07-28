export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    {name: "Experience", link:"#experience"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "",
      // I prioritize client collaboration, fostering open communication 
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I would love to travel around the world but have to earn first😁",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently developing an app that will reach 1000 users",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to work on a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "GimmeJob",
      des: "An AI Helps career aspirants in 30+ more professions for their interviews, both technical and behavioral",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "gimmejob.com/",
    },
    {
      id: 2,
      title: "Smart Brain",
      des: "Detects faces in any image that the user uploads, keeps track of the number of uploads",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "github.com/pavankumarm2505/smartbrain",
    },
    {
      id: 4,
      title: "UNO",
      des: "Uno game which has the option to play both vs friend or the user can play and try to win against the AI.",
      img: "/p3.svg",
      iconLists: ["/p20.svg"],
      link: "github.com/pavankumarm2505/Uno",
    },
    {
      id: 3,
      title: "Cosmochat UI",
      des: "CosmoChat UI is an advanced chat interface built with React and Redux, integrating OpenAI's GPT for intelligent..",
      img: "/p4.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", ],
      link: "github.com/pavankumarm2505/cosmoschat-ui",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Pavan was a remarkable experience. His deep technical expertise, combined with an unwavering commitment to excellence, made our project a resounding success. Pavan's ability to tackle complex problems and deliver innovative solutions is unparalleled. If you're looking for a talented engineer who can bring your vision to life, Pavan is your go-to person.",
      name: "Nihar Hiten Patel",
      title: "2 time Intern at UPS, Intern at HP and coming as Full time software engineer",
    },
    {
      quote:
        "Working with Pavan was a game-changer for our team. His proactive approach, coupled with exceptional coding skills, ensured that our project was not only completed on time but exceeded all expectations. Pavan's passion for development and his collaborative spirit make him an invaluable asset to any team. If you need a developer who is dedicated and driven, look no further than Pavan.",
      name: "Koushik Yaganti",
      title: "Intern at UPS, Intern at Novanta",
    },
    {
      quote:
        "Pavan's work ethic and attention to detail are truly impressive. Throughout our collaboration, he consistently demonstrated a strong understanding of our needs and delivered high-quality results. Pavan's enthusiasm and innovative thinking have significantly contributed to the success of our projects. I highly recommend Pavan to anyone seeking a skilled and reliable software engineer.",
      name: "Rishil Shah",
      title: "Intern at Galilo, Intern at UPS",
    },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    // },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineering Intern, Radical X",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "HeadStarter Tech Fellow",
      desc: "On path to create an app that reaches 1000 user downloads or generates $1000 revenue",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Software Engineering Intern, Vision Computers",
      desc: "Collobarated with a team of software engineers to develop an e-commerce website for a company",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Research Assistant CAART Lab",
      desc: "Created a user interface for specially abled people via voice assist to control a robotic arm mounted on a wheelchair",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/pavankumarm2505"
    },
    
    {
      id: 2,
      img: "/link.svg",
      url: "https://www.linkedin.com/in/pavankumarm2505"
    },
  ];