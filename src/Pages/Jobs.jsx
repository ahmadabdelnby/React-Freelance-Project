
import ProjectCard from '../Shared/Cards/projectCard';
import ProjectSlider from '../Shared/projectsSlider/projectSlider';

function Jobs() {
const sampleProjects = [
    {
      title: "Web Developer Needed for small fixes",
      postedTime: "1 hour ago",
      jobType: "Fixed-price",
      experienceLevel: "Intermediate",
      budget: 5,
      description: "We are seeking an experienced web developer to perform updates and fixes on our existing website. The ideal candidate will have a strong background in web development and be proficient in HTML and PHP. Experience with WordPress is a plus. This is a just a small fixes task on existing project.",
      skills: ["HTML5", "PHP", "CSS 3", "WordPress"],
      paymentVerified: false,
      clientRating: 0,
      clientSpent: 0,
      clientCountry: "United Kingdom",
      proposals: "5 to 10",
      link: "#"
    },
    {
      title: "Full Stack Developer for E-commerce Website",
      postedTime: "3 hours ago",
      jobType: "Hourly",
      experienceLevel: "Expert",
      budget: 50,
      description: "Looking for an experienced full-stack developer to build a modern e-commerce website with React and Node.js. Must have experience with payment gateway integration and responsive design.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Payment Integration"],
      paymentVerified: true,
      clientRating: 5,
      clientSpent: 15000,
      clientCountry: "United States",
      proposals: "15 to 20",
      link: "#"
    },
    {
      title: "Mobile App UI/UX Designer Needed",
      postedTime: "5 hours ago",
      jobType: "Fixed-price",
      experienceLevel: "Intermediate",
      budget: 800,
      description: "We need a talented UI/UX designer to create modern and intuitive designs for our mobile application. Experience with Figma is required.",
      skills: ["Figma", "UI Design", "UX Design", "Mobile Design", "Prototyping"],
      paymentVerified: true,
      clientRating: 4,
      clientSpent: 8500,
      clientCountry: "Canada",
      proposals: "10 to 15",
      link: "#"
    }
  ];

  return (
    <div className="page-content">
       <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      {/* Projects Slider */}
      <ProjectSlider />
      
      {/* Projects List */}
      <div style={{ maxWidth: '900px', margin: '2rem auto 0' }}>
        <h2 style={{ marginBottom: '1.5rem', color: '#001e00', fontSize: '1.5rem' }}>
          Available Projects
        </h2>
        {sampleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Jobs