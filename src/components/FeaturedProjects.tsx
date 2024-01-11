import { MockData } from '../mock/HomeProjects';

// interface Project {
//   imageUrl: string;
//   videoUrl: string;
//   techStack: string[];
//   category: string;
//   projectName: string;
//   description: string;
//   projectUrl: string;
// }

export const FeaturedProjects = () => {
  const featuredData = MockData[0]?.featuredData || [];
  return (
    <div>
      {featuredData.map((project, index) => (
        <div key={index}>
          <img src={project.imageUrl} alt={project.projectName} />
          <h5>{project.projectName}</h5>
          <div>
            <ul>
              <li>{project.techStack}</li>
            </ul>
            <p>{project.category}</p>
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};
