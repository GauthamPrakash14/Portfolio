import ProjectItem from "./ProjectItem"
import projectImg from '../assets/project.png';

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] py-8">Projects</h1>
        <p className="text-center py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusantium placeat hic harum explicabo laboriosam repellat vitae aspernatur, praesentium earum consectetur unde doloribus obcaecati nulla aliquid temporibus sed excepturi nisi.
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
          <ProjectItem img={projectImg} title='Bug Tracking tool' />
          <ProjectItem img={projectImg} title='Calculator' />
          <ProjectItem img={projectImg} title='To do' />
          <ProjectItem img={projectImg} title='Weather app' />
        </div>
    </div>
  )
}

export default Projects