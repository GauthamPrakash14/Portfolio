import Workitem from "./Workitem"

const data = [
    {
        year: 2022,
        title: 'MSc Advanced Computer Science - University of Leicester',
        duration: '1 Year',
        details: 'Modules: Analysis and design of algorithms, Advanced C++, Big data and predictive analysis,Computational intelligence and software engineering, Mobile and web applications, Internet and cloud computing, Generative Development.'
    },
    {
        year: 2021,
        title: 'Associate Software Engineer - KeyValue Software Systems',
        duration: '1 Year 8 months',
        details: 'Worked as part of the development team of LUMMOSHOP- Indonesia which is one of the popular E-Commerce platforms in indonesia. Been part of developing features that run-in growth to the platform such as merchant referral, merchant academy, merchant login and sign up. Used React, Redux Toolkit, MUI, Storybooks, HTML, CSS, and JavaScript to develop front end pages of web application. Handled user data using Nodejs, MongoDB and PostgreSQL. Agile Scrum. Code review, GitHub, Version control. Google cloud console, Google cloud storage buckets.'
    },
    {
        year: 2016,
        title: 'Bachelor of Technology in Computer Science - Kerala Technological University',
        duration: '4 Years',
        details: 'Modules: DBMS, Python Programming, Object oriented programming concepts, Data Structures, Advanced Java. Mathematics, Graph Theory, Design and analysis of algorithms, Computer organization and architecture, Compiler design, Operating system design.'
    },
]
const Work = () => {
  return (
    <div id='timeline' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] py-8">Timeline</h1>
        {data.map((item, idx)=>(
            <Workitem 
                key={idx} 
                year={item.year}
                title={item.title}
                duration={item.duration} 
                details={item.details} 
            />
        ))}
    </div>
  )
}

export default Work