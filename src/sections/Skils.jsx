import SkillCard from '../components/SkillCard.jsx';

const Skills = () => {
  const developmentSkills = [
    'Solidity', 'JavaScript', 'Go Lang', 'Python', 'Node.js', 'Ruby', 'HTML', 'CSS'
  ];

  const frontendSkills = [
    'React-JS', 'Web3-React', 'React-Native', 'React-Redux', 'Redux-Saga', 'TypeScript',
    'Immutable-JS', 'Reselect', 'Bootstrap', 'Reactstrap', 'Material-Ui'
  ];

  const backendSkills = [
    'Express.js (Senior)', 'Web3', 'Web3-eth', 'Flask', 'Ruby On Rails'
  ];

  const softwareSkills = [
    'Databases: MySQL, MongoDB', 'OS: Windows, Mac OS', 'Servers: Nginx'
  ];

  const versionControlSkills = ['GIT'];

  const environmentsSkills = ['WebStorm', 'Intellij', 'Command Line'];

  return (
    <section className="py-16 bg-black-700">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Skills & Expertise</h1>
          <p className="text-xl sm:text-2xl">Here’s a showcase of my development expertise across various domains</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Development Skills</h2>

        {/* Development Skills Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Development" skills={developmentSkills} />
          <SkillCard title="Front-End" skills={frontendSkills} />
          <SkillCard title="Back-End" skills={backendSkills} />
          <SkillCard title="Software" skills={softwareSkills} />
          <SkillCard title="Version Control Systems" skills={versionControlSkills} />
          <SkillCard title="Environments" skills={environmentsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
