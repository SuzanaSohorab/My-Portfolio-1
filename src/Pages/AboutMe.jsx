import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className="bg-blue-50 dark:bg-blue-900 text-gray-900 dark:text-white px-8 md:px-20 py-16 transition duration-500">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-4xl font-bold mb-4 text-blue-800 dark:text-blue-200">About Me</h2>
                
                <p className="text-lg leading-relaxed text-blue-700 dark:text-blue-300">
                    Hi, I’m <span className="font-semibold text-blue-500">Suzana Sohorab Shayli</span> — 
                    a passionate Web Developer and Software Engineer from Bangladesh. I love creating 
                    clean, functional, and visually appealing digital experiences that bring ideas to life.
                </p>

                <p className="text-lg leading-relaxed text-blue-700 dark:text-blue-300">
                    I specialize in <span className="font-semibold text-blue-500">React.js, Tailwind CSS, and JavaScript</span>. 
                    I’m also learning backend technologies like Node.js and MongoDB to become a 
                    full-stack developer. I enjoy solving problems, optimizing performance, and 
                    continuously improving my craft.
                </p>

                <p className="text-lg leading-relaxed text-blue-700 dark:text-blue-300">
                    My mission is to build modern, user-centered web solutions that make life easier 
                    and inspire others to embrace technology.
                </p>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Tech Stack</h3>
                    <img
                        src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nodejs,mongodb,git,firebase"
                        alt="Tech Stack"
                        className="mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
