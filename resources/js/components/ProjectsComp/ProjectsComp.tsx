import ProjectCard from './ProjectCard';

interface ProjectData {
    id: number;
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;
    aosDelay: number;
}

const ProjectsData: ProjectData[] = [
    {
        id: 1,
        image: 'storage/projects/kusen-jendela-kaca.jpg',
        title: 'Pemasangan Kusen Jendela Kaca',
        description: 'Pekerjaan pemasangan kusen jendela kaca ornamen di Gunung Sindur',
        author: 'Tarno',
        date: 'April 22, 2022',
        aosDelay: 0,
    },
    {
        id: 2,
        image: 'storage/projects/pintu-geser.jpg',
        title: 'Pemasangan Pintu Geser',
        description: 'Pemasangan pintu geser di babakan madang Sentul',
        author: 'Tarno',
        date: 'April 22, 2022',
        aosDelay: 300,
    },
    {
        id: 3,
        image: 'storage/projects/kandang-kucing.jpg',
        title: 'Pembuatan Kandang Kucing',
        description: 'Pekerjaan pembuatan kandang kucing di Cimanggu Bogor',
        author: 'Tarno',
        date: 'April 22, 2022',
        aosDelay: 500,
    },
];

const ProjectsComp = () => {
    return (
        <>
            <section className="bg-gray-100 py-10 pb-14 sm:place-items-center dark:bg-gray-900 dark:text-white">
                <div className="container">
                    <h1 data-aos="fade-up" className="border-primary/50 my-8 border-l-8 py-2 pl-2 text-3xl font-semibold">
                        Our Projects
                    </h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {ProjectsData.map((Project) => (
                            <ProjectCard key={Project.id} {...Project} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsComp;
