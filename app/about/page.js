export default function About() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="max-w-3xl px-6 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-blue-800 mb-4">
                    Welcome to My Blog
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mt-2">
                    I'm a passionate software engineer with a love for writing and sharing knowledge.
                    Here, you’ll find a curated collection of insights, experiences, and lessons
                    I've gathered from working on a variety of exciting projects.
                </p>
            </div>

            <div className="mt-8 grid gap-6 px-6 text-gray-700 max-w-3xl text-lg">
                <p className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
                    My goal is to inspire others through my journey, whether you’re a beginner
                    just getting started or an experienced professional looking to sharpen your skills.
                </p>
                <p className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
                    Dive into articles covering everything from coding best practices to
                    personal reflections on tech trends and industry news.
                </p>
                <p className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
                    I believe learning is a lifelong journey. I hope you find something
                    valuable here that makes your journey just a bit easier.
                </p>
            </div>

            <div className="mt-10">
                <a href="/blog" className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition transform hover:-translate-y-1">
                    Explore My Blog
                </a>
            </div>
        </div>
    );
}
