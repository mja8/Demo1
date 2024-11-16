import React, { useEffect, useState } from 'react';
import school1 from '../assets/images/image1.jpg';
import school2 from '../assets/images/image2.jpg';
import school3 from '../assets/images/image3.jpg';
import school4 from '../assets/images/image4.jpg';


const AboutUs = () => {
    const [animateImages, setAnimateImages] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateImages(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            {/* Section Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900 text-center">
                About Our School
            </h1>

            {/* Animated Images */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {/* Image 1 */}
                <img
                    src={school1}
                    alt="School 1"
                    className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transform transition-transform duration-1000 delay-150 ${animateImages ? 'translate-x-0 opacity-100' : '-translate-y-20 opacity-0'
                        }`}
                />
                {/* Image 2 */}
                <img
                    src={school2}
                    alt="School 2"
                    className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transform transition-transform duration-1000 delay-150 ${animateImages ? 'translate-x-0 opacity-100' : '-translate-y-20 opacity-0'
                        }`}
                />
                {/* Image 3 */}
                <img
                    src={school3}
                    alt="School 3"
                    className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transform transition-transform duration-1000 delay-300 ${animateImages ? 'translate-x-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                />
                {/* Image 4 */}
                <img
                    src={school4}
                    alt="School 4"
                    className={`w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-lg transform transition-transform duration-1000 delay-450 ${animateImages ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                        }`}
                />
            </div>

            {/* School Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl text-center px-4">
                Welcome to Airforce School Darbhanga! Our school is committed to fostering
                excellence in education, nurturing creativity, and inspiring our students to
                become leaders of tomorrow. We provide a safe and inclusive environment where
                students are encouraged to grow academically, socially, and emotionally.
                Our school's mission is to learn leadership, the common core, and relationships for life. Our mission is to provide a safe, disciplined learning environment that empowers all students to develop their full potential. We feel strongly about helping to build leaders that have the ability to succeed in whatever endeavor they undertake. Winning is not always the measure of success. Our students understand the "Win, win" philosophy and use it in their daily life. Common standards keeps us focused on learning appropriate content and preparing our students to graduate. Last but just as importantly, setting examples for our students of meaningful and lasting relationships will go with them throughout their lifetime.

                Berry Elementary School is a PreK-6 Title I school in Fayette County. It is located in rural Berry, Alabama, a small town situated 20 miles from the county seat. Students come from several small communities which are similar in economic status and diversity while most live in the outlying areas in the county. Our student population is made of 87% Caucasian, 6% African American, 6% Multi-race, and 1% Hispanic. 64% of BES students are eligible for free or reduced lunches. The Special Education students, which are 12% of our population, are served by two resource teachers and three paraprofessionals. One hundred percent of the teachers hold a bachelor's degree and 57% have a masters level or a specialty degree. Difficult economic times have hit the area resulting in buy-out and closing of a local mine. Over the past three years, enrollment has dropped by 3%.

                While adopting our own unique mission stated in the introduction, we embrace the district mission of providing a safe, disciplined learning environment that empowers all students to develop their full potential. We strongly agree with and uphold the district's belief statement: "In a consistently safe and healthy environment, all students can become responsible, respectful, and resourceful. We believe students learn best when actively engaged in the learning process. Education is a collaborative partnership involving school, family, and community." At Berry Elementary School, we strive to build lasting relationships among students and staff that encourage open discussion and provide activities that develop our students' strengths.
            </p>
        </div>
    );
};

export default AboutUs;

