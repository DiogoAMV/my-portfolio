"use client";
import EducationCard from "@/components/EducationCard";
import { CourseProps, education } from "../data";
import Text from "@/components/Text";
import { useState, useEffect } from "react";

export default function Demo() {
  const [coursesData, setCoursesData] = useState<CourseProps[]>();

  useEffect(() => {
    const data = education;
    setCoursesData(data);
  }, []);

  const phrase = "Invest\n in the **future**,\n **study**.";

  return (
    <main className="flex flex-col w-full p-8 sm:p-20 md:p-28 xl:p-36 2xl:p-52">
      <Text type="phrase">{phrase}</Text>

      <ul className="flex flex-col w-full rounded-xl overflow-hidden mt-4 gap-[1px]">
        {coursesData &&
          coursesData.map((course) => (
            <li key={course.id}>
              <EducationCard
                id={course.id}
                title={course.title}
                subtitle={course.subtitle}
                image={course.image}
              />
            </li>
          ))}
      </ul>
    </main>
  );
}
