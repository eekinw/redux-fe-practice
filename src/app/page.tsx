'use client'
/** @see https://v0.dev/t/wnVYg8cWZjK */
import ProgressBar from "@/components/ProgressBar";
import ProgressContainer from "@/components/ProgressContainer";
import Section from "@/components/Section";
import { useAddSection, useDeleteSection } from '@/hooks/useSection';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export default function Home() {
  const { add } = useAddSection();

  const sections = useSelector((state: RootState) => state.section.sections)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="flex justify-center mb-10">
        <button
          onClick={add}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Section
        </button>
      </div>
      <div className="container space-y-12 px-4 md:px-6">
        <ProgressContainer>
          <ProgressBar />
        </ProgressContainer>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {sections.map((section) => (
            <Section key={section.id} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}

