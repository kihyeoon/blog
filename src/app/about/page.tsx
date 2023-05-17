import Hero from "@/components/Hero";

const H2_CLASS = "text-lg font-semibold text-blue-500";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="my-5 flex w-full flex-col items-center bg-slate-200 p-5 shadow-md">
        <h2 className={H2_CLASS}>I Am</h2>
        <p>업무에서 주도적으로 성장 포인트를 찾아냅니다.</p>
        <p>UX를 개선해 비즈니스 성장에 기여합니다.</p>
        <h2 className={`${H2_CLASS}  mt-5`}>Project</h2>
        <p>Pillivery</p>
        <p>Life-Chart</p>
        <h2 className={`${H2_CLASS}  mt-5`}>Skills</h2>
        <p>JavaScript, TypeScript</p>
        <p>React, Next, Redux</p>
        <p>Styled-components, Tailwind CSS</p>
      </section>
    </>
  );
}
