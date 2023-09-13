import stats from "./data/stats";
import { font2 } from "./font/poppins";

const Stats = () => (
  <div className={`${font2.className} flex justify-center`}>
    <section className={`flex w-4/5 justify-center sm:rounded-md xs:rounded-md lg:rounded-full flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`justify-center items-center flex flex-col m-3`}>
          <h4 className="text-gray-200 font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43.16px] mb-2">
            {stat.value}
          </h4>
          <p className="text-sky-500 font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </div>
);

export default Stats;
