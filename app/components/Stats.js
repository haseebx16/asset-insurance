import stats from "./data/stats";

const Stats = () => (
    <div className="flex justify-center">
        <section className={`flex w-4/5 justify-center rounded-md flex-row bg-sky-900 text-gray-200 flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat) => (
            <div key={stat.id} className={`flex-1 justify-start items-center flex flex-row m-3`} >
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43.16px]">
                {stat.value}
                </h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
                {stat.title}
                </p>
            </div>
            ))}
        </section>
  </div>
);

export default Stats;