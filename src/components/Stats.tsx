import { PiUserBold } from 'react-icons/pi'
export default function Stats() {
    return (
        <div className="lg:flex justify-between lg:px-16 py-10">
            <div>
                <h2 className="text-5xl font-bold text-primary justify-center mt-5">The numbers <span className="text-neutral">says it all.</span></h2>
            </div>
            <div className="stats  justify-between items-center" >

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="text-4xl font-semibold py-4 ">Total Readers</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="text-4xl font-semibold py-4">Total Books</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <span className='text-4xl'><PiUserBold /></span>
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">86%</div>
                    <div className="text-4xl font-semibold py-4">Positive</div>
                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                </div>

            </div>
        </div>
    )
}
