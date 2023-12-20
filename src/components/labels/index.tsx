import { labels } from "../../data";

const Labels = () => {

    return (
        <div className="pb-16 pt-4 w-full gap-4 px-4 relative flex items-center justify-center max-w-6xl mx-auto" >
            <div className="flex items-center justify-center flex-wrap gap-6 overflow-auto" >
                {
                    labels.map((lbl) => (
                        <div key={lbl._id} className="px-6 w-40" >
                            <div className="flex items-center justify-center" >
                                <img src={lbl.lbl} alt="label" className="object-center" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Labels
