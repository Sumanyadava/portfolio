import React from 'react'
import moduleName from "../../styles/adminStyle/admin.scss"
const Admin = () => {
    
    return (
        <div>
            <main>
                    <div className="cur_doing">
                        whaat i am currently doing
                    </div>
                <div className="section_M"></div>
                <div className="section_C">
                    
                    <div className="start_admin">
                        <div className="cards_admin">
                            <div className="icon_card">SKILL</div>
                            <div className="number">256</div>
                        </div>
                        <div className="cards_admin">total completed project</div>
                        <div className="cards_admin">total task</div>
                        <div className="cards_admin">reject task</div>
                    </div>
                    <div className="middle_admin">
                        <div className="write_admin">
                            <h3  className="head_card_middle">current working project</h3>
                            <div className="bottom_card_middle">
                                write here
                            </div>
                        </div>
                        <div className="read_admin">Future projecr</div>
                        <div className="read_admin">Future Plans</div>
                    </div>
                    <div className="last_admin">
                    <div className="habbit_day">
                        day framework 
                        habbit ruitien 
                        how start your day
                    </div>
                    <div className="current">
                            <div className="cur_goals">
                            
                            </div>
                            <div className="cur_problem"></div>
                        </div>
                        
                        <div className="last_stick">
                            <div className="prep_stats">prepation of all story enery food sol new prep</div>
                            <div className="write_doc">
                            a document research
                            </div> 

                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default Admin
