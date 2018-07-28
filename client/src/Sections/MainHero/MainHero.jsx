import React from 'react'


const MainHero = ()=> {
    return (
        <div className="bg-primary">
            <div className="pt-5">
                <div className="container">
                    <div className="row align-items-center flex-md-row-reverse">
                        <div className="col-md-6 text-white">
                            <h1>Feature Branch</h1>
                            <h3>The best place to experiment wth coding</h3>
                        </div>
                        <div className="col-md-6">
                            <img src="/img/homepage-hero.png" className="w-100 mt-3 mt-md-0" alt="Mihai-hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHero
