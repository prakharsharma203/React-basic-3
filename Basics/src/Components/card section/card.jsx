import "./card.css"

export function Card(){
    return(
        <>
        <div className="card">
        <div>
        <img src="data:image/png;base64,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" alt="" />
        <p>2,500</p>
        <p>enterprise organizations successfully launched</p>
        </div>
        <div>
            <img src="data:image/png;base64,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" alt="" />
            <p>45,000</p>
            <p>enterprise users onboarded seamlessly</p>
        </div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA84ah9dowUfVmWoySK14ONmPAe67DyokCYg&s" alt="" />
            <p>200,000</p>
            <p>professionals trained on product and strategy</p>
        </div>
        </div>
        </>
    )
}