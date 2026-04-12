import ServiceSection from "./Servicessection"

export default function AboutUs(){
    return (
        <div className="pageSection">
            <h1>About Us</h1>
            <p>
                Welcome to the Lost and Found App — a platform dedicated to helping
                people reunite with their lost belongings. We believe no lost item
                should stay lost for long.
            </p>
            <div>
            <ServiceSection />
            </div>
        </div>
    )
}