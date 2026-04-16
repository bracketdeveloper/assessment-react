
const HeroTestimonialCard = ({image, name, description})=>{
    return (
        <li className="testimonial-card">
            <img src={image} alt={`Portrait of ${name}`} width="48" height="48"
                 loading="lazy"/>
            <div>
                <p className="t-name">{name}</p>
                <p className="t-body">{description}</p>
            </div>
        </li>
    )
}
export default HeroTestimonialCard