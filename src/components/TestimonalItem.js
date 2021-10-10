import React from 'react'

const TestimonalItem = (props) => {
    return (
        <div class="testimonial-item">
        <div class="testimonial-image">
            <img src={props.resim} alt="/"/>
        </div>
        <div class="testimonial-content">
            <p class="testimonial-comment">{props.mesaj}</p>
            <h6 class="testimonial-name">{props.isim}, <span class="testimonial-job">{props.unvan}</span></h6>
        </div>
    </div>
    )
}

export default TestimonalItem
