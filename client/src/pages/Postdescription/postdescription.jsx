import React from "react";
import "./postdescription.css";



const Postdescription = () => {
return (
<>
    <div class="hero-container">
        <img class="hero" src="https://images.unsplash.com/photo-1467189386127-c4e5e31ee213?auto=format&fit=crop&w=1350&q=80') no-repeat center center"/>
        <div class="hero-stuff">
            <h1>POST NAME/ TITLE</h1>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
            </div>
        </div>
    </div>

    <p>Short POST DESCRIPTION</p>

    <div>
        <h3>About this place</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi numquam suscipit officiis libero. At, molestiae ipsam rem dolores ullam reprehenderit itaque officia explicabo exercitationem eius nam veritatis quibusdam sit!
        </p>
    </div>
</>

);
};

export default Postdescription;