import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Raymond. I'm an aspiring software, mobile, and web developer. I am also interested in Cybersecurity, and IT. I am looking to gain experience in any related fields.</p>

                <p>My dream is to one day through continuous learning, and experience, become a full stack engineer. I enjoy understanding all aspects of a project. And would love to be able to give input on all levels.</p>

                <p>I'm always learning new things, weather asked or not. VikingCoin was a great school project that I did for senior design I didnt choose it, I was placed out of my comfort zone and learned a lot and got to experience some things. </p>

                <p>Through creating VikingCoin my professor asked us to help him and his PHD student out with their workshop which we took advantage of as volunteers to aid blockchain enthusiasts with troubleshooting their own blockchain's and wallets.</p>
            </Content>
        </div>
    );
}

export default AboutPage;