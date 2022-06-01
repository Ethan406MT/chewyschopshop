import React from "react";
import './aboutus.css';
import photo from '../../assets/Screenshot_12.png'

const Aboutus = () => {
    return (
        <body>
        <section class="about"> 
            <div className="ccs__about">
                <img className="usphoto" src={photo} alt="AboutusImage"/>
                <div className="box" >
                    <h1>About the shop</h1>
                    <p> I grew up on the crime side, the New York Times side
Stayin' alive was no jive
Had secondhands, Mom's bounced on old man
So then we moved to Shaolin land
A young youth, yo, rockin' the gold tooth, 'Lo goose
Only way I begin the G off was drug loot
And let's start it like this, son
Rollin' with this one and that one, pullin' out gats for fun
But it was just a dream for the teen
Who was a fiend, started smokin' woolies at 16
And runnin' up in gates and doin' hits for high stakes
Makin' my way on fire escapes
No question, I would speed for cracks and weed
The combination made my eyes bleed
No question, I would flow off and try to get the dough all
Stickin' up white boys in ball courts
My life got no better, same damn 'Lo sweater
Times is rough and tough like leather
Figured out I went the wrong route
So I got with a sick-ass clique and went all out
Catchin' keys from 'cross seas
Rollin' in MPV's, every week we made 40 G's
Yo, nigga, respect mine, or here go the TEC-9
Ch-chick-pow! Move from the gate now
                    </p>
                </div>
                </div>
        </section>
        </body>
        
        
    )
}
export default Aboutus