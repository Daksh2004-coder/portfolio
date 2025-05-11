
function openInNewTab(url) {
    const win = window.open(url, '_blank');
    win.focus();

  }







button = document.querySelector("#button")
button.addEventListener("click", function(){
    openInNewTab('https://drive.google.com/file/d/1JsNPW9ieCizqOOyvl9PGcRHXC6a_lBmN/view?usp=sharing')
})

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".scroll-link").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("#nav_bar a");

    navLinks.forEach((link, index) => {
        // Create tooltip element
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        
        // Tooltip text based on icon order
        const tooltips = ["Home", "Projects", "About Me", "Skills", "Contact"];
        tooltip.innerText = tooltips[index];

        // Style tooltip
        tooltip.style.position = "absolute";
        tooltip.style.top = "-30px";
        tooltip.style.left = "50%";
        tooltip.style.transform = "translateX(-50%)";
        tooltip.style.backgroundColor = "black";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px 10px";
        tooltip.style.borderRadius = "5px";
        tooltip.style.fontSize = "12px";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.opacity = "0";
        tooltip.style.transition = "opacity 0.3s ease-in-out";
        tooltip.style.pointerEvents = "none";

        // Position tooltip relative to link
        link.style.position = "relative";
        link.appendChild(tooltip);

        // Show/hide tooltip on hover
        link.addEventListener("mouseover", () => {
            tooltip.style.opacity = "1";
        });

        link.addEventListener("mouseout", () => {
            tooltip.style.opacity = "0";
        });
    });
});





var tl = gsap.timeline()

tl.from("#logo, #img",{
    y:-40,
    duration:0.4,
    delay:0.2,
    opacity:0,
    stagger:0.15

})

tl.from(".img , #text", {
    y:-40,
    duration:0.4,
    opacity:0,
    stagger:0.15

})

tl.from("#button", {
    y:-70,
    duration:0.4,
    opacity:0,
    stagger:0.15

})




gsap.from("#page2 #box-left",{
   
    delay:2,
    duration:5,
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:" #box",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2,
        
    }
})
gsap.from("#page2 #box",{
   
    delay:2,
    duration:5,
    x:80,
    opacity:0,
    scrollTrigger:{
        trigger:" #box",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.from("#page2 #box-left1",{
   
    delay:2,
    duration:5,
    x:-70,
    opacity:0,
    scrollTrigger:{
        trigger:" #box-left1",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.from("#page2 #box2",{
   
    delay:2,
    duration:5,
    x:70,
    opacity:0,
    scrollTrigger:{
        trigger:" #box2",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.from("#page2 #box-left2",{
   
    delay:2,
    duration:5,
    x:-70,
    opacity:0,
    scrollTrigger:{
        trigger:" #box-left2",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})
gsap.from("#page2 #box3",{
   
    delay:2,
    duration:5,
    x:70,
    opacity:0,
    scrollTrigger:{
        trigger:" #box3",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})

// About page


gsap.from("#page3 #img-left",{
   
    delay:2,
    duration:5,
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:" #img-left",
        scroller:"body",   
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})

gsap.from("#page3 #text-right",{
   
    delay:2,
    duration:5,
    x:80,
    opacity:0,
    scrollTrigger:{
        trigger:" #img-left",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        
        scrub:2,
    }
})


gsap.from("#page4 #skills",{
   
    
    duration:0.8,
    x:80,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        
        start:"top 60%",
        end:"top 30%",
     
    }
})

gsap.from("#page4 .skills-left",{
   
    delay:2,
    duration:5,
    x:80,
    opacity:0,
    scrollTrigger:{
        trigger:" .skills-left",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        //markers:true,
        scrub:2,
    }
})
gsap.from("#page4 .skills",{
   
    delay:2,
    duration:5,
    x:-80,
    opacity:0,
    scrollTrigger:{
        trigger:" .skills",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        //markers:true,
        scrub:2,
    }
})
