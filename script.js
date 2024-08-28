gsap.from('.hello', {
    y: 1000, duration : 2
})


let images = document.querySelectorAll('img')
let tl = gsap.timeline({ delay: 2 })
images = Array.from(images).reverse();

images.forEach(image=>{
    let prevRotation = (gsap.getProperty(image, "rotation"))
    tl.to(image, {
        rotate : prevRotation - 10, 
        duration: 0.3,
    }, 'fdsf')
    
    tl.to(image,{
        y: "-200%",
        duration: .7
    })
})


