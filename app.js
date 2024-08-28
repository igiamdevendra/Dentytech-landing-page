let images = document.querySelectorAll('img');
images = Array.from(images).reverse();
const tl = gsap.timeline({delay: 1});


images.forEach((image) => {
    let prevRotation = gsap.getProperty(image, 'rotation')
    tl.to(image, {
        rotate: prevRotation - 10,
        duration: 0.3
    })
    .to(image, {
        y: -600,
        duration: .7
    })
})

gsap.from('.hello', {
    y: 200,
    duration: 1
})

gsap.from('#nav div', {
    y: -50,
    duration: 1
})

gsap.from('#btm-left, #btm-right', {
    y: 50,
    duration: 1
})