import gsap from "gsap"

export const imageAnim = (image) => {
  const tl = gsap.timeline();

  tl.set(image.current, {
    scale: .3,
    clipPath: 'inset(100% 0% 10% 0%)',
    backgroundSize: '100%',
  });
  
  tl.to(image.current, {
    clipPath: 'inset(0% 0% 0% 0%)',
    // clipPath: 'inset(0% 15% 0% 15%)',
    backgroundSize: '110%',
    duration: 2,
    delay: 2,
    ease: "expo.inOut",
  })
  tl.to(image.current, {
    backgroundSize: '100%',
    duration: 1.2,
    delay: 1,
    scale: 1,
    ease: "expo.inOut",
  })
  

  return tl;
}

export const progressAnim = (bar, num, wrapper) => {
  const tl = gsap.timeline();

  tl
  .to(bar.current, {
    scaleX: 1,
    duration: 5,
    ease: 'power3.inOut',
  })
  .to(
    num.current,
    {
      textContent: "100",
      duration: 5,
      delay: .5,
      roundProps: "textContent",
    },
    "<"
  )
  .to(wrapper.current, {
    yPercent: 100,
    duration: .9,
    ease: 'power3.inOut',

  })

  return tl;
}