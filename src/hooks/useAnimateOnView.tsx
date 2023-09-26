import { useEffect } from 'react'
import { useAnimate, useInView  } from 'framer-motion';

const useAnimateOnView = () => {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {margin: "-20% 0px 0px 0px", once: true})

    useEffect(()=>{
        if (isInView) {
            animate(scope.current, { opacity: [.5, 1], y: ["30%", "0%"]}, {ease: "easeIn", duration: .6} )
        }
    },[isInView])

  return [scope]
}

export default useAnimateOnView