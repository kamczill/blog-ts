import React, {useState} from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import FeaturePost from './homepage/FeaturePost'
import {RiArrowRightFill, RiArrowLeftFill} from 'react-icons/ri'


const Gallery = () => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })


  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide">
            <FeaturePost />
          </div>
          
          <div className="keen-slider__slide">
            <FeaturePost />
          </div>
          
          <div className="keen-slider__slide">
            <FeaturePost />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Gallery


function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? " fill-gray-400" : ""
    return (
      <div onClick={props.onClick} className={`arrow__container ${
        props.left ? "arrow--left" : "arrow--right"
        } `}>
                {props.left && (
                <RiArrowLeftFill size={25} className={`text-black arrow ${disabeld}`} />
                )}
                {!props.left && (
                <RiArrowRightFill size={25} className={`text-black arrow ${disabeld}`}/>
                )}
      </div>
    )
  }
  