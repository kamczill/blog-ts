import React, {useState, useEffect} from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import FeaturePost from './homepage/FeaturePost'
import {RiArrowRightFill, RiArrowLeftFill} from 'react-icons/ri'
import { BlogPost } from '../types'

// Your component's props type
interface MyComponentProps {
  slides: {
    __typename: string;
    total: number;
    items: BlogPost[];
  }
}


const Gallery = ({slides}: MyComponentProps) => {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [imagesLoaded, setImagesLoaded] = useState<number>(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      initial: 1,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(false)
      },
      updated() {
        setLoaded(true)
      }
    })

    const handleImageLoad: () => void = () => {
      setImagesLoaded((prev) => prev + 1);
    };

    useEffect(()=>{
      if(imagesLoaded === 3) setLoaded(true)
    },[imagesLoaded])


  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {
            slides?.items.map((item: any) => (
              <div key={item.slug} className="keen-slider__slide">
                <FeaturePost 
                  title={item.title}
                  slug={item.slug}
                  avatarImg={item.author.avatar.url}
                  author={`${item.author.avatar.name} ${item.author.avatar.surname}`}
                  date={item.date}
                  coverImage={item.coverImage.url}
                  content={item.content}
                  onImageLoad={handleImageLoad}
                />
              </div>
            ))
          }

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
                (instanceRef?.current.track.details?.slides?.length || 0) - 1
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
  