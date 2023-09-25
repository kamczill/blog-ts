import { useEffect, useState } from "react";
import img from "./../../assets/state-view.png";
import {RiCheckFill} from 'react-icons/ri'
import { featurePostProps} from "../../types";
import { truncateToMaxWords } from "../../utils/textUtils";
import { Link } from "react-router-dom";


const FeaturePost = ({onImageLoad, title, avatarImg, author, date, coverImage, content, slug}: featurePostProps) => {
  const [excerpt, setExcerpt] = useState<string | null>(null)
  

  useEffect(() => {
    if (content){
      const extractedValue = content.json.content[0].content[0].value || null;
      setExcerpt(extractedValue)
    }
  }, [content])

  return (
    <div className="flex flex-col gap-2 p-5 mx-6 shadow-md max-w-[1000px] rounded-md bg-white lg:flex-row lg:p-0 feature-post">
      <div className="hidden w-full h-full lg:flex lg:max-w-1/2 lg:h-full lg:object-contain">
        <img src={coverImage} className=" max-h-[300px] rounded-bl-lg rounded-tl-lg" alt={title} onLoad={onImageLoad} />
      </div>
      <div className="bg-white rounded-md shadow-r-md flex flex-col justify-center gap-5 lg:pr-5">
        <div className="flex flex-col gap-2 lg:gap-4 ">
          <div className=" mb-4 lg:hidden">
            <img src={img} className="w-full rounded-lg" />
          </div>
          <div className="p-1 bg-[#EBF8F3] text-[#1565D8] font-bold rounded-3xl text-xs max-w-[90px] flex justify-center">
            FEATURED
          </div>
          <h3 className="font-bold text-xl text-[#183B56] hover:underline">
            <Link to={`/posts/${slug}`}>{title}</Link>
          </h3>
          <p className="font-os text-[#5A7184]">
            {excerpt ? truncateToMaxWords(excerpt, 40): ''}
          </p>
        </div>
        <div className="w-full flex justify-between text-[#5A7184] pr-5">
          <div className="flex gap-2 w-full">
            <div className="object-cover">
              <img src={avatarImg} className="w-[50px] h-[50px] object-cover rounded-full"/>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold text-[#183B56]">Viola Manisa</h4>
              <div className="flex items-center gap-2">
                <div className="bg-[#E1F4EC] rounded-full p-[2px]">
                  <RiCheckFill className='text-[#36B37E]' size={15} />
                </div>
                <p className="text-[#5A7184]">Verified</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="whitespace-nowrap">02 May</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePost;
