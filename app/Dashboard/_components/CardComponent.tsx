"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";

type Detail = {
  label: string;
  value: string;
};

interface CardComponentProps {
  title: string;
  percentage: number;
  isPositive: boolean;
  details: Detail[];
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  percentage,
  isPositive,
  details,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [extraHeight, setExtraHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  const extraDetails = details.slice(2);

  const totalAmount = details
    .map((detail) => parseFloat(detail.value)) 
    .reduce((acc, curr) => acc + curr, 0) 
    .toFixed(2); 


  useEffect(() => {
    if (contentRef.current) {
      setExtraHeight(expanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [expanded]);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-fit"
    >
      <CardBody>
        <p className="text-2xl">{title}:</p>
        <div className="flex items-center justify-between w-3/4">
          <h2 className="text-4xl my-3">{totalAmount}K</h2>
          <div
            className={`rounded-md p-1 flex items-center gap-1 text-xs ml-5 ${
              isPositive
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {percentage}%
            {isPositive ? (
              <FaCaretSquareUp className="text-sm" />
            ) : (
              <FaCaretSquareDown className="text-sm" />
            )}
          </div>
        </div>

        <div className=" text-gray-400">
          {details.slice(0, 2).map((detail) => (
            <h4 className="w-3/4 flex justify-between" key={detail.label}>
              {detail.label}: <span>{detail.value}</span>
            </h4>
          ))}
        </div>

        {extraDetails.length > 0 && (
          <div>
            <div
              ref={contentRef}
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ height: extraHeight }}
            >
              <div className=" text-gray-400">
                {extraDetails.map((detail) => (
                  <h4 className="w-3/4 flex justify-between" key={detail.label}>
                    {detail.label}: <span>{detail.value}</span>
                  </h4>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
