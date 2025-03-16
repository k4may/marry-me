import { ReactNode } from "react";

interface IconCircleProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

const IconCircle = ({ icon, label, onClick, href }: IconCircleProps) => {
  const content = (
    <div
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        backgroundColor: "#D1C4E9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#4A148C",
        fontSize: label.length > 10 ? "13px" : "16px",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={onClick}
    >
      {icon}
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          id="circlePath"
          d="M 50, 50
             m -37, 0
             a 37,37 0 1,1 74,0
             a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text
          fill="#4A148C"
          fontSize={label.length > 13 ? "13px" : "16px"}
          fontFamily="Arial, sans-serif"
        >
          <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
            {label}
          </textPath>
        </text>
      </svg>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

export default IconCircle;
