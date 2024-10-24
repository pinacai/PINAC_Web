import React from "react";

interface TruncateTextProps {
  text: string;
  maxWidth?: string;
  className?: string;
}

const styles = {
  container: {
    display: "inline-block",
    maxWidth: "100%",
    backgroundColor: "transparent",
  },
  text: {
    display: "inline-block",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    fontSize: "16px",
    color: "#9ca3af",
    letterSpacing: "0.5px",
  },
} as const;

const TruncateText: React.FC<TruncateTextProps> = ({
  text,
  maxWidth = "200px",
}: TruncateTextProps) => {
  return (
    <div style={{ ...styles.container, maxWidth }}>
      <span style={styles.text}>{text}</span>
    </div>
  );
};

export default TruncateText;
