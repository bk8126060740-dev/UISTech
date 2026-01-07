import { Box, CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import './commonUiComponents.css';

/* ================= HEADINGS ================= */

export const Heading = ({ children, className, ...props }) => (
  <Typography variant="h1" className={className} {...props}>
    {children}
  </Typography>
);

export const SubHeading = ({ children, className, ...props }) => (
  <Typography variant="h2" className={className} {...props}>
    {children}
  </Typography>
);

export const SubHeading3 = ({ children, className, ...props }) => (
  <Typography variant="h3" className={className} {...props}>
    {children}
  </Typography>
);

export const SubHeading4 = ({ children, className, ...props }) => (
  <Typography variant="h4" className={className} {...props}>
    {children}
  </Typography>
);

export const SubHeading5 = ({ children, className, ...props }) => (
  <Typography variant="h5" className={className} {...props}>
    {children}
  </Typography>
);

export const SubHeading6 = ({ children, className, ...props }) => (
  <Typography variant="h6" className={className} {...props}>
    {children}
  </Typography>
);

export const Paragraph = ({ children, className, ...props }) => (
  <Typography variant="body2" className={className} {...props}>
    {children}
  </Typography>
);

/* ================= CONTAINER ================= */
/*
  🔥 IMPORTANT:
  - Parent components se `spacing={false}` aa raha tha
  - Box spacing prop support nahi karta
  - Isliye yahan spacing ko FILTER kar diya
*/

export const ContainedSpace = ({
  children,
  className,
  id,
  onClick,
  sx,
  style,
  component,
}) => {
  // sx ke andar se bhi false spacing hatao
  let safeSx = sx;
  if (sx && typeof sx === "object") {
    safeSx = Object.fromEntries(
      Object.entries(sx).filter(([_, value]) => value !== false)
    );
  }

  return (
    <Box
      className={`side-x-spacing ${className || ""}`}
      id={id}
      onClick={onClick}
      component={component}
      sx={safeSx}
      style={style}
    >
      {children}
    </Box>
  );
};


/* ================= BUTTON ================= */

export const CustomizeBtn = ({ title, loading, ...props }) => {
  const isLoading = Boolean(loading);

  return (
    <Button
      variant="outlined"
      className={`CustomizeBtn ${isLoading ? 'disabled' : ''}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        title
      )}
    </Button>
  );
};
