"use client";

import SvgIcon from "@/assests/icons/SvgIcon";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import { Paragraph, SubHeading } from "../commonUiComponents/commonUiComponents";
import "./BreadCrumsSlide.css";

const BreadCrumsSlide = ({ image, title, icon, description }) => {
  return (
    <Box className="BredcrumsSlide">
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt="breadcrumb-background"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      )}

      <Container maxWidth="xl">
        <Box className="textBox">
          <Box className="bread-wrapper">
            {icon ? <SvgIcon name={icon} /> : null}

            {title ? <SubHeading>{title}</SubHeading> : null}

            {description ? <Paragraph>{description}</Paragraph> : null}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BreadCrumsSlide;
